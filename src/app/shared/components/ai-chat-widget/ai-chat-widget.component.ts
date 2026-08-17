import { Component, signal, inject, ElementRef, ViewChild, AfterViewChecked } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AiChatService, ChatRequest, ChatResponse, AiChatSessionDto, AiChatMessageDto } from '../../../core/services/ai-chat.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

interface ChatMessage {
  role: 'USER' | 'AI';
  content: string;
}

@Component({
  selector: 'app-ai-chat-widget',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ai-chat-widget.component.html',
  styleUrls: ['./ai-chat-widget.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translateY(0)',
        opacity: 1,
        visibility: 'visible'
      })),
      state('out', style({
        transform: 'translateY(20px)',
        opacity: 0,
        visibility: 'hidden'
      })),
      transition('in => out', animate('200ms ease-in')),
      transition('out => in', animate('200ms ease-out'))
    ])
  ]
})
export class AiChatWidgetComponent implements AfterViewChecked {
  private chatService = inject(AiChatService);

  isOpen = signal(false);
  messages = signal<ChatMessage[]>([]);
  inputText = signal('');
  isLoading = signal(false);
  sessionId = signal<number | null>(null);

  // History state
  sessions = signal<AiChatSessionDto[]>([]);
  isSidebarOpen = signal(false);

  @ViewChild('chatScrollContainer') private chatScrollContainer!: ElementRef;

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  toggleChat() {
    this.isOpen.update(val => !val);
    if (this.isOpen()) {
      this.loadSessions();
      if (this.messages().length === 0 && !this.sessionId()) {
        this.startNewChat();
      }
    }
  }

  loadSessions() {
    this.chatService.getSessions().subscribe({
      next: (data) => this.sessions.set(data),
      error: (err: any) => console.error('Error loading sessions', err)
    });
  }

  toggleSidebar() {
    this.isSidebarOpen.update(v => !v);
  }

  startNewChat() {
    this.sessionId.set(null);
    this.messages.set([
      { role: 'AI', content: 'Xin chào! Mình là trợ lý học tập AI. Mình có thể giúp gì cho bạn hôm nay?' }
    ]);
    this.isSidebarOpen.set(false);
  }

  loadSession(session: AiChatSessionDto) {
    this.sessionId.set(session.id);
    this.isSidebarOpen.set(false);
    this.isLoading.set(true);
    this.messages.set([]); // clear while loading

    this.chatService.getSessionMessages(session.id).subscribe({
      next: (data) => {
        const msgs = data.map(m => ({ role: m.role, content: m.content } as ChatMessage));
        this.messages.set(msgs);
        this.isLoading.set(false);
      },
      error: (err: any) => {
        console.error('Error loading messages', err);
        this.isLoading.set(false);
      }
    });
  }

  sendMessage() {
    const text = this.inputText().trim();
    if (!text || this.isLoading()) return;

    // Add user message
    this.messages.update(msgs => [...msgs, { role: 'USER', content: text }]);
    this.inputText.set('');
    this.isLoading.set(true);

    const req: ChatRequest = {
      message: text,
      sessionId: this.sessionId() || undefined
    };

    this.chatService.chat(req).subscribe({
      next: (res: ChatResponse) => {
        this.sessionId.set(res.sessionId);
        this.messages.update(msgs => [...msgs, { role: 'AI', content: res.answer }]);
        this.isLoading.set(false);
        this.loadSessions(); // Reload sessions to update the list
      },
      error: (err: any) => {
        console.error('Chat error', err);
        this.messages.update(msgs => [...msgs, { role: 'AI', content: 'Xin lỗi, hệ thống đang bận. Vui lòng thử lại sau.' }]);
        this.isLoading.set(false);
      }
    });
  }

  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.sendMessage();
    }
  }

  private scrollToBottom(): void {
    try {
      if (this.chatScrollContainer) {
        this.chatScrollContainer.nativeElement.scrollTop = this.chatScrollContainer.nativeElement.scrollHeight;
      }
    } catch(err) { }
  }
}
