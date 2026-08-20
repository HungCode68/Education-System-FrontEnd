import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastComponent } from './shared/components/toast/toast.component';
import { AiChatWidgetComponent } from './shared/components/ai-chat-widget/ai-chat-widget.component';
import { AuthService } from './core/services/auth.service';
import { AiChatService } from './core/services/ai-chat.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToastComponent, AiChatWidgetComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-app');
  public authService = inject(AuthService);
  public aiChatService = inject(AiChatService);
}
