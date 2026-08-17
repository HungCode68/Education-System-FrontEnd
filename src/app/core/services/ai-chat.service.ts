import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

export interface ChatRequest {
  message: string;
  sessionId?: number;
}

export interface ChatSourceDto {
  chunkId: number;
  documentId: number;
  title: string;
  chunkIndex: number;
  similarityScore: number;
}

export interface ChatResponse {
  sessionId: number;
  answer: string;
  sources: ChatSourceDto[];
}

export interface AiChatSessionDto {
  id: number;
  title: string;
  status: string;
  updatedAt: string;
}

export interface AiChatMessageDto {
  id: number;
  sessionId: number;
  role: 'USER' | 'AI';
  content: string;
  createdAt: string;
}

@Injectable({
  providedIn: 'root'
})
export class AiChatService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/ai/chat`;

  chat(request: ChatRequest): Observable<ChatResponse> {
    return this.http.post<ChatResponse>(this.apiUrl, request);
  }

  getSessions(): Observable<AiChatSessionDto[]> {
    return this.http.get<AiChatSessionDto[]>(`${this.apiUrl}/sessions`);
  }

  getSessionMessages(sessionId: number): Observable<AiChatMessageDto[]> {
    return this.http.get<AiChatMessageDto[]>(`${this.apiUrl}/sessions/${sessionId}/messages`);
  }
}
