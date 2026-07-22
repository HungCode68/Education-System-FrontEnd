import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AuthState, LoginRequest, LoginResponse } from '../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly apiUrl = environment.apiUrl;

  readonly authState = signal<AuthState>(this.loadInitialState());

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  login(credentials: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/api/auth/login`, credentials, {
      withCredentials: true
    }).pipe(
      tap((res) => {
        const newState: AuthState = {
          fullName: res.fullName,
          roles: res.roles || [],
          permissions: res.permissions || [],
          isAuthenticated: true
        };
        this.authState.set(newState);
        localStorage.setItem('user_info', JSON.stringify(newState));
      })
    );
  }

  logout(): void {
    this.http.post(`${this.apiUrl}/api/auth/logout`, {}, { withCredentials: true }).subscribe({
      next: () => this.clearStateAndRedirect(),
      error: () => this.clearStateAndRedirect()
    });
  }

  clearState(): void {
    localStorage.removeItem('user_info');
    localStorage.removeItem('accessToken'); // Xóa key cũ nếu còn tồn tại
    this.authState.set({
      fullName: null,
      roles: [],
      permissions: [],
      isAuthenticated: false
    });
  }

  private clearStateAndRedirect(): void {
    this.clearState();
    this.router.navigate(['/login']);
  }

  private loadInitialState(): AuthState {
    const saved = localStorage.getItem('user_info');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        // Fallback nếu parse lỗi
      }
    }
    return {
      fullName: null,
      roles: [],
      permissions: [],
      isAuthenticated: false
    };
  }
}