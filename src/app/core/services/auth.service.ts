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
  isAuthenticated(): boolean {
    return this.authState().isAuthenticated;
  } 
  readonly authState = signal<AuthState>(this.loadInitialState());

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  login(credentials: LoginRequest): Observable<LoginResponse> {
  return this.http.post<LoginResponse>(`${this.apiUrl}/api/v1/auth/login`, credentials, {
    withCredentials: true
  }).pipe(
    tap((res) => {
      const newState: AuthState = {
        fullName: res.fullName,
        email: credentials.email, // Lưu email từ request
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
    this.http.post(`${this.apiUrl}/api/v1/auth/logout`, {}, { withCredentials: true }).subscribe({
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
  try {
    const saved = localStorage.getItem('user_info');
    if (saved && saved !== 'undefined' && saved !== 'null') {
      return JSON.parse(saved);
    }
  } catch (e) {
    console.error('Lỗi parse user_info từ localStorage:', e);
  }
  
  return {
    fullName: null,
    email: null,
    roles: [],
    permissions: [],
    isAuthenticated: false
  };
}
}