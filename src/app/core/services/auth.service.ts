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
  // Lưu token trên RAM (Private Variable) -> Tuyệt đối chống XSS ăn cắp
  private accessToken: string | null = null;

  isAuthenticated(): boolean {
    return this.authState().isAuthenticated;
  }
  readonly authState = signal<AuthState>(this.loadInitialState());

  setAccessToken(token: string) {
    this.accessToken = token;
  }

  getAccessToken(): string | null {
    return this.accessToken;
  }

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  login(credentials: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/api/v1/auth/login`, credentials, {
      withCredentials: true
    }).pipe(
      tap((res: any) => {
        // Backend trả về accessToken trong body (có thể nằm trong res hoặc res.data)
        const token = res?.accessToken || res?.data?.accessToken;
        if (token) {
          this.setAccessToken(token);
        }
        const data = res?.data || res;
        const newState: AuthState = {
          fullName: data?.fullName || null,
          email: credentials.email,
          roles: data?.roles || [],
          permissions: data?.permissions || [],
          isAuthenticated: true
        };
        this.authState.set(newState);
        // Chỉ lưu thông tin profile user (không phải token) vào localStorage
        localStorage.setItem('user_info', JSON.stringify(newState));
      })
    );
  }

  /**
   * Gọi backend refresh-token endpoint.
   * Backend đọc refreshToken từ HTTP-Only Cookie rồi trả về accessToken mới trong body.
   * Frontend lưu accessToken mới vào RAM.
   */
  refreshToken(): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/api/v1/auth/refresh-token`, {}, {
      withCredentials: true
    }).pipe(
      tap((res: any) => {
        const token = res?.accessToken || res?.data?.accessToken;
        if (token) {
          this.setAccessToken(token);
        }
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
    this.accessToken = null;
    this.authState.set({
      fullName: null,
      email: null,
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