import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, NavigationEnd } from '@angular/router';
import { Observable, tap, catchError, of } from 'rxjs';
import { filter } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { AuthState, LoginRequest, LoginResponse } from '../models/auth.model';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly apiUrl = environment.apiUrl;

  // Access Token và thông tin User CHỈ LƯU TRONG RAM (Memory), không lưu localStorage/sessionStorage
  private accessToken: string | null = null;

  // Kênh tín hiệu vô hại giữa các tab (Chỉ lưu timestamp, không chứa dữ liệu nhạy cảm)
  private readonly AUTH_EVENT_KEY = 'auth_event';

  readonly authState = signal<AuthState>(this.loadInitialState());

  isAuthenticated(): boolean {
    return this.authState().isAuthenticated;
  }

  setAccessToken(token: string | null) {
    this.accessToken = token;
  }

  getAccessToken(): string | null {
    return this.accessToken;
  }

  constructor(
    private http: HttpClient,
    private router: Router,
    private toastService: ToastService
  ) {
    // Tự động đồng bộ quyền khi thay đổi route nếu đã xác thực
    this.router.events.pipe(
      filter((e: any): e is NavigationEnd => e instanceof NavigationEnd)
    ).subscribe(() => {
      if (this.isAuthenticated()) {
        this.reloadPermissions().subscribe();
      }
    });

    // Lắng nghe tín hiệu vô hại từ localStorage giữa các tab
    if (typeof window !== 'undefined') {
      window.addEventListener('storage', (event: StorageEvent) => {
        if (event.key === this.AUTH_EVENT_KEY && event.newValue) {
          try {
            const data = JSON.parse(event.newValue);
            if (data.action === 'LOGIN') {
              this.clearStateAndRedirect('Tài khoản đã đăng nhập ở tab khác. Vui lòng đăng nhập lại.');
            } else if (data.action === 'LOGOUT') {
              this.clearStateAndRedirect('Tài khoản đã đăng xuất từ tab khác.');
            }
          } catch (e) {
            this.clearStateAndRedirect();
          }
        }
      });
    }
  }

  login(credentials: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/api/v1/auth/login`, credentials, {
      withCredentials: true
    }).pipe(
      tap((res: any) => {
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
        localStorage.setItem(this.AUTH_EVENT_KEY, JSON.stringify({ action: 'LOGIN', timestamp: Date.now() }));
      })
    );
  }

  /**
   * Khôi phục phiên đăng nhập từ HTTP-Only Cookie vào RAM
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
        const data = res?.data || res;
        if (data?.roles || data?.permissions) {
          const current = this.authState();
          const newState: AuthState = {
            ...current,
            fullName: data.fullName || current.fullName,
            email: data.email || current.email,
            roles: data.roles || current.roles,
            permissions: data.permissions || current.permissions,
            isAuthenticated: true
          };
          this.authState.set(newState);
        }
      })
    );
  }

  /**
   * Đồng bộ lại quyền hạn người dùng từ Backend vào RAM
   */
  reloadPermissions(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/api/v1/auth/me`).pipe(
      tap((res: any) => {
        if (res) {
          const current = this.authState();
          const newState: AuthState = {
            ...current,
            fullName: res.fullName || current.fullName,
            email: res.email || current.email,
            roles: res.roles || current.roles,
            permissions: res.permissions || current.permissions,
            isAuthenticated: true
          };
          this.authState.set(newState);
        }
      }),
      catchError(() => of(null))
    );
  }

  // --- Dynamic RBAC Helper Methods ---

  private getPermissionAliases(perm: string): string[] {
    const aliases = [perm];
    if (perm.startsWith('COURSES_')) {
      aliases.push(perm.replace('COURSES_', 'COURSE_'));
    } else if (perm.startsWith('COURSE_')) {
      aliases.push(perm.replace('COURSE_', 'COURSES_'));
    }
    if (perm.startsWith('TEACHING_')) {
      aliases.push(perm.replace('TEACHING_', 'ASSIGNMENT_'));
    } else if (perm.startsWith('ASSIGNMENT_')) {
      aliases.push(perm.replace('ASSIGNMENT_', 'TEACHING_'));
    }
    if (perm.startsWith('MATERIAL_')) {
      aliases.push(perm.replace('MATERIAL_', 'LEARNING_MATERIAL_'));
    } else if (perm.startsWith('LEARNING_MATERIAL_')) {
      aliases.push(perm.replace('LEARNING_MATERIAL_', 'MATERIAL_'));
    }
    return aliases;
  }

  hasPermission(permission: string): boolean {
    const state = this.authState();
    if (!state.isAuthenticated) return false;
    const userPerms = state.permissions || [];
    const aliases = this.getPermissionAliases(permission);
    return aliases.some(alias => userPerms.includes(alias));
  }

  hasAnyPermission(permissions: string[]): boolean {
    if (!permissions || permissions.length === 0) return true;
    const state = this.authState();
    if (!state.isAuthenticated) return false;
    const userPerms = state.permissions || [];
    return permissions.some(p => {
      const aliases = this.getPermissionAliases(p);
      return aliases.some(alias => userPerms.includes(alias));
    });
  }

  hasAllPermissions(permissions: string[]): boolean {
    if (!permissions || permissions.length === 0) return true;
    const state = this.authState();
    if (!state.isAuthenticated) return false;
    const userPerms = state.permissions || [];
    return permissions.every(p => {
      const aliases = this.getPermissionAliases(p);
      return aliases.some(alias => userPerms.includes(alias));
    });
  }

  hasRole(role: string): boolean {
    const state = this.authState();
    if (!state.isAuthenticated) return false;
    return state.roles.includes(role) || state.roles.includes(`ROLE_${role}`);
  }

  hasAnyRole(roles: string[]): boolean {
    if (!roles || roles.length === 0) return true;
    const state = this.authState();
    if (!state.isAuthenticated) return false;
    return roles.some(r => state.roles.includes(r) || state.roles.includes(`ROLE_${r}`));
  }

  logout(): void {
    localStorage.setItem(this.AUTH_EVENT_KEY, JSON.stringify({ action: 'LOGOUT', timestamp: Date.now() }));
    this.http.post(`${this.apiUrl}/api/v1/auth/logout`, {}, { withCredentials: true }).subscribe({
      next: () => this.clearStateAndRedirect(),
      error: () => this.clearStateAndRedirect()
    });
  }

  clearState(): void {
    this.accessToken = null;
    this.authState.set({
      fullName: null,
      email: null,
      roles: [],
      permissions: [],
      isAuthenticated: false
    });
  }

  private clearStateAndRedirect(notifyMessage?: string): void {
    this.clearState();
    if (notifyMessage) {
      this.toastService.warning('Phiên làm việc kết thúc', notifyMessage);
    }
    this.router.navigate(['/login'], { queryParams: { loggedOut: 'true' } });
  }

  private loadInitialState(): AuthState {
    return {
      fullName: null,
      email: null,
      roles: [],
      permissions: [],
      isAuthenticated: false
    };
  }
}