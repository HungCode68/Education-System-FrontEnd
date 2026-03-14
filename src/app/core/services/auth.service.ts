import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap, catchError, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { LoginRequest, LoginResponse, RefreshTokenRequest, AuthState } from '../models/auth.model';

const STORAGE_KEYS = {
  ACCESS_TOKEN: 'accessToken',
  REFRESH_TOKEN: 'refreshToken',
  USER_ID: 'userId',
  EMAIL: 'email',
  ROLES: 'roles',
  PERMISSIONS: 'permissions'
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private router = inject(Router);
  private apiUrl = `${environment.apiUrl}/api/auth`;

  authState = signal<AuthState>(this.initializeAuthState());

  private initializeAuthState(): AuthState {
    const accessToken = localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);
    const refreshToken = localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN);
    const id = localStorage.getItem(STORAGE_KEYS.USER_ID);
    const email = localStorage.getItem(STORAGE_KEYS.EMAIL);
    const roles = JSON.parse(localStorage.getItem(STORAGE_KEYS.ROLES) || '[]');
    const permissions = JSON.parse(localStorage.getItem(STORAGE_KEYS.PERMISSIONS) || '[]');

    return {
      accessToken,
      refreshToken,
      id,
      email,
      roles,
      permissions,
      isAuthenticated: !!accessToken
    };
  }

  login(email: string, password: string): Observable<LoginResponse> {
    const request: LoginRequest = { email, password };
    return this.http.post<LoginResponse>(`${this.apiUrl}/signin`, request).pipe(
      tap(response => this.setAuthState(response)),
      catchError(error => {
        throw error;
      })
    );
  }

  refreshToken(): Observable<LoginResponse> {
    const refreshToken = this.authState().refreshToken;
    if (!refreshToken) {
      return of(null as any);
    }

    const request: RefreshTokenRequest = { refreshToken };
    return this.http.post<LoginResponse>(`${this.apiUrl}/refresh-token`, request).pipe(
      tap(response => this.setAuthState(response)),
      catchError(() => {
        this.logout();
        return of(null as any);
      })
    );
  }

  logout(): void {
    localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
    localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN);
    localStorage.removeItem(STORAGE_KEYS.USER_ID);
    localStorage.removeItem(STORAGE_KEYS.EMAIL);
    localStorage.removeItem(STORAGE_KEYS.ROLES);
    localStorage.removeItem(STORAGE_KEYS.PERMISSIONS);

    this.authState.set({
      accessToken: null,
      refreshToken: null,
      id: null,
      email: null,
      roles: [],
      permissions: [],
      isAuthenticated: false
    });

    this.router.navigate(['/login']);
  }

  getAccessToken(): string | null {
    return this.authState().accessToken;
  }

  getRefreshToken(): string | null {
    return this.authState().refreshToken;
  }

  isAuthenticated(): boolean {
    return this.authState().isAuthenticated;
  }

  hasRole(role: string): boolean {
    const roles = this.authState().roles;
    return roles.some(r => r === role || r === `ROLE_${role}` || r.endsWith(`_${role}`));
  }

  hasPermission(permission: string): boolean {
    return this.authState().permissions.includes(permission);
  }

  private setAuthState(response: LoginResponse): void {
    // Parse JWT token để lấy roles nếu không có trong response
    let roles = response.roles || [];
    let email = response.email || '';
    let id = response.id || '';

    if (response.accessToken && (!roles.length || !email)) {
      try {
        const decoded = this.decodeToken(response.accessToken);
        const decodedRoles = decoded.roles || decoded.role || decoded.authorities;
        if (!roles.length && decodedRoles) {
          roles = Array.isArray(decodedRoles) ? decodedRoles : [decodedRoles];
        }
        if (!email && decoded.email) {
          email = decoded.email;
        }
        if (!id && decoded.sub) {
          id = decoded.sub;
        }
      } catch (e) {
        // Token decode failed, use response values
      }
    }

    // Ensure roles are strictly strings, mapping from objects if necessary (e.g. Spring Boot authorities)
    const normalizedRoles = roles.map((r: any) => {
      if (typeof r === 'string') return r;
      if (r && typeof r === 'object') {
        return r.authority || r.role || r.name || JSON.stringify(r);
      }
      return String(r);
    });

    const authState: AuthState = {
      accessToken: response.accessToken,
      refreshToken: response.refreshToken,
      id,
      email,
      roles: normalizedRoles,
      permissions: response.permissions || [],
      isAuthenticated: true
    };

    this.authState.set(authState);

    localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, response.accessToken);
    localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, response.refreshToken);
    localStorage.setItem(STORAGE_KEYS.USER_ID, id);
    localStorage.setItem(STORAGE_KEYS.EMAIL, email);
    localStorage.setItem(STORAGE_KEYS.ROLES, JSON.stringify(normalizedRoles));
    localStorage.setItem(STORAGE_KEYS.PERMISSIONS, JSON.stringify(response.permissions || []));
  }

  private decodeToken(token: string): any {
    try {
      const parts = token.split('.');
      if (parts.length !== 3) {
        return {};
      }

      const decoded = JSON.parse(atob(parts[1]));
      return decoded;
    } catch (e) {
      return {};
    }
  }
}
