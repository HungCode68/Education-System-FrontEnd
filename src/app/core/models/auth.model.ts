export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  message?: string;
  fullName: string;
  roles: string[];
  permissions: string[];
}

export interface AuthState {
  fullName: string | null;
  roles: string[];
  permissions: string[];
  isAuthenticated: boolean;
}

export interface RefreshTokenRequest {
  refreshToken: string;
}

