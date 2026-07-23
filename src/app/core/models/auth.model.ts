export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  message?: string;
  fullName: string;
  roles: string[];
  permissions: string[];
  accessToken?: string;
}

export interface AuthState {
  fullName: string | null;
  email?: string | null; // Thêm trường email optional để tránh lỗi build
  roles: string[];
  permissions: string[];
  isAuthenticated: boolean;
}

export interface RefreshTokenRequest {
  refreshToken: string;
}

