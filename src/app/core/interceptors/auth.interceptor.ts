import { HttpInterceptorFn, HttpErrorResponse, HttpRequest, HttpHandlerFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, switchMap, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // Gắn withCredentials (để cookie được gửi kèm) và Bearer token nếu có
  const authReq = attachToken(req, authService.getAccessToken());

  return next(authReq).pipe(
    catchError((error: HttpErrorResponse) => {
      // Chỉ thử refresh khi gặp 401 VÀ không phải đang gọi các API auth
      if (error.status === 401 && !req.url.includes('/api/v1/auth/')) {
        // Gọi refresh-token (backend đọc refreshToken từ HTTP-Only Cookie)
        return authService.refreshToken().pipe(
          switchMap((res: any) => {
            const newToken = res?.accessToken || res?.data?.accessToken;
            if (newToken) {
              // Retry request gốc với access token mới
              return next(attachToken(req, newToken));
            }
            // Không lấy được token mới -> logout
            authService.clearState();
            router.navigate(['/login']);
            return throwError(() => error);
          }),
          catchError((refreshError) => {
            // Refresh token hết hạn hoặc không hợp lệ -> logout
            authService.clearState();
            router.navigate(['/login']);
            return throwError(() => refreshError);
          })
        );
      }

      return throwError(() => error);
    })
  );
};

function attachToken(req: HttpRequest<any>, token: string | null): HttpRequest<any> {
  let cloned = req.clone({ withCredentials: true });
  if (token) {
    cloned = cloned.clone({
      setHeaders: { Authorization: `Bearer ${token}` }
    });
  }
  return cloned;
}