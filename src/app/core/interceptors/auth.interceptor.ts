import { HttpInterceptorFn, HttpErrorResponse, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, switchMap, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { ToastService } from '../services/toast.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const toastService = inject(ToastService);

  // Attach withCredentials (cookies) and Bearer token
  const authReq = attachToken(req, authService.getAccessToken());

  return next(authReq).pipe(
    catchError((error: HttpErrorResponse) => {
      const isAuthExempt = req.url.includes('/api/v1/auth/login') ||
                           req.url.includes('/api/v1/auth/refresh-token') ||
                           req.url.includes('/api/v1/auth/logout');

      // 403 Forbidden: Permissions changed or revoked in backend
      if (error.status === 403 && !isAuthExempt) {
        toastService.error('Truy cập bị từ chối', 'Quyền hạn tài khoản của bạn đã thay đổi. Hệ thống đang tự động cập nhật giao diện...');
        authService.reloadPermissions().subscribe();
      }

      // 401 Unauthorized: Attempt token refresh (including for /api/v1/auth/me)
      if (error.status === 401 && !isAuthExempt) {
        return authService.refreshToken().pipe(
          switchMap((res: any) => {
            const newToken = res?.accessToken || res?.data?.accessToken;
            if (newToken) {
              return next(attachToken(req, newToken));
            }
            authService.clearState();
            router.navigate(['/login']);
            return throwError(() => error);
          }),
          catchError((refreshError) => {
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