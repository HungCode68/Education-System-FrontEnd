import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, switchMap, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const token = authService.getAccessToken();

  // Gắn Access Token vào Header của mọi Request gửi đi
  let authReq = req;
  if (token) {
    authReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`)
    });
  }

  // Gửi Request đi và lắng nghe phản hồi từ Server
  return next(authReq).pipe(
    catchError((error: HttpErrorResponse) => {
      // Nếu Server báo lỗi 401 (Token hết hạn hoặc không hợp lệ) và không phải đang gọi API Login
      if (error.status === 401 && !req.url.includes('/api/auth/signin')) {
        
        // Kích hoạt cơ chế tự động lấy Token mới (Refresh Token)
        return authService.refreshToken().pipe(
          switchMap((res) => {
            if (res && res.accessToken) {
              // Lấy được token mới thành công -> Gắn token mới vào request vừa bị lỗi và gọi lại API đó
              const newReq = req.clone({
                headers: req.headers.set('Authorization', `Bearer ${res.accessToken}`)
              });
              return next(newReq);
            }
            // Nếu không có kết quả trả về, ép đăng xuất
            authService.logout();
            return throwError(() => error);
          }),
          catchError((refreshErr) => {
            // Nếu Refresh Token cũng hết hạn nốt -> Bắt buộc người dùng đăng nhập lại
            authService.logout();
            return throwError(() => refreshErr);
          })
        );
      }

      // Các lỗi khác (400, 403, 500...) thì cứ ném ra bình thường
      return throwError(() => error);
    })
  );
};