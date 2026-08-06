import { inject } from '@angular/core';
import { Router, CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { firstValueFrom, catchError, of } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { ToastService } from '../services/toast.service';

export const authGuard: CanActivateFn = async (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // Nếu RAM token rỗng (F5/Khởi động lại), thử khôi phục phiên từ HTTP-Only Cookie
  if (!authService.isAuthenticated()) {
    try {
      await firstValueFrom(authService.refreshToken().pipe(catchError(() => of(null))));
    } catch {
      // ignore
    }
  }

  if (authService.isAuthenticated()) {
    return true;
  }

  router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
  return false;
};

export const roleGuard = (allowedRoles: string[]): CanActivateFn => {
  return async (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const authService = inject(AuthService);
    const router = inject(Router);

    if (!authService.isAuthenticated()) {
      try {
        await firstValueFrom(authService.refreshToken().pipe(catchError(() => of(null))));
      } catch {
        // ignore
      }
    }

    if (!authService.isAuthenticated()) {
      router.navigate(['/login']);
      return false;
    }

    const userRoles = authService.authState().roles || [];

    if (allowedRoles.some(allowedRole =>
      userRoles.some((userRole: string) =>
        userRole === allowedRole ||
        userRole === `ROLE_${allowedRole}` ||
        userRole.endsWith(`_${allowedRole}`)
      )
    )) {
      return true;
    }

    router.navigate(['/unauthorized']);
    return false;
  };
};

/**
 * Guard kiểm tra quyền (permission) thay vì role.
 * Khôi phục RAM session nếu rỗng, sau đó reload permissions mới nhất từ Backend.
 */
export const permissionGuard = (requiredPermissions: string[]): CanActivateFn => {
  return async (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const authService = inject(AuthService);
    const router = inject(Router);

    // Nếu RAM token rỗng (F5), khôi phục phiên qua HTTP-Only Cookie
    if (!authService.isAuthenticated()) {
      try {
        await firstValueFrom(authService.refreshToken().pipe(catchError(() => of(null))));
      } catch {
        // ignore
      }
    }

    if (!authService.isAuthenticated()) {
      router.navigate(['/login']);
      return false;
    }

    // Luôn reload permissions từ server vào RAM để đảm bảo dữ liệu mới nhất
    await firstValueFrom(
      authService.reloadPermissions().pipe(catchError(() => of(null)))
    );

    if (authService.hasAnyPermission(requiredPermissions)) {
      return true;
    }

    router.navigate(['/unauthorized']);
    return false;
  };
};

export const publicGuard: CanActivateFn = async (route: ActivatedRouteSnapshot) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // Nếu bị buộc đăng xuất từ tab khác -> Bỏ qua khôi phục session, giữ người dùng ở trang đăng nhập
  if (route.queryParams['loggedOut'] === 'true') {
    return true;
  }

  // Nếu đang ở màn /login mà có Cookie phiên làm việc, thử nạp vào RAM
  if (!authService.isAuthenticated()) {
    try {
      await firstValueFrom(authService.refreshToken().pipe(catchError(() => of(null))));
    } catch {
      // ignore
    }
  }

  if (authService.isAuthenticated()) {
    const roles = authService.authState().roles;
    const hasRole = (role: string) => roles.some(r => r === role || r === `ROLE_${role}` || r.endsWith(`_${role}`));

    if (hasRole('ADMIN') || hasRole('SYSTEM_ADMIN')) {
      router.navigate(['/admin']);
    } else if (hasRole('ACADEMIC') || hasRole('TRAINING')) {
      router.navigate(['/academic']);
    } else if (roles.some(r => r.includes('TEACHER'))) {
      router.navigate(['/teacher']);
    } else if (hasRole('STUDENT')) {
      router.navigate(['/student']);
    } else {
      router.navigate(['/unauthorized']);
    }
    return false;
  }

  return true;
};
