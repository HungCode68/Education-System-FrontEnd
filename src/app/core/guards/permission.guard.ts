import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToastService } from '../services/toast.service';

export function permissionGuard(requiredPermissions: string[]): CanActivateFn {
  return () => {
    const authService = inject(AuthService);
    const router = inject(Router);
    const toastService = inject(ToastService);

    if (!authService.isAuthenticated()) {
      router.navigate(['/login']);
      return false;
    }

    if (authService.hasAnyPermission(requiredPermissions)) {
      return true;
    }

    toastService.error('Truy cập bị từ chối', 'Tài khoản của bạn không có quyền thực thi chức năng này.');
    
    // Redirect to default role dashboard if permission check fails
    const state = authService.authState();
    if (state.roles.includes('TEACHER')) {
      router.navigate(['/teacher/classes']);
    } else if (state.roles.includes('STUDENT')) {
      router.navigate(['/student/classes']);
    } else {
      router.navigate(['/admin/dashboard']);
    }

    return false;
  };
}
