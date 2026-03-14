import { Injectable, inject } from '@angular/core';
import { Router, CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isAuthenticated()) {
    return true;
  }

  router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
  return false;
};

export const roleGuard = (allowedRoles: string[]): CanActivateFn => {
  return (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const authService = inject(AuthService);
    const router = inject(Router);

    if (!authService.isAuthenticated()) {
      router.navigate(['/login']);
      return false;
    }

    if (allowedRoles.some(allowedRole => 
      authService.authState().roles.some(userRole => 
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

export const publicGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isAuthenticated()) {
    const roles = authService.authState().roles;
    const hasRole = (role: string) => roles.some(r => r === role || r === `ROLE_${role}` || r.endsWith(`_${role}`));
    
    if (hasRole('ADMIN') || hasRole('SYSTEM_ADMIN')) {
      router.navigate(['/admin']);
    } else if (hasRole('TEACHER')) {
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
