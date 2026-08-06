import {
  AuthService
} from "./chunk-HGEUBDJK.js";
import {
  Router
} from "./chunk-T67WJEUA.js";
import {
  catchError,
  firstValueFrom,
  inject,
  of
} from "./chunk-4WA2FUT3.js";

// src/app/core/guards/auth.guard.ts
var authGuard = async (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (!authService.isAuthenticated()) {
    try {
      await firstValueFrom(authService.refreshToken().pipe(catchError(() => of(null))));
    } catch {
    }
  }
  if (authService.isAuthenticated()) {
    return true;
  }
  router.navigate(["/login"], { queryParams: { returnUrl: state.url } });
  return false;
};
var roleGuard = (allowedRoles) => {
  return async (route, state) => {
    const authService = inject(AuthService);
    const router = inject(Router);
    if (!authService.isAuthenticated()) {
      try {
        await firstValueFrom(authService.refreshToken().pipe(catchError(() => of(null))));
      } catch {
      }
    }
    if (!authService.isAuthenticated()) {
      router.navigate(["/login"]);
      return false;
    }
    const userRoles = authService.authState().roles || [];
    if (allowedRoles.some((allowedRole) => userRoles.some((userRole) => userRole === allowedRole || userRole === `ROLE_${allowedRole}` || userRole.endsWith(`_${allowedRole}`)))) {
      return true;
    }
    router.navigate(["/unauthorized"]);
    return false;
  };
};
var permissionGuard = (requiredPermissions) => {
  return async (route, state) => {
    const authService = inject(AuthService);
    const router = inject(Router);
    if (!authService.isAuthenticated()) {
      try {
        await firstValueFrom(authService.refreshToken().pipe(catchError(() => of(null))));
      } catch {
      }
    }
    if (!authService.isAuthenticated()) {
      router.navigate(["/login"]);
      return false;
    }
    await firstValueFrom(authService.reloadPermissions().pipe(catchError(() => of(null))));
    if (authService.hasAnyPermission(requiredPermissions)) {
      return true;
    }
    router.navigate(["/unauthorized"]);
    return false;
  };
};
var publicGuard = async (route) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (route.queryParams["loggedOut"] === "true") {
    return true;
  }
  if (!authService.isAuthenticated()) {
    try {
      await firstValueFrom(authService.refreshToken().pipe(catchError(() => of(null))));
    } catch {
    }
  }
  if (authService.isAuthenticated()) {
    const roles = authService.authState().roles;
    const hasRole = (role) => roles.some((r) => r === role || r === `ROLE_${role}` || r.endsWith(`_${role}`));
    if (hasRole("ADMIN") || hasRole("SYSTEM_ADMIN")) {
      router.navigate(["/admin"]);
    } else if (hasRole("ACADEMIC") || hasRole("TRAINING")) {
      router.navigate(["/academic"]);
    } else if (roles.some((r) => r.includes("TEACHER"))) {
      router.navigate(["/teacher"]);
    } else if (hasRole("STUDENT")) {
      router.navigate(["/student"]);
    } else {
      router.navigate(["/unauthorized"]);
    }
    return false;
  }
  return true;
};

export {
  authGuard,
  roleGuard,
  permissionGuard,
  publicGuard
};
//# sourceMappingURL=chunk-2SXOXKGA.js.map
