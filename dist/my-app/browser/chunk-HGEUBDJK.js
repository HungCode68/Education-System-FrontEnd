import {
  ToastService
} from "./chunk-LTLTAR4B.js";
import {
  NavigationEnd,
  Router
} from "./chunk-T67WJEUA.js";
import {
  HttpClient,
  Injectable,
  __spreadProps,
  __spreadValues,
  catchError,
  environment,
  filter,
  of,
  setClassMetadata,
  signal,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-4WA2FUT3.js";

// src/app/core/services/auth.service.ts
var AuthService = class _AuthService {
  http;
  router;
  toastService;
  apiUrl = environment.apiUrl;
  // Access Token và thông tin User CHỈ LƯU TRONG RAM (Memory), không lưu localStorage/sessionStorage
  accessToken = null;
  // Kênh tín hiệu vô hại giữa các tab (Chỉ lưu timestamp, không chứa dữ liệu nhạy cảm)
  AUTH_EVENT_KEY = "auth_event";
  authState = signal(this.loadInitialState(), ...ngDevMode ? [{ debugName: "authState" }] : (
    /* istanbul ignore next */
    []
  ));
  isAuthenticated() {
    return this.authState().isAuthenticated;
  }
  setAccessToken(token) {
    this.accessToken = token;
  }
  getAccessToken() {
    return this.accessToken;
  }
  constructor(http, router, toastService) {
    this.http = http;
    this.router = router;
    this.toastService = toastService;
    this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe(() => {
      if (this.isAuthenticated()) {
        this.reloadPermissions().subscribe();
      }
    });
    if (typeof window !== "undefined") {
      window.addEventListener("storage", (event) => {
        if (event.key === this.AUTH_EVENT_KEY && event.newValue) {
          try {
            const data = JSON.parse(event.newValue);
            if (data.action === "LOGIN") {
              this.clearStateAndRedirect("T\xE0i kho\u1EA3n \u0111\xE3 \u0111\u0103ng nh\u1EADp \u1EDF tab kh\xE1c. Vui l\xF2ng \u0111\u0103ng nh\u1EADp l\u1EA1i.");
            } else if (data.action === "LOGOUT") {
              this.clearStateAndRedirect("T\xE0i kho\u1EA3n \u0111\xE3 \u0111\u0103ng xu\u1EA5t t\u1EEB tab kh\xE1c.");
            }
          } catch (e) {
            this.clearStateAndRedirect();
          }
        }
      });
    }
  }
  login(credentials) {
    return this.http.post(`${this.apiUrl}/api/v1/auth/login`, credentials, {
      withCredentials: true
    }).pipe(tap((res) => {
      const token = res?.accessToken || res?.data?.accessToken;
      if (token) {
        this.setAccessToken(token);
      }
      const data = res?.data || res;
      const newState = {
        fullName: data?.fullName || null,
        email: credentials.email,
        roles: data?.roles || [],
        permissions: data?.permissions || [],
        isAuthenticated: true
      };
      this.authState.set(newState);
      localStorage.setItem(this.AUTH_EVENT_KEY, JSON.stringify({ action: "LOGIN", timestamp: Date.now() }));
    }));
  }
  /**
   * Khôi phục phiên đăng nhập từ HTTP-Only Cookie vào RAM
   */
  refreshToken() {
    return this.http.post(`${this.apiUrl}/api/v1/auth/refresh-token`, {}, {
      withCredentials: true
    }).pipe(tap((res) => {
      const token = res?.accessToken || res?.data?.accessToken;
      if (token) {
        this.setAccessToken(token);
      }
      const data = res?.data || res;
      if (data?.roles || data?.permissions) {
        const current = this.authState();
        const newState = __spreadProps(__spreadValues({}, current), {
          fullName: data.fullName || current.fullName,
          email: data.email || current.email,
          roles: data.roles || current.roles,
          permissions: data.permissions || current.permissions,
          isAuthenticated: true
        });
        this.authState.set(newState);
      }
    }));
  }
  /**
   * Đồng bộ lại quyền hạn người dùng từ Backend vào RAM
   */
  reloadPermissions() {
    return this.http.get(`${this.apiUrl}/api/v1/auth/me`).pipe(tap((res) => {
      if (res) {
        const current = this.authState();
        const newState = __spreadProps(__spreadValues({}, current), {
          fullName: res.fullName || current.fullName,
          email: res.email || current.email,
          roles: res.roles || current.roles,
          permissions: res.permissions || current.permissions,
          isAuthenticated: true
        });
        this.authState.set(newState);
      }
    }), catchError(() => of(null)));
  }
  // --- Dynamic RBAC Helper Methods ---
  getPermissionAliases(perm) {
    const aliases = [perm];
    if (perm.startsWith("COURSES_")) {
      aliases.push(perm.replace("COURSES_", "COURSE_"));
    } else if (perm.startsWith("COURSE_")) {
      aliases.push(perm.replace("COURSE_", "COURSES_"));
    }
    if (perm.startsWith("TEACHING_")) {
      aliases.push(perm.replace("TEACHING_", "ASSIGNMENT_"));
    } else if (perm.startsWith("ASSIGNMENT_")) {
      aliases.push(perm.replace("ASSIGNMENT_", "TEACHING_"));
    }
    if (perm.startsWith("MATERIAL_")) {
      aliases.push(perm.replace("MATERIAL_", "LEARNING_MATERIAL_"));
    } else if (perm.startsWith("LEARNING_MATERIAL_")) {
      aliases.push(perm.replace("LEARNING_MATERIAL_", "MATERIAL_"));
    }
    return aliases;
  }
  hasPermission(permission) {
    const state = this.authState();
    if (!state.isAuthenticated)
      return false;
    const userPerms = state.permissions || [];
    const aliases = this.getPermissionAliases(permission);
    return aliases.some((alias) => userPerms.includes(alias));
  }
  hasAnyPermission(permissions) {
    if (!permissions || permissions.length === 0)
      return true;
    const state = this.authState();
    if (!state.isAuthenticated)
      return false;
    const userPerms = state.permissions || [];
    return permissions.some((p) => {
      const aliases = this.getPermissionAliases(p);
      return aliases.some((alias) => userPerms.includes(alias));
    });
  }
  hasAllPermissions(permissions) {
    if (!permissions || permissions.length === 0)
      return true;
    const state = this.authState();
    if (!state.isAuthenticated)
      return false;
    const userPerms = state.permissions || [];
    return permissions.every((p) => {
      const aliases = this.getPermissionAliases(p);
      return aliases.some((alias) => userPerms.includes(alias));
    });
  }
  hasRole(role) {
    const state = this.authState();
    if (!state.isAuthenticated)
      return false;
    return state.roles.includes(role) || state.roles.includes(`ROLE_${role}`);
  }
  hasAnyRole(roles) {
    if (!roles || roles.length === 0)
      return true;
    const state = this.authState();
    if (!state.isAuthenticated)
      return false;
    return roles.some((r) => state.roles.includes(r) || state.roles.includes(`ROLE_${r}`));
  }
  logout() {
    localStorage.setItem(this.AUTH_EVENT_KEY, JSON.stringify({ action: "LOGOUT", timestamp: Date.now() }));
    this.http.post(`${this.apiUrl}/api/v1/auth/logout`, {}, { withCredentials: true }).subscribe({
      next: () => this.clearStateAndRedirect(),
      error: () => this.clearStateAndRedirect()
    });
  }
  clearState() {
    this.accessToken = null;
    this.authState.set({
      fullName: null,
      email: null,
      roles: [],
      permissions: [],
      isAuthenticated: false
    });
  }
  clearStateAndRedirect(notifyMessage) {
    this.clearState();
    if (notifyMessage) {
      this.toastService.warning("Phi\xEAn l\xE0m vi\u1EC7c k\u1EBFt th\xFAc", notifyMessage);
    }
    this.router.navigate(["/login"], { queryParams: { loggedOut: "true" } });
  }
  loadInitialState() {
    return {
      fullName: null,
      email: null,
      roles: [],
      permissions: [],
      isAuthenticated: false
    };
  }
  static \u0275fac = function AuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(Router), \u0275\u0275inject(ToastService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }, { type: Router }, { type: ToastService }], null);
})();

export {
  AuthService
};
//# sourceMappingURL=chunk-HGEUBDJK.js.map
