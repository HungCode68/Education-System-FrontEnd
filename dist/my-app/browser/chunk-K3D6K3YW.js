import {
  HttpClient,
  Injectable,
  environment,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-4WA2FUT3.js";

// src/app/features/student/services/student-profile.service.ts
var StudentProfileService = class _StudentProfileService {
  http = inject(HttpClient);
  apiUrl = `${environment.apiUrl}/api/v1/students`;
  // Thay vì truyền ID, ta gọi thẳng endpoint /me
  getMyProfile() {
    return this.http.get(`${this.apiUrl}/my-profile`);
  }
  static \u0275fac = function StudentProfileService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StudentProfileService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _StudentProfileService, factory: _StudentProfileService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StudentProfileService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  StudentProfileService
};
//# sourceMappingURL=chunk-K3D6K3YW.js.map
