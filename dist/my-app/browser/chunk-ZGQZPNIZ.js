import {
  AuthService
} from "./chunk-HGEUBDJK.js";
import {
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef,
  effect,
  inject,
  setClassMetadata,
  ɵɵdefineDirective
} from "./chunk-4WA2FUT3.js";

// src/app/core/directives/has-permission.directive.ts
var HasPermissionDirective = class _HasPermissionDirective {
  templateRef = inject(TemplateRef);
  viewContainer = inject(ViewContainerRef);
  authService = inject(AuthService);
  hasView = false;
  permissionInput = [];
  mode = "single";
  set hasPermission(val) {
    this.permissionInput = val;
    this.mode = Array.isArray(val) ? "any" : "single";
    this.updateView();
  }
  set hasAnyPermission(val) {
    this.permissionInput = val;
    this.mode = "any";
    this.updateView();
  }
  set hasAllPermissions(val) {
    this.permissionInput = val;
    this.mode = "all";
    this.updateView();
  }
  constructor() {
    effect(() => {
      this.authService.authState();
      this.updateView();
    });
  }
  updateView() {
    const isAuthorized = this.checkAuthorization();
    if (isAuthorized && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (!isAuthorized && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }
  checkAuthorization() {
    if (!this.permissionInput || Array.isArray(this.permissionInput) && this.permissionInput.length === 0) {
      return true;
    }
    if (this.mode === "single" && typeof this.permissionInput === "string") {
      return this.authService.hasPermission(this.permissionInput);
    } else if (this.mode === "any" && Array.isArray(this.permissionInput)) {
      return this.authService.hasAnyPermission(this.permissionInput);
    } else if (this.mode === "all" && Array.isArray(this.permissionInput)) {
      return this.authService.hasAllPermissions(this.permissionInput);
    }
    return false;
  }
  static \u0275fac = function HasPermissionDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HasPermissionDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _HasPermissionDirective, selectors: [["", "hasPermission", ""], ["", "hasAnyPermission", ""], ["", "hasAllPermissions", ""]], inputs: { hasPermission: "hasPermission", hasAnyPermission: "hasAnyPermission", hasAllPermissions: "hasAllPermissions" } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HasPermissionDirective, [{
    type: Directive,
    args: [{
      selector: "[hasPermission], [hasAnyPermission], [hasAllPermissions]",
      standalone: true
    }]
  }], () => [], { hasPermission: [{
    type: Input
  }], hasAnyPermission: [{
    type: Input
  }], hasAllPermissions: [{
    type: Input
  }] });
})();

export {
  HasPermissionDirective
};
//# sourceMappingURL=chunk-ZGQZPNIZ.js.map
