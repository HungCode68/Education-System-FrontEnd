import {
  HasPermissionDirective
} from "./chunk-ZGQZPNIZ.js";
import {
  authGuard,
  publicGuard,
  roleGuard
} from "./chunk-2SXOXKGA.js";
import {
  AuthService
} from "./chunk-HGEUBDJK.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-CWY7GFOW.js";
import {
  ToastService
} from "./chunk-LTLTAR4B.js";
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
  bootstrapApplication,
  provideRouter
} from "./chunk-T67WJEUA.js";
import {
  ChangeDetectionStrategy,
  CommonModule,
  Component,
  EventEmitter,
  Input,
  NgClass,
  NgStyle,
  Output,
  catchError,
  computed,
  filter,
  inject,
  provideHttpClient,
  provideZonelessChangeDetection,
  setClassMetadata,
  signal,
  switchMap,
  throwError,
  withFetch,
  withInterceptors,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction4,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-4WA2FUT3.js";

// src/app/features/auth/pages/login/login.component.ts
var _c0 = (a0) => ({ "border-red-500 focus:ring-red-500": a0 });
function LoginComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 34);
    \u0275\u0275element(2, "path", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span", 36);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.errorMessage());
  }
}
function LoginComponent_Conditional_29_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Email kh\xF4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng ");
  }
}
function LoginComponent_Conditional_29_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u0110\u1ECBnh d\u1EA1ng email kh\xF4ng h\u1EE3p l\u1EC7 ");
  }
}
function LoginComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 23);
    \u0275\u0275conditionalCreate(1, LoginComponent_Conditional_29_Conditional_1_Template, 1, 0)(2, LoginComponent_Conditional_29_Conditional_2_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.email == null ? null : ctx_r0.email.errors == null ? null : ctx_r0.email.errors["required"]) ? 1 : (ctx_r0.email == null ? null : ctx_r0.email.errors == null ? null : ctx_r0.email.errors["email"]) ? 2 : -1);
  }
}
function LoginComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 28);
    \u0275\u0275element(1, "path", 37)(2, "path", 38);
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 28);
    \u0275\u0275element(1, "path", 39)(2, "path", 40);
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_41_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " M\u1EADt kh\u1EA9u kh\xF4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng ");
  }
}
function LoginComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 29);
    \u0275\u0275conditionalCreate(1, LoginComponent_Conditional_41_Conditional_1_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.password == null ? null : ctx_r0.password.errors == null ? null : ctx_r0.password.errors["required"]) ? 1 : -1);
  }
}
function LoginComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 41);
    \u0275\u0275element(1, "circle", 42)(2, "path", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " \u0110ang \u0111\u0103ng nh\u1EADp... ");
  }
}
function LoginComponent_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u0110\u0103ng nh\u1EADp ");
  }
}
var LoginComponent = class _LoginComponent {
  fb = inject(FormBuilder);
  authService = inject(AuthService);
  router = inject(Router);
  loginForm;
  isLoading = signal(false, ...ngDevMode ? [{ debugName: "isLoading" }] : (
    /* istanbul ignore next */
    []
  ));
  errorMessage = signal(null, ...ngDevMode ? [{ debugName: "errorMessage" }] : (
    /* istanbul ignore next */
    []
  ));
  // State quản lý việc ẩn/hiện mật khẩu
  showPassword = signal(false, ...ngDevMode ? [{ debugName: "showPassword" }] : (
    /* istanbul ignore next */
    []
  ));
  ngOnInit() {
    this.initializeForm();
  }
  initializeForm() {
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]]
    });
  }
  // Hàm chuyển đổi trạng thái mật khẩu
  togglePasswordVisibility() {
    this.showPassword.update((v) => !v);
  }
  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    this.isLoading.set(true);
    this.errorMessage.set(null);
    const { email, password } = this.loginForm.value;
    this.authService.login({ email, password }).subscribe({
      next: () => {
        this.isLoading.set(false);
        const roles = this.authService.authState().roles;
        this.navigateByRole(roles);
      },
      error: (error) => {
        this.isLoading.set(false);
        if (error.status === 401) {
          this.errorMessage.set("Invalid email or password");
        } else {
          this.errorMessage.set("An error occurred. Please try again.");
        }
      }
    });
  }
  navigateByRole(roles) {
    const hasRole = (role) => roles.some((r) => r === role || r === `ROLE_${role}` || r.endsWith(`_${role}`) || r.includes(role));
    const isTeacher = roles.some((r) => r.includes("TEACHER"));
    if (hasRole("ADMIN") || hasRole("SYSTEM") || hasRole("ADMIN_SYSTEM")) {
      this.router.navigate(["/admin"]);
    } else if (hasRole("ACADEMIC") || hasRole("TRAINING") || hasRole("MANAGER")) {
      this.router.navigate(["/academic"]);
    } else if (isTeacher) {
      this.router.navigate(["/teacher"]);
    } else if (hasRole("STUDENT")) {
      this.router.navigate(["/student"]);
    } else {
      this.router.navigate(["/unauthorized"]);
    }
  }
  get email() {
    return this.loginForm.get("email");
  }
  get password() {
    return this.loginForm.get("password");
  }
  static \u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 52, vars: 14, consts: [[1, "min-h-screen", "flex", "bg-gray-50", "font-sans", "text-gray-900"], [1, "hidden", "lg:flex", "lg:w-1/2", "bg-blue-700", "relative", "overflow-hidden", "justify-center", "items-center"], [1, "absolute", "inset-0", "bg-gradient-to-br", "from-blue-600", "to-indigo-900", "opacity-90"], [1, "absolute", "-top-24", "-left-24", "w-96", "h-96", "rounded-full", "bg-white", "opacity-10"], [1, "absolute", "-bottom-24", "-right-24", "w-96", "h-96", "rounded-full", "border-4", "border-white", "opacity-10"], [1, "relative", "z-10", "px-12", "text-center", "text-white", "max-w-lg"], [1, "text-4xl", "font-extrabold", "tracking-tight", "mb-6"], [1, "text-lg", "text-blue-100", "leading-relaxed"], [1, "w-full", "lg:w-1/2", "flex", "items-center", "justify-center", "p-8", "sm:p-12"], [1, "w-full", "max-w-md", "bg-white", "p-8", "rounded-2xl", "shadow-xl", "sm:shadow-none", "sm:p-0", "sm:bg-transparent"], [1, "text-center", "mb-8"], [1, "mx-auto", "flex", "items-center", "justify-center", "h-20", "mb-5"], ["src", "assets/Icon-Dai-hoc-CMC.png", "alt", "EduSystem Logo", 1, "h-full", "w-auto", "object-contain", "drop-shadow-sm"], [1, "text-3xl", "font-bold", "text-gray-900", "mb-2"], [1, "text-gray-500", "text-sm"], [1, "mb-6", "p-4", "rounded-lg", "bg-red-50", "border-l-4", "border-red-500", "flex", "items-start"], [1, "space-y-6", 3, "ngSubmit", "formGroup"], ["for", "email", 1, "block", "text-sm", "font-semibold", "text-gray-700", "mb-2"], [1, "relative"], [1, "absolute", "inset-y-0", "left-0", "pl-3", "flex", "items-center", "pointer-events-none"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "h-5", "w-5", "text-gray-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"], ["id", "email", "type", "email", "formControlName", "email", "placeholder", "admin@school.edu.vn", 1, "block", "w-full", "pl-10", "pr-4", "py-3", "border", "border-gray-300", "rounded-lg", "text-gray-900", "bg-gray-50", "focus:bg-white", "focus:ring-2", "focus:ring-blue-500", "focus:border-blue-500", "outline-none", "transition-all", "duration-200", "ease-in-out", 3, "ngClass"], [1, "mt-2", "text-sm", "text-red-600", "flex", "items-center"], ["for", "password", 1, "block", "text-sm", "font-semibold", "text-gray-700", "mb-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"], ["id", "password", "formControlName", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", 1, "block", "w-full", "pl-10", "pr-12", "py-3", "border", "border-gray-300", "rounded-lg", "text-gray-900", "bg-gray-50", "focus:bg-white", "focus:ring-2", "focus:ring-blue-500", "focus:border-blue-500", "outline-none", "transition-all", "duration-200", "ease-in-out", 3, "type", "ngClass"], ["type", "button", 1, "absolute", "inset-y-0", "right-0", "pr-3", "flex", "items-center", "text-gray-400", "hover:text-blue-600", "transition-colors", "focus:outline-none", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "h-5", "w-5"], [1, "mt-2", "text-sm", "text-red-600"], ["type", "submit", 1, "w-full", "flex", "justify-center", "py-3", "px-4", "border", "border-transparent", "rounded-lg", "shadow-sm", "text-sm", "font-semibold", "text-white", "bg-blue-600", "hover:bg-blue-700", "focus:outline-none", "focus:ring-2", "focus:ring-offset-2", "focus:ring-blue-500", "disabled:opacity-50", "disabled:cursor-not-allowed", "transition-all", "duration-200", 3, "disabled"], [1, "mt-8", "text-center", "text-sm", "text-gray-500"], [1, "mt-1"], ["href", "#", 1, "text-blue-600", "font-medium", "hover:underline"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-red-500", "mr-3", "mt-0.5", "shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "text-sm", "text-red-700", "font-medium"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 12a3 3 0 11-6 0 3 3 0 016 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a10.025 10.025 0 013.337-4.665m1.332-1.332A10.053 10.053 0 0112 5c4.478 0 8.268 2.943 9.542 7a10.025 10.025 0 01-3.337 4.665"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M3 3l18 18"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "-ml-1", "mr-3", "h-5", "w-5", "text-white"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"]], template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "div", 2)(3, "div", 3)(4, "div", 4);
      \u0275\u0275elementStart(5, "div", 5)(6, "h1", 6);
      \u0275\u0275text(7, " H\u1EC7 Th\u1ED1ng Qu\u1EA3n L\xFD Gi\xE1o D\u1EE5c ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p", 7);
      \u0275\u0275text(9, " N\u1EC1n t\u1EA3ng qu\u1EA3n l\xFD h\u1ECDc t\u1EADp, gi\u1EA3ng d\u1EA1y v\xE0 v\u1EADn h\xE0nh to\xE0n di\u1EC7n d\xE0nh cho nh\xE0 tr\u01B0\u1EDDng, gi\xE1o vi\xEAn v\xE0 h\u1ECDc sinh. ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "div", 8)(11, "div", 9)(12, "div", 10)(13, "div", 11);
      \u0275\u0275element(14, "img", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "h2", 13);
      \u0275\u0275text(16, "\u0110\u0103ng nh\u1EADp");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "p", 14);
      \u0275\u0275text(18, "Vui l\xF2ng nh\u1EADp th\xF4ng tin \u0111\u1EC3 truy c\u1EADp h\u1EC7 th\u1ED1ng");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(19, LoginComponent_Conditional_19_Template, 5, 1, "div", 15);
      \u0275\u0275elementStart(20, "form", 16);
      \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_20_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(21, "div")(22, "label", 17);
      \u0275\u0275text(23, " \u0110\u1ECBa ch\u1EC9 Email ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 18)(25, "div", 19);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(26, "svg", 20);
      \u0275\u0275element(27, "path", 21);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275element(28, "input", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(29, LoginComponent_Conditional_29_Template, 3, 1, "p", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div")(31, "label", 24);
      \u0275\u0275text(32, " M\u1EADt kh\u1EA9u ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div", 18)(34, "div", 19);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(35, "svg", 20);
      \u0275\u0275element(36, "path", 25);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275element(37, "input", 26);
      \u0275\u0275elementStart(38, "button", 27);
      \u0275\u0275listener("click", function LoginComponent_Template_button_click_38_listener() {
        return ctx.togglePasswordVisibility();
      });
      \u0275\u0275conditionalCreate(39, LoginComponent_Conditional_39_Template, 3, 0, ":svg:svg", 28)(40, LoginComponent_Conditional_40_Template, 3, 0, ":svg:svg", 28);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(41, LoginComponent_Conditional_41_Template, 2, 1, "p", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "button", 30);
      \u0275\u0275conditionalCreate(43, LoginComponent_Conditional_43_Template, 4, 0)(44, LoginComponent_Conditional_44_Template, 1, 0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "div", 31)(46, "p");
      \u0275\u0275text(47, "H\u1EC7 th\u1ED1ng d\xE0nh cho qu\u1EA3n tr\u1ECB vi\xEAn, gi\xE1o vi\xEAn v\xE0 h\u1ECDc sinh.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "p", 32);
      \u0275\u0275text(49, "C\u1EA7n h\u1ED7 tr\u1EE3? ");
      \u0275\u0275elementStart(50, "a", 33);
      \u0275\u0275text(51, "Li\xEAn h\u1EC7 Admin");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(19);
      \u0275\u0275conditional(ctx.errorMessage() ? 19 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.loginForm);
      \u0275\u0275advance(8);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(10, _c0, (ctx.email == null ? null : ctx.email.invalid) && (ctx.email == null ? null : ctx.email.touched)));
      \u0275\u0275advance();
      \u0275\u0275conditional((ctx.email == null ? null : ctx.email.invalid) && (ctx.email == null ? null : ctx.email.touched) ? 29 : -1);
      \u0275\u0275advance(8);
      \u0275\u0275property("type", ctx.showPassword() ? "text" : "password")("ngClass", \u0275\u0275pureFunction1(12, _c0, (ctx.password == null ? null : ctx.password.invalid) && (ctx.password == null ? null : ctx.password.touched)));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(!ctx.showPassword() ? 39 : 40);
      \u0275\u0275advance(2);
      \u0275\u0275conditional((ctx.password == null ? null : ctx.password.invalid) && (ctx.password == null ? null : ctx.password.touched) ? 41 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.loginForm.invalid || ctx.isLoading());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isLoading() ? 43 : 44);
    }
  }, dependencies: [CommonModule, NgClass, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n}\n\n\n/*# sourceMappingURL=login.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{ selector: "app-login", standalone: true, imports: [CommonModule, ReactiveFormsModule], template: `<div class="min-h-screen flex bg-gray-50 font-sans text-gray-900">\r
  \r
  <div class="hidden lg:flex lg:w-1/2 bg-blue-700 relative overflow-hidden justify-center items-center">\r
    <div class="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-900 opacity-90"></div>\r
    <div class="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white opacity-10"></div>\r
    <div class="absolute -bottom-24 -right-24 w-96 h-96 rounded-full border-4 border-white opacity-10"></div>\r
    \r
    <div class="relative z-10 px-12 text-center text-white max-w-lg">\r
      <h1 class="text-4xl font-extrabold tracking-tight mb-6">\r
        H\u1EC7 Th\u1ED1ng Qu\u1EA3n L\xFD Gi\xE1o D\u1EE5c\r
      </h1>\r
      <p class="text-lg text-blue-100 leading-relaxed">\r
        N\u1EC1n t\u1EA3ng qu\u1EA3n l\xFD h\u1ECDc t\u1EADp, gi\u1EA3ng d\u1EA1y v\xE0 v\u1EADn h\xE0nh to\xE0n di\u1EC7n d\xE0nh cho nh\xE0 tr\u01B0\u1EDDng, gi\xE1o vi\xEAn v\xE0 h\u1ECDc sinh.\r
      </p>\r
    </div>\r
  </div>\r
\r
  <div class="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12">\r
    <div class="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl sm:shadow-none sm:p-0 sm:bg-transparent">\r
      \r
      <div class="text-center mb-8">\r
        <div class="mx-auto flex items-center justify-center h-20 mb-5">\r
          <img src="assets/Icon-Dai-hoc-CMC.png" alt="EduSystem Logo" class="h-full w-auto object-contain drop-shadow-sm">\r
        </div>\r
\r
        <h2 class="text-3xl font-bold text-gray-900 mb-2">\u0110\u0103ng nh\u1EADp</h2>\r
        <p class="text-gray-500 text-sm">Vui l\xF2ng nh\u1EADp th\xF4ng tin \u0111\u1EC3 truy c\u1EADp h\u1EC7 th\u1ED1ng</p>\r
      </div>\r
\r
      @if (errorMessage()) {\r
        <div class="mb-6 p-4 rounded-lg bg-red-50 border-l-4 border-red-500 flex items-start">\r
          <svg class="w-5 h-5 text-red-500 mr-3 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>\r
          </svg>\r
          <span class="text-sm text-red-700 font-medium">{{ errorMessage() }}</span>\r
        </div>\r
      }\r
\r
      <form [formGroup]="loginForm" (ngSubmit)="onSubmit()" class="space-y-6">\r
        \r
        <div>\r
          <label for="email" class="block text-sm font-semibold text-gray-700 mb-2">\r
            \u0110\u1ECBa ch\u1EC9 Email\r
          </label>\r
          <div class="relative">\r
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">\r
              <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />\r
              </svg>\r
            </div>\r
            <input\r
              id="email"\r
              type="email"\r
              formControlName="email"\r
              placeholder="admin@school.edu.vn"\r
              class="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg text-gray-900 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 ease-in-out"\r
              [ngClass]="{'border-red-500 focus:ring-red-500': email?.invalid && email?.touched}"\r
            />\r
          </div>\r
          @if (email?.invalid && email?.touched) {\r
            <p class="mt-2 text-sm text-red-600 flex items-center">\r
              @if (email?.errors?.['required']) {\r
                Email kh\xF4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng\r
              } @else if (email?.errors?.['email']) {\r
                \u0110\u1ECBnh d\u1EA1ng email kh\xF4ng h\u1EE3p l\u1EC7\r
              }\r
            </p>\r
          }\r
        </div>\r
\r
        <div>\r
          <label for="password" class="block text-sm font-semibold text-gray-700 mb-2">\r
            M\u1EADt kh\u1EA9u\r
          </label>\r
          <div class="relative">\r
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">\r
              <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />\r
              </svg>\r
            </div>\r
            <input\r
              id="password"\r
              [type]="showPassword() ? 'text' : 'password'"\r
              formControlName="password"\r
              placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"\r
              class="block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg text-gray-900 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 ease-in-out"\r
              [ngClass]="{'border-red-500 focus:ring-red-500': password?.invalid && password?.touched}"\r
            />\r
            \r
            <button \r
              type="button" \r
              (click)="togglePasswordVisibility()"\r
              class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-blue-600 transition-colors focus:outline-none"\r
            >\r
              @if (!showPassword()) {\r
                <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />\r
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />\r
                </svg>\r
              } @else {\r
                <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a10.025 10.025 0 013.337-4.665m1.332-1.332A10.053 10.053 0 0112 5c4.478 0 8.268 2.943 9.542 7a10.025 10.025 0 01-3.337 4.665" />\r
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3l18 18" />\r
                </svg>\r
              }\r
            </button>\r
          </div>\r
          @if (password?.invalid && password?.touched) {\r
            <p class="mt-2 text-sm text-red-600">\r
              @if (password?.errors?.['required']) {\r
                M\u1EADt kh\u1EA9u kh\xF4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng\r
              }\r
            </p>\r
          }\r
        </div>\r
\r
        <button\r
          type="submit"\r
          [disabled]="loginForm.invalid || isLoading()"\r
          class="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"\r
        >\r
          @if (isLoading()) {\r
            <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">\r
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>\r
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>\r
            </svg>\r
            \u0110ang \u0111\u0103ng nh\u1EADp...\r
          } @else {\r
            \u0110\u0103ng nh\u1EADp\r
          }\r
        </button>\r
      </form>\r
\r
      <div class="mt-8 text-center text-sm text-gray-500">\r
        <p>H\u1EC7 th\u1ED1ng d\xE0nh cho qu\u1EA3n tr\u1ECB vi\xEAn, gi\xE1o vi\xEAn v\xE0 h\u1ECDc sinh.</p>\r
        <p class="mt-1">C\u1EA7n h\u1ED7 tr\u1EE3? <a href="#" class="text-blue-600 font-medium hover:underline">Li\xEAn h\u1EC7 Admin</a></p>\r
      </div>\r
\r
    </div>\r
  </div>\r
</div>`, styles: ["/* src/app/features/auth/pages/login/login.component.css */\n:host {\n  display: block;\n  height: 100%;\n}\n/*! tailwindcss v4.2.1 | MIT License | https://tailwindcss.com */\n/*# sourceMappingURL=login.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/features/auth/pages/login/login.component.ts", lineNumber: 14 });
})();

// src/app/features/unauthorized/unauthorized.component.ts
var UnauthorizedComponent = class _UnauthorizedComponent {
  authService = inject(AuthService);
  router = inject(Router);
  // Thử quay lại trang trước đó bằng History API của trình duyệt
  goBack() {
    window.history.back();
  }
  // Trực tiếp gọi hàm logout để xóa sạch mọi Token cũ bị lỗi
  forceLogout() {
    this.authService.logout();
  }
  static \u0275fac = function UnauthorizedComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UnauthorizedComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UnauthorizedComponent, selectors: [["app-unauthorized"]], decls: 21, vars: 0, consts: [[1, "min-h-screen", "flex", "items-center", "justify-center", "bg-gray-50", "py-12", "px-4", "sm:px-6", "lg:px-8", "font-sans"], [1, "max-w-md", "w-full", "space-y-8", "text-center", "bg-white", "p-10", "rounded-3xl", "shadow-xl", "border", "border-gray-100", "relative", "overflow-hidden"], [1, "absolute", "-top-10", "-right-10", "w-32", "h-32", "bg-red-50", "rounded-full", "opacity-50"], [1, "absolute", "-bottom-10", "-left-10", "w-32", "h-32", "bg-orange-50", "rounded-full", "opacity-50"], [1, "relative", "z-10"], [1, "mx-auto", "flex", "items-center", "justify-center", "h-24", "w-24", "rounded-full", "bg-red-50", "mb-8", "border-8", "border-white", "shadow-sm"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-10", "w-10", "text-red-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"], [1, "text-3xl", "font-extrabold", "text-gray-900", "tracking-tight"], [1, "text-base", "text-gray-600", "mt-4", "leading-relaxed"], [1, "mt-10", "flex", "flex-col", "space-y-3"], [1, "w-full", "flex", "justify-center", "items-center", "py-3.5", "px-4", "border", "border-transparent", "rounded-xl", "shadow-sm", "text-sm", "font-semibold", "text-white", "bg-blue-600", "hover:bg-blue-700", "transition", "duration-200", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "mr-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M10 19l-7-7m0 0l7-7m-7 7h18"], [1, "w-full", "flex", "justify-center", "items-center", "py-3.5", "px-4", "border", "border-gray-300", "rounded-xl", "shadow-sm", "text-sm", "font-semibold", "text-gray-700", "bg-white", "hover:bg-gray-50", "transition", "duration-200", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"]], template: function UnauthorizedComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275domElement(2, "div", 2)(3, "div", 3);
      \u0275\u0275domElementStart(4, "div", 4)(5, "div", 5);
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(6, "svg", 6);
      \u0275\u0275domElement(7, "path", 7);
      \u0275\u0275domElementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275domElementStart(8, "h2", 8);
      \u0275\u0275text(9, "Truy c\u1EADp b\u1ECB t\u1EEB ch\u1ED1i");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(10, "p", 9);
      \u0275\u0275text(11, " B\u1EA1n kh\xF4ng c\xF3 quy\u1EC1n truy c\u1EADp v\xE0o khu v\u1EF1c n\xE0y, ho\u1EB7c phi\xEAn \u0111\u0103ng nh\u1EADp c\u1EE7a b\u1EA1n \u0111\xE3 g\u1EB7p s\u1EF1 c\u1ED1. ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(12, "div", 10)(13, "button", 11);
      \u0275\u0275domListener("click", function UnauthorizedComponent_Template_button_click_13_listener() {
        return ctx.goBack();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(14, "svg", 12);
      \u0275\u0275domElement(15, "path", 13);
      \u0275\u0275domElementEnd();
      \u0275\u0275text(16, " Quay l\u1EA1i trang tr\u01B0\u1EDBc ");
      \u0275\u0275domElementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275domElementStart(17, "button", 14);
      \u0275\u0275domListener("click", function UnauthorizedComponent_Template_button_click_17_listener() {
        return ctx.forceLogout();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(18, "svg", 12);
      \u0275\u0275domElement(19, "path", 15);
      \u0275\u0275domElementEnd();
      \u0275\u0275text(20, " \u0110\u0103ng xu\u1EA5t & \u0110\u0103ng nh\u1EADp l\u1EA1i ");
      \u0275\u0275domElementEnd()()()()();
    }
  }, dependencies: [CommonModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnauthorizedComponent, [{
    type: Component,
    args: [{
      selector: "app-unauthorized",
      standalone: true,
      imports: [CommonModule],
      template: `
    <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div class="max-w-md w-full space-y-8 text-center bg-white p-10 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden">
        
        <div class="absolute -top-10 -right-10 w-32 h-32 bg-red-50 rounded-full opacity-50"></div>
        <div class="absolute -bottom-10 -left-10 w-32 h-32 bg-orange-50 rounded-full opacity-50"></div>

        <div class="relative z-10">
            <div class="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-red-50 mb-8 border-8 border-white shadow-sm">
            <svg class="h-10 w-10 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            </div>
            
            <h2 class="text-3xl font-extrabold text-gray-900 tracking-tight">Truy c\u1EADp b\u1ECB t\u1EEB ch\u1ED1i</h2>
            <p class="text-base text-gray-600 mt-4 leading-relaxed">
            B\u1EA1n kh\xF4ng c\xF3 quy\u1EC1n truy c\u1EADp v\xE0o khu v\u1EF1c n\xE0y, ho\u1EB7c phi\xEAn \u0111\u0103ng nh\u1EADp c\u1EE7a b\u1EA1n \u0111\xE3 g\u1EB7p s\u1EF1 c\u1ED1.
            </p>
            
            <div class="mt-10 flex flex-col space-y-3">
            <button 
                (click)="goBack()" 
                class="w-full flex justify-center items-center py-3.5 px-4 border border-transparent rounded-xl shadow-sm text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition duration-200"
            >
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                Quay l\u1EA1i trang tr\u01B0\u1EDBc
            </button>
            
            <button 
                (click)="forceLogout()" 
                class="w-full flex justify-center items-center py-3.5 px-4 border border-gray-300 rounded-xl shadow-sm text-sm font-semibold text-gray-700 bg-white hover:bg-gray-50 transition duration-200"
            >
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                \u0110\u0103ng xu\u1EA5t & \u0110\u0103ng nh\u1EADp l\u1EA1i
            </button>
            </div>
        </div>
      </div>
    </div>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UnauthorizedComponent, { className: "UnauthorizedComponent", filePath: "src/app/features/unauthorized/unauthorized.component.ts", lineNumber: 51 });
})();

// src/app/core/layout/sidebar/sidebar.component.ts
var _c02 = () => ["COURSES_VIEW", "COURSES_READ", "COURSES_MANAGE", "COURSE_VIEW", "COURSE_READ", "COURSE_MANAGE"];
var _c1 = () => ["TERM_VIEW", "TERM_READ", "TERM_MANAGE", "TERM_CREATE", "TERM_UPDATE"];
var _c2 = () => ["CLASS_VIEW", "CLASS_READ", "CLASS_MANAGE", "CLASS_CREATE", "CLASS_UPDATE"];
var _c3 = () => ["SCHEDULE_VIEW", "SCHEDULE_READ", "SCHEDULE_MANAGE", "SCHEDULE_CREATE"];
var _c4 = () => ["ROOM_VIEW", "ROOM_READ", "ROOM_MANAGE", "ROOM_CREATE"];
var _c5 = () => ["ENROLLMENT_VIEW", "ENROLLMENT_READ", "ENROLLMENT_MANAGE", "ENROLLMENT_CREATE"];
var _c6 = () => ["MATERIAL_VIEW", "MATERIAL_READ", "MATERIAL_MANAGE", "MATERIAL_CREATE", "LEARNING_MATERIAL_VIEW", "LEARNING_MATERIAL_READ"];
var _c7 = () => ["REPORT_VIEW", "REPORT_READ", "TRAINING_VIEW", "REPORT_MANAGE"];
var _c8 = () => ["STUDENT_VIEW", "STUDENT_READ", "STUDENT_MANAGE", "STUDENT_CREATE"];
var _c9 = () => ["STAFF_VIEW", "STAFF_READ", "STAFF_MANAGE", "STAFF_CREATE"];
var _c10 = () => ["ACCOUNT_VIEW", "ACCOUNT_READ", "ACCOUNT_MANAGE", "ACCOUNT_UPDATE", "ROLE_VIEW", "ROLE_READ", "ROLE_MANAGE", "PERMISSION_VIEW", "PERMISSION_READ", "LOG_VIEW", "LOG_READ"];
var _c11 = () => ["ACCOUNT_VIEW", "ACCOUNT_READ", "ACCOUNT_MANAGE", "ACCOUNT_UPDATE"];
var _c12 = () => ["ROLE_VIEW", "ROLE_READ", "ROLE_MANAGE", "ROLE_CREATE"];
var _c13 = () => ["PERMISSION_VIEW", "PERMISSION_READ", "PERMISSION_MANAGE", "PERMISSION_CREATE"];
var _c14 = () => ["LOG_VIEW", "LOG_READ", "ROLE_VIEW"];
var _c15 = () => ["COURSE_VIEW", "COURSE_READ", "COURSE_MANAGE", "COURSE_CREATE", "COURSE_UPDATE"];
var _c16 = () => ["DEPARTMENT_VIEW", "DEPARTMENT_READ", "DEPARTMENT_MANAGE", "DEPARTMENT_CREATE"];
function SidebarComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 5);
    \u0275\u0275text(1, "B\u1ED9 ph\u1EADn \u0110\xE0o t\u1EA1o");
    \u0275\u0275elementEnd();
  }
}
function SidebarComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275text(1, "Qu\u1EA3n tr\u1ECB H\u1EC7 th\u1ED1ng");
    \u0275\u0275elementEnd();
  }
}
function SidebarComponent_Conditional_10_a_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 28);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 29);
    \u0275\u0275element(2, "path", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span", 31);
    \u0275\u0275text(4, "Qu\u1EA3n l\xFD Kh\xF3a h\u1ECDc");
    \u0275\u0275elementEnd()();
  }
}
function SidebarComponent_Conditional_10_a_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 32);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 29);
    \u0275\u0275element(2, "path", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span", 31);
    \u0275\u0275text(4, "Qu\u1EA3n l\xFD K\u1EF3 h\u1ECDc");
    \u0275\u0275elementEnd()();
  }
}
function SidebarComponent_Conditional_10_a_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 34);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 29);
    \u0275\u0275element(2, "path", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span", 31);
    \u0275\u0275text(4, "Qu\u1EA3n l\xFD L\u1EDBp h\u1ECDc");
    \u0275\u0275elementEnd()();
  }
}
function SidebarComponent_Conditional_10_a_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 36);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 29);
    \u0275\u0275element(2, "path", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span", 31);
    \u0275\u0275text(4, "Qu\u1EA3n l\xFD L\u1ECBch h\u1ECDc");
    \u0275\u0275elementEnd()();
  }
}
function SidebarComponent_Conditional_10_a_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 38);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 29);
    \u0275\u0275element(2, "path", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span", 31);
    \u0275\u0275text(4, "Qu\u1EA3n l\xFD Ph\xF2ng h\u1ECDc");
    \u0275\u0275elementEnd()();
  }
}
function SidebarComponent_Conditional_10_a_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 40);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 29);
    \u0275\u0275element(2, "path", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span", 31);
    \u0275\u0275text(4, "Ph\xE2n c\xF4ng Gi\u1EA3ng d\u1EA1y");
    \u0275\u0275elementEnd()();
  }
}
function SidebarComponent_Conditional_10_a_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 42);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 29);
    \u0275\u0275element(2, "path", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span", 31);
    \u0275\u0275text(4, "Ph\xE2n c\xF4ng Bu\u1ED5i h\u1ECDc");
    \u0275\u0275elementEnd()();
  }
}
function SidebarComponent_Conditional_10_a_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 43);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 29);
    \u0275\u0275element(2, "path", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span", 31);
    \u0275\u0275text(4, "Qu\u1EA3n l\xFD D\u1EA1y thay");
    \u0275\u0275elementEnd()();
  }
}
function SidebarComponent_Conditional_10_a_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 45);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 29);
    \u0275\u0275element(2, "path", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span", 31);
    \u0275\u0275text(4, "Qu\u1EA3n l\xFD X\u1EBFp l\u1EDBp");
    \u0275\u0275elementEnd()();
  }
}
function SidebarComponent_Conditional_10_a_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 46);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 29);
    \u0275\u0275element(2, "path", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span", 31);
    \u0275\u0275text(4, "Qu\u1EA3n l\xFD T\xE0i li\u1EC7u H\u1ECDc t\u1EADp");
    \u0275\u0275elementEnd()();
  }
}
function SidebarComponent_Conditional_10_a_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 47);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 29);
    \u0275\u0275element(2, "path", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span", 31);
    \u0275\u0275text(4, "B\xE1o c\xE1o & Th\u1ED1ng k\xEA");
    \u0275\u0275elementEnd()();
  }
}
function SidebarComponent_Conditional_10_a_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 49);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 29);
    \u0275\u0275element(2, "path", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span", 31);
    \u0275\u0275text(4, "Qu\u1EA3n l\xFD H\u1ECDc vi\xEAn");
    \u0275\u0275elementEnd()();
  }
}
function SidebarComponent_Conditional_10_a_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 51);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 29);
    \u0275\u0275element(2, "path", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span", 31);
    \u0275\u0275text(4, "Qu\u1EA3n l\xFD Gi\u1EA3ng vi\xEAn");
    \u0275\u0275elementEnd()();
  }
}
function SidebarComponent_Conditional_10_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 8)(2, "p", 9);
    \u0275\u0275text(3, "Qu\u1EA3n tr\u1ECB H\u1EC7 th\u1ED1ng");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
}
function SidebarComponent_Conditional_10_a_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 53);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 29);
    \u0275\u0275element(2, "path", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span", 31);
    \u0275\u0275text(4, "Qu\u1EA3n l\xFD T\xE0i kho\u1EA3n");
    \u0275\u0275elementEnd()();
  }
}
function SidebarComponent_Conditional_10_a_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 55);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 29);
    \u0275\u0275element(2, "path", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span", 31);
    \u0275\u0275text(4, "Qu\u1EA3n l\xFD Vai tr\xF2");
    \u0275\u0275elementEnd()();
  }
}
function SidebarComponent_Conditional_10_a_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 57);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 29);
    \u0275\u0275element(2, "path", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span", 31);
    \u0275\u0275text(4, "Qu\u1EA3n l\xFD Quy\u1EC1n");
    \u0275\u0275elementEnd()();
  }
}
function SidebarComponent_Conditional_10_a_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 59);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 29);
    \u0275\u0275element(2, "path", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span", 31);
    \u0275\u0275text(4, "Nh\u1EADt k\xFD ho\u1EA1t \u0111\u1ED9ng");
    \u0275\u0275elementEnd()();
  }
}
function SidebarComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "p", 9);
    \u0275\u0275text(2, "Qu\u1EA3n l\xFD \u0110\xE0o t\u1EA1o");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, SidebarComponent_Conditional_10_a_3_Template, 5, 0, "a", 10)(4, SidebarComponent_Conditional_10_a_4_Template, 5, 0, "a", 11)(5, SidebarComponent_Conditional_10_a_5_Template, 5, 0, "a", 12)(6, SidebarComponent_Conditional_10_a_6_Template, 5, 0, "a", 13)(7, SidebarComponent_Conditional_10_a_7_Template, 5, 0, "a", 14)(8, SidebarComponent_Conditional_10_a_8_Template, 5, 0, "a", 15)(9, SidebarComponent_Conditional_10_a_9_Template, 5, 0, "a", 16)(10, SidebarComponent_Conditional_10_a_10_Template, 5, 0, "a", 17)(11, SidebarComponent_Conditional_10_a_11_Template, 5, 0, "a", 18)(12, SidebarComponent_Conditional_10_a_12_Template, 5, 0, "a", 19)(13, SidebarComponent_Conditional_10_a_13_Template, 5, 0, "a", 20);
    \u0275\u0275elementStart(14, "div", 8)(15, "p", 9);
    \u0275\u0275text(16, "H\u1ECDc vi\xEAn & Gi\u1EA3ng d\u1EA1y");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(17, SidebarComponent_Conditional_10_a_17_Template, 5, 0, "a", 21)(18, SidebarComponent_Conditional_10_a_18_Template, 5, 0, "a", 22)(19, SidebarComponent_Conditional_10_ng_container_19_Template, 4, 0, "ng-container", 23)(20, SidebarComponent_Conditional_10_a_20_Template, 5, 0, "a", 24)(21, SidebarComponent_Conditional_10_a_21_Template, 5, 0, "a", 25)(22, SidebarComponent_Conditional_10_a_22_Template, 5, 0, "a", 26)(23, SidebarComponent_Conditional_10_a_23_Template, 5, 0, "a", 27);
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275property("hasAnyPermission", \u0275\u0275pureFunction0(18, _c02));
    \u0275\u0275advance();
    \u0275\u0275property("hasAnyPermission", \u0275\u0275pureFunction0(19, _c1));
    \u0275\u0275advance();
    \u0275\u0275property("hasAnyPermission", \u0275\u0275pureFunction0(20, _c2));
    \u0275\u0275advance();
    \u0275\u0275property("hasAnyPermission", \u0275\u0275pureFunction0(21, _c3));
    \u0275\u0275advance();
    \u0275\u0275property("hasAnyPermission", \u0275\u0275pureFunction0(22, _c4));
    \u0275\u0275advance();
    \u0275\u0275property("hasPermission", "ASSIGNMENT_VIEW");
    \u0275\u0275advance();
    \u0275\u0275property("hasPermission", "ASSIGNMENT_VIEW");
    \u0275\u0275advance();
    \u0275\u0275property("hasPermission", "ASSIGNMENT_VIEW");
    \u0275\u0275advance();
    \u0275\u0275property("hasAnyPermission", \u0275\u0275pureFunction0(23, _c5));
    \u0275\u0275advance();
    \u0275\u0275property("hasAnyPermission", \u0275\u0275pureFunction0(24, _c6));
    \u0275\u0275advance();
    \u0275\u0275property("hasAnyPermission", \u0275\u0275pureFunction0(25, _c7));
    \u0275\u0275advance(4);
    \u0275\u0275property("hasAnyPermission", \u0275\u0275pureFunction0(26, _c8));
    \u0275\u0275advance();
    \u0275\u0275property("hasAnyPermission", \u0275\u0275pureFunction0(27, _c9));
    \u0275\u0275advance();
    \u0275\u0275property("hasAnyPermission", \u0275\u0275pureFunction0(28, _c10));
    \u0275\u0275advance();
    \u0275\u0275property("hasAnyPermission", \u0275\u0275pureFunction0(29, _c11));
    \u0275\u0275advance();
    \u0275\u0275property("hasAnyPermission", \u0275\u0275pureFunction0(30, _c12));
    \u0275\u0275advance();
    \u0275\u0275property("hasAnyPermission", \u0275\u0275pureFunction0(31, _c13));
    \u0275\u0275advance();
    \u0275\u0275property("hasAnyPermission", \u0275\u0275pureFunction0(32, _c14));
  }
}
function SidebarComponent_Conditional_11_a_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 81);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 29);
    \u0275\u0275element(2, "path", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span", 31);
    \u0275\u0275text(4, "Qu\u1EA3n l\xFD Kh\xF3a h\u1ECDc");
    \u0275\u0275elementEnd()();
  }
}
function SidebarComponent_Conditional_11_a_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 82);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 29);
    \u0275\u0275element(2, "path", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span", 31);
    \u0275\u0275text(4, "Qu\u1EA3n l\xFD K\u1EF3 h\u1ECDc");
    \u0275\u0275elementEnd()();
  }
}
function SidebarComponent_Conditional_11_a_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 83);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 29);
    \u0275\u0275element(2, "path", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span", 31);
    \u0275\u0275text(4, "Qu\u1EA3n l\xFD L\u1EDBp h\u1ECDc");
    \u0275\u0275elementEnd()();
  }
}
function SidebarComponent_Conditional_11_a_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 84);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 29);
    \u0275\u0275element(2, "path", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span", 31);
    \u0275\u0275text(4, "Qu\u1EA3n l\xFD L\u1ECBch h\u1ECDc");
    \u0275\u0275elementEnd()();
  }
}
function SidebarComponent_Conditional_11_a_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 85);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 29);
    \u0275\u0275element(2, "path", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span", 31);
    \u0275\u0275text(4, "Qu\u1EA3n l\xFD Ph\xF2ng h\u1ECDc");
    \u0275\u0275elementEnd()();
  }
}
function SidebarComponent_Conditional_11_a_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 86);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 29);
    \u0275\u0275element(2, "path", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span", 31);
    \u0275\u0275text(4, "Ph\xE2n c\xF4ng Gi\u1EA3ng d\u1EA1y");
    \u0275\u0275elementEnd()();
  }
}
function SidebarComponent_Conditional_11_a_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 87);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 29);
    \u0275\u0275element(2, "path", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span", 31);
    \u0275\u0275text(4, "Ph\xE2n c\xF4ng Bu\u1ED5i h\u1ECDc");
    \u0275\u0275elementEnd()();
  }
}
function SidebarComponent_Conditional_11_a_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 88);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 29);
    \u0275\u0275element(2, "path", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span", 31);
    \u0275\u0275text(4, "Qu\u1EA3n l\xFD D\u1EA1y thay");
    \u0275\u0275elementEnd()();
  }
}
function SidebarComponent_Conditional_11_a_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 89);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 29);
    \u0275\u0275element(2, "path", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span", 31);
    \u0275\u0275text(4, "Qu\u1EA3n l\xFD X\u1EBFp l\u1EDBp");
    \u0275\u0275elementEnd()();
  }
}
function SidebarComponent_Conditional_11_a_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 90);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 29);
    \u0275\u0275element(2, "path", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span", 31);
    \u0275\u0275text(4, "Qu\u1EA3n l\xFD T\xE0i li\u1EC7u H\u1ECDc t\u1EADp");
    \u0275\u0275elementEnd()();
  }
}
function SidebarComponent_Conditional_11_a_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 91);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 29);
    \u0275\u0275element(2, "path", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span", 31);
    \u0275\u0275text(4, "B\xE1o c\xE1o Th\u1ED1ng k\xEA");
    \u0275\u0275elementEnd()();
  }
}
function SidebarComponent_Conditional_11_a_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 92);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 29);
    \u0275\u0275element(2, "path", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span", 31);
    \u0275\u0275text(4, "Qu\u1EA3n l\xFD H\u1ECDc vi\xEAn");
    \u0275\u0275elementEnd()();
  }
}
function SidebarComponent_Conditional_11_a_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 93);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 29);
    \u0275\u0275element(2, "path", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span", 31);
    \u0275\u0275text(4, "Qu\u1EA3n l\xFD Nh\xE2n s\u1EF1 & Gi\xE1o vi\xEAn");
    \u0275\u0275elementEnd()();
  }
}
function SidebarComponent_Conditional_11_a_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 94);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 29);
    \u0275\u0275element(2, "path", 95);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span", 31);
    \u0275\u0275text(4, "Qu\u1EA3n l\xFD Ph\xF2ng ban/T\u1ED5 b\u1ED9 m\xF4n");
    \u0275\u0275elementEnd()();
  }
}
function SidebarComponent_Conditional_11_a_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 96);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 29);
    \u0275\u0275element(2, "path", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span", 31);
    \u0275\u0275text(4, "Qu\u1EA3n l\xFD Vai tr\xF2");
    \u0275\u0275elementEnd()();
  }
}
function SidebarComponent_Conditional_11_a_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 97);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 29);
    \u0275\u0275element(2, "path", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span", 31);
    \u0275\u0275text(4, "Qu\u1EA3n l\xFD Quy\u1EC1n");
    \u0275\u0275elementEnd()();
  }
}
function SidebarComponent_Conditional_11_a_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 98);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 29);
    \u0275\u0275element(2, "path", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span", 31);
    \u0275\u0275text(4, "Qu\u1EA3n l\xFD T\xE0i kho\u1EA3n");
    \u0275\u0275elementEnd()();
  }
}
function SidebarComponent_Conditional_11_a_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 99);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 29);
    \u0275\u0275element(2, "path", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span", 31);
    \u0275\u0275text(4, "Nh\u1EADt k\xFD ho\u1EA1t \u0111\u1ED9ng");
    \u0275\u0275elementEnd()();
  }
}
function SidebarComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 61);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 29);
    \u0275\u0275element(2, "path", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span", 31);
    \u0275\u0275text(4, "T\u1ED5ng quan");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 8)(6, "p", 9);
    \u0275\u0275text(7, "Qu\u1EA3n l\xFD D\u1EEF li\u1EC7u");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, SidebarComponent_Conditional_11_a_8_Template, 5, 0, "a", 63)(9, SidebarComponent_Conditional_11_a_9_Template, 5, 0, "a", 64)(10, SidebarComponent_Conditional_11_a_10_Template, 5, 0, "a", 65)(11, SidebarComponent_Conditional_11_a_11_Template, 5, 0, "a", 66)(12, SidebarComponent_Conditional_11_a_12_Template, 5, 0, "a", 67)(13, SidebarComponent_Conditional_11_a_13_Template, 5, 0, "a", 68)(14, SidebarComponent_Conditional_11_a_14_Template, 5, 0, "a", 69)(15, SidebarComponent_Conditional_11_a_15_Template, 5, 0, "a", 70)(16, SidebarComponent_Conditional_11_a_16_Template, 5, 0, "a", 71)(17, SidebarComponent_Conditional_11_a_17_Template, 5, 0, "a", 72)(18, SidebarComponent_Conditional_11_a_18_Template, 5, 0, "a", 73);
    \u0275\u0275elementStart(19, "div", 8)(20, "p", 9);
    \u0275\u0275text(21, "Qu\u1EA3n l\xFD ng\u01B0\u1EDDi d\xF9ng");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(22, SidebarComponent_Conditional_11_a_22_Template, 5, 0, "a", 74)(23, SidebarComponent_Conditional_11_a_23_Template, 5, 0, "a", 75)(24, SidebarComponent_Conditional_11_a_24_Template, 5, 0, "a", 76)(25, SidebarComponent_Conditional_11_a_25_Template, 5, 0, "a", 77)(26, SidebarComponent_Conditional_11_a_26_Template, 5, 0, "a", 78)(27, SidebarComponent_Conditional_11_a_27_Template, 5, 0, "a", 79)(28, SidebarComponent_Conditional_11_a_28_Template, 5, 0, "a", 80);
  }
  if (rf & 2) {
    \u0275\u0275advance(8);
    \u0275\u0275property("hasAnyPermission", \u0275\u0275pureFunction0(18, _c15));
    \u0275\u0275advance();
    \u0275\u0275property("hasAnyPermission", \u0275\u0275pureFunction0(19, _c1));
    \u0275\u0275advance();
    \u0275\u0275property("hasAnyPermission", \u0275\u0275pureFunction0(20, _c2));
    \u0275\u0275advance();
    \u0275\u0275property("hasAnyPermission", \u0275\u0275pureFunction0(21, _c3));
    \u0275\u0275advance();
    \u0275\u0275property("hasAnyPermission", \u0275\u0275pureFunction0(22, _c4));
    \u0275\u0275advance();
    \u0275\u0275property("hasPermission", "ASSIGNMENT_VIEW");
    \u0275\u0275advance();
    \u0275\u0275property("hasPermission", "ASSIGNMENT_VIEW");
    \u0275\u0275advance();
    \u0275\u0275property("hasPermission", "ASSIGNMENT_VIEW");
    \u0275\u0275advance();
    \u0275\u0275property("hasAnyPermission", \u0275\u0275pureFunction0(23, _c5));
    \u0275\u0275advance();
    \u0275\u0275property("hasAnyPermission", \u0275\u0275pureFunction0(24, _c6));
    \u0275\u0275advance();
    \u0275\u0275property("hasAnyPermission", \u0275\u0275pureFunction0(25, _c7));
    \u0275\u0275advance(4);
    \u0275\u0275property("hasAnyPermission", \u0275\u0275pureFunction0(26, _c8));
    \u0275\u0275advance();
    \u0275\u0275property("hasAnyPermission", \u0275\u0275pureFunction0(27, _c9));
    \u0275\u0275advance();
    \u0275\u0275property("hasAnyPermission", \u0275\u0275pureFunction0(28, _c16));
    \u0275\u0275advance();
    \u0275\u0275property("hasAnyPermission", \u0275\u0275pureFunction0(29, _c12));
    \u0275\u0275advance();
    \u0275\u0275property("hasAnyPermission", \u0275\u0275pureFunction0(30, _c13));
    \u0275\u0275advance();
    \u0275\u0275property("hasAnyPermission", \u0275\u0275pureFunction0(31, _c11));
    \u0275\u0275advance();
    \u0275\u0275property("hasAnyPermission", \u0275\u0275pureFunction0(32, _c14));
  }
}
var SidebarComponent = class _SidebarComponent {
  isSidebarVisible = true;
  router = inject(Router);
  authService = inject(AuthService);
  isAcademicMode = signal(false, ...ngDevMode ? [{ debugName: "isAcademicMode" }] : (
    /* istanbul ignore next */
    []
  ));
  ngOnInit() {
    this.checkMode();
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      this.checkMode();
    });
  }
  checkMode() {
    const isAcademicUrl = this.router.url.startsWith("/academic");
    const isAdminUrl = this.router.url.startsWith("/admin");
    if (isAdminUrl) {
      this.isAcademicMode.set(false);
      return;
    }
    const roles = this.authService.authState().roles || [];
    const isAcademicRoleOnly = roles.some((r) => r === "ACADEMIC" || r === "ROLE_ACADEMIC" || r === "TRAINING" || r === "ROLE_TRAINING") && !roles.some((r) => r === "ADMIN" || r === "ROLE_ADMIN" || r === "SYSTEM_ADMIN" || r === "ROLE_SYSTEM_ADMIN");
    this.isAcademicMode.set(isAcademicUrl || isAcademicRoleOnly);
  }
  static \u0275fac = function SidebarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SidebarComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SidebarComponent, selectors: [["app-sidebar"]], inputs: { isSidebarVisible: "isSidebarVisible" }, decls: 12, vars: 4, consts: [[1, "sidebar", "bg-white", "border-r", "border-gray-100", "flex", "flex-col", "z-40", "transition-all", "duration-300"], [1, "header-logo", "h-16", "flex", "items-center", "px-6", "border-b", "border-gray-100", "justify-between"], [1, "flex", "items-center"], ["src", "assets/Icon-Dai-hoc-CMC.png", "alt", "EduSystem Logo", 1, "w-8", "h-8", "object-contain", "mr-3"], [1, "text-xl", "font-extrabold", "text-gray-800", "tracking-tight", "block", "leading-none"], [1, "text-[10px]", "font-bold", "text-blue-600", "tracking-wider", "uppercase", "block", "mt-1"], [1, "text-[10px]", "font-bold", "text-gray-400", "tracking-wider", "uppercase", "block", "mt-1"], [1, "flex-1", "overflow-y-auto", "py-6", "px-3", "space-y-1.5", "scrollbar-thin"], [1, "px-3", "pt-5", "pb-2"], [1, "text-xs", "font-semibold", "text-gray-400", "uppercase", "tracking-wider"], ["routerLink", "/academic/courses", "routerLinkActive", "active-link", "class", "menu-item group", 4, "hasAnyPermission"], ["routerLink", "/academic/terms", "routerLinkActive", "active-link", "class", "menu-item group", 4, "hasAnyPermission"], ["routerLink", "/academic/classes", "routerLinkActive", "active-link", "class", "menu-item group", 4, "hasAnyPermission"], ["routerLink", "/academic/schedules", "routerLinkActive", "active-link", "class", "menu-item group", 4, "hasAnyPermission"], ["routerLink", "/academic/rooms", "routerLinkActive", "active-link", "class", "menu-item group", 4, "hasAnyPermission"], ["routerLink", "/academic/teaching-assignments", "routerLinkActive", "active-link", "class", "menu-item group", 4, "hasPermission"], ["routerLink", "/academic/schedule-assignments", "routerLinkActive", "active-link", "class", "menu-item group", 4, "hasPermission"], ["routerLink", "/academic/teaching-substitutions", "routerLinkActive", "active-link", "class", "menu-item group", 4, "hasPermission"], ["routerLink", "/academic/enrollments", "routerLinkActive", "active-link", "class", "menu-item group", 4, "hasAnyPermission"], ["routerLink", "/academic/learning-materials", "routerLinkActive", "active-link", "class", "menu-item group", 4, "hasAnyPermission"], ["routerLink", "/academic/reports", "routerLinkActive", "active-link", "class", "menu-item group", 4, "hasAnyPermission"], ["routerLink", "/academic/students", "routerLinkActive", "active-link", "class", "menu-item group", 4, "hasAnyPermission"], ["routerLink", "/academic/staffs", "routerLinkActive", "active-link", "class", "menu-item group", 4, "hasAnyPermission"], [4, "hasAnyPermission"], ["routerLink", "/academic/users", "routerLinkActive", "active-link", "class", "menu-item group", 4, "hasAnyPermission"], ["routerLink", "/academic/roles", "routerLinkActive", "active-link", "class", "menu-item group", 4, "hasAnyPermission"], ["routerLink", "/academic/permissions", "routerLinkActive", "active-link", "class", "menu-item group", 4, "hasAnyPermission"], ["routerLink", "/academic/activity-logs", "routerLinkActive", "active-link", "class", "menu-item group", 4, "hasAnyPermission"], ["routerLink", "/academic/courses", "routerLinkActive", "active-link", 1, "menu-item", "group"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "icon"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"], [1, "font-medium"], ["routerLink", "/academic/terms", "routerLinkActive", "active-link", 1, "menu-item", "group"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"], ["routerLink", "/academic/classes", "routerLinkActive", "active-link", 1, "menu-item", "group"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"], ["routerLink", "/academic/schedules", "routerLinkActive", "active-link", 1, "menu-item", "group"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"], ["routerLink", "/academic/rooms", "routerLinkActive", "active-link", 1, "menu-item", "group"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0v-5a2 2 0 012-2h2a2 2 0 012 2v5m-6 0h6"], ["routerLink", "/academic/teaching-assignments", "routerLinkActive", "active-link", 1, "menu-item", "group"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"], ["routerLink", "/academic/schedule-assignments", "routerLinkActive", "active-link", 1, "menu-item", "group"], ["routerLink", "/academic/teaching-substitutions", "routerLinkActive", "active-link", 1, "menu-item", "group"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"], ["routerLink", "/academic/enrollments", "routerLinkActive", "active-link", 1, "menu-item", "group"], ["routerLink", "/academic/learning-materials", "routerLinkActive", "active-link", 1, "menu-item", "group"], ["routerLink", "/academic/reports", "routerLinkActive", "active-link", 1, "menu-item", "group"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"], ["routerLink", "/academic/students", "routerLinkActive", "active-link", 1, "menu-item", "group"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"], ["routerLink", "/academic/staffs", "routerLinkActive", "active-link", 1, "menu-item", "group"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"], ["routerLink", "/academic/users", "routerLinkActive", "active-link", 1, "menu-item", "group"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"], ["routerLink", "/academic/roles", "routerLinkActive", "active-link", 1, "menu-item", "group"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M17 20h5v-1a4 4 0 00-5-3.87M9 20H4v-1a4 4 0 015-3.87m8-3.13a4 4 0 10-8 0 4 4 0 008 0zM5 10a4 4 0 118 0 4 4 0 008 0z"], ["routerLink", "/academic/permissions", "routerLinkActive", "active-link", 1, "menu-item", "group"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 3l7 4v5c0 5-3.5 9-7 9s-7-4-7-9V7l7-4z"], ["routerLink", "/academic/activity-logs", "routerLinkActive", "active-link", 1, "menu-item", "group"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"], ["routerLink", "/admin/dashboard", "routerLinkActive", "active-link", 1, "menu-item", "group"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"], ["routerLink", "/admin/courses", "routerLinkActive", "active-link", "class", "menu-item group", 4, "hasAnyPermission"], ["routerLink", "/admin/terms", "routerLinkActive", "active-link", "class", "menu-item group", 4, "hasAnyPermission"], ["routerLink", "/admin/classes", "routerLinkActive", "active-link", "class", "menu-item group", 4, "hasAnyPermission"], ["routerLink", "/admin/class-schedules", "routerLinkActive", "active-link", "class", "menu-item group", 4, "hasAnyPermission"], ["routerLink", "/admin/rooms", "routerLinkActive", "active-link", "class", "menu-item group", 4, "hasAnyPermission"], ["routerLink", "/admin/teaching-assignments", "routerLinkActive", "active-link", "class", "menu-item group", 4, "hasPermission"], ["routerLink", "/admin/schedule-assignments", "routerLinkActive", "active-link", "class", "menu-item group", 4, "hasPermission"], ["routerLink", "/admin/teaching-substitutions", "routerLinkActive", "active-link", "class", "menu-item group", 4, "hasPermission"], ["routerLink", "/admin/enrollments", "routerLinkActive", "active-link", "class", "menu-item group", 4, "hasAnyPermission"], ["routerLink", "/admin/learning-materials", "routerLinkActive", "active-link", "class", "menu-item group", 4, "hasAnyPermission"], ["routerLink", "/admin/reports", "routerLinkActive", "active-link", "class", "menu-item group", 4, "hasAnyPermission"], ["routerLink", "/admin/students", "routerLinkActive", "active-link", "class", "menu-item group", 4, "hasAnyPermission"], ["routerLink", "/admin/staffs", "routerLinkActive", "active-link", "class", "menu-item group", 4, "hasAnyPermission"], ["routerLink", "/admin/departments", "routerLinkActive", "active-link", "class", "menu-item group", 4, "hasAnyPermission"], ["routerLink", "/admin/roles", "routerLinkActive", "active-link", "class", "menu-item group", 4, "hasAnyPermission"], ["routerLink", "/admin/permissions", "routerLinkActive", "active-link", "class", "menu-item group", 4, "hasAnyPermission"], ["routerLink", "/admin/users", "routerLinkActive", "active-link", "class", "menu-item group", 4, "hasAnyPermission"], ["routerLink", "/admin/activity-logs", "routerLinkActive", "active-link", "class", "menu-item group", 4, "hasAnyPermission"], ["routerLink", "/admin/courses", "routerLinkActive", "active-link", 1, "menu-item", "group"], ["routerLink", "/admin/terms", "routerLinkActive", "active-link", 1, "menu-item", "group"], ["routerLink", "/admin/classes", "routerLinkActive", "active-link", 1, "menu-item", "group"], ["routerLink", "/admin/class-schedules", "routerLinkActive", "active-link", 1, "menu-item", "group"], ["routerLink", "/admin/rooms", "routerLinkActive", "active-link", 1, "menu-item", "group"], ["routerLink", "/admin/teaching-assignments", "routerLinkActive", "active-link", 1, "menu-item", "group"], ["routerLink", "/admin/schedule-assignments", "routerLinkActive", "active-link", 1, "menu-item", "group"], ["routerLink", "/admin/teaching-substitutions", "routerLinkActive", "active-link", 1, "menu-item", "group"], ["routerLink", "/admin/enrollments", "routerLinkActive", "active-link", 1, "menu-item", "group"], ["routerLink", "/admin/learning-materials", "routerLinkActive", "active-link", 1, "menu-item", "group"], ["routerLink", "/admin/reports", "routerLinkActive", "active-link", 1, "menu-item", "group"], ["routerLink", "/admin/students", "routerLinkActive", "active-link", 1, "menu-item", "group"], ["routerLink", "/admin/staffs", "routerLinkActive", "active-link", 1, "menu-item", "group"], ["routerLink", "/admin/departments", "routerLinkActive", "active-link", 1, "menu-item", "group"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M3 21h18M5 21V7a2 2 0 012-2h3v16M13 21V3h4a2 2 0 012 2v16"], ["routerLink", "/admin/roles", "routerLinkActive", "active-link", 1, "menu-item", "group"], ["routerLink", "/admin/permissions", "routerLinkActive", "active-link", 1, "menu-item", "group"], ["routerLink", "/admin/users", "routerLinkActive", "active-link", 1, "menu-item", "group"], ["routerLink", "/admin/activity-logs", "routerLinkActive", "active-link", 1, "menu-item", "group"]], template: function SidebarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "aside", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "img", 3);
      \u0275\u0275elementStart(4, "div")(5, "span", 4);
      \u0275\u0275text(6, "EduSystem");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(7, SidebarComponent_Conditional_7_Template, 2, 0, "span", 5)(8, SidebarComponent_Conditional_8_Template, 2, 0, "span", 6);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(9, "nav", 7);
      \u0275\u0275conditionalCreate(10, SidebarComponent_Conditional_10_Template, 24, 33)(11, SidebarComponent_Conditional_11_Template, 29, 33);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("sidebar-hidden", !ctx.isSidebarVisible);
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.isAcademicMode() ? 7 : 8);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.isAcademicMode() ? 10 : 11);
    }
  }, dependencies: [CommonModule, RouterModule, RouterLink, RouterLinkActive, HasPermissionDirective], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n}\n.sidebar[_ngcontent-%COMP%] {\n  width: 256px;\n  height: 100vh;\n  position: fixed;\n  left: 0;\n  top: 0;\n}\n.sidebar-hidden[_ngcontent-%COMP%] {\n  left: -256px;\n}\n.menu-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0.75rem 1rem;\n  border-radius: 0.75rem;\n  color: #4b5563;\n  font-size: 0.875rem;\n  transition: all 0.2s ease-in-out;\n}\n.menu-item[_ngcontent-%COMP%]:hover {\n  background-color: #f9fafb;\n  color: #111827;\n}\n.icon[_ngcontent-%COMP%] {\n  width: 1.25rem;\n  height: 1.25rem;\n  margin-right: 1rem;\n  color: #9ca3af;\n  transition: color 0.2s;\n}\n.menu-item[_ngcontent-%COMP%]:hover   .icon[_ngcontent-%COMP%] {\n  color: #2563eb;\n}\n.active-link[_ngcontent-%COMP%] {\n  background-color: #eff6ff !important;\n  color: #1d4ed8 !important;\n}\n.active-link[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  color: #2563eb !important;\n}\n/*# sourceMappingURL=sidebar.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarComponent, [{
    type: Component,
    args: [{ selector: "app-sidebar", standalone: true, imports: [CommonModule, RouterModule, HasPermissionDirective], template: `
    <aside [class.sidebar-hidden]="!isSidebarVisible" class="sidebar bg-white border-r border-gray-100 flex flex-col z-40 transition-all duration-300">
      
      <!-- LOGO HEADER -->
      <div class="header-logo h-16 flex items-center px-6 border-b border-gray-100 justify-between">
        <div class="flex items-center">
          <img src="assets/Icon-Dai-hoc-CMC.png" alt="EduSystem Logo" class="w-8 h-8 object-contain mr-3">
          <div>
            <span class="text-xl font-extrabold text-gray-800 tracking-tight block leading-none">EduSystem</span>
            @if (isAcademicMode()) {
              <span class="text-[10px] font-bold text-blue-600 tracking-wider uppercase block mt-1">B\u1ED9 ph\u1EADn \u0110\xE0o t\u1EA1o</span>
            } @else {
              <span class="text-[10px] font-bold text-gray-400 tracking-wider uppercase block mt-1">Qu\u1EA3n tr\u1ECB H\u1EC7 th\u1ED1ng</span>
            }
          </div>
        </div>
      </div>

      <!-- NAVIGATION MENU -->
      <nav class="flex-1 overflow-y-auto py-6 px-3 space-y-1.5 scrollbar-thin">
        
        <!-- MODE B\u1ED8 PH\u1EACN \u0110\xC0O T\u1EA0O (ACADEMIC PORTAL) -->
        @if (isAcademicMode()) {

          <!-- SECTION: QU\u1EA2N L\xDD CH\u01AF\u01A0NG TR\xCCNH & L\u1EDAP H\u1ECCC -->
          <div class="px-3 pt-5 pb-2">
            <p class="text-xs font-semibold text-gray-400 uppercase tracking-wider">Qu\u1EA3n l\xFD \u0110\xE0o t\u1EA1o</p>
          </div>

          <a *hasAnyPermission="['COURSES_VIEW', 'COURSES_READ', 'COURSES_MANAGE', 'COURSE_VIEW', 'COURSE_READ', 'COURSE_MANAGE']" routerLink="/academic/courses" routerLinkActive="active-link" class="menu-item group">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
            </svg>
            <span class="font-medium">Qu\u1EA3n l\xFD Kh\xF3a h\u1ECDc</span>
          </a>

          <a *hasAnyPermission="['TERM_VIEW', 'TERM_READ', 'TERM_MANAGE', 'TERM_CREATE', 'TERM_UPDATE']" routerLink="/academic/terms" routerLinkActive="active-link" class="menu-item group">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            <span class="font-medium">Qu\u1EA3n l\xFD K\u1EF3 h\u1ECDc</span>
          </a>

          <a *hasAnyPermission="['CLASS_VIEW', 'CLASS_READ', 'CLASS_MANAGE', 'CLASS_CREATE', 'CLASS_UPDATE']" routerLink="/academic/classes" routerLinkActive="active-link" class="menu-item group">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
            <span class="font-medium">Qu\u1EA3n l\xFD L\u1EDBp h\u1ECDc</span>
          </a>

          <a *hasAnyPermission="['SCHEDULE_VIEW', 'SCHEDULE_READ', 'SCHEDULE_MANAGE', 'SCHEDULE_CREATE']" routerLink="/academic/schedules" routerLinkActive="active-link" class="menu-item group">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span class="font-medium">Qu\u1EA3n l\xFD L\u1ECBch h\u1ECDc</span>
          </a>

          <a *hasAnyPermission="['ROOM_VIEW', 'ROOM_READ', 'ROOM_MANAGE', 'ROOM_CREATE']" routerLink="/academic/rooms" routerLinkActive="active-link" class="menu-item group">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0v-5a2 2 0 012-2h2a2 2 0 012 2v5m-6 0h6"></path>
            </svg>
            <span class="font-medium">Qu\u1EA3n l\xFD Ph\xF2ng h\u1ECDc</span>
          </a>

          <a *hasPermission="'ASSIGNMENT_VIEW'" routerLink="/academic/teaching-assignments" routerLinkActive="active-link" class="menu-item group">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
            <span class="font-medium">Ph\xE2n c\xF4ng Gi\u1EA3ng d\u1EA1y</span>
          </a>

          <a *hasPermission="'ASSIGNMENT_VIEW'" routerLink="/academic/schedule-assignments" routerLinkActive="active-link" class="menu-item group">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            <span class="font-medium">Ph\xE2n c\xF4ng Bu\u1ED5i h\u1ECDc</span>
          </a>

          <a *hasPermission="'ASSIGNMENT_VIEW'" routerLink="/academic/teaching-substitutions" routerLinkActive="active-link" class="menu-item group">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
            </svg>
            <span class="font-medium">Qu\u1EA3n l\xFD D\u1EA1y thay</span>
          </a>

          <a *hasAnyPermission="['ENROLLMENT_VIEW', 'ENROLLMENT_READ', 'ENROLLMENT_MANAGE', 'ENROLLMENT_CREATE']" routerLink="/academic/enrollments" routerLinkActive="active-link" class="menu-item group">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
            <span class="font-medium">Qu\u1EA3n l\xFD X\u1EBFp l\u1EDBp</span>
          </a>

          <a *hasAnyPermission="['MATERIAL_VIEW', 'MATERIAL_READ', 'MATERIAL_MANAGE', 'MATERIAL_CREATE', 'LEARNING_MATERIAL_VIEW', 'LEARNING_MATERIAL_READ']" routerLink="/academic/learning-materials" routerLinkActive="active-link" class="menu-item group">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
            </svg>
            <span class="font-medium">Qu\u1EA3n l\xFD T\xE0i li\u1EC7u H\u1ECDc t\u1EADp</span>
          </a>

          <a *hasAnyPermission="['REPORT_VIEW', 'REPORT_READ', 'TRAINING_VIEW', 'REPORT_MANAGE']" routerLink="/academic/reports" routerLinkActive="active-link" class="menu-item group">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
            </svg>
            <span class="font-medium">B\xE1o c\xE1o & Th\u1ED1ng k\xEA</span>
          </a>

          <!-- SECTION: NH\xC2N S\u1EF0 & H\u1ECCC VI\xCAN -->
          <div class="px-3 pt-5 pb-2">
            <p class="text-xs font-semibold text-gray-400 uppercase tracking-wider">H\u1ECDc vi\xEAn & Gi\u1EA3ng d\u1EA1y</p>
          </div>

          <a *hasAnyPermission="['STUDENT_VIEW', 'STUDENT_READ', 'STUDENT_MANAGE', 'STUDENT_CREATE']" routerLink="/academic/students" routerLinkActive="active-link" class="menu-item group">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
            </svg>
            <span class="font-medium">Qu\u1EA3n l\xFD H\u1ECDc vi\xEAn</span>
          </a>

          <a *hasAnyPermission="['STAFF_VIEW', 'STAFF_READ', 'STAFF_MANAGE', 'STAFF_CREATE']" routerLink="/academic/staffs" routerLinkActive="active-link" class="menu-item group">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            <span class="font-medium">Qu\u1EA3n l\xFD Gi\u1EA3ng vi\xEAn</span>
          </a>

          <!-- SECTION: QU\u1EA2N TR\u1ECA H\u1EC6 TH\u1ED0NG (visible in Academic mode if user has account perms) -->
          <ng-container *hasAnyPermission="['ACCOUNT_VIEW', 'ACCOUNT_READ', 'ACCOUNT_MANAGE', 'ACCOUNT_UPDATE', 'ROLE_VIEW', 'ROLE_READ', 'ROLE_MANAGE', 'PERMISSION_VIEW', 'PERMISSION_READ', 'LOG_VIEW', 'LOG_READ']">
            <div class="px-3 pt-5 pb-2">
              <p class="text-xs font-semibold text-gray-400 uppercase tracking-wider">Qu\u1EA3n tr\u1ECB H\u1EC7 th\u1ED1ng</p>
            </div>
          </ng-container>

          <a *hasAnyPermission="['ACCOUNT_VIEW', 'ACCOUNT_READ', 'ACCOUNT_MANAGE', 'ACCOUNT_UPDATE']" routerLink="/academic/users" routerLinkActive="active-link" class="menu-item group">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
            <span class="font-medium">Qu\u1EA3n l\xFD T\xE0i kho\u1EA3n</span>
          </a>

          <a *hasAnyPermission="['ROLE_VIEW', 'ROLE_READ', 'ROLE_MANAGE', 'ROLE_CREATE']" routerLink="/academic/roles" routerLinkActive="active-link" class="menu-item group">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-1a4 4 0 00-5-3.87M9 20H4v-1a4 4 0 015-3.87m8-3.13a4 4 0 10-8 0 4 4 0 008 0zM5 10a4 4 0 118 0 4 4 0 008 0z" />
            </svg>
            <span class="font-medium">Qu\u1EA3n l\xFD Vai tr\xF2</span>
          </a>

          <a *hasAnyPermission="['PERMISSION_VIEW', 'PERMISSION_READ', 'PERMISSION_MANAGE', 'PERMISSION_CREATE']" routerLink="/academic/permissions" routerLinkActive="active-link" class="menu-item group">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3l7 4v5c0 5-3.5 9-7 9s-7-4-7-9V7l7-4z" />
            </svg>
            <span class="font-medium">Qu\u1EA3n l\xFD Quy\u1EC1n</span>
          </a>

          <a *hasAnyPermission="['LOG_VIEW', 'LOG_READ', 'ROLE_VIEW']" routerLink="/academic/activity-logs" routerLinkActive="active-link" class="menu-item group">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
            <span class="font-medium">Nh\u1EADt k\xFD ho\u1EA1t \u0111\u1ED9ng</span>
          </a>

        } @else {
          <!-- MODE QU\u1EA2N TR\u1ECA H\u1EC6 TH\u1ED0NG (FULL ADMIN PORTAL) -->

          <a routerLink="/admin/dashboard" routerLinkActive="active-link" class="menu-item group">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
            <span class="font-medium">T\u1ED5ng quan</span>
          </a>

          <div class="px-3 pt-5 pb-2">
            <p class="text-xs font-semibold text-gray-400 uppercase tracking-wider">Qu\u1EA3n l\xFD D\u1EEF li\u1EC7u</p>
          </div>

          <a *hasAnyPermission="['COURSE_VIEW', 'COURSE_READ', 'COURSE_MANAGE', 'COURSE_CREATE', 'COURSE_UPDATE']" routerLink="/admin/courses" routerLinkActive="active-link" class="menu-item group">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
            </svg>
            <span class="font-medium">Qu\u1EA3n l\xFD Kh\xF3a h\u1ECDc</span>
          </a>

          <a *hasAnyPermission="['TERM_VIEW', 'TERM_READ', 'TERM_MANAGE', 'TERM_CREATE', 'TERM_UPDATE']" routerLink="/admin/terms" routerLinkActive="active-link" class="menu-item group">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            <span class="font-medium">Qu\u1EA3n l\xFD K\u1EF3 h\u1ECDc</span>
          </a>

          <a *hasAnyPermission="['CLASS_VIEW', 'CLASS_READ', 'CLASS_MANAGE', 'CLASS_CREATE', 'CLASS_UPDATE']" routerLink="/admin/classes" routerLinkActive="active-link" class="menu-item group">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
            <span class="font-medium">Qu\u1EA3n l\xFD L\u1EDBp h\u1ECDc</span>
          </a>

          <a *hasAnyPermission="['SCHEDULE_VIEW', 'SCHEDULE_READ', 'SCHEDULE_MANAGE', 'SCHEDULE_CREATE']" routerLink="/admin/class-schedules" routerLinkActive="active-link" class="menu-item group">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span class="font-medium">Qu\u1EA3n l\xFD L\u1ECBch h\u1ECDc</span>
          </a>

          <a *hasAnyPermission="['ROOM_VIEW', 'ROOM_READ', 'ROOM_MANAGE', 'ROOM_CREATE']" routerLink="/admin/rooms" routerLinkActive="active-link" class="menu-item group">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0v-5a2 2 0 012-2h2a2 2 0 012 2v5m-6 0h6"></path>
            </svg>
            <span class="font-medium">Qu\u1EA3n l\xFD Ph\xF2ng h\u1ECDc</span>
          </a>

          <a *hasPermission="'ASSIGNMENT_VIEW'" routerLink="/admin/teaching-assignments" routerLinkActive="active-link" class="menu-item group">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
            <span class="font-medium">Ph\xE2n c\xF4ng Gi\u1EA3ng d\u1EA1y</span>
          </a>

          <a *hasPermission="'ASSIGNMENT_VIEW'" routerLink="/admin/schedule-assignments" routerLinkActive="active-link" class="menu-item group">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            <span class="font-medium">Ph\xE2n c\xF4ng Bu\u1ED5i h\u1ECDc</span>
          </a>

          <a *hasPermission="'ASSIGNMENT_VIEW'" routerLink="/admin/teaching-substitutions" routerLinkActive="active-link" class="menu-item group">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
            </svg>
            <span class="font-medium">Qu\u1EA3n l\xFD D\u1EA1y thay</span>
          </a>

          <a *hasAnyPermission="['ENROLLMENT_VIEW', 'ENROLLMENT_READ', 'ENROLLMENT_MANAGE', 'ENROLLMENT_CREATE']" routerLink="/admin/enrollments" routerLinkActive="active-link" class="menu-item group">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
            <span class="font-medium">Qu\u1EA3n l\xFD X\u1EBFp l\u1EDBp</span>
          </a>

          <a *hasAnyPermission="['MATERIAL_VIEW', 'MATERIAL_READ', 'MATERIAL_MANAGE', 'MATERIAL_CREATE', 'LEARNING_MATERIAL_VIEW', 'LEARNING_MATERIAL_READ']" routerLink="/admin/learning-materials" routerLinkActive="active-link" class="menu-item group">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
            </svg>
            <span class="font-medium">Qu\u1EA3n l\xFD T\xE0i li\u1EC7u H\u1ECDc t\u1EADp</span>
          </a>

          <a *hasAnyPermission="['REPORT_VIEW', 'REPORT_READ', 'TRAINING_VIEW', 'REPORT_MANAGE']" routerLink="/admin/reports" routerLinkActive="active-link" class="menu-item group">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
            </svg>
            <span class="font-medium">B\xE1o c\xE1o Th\u1ED1ng k\xEA</span>
          </a>

          <div class="px-3 pt-5 pb-2">
            <p class="text-xs font-semibold text-gray-400 uppercase tracking-wider">Qu\u1EA3n l\xFD ng\u01B0\u1EDDi d\xF9ng</p>
          </div>

          <a *hasAnyPermission="['STUDENT_VIEW', 'STUDENT_READ', 'STUDENT_MANAGE', 'STUDENT_CREATE']" routerLink="/admin/students" routerLinkActive="active-link" class="menu-item group">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
            </svg>
            <span class="font-medium">Qu\u1EA3n l\xFD H\u1ECDc vi\xEAn</span>
          </a>

          <a *hasAnyPermission="['STAFF_VIEW', 'STAFF_READ', 'STAFF_MANAGE', 'STAFF_CREATE']" routerLink="/admin/staffs" routerLinkActive="active-link" class="menu-item group">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            <span class="font-medium">Qu\u1EA3n l\xFD Nh\xE2n s\u1EF1 & Gi\xE1o vi\xEAn</span>
          </a>

          <a *hasAnyPermission="['DEPARTMENT_VIEW', 'DEPARTMENT_READ', 'DEPARTMENT_MANAGE', 'DEPARTMENT_CREATE']" routerLink="/admin/departments" routerLinkActive="active-link" class="menu-item group">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21h18M5 21V7a2 2 0 012-2h3v16M13 21V3h4a2 2 0 012 2v16" />
            </svg>
            <span class="font-medium">Qu\u1EA3n l\xFD Ph\xF2ng ban/T\u1ED5 b\u1ED9 m\xF4n</span>
          </a>

          <a *hasAnyPermission="['ROLE_VIEW', 'ROLE_READ', 'ROLE_MANAGE', 'ROLE_CREATE']" routerLink="/admin/roles" routerLinkActive="active-link" class="menu-item group">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-1a4 4 0 00-5-3.87M9 20H4v-1a4 4 0 015-3.87m8-3.13a4 4 0 10-8 0 4 4 0 008 0zM5 10a4 4 0 118 0 4 4 0 008 0z" />
            </svg>
            <span class="font-medium">Qu\u1EA3n l\xFD Vai tr\xF2</span>
          </a>

          <a *hasAnyPermission="['PERMISSION_VIEW', 'PERMISSION_READ', 'PERMISSION_MANAGE', 'PERMISSION_CREATE']" routerLink="/admin/permissions" routerLinkActive="active-link" class="menu-item group">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3l7 4v5c0 5-3.5 9-7 9s-7-4-7-9V7l7-4z" />
            </svg>
            <span class="font-medium">Qu\u1EA3n l\xFD Quy\u1EC1n</span>
          </a>

          <a *hasAnyPermission="['ACCOUNT_VIEW', 'ACCOUNT_READ', 'ACCOUNT_MANAGE', 'ACCOUNT_UPDATE']" routerLink="/admin/users" routerLinkActive="active-link" class="menu-item group">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
            <span class="font-medium">Qu\u1EA3n l\xFD T\xE0i kho\u1EA3n</span>
          </a>
          
          <a *hasAnyPermission="['LOG_VIEW', 'LOG_READ', 'ROLE_VIEW']" routerLink="/admin/activity-logs" routerLinkActive="active-link" class="menu-item group">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
            <span class="font-medium">Nh\u1EADt k\xFD ho\u1EA1t \u0111\u1ED9ng</span>
          </a>
        }

      </nav>
    </aside>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* angular:styles/component:scss;321661dc67b5e82e30ae83ecf8cd2963606aab4406bf4996d5679e0831255746;D:/Education-System-FrontEnd/src/app/core/layout/sidebar/sidebar.component.ts */\n:host {\n  display: block;\n  height: 100%;\n}\n.sidebar {\n  width: 256px;\n  height: 100vh;\n  position: fixed;\n  left: 0;\n  top: 0;\n}\n.sidebar-hidden {\n  left: -256px;\n}\n.menu-item {\n  display: flex;\n  align-items: center;\n  padding: 0.75rem 1rem;\n  border-radius: 0.75rem;\n  color: #4b5563;\n  font-size: 0.875rem;\n  transition: all 0.2s ease-in-out;\n}\n.menu-item:hover {\n  background-color: #f9fafb;\n  color: #111827;\n}\n.icon {\n  width: 1.25rem;\n  height: 1.25rem;\n  margin-right: 1rem;\n  color: #9ca3af;\n  transition: color 0.2s;\n}\n.menu-item:hover .icon {\n  color: #2563eb;\n}\n.active-link {\n  background-color: #eff6ff !important;\n  color: #1d4ed8 !important;\n}\n.active-link .icon {\n  color: #2563eb !important;\n}\n/*# sourceMappingURL=sidebar.component.css.map */\n"] }]
  }], null, { isSidebarVisible: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SidebarComponent, { className: "SidebarComponent", filePath: "src/app/core/layout/sidebar/sidebar.component.ts", lineNumber: 336 });
})();

// src/app/core/layout/header/header.component.ts
var HeaderComponent = class _HeaderComponent {
  authService = inject(AuthService);
  toggleSidebar = new EventEmitter();
  userName = computed(() => this.authService.authState().fullName || this.authService.authState().email || "T\xE0i kho\u1EA3n", ...ngDevMode ? [{ debugName: "userName" }] : (
    /* istanbul ignore next */
    []
  ));
  userRoleDisplay = computed(() => {
    const roles = this.authService.authState().roles || [];
    if (roles.some((r) => r === "ADMIN" || r === "SYSTEM_ADMIN" || r === "ROLE_ADMIN")) {
      return "Qu\u1EA3n tr\u1ECB vi\xEAn H\u1EC7 th\u1ED1ng";
    }
    if (roles.some((r) => r === "ACADEMIC" || r === "TRAINING" || r === "ROLE_ACADEMIC" || r === "ROLE_TRAINING")) {
      return "B\u1ED9 ph\u1EADn \u0110\xE0o t\u1EA1o";
    }
    if (roles.some((r) => r === "TEACHER" || r === "ROLE_TEACHER")) {
      return "Gi\u1EA3ng vi\xEAn";
    }
    if (roles.some((r) => r === "STUDENT" || r === "ROLE_STUDENT")) {
      return "H\u1ECDc vi\xEAn";
    }
    return roles.length > 0 ? roles[0].replace("ROLE_", "") : "Ng\u01B0\u1EDDi d\xF9ng";
  }, ...ngDevMode ? [{ debugName: "userRoleDisplay" }] : (
    /* istanbul ignore next */
    []
  ));
  onToggleSidebar() {
    this.toggleSidebar.emit();
  }
  onLogout() {
    this.authService.logout();
  }
  static \u0275fac = function HeaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HeaderComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeaderComponent, selectors: [["app-header"]], outputs: { toggleSidebar: "toggleSidebar" }, decls: 20, vars: 3, consts: [[1, "header", "bg-white", "border-b", "border-gray-100", "flex", "items-center", "justify-between", "px-6", "shadow-sm", "z-30"], [1, "flex", "items-center", "space-x-2"], [1, "md:hidden", "text-gray-500", "hover:text-gray-800", "p-2", "rounded-lg", "bg-gray-50", 3, "click"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-6", "w-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 6h16M4 12h16M4 18h16"], [1, "user-menu", "flex", "items-center", "space-x-5"], [1, "flex", "items-center", "space-x-3", "group", "cursor-pointer", "p-1.5", "rounded-full", "hover:bg-gray-50"], [1, "avatar", "w-9", "h-9", "rounded-full", "bg-blue-100", "border-2", "border-white", "flex", "items-center", "justify-center", "text-blue-700", "font-bold", "uppercase", "shadow-inner"], [1, "hidden", "md:block"], [1, "text-sm", "font-semibold", "text-gray-800"], [1, "text-xs", "text-gray-500", "font-medium"], [1, "h-6", "w-px", "bg-gray-200"], [1, "text-sm", "font-medium", "text-red-600", "hover:text-red-800", "transition", "flex", "items-center", "p-2", "rounded-lg", "hover:bg-red-50", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4.5", "h-4.5", "mr-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"], [1, "hidden", "sm:inline"]], template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "header", 0)(1, "div", 1)(2, "button", 2);
      \u0275\u0275domListener("click", function HeaderComponent_Template_button_click_2_listener() {
        return ctx.onToggleSidebar();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(3, "svg", 3);
      \u0275\u0275domElement(4, "path", 4);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275domElementStart(5, "div", 5)(6, "div", 6)(7, "div", 7);
      \u0275\u0275text(8);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(9, "div", 8)(10, "p", 9);
      \u0275\u0275text(11);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(12, "p", 10);
      \u0275\u0275text(13);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElement(14, "div", 11);
      \u0275\u0275domElementStart(15, "button", 12);
      \u0275\u0275domListener("click", function HeaderComponent_Template_button_click_15_listener() {
        return ctx.onLogout();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(16, "svg", 13);
      \u0275\u0275domElement(17, "path", 14);
      \u0275\u0275domElementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275domElementStart(18, "span", 15);
      \u0275\u0275text(19, "\u0110\u0103ng xu\u1EA5t");
      \u0275\u0275domElementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate1(" ", ctx.userName().charAt(0), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.userName());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.userRoleDisplay());
    }
  }, dependencies: [CommonModule], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n}\n.header[_ngcontent-%COMP%] {\n  height: 64px;\n}\n/*# sourceMappingURL=header.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeaderComponent, [{
    type: Component,
    args: [{ selector: "app-header", standalone: true, imports: [CommonModule], template: `
    <header class="header bg-white border-b border-gray-100 flex items-center justify-between px-6 shadow-sm z-30">
      
      <div class="flex items-center space-x-2">
        <button (click)="onToggleSidebar()" class="md:hidden text-gray-500 hover:text-gray-800 p-2 rounded-lg bg-gray-50">
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </button>
      </div>

      <div class="user-menu flex items-center space-x-5">
        
        <div class="flex items-center space-x-3 group cursor-pointer p-1.5 rounded-full hover:bg-gray-50">
            <div class="avatar w-9 h-9 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-blue-700 font-bold uppercase shadow-inner">
                {{ userName().charAt(0) }}
            </div>
            <div class="hidden md:block">
                <p class="text-sm font-semibold text-gray-800">{{ userName() }}</p>
                <p class="text-xs text-gray-500 font-medium">{{ userRoleDisplay() }}</p>
            </div>
        </div>

        <div class="h-6 w-px bg-gray-200"></div> 
        
        <button (click)="onLogout()" class="text-sm font-medium text-red-600 hover:text-red-800 transition flex items-center p-2 rounded-lg hover:bg-red-50">
          <svg class="w-4.5 h-4.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
          <span class="hidden sm:inline">\u0110\u0103ng xu\u1EA5t</span>
        </button>
      </div>
    </header>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* angular:styles/component:scss;e9afcae525e6ad3fb72f1aaa117f9721bc027b6bd5f9ddbb283b3506f1b33eaa;D:/Education-System-FrontEnd/src/app/core/layout/header/header.component.ts */\n:host {\n  display: block;\n  width: 100%;\n}\n.header {\n  height: 64px;\n}\n/*# sourceMappingURL=header.component.css.map */\n"] }]
  }], null, { toggleSidebar: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeaderComponent, { className: "HeaderComponent", filePath: "src/app/core/layout/header/header.component.ts", lineNumber: 45 });
})();

// src/app/shared/components/toast/toast.component.ts
var _c03 = (a0, a1, a2, a3) => ({ "border-l-green-500": a0, "border-l-red-500": a1, "border-l-amber-500": a2, "border-l-blue-500": a3 });
var _forTrack0 = ($index, $item) => $item.id;
function ToastComponent_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 12);
    \u0275\u0275element(2, "path", 13);
    \u0275\u0275elementEnd()();
  }
}
function ToastComponent_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 14);
    \u0275\u0275element(2, "path", 11);
    \u0275\u0275elementEnd()();
  }
}
function ToastComponent_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 15);
    \u0275\u0275element(2, "path", 16);
    \u0275\u0275elementEnd()();
  }
}
function ToastComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2);
    \u0275\u0275conditionalCreate(2, ToastComponent_For_2_Conditional_2_Template, 3, 0, "div", 3)(3, ToastComponent_For_2_Conditional_3_Template, 3, 0, "div", 4)(4, ToastComponent_For_2_Conditional_4_Template, 3, 0, "div", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 6)(6, "p", 7);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 8);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 9);
    \u0275\u0275listener("click", function ToastComponent_For_2_Template_button_click_10_listener() {
      const toast_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toastService.remove(toast_r2.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 10);
    \u0275\u0275element(12, "path", 11);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const toast_r2 = ctx.$implicit;
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(4, _c03, toast_r2.type === "success", toast_r2.type === "error", toast_r2.type === "warning", toast_r2.type === "info"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(toast_r2.type === "success" ? 2 : toast_r2.type === "error" ? 3 : toast_r2.type === "warning" ? 4 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(toast_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(toast_r2.message);
  }
}
var ToastComponent = class _ToastComponent {
  toastService = inject(ToastService);
  static \u0275fac = function ToastComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToastComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ToastComponent, selectors: [["app-toast"]], decls: 3, vars: 0, consts: [[1, "fixed", "top-5", "right-5", "z-[9999]", "flex", "flex-col", "gap-3", "pointer-events-none", "w-full", "max-w-sm"], [1, "toast-animation", "pointer-events-auto", "flex", "items-start", "p-4", "bg-white", "rounded-2xl", "shadow-xl", "border-l-4", "border", "border-gray-100", 3, "ngClass"], [1, "flex-shrink-0", "mr-3"], [1, "w-8", "h-8", "rounded-full", "bg-green-100", "flex", "items-center", "justify-center"], [1, "w-8", "h-8", "rounded-full", "bg-red-100", "flex", "items-center", "justify-center"], [1, "w-8", "h-8", "rounded-full", "bg-amber-100", "flex", "items-center", "justify-center"], [1, "flex-1", "w-0", "pt-0.5"], [1, "text-sm", "font-bold", "text-gray-900"], [1, "text-sm", "text-gray-500", "mt-1"], [1, "ml-4", "flex-shrink-0", "text-gray-400", "hover:text-gray-900", "hover:bg-gray-100", "p-1.5", "rounded-lg", "transition", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-green-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M5 13l4 4L19 7"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-red-600"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-amber-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"]], template: function ToastComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275repeaterCreate(1, ToastComponent_For_2_Template, 13, 9, "div", 1, _forTrack0);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.toastService.toasts());
    }
  }, dependencies: [CommonModule, NgClass], styles: ['@charset "UTF-8";\n\n\n\n.toast-animation[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideInRight 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;\n}\n@keyframes _ngcontent-%COMP%_slideInRight {\n  from {\n    transform: translateX(100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=toast.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastComponent, [{
    type: Component,
    args: [{ selector: "app-toast", standalone: true, imports: [CommonModule], template: `
    <div class="fixed top-5 right-5 z-[9999] flex flex-col gap-3 pointer-events-none w-full max-w-sm">
      @for (toast of toastService.toasts(); track toast.id) {
        <div class="toast-animation pointer-events-auto flex items-start p-4 bg-white rounded-2xl shadow-xl border-l-4 border border-gray-100"
             [ngClass]="{
               'border-l-green-500': toast.type === 'success',
               'border-l-red-500': toast.type === 'error',
               'border-l-amber-500': toast.type === 'warning',
               'border-l-blue-500': toast.type === 'info'
             }">
          
          <div class="flex-shrink-0 mr-3">
            @if (toast.type === 'success') {
              <div class="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
              </div>
            } @else if (toast.type === 'error') {
              <div class="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                <svg class="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </div>
            } @else if (toast.type === 'warning') {
              <div class="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                <svg class="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
              </div>
            }
          </div>

          <div class="flex-1 w-0 pt-0.5">
            <p class="text-sm font-bold text-gray-900">{{ toast.title }}</p>
            <p class="text-sm text-gray-500 mt-1">{{ toast.message }}</p>
          </div>

          <button (click)="toastService.remove(toast.id)" class="ml-4 flex-shrink-0 text-gray-400 hover:text-gray-900 hover:bg-gray-100 p-1.5 rounded-lg transition">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>
      }
    </div>
  `, styles: ['@charset "UTF-8";\n\n/* angular:styles/component:scss;02d7723954afb7b2581da7cc9320e929dcefb0d3cf0a22533e458ac924b85bab;D:/Education-System-FrontEnd/src/app/shared/components/toast/toast.component.ts */\n.toast-animation {\n  animation: slideInRight 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;\n}\n@keyframes slideInRight {\n  from {\n    transform: translateX(100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=toast.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ToastComponent, { className: "ToastComponent", filePath: "src/app/shared/components/toast/toast.component.ts", lineNumber: 59 });
})();

// src/app/core/layout/main-layout.component.ts
var _c04 = (a0) => ({ "margin-left": a0 });
var MainLayoutComponent = class _MainLayoutComponent {
  isSidebarVisible = true;
  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }
  static \u0275fac = function MainLayoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MainLayoutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MainLayoutComponent, selectors: [["app-main-layout"]], decls: 7, vars: 4, consts: [[1, "layout-container", "flex", "h-screen", "bg-gray-50", "font-sans", "text-gray-900", "overflow-hidden", "relative"], [3, "isSidebarVisible"], [1, "main-content", "flex-1", "flex", "flex-col", "transition-all", "duration-300", "ease-in-out", 3, "ngStyle"], [3, "toggleSidebar"], [1, "content-area", "flex-1", "overflow-x-hidden", "overflow-y-auto", "bg-gray-50", "p-6", "md:p-8", "scrollbar-thin"]], template: function MainLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-sidebar", 1);
      \u0275\u0275elementStart(2, "div", 2)(3, "app-header", 3);
      \u0275\u0275listener("toggleSidebar", function MainLayoutComponent_Template_app_header_toggleSidebar_3_listener() {
        return ctx.toggleSidebar();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "main", 4);
      \u0275\u0275element(5, "router-outlet");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(6, "app-toast");
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("isSidebarVisible", ctx.isSidebarVisible);
      \u0275\u0275advance();
      \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(2, _c04, ctx.isSidebarVisible ? "256px" : "0px"));
    }
  }, dependencies: [CommonModule, NgStyle, RouterOutlet, SidebarComponent, HeaderComponent, ToastComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=main-layout.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MainLayoutComponent, [{
    type: Component,
    args: [{ selector: "app-main-layout", standalone: true, imports: [CommonModule, RouterOutlet, SidebarComponent, HeaderComponent, ToastComponent], template: `
    <div class="layout-container flex h-screen bg-gray-50 font-sans text-gray-900 overflow-hidden relative">
      
      <app-sidebar [isSidebarVisible]="isSidebarVisible"></app-sidebar>

      <div 
        class="main-content flex-1 flex flex-col transition-all duration-300 ease-in-out"
        [ngStyle]="{ 'margin-left': isSidebarVisible ? '256px' : '0px' }"
      >
        
        <app-header (toggleSidebar)="toggleSidebar()"></app-header>

        <main class="content-area flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6 md:p-8 scrollbar-thin">
            <router-outlet></router-outlet>
        </main>
      </div>

    </div>
    
    <app-toast></app-toast>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* angular:styles/component:scss;e35c3d1632b7debbd15c6933eb9bdd78ec5aca9b3262b9107a4049e35c490c57;D:/Education-System-FrontEnd/src/app/core/layout/main-layout.component.ts */\n:host {\n  display: block;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=main-layout.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MainLayoutComponent, { className: "MainLayoutComponent", filePath: "src/app/core/layout/main-layout.component.ts", lineNumber: 39 });
})();

// src/app/app.routes.ts
var routes = [
  {
    path: "login",
    component: LoginComponent,
    canActivate: [publicGuard]
  },
  {
    path: "admin",
    component: MainLayoutComponent,
    canActivate: [authGuard],
    children: [
      {
        path: "",
        loadChildren: () => import("./chunk-UDYFF4R7.js").then((m) => m.adminRoutes)
      }
    ]
  },
  {
    path: "academic",
    component: MainLayoutComponent,
    canActivate: [authGuard],
    children: [
      {
        path: "",
        loadChildren: () => import("./chunk-6EEFKX64.js").then((m) => m.academicRoutes)
      }
    ]
  },
  {
    path: "teacher",
    canActivate: [authGuard],
    children: [
      {
        path: "",
        loadChildren: () => import("./chunk-7HH3PPQ7.js").then((m) => m.teacherRoutes)
      }
    ]
  },
  {
    path: "student",
    canActivate: [authGuard, roleGuard(["STUDENT"])],
    children: [
      {
        path: "",
        loadChildren: () => import("./chunk-272JVDUJ.js").then((m) => m.studentRoutes)
      }
    ]
  },
  {
    path: "unauthorized",
    component: UnauthorizedComponent
  },
  {
    path: "",
    redirectTo: "/login",
    pathMatch: "full"
  },
  {
    path: "**",
    redirectTo: "/login"
  }
];

// src/app/core/interceptors/auth.interceptor.ts
var authInterceptor = (req, next) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const toastService = inject(ToastService);
  const authReq = attachToken(req, authService.getAccessToken());
  return next(authReq).pipe(catchError((error) => {
    const isAuthExempt = req.url.includes("/api/v1/auth/login") || req.url.includes("/api/v1/auth/refresh-token") || req.url.includes("/api/v1/auth/logout");
    if (error.status === 403 && !isAuthExempt) {
      toastService.error("Truy c\u1EADp b\u1ECB t\u1EEB ch\u1ED1i", "Quy\u1EC1n h\u1EA1n t\xE0i kho\u1EA3n c\u1EE7a b\u1EA1n \u0111\xE3 thay \u0111\u1ED5i. H\u1EC7 th\u1ED1ng \u0111ang t\u1EF1 \u0111\u1ED9ng c\u1EADp nh\u1EADt giao di\u1EC7n...");
      authService.reloadPermissions().subscribe();
    }
    if (error.status === 401 && !isAuthExempt) {
      return authService.refreshToken().pipe(switchMap((res) => {
        const newToken = res?.accessToken || res?.data?.accessToken;
        if (newToken) {
          return next(attachToken(req, newToken));
        }
        authService.clearState();
        router.navigate(["/login"]);
        return throwError(() => error);
      }), catchError((refreshError) => {
        authService.clearState();
        router.navigate(["/login"]);
        return throwError(() => refreshError);
      }));
    }
    return throwError(() => error);
  }));
};
function attachToken(req, token) {
  let cloned = req.clone({ withCredentials: true });
  if (token) {
    cloned = cloned.clone({
      setHeaders: { Authorization: `Bearer ${token}` }
    });
  }
  return cloned;
}

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(withFetch(), withInterceptors([authInterceptor]))
  ]
};

// src/app/app.ts
var App = class _App {
  title = signal("my-app", ...ngDevMode ? [{ debugName: "title" }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function App_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _App)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _App, selectors: [["app-root"]], decls: 2, vars: 0, template: function App_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "router-outlet")(1, "app-toast");
    }
  }, dependencies: [RouterOutlet, ToastComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(App, [{
    type: Component,
    args: [{ selector: "app-root", imports: [RouterOutlet, ToastComponent], template: "<router-outlet></router-outlet>\r\n<app-toast></app-toast>\r\n" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(App, { className: "App", filePath: "src/app/app.ts", lineNumber: 11 });
})();

// src/main.ts
bootstrapApplication(App, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
