import {
  StudentProfileService
} from "./chunk-K3D6K3YW.js";
import {
  roleGuard
} from "./chunk-2SXOXKGA.js";
import {
  AuthService
} from "./chunk-HGEUBDJK.js";
import {
  NotificationBellComponent
} from "./chunk-7W7R575K.js";
import {
  StudentClassService
} from "./chunk-655QJQXX.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-CWY7GFOW.js";
import {
  StudentAnnouncementService
} from "./chunk-OQJC4JKI.js";
import {
  ToastService
} from "./chunk-LTLTAR4B.js";
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet
} from "./chunk-T67WJEUA.js";
import {
  ChangeDetectionStrategy,
  CommonModule,
  Component,
  NgClass,
  NgForOf,
  NgIf,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-4WA2FUT3.js";

// src/app/features/student/layout/student-layout/student-layout.component.ts
var _c0 = (a0) => ["/student/homeroom-stream", a0];
function StudentLayoutComponent_ng_container_20_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275element(1, "span", 36)(2, "span", 37);
    \u0275\u0275elementEnd();
  }
}
function StudentLayoutComponent_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "a", 30)(2, "div", 31);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 32);
    \u0275\u0275element(4, "path", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "B\u1EA3ng tin l\u1EDBp");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, StudentLayoutComponent_ng_container_20_span_7_Template, 3, 0, "span", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c0, ctx_r0.physicalClassId()));
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r0.announcementService.hasNewAnnouncement());
  }
}
function StudentLayoutComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275listener("click", function StudentLayoutComponent_div_28_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggleSidebar());
    });
    \u0275\u0275elementEnd();
  }
}
var StudentLayoutComponent = class _StudentLayoutComponent {
  authService = inject(AuthService);
  router = inject(Router);
  profileService = inject(StudentProfileService);
  announcementService = inject(StudentAnnouncementService);
  // Lấy email/tên học sinh từ Token
  studentName = computed(() => this.authService.authState().email || "H\u1ECDc sinh", ...ngDevMode ? [{ debugName: "studentName" }] : (
    /* istanbul ignore next */
    []
  ));
  // State đóng/mở sidebar trên mobile
  isSidebarOpen = signal(false, ...ngDevMode ? [{ debugName: "isSidebarOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  physicalClassId = signal(null, ...ngDevMode ? [{ debugName: "physicalClassId" }] : (
    /* istanbul ignore next */
    []
  ));
  ngOnInit() {
    this.profileService.getMyProfile().subscribe({
      next: (res) => {
        if (res && res.currentClassId) {
          this.physicalClassId.set(res.currentClassId);
          this.announcementService.checkNewAnnouncements(res.currentClassId);
          setInterval(() => {
            this.announcementService.checkNewAnnouncements(res.currentClassId);
          }, 5 * 60 * 1e3);
          localStorage.setItem("physicalClassId", res.currentClassId);
        }
      },
      error: (err) => {
        console.error("Kh\xF4ng th\u1EC3 l\u1EA5y th\xF4ng tin l\u1EDBp h\u1ECDc cho Sidebar:", err);
      }
    });
  }
  //  Kiểm tra Role 
  hasAnyRole(allowedRoles) {
    const userRoles = this.authService.authState().roles || [];
    return allowedRoles.some((allowedRole) => userRoles.some((userRole) => userRole === allowedRole || userRole === `ROLE_${allowedRole}` || userRole.endsWith(`_${allowedRole}`)));
  }
  toggleSidebar() {
    this.isSidebarOpen.update((v) => !v);
  }
  logout() {
    this.authService.logout();
    this.router.navigate(["/login"]);
  }
  static \u0275fac = function StudentLayoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StudentLayoutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StudentLayoutComponent, selectors: [["app-student-layout"]], decls: 43, vars: 5, consts: [[1, "min-h-screen", "bg-gray-50", "flex", "font-sans", "text-gray-900"], [1, "fixed", "inset-y-0", "left-0", "z-50", "w-64", "bg-white", "border-r", "border-gray-100", "shadow-sm", "transform", "transition-transform", "duration-300", "ease-in-out", "lg:translate-x-0", "lg:static", "lg:flex-shrink-0", 3, "ngClass"], [1, "h-full", "flex", "flex-col"], [1, "header-logo", "h-16", "flex", "items-center", "px-6", "border-b", "border-gray-100"], ["src", "assets/Icon-Dai-hoc-CMC.png", "alt", "EduSystem Logo", 1, "w-8", "h-8", "object-contain", "mr-3"], [1, "text-xl", "font-extrabold", "text-gray-800", "tracking-tight"], [1, "px-6", "py-4", "border-b", "border-gray-50", "bg-indigo-50/30"], [1, "text-xs", "font-semibold", "text-indigo-600", "uppercase", "tracking-wider", "mb-0.5"], [1, "text-sm", "font-bold", "text-gray-900", "truncate", 3, "title"], [1, "flex-1", "px-3", "py-4", "space-y-1", "overflow-y-auto", "custom-scrollbar"], [1, "px-3", "pt-5", "pb-2"], [1, "text-xs", "font-semibold", "text-gray-400", "uppercase", "tracking-wider"], ["routerLink", "/student/my-classes", "routerLinkActive", "bg-indigo-50 text-indigo-700 font-bold", 1, "flex", "items-center", "px-3", "py-2.5", "text-sm", "font-medium", "rounded-xl", "text-gray-600", "hover:bg-gray-50", "hover:text-gray-900", "transition", "group"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "mr-3", "text-gray-400", "group-hover:text-indigo-600", "transition"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"], [4, "ngIf"], ["routerLink", "/student/profile", "routerLinkActive", "bg-indigo-50 text-indigo-700", 1, "flex", "items-center", "px-3", "py-2.5", "text-sm", "font-medium", "rounded-xl", "text-gray-600", "hover:bg-gray-50", "hover:text-gray-900", "transition", "group"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"], ["class", "fixed inset-0 bg-gray-900/50 z-40 lg:hidden backdrop-blur-sm", 3, "click", 4, "ngIf"], [1, "flex-1", "flex", "flex-col", "min-w-0", "h-screen", "overflow-hidden"], [1, "h-16", "bg-white", "border-b", "border-gray-100", "flex", "items-center", "justify-between", "px-4", "sm:px-6", "lg:px-8", "shrink-0", "shadow-sm", "z-10"], [1, "lg:hidden", "p-2", "rounded-md", "text-gray-400", "hover:text-gray-500", "hover:bg-gray-100", "focus:outline-none", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "h-6", "w-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 6h16M4 12h16M4 18h7"], [1, "hidden", "lg:block", "flex-1"], [1, "flex", "items-center", "space-x-4"], [1, "flex", "items-center", "text-sm", "font-medium", "text-red-600", "hover:text-red-800", "bg-red-50", "hover:bg-red-100", "px-3", "py-1.5", "rounded-lg", "transition", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "mr-1.5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"], [1, "flex-1", "overflow-auto", "bg-gray-50/50", "p-4", "sm:p-6", "lg:p-8", "relative"], ["routerLinkActive", "bg-emerald-50 text-emerald-600 font-bold", 1, "flex", "items-center", "justify-between", "px-4", "py-3", "rounded-xl", "text-gray-600", "hover:bg-gray-50", "transition-colors", 3, "routerLink"], [1, "flex", "items-center", "gap-3"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"], ["class", "flex h-3 w-3 relative", 4, "ngIf"], [1, "flex", "h-3", "w-3", "relative"], [1, "animate-ping", "absolute", "inline-flex", "h-full", "w-full", "rounded-full", "bg-red-400", "opacity-75"], [1, "relative", "inline-flex", "rounded-full", "h-3", "w-3", "bg-red-500", "shadow-sm", "shadow-red-200"], [1, "fixed", "inset-0", "bg-gray-900/50", "z-40", "lg:hidden", "backdrop-blur-sm", 3, "click"]], template: function StudentLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "aside", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275element(4, "img", 4);
      \u0275\u0275elementStart(5, "span", 5);
      \u0275\u0275text(6, "EduSystem");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 6)(8, "p", 7);
      \u0275\u0275text(9, "C\u1ED5ng H\u1ECDc Sinh");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "p", 8);
      \u0275\u0275text(11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "nav", 9)(13, "div", 10)(14, "p", 11);
      \u0275\u0275text(15, "H\u1ECDc t\u1EADp");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "a", 12);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(17, "svg", 13);
      \u0275\u0275element(18, "path", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275text(19, " L\u1EDBp h\u1ECDc c\u1EE7a t\xF4i ");
      \u0275\u0275elementEnd();
      \u0275\u0275template(20, StudentLayoutComponent_ng_container_20_Template, 8, 4, "ng-container", 15);
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(21, "div", 10)(22, "p", 11);
      \u0275\u0275text(23, "C\xE1 nh\xE2n");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "a", 16);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(25, "svg", 13);
      \u0275\u0275element(26, "path", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275text(27, " H\u1ED3 s\u01A1 c\xE1 nh\xE2n ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(28, StudentLayoutComponent_div_28_Template, 1, 0, "div", 18);
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(29, "main", 19)(30, "header", 20)(31, "button", 21);
      \u0275\u0275listener("click", function StudentLayoutComponent_Template_button_click_31_listener() {
        return ctx.toggleSidebar();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(32, "svg", 22);
      \u0275\u0275element(33, "path", 23);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275element(34, "div", 24)(35, "app-notification-bell");
      \u0275\u0275elementStart(36, "div", 25)(37, "button", 26);
      \u0275\u0275listener("click", function StudentLayoutComponent_Template_button_click_37_listener() {
        return ctx.logout();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(38, "svg", 27);
      \u0275\u0275element(39, "path", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275text(40, " \u0110\u0103ng xu\u1EA5t ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(41, "div", 29);
      \u0275\u0275element(42, "router-outlet");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.isSidebarOpen() ? "translate-x-0" : "-translate-x-full");
      \u0275\u0275advance(9);
      \u0275\u0275property("title", ctx.studentName());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.studentName());
      \u0275\u0275advance(9);
      \u0275\u0275property("ngIf", ctx.physicalClassId() && ctx.physicalClassId() !== "null" && ctx.physicalClassId() !== "undefined");
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", ctx.isSidebarOpen());
    }
  }, dependencies: [CommonModule, NgClass, NgIf, RouterModule, RouterOutlet, RouterLink, RouterLinkActive, NotificationBellComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StudentLayoutComponent, [{
    type: Component,
    args: [{ selector: "app-student-layout", standalone: true, imports: [CommonModule, RouterModule, NotificationBellComponent], template: `<div class="min-h-screen bg-gray-50 flex font-sans text-gray-900">\r
\r
  <aside\r
    class="fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-100 shadow-sm transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:flex-shrink-0"\r
    [ngClass]="isSidebarOpen() ? 'translate-x-0' : '-translate-x-full'">\r
\r
    <div class="h-full flex flex-col">\r
      <div class="header-logo h-16 flex items-center px-6 border-b border-gray-100">\r
        <img src="assets/Icon-Dai-hoc-CMC.png" alt="EduSystem Logo" class="w-8 h-8 object-contain mr-3">\r
\r
        <span class="text-xl font-extrabold text-gray-800 tracking-tight">EduSystem</span>\r
      </div>\r
\r
      <div class="px-6 py-4 border-b border-gray-50 bg-indigo-50/30">\r
        <p class="text-xs font-semibold text-indigo-600 uppercase tracking-wider mb-0.5">C\u1ED5ng H\u1ECDc Sinh</p>\r
        <p class="text-sm font-bold text-gray-900 truncate" [title]="studentName()">{{ studentName() }}</p>\r
      </div>\r
\r
      <nav class="flex-1 px-3 py-4 space-y-1 overflow-y-auto custom-scrollbar">\r
\r
        <div class="px-3 pt-5 pb-2">\r
          <p class="text-xs font-semibold text-gray-400 uppercase tracking-wider">H\u1ECDc t\u1EADp</p>\r
        </div>\r
\r
        <a routerLink="/student/my-classes" routerLinkActive="bg-indigo-50 text-indigo-700 font-bold"\r
          class="flex items-center px-3 py-2.5 text-sm font-medium rounded-xl text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition group">\r
          <svg class="w-5 h-5 mr-3 text-gray-400 group-hover:text-indigo-600 transition" fill="none"\r
            stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10">\r
            </path>\r
          </svg>\r
          L\u1EDBp h\u1ECDc c\u1EE7a t\xF4i\r
        </a>\r
\r
        <ng-container *ngIf="physicalClassId() && physicalClassId() !== 'null' && physicalClassId() !== 'undefined'">\r
          <a [routerLink]="['/student/homeroom-stream', physicalClassId()]"\r
            routerLinkActive="bg-emerald-50 text-emerald-600 font-bold"\r
            class="flex items-center justify-between px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-50 transition-colors">\r
\r
            <div class="flex items-center gap-3">\r
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z">\r
                </path>\r
              </svg>\r
              <span>B\u1EA3ng tin l\u1EDBp</span>\r
            </div>\r
\r
            <span *ngIf="announcementService.hasNewAnnouncement()" class="flex h-3 w-3 relative">\r
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>\r
              <span class="relative inline-flex rounded-full h-3 w-3 bg-red-500 shadow-sm shadow-red-200"></span>\r
            </span>\r
\r
          </a>\r
        </ng-container>\r
\r
\r
        <div class="px-3 pt-5 pb-2">\r
          <p class="text-xs font-semibold text-gray-400 uppercase tracking-wider">C\xE1 nh\xE2n</p>\r
        </div>\r
\r
        <a routerLink="/student/profile" routerLinkActive="bg-indigo-50 text-indigo-700"\r
          class="flex items-center px-3 py-2.5 text-sm font-medium rounded-xl text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition group">\r
          <svg class="w-5 h-5 mr-3 text-gray-400 group-hover:text-indigo-600 transition" fill="none"\r
            stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>\r
          </svg>\r
          H\u1ED3 s\u01A1 c\xE1 nh\xE2n\r
        </a>\r
      </nav>\r
    </div>\r
  </aside>\r
\r
  <div *ngIf="isSidebarOpen()" (click)="toggleSidebar()"\r
    class="fixed inset-0 bg-gray-900/50 z-40 lg:hidden backdrop-blur-sm"></div>\r
\r
  <main class="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">\r
\r
    <header\r
      class="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-4 sm:px-6 lg:px-8 shrink-0 shadow-sm z-10">\r
\r
      <button (click)="toggleSidebar()"\r
        class="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none">\r
        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7"></path>\r
        </svg>\r
      </button>\r
\r
      <div class="hidden lg:block flex-1"></div>\r
\r
      <app-notification-bell></app-notification-bell>\r
\r
      <div class="flex items-center space-x-4">\r
        <button (click)="logout()"\r
          class="flex items-center text-sm font-medium text-red-600 hover:text-red-800 bg-red-50 hover:bg-red-100 px-3 py-1.5 rounded-lg transition">\r
          <svg class="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>\r
          </svg>\r
          \u0110\u0103ng xu\u1EA5t\r
        </button>\r
      </div>\r
    </header>\r
\r
    <div class="flex-1 overflow-auto bg-gray-50/50 p-4 sm:p-6 lg:p-8 relative">\r
      <router-outlet></router-outlet>\r
    </div>\r
  </main>\r
</div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StudentLayoutComponent, { className: "StudentLayoutComponent", filePath: "src/app/features/student/layout/student-layout/student-layout.component.ts", lineNumber: 15 });
})();

// src/app/features/student/student.component.ts
var StudentComponent = class _StudentComponent {
  authService = inject(AuthService);
  logout() {
    this.authService.logout();
  }
  static \u0275fac = function StudentComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StudentComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StudentComponent, selectors: [["app-student"]], decls: 7, vars: 1, consts: [[1, "p-8"], [1, "text-3xl", "font-bold"], [1, "mt-4", "text-gray-600"], [1, "mt-6", "px-4", "py-2", "bg-red-600", "text-white", "rounded", "hover:bg-red-700", 3, "click"]], template: function StudentComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "h1", 1);
      \u0275\u0275text(2, "Student Dashboard");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(3, "p", 2);
      \u0275\u0275text(4);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(5, "button", 3);
      \u0275\u0275domListener("click", function StudentComponent_Template_button_click_5_listener() {
        return ctx.logout();
      });
      \u0275\u0275text(6, " Logout ");
      \u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("Welcome, ", ctx.authService.authState().email);
    }
  }, dependencies: [CommonModule], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StudentComponent, [{
    type: Component,
    args: [{
      selector: "app-student",
      standalone: true,
      imports: [CommonModule],
      template: `
    <div class="p-8">
      <h1 class="text-3xl font-bold">Student Dashboard</h1>
      <p class="mt-4 text-gray-600">Welcome, {{ authService.authState().email }}</p>
      <button
        (click)="logout()"
        class="mt-6 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Logout
      </button>
    </div>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StudentComponent, { className: "StudentComponent", filePath: "src/app/features/student/student.component.ts", lineNumber: 23 });
})();

// src/app/features/student/pages/my-classes/student-my-classes.component.ts
function StudentMyClassesComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 13);
    \u0275\u0275element(2, "circle", 14)(3, "path", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "p", 16);
    \u0275\u0275text(5, "\u0110ang t\u1EA3i kh\xF4ng gian h\u1ECDc t\u1EADp...");
    \u0275\u0275elementEnd()();
  }
}
function StudentMyClassesComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 19);
    \u0275\u0275element(3, "path", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "h3", 21);
    \u0275\u0275text(5, "Ch\u01B0a c\xF3 l\u1EDBp h\u1ECDc n\xE0o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 22);
    \u0275\u0275text(7, "Hi\u1EC7n t\u1EA1i b\u1EA1n ch\u01B0a \u0111\u01B0\u1EE3c x\u1EBFp v\xE0o l\u1EDBp h\u1ECDc tr\u1EF1c tuy\u1EBFn n\xE0o. Vui l\xF2ng li\xEAn h\u1EC7 v\u1EDBi Gi\xE1o vi\xEAn ch\u1EE7 nhi\u1EC7m \u0111\u1EC3 bi\u1EBFt th\xEAm chi ti\u1EBFt.");
    \u0275\u0275elementEnd()();
  }
}
function StudentMyClassesComponent_div_14_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 26)(2, "div", 27)(3, "h3", 28);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 29);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 30);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 31);
    \u0275\u0275element(9, "path", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(11, "div", 33)(12, "a", 34);
    \u0275\u0275text(13, " V\xE0o l\u1EDBp h\u1ECDc ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(14, "svg", 35);
    \u0275\u0275element(15, "path", 36);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r2.getPalette(i_r2).cardBg + " " + ctx_r2.getPalette(i_r2).border);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r2.getPalette(i_r2).textPrimary)("title", item_r1.subjectName);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r1.onlineClassName || item_r1.subjectName, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r2.getPalette(i_r2).badge);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" L\u1EDBp: ", item_r1.physicalClassName, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r2.getPalette(i_r2).textSecondary);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" GV: ", item_r1.teacherName, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275interpolate1("/student/class/", item_r1.onlineClassId))("ngClass", ctx_r2.getPalette(i_r2).button);
  }
}
function StudentMyClassesComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275template(1, StudentMyClassesComponent_div_14_div_1_Template, 16, 11, "div", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.filteredClasses());
  }
}
var StudentMyClassesComponent = class _StudentMyClassesComponent {
  classService = inject(StudentClassService);
  toastService = inject(ToastService);
  // Bổ sung ToastService để hiện thông báo lỗi
  classes = signal([], ...ngDevMode ? [{ debugName: "classes" }] : (
    /* istanbul ignore next */
    []
  ));
  isLoading = signal(true, ...ngDevMode ? [{ debugName: "isLoading" }] : (
    /* istanbul ignore next */
    []
  ));
  searchQuery = signal("", ...ngDevMode ? [{ debugName: "searchQuery" }] : (
    /* istanbul ignore next */
    []
  ));
  // BẢNG MÀU CURATED (TUYỂN CHỌN) - CHO CARD LỚP HỌC
  cardPalettes = [
    { cardBg: "bg-indigo-50/50", border: "border-indigo-100", textPrimary: "text-indigo-900", textSecondary: "text-indigo-600", badge: "bg-indigo-100 text-indigo-700 border-indigo-200", button: "bg-indigo-600 text-white hover:bg-indigo-700" },
    { cardBg: "bg-emerald-50/50", border: "border-emerald-100", textPrimary: "text-emerald-900", textSecondary: "text-emerald-600", badge: "bg-emerald-100 text-emerald-700 border-emerald-200", button: "bg-emerald-600 text-white hover:bg-emerald-700" },
    { cardBg: "bg-sky-50/50", border: "border-sky-100", textPrimary: "text-sky-900", textSecondary: "text-sky-600", badge: "bg-sky-100 text-sky-700 border-sky-200", button: "bg-sky-600 text-white hover:bg-sky-700" },
    { cardBg: "bg-amber-50/50", border: "border-amber-100", textPrimary: "text-amber-900", textSecondary: "text-amber-600", badge: "bg-amber-100 text-amber-700 border-amber-200", button: "bg-amber-600 text-white hover:bg-amber-700" },
    { cardBg: "bg-rose-50/50", border: "border-rose-100", textPrimary: "text-rose-900", textSecondary: "text-rose-600", badge: "bg-rose-100 text-rose-700 border-rose-200", button: "bg-rose-600 text-white hover:bg-rose-700" }
  ];
  // Lọc danh sách lớp học trực tiếp trên Client
  filteredClasses = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();
    if (!query)
      return this.classes();
    return this.classes().filter(
      (c) => c.onlineClassName && c.onlineClassName.toLowerCase().includes(query) || c.subjectName && c.subjectName.toLowerCase().includes(query) || c.teacherName && c.teacherName.toLowerCase().includes(query) || c.physicalClassName && c.physicalClassName.toLowerCase().includes(query)
      // Bổ sung tìm theo Lớp gốc (VD: 10A1)
    );
  }, ...ngDevMode ? [{ debugName: "filteredClasses" }] : (
    /* istanbul ignore next */
    []
  ));
  ngOnInit() {
    this.loadMyClasses();
  }
  loadMyClasses() {
    this.isLoading.set(true);
    this.classService.getMyClasses().subscribe({
      next: (res) => {
        this.classes.set(res || []);
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error("L\u1ED7i khi t\u1EA3i danh s\xE1ch l\u1EDBp h\u1ECDc:", err);
        this.toastService.error("L\u1ED7i", "Kh\xF4ng th\u1EC3 t\u1EA3i danh s\xE1ch l\u1EDBp h\u1ECDc c\u1EE7a b\u1EA1n. Vui l\xF2ng th\u1EED l\u1EA1i sau.");
        this.classes.set([]);
        this.isLoading.set(false);
      }
    });
  }
  // Hàm lấy màu theo vị trí Index
  getPalette(index) {
    return this.cardPalettes[index % this.cardPalettes.length];
  }
  static \u0275fac = function StudentMyClassesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StudentMyClassesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StudentMyClassesComponent, selectors: [["app-student-my-classes"]], decls: 15, vars: 4, consts: [[1, "max-w-7xl", "mx-auto", "space-y-6"], [1, "flex", "flex-col", "md:flex-row", "justify-between", "items-start", "md:items-end", "gap-4", "pb-4", "border-b", "border-gray-100"], [1, "text-3xl", "font-extrabold", "text-gray-900", "tracking-tight"], [1, "text-sm", "text-gray-500", "mt-1"], [1, "w-full", "md:w-80", "relative"], [1, "absolute", "inset-y-0", "left-0", "pl-3", "flex", "items-center", "pointer-events-none"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-5", "w-5", "text-gray-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], ["type", "text", "placeholder", "T\xECm m\xF4n h\u1ECDc, gi\xE1o vi\xEAn, l\u1EDBp g\u1ED1c...", 1, "w-full", "pl-10", "pr-4", "py-3", "text-sm", "bg-white", "border", "border-gray-200", "rounded-xl", "focus:ring-2", "focus:ring-indigo-100", "focus:border-indigo-500", "outline-none", "transition", "shadow-sm", 3, "ngModelChange", "ngModel"], ["class", "py-20 flex flex-col items-center justify-center", 4, "ngIf"], ["class", "text-center bg-white rounded-3xl shadow-sm border border-gray-100 p-16 flex flex-col items-center", 4, "ngIf"], ["class", "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6", 4, "ngIf"], [1, "py-20", "flex", "flex-col", "items-center", "justify-center"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-10", "w-10", "text-indigo-500", "mb-4"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"], [1, "text-gray-500", "font-medium"], [1, "text-center", "bg-white", "rounded-3xl", "shadow-sm", "border", "border-gray-100", "p-16", "flex", "flex-col", "items-center"], [1, "w-20", "h-20", "bg-gray-50", "rounded-full", "flex", "items-center", "justify-center", "mb-5", "border", "border-gray-100"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-10", "h-10", "text-gray-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "1.5", "d", "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"], [1, "text-xl", "font-bold", "text-gray-900", "mb-2"], [1, "text-gray-500", "max-w-sm"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-3", "xl:grid-cols-4", "gap-6"], ["class", "w-full", 4, "ngFor", "ngForOf"], [1, "w-full"], [1, "rounded-3xl", "p-6", "h-full", "flex", "flex-col", "transition-all", "duration-300", "ease-in-out", "border", "shadow-sm", "hover:shadow-xl", "hover:-translate-y-2", "hover:border-indigo-200", 3, "ngClass"], [1, "flex-grow", "space-y-4"], [1, "text-xl", "font-extrabold", "tracking-tight", "line-clamp-2", "min-h-[56px]", 3, "ngClass", "title"], [1, "inline-flex", "items-center", "px-3", "py-1", "rounded-full", "text-xs", "font-bold", "border", "transition", "duration-300", 3, "ngClass"], [1, "flex", "items-center", "text-sm", "font-medium", "mt-2", "transition", "duration-300", 3, "ngClass"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "mr-2", "opacity-70"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"], [1, "mt-6", "pt-5", "border-t", "border-black/5", "transition", "duration-300"], [1, "w-full", "flex", "items-center", "justify-center", "px-5", "py-3", "rounded-xl", "text-sm", "font-bold", "shadow", "transition", "duration-300", "hover:scale-[1.03]", 3, "routerLink", "ngClass"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "ml-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M14 5l7 7m0 0l-7 7m7-7H3"]], template: function StudentMyClassesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "L\u1EDBp h\u1ECDc c\u1EE7a t\xF4i");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Danh s\xE1ch c\xE1c m\xF4n h\u1ECDc b\u1EA1n \u0111ang tham gia trong h\u1ECDc k\u1EF3 n\xE0y");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 4)(8, "div", 5);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(9, "svg", 6);
      \u0275\u0275element(10, "path", 7);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(11, "input", 8);
      \u0275\u0275listener("ngModelChange", function StudentMyClassesComponent_Template_input_ngModelChange_11_listener($event) {
        return ctx.searchQuery.set($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(12, StudentMyClassesComponent_div_12_Template, 6, 0, "div", 9)(13, StudentMyClassesComponent_div_13_Template, 8, 0, "div", 10)(14, StudentMyClassesComponent_div_14_Template, 2, 1, "div", 11);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275property("ngModel", ctx.searchQuery());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading() && ctx.filteredClasses().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading() && ctx.filteredClasses().length > 0);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, RouterModule, RouterLink, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StudentMyClassesComponent, [{
    type: Component,
    args: [{ selector: "app-student-my-classes", standalone: true, imports: [CommonModule, RouterModule, FormsModule], template: `<div class="max-w-7xl mx-auto space-y-6">\r
  \r
  <div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 pb-4 border-b border-gray-100">\r
    <div>\r
      <h1 class="text-3xl font-extrabold text-gray-900 tracking-tight">L\u1EDBp h\u1ECDc c\u1EE7a t\xF4i</h1>\r
      <p class="text-sm text-gray-500 mt-1">Danh s\xE1ch c\xE1c m\xF4n h\u1ECDc b\u1EA1n \u0111ang tham gia trong h\u1ECDc k\u1EF3 n\xE0y</p>\r
    </div>\r
\r
    <div class="w-full md:w-80 relative">\r
      <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">\r
        <svg class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>\r
      </div>\r
      <input [ngModel]="searchQuery()" (ngModelChange)="searchQuery.set($event)" type="text" placeholder="T\xECm m\xF4n h\u1ECDc, gi\xE1o vi\xEAn, l\u1EDBp g\u1ED1c..." class="w-full pl-10 pr-4 py-3 text-sm bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500 outline-none transition shadow-sm">\r
    </div>\r
  </div>\r
\r
  <div *ngIf="isLoading()" class="py-20 flex flex-col items-center justify-center">\r
    <svg class="animate-spin h-10 w-10 text-indigo-500 mb-4" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>\r
    <p class="text-gray-500 font-medium">\u0110ang t\u1EA3i kh\xF4ng gian h\u1ECDc t\u1EADp...</p>\r
  </div>\r
\r
  <div *ngIf="!isLoading() && filteredClasses().length === 0" class="text-center bg-white rounded-3xl shadow-sm border border-gray-100 p-16 flex flex-col items-center">\r
    <div class="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-5 border border-gray-100">\r
      <svg class="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>\r
    </div>\r
    <h3 class="text-xl font-bold text-gray-900 mb-2">Ch\u01B0a c\xF3 l\u1EDBp h\u1ECDc n\xE0o</h3>\r
    <p class="text-gray-500 max-w-sm">Hi\u1EC7n t\u1EA1i b\u1EA1n ch\u01B0a \u0111\u01B0\u1EE3c x\u1EBFp v\xE0o l\u1EDBp h\u1ECDc tr\u1EF1c tuy\u1EBFn n\xE0o. Vui l\xF2ng li\xEAn h\u1EC7 v\u1EDBi Gi\xE1o vi\xEAn ch\u1EE7 nhi\u1EC7m \u0111\u1EC3 bi\u1EBFt th\xEAm chi ti\u1EBFt.</p>\r
  </div>\r
\r
  <div *ngIf="!isLoading() && filteredClasses().length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">\r
    \r
    <div *ngFor="let item of filteredClasses(); let i = index" class="w-full">\r
      \r
      <div \r
        [ngClass]="getPalette(i).cardBg + ' ' + getPalette(i).border"\r
        class="rounded-3xl p-6 h-full flex flex-col transition-all duration-300 ease-in-out border shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-indigo-200">\r
        \r
        <div class="flex-grow space-y-4">\r
          <h3 [ngClass]="getPalette(i).textPrimary" class="text-xl font-extrabold tracking-tight line-clamp-2 min-h-[56px]" [title]="item.subjectName">\r
            {{ item.onlineClassName || item.subjectName }}\r
          </h3>\r
\r
          <div [ngClass]="getPalette(i).badge" class="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border transition duration-300">\r
            L\u1EDBp: {{ item.physicalClassName }}\r
          </div>\r
\r
          <div class="flex items-center text-sm font-medium mt-2 transition duration-300" [ngClass]="getPalette(i).textSecondary">\r
            <svg class="w-4 h-4 mr-2 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>\r
            GV: {{ item.teacherName }}\r
          </div>\r
        </div>\r
\r
        <div class="mt-6 pt-5 border-t border-black/5 transition duration-300">\r
          <a routerLink="/student/class/{{item.onlineClassId}}" \r
             [ngClass]="getPalette(i).button"\r
             class="w-full flex items-center justify-center px-5 py-3 rounded-xl text-sm font-bold shadow transition duration-300 hover:scale-[1.03]">\r
            V\xE0o l\u1EDBp h\u1ECDc\r
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>\r
          </a>\r
        </div>\r
      </div>\r
\r
    </div>\r
\r
  </div>\r
</div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StudentMyClassesComponent, { className: "StudentMyClassesComponent", filePath: "src/app/features/student/pages/my-classes/student-my-classes.component.ts", lineNumber: 14 });
})();

// src/app/features/student/student.routes.ts
var studentRoutes = [
  {
    path: "",
    component: StudentLayoutComponent,
    canActivate: [roleGuard(["STUDENT"])],
    // Bỏ comment dòng này nếu bạn dùng Guard phân quyền
    children: [
      {
        // Mặc định khi vào /student sẽ tự động chuyển hướng sang dashboard
        path: "",
        redirectTo: "my-classes",
        pathMatch: "full"
      },
      {
        path: "dashboard",
        component: StudentComponent
      },
      {
        path: "my-classes",
        component: StudentMyClassesComponent,
        canActivate: [roleGuard(["STUDENT"])]
      },
      {
        path: "class/:id",
        loadComponent: () => import("./chunk-2R4PMEIX.js").then((m) => m.StudentClassDetailComponent),
        canActivate: [roleGuard(["STUDENT"])]
      },
      {
        path: "assignment/:id",
        loadComponent: () => import("./chunk-HG6G27SO.js").then((m) => m.StudentAssignmentDetailComponent),
        canActivate: [roleGuard(["STUDENT"])]
      },
      {
        path: "notifications",
        loadComponent: () => import("./chunk-YPL34YB5.js").then((m) => m.NotificationBellComponent),
        canActivate: [roleGuard(["STUDENT"])]
      },
      {
        path: "homeroom-stream/:id",
        loadComponent: () => import("./chunk-VSFLTYEO.js").then((m) => m.StudentHomeroomStreamComponent),
        canActivate: [roleGuard(["STUDENT"])]
      },
      {
        path: "profile",
        loadComponent: () => import("./chunk-3M3EJHWO.js").then((m) => m.StudentProfileComponent),
        canActivate: [roleGuard(["STUDENT"])]
      }
    ]
  }
];
export {
  studentRoutes
};
//# sourceMappingURL=chunk-272JVDUJ.js.map
