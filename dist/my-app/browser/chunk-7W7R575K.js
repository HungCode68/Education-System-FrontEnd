import {
  Router
} from "./chunk-T67WJEUA.js";
import {
  BehaviorSubject,
  CommonModule,
  Component,
  DatePipe,
  ElementRef,
  HostListener,
  HttpClient,
  Injectable,
  NgClass,
  NgForOf,
  NgIf,
  __spreadProps,
  __spreadValues,
  environment,
  inject,
  setClassMetadata,
  signal,
  tap,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-4WA2FUT3.js";

// src/app/features/student/services/notification.service.ts
var NotificationService = class _NotificationService {
  http = inject(HttpClient);
  apiUrl = `${environment.apiUrl}/api/v1/notifications`;
  // Biến lưu trữ số lượng chưa đọc (Có thể subscribe từ bất kỳ component nào)
  unreadCount$ = new BehaviorSubject(0);
  // Lấy danh sách (Trang 1, 10 thông báo mới nhất)
  getNotifications(page = 1, size = 10) {
    return this.http.get(`${this.apiUrl}?page=${page}&size=${size}`);
  }
  // Gọi API để đếm số chưa đọc và cập nhật vào unreadCount$
  fetchUnreadCount() {
    this.http.get(`${this.apiUrl}/unread-count`).subscribe({
      next: (res) => this.unreadCount$.next(res.unreadCount)
    });
  }
  // Đánh dấu 1 thông báo là đã đọc
  markAsRead(id) {
    return this.http.patch(`${this.apiUrl}/${id}/read`, {}).pipe(
      tap(() => this.fetchUnreadCount())
      // Thành công thì tự động đếm lại số chưa đọc
    );
  }
  // Đánh dấu đọc tất cả
  markAllAsRead() {
    return this.http.patch(`${this.apiUrl}/read-all`, {}).pipe(
      tap(() => this.unreadCount$.next(0))
      // Đưa số chưa đọc về 0 ngay lập tức
    );
  }
  static \u0275fac = function NotificationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotificationService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NotificationService, factory: _NotificationService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotificationService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/features/student/pages/notification/notification-bell.component.ts
function NotificationBellComponent_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.unreadCount() > 99 ? "99+" : ctx_r0.unreadCount(), " ");
  }
}
function NotificationBellComponent_div_5_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function NotificationBellComponent_div_5_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.markAllRead());
    });
    \u0275\u0275text(1, "\u0110\xE1nh d\u1EA5u \u0111\xE3 \u0111\u1ECDc");
    \u0275\u0275elementEnd();
  }
}
function NotificationBellComponent_div_5_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 17);
    \u0275\u0275element(2, "circle", 18)(3, "path", 19);
    \u0275\u0275elementEnd()();
  }
}
function NotificationBellComponent_div_5_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 24);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 25);
    \u0275\u0275element(3, "path", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "p", 27);
    \u0275\u0275text(5, "B\u1EA1n kh\xF4ng c\xF3 th\xF4ng b\xE1o n\xE0o m\u1EDBi.");
    \u0275\u0275elementEnd()();
  }
}
function NotificationBellComponent_div_5_div_6_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 37);
  }
}
function NotificationBellComponent_div_5_div_6_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275listener("click", function NotificationBellComponent_div_5_div_6_div_2_Template_div_click_0_listener() {
      const notif_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.handleNotificationClick(notif_r4));
    });
    \u0275\u0275template(1, NotificationBellComponent_div_5_div_6_div_2_div_1_Template, 1, 0, "div", 29);
    \u0275\u0275elementStart(2, "div", 30);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 31);
    \u0275\u0275element(4, "path", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div", 33)(6, "p", 34);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 35);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 36)(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14, "\u2022");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "date");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const notif_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", notif_r4.isRead ? "bg-white opacity-70" : "bg-indigo-50/30");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !notif_r4.isRead);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.getIconByType(notif_r4.type).bg);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.getIconByType(notif_r4.type).text);
    \u0275\u0275advance();
    \u0275\u0275attribute("d", ctx_r0.getIconByType(notif_r4.type).path);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", !notif_r4.isRead ? "text-indigo-900" : "text-gray-800");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(notif_r4.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(notif_r4.message);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(notif_r4.senderName || "H\u1EC7 th\u1ED1ng");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(17, 10, notif_r4.createdAt, "HH:mm dd/MM/yyyy"));
  }
}
function NotificationBellComponent_div_5_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275template(1, NotificationBellComponent_div_5_div_6_div_1_Template, 6, 0, "div", 21)(2, NotificationBellComponent_div_5_div_6_div_2_Template, 18, 13, "div", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.notifications().length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.notifications());
  }
}
function NotificationBellComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8)(2, "h3", 9);
    \u0275\u0275text(3, "Th\xF4ng b\xE1o");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, NotificationBellComponent_div_5_button_4_Template, 2, 0, "button", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, NotificationBellComponent_div_5_div_5_Template, 4, 0, "div", 11)(6, NotificationBellComponent_div_5_div_6_Template, 3, 2, "div", 12);
    \u0275\u0275elementStart(7, "div", 13)(8, "button", 14);
    \u0275\u0275text(9, "Xem t\u1EA5t c\u1EA3 th\xF4ng b\xE1o");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r0.unreadCount() > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isLoading());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isLoading());
  }
}
var NotificationBellComponent = class _NotificationBellComponent {
  notifService = inject(NotificationService);
  router = inject(Router);
  eRef = inject(ElementRef);
  isOpen = signal(false, ...ngDevMode ? [{ debugName: "isOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  isLoading = signal(false, ...ngDevMode ? [{ debugName: "isLoading" }] : (
    /* istanbul ignore next */
    []
  ));
  notifications = signal([], ...ngDevMode ? [{ debugName: "notifications" }] : (
    /* istanbul ignore next */
    []
  ));
  unreadCount = signal(0, ...ngDevMode ? [{ debugName: "unreadCount" }] : (
    /* istanbul ignore next */
    []
  ));
  ngOnInit() {
    this.notifService.unreadCount$.subscribe((count) => {
      this.unreadCount.set(count);
    });
    this.notifService.fetchUnreadCount();
    setInterval(() => this.notifService.fetchUnreadCount(), 3 * 60 * 1e3);
  }
  // Đóng/mở Popup
  toggleDropdown() {
    this.isOpen.update((v) => !v);
    if (this.isOpen() && this.notifications().length === 0) {
      this.loadNotifications();
    }
  }
  loadNotifications() {
    this.isLoading.set(true);
    this.notifService.getNotifications(1, 10).subscribe({
      next: (res) => {
        this.notifications.set(res.content || []);
        this.isLoading.set(false);
      },
      error: () => this.isLoading.set(false)
    });
  }
  // Click ra ngoài để đóng popup
  clickout(event) {
    if (this.isOpen() && !this.eRef.nativeElement.contains(event.target)) {
      this.isOpen.set(false);
    }
  }
  // Khi học sinh click vào 1 thông báo
  handleNotificationClick(notif) {
    if (!notif.isRead) {
      this.notifService.markAsRead(notif.id).subscribe(() => {
        notif.isRead = true;
      });
    }
    this.isOpen.set(false);
    if (notif.relatedType === "assignments" || notif.relatedType === "submissions") {
      this.router.navigate(["/student/assignment", notif.relatedId]);
    }
  }
  markAllRead() {
    this.notifService.markAllAsRead().subscribe(() => {
      this.notifications.update((notifs) => notifs.map((n) => __spreadProps(__spreadValues({}, n), { isRead: true })));
    });
  }
  // Hàm chọn Icon theo Type
  getIconByType(type) {
    switch (type) {
      case "assignment":
        return { bg: "bg-blue-100", text: "text-blue-600", path: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" };
      case "grade":
        return { bg: "bg-emerald-100", text: "text-emerald-600", path: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" };
      case "system":
        return { bg: "bg-amber-100", text: "text-amber-600", path: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" };
      default:
        return { bg: "bg-gray-100", text: "text-gray-600", path: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" };
    }
  }
  static \u0275fac = function NotificationBellComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotificationBellComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotificationBellComponent, selectors: [["app-notification-bell"]], hostBindings: function NotificationBellComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function NotificationBellComponent_click_HostBindingHandler($event) {
        return ctx.clickout($event);
      }, \u0275\u0275resolveDocument);
    }
  }, decls: 6, vars: 2, consts: [[1, "relative", "inline-block", "text-left"], [1, "relative", "p-2", "text-gray-400", "hover:text-indigo-600", "hover:bg-indigo-50", "rounded-full", "transition-colors", "focus:outline-none", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"], ["class", "absolute top-1 right-1 flex items-center justify-center min-w-[18px] h-[18px] px-1 text-[10px] font-bold text-white bg-red-500 border-2 border-white rounded-full shadow-sm animate-bounce", 4, "ngIf"], ["class", "absolute right-0 mt-3 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 overflow-hidden animate-[fadeIn_0.2s_ease-out] transform origin-top-right", 4, "ngIf"], [1, "absolute", "top-1", "right-1", "flex", "items-center", "justify-center", "min-w-[18px]", "h-[18px]", "px-1", "text-[10px]", "font-bold", "text-white", "bg-red-500", "border-2", "border-white", "rounded-full", "shadow-sm", "animate-bounce"], [1, "absolute", "right-0", "mt-3", "w-80", "sm:w-96", "bg-white", "rounded-2xl", "shadow-2xl", "border", "border-gray-100", "z-50", "overflow-hidden", "animate-[fadeIn_0.2s_ease-out]", "transform", "origin-top-right"], [1, "px-5", "py-4", "border-b", "border-gray-100", "flex", "items-center", "justify-between", "bg-gray-50/50"], [1, "text-sm", "font-extrabold", "text-gray-900", "tracking-tight"], ["class", "text-xs font-bold text-indigo-600 hover:text-indigo-800 transition", 3, "click", 4, "ngIf"], ["class", "py-12 flex justify-center", 4, "ngIf"], ["class", "max-h-[400px] overflow-y-auto custom-scrollbar", 4, "ngIf"], [1, "p-3", "border-t", "border-gray-100", "bg-gray-50", "text-center"], [1, "text-xs", "font-bold", "text-gray-500", "hover:text-indigo-600", "transition"], [1, "text-xs", "font-bold", "text-indigo-600", "hover:text-indigo-800", "transition", 3, "click"], [1, "py-12", "flex", "justify-center"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-6", "w-6", "text-indigo-500"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"], [1, "max-h-[400px]", "overflow-y-auto", "custom-scrollbar"], ["class", "text-center py-10", 4, "ngIf"], ["class", "p-4 border-b border-gray-50 flex gap-4 cursor-pointer transition-colors relative hover:bg-gray-50 group", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "text-center", "py-10"], [1, "mx-auto", "w-12", "h-12", "bg-gray-50", "rounded-full", "flex", "items-center", "justify-center", "mb-3"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6", "text-gray-300"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"], [1, "text-sm", "text-gray-500", "font-medium"], [1, "p-4", "border-b", "border-gray-50", "flex", "gap-4", "cursor-pointer", "transition-colors", "relative", "hover:bg-gray-50", "group", 3, "click", "ngClass"], ["class", "absolute left-0 top-0 bottom-0 w-1 bg-indigo-500", 4, "ngIf"], [1, "w-10", "h-10", "rounded-full", "flex-shrink-0", "flex", "items-center", "justify-center", "mt-1", 3, "ngClass"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", 3, "ngClass"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2"], [1, "flex-1", "min-w-0"], [1, "text-sm", "font-bold", "text-gray-900", "truncate", 3, "ngClass"], [1, "text-xs", "text-gray-600", "mt-1", "line-clamp-2"], [1, "flex", "items-center", "gap-2", "mt-2", "text-[10px]", "font-bold", "text-gray-400"], [1, "absolute", "left-0", "top-0", "bottom-0", "w-1", "bg-indigo-500"]], template: function NotificationBellComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "button", 1);
      \u0275\u0275listener("click", function NotificationBellComponent_Template_button_click_1_listener() {
        return ctx.toggleDropdown();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(2, "svg", 2);
      \u0275\u0275element(3, "path", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275template(4, NotificationBellComponent_span_4_Template, 2, 1, "span", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275template(5, NotificationBellComponent_div_5_Template, 10, 3, "div", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.unreadCount() > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isOpen());
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotificationBellComponent, [{
    type: Component,
    args: [{ selector: "app-notification-bell", standalone: true, imports: [CommonModule], template: `<div class="relative inline-block text-left">\r
  \r
  <button (click)="toggleDropdown()" class="relative p-2 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-colors focus:outline-none">\r
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>\r
    \r
    <span *ngIf="unreadCount() > 0" class="absolute top-1 right-1 flex items-center justify-center min-w-[18px] h-[18px] px-1 text-[10px] font-bold text-white bg-red-500 border-2 border-white rounded-full shadow-sm animate-bounce">\r
      {{ unreadCount() > 99 ? '99+' : unreadCount() }}\r
    </span>\r
  </button>\r
\r
  <div *ngIf="isOpen()" class="absolute right-0 mt-3 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 overflow-hidden animate-[fadeIn_0.2s_ease-out] transform origin-top-right">\r
    \r
    <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">\r
      <h3 class="text-sm font-extrabold text-gray-900 tracking-tight">Th\xF4ng b\xE1o</h3>\r
      \r
      <button *ngIf="unreadCount() > 0" (click)="markAllRead()" class="text-xs font-bold text-indigo-600 hover:text-indigo-800 transition">\u0110\xE1nh d\u1EA5u \u0111\xE3 \u0111\u1ECDc</button>\r
    </div>\r
\r
    <div *ngIf="isLoading()" class="py-12 flex justify-center">\r
      <svg class="animate-spin h-6 w-6 text-indigo-500" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>\r
    </div>\r
\r
    <div *ngIf="!isLoading()" class="max-h-[400px] overflow-y-auto custom-scrollbar">\r
      \r
      <div *ngIf="notifications().length === 0" class="text-center py-10">\r
        <div class="mx-auto w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-3">\r
          <svg class="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path></svg>\r
        </div>\r
        <p class="text-sm text-gray-500 font-medium">B\u1EA1n kh\xF4ng c\xF3 th\xF4ng b\xE1o n\xE0o m\u1EDBi.</p>\r
      </div>\r
\r
      <div *ngFor="let notif of notifications()" \r
           (click)="handleNotificationClick(notif)"\r
           class="p-4 border-b border-gray-50 flex gap-4 cursor-pointer transition-colors relative hover:bg-gray-50 group"\r
           [ngClass]="notif.isRead ? 'bg-white opacity-70' : 'bg-indigo-50/30'">\r
        \r
        <div *ngIf="!notif.isRead" class="absolute left-0 top-0 bottom-0 w-1 bg-indigo-500"></div>\r
\r
        <div class="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center mt-1" [ngClass]="getIconByType(notif.type).bg">\r
           <svg class="w-5 h-5" [ngClass]="getIconByType(notif.type).text" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" [attr.d]="getIconByType(notif.type).path"></path>\r
           </svg>\r
        </div>\r
\r
        <div class="flex-1 min-w-0">\r
          <p class="text-sm font-bold text-gray-900 truncate" [ngClass]="!notif.isRead ? 'text-indigo-900' : 'text-gray-800'">{{ notif.title }}</p>\r
          <p class="text-xs text-gray-600 mt-1 line-clamp-2">{{ notif.message }}</p>\r
          <div class="flex items-center gap-2 mt-2 text-[10px] font-bold text-gray-400">\r
            <span>{{ notif.senderName || 'H\u1EC7 th\u1ED1ng' }}</span>\r
            <span>\u2022</span>\r
            <span>{{ notif.createdAt | date:'HH:mm dd/MM/yyyy' }}</span>\r
          </div>\r
        </div>\r
      </div>\r
\r
    </div>\r
\r
    <div class="p-3 border-t border-gray-100 bg-gray-50 text-center">\r
      <button class="text-xs font-bold text-gray-500 hover:text-indigo-600 transition">Xem t\u1EA5t c\u1EA3 th\xF4ng b\xE1o</button>\r
    </div>\r
\r
  </div>\r
</div>` }]
  }], null, { clickout: [{
    type: HostListener,
    args: ["document:click", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotificationBellComponent, { className: "NotificationBellComponent", filePath: "src/app/features/student/pages/notification/notification-bell.component.ts", lineNumber: 12 });
})();

export {
  NotificationBellComponent
};
//# sourceMappingURL=chunk-7W7R575K.js.map
