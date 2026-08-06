import {
  StudentAnnouncementService
} from "./chunk-OQJC4JKI.js";
import {
  ToastService
} from "./chunk-LTLTAR4B.js";
import {
  ActivatedRoute,
  RouterModule
} from "./chunk-T67WJEUA.js";
import {
  CommonModule,
  Component,
  DatePipe,
  NgForOf,
  NgIf,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
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
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-4WA2FUT3.js";

// src/app/features/student/pages/announcement/student-homeroom-stream.component.ts
function StudentHomeroomStreamComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 13);
    \u0275\u0275element(2, "circle", 14)(3, "path", 15);
    \u0275\u0275elementEnd()();
  }
}
function StudentHomeroomStreamComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 18);
    \u0275\u0275element(3, "path", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "h3", 20);
    \u0275\u0275text(5, "Ch\u01B0a c\xF3 th\xF4ng b\xE1o n\xE0o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 21);
    \u0275\u0275text(7, "Gi\xE1o vi\xEAn ch\u1EE7 nhi\u1EC7m ch\u01B0a \u0111\u0103ng t\u1EA3i th\xF4ng b\xE1o n\xE0o cho l\u1EDBp.");
    \u0275\u0275elementEnd()();
  }
}
function StudentHomeroomStreamComponent_div_14_div_1_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 35)(2, "div", 36);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 37);
    \u0275\u0275element(4, "path", 38);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div", 39)(6, "p", 40);
    \u0275\u0275text(7, "T\u1EC7p \u0111\xEDnh k\xE8m th\xF4ng b\xE1o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 41);
    \u0275\u0275text(9, "Nh\u1EA5n \u0111\u1EC3 t\u1EA3i xu\u1ED1ng ho\u1EB7c xem chi ti\u1EBFt");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "a", 42);
    \u0275\u0275text(11, " T\u1EA3i xu\u1ED1ng ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(12, "svg", 43);
    \u0275\u0275element(13, "path", 44);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(10);
    \u0275\u0275property("href", item_r1.attachmentUrl, \u0275\u0275sanitizeUrl);
  }
}
function StudentHomeroomStreamComponent_div_14_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 26)(2, "div", 27);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "h4", 28);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 29);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 30)(11, "h2", 31);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 32);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, StudentHomeroomStreamComponent_div_14_div_1_div_15_Template, 14, 1, "div", 33);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getInitials(item_r1.createdByName), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r1.createdByName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 6, item_r1.publishedAt, "HH:mm \u2022 dd/MM/yyyy"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(item_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.content);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r1.attachmentUrl);
  }
}
function StudentHomeroomStreamComponent_div_14_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 45)(1, "button", 46);
    \u0275\u0275listener("click", function StudentHomeroomStreamComponent_div_14_div_2_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.changePage(ctx_r1.currentPage() - 1));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 47);
    \u0275\u0275element(3, "path", 48);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span", 49);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 46);
    \u0275\u0275listener("click", function StudentHomeroomStreamComponent_div_14_div_2_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.changePage(ctx_r1.currentPage() + 1));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 47);
    \u0275\u0275element(8, "path", 50);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.currentPage() === 1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("Trang ", ctx_r1.currentPage(), " / ", ctx_r1.totalPages());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.currentPage() === ctx_r1.totalPages());
  }
}
function StudentHomeroomStreamComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275template(1, StudentHomeroomStreamComponent_div_14_div_1_Template, 16, 9, "div", 23)(2, StudentHomeroomStreamComponent_div_14_div_2_Template, 9, 4, "div", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.announcements());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.totalPages() > 1);
  }
}
var StudentHomeroomStreamComponent = class _StudentHomeroomStreamComponent {
  route = inject(ActivatedRoute);
  announcementService = inject(StudentAnnouncementService);
  toastService = inject(ToastService);
  classId = signal("", ...ngDevMode ? [{ debugName: "classId" }] : (
    /* istanbul ignore next */
    []
  ));
  className = signal("L\u1EDBp Ch\u1EE7 Nhi\u1EC7m", ...ngDevMode ? [{ debugName: "className" }] : (
    /* istanbul ignore next */
    []
  ));
  // Tên lớp (lấy từ thông báo đầu tiên)
  announcements = signal([], ...ngDevMode ? [{ debugName: "announcements" }] : (
    /* istanbul ignore next */
    []
  ));
  isLoading = signal(true, ...ngDevMode ? [{ debugName: "isLoading" }] : (
    /* istanbul ignore next */
    []
  ));
  currentPage = signal(1, ...ngDevMode ? [{ debugName: "currentPage" }] : (
    /* istanbul ignore next */
    []
  ));
  totalPages = signal(1, ...ngDevMode ? [{ debugName: "totalPages" }] : (
    /* istanbul ignore next */
    []
  ));
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get("id");
      if (id && id !== "null" && id !== "undefined") {
        this.classId.set(id);
        this.loadAnnouncements(1);
      } else {
        this.isLoading.set(false);
        this.toastService.warning("Ch\u01B0a c\xF3 l\u1EDBp", "B\u1EA1n ch\u01B0a \u0111\u01B0\u1EE3c x\u1EBFp v\xE0o l\u1EDBp ch\u1EE7 nhi\u1EC7m n\xE0o.");
      }
    });
  }
  loadAnnouncements(page = 1) {
    this.isLoading.set(true);
    this.announcementService.getHomeroomAnnouncements(this.classId(), page).subscribe({
      next: (res) => {
        this.announcements.set(res.content || []);
        this.currentPage.set(res.number + 1);
        this.totalPages.set(res.totalPages);
        if (res.content && res.content.length > 0) {
          this.className.set(res.content[0].physicalClassName);
        }
        this.isLoading.set(false);
        this.announcementService.markAsSeen(this.classId());
      },
      error: () => {
        this.toastService.error("L\u1ED7i", "Kh\xF4ng th\u1EC3 t\u1EA3i b\u1EA3ng tin l\u1EDBp h\u1ECDc.");
        this.isLoading.set(false);
      }
    });
  }
  // Chuyển trang (Cuộn mượt mà lên đầu trang khi bấm Next/Prev)
  changePage(page) {
    if (page >= 1 && page <= this.totalPages()) {
      this.loadAnnouncements(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
  // Tạo Avatar chữ cái đầu từ tên Giáo viên
  getInitials(name) {
    if (!name)
      return "GV";
    const parts = name.trim().split(" ");
    return parts[parts.length - 1].charAt(0).toUpperCase();
  }
  static \u0275fac = function StudentHomeroomStreamComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StudentHomeroomStreamComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StudentHomeroomStreamComponent, selectors: [["app-student-homeroom-stream"]], decls: 15, vars: 4, consts: [[1, "max-w-4xl", "mx-auto", "space-y-8", "pb-16", "pt-4"], [1, "relative", "bg-gradient-to-br", "from-emerald-600", "to-teal-800", "rounded-3xl", "p-10", "text-white", "shadow-lg", "overflow-hidden", "flex", "items-end", "min-h-[200px]"], [1, "absolute", "top-0", "right-0", "-mt-10", "-mr-10", "w-64", "h-64", "bg-white", "opacity-10", "rounded-full", "blur-3xl"], [1, "absolute", "bottom-0", "left-0", "w-full", "h-1/2", "bg-gradient-to-t", "from-black/40", "to-transparent"], [1, "relative", "z-10", "w-full", "flex", "flex-col", "sm:flex-row", "sm:items-end", "justify-between", "gap-4"], [1, "text-4xl", "font-black", "tracking-tight", "mb-2"], [1, "text-emerald-100", "font-medium", "flex", "items-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "mr-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"], ["class", "py-20 flex justify-center", 4, "ngIf"], ["class", "text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm", 4, "ngIf"], ["class", "space-y-6", 4, "ngIf"], [1, "py-20", "flex", "justify-center"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-10", "w-10", "text-emerald-500"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"], [1, "text-center", "py-20", "bg-white", "rounded-3xl", "border", "border-gray-100", "shadow-sm"], [1, "mx-auto", "w-20", "h-20", "bg-gray-50", "rounded-full", "flex", "items-center", "justify-center", "mb-5"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-10", "h-10", "text-gray-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"], [1, "text-xl", "font-bold", "text-gray-900", "mb-2"], [1, "text-gray-500"], [1, "space-y-6"], ["class", "bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow", 4, "ngFor", "ngForOf"], ["class", "flex justify-center items-center gap-4 pt-6 border-t border-gray-100", 4, "ngIf"], [1, "bg-white", "rounded-3xl", "border", "border-gray-100", "shadow-sm", "overflow-hidden", "hover:shadow-md", "transition-shadow"], [1, "p-6", "border-b", "border-gray-50", "flex", "items-center", "gap-4", "bg-gray-50/30"], [1, "w-12", "h-12", "bg-emerald-100", "text-emerald-700", "font-bold", "rounded-full", "flex", "items-center", "justify-center", "text-lg", "shadow-sm", "border", "border-emerald-200"], [1, "font-bold", "text-gray-900", "text-base"], [1, "text-xs", "text-gray-500", "font-medium", "mt-0.5"], [1, "p-6", "sm:p-8"], [1, "text-xl", "font-extrabold", "text-gray-900", "mb-4"], [1, "text-gray-700", "leading-relaxed", "whitespace-pre-line", "text-base"], ["class", "mt-8 border border-gray-200 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between bg-gray-50 group hover:bg-white hover:border-emerald-200 transition-colors gap-4", 4, "ngIf"], [1, "mt-8", "border", "border-gray-200", "rounded-2xl", "p-4", "flex", "flex-col", "sm:flex-row", "sm:items-center", "justify-between", "bg-gray-50", "group", "hover:bg-white", "hover:border-emerald-200", "transition-colors", "gap-4"], [1, "flex", "items-center", "gap-4", "overflow-hidden"], [1, "w-12", "h-12", "bg-white", "text-emerald-600", "rounded-xl", "flex", "items-center", "justify-center", "shrink-0", "shadow-sm", "border", "border-gray-100"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"], [1, "min-w-0"], [1, "text-sm", "font-bold", "text-gray-900", "truncate"], [1, "text-xs", "text-gray-500", "mt-0.5"], ["target", "_blank", 1, "shrink-0", "w-full", "sm:w-auto", "px-5", "py-2.5", "bg-white", "border", "border-gray-200", "text-emerald-600", "text-sm", "font-bold", "rounded-xl", "shadow-sm", "hover:bg-emerald-50", "hover:border-emerald-200", "transition-all", "flex", "items-center", "justify-center", 3, "href"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "ml-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"], [1, "flex", "justify-center", "items-center", "gap-4", "pt-6", "border-t", "border-gray-100"], [1, "p-2", "rounded-lg", "border", "border-gray-200", "text-gray-600", "hover:bg-gray-50", "disabled:opacity-50", "transition", 3, "click", "disabled"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 19l-7-7 7-7"], [1, "text-sm", "font-bold", "text-gray-700"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 5l7 7-7 7"]], template: function StudentHomeroomStreamComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "div", 2)(3, "div", 3);
      \u0275\u0275elementStart(4, "div", 4)(5, "div")(6, "h1", 5);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p", 6);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(9, "svg", 7);
      \u0275\u0275element(10, "path", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275text(11, " B\u1EA3ng tin l\u1EDBp ch\u1EE7 nhi\u1EC7m ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(12, StudentHomeroomStreamComponent_div_12_Template, 4, 0, "div", 9)(13, StudentHomeroomStreamComponent_div_13_Template, 8, 0, "div", 10)(14, StudentHomeroomStreamComponent_div_14_Template, 3, 2, "div", 11);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.className());
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.isLoading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading() && ctx.announcements().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading() && ctx.announcements().length > 0);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StudentHomeroomStreamComponent, [{
    type: Component,
    args: [{ selector: "app-student-homeroom-stream", standalone: true, imports: [CommonModule, RouterModule], template: `<div class="max-w-4xl mx-auto space-y-8 pb-16 pt-4">\r
\r
  <div class="relative bg-gradient-to-br from-emerald-600 to-teal-800 rounded-3xl p-10 text-white shadow-lg overflow-hidden flex items-end min-h-[200px]">\r
    <div class="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>\r
    <div class="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/40 to-transparent"></div>\r
    \r
    <div class="relative z-10 w-full flex flex-col sm:flex-row sm:items-end justify-between gap-4">\r
      <div>\r
        <h1 class="text-4xl font-black tracking-tight mb-2">{{ className() }}</h1>\r
        <p class="text-emerald-100 font-medium flex items-center">\r
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>\r
          B\u1EA3ng tin l\u1EDBp ch\u1EE7 nhi\u1EC7m\r
        </p>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <div *ngIf="isLoading()" class="py-20 flex justify-center">\r
    <svg class="animate-spin h-10 w-10 text-emerald-500" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>\r
  </div>\r
\r
  <div *ngIf="!isLoading() && announcements().length === 0" class="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm">\r
    <div class="mx-auto w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-5">\r
      <svg class="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path></svg>\r
    </div>\r
    <h3 class="text-xl font-bold text-gray-900 mb-2">Ch\u01B0a c\xF3 th\xF4ng b\xE1o n\xE0o</h3>\r
    <p class="text-gray-500">Gi\xE1o vi\xEAn ch\u1EE7 nhi\u1EC7m ch\u01B0a \u0111\u0103ng t\u1EA3i th\xF4ng b\xE1o n\xE0o cho l\u1EDBp.</p>\r
  </div>\r
\r
  <div *ngIf="!isLoading() && announcements().length > 0" class="space-y-6">\r
    \r
    <div *ngFor="let item of announcements()" class="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow">\r
      \r
      <div class="p-6 border-b border-gray-50 flex items-center gap-4 bg-gray-50/30">\r
        <div class="w-12 h-12 bg-emerald-100 text-emerald-700 font-bold rounded-full flex items-center justify-center text-lg shadow-sm border border-emerald-200">\r
          {{ getInitials(item.createdByName) }}\r
        </div>\r
        <div>\r
          <h4 class="font-bold text-gray-900 text-base">{{ item.createdByName }}</h4>\r
          <p class="text-xs text-gray-500 font-medium mt-0.5">{{ item.publishedAt | date:'HH:mm \u2022 dd/MM/yyyy' }}</p>\r
        </div>\r
      </div>\r
\r
      <div class="p-6 sm:p-8">\r
        <h2 class="text-xl font-extrabold text-gray-900 mb-4">{{ item.title }}</h2>\r
        <p class="text-gray-700 leading-relaxed whitespace-pre-line text-base">{{ item.content }}</p>\r
\r
        <div *ngIf="item.attachmentUrl" class="mt-8 border border-gray-200 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between bg-gray-50 group hover:bg-white hover:border-emerald-200 transition-colors gap-4">\r
          <div class="flex items-center gap-4 overflow-hidden">\r
            <div class="w-12 h-12 bg-white text-emerald-600 rounded-xl flex items-center justify-center shrink-0 shadow-sm border border-gray-100">\r
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path></svg>\r
            </div>\r
            <div class="min-w-0">\r
              <p class="text-sm font-bold text-gray-900 truncate">T\u1EC7p \u0111\xEDnh k\xE8m th\xF4ng b\xE1o</p>\r
              <p class="text-xs text-gray-500 mt-0.5">Nh\u1EA5n \u0111\u1EC3 t\u1EA3i xu\u1ED1ng ho\u1EB7c xem chi ti\u1EBFt</p>\r
            </div>\r
          </div>\r
          \r
          <a [href]="item.attachmentUrl" target="_blank" class="shrink-0 w-full sm:w-auto px-5 py-2.5 bg-white border border-gray-200 text-emerald-600 text-sm font-bold rounded-xl shadow-sm hover:bg-emerald-50 hover:border-emerald-200 transition-all flex items-center justify-center">\r
            T\u1EA3i xu\u1ED1ng\r
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>\r
          </a>\r
        </div>\r
      </div>\r
\r
    </div>\r
\r
    <div *ngIf="totalPages() > 1" class="flex justify-center items-center gap-4 pt-6 border-t border-gray-100">\r
      <button (click)="changePage(currentPage() - 1)" [disabled]="currentPage() === 1" class="p-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50 transition">\r
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>\r
      </button>\r
      <span class="text-sm font-bold text-gray-700">Trang {{ currentPage() }} / {{ totalPages() }}</span>\r
      <button (click)="changePage(currentPage() + 1)" [disabled]="currentPage() === totalPages()" class="p-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50 transition">\r
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>\r
      </button>\r
    </div>\r
\r
  </div>\r
</div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StudentHomeroomStreamComponent, { className: "StudentHomeroomStreamComponent", filePath: "src/app/features/student/pages/announcement/student-homeroom-stream.component.ts", lineNumber: 13 });
})();
export {
  StudentHomeroomStreamComponent
};
//# sourceMappingURL=chunk-VSFLTYEO.js.map
