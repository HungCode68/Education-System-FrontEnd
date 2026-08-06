import {
  StudentProfileService
} from "./chunk-K3D6K3YW.js";
import {
  ToastService
} from "./chunk-LTLTAR4B.js";
import {
  CommonModule,
  Component,
  DatePipe,
  NgClass,
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
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-4WA2FUT3.js";

// src/app/features/student/pages/student-profile/student-profile.component.ts
function StudentProfileComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 7);
    \u0275\u0275element(2, "circle", 8)(3, "path", 9);
    \u0275\u0275elementEnd()();
  }
}
function StudentProfileComponent_div_8_span_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275text(1, "\u0110\xE3 x\u1EBFp l\u1EDBp");
    \u0275\u0275elementEnd();
  }
}
function StudentProfileComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11)(2, "div", 12)(3, "div", 13);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 14);
    \u0275\u0275element(5, "path", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "div", 16);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "h2", 17);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 18);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 19)(13, "div", 20)(14, "span", 21);
    \u0275\u0275text(15, "Tr\u1EA1ng th\xE1i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 22);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 20)(19, "span", 21);
    \u0275\u0275text(20, "N\u0103m nh\u1EADp h\u1ECDc");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 23);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(23, "div", 24);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(24, "svg", 25);
    \u0275\u0275element(25, "path", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(26, "p", 27);
    \u0275\u0275text(27, " Th\xF4ng tin h\u1ED3 s\u01A1 \u0111\u01B0\u1EE3c qu\u1EA3n l\xFD b\u1EDFi Nh\xE0 tr\u01B0\u1EDDng. N\u1EBFu c\xF3 sai s\xF3t, vui l\xF2ng li\xEAn h\u1EC7 ");
    \u0275\u0275elementStart(28, "strong");
    \u0275\u0275text(29, "Gi\xE1o vi\xEAn ch\u1EE7 nhi\u1EC7m");
    \u0275\u0275elementEnd();
    \u0275\u0275text(30, " \u0111\u1EC3 \u0111\u01B0\u1EE3c h\u1ED7 tr\u1EE3. ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "div", 28)(32, "div", 29)(33, "h3", 30);
    \u0275\u0275text(34, "Th\xF4ng tin chi ti\u1EBFt");
    \u0275\u0275elementEnd();
    \u0275\u0275template(35, StudentProfileComponent_div_8_span_35_Template, 2, 0, "span", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 32)(37, "div", 33)(38, "div")(39, "label", 34);
    \u0275\u0275text(40, "Gi\u1EDBi t\xEDnh");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 35);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div")(44, "label", 34);
    \u0275\u0275text(45, "Ng\xE0y sinh");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 35);
    \u0275\u0275text(47);
    \u0275\u0275pipe(48, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(49, "div")(50, "label", 34);
    \u0275\u0275text(51, "Email t\xE0i kho\u1EA3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "div", 36);
    \u0275\u0275text(53);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "div")(55, "label", 34);
    \u0275\u0275text(56, "\u0110\u1ECBa ch\u1EC9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "div", 35);
    \u0275\u0275text(58);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "div", 37)(60, "div")(61, "label", 34);
    \u0275\u0275text(62, "H\u1ECD t\xEAn Ph\u1EE5 huynh");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "div", 35);
    \u0275\u0275text(64);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "div")(66, "label", 34);
    \u0275\u0275text(67, "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i Ph\u1EE5 huynh");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "div", 35);
    \u0275\u0275text(69);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r0.profile().fullName.charAt(0), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.profile().fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("M\xE3 HS: ", ctx_r0.profile().studentCode);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", ctx_r0.profile().status === "studying" ? "bg-emerald-100 text-emerald-700" : "bg-gray-100 text-gray-700");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.profile().status === "studying" ? "\u0110ang h\u1ECDc" : ctx_r0.profile().status, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.profile().admissionYear);
    \u0275\u0275advance(13);
    \u0275\u0275property("ngIf", ctx_r0.profile().currentClassId);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r0.profile().gender === "male" ? "Nam" : ctx_r0.profile().gender === "female" ? "N\u1EEF" : "Kh\xE1c", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(48, 13, ctx_r0.profile().dateOfBirth, "dd/MM/yyyy"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.profile().email || "Ch\u01B0a c\u1EADp nh\u1EADt");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.profile().address || "Ch\u01B0a c\u1EADp nh\u1EADt");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.profile().parentName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.profile().parentPhone);
  }
}
var StudentProfileComponent = class _StudentProfileComponent {
  profileService = inject(StudentProfileService);
  toastService = inject(ToastService);
  profile = signal(null, ...ngDevMode ? [{ debugName: "profile" }] : (
    /* istanbul ignore next */
    []
  ));
  isLoading = signal(true, ...ngDevMode ? [{ debugName: "isLoading" }] : (
    /* istanbul ignore next */
    []
  ));
  ngOnInit() {
    this.loadProfile();
  }
  loadProfile() {
    this.isLoading.set(true);
    this.profileService.getMyProfile().subscribe({
      next: (res) => {
        this.profile.set(res);
        this.isLoading.set(false);
      },
      error: (err) => {
        if (err.status === 404) {
          this.toastService.warning("Ch\u01B0a li\xEAn k\u1EBFt", "T\xE0i kho\u1EA3n c\u1EE7a b\u1EA1n ch\u01B0a \u0111\u01B0\u1EE3c li\xEAn k\u1EBFt v\u1EDBi h\u1ED3 s\u01A1 h\u1ECDc sinh n\xE0o.");
        } else {
          this.toastService.error("L\u1ED7i", "Kh\xF4ng th\u1EC3 t\u1EA3i th\xF4ng tin h\u1ED3 s\u01A1.");
        }
        this.isLoading.set(false);
      }
    });
  }
  static \u0275fac = function StudentProfileComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StudentProfileComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StudentProfileComponent, selectors: [["app-student-profile"]], decls: 9, vars: 2, consts: [[1, "max-w-6xl", "mx-auto", "space-y-6"], [1, "flex", "justify-between", "items-end"], [1, "text-2xl", "font-extrabold", "text-gray-900", "tracking-tight"], [1, "text-sm", "text-gray-500", "mt-1"], ["class", "py-20 text-center text-indigo-500", 4, "ngIf"], ["class", "grid grid-cols-1 md:grid-cols-3 gap-6", 4, "ngIf"], [1, "py-20", "text-center", "text-indigo-500"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "inline-block", "h-8", "w-8"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"], [1, "grid", "grid-cols-1", "md:grid-cols-3", "gap-6"], [1, "md:col-span-1", "space-y-6"], [1, "bg-white", "rounded-2xl", "shadow-sm", "border", "border-gray-200", "p-6", "text-center", "relative", "overflow-hidden"], ["title", "T\xE0i kho\u1EA3n H\u1ECDc sinh", 1, "absolute", "top-4", "right-4", "text-indigo-500", "bg-indigo-50", "p-1.5", "rounded-lg"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"], [1, "w-32", "h-32", "mx-auto", "bg-gradient-to-br", "from-indigo-500", "to-blue-600", "rounded-full", "shadow-lg", "flex", "items-center", "justify-center", "text-5xl", "font-extrabold", "text-white", "mb-4", "border-4", "border-white", "ring-4", "ring-indigo-50"], [1, "text-xl", "font-bold", "text-gray-900"], [1, "text-indigo-600", "font-semibold", "text-sm", "mt-1"], [1, "mt-6", "pt-6", "border-t", "border-gray-100", "flex", "flex-col", "space-y-3"], [1, "flex", "justify-between", "items-center", "text-sm"], [1, "text-gray-500", "font-medium"], [1, "px-2.5", "py-1", "text-xs", "font-bold", "rounded-lg", "uppercase", 3, "ngClass"], [1, "font-bold", "text-gray-900"], [1, "bg-amber-50", "rounded-xl", "border", "border-amber-200", "p-4", "flex", "items-start", "space-x-3"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-amber-500", "mt-0.5", "shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "text-xs", "text-amber-800", "leading-relaxed", "font-medium"], [1, "md:col-span-2", "bg-white", "rounded-2xl", "shadow-sm", "border", "border-gray-200", "overflow-hidden"], [1, "p-6", "border-b", "border-gray-100", "bg-gray-50/50", "flex", "justify-between", "items-center"], [1, "text-lg", "font-bold", "text-gray-900"], ["class", "px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-bold rounded-full", 4, "ngIf"], [1, "p-6", "space-y-6"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "gap-6"], [1, "block", "text-xs", "font-bold", "text-gray-500", "uppercase", "tracking-wider", "mb-1.5"], [1, "text-sm", "text-gray-900", "font-medium"], [1, "text-sm", "text-indigo-600", "font-medium"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "gap-6", "pt-6", "border-t", "border-gray-100"], [1, "px-3", "py-1", "bg-indigo-100", "text-indigo-700", "text-xs", "font-bold", "rounded-full"]], template: function StudentProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "H\u1ED3 s\u01A1 c\xE1 nh\xE2n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Th\xF4ng tin h\u1ECDc sinh");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(7, StudentProfileComponent_div_7_Template, 4, 0, "div", 4)(8, StudentProfileComponent_div_8_Template, 70, 16, "div", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", ctx.isLoading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading() && ctx.profile());
    }
  }, dependencies: [CommonModule, NgClass, NgIf, DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StudentProfileComponent, [{
    type: Component,
    args: [{ selector: "app-student-profile", standalone: true, imports: [CommonModule], template: `<div class="max-w-6xl mx-auto space-y-6">\r
  \r
  <div class="flex justify-between items-end">\r
    <div>\r
      <h1 class="text-2xl font-extrabold text-gray-900 tracking-tight">H\u1ED3 s\u01A1 c\xE1 nh\xE2n</h1>\r
      <p class="text-sm text-gray-500 mt-1">Th\xF4ng tin h\u1ECDc sinh</p>\r
    </div>\r
  </div>\r
\r
  <div *ngIf="isLoading()" class="py-20 text-center text-indigo-500">\r
    <svg class="animate-spin inline-block h-8 w-8" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>\r
  </div>\r
\r
  <div *ngIf="!isLoading() && profile()" class="grid grid-cols-1 md:grid-cols-3 gap-6">\r
    \r
    <div class="md:col-span-1 space-y-6">\r
      <div class="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 text-center relative overflow-hidden">\r
        \r
        <div class="absolute top-4 right-4 text-indigo-500 bg-indigo-50 p-1.5 rounded-lg" title="T\xE0i kho\u1EA3n H\u1ECDc sinh">\r
           <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path></svg>\r
        </div>\r
\r
        <div class="w-32 h-32 mx-auto bg-gradient-to-br from-indigo-500 to-blue-600 rounded-full shadow-lg flex items-center justify-center text-5xl font-extrabold text-white mb-4 border-4 border-white ring-4 ring-indigo-50">\r
          {{ profile().fullName.charAt(0) }}\r
        </div>\r
        <h2 class="text-xl font-bold text-gray-900">{{ profile().fullName }}</h2>\r
        <p class="text-indigo-600 font-semibold text-sm mt-1">M\xE3 HS: {{ profile().studentCode }}</p>\r
        \r
        <div class="mt-6 pt-6 border-t border-gray-100 flex flex-col space-y-3">\r
          <div class="flex justify-between items-center text-sm">\r
            <span class="text-gray-500 font-medium">Tr\u1EA1ng th\xE1i</span>\r
            <span class="px-2.5 py-1 text-xs font-bold rounded-lg uppercase"\r
                  [ngClass]="profile().status === 'studying' ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-100 text-gray-700'">\r
               {{ profile().status === 'studying' ? '\u0110ang h\u1ECDc' : profile().status }}\r
            </span>\r
          </div>\r
          <div class="flex justify-between items-center text-sm">\r
            <span class="text-gray-500 font-medium">N\u0103m nh\u1EADp h\u1ECDc</span>\r
            <span class="font-bold text-gray-900">{{ profile().admissionYear }}</span>\r
          </div>\r
        </div>\r
      </div>\r
      \r
      <div class="bg-amber-50 rounded-xl border border-amber-200 p-4 flex items-start space-x-3">\r
         <svg class="w-5 h-5 text-amber-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>\r
         <p class="text-xs text-amber-800 leading-relaxed font-medium">\r
            Th\xF4ng tin h\u1ED3 s\u01A1 \u0111\u01B0\u1EE3c qu\u1EA3n l\xFD b\u1EDFi Nh\xE0 tr\u01B0\u1EDDng. N\u1EBFu c\xF3 sai s\xF3t, vui l\xF2ng li\xEAn h\u1EC7 <strong>Gi\xE1o vi\xEAn ch\u1EE7 nhi\u1EC7m</strong> \u0111\u1EC3 \u0111\u01B0\u1EE3c h\u1ED7 tr\u1EE3.\r
         </p>\r
      </div>\r
    </div>\r
\r
    <div class="md:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">\r
      \r
      <div class="p-6 border-b border-gray-100 bg-gray-50/50 flex justify-between items-center">\r
        <h3 class="text-lg font-bold text-gray-900">Th\xF4ng tin chi ti\u1EBFt</h3>\r
        <span *ngIf="profile().currentClassId" class="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-bold rounded-full">\u0110\xE3 x\u1EBFp l\u1EDBp</span>\r
      </div>\r
\r
      <div class="p-6 space-y-6">\r
        \r
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">\r
          <div>\r
            <label class="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Gi\u1EDBi t\xEDnh</label>\r
            <div class="text-sm text-gray-900 font-medium">\r
              {{ profile().gender === 'male' ? 'Nam' : (profile().gender === 'female' ? 'N\u1EEF' : 'Kh\xE1c') }}\r
            </div>\r
          </div>\r
          <div>\r
            <label class="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Ng\xE0y sinh</label>\r
            <div class="text-sm text-gray-900 font-medium">{{ profile().dateOfBirth | date:'dd/MM/yyyy' }}</div>\r
          </div>\r
        </div>\r
\r
        <div>\r
          <label class="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Email t\xE0i kho\u1EA3n</label>\r
          <div class="text-sm text-indigo-600 font-medium">{{ profile().email || 'Ch\u01B0a c\u1EADp nh\u1EADt' }}</div>\r
        </div>\r
\r
        <div>\r
          <label class="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">\u0110\u1ECBa ch\u1EC9</label>\r
          <div class="text-sm text-gray-900 font-medium">{{ profile().address || 'Ch\u01B0a c\u1EADp nh\u1EADt' }}</div>\r
        </div>\r
\r
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-gray-100">\r
          <div>\r
            <label class="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">H\u1ECD t\xEAn Ph\u1EE5 huynh</label>\r
            <div class="text-sm text-gray-900 font-medium">{{ profile().parentName }}</div>\r
          </div>\r
          <div>\r
            <label class="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">S\u1ED1 \u0111i\u1EC7n tho\u1EA1i Ph\u1EE5 huynh</label>\r
            <div class="text-sm text-gray-900 font-medium">{{ profile().parentPhone }}</div>\r
          </div>\r
        </div>\r
\r
      </div>\r
    </div>\r
  </div>\r
</div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StudentProfileComponent, { className: "StudentProfileComponent", filePath: "src/app/features/student/pages/student-profile/student-profile.component.ts", lineNumber: 12 });
})();
export {
  StudentProfileComponent
};
//# sourceMappingURL=chunk-3M3EJHWO.js.map
