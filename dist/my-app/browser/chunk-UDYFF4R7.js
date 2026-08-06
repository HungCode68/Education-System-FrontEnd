import {
  ActivityLogComponent,
  ActivityLogService,
  ClassService,
  CourseService,
  DepartmentComponent,
  EnrollmentComponent,
  LearningMaterialComponent,
  LearningMaterialService,
  PermissionComponent,
  ReportsService,
  RoleComponent,
  RoomService,
  ScheduleAssignmentService,
  ScheduleComponent,
  StaffComponent,
  StaffService,
  StudentComponent,
  TeachingAssignmentService,
  TeachingSubstitutionService,
  TermService,
  UserComponent,
  takeUntilDestroyed
} from "./chunk-6CQH4LRE.js";
import {
  HasPermissionDirective
} from "./chunk-ZGQZPNIZ.js";
import {
  authGuard,
  permissionGuard
} from "./chunk-2SXOXKGA.js";
import {
  ScheduleService
} from "./chunk-RYS3MB5W.js";
import {
  AuthService
} from "./chunk-HGEUBDJK.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControl,
  FormControlDirective,
  FormControlName,
  FormGroupDirective,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  NumberValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-CWY7GFOW.js";
import {
  ToastService
} from "./chunk-LTLTAR4B.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-T67WJEUA.js";
import {
  ChangeDetectionStrategy,
  CommonModule,
  Component,
  DatePipe,
  DecimalPipe,
  DestroyRef,
  NgClass,
  TitleCasePipe,
  computed,
  debounceTime,
  distinctUntilChanged,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
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
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction2,
  ɵɵpureFunction4,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtextInterpolate5
} from "./chunk-4WA2FUT3.js";

// src/app/features/admin/pages/dashboard/admin-dashboard.component.ts
var _c0 = (a0, a1, a2, a3) => ({ "bg-blue-100 text-blue-700": a0, "bg-amber-100 text-amber-700": a1, "bg-slate-100 text-slate-700": a2, "bg-green-100 text-green-700": a3 });
var _c1 = (a0, a1) => ({ "text-green-700": a0, "text-red-600": a1 });
var _forTrack0 = ($index, $item) => $item.id;
function AdminDashboardComponent_For_16_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 24);
    \u0275\u0275element(1, "path", 29);
    \u0275\u0275elementEnd();
  }
}
function AdminDashboardComponent_For_16_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 24);
    \u0275\u0275element(1, "path", 30);
    \u0275\u0275elementEnd();
  }
}
function AdminDashboardComponent_For_16_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 24);
    \u0275\u0275element(1, "path", 31);
    \u0275\u0275elementEnd();
  }
}
function AdminDashboardComponent_For_16_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 24);
    \u0275\u0275element(1, "path", 32);
    \u0275\u0275elementEnd();
  }
}
function AdminDashboardComponent_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 7)(1, "div", 22)(2, "div", 23);
    \u0275\u0275conditionalCreate(3, AdminDashboardComponent_For_16_Conditional_3_Template, 2, 0, ":svg:svg", 24)(4, AdminDashboardComponent_For_16_Conditional_4_Template, 2, 0, ":svg:svg", 24)(5, AdminDashboardComponent_For_16_Conditional_5_Template, 2, 0, ":svg:svg", 24)(6, AdminDashboardComponent_For_16_Conditional_6_Template, 2, 0, ":svg:svg", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 25)(8, "h3", 26);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 27);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(12, "svg", 28);
    \u0275\u0275element(13, "path", 12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const action_r1 = ctx.$implicit;
    \u0275\u0275property("routerLink", action_r1.route);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(5, _c0, action_r1.color === "blue", action_r1.color === "amber", action_r1.color === "slate", action_r1.color === "green"));
    \u0275\u0275advance();
    \u0275\u0275conditional(action_r1.icon === "academic-cap" ? 3 : action_r1.icon === "briefcase" ? 4 : action_r1.icon === "key" ? 5 : action_r1.icon === "clipboard-list" ? 6 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", action_r1.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", action_r1.description, " ");
  }
}
function AdminDashboardComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 33);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 34);
    \u0275\u0275element(3, "circle", 35)(4, "path", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " \u0110ang t\u1EA3i nh\u1EADt k\xFD... ");
    \u0275\u0275elementEnd()();
  }
}
function AdminDashboardComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 33);
    \u0275\u0275text(2, "Ch\u01B0a c\xF3 ho\u1EA1t \u0111\u1ED9ng h\u1EC7 th\u1ED1ng n\xE0o \u0111\u01B0\u1EE3c ghi nh\u1EADn.");
    \u0275\u0275elementEnd()();
  }
}
function AdminDashboardComponent_Conditional_43_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 37)(1, "td", 38)(2, "div", 39);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 40);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td", 41)(9, "div", 22)(10, "div", 42);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 43);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "td", 44)(15, "span", 45);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 46);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td", 47)(20, "span", 48);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "td", 49)(23, "div", 50);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 51);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 52);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const log_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(4, 15, log_r2.createdAt, "HH:mm:ss"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 18, log_r2.createdAt, "dd/MM/yyyy"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", log_r2.actorName.charAt(0), " ");
    \u0275\u0275advance();
    \u0275\u0275property("title", log_r2.actorName);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(log_r2.actorName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", log_r2.module, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(21, _c1, log_r2.status === "success", log_r2.status !== "success"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", log_r2.action, " ");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(log_r2.status === "success" ? "bg-green-50 text-green-700 border-green-200" : log_r2.status === "failure" ? "bg-amber-50 text-amber-700 border-amber-200" : "bg-red-50 text-red-700 border-red-200");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", log_r2.status, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(log_r2.targetType || "\u2014");
    \u0275\u0275advance();
    \u0275\u0275property("title", log_r2.targetId ?? "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", log_r2.targetId || "\u2014", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(log_r2.ipAddress || "\u2014");
  }
}
function AdminDashboardComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, AdminDashboardComponent_Conditional_43_For_1_Template, 29, 24, "tr", 37, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r2.recentLogs());
  }
}
var AdminDashboardComponent = class _AdminDashboardComponent {
  authService = inject(AuthService);
  logService = inject(ActivityLogService);
  // Lấy tên Admin từ AuthService
  adminName = computed(() => this.authService.authState().email || "System Admin", ...ngDevMode ? [{ debugName: "adminName" }] : (
    /* istanbul ignore next */
    []
  ));
  // Khai báo ngày hiện tại dùng signal
  currentDate = signal(/* @__PURE__ */ new Date(), ...ngDevMode ? [{ debugName: "currentDate" }] : (
    /* istanbul ignore next */
    []
  ));
  // Cập nhật các thao tác nhanh (Quick Actions)
  quickActions = signal([
    {
      id: "manage-students",
      title: "Qu\u1EA3n l\xFD H\u1ECDc sinh",
      description: "Xem v\xE0 c\u1EADp nh\u1EADt h\u1ED3 s\u01A1",
      icon: "academic-cap",
      route: "/admin/students",
      // Trỏ về trang HS
      color: "blue"
    },
    {
      id: "manage-teachers",
      title: "Qu\u1EA3n l\xFD Gi\xE1o vi\xEAn",
      description: "Ph\xE2n c\xF4ng v\xE0 \u0111i\u1EC1u ph\u1ED1i",
      icon: "briefcase",
      route: "/admin/teachers",
      // Trỏ về trang GV
      color: "green"
    },
    {
      id: "reset-pass",
      title: "C\u1EA5p l\u1EA1i m\u1EADt kh\u1EA9u",
      description: "Y\xEAu c\u1EA7u t\u1EEB ng\u01B0\u1EDDi d\xF9ng",
      icon: "key",
      route: "/admin/users/reset-password",
      color: "amber"
    },
    {
      id: "view-logs",
      title: "Nh\u1EADt k\xFD h\u1EC7 th\u1ED1ng",
      description: "Ki\u1EC3m tra ho\u1EA1t \u0111\u1ED9ng (Logs)",
      icon: "clipboard-list",
      route: "/admin/activity-logs",
      // Trỏ về trang Logs vừa làm
      color: "slate"
    }
  ], ...ngDevMode ? [{ debugName: "quickActions" }] : (
    /* istanbul ignore next */
    []
  ));
  // State chứa log thực tế từ Backend
  recentLogs = signal([], ...ngDevMode ? [{ debugName: "recentLogs" }] : (
    /* istanbul ignore next */
    []
  ));
  isLoadingLogs = signal(false, ...ngDevMode ? [{ debugName: "isLoadingLogs" }] : (
    /* istanbul ignore next */
    []
  ));
  ngOnInit() {
    this.loadRecentLogs();
  }
  // Hàm gọi API lấy 5 log mới nhất
  loadRecentLogs() {
    this.isLoadingLogs.set(true);
    this.logService.getAllLogs(void 0, void 0, void 0, void 0, void 0, void 0, 0, 5).subscribe({
      next: (res) => {
        this.recentLogs.set(res.content || []);
        this.isLoadingLogs.set(false);
      },
      error: (err) => {
        console.error("Kh\xF4ng th\u1EC3 t\u1EA3i nh\u1EADt k\xFD ho\u1EA1t \u0111\u1ED9ng", err);
        this.isLoadingLogs.set(false);
      }
    });
  }
  static \u0275fac = function AdminDashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminDashboardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminDashboardComponent, selectors: [["app-admin-dashboard"]], decls: 44, vars: 8, consts: [[1, "space-y-8"], [1, "flex", "items-center", "justify-between", "pb-4", "border-b", "border-gray-100"], [1, "text-sm", "text-gray-500"], [1, "text-3xl", "font-extrabold", "text-gray-900", "mt-1"], [1, "text-gray-600", "mt-2", "max-w-2xl"], [1, "text-xl", "font-semibold", "text-gray-800", "mb-5"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-4", "gap-6"], [1, "group", "block", "bg-white", "rounded-xl", "shadow-sm", "hover:shadow-lg", "p-6", "border", "border-gray-100", "transition-all", "duration-300", "ease-out", "hover:-translate-y-1", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", 3, "routerLink"], [1, "flex", "items-center", "justify-between", "mb-5"], [1, "text-xl", "font-semibold", "text-gray-800"], ["routerLink", "/admin/activity-logs", 1, "text-sm", "font-medium", "text-blue-600", "hover:text-blue-800", "transition", "flex", "items-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "ml-1"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 5l7 7-7 7"], [1, "bg-white", "rounded-xl", "shadow-sm", "p-3", "border", "border-gray-100"], [1, "overflow-x-auto"], [1, "w-full", "text-sm", "text-left", "text-gray-500"], [1, "text-xs", "text-gray-700", "uppercase", "bg-gray-50", "rounded-t-lg"], ["scope", "col", 1, "px-6", "py-4", "rounded-tl-lg", "w-48"], ["scope", "col", 1, "px-6", "py-4", "w-64"], ["scope", "col", 1, "px-6", "py-4"], ["scope", "col", 1, "px-6", "py-4", "rounded-tr-lg", "text-center", "w-24"], ["scope", "col", 1, "px-6", "py-4", "text-right", "w-36"], [1, "flex", "items-center"], [1, "w-12", "h-12", "rounded-lg", "flex", "items-center", "justify-center", "mr-5", "transition-transform", "group-hover:scale-110", "shrink-0", 3, "ngClass"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6"], [1, "flex-1"], [1, "text-base", "font-semibold", "text-gray-900", "group-hover:text-blue-700", "transition"], [1, "text-sm", "text-gray-500", "mt-1", "line-clamp-1"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-gray-300", "group-hover:text-blue-500", "ml-3", "transition", "shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 7a2 2 0 012 2m-2 2a2 2 0 01-2-2m2 2l.3.3m0 0l3 3m0 0l-3 3m3-3H9m3 3v-3.3M9 19H7a2 2 0 01-2-2V7a2 2 0 012-2h10a2 2 0 012 2v2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"], ["colspan", "5", 1, "px-6", "py-8", "text-center", "text-gray-500"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "mx-auto", "h-6", "w-6", "text-blue-500", "mb-2"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"], [1, "bg-white", "border-b", "border-gray-50", "hover:bg-slate-50", "transition"], [1, "px-6", "py-4", "whitespace-nowrap"], [1, "font-medium", "text-gray-900"], [1, "text-xs", "text-gray-500"], [1, "px-6", "py-4", "text-gray-700"], [1, "w-8", "h-8", "rounded-full", "bg-slate-100", "text-slate-600", "flex", "items-center", "justify-center", "font-bold", "text-xs", "mr-3", "uppercase", "border", "border-slate-200", "shrink-0"], [1, "font-medium", "truncate", "max-w-[150px]", 3, "title"], [1, "px-6", "py-4"], [1, "inline-block", "px-2", "py-0.5", "text-[10px]", "font-bold", "uppercase", "rounded", "bg-gray-100", "text-gray-600", "mb-1", "border", "border-gray-200"], [1, "font-semibold", "text-gray-900", "text-xs", "uppercase", 3, "ngClass"], [1, "px-6", "py-4", "text-center"], [1, "px-2", "py-0.5", "text-[10px]", "font-bold", "uppercase", "rounded", "border"], [1, "px-6", "py-4", "text-gray-600", "text-right"], [1, "font-medium", "text-sm"], [1, "text-xs", "text-gray-400", "font-mono", "mt-0.5", "truncate", "max-w-[150px]", "ml-auto", 3, "title"], [1, "text-[10px]", "text-gray-400", "font-mono", "mt-1"]], template: function AdminDashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "p", 2);
      \u0275\u0275text(4);
      \u0275\u0275pipe(5, "date");
      \u0275\u0275pipe(6, "titlecase");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "h1", 3);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 4);
      \u0275\u0275text(10, " \u0110\xE2y l\xE0 b\u1EA3ng \u0111i\u1EC1u khi\u1EC3n v\u1EADn h\xE0nh h\u1EC7 th\u1ED1ng. Vui l\xF2ng ch\u1ECDn m\u1ED9t thao t\xE1c nhanh d\u01B0\u1EDBi \u0111\xE2y ho\u1EB7c truy c\u1EADp menu b\xEAn tr\xE1i \u0111\u1EC3 qu\u1EA3n l\xFD chi ti\u1EBFt. ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(11, "div")(12, "h2", 5);
      \u0275\u0275text(13, " Thao t\xE1c nhanh ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 6);
      \u0275\u0275repeaterCreate(15, AdminDashboardComponent_For_16_Template, 14, 10, "a", 7, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div")(18, "div", 8)(19, "h2", 9);
      \u0275\u0275text(20, " Ho\u1EA1t \u0111\u1ED9ng h\u1EC7 th\u1ED1ng g\u1EA7n \u0111\xE2y ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "a", 10);
      \u0275\u0275text(22, " Xem to\xE0n b\u1ED9 ");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(23, "svg", 11);
      \u0275\u0275element(24, "path", 12);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(25, "div", 13)(26, "div", 14)(27, "table", 15)(28, "thead", 16)(29, "tr")(30, "th", 17);
      \u0275\u0275text(31, "Th\u1EDDi gian");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "th", 18);
      \u0275\u0275text(33, "T\xE0i kho\u1EA3n th\u1EF1c hi\u1EC7n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "th", 19);
      \u0275\u0275text(35, "Module / Thao t\xE1c");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "th", 20);
      \u0275\u0275text(37, "Tr\u1EA1ng th\xE1i");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "th", 21);
      \u0275\u0275text(39, "IP / Target");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(40, "tbody");
      \u0275\u0275conditionalCreate(41, AdminDashboardComponent_Conditional_41_Template, 6, 0, "tr")(42, AdminDashboardComponent_Conditional_42_Template, 3, 0, "tr")(43, AdminDashboardComponent_Conditional_43_Template, 2, 0);
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 6, \u0275\u0275pipeBind2(5, 3, ctx.currentDate(), "EEEE, dd/MM/yyyy")), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" Ch\xE0o m\u1EEBng tr\u1EDF l\u1EA1i, ", ctx.adminName(), "! \u{1F44B} ");
      \u0275\u0275advance(7);
      \u0275\u0275repeater(ctx.quickActions());
      \u0275\u0275advance(26);
      \u0275\u0275conditional(ctx.isLoadingLogs() ? 41 : ctx.recentLogs().length === 0 ? 42 : 43);
    }
  }, dependencies: [CommonModule, NgClass, RouterModule, RouterLink, TitleCasePipe, DatePipe], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminDashboardComponent, [{
    type: Component,
    args: [{ selector: "app-admin-dashboard", standalone: true, imports: [CommonModule, RouterModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="space-y-8">\r
  <div class="flex items-center justify-between pb-4 border-b border-gray-100">\r
    <div>\r
      <p class="text-sm text-gray-500">\r
        {{ currentDate() | date:'EEEE, dd/MM/yyyy' | titlecase }}\r
      </p>\r
      <h1 class="text-3xl font-extrabold text-gray-900 mt-1">\r
        Ch\xE0o m\u1EEBng tr\u1EDF l\u1EA1i, {{ adminName() }}! \u{1F44B}\r
      </h1>\r
      <p class="text-gray-600 mt-2 max-w-2xl">\r
        \u0110\xE2y l\xE0 b\u1EA3ng \u0111i\u1EC1u khi\u1EC3n v\u1EADn h\xE0nh h\u1EC7 th\u1ED1ng. Vui l\xF2ng ch\u1ECDn m\u1ED9t thao t\xE1c nhanh d\u01B0\u1EDBi \u0111\xE2y ho\u1EB7c truy c\u1EADp menu b\xEAn tr\xE1i \u0111\u1EC3 qu\u1EA3n l\xFD chi ti\u1EBFt.\r
      </p>\r
    </div>\r
  </div>\r
\r
  <div>\r
    <h2 class="text-xl font-semibold text-gray-800 mb-5">\r
      Thao t\xE1c nhanh\r
    </h2>\r
    \r
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">\r
      @for (action of quickActions(); track action.id) {\r
        <a \r
          [routerLink]="action.route" \r
          class="group block bg-white rounded-xl shadow-sm hover:shadow-lg p-6 border border-gray-100 transition-all duration-300 ease-out hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500"\r
        >\r
          <div class="flex items-center">\r
            <div \r
              class="w-12 h-12 rounded-lg flex items-center justify-center mr-5 transition-transform group-hover:scale-110 shrink-0"\r
              [ngClass]="{\r
                'bg-blue-100 text-blue-700': action.color === 'blue',\r
                'bg-amber-100 text-amber-700': action.color === 'amber',\r
                'bg-slate-100 text-slate-700': action.color === 'slate',\r
                'bg-green-100 text-green-700': action.color === 'green'\r
              }"\r
            >\r
              @if (action.icon === 'academic-cap') {\r
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path></svg>\r
              } \r
              @else if (action.icon === 'briefcase') {\r
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>\r
              } \r
              @else if (action.icon === 'key') {\r
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m-2 2a2 2 0 01-2-2m2 2l.3.3m0 0l3 3m0 0l-3 3m3-3H9m3 3v-3.3M9 19H7a2 2 0 01-2-2V7a2 2 0 012-2h10a2 2 0 012 2v2"></path></svg>\r
              } \r
              @else if (action.icon === 'clipboard-list') {\r
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>\r
              }\r
            </div>\r
            \r
            <div class="flex-1">\r
              <h3 class="text-base font-semibold text-gray-900 group-hover:text-blue-700 transition">\r
                {{ action.title }}\r
              </h3>\r
              <p class="text-sm text-gray-500 mt-1 line-clamp-1">\r
                {{ action.description }}\r
              </p>\r
            </div>\r
\r
            <svg class="w-5 h-5 text-gray-300 group-hover:text-blue-500 ml-3 transition shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>\r
          </div>\r
        </a>\r
      }\r
    </div>\r
  </div>\r
\r
  <div>\r
    <div class="flex items-center justify-between mb-5">\r
        <h2 class="text-xl font-semibold text-gray-800">\r
            Ho\u1EA1t \u0111\u1ED9ng h\u1EC7 th\u1ED1ng g\u1EA7n \u0111\xE2y\r
        </h2>\r
        <a routerLink="/admin/activity-logs" class="text-sm font-medium text-blue-600 hover:text-blue-800 transition flex items-center">\r
            Xem to\xE0n b\u1ED9\r
            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>\r
        </a>\r
    </div>\r
\r
    <div class="bg-white rounded-xl shadow-sm p-3 border border-gray-100">\r
      <div class="overflow-x-auto">\r
        <table class="w-full text-sm text-left text-gray-500">\r
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 rounded-t-lg">\r
            <tr>\r
              <th scope="col" class="px-6 py-4 rounded-tl-lg w-48">Th\u1EDDi gian</th>\r
              <th scope="col" class="px-6 py-4 w-64">T\xE0i kho\u1EA3n th\u1EF1c hi\u1EC7n</th>\r
              <th scope="col" class="px-6 py-4">Module / Thao t\xE1c</th>\r
              <th scope="col" class="px-6 py-4 rounded-tr-lg text-center w-24">Tr\u1EA1ng th\xE1i</th>\r
              <th scope="col" class="px-6 py-4 text-right w-36">IP / Target</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            @if (isLoadingLogs()) {\r
              <tr>\r
                <td colspan="5" class="px-6 py-8 text-center text-gray-500">\r
                  <svg class="animate-spin mx-auto h-6 w-6 text-blue-500 mb-2" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>\r
                  \u0110ang t\u1EA3i nh\u1EADt k\xFD...\r
                </td>\r
              </tr>\r
            } \r
            @else if (recentLogs().length === 0) {\r
              <tr>\r
                <td colspan="5" class="px-6 py-8 text-center text-gray-500">Ch\u01B0a c\xF3 ho\u1EA1t \u0111\u1ED9ng h\u1EC7 th\u1ED1ng n\xE0o \u0111\u01B0\u1EE3c ghi nh\u1EADn.</td>\r
              </tr>\r
            } \r
            @else {\r
              @for (log of recentLogs(); track log.id) {\r
                <tr class="bg-white border-b border-gray-50 hover:bg-slate-50 transition">\r
                  <td class="px-6 py-4 whitespace-nowrap">\r
                    <div class="font-medium text-gray-900">{{ log.createdAt | date:'HH:mm:ss' }}</div>\r
                    <div class="text-xs text-gray-500">{{ log.createdAt | date:'dd/MM/yyyy' }}</div>\r
                  </td>\r
                  <td class="px-6 py-4 text-gray-700">\r
                    <div class="flex items-center">\r
                      <div class="w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center font-bold text-xs mr-3 uppercase border border-slate-200 shrink-0">\r
                          {{ log.actorName.charAt(0) }}\r
                      </div>\r
                      <span class="font-medium truncate max-w-[150px]" [title]="log.actorName">{{ log.actorName }}</span>\r
                    </div>\r
                  </td>\r
                  <td class="px-6 py-4">\r
                    <span class="inline-block px-2 py-0.5 text-[10px] font-bold uppercase rounded bg-gray-100 text-gray-600 mb-1 border border-gray-200">\r
                      {{ log.module }}\r
                    </span>\r
                    <div class="font-semibold text-gray-900 text-xs uppercase"\r
                         [ngClass]="{'text-green-700': log.status === 'success', 'text-red-600': log.status !== 'success'}">\r
                      {{ log.action }}\r
                    </div>\r
                  </td>\r
                  <td class="px-6 py-4 text-center">\r
                    <span class="px-2 py-0.5 text-[10px] font-bold uppercase rounded border"\r
                      [class]="log.status === 'success' ? 'bg-green-50 text-green-700 border-green-200' : log.status === 'failure' ? 'bg-amber-50 text-amber-700 border-amber-200' : 'bg-red-50 text-red-700 border-red-200'">\r
                      {{ log.status }}\r
                    </span>\r
                  </td>\r
                  <td class="px-6 py-4 text-gray-600 text-right">\r
                    <div class="font-medium text-sm">{{ log.targetType || '\u2014' }}</div>\r
                    <div class="text-xs text-gray-400 font-mono mt-0.5 truncate max-w-[150px] ml-auto" [title]="log.targetId ?? ''">\r
                      {{ log.targetId || '\u2014' }}\r
                    </div>\r
                    <div class="text-[10px] text-gray-400 font-mono mt-1">{{ log.ipAddress || '\u2014' }}</div>\r
                  </td>\r
                </tr>\r
              }\r
            }\r
          </tbody>\r
        </table>\r
      </div>\r
    </div>\r
  </div>\r
</div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminDashboardComponent, { className: "AdminDashboardComponent", filePath: "src/app/features/admin/pages/dashboard/admin-dashboard.component.ts", lineNumber: 26 });
})();

// src/app/features/admin/pages/term/term.component.ts
var _c02 = () => ["TERM_UPDATE", "TERM_DELETE"];
var _forTrack02 = ($index, $item) => $item.id;
function TermComponent_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275listener("click", function TermComponent_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 24);
    \u0275\u0275element(2, "path", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Th\xEAm k\u1EF3 h\u1ECDc m\u1EDBi ");
    \u0275\u0275elementEnd();
  }
}
function TermComponent_th_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 26);
    \u0275\u0275text(1, "Thao t\xE1c");
    \u0275\u0275elementEnd();
  }
}
function TermComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 27)(2, "div", 28);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 29);
    \u0275\u0275element(4, "circle", 30)(5, "path", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7, "\u0110ang t\u1EA3i d\u1EEF li\u1EC7u...");
    \u0275\u0275elementEnd()()()();
  }
}
function TermComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 27);
    \u0275\u0275text(2, "Ch\u01B0a c\xF3 k\u1EF3 h\u1ECDc n\xE0o.");
    \u0275\u0275elementEnd()();
  }
}
function TermComponent_Conditional_34_For_1_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 36);
    \u0275\u0275text(1, "Ho\u1EA1t \u0111\u1ED9ng");
    \u0275\u0275elementEnd();
  }
}
function TermComponent_Conditional_34_For_1_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1, "\u0110\xE3 \u0111\xF3ng");
    \u0275\u0275elementEnd();
  }
}
function TermComponent_Conditional_34_For_1_td_16_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 42);
    \u0275\u0275listener("click", function TermComponent_Conditional_34_For_1_td_16_button_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const term_r4 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openModal(term_r4));
    });
    \u0275\u0275text(1, "S\u1EEDa");
    \u0275\u0275elementEnd();
  }
}
function TermComponent_Conditional_34_For_1_td_16_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 43);
    \u0275\u0275listener("click", function TermComponent_Conditional_34_For_1_td_16_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const term_r4 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDelete(term_r4.id));
    });
    \u0275\u0275text(1, "X\xF3a");
    \u0275\u0275elementEnd();
  }
}
function TermComponent_Conditional_34_For_1_td_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 39);
    \u0275\u0275template(1, TermComponent_Conditional_34_For_1_td_16_button_1_Template, 2, 0, "button", 40)(2, TermComponent_Conditional_34_For_1_td_16_button_2_Template, 2, 0, "button", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("hasPermission", "TERM_UPDATE");
    \u0275\u0275advance();
    \u0275\u0275property("hasPermission", "TERM_DELETE");
  }
}
function TermComponent_Conditional_34_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 32)(1, "td", 33);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 34);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 35);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 35);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 35);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 35);
    \u0275\u0275conditionalCreate(14, TermComponent_Conditional_34_For_1_Conditional_14_Template, 2, 0, "span", 36)(15, TermComponent_Conditional_34_For_1_Conditional_15_Template, 2, 0, "span", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, TermComponent_Conditional_34_For_1_td_16_Template, 3, 2, "td", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const term_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(term_r4.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(term_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(term_r4.year);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 7, term_r4.startDate, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 10, term_r4.endDate, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(term_r4.status === "ACTIVE" ? 14 : 15);
    \u0275\u0275advance(2);
    \u0275\u0275property("hasAnyPermission", \u0275\u0275pureFunction0(13, _c02));
  }
}
function TermComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, TermComponent_Conditional_34_For_1_Template, 17, 14, "tr", 32, _forTrack02);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r1.terms());
  }
}
function TermComponent_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 44)(2, "div", 45)(3, "h3", 46);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 47);
    \u0275\u0275listener("click", function TermComponent_Conditional_54_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 24);
    \u0275\u0275element(7, "path", 48);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "form", 49);
    \u0275\u0275listener("ngSubmit", function TermComponent_Conditional_54_Template_form_ngSubmit_8_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(9, "div")(10, "label", 50);
    \u0275\u0275text(11, "M\xE3 k\u1EF3 h\u1ECDc (Code) *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div")(14, "label", 50);
    \u0275\u0275text(15, "T\xEAn k\u1EF3 h\u1ECDc *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 53)(18, "div")(19, "label", 50);
    \u0275\u0275text(20, "N\u0103m h\u1ECDc *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "input", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div")(23, "label", 50);
    \u0275\u0275text(24, "Tr\u1EA1ng th\xE1i *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "select", 55)(26, "option", 56);
    \u0275\u0275text(27, "ACTIVE (\u0110ang m\u1EDF)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "option", 57);
    \u0275\u0275text(29, "CLOSED (\u0110\xE3 \u0111\xF3ng)");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(30, "div", 53)(31, "div")(32, "label", 50);
    \u0275\u0275text(33, "Ng\xE0y b\u1EAFt \u0111\u1EA7u *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(34, "input", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div")(36, "label", 50);
    \u0275\u0275text(37, "Ng\xE0y k\u1EBFt th\xFAc *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(38, "input", 59);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 60)(40, "button", 61);
    \u0275\u0275listener("click", function TermComponent_Conditional_54_Template_button_click_40_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275text(41, "H\u1EE7y");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "button", 62);
    \u0275\u0275text(43, "L\u01B0u");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.isEditing() ? "Ch\u1EC9nh s\u1EEDa k\u1EF3 h\u1ECDc" : "Th\xEAm k\u1EF3 h\u1ECDc m\u1EDBi");
    \u0275\u0275advance(4);
    \u0275\u0275property("formGroup", ctx_r1.termForm);
    \u0275\u0275advance(34);
    \u0275\u0275property("disabled", ctx_r1.termForm.invalid || ctx_r1.isLoading());
  }
}
function TermComponent_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 63)(2, "h3", 64);
    \u0275\u0275text(3, "X\xE1c nh\u1EADn x\xF3a k\u1EF3 h\u1ECDc");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 65);
    \u0275\u0275text(5, "B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a k\u1EF3 h\u1ECDc n\xE0y? Thao t\xE1c n\xE0y kh\xF4ng th\u1EC3 ho\xE0n t\xE1c.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 66)(7, "button", 67);
    \u0275\u0275listener("click", function TermComponent_Conditional_55_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDeleteModal());
    });
    \u0275\u0275text(8, "H\u1EE7y");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 68);
    \u0275\u0275listener("click", function TermComponent_Conditional_55_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmDelete());
    });
    \u0275\u0275text(10, "X\xF3a");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275property("disabled", ctx_r1.isLoading());
  }
}
var TermComponent = class _TermComponent {
  termService = inject(TermService);
  fb = inject(FormBuilder);
  destroyRef = inject(DestroyRef);
  toastService = inject(ToastService);
  terms = signal([], ...ngDevMode ? [{ debugName: "terms" }] : (
    /* istanbul ignore next */
    []
  ));
  totalElements = signal(0, ...ngDevMode ? [{ debugName: "totalElements" }] : (
    /* istanbul ignore next */
    []
  ));
  currentPage = signal(1, ...ngDevMode ? [{ debugName: "currentPage" }] : (
    /* istanbul ignore next */
    []
  ));
  pageSize = signal(10, ...ngDevMode ? [{ debugName: "pageSize" }] : (
    /* istanbul ignore next */
    []
  ));
  isLoading = signal(false, ...ngDevMode ? [{ debugName: "isLoading" }] : (
    /* istanbul ignore next */
    []
  ));
  searchControl = new FormControl("");
  isModalOpen = signal(false, ...ngDevMode ? [{ debugName: "isModalOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  isEditing = signal(false, ...ngDevMode ? [{ debugName: "isEditing" }] : (
    /* istanbul ignore next */
    []
  ));
  currentId = signal(null, ...ngDevMode ? [{ debugName: "currentId" }] : (
    /* istanbul ignore next */
    []
  ));
  termForm;
  isDeleteModalOpen = signal(false, ...ngDevMode ? [{ debugName: "isDeleteModalOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  idToDelete = signal(null, ...ngDevMode ? [{ debugName: "idToDelete" }] : (
    /* istanbul ignore next */
    []
  ));
  totalPages = computed(() => Math.ceil(this.totalElements() / this.pageSize()), ...ngDevMode ? [{ debugName: "totalPages" }] : (
    /* istanbul ignore next */
    []
  ));
  startIndex = computed(() => this.totalElements() === 0 ? 0 : (this.currentPage() - 1) * this.pageSize() + 1, ...ngDevMode ? [{ debugName: "startIndex" }] : (
    /* istanbul ignore next */
    []
  ));
  endIndex = computed(() => Math.min(this.currentPage() * this.pageSize(), this.totalElements()), ...ngDevMode ? [{ debugName: "endIndex" }] : (
    /* istanbul ignore next */
    []
  ));
  ngOnInit() {
    this.initForm();
    this.setupSearch();
    this.loadData();
  }
  initForm() {
    this.termForm = this.fb.group({
      code: ["", [Validators.required, Validators.maxLength(50)]],
      name: ["", [Validators.required, Validators.maxLength(255)]],
      startDate: ["", Validators.required],
      endDate: ["", Validators.required],
      year: [(/* @__PURE__ */ new Date()).getFullYear(), [Validators.required, Validators.min(2e3)]],
      status: ["ACTIVE", Validators.required]
    });
  }
  setupSearch() {
    this.searchControl.valueChanges.pipe(debounceTime(400), distinctUntilChanged(), takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.currentPage.set(1);
      this.loadData();
    });
  }
  loadData() {
    this.isLoading.set(true);
    const keyword = this.searchControl.value || void 0;
    this.termService.getAll(this.currentPage() - 1, this.pageSize(), keyword).subscribe({
      next: (res) => {
        this.terms.set(res.content || []);
        this.totalElements.set(res.totalElements || 0);
        this.isLoading.set(false);
      },
      error: () => this.isLoading.set(false)
    });
  }
  changePage(page) {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage.set(page);
      this.loadData();
    }
  }
  openModal(term) {
    if (term) {
      this.isEditing.set(true);
      this.currentId.set(term.id);
      this.termForm.patchValue({
        code: term.code,
        name: term.name,
        startDate: term.startDate,
        endDate: term.endDate,
        year: term.year,
        status: term.status
      });
    } else {
      this.isEditing.set(false);
      this.currentId.set(null);
      this.termForm.reset({
        code: "",
        name: "",
        startDate: "",
        endDate: "",
        year: (/* @__PURE__ */ new Date()).getFullYear(),
        status: "ACTIVE"
      });
    }
    this.isModalOpen.set(true);
  }
  closeModal() {
    this.isModalOpen.set(false);
    this.currentId.set(null);
  }
  onSubmit() {
    if (this.termForm.invalid)
      return;
    this.isLoading.set(true);
    const data = this.termForm.value;
    data.code = data.code.toUpperCase().trim();
    if (this.isEditing() && this.currentId() != null) {
      this.termService.update(this.currentId(), data).subscribe({
        next: () => {
          this.loadData();
          this.closeModal();
          this.toastService.success("Th\xE0nh c\xF4ng", "\u0110\xE3 c\u1EADp nh\u1EADt \u0111\u1EE3t h\u1ECDc!");
        },
        error: (err) => {
          this.isLoading.set(false);
          this.toastService.error("Th\u1EA5t b\u1EA1i", err.error?.message || "C\xF3 l\u1ED7i x\u1EA3y ra khi c\u1EADp nh\u1EADt!");
        }
      });
    } else {
      this.termService.create(data).subscribe({
        next: () => {
          this.loadData();
          this.closeModal();
          this.toastService.success("Th\xE0nh c\xF4ng", "\u0110\xE3 t\u1EA1o \u0111\u1EE3t h\u1ECDc m\u1EDBi!");
        },
        error: (err) => {
          this.isLoading.set(false);
          this.toastService.error("Th\u1EA5t b\u1EA1i", err.error?.message || "C\xF3 l\u1ED7i x\u1EA3y ra khi th\xEAm m\u1EDBi!");
        }
      });
    }
  }
  onDelete(id) {
    this.idToDelete.set(id);
    this.isDeleteModalOpen.set(true);
  }
  closeDeleteModal() {
    this.isDeleteModalOpen.set(false);
    this.idToDelete.set(null);
  }
  confirmDelete() {
    const id = this.idToDelete();
    if (id != null) {
      this.isLoading.set(true);
      this.termService.delete(id).subscribe({
        next: () => {
          this.loadData();
          this.closeDeleteModal();
          this.toastService.success("\u0110\xE3 x\xF3a", "X\xF3a \u0111\u1EE3t h\u1ECDc th\xE0nh c\xF4ng!");
        },
        error: (err) => {
          this.isLoading.set(false);
          this.closeDeleteModal();
          this.toastService.error("L\u1ED7i x\xF3a", err.error?.message || "Kh\xF4ng th\u1EC3 x\xF3a \u0111\u1EE3t h\u1ECDc n\xE0y!");
        }
      });
    }
  }
  static \u0275fac = function TermComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TermComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TermComponent, selectors: [["app-term"]], decls: 56, vars: 14, consts: [[1, "p-6", "space-y-6"], [1, "flex", "flex-col", "sm:flex-row", "justify-between", "items-start", "sm:items-center", "gap-4", "bg-white", "dark:bg-gray-800", "p-6", "rounded-2xl", "shadow-sm", "border", "border-gray-100", "dark:border-gray-700"], [1, "text-2xl", "font-bold", "text-gray-900", "dark:text-white"], [1, "text-sm", "text-gray-500", "dark:text-gray-400", "mt-1"], ["class", "inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-xl transition-colors shadow-sm shadow-blue-500/10", 3, "click", 4, "hasPermission"], [1, "bg-white", "dark:bg-gray-800", "rounded-2xl", "shadow-sm", "border", "border-gray-100", "dark:border-gray-700", "overflow-hidden"], [1, "p-4", "border-b", "border-gray-100", "dark:border-gray-700", "bg-gray-50/50", "dark:bg-gray-800/50", "flex", "items-center", "justify-between"], [1, "relative", "w-full", "sm:w-72"], ["type", "text", "placeholder", "T\xECm ki\u1EBFm theo m\xE3, t\xEAn k\u1EF3...", 1, "w-full", "pl-10", "pr-4", "py-2", "bg-white", "dark:bg-gray-900", "border", "border-gray-200", "dark:border-gray-700", "rounded-xl", "text-sm", "text-gray-900", "dark:text-white", "placeholder-gray-400", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", 3, "formControl"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-gray-400", "absolute", "left-3", "top-3"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], [1, "overflow-x-auto"], [1, "w-full", "text-sm", "text-left", "text-gray-600", "dark:text-gray-300"], [1, "text-xs", "uppercase", "bg-gray-50", "dark:bg-gray-900/50", "text-gray-500", "dark:text-gray-400", "border-b", "border-gray-100", "dark:border-gray-700"], [1, "px-6", "py-3.5", "font-semibold"], ["class", "px-6 py-3.5 font-semibold text-right", 4, "hasAnyPermission"], [1, "divide-y", "divide-gray-100", "dark:divide-gray-700"], [1, "p-4", "border-t", "border-gray-100", "dark:border-gray-700", "flex", "flex-col", "sm:flex-row", "justify-between", "items-center", "gap-4", "text-xs", "text-gray-500"], [1, "font-medium", "text-gray-900", "dark:text-white"], [1, "flex", "items-center", "gap-1"], [1, "px-3", "py-1.5", "rounded-lg", "border", "border-gray-200", "dark:border-gray-700", "disabled:opacity-40", "hover:bg-gray-50", "dark:hover:bg-gray-700", "transition-colors", 3, "click", "disabled"], [1, "px-3", "py-1.5", "font-medium", "text-gray-900", "dark:text-white"], [1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "p-4", "bg-black/40", "backdrop-blur-sm"], [1, "inline-flex", "items-center", "gap-2", "px-4", "py-2.5", "bg-blue-600", "hover:bg-blue-700", "text-white", "text-sm", "font-medium", "rounded-xl", "transition-colors", "shadow-sm", "shadow-blue-500/10", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 4v16m8-8H4"], [1, "px-6", "py-3.5", "font-semibold", "text-right"], ["colspan", "7", 1, "px-6", "py-8", "text-center", "text-gray-400"], [1, "inline-flex", "items-center", "gap-2"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-5", "w-5", "text-blue-600"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"], [1, "hover:bg-gray-50/50", "dark:hover:bg-gray-700/50", "transition-colors"], [1, "px-6", "py-4", "font-mono", "font-medium", "text-blue-600", "dark:text-blue-400"], [1, "px-6", "py-4", "font-medium", "text-gray-900", "dark:text-white"], [1, "px-6", "py-4"], [1, "inline-flex", "items-center", "px-2.5", "py-0.5", "rounded-full", "text-xs", "font-medium", "bg-emerald-50", "text-emerald-700", "dark:bg-emerald-950/40", "dark:text-emerald-400", "border", "border-emerald-200", "dark:border-emerald-800"], [1, "inline-flex", "items-center", "px-2.5", "py-0.5", "rounded-full", "text-xs", "font-medium", "bg-gray-100", "text-gray-700", "dark:bg-gray-700", "dark:text-gray-300"], ["class", "px-6 py-4 text-right space-x-2", 4, "hasAnyPermission"], [1, "px-6", "py-4", "text-right", "space-x-2"], ["class", "px-3 py-1.5 text-xs font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-lg transition-colors", 3, "click", 4, "hasPermission"], ["class", "px-3 py-1.5 text-xs font-medium text-rose-600 hover:text-rose-700 hover:bg-rose-50 dark:hover:bg-rose-900/30 rounded-lg transition-colors", 3, "click", 4, "hasPermission"], [1, "px-3", "py-1.5", "text-xs", "font-medium", "text-blue-600", "hover:text-blue-700", "hover:bg-blue-50", "dark:hover:bg-blue-900/30", "rounded-lg", "transition-colors", 3, "click"], [1, "px-3", "py-1.5", "text-xs", "font-medium", "text-rose-600", "hover:text-rose-700", "hover:bg-rose-50", "dark:hover:bg-rose-900/30", "rounded-lg", "transition-colors", 3, "click"], [1, "bg-white", "dark:bg-gray-800", "rounded-2xl", "max-w-lg", "w-full", "p-6", "shadow-xl", "border", "border-gray-100", "dark:border-gray-700", "space-y-6"], [1, "flex", "justify-between", "items-center"], [1, "text-lg", "font-bold", "text-gray-900", "dark:text-white"], [1, "text-gray-400", "hover:text-gray-600", "dark:hover:text-gray-300", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "space-y-4", 3, "ngSubmit", "formGroup"], [1, "block", "text-xs", "font-semibold", "text-gray-700", "dark:text-gray-300", "mb-1"], ["formControlName", "code", "type", "text", "placeholder", "VD: SUMMER-2026, Q1-2026", 1, "w-full", "px-3", "py-2", "bg-white", "dark:bg-gray-900", "border", "border-gray-200", "dark:border-gray-700", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-500", "uppercase"], ["formControlName", "name", "type", "text", "placeholder", "VD: K\u1EF3 H\xE8 2026", 1, "w-full", "px-3", "py-2", "bg-white", "dark:bg-gray-900", "border", "border-gray-200", "dark:border-gray-700", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-500"], [1, "grid", "grid-cols-2", "gap-4"], ["formControlName", "year", "type", "number", 1, "w-full", "px-3", "py-2", "bg-white", "dark:bg-gray-900", "border", "border-gray-200", "dark:border-gray-700", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-500"], ["formControlName", "status", 1, "w-full", "px-3", "py-2", "bg-white", "dark:bg-gray-900", "border", "border-gray-200", "dark:border-gray-700", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-500"], ["value", "ACTIVE"], ["value", "CLOSED"], ["formControlName", "startDate", "type", "date", 1, "w-full", "px-3", "py-2", "bg-white", "dark:bg-gray-900", "border", "border-gray-200", "dark:border-gray-700", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-500"], ["formControlName", "endDate", "type", "date", 1, "w-full", "px-3", "py-2", "bg-white", "dark:bg-gray-900", "border", "border-gray-200", "dark:border-gray-700", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-500"], [1, "flex", "justify-end", "gap-3", "pt-4", "border-t", "border-gray-100", "dark:border-gray-700"], ["type", "button", 1, "px-4", "py-2", "text-xs", "font-medium", "text-gray-600", "dark:text-gray-300", "hover:bg-gray-100", "dark:hover:bg-gray-700", "rounded-xl", 3, "click"], ["type", "submit", 1, "px-4", "py-2", "text-xs", "font-medium", "bg-blue-600", "hover:bg-blue-700", "text-white", "rounded-xl", "disabled:opacity-50", 3, "disabled"], [1, "bg-white", "dark:bg-gray-800", "rounded-2xl", "max-w-sm", "w-full", "p-6", "shadow-xl", "border", "border-gray-100", "dark:border-gray-700", "space-y-4"], [1, "text-base", "font-bold", "text-gray-900", "dark:text-white"], [1, "text-xs", "text-gray-500"], [1, "flex", "justify-end", "gap-3", "pt-2"], [1, "px-4", "py-2", "text-xs", "font-medium", "text-gray-600", "dark:text-gray-300", "hover:bg-gray-100", "dark:hover:bg-gray-700", "rounded-xl", 3, "click"], [1, "px-4", "py-2", "text-xs", "font-medium", "bg-rose-600", "hover:bg-rose-700", "text-white", "rounded-xl", "disabled:opacity-50", 3, "click", "disabled"]], template: function TermComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Qu\u1EA3n l\xFD K\u1EF3 h\u1ECDc / \u0110\u1EE3t h\u1ECDc (Terms)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Qu\u1EA3n l\xFD c\xE1c kho\u1EA3ng th\u1EDDi gian h\u1ECDc v\xE0 danh s\xE1ch \u0111\u1EE3t khai gi\u1EA3ng trong trung t\xE2m");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(7, TermComponent_button_7_Template, 4, 0, "button", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 5)(9, "div", 6)(10, "div", 7);
      \u0275\u0275element(11, "input", 8);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(12, "svg", 9);
      \u0275\u0275element(13, "path", 10);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(14, "div", 11)(15, "table", 12)(16, "thead", 13)(17, "tr")(18, "th", 14);
      \u0275\u0275text(19, "M\xE3 k\u1EF3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "th", 14);
      \u0275\u0275text(21, "T\xEAn k\u1EF3 h\u1ECDc");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "th", 14);
      \u0275\u0275text(23, "N\u0103m h\u1ECDc");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "th", 14);
      \u0275\u0275text(25, "Th\u1EDDi gian b\u1EAFt \u0111\u1EA7u");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "th", 14);
      \u0275\u0275text(27, "Th\u1EDDi gian k\u1EBFt th\xFAc");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "th", 14);
      \u0275\u0275text(29, "Tr\u1EA1ng th\xE1i");
      \u0275\u0275elementEnd();
      \u0275\u0275template(30, TermComponent_th_30_Template, 2, 0, "th", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "tbody", 16);
      \u0275\u0275conditionalCreate(32, TermComponent_Conditional_32_Template, 8, 0, "tr")(33, TermComponent_Conditional_33_Template, 3, 0, "tr")(34, TermComponent_Conditional_34_Template, 2, 0);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(35, "div", 17)(36, "div");
      \u0275\u0275text(37, "Hi\u1EC3n th\u1ECB t\u1EEB ");
      \u0275\u0275elementStart(38, "span", 18);
      \u0275\u0275text(39);
      \u0275\u0275elementEnd();
      \u0275\u0275text(40, " \u0111\u1EBFn ");
      \u0275\u0275elementStart(41, "span", 18);
      \u0275\u0275text(42);
      \u0275\u0275elementEnd();
      \u0275\u0275text(43, " trong t\u1ED5ng s\u1ED1 ");
      \u0275\u0275elementStart(44, "span", 18);
      \u0275\u0275text(45);
      \u0275\u0275elementEnd();
      \u0275\u0275text(46, " m\u1EE5c");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "div", 19)(48, "button", 20);
      \u0275\u0275listener("click", function TermComponent_Template_button_click_48_listener() {
        return ctx.changePage(ctx.currentPage() - 1);
      });
      \u0275\u0275text(49, "Tr\u01B0\u1EDBc");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "span", 21);
      \u0275\u0275text(51);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "button", 20);
      \u0275\u0275listener("click", function TermComponent_Template_button_click_52_listener() {
        return ctx.changePage(ctx.currentPage() + 1);
      });
      \u0275\u0275text(53, "Sau");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(54, TermComponent_Conditional_54_Template, 44, 3, "div", 22);
      \u0275\u0275conditionalCreate(55, TermComponent_Conditional_55_Template, 11, 1, "div", 22);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("hasPermission", "TERM_CREATE");
      \u0275\u0275advance(4);
      \u0275\u0275property("formControl", ctx.searchControl);
      \u0275\u0275advance(19);
      \u0275\u0275property("hasAnyPermission", \u0275\u0275pureFunction0(13, _c02));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isLoading() ? 32 : ctx.terms().length === 0 ? 33 : 34);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.startIndex());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.endIndex());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.totalElements());
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", ctx.currentPage() <= 1);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2("Trang ", ctx.currentPage(), " / ", ctx.totalPages() || 1);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.currentPage() >= ctx.totalPages());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isModalOpen() ? 54 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isDeleteModalOpen() ? 55 : -1);
    }
  }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormControlDirective, FormGroupDirective, FormControlName, HasPermissionDirective, DatePipe], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TermComponent, [{
    type: Component,
    args: [{ selector: "app-term", imports: [CommonModule, ReactiveFormsModule, HasPermissionDirective], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="p-6 space-y-6">\r
  <!-- Header section -->\r
  <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">\r
    <div>\r
      <h1 class="text-2xl font-bold text-gray-900 dark:text-white">Qu\u1EA3n l\xFD K\u1EF3 h\u1ECDc / \u0110\u1EE3t h\u1ECDc (Terms)</h1>\r
      <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">Qu\u1EA3n l\xFD c\xE1c kho\u1EA3ng th\u1EDDi gian h\u1ECDc v\xE0 danh s\xE1ch \u0111\u1EE3t khai gi\u1EA3ng trong trung t\xE2m</p>\r
    </div>\r
    <button *hasPermission="'TERM_CREATE'" (click)="openModal()" class="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-xl transition-colors shadow-sm shadow-blue-500/10">\r
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>\r
      </svg>\r
      Th\xEAm k\u1EF3 h\u1ECDc m\u1EDBi\r
    </button>\r
  </div>\r
\r
  <!-- Table Container -->\r
  <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">\r
    <!-- Search & Filter bar -->\r
    <div class="p-4 border-b border-gray-100 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/50 flex items-center justify-between">\r
      <div class="relative w-full sm:w-72">\r
        <input [formControl]="searchControl" type="text" placeholder="T\xECm ki\u1EBFm theo m\xE3, t\xEAn k\u1EF3..." class="w-full pl-10 pr-4 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">\r
        <svg class="w-4 h-4 text-gray-400 absolute left-3 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>\r
        </svg>\r
      </div>\r
    </div>\r
\r
    <!-- Table content -->\r
    <div class="overflow-x-auto">\r
      <table class="w-full text-sm text-left text-gray-600 dark:text-gray-300">\r
        <thead class="text-xs uppercase bg-gray-50 dark:bg-gray-900/50 text-gray-500 dark:text-gray-400 border-b border-gray-100 dark:border-gray-700">\r
          <tr>\r
            <th class="px-6 py-3.5 font-semibold">M\xE3 k\u1EF3</th>\r
            <th class="px-6 py-3.5 font-semibold">T\xEAn k\u1EF3 h\u1ECDc</th>\r
            <th class="px-6 py-3.5 font-semibold">N\u0103m h\u1ECDc</th>\r
            <th class="px-6 py-3.5 font-semibold">Th\u1EDDi gian b\u1EAFt \u0111\u1EA7u</th>\r
            <th class="px-6 py-3.5 font-semibold">Th\u1EDDi gian k\u1EBFt th\xFAc</th>\r
            <th class="px-6 py-3.5 font-semibold">Tr\u1EA1ng th\xE1i</th>\r
            <th *hasAnyPermission="['TERM_UPDATE', 'TERM_DELETE']" class="px-6 py-3.5 font-semibold text-right">Thao t\xE1c</th>\r
          </tr>\r
        </thead>\r
        <tbody class="divide-y divide-gray-100 dark:divide-gray-700">\r
          @if (isLoading()) {\r
            <tr>\r
              <td colspan="7" class="px-6 py-8 text-center text-gray-400">\r
                <div class="inline-flex items-center gap-2">\r
                  <svg class="animate-spin h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24">\r
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>\r
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>\r
                  </svg>\r
                  <span>\u0110ang t\u1EA3i d\u1EEF li\u1EC7u...</span>\r
                </div>\r
              </td>\r
            </tr>\r
          } @else if (terms().length === 0) {\r
            <tr>\r
              <td colspan="7" class="px-6 py-8 text-center text-gray-400">Ch\u01B0a c\xF3 k\u1EF3 h\u1ECDc n\xE0o.</td>\r
            </tr>\r
          } @else {\r
            @for (term of terms(); track term.id) {\r
              <tr class="hover:bg-gray-50/50 dark:hover:bg-gray-700/50 transition-colors">\r
                <td class="px-6 py-4 font-mono font-medium text-blue-600 dark:text-blue-400">{{ term.code }}</td>\r
                <td class="px-6 py-4 font-medium text-gray-900 dark:text-white">{{ term.name }}</td>\r
                <td class="px-6 py-4">{{ term.year }}</td>\r
                <td class="px-6 py-4">{{ term.startDate | date:'dd/MM/yyyy' }}</td>\r
                <td class="px-6 py-4">{{ term.endDate | date:'dd/MM/yyyy' }}</td>\r
                <td class="px-6 py-4">\r
                  @if (term.status === 'ACTIVE') {\r
                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">Ho\u1EA1t \u0111\u1ED9ng</span>\r
                  } @else {\r
                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300">\u0110\xE3 \u0111\xF3ng</span>\r
                  }\r
                </td>\r
                <td *hasAnyPermission="['TERM_UPDATE', 'TERM_DELETE']" class="px-6 py-4 text-right space-x-2">\r
                  <button *hasPermission="'TERM_UPDATE'" (click)="openModal(term)" class="px-3 py-1.5 text-xs font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-lg transition-colors">S\u1EEDa</button>\r
                  <button *hasPermission="'TERM_DELETE'" (click)="onDelete(term.id)" class="px-3 py-1.5 text-xs font-medium text-rose-600 hover:text-rose-700 hover:bg-rose-50 dark:hover:bg-rose-900/30 rounded-lg transition-colors">X\xF3a</button>\r
                </td>\r
              </tr>\r
            }\r
          }\r
        </tbody>\r
      </table>\r
    </div>\r
\r
    <!-- Pagination -->\r
    <div class="p-4 border-t border-gray-100 dark:border-gray-700 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">\r
      <div>Hi\u1EC3n th\u1ECB t\u1EEB <span class="font-medium text-gray-900 dark:text-white">{{ startIndex() }}</span> \u0111\u1EBFn <span class="font-medium text-gray-900 dark:text-white">{{ endIndex() }}</span> trong t\u1ED5ng s\u1ED1 <span class="font-medium text-gray-900 dark:text-white">{{ totalElements() }}</span> m\u1EE5c</div>\r
      <div class="flex items-center gap-1">\r
        <button (click)="changePage(currentPage() - 1)" [disabled]="currentPage() <= 1" class="px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 disabled:opacity-40 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">Tr\u01B0\u1EDBc</button>\r
        <span class="px-3 py-1.5 font-medium text-gray-900 dark:text-white">Trang {{ currentPage() }} / {{ totalPages() || 1 }}</span>\r
        <button (click)="changePage(currentPage() + 1)" [disabled]="currentPage() >= totalPages()" class="px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 disabled:opacity-40 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">Sau</button>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Form Modal -->\r
  @if (isModalOpen()) {\r
    <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">\r
      <div class="bg-white dark:bg-gray-800 rounded-2xl max-w-lg w-full p-6 shadow-xl border border-gray-100 dark:border-gray-700 space-y-6">\r
        <div class="flex justify-between items-center">\r
          <h3 class="text-lg font-bold text-gray-900 dark:text-white">{{ isEditing() ? 'Ch\u1EC9nh s\u1EEDa k\u1EF3 h\u1ECDc' : 'Th\xEAm k\u1EF3 h\u1ECDc m\u1EDBi' }}</h3>\r
          <button (click)="closeModal()" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">\r
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>\r
          </button>\r
        </div>\r
\r
        <form [formGroup]="termForm" (ngSubmit)="onSubmit()" class="space-y-4">\r
          <div>\r
            <label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">M\xE3 k\u1EF3 h\u1ECDc (Code) *</label>\r
            <input formControlName="code" type="text" placeholder="VD: SUMMER-2026, Q1-2026" class="w-full px-3 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 uppercase">\r
          </div>\r
          <div>\r
            <label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">T\xEAn k\u1EF3 h\u1ECDc *</label>\r
            <input formControlName="name" type="text" placeholder="VD: K\u1EF3 H\xE8 2026" class="w-full px-3 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:ring-2 focus:ring-blue-500">\r
          </div>\r
          <div class="grid grid-cols-2 gap-4">\r
            <div>\r
              <label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">N\u0103m h\u1ECDc *</label>\r
              <input formControlName="year" type="number" class="w-full px-3 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:ring-2 focus:ring-blue-500">\r
            </div>\r
            <div>\r
              <label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">Tr\u1EA1ng th\xE1i *</label>\r
              <select formControlName="status" class="w-full px-3 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:ring-2 focus:ring-blue-500">\r
                <option value="ACTIVE">ACTIVE (\u0110ang m\u1EDF)</option>\r
                <option value="CLOSED">CLOSED (\u0110\xE3 \u0111\xF3ng)</option>\r
              </select>\r
            </div>\r
          </div>\r
          <div class="grid grid-cols-2 gap-4">\r
            <div>\r
              <label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">Ng\xE0y b\u1EAFt \u0111\u1EA7u *</label>\r
              <input formControlName="startDate" type="date" class="w-full px-3 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:ring-2 focus:ring-blue-500">\r
            </div>\r
            <div>\r
              <label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">Ng\xE0y k\u1EBFt th\xFAc *</label>\r
              <input formControlName="endDate" type="date" class="w-full px-3 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:ring-2 focus:ring-blue-500">\r
            </div>\r
          </div>\r
\r
          <div class="flex justify-end gap-3 pt-4 border-t border-gray-100 dark:border-gray-700">\r
            <button type="button" (click)="closeModal()" class="px-4 py-2 text-xs font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl">H\u1EE7y</button>\r
            <button type="submit" [disabled]="termForm.invalid || isLoading()" class="px-4 py-2 text-xs font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-xl disabled:opacity-50">L\u01B0u</button>\r
          </div>\r
        </form>\r
      </div>\r
    </div>\r
  }\r
\r
  <!-- Delete Confirmation Modal -->\r
  @if (isDeleteModalOpen()) {\r
    <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">\r
      <div class="bg-white dark:bg-gray-800 rounded-2xl max-w-sm w-full p-6 shadow-xl border border-gray-100 dark:border-gray-700 space-y-4">\r
        <h3 class="text-base font-bold text-gray-900 dark:text-white">X\xE1c nh\u1EADn x\xF3a k\u1EF3 h\u1ECDc</h3>\r
        <p class="text-xs text-gray-500">B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a k\u1EF3 h\u1ECDc n\xE0y? Thao t\xE1c n\xE0y kh\xF4ng th\u1EC3 ho\xE0n t\xE1c.</p>\r
        <div class="flex justify-end gap-3 pt-2">\r
          <button (click)="closeDeleteModal()" class="px-4 py-2 text-xs font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl">H\u1EE7y</button>\r
          <button (click)="confirmDelete()" [disabled]="isLoading()" class="px-4 py-2 text-xs font-medium bg-rose-600 hover:bg-rose-700 text-white rounded-xl disabled:opacity-50">X\xF3a</button>\r
        </div>\r
      </div>\r
    </div>\r
  }\r
</div>\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TermComponent, { className: "TermComponent", filePath: "src/app/features/admin/pages/term/term.component.ts", lineNumber: 17 });
})();

// src/app/features/admin/pages/course/course.component.ts
var _c03 = () => ["COURSE_UPDATE", "COURSE_DELETE"];
var _forTrack03 = ($index, $item) => $item.id;
function CourseComponent_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29);
    \u0275\u0275listener("click", function CourseComponent_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 30);
    \u0275\u0275element(2, "path", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Th\xEAm kh\xF3a h\u1ECDc m\u1EDBi ");
    \u0275\u0275elementEnd();
  }
}
function CourseComponent_th_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 32);
    \u0275\u0275text(1, "Thao t\xE1c");
    \u0275\u0275elementEnd();
  }
}
function CourseComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 33)(2, "div", 34);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 35);
    \u0275\u0275element(4, "circle", 36)(5, "path", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7, "\u0110ang t\u1EA3i d\u1EEF li\u1EC7u...");
    \u0275\u0275elementEnd()()()();
  }
}
function CourseComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 33);
    \u0275\u0275text(2, "Ch\u01B0a c\xF3 kh\xF3a h\u1ECDc n\xE0o.");
    \u0275\u0275elementEnd()();
  }
}
function CourseComponent_Conditional_42_For_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const course_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(course_r3.description);
  }
}
function CourseComponent_Conditional_42_For_1_Case_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 45);
    \u0275\u0275text(1, "\u0110ang m\u1EDF");
    \u0275\u0275elementEnd();
  }
}
function CourseComponent_Conditional_42_For_1_Case_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 46);
    \u0275\u0275text(1, "Ng\u01B0ng m\u1EDF");
    \u0275\u0275elementEnd();
  }
}
function CourseComponent_Conditional_42_For_1_Case_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 47);
    \u0275\u0275text(1, "Nh\xE1p");
    \u0275\u0275elementEnd();
  }
}
function CourseComponent_Conditional_42_For_1_td_16_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 52);
    \u0275\u0275listener("click", function CourseComponent_Conditional_42_For_1_td_16_button_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const course_r3 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openModal(course_r3));
    });
    \u0275\u0275text(1, "S\u1EEDa");
    \u0275\u0275elementEnd();
  }
}
function CourseComponent_Conditional_42_For_1_td_16_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 53);
    \u0275\u0275listener("click", function CourseComponent_Conditional_42_For_1_td_16_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const course_r3 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDelete(course_r3.id));
    });
    \u0275\u0275text(1, "X\xF3a");
    \u0275\u0275elementEnd();
  }
}
function CourseComponent_Conditional_42_For_1_td_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 49);
    \u0275\u0275template(1, CourseComponent_Conditional_42_For_1_td_16_button_1_Template, 2, 0, "button", 50)(2, CourseComponent_Conditional_42_For_1_td_16_button_2_Template, 2, 0, "button", 51);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("hasPermission", "COURSE_UPDATE");
    \u0275\u0275advance();
    \u0275\u0275property("hasPermission", "COURSE_DELETE");
  }
}
function CourseComponent_Conditional_42_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 38)(1, "td", 39);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 40)(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, CourseComponent_Conditional_42_For_1_Conditional_6_Template, 2, 1, "div", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 42);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 43);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 44);
    \u0275\u0275conditionalCreate(13, CourseComponent_Conditional_42_For_1_Case_13_Template, 2, 0, "span", 45)(14, CourseComponent_Conditional_42_For_1_Case_14_Template, 2, 0, "span", 46)(15, CourseComponent_Conditional_42_For_1_Case_15_Template, 2, 0, "span", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, CourseComponent_Conditional_42_For_1_td_16_Template, 3, 2, "td", 48);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_16_0;
    const course_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(course_r3.code);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(course_r3.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(course_r3.description ? 6 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", course_r3.durationHours || 0, " gi\u1EDD");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(11, 7, course_r3.basePrice, "1.0-0"), " VN\u0110");
    \u0275\u0275advance(3);
    \u0275\u0275conditional((tmp_16_0 = course_r3.status) === "ACTIVE" ? 13 : tmp_16_0 === "INACTIVE" ? 14 : tmp_16_0 === "DRAFT" ? 15 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275property("hasAnyPermission", \u0275\u0275pureFunction0(10, _c03));
  }
}
function CourseComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, CourseComponent_Conditional_42_For_1_Template, 17, 11, "tr", 38, _forTrack03);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r1.courses());
  }
}
function CourseComponent_Conditional_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 54)(2, "div", 55)(3, "h3", 56);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 57);
    \u0275\u0275listener("click", function CourseComponent_Conditional_62_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 30);
    \u0275\u0275element(7, "path", 58);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "form", 59);
    \u0275\u0275listener("ngSubmit", function CourseComponent_Conditional_62_Template_form_ngSubmit_8_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(9, "div")(10, "label", 60);
    \u0275\u0275text(11, "M\xE3 kh\xF3a h\u1ECDc (Code) *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div")(14, "label", 60);
    \u0275\u0275text(15, "T\xEAn kh\xF3a h\u1ECDc *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 63)(18, "div")(19, "label", 60);
    \u0275\u0275text(20, "Th\u1EDDi l\u01B0\u1EE3ng (Gi\u1EDD) *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "input", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div")(23, "label", 60);
    \u0275\u0275text(24, "H\u1ECDc ph\xED c\u01A1 b\u1EA3n (VN\u0110) *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "input", 65);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div")(27, "label", 60);
    \u0275\u0275text(28, "Tr\u1EA1ng th\xE1i *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "select", 66)(30, "option", 14);
    \u0275\u0275text(31, "ACTIVE (\u0110ang tuy\u1EC3n sinh/m\u1EDF l\u1EDBp)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "option", 15);
    \u0275\u0275text(33, "INACTIVE (T\u1EA1m ng\u01B0ng)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "option", 16);
    \u0275\u0275text(35, "DRAFT (B\u1EA3n nh\xE1p)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "div")(37, "label", 60);
    \u0275\u0275text(38, "M\xF4 t\u1EA3 kh\xF3a h\u1ECDc");
    \u0275\u0275elementEnd();
    \u0275\u0275element(39, "textarea", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 68)(41, "button", 69);
    \u0275\u0275listener("click", function CourseComponent_Conditional_62_Template_button_click_41_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275text(42, "H\u1EE7y");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "button", 70);
    \u0275\u0275text(44, "L\u01B0u");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.isEditing() ? "Ch\u1EC9nh s\u1EEDa kh\xF3a h\u1ECDc" : "Th\xEAm kh\xF3a h\u1ECDc m\u1EDBi");
    \u0275\u0275advance(4);
    \u0275\u0275property("formGroup", ctx_r1.courseForm);
    \u0275\u0275advance(35);
    \u0275\u0275property("disabled", ctx_r1.courseForm.invalid || ctx_r1.isLoading());
  }
}
function CourseComponent_Conditional_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 71)(2, "h3", 72);
    \u0275\u0275text(3, "X\xE1c nh\u1EADn x\xF3a kh\xF3a h\u1ECDc");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 73);
    \u0275\u0275text(5, "B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a kh\xF3a h\u1ECDc n\xE0y? Thao t\xE1c n\xE0y kh\xF4ng th\u1EC3 ho\xE0n t\xE1c.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 74)(7, "button", 75);
    \u0275\u0275listener("click", function CourseComponent_Conditional_63_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDeleteModal());
    });
    \u0275\u0275text(8, "H\u1EE7y");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 76);
    \u0275\u0275listener("click", function CourseComponent_Conditional_63_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmDelete());
    });
    \u0275\u0275text(10, "X\xF3a");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275property("disabled", ctx_r1.isLoading());
  }
}
var CourseComponent = class _CourseComponent {
  courseService = inject(CourseService);
  fb = inject(FormBuilder);
  destroyRef = inject(DestroyRef);
  toastService = inject(ToastService);
  courses = signal([], ...ngDevMode ? [{ debugName: "courses" }] : (
    /* istanbul ignore next */
    []
  ));
  totalElements = signal(0, ...ngDevMode ? [{ debugName: "totalElements" }] : (
    /* istanbul ignore next */
    []
  ));
  currentPage = signal(1, ...ngDevMode ? [{ debugName: "currentPage" }] : (
    /* istanbul ignore next */
    []
  ));
  pageSize = signal(10, ...ngDevMode ? [{ debugName: "pageSize" }] : (
    /* istanbul ignore next */
    []
  ));
  isLoading = signal(false, ...ngDevMode ? [{ debugName: "isLoading" }] : (
    /* istanbul ignore next */
    []
  ));
  searchControl = new FormControl("");
  statusFilter = new FormControl("");
  isModalOpen = signal(false, ...ngDevMode ? [{ debugName: "isModalOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  isEditing = signal(false, ...ngDevMode ? [{ debugName: "isEditing" }] : (
    /* istanbul ignore next */
    []
  ));
  currentId = signal(null, ...ngDevMode ? [{ debugName: "currentId" }] : (
    /* istanbul ignore next */
    []
  ));
  courseForm;
  isDeleteModalOpen = signal(false, ...ngDevMode ? [{ debugName: "isDeleteModalOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  idToDelete = signal(null, ...ngDevMode ? [{ debugName: "idToDelete" }] : (
    /* istanbul ignore next */
    []
  ));
  totalPages = computed(() => Math.ceil(this.totalElements() / this.pageSize()), ...ngDevMode ? [{ debugName: "totalPages" }] : (
    /* istanbul ignore next */
    []
  ));
  startIndex = computed(() => this.totalElements() === 0 ? 0 : (this.currentPage() - 1) * this.pageSize() + 1, ...ngDevMode ? [{ debugName: "startIndex" }] : (
    /* istanbul ignore next */
    []
  ));
  endIndex = computed(() => Math.min(this.currentPage() * this.pageSize(), this.totalElements()), ...ngDevMode ? [{ debugName: "endIndex" }] : (
    /* istanbul ignore next */
    []
  ));
  ngOnInit() {
    this.initForm();
    this.setupFilters();
    this.loadData();
  }
  initForm() {
    this.courseForm = this.fb.group({
      code: ["", [Validators.required, Validators.maxLength(50)]],
      name: ["", [Validators.required, Validators.maxLength(255)]],
      description: [""],
      durationHours: [30, [Validators.required, Validators.min(1)]],
      basePrice: [0, [Validators.required, Validators.min(0)]],
      status: ["ACTIVE", Validators.required]
    });
  }
  setupFilters() {
    this.searchControl.valueChanges.pipe(debounceTime(400), distinctUntilChanged(), takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.currentPage.set(1);
      this.loadData();
    });
    this.statusFilter.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.currentPage.set(1);
      this.loadData();
    });
  }
  loadData() {
    this.isLoading.set(true);
    const keyword = this.searchControl.value || void 0;
    const status = this.statusFilter.value || void 0;
    this.courseService.getAll(this.currentPage() - 1, this.pageSize(), keyword, status).subscribe({
      next: (res) => {
        this.courses.set(res.content || []);
        this.totalElements.set(res.totalElements || 0);
        this.isLoading.set(false);
      },
      error: () => this.isLoading.set(false)
    });
  }
  changePage(page) {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage.set(page);
      this.loadData();
    }
  }
  openModal(course) {
    if (course) {
      this.isEditing.set(true);
      this.currentId.set(course.id);
      this.courseForm.patchValue({
        code: course.code,
        name: course.name,
        description: course.description || "",
        durationHours: course.durationHours || 0,
        basePrice: course.basePrice || 0,
        status: course.status
      });
    } else {
      this.isEditing.set(false);
      this.currentId.set(null);
      this.courseForm.reset({
        code: "",
        name: "",
        description: "",
        durationHours: 30,
        basePrice: 0,
        status: "ACTIVE"
      });
    }
    this.isModalOpen.set(true);
  }
  closeModal() {
    this.isModalOpen.set(false);
    this.currentId.set(null);
  }
  onSubmit() {
    if (this.courseForm.invalid)
      return;
    this.isLoading.set(true);
    const data = this.courseForm.value;
    data.code = data.code.toUpperCase().trim();
    if (this.isEditing() && this.currentId() != null) {
      this.courseService.update(this.currentId(), data).subscribe({
        next: () => {
          this.loadData();
          this.closeModal();
          this.toastService.success("Th\xE0nh c\xF4ng", "\u0110\xE3 c\u1EADp nh\u1EADt kh\xF3a h\u1ECDc!");
        },
        error: (err) => {
          this.isLoading.set(false);
          this.toastService.error("Th\u1EA5t b\u1EA1i", err.error?.message || "C\xF3 l\u1ED7i x\u1EA3y ra khi c\u1EADp nh\u1EADt!");
        }
      });
    } else {
      this.courseService.create(data).subscribe({
        next: () => {
          this.loadData();
          this.closeModal();
          this.toastService.success("Th\xE0nh c\xF4ng", "\u0110\xE3 t\u1EA1o kh\xF3a h\u1ECDc m\u1EDBi!");
        },
        error: (err) => {
          this.isLoading.set(false);
          this.toastService.error("Th\u1EA5t b\u1EA1i", err.error?.message || "C\xF3 l\u1ED7i x\u1EA3y ra khi th\xEAm m\u1EDBi!");
        }
      });
    }
  }
  onDelete(id) {
    this.idToDelete.set(id);
    this.isDeleteModalOpen.set(true);
  }
  closeDeleteModal() {
    this.isDeleteModalOpen.set(false);
    this.idToDelete.set(null);
  }
  confirmDelete() {
    const id = this.idToDelete();
    if (id != null) {
      this.isLoading.set(true);
      this.courseService.delete(id).subscribe({
        next: () => {
          this.loadData();
          this.closeDeleteModal();
          this.toastService.success("\u0110\xE3 x\xF3a", "X\xF3a kh\xF3a h\u1ECDc th\xE0nh c\xF4ng!");
        },
        error: (err) => {
          this.isLoading.set(false);
          this.closeDeleteModal();
          this.toastService.error("L\u1ED7i x\xF3a", err.error?.message || "Kh\xF4ng th\u1EC3 x\xF3a kh\xF3a h\u1ECDc n\xE0y!");
        }
      });
    }
  }
  static \u0275fac = function CourseComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CourseComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CourseComponent, selectors: [["app-course"]], decls: 64, vars: 15, consts: [[1, "p-6", "space-y-6"], [1, "flex", "flex-col", "sm:flex-row", "justify-between", "items-start", "sm:items-center", "gap-4", "bg-white", "dark:bg-gray-800", "p-6", "rounded-2xl", "shadow-sm", "border", "border-gray-100", "dark:border-gray-700"], [1, "text-2xl", "font-bold", "text-gray-900", "dark:text-white"], [1, "text-sm", "text-gray-500", "dark:text-gray-400", "mt-1"], ["class", "inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-xl transition-colors shadow-sm shadow-blue-500/10", 3, "click", 4, "hasPermission"], [1, "bg-white", "dark:bg-gray-800", "rounded-2xl", "shadow-sm", "border", "border-gray-100", "dark:border-gray-700", "overflow-hidden"], [1, "p-4", "border-b", "border-gray-100", "dark:border-gray-700", "bg-gray-50/50", "dark:bg-gray-800/50", "flex", "flex-col", "sm:flex-row", "items-center", "justify-between", "gap-4"], [1, "relative", "w-full", "sm:w-72"], ["type", "text", "placeholder", "T\xECm ki\u1EBFm t\xEAn, m\xE3 kh\xF3a h\u1ECDc...", 1, "w-full", "pl-10", "pr-4", "py-2", "bg-white", "dark:bg-gray-900", "border", "border-gray-200", "dark:border-gray-700", "rounded-xl", "text-sm", "text-gray-900", "dark:text-white", "placeholder-gray-400", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", 3, "formControl"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-gray-400", "absolute", "left-3", "top-3"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], [1, "w-full", "sm:w-48"], [1, "w-full", "px-3", "py-2", "bg-white", "dark:bg-gray-900", "border", "border-gray-200", "dark:border-gray-700", "rounded-xl", "text-sm", "text-gray-900", "dark:text-white", "focus:ring-2", "focus:ring-blue-500", 3, "formControl"], ["value", ""], ["value", "ACTIVE"], ["value", "INACTIVE"], ["value", "DRAFT"], [1, "overflow-x-auto"], [1, "w-full", "text-sm", "text-left", "text-gray-600", "dark:text-gray-300"], [1, "text-xs", "uppercase", "bg-gray-50", "dark:bg-gray-900/50", "text-gray-500", "dark:text-gray-400", "border-b", "border-gray-100", "dark:border-gray-700"], [1, "px-6", "py-3.5", "font-semibold"], ["class", "px-6 py-3.5 font-semibold text-right", 4, "hasAnyPermission"], [1, "divide-y", "divide-gray-100", "dark:divide-gray-700"], [1, "p-4", "border-t", "border-gray-100", "dark:border-gray-700", "flex", "flex-col", "sm:flex-row", "justify-between", "items-center", "gap-4", "text-xs", "text-gray-500"], [1, "font-medium", "text-gray-900", "dark:text-white"], [1, "flex", "items-center", "gap-1"], [1, "px-3", "py-1.5", "rounded-lg", "border", "border-gray-200", "dark:border-gray-700", "disabled:opacity-40", "hover:bg-gray-50", "dark:hover:bg-gray-700", "transition-colors", 3, "click", "disabled"], [1, "px-3", "py-1.5", "font-medium", "text-gray-900", "dark:text-white"], [1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "p-4", "bg-black/40", "backdrop-blur-sm"], [1, "inline-flex", "items-center", "gap-2", "px-4", "py-2.5", "bg-blue-600", "hover:bg-blue-700", "text-white", "text-sm", "font-medium", "rounded-xl", "transition-colors", "shadow-sm", "shadow-blue-500/10", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 4v16m8-8H4"], [1, "px-6", "py-3.5", "font-semibold", "text-right"], ["colspan", "6", 1, "px-6", "py-8", "text-center", "text-gray-400"], [1, "inline-flex", "items-center", "gap-2"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-5", "w-5", "text-blue-600"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"], [1, "hover:bg-gray-50/50", "dark:hover:bg-gray-700/50", "transition-colors"], [1, "px-6", "py-4", "font-mono", "font-medium", "text-blue-600", "dark:text-blue-400"], [1, "px-6", "py-4", "font-medium", "text-gray-900", "dark:text-white"], [1, "text-xs", "text-gray-400", "truncate", "max-w-xs"], [1, "px-6", "py-4", "font-medium"], [1, "px-6", "py-4", "font-semibold", "text-emerald-600", "dark:text-emerald-400"], [1, "px-6", "py-4"], [1, "inline-flex", "items-center", "px-2.5", "py-0.5", "rounded-full", "text-xs", "font-medium", "bg-emerald-50", "text-emerald-700", "dark:bg-emerald-950/40", "dark:text-emerald-400", "border", "border-emerald-200", "dark:border-emerald-800"], [1, "inline-flex", "items-center", "px-2.5", "py-0.5", "rounded-full", "text-xs", "font-medium", "bg-gray-100", "text-gray-700", "dark:bg-gray-700", "dark:text-gray-300"], [1, "inline-flex", "items-center", "px-2.5", "py-0.5", "rounded-full", "text-xs", "font-medium", "bg-amber-50", "text-amber-700", "dark:bg-amber-950/40", "dark:text-amber-400", "border", "border-amber-200", "dark:border-amber-800"], ["class", "px-6 py-4 text-right space-x-2", 4, "hasAnyPermission"], [1, "px-6", "py-4", "text-right", "space-x-2"], ["class", "px-3 py-1.5 text-xs font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-lg transition-colors", 3, "click", 4, "hasPermission"], ["class", "px-3 py-1.5 text-xs font-medium text-rose-600 hover:text-rose-700 hover:bg-rose-50 dark:hover:bg-rose-900/30 rounded-lg transition-colors", 3, "click", 4, "hasPermission"], [1, "px-3", "py-1.5", "text-xs", "font-medium", "text-blue-600", "hover:text-blue-700", "hover:bg-blue-50", "dark:hover:bg-blue-900/30", "rounded-lg", "transition-colors", 3, "click"], [1, "px-3", "py-1.5", "text-xs", "font-medium", "text-rose-600", "hover:text-rose-700", "hover:bg-rose-50", "dark:hover:bg-rose-900/30", "rounded-lg", "transition-colors", 3, "click"], [1, "bg-white", "dark:bg-gray-800", "rounded-2xl", "max-w-lg", "w-full", "p-6", "shadow-xl", "border", "border-gray-100", "dark:border-gray-700", "space-y-6"], [1, "flex", "justify-between", "items-center"], [1, "text-lg", "font-bold", "text-gray-900", "dark:text-white"], [1, "text-gray-400", "hover:text-gray-600", "dark:hover:text-gray-300", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "space-y-4", 3, "ngSubmit", "formGroup"], [1, "block", "text-xs", "font-semibold", "text-gray-700", "dark:text-gray-300", "mb-1"], ["formControlName", "code", "type", "text", "placeholder", "VD: IELTS-FOUNDATION, TOEIC-700", 1, "w-full", "px-3", "py-2", "bg-white", "dark:bg-gray-900", "border", "border-gray-200", "dark:border-gray-700", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-500", "uppercase"], ["formControlName", "name", "type", "text", "placeholder", "VD: IELTS Foundation 5.0+", 1, "w-full", "px-3", "py-2", "bg-white", "dark:bg-gray-900", "border", "border-gray-200", "dark:border-gray-700", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-500"], [1, "grid", "grid-cols-2", "gap-4"], ["formControlName", "durationHours", "type", "number", 1, "w-full", "px-3", "py-2", "bg-white", "dark:bg-gray-900", "border", "border-gray-200", "dark:border-gray-700", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-500"], ["formControlName", "basePrice", "type", "number", 1, "w-full", "px-3", "py-2", "bg-white", "dark:bg-gray-900", "border", "border-gray-200", "dark:border-gray-700", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-500"], ["formControlName", "status", 1, "w-full", "px-3", "py-2", "bg-white", "dark:bg-gray-900", "border", "border-gray-200", "dark:border-gray-700", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-500"], ["formControlName", "description", "rows", "3", "placeholder", "M\xF4 t\u1EA3 n\u1ED9i dung, m\u1EE5c ti\xEAu \u0111\u1EA7u ra c\u1EE7a kh\xF3a h\u1ECDc...", 1, "w-full", "px-3", "py-2", "bg-white", "dark:bg-gray-900", "border", "border-gray-200", "dark:border-gray-700", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-500"], [1, "flex", "justify-end", "gap-3", "pt-4", "border-t", "border-gray-100", "dark:border-gray-700"], ["type", "button", 1, "px-4", "py-2", "text-xs", "font-medium", "text-gray-600", "dark:text-gray-300", "hover:bg-gray-100", "dark:hover:bg-gray-700", "rounded-xl", 3, "click"], ["type", "submit", 1, "px-4", "py-2", "text-xs", "font-medium", "bg-blue-600", "hover:bg-blue-700", "text-white", "rounded-xl", "disabled:opacity-50", 3, "disabled"], [1, "bg-white", "dark:bg-gray-800", "rounded-2xl", "max-w-sm", "w-full", "p-6", "shadow-xl", "border", "border-gray-100", "dark:border-gray-700", "space-y-4"], [1, "text-base", "font-bold", "text-gray-900", "dark:text-white"], [1, "text-xs", "text-gray-500"], [1, "flex", "justify-end", "gap-3", "pt-2"], [1, "px-4", "py-2", "text-xs", "font-medium", "text-gray-600", "dark:text-gray-300", "hover:bg-gray-100", "dark:hover:bg-gray-700", "rounded-xl", 3, "click"], [1, "px-4", "py-2", "text-xs", "font-medium", "bg-rose-600", "hover:bg-rose-700", "text-white", "rounded-xl", "disabled:opacity-50", 3, "click", "disabled"]], template: function CourseComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Qu\u1EA3n l\xFD Kh\xF3a h\u1ECDc (Courses)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Danh s\xE1ch c\xE1c ch\u01B0\u01A1ng tr\xECnh \u0111\xE0o t\u1EA1o, th\u1EDDi l\u01B0\u1EE3ng v\xE0 h\u1ECDc ph\xED ni\xEAm y\u1EBFt");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(7, CourseComponent_button_7_Template, 4, 0, "button", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 5)(9, "div", 6)(10, "div", 7);
      \u0275\u0275element(11, "input", 8);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(12, "svg", 9);
      \u0275\u0275element(13, "path", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(14, "div", 11)(15, "select", 12)(16, "option", 13);
      \u0275\u0275text(17, "T\u1EA5t c\u1EA3 tr\u1EA1ng th\xE1i");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "option", 14);
      \u0275\u0275text(19, "Ho\u1EA1t \u0111\u1ED9ng (ACTIVE)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "option", 15);
      \u0275\u0275text(21, "Ng\u01B0ng m\u1EDF (INACTIVE)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "option", 16);
      \u0275\u0275text(23, "B\u1EA3n nh\xE1p (DRAFT)");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(24, "div", 17)(25, "table", 18)(26, "thead", 19)(27, "tr")(28, "th", 20);
      \u0275\u0275text(29, "M\xE3 kh\xF3a h\u1ECDc");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "th", 20);
      \u0275\u0275text(31, "T\xEAn kh\xF3a h\u1ECDc");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "th", 20);
      \u0275\u0275text(33, "Th\u1EDDi l\u01B0\u1EE3ng (Gi\u1EDD)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "th", 20);
      \u0275\u0275text(35, "H\u1ECDc ph\xED c\u01A1 b\u1EA3n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "th", 20);
      \u0275\u0275text(37, "Tr\u1EA1ng th\xE1i");
      \u0275\u0275elementEnd();
      \u0275\u0275template(38, CourseComponent_th_38_Template, 2, 0, "th", 21);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "tbody", 22);
      \u0275\u0275conditionalCreate(40, CourseComponent_Conditional_40_Template, 8, 0, "tr")(41, CourseComponent_Conditional_41_Template, 3, 0, "tr")(42, CourseComponent_Conditional_42_Template, 2, 0);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(43, "div", 23)(44, "div");
      \u0275\u0275text(45, "Hi\u1EC3n th\u1ECB t\u1EEB ");
      \u0275\u0275elementStart(46, "span", 24);
      \u0275\u0275text(47);
      \u0275\u0275elementEnd();
      \u0275\u0275text(48, " \u0111\u1EBFn ");
      \u0275\u0275elementStart(49, "span", 24);
      \u0275\u0275text(50);
      \u0275\u0275elementEnd();
      \u0275\u0275text(51, " trong t\u1ED5ng s\u1ED1 ");
      \u0275\u0275elementStart(52, "span", 24);
      \u0275\u0275text(53);
      \u0275\u0275elementEnd();
      \u0275\u0275text(54, " m\u1EE5c");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "div", 25)(56, "button", 26);
      \u0275\u0275listener("click", function CourseComponent_Template_button_click_56_listener() {
        return ctx.changePage(ctx.currentPage() - 1);
      });
      \u0275\u0275text(57, "Tr\u01B0\u1EDBc");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "span", 27);
      \u0275\u0275text(59);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "button", 26);
      \u0275\u0275listener("click", function CourseComponent_Template_button_click_60_listener() {
        return ctx.changePage(ctx.currentPage() + 1);
      });
      \u0275\u0275text(61, "Sau");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(62, CourseComponent_Conditional_62_Template, 45, 3, "div", 28);
      \u0275\u0275conditionalCreate(63, CourseComponent_Conditional_63_Template, 11, 1, "div", 28);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("hasPermission", "COURSE_CREATE");
      \u0275\u0275advance(4);
      \u0275\u0275property("formControl", ctx.searchControl);
      \u0275\u0275advance(4);
      \u0275\u0275property("formControl", ctx.statusFilter);
      \u0275\u0275advance(23);
      \u0275\u0275property("hasAnyPermission", \u0275\u0275pureFunction0(14, _c03));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isLoading() ? 40 : ctx.courses().length === 0 ? 41 : 42);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.startIndex());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.endIndex());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.totalElements());
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", ctx.currentPage() <= 1);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2("Trang ", ctx.currentPage(), " / ", ctx.totalPages() || 1);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.currentPage() >= ctx.totalPages());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isModalOpen() ? 62 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isDeleteModalOpen() ? 63 : -1);
    }
  }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormControlDirective, FormGroupDirective, FormControlName, HasPermissionDirective, DecimalPipe], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CourseComponent, [{
    type: Component,
    args: [{ selector: "app-course", imports: [CommonModule, ReactiveFormsModule, HasPermissionDirective], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="p-6 space-y-6">\r
  <!-- Header section -->\r
  <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">\r
    <div>\r
      <h1 class="text-2xl font-bold text-gray-900 dark:text-white">Qu\u1EA3n l\xFD Kh\xF3a h\u1ECDc (Courses)</h1>\r
      <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">Danh s\xE1ch c\xE1c ch\u01B0\u01A1ng tr\xECnh \u0111\xE0o t\u1EA1o, th\u1EDDi l\u01B0\u1EE3ng v\xE0 h\u1ECDc ph\xED ni\xEAm y\u1EBFt</p>\r
    </div>\r
    <button *hasPermission="'COURSE_CREATE'" (click)="openModal()" class="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-xl transition-colors shadow-sm shadow-blue-500/10">\r
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>\r
      </svg>\r
      Th\xEAm kh\xF3a h\u1ECDc m\u1EDBi\r
    </button>\r
  </div>\r
\r
  <!-- Table Container -->\r
  <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">\r
    <!-- Search & Filter bar -->\r
    <div class="p-4 border-b border-gray-100 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">\r
      <div class="relative w-full sm:w-72">\r
        <input [formControl]="searchControl" type="text" placeholder="T\xECm ki\u1EBFm t\xEAn, m\xE3 kh\xF3a h\u1ECDc..." class="w-full pl-10 pr-4 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">\r
        <svg class="w-4 h-4 text-gray-400 absolute left-3 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>\r
        </svg>\r
      </div>\r
\r
      <div class="w-full sm:w-48">\r
        <select [formControl]="statusFilter" class="w-full px-3 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500">\r
          <option value="">T\u1EA5t c\u1EA3 tr\u1EA1ng th\xE1i</option>\r
          <option value="ACTIVE">Ho\u1EA1t \u0111\u1ED9ng (ACTIVE)</option>\r
          <option value="INACTIVE">Ng\u01B0ng m\u1EDF (INACTIVE)</option>\r
          <option value="DRAFT">B\u1EA3n nh\xE1p (DRAFT)</option>\r
        </select>\r
      </div>\r
    </div>\r
\r
    <!-- Table content -->\r
    <div class="overflow-x-auto">\r
      <table class="w-full text-sm text-left text-gray-600 dark:text-gray-300">\r
        <thead class="text-xs uppercase bg-gray-50 dark:bg-gray-900/50 text-gray-500 dark:text-gray-400 border-b border-gray-100 dark:border-gray-700">\r
          <tr>\r
            <th class="px-6 py-3.5 font-semibold">M\xE3 kh\xF3a h\u1ECDc</th>\r
            <th class="px-6 py-3.5 font-semibold">T\xEAn kh\xF3a h\u1ECDc</th>\r
            <th class="px-6 py-3.5 font-semibold">Th\u1EDDi l\u01B0\u1EE3ng (Gi\u1EDD)</th>\r
            <th class="px-6 py-3.5 font-semibold">H\u1ECDc ph\xED c\u01A1 b\u1EA3n</th>\r
            <th class="px-6 py-3.5 font-semibold">Tr\u1EA1ng th\xE1i</th>\r
            <th *hasAnyPermission="['COURSE_UPDATE', 'COURSE_DELETE']" class="px-6 py-3.5 font-semibold text-right">Thao t\xE1c</th>\r
          </tr>\r
        </thead>\r
        <tbody class="divide-y divide-gray-100 dark:divide-gray-700">\r
          @if (isLoading()) {\r
            <tr>\r
              <td colspan="6" class="px-6 py-8 text-center text-gray-400">\r
                <div class="inline-flex items-center gap-2">\r
                  <svg class="animate-spin h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24">\r
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>\r
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>\r
                  </svg>\r
                  <span>\u0110ang t\u1EA3i d\u1EEF li\u1EC7u...</span>\r
                </div>\r
              </td>\r
            </tr>\r
          } @else if (courses().length === 0) {\r
            <tr>\r
              <td colspan="6" class="px-6 py-8 text-center text-gray-400">Ch\u01B0a c\xF3 kh\xF3a h\u1ECDc n\xE0o.</td>\r
            </tr>\r
          } @else {\r
            @for (course of courses(); track course.id) {\r
              <tr class="hover:bg-gray-50/50 dark:hover:bg-gray-700/50 transition-colors">\r
                <td class="px-6 py-4 font-mono font-medium text-blue-600 dark:text-blue-400">{{ course.code }}</td>\r
                <td class="px-6 py-4 font-medium text-gray-900 dark:text-white">\r
                  <div>{{ course.name }}</div>\r
                  @if (course.description) {\r
                    <div class="text-xs text-gray-400 truncate max-w-xs">{{ course.description }}</div>\r
                  }\r
                </td>\r
                <td class="px-6 py-4 font-medium">{{ course.durationHours || 0 }} gi\u1EDD</td>\r
                <td class="px-6 py-4 font-semibold text-emerald-600 dark:text-emerald-400">{{ course.basePrice | number:'1.0-0' }} VN\u0110</td>\r
                <td class="px-6 py-4">\r
                  @switch (course.status) {\r
                    @case ('ACTIVE') {\r
                      <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">\u0110ang m\u1EDF</span>\r
                    }\r
                    @case ('INACTIVE') {\r
                      <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300">Ng\u01B0ng m\u1EDF</span>\r
                    }\r
                    @case ('DRAFT') {\r
                      <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400 border border-amber-200 dark:border-amber-800">Nh\xE1p</span>\r
                    }\r
                  }\r
                </td>\r
                <td *hasAnyPermission="['COURSE_UPDATE', 'COURSE_DELETE']" class="px-6 py-4 text-right space-x-2">\r
                  <button *hasPermission="'COURSE_UPDATE'" (click)="openModal(course)" class="px-3 py-1.5 text-xs font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-lg transition-colors">S\u1EEDa</button>\r
                  <button *hasPermission="'COURSE_DELETE'" (click)="onDelete(course.id)" class="px-3 py-1.5 text-xs font-medium text-rose-600 hover:text-rose-700 hover:bg-rose-50 dark:hover:bg-rose-900/30 rounded-lg transition-colors">X\xF3a</button>\r
                </td>\r
              </tr>\r
            }\r
          }\r
        </tbody>\r
      </table>\r
    </div>\r
\r
    <!-- Pagination -->\r
    <div class="p-4 border-t border-gray-100 dark:border-gray-700 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">\r
      <div>Hi\u1EC3n th\u1ECB t\u1EEB <span class="font-medium text-gray-900 dark:text-white">{{ startIndex() }}</span> \u0111\u1EBFn <span class="font-medium text-gray-900 dark:text-white">{{ endIndex() }}</span> trong t\u1ED5ng s\u1ED1 <span class="font-medium text-gray-900 dark:text-white">{{ totalElements() }}</span> m\u1EE5c</div>\r
      <div class="flex items-center gap-1">\r
        <button (click)="changePage(currentPage() - 1)" [disabled]="currentPage() <= 1" class="px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 disabled:opacity-40 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">Tr\u01B0\u1EDBc</button>\r
        <span class="px-3 py-1.5 font-medium text-gray-900 dark:text-white">Trang {{ currentPage() }} / {{ totalPages() || 1 }}</span>\r
        <button (click)="changePage(currentPage() + 1)" [disabled]="currentPage() >= totalPages()" class="px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 disabled:opacity-40 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">Sau</button>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Form Modal -->\r
  @if (isModalOpen()) {\r
    <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">\r
      <div class="bg-white dark:bg-gray-800 rounded-2xl max-w-lg w-full p-6 shadow-xl border border-gray-100 dark:border-gray-700 space-y-6">\r
        <div class="flex justify-between items-center">\r
          <h3 class="text-lg font-bold text-gray-900 dark:text-white">{{ isEditing() ? 'Ch\u1EC9nh s\u1EEDa kh\xF3a h\u1ECDc' : 'Th\xEAm kh\xF3a h\u1ECDc m\u1EDBi' }}</h3>\r
          <button (click)="closeModal()" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">\r
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>\r
          </button>\r
        </div>\r
\r
        <form [formGroup]="courseForm" (ngSubmit)="onSubmit()" class="space-y-4">\r
          <div>\r
            <label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">M\xE3 kh\xF3a h\u1ECDc (Code) *</label>\r
            <input formControlName="code" type="text" placeholder="VD: IELTS-FOUNDATION, TOEIC-700" class="w-full px-3 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 uppercase">\r
          </div>\r
          <div>\r
            <label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">T\xEAn kh\xF3a h\u1ECDc *</label>\r
            <input formControlName="name" type="text" placeholder="VD: IELTS Foundation 5.0+" class="w-full px-3 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:ring-2 focus:ring-blue-500">\r
          </div>\r
          <div class="grid grid-cols-2 gap-4">\r
            <div>\r
              <label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">Th\u1EDDi l\u01B0\u1EE3ng (Gi\u1EDD) *</label>\r
              <input formControlName="durationHours" type="number" class="w-full px-3 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:ring-2 focus:ring-blue-500">\r
            </div>\r
            <div>\r
              <label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">H\u1ECDc ph\xED c\u01A1 b\u1EA3n (VN\u0110) *</label>\r
              <input formControlName="basePrice" type="number" class="w-full px-3 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:ring-2 focus:ring-blue-500">\r
            </div>\r
          </div>\r
          <div>\r
            <label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">Tr\u1EA1ng th\xE1i *</label>\r
            <select formControlName="status" class="w-full px-3 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:ring-2 focus:ring-blue-500">\r
              <option value="ACTIVE">ACTIVE (\u0110ang tuy\u1EC3n sinh/m\u1EDF l\u1EDBp)</option>\r
              <option value="INACTIVE">INACTIVE (T\u1EA1m ng\u01B0ng)</option>\r
              <option value="DRAFT">DRAFT (B\u1EA3n nh\xE1p)</option>\r
            </select>\r
          </div>\r
          <div>\r
            <label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">M\xF4 t\u1EA3 kh\xF3a h\u1ECDc</label>\r
            <textarea formControlName="description" rows="3" placeholder="M\xF4 t\u1EA3 n\u1ED9i dung, m\u1EE5c ti\xEAu \u0111\u1EA7u ra c\u1EE7a kh\xF3a h\u1ECDc..." class="w-full px-3 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:ring-2 focus:ring-blue-500"></textarea>\r
          </div>\r
\r
          <div class="flex justify-end gap-3 pt-4 border-t border-gray-100 dark:border-gray-700">\r
            <button type="button" (click)="closeModal()" class="px-4 py-2 text-xs font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl">H\u1EE7y</button>\r
            <button type="submit" [disabled]="courseForm.invalid || isLoading()" class="px-4 py-2 text-xs font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-xl disabled:opacity-50">L\u01B0u</button>\r
          </div>\r
        </form>\r
      </div>\r
    </div>\r
  }\r
\r
  <!-- Delete Confirmation Modal -->\r
  @if (isDeleteModalOpen()) {\r
    <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">\r
      <div class="bg-white dark:bg-gray-800 rounded-2xl max-w-sm w-full p-6 shadow-xl border border-gray-100 dark:border-gray-700 space-y-4">\r
        <h3 class="text-base font-bold text-gray-900 dark:text-white">X\xE1c nh\u1EADn x\xF3a kh\xF3a h\u1ECDc</h3>\r
        <p class="text-xs text-gray-500">B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a kh\xF3a h\u1ECDc n\xE0y? Thao t\xE1c n\xE0y kh\xF4ng th\u1EC3 ho\xE0n t\xE1c.</p>\r
        <div class="flex justify-end gap-3 pt-2">\r
          <button (click)="closeDeleteModal()" class="px-4 py-2 text-xs font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl">H\u1EE7y</button>\r
          <button (click)="confirmDelete()" [disabled]="isLoading()" class="px-4 py-2 text-xs font-medium bg-rose-600 hover:bg-rose-700 text-white rounded-xl disabled:opacity-50">X\xF3a</button>\r
        </div>\r
      </div>\r
    </div>\r
  }\r
</div>\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CourseComponent, { className: "CourseComponent", filePath: "src/app/features/admin/pages/course/course.component.ts", lineNumber: 17 });
})();

// src/app/features/admin/pages/class/class.component.ts
var _c04 = () => ["CLASS_UPDATE", "CLASS_DELETE", "ENROLLMENT_VIEW", "SCHEDULE_VIEW"];
var _forTrack04 = ($index, $item) => $item.id;
function ClassComponent_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 31);
    \u0275\u0275listener("click", function ClassComponent_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 32);
    \u0275\u0275element(2, "path", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Th\xEAm l\u1EDBp h\u1ECDc m\u1EDBi ");
    \u0275\u0275elementEnd();
  }
}
function ClassComponent_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    \u0275\u0275property("value", c_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", c_r3.code, " - ", c_r3.name);
  }
}
function ClassComponent_For_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = ctx.$implicit;
    \u0275\u0275property("value", t_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", t_r4.code, " - ", t_r4.name);
  }
}
function ClassComponent_th_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 34);
    \u0275\u0275text(1, "Thao t\xE1c");
    \u0275\u0275elementEnd();
  }
}
function ClassComponent_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 35)(2, "div", 36);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 37);
    \u0275\u0275element(4, "circle", 38)(5, "path", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7, "\u0110ang t\u1EA3i d\u1EEF li\u1EC7u...");
    \u0275\u0275elementEnd()()()();
  }
}
function ClassComponent_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 35);
    \u0275\u0275text(2, "Ch\u01B0a c\xF3 l\u1EDBp h\u1ECDc n\xE0o.");
    \u0275\u0275elementEnd()();
  }
}
function ClassComponent_Conditional_56_For_1_Case_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 47);
    \u0275\u0275text(1, "\u0110ang m\u1EDF \u0110K");
    \u0275\u0275elementEnd();
  }
}
function ClassComponent_Conditional_56_For_1_Case_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 48);
    \u0275\u0275text(1, "\u0110ang h\u1ECDc");
    \u0275\u0275elementEnd();
  }
}
function ClassComponent_Conditional_56_For_1_Case_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275text(1, "\u0110\xE3 \u0111\xF3ng");
    \u0275\u0275elementEnd();
  }
}
function ClassComponent_Conditional_56_For_1_Case_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 50);
    \u0275\u0275text(1, "\u0110\xE3 h\u1EE7y");
    \u0275\u0275elementEnd();
  }
}
function ClassComponent_Conditional_56_For_1_td_17_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 57);
    \u0275\u0275listener("click", function ClassComponent_Conditional_56_For_1_td_17_button_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const cls_r6 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.viewEnrollments(cls_r6.id));
    });
    \u0275\u0275text(1, "H\u1ECDc vi\xEAn");
    \u0275\u0275elementEnd();
  }
}
function ClassComponent_Conditional_56_For_1_td_17_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 58);
    \u0275\u0275listener("click", function ClassComponent_Conditional_56_For_1_td_17_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const cls_r6 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.viewSchedules(cls_r6.id));
    });
    \u0275\u0275text(1, "L\u1ECBch h\u1ECDc");
    \u0275\u0275elementEnd();
  }
}
function ClassComponent_Conditional_56_For_1_td_17_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 59);
    \u0275\u0275listener("click", function ClassComponent_Conditional_56_For_1_td_17_button_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const cls_r6 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openModal(cls_r6));
    });
    \u0275\u0275text(1, "S\u1EEDa");
    \u0275\u0275elementEnd();
  }
}
function ClassComponent_Conditional_56_For_1_td_17_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 60);
    \u0275\u0275listener("click", function ClassComponent_Conditional_56_For_1_td_17_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const cls_r6 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDelete(cls_r6.id));
    });
    \u0275\u0275text(1, "X\xF3a");
    \u0275\u0275elementEnd();
  }
}
function ClassComponent_Conditional_56_For_1_td_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 52);
    \u0275\u0275template(1, ClassComponent_Conditional_56_For_1_td_17_button_1_Template, 2, 0, "button", 53)(2, ClassComponent_Conditional_56_For_1_td_17_button_2_Template, 2, 0, "button", 54)(3, ClassComponent_Conditional_56_For_1_td_17_button_3_Template, 2, 0, "button", 55)(4, ClassComponent_Conditional_56_For_1_td_17_button_4_Template, 2, 0, "button", 56);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("hasPermission", "ENROLLMENT_VIEW");
    \u0275\u0275advance();
    \u0275\u0275property("hasPermission", "SCHEDULE_VIEW");
    \u0275\u0275advance();
    \u0275\u0275property("hasPermission", "CLASS_UPDATE");
    \u0275\u0275advance();
    \u0275\u0275property("hasPermission", "CLASS_DELETE");
  }
}
function ClassComponent_Conditional_56_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 40)(1, "td", 41);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 42);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 43);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 43);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 44)(10, "span", 45);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td", 46);
    \u0275\u0275conditionalCreate(13, ClassComponent_Conditional_56_For_1_Case_13_Template, 2, 0, "span", 47)(14, ClassComponent_Conditional_56_For_1_Case_14_Template, 2, 0, "span", 48)(15, ClassComponent_Conditional_56_For_1_Case_15_Template, 2, 0, "span", 49)(16, ClassComponent_Conditional_56_For_1_Case_16_Template, 2, 0, "span", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, ClassComponent_Conditional_56_For_1_td_17_Template, 5, 4, "td", 51);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_16_0;
    const cls_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cls_r6.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cls_r6.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cls_r6.courseName || cls_r6.courseCode || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cls_r6.termName || cls_r6.termCode || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", cls_r6.currentStudents || 0, " / ", cls_r6.maxStudents || 20, " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_16_0 = cls_r6.status) === "OPENING" ? 13 : tmp_16_0 === "ONGOING" ? 14 : tmp_16_0 === "CLOSED" ? 15 : tmp_16_0 === "CANCELLED" ? 16 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("hasAnyPermission", \u0275\u0275pureFunction0(8, _c04));
  }
}
function ClassComponent_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ClassComponent_Conditional_56_For_1_Template, 18, 9, "tr", 40, _forTrack04);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r1.classes());
  }
}
function ClassComponent_Conditional_76_For_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r11 = ctx.$implicit;
    \u0275\u0275property("value", c_r11.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", c_r11.code, " - ", c_r11.name);
  }
}
function ClassComponent_Conditional_76_For_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r12 = ctx.$implicit;
    \u0275\u0275property("value", t_r12.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", t_r12.code, " - ", t_r12.name);
  }
}
function ClassComponent_Conditional_76_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 61)(2, "div", 62)(3, "h3", 63);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 64);
    \u0275\u0275listener("click", function ClassComponent_Conditional_76_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 32);
    \u0275\u0275element(7, "path", 65);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "form", 66);
    \u0275\u0275listener("ngSubmit", function ClassComponent_Conditional_76_Template_form_ngSubmit_8_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(9, "div", 67)(10, "div")(11, "label", 68);
    \u0275\u0275text(12, "M\xE3 l\u1EDBp (Code) *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 69);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div")(15, "label", 68);
    \u0275\u0275text(16, "S\u0129 s\u1ED1 t\u1ED1i \u0111a *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "input", 70);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div")(19, "label", 68);
    \u0275\u0275text(20, "T\xEAn l\u1EDBp h\u1ECDc *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "input", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 67)(23, "div")(24, "label", 68);
    \u0275\u0275text(25, "Kh\xF3a h\u1ECDc *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "select", 72)(27, "option", 13);
    \u0275\u0275text(28, "-- Ch\u1ECDn kh\xF3a h\u1ECDc --");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(29, ClassComponent_Conditional_76_For_30_Template, 2, 3, "option", 14, _forTrack04);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div")(32, "label", 68);
    \u0275\u0275text(33, "K\u1EF3 h\u1ECDc");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "select", 73)(35, "option", 13);
    \u0275\u0275text(36, "-- Ch\u1ECDn k\u1EF3 h\u1ECDc --");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(37, ClassComponent_Conditional_76_For_38_Template, 2, 3, "option", 14, _forTrack04);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(39, "div", 67)(40, "div")(41, "label", 68);
    \u0275\u0275text(42, "Ng\xE0y b\u1EAFt \u0111\u1EA7u");
    \u0275\u0275elementEnd();
    \u0275\u0275element(43, "input", 74);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div")(45, "label", 68);
    \u0275\u0275text(46, "Ng\xE0y k\u1EBFt th\xFAc");
    \u0275\u0275elementEnd();
    \u0275\u0275element(47, "input", 75);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div")(49, "label", 68);
    \u0275\u0275text(50, "Tr\u1EA1ng th\xE1i l\u1EDBp *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "select", 76)(52, "option", 15);
    \u0275\u0275text(53, "OPENING (M\u1EDF \u0111\u0103ng k\xFD)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "option", 16);
    \u0275\u0275text(55, "ONGOING (\u0110ang gi\u1EA3ng d\u1EA1y)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "option", 17);
    \u0275\u0275text(57, "CLOSED (\u0110\xE3 ho\xE0n th\xE0nh)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "option", 18);
    \u0275\u0275text(59, "CANCELLED (H\u1EE7y l\u1EDBp)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(60, "div", 77)(61, "button", 78);
    \u0275\u0275listener("click", function ClassComponent_Conditional_76_Template_button_click_61_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275text(62, "H\u1EE7y");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "button", 79);
    \u0275\u0275text(64, "L\u01B0u");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.isEditing() ? "Ch\u1EC9nh s\u1EEDa th\xF4ng tin l\u1EDBp" : "T\u1EA1o l\u1EDBp h\u1ECDc m\u1EDBi");
    \u0275\u0275advance(4);
    \u0275\u0275property("formGroup", ctx_r1.classForm);
    \u0275\u0275advance(21);
    \u0275\u0275repeater(ctx_r1.courses());
    \u0275\u0275advance(8);
    \u0275\u0275repeater(ctx_r1.terms());
    \u0275\u0275advance(26);
    \u0275\u0275property("disabled", ctx_r1.classForm.invalid || ctx_r1.isLoading());
  }
}
function ClassComponent_Conditional_77_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 80)(2, "h3", 81);
    \u0275\u0275text(3, "X\xE1c nh\u1EADn x\xF3a l\u1EDBp h\u1ECDc");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 82);
    \u0275\u0275text(5, "B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a l\u1EDBp h\u1ECDc n\xE0y? Thao t\xE1c n\xE0y kh\xF4ng th\u1EC3 ho\xE0n t\xE1c.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 83)(7, "button", 84);
    \u0275\u0275listener("click", function ClassComponent_Conditional_77_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDeleteModal());
    });
    \u0275\u0275text(8, "H\u1EE7y");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 85);
    \u0275\u0275listener("click", function ClassComponent_Conditional_77_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmDelete());
    });
    \u0275\u0275text(10, "X\xF3a");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275property("disabled", ctx_r1.isLoading());
  }
}
var ClassComponent = class _ClassComponent {
  classService = inject(ClassService);
  courseService = inject(CourseService);
  termService = inject(TermService);
  fb = inject(FormBuilder);
  destroyRef = inject(DestroyRef);
  toastService = inject(ToastService);
  router = inject(Router);
  classes = signal([], ...ngDevMode ? [{ debugName: "classes" }] : (
    /* istanbul ignore next */
    []
  ));
  courses = signal([], ...ngDevMode ? [{ debugName: "courses" }] : (
    /* istanbul ignore next */
    []
  ));
  terms = signal([], ...ngDevMode ? [{ debugName: "terms" }] : (
    /* istanbul ignore next */
    []
  ));
  totalElements = signal(0, ...ngDevMode ? [{ debugName: "totalElements" }] : (
    /* istanbul ignore next */
    []
  ));
  currentPage = signal(1, ...ngDevMode ? [{ debugName: "currentPage" }] : (
    /* istanbul ignore next */
    []
  ));
  pageSize = signal(10, ...ngDevMode ? [{ debugName: "pageSize" }] : (
    /* istanbul ignore next */
    []
  ));
  isLoading = signal(false, ...ngDevMode ? [{ debugName: "isLoading" }] : (
    /* istanbul ignore next */
    []
  ));
  searchControl = new FormControl("");
  statusFilter = new FormControl("");
  courseFilter = new FormControl("");
  termFilter = new FormControl("");
  isModalOpen = signal(false, ...ngDevMode ? [{ debugName: "isModalOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  isEditing = signal(false, ...ngDevMode ? [{ debugName: "isEditing" }] : (
    /* istanbul ignore next */
    []
  ));
  currentId = signal(null, ...ngDevMode ? [{ debugName: "currentId" }] : (
    /* istanbul ignore next */
    []
  ));
  classForm;
  isDeleteModalOpen = signal(false, ...ngDevMode ? [{ debugName: "isDeleteModalOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  idToDelete = signal(null, ...ngDevMode ? [{ debugName: "idToDelete" }] : (
    /* istanbul ignore next */
    []
  ));
  totalPages = computed(() => Math.ceil(this.totalElements() / this.pageSize()), ...ngDevMode ? [{ debugName: "totalPages" }] : (
    /* istanbul ignore next */
    []
  ));
  startIndex = computed(() => this.totalElements() === 0 ? 0 : (this.currentPage() - 1) * this.pageSize() + 1, ...ngDevMode ? [{ debugName: "startIndex" }] : (
    /* istanbul ignore next */
    []
  ));
  endIndex = computed(() => Math.min(this.currentPage() * this.pageSize(), this.totalElements()), ...ngDevMode ? [{ debugName: "endIndex" }] : (
    /* istanbul ignore next */
    []
  ));
  ngOnInit() {
    this.initForm();
    this.setupFilters();
    this.loadDropdownData();
    this.loadData();
  }
  initForm() {
    this.classForm = this.fb.group({
      code: ["", [Validators.required, Validators.maxLength(50)]],
      name: ["", [Validators.required, Validators.maxLength(255)]],
      courseId: ["", Validators.required],
      termId: [""],
      startDate: [""],
      endDate: [""],
      maxStudents: [20, [Validators.required, Validators.min(10)]],
      status: ["OPENING", Validators.required]
    });
  }
  setupFilters() {
    this.searchControl.valueChanges.pipe(debounceTime(400), distinctUntilChanged(), takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.currentPage.set(1);
      this.loadData();
    });
    this.statusFilter.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.currentPage.set(1);
      this.loadData();
    });
    this.courseFilter.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.currentPage.set(1);
      this.loadData();
    });
    this.termFilter.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.currentPage.set(1);
      this.loadData();
    });
  }
  loadDropdownData() {
    this.courseService.getAll(0, 100).subscribe({
      next: (res) => this.courses.set(res.content || [])
    });
    this.termService.getAll(0, 100).subscribe({
      next: (res) => this.terms.set(res.content || [])
    });
  }
  loadData() {
    this.isLoading.set(true);
    const keyword = this.searchControl.value || void 0;
    const status = this.statusFilter.value || void 0;
    const courseId = this.courseFilter.value || void 0;
    const termId = this.termFilter.value || void 0;
    this.classService.getAll(this.currentPage() - 1, this.pageSize(), keyword, status, courseId, termId).subscribe({
      next: (res) => {
        this.classes.set(res.content || []);
        this.totalElements.set(res.totalElements || 0);
        this.isLoading.set(false);
      },
      error: () => this.isLoading.set(false)
    });
  }
  changePage(page) {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage.set(page);
      this.loadData();
    }
  }
  openModal(cls) {
    if (cls) {
      this.isEditing.set(true);
      this.currentId.set(cls.id);
      this.classForm.patchValue({
        code: cls.code,
        name: cls.name,
        courseId: cls.courseId,
        termId: cls.termId || "",
        startDate: cls.startDate || "",
        endDate: cls.endDate || "",
        maxStudents: cls.maxStudents || 20,
        status: cls.status
      });
    } else {
      this.isEditing.set(false);
      this.currentId.set(null);
      this.classForm.reset({
        code: "",
        name: "",
        courseId: "",
        termId: "",
        startDate: "",
        endDate: "",
        maxStudents: 20,
        status: "OPENING"
      });
    }
    this.isModalOpen.set(true);
  }
  closeModal() {
    this.isModalOpen.set(false);
    this.currentId.set(null);
  }
  onSubmit() {
    if (this.classForm.invalid)
      return;
    this.isLoading.set(true);
    const data = this.classForm.value;
    data.code = data.code.toUpperCase().trim();
    if (data.courseId)
      data.courseId = Number(data.courseId);
    if (data.termId)
      data.termId = Number(data.termId);
    if (this.isEditing() && this.currentId() != null) {
      this.classService.update(this.currentId(), data).subscribe({
        next: () => {
          this.loadData();
          this.closeModal();
          this.toastService.success("Th\xE0nh c\xF4ng", "\u0110\xE3 c\u1EADp nh\u1EADt th\xF4ng tin l\u1EDBp h\u1ECDc!");
        },
        error: (err) => {
          this.isLoading.set(false);
          this.toastService.error("Th\u1EA5t b\u1EA1i", err.error?.message || "C\xF3 l\u1ED7i x\u1EA3y ra khi c\u1EADp nh\u1EADt!");
        }
      });
    } else {
      this.classService.create(data).subscribe({
        next: () => {
          this.loadData();
          this.closeModal();
          this.toastService.success("Th\xE0nh c\xF4ng", "\u0110\xE3 t\u1EA1o l\u1EDBp h\u1ECDc m\u1EDBi!");
        },
        error: (err) => {
          this.isLoading.set(false);
          this.toastService.error("Th\u1EA5t b\u1EA1i", err.error?.message || "C\xF3 l\u1ED7i x\u1EA3y ra khi th\xEAm m\u1EDBi!");
        }
      });
    }
  }
  onDelete(id) {
    this.idToDelete.set(id);
    this.isDeleteModalOpen.set(true);
  }
  closeDeleteModal() {
    this.isDeleteModalOpen.set(false);
    this.idToDelete.set(null);
  }
  confirmDelete() {
    const id = this.idToDelete();
    if (id != null) {
      this.isLoading.set(true);
      this.classService.delete(id).subscribe({
        next: () => {
          this.loadData();
          this.closeDeleteModal();
          this.toastService.success("\u0110\xE3 x\xF3a", "X\xF3a l\u1EDBp h\u1ECDc th\xE0nh c\xF4ng!");
        },
        error: (err) => {
          this.isLoading.set(false);
          this.closeDeleteModal();
          this.toastService.error("L\u1ED7i x\xF3a", err.error?.message || "Kh\xF4ng th\u1EC3 x\xF3a l\u1EDBp h\u1ECDc n\xE0y!");
        }
      });
    }
  }
  viewEnrollments(classId) {
    this.router.navigate(["/admin/enrollments"], { queryParams: { classId } });
  }
  viewSchedules(classId) {
    this.router.navigate(["/admin/classes", classId, "schedules"]);
  }
  static \u0275fac = function ClassComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ClassComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClassComponent, selectors: [["app-class"]], decls: 78, vars: 17, consts: [[1, "p-6", "space-y-6"], [1, "flex", "flex-col", "sm:flex-row", "justify-between", "items-start", "sm:items-center", "gap-4", "bg-white", "dark:bg-gray-800", "p-6", "rounded-2xl", "shadow-sm", "border", "border-gray-100", "dark:border-gray-700"], [1, "text-2xl", "font-bold", "text-gray-900", "dark:text-white"], [1, "text-sm", "text-gray-500", "dark:text-gray-400", "mt-1"], ["class", "inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-xl transition-colors shadow-sm shadow-blue-500/10", 3, "click", 4, "hasPermission"], [1, "bg-white", "dark:bg-gray-800", "rounded-2xl", "shadow-sm", "border", "border-gray-100", "dark:border-gray-700", "overflow-hidden"], [1, "p-4", "border-b", "border-gray-100", "dark:border-gray-700", "bg-gray-50/50", "dark:bg-gray-800/50", "flex", "flex-col", "md:flex-row", "items-center", "justify-between", "gap-4"], [1, "relative", "w-full", "md:w-64"], ["type", "text", "placeholder", "T\xECm t\xEAn l\u1EDBp, m\xE3 l\u1EDBp...", 1, "w-full", "pl-10", "pr-4", "py-2", "bg-white", "dark:bg-gray-900", "border", "border-gray-200", "dark:border-gray-700", "rounded-xl", "text-sm", "text-gray-900", "dark:text-white", "placeholder-gray-400", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", 3, "formControl"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-gray-400", "absolute", "left-3", "top-3"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], [1, "flex", "flex-wrap", "items-center", "gap-3", "w-full", "md:w-auto"], [1, "px-3", "py-2", "bg-white", "dark:bg-gray-900", "border", "border-gray-200", "dark:border-gray-700", "rounded-xl", "text-sm", "text-gray-900", "dark:text-white", "focus:ring-2", "focus:ring-blue-500", 3, "formControl"], ["value", ""], [3, "value"], ["value", "OPENING"], ["value", "ONGOING"], ["value", "CLOSED"], ["value", "CANCELLED"], [1, "overflow-x-auto"], [1, "w-full", "text-sm", "text-left", "text-gray-600", "dark:text-gray-300"], [1, "text-xs", "uppercase", "bg-gray-50", "dark:bg-gray-900/50", "text-gray-500", "dark:text-gray-400", "border-b", "border-gray-100", "dark:border-gray-700"], [1, "px-6", "py-3.5", "font-semibold"], ["class", "px-6 py-3.5 font-semibold text-right", 4, "hasAnyPermission"], [1, "divide-y", "divide-gray-100", "dark:divide-gray-700"], [1, "p-4", "border-t", "border-gray-100", "dark:border-gray-700", "flex", "flex-col", "sm:flex-row", "justify-between", "items-center", "gap-4", "text-xs", "text-gray-500"], [1, "font-medium", "text-gray-900", "dark:text-white"], [1, "flex", "items-center", "gap-1"], [1, "px-3", "py-1.5", "rounded-lg", "border", "border-gray-200", "dark:border-gray-700", "disabled:opacity-40", "hover:bg-gray-50", "dark:hover:bg-gray-700", "transition-colors", 3, "click", "disabled"], [1, "px-3", "py-1.5", "font-medium", "text-gray-900", "dark:text-white"], [1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "p-4", "bg-black/40", "backdrop-blur-sm"], [1, "inline-flex", "items-center", "gap-2", "px-4", "py-2.5", "bg-blue-600", "hover:bg-blue-700", "text-white", "text-sm", "font-medium", "rounded-xl", "transition-colors", "shadow-sm", "shadow-blue-500/10", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 4v16m8-8H4"], [1, "px-6", "py-3.5", "font-semibold", "text-right"], ["colspan", "7", 1, "px-6", "py-8", "text-center", "text-gray-400"], [1, "inline-flex", "items-center", "gap-2"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-5", "w-5", "text-blue-600"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"], [1, "hover:bg-gray-50/50", "dark:hover:bg-gray-700/50", "transition-colors"], [1, "px-6", "py-4", "font-mono", "font-medium", "text-blue-600", "dark:text-blue-400"], [1, "px-6", "py-4", "font-medium", "text-gray-900", "dark:text-white"], [1, "px-6", "py-4", "text-gray-600", "dark:text-gray-300"], [1, "px-6", "py-4", "font-medium"], [1, "px-2.5", "py-1", "bg-gray-100", "dark:bg-gray-700", "rounded-lg", "text-xs"], [1, "px-6", "py-4"], [1, "inline-flex", "items-center", "px-2.5", "py-0.5", "rounded-full", "text-xs", "font-medium", "bg-emerald-50", "text-emerald-700", "dark:bg-emerald-950/40", "dark:text-emerald-400", "border", "border-emerald-200"], [1, "inline-flex", "items-center", "px-2.5", "py-0.5", "rounded-full", "text-xs", "font-medium", "bg-blue-50", "text-blue-700", "dark:bg-blue-950/40", "dark:text-blue-400", "border", "border-blue-200"], [1, "inline-flex", "items-center", "px-2.5", "py-0.5", "rounded-full", "text-xs", "font-medium", "bg-gray-100", "text-gray-700", "dark:bg-gray-700", "dark:text-gray-300"], [1, "inline-flex", "items-center", "px-2.5", "py-0.5", "rounded-full", "text-xs", "font-medium", "bg-rose-50", "text-rose-700", "dark:bg-rose-950/40", "dark:text-rose-400", "border", "border-rose-200"], ["class", "px-6 py-4 text-right space-x-1", 4, "hasAnyPermission"], [1, "px-6", "py-4", "text-right", "space-x-1"], ["title", "Danh s\xE1ch h\u1ECDc vi\xEAn", "class", "px-2.5 py-1.5 text-xs font-medium text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/30 rounded-lg transition-colors", 3, "click", 4, "hasPermission"], ["title", "L\u1ECBch h\u1ECDc", "class", "px-2.5 py-1.5 text-xs font-medium text-amber-600 hover:bg-amber-50 dark:hover:bg-amber-900/30 rounded-lg transition-colors", 3, "click", 4, "hasPermission"], ["class", "px-2.5 py-1.5 text-xs font-medium text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-lg transition-colors", 3, "click", 4, "hasPermission"], ["class", "px-2.5 py-1.5 text-xs font-medium text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-900/30 rounded-lg transition-colors", 3, "click", 4, "hasPermission"], ["title", "Danh s\xE1ch h\u1ECDc vi\xEAn", 1, "px-2.5", "py-1.5", "text-xs", "font-medium", "text-purple-600", "hover:bg-purple-50", "dark:hover:bg-purple-900/30", "rounded-lg", "transition-colors", 3, "click"], ["title", "L\u1ECBch h\u1ECDc", 1, "px-2.5", "py-1.5", "text-xs", "font-medium", "text-amber-600", "hover:bg-amber-50", "dark:hover:bg-amber-900/30", "rounded-lg", "transition-colors", 3, "click"], [1, "px-2.5", "py-1.5", "text-xs", "font-medium", "text-blue-600", "hover:bg-blue-50", "dark:hover:bg-blue-900/30", "rounded-lg", "transition-colors", 3, "click"], [1, "px-2.5", "py-1.5", "text-xs", "font-medium", "text-rose-600", "hover:bg-rose-50", "dark:hover:bg-rose-900/30", "rounded-lg", "transition-colors", 3, "click"], [1, "bg-white", "dark:bg-gray-800", "rounded-2xl", "max-w-lg", "w-full", "p-6", "shadow-xl", "border", "border-gray-100", "dark:border-gray-700", "space-y-6"], [1, "flex", "justify-between", "items-center"], [1, "text-lg", "font-bold", "text-gray-900", "dark:text-white"], [1, "text-gray-400", "hover:text-gray-600", "dark:hover:text-gray-300", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "space-y-4", 3, "ngSubmit", "formGroup"], [1, "grid", "grid-cols-2", "gap-4"], [1, "block", "text-xs", "font-semibold", "text-gray-700", "dark:text-gray-300", "mb-1"], ["formControlName", "code", "type", "text", "placeholder", "VD: IELTS-K01", 1, "w-full", "px-3", "py-2", "bg-white", "dark:bg-gray-900", "border", "border-gray-200", "dark:border-gray-700", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-500", "uppercase"], ["formControlName", "maxStudents", "type", "number", 1, "w-full", "px-3", "py-2", "bg-white", "dark:bg-gray-900", "border", "border-gray-200", "dark:border-gray-700", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-500"], ["formControlName", "name", "type", "text", "placeholder", "VD: L\u1EDBp IELTS Foundation K01", 1, "w-full", "px-3", "py-2", "bg-white", "dark:bg-gray-900", "border", "border-gray-200", "dark:border-gray-700", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-500"], ["formControlName", "courseId", 1, "w-full", "px-3", "py-2", "bg-white", "dark:bg-gray-900", "border", "border-gray-200", "dark:border-gray-700", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-500"], ["formControlName", "termId", 1, "w-full", "px-3", "py-2", "bg-white", "dark:bg-gray-900", "border", "border-gray-200", "dark:border-gray-700", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-500"], ["formControlName", "startDate", "type", "date", 1, "w-full", "px-3", "py-2", "bg-white", "dark:bg-gray-900", "border", "border-gray-200", "dark:border-gray-700", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-500"], ["formControlName", "endDate", "type", "date", 1, "w-full", "px-3", "py-2", "bg-white", "dark:bg-gray-900", "border", "border-gray-200", "dark:border-gray-700", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-500"], ["formControlName", "status", 1, "w-full", "px-3", "py-2", "bg-white", "dark:bg-gray-900", "border", "border-gray-200", "dark:border-gray-700", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-500"], [1, "flex", "justify-end", "gap-3", "pt-4", "border-t", "border-gray-100", "dark:border-gray-700"], ["type", "button", 1, "px-4", "py-2", "text-xs", "font-medium", "text-gray-600", "dark:text-gray-300", "hover:bg-gray-100", "dark:hover:bg-gray-700", "rounded-xl", 3, "click"], ["type", "submit", 1, "px-4", "py-2", "text-xs", "font-medium", "bg-blue-600", "hover:bg-blue-700", "text-white", "rounded-xl", "disabled:opacity-50", 3, "disabled"], [1, "bg-white", "dark:bg-gray-800", "rounded-2xl", "max-w-sm", "w-full", "p-6", "shadow-xl", "border", "border-gray-100", "dark:border-gray-700", "space-y-4"], [1, "text-base", "font-bold", "text-gray-900", "dark:text-white"], [1, "text-xs", "text-gray-500"], [1, "flex", "justify-end", "gap-3", "pt-2"], [1, "px-4", "py-2", "text-xs", "font-medium", "text-gray-600", "dark:text-gray-300", "hover:bg-gray-100", "dark:hover:bg-gray-700", "rounded-xl", 3, "click"], [1, "px-4", "py-2", "text-xs", "font-medium", "bg-rose-600", "hover:bg-rose-700", "text-white", "rounded-xl", "disabled:opacity-50", 3, "click", "disabled"]], template: function ClassComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Qu\u1EA3n l\xFD L\u1EDBp h\u1ECDc (Classes)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Danh s\xE1ch l\u1EDBp h\u1ECDc theo kh\xF3a h\u1ECDc, k\u1EF3 h\u1ECDc v\xE0 s\u0129 s\u1ED1 \u0111\u0103ng k\xFD");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(7, ClassComponent_button_7_Template, 4, 0, "button", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 5)(9, "div", 6)(10, "div", 7);
      \u0275\u0275element(11, "input", 8);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(12, "svg", 9);
      \u0275\u0275element(13, "path", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(14, "div", 11)(15, "select", 12)(16, "option", 13);
      \u0275\u0275text(17, "T\u1EA5t c\u1EA3 kh\xF3a h\u1ECDc");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(18, ClassComponent_For_19_Template, 2, 3, "option", 14, _forTrack04);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "select", 12)(21, "option", 13);
      \u0275\u0275text(22, "T\u1EA5t c\u1EA3 k\u1EF3 h\u1ECDc");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(23, ClassComponent_For_24_Template, 2, 3, "option", 14, _forTrack04);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "select", 12)(26, "option", 13);
      \u0275\u0275text(27, "M\u1ECDi tr\u1EA1ng th\xE1i");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "option", 15);
      \u0275\u0275text(29, "\u0110ang m\u1EDF \u0111\u0103ng k\xFD (OPENING)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "option", 16);
      \u0275\u0275text(31, "\u0110ang h\u1ECDc (ONGOING)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "option", 17);
      \u0275\u0275text(33, "\u0110\xE3 k\u1EBFt th\xFAc (CLOSED)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "option", 18);
      \u0275\u0275text(35, "H\u1EE7y (CANCELLED)");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(36, "div", 19)(37, "table", 20)(38, "thead", 21)(39, "tr")(40, "th", 22);
      \u0275\u0275text(41, "M\xE3 l\u1EDBp");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "th", 22);
      \u0275\u0275text(43, "T\xEAn l\u1EDBp");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "th", 22);
      \u0275\u0275text(45, "Kh\xF3a h\u1ECDc");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "th", 22);
      \u0275\u0275text(47, "K\u1EF3 h\u1ECDc");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "th", 22);
      \u0275\u0275text(49, "S\u0129 s\u1ED1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "th", 22);
      \u0275\u0275text(51, "Tr\u1EA1ng th\xE1i");
      \u0275\u0275elementEnd();
      \u0275\u0275template(52, ClassComponent_th_52_Template, 2, 0, "th", 23);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(53, "tbody", 24);
      \u0275\u0275conditionalCreate(54, ClassComponent_Conditional_54_Template, 8, 0, "tr")(55, ClassComponent_Conditional_55_Template, 3, 0, "tr")(56, ClassComponent_Conditional_56_Template, 2, 0);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(57, "div", 25)(58, "div");
      \u0275\u0275text(59, "Hi\u1EC3n th\u1ECB t\u1EEB ");
      \u0275\u0275elementStart(60, "span", 26);
      \u0275\u0275text(61);
      \u0275\u0275elementEnd();
      \u0275\u0275text(62, " \u0111\u1EBFn ");
      \u0275\u0275elementStart(63, "span", 26);
      \u0275\u0275text(64);
      \u0275\u0275elementEnd();
      \u0275\u0275text(65, " trong t\u1ED5ng s\u1ED1 ");
      \u0275\u0275elementStart(66, "span", 26);
      \u0275\u0275text(67);
      \u0275\u0275elementEnd();
      \u0275\u0275text(68, " m\u1EE5c");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "div", 27)(70, "button", 28);
      \u0275\u0275listener("click", function ClassComponent_Template_button_click_70_listener() {
        return ctx.changePage(ctx.currentPage() - 1);
      });
      \u0275\u0275text(71, "Tr\u01B0\u1EDBc");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "span", 29);
      \u0275\u0275text(73);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "button", 28);
      \u0275\u0275listener("click", function ClassComponent_Template_button_click_74_listener() {
        return ctx.changePage(ctx.currentPage() + 1);
      });
      \u0275\u0275text(75, "Sau");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(76, ClassComponent_Conditional_76_Template, 65, 3, "div", 30);
      \u0275\u0275conditionalCreate(77, ClassComponent_Conditional_77_Template, 11, 1, "div", 30);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("hasPermission", "CLASS_CREATE");
      \u0275\u0275advance(4);
      \u0275\u0275property("formControl", ctx.searchControl);
      \u0275\u0275advance(4);
      \u0275\u0275property("formControl", ctx.courseFilter);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.courses());
      \u0275\u0275advance(2);
      \u0275\u0275property("formControl", ctx.termFilter);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.terms());
      \u0275\u0275advance(2);
      \u0275\u0275property("formControl", ctx.statusFilter);
      \u0275\u0275advance(27);
      \u0275\u0275property("hasAnyPermission", \u0275\u0275pureFunction0(16, _c04));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isLoading() ? 54 : ctx.classes().length === 0 ? 55 : 56);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.startIndex());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.endIndex());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.totalElements());
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", ctx.currentPage() <= 1);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2("Trang ", ctx.currentPage(), " / ", ctx.totalPages() || 1);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.currentPage() >= ctx.totalPages());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isModalOpen() ? 76 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isDeleteModalOpen() ? 77 : -1);
    }
  }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormControlDirective, FormGroupDirective, FormControlName, HasPermissionDirective], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClassComponent, [{
    type: Component,
    args: [{ selector: "app-class", imports: [CommonModule, ReactiveFormsModule, HasPermissionDirective], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="p-6 space-y-6">\r
  <!-- Header section -->\r
  <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">\r
    <div>\r
      <h1 class="text-2xl font-bold text-gray-900 dark:text-white">Qu\u1EA3n l\xFD L\u1EDBp h\u1ECDc (Classes)</h1>\r
      <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">Danh s\xE1ch l\u1EDBp h\u1ECDc theo kh\xF3a h\u1ECDc, k\u1EF3 h\u1ECDc v\xE0 s\u0129 s\u1ED1 \u0111\u0103ng k\xFD</p>\r
    </div>\r
    <button *hasPermission="'CLASS_CREATE'" (click)="openModal()" class="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-xl transition-colors shadow-sm shadow-blue-500/10">\r
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>\r
      </svg>\r
      Th\xEAm l\u1EDBp h\u1ECDc m\u1EDBi\r
    </button>\r
  </div>\r
\r
  <!-- Table Container -->\r
  <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">\r
    <!-- Search & Filter bar -->\r
    <div class="p-4 border-b border-gray-100 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/50 flex flex-col md:flex-row items-center justify-between gap-4">\r
      <div class="relative w-full md:w-64">\r
        <input [formControl]="searchControl" type="text" placeholder="T\xECm t\xEAn l\u1EDBp, m\xE3 l\u1EDBp..." class="w-full pl-10 pr-4 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500">\r
        <svg class="w-4 h-4 text-gray-400 absolute left-3 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>\r
        </svg>\r
      </div>\r
\r
      <div class="flex flex-wrap items-center gap-3 w-full md:w-auto">\r
        <select [formControl]="courseFilter" class="px-3 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500">\r
          <option value="">T\u1EA5t c\u1EA3 kh\xF3a h\u1ECDc</option>\r
          @for (c of courses(); track c.id) {\r
            <option [value]="c.id">{{ c.code }} - {{ c.name }}</option>\r
          }\r
        </select>\r
\r
        <select [formControl]="termFilter" class="px-3 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500">\r
          <option value="">T\u1EA5t c\u1EA3 k\u1EF3 h\u1ECDc</option>\r
          @for (t of terms(); track t.id) {\r
            <option [value]="t.id">{{ t.code }} - {{ t.name }}</option>\r
          }\r
        </select>\r
\r
        <select [formControl]="statusFilter" class="px-3 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500">\r
          <option value="">M\u1ECDi tr\u1EA1ng th\xE1i</option>\r
          <option value="OPENING">\u0110ang m\u1EDF \u0111\u0103ng k\xFD (OPENING)</option>\r
          <option value="ONGOING">\u0110ang h\u1ECDc (ONGOING)</option>\r
          <option value="CLOSED">\u0110\xE3 k\u1EBFt th\xFAc (CLOSED)</option>\r
          <option value="CANCELLED">H\u1EE7y (CANCELLED)</option>\r
        </select>\r
      </div>\r
    </div>\r
\r
    <!-- Table content -->\r
    <div class="overflow-x-auto">\r
      <table class="w-full text-sm text-left text-gray-600 dark:text-gray-300">\r
        <thead class="text-xs uppercase bg-gray-50 dark:bg-gray-900/50 text-gray-500 dark:text-gray-400 border-b border-gray-100 dark:border-gray-700">\r
          <tr>\r
            <th class="px-6 py-3.5 font-semibold">M\xE3 l\u1EDBp</th>\r
            <th class="px-6 py-3.5 font-semibold">T\xEAn l\u1EDBp</th>\r
            <th class="px-6 py-3.5 font-semibold">Kh\xF3a h\u1ECDc</th>\r
            <th class="px-6 py-3.5 font-semibold">K\u1EF3 h\u1ECDc</th>\r
            <th class="px-6 py-3.5 font-semibold">S\u0129 s\u1ED1</th>\r
            <th class="px-6 py-3.5 font-semibold">Tr\u1EA1ng th\xE1i</th>\r
            <th *hasAnyPermission="['CLASS_UPDATE', 'CLASS_DELETE', 'ENROLLMENT_VIEW', 'SCHEDULE_VIEW']" class="px-6 py-3.5 font-semibold text-right">Thao t\xE1c</th>\r
          </tr>\r
        </thead>\r
        <tbody class="divide-y divide-gray-100 dark:divide-gray-700">\r
          @if (isLoading()) {\r
            <tr>\r
              <td colspan="7" class="px-6 py-8 text-center text-gray-400">\r
                <div class="inline-flex items-center gap-2">\r
                  <svg class="animate-spin h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24">\r
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>\r
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>\r
                  </svg>\r
                  <span>\u0110ang t\u1EA3i d\u1EEF li\u1EC7u...</span>\r
                </div>\r
              </td>\r
            </tr>\r
          } @else if (classes().length === 0) {\r
            <tr>\r
              <td colspan="7" class="px-6 py-8 text-center text-gray-400">Ch\u01B0a c\xF3 l\u1EDBp h\u1ECDc n\xE0o.</td>\r
            </tr>\r
          } @else {\r
            @for (cls of classes(); track cls.id) {\r
              <tr class="hover:bg-gray-50/50 dark:hover:bg-gray-700/50 transition-colors">\r
                <td class="px-6 py-4 font-mono font-medium text-blue-600 dark:text-blue-400">{{ cls.code }}</td>\r
                <td class="px-6 py-4 font-medium text-gray-900 dark:text-white">{{ cls.name }}</td>\r
                <td class="px-6 py-4 text-gray-600 dark:text-gray-300">{{ cls.courseName || cls.courseCode || '\u2014' }}</td>\r
                <td class="px-6 py-4 text-gray-600 dark:text-gray-300">{{ cls.termName || cls.termCode || '\u2014' }}</td>\r
                <td class="px-6 py-4 font-medium">\r
                  <span class="px-2.5 py-1 bg-gray-100 dark:bg-gray-700 rounded-lg text-xs">\r
                    {{ cls.currentStudents || 0 }} / {{ cls.maxStudents || 20 }}\r
                  </span>\r
                </td>\r
                <td class="px-6 py-4">\r
                  @switch (cls.status) {\r
                    @case ('OPENING') {\r
                      <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 border border-emerald-200">\u0110ang m\u1EDF \u0110K</span>\r
                    }\r
                    @case ('ONGOING') {\r
                      <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-400 border border-blue-200">\u0110ang h\u1ECDc</span>\r
                    }\r
                    @case ('CLOSED') {\r
                      <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300">\u0110\xE3 \u0111\xF3ng</span>\r
                    }\r
                    @case ('CANCELLED') {\r
                      <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-400 border border-rose-200">\u0110\xE3 h\u1EE7y</span>\r
                    }\r
                  }\r
                </td>\r
                <td *hasAnyPermission="['CLASS_UPDATE', 'CLASS_DELETE', 'ENROLLMENT_VIEW', 'SCHEDULE_VIEW']" class="px-6 py-4 text-right space-x-1">\r
                  <button *hasPermission="'ENROLLMENT_VIEW'" (click)="viewEnrollments(cls.id)" title="Danh s\xE1ch h\u1ECDc vi\xEAn" class="px-2.5 py-1.5 text-xs font-medium text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/30 rounded-lg transition-colors">H\u1ECDc vi\xEAn</button>\r
                  <button *hasPermission="'SCHEDULE_VIEW'" (click)="viewSchedules(cls.id)" title="L\u1ECBch h\u1ECDc" class="px-2.5 py-1.5 text-xs font-medium text-amber-600 hover:bg-amber-50 dark:hover:bg-amber-900/30 rounded-lg transition-colors">L\u1ECBch h\u1ECDc</button>\r
                  <button *hasPermission="'CLASS_UPDATE'" (click)="openModal(cls)" class="px-2.5 py-1.5 text-xs font-medium text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-lg transition-colors">S\u1EEDa</button>\r
                  <button *hasPermission="'CLASS_DELETE'" (click)="onDelete(cls.id)" class="px-2.5 py-1.5 text-xs font-medium text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-900/30 rounded-lg transition-colors">X\xF3a</button>\r
                </td>\r
              </tr>\r
            }\r
          }\r
        </tbody>\r
      </table>\r
    </div>\r
\r
    <!-- Pagination -->\r
    <div class="p-4 border-t border-gray-100 dark:border-gray-700 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">\r
      <div>Hi\u1EC3n th\u1ECB t\u1EEB <span class="font-medium text-gray-900 dark:text-white">{{ startIndex() }}</span> \u0111\u1EBFn <span class="font-medium text-gray-900 dark:text-white">{{ endIndex() }}</span> trong t\u1ED5ng s\u1ED1 <span class="font-medium text-gray-900 dark:text-white">{{ totalElements() }}</span> m\u1EE5c</div>\r
      <div class="flex items-center gap-1">\r
        <button (click)="changePage(currentPage() - 1)" [disabled]="currentPage() <= 1" class="px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 disabled:opacity-40 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">Tr\u01B0\u1EDBc</button>\r
        <span class="px-3 py-1.5 font-medium text-gray-900 dark:text-white">Trang {{ currentPage() }} / {{ totalPages() || 1 }}</span>\r
        <button (click)="changePage(currentPage() + 1)" [disabled]="currentPage() >= totalPages()" class="px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 disabled:opacity-40 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">Sau</button>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Form Modal -->\r
  @if (isModalOpen()) {\r
    <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">\r
      <div class="bg-white dark:bg-gray-800 rounded-2xl max-w-lg w-full p-6 shadow-xl border border-gray-100 dark:border-gray-700 space-y-6">\r
        <div class="flex justify-between items-center">\r
          <h3 class="text-lg font-bold text-gray-900 dark:text-white">{{ isEditing() ? 'Ch\u1EC9nh s\u1EEDa th\xF4ng tin l\u1EDBp' : 'T\u1EA1o l\u1EDBp h\u1ECDc m\u1EDBi' }}</h3>\r
          <button (click)="closeModal()" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">\r
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>\r
          </button>\r
        </div>\r
\r
        <form [formGroup]="classForm" (ngSubmit)="onSubmit()" class="space-y-4">\r
          <div class="grid grid-cols-2 gap-4">\r
            <div>\r
              <label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">M\xE3 l\u1EDBp (Code) *</label>\r
              <input formControlName="code" type="text" placeholder="VD: IELTS-K01" class="w-full px-3 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 uppercase">\r
            </div>\r
            <div>\r
              <label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">S\u0129 s\u1ED1 t\u1ED1i \u0111a *</label>\r
              <input formControlName="maxStudents" type="number" class="w-full px-3 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:ring-2 focus:ring-blue-500">\r
            </div>\r
          </div>\r
\r
          <div>\r
            <label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">T\xEAn l\u1EDBp h\u1ECDc *</label>\r
            <input formControlName="name" type="text" placeholder="VD: L\u1EDBp IELTS Foundation K01" class="w-full px-3 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:ring-2 focus:ring-blue-500">\r
          </div>\r
\r
          <div class="grid grid-cols-2 gap-4">\r
            <div>\r
              <label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">Kh\xF3a h\u1ECDc *</label>\r
              <select formControlName="courseId" class="w-full px-3 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:ring-2 focus:ring-blue-500">\r
                <option value="">-- Ch\u1ECDn kh\xF3a h\u1ECDc --</option>\r
                @for (c of courses(); track c.id) {\r
                  <option [value]="c.id">{{ c.code }} - {{ c.name }}</option>\r
                }\r
              </select>\r
            </div>\r
            <div>\r
              <label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">K\u1EF3 h\u1ECDc</label>\r
              <select formControlName="termId" class="w-full px-3 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:ring-2 focus:ring-blue-500">\r
                <option value="">-- Ch\u1ECDn k\u1EF3 h\u1ECDc --</option>\r
                @for (t of terms(); track t.id) {\r
                  <option [value]="t.id">{{ t.code }} - {{ t.name }}</option>\r
                }\r
              </select>\r
            </div>\r
          </div>\r
\r
          <div class="grid grid-cols-2 gap-4">\r
            <div>\r
              <label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">Ng\xE0y b\u1EAFt \u0111\u1EA7u</label>\r
              <input formControlName="startDate" type="date" class="w-full px-3 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:ring-2 focus:ring-blue-500">\r
            </div>\r
            <div>\r
              <label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">Ng\xE0y k\u1EBFt th\xFAc</label>\r
              <input formControlName="endDate" type="date" class="w-full px-3 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:ring-2 focus:ring-blue-500">\r
            </div>\r
          </div>\r
\r
          <div>\r
            <label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">Tr\u1EA1ng th\xE1i l\u1EDBp *</label>\r
            <select formControlName="status" class="w-full px-3 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:ring-2 focus:ring-blue-500">\r
              <option value="OPENING">OPENING (M\u1EDF \u0111\u0103ng k\xFD)</option>\r
              <option value="ONGOING">ONGOING (\u0110ang gi\u1EA3ng d\u1EA1y)</option>\r
              <option value="CLOSED">CLOSED (\u0110\xE3 ho\xE0n th\xE0nh)</option>\r
              <option value="CANCELLED">CANCELLED (H\u1EE7y l\u1EDBp)</option>\r
            </select>\r
          </div>\r
\r
          <div class="flex justify-end gap-3 pt-4 border-t border-gray-100 dark:border-gray-700">\r
            <button type="button" (click)="closeModal()" class="px-4 py-2 text-xs font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl">H\u1EE7y</button>\r
            <button type="submit" [disabled]="classForm.invalid || isLoading()" class="px-4 py-2 text-xs font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-xl disabled:opacity-50">L\u01B0u</button>\r
          </div>\r
        </form>\r
      </div>\r
    </div>\r
  }\r
\r
  <!-- Delete Confirmation Modal -->\r
  @if (isDeleteModalOpen()) {\r
    <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">\r
      <div class="bg-white dark:bg-gray-800 rounded-2xl max-w-sm w-full p-6 shadow-xl border border-gray-100 dark:border-gray-700 space-y-4">\r
        <h3 class="text-base font-bold text-gray-900 dark:text-white">X\xE1c nh\u1EADn x\xF3a l\u1EDBp h\u1ECDc</h3>\r
        <p class="text-xs text-gray-500">B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a l\u1EDBp h\u1ECDc n\xE0y? Thao t\xE1c n\xE0y kh\xF4ng th\u1EC3 ho\xE0n t\xE1c.</p>\r
        <div class="flex justify-end gap-3 pt-2">\r
          <button (click)="closeDeleteModal()" class="px-4 py-2 text-xs font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl">H\u1EE7y</button>\r
          <button (click)="confirmDelete()" [disabled]="isLoading()" class="px-4 py-2 text-xs font-medium bg-rose-600 hover:bg-rose-700 text-white rounded-xl disabled:opacity-50">X\xF3a</button>\r
        </div>\r
      </div>\r
    </div>\r
  }\r
</div>\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClassComponent, { className: "ClassComponent", filePath: "src/app/features/admin/pages/class/class.component.ts", lineNumber: 22 });
})();

// src/app/features/admin/pages/room/room.component.ts
var _c05 = () => ["ROOM_UPDATE", "ROOM_DELETE"];
var _forTrack05 = ($index, $item) => $item.id;
function RoomComponent_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function RoomComponent_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 29);
    \u0275\u0275element(2, "path", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Th\xEAm ph\xF2ng h\u1ECDc m\u1EDBi ");
    \u0275\u0275elementEnd();
  }
}
function RoomComponent_th_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 31);
    \u0275\u0275text(1, "Thao t\xE1c");
    \u0275\u0275elementEnd();
  }
}
function RoomComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 32)(2, "div", 33);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 34);
    \u0275\u0275element(4, "circle", 35)(5, "path", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7, "\u0110ang t\u1EA3i d\u1EEF li\u1EC7u...");
    \u0275\u0275elementEnd()()()();
  }
}
function RoomComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 32);
    \u0275\u0275text(2, "Ch\u01B0a c\xF3 ph\xF2ng h\u1ECDc n\xE0o.");
    \u0275\u0275elementEnd()();
  }
}
function RoomComponent_Conditional_38_For_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 40);
    \u0275\u0275text(1, "Tr\u1EF1c ti\u1EBFp (Physical)");
    \u0275\u0275elementEnd();
  }
}
function RoomComponent_Conditional_38_For_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 41);
    \u0275\u0275text(1, "Online (LMS)");
    \u0275\u0275elementEnd();
  }
}
function RoomComponent_Conditional_38_For_1_td_11_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 48);
    \u0275\u0275listener("click", function RoomComponent_Conditional_38_For_1_td_11_button_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const room_r4 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openModal(room_r4));
    });
    \u0275\u0275text(1, "S\u1EEDa");
    \u0275\u0275elementEnd();
  }
}
function RoomComponent_Conditional_38_For_1_td_11_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 49);
    \u0275\u0275listener("click", function RoomComponent_Conditional_38_For_1_td_11_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const room_r4 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDelete(room_r4.id));
    });
    \u0275\u0275text(1, "X\xF3a");
    \u0275\u0275elementEnd();
  }
}
function RoomComponent_Conditional_38_For_1_td_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 45);
    \u0275\u0275template(1, RoomComponent_Conditional_38_For_1_td_11_button_1_Template, 2, 0, "button", 46)(2, RoomComponent_Conditional_38_For_1_td_11_button_2_Template, 2, 0, "button", 47);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("hasPermission", "ROOM_UPDATE");
    \u0275\u0275advance();
    \u0275\u0275property("hasPermission", "ROOM_DELETE");
  }
}
function RoomComponent_Conditional_38_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 37)(1, "td", 38);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 39);
    \u0275\u0275conditionalCreate(4, RoomComponent_Conditional_38_For_1_Conditional_4_Template, 2, 0, "span", 40)(5, RoomComponent_Conditional_38_For_1_Conditional_5_Template, 2, 0, "span", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 42);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 43);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, RoomComponent_Conditional_38_For_1_td_11_Template, 3, 2, "td", 44);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const room_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(room_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(room_r4.roomType === "PHYSICAL" ? 4 : 5);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", room_r4.capacity || 30, " h\u1ECDc vi\xEAn");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 5, room_r4.createdAt, "dd/MM/yyyy"));
    \u0275\u0275advance(2);
    \u0275\u0275property("hasAnyPermission", \u0275\u0275pureFunction0(8, _c05));
  }
}
function RoomComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, RoomComponent_Conditional_38_For_1_Template, 12, 9, "tr", 37, _forTrack05);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r1.rooms());
  }
}
function RoomComponent_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 50)(2, "div", 51)(3, "h3", 52);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 53);
    \u0275\u0275listener("click", function RoomComponent_Conditional_58_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 29);
    \u0275\u0275element(7, "path", 54);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "form", 55);
    \u0275\u0275listener("ngSubmit", function RoomComponent_Conditional_58_Template_form_ngSubmit_8_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(9, "div")(10, "label", 56);
    \u0275\u0275text(11, "T\xEAn ph\xF2ng h\u1ECDc *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div")(14, "label", 56);
    \u0275\u0275text(15, "Lo\u1EA1i ph\xF2ng *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "select", 58)(17, "option", 14);
    \u0275\u0275text(18, "PHYSICAL (Ph\xF2ng h\u1ECDc tr\u1EF1c ti\u1EBFp t\u1EA1i trung t\xE2m)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "option", 15);
    \u0275\u0275text(20, "LMS (Ph\xF2ng h\u1ECDc tr\u1EF1c tuy\u1EBFn / Tr\u1EF1c tuy\u1EBFn LMS)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div")(22, "label", 56);
    \u0275\u0275text(23, "S\u1EE9c ch\u1EE9a t\u1ED1i \u0111a (H\u1ECDc vi\xEAn) *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "input", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 60)(26, "button", 61);
    \u0275\u0275listener("click", function RoomComponent_Conditional_58_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275text(27, "H\u1EE7y");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 62);
    \u0275\u0275text(29, "L\u01B0u");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.isEditing() ? "Ch\u1EC9nh s\u1EEDa ph\xF2ng h\u1ECDc" : "Th\xEAm ph\xF2ng h\u1ECDc m\u1EDBi");
    \u0275\u0275advance(4);
    \u0275\u0275property("formGroup", ctx_r1.roomForm);
    \u0275\u0275advance(20);
    \u0275\u0275property("disabled", ctx_r1.roomForm.invalid || ctx_r1.isLoading());
  }
}
function RoomComponent_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 63)(2, "h3", 64);
    \u0275\u0275text(3, "X\xE1c nh\u1EADn x\xF3a ph\xF2ng h\u1ECDc");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 65);
    \u0275\u0275text(5, "B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a ph\xF2ng h\u1ECDc n\xE0y? Thao t\xE1c n\xE0y kh\xF4ng th\u1EC3 ho\xE0n t\xE1c.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 66)(7, "button", 67);
    \u0275\u0275listener("click", function RoomComponent_Conditional_59_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDeleteModal());
    });
    \u0275\u0275text(8, "H\u1EE7y");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 68);
    \u0275\u0275listener("click", function RoomComponent_Conditional_59_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmDelete());
    });
    \u0275\u0275text(10, "X\xF3a");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275property("disabled", ctx_r1.isLoading());
  }
}
var RoomComponent = class _RoomComponent {
  roomService = inject(RoomService);
  fb = inject(FormBuilder);
  destroyRef = inject(DestroyRef);
  toastService = inject(ToastService);
  rooms = signal([], ...ngDevMode ? [{ debugName: "rooms" }] : (
    /* istanbul ignore next */
    []
  ));
  totalElements = signal(0, ...ngDevMode ? [{ debugName: "totalElements" }] : (
    /* istanbul ignore next */
    []
  ));
  currentPage = signal(1, ...ngDevMode ? [{ debugName: "currentPage" }] : (
    /* istanbul ignore next */
    []
  ));
  pageSize = signal(10, ...ngDevMode ? [{ debugName: "pageSize" }] : (
    /* istanbul ignore next */
    []
  ));
  isLoading = signal(false, ...ngDevMode ? [{ debugName: "isLoading" }] : (
    /* istanbul ignore next */
    []
  ));
  searchControl = new FormControl("");
  typeFilter = new FormControl("");
  isModalOpen = signal(false, ...ngDevMode ? [{ debugName: "isModalOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  isEditing = signal(false, ...ngDevMode ? [{ debugName: "isEditing" }] : (
    /* istanbul ignore next */
    []
  ));
  currentId = signal(null, ...ngDevMode ? [{ debugName: "currentId" }] : (
    /* istanbul ignore next */
    []
  ));
  roomForm;
  isDeleteModalOpen = signal(false, ...ngDevMode ? [{ debugName: "isDeleteModalOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  idToDelete = signal(null, ...ngDevMode ? [{ debugName: "idToDelete" }] : (
    /* istanbul ignore next */
    []
  ));
  totalPages = computed(() => Math.ceil(this.totalElements() / this.pageSize()), ...ngDevMode ? [{ debugName: "totalPages" }] : (
    /* istanbul ignore next */
    []
  ));
  startIndex = computed(() => this.totalElements() === 0 ? 0 : (this.currentPage() - 1) * this.pageSize() + 1, ...ngDevMode ? [{ debugName: "startIndex" }] : (
    /* istanbul ignore next */
    []
  ));
  endIndex = computed(() => Math.min(this.currentPage() * this.pageSize(), this.totalElements()), ...ngDevMode ? [{ debugName: "endIndex" }] : (
    /* istanbul ignore next */
    []
  ));
  ngOnInit() {
    this.initForm();
    this.setupFilters();
    this.loadData();
  }
  initForm() {
    this.roomForm = this.fb.group({
      name: ["", [Validators.required, Validators.maxLength(100)]],
      roomType: ["PHYSICAL", Validators.required],
      capacity: [30, [Validators.required, Validators.min(1)]]
    });
  }
  setupFilters() {
    this.searchControl.valueChanges.pipe(debounceTime(400), distinctUntilChanged(), takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.currentPage.set(1);
      this.loadData();
    });
    this.typeFilter.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.currentPage.set(1);
      this.loadData();
    });
  }
  loadData() {
    this.isLoading.set(true);
    const keyword = this.searchControl.value || void 0;
    const roomType = this.typeFilter.value || void 0;
    this.roomService.getAll(this.currentPage() - 1, this.pageSize(), keyword, roomType).subscribe({
      next: (res) => {
        this.rooms.set(res.content || []);
        this.totalElements.set(res.totalElements || 0);
        this.isLoading.set(false);
      },
      error: () => this.isLoading.set(false)
    });
  }
  changePage(page) {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage.set(page);
      this.loadData();
    }
  }
  openModal(room) {
    if (room) {
      this.isEditing.set(true);
      this.currentId.set(room.id);
      this.roomForm.patchValue({
        name: room.name,
        roomType: room.roomType,
        capacity: room.capacity || 30
      });
    } else {
      this.isEditing.set(false);
      this.currentId.set(null);
      this.roomForm.reset({
        name: "",
        roomType: "PHYSICAL",
        capacity: 30
      });
    }
    this.isModalOpen.set(true);
  }
  closeModal() {
    this.isModalOpen.set(false);
    this.currentId.set(null);
  }
  onSubmit() {
    if (this.roomForm.invalid)
      return;
    this.isLoading.set(true);
    const data = this.roomForm.value;
    if (this.isEditing() && this.currentId() != null) {
      this.roomService.update(this.currentId(), data).subscribe({
        next: () => {
          this.loadData();
          this.closeModal();
          this.toastService.success("Th\xE0nh c\xF4ng", "\u0110\xE3 c\u1EADp nh\u1EADt ph\xF2ng h\u1ECDc!");
        },
        error: (err) => {
          this.isLoading.set(false);
          this.toastService.error("Th\u1EA5t b\u1EA1i", err.error?.message || "C\xF3 l\u1ED7i x\u1EA3y ra khi c\u1EADp nh\u1EADt!");
        }
      });
    } else {
      this.roomService.create(data).subscribe({
        next: () => {
          this.loadData();
          this.closeModal();
          this.toastService.success("Th\xE0nh c\xF4ng", "\u0110\xE3 t\u1EA1o ph\xF2ng h\u1ECDc m\u1EDBi!");
        },
        error: (err) => {
          this.isLoading.set(false);
          this.toastService.error("Th\u1EA5t b\u1EA1i", err.error?.message || "C\xF3 l\u1ED7i x\u1EA3y ra khi th\xEAm m\u1EDBi!");
        }
      });
    }
  }
  onDelete(id) {
    this.idToDelete.set(id);
    this.isDeleteModalOpen.set(true);
  }
  closeDeleteModal() {
    this.isDeleteModalOpen.set(false);
    this.idToDelete.set(null);
  }
  confirmDelete() {
    const id = this.idToDelete();
    if (id != null) {
      this.isLoading.set(true);
      this.roomService.delete(id).subscribe({
        next: () => {
          this.loadData();
          this.closeDeleteModal();
          this.toastService.success("\u0110\xE3 x\xF3a", "X\xF3a ph\xF2ng h\u1ECDc th\xE0nh c\xF4ng!");
        },
        error: (err) => {
          this.isLoading.set(false);
          this.closeDeleteModal();
          this.toastService.error("L\u1ED7i x\xF3a", err.error?.message || "Kh\xF4ng th\u1EC3 x\xF3a ph\xF2ng h\u1ECDc n\xE0y!");
        }
      });
    }
  }
  static \u0275fac = function RoomComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RoomComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RoomComponent, selectors: [["app-room"]], decls: 60, vars: 15, consts: [[1, "p-6", "space-y-6"], [1, "flex", "flex-col", "sm:flex-row", "justify-between", "items-start", "sm:items-center", "gap-4", "bg-white", "dark:bg-gray-800", "p-6", "rounded-2xl", "shadow-sm", "border", "border-gray-100", "dark:border-gray-700"], [1, "text-2xl", "font-bold", "text-gray-900", "dark:text-white"], [1, "text-sm", "text-gray-500", "dark:text-gray-400", "mt-1"], ["class", "inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-xl transition-colors shadow-sm shadow-blue-500/10", 3, "click", 4, "hasPermission"], [1, "bg-white", "dark:bg-gray-800", "rounded-2xl", "shadow-sm", "border", "border-gray-100", "dark:border-gray-700", "overflow-hidden"], [1, "p-4", "border-b", "border-gray-100", "dark:border-gray-700", "bg-gray-50/50", "dark:bg-gray-800/50", "flex", "flex-col", "sm:flex-row", "items-center", "justify-between", "gap-4"], [1, "relative", "w-full", "sm:w-72"], ["type", "text", "placeholder", "T\xECm t\xEAn ph\xF2ng h\u1ECDc...", 1, "w-full", "pl-10", "pr-4", "py-2", "bg-white", "dark:bg-gray-900", "border", "border-gray-200", "dark:border-gray-700", "rounded-xl", "text-sm", "text-gray-900", "dark:text-white", "placeholder-gray-400", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", 3, "formControl"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-gray-400", "absolute", "left-3", "top-3"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], [1, "w-full", "sm:w-48"], [1, "w-full", "px-3", "py-2", "bg-white", "dark:bg-gray-900", "border", "border-gray-200", "dark:border-gray-700", "rounded-xl", "text-sm", "text-gray-900", "dark:text-white", "focus:ring-2", "focus:ring-blue-500", 3, "formControl"], ["value", ""], ["value", "PHYSICAL"], ["value", "LMS"], [1, "overflow-x-auto"], [1, "w-full", "text-sm", "text-left", "text-gray-600", "dark:text-gray-300"], [1, "text-xs", "uppercase", "bg-gray-50", "dark:bg-gray-900/50", "text-gray-500", "dark:text-gray-400", "border-b", "border-gray-100", "dark:border-gray-700"], [1, "px-6", "py-3.5", "font-semibold"], ["class", "px-6 py-3.5 font-semibold text-right", 4, "hasAnyPermission"], [1, "divide-y", "divide-gray-100", "dark:divide-gray-700"], [1, "p-4", "border-t", "border-gray-100", "dark:border-gray-700", "flex", "flex-col", "sm:flex-row", "justify-between", "items-center", "gap-4", "text-xs", "text-gray-500"], [1, "font-medium", "text-gray-900", "dark:text-white"], [1, "flex", "items-center", "gap-1"], [1, "px-3", "py-1.5", "rounded-lg", "border", "border-gray-200", "dark:border-gray-700", "disabled:opacity-40", "hover:bg-gray-50", "dark:hover:bg-gray-700", "transition-colors", 3, "click", "disabled"], [1, "px-3", "py-1.5", "font-medium", "text-gray-900", "dark:text-white"], [1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "p-4", "bg-black/40", "backdrop-blur-sm"], [1, "inline-flex", "items-center", "gap-2", "px-4", "py-2.5", "bg-blue-600", "hover:bg-blue-700", "text-white", "text-sm", "font-medium", "rounded-xl", "transition-colors", "shadow-sm", "shadow-blue-500/10", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 4v16m8-8H4"], [1, "px-6", "py-3.5", "font-semibold", "text-right"], ["colspan", "5", 1, "px-6", "py-8", "text-center", "text-gray-400"], [1, "inline-flex", "items-center", "gap-2"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-5", "w-5", "text-blue-600"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"], [1, "hover:bg-gray-50/50", "dark:hover:bg-gray-700/50", "transition-colors"], [1, "px-6", "py-4", "font-medium", "text-gray-900", "dark:text-white"], [1, "px-6", "py-4"], [1, "inline-flex", "items-center", "px-2.5", "py-0.5", "rounded-full", "text-xs", "font-medium", "bg-blue-50", "text-blue-700", "dark:bg-blue-950/40", "dark:text-blue-400", "border", "border-blue-200"], [1, "inline-flex", "items-center", "px-2.5", "py-0.5", "rounded-full", "text-xs", "font-medium", "bg-purple-50", "text-purple-700", "dark:bg-purple-950/40", "dark:text-purple-400", "border", "border-purple-200"], [1, "px-6", "py-4", "font-semibold", "text-gray-900", "dark:text-white"], [1, "px-6", "py-4", "text-xs", "text-gray-400"], ["class", "px-6 py-4 text-right space-x-2", 4, "hasAnyPermission"], [1, "px-6", "py-4", "text-right", "space-x-2"], ["class", "px-3 py-1.5 text-xs font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-lg transition-colors", 3, "click", 4, "hasPermission"], ["class", "px-3 py-1.5 text-xs font-medium text-rose-600 hover:text-rose-700 hover:bg-rose-50 dark:hover:bg-rose-900/30 rounded-lg transition-colors", 3, "click", 4, "hasPermission"], [1, "px-3", "py-1.5", "text-xs", "font-medium", "text-blue-600", "hover:text-blue-700", "hover:bg-blue-50", "dark:hover:bg-blue-900/30", "rounded-lg", "transition-colors", 3, "click"], [1, "px-3", "py-1.5", "text-xs", "font-medium", "text-rose-600", "hover:text-rose-700", "hover:bg-rose-50", "dark:hover:bg-rose-900/30", "rounded-lg", "transition-colors", 3, "click"], [1, "bg-white", "dark:bg-gray-800", "rounded-2xl", "max-w-lg", "w-full", "p-6", "shadow-xl", "border", "border-gray-100", "dark:border-gray-700", "space-y-6"], [1, "flex", "justify-between", "items-center"], [1, "text-lg", "font-bold", "text-gray-900", "dark:text-white"], [1, "text-gray-400", "hover:text-gray-600", "dark:hover:text-gray-300", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "space-y-4", 3, "ngSubmit", "formGroup"], [1, "block", "text-xs", "font-semibold", "text-gray-700", "dark:text-gray-300", "mb-1"], ["formControlName", "name", "type", "text", "placeholder", "VD: Ph\xF2ng 101 - A, Room Lab 2, Google Meet LMS", 1, "w-full", "px-3", "py-2", "bg-white", "dark:bg-gray-900", "border", "border-gray-200", "dark:border-gray-700", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-500"], ["formControlName", "roomType", 1, "w-full", "px-3", "py-2", "bg-white", "dark:bg-gray-900", "border", "border-gray-200", "dark:border-gray-700", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-500"], ["formControlName", "capacity", "type", "number", 1, "w-full", "px-3", "py-2", "bg-white", "dark:bg-gray-900", "border", "border-gray-200", "dark:border-gray-700", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-500"], [1, "flex", "justify-end", "gap-3", "pt-4", "border-t", "border-gray-100", "dark:border-gray-700"], ["type", "button", 1, "px-4", "py-2", "text-xs", "font-medium", "text-gray-600", "dark:text-gray-300", "hover:bg-gray-100", "dark:hover:bg-gray-700", "rounded-xl", 3, "click"], ["type", "submit", 1, "px-4", "py-2", "text-xs", "font-medium", "bg-blue-600", "hover:bg-blue-700", "text-white", "rounded-xl", "disabled:opacity-50", 3, "disabled"], [1, "bg-white", "dark:bg-gray-800", "rounded-2xl", "max-w-sm", "w-full", "p-6", "shadow-xl", "border", "border-gray-100", "dark:border-gray-700", "space-y-4"], [1, "text-base", "font-bold", "text-gray-900", "dark:text-white"], [1, "text-xs", "text-gray-500"], [1, "flex", "justify-end", "gap-3", "pt-2"], [1, "px-4", "py-2", "text-xs", "font-medium", "text-gray-600", "dark:text-gray-300", "hover:bg-gray-100", "dark:hover:bg-gray-700", "rounded-xl", 3, "click"], [1, "px-4", "py-2", "text-xs", "font-medium", "bg-rose-600", "hover:bg-rose-700", "text-white", "rounded-xl", "disabled:opacity-50", 3, "click", "disabled"]], template: function RoomComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Qu\u1EA3n l\xFD Ph\xF2ng h\u1ECDc (Rooms)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Danh s\xE1ch ph\xF2ng h\u1ECDc tr\u1EF1c ti\u1EBFp (Physical) v\xE0 ph\xF2ng h\u1ECDc tr\u1EF1c tuy\u1EBFn (LMS)");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(7, RoomComponent_button_7_Template, 4, 0, "button", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 5)(9, "div", 6)(10, "div", 7);
      \u0275\u0275element(11, "input", 8);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(12, "svg", 9);
      \u0275\u0275element(13, "path", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(14, "div", 11)(15, "select", 12)(16, "option", 13);
      \u0275\u0275text(17, "T\u1EA5t c\u1EA3 lo\u1EA1i ph\xF2ng");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "option", 14);
      \u0275\u0275text(19, "Ph\xF2ng tr\u1EF1c ti\u1EBFp (PHYSICAL)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "option", 15);
      \u0275\u0275text(21, "Ph\xF2ng online (LMS)");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(22, "div", 16)(23, "table", 17)(24, "thead", 18)(25, "tr")(26, "th", 19);
      \u0275\u0275text(27, "T\xEAn ph\xF2ng");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "th", 19);
      \u0275\u0275text(29, "Lo\u1EA1i ph\xF2ng");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "th", 19);
      \u0275\u0275text(31, "S\u1EE9c ch\u1EE9a (H\u1ECDc vi\xEAn)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "th", 19);
      \u0275\u0275text(33, "Ng\xE0y t\u1EA1o");
      \u0275\u0275elementEnd();
      \u0275\u0275template(34, RoomComponent_th_34_Template, 2, 0, "th", 20);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "tbody", 21);
      \u0275\u0275conditionalCreate(36, RoomComponent_Conditional_36_Template, 8, 0, "tr")(37, RoomComponent_Conditional_37_Template, 3, 0, "tr")(38, RoomComponent_Conditional_38_Template, 2, 0);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(39, "div", 22)(40, "div");
      \u0275\u0275text(41, "Hi\u1EC3n th\u1ECB t\u1EEB ");
      \u0275\u0275elementStart(42, "span", 23);
      \u0275\u0275text(43);
      \u0275\u0275elementEnd();
      \u0275\u0275text(44, " \u0111\u1EBFn ");
      \u0275\u0275elementStart(45, "span", 23);
      \u0275\u0275text(46);
      \u0275\u0275elementEnd();
      \u0275\u0275text(47, " trong t\u1ED5ng s\u1ED1 ");
      \u0275\u0275elementStart(48, "span", 23);
      \u0275\u0275text(49);
      \u0275\u0275elementEnd();
      \u0275\u0275text(50, " m\u1EE5c");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "div", 24)(52, "button", 25);
      \u0275\u0275listener("click", function RoomComponent_Template_button_click_52_listener() {
        return ctx.changePage(ctx.currentPage() - 1);
      });
      \u0275\u0275text(53, "Tr\u01B0\u1EDBc");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "span", 26);
      \u0275\u0275text(55);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "button", 25);
      \u0275\u0275listener("click", function RoomComponent_Template_button_click_56_listener() {
        return ctx.changePage(ctx.currentPage() + 1);
      });
      \u0275\u0275text(57, "Sau");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(58, RoomComponent_Conditional_58_Template, 30, 3, "div", 27);
      \u0275\u0275conditionalCreate(59, RoomComponent_Conditional_59_Template, 11, 1, "div", 27);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("hasPermission", "ROOM_CREATE");
      \u0275\u0275advance(4);
      \u0275\u0275property("formControl", ctx.searchControl);
      \u0275\u0275advance(4);
      \u0275\u0275property("formControl", ctx.typeFilter);
      \u0275\u0275advance(19);
      \u0275\u0275property("hasAnyPermission", \u0275\u0275pureFunction0(14, _c05));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isLoading() ? 36 : ctx.rooms().length === 0 ? 37 : 38);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.startIndex());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.endIndex());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.totalElements());
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", ctx.currentPage() <= 1);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2("Trang ", ctx.currentPage(), " / ", ctx.totalPages() || 1);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.currentPage() >= ctx.totalPages());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isModalOpen() ? 58 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isDeleteModalOpen() ? 59 : -1);
    }
  }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormControlDirective, FormGroupDirective, FormControlName, HasPermissionDirective, DatePipe], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RoomComponent, [{
    type: Component,
    args: [{ selector: "app-room", imports: [CommonModule, ReactiveFormsModule, HasPermissionDirective], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="p-6 space-y-6">\r
  <!-- Header section -->\r
  <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">\r
    <div>\r
      <h1 class="text-2xl font-bold text-gray-900 dark:text-white">Qu\u1EA3n l\xFD Ph\xF2ng h\u1ECDc (Rooms)</h1>\r
      <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">Danh s\xE1ch ph\xF2ng h\u1ECDc tr\u1EF1c ti\u1EBFp (Physical) v\xE0 ph\xF2ng h\u1ECDc tr\u1EF1c tuy\u1EBFn (LMS)</p>\r
    </div>\r
    <button *hasPermission="'ROOM_CREATE'" (click)="openModal()" class="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-xl transition-colors shadow-sm shadow-blue-500/10">\r
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>\r
      </svg>\r
      Th\xEAm ph\xF2ng h\u1ECDc m\u1EDBi\r
    </button>\r
  </div>\r
\r
  <!-- Table Container -->\r
  <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">\r
    <!-- Search & Filter bar -->\r
    <div class="p-4 border-b border-gray-100 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">\r
      <div class="relative w-full sm:w-72">\r
        <input [formControl]="searchControl" type="text" placeholder="T\xECm t\xEAn ph\xF2ng h\u1ECDc..." class="w-full pl-10 pr-4 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500">\r
        <svg class="w-4 h-4 text-gray-400 absolute left-3 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>\r
        </svg>\r
      </div>\r
\r
      <div class="w-full sm:w-48">\r
        <select [formControl]="typeFilter" class="w-full px-3 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500">\r
          <option value="">T\u1EA5t c\u1EA3 lo\u1EA1i ph\xF2ng</option>\r
          <option value="PHYSICAL">Ph\xF2ng tr\u1EF1c ti\u1EBFp (PHYSICAL)</option>\r
          <option value="LMS">Ph\xF2ng online (LMS)</option>\r
        </select>\r
      </div>\r
    </div>\r
\r
    <!-- Table content -->\r
    <div class="overflow-x-auto">\r
      <table class="w-full text-sm text-left text-gray-600 dark:text-gray-300">\r
        <thead class="text-xs uppercase bg-gray-50 dark:bg-gray-900/50 text-gray-500 dark:text-gray-400 border-b border-gray-100 dark:border-gray-700">\r
          <tr>\r
            <th class="px-6 py-3.5 font-semibold">T\xEAn ph\xF2ng</th>\r
            <th class="px-6 py-3.5 font-semibold">Lo\u1EA1i ph\xF2ng</th>\r
            <th class="px-6 py-3.5 font-semibold">S\u1EE9c ch\u1EE9a (H\u1ECDc vi\xEAn)</th>\r
            <th class="px-6 py-3.5 font-semibold">Ng\xE0y t\u1EA1o</th>\r
            <th *hasAnyPermission="['ROOM_UPDATE', 'ROOM_DELETE']" class="px-6 py-3.5 font-semibold text-right">Thao t\xE1c</th>\r
          </tr>\r
        </thead>\r
        <tbody class="divide-y divide-gray-100 dark:divide-gray-700">\r
          @if (isLoading()) {\r
            <tr>\r
              <td colspan="5" class="px-6 py-8 text-center text-gray-400">\r
                <div class="inline-flex items-center gap-2">\r
                  <svg class="animate-spin h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24">\r
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>\r
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>\r
                  </svg>\r
                  <span>\u0110ang t\u1EA3i d\u1EEF li\u1EC7u...</span>\r
                </div>\r
              </td>\r
            </tr>\r
          } @else if (rooms().length === 0) {\r
            <tr>\r
              <td colspan="5" class="px-6 py-8 text-center text-gray-400">Ch\u01B0a c\xF3 ph\xF2ng h\u1ECDc n\xE0o.</td>\r
            </tr>\r
          } @else {\r
            @for (room of rooms(); track room.id) {\r
              <tr class="hover:bg-gray-50/50 dark:hover:bg-gray-700/50 transition-colors">\r
                <td class="px-6 py-4 font-medium text-gray-900 dark:text-white">{{ room.name }}</td>\r
                <td class="px-6 py-4">\r
                  @if (room.roomType === 'PHYSICAL') {\r
                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-400 border border-blue-200">Tr\u1EF1c ti\u1EBFp (Physical)</span>\r
                  } @else {\r
                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-50 text-purple-700 dark:bg-purple-950/40 dark:text-purple-400 border border-purple-200">Online (LMS)</span>\r
                  }\r
                </td>\r
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">{{ room.capacity || 30 }} h\u1ECDc vi\xEAn</td>\r
                <td class="px-6 py-4 text-xs text-gray-400">{{ room.createdAt | date:'dd/MM/yyyy' }}</td>\r
                <td *hasAnyPermission="['ROOM_UPDATE', 'ROOM_DELETE']" class="px-6 py-4 text-right space-x-2">\r
                  <button *hasPermission="'ROOM_UPDATE'" (click)="openModal(room)" class="px-3 py-1.5 text-xs font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-lg transition-colors">S\u1EEDa</button>\r
                  <button *hasPermission="'ROOM_DELETE'" (click)="onDelete(room.id)" class="px-3 py-1.5 text-xs font-medium text-rose-600 hover:text-rose-700 hover:bg-rose-50 dark:hover:bg-rose-900/30 rounded-lg transition-colors">X\xF3a</button>\r
                </td>\r
              </tr>\r
            }\r
          }\r
        </tbody>\r
      </table>\r
    </div>\r
\r
    <!-- Pagination -->\r
    <div class="p-4 border-t border-gray-100 dark:border-gray-700 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">\r
      <div>Hi\u1EC3n th\u1ECB t\u1EEB <span class="font-medium text-gray-900 dark:text-white">{{ startIndex() }}</span> \u0111\u1EBFn <span class="font-medium text-gray-900 dark:text-white">{{ endIndex() }}</span> trong t\u1ED5ng s\u1ED1 <span class="font-medium text-gray-900 dark:text-white">{{ totalElements() }}</span> m\u1EE5c</div>\r
      <div class="flex items-center gap-1">\r
        <button (click)="changePage(currentPage() - 1)" [disabled]="currentPage() <= 1" class="px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 disabled:opacity-40 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">Tr\u01B0\u1EDBc</button>\r
        <span class="px-3 py-1.5 font-medium text-gray-900 dark:text-white">Trang {{ currentPage() }} / {{ totalPages() || 1 }}</span>\r
        <button (click)="changePage(currentPage() + 1)" [disabled]="currentPage() >= totalPages()" class="px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 disabled:opacity-40 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">Sau</button>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Form Modal -->\r
  @if (isModalOpen()) {\r
    <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">\r
      <div class="bg-white dark:bg-gray-800 rounded-2xl max-w-lg w-full p-6 shadow-xl border border-gray-100 dark:border-gray-700 space-y-6">\r
        <div class="flex justify-between items-center">\r
          <h3 class="text-lg font-bold text-gray-900 dark:text-white">{{ isEditing() ? 'Ch\u1EC9nh s\u1EEDa ph\xF2ng h\u1ECDc' : 'Th\xEAm ph\xF2ng h\u1ECDc m\u1EDBi' }}</h3>\r
          <button (click)="closeModal()" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">\r
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>\r
          </button>\r
        </div>\r
\r
        <form [formGroup]="roomForm" (ngSubmit)="onSubmit()" class="space-y-4">\r
          <div>\r
            <label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">T\xEAn ph\xF2ng h\u1ECDc *</label>\r
            <input formControlName="name" type="text" placeholder="VD: Ph\xF2ng 101 - A, Room Lab 2, Google Meet LMS" class="w-full px-3 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:ring-2 focus:ring-blue-500">\r
          </div>\r
          <div>\r
            <label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">Lo\u1EA1i ph\xF2ng *</label>\r
            <select formControlName="roomType" class="w-full px-3 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:ring-2 focus:ring-blue-500">\r
              <option value="PHYSICAL">PHYSICAL (Ph\xF2ng h\u1ECDc tr\u1EF1c ti\u1EBFp t\u1EA1i trung t\xE2m)</option>\r
              <option value="LMS">LMS (Ph\xF2ng h\u1ECDc tr\u1EF1c tuy\u1EBFn / Tr\u1EF1c tuy\u1EBFn LMS)</option>\r
            </select>\r
          </div>\r
          <div>\r
            <label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">S\u1EE9c ch\u1EE9a t\u1ED1i \u0111a (H\u1ECDc vi\xEAn) *</label>\r
            <input formControlName="capacity" type="number" class="w-full px-3 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:ring-2 focus:ring-blue-500">\r
          </div>\r
\r
          <div class="flex justify-end gap-3 pt-4 border-t border-gray-100 dark:border-gray-700">\r
            <button type="button" (click)="closeModal()" class="px-4 py-2 text-xs font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl">H\u1EE7y</button>\r
            <button type="submit" [disabled]="roomForm.invalid || isLoading()" class="px-4 py-2 text-xs font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-xl disabled:opacity-50">L\u01B0u</button>\r
          </div>\r
        </form>\r
      </div>\r
    </div>\r
  }\r
\r
  <!-- Delete Confirmation Modal -->\r
  @if (isDeleteModalOpen()) {\r
    <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">\r
      <div class="bg-white dark:bg-gray-800 rounded-2xl max-w-sm w-full p-6 shadow-xl border border-gray-100 dark:border-gray-700 space-y-4">\r
        <h3 class="text-base font-bold text-gray-900 dark:text-white">X\xE1c nh\u1EADn x\xF3a ph\xF2ng h\u1ECDc</h3>\r
        <p class="text-xs text-gray-500">B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a ph\xF2ng h\u1ECDc n\xE0y? Thao t\xE1c n\xE0y kh\xF4ng th\u1EC3 ho\xE0n t\xE1c.</p>\r
        <div class="flex justify-end gap-3 pt-2">\r
          <button (click)="closeDeleteModal()" class="px-4 py-2 text-xs font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl">H\u1EE7y</button>\r
          <button (click)="confirmDelete()" [disabled]="isLoading()" class="px-4 py-2 text-xs font-medium bg-rose-600 hover:bg-rose-700 text-white rounded-xl disabled:opacity-50">X\xF3a</button>\r
        </div>\r
      </div>\r
    </div>\r
  }\r
</div>\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RoomComponent, { className: "RoomComponent", filePath: "src/app/features/admin/pages/room/room.component.ts", lineNumber: 17 });
})();

// src/app/features/admin/pages/teaching-assignment/teaching-assignment.component.ts
var _c06 = () => ["ASSIGNMENT_UPDATE", "ASSIGNMENT_DELETE"];
var _forTrack06 = ($index, $item) => $item.id;
function TeachingAssignmentComponent_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275listener("click", function TeachingAssignmentComponent_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 24);
    \u0275\u0275element(2, "path", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Ph\xE2n c\xF4ng gi\xE1o vi\xEAn ");
    \u0275\u0275elementEnd();
  }
}
function TeachingAssignmentComponent_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    \u0275\u0275property("value", c_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", c_r3.code, " - ", c_r3.name);
  }
}
function TeachingAssignmentComponent_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r4 = ctx.$implicit;
    \u0275\u0275property("value", s_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", s_r4.staffCode, " - ", s_r4.fullName);
  }
}
function TeachingAssignmentComponent_th_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 26);
    \u0275\u0275text(1, "Thao t\xE1c");
    \u0275\u0275elementEnd();
  }
}
function TeachingAssignmentComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 27)(2, "div", 28);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 29);
    \u0275\u0275element(4, "circle", 30)(5, "path", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7, "\u0110ang t\u1EA3i d\u1EEF li\u1EC7u...");
    \u0275\u0275elementEnd()()()();
  }
}
function TeachingAssignmentComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 27);
    \u0275\u0275text(2, "Ch\u01B0a c\xF3 b\u1EA3n ghi ph\xE2n c\xF4ng n\xE0o.");
    \u0275\u0275elementEnd()();
  }
}
function TeachingAssignmentComponent_Conditional_41_For_1_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275text(1, "\u0110ang ph\xE2n c\xF4ng");
    \u0275\u0275elementEnd();
  }
}
function TeachingAssignmentComponent_Conditional_41_For_1_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 40);
    \u0275\u0275text(1, "\u0110\xE3 k\u1EBFt th\xFAc");
    \u0275\u0275elementEnd();
  }
}
function TeachingAssignmentComponent_Conditional_41_For_1_td_23_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 45);
    \u0275\u0275listener("click", function TeachingAssignmentComponent_Conditional_41_For_1_td_23_button_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const item_r6 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openModal(item_r6));
    });
    \u0275\u0275text(1, "S\u1EEDa");
    \u0275\u0275elementEnd();
  }
}
function TeachingAssignmentComponent_Conditional_41_For_1_td_23_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 46);
    \u0275\u0275listener("click", function TeachingAssignmentComponent_Conditional_41_For_1_td_23_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const item_r6 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDelete(item_r6.id));
    });
    \u0275\u0275text(1, "X\xF3a");
    \u0275\u0275elementEnd();
  }
}
function TeachingAssignmentComponent_Conditional_41_For_1_td_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 42);
    \u0275\u0275template(1, TeachingAssignmentComponent_Conditional_41_For_1_td_23_button_1_Template, 2, 0, "button", 43)(2, TeachingAssignmentComponent_Conditional_41_For_1_td_23_button_2_Template, 2, 0, "button", 44);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("hasPermission", "ASSIGNMENT_UPDATE");
    \u0275\u0275advance();
    \u0275\u0275property("hasPermission", "ASSIGNMENT_DELETE");
  }
}
function TeachingAssignmentComponent_Conditional_41_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 32)(1, "td", 33)(2, "span", 34);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 33)(7, "span", 35);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td", 36)(12, "span", 37);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td", 36);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 38);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td", 36);
    \u0275\u0275conditionalCreate(21, TeachingAssignmentComponent_Conditional_41_For_1_Conditional_21_Template, 2, 0, "span", 39)(22, TeachingAssignmentComponent_Conditional_41_For_1_Conditional_22_Template, 2, 0, "span", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275template(23, TeachingAssignmentComponent_Conditional_41_For_1_td_23_Template, 3, 2, "td", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r6.classCode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r6.className);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r6.staffCode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r6.teacherName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.roleLabels[item_r6.role] || item_r6.role, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(16, 9, item_r6.assignedDate, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r6.endDate ? \u0275\u0275pipeBind2(19, 12, item_r6.endDate, "dd/MM/yyyy") : "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(item_r6.status === "ACTIVE" ? 21 : 22);
    \u0275\u0275advance(2);
    \u0275\u0275property("hasAnyPermission", \u0275\u0275pureFunction0(15, _c06));
  }
}
function TeachingAssignmentComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, TeachingAssignmentComponent_Conditional_41_For_1_Template, 24, 16, "tr", 32, _forTrack06);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r1.assignments());
  }
}
function TeachingAssignmentComponent_Conditional_61_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r9 = ctx.$implicit;
    \u0275\u0275property("value", c_r9.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", c_r9.code, " - ", c_r9.name);
  }
}
function TeachingAssignmentComponent_Conditional_61_For_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r10 = ctx.$implicit;
    \u0275\u0275property("value", s_r10.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3("", s_r10.staffCode, " - ", s_r10.fullName, " (", s_r10.staffType, ")");
  }
}
function TeachingAssignmentComponent_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 47)(2, "div", 48)(3, "h3", 49);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 50);
    \u0275\u0275listener("click", function TeachingAssignmentComponent_Conditional_61_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 24);
    \u0275\u0275element(7, "path", 51);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "form", 52);
    \u0275\u0275listener("ngSubmit", function TeachingAssignmentComponent_Conditional_61_Template_form_ngSubmit_8_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(9, "div")(10, "label", 53);
    \u0275\u0275text(11, "L\u1EDBp h\u1ECDc *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "select", 54)(13, "option", 9);
    \u0275\u0275text(14, "-- Ch\u1ECDn l\u1EDBp h\u1ECDc --");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(15, TeachingAssignmentComponent_Conditional_61_For_16_Template, 2, 3, "option", 10, _forTrack06);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div")(18, "label", 53);
    \u0275\u0275text(19, "Gi\xE1o vi\xEAn / Tr\u1EE3 gi\u1EA3ng / Tutor *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "select", 55)(21, "option", 9);
    \u0275\u0275text(22, "-- Ch\u1ECDn nh\xE2n s\u1EF1 --");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(23, TeachingAssignmentComponent_Conditional_61_For_24_Template, 2, 4, "option", 10, _forTrack06);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div")(26, "label", 53);
    \u0275\u0275text(27, "Vai tr\xF2 ph\xE2n c\xF4ng *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "select", 56)(29, "option", 57);
    \u0275\u0275text(30, "MAIN_TEACHER (Gi\xE1o vi\xEAn ch\xEDnh)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "option", 58);
    \u0275\u0275text(32, "ASSISTANT_TEACHER (Tr\u1EE3 gi\u1EA3ng)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "option", 59);
    \u0275\u0275text(34, "TUTOR (Tutor)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "div", 60)(36, "div")(37, "label", 53);
    \u0275\u0275text(38, "Ng\xE0y b\u1EAFt \u0111\u1EA7u *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(39, "input", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div")(41, "label", 53);
    \u0275\u0275text(42, "Ng\xE0y k\u1EBFt th\xFAc");
    \u0275\u0275elementEnd();
    \u0275\u0275element(43, "input", 62);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div")(45, "label", 53);
    \u0275\u0275text(46, "Tr\u1EA1ng th\xE1i *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "select", 63)(48, "option", 64);
    \u0275\u0275text(49, "ACTIVE (\u0110ang l\xE0m vi\u1EC7c)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "option", 65);
    \u0275\u0275text(51, "INACTIVE (T\u1EA1m ng\u01B0ng/K\u1EBFt th\xFAc)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(52, "div", 66)(53, "button", 67);
    \u0275\u0275listener("click", function TeachingAssignmentComponent_Conditional_61_Template_button_click_53_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275text(54, "H\u1EE7y");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "button", 68);
    \u0275\u0275text(56, "L\u01B0u");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.isEditing() ? "Ch\u1EC9nh s\u1EEDa ph\xE2n c\xF4ng" : "Th\xEAm ph\xE2n c\xF4ng m\u1EDBi");
    \u0275\u0275advance(4);
    \u0275\u0275property("formGroup", ctx_r1.assignmentForm);
    \u0275\u0275advance(7);
    \u0275\u0275repeater(ctx_r1.classes());
    \u0275\u0275advance(8);
    \u0275\u0275repeater(ctx_r1.staffs());
    \u0275\u0275advance(32);
    \u0275\u0275property("disabled", ctx_r1.assignmentForm.invalid || ctx_r1.isLoading());
  }
}
function TeachingAssignmentComponent_Conditional_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 69)(2, "h3", 70);
    \u0275\u0275text(3, "X\xE1c nh\u1EADn x\xF3a ph\xE2n c\xF4ng");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 71);
    \u0275\u0275text(5, "B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a b\u1EA3n ghi ph\xE2n c\xF4ng n\xE0y?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 72)(7, "button", 73);
    \u0275\u0275listener("click", function TeachingAssignmentComponent_Conditional_62_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDeleteModal());
    });
    \u0275\u0275text(8, "H\u1EE7y");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 74);
    \u0275\u0275listener("click", function TeachingAssignmentComponent_Conditional_62_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmDelete());
    });
    \u0275\u0275text(10, "X\xF3a");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275property("disabled", ctx_r1.isLoading());
  }
}
var TeachingAssignmentComponent = class _TeachingAssignmentComponent {
  assignmentService = inject(TeachingAssignmentService);
  staffService = inject(StaffService);
  classService = inject(ClassService);
  fb = inject(FormBuilder);
  toastService = inject(ToastService);
  assignments = signal([], ...ngDevMode ? [{ debugName: "assignments" }] : (
    /* istanbul ignore next */
    []
  ));
  staffs = signal([], ...ngDevMode ? [{ debugName: "staffs" }] : (
    /* istanbul ignore next */
    []
  ));
  classes = signal([], ...ngDevMode ? [{ debugName: "classes" }] : (
    /* istanbul ignore next */
    []
  ));
  totalElements = signal(0, ...ngDevMode ? [{ debugName: "totalElements" }] : (
    /* istanbul ignore next */
    []
  ));
  currentPage = signal(1, ...ngDevMode ? [{ debugName: "currentPage" }] : (
    /* istanbul ignore next */
    []
  ));
  pageSize = signal(10, ...ngDevMode ? [{ debugName: "pageSize" }] : (
    /* istanbul ignore next */
    []
  ));
  isLoading = signal(false, ...ngDevMode ? [{ debugName: "isLoading" }] : (
    /* istanbul ignore next */
    []
  ));
  classFilterControl = new FormControl("");
  staffFilterControl = new FormControl("");
  isModalOpen = signal(false, ...ngDevMode ? [{ debugName: "isModalOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  isEditing = signal(false, ...ngDevMode ? [{ debugName: "isEditing" }] : (
    /* istanbul ignore next */
    []
  ));
  currentId = signal(null, ...ngDevMode ? [{ debugName: "currentId" }] : (
    /* istanbul ignore next */
    []
  ));
  assignmentForm;
  isDeleteModalOpen = signal(false, ...ngDevMode ? [{ debugName: "isDeleteModalOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  idToDelete = signal(null, ...ngDevMode ? [{ debugName: "idToDelete" }] : (
    /* istanbul ignore next */
    []
  ));
  roleLabels = {
    MAIN_TEACHER: "Gi\xE1o vi\xEAn ch\xEDnh",
    ASSISTANT_TEACHER: "Tr\u1EE3 gi\u1EA3ng l\u1EDBp",
    TUTOR: "Tutor k\xE8m c\u1EB7p"
  };
  totalPages = computed(() => Math.ceil(this.totalElements() / this.pageSize()), ...ngDevMode ? [{ debugName: "totalPages" }] : (
    /* istanbul ignore next */
    []
  ));
  startIndex = computed(() => this.totalElements() === 0 ? 0 : (this.currentPage() - 1) * this.pageSize() + 1, ...ngDevMode ? [{ debugName: "startIndex" }] : (
    /* istanbul ignore next */
    []
  ));
  endIndex = computed(() => Math.min(this.currentPage() * this.pageSize(), this.totalElements()), ...ngDevMode ? [{ debugName: "endIndex" }] : (
    /* istanbul ignore next */
    []
  ));
  ngOnInit() {
    this.initForm();
    this.loadDropdowns();
    this.setupFilters();
    this.loadData();
  }
  initForm() {
    this.assignmentForm = this.fb.group({
      classId: ["", Validators.required],
      staffId: ["", Validators.required],
      role: ["MAIN_TEACHER", Validators.required],
      assignedDate: [(/* @__PURE__ */ new Date()).toISOString().substring(0, 10), Validators.required],
      endDate: [""],
      status: ["ACTIVE", Validators.required]
    });
  }
  setupFilters() {
    this.classFilterControl.valueChanges.subscribe(() => {
      this.currentPage.set(1);
      this.loadData();
    });
    this.staffFilterControl.valueChanges.subscribe(() => {
      this.currentPage.set(1);
      this.loadData();
    });
  }
  loadDropdowns() {
    this.classService.getAll(0, 100).subscribe({
      next: (res) => this.classes.set(res.content || [])
    });
    this.staffService.getAll(void 0, 0, 100).subscribe({
      next: (res) => this.staffs.set(res.content || [])
    });
  }
  loadData() {
    this.isLoading.set(true);
    const classId = this.classFilterControl.value || void 0;
    const staffId = this.staffFilterControl.value || void 0;
    this.assignmentService.getAll(this.currentPage() - 1, this.pageSize(), classId, staffId).subscribe({
      next: (res) => {
        this.assignments.set(res.content || []);
        this.totalElements.set(res.totalElements || 0);
        this.isLoading.set(false);
      },
      error: () => this.isLoading.set(false)
    });
  }
  changePage(page) {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage.set(page);
      this.loadData();
    }
  }
  openModal(item) {
    if (item) {
      this.isEditing.set(true);
      this.currentId.set(item.id);
      this.assignmentForm.patchValue({
        classId: item.classId,
        staffId: item.staffId,
        role: item.role,
        assignedDate: item.assignedDate,
        endDate: item.endDate || "",
        status: item.status
      });
    } else {
      this.isEditing.set(false);
      this.currentId.set(null);
      this.assignmentForm.reset({
        classId: "",
        staffId: "",
        role: "MAIN_TEACHER",
        assignedDate: (/* @__PURE__ */ new Date()).toISOString().substring(0, 10),
        endDate: "",
        status: "ACTIVE"
      });
    }
    this.isModalOpen.set(true);
  }
  closeModal() {
    this.isModalOpen.set(false);
    this.currentId.set(null);
  }
  onSubmit() {
    if (this.assignmentForm.invalid)
      return;
    this.isLoading.set(true);
    const data = this.assignmentForm.value;
    if (data.classId)
      data.classId = Number(data.classId);
    if (data.staffId)
      data.staffId = Number(data.staffId);
    if (this.isEditing() && this.currentId() != null) {
      this.assignmentService.update(this.currentId(), data).subscribe({
        next: () => {
          this.loadData();
          this.closeModal();
          this.toastService.success("Th\xE0nh c\xF4ng", "\u0110\xE3 c\u1EADp nh\u1EADt ph\xE2n c\xF4ng gi\u1EA3ng d\u1EA1y!");
        },
        error: (err) => {
          this.isLoading.set(false);
          this.toastService.error("Th\u1EA5t b\u1EA1i", err.error?.message || "C\xF3 l\u1ED7i x\u1EA3y ra khi c\u1EADp nh\u1EADt!");
        }
      });
    } else {
      this.assignmentService.create(data).subscribe({
        next: () => {
          this.loadData();
          this.closeModal();
          this.toastService.success("Th\xE0nh c\xF4ng", "\u0110\xE3 ph\xE2n c\xF4ng gi\xE1o vi\xEAn m\u1EDBi!");
        },
        error: (err) => {
          this.isLoading.set(false);
          this.toastService.error("Th\u1EA5t b\u1EA1i", err.error?.message || "C\xF3 l\u1ED7i x\u1EA3y ra khi th\xEAm m\u1EDBi!");
        }
      });
    }
  }
  onDelete(id) {
    this.idToDelete.set(id);
    this.isDeleteModalOpen.set(true);
  }
  closeDeleteModal() {
    this.isDeleteModalOpen.set(false);
    this.idToDelete.set(null);
  }
  confirmDelete() {
    const id = this.idToDelete();
    if (id != null) {
      this.isLoading.set(true);
      this.assignmentService.delete(id).subscribe({
        next: () => {
          this.loadData();
          this.closeDeleteModal();
          this.toastService.success("\u0110\xE3 x\xF3a", "X\xF3a ph\xE2n c\xF4ng th\xE0nh c\xF4ng!");
        },
        error: (err) => {
          this.isLoading.set(false);
          this.closeDeleteModal();
          this.toastService.error("L\u1ED7i x\xF3a", err.error?.message || "Kh\xF4ng th\u1EC3 x\xF3a ph\xE2n c\xF4ng n\xE0y!");
        }
      });
    }
  }
  static \u0275fac = function TeachingAssignmentComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TeachingAssignmentComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TeachingAssignmentComponent, selectors: [["app-teaching-assignment"]], decls: 63, vars: 15, consts: [[1, "p-6", "space-y-6"], [1, "flex", "flex-col", "sm:flex-row", "justify-between", "items-start", "sm:items-center", "gap-4", "bg-white", "dark:bg-gray-800", "p-6", "rounded-2xl", "shadow-sm", "border", "border-gray-100", "dark:border-gray-700"], [1, "text-2xl", "font-bold", "text-gray-900", "dark:text-white"], [1, "text-sm", "text-gray-500", "dark:text-gray-400", "mt-1"], ["class", "inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-xl transition-colors shadow-sm shadow-blue-500/10", 3, "click", 4, "hasPermission"], [1, "bg-white", "dark:bg-gray-800", "rounded-2xl", "shadow-sm", "border", "border-gray-100", "dark:border-gray-700", "overflow-hidden"], [1, "p-4", "border-b", "border-gray-100", "dark:border-gray-700", "bg-gray-50/50", "dark:bg-gray-800/50", "flex", "flex-col", "sm:flex-row", "items-center", "justify-between", "gap-4"], [1, "flex", "flex-wrap", "items-center", "gap-3", "w-full"], [1, "w-full", "sm:w-64", "px-3", "py-2", "bg-white", "dark:bg-gray-900", "border", "border-gray-200", "dark:border-gray-700", "rounded-xl", "text-sm", "text-gray-900", "dark:text-white", "focus:ring-2", "focus:ring-blue-500", 3, "formControl"], ["value", ""], [3, "value"], [1, "overflow-x-auto"], [1, "w-full", "text-sm", "text-left", "text-gray-600", "dark:text-gray-300"], [1, "text-xs", "uppercase", "bg-gray-50", "dark:bg-gray-900/50", "text-gray-500", "dark:text-gray-400", "border-b", "border-gray-100", "dark:border-gray-700"], [1, "px-6", "py-3.5", "font-semibold"], ["class", "px-6 py-3.5 font-semibold text-right", 4, "hasAnyPermission"], [1, "divide-y", "divide-gray-100", "dark:divide-gray-700"], [1, "p-4", "border-t", "border-gray-100", "dark:border-gray-700", "flex", "flex-col", "sm:flex-row", "justify-between", "items-center", "gap-4", "text-xs", "text-gray-500"], [1, "font-medium", "text-gray-900", "dark:text-white"], [1, "flex", "items-center", "gap-1"], [1, "px-3", "py-1.5", "rounded-lg", "border", "border-gray-200", "dark:border-gray-700", "disabled:opacity-40", "hover:bg-gray-50", "dark:hover:bg-gray-700", "transition-colors", 3, "click", "disabled"], [1, "px-3", "py-1.5", "font-medium", "text-gray-900", "dark:text-white"], [1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "p-4", "bg-black/40", "backdrop-blur-sm"], [1, "inline-flex", "items-center", "gap-2", "px-4", "py-2.5", "bg-blue-600", "hover:bg-blue-700", "text-white", "text-sm", "font-medium", "rounded-xl", "transition-colors", "shadow-sm", "shadow-blue-500/10", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 4v16m8-8H4"], [1, "px-6", "py-3.5", "font-semibold", "text-right"], ["colspan", "7", 1, "px-6", "py-8", "text-center", "text-gray-400"], [1, "inline-flex", "items-center", "gap-2"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-5", "w-5", "text-blue-600"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"], [1, "hover:bg-gray-50/50", "dark:hover:bg-gray-700/50", "transition-colors"], [1, "px-6", "py-4", "font-medium", "text-gray-900", "dark:text-white"], [1, "font-mono", "text-blue-600", "dark:text-blue-400", "mr-2"], [1, "font-mono", "text-purple-600", "dark:text-purple-400", "mr-2"], [1, "px-6", "py-4"], [1, "inline-flex", "items-center", "px-2.5", "py-0.5", "rounded-full", "text-xs", "font-medium", "bg-blue-50", "text-blue-700", "dark:bg-blue-950/40", "dark:text-blue-400", "border", "border-blue-200"], [1, "px-6", "py-4", "text-gray-400"], [1, "inline-flex", "items-center", "px-2.5", "py-0.5", "rounded-full", "text-xs", "font-medium", "bg-emerald-50", "text-emerald-700", "dark:bg-emerald-950/40", "dark:text-emerald-400", "border", "border-emerald-200"], [1, "inline-flex", "items-center", "px-2.5", "py-0.5", "rounded-full", "text-xs", "font-medium", "bg-gray-100", "text-gray-700", "dark:bg-gray-700", "dark:text-gray-300"], ["class", "px-6 py-4 text-right space-x-2", 4, "hasAnyPermission"], [1, "px-6", "py-4", "text-right", "space-x-2"], ["class", "px-3 py-1.5 text-xs font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-lg transition-colors", 3, "click", 4, "hasPermission"], ["class", "px-3 py-1.5 text-xs font-medium text-rose-600 hover:text-rose-700 hover:bg-rose-50 dark:hover:bg-rose-900/30 rounded-lg transition-colors", 3, "click", 4, "hasPermission"], [1, "px-3", "py-1.5", "text-xs", "font-medium", "text-blue-600", "hover:text-blue-700", "hover:bg-blue-50", "dark:hover:bg-blue-900/30", "rounded-lg", "transition-colors", 3, "click"], [1, "px-3", "py-1.5", "text-xs", "font-medium", "text-rose-600", "hover:text-rose-700", "hover:bg-rose-50", "dark:hover:bg-rose-900/30", "rounded-lg", "transition-colors", 3, "click"], [1, "bg-white", "dark:bg-gray-800", "rounded-2xl", "max-w-lg", "w-full", "p-6", "shadow-xl", "border", "border-gray-100", "dark:border-gray-700", "space-y-6"], [1, "flex", "justify-between", "items-center"], [1, "text-lg", "font-bold", "text-gray-900", "dark:text-white"], [1, "text-gray-400", "hover:text-gray-600", "dark:hover:text-gray-300", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "space-y-4", 3, "ngSubmit", "formGroup"], [1, "block", "text-xs", "font-semibold", "text-gray-700", "dark:text-gray-300", "mb-1"], ["formControlName", "classId", 1, "w-full", "px-3", "py-2", "bg-white", "dark:bg-gray-900", "border", "border-gray-200", "dark:border-gray-700", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-500"], ["formControlName", "staffId", 1, "w-full", "px-3", "py-2", "bg-white", "dark:bg-gray-900", "border", "border-gray-200", "dark:border-gray-700", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-500"], ["formControlName", "role", 1, "w-full", "px-3", "py-2", "bg-white", "dark:bg-gray-900", "border", "border-gray-200", "dark:border-gray-700", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-500"], ["value", "MAIN_TEACHER"], ["value", "ASSISTANT_TEACHER"], ["value", "TUTOR"], [1, "grid", "grid-cols-2", "gap-4"], ["formControlName", "assignedDate", "type", "date", 1, "w-full", "px-3", "py-2", "bg-white", "dark:bg-gray-900", "border", "border-gray-200", "dark:border-gray-700", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-500"], ["formControlName", "endDate", "type", "date", 1, "w-full", "px-3", "py-2", "bg-white", "dark:bg-gray-900", "border", "border-gray-200", "dark:border-gray-700", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-500"], ["formControlName", "status", 1, "w-full", "px-3", "py-2", "bg-white", "dark:bg-gray-900", "border", "border-gray-200", "dark:border-gray-700", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-500"], ["value", "ACTIVE"], ["value", "INACTIVE"], [1, "flex", "justify-end", "gap-3", "pt-4", "border-t", "border-gray-100", "dark:border-gray-700"], ["type", "button", 1, "px-4", "py-2", "text-xs", "font-medium", "text-gray-600", "dark:text-gray-300", "hover:bg-gray-100", "dark:hover:bg-gray-700", "rounded-xl", 3, "click"], ["type", "submit", 1, "px-4", "py-2", "text-xs", "font-medium", "bg-blue-600", "hover:bg-blue-700", "text-white", "rounded-xl", "disabled:opacity-50", 3, "disabled"], [1, "bg-white", "dark:bg-gray-800", "rounded-2xl", "max-w-sm", "w-full", "p-6", "shadow-xl", "border", "border-gray-100", "dark:border-gray-700", "space-y-4"], [1, "text-base", "font-bold", "text-gray-900", "dark:text-white"], [1, "text-xs", "text-gray-500"], [1, "flex", "justify-end", "gap-3", "pt-2"], [1, "px-4", "py-2", "text-xs", "font-medium", "text-gray-600", "dark:text-gray-300", "hover:bg-gray-100", "dark:hover:bg-gray-700", "rounded-xl", 3, "click"], [1, "px-4", "py-2", "text-xs", "font-medium", "bg-rose-600", "hover:bg-rose-700", "text-white", "rounded-xl", "disabled:opacity-50", 3, "click", "disabled"]], template: function TeachingAssignmentComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Ph\xE2n c\xF4ng Gi\u1EA3ng d\u1EA1y (Teaching Assignments)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Ph\xE2n c\xF4ng gi\xE1o vi\xEAn ch\xEDnh, tr\u1EE3 gi\u1EA3ng v\xE0 tutor cho t\u1EEBng l\u1EDBp h\u1ECDc");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(7, TeachingAssignmentComponent_button_7_Template, 4, 0, "button", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 5)(9, "div", 6)(10, "div", 7)(11, "select", 8)(12, "option", 9);
      \u0275\u0275text(13, "-- L\u1ECDc theo L\u1EDBp h\u1ECDc --");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(14, TeachingAssignmentComponent_For_15_Template, 2, 3, "option", 10, _forTrack06);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "select", 8)(17, "option", 9);
      \u0275\u0275text(18, "-- L\u1ECDc theo Nh\xE2n s\u1EF1/Gi\xE1o vi\xEAn --");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(19, TeachingAssignmentComponent_For_20_Template, 2, 3, "option", 10, _forTrack06);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "div", 11)(22, "table", 12)(23, "thead", 13)(24, "tr")(25, "th", 14);
      \u0275\u0275text(26, "L\u1EDBp h\u1ECDc");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "th", 14);
      \u0275\u0275text(28, "Gi\xE1o vi\xEAn / Nh\xE2n s\u1EF1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "th", 14);
      \u0275\u0275text(30, "Vai tr\xF2 ph\xE2n c\xF4ng");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "th", 14);
      \u0275\u0275text(32, "Ng\xE0y b\u1EAFt \u0111\u1EA7u");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "th", 14);
      \u0275\u0275text(34, "Ng\xE0y k\u1EBFt th\xFAc");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "th", 14);
      \u0275\u0275text(36, "Tr\u1EA1ng th\xE1i");
      \u0275\u0275elementEnd();
      \u0275\u0275template(37, TeachingAssignmentComponent_th_37_Template, 2, 0, "th", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "tbody", 16);
      \u0275\u0275conditionalCreate(39, TeachingAssignmentComponent_Conditional_39_Template, 8, 0, "tr")(40, TeachingAssignmentComponent_Conditional_40_Template, 3, 0, "tr")(41, TeachingAssignmentComponent_Conditional_41_Template, 2, 0);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(42, "div", 17)(43, "div");
      \u0275\u0275text(44, "Hi\u1EC3n th\u1ECB t\u1EEB ");
      \u0275\u0275elementStart(45, "span", 18);
      \u0275\u0275text(46);
      \u0275\u0275elementEnd();
      \u0275\u0275text(47, " \u0111\u1EBFn ");
      \u0275\u0275elementStart(48, "span", 18);
      \u0275\u0275text(49);
      \u0275\u0275elementEnd();
      \u0275\u0275text(50, " trong t\u1ED5ng s\u1ED1 ");
      \u0275\u0275elementStart(51, "span", 18);
      \u0275\u0275text(52);
      \u0275\u0275elementEnd();
      \u0275\u0275text(53, " m\u1EE5c");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "div", 19)(55, "button", 20);
      \u0275\u0275listener("click", function TeachingAssignmentComponent_Template_button_click_55_listener() {
        return ctx.changePage(ctx.currentPage() - 1);
      });
      \u0275\u0275text(56, "Tr\u01B0\u1EDBc");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "span", 21);
      \u0275\u0275text(58);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "button", 20);
      \u0275\u0275listener("click", function TeachingAssignmentComponent_Template_button_click_59_listener() {
        return ctx.changePage(ctx.currentPage() + 1);
      });
      \u0275\u0275text(60, "Sau");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(61, TeachingAssignmentComponent_Conditional_61_Template, 57, 3, "div", 22);
      \u0275\u0275conditionalCreate(62, TeachingAssignmentComponent_Conditional_62_Template, 11, 1, "div", 22);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("hasPermission", "ASSIGNMENT_CREATE");
      \u0275\u0275advance(4);
      \u0275\u0275property("formControl", ctx.classFilterControl);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.classes());
      \u0275\u0275advance(2);
      \u0275\u0275property("formControl", ctx.staffFilterControl);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.staffs());
      \u0275\u0275advance(18);
      \u0275\u0275property("hasAnyPermission", \u0275\u0275pureFunction0(14, _c06));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isLoading() ? 39 : ctx.assignments().length === 0 ? 40 : 41);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.startIndex());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.endIndex());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.totalElements());
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", ctx.currentPage() <= 1);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2("Trang ", ctx.currentPage(), " / ", ctx.totalPages() || 1);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.currentPage() >= ctx.totalPages());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isModalOpen() ? 61 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isDeleteModalOpen() ? 62 : -1);
    }
  }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormControlDirective, FormGroupDirective, FormControlName, HasPermissionDirective, DatePipe], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TeachingAssignmentComponent, [{
    type: Component,
    args: [{ selector: "app-teaching-assignment", imports: [CommonModule, ReactiveFormsModule, HasPermissionDirective], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="p-6 space-y-6">\r
  <!-- Header section -->\r
  <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">\r
    <div>\r
      <h1 class="text-2xl font-bold text-gray-900 dark:text-white">Ph\xE2n c\xF4ng Gi\u1EA3ng d\u1EA1y (Teaching Assignments)</h1>\r
      <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">Ph\xE2n c\xF4ng gi\xE1o vi\xEAn ch\xEDnh, tr\u1EE3 gi\u1EA3ng v\xE0 tutor cho t\u1EEBng l\u1EDBp h\u1ECDc</p>\r
    </div>\r
    <button *hasPermission="'ASSIGNMENT_CREATE'" (click)="openModal()" class="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-xl transition-colors shadow-sm shadow-blue-500/10">\r
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>\r
      </svg>\r
      Ph\xE2n c\xF4ng gi\xE1o vi\xEAn\r
    </button>\r
  </div>\r
\r
  <!-- Table Container -->\r
  <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">\r
    <!-- Filter bar -->\r
    <div class="p-4 border-b border-gray-100 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">\r
      <div class="flex flex-wrap items-center gap-3 w-full">\r
        <select [formControl]="classFilterControl" class="w-full sm:w-64 px-3 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500">\r
          <option value="">-- L\u1ECDc theo L\u1EDBp h\u1ECDc --</option>\r
          @for (c of classes(); track c.id) {\r
            <option [value]="c.id">{{ c.code }} - {{ c.name }}</option>\r
          }\r
        </select>\r
\r
        <select [formControl]="staffFilterControl" class="w-full sm:w-64 px-3 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500">\r
          <option value="">-- L\u1ECDc theo Nh\xE2n s\u1EF1/Gi\xE1o vi\xEAn --</option>\r
          @for (s of staffs(); track s.id) {\r
            <option [value]="s.id">{{ s.staffCode }} - {{ s.fullName }}</option>\r
          }\r
        </select>\r
      </div>\r
    </div>\r
\r
    <!-- Table content -->\r
    <div class="overflow-x-auto">\r
      <table class="w-full text-sm text-left text-gray-600 dark:text-gray-300">\r
        <thead class="text-xs uppercase bg-gray-50 dark:bg-gray-900/50 text-gray-500 dark:text-gray-400 border-b border-gray-100 dark:border-gray-700">\r
          <tr>\r
            <th class="px-6 py-3.5 font-semibold">L\u1EDBp h\u1ECDc</th>\r
            <th class="px-6 py-3.5 font-semibold">Gi\xE1o vi\xEAn / Nh\xE2n s\u1EF1</th>\r
            <th class="px-6 py-3.5 font-semibold">Vai tr\xF2 ph\xE2n c\xF4ng</th>\r
            <th class="px-6 py-3.5 font-semibold">Ng\xE0y b\u1EAFt \u0111\u1EA7u</th>\r
            <th class="px-6 py-3.5 font-semibold">Ng\xE0y k\u1EBFt th\xFAc</th>\r
            <th class="px-6 py-3.5 font-semibold">Tr\u1EA1ng th\xE1i</th>\r
            <th *hasAnyPermission="['ASSIGNMENT_UPDATE', 'ASSIGNMENT_DELETE']" class="px-6 py-3.5 font-semibold text-right">Thao t\xE1c</th>\r
          </tr>\r
        </thead>\r
        <tbody class="divide-y divide-gray-100 dark:divide-gray-700">\r
          @if (isLoading()) {\r
            <tr>\r
              <td colspan="7" class="px-6 py-8 text-center text-gray-400">\r
                <div class="inline-flex items-center gap-2">\r
                  <svg class="animate-spin h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24">\r
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>\r
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>\r
                  </svg>\r
                  <span>\u0110ang t\u1EA3i d\u1EEF li\u1EC7u...</span>\r
                </div>\r
              </td>\r
            </tr>\r
          } @else if (assignments().length === 0) {\r
            <tr>\r
              <td colspan="7" class="px-6 py-8 text-center text-gray-400">Ch\u01B0a c\xF3 b\u1EA3n ghi ph\xE2n c\xF4ng n\xE0o.</td>\r
            </tr>\r
          } @else {\r
            @for (item of assignments(); track item.id) {\r
              <tr class="hover:bg-gray-50/50 dark:hover:bg-gray-700/50 transition-colors">\r
                <td class="px-6 py-4 font-medium text-gray-900 dark:text-white">\r
                  <span class="font-mono text-blue-600 dark:text-blue-400 mr-2">{{ item.classCode }}</span>\r
                  <span>{{ item.className }}</span>\r
                </td>\r
                <td class="px-6 py-4 font-medium text-gray-900 dark:text-white">\r
                  <span class="font-mono text-purple-600 dark:text-purple-400 mr-2">{{ item.staffCode }}</span>\r
                  <span>{{ item.teacherName }}</span>\r
                </td>\r
                <td class="px-6 py-4">\r
                  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-400 border border-blue-200">\r
                    {{ roleLabels[item.role] || item.role }}\r
                  </span>\r
                </td>\r
                <td class="px-6 py-4">{{ item.assignedDate | date:'dd/MM/yyyy' }}</td>\r
                <td class="px-6 py-4 text-gray-400">{{ item.endDate ? (item.endDate | date:'dd/MM/yyyy') : '\u2014' }}</td>\r
                <td class="px-6 py-4">\r
                  @if (item.status === 'ACTIVE') {\r
                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 border border-emerald-200">\u0110ang ph\xE2n c\xF4ng</span>\r
                  } @else {\r
                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300">\u0110\xE3 k\u1EBFt th\xFAc</span>\r
                  }\r
                </td>\r
                <td *hasAnyPermission="['ASSIGNMENT_UPDATE', 'ASSIGNMENT_DELETE']" class="px-6 py-4 text-right space-x-2">\r
                  <button *hasPermission="'ASSIGNMENT_UPDATE'" (click)="openModal(item)" class="px-3 py-1.5 text-xs font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-lg transition-colors">S\u1EEDa</button>\r
                  <button *hasPermission="'ASSIGNMENT_DELETE'" (click)="onDelete(item.id)" class="px-3 py-1.5 text-xs font-medium text-rose-600 hover:text-rose-700 hover:bg-rose-50 dark:hover:bg-rose-900/30 rounded-lg transition-colors">X\xF3a</button>\r
                </td>\r
              </tr>\r
            }\r
          }\r
        </tbody>\r
      </table>\r
    </div>\r
\r
    <!-- Pagination -->\r
    <div class="p-4 border-t border-gray-100 dark:border-gray-700 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">\r
      <div>Hi\u1EC3n th\u1ECB t\u1EEB <span class="font-medium text-gray-900 dark:text-white">{{ startIndex() }}</span> \u0111\u1EBFn <span class="font-medium text-gray-900 dark:text-white">{{ endIndex() }}</span> trong t\u1ED5ng s\u1ED1 <span class="font-medium text-gray-900 dark:text-white">{{ totalElements() }}</span> m\u1EE5c</div>\r
      <div class="flex items-center gap-1">\r
        <button (click)="changePage(currentPage() - 1)" [disabled]="currentPage() <= 1" class="px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 disabled:opacity-40 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">Tr\u01B0\u1EDBc</button>\r
        <span class="px-3 py-1.5 font-medium text-gray-900 dark:text-white">Trang {{ currentPage() }} / {{ totalPages() || 1 }}</span>\r
        <button (click)="changePage(currentPage() + 1)" [disabled]="currentPage() >= totalPages()" class="px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 disabled:opacity-40 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">Sau</button>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Form Modal -->\r
  @if (isModalOpen()) {\r
    <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">\r
      <div class="bg-white dark:bg-gray-800 rounded-2xl max-w-lg w-full p-6 shadow-xl border border-gray-100 dark:border-gray-700 space-y-6">\r
        <div class="flex justify-between items-center">\r
          <h3 class="text-lg font-bold text-gray-900 dark:text-white">{{ isEditing() ? 'Ch\u1EC9nh s\u1EEDa ph\xE2n c\xF4ng' : 'Th\xEAm ph\xE2n c\xF4ng m\u1EDBi' }}</h3>\r
          <button (click)="closeModal()" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">\r
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>\r
          </button>\r
        </div>\r
\r
        <form [formGroup]="assignmentForm" (ngSubmit)="onSubmit()" class="space-y-4">\r
          <div>\r
            <label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">L\u1EDBp h\u1ECDc *</label>\r
            <select formControlName="classId" class="w-full px-3 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:ring-2 focus:ring-blue-500">\r
              <option value="">-- Ch\u1ECDn l\u1EDBp h\u1ECDc --</option>\r
              @for (c of classes(); track c.id) {\r
                <option [value]="c.id">{{ c.code }} - {{ c.name }}</option>\r
              }\r
            </select>\r
          </div>\r
\r
          <div>\r
            <label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">Gi\xE1o vi\xEAn / Tr\u1EE3 gi\u1EA3ng / Tutor *</label>\r
            <select formControlName="staffId" class="w-full px-3 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:ring-2 focus:ring-blue-500">\r
              <option value="">-- Ch\u1ECDn nh\xE2n s\u1EF1 --</option>\r
              @for (s of staffs(); track s.id) {\r
                <option [value]="s.id">{{ s.staffCode }} - {{ s.fullName }} ({{ s.staffType }})</option>\r
              }\r
            </select>\r
          </div>\r
\r
          <div>\r
            <label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">Vai tr\xF2 ph\xE2n c\xF4ng *</label>\r
            <select formControlName="role" class="w-full px-3 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:ring-2 focus:ring-blue-500">\r
              <option value="MAIN_TEACHER">MAIN_TEACHER (Gi\xE1o vi\xEAn ch\xEDnh)</option>\r
              <option value="ASSISTANT_TEACHER">ASSISTANT_TEACHER (Tr\u1EE3 gi\u1EA3ng)</option>\r
              <option value="TUTOR">TUTOR (Tutor)</option>\r
            </select>\r
          </div>\r
\r
          <div class="grid grid-cols-2 gap-4">\r
            <div>\r
              <label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">Ng\xE0y b\u1EAFt \u0111\u1EA7u *</label>\r
              <input formControlName="assignedDate" type="date" class="w-full px-3 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:ring-2 focus:ring-blue-500">\r
            </div>\r
            <div>\r
              <label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">Ng\xE0y k\u1EBFt th\xFAc</label>\r
              <input formControlName="endDate" type="date" class="w-full px-3 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:ring-2 focus:ring-blue-500">\r
            </div>\r
          </div>\r
\r
          <div>\r
            <label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">Tr\u1EA1ng th\xE1i *</label>\r
            <select formControlName="status" class="w-full px-3 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:ring-2 focus:ring-blue-500">\r
              <option value="ACTIVE">ACTIVE (\u0110ang l\xE0m vi\u1EC7c)</option>\r
              <option value="INACTIVE">INACTIVE (T\u1EA1m ng\u01B0ng/K\u1EBFt th\xFAc)</option>\r
            </select>\r
          </div>\r
\r
          <div class="flex justify-end gap-3 pt-4 border-t border-gray-100 dark:border-gray-700">\r
            <button type="button" (click)="closeModal()" class="px-4 py-2 text-xs font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl">H\u1EE7y</button>\r
            <button type="submit" [disabled]="assignmentForm.invalid || isLoading()" class="px-4 py-2 text-xs font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-xl disabled:opacity-50">L\u01B0u</button>\r
          </div>\r
        </form>\r
      </div>\r
    </div>\r
  }\r
\r
  <!-- Delete Confirmation Modal -->\r
  @if (isDeleteModalOpen()) {\r
    <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">\r
      <div class="bg-white dark:bg-gray-800 rounded-2xl max-w-sm w-full p-6 shadow-xl border border-gray-100 dark:border-gray-700 space-y-4">\r
        <h3 class="text-base font-bold text-gray-900 dark:text-white">X\xE1c nh\u1EADn x\xF3a ph\xE2n c\xF4ng</h3>\r
        <p class="text-xs text-gray-500">B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a b\u1EA3n ghi ph\xE2n c\xF4ng n\xE0y?</p>\r
        <div class="flex justify-end gap-3 pt-2">\r
          <button (click)="closeDeleteModal()" class="px-4 py-2 text-xs font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl">H\u1EE7y</button>\r
          <button (click)="confirmDelete()" [disabled]="isLoading()" class="px-4 py-2 text-xs font-medium bg-rose-600 hover:bg-rose-700 text-white rounded-xl disabled:opacity-50">X\xF3a</button>\r
        </div>\r
      </div>\r
    </div>\r
  }\r
</div>\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TeachingAssignmentComponent, { className: "TeachingAssignmentComponent", filePath: "src/app/features/admin/pages/teaching-assignment/teaching-assignment.component.ts", lineNumber: 19 });
})();

// src/app/features/admin/pages/teaching-substitution/teaching-substitution.component.ts
var _c07 = () => ["ASSIGNMENT_UPDATE", "ASSIGNMENT_DELETE"];
var _forTrack07 = ($index, $item) => $item.id;
function TeachingSubstitutionComponent_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function TeachingSubstitutionComponent_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 19);
    \u0275\u0275element(2, "path", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Ph\xE2n c\xF4ng d\u1EA1y thay ");
    \u0275\u0275elementEnd();
  }
}
function TeachingSubstitutionComponent_th_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 21);
    \u0275\u0275text(1, "Thao t\xE1c");
    \u0275\u0275elementEnd();
  }
}
function TeachingSubstitutionComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 22)(2, "div", 23);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 24);
    \u0275\u0275element(4, "circle", 25)(5, "path", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7, "\u0110ang t\u1EA3i d\u1EEF li\u1EC7u...");
    \u0275\u0275elementEnd()()()();
  }
}
function TeachingSubstitutionComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 22);
    \u0275\u0275text(2, "Ch\u01B0a c\xF3 th\xF4ng tin d\u1EA1y thay n\xE0o.");
    \u0275\u0275elementEnd()();
  }
}
function TeachingSubstitutionComponent_Conditional_29_For_1_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u0111\u1EBFn ", \u0275\u0275pipeBind2(2, 1, item_r3.endDate, "dd/MM/yyyy"));
  }
}
function TeachingSubstitutionComponent_Conditional_29_For_1_Case_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1, "L\xEAn l\u1ECBch");
    \u0275\u0275elementEnd();
  }
}
function TeachingSubstitutionComponent_Conditional_29_For_1_Case_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275text(1, "Ho\xE0n th\xE0nh");
    \u0275\u0275elementEnd();
  }
}
function TeachingSubstitutionComponent_Conditional_29_For_1_Case_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275text(1, "\u0110\xE3 h\u1EE7y");
    \u0275\u0275elementEnd();
  }
}
function TeachingSubstitutionComponent_Conditional_29_For_1_td_27_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 44);
    \u0275\u0275listener("click", function TeachingSubstitutionComponent_Conditional_29_For_1_td_27_button_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const item_r3 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openModal(item_r3));
    });
    \u0275\u0275text(1, "S\u1EEDa");
    \u0275\u0275elementEnd();
  }
}
function TeachingSubstitutionComponent_Conditional_29_For_1_td_27_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 45);
    \u0275\u0275listener("click", function TeachingSubstitutionComponent_Conditional_29_For_1_td_27_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const item_r3 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDelete(item_r3.id));
    });
    \u0275\u0275text(1, "X\xF3a");
    \u0275\u0275elementEnd();
  }
}
function TeachingSubstitutionComponent_Conditional_29_For_1_td_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 41);
    \u0275\u0275template(1, TeachingSubstitutionComponent_Conditional_29_For_1_td_27_button_1_Template, 2, 0, "button", 42)(2, TeachingSubstitutionComponent_Conditional_29_For_1_td_27_button_2_Template, 2, 0, "button", 43);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("hasPermission", "ASSIGNMENT_UPDATE");
    \u0275\u0275advance();
    \u0275\u0275property("hasPermission", "ASSIGNMENT_DELETE");
  }
}
function TeachingSubstitutionComponent_Conditional_29_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 27)(1, "td", 28)(2, "span", 29);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 30)(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 31);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td", 32)(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 31);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td", 33)(17, "div");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(20, TeachingSubstitutionComponent_Conditional_29_For_1_Conditional_20_Template, 3, 4, "div", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td", 35);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td", 36);
    \u0275\u0275conditionalCreate(24, TeachingSubstitutionComponent_Conditional_29_For_1_Case_24_Template, 2, 0, "span", 37)(25, TeachingSubstitutionComponent_Conditional_29_For_1_Case_25_Template, 2, 0, "span", 38)(26, TeachingSubstitutionComponent_Conditional_29_For_1_Case_26_Template, 2, 0, "span", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275template(27, TeachingSubstitutionComponent_Conditional_29_For_1_td_27_Template, 3, 2, "td", 40);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_21_0;
    const item_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r3.classCode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.className);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r3.absentStaffName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", item_r3.absentStaffCode, ")");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r3.substituteStaffName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", item_r3.substituteStaffCode, ")");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(19, 12, item_r3.startDate, "dd/MM/yyyy"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(item_r3.endDate ? 20 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("title", item_r3.reason);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r3.reason);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_21_0 = item_r3.status) === "SCHEDULED" ? 24 : tmp_21_0 === "COMPLETED" ? 25 : tmp_21_0 === "CANCELLED" ? 26 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275property("hasAnyPermission", \u0275\u0275pureFunction0(15, _c07));
  }
}
function TeachingSubstitutionComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, TeachingSubstitutionComponent_Conditional_29_For_1_Template, 28, 16, "tr", 27, _forTrack07);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r1.substitutions());
  }
}
function TeachingSubstitutionComponent_Conditional_49_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 55);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const sch_r7 = ctx.$implicit;
    \u0275\u0275property("value", sch_r7.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate5("", sch_r7.classCode, " (", sch_r7.roomName, ") - Th\u1EE9 ", sch_r7.dayOfWeek, " (", sch_r7.startTime, "-", sch_r7.endTime, ")");
  }
}
function TeachingSubstitutionComponent_Conditional_49_For_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 55);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r8 = ctx.$implicit;
    \u0275\u0275property("value", s_r8.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", s_r8.staffCode, " - ", s_r8.fullName);
  }
}
function TeachingSubstitutionComponent_Conditional_49_For_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 55);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r9 = ctx.$implicit;
    \u0275\u0275property("value", s_r9.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", s_r9.staffCode, " - ", s_r9.fullName);
  }
}
function TeachingSubstitutionComponent_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 46)(2, "div", 47)(3, "h3", 48);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 49);
    \u0275\u0275listener("click", function TeachingSubstitutionComponent_Conditional_49_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 19);
    \u0275\u0275element(7, "path", 50);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "form", 51);
    \u0275\u0275listener("ngSubmit", function TeachingSubstitutionComponent_Conditional_49_Template_form_ngSubmit_8_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(9, "div")(10, "label", 52);
    \u0275\u0275text(11, "Ch\u1ECDn L\u1ECBch h\u1ECDc *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "select", 53)(13, "option", 54);
    \u0275\u0275text(14, "-- Ch\u1ECDn l\u1ECBch h\u1ECDc --");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(15, TeachingSubstitutionComponent_Conditional_49_For_16_Template, 2, 6, "option", 55, _forTrack07);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 56)(18, "div")(19, "label", 52);
    \u0275\u0275text(20, "Gi\xE1o vi\xEAn v\u1EAFng m\u1EB7t *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "select", 57)(22, "option", 54);
    \u0275\u0275text(23, "-- Ch\u1ECDn nh\xE2n s\u1EF1 --");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(24, TeachingSubstitutionComponent_Conditional_49_For_25_Template, 2, 3, "option", 55, _forTrack07);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div")(27, "label", 52);
    \u0275\u0275text(28, "Gi\xE1o vi\xEAn d\u1EA1y thay *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "select", 58)(30, "option", 54);
    \u0275\u0275text(31, "-- Ch\u1ECDn nh\xE2n s\u1EF1 --");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(32, TeachingSubstitutionComponent_Conditional_49_For_33_Template, 2, 3, "option", 55, _forTrack07);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 56)(35, "div")(36, "label", 52);
    \u0275\u0275text(37, "Ng\xE0y b\u1EAFt \u0111\u1EA7u *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(38, "input", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div")(40, "label", 52);
    \u0275\u0275text(41, "Ng\xE0y k\u1EBFt th\xFAc");
    \u0275\u0275elementEnd();
    \u0275\u0275element(42, "input", 60);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div")(44, "label", 52);
    \u0275\u0275text(45, "L\xFD do d\u1EA1y thay *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(46, "textarea", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div")(48, "label", 52);
    \u0275\u0275text(49, "Tr\u1EA1ng th\xE1i *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "select", 62)(51, "option", 63);
    \u0275\u0275text(52, "SCHEDULED (\u0110\xE3 l\xEAn l\u1ECBch)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "option", 64);
    \u0275\u0275text(54, "COMPLETED (Ho\xE0n th\xE0nh)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "option", 65);
    \u0275\u0275text(56, "CANCELLED (H\u1EE7y)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(57, "div", 66)(58, "button", 67);
    \u0275\u0275listener("click", function TeachingSubstitutionComponent_Conditional_49_Template_button_click_58_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275text(59, "H\u1EE7y");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "button", 68);
    \u0275\u0275text(61, "L\u01B0u");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.isEditing() ? "Ch\u1EC9nh s\u1EEDa th\xF4ng tin d\u1EA1y thay" : "Th\xEAm d\u1EA1y thay m\u1EDBi");
    \u0275\u0275advance(4);
    \u0275\u0275property("formGroup", ctx_r1.subForm);
    \u0275\u0275advance(7);
    \u0275\u0275repeater(ctx_r1.schedules());
    \u0275\u0275advance(9);
    \u0275\u0275repeater(ctx_r1.staffs());
    \u0275\u0275advance(8);
    \u0275\u0275repeater(ctx_r1.staffs());
    \u0275\u0275advance(28);
    \u0275\u0275property("disabled", ctx_r1.subForm.invalid || ctx_r1.isLoading());
  }
}
function TeachingSubstitutionComponent_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 69)(2, "h3", 70);
    \u0275\u0275text(3, "X\xE1c nh\u1EADn x\xF3a d\u1EA1y thay");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 71);
    \u0275\u0275text(5, "B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a th\xF4ng tin d\u1EA1y thay n\xE0y?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 72)(7, "button", 73);
    \u0275\u0275listener("click", function TeachingSubstitutionComponent_Conditional_50_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDeleteModal());
    });
    \u0275\u0275text(8, "H\u1EE7y");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 74);
    \u0275\u0275listener("click", function TeachingSubstitutionComponent_Conditional_50_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmDelete());
    });
    \u0275\u0275text(10, "X\xF3a");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275property("disabled", ctx_r1.isLoading());
  }
}
var TeachingSubstitutionComponent = class _TeachingSubstitutionComponent {
  subService = inject(TeachingSubstitutionService);
  scheduleService = inject(ScheduleService);
  staffService = inject(StaffService);
  fb = inject(FormBuilder);
  toastService = inject(ToastService);
  substitutions = signal([], ...ngDevMode ? [{ debugName: "substitutions" }] : (
    /* istanbul ignore next */
    []
  ));
  schedules = signal([], ...ngDevMode ? [{ debugName: "schedules" }] : (
    /* istanbul ignore next */
    []
  ));
  staffs = signal([], ...ngDevMode ? [{ debugName: "staffs" }] : (
    /* istanbul ignore next */
    []
  ));
  totalElements = signal(0, ...ngDevMode ? [{ debugName: "totalElements" }] : (
    /* istanbul ignore next */
    []
  ));
  currentPage = signal(1, ...ngDevMode ? [{ debugName: "currentPage" }] : (
    /* istanbul ignore next */
    []
  ));
  pageSize = signal(10, ...ngDevMode ? [{ debugName: "pageSize" }] : (
    /* istanbul ignore next */
    []
  ));
  isLoading = signal(false, ...ngDevMode ? [{ debugName: "isLoading" }] : (
    /* istanbul ignore next */
    []
  ));
  isModalOpen = signal(false, ...ngDevMode ? [{ debugName: "isModalOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  isEditing = signal(false, ...ngDevMode ? [{ debugName: "isEditing" }] : (
    /* istanbul ignore next */
    []
  ));
  currentId = signal(null, ...ngDevMode ? [{ debugName: "currentId" }] : (
    /* istanbul ignore next */
    []
  ));
  subForm;
  isDeleteModalOpen = signal(false, ...ngDevMode ? [{ debugName: "isDeleteModalOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  idToDelete = signal(null, ...ngDevMode ? [{ debugName: "idToDelete" }] : (
    /* istanbul ignore next */
    []
  ));
  totalPages = computed(() => Math.ceil(this.totalElements() / this.pageSize()), ...ngDevMode ? [{ debugName: "totalPages" }] : (
    /* istanbul ignore next */
    []
  ));
  startIndex = computed(() => this.totalElements() === 0 ? 0 : (this.currentPage() - 1) * this.pageSize() + 1, ...ngDevMode ? [{ debugName: "startIndex" }] : (
    /* istanbul ignore next */
    []
  ));
  endIndex = computed(() => Math.min(this.currentPage() * this.pageSize(), this.totalElements()), ...ngDevMode ? [{ debugName: "endIndex" }] : (
    /* istanbul ignore next */
    []
  ));
  ngOnInit() {
    this.initForm();
    this.loadDropdowns();
    this.loadData();
  }
  initForm() {
    this.subForm = this.fb.group({
      scheduleId: ["", Validators.required],
      absentStaffId: ["", Validators.required],
      substituteStaffId: ["", Validators.required],
      startDate: ["", Validators.required],
      endDate: [""],
      reason: ["", Validators.required],
      status: ["SCHEDULED", Validators.required]
    });
  }
  loadDropdowns() {
    this.scheduleService.getAll(0, 100).subscribe({
      next: (res) => this.schedules.set(res.content || [])
    });
    this.staffService.getAll(void 0, 0, 100).subscribe({
      next: (res) => this.staffs.set(res.content || [])
    });
  }
  loadData() {
    this.isLoading.set(true);
    this.subService.getAll(this.currentPage() - 1, this.pageSize()).subscribe({
      next: (res) => {
        this.substitutions.set(res.content || []);
        this.totalElements.set(res.totalElements || 0);
        this.isLoading.set(false);
      },
      error: () => this.isLoading.set(false)
    });
  }
  changePage(page) {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage.set(page);
      this.loadData();
    }
  }
  openModal(item) {
    if (item) {
      this.isEditing.set(true);
      this.currentId.set(item.id ?? null);
      this.subForm.patchValue({
        scheduleId: item.scheduleId,
        absentStaffId: item.absentStaffId,
        substituteStaffId: item.substituteStaffId,
        startDate: item.startDate || "",
        endDate: item.endDate || "",
        reason: item.reason,
        status: item.status
      });
    } else {
      this.isEditing.set(false);
      this.currentId.set(null);
      this.subForm.reset({
        scheduleId: "",
        absentStaffId: "",
        substituteStaffId: "",
        startDate: (/* @__PURE__ */ new Date()).toISOString().substring(0, 10),
        endDate: "",
        reason: "",
        status: "SCHEDULED"
      });
    }
    this.isModalOpen.set(true);
  }
  closeModal() {
    this.isModalOpen.set(false);
    this.currentId.set(null);
  }
  onSubmit() {
    if (this.subForm.invalid)
      return;
    this.isLoading.set(true);
    const data = this.subForm.value;
    if (data.scheduleId)
      data.scheduleId = Number(data.scheduleId);
    if (data.absentStaffId)
      data.absentStaffId = Number(data.absentStaffId);
    if (data.substituteStaffId)
      data.substituteStaffId = Number(data.substituteStaffId);
    if (this.isEditing() && this.currentId() != null) {
      this.subService.update(this.currentId(), data).subscribe({
        next: () => {
          this.loadData();
          this.closeModal();
          this.toastService.success("Th\xE0nh c\xF4ng", "\u0110\xE3 c\u1EADp nh\u1EADt d\u1EA1y thay!");
        },
        error: (err) => {
          this.isLoading.set(false);
          this.toastService.error("Th\u1EA5t b\u1EA1i", err.error?.message || "C\xF3 l\u1ED7i x\u1EA3y ra khi c\u1EADp nh\u1EADt!");
        }
      });
    } else {
      this.subService.create(data).subscribe({
        next: () => {
          this.loadData();
          this.closeModal();
          this.toastService.success("Th\xE0nh c\xF4ng", "\u0110\xE3 ghi nh\u1EADn ph\xE2n c\xF4ng d\u1EA1y thay!");
        },
        error: (err) => {
          this.isLoading.set(false);
          this.toastService.error("Th\u1EA5t b\u1EA1i", err.error?.message || "C\xF3 l\u1ED7i x\u1EA3y ra khi th\xEAm m\u1EDBi!");
        }
      });
    }
  }
  onDelete(id) {
    if (id != null) {
      this.idToDelete.set(id);
      this.isDeleteModalOpen.set(true);
    }
  }
  closeDeleteModal() {
    this.isDeleteModalOpen.set(false);
    this.idToDelete.set(null);
  }
  confirmDelete() {
    const id = this.idToDelete();
    if (id != null) {
      this.isLoading.set(true);
      this.subService.delete(id).subscribe({
        next: () => {
          this.loadData();
          this.closeDeleteModal();
          this.toastService.success("\u0110\xE3 x\xF3a", "X\xF3a d\u1EA1y thay th\xE0nh c\xF4ng!");
        },
        error: (err) => {
          this.isLoading.set(false);
          this.closeDeleteModal();
          this.toastService.error("L\u1ED7i x\xF3a", err.error?.message || "Kh\xF4ng th\u1EC3 x\xF3a b\u1EA3n ghi d\u1EA1y thay n\xE0y!");
        }
      });
    }
  }
  static \u0275fac = function TeachingSubstitutionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TeachingSubstitutionComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TeachingSubstitutionComponent, selectors: [["app-teaching-substitution"]], decls: 51, vars: 13, consts: [[1, "p-6", "space-y-6"], [1, "flex", "flex-col", "sm:flex-row", "justify-between", "items-start", "sm:items-center", "gap-4", "bg-white", "dark:bg-gray-800", "p-6", "rounded-2xl", "shadow-sm", "border", "border-gray-100", "dark:border-gray-700"], [1, "text-2xl", "font-bold", "text-gray-900", "dark:text-white"], [1, "text-sm", "text-gray-500", "dark:text-gray-400", "mt-1"], ["class", "inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-xl transition-colors shadow-sm shadow-blue-500/10", 3, "click", 4, "hasPermission"], [1, "bg-white", "dark:bg-gray-800", "rounded-2xl", "shadow-sm", "border", "border-gray-100", "dark:border-gray-700", "overflow-hidden"], [1, "overflow-x-auto"], [1, "w-full", "text-sm", "text-left", "text-gray-600", "dark:text-gray-300"], [1, "text-xs", "uppercase", "bg-gray-50", "dark:bg-gray-900/50", "text-gray-500", "dark:text-gray-400", "border-b", "border-gray-100", "dark:border-gray-700"], [1, "px-6", "py-3.5", "font-semibold"], ["class", "px-6 py-3.5 font-semibold text-right", 4, "hasAnyPermission"], [1, "divide-y", "divide-gray-100", "dark:divide-gray-700"], [1, "p-4", "border-t", "border-gray-100", "dark:border-gray-700", "flex", "flex-col", "sm:flex-row", "justify-between", "items-center", "gap-4", "text-xs", "text-gray-500"], [1, "font-medium", "text-gray-900", "dark:text-white"], [1, "flex", "items-center", "gap-1"], [1, "px-3", "py-1.5", "rounded-lg", "border", "border-gray-200", "dark:border-gray-700", "disabled:opacity-40", "hover:bg-gray-50", "dark:hover:bg-gray-700", "transition-colors", 3, "click", "disabled"], [1, "px-3", "py-1.5", "font-medium", "text-gray-900", "dark:text-white"], [1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "p-4", "bg-black/40", "backdrop-blur-sm"], [1, "inline-flex", "items-center", "gap-2", "px-4", "py-2.5", "bg-blue-600", "hover:bg-blue-700", "text-white", "text-sm", "font-medium", "rounded-xl", "transition-colors", "shadow-sm", "shadow-blue-500/10", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 4v16m8-8H4"], [1, "px-6", "py-3.5", "font-semibold", "text-right"], ["colspan", "7", 1, "px-6", "py-8", "text-center", "text-gray-400"], [1, "inline-flex", "items-center", "gap-2"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-5", "w-5", "text-blue-600"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"], [1, "hover:bg-gray-50/50", "dark:hover:bg-gray-700/50", "transition-colors"], [1, "px-6", "py-4", "font-medium", "text-gray-900", "dark:text-white"], [1, "font-mono", "text-blue-600", "dark:text-blue-400", "mr-2"], [1, "px-6", "py-4", "font-medium", "text-rose-600", "dark:text-rose-400"], [1, "text-xs", "text-gray-400", "block", "font-mono"], [1, "px-6", "py-4", "font-medium", "text-emerald-600", "dark:text-emerald-400"], [1, "px-6", "py-4", "text-xs"], [1, "text-gray-400"], [1, "px-6", "py-4", "max-w-xs", "truncate", 3, "title"], [1, "px-6", "py-4"], [1, "inline-flex", "items-center", "px-2.5", "py-0.5", "rounded-full", "text-xs", "font-medium", "bg-amber-50", "text-amber-700", "dark:bg-amber-950/40", "dark:text-amber-400", "border", "border-amber-200"], [1, "inline-flex", "items-center", "px-2.5", "py-0.5", "rounded-full", "text-xs", "font-medium", "bg-emerald-50", "text-emerald-700", "dark:bg-emerald-950/40", "dark:text-emerald-400", "border", "border-emerald-200"], [1, "inline-flex", "items-center", "px-2.5", "py-0.5", "rounded-full", "text-xs", "font-medium", "bg-gray-100", "text-gray-700", "dark:bg-gray-700", "dark:text-gray-300"], ["class", "px-6 py-4 text-right space-x-2", 4, "hasAnyPermission"], [1, "px-6", "py-4", "text-right", "space-x-2"], ["class", "px-3 py-1.5 text-xs font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-lg transition-colors", 3, "click", 4, "hasPermission"], ["class", "px-3 py-1.5 text-xs font-medium text-rose-600 hover:text-rose-700 hover:bg-rose-50 dark:hover:bg-rose-900/30 rounded-lg transition-colors", 3, "click", 4, "hasPermission"], [1, "px-3", "py-1.5", "text-xs", "font-medium", "text-blue-600", "hover:text-blue-700", "hover:bg-blue-50", "dark:hover:bg-blue-900/30", "rounded-lg", "transition-colors", 3, "click"], [1, "px-3", "py-1.5", "text-xs", "font-medium", "text-rose-600", "hover:text-rose-700", "hover:bg-rose-50", "dark:hover:bg-rose-900/30", "rounded-lg", "transition-colors", 3, "click"], [1, "bg-white", "dark:bg-gray-800", "rounded-2xl", "max-w-lg", "w-full", "p-6", "shadow-xl", "border", "border-gray-100", "dark:border-gray-700", "space-y-6"], [1, "flex", "justify-between", "items-center"], [1, "text-lg", "font-bold", "text-gray-900", "dark:text-white"], [1, "text-gray-400", "hover:text-gray-600", "dark:hover:text-gray-300", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "space-y-4", 3, "ngSubmit", "formGroup"], [1, "block", "text-xs", "font-semibold", "text-gray-700", "dark:text-gray-300", "mb-1"], ["formControlName", "scheduleId", 1, "w-full", "px-3", "py-2", "bg-white", "dark:bg-gray-900", "border", "border-gray-200", "dark:border-gray-700", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-500"], ["value", ""], [3, "value"], [1, "grid", "grid-cols-2", "gap-4"], ["formControlName", "absentStaffId", 1, "w-full", "px-3", "py-2", "bg-white", "dark:bg-gray-900", "border", "border-gray-200", "dark:border-gray-700", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-500"], ["formControlName", "substituteStaffId", 1, "w-full", "px-3", "py-2", "bg-white", "dark:bg-gray-900", "border", "border-gray-200", "dark:border-gray-700", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-500"], ["formControlName", "startDate", "type", "date", 1, "w-full", "px-3", "py-2", "bg-white", "dark:bg-gray-900", "border", "border-gray-200", "dark:border-gray-700", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-500"], ["formControlName", "endDate", "type", "date", 1, "w-full", "px-3", "py-2", "bg-white", "dark:bg-gray-900", "border", "border-gray-200", "dark:border-gray-700", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-500"], ["formControlName", "reason", "rows", "2", "placeholder", "Ghi r\xF5 l\xFD do v\u1EAFng m\u1EB7t...", 1, "w-full", "px-3", "py-2", "bg-white", "dark:bg-gray-900", "border", "border-gray-200", "dark:border-gray-700", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-500"], ["formControlName", "status", 1, "w-full", "px-3", "py-2", "bg-white", "dark:bg-gray-900", "border", "border-gray-200", "dark:border-gray-700", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-500"], ["value", "SCHEDULED"], ["value", "COMPLETED"], ["value", "CANCELLED"], [1, "flex", "justify-end", "gap-3", "pt-4", "border-t", "border-gray-100", "dark:border-gray-700"], ["type", "button", 1, "px-4", "py-2", "text-xs", "font-medium", "text-gray-600", "dark:text-gray-300", "hover:bg-gray-100", "dark:hover:bg-gray-700", "rounded-xl", 3, "click"], ["type", "submit", 1, "px-4", "py-2", "text-xs", "font-medium", "bg-blue-600", "hover:bg-blue-700", "text-white", "rounded-xl", "disabled:opacity-50", 3, "disabled"], [1, "bg-white", "dark:bg-gray-800", "rounded-2xl", "max-w-sm", "w-full", "p-6", "shadow-xl", "border", "border-gray-100", "dark:border-gray-700", "space-y-4"], [1, "text-base", "font-bold", "text-gray-900", "dark:text-white"], [1, "text-xs", "text-gray-500"], [1, "flex", "justify-end", "gap-3", "pt-2"], [1, "px-4", "py-2", "text-xs", "font-medium", "text-gray-600", "dark:text-gray-300", "hover:bg-gray-100", "dark:hover:bg-gray-700", "rounded-xl", 3, "click"], [1, "px-4", "py-2", "text-xs", "font-medium", "bg-rose-600", "hover:bg-rose-700", "text-white", "rounded-xl", "disabled:opacity-50", 3, "click", "disabled"]], template: function TeachingSubstitutionComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Qu\u1EA3n l\xFD D\u1EA1y thay (Teaching Substitutions)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Ghi nh\u1EADn v\xE0 ph\xE2n c\xF4ng gi\xE1o vi\xEAn/tr\u1EE3 gi\u1EA3ng d\u1EA1y thay khi nh\xE2n s\u1EF1 v\u1EAFng m\u1EB7t");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(7, TeachingSubstitutionComponent_button_7_Template, 4, 0, "button", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 5)(9, "div", 6)(10, "table", 7)(11, "thead", 8)(12, "tr")(13, "th", 9);
      \u0275\u0275text(14, "L\u1EDBp / L\u1ECBch h\u1ECDc");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "th", 9);
      \u0275\u0275text(16, "Gi\xE1o vi\xEAn v\u1EAFng");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "th", 9);
      \u0275\u0275text(18, "Gi\xE1o vi\xEAn d\u1EA1y thay");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "th", 9);
      \u0275\u0275text(20, "Th\u1EDDi gian");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "th", 9);
      \u0275\u0275text(22, "L\xFD do");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "th", 9);
      \u0275\u0275text(24, "Tr\u1EA1ng th\xE1i");
      \u0275\u0275elementEnd();
      \u0275\u0275template(25, TeachingSubstitutionComponent_th_25_Template, 2, 0, "th", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "tbody", 11);
      \u0275\u0275conditionalCreate(27, TeachingSubstitutionComponent_Conditional_27_Template, 8, 0, "tr")(28, TeachingSubstitutionComponent_Conditional_28_Template, 3, 0, "tr")(29, TeachingSubstitutionComponent_Conditional_29_Template, 2, 0);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(30, "div", 12)(31, "div");
      \u0275\u0275text(32, "Hi\u1EC3n th\u1ECB t\u1EEB ");
      \u0275\u0275elementStart(33, "span", 13);
      \u0275\u0275text(34);
      \u0275\u0275elementEnd();
      \u0275\u0275text(35, " \u0111\u1EBFn ");
      \u0275\u0275elementStart(36, "span", 13);
      \u0275\u0275text(37);
      \u0275\u0275elementEnd();
      \u0275\u0275text(38, " trong t\u1ED5ng s\u1ED1 ");
      \u0275\u0275elementStart(39, "span", 13);
      \u0275\u0275text(40);
      \u0275\u0275elementEnd();
      \u0275\u0275text(41, " m\u1EE5c");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "div", 14)(43, "button", 15);
      \u0275\u0275listener("click", function TeachingSubstitutionComponent_Template_button_click_43_listener() {
        return ctx.changePage(ctx.currentPage() - 1);
      });
      \u0275\u0275text(44, "Tr\u01B0\u1EDBc");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "span", 16);
      \u0275\u0275text(46);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "button", 15);
      \u0275\u0275listener("click", function TeachingSubstitutionComponent_Template_button_click_47_listener() {
        return ctx.changePage(ctx.currentPage() + 1);
      });
      \u0275\u0275text(48, "Sau");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(49, TeachingSubstitutionComponent_Conditional_49_Template, 62, 3, "div", 17);
      \u0275\u0275conditionalCreate(50, TeachingSubstitutionComponent_Conditional_50_Template, 11, 1, "div", 17);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("hasPermission", "ASSIGNMENT_CREATE");
      \u0275\u0275advance(18);
      \u0275\u0275property("hasAnyPermission", \u0275\u0275pureFunction0(12, _c07));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isLoading() ? 27 : ctx.substitutions().length === 0 ? 28 : 29);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.startIndex());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.endIndex());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.totalElements());
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", ctx.currentPage() <= 1);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2("Trang ", ctx.currentPage(), " / ", ctx.totalPages() || 1);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.currentPage() >= ctx.totalPages());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isModalOpen() ? 49 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isDeleteModalOpen() ? 50 : -1);
    }
  }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, HasPermissionDirective, DatePipe], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TeachingSubstitutionComponent, [{
    type: Component,
    args: [{ selector: "app-teaching-substitution", imports: [CommonModule, ReactiveFormsModule, HasPermissionDirective], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="p-6 space-y-6">\r
  <!-- Header section -->\r
  <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">\r
    <div>\r
      <h1 class="text-2xl font-bold text-gray-900 dark:text-white">Qu\u1EA3n l\xFD D\u1EA1y thay (Teaching Substitutions)</h1>\r
      <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">Ghi nh\u1EADn v\xE0 ph\xE2n c\xF4ng gi\xE1o vi\xEAn/tr\u1EE3 gi\u1EA3ng d\u1EA1y thay khi nh\xE2n s\u1EF1 v\u1EAFng m\u1EB7t</p>\r
    </div>\r
    <button *hasPermission="'ASSIGNMENT_CREATE'" (click)="openModal()" class="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-xl transition-colors shadow-sm shadow-blue-500/10">\r
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>\r
      </svg>\r
      Ph\xE2n c\xF4ng d\u1EA1y thay\r
    </button>\r
  </div>\r
\r
  <!-- Table Container -->\r
  <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">\r
    <!-- Table content -->\r
    <div class="overflow-x-auto">\r
      <table class="w-full text-sm text-left text-gray-600 dark:text-gray-300">\r
        <thead class="text-xs uppercase bg-gray-50 dark:bg-gray-900/50 text-gray-500 dark:text-gray-400 border-b border-gray-100 dark:border-gray-700">\r
          <tr>\r
            <th class="px-6 py-3.5 font-semibold">L\u1EDBp / L\u1ECBch h\u1ECDc</th>\r
            <th class="px-6 py-3.5 font-semibold">Gi\xE1o vi\xEAn v\u1EAFng</th>\r
            <th class="px-6 py-3.5 font-semibold">Gi\xE1o vi\xEAn d\u1EA1y thay</th>\r
            <th class="px-6 py-3.5 font-semibold">Th\u1EDDi gian</th>\r
            <th class="px-6 py-3.5 font-semibold">L\xFD do</th>\r
            <th class="px-6 py-3.5 font-semibold">Tr\u1EA1ng th\xE1i</th>\r
            <th *hasAnyPermission="['ASSIGNMENT_UPDATE', 'ASSIGNMENT_DELETE']" class="px-6 py-3.5 font-semibold text-right">Thao t\xE1c</th>\r
          </tr>\r
        </thead>\r
        <tbody class="divide-y divide-gray-100 dark:divide-gray-700">\r
          @if (isLoading()) {\r
            <tr>\r
              <td colspan="7" class="px-6 py-8 text-center text-gray-400">\r
                <div class="inline-flex items-center gap-2">\r
                  <svg class="animate-spin h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24">\r
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>\r
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>\r
                  </svg>\r
                  <span>\u0110ang t\u1EA3i d\u1EEF li\u1EC7u...</span>\r
                </div>\r
              </td>\r
            </tr>\r
          } @else if (substitutions().length === 0) {\r
            <tr>\r
              <td colspan="7" class="px-6 py-8 text-center text-gray-400">Ch\u01B0a c\xF3 th\xF4ng tin d\u1EA1y thay n\xE0o.</td>\r
            </tr>\r
          } @else {\r
            @for (item of substitutions(); track item.id) {\r
              <tr class="hover:bg-gray-50/50 dark:hover:bg-gray-700/50 transition-colors">\r
                <td class="px-6 py-4 font-medium text-gray-900 dark:text-white">\r
                  <span class="font-mono text-blue-600 dark:text-blue-400 mr-2">{{ item.classCode }}</span>\r
                  <span>{{ item.className }}</span>\r
                </td>\r
                <td class="px-6 py-4 font-medium text-rose-600 dark:text-rose-400">\r
                  <span>{{ item.absentStaffName }}</span>\r
                  <span class="text-xs text-gray-400 block font-mono">({{ item.absentStaffCode }})</span>\r
                </td>\r
                <td class="px-6 py-4 font-medium text-emerald-600 dark:text-emerald-400">\r
                  <span>{{ item.substituteStaffName }}</span>\r
                  <span class="text-xs text-gray-400 block font-mono">({{ item.substituteStaffCode }})</span>\r
                </td>\r
                <td class="px-6 py-4 text-xs">\r
                  <div>{{ item.startDate | date:'dd/MM/yyyy' }}</div>\r
                  @if (item.endDate) {\r
                    <div class="text-gray-400">\u0111\u1EBFn {{ item.endDate | date:'dd/MM/yyyy' }}</div>\r
                  }\r
                </td>\r
                <td class="px-6 py-4 max-w-xs truncate" [title]="item.reason">{{ item.reason }}</td>\r
                <td class="px-6 py-4">\r
                  @switch (item.status) {\r
                    @case ('SCHEDULED') {\r
                      <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400 border border-amber-200">L\xEAn l\u1ECBch</span>\r
                    }\r
                    @case ('COMPLETED') {\r
                      <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 border border-emerald-200">Ho\xE0n th\xE0nh</span>\r
                    }\r
                    @case ('CANCELLED') {\r
                      <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300">\u0110\xE3 h\u1EE7y</span>\r
                    }\r
                  }\r
                </td>\r
                <td *hasAnyPermission="['ASSIGNMENT_UPDATE', 'ASSIGNMENT_DELETE']" class="px-6 py-4 text-right space-x-2">\r
                  <button *hasPermission="'ASSIGNMENT_UPDATE'" (click)="openModal(item)" class="px-3 py-1.5 text-xs font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-lg transition-colors">S\u1EEDa</button>\r
                  <button *hasPermission="'ASSIGNMENT_DELETE'" (click)="onDelete(item.id)" class="px-3 py-1.5 text-xs font-medium text-rose-600 hover:text-rose-700 hover:bg-rose-50 dark:hover:bg-rose-900/30 rounded-lg transition-colors">X\xF3a</button>\r
                </td>\r
              </tr>\r
            }\r
          }\r
        </tbody>\r
      </table>\r
    </div>\r
\r
    <!-- Pagination -->\r
    <div class="p-4 border-t border-gray-100 dark:border-gray-700 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">\r
      <div>Hi\u1EC3n th\u1ECB t\u1EEB <span class="font-medium text-gray-900 dark:text-white">{{ startIndex() }}</span> \u0111\u1EBFn <span class="font-medium text-gray-900 dark:text-white">{{ endIndex() }}</span> trong t\u1ED5ng s\u1ED1 <span class="font-medium text-gray-900 dark:text-white">{{ totalElements() }}</span> m\u1EE5c</div>\r
      <div class="flex items-center gap-1">\r
        <button (click)="changePage(currentPage() - 1)" [disabled]="currentPage() <= 1" class="px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 disabled:opacity-40 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">Tr\u01B0\u1EDBc</button>\r
        <span class="px-3 py-1.5 font-medium text-gray-900 dark:text-white">Trang {{ currentPage() }} / {{ totalPages() || 1 }}</span>\r
        <button (click)="changePage(currentPage() + 1)" [disabled]="currentPage() >= totalPages()" class="px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 disabled:opacity-40 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">Sau</button>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Form Modal -->\r
  @if (isModalOpen()) {\r
    <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">\r
      <div class="bg-white dark:bg-gray-800 rounded-2xl max-w-lg w-full p-6 shadow-xl border border-gray-100 dark:border-gray-700 space-y-6">\r
        <div class="flex justify-between items-center">\r
          <h3 class="text-lg font-bold text-gray-900 dark:text-white">{{ isEditing() ? 'Ch\u1EC9nh s\u1EEDa th\xF4ng tin d\u1EA1y thay' : 'Th\xEAm d\u1EA1y thay m\u1EDBi' }}</h3>\r
          <button (click)="closeModal()" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">\r
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>\r
          </button>\r
        </div>\r
\r
        <form [formGroup]="subForm" (ngSubmit)="onSubmit()" class="space-y-4">\r
          <div>\r
            <label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">Ch\u1ECDn L\u1ECBch h\u1ECDc *</label>\r
            <select formControlName="scheduleId" class="w-full px-3 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:ring-2 focus:ring-blue-500">\r
              <option value="">-- Ch\u1ECDn l\u1ECBch h\u1ECDc --</option>\r
              @for (sch of schedules(); track sch.id) {\r
                <option [value]="sch.id">{{ sch.classCode }} ({{ sch.roomName }}) - Th\u1EE9 {{ sch.dayOfWeek }} ({{ sch.startTime }}-{{ sch.endTime }})</option>\r
              }\r
            </select>\r
          </div>\r
\r
          <div class="grid grid-cols-2 gap-4">\r
            <div>\r
              <label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">Gi\xE1o vi\xEAn v\u1EAFng m\u1EB7t *</label>\r
              <select formControlName="absentStaffId" class="w-full px-3 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:ring-2 focus:ring-blue-500">\r
                <option value="">-- Ch\u1ECDn nh\xE2n s\u1EF1 --</option>\r
                @for (s of staffs(); track s.id) {\r
                  <option [value]="s.id">{{ s.staffCode }} - {{ s.fullName }}</option>\r
                }\r
              </select>\r
            </div>\r
            <div>\r
              <label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">Gi\xE1o vi\xEAn d\u1EA1y thay *</label>\r
              <select formControlName="substituteStaffId" class="w-full px-3 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:ring-2 focus:ring-blue-500">\r
                <option value="">-- Ch\u1ECDn nh\xE2n s\u1EF1 --</option>\r
                @for (s of staffs(); track s.id) {\r
                  <option [value]="s.id">{{ s.staffCode }} - {{ s.fullName }}</option>\r
                }\r
              </select>\r
            </div>\r
          </div>\r
\r
          <div class="grid grid-cols-2 gap-4">\r
            <div>\r
              <label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">Ng\xE0y b\u1EAFt \u0111\u1EA7u *</label>\r
              <input formControlName="startDate" type="date" class="w-full px-3 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:ring-2 focus:ring-blue-500">\r
            </div>\r
            <div>\r
              <label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">Ng\xE0y k\u1EBFt th\xFAc</label>\r
              <input formControlName="endDate" type="date" class="w-full px-3 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:ring-2 focus:ring-blue-500">\r
            </div>\r
          </div>\r
\r
          <div>\r
            <label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">L\xFD do d\u1EA1y thay *</label>\r
            <textarea formControlName="reason" rows="2" placeholder="Ghi r\xF5 l\xFD do v\u1EAFng m\u1EB7t..." class="w-full px-3 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:ring-2 focus:ring-blue-500"></textarea>\r
          </div>\r
\r
          <div>\r
            <label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">Tr\u1EA1ng th\xE1i *</label>\r
            <select formControlName="status" class="w-full px-3 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:ring-2 focus:ring-blue-500">\r
              <option value="SCHEDULED">SCHEDULED (\u0110\xE3 l\xEAn l\u1ECBch)</option>\r
              <option value="COMPLETED">COMPLETED (Ho\xE0n th\xE0nh)</option>\r
              <option value="CANCELLED">CANCELLED (H\u1EE7y)</option>\r
            </select>\r
          </div>\r
\r
          <div class="flex justify-end gap-3 pt-4 border-t border-gray-100 dark:border-gray-700">\r
            <button type="button" (click)="closeModal()" class="px-4 py-2 text-xs font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl">H\u1EE7y</button>\r
            <button type="submit" [disabled]="subForm.invalid || isLoading()" class="px-4 py-2 text-xs font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-xl disabled:opacity-50">L\u01B0u</button>\r
          </div>\r
        </form>\r
      </div>\r
    </div>\r
  }\r
\r
  <!-- Delete Confirmation Modal -->\r
  @if (isDeleteModalOpen()) {\r
    <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">\r
      <div class="bg-white dark:bg-gray-800 rounded-2xl max-w-sm w-full p-6 shadow-xl border border-gray-100 dark:border-gray-700 space-y-4">\r
        <h3 class="text-base font-bold text-gray-900 dark:text-white">X\xE1c nh\u1EADn x\xF3a d\u1EA1y thay</h3>\r
        <p class="text-xs text-gray-500">B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a th\xF4ng tin d\u1EA1y thay n\xE0y?</p>\r
        <div class="flex justify-end gap-3 pt-2">\r
          <button (click)="closeDeleteModal()" class="px-4 py-2 text-xs font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl">H\u1EE7y</button>\r
          <button (click)="confirmDelete()" [disabled]="isLoading()" class="px-4 py-2 text-xs font-medium bg-rose-600 hover:bg-rose-700 text-white rounded-xl disabled:opacity-50">X\xF3a</button>\r
        </div>\r
      </div>\r
    </div>\r
  }\r
</div>\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TeachingSubstitutionComponent, { className: "TeachingSubstitutionComponent", filePath: "src/app/features/admin/pages/teaching-substitution/teaching-substitution.component.ts", lineNumber: 19 });
})();

// src/app/features/admin/pages/schedule-assignment/schedule-assignment.component.ts
var _c08 = () => ["ASSIGNMENT_UPDATE", "ASSIGNMENT_DELETE"];
var _forTrack08 = ($index, $item) => $item.id;
function ScheduleAssignmentComponent_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function ScheduleAssignmentComponent_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 19);
    \u0275\u0275element(2, "path", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Ph\xE2n c\xF4ng ca h\u1ECDc ");
    \u0275\u0275elementEnd();
  }
}
function ScheduleAssignmentComponent_th_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 21);
    \u0275\u0275text(1, "Thao t\xE1c");
    \u0275\u0275elementEnd();
  }
}
function ScheduleAssignmentComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 22)(2, "div", 23);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 24);
    \u0275\u0275element(4, "circle", 25)(5, "path", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7, "\u0110ang t\u1EA3i d\u1EEF li\u1EC7u...");
    \u0275\u0275elementEnd()()()();
  }
}
function ScheduleAssignmentComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 22);
    \u0275\u0275text(2, "Ch\u01B0a c\xF3 b\u1EA3n ghi ph\xE2n c\xF4ng ca h\u1ECDc n\xE0o.");
    \u0275\u0275elementEnd()();
  }
}
function ScheduleAssignmentComponent_Conditional_23_For_1_td_14_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 37);
    \u0275\u0275listener("click", function ScheduleAssignmentComponent_Conditional_23_For_1_td_14_button_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const item_r4 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openModal(item_r4));
    });
    \u0275\u0275text(1, "S\u1EEDa");
    \u0275\u0275elementEnd();
  }
}
function ScheduleAssignmentComponent_Conditional_23_For_1_td_14_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 38);
    \u0275\u0275listener("click", function ScheduleAssignmentComponent_Conditional_23_For_1_td_14_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const item_r4 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDelete(item_r4.id));
    });
    \u0275\u0275text(1, "X\xF3a");
    \u0275\u0275elementEnd();
  }
}
function ScheduleAssignmentComponent_Conditional_23_For_1_td_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 34);
    \u0275\u0275template(1, ScheduleAssignmentComponent_Conditional_23_For_1_td_14_button_1_Template, 2, 0, "button", 35)(2, ScheduleAssignmentComponent_Conditional_23_For_1_td_14_button_2_Template, 2, 0, "button", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("hasPermission", "ASSIGNMENT_UPDATE");
    \u0275\u0275advance();
    \u0275\u0275property("hasPermission", "ASSIGNMENT_DELETE");
  }
}
function ScheduleAssignmentComponent_Conditional_23_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 27)(1, "td", 28)(2, "span", 29);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 28)(7, "span", 30);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td", 31)(12, "span", 32);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(14, ScheduleAssignmentComponent_Conditional_23_For_1_td_14_Template, 3, 2, "td", 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r4.classCode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.className);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r4.staffCode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.teacherName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.roleLabels[item_r4.role] || item_r4.role, " ");
    \u0275\u0275advance();
    \u0275\u0275property("hasAnyPermission", \u0275\u0275pureFunction0(6, _c08));
  }
}
function ScheduleAssignmentComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ScheduleAssignmentComponent_Conditional_23_For_1_Template, 15, 7, "tr", 27, _forTrack08);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r1.assignments());
  }
}
function ScheduleAssignmentComponent_Conditional_43_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const sch_r7 = ctx.$implicit;
    \u0275\u0275property("value", sch_r7.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate5("", sch_r7.classCode, " (", sch_r7.roomName, ") - Th\u1EE9 ", sch_r7.dayOfWeek, " (", sch_r7.startTime, "-", sch_r7.endTime, ")");
  }
}
function ScheduleAssignmentComponent_Conditional_43_For_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r8 = ctx.$implicit;
    \u0275\u0275property("value", s_r8.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3("", s_r8.staffCode, " - ", s_r8.fullName, " (", s_r8.staffType, ")");
  }
}
function ScheduleAssignmentComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 39)(2, "div", 40)(3, "h3", 41);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 42);
    \u0275\u0275listener("click", function ScheduleAssignmentComponent_Conditional_43_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 19);
    \u0275\u0275element(7, "path", 43);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "form", 44);
    \u0275\u0275listener("ngSubmit", function ScheduleAssignmentComponent_Conditional_43_Template_form_ngSubmit_8_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(9, "div")(10, "label", 45);
    \u0275\u0275text(11, "Ch\u1ECDn L\u1ECBch h\u1ECDc *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "select", 46)(13, "option", 47);
    \u0275\u0275text(14, "-- Ch\u1ECDn l\u1ECBch h\u1ECDc --");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(15, ScheduleAssignmentComponent_Conditional_43_For_16_Template, 2, 6, "option", 48, _forTrack08);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div")(18, "label", 45);
    \u0275\u0275text(19, "Ch\u1ECDn Gi\xE1o vi\xEAn / Tr\u1EE3 gi\u1EA3ng *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "select", 49)(21, "option", 47);
    \u0275\u0275text(22, "-- Ch\u1ECDn nh\xE2n s\u1EF1 --");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(23, ScheduleAssignmentComponent_Conditional_43_For_24_Template, 2, 4, "option", 48, _forTrack08);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div")(26, "label", 45);
    \u0275\u0275text(27, "Vai tr\xF2 trong ca *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "select", 50)(29, "option", 51);
    \u0275\u0275text(30, "MAIN_TEACHER (Gi\xE1o vi\xEAn Vi\u1EC7t Nam)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "option", 52);
    \u0275\u0275text(32, "NATIVE_TEACHER (Gi\xE1o vi\xEAn b\u1EA3n ng\u1EEF)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "option", 53);
    \u0275\u0275text(34, "ASSISTANT (Tr\u1EE3 gi\u1EA3ng TA)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "div", 54)(36, "button", 55);
    \u0275\u0275listener("click", function ScheduleAssignmentComponent_Conditional_43_Template_button_click_36_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275text(37, "H\u1EE7y");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "button", 56);
    \u0275\u0275text(39, "L\u01B0u");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.isEditing() ? "Ch\u1EC9nh s\u1EEDa ph\xE2n c\xF4ng ca h\u1ECDc" : "Th\xEAm ph\xE2n c\xF4ng ca h\u1ECDc m\u1EDBi");
    \u0275\u0275advance(4);
    \u0275\u0275property("formGroup", ctx_r1.assignmentForm);
    \u0275\u0275advance(7);
    \u0275\u0275repeater(ctx_r1.schedules());
    \u0275\u0275advance(8);
    \u0275\u0275repeater(ctx_r1.staffs());
    \u0275\u0275advance(15);
    \u0275\u0275property("disabled", ctx_r1.assignmentForm.invalid || ctx_r1.isLoading());
  }
}
function ScheduleAssignmentComponent_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 57)(2, "h3", 58);
    \u0275\u0275text(3, "X\xE1c nh\u1EADn x\xF3a ph\xE2n c\xF4ng ca h\u1ECDc");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 59);
    \u0275\u0275text(5, "B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a b\u1EA3n ghi ph\xE2n c\xF4ng n\xE0y?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 60)(7, "button", 61);
    \u0275\u0275listener("click", function ScheduleAssignmentComponent_Conditional_44_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDeleteModal());
    });
    \u0275\u0275text(8, "H\u1EE7y");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 62);
    \u0275\u0275listener("click", function ScheduleAssignmentComponent_Conditional_44_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmDelete());
    });
    \u0275\u0275text(10, "X\xF3a");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275property("disabled", ctx_r1.isLoading());
  }
}
var ScheduleAssignmentComponent = class _ScheduleAssignmentComponent {
  assignmentService = inject(ScheduleAssignmentService);
  scheduleService = inject(ScheduleService);
  staffService = inject(StaffService);
  fb = inject(FormBuilder);
  toastService = inject(ToastService);
  assignments = signal([], ...ngDevMode ? [{ debugName: "assignments" }] : (
    /* istanbul ignore next */
    []
  ));
  schedules = signal([], ...ngDevMode ? [{ debugName: "schedules" }] : (
    /* istanbul ignore next */
    []
  ));
  staffs = signal([], ...ngDevMode ? [{ debugName: "staffs" }] : (
    /* istanbul ignore next */
    []
  ));
  totalElements = signal(0, ...ngDevMode ? [{ debugName: "totalElements" }] : (
    /* istanbul ignore next */
    []
  ));
  currentPage = signal(1, ...ngDevMode ? [{ debugName: "currentPage" }] : (
    /* istanbul ignore next */
    []
  ));
  pageSize = signal(10, ...ngDevMode ? [{ debugName: "pageSize" }] : (
    /* istanbul ignore next */
    []
  ));
  isLoading = signal(false, ...ngDevMode ? [{ debugName: "isLoading" }] : (
    /* istanbul ignore next */
    []
  ));
  isModalOpen = signal(false, ...ngDevMode ? [{ debugName: "isModalOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  isEditing = signal(false, ...ngDevMode ? [{ debugName: "isEditing" }] : (
    /* istanbul ignore next */
    []
  ));
  currentId = signal(null, ...ngDevMode ? [{ debugName: "currentId" }] : (
    /* istanbul ignore next */
    []
  ));
  assignmentForm;
  isDeleteModalOpen = signal(false, ...ngDevMode ? [{ debugName: "isDeleteModalOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  idToDelete = signal(null, ...ngDevMode ? [{ debugName: "idToDelete" }] : (
    /* istanbul ignore next */
    []
  ));
  roleLabels = {
    MAIN_TEACHER: "Gi\xE1o vi\xEAn Vi\u1EC7t Nam",
    NATIVE_TEACHER: "Gi\xE1o vi\xEAn n\u01B0\u1EDBc ngo\xE0i (Native)",
    ASSISTANT: "Tr\u1EE3 gi\u1EA3ng (TA)"
  };
  totalPages = computed(() => Math.ceil(this.totalElements() / this.pageSize()), ...ngDevMode ? [{ debugName: "totalPages" }] : (
    /* istanbul ignore next */
    []
  ));
  startIndex = computed(() => this.totalElements() === 0 ? 0 : (this.currentPage() - 1) * this.pageSize() + 1, ...ngDevMode ? [{ debugName: "startIndex" }] : (
    /* istanbul ignore next */
    []
  ));
  endIndex = computed(() => Math.min(this.currentPage() * this.pageSize(), this.totalElements()), ...ngDevMode ? [{ debugName: "endIndex" }] : (
    /* istanbul ignore next */
    []
  ));
  ngOnInit() {
    this.initForm();
    this.loadDropdowns();
    this.loadData();
  }
  initForm() {
    this.assignmentForm = this.fb.group({
      scheduleId: ["", Validators.required],
      staffId: ["", Validators.required],
      role: ["MAIN_TEACHER", Validators.required]
    });
  }
  loadDropdowns() {
    this.scheduleService.getAll(0, 100).subscribe({
      next: (res) => this.schedules.set(res.content || [])
    });
    this.staffService.getAll(void 0, 0, 100).subscribe({
      next: (res) => this.staffs.set(res.content || [])
    });
  }
  loadData() {
    this.isLoading.set(true);
    this.assignmentService.getAll(this.currentPage() - 1, this.pageSize()).subscribe({
      next: (res) => {
        this.assignments.set(res.content || []);
        this.totalElements.set(res.totalElements || 0);
        this.isLoading.set(false);
      },
      error: () => this.isLoading.set(false)
    });
  }
  changePage(page) {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage.set(page);
      this.loadData();
    }
  }
  openModal(item) {
    if (item) {
      this.isEditing.set(true);
      this.currentId.set(item.id);
      this.assignmentForm.patchValue({
        scheduleId: item.scheduleId,
        staffId: item.staffId,
        role: item.role
      });
    } else {
      this.isEditing.set(false);
      this.currentId.set(null);
      this.assignmentForm.reset({
        scheduleId: "",
        staffId: "",
        role: "MAIN_TEACHER"
      });
    }
    this.isModalOpen.set(true);
  }
  closeModal() {
    this.isModalOpen.set(false);
    this.currentId.set(null);
  }
  onSubmit() {
    if (this.assignmentForm.invalid)
      return;
    this.isLoading.set(true);
    const data = this.assignmentForm.value;
    if (data.scheduleId)
      data.scheduleId = Number(data.scheduleId);
    if (data.staffId)
      data.staffId = Number(data.staffId);
    if (this.isEditing() && this.currentId() != null) {
      this.assignmentService.update(this.currentId(), data).subscribe({
        next: () => {
          this.loadData();
          this.closeModal();
          this.toastService.success("Th\xE0nh c\xF4ng", "\u0110\xE3 c\u1EADp nh\u1EADt ph\xE2n c\xF4ng ca h\u1ECDc!");
        },
        error: (err) => {
          this.isLoading.set(false);
          this.toastService.error("Th\u1EA5t b\u1EA1i", err.error?.message || "C\xF3 l\u1ED7i x\u1EA3y ra khi c\u1EADp nh\u1EADt!");
        }
      });
    } else {
      this.assignmentService.create(data).subscribe({
        next: () => {
          this.loadData();
          this.closeModal();
          this.toastService.success("Th\xE0nh c\xF4ng", "\u0110\xE3 ph\xE2n c\xF4ng gi\xE1o vi\xEAn v\xE0o ca h\u1ECDc!");
        },
        error: (err) => {
          this.isLoading.set(false);
          this.toastService.error("Th\u1EA5t b\u1EA1i", err.error?.message || "C\xF3 l\u1ED7i x\u1EA3y ra khi th\xEAm m\u1EDBi!");
        }
      });
    }
  }
  onDelete(id) {
    this.idToDelete.set(id);
    this.isDeleteModalOpen.set(true);
  }
  closeDeleteModal() {
    this.isDeleteModalOpen.set(false);
    this.idToDelete.set(null);
  }
  confirmDelete() {
    const id = this.idToDelete();
    if (id != null) {
      this.isLoading.set(true);
      this.assignmentService.delete(id).subscribe({
        next: () => {
          this.loadData();
          this.closeDeleteModal();
          this.toastService.success("\u0110\xE3 x\xF3a", "X\xF3a ph\xE2n c\xF4ng ca h\u1ECDc th\xE0nh c\xF4ng!");
        },
        error: (err) => {
          this.isLoading.set(false);
          this.closeDeleteModal();
          this.toastService.error("L\u1ED7i x\xF3a", err.error?.message || "Kh\xF4ng th\u1EC3 x\xF3a ph\xE2n c\xF4ng ca h\u1ECDc n\xE0y!");
        }
      });
    }
  }
  static \u0275fac = function ScheduleAssignmentComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ScheduleAssignmentComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ScheduleAssignmentComponent, selectors: [["app-schedule-assignment"]], decls: 45, vars: 13, consts: [[1, "p-6", "space-y-6"], [1, "flex", "flex-col", "sm:flex-row", "justify-between", "items-start", "sm:items-center", "gap-4", "bg-white", "dark:bg-gray-800", "p-6", "rounded-2xl", "shadow-sm", "border", "border-gray-100", "dark:border-gray-700"], [1, "text-2xl", "font-bold", "text-gray-900", "dark:text-white"], [1, "text-sm", "text-gray-500", "dark:text-gray-400", "mt-1"], ["class", "inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-xl transition-colors shadow-sm shadow-blue-500/10", 3, "click", 4, "hasPermission"], [1, "bg-white", "dark:bg-gray-800", "rounded-2xl", "shadow-sm", "border", "border-gray-100", "dark:border-gray-700", "overflow-hidden"], [1, "overflow-x-auto"], [1, "w-full", "text-sm", "text-left", "text-gray-600", "dark:text-gray-300"], [1, "text-xs", "uppercase", "bg-gray-50", "dark:bg-gray-900/50", "text-gray-500", "dark:text-gray-400", "border-b", "border-gray-100", "dark:border-gray-700"], [1, "px-6", "py-3.5", "font-semibold"], ["class", "px-6 py-3.5 font-semibold text-right", 4, "hasAnyPermission"], [1, "divide-y", "divide-gray-100", "dark:divide-gray-700"], [1, "p-4", "border-t", "border-gray-100", "dark:border-gray-700", "flex", "flex-col", "sm:flex-row", "justify-between", "items-center", "gap-4", "text-xs", "text-gray-500"], [1, "font-medium", "text-gray-900", "dark:text-white"], [1, "flex", "items-center", "gap-1"], [1, "px-3", "py-1.5", "rounded-lg", "border", "border-gray-200", "dark:border-gray-700", "disabled:opacity-40", "hover:bg-gray-50", "dark:hover:bg-gray-700", "transition-colors", 3, "click", "disabled"], [1, "px-3", "py-1.5", "font-medium", "text-gray-900", "dark:text-white"], [1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "p-4", "bg-black/40", "backdrop-blur-sm"], [1, "inline-flex", "items-center", "gap-2", "px-4", "py-2.5", "bg-blue-600", "hover:bg-blue-700", "text-white", "text-sm", "font-medium", "rounded-xl", "transition-colors", "shadow-sm", "shadow-blue-500/10", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 4v16m8-8H4"], [1, "px-6", "py-3.5", "font-semibold", "text-right"], ["colspan", "4", 1, "px-6", "py-8", "text-center", "text-gray-400"], [1, "inline-flex", "items-center", "gap-2"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-5", "w-5", "text-blue-600"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"], [1, "hover:bg-gray-50/50", "dark:hover:bg-gray-700/50", "transition-colors"], [1, "px-6", "py-4", "font-medium", "text-gray-900", "dark:text-white"], [1, "font-mono", "text-blue-600", "dark:text-blue-400", "mr-2"], [1, "font-mono", "text-purple-600", "dark:text-purple-400", "mr-2"], [1, "px-6", "py-4"], [1, "inline-flex", "items-center", "px-2.5", "py-0.5", "rounded-full", "text-xs", "font-medium", "bg-emerald-50", "text-emerald-700", "dark:bg-emerald-950/40", "dark:text-emerald-400", "border", "border-emerald-200"], ["class", "px-6 py-4 text-right space-x-2", 4, "hasAnyPermission"], [1, "px-6", "py-4", "text-right", "space-x-2"], ["class", "px-3 py-1.5 text-xs font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-lg transition-colors", 3, "click", 4, "hasPermission"], ["class", "px-3 py-1.5 text-xs font-medium text-rose-600 hover:text-rose-700 hover:bg-rose-50 dark:hover:bg-rose-900/30 rounded-lg transition-colors", 3, "click", 4, "hasPermission"], [1, "px-3", "py-1.5", "text-xs", "font-medium", "text-blue-600", "hover:text-blue-700", "hover:bg-blue-50", "dark:hover:bg-blue-900/30", "rounded-lg", "transition-colors", 3, "click"], [1, "px-3", "py-1.5", "text-xs", "font-medium", "text-rose-600", "hover:text-rose-700", "hover:bg-rose-50", "dark:hover:bg-rose-900/30", "rounded-lg", "transition-colors", 3, "click"], [1, "bg-white", "dark:bg-gray-800", "rounded-2xl", "max-w-lg", "w-full", "p-6", "shadow-xl", "border", "border-gray-100", "dark:border-gray-700", "space-y-6"], [1, "flex", "justify-between", "items-center"], [1, "text-lg", "font-bold", "text-gray-900", "dark:text-white"], [1, "text-gray-400", "hover:text-gray-600", "dark:hover:text-gray-300", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "space-y-4", 3, "ngSubmit", "formGroup"], [1, "block", "text-xs", "font-semibold", "text-gray-700", "dark:text-gray-300", "mb-1"], ["formControlName", "scheduleId", 1, "w-full", "px-3", "py-2", "bg-white", "dark:bg-gray-900", "border", "border-gray-200", "dark:border-gray-700", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-500"], ["value", ""], [3, "value"], ["formControlName", "staffId", 1, "w-full", "px-3", "py-2", "bg-white", "dark:bg-gray-900", "border", "border-gray-200", "dark:border-gray-700", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-500"], ["formControlName", "role", 1, "w-full", "px-3", "py-2", "bg-white", "dark:bg-gray-900", "border", "border-gray-200", "dark:border-gray-700", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-500"], ["value", "MAIN_TEACHER"], ["value", "NATIVE_TEACHER"], ["value", "ASSISTANT"], [1, "flex", "justify-end", "gap-3", "pt-4", "border-t", "border-gray-100", "dark:border-gray-700"], ["type", "button", 1, "px-4", "py-2", "text-xs", "font-medium", "text-gray-600", "dark:text-gray-300", "hover:bg-gray-100", "dark:hover:bg-gray-700", "rounded-xl", 3, "click"], ["type", "submit", 1, "px-4", "py-2", "text-xs", "font-medium", "bg-blue-600", "hover:bg-blue-700", "text-white", "rounded-xl", "disabled:opacity-50", 3, "disabled"], [1, "bg-white", "dark:bg-gray-800", "rounded-2xl", "max-w-sm", "w-full", "p-6", "shadow-xl", "border", "border-gray-100", "dark:border-gray-700", "space-y-4"], [1, "text-base", "font-bold", "text-gray-900", "dark:text-white"], [1, "text-xs", "text-gray-500"], [1, "flex", "justify-end", "gap-3", "pt-2"], [1, "px-4", "py-2", "text-xs", "font-medium", "text-gray-600", "dark:text-gray-300", "hover:bg-gray-100", "dark:hover:bg-gray-700", "rounded-xl", 3, "click"], [1, "px-4", "py-2", "text-xs", "font-medium", "bg-rose-600", "hover:bg-rose-700", "text-white", "rounded-xl", "disabled:opacity-50", 3, "click", "disabled"]], template: function ScheduleAssignmentComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Ph\xE2n c\xF4ng theo Ca h\u1ECDc (Schedule Assignments)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "G\xE1n gi\xE1o vi\xEAn Vi\u1EC7t Nam, gi\xE1o vi\xEAn b\u1EA3n ng\u1EEF ho\u1EB7c tr\u1EE3 gi\u1EA3ng cho t\u1EEBng khung gi\u1EDD h\u1ECDc");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(7, ScheduleAssignmentComponent_button_7_Template, 4, 0, "button", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 5)(9, "div", 6)(10, "table", 7)(11, "thead", 8)(12, "tr")(13, "th", 9);
      \u0275\u0275text(14, "L\u1EDBp h\u1ECDc");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "th", 9);
      \u0275\u0275text(16, "Nh\xE2n s\u1EF1 / Gi\xE1o vi\xEAn");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "th", 9);
      \u0275\u0275text(18, "Vai tr\xF2 ca h\u1ECDc");
      \u0275\u0275elementEnd();
      \u0275\u0275template(19, ScheduleAssignmentComponent_th_19_Template, 2, 0, "th", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "tbody", 11);
      \u0275\u0275conditionalCreate(21, ScheduleAssignmentComponent_Conditional_21_Template, 8, 0, "tr")(22, ScheduleAssignmentComponent_Conditional_22_Template, 3, 0, "tr")(23, ScheduleAssignmentComponent_Conditional_23_Template, 2, 0);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(24, "div", 12)(25, "div");
      \u0275\u0275text(26, "Hi\u1EC3n th\u1ECB t\u1EEB ");
      \u0275\u0275elementStart(27, "span", 13);
      \u0275\u0275text(28);
      \u0275\u0275elementEnd();
      \u0275\u0275text(29, " \u0111\u1EBFn ");
      \u0275\u0275elementStart(30, "span", 13);
      \u0275\u0275text(31);
      \u0275\u0275elementEnd();
      \u0275\u0275text(32, " trong t\u1ED5ng s\u1ED1 ");
      \u0275\u0275elementStart(33, "span", 13);
      \u0275\u0275text(34);
      \u0275\u0275elementEnd();
      \u0275\u0275text(35, " m\u1EE5c");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "div", 14)(37, "button", 15);
      \u0275\u0275listener("click", function ScheduleAssignmentComponent_Template_button_click_37_listener() {
        return ctx.changePage(ctx.currentPage() - 1);
      });
      \u0275\u0275text(38, "Tr\u01B0\u1EDBc");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "span", 16);
      \u0275\u0275text(40);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "button", 15);
      \u0275\u0275listener("click", function ScheduleAssignmentComponent_Template_button_click_41_listener() {
        return ctx.changePage(ctx.currentPage() + 1);
      });
      \u0275\u0275text(42, "Sau");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(43, ScheduleAssignmentComponent_Conditional_43_Template, 40, 3, "div", 17);
      \u0275\u0275conditionalCreate(44, ScheduleAssignmentComponent_Conditional_44_Template, 11, 1, "div", 17);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("hasPermission", "ASSIGNMENT_CREATE");
      \u0275\u0275advance(12);
      \u0275\u0275property("hasAnyPermission", \u0275\u0275pureFunction0(12, _c08));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isLoading() ? 21 : ctx.assignments().length === 0 ? 22 : 23);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.startIndex());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.endIndex());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.totalElements());
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", ctx.currentPage() <= 1);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2("Trang ", ctx.currentPage(), " / ", ctx.totalPages() || 1);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.currentPage() >= ctx.totalPages());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isModalOpen() ? 43 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isDeleteModalOpen() ? 44 : -1);
    }
  }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, HasPermissionDirective], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScheduleAssignmentComponent, [{
    type: Component,
    args: [{ selector: "app-schedule-assignment", imports: [CommonModule, ReactiveFormsModule, HasPermissionDirective], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="p-6 space-y-6">\r
  <!-- Header section -->\r
  <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">\r
    <div>\r
      <h1 class="text-2xl font-bold text-gray-900 dark:text-white">Ph\xE2n c\xF4ng theo Ca h\u1ECDc (Schedule Assignments)</h1>\r
      <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">G\xE1n gi\xE1o vi\xEAn Vi\u1EC7t Nam, gi\xE1o vi\xEAn b\u1EA3n ng\u1EEF ho\u1EB7c tr\u1EE3 gi\u1EA3ng cho t\u1EEBng khung gi\u1EDD h\u1ECDc</p>\r
    </div>\r
    <button *hasPermission="'ASSIGNMENT_CREATE'" (click)="openModal()" class="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-xl transition-colors shadow-sm shadow-blue-500/10">\r
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>\r
      </svg>\r
      Ph\xE2n c\xF4ng ca h\u1ECDc\r
    </button>\r
  </div>\r
\r
  <!-- Table Container -->\r
  <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">\r
    <!-- Table content -->\r
    <div class="overflow-x-auto">\r
      <table class="w-full text-sm text-left text-gray-600 dark:text-gray-300">\r
        <thead class="text-xs uppercase bg-gray-50 dark:bg-gray-900/50 text-gray-500 dark:text-gray-400 border-b border-gray-100 dark:border-gray-700">\r
          <tr>\r
            <th class="px-6 py-3.5 font-semibold">L\u1EDBp h\u1ECDc</th>\r
            <th class="px-6 py-3.5 font-semibold">Nh\xE2n s\u1EF1 / Gi\xE1o vi\xEAn</th>\r
            <th class="px-6 py-3.5 font-semibold">Vai tr\xF2 ca h\u1ECDc</th>\r
            <th *hasAnyPermission="['ASSIGNMENT_UPDATE', 'ASSIGNMENT_DELETE']" class="px-6 py-3.5 font-semibold text-right">Thao t\xE1c</th>\r
          </tr>\r
        </thead>\r
        <tbody class="divide-y divide-gray-100 dark:divide-gray-700">\r
          @if (isLoading()) {\r
            <tr>\r
              <td colspan="4" class="px-6 py-8 text-center text-gray-400">\r
                <div class="inline-flex items-center gap-2">\r
                  <svg class="animate-spin h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24">\r
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>\r
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>\r
                  </svg>\r
                  <span>\u0110ang t\u1EA3i d\u1EEF li\u1EC7u...</span>\r
                </div>\r
              </td>\r
            </tr>\r
          } @else if (assignments().length === 0) {\r
            <tr>\r
              <td colspan="4" class="px-6 py-8 text-center text-gray-400">Ch\u01B0a c\xF3 b\u1EA3n ghi ph\xE2n c\xF4ng ca h\u1ECDc n\xE0o.</td>\r
            </tr>\r
          } @else {\r
            @for (item of assignments(); track item.id) {\r
              <tr class="hover:bg-gray-50/50 dark:hover:bg-gray-700/50 transition-colors">\r
                <td class="px-6 py-4 font-medium text-gray-900 dark:text-white">\r
                  <span class="font-mono text-blue-600 dark:text-blue-400 mr-2">{{ item.classCode }}</span>\r
                  <span>{{ item.className }}</span>\r
                </td>\r
                <td class="px-6 py-4 font-medium text-gray-900 dark:text-white">\r
                  <span class="font-mono text-purple-600 dark:text-purple-400 mr-2">{{ item.staffCode }}</span>\r
                  <span>{{ item.teacherName }}</span>\r
                </td>\r
                <td class="px-6 py-4">\r
                  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 border border-emerald-200">\r
                    {{ roleLabels[item.role] || item.role }}\r
                  </span>\r
                </td>\r
                <td *hasAnyPermission="['ASSIGNMENT_UPDATE', 'ASSIGNMENT_DELETE']" class="px-6 py-4 text-right space-x-2">\r
                  <button *hasPermission="'ASSIGNMENT_UPDATE'" (click)="openModal(item)" class="px-3 py-1.5 text-xs font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-lg transition-colors">S\u1EEDa</button>\r
                  <button *hasPermission="'ASSIGNMENT_DELETE'" (click)="onDelete(item.id)" class="px-3 py-1.5 text-xs font-medium text-rose-600 hover:text-rose-700 hover:bg-rose-50 dark:hover:bg-rose-900/30 rounded-lg transition-colors">X\xF3a</button>\r
                </td>\r
              </tr>\r
            }\r
          }\r
        </tbody>\r
      </table>\r
    </div>\r
\r
    <!-- Pagination -->\r
    <div class="p-4 border-t border-gray-100 dark:border-gray-700 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">\r
      <div>Hi\u1EC3n th\u1ECB t\u1EEB <span class="font-medium text-gray-900 dark:text-white">{{ startIndex() }}</span> \u0111\u1EBFn <span class="font-medium text-gray-900 dark:text-white">{{ endIndex() }}</span> trong t\u1ED5ng s\u1ED1 <span class="font-medium text-gray-900 dark:text-white">{{ totalElements() }}</span> m\u1EE5c</div>\r
      <div class="flex items-center gap-1">\r
        <button (click)="changePage(currentPage() - 1)" [disabled]="currentPage() <= 1" class="px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 disabled:opacity-40 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">Tr\u01B0\u1EDBc</button>\r
        <span class="px-3 py-1.5 font-medium text-gray-900 dark:text-white">Trang {{ currentPage() }} / {{ totalPages() || 1 }}</span>\r
        <button (click)="changePage(currentPage() + 1)" [disabled]="currentPage() >= totalPages()" class="px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 disabled:opacity-40 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">Sau</button>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Form Modal -->\r
  @if (isModalOpen()) {\r
    <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">\r
      <div class="bg-white dark:bg-gray-800 rounded-2xl max-w-lg w-full p-6 shadow-xl border border-gray-100 dark:border-gray-700 space-y-6">\r
        <div class="flex justify-between items-center">\r
          <h3 class="text-lg font-bold text-gray-900 dark:text-white">{{ isEditing() ? 'Ch\u1EC9nh s\u1EEDa ph\xE2n c\xF4ng ca h\u1ECDc' : 'Th\xEAm ph\xE2n c\xF4ng ca h\u1ECDc m\u1EDBi' }}</h3>\r
          <button (click)="closeModal()" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">\r
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>\r
          </button>\r
        </div>\r
\r
        <form [formGroup]="assignmentForm" (ngSubmit)="onSubmit()" class="space-y-4">\r
          <div>\r
            <label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">Ch\u1ECDn L\u1ECBch h\u1ECDc *</label>\r
            <select formControlName="scheduleId" class="w-full px-3 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:ring-2 focus:ring-blue-500">\r
              <option value="">-- Ch\u1ECDn l\u1ECBch h\u1ECDc --</option>\r
              @for (sch of schedules(); track sch.id) {\r
                <option [value]="sch.id">{{ sch.classCode }} ({{ sch.roomName }}) - Th\u1EE9 {{ sch.dayOfWeek }} ({{ sch.startTime }}-{{ sch.endTime }})</option>\r
              }\r
            </select>\r
          </div>\r
\r
          <div>\r
            <label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">Ch\u1ECDn Gi\xE1o vi\xEAn / Tr\u1EE3 gi\u1EA3ng *</label>\r
            <select formControlName="staffId" class="w-full px-3 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:ring-2 focus:ring-blue-500">\r
              <option value="">-- Ch\u1ECDn nh\xE2n s\u1EF1 --</option>\r
              @for (s of staffs(); track s.id) {\r
                <option [value]="s.id">{{ s.staffCode }} - {{ s.fullName }} ({{ s.staffType }})</option>\r
              }\r
            </select>\r
          </div>\r
\r
          <div>\r
            <label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">Vai tr\xF2 trong ca *</label>\r
            <select formControlName="role" class="w-full px-3 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:ring-2 focus:ring-blue-500">\r
              <option value="MAIN_TEACHER">MAIN_TEACHER (Gi\xE1o vi\xEAn Vi\u1EC7t Nam)</option>\r
              <option value="NATIVE_TEACHER">NATIVE_TEACHER (Gi\xE1o vi\xEAn b\u1EA3n ng\u1EEF)</option>\r
              <option value="ASSISTANT">ASSISTANT (Tr\u1EE3 gi\u1EA3ng TA)</option>\r
            </select>\r
          </div>\r
\r
          <div class="flex justify-end gap-3 pt-4 border-t border-gray-100 dark:border-gray-700">\r
            <button type="button" (click)="closeModal()" class="px-4 py-2 text-xs font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl">H\u1EE7y</button>\r
            <button type="submit" [disabled]="assignmentForm.invalid || isLoading()" class="px-4 py-2 text-xs font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-xl disabled:opacity-50">L\u01B0u</button>\r
          </div>\r
        </form>\r
      </div>\r
    </div>\r
  }\r
\r
  <!-- Delete Confirmation Modal -->\r
  @if (isDeleteModalOpen()) {\r
    <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">\r
      <div class="bg-white dark:bg-gray-800 rounded-2xl max-w-sm w-full p-6 shadow-xl border border-gray-100 dark:border-gray-700 space-y-4">\r
        <h3 class="text-base font-bold text-gray-900 dark:text-white">X\xE1c nh\u1EADn x\xF3a ph\xE2n c\xF4ng ca h\u1ECDc</h3>\r
        <p class="text-xs text-gray-500">B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a b\u1EA3n ghi ph\xE2n c\xF4ng n\xE0y?</p>\r
        <div class="flex justify-end gap-3 pt-2">\r
          <button (click)="closeDeleteModal()" class="px-4 py-2 text-xs font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl">H\u1EE7y</button>\r
          <button (click)="confirmDelete()" [disabled]="isLoading()" class="px-4 py-2 text-xs font-medium bg-rose-600 hover:bg-rose-700 text-white rounded-xl disabled:opacity-50">X\xF3a</button>\r
        </div>\r
      </div>\r
    </div>\r
  }\r
</div>\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ScheduleAssignmentComponent, { className: "ScheduleAssignmentComponent", filePath: "src/app/features/admin/pages/schedule-assignment/schedule-assignment.component.ts", lineNumber: 19 });
})();

// src/app/features/admin/pages/reporting/admin-reporting.component.ts
var _c09 = () => ["REPORT_CREATE", "REPORT_UPDATE"];
function AdminReportingComponent_button_16_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 17);
    \u0275\u0275element(1, "circle", 18)(2, "path", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " \u0110ang \u0111\u1ED3ng b\u1ED9... ");
  }
}
function AdminReportingComponent_button_16_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 20);
    \u0275\u0275element(1, "path", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " \u0110\u1ED3ng b\u1ED9 s\u1ED1 li\u1EC7u ng\xE0y ");
  }
}
function AdminReportingComponent_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275listener("click", function AdminReportingComponent_button_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.syncDailyReport());
    });
    \u0275\u0275conditionalCreate(1, AdminReportingComponent_button_16_Conditional_1_Template, 4, 0)(2, AdminReportingComponent_button_16_Conditional_2_Template, 3, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r3.isSyncing());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.isSyncing() ? 1 : 2);
  }
}
function AdminReportingComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 22);
    \u0275\u0275element(2, "circle", 18)(3, "path", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " \u0110ang t\u1EA3i s\u1ED1 li\u1EC7u th\u1ED1ng k\xEA trung t\xE2m... ");
    \u0275\u0275elementEnd();
  }
}
function AdminReportingComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 24)(2, "div", 25)(3, "span", 26);
    \u0275\u0275text(4, "H\u1ECDc vi\xEAn");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 27);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 28);
    \u0275\u0275element(7, "path", 29);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "div", 30)(9, "h3", 31);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 32);
    \u0275\u0275text(12, "\u0110ang theo h\u1ECDc t\u1EA1i trung t\xE2m");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 33)(14, "span", 34);
    \u0275\u0275element(15, "span", 35);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 36);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 24)(20, "div", 25)(21, "span", 37);
    \u0275\u0275text(22, "Gi\u1EA3ng vi\xEAn");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 38);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(24, "svg", 28);
    \u0275\u0275element(25, "path", 39);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(26, "div", 30)(27, "h3", 31);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "p", 32);
    \u0275\u0275text(30, "Gi\u1EA3ng vi\xEAn & Tr\u1EE3 gi\u1EA3ng active");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 33)(32, "span", 40);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "span", 36);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "div", 24)(37, "div", 25)(38, "span", 41);
    \u0275\u0275text(39, "Nh\xE2n s\u1EF1 ph\xF2ng ban");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 42);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(41, "svg", 28);
    \u0275\u0275element(42, "path", 43);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(43, "div", 30)(44, "h3", 31);
    \u0275\u0275text(45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "p", 32);
    \u0275\u0275text(47, "Nh\xE2n vi\xEAn h\xE0nh ch\xEDnh / qu\u1EA3n l\xFD");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 33)(49, "span", 40);
    \u0275\u0275text(50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "span", 36);
    \u0275\u0275text(52);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(53, "div", 24)(54, "div", 25)(55, "span", 44);
    \u0275\u0275text(56, "Kh\xF3a & L\u1EDBp h\u1ECDc");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "div", 45);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(58, "svg", 28);
    \u0275\u0275element(59, "path", 46);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(60, "div", 47)(61, "h3", 31);
    \u0275\u0275text(62);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "span", 48);
    \u0275\u0275text(64);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "div", 33)(66, "span", 40);
    \u0275\u0275text(67);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "span", 49);
    \u0275\u0275text(69);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(70, "div", 50)(71, "div", 51)(72, "div")(73, "h2", 52);
    \u0275\u0275text(74, "Bi\u1EBFn \u0110\u1ED9ng S\u1ED1 Li\u1EC7u Theo Kho\u1EA3ng Th\u1EDDi Gian");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "p", 53);
    \u0275\u0275text(76, "T\u1ED5ng h\u1EE3p t\u0103ng gi\u1EA3m quy m\xF4 h\u1ECDc vi\xEAn, nh\xE2n s\u1EF1 v\xE0 l\u1EDBp h\u1ECDc trong giai \u0111o\u1EA1n l\u1EF1a ch\u1ECDn");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(77, "div", 54)(78, "div", 55);
    \u0275\u0275listener("click", function AdminReportingComponent_Conditional_18_Template_div_click_78_listener() {
      \u0275\u0275restoreView(_r5);
      const startDatePicker_r6 = \u0275\u0275reference(83);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.openPicker(startDatePicker_r6));
    });
    \u0275\u0275elementStart(79, "span", 56);
    \u0275\u0275text(80, "T\u1EEB:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "input", 57);
    \u0275\u0275listener("input", function AdminReportingComponent_Conditional_18_Template_input_input_81_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onDateTextInput($event, "start"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "input", 13, 1);
    \u0275\u0275listener("change", function AdminReportingComponent_Conditional_18_Template_input_change_82_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onDatePickerChange($event, "start"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(84, "span", 58);
    \u0275\u0275text(85, "|");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "div", 55);
    \u0275\u0275listener("click", function AdminReportingComponent_Conditional_18_Template_div_click_86_listener() {
      \u0275\u0275restoreView(_r5);
      const endDatePicker_r7 = \u0275\u0275reference(91);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.openPicker(endDatePicker_r7));
    });
    \u0275\u0275elementStart(87, "span", 56);
    \u0275\u0275text(88, "\u0110\u1EBFn:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "input", 57);
    \u0275\u0275listener("input", function AdminReportingComponent_Conditional_18_Template_input_input_89_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onDateTextInput($event, "end"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "input", 13, 2);
    \u0275\u0275listener("change", function AdminReportingComponent_Conditional_18_Template_input_change_90_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onDatePickerChange($event, "end"));
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(92, "div", 59)(93, "div", 60)(94, "p", 61);
    \u0275\u0275text(95, "HV m\u1EDBi trong k\u1EF3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "p", 62);
    \u0275\u0275text(97);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(98, "p", 63);
    \u0275\u0275text(99, "H\u1ECDc vi\xEAn \u0111\u0103ng k\xFD m\u1EDBi");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(100, "div", 60)(101, "p", 61);
    \u0275\u0275text(102, "HV th\xF4i h\u1ECDc trong k\u1EF3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(103, "p", 64);
    \u0275\u0275text(104);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(105, "p", 63);
    \u0275\u0275text(106, "H\u1ECDc vi\xEAn ngh\u1EC9 h\u1ECDc");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(107, "div", 60)(108, "p", 61);
    \u0275\u0275text(109, "GV & Nh\xE2n s\u1EF1 m\u1EDBi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(110, "p", 65);
    \u0275\u0275text(111);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(112, "p", 63);
    \u0275\u0275text(113, "Tuy\u1EC3n d\u1EE5ng m\u1EDBi");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(114, "div", 60)(115, "p", 61);
    \u0275\u0275text(116, "L\u1EDBp m\u1EDF m\u1EDBi trong k\u1EF3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(117, "p", 66);
    \u0275\u0275text(118);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(119, "p", 63);
    \u0275\u0275text(120, "L\u1EDBp h\u1ECDc khai gi\u1EA3ng");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    const snap_r8 = ctx_r3.dailySnapshot();
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate((snap_r8 == null ? null : snap_r8.totalActiveStudents) || 0);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" +", (snap_r8 == null ? null : snap_r8.newStudentsToday) || 0, " m\u1EDBi h\xF4m nay ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" -", (snap_r8 == null ? null : snap_r8.droppedStudentsToday) || 0, " ngh\u1EC9 h\u1ECDc ");
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate((snap_r8 == null ? null : snap_r8.totalTeachers) || 0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" +", (snap_r8 == null ? null : snap_r8.newTeachersToday) || 0, " m\u1EDBi ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" -", (snap_r8 == null ? null : snap_r8.resignedTeachersToday) || 0, " ngh\u1EC9 vi\u1EC7c ");
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate((snap_r8 == null ? null : snap_r8.totalOtherStaffs) || 0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" +", (snap_r8 == null ? null : snap_r8.newStaffsToday) || 0, " tuy\u1EC3n m\u1EDBi ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" -", (snap_r8 == null ? null : snap_r8.resignedStaffsToday) || 0, " th\xF4i vi\u1EC7c ");
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate((snap_r8 == null ? null : snap_r8.totalActiveClasses) || 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("L\u1EDBp active / ", (snap_r8 == null ? null : snap_r8.totalCourses) || 0, " Kh\xF3a");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" +", (snap_r8 == null ? null : snap_r8.newClassesOpened) || 0, " l\u1EDBp m\u1EDF m\u1EDBi ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (snap_r8 == null ? null : snap_r8.classesClosedToday) || 0, " b\u1EBF gi\u1EA3ng ");
    \u0275\u0275advance(12);
    \u0275\u0275property("value", ctx_r3.rangeStartDateFormatted());
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r3.rangeStartDate());
    \u0275\u0275advance(7);
    \u0275\u0275property("value", ctx_r3.rangeEndDateFormatted());
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r3.rangeEndDate());
    const sum_r9 = ctx_r3.rangeSummary();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("+", (sum_r9 == null ? null : sum_r9.totalNewStudentsInRange) || 0);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("-", (sum_r9 == null ? null : sum_r9.totalDroppedStudentsInRange) || 0);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("+", ((sum_r9 == null ? null : sum_r9.totalNewTeachersInRange) || 0) + ((sum_r9 == null ? null : sum_r9.totalNewStaffsInRange) || 0));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("+", (sum_r9 == null ? null : sum_r9.totalNewClassesOpenedInRange) || 0);
  }
}
var AdminReportingComponent = class _AdminReportingComponent {
  reportsService = inject(ReportsService);
  toastService = inject(ToastService);
  // Selected single date for center statistics snapshot (YYYY-MM-DD)
  selectedDate = signal(this.getTodayString(), ...ngDevMode ? [{ debugName: "selectedDate" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedDateFormatted = computed(() => this.formatDateVn(this.selectedDate()), ...ngDevMode ? [{ debugName: "selectedDateFormatted" }] : (
    /* istanbul ignore next */
    []
  ));
  // Range dates for aggregate KPI statistics (YYYY-MM-DD)
  rangeStartDate = signal(this.getDaysAgoString(30), ...ngDevMode ? [{ debugName: "rangeStartDate" }] : (
    /* istanbul ignore next */
    []
  ));
  rangeEndDate = signal(this.getTodayString(), ...ngDevMode ? [{ debugName: "rangeEndDate" }] : (
    /* istanbul ignore next */
    []
  ));
  rangeStartDateFormatted = computed(() => this.formatDateVn(this.rangeStartDate()), ...ngDevMode ? [{ debugName: "rangeStartDateFormatted" }] : (
    /* istanbul ignore next */
    []
  ));
  rangeEndDateFormatted = computed(() => this.formatDateVn(this.rangeEndDate()), ...ngDevMode ? [{ debugName: "rangeEndDateFormatted" }] : (
    /* istanbul ignore next */
    []
  ));
  // Data signals from report_center_statistics
  dailySnapshot = signal(null, ...ngDevMode ? [{ debugName: "dailySnapshot" }] : (
    /* istanbul ignore next */
    []
  ));
  rangeSummary = signal(null, ...ngDevMode ? [{ debugName: "rangeSummary" }] : (
    /* istanbul ignore next */
    []
  ));
  // Loading & Syncing states
  isLoadingSnapshot = signal(false, ...ngDevMode ? [{ debugName: "isLoadingSnapshot" }] : (
    /* istanbul ignore next */
    []
  ));
  isLoadingRange = signal(false, ...ngDevMode ? [{ debugName: "isLoadingRange" }] : (
    /* istanbul ignore next */
    []
  ));
  isSyncing = signal(false, ...ngDevMode ? [{ debugName: "isSyncing" }] : (
    /* istanbul ignore next */
    []
  ));
  ngOnInit() {
    this.loadSnapshotData();
    this.loadRangeData();
  }
  loadSnapshotData() {
    this.isLoadingSnapshot.set(true);
    const date = this.selectedDate();
    this.reportsService.getReportByDate(date).subscribe({
      next: (data) => {
        this.dailySnapshot.set(data);
        this.isLoadingSnapshot.set(false);
      },
      error: () => {
        this.reportsService.getLatestReport().subscribe({
          next: (latest) => {
            this.dailySnapshot.set(latest);
            this.isLoadingSnapshot.set(false);
          },
          error: (err) => {
            this.toastService.error("L\u1ED7i", "Kh\xF4ng th\u1EC3 t\u1EA3i s\u1ED1 li\u1EC7u th\u1ED1ng k\xEA trung t\xE2m: " + (err.error?.message || err.message));
            this.isLoadingSnapshot.set(false);
          }
        });
      }
    });
  }
  loadRangeData() {
    const start = this.rangeStartDate();
    const end = this.rangeEndDate();
    if (!start || !end)
      return;
    this.isLoadingRange.set(true);
    this.reportsService.getSummaryReportBetween(start, end).subscribe({
      next: (summary) => {
        this.rangeSummary.set(summary);
        this.isLoadingRange.set(false);
      },
      error: (err) => {
        this.toastService.error("L\u1ED7i", "Kh\xF4ng th\u1EC3 t\u1EA3i d\u1EEF li\u1EC7u bi\u1EBFn \u0111\u1ED9ng t\u1ED5ng h\u1EE3p: " + (err.error?.message || err.message));
        this.isLoadingRange.set(false);
      }
    });
  }
  openPicker(element) {
    try {
      if ("showPicker" in element && typeof element.showPicker === "function") {
        element.showPicker();
      } else {
        element.click();
      }
    } catch (e) {
      element.click();
    }
  }
  onDatePickerChange(event, target) {
    const val = event.target.value;
    if (val) {
      if (target === "selected") {
        this.selectedDate.set(val);
        this.loadSnapshotData();
      } else if (target === "start") {
        this.rangeStartDate.set(val);
        this.loadRangeData();
      } else if (target === "end") {
        this.rangeEndDate.set(val);
        this.loadRangeData();
      }
    }
  }
  onDateTextInput(event, target) {
    const input = event.target;
    let val = input.value.replace(/\D/g, "");
    if (val.length >= 2)
      val = val.substring(0, 2) + "/" + val.substring(2);
    if (val.length >= 5)
      val = val.substring(0, 5) + "/" + val.substring(5, 9);
    input.value = val;
    if (val.length === 10) {
      const parts = val.split("/");
      if (parts.length === 3) {
        const day = parts[0];
        const month = parts[1];
        const year = parts[2];
        const iso = `${year}-${month}-${day}`;
        if (!isNaN(Date.parse(iso))) {
          if (target === "selected") {
            this.selectedDate.set(iso);
            this.loadSnapshotData();
          } else if (target === "start") {
            this.rangeStartDate.set(iso);
            this.loadRangeData();
          } else if (target === "end") {
            this.rangeEndDate.set(iso);
            this.loadRangeData();
          }
        }
      }
    }
  }
  syncDailyReport() {
    this.isSyncing.set(true);
    this.reportsService.syncDailyReport(this.selectedDate()).subscribe({
      next: (res) => {
        this.toastService.success("Th\xE0nh c\xF4ng", res?.message || "\u0110\u1ED3ng b\u1ED9 s\u1ED1 li\u1EC7u th\u1ED1ng k\xEA trung t\xE2m th\xE0nh c\xF4ng!");
        this.isSyncing.set(false);
        this.loadSnapshotData();
        this.loadRangeData();
      },
      error: (err) => {
        this.toastService.error("Th\u1EA5t b\u1EA1i", "\u0110\u1ED3ng b\u1ED9 d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i: " + (err.error?.message || err.message));
        this.isSyncing.set(false);
      }
    });
  }
  formatDateVn(dateStr) {
    if (!dateStr)
      return "";
    const parts = dateStr.split("-");
    if (parts.length === 3) {
      return `${parts[2]}/${parts[1]}/${parts[0]}`;
    }
    return dateStr;
  }
  getTodayString() {
    const d = /* @__PURE__ */ new Date();
    return d.toISOString().split("T")[0];
  }
  getDaysAgoString(days) {
    const d = /* @__PURE__ */ new Date();
    d.setDate(d.getDate() - days);
    return d.toISOString().split("T")[0];
  }
  static \u0275fac = function AdminReportingComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminReportingComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminReportingComponent, selectors: [["app-admin-reporting"]], decls: 19, vars: 5, consts: [["snapDatePicker", ""], ["startDatePicker", ""], ["endDatePicker", ""], [1, "space-y-6"], [1, "flex", "flex-col", "md:flex-row", "md:items-center", "justify-between", "gap-4", "pb-4", "border-b", "border-gray-100"], [1, "text-2xl", "font-extrabold", "text-gray-900", "tracking-tight"], [1, "text-sm", "text-gray-500", "mt-1"], [1, "flex", "flex-col", "sm:flex-row", "items-stretch", "sm:items-center", "gap-3"], [1, "relative", "flex", "items-center", "bg-white", "px-3.5", "py-2", "rounded-xl", "border", "border-gray-200", "shadow-sm", "cursor-pointer", 3, "click"], [1, "text-xs", "font-bold", "text-gray-500", "uppercase", "whitespace-nowrap", "mr-2"], ["type", "text", "placeholder", "dd/MM/yyyy", "maxlength", "10", 1, "w-24", "text-sm", "font-semibold", "text-gray-900", "bg-transparent", "outline-none", "cursor-pointer", 3, "input", "value"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "ml-1.5", "text-gray-400", "hover:text-blue-600", "transition"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"], ["type", "date", 1, "sr-only", "opacity-0", "w-0", "h-0", "absolute", "pointer-events-none", 3, "change", "value"], ["class", "bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-semibold py-2.5 px-4 rounded-xl flex items-center justify-center transition shadow-md text-sm", 3, "disabled", "click", 4, "hasAnyPermission"], [1, "bg-white", "rounded-2xl", "p-12", "text-center", "text-gray-500", "shadow-sm", "border", "border-gray-100"], [1, "bg-blue-600", "hover:bg-blue-700", "disabled:opacity-50", "text-white", "font-semibold", "py-2.5", "px-4", "rounded-xl", "flex", "items-center", "justify-center", "transition", "shadow-md", "text-sm", 3, "click", "disabled"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "-ml-1", "mr-2", "h-4", "w-4", "text-white"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "mr-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "mx-auto", "h-8", "w-8", "text-blue-500", "mb-3"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-4", "gap-5"], [1, "bg-white", "rounded-2xl", "p-5", "border", "border-gray-100", "shadow-sm", "relative", "overflow-hidden", "group", "hover:shadow-md", "transition", "duration-200"], [1, "flex", "items-center", "justify-between"], [1, "text-xs", "font-bold", "text-blue-600", "uppercase", "tracking-wider", "bg-blue-50", "px-2.5", "py-1", "rounded-lg"], [1, "p-2.5", "bg-blue-50", "rounded-xl", "text-blue-600"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"], [1, "mt-4"], [1, "text-3xl", "font-black", "text-gray-900"], [1, "text-xs", "text-gray-500", "font-medium", "mt-1"], [1, "mt-4", "pt-3", "border-t", "border-gray-100", "flex", "items-center", "justify-between", "text-xs", "font-semibold"], [1, "text-emerald-600", "flex", "items-center"], [1, "inline-block", "w-2", "h-2", "rounded-full", "bg-emerald-500", "mr-1.5"], [1, "text-rose-600"], [1, "text-xs", "font-bold", "text-indigo-600", "uppercase", "tracking-wider", "bg-indigo-50", "px-2.5", "py-1", "rounded-lg"], [1, "p-2.5", "bg-indigo-50", "rounded-xl", "text-indigo-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"], [1, "text-emerald-600"], [1, "text-xs", "font-bold", "text-amber-600", "uppercase", "tracking-wider", "bg-amber-50", "px-2.5", "py-1", "rounded-lg"], [1, "p-2.5", "bg-amber-50", "rounded-xl", "text-amber-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"], [1, "text-xs", "font-bold", "text-emerald-600", "uppercase", "tracking-wider", "bg-emerald-50", "px-2.5", "py-1", "rounded-lg"], [1, "p-2.5", "bg-emerald-50", "rounded-xl", "text-emerald-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"], [1, "mt-4", "flex", "items-baseline", "space-x-3"], [1, "text-xs", "font-semibold", "text-gray-500"], [1, "text-gray-500"], [1, "bg-white", "rounded-2xl", "shadow-sm", "border", "border-gray-100", "overflow-hidden"], [1, "p-6", "border-b", "border-gray-100", "flex", "flex-col", "md:flex-row", "md:items-center", "justify-between", "gap-4"], [1, "text-lg", "font-bold", "text-gray-900"], [1, "text-xs", "text-gray-500", "mt-0.5"], [1, "flex", "items-center", "space-x-3", "bg-gray-50", "p-2", "rounded-xl", "border", "border-gray-200", "text-xs"], [1, "relative", "flex", "items-center", "cursor-pointer", 3, "click"], [1, "font-bold", "text-gray-500", "mr-1.5"], ["type", "text", "placeholder", "dd/MM/yyyy", "maxlength", "10", 1, "w-20", "font-semibold", "text-gray-900", "bg-transparent", "outline-none", "cursor-pointer", 3, "input", "value"], [1, "text-gray-300"], [1, "grid", "grid-cols-2", "sm:grid-cols-4", "gap-4", "p-6", "bg-gray-50/50", "text-sm"], [1, "bg-white", "p-5", "rounded-2xl", "border", "border-gray-100", "shadow-sm", "hover:shadow-md", "transition"], [1, "text-xs", "font-bold", "text-gray-500", "uppercase", "tracking-wider"], [1, "text-2xl", "font-black", "text-emerald-600", "mt-2"], [1, "text-xs", "text-gray-400", "font-medium", "mt-1"], [1, "text-2xl", "font-black", "text-rose-600", "mt-2"], [1, "text-2xl", "font-black", "text-indigo-600", "mt-2"], [1, "text-2xl", "font-black", "text-blue-600", "mt-2"]], template: function AdminReportingComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "div")(3, "h1", 5);
      \u0275\u0275text(4, "B\xE1o c\xE1o & Th\u1ED1ng k\xEA Trung t\xE2m");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 6);
      \u0275\u0275text(6, "T\u1ED5ng quan s\u1ED1 li\u1EC7u hi\u1EC7n tr\u1EA1ng v\xE0 bi\u1EBFn \u0111\u1ED9ng quy m\xF4 to\xE0n b\u1ED9 trung t\xE2m (Report Center Statistics)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 7)(8, "div", 8);
      \u0275\u0275listener("click", function AdminReportingComponent_Template_div_click_8_listener() {
        \u0275\u0275restoreView(_r1);
        const snapDatePicker_r2 = \u0275\u0275reference(15);
        return \u0275\u0275resetView(ctx.openPicker(snapDatePicker_r2));
      });
      \u0275\u0275elementStart(9, "span", 9);
      \u0275\u0275text(10, "Ng\xE0y xem:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "input", 10);
      \u0275\u0275listener("input", function AdminReportingComponent_Template_input_input_11_listener($event) {
        return ctx.onDateTextInput($event, "selected");
      });
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(12, "svg", 11);
      \u0275\u0275element(13, "path", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(14, "input", 13, 0);
      \u0275\u0275listener("change", function AdminReportingComponent_Template_input_change_14_listener($event) {
        return ctx.onDatePickerChange($event, "selected");
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275template(16, AdminReportingComponent_button_16_Template, 3, 2, "button", 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(17, AdminReportingComponent_Conditional_17_Template, 5, 0, "div", 15)(18, AdminReportingComponent_Conditional_18_Template, 121, 21);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275property("value", ctx.selectedDateFormatted());
      \u0275\u0275advance(3);
      \u0275\u0275property("value", ctx.selectedDate());
      \u0275\u0275advance(2);
      \u0275\u0275property("hasAnyPermission", \u0275\u0275pureFunction0(4, _c09));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isLoadingSnapshot() ? 17 : 18);
    }
  }, dependencies: [CommonModule, ReactiveFormsModule, HasPermissionDirective], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminReportingComponent, [{
    type: Component,
    args: [{ selector: "app-admin-reporting", imports: [CommonModule, ReactiveFormsModule, HasPermissionDirective], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="space-y-6">\r
  <!-- PAGE HEADER -->\r
  <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-gray-100">\r
    <div>\r
      <h1 class="text-2xl font-extrabold text-gray-900 tracking-tight">B\xE1o c\xE1o & Th\u1ED1ng k\xEA Trung t\xE2m</h1>\r
      <p class="text-sm text-gray-500 mt-1">T\u1ED5ng quan s\u1ED1 li\u1EC7u hi\u1EC7n tr\u1EA1ng v\xE0 bi\u1EBFn \u0111\u1ED9ng quy m\xF4 to\xE0n b\u1ED9 trung t\xE2m (Report Center Statistics)</p>\r
    </div>\r
\r
    <!-- Date Picker & Sync Action -->\r
    <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">\r
      <!-- Single Date Picker (dd/MM/yyyy) -->\r
      <div class="relative flex items-center bg-white px-3.5 py-2 rounded-xl border border-gray-200 shadow-sm cursor-pointer" (click)="openPicker(snapDatePicker)">\r
        <span class="text-xs font-bold text-gray-500 uppercase whitespace-nowrap mr-2">Ng\xE0y xem:</span>\r
        <input \r
          type="text"\r
          [value]="selectedDateFormatted()"\r
          (input)="onDateTextInput($event, 'selected')"\r
          placeholder="dd/MM/yyyy"\r
          maxlength="10"\r
          class="w-24 text-sm font-semibold text-gray-900 bg-transparent outline-none cursor-pointer"\r
        >\r
        <svg class="w-4 h-4 ml-1.5 text-gray-400 hover:text-blue-600 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>\r
        </svg>\r
        <input \r
          #snapDatePicker\r
          type="date" \r
          [value]="selectedDate()"\r
          (change)="onDatePickerChange($event, 'selected')"\r
          class="sr-only opacity-0 w-0 h-0 absolute pointer-events-none"\r
        >\r
      </div>\r
\r
      <button \r
        *hasAnyPermission="['REPORT_CREATE', 'REPORT_UPDATE']"\r
        (click)="syncDailyReport()" \r
        [disabled]="isSyncing()"\r
        class="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-semibold py-2.5 px-4 rounded-xl flex items-center justify-center transition shadow-md text-sm"\r
      >\r
        @if (isSyncing()) {\r
          <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">\r
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>\r
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>\r
          </svg>\r
          \u0110ang \u0111\u1ED3ng b\u1ED9...\r
        } @else {\r
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>\r
          </svg>\r
          \u0110\u1ED3ng b\u1ED9 s\u1ED1 li\u1EC7u ng\xE0y\r
        }\r
      </button>\r
    </div>\r
  </div>\r
\r
  @if (isLoadingSnapshot()) {\r
    <div class="bg-white rounded-2xl p-12 text-center text-gray-500 shadow-sm border border-gray-100">\r
      <svg class="animate-spin mx-auto h-8 w-8 text-blue-500 mb-3" fill="none" viewBox="0 0 24 24">\r
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>\r
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>\r
      </svg>\r
      \u0110ang t\u1EA3i s\u1ED1 li\u1EC7u th\u1ED1ng k\xEA trung t\xE2m...\r
    </div>\r
  } @else {\r
    @let snap = dailySnapshot();\r
\r
    <!-- MAIN METRICS CARDS -->\r
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">\r
      \r
      <!-- CARD 1: H\u1ECCC VI\xCAN -->\r
      <div class="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm relative overflow-hidden group hover:shadow-md transition duration-200">\r
        <div class="flex items-center justify-between">\r
          <span class="text-xs font-bold text-blue-600 uppercase tracking-wider bg-blue-50 px-2.5 py-1 rounded-lg">H\u1ECDc vi\xEAn</span>\r
          <div class="p-2.5 bg-blue-50 rounded-xl text-blue-600">\r
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>\r
            </svg>\r
          </div>\r
        </div>\r
        <div class="mt-4">\r
          <h3 class="text-3xl font-black text-gray-900">{{ snap?.totalActiveStudents || 0 }}</h3>\r
          <p class="text-xs text-gray-500 font-medium mt-1">\u0110ang theo h\u1ECDc t\u1EA1i trung t\xE2m</p>\r
        </div>\r
        <div class="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-semibold">\r
          <span class="text-emerald-600 flex items-center">\r
            <span class="inline-block w-2 h-2 rounded-full bg-emerald-500 mr-1.5"></span>\r
            +{{ snap?.newStudentsToday || 0 }} m\u1EDBi h\xF4m nay\r
          </span>\r
          <span class="text-rose-600">\r
            -{{ snap?.droppedStudentsToday || 0 }} ngh\u1EC9 h\u1ECDc\r
          </span>\r
        </div>\r
      </div>\r
\r
      <!-- CARD 2: GI\u1EA2NG VI\xCAN -->\r
      <div class="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm relative overflow-hidden group hover:shadow-md transition duration-200">\r
        <div class="flex items-center justify-between">\r
          <span class="text-xs font-bold text-indigo-600 uppercase tracking-wider bg-indigo-50 px-2.5 py-1 rounded-lg">Gi\u1EA3ng vi\xEAn</span>\r
          <div class="p-2.5 bg-indigo-50 rounded-xl text-indigo-600">\r
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>\r
            </svg>\r
          </div>\r
        </div>\r
        <div class="mt-4">\r
          <h3 class="text-3xl font-black text-gray-900">{{ snap?.totalTeachers || 0 }}</h3>\r
          <p class="text-xs text-gray-500 font-medium mt-1">Gi\u1EA3ng vi\xEAn & Tr\u1EE3 gi\u1EA3ng active</p>\r
        </div>\r
        <div class="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-semibold">\r
          <span class="text-emerald-600">\r
            +{{ snap?.newTeachersToday || 0 }} m\u1EDBi\r
          </span>\r
          <span class="text-rose-600">\r
            -{{ snap?.resignedTeachersToday || 0 }} ngh\u1EC9 vi\u1EC7c\r
          </span>\r
        </div>\r
      </div>\r
\r
      <!-- CARD 3: NH\xC2N S\u1EF0 KH\xC1C -->\r
      <div class="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm relative overflow-hidden group hover:shadow-md transition duration-200">\r
        <div class="flex items-center justify-between">\r
          <span class="text-xs font-bold text-amber-600 uppercase tracking-wider bg-amber-50 px-2.5 py-1 rounded-lg">Nh\xE2n s\u1EF1 ph\xF2ng ban</span>\r
          <div class="p-2.5 bg-amber-50 rounded-xl text-amber-600">\r
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>\r
            </svg>\r
          </div>\r
        </div>\r
        <div class="mt-4">\r
          <h3 class="text-3xl font-black text-gray-900">{{ snap?.totalOtherStaffs || 0 }}</h3>\r
          <p class="text-xs text-gray-500 font-medium mt-1">Nh\xE2n vi\xEAn h\xE0nh ch\xEDnh / qu\u1EA3n l\xFD</p>\r
        </div>\r
        <div class="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-semibold">\r
          <span class="text-emerald-600">\r
            +{{ snap?.newStaffsToday || 0 }} tuy\u1EC3n m\u1EDBi\r
          </span>\r
          <span class="text-rose-600">\r
            -{{ snap?.resignedStaffsToday || 0 }} th\xF4i vi\u1EC7c\r
          </span>\r
        </div>\r
      </div>\r
\r
      <!-- CARD 4: L\u1EDAP & KH\xD3A H\u1ECCC -->\r
      <div class="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm relative overflow-hidden group hover:shadow-md transition duration-200">\r
        <div class="flex items-center justify-between">\r
          <span class="text-xs font-bold text-emerald-600 uppercase tracking-wider bg-emerald-50 px-2.5 py-1 rounded-lg">Kh\xF3a & L\u1EDBp h\u1ECDc</span>\r
          <div class="p-2.5 bg-emerald-50 rounded-xl text-emerald-600">\r
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>\r
            </svg>\r
          </div>\r
        </div>\r
        <div class="mt-4 flex items-baseline space-x-3">\r
          <h3 class="text-3xl font-black text-gray-900">{{ snap?.totalActiveClasses || 0 }}</h3>\r
          <span class="text-xs font-semibold text-gray-500">L\u1EDBp active / {{ snap?.totalCourses || 0 }} Kh\xF3a</span>\r
        </div>\r
        <div class="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-semibold">\r
          <span class="text-emerald-600">\r
            +{{ snap?.newClassesOpened || 0 }} l\u1EDBp m\u1EDF m\u1EDBi\r
          </span>\r
          <span class="text-gray-500">\r
            {{ snap?.classesClosedToday || 0 }} b\u1EBF gi\u1EA3ng\r
          </span>\r
        </div>\r
      </div>\r
\r
    </div>\r
\r
    <!-- RANGE KPI CARDS SECTION (dd/MM/yyyy format) -->\r
    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">\r
      <!-- Section Header -->\r
      <div class="p-6 border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4">\r
        <div>\r
          <h2 class="text-lg font-bold text-gray-900">Bi\u1EBFn \u0110\u1ED9ng S\u1ED1 Li\u1EC7u Theo Kho\u1EA3ng Th\u1EDDi Gian</h2>\r
          <p class="text-xs text-gray-500 mt-0.5">T\u1ED5ng h\u1EE3p t\u0103ng gi\u1EA3m quy m\xF4 h\u1ECDc vi\xEAn, nh\xE2n s\u1EF1 v\xE0 l\u1EDBp h\u1ECDc trong giai \u0111o\u1EA1n l\u1EF1a ch\u1ECDn</p>\r
        </div>\r
\r
        <div class="flex items-center space-x-3 bg-gray-50 p-2 rounded-xl border border-gray-200 text-xs">\r
          <!-- Start Date -->\r
          <div class="relative flex items-center cursor-pointer" (click)="openPicker(startDatePicker)">\r
            <span class="font-bold text-gray-500 mr-1.5">T\u1EEB:</span>\r
            <input \r
              type="text" \r
              [value]="rangeStartDateFormatted()"\r
              (input)="onDateTextInput($event, 'start')"\r
              placeholder="dd/MM/yyyy"\r
              maxlength="10"\r
              class="w-20 font-semibold text-gray-900 bg-transparent outline-none cursor-pointer"\r
            >\r
            <input \r
              #startDatePicker\r
              type="date" \r
              [value]="rangeStartDate()"\r
              (change)="onDatePickerChange($event, 'start')"\r
              class="sr-only opacity-0 w-0 h-0 absolute pointer-events-none"\r
            >\r
          </div>\r
\r
          <span class="text-gray-300">|</span>\r
\r
          <!-- End Date -->\r
          <div class="relative flex items-center cursor-pointer" (click)="openPicker(endDatePicker)">\r
            <span class="font-bold text-gray-500 mr-1.5">\u0110\u1EBFn:</span>\r
            <input \r
              type="text" \r
              [value]="rangeEndDateFormatted()"\r
              (input)="onDateTextInput($event, 'end')"\r
              placeholder="dd/MM/yyyy"\r
              maxlength="10"\r
              class="w-20 font-semibold text-gray-900 bg-transparent outline-none cursor-pointer"\r
            >\r
            <input \r
              #endDatePicker\r
              type="date" \r
              [value]="rangeEndDate()"\r
              (change)="onDatePickerChange($event, 'end')"\r
              class="sr-only opacity-0 w-0 h-0 absolute pointer-events-none"\r
            >\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Range Summary KPI Highlights Cards -->\r
      @let sum = rangeSummary();\r
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 bg-gray-50/50 text-sm">\r
        <div class="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">\r
          <p class="text-xs font-bold text-gray-500 uppercase tracking-wider">HV m\u1EDBi trong k\u1EF3</p>\r
          <p class="text-2xl font-black text-emerald-600 mt-2">+{{ sum?.totalNewStudentsInRange || 0 }}</p>\r
          <p class="text-xs text-gray-400 font-medium mt-1">H\u1ECDc vi\xEAn \u0111\u0103ng k\xFD m\u1EDBi</p>\r
        </div>\r
        \r
        <div class="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">\r
          <p class="text-xs font-bold text-gray-500 uppercase tracking-wider">HV th\xF4i h\u1ECDc trong k\u1EF3</p>\r
          <p class="text-2xl font-black text-rose-600 mt-2">-{{ sum?.totalDroppedStudentsInRange || 0 }}</p>\r
          <p class="text-xs text-gray-400 font-medium mt-1">H\u1ECDc vi\xEAn ngh\u1EC9 h\u1ECDc</p>\r
        </div>\r
\r
        <div class="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">\r
          <p class="text-xs font-bold text-gray-500 uppercase tracking-wider">GV & Nh\xE2n s\u1EF1 m\u1EDBi</p>\r
          <p class="text-2xl font-black text-indigo-600 mt-2">+{{ (sum?.totalNewTeachersInRange || 0) + (sum?.totalNewStaffsInRange || 0) }}</p>\r
          <p class="text-xs text-gray-400 font-medium mt-1">Tuy\u1EC3n d\u1EE5ng m\u1EDBi</p>\r
        </div>\r
\r
        <div class="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">\r
          <p class="text-xs font-bold text-gray-500 uppercase tracking-wider">L\u1EDBp m\u1EDF m\u1EDBi trong k\u1EF3</p>\r
          <p class="text-2xl font-black text-blue-600 mt-2">+{{ sum?.totalNewClassesOpenedInRange || 0 }}</p>\r
          <p class="text-xs text-gray-400 font-medium mt-1">L\u1EDBp h\u1ECDc khai gi\u1EA3ng</p>\r
        </div>\r
      </div>\r
    </div>\r
  }\r
</div>\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminReportingComponent, { className: "AdminReportingComponent", filePath: "src/app/features/admin/pages/reporting/admin-reporting.component.ts", lineNumber: 16 });
})();

// src/app/features/admin/pages/lesson/lesson.component.ts
var _c010 = () => ["LESSON_UPDATE", "LESSON_DELETE"];
var _forTrack09 = ($index, $item) => $item.id;
function LessonComponent_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275listener("click", function LessonComponent_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 24);
    \u0275\u0275element(2, "path", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Th\xEAm b\xE0i h\u1ECDc m\u1EDBi ");
    \u0275\u0275elementEnd();
  }
}
function LessonComponent_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cls_r3 = ctx.$implicit;
    \u0275\u0275property("value", cls_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", cls_r3.code, " - ", cls_r3.name);
  }
}
function LessonComponent_th_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 26);
    \u0275\u0275text(1, "Thao t\xE1c");
    \u0275\u0275elementEnd();
  }
}
function LessonComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 27)(2, "div", 28);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 29);
    \u0275\u0275element(4, "circle", 30)(5, "path", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7, "\u0110ang t\u1EA3i d\u1EEF li\u1EC7u...");
    \u0275\u0275elementEnd()()()();
  }
}
function LessonComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 27);
    \u0275\u0275text(2, "Ch\u01B0a c\xF3 b\xE0i h\u1ECDc n\xE0o.");
    \u0275\u0275elementEnd()();
  }
}
function LessonComponent_Conditional_32_For_1_td_9_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 40);
    \u0275\u0275listener("click", function LessonComponent_Conditional_32_For_1_td_9_button_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const lesson_r5 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openModal(lesson_r5));
    });
    \u0275\u0275text(1, "S\u1EEDa");
    \u0275\u0275elementEnd();
  }
}
function LessonComponent_Conditional_32_For_1_td_9_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 41);
    \u0275\u0275listener("click", function LessonComponent_Conditional_32_For_1_td_9_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const lesson_r5 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDelete(lesson_r5.id));
    });
    \u0275\u0275text(1, "X\xF3a");
    \u0275\u0275elementEnd();
  }
}
function LessonComponent_Conditional_32_For_1_td_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 37);
    \u0275\u0275template(1, LessonComponent_Conditional_32_For_1_td_9_button_1_Template, 2, 0, "button", 38)(2, LessonComponent_Conditional_32_For_1_td_9_button_2_Template, 2, 0, "button", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("hasPermission", "LESSON_UPDATE");
    \u0275\u0275advance();
    \u0275\u0275property("hasPermission", "LESSON_DELETE");
  }
}
function LessonComponent_Conditional_32_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 32)(1, "td", 33);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 34);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 33);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 35);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, LessonComponent_Conditional_32_For_1_td_9_Template, 3, 2, "td", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const lesson_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(lesson_r5.classCode || lesson_r5.className || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("#", lesson_r5.orderNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(lesson_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(lesson_r5.description || "-");
    \u0275\u0275advance();
    \u0275\u0275property("hasAnyPermission", \u0275\u0275pureFunction0(5, _c010));
  }
}
function LessonComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, LessonComponent_Conditional_32_For_1_Template, 10, 6, "tr", 32, _forTrack09);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r1.lessons());
  }
}
function LessonComponent_Conditional_52_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cls_r8 = ctx.$implicit;
    \u0275\u0275property("value", cls_r8.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", cls_r8.code, " - ", cls_r8.name);
  }
}
function LessonComponent_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 42)(2, "div", 43)(3, "h3", 44);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 45);
    \u0275\u0275listener("click", function LessonComponent_Conditional_52_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 24);
    \u0275\u0275element(7, "path", 46);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "form", 47);
    \u0275\u0275listener("ngSubmit", function LessonComponent_Conditional_52_Template_form_ngSubmit_8_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(9, "div")(10, "label", 48);
    \u0275\u0275text(11, "L\u1EDBp h\u1ECDc *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "select", 49)(13, "option", 9);
    \u0275\u0275text(14, "-- Ch\u1ECDn l\u1EDBp h\u1ECDc --");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(15, LessonComponent_Conditional_52_For_16_Template, 2, 3, "option", 10, _forTrack09);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 50)(18, "div")(19, "label", 48);
    \u0275\u0275text(20, "Th\u1EE9 t\u1EF1 b\xE0i h\u1ECDc *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "input", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div")(23, "label", 48);
    \u0275\u0275text(24, "T\xEAn b\xE0i h\u1ECDc *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "input", 52);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div")(27, "label", 48);
    \u0275\u0275text(28, "M\xF4 t\u1EA3");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "textarea", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 54)(31, "button", 55);
    \u0275\u0275listener("click", function LessonComponent_Conditional_52_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275text(32, "H\u1EE7y");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "button", 56);
    \u0275\u0275text(34, "L\u01B0u");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.isEditing() ? "Ch\u1EC9nh s\u1EEDa b\xE0i h\u1ECDc" : "Th\xEAm b\xE0i h\u1ECDc m\u1EDBi");
    \u0275\u0275advance(4);
    \u0275\u0275property("formGroup", ctx_r1.lessonForm);
    \u0275\u0275advance(7);
    \u0275\u0275repeater(ctx_r1.classes());
    \u0275\u0275advance(18);
    \u0275\u0275property("disabled", ctx_r1.lessonForm.invalid || ctx_r1.isLoading());
  }
}
function LessonComponent_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 57)(2, "h3", 58);
    \u0275\u0275text(3, "X\xE1c nh\u1EADn x\xF3a b\xE0i h\u1ECDc");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 59);
    \u0275\u0275text(5, "B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a b\xE0i h\u1ECDc n\xE0y? Thao t\xE1c n\xE0y kh\xF4ng th\u1EC3 ho\xE0n t\xE1c.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 60)(7, "button", 61);
    \u0275\u0275listener("click", function LessonComponent_Conditional_53_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDeleteModal());
    });
    \u0275\u0275text(8, "H\u1EE7y");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 62);
    \u0275\u0275listener("click", function LessonComponent_Conditional_53_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmDelete());
    });
    \u0275\u0275text(10, "X\xF3a");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275property("disabled", ctx_r1.isLoading());
  }
}
var LessonComponent = class _LessonComponent {
  lessonService = inject(LearningMaterialService);
  classService = inject(ClassService);
  fb = inject(FormBuilder);
  route = inject(ActivatedRoute);
  router = inject(Router);
  toastService = inject(ToastService);
  lessons = signal([], ...ngDevMode ? [{ debugName: "lessons" }] : (
    /* istanbul ignore next */
    []
  ));
  classes = signal([], ...ngDevMode ? [{ debugName: "classes" }] : (
    /* istanbul ignore next */
    []
  ));
  totalElements = signal(0, ...ngDevMode ? [{ debugName: "totalElements" }] : (
    /* istanbul ignore next */
    []
  ));
  currentPage = signal(1, ...ngDevMode ? [{ debugName: "currentPage" }] : (
    /* istanbul ignore next */
    []
  ));
  pageSize = signal(10, ...ngDevMode ? [{ debugName: "pageSize" }] : (
    /* istanbul ignore next */
    []
  ));
  isLoading = signal(false, ...ngDevMode ? [{ debugName: "isLoading" }] : (
    /* istanbul ignore next */
    []
  ));
  classIdParam = signal(null, ...ngDevMode ? [{ debugName: "classIdParam" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedClassFilter = new FormControl("");
  isModalOpen = signal(false, ...ngDevMode ? [{ debugName: "isModalOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  isEditing = signal(false, ...ngDevMode ? [{ debugName: "isEditing" }] : (
    /* istanbul ignore next */
    []
  ));
  currentId = signal(null, ...ngDevMode ? [{ debugName: "currentId" }] : (
    /* istanbul ignore next */
    []
  ));
  lessonForm;
  isDeleteModalOpen = signal(false, ...ngDevMode ? [{ debugName: "isDeleteModalOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  idToDelete = signal(null, ...ngDevMode ? [{ debugName: "idToDelete" }] : (
    /* istanbul ignore next */
    []
  ));
  totalPages = computed(() => Math.ceil(this.totalElements() / this.pageSize()), ...ngDevMode ? [{ debugName: "totalPages" }] : (
    /* istanbul ignore next */
    []
  ));
  startIndex = computed(() => this.totalElements() === 0 ? 0 : (this.currentPage() - 1) * this.pageSize() + 1, ...ngDevMode ? [{ debugName: "startIndex" }] : (
    /* istanbul ignore next */
    []
  ));
  endIndex = computed(() => Math.min(this.currentPage() * this.pageSize(), this.totalElements()), ...ngDevMode ? [{ debugName: "endIndex" }] : (
    /* istanbul ignore next */
    []
  ));
  ngOnInit() {
    this.initForm();
    this.loadClasses();
    const idFromRoute = this.route.snapshot.paramMap.get("id");
    if (idFromRoute) {
      this.classIdParam.set(idFromRoute);
      this.selectedClassFilter.setValue(idFromRoute);
    }
    this.selectedClassFilter.valueChanges.subscribe(() => {
      this.currentPage.set(1);
      this.loadData();
    });
    this.loadData();
  }
  initForm() {
    this.lessonForm = this.fb.group({
      classId: ["", Validators.required],
      name: ["", [Validators.required, Validators.maxLength(255)]],
      orderNumber: [1, [Validators.required, Validators.min(1)]],
      description: [""]
    });
  }
  loadClasses() {
    this.classService.getAll(0, 100).subscribe({
      next: (res) => this.classes.set(res.content || [])
    });
  }
  loadData() {
    this.isLoading.set(true);
    const filterClassId = this.selectedClassFilter.value || this.classIdParam() || void 0;
    this.lessonService.getAll(this.currentPage() - 1, this.pageSize(), filterClassId).subscribe({
      next: (res) => {
        this.lessons.set(res.content || []);
        this.totalElements.set(res.totalElements || 0);
        this.isLoading.set(false);
      },
      error: () => this.isLoading.set(false)
    });
  }
  changePage(page) {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage.set(page);
      this.loadData();
    }
  }
  openModal(item) {
    if (item) {
      this.isEditing.set(true);
      this.currentId.set(item.id);
      this.lessonForm.patchValue({
        classId: item.classId,
        name: item.name,
        orderNumber: item.orderNumber || 1,
        description: item.description || ""
      });
    } else {
      this.isEditing.set(false);
      this.currentId.set(null);
      this.lessonForm.reset({
        classId: this.selectedClassFilter.value || this.classIdParam() || "",
        name: "",
        orderNumber: this.lessons().length + 1,
        description: ""
      });
    }
    this.isModalOpen.set(true);
  }
  closeModal() {
    this.isModalOpen.set(false);
    this.currentId.set(null);
  }
  onSubmit() {
    if (this.lessonForm.invalid)
      return;
    this.isLoading.set(true);
    const data = this.lessonForm.value;
    if (data.classId)
      data.classId = Number(data.classId);
    if (this.isEditing() && this.currentId() != null) {
      this.lessonService.update(this.currentId(), data).subscribe({
        next: () => {
          this.loadData();
          this.closeModal();
          this.toastService.success("Th\xE0nh c\xF4ng", "\u0110\xE3 c\u1EADp nh\u1EADt b\xE0i h\u1ECDc!");
        },
        error: (err) => {
          this.isLoading.set(false);
          this.toastService.error("Th\u1EA5t b\u1EA1i", err.error?.message || "C\xF3 l\u1ED7i x\u1EA3y ra khi c\u1EADp nh\u1EADt!");
        }
      });
    } else {
      this.lessonService.create(data).subscribe({
        next: () => {
          this.loadData();
          this.closeModal();
          this.toastService.success("Th\xE0nh c\xF4ng", "\u0110\xE3 t\u1EA1o b\xE0i h\u1ECDc m\u1EDBi!");
        },
        error: (err) => {
          this.isLoading.set(false);
          this.toastService.error("Th\u1EA5t b\u1EA1i", err.error?.message || "C\xF3 l\u1ED7i x\u1EA3y ra khi th\xEAm m\u1EDBi!");
        }
      });
    }
  }
  onDelete(id) {
    this.idToDelete.set(id);
    this.isDeleteModalOpen.set(true);
  }
  closeDeleteModal() {
    this.isDeleteModalOpen.set(false);
    this.idToDelete.set(null);
  }
  confirmDelete() {
    const id = this.idToDelete();
    if (id != null) {
      this.isLoading.set(true);
      this.lessonService.delete(id).subscribe({
        next: () => {
          this.loadData();
          this.closeDeleteModal();
          this.toastService.success("\u0110\xE3 x\xF3a", "X\xF3a b\xE0i h\u1ECDc th\xE0nh c\xF4ng!");
        },
        error: (err) => {
          this.isLoading.set(false);
          this.closeDeleteModal();
          this.toastService.error("L\u1ED7i x\xF3a", err.error?.message || "Kh\xF4ng th\u1EC3 x\xF3a b\xE0i h\u1ECDc n\xE0y!");
        }
      });
    }
  }
  viewMaterials(lessonId) {
    this.router.navigate(["/admin/lessons", lessonId, "materials"]);
  }
  static \u0275fac = function LessonComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LessonComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LessonComponent, selectors: [["app-lesson"]], decls: 54, vars: 14, consts: [[1, "p-6", "space-y-6"], [1, "flex", "flex-col", "sm:flex-row", "justify-between", "items-start", "sm:items-center", "gap-4", "bg-white", "dark:bg-gray-800", "p-6", "rounded-2xl", "shadow-sm", "border", "border-gray-100", "dark:border-gray-700"], [1, "text-2xl", "font-bold", "text-gray-900", "dark:text-white"], [1, "text-sm", "text-gray-500", "dark:text-gray-400", "mt-1"], ["class", "inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-xl transition-colors shadow-sm shadow-blue-500/10", 3, "click", 4, "hasPermission"], [1, "bg-white", "dark:bg-gray-800", "rounded-2xl", "shadow-sm", "border", "border-gray-100", "dark:border-gray-700", "overflow-hidden"], [1, "p-4", "border-b", "border-gray-100", "dark:border-gray-700", "bg-gray-50/50", "dark:bg-gray-800/50", "flex", "flex-col", "sm:flex-row", "items-start", "sm:items-center", "gap-4"], [1, "relative", "w-full", "sm:w-72"], [1, "w-full", "pl-4", "pr-10", "py-2", "bg-white", "dark:bg-gray-900", "border", "border-gray-200", "dark:border-gray-700", "rounded-xl", "text-sm", "text-gray-900", "dark:text-white", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", 3, "formControl"], ["value", ""], [3, "value"], [1, "overflow-x-auto"], [1, "w-full", "text-sm", "text-left", "text-gray-600", "dark:text-gray-300"], [1, "text-xs", "uppercase", "bg-gray-50", "dark:bg-gray-900/50", "text-gray-500", "dark:text-gray-400", "border-b", "border-gray-100", "dark:border-gray-700"], [1, "px-6", "py-3.5", "font-semibold"], ["class", "px-6 py-3.5 font-semibold text-right", 4, "hasAnyPermission"], [1, "divide-y", "divide-gray-100", "dark:divide-gray-700"], [1, "p-4", "border-t", "border-gray-100", "dark:border-gray-700", "flex", "flex-col", "sm:flex-row", "justify-between", "items-center", "gap-4", "text-xs", "text-gray-500"], [1, "font-medium", "text-gray-900", "dark:text-white"], [1, "flex", "items-center", "gap-1"], [1, "px-3", "py-1.5", "rounded-lg", "border", "border-gray-200", "dark:border-gray-700", "disabled:opacity-40", "hover:bg-gray-50", "dark:hover:bg-gray-700", "transition-colors", 3, "click", "disabled"], [1, "px-3", "py-1.5", "font-medium", "text-gray-900", "dark:text-white"], [1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "p-4", "bg-black/40", "backdrop-blur-sm"], [1, "inline-flex", "items-center", "gap-2", "px-4", "py-2.5", "bg-blue-600", "hover:bg-blue-700", "text-white", "text-sm", "font-medium", "rounded-xl", "transition-colors", "shadow-sm", "shadow-blue-500/10", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 4v16m8-8H4"], [1, "px-6", "py-3.5", "font-semibold", "text-right"], ["colspan", "5", 1, "px-6", "py-8", "text-center", "text-gray-400"], [1, "inline-flex", "items-center", "gap-2"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-5", "w-5", "text-blue-600"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"], [1, "hover:bg-gray-50/50", "dark:hover:bg-gray-700/50", "transition-colors"], [1, "px-6", "py-4", "font-medium", "text-gray-900", "dark:text-white"], [1, "px-6", "py-4", "font-mono", "text-blue-600", "dark:text-blue-400"], [1, "px-6", "py-4", "text-gray-500", "max-w-md", "truncate"], ["class", "px-6 py-4 text-right space-x-2", 4, "hasAnyPermission"], [1, "px-6", "py-4", "text-right", "space-x-2"], ["class", "px-3 py-1.5 text-xs font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-lg transition-colors", 3, "click", 4, "hasPermission"], ["class", "px-3 py-1.5 text-xs font-medium text-rose-600 hover:text-rose-700 hover:bg-rose-50 dark:hover:bg-rose-900/30 rounded-lg transition-colors", 3, "click", 4, "hasPermission"], [1, "px-3", "py-1.5", "text-xs", "font-medium", "text-blue-600", "hover:text-blue-700", "hover:bg-blue-50", "dark:hover:bg-blue-900/30", "rounded-lg", "transition-colors", 3, "click"], [1, "px-3", "py-1.5", "text-xs", "font-medium", "text-rose-600", "hover:text-rose-700", "hover:bg-rose-50", "dark:hover:bg-rose-900/30", "rounded-lg", "transition-colors", 3, "click"], [1, "bg-white", "dark:bg-gray-800", "rounded-2xl", "max-w-lg", "w-full", "p-6", "shadow-xl", "border", "border-gray-100", "dark:border-gray-700", "space-y-6"], [1, "flex", "justify-between", "items-center"], [1, "text-lg", "font-bold", "text-gray-900", "dark:text-white"], [1, "text-gray-400", "hover:text-gray-600", "dark:hover:text-gray-300", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "space-y-4", 3, "ngSubmit", "formGroup"], [1, "block", "text-xs", "font-semibold", "text-gray-700", "dark:text-gray-300", "mb-1"], ["formControlName", "classId", 1, "w-full", "px-3", "py-2", "bg-white", "dark:bg-gray-900", "border", "border-gray-200", "dark:border-gray-700", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-500"], [1, "grid", "grid-cols-2", "gap-4"], ["formControlName", "orderNumber", "type", "number", "min", "1", 1, "w-full", "px-3", "py-2", "bg-white", "dark:bg-gray-900", "border", "border-gray-200", "dark:border-gray-700", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-500"], ["formControlName", "name", "type", "text", "placeholder", "VD: Gi\u1EDBi thi\u1EC7u IELTS Speaking", 1, "w-full", "px-3", "py-2", "bg-white", "dark:bg-gray-900", "border", "border-gray-200", "dark:border-gray-700", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-500"], ["formControlName", "description", "rows", "3", "placeholder", "N\u1ED9i dung m\xF4 t\u1EA3 b\xE0i h\u1ECDc...", 1, "w-full", "px-3", "py-2", "bg-white", "dark:bg-gray-900", "border", "border-gray-200", "dark:border-gray-700", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-500"], [1, "flex", "justify-end", "gap-3", "pt-4", "border-t", "border-gray-100", "dark:border-gray-700"], ["type", "button", 1, "px-4", "py-2", "text-xs", "font-medium", "text-gray-600", "dark:text-gray-300", "hover:bg-gray-100", "dark:hover:bg-gray-700", "rounded-xl", 3, "click"], ["type", "submit", 1, "px-4", "py-2", "text-xs", "font-medium", "bg-blue-600", "hover:bg-blue-700", "text-white", "rounded-xl", "disabled:opacity-50", 3, "disabled"], [1, "bg-white", "dark:bg-gray-800", "rounded-2xl", "max-w-sm", "w-full", "p-6", "shadow-xl", "border", "border-gray-100", "dark:border-gray-700", "space-y-4"], [1, "text-base", "font-bold", "text-gray-900", "dark:text-white"], [1, "text-xs", "text-gray-500"], [1, "flex", "justify-end", "gap-3", "pt-2"], [1, "px-4", "py-2", "text-xs", "font-medium", "text-gray-600", "dark:text-gray-300", "hover:bg-gray-100", "dark:hover:bg-gray-700", "rounded-xl", 3, "click"], [1, "px-4", "py-2", "text-xs", "font-medium", "bg-rose-600", "hover:bg-rose-700", "text-white", "rounded-xl", "disabled:opacity-50", 3, "click", "disabled"]], template: function LessonComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Qu\u1EA3n l\xFD Bu\u1ED5i h\u1ECDc / B\xE0i h\u1ECDc (Lessons)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Qu\u1EA3n l\xFD danh s\xE1ch b\xE0i h\u1ECDc theo t\u1EEBng l\u1EDBp h\u1ECDc");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(7, LessonComponent_button_7_Template, 4, 0, "button", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 5)(9, "div", 6)(10, "div", 7)(11, "select", 8)(12, "option", 9);
      \u0275\u0275text(13, "-- T\u1EA5t c\u1EA3 l\u1EDBp h\u1ECDc --");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(14, LessonComponent_For_15_Template, 2, 3, "option", 10, _forTrack09);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(16, "div", 11)(17, "table", 12)(18, "thead", 13)(19, "tr")(20, "th", 14);
      \u0275\u0275text(21, "L\u1EDBp h\u1ECDc");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "th", 14);
      \u0275\u0275text(23, "Th\u1EE9 t\u1EF1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "th", 14);
      \u0275\u0275text(25, "T\xEAn b\xE0i h\u1ECDc");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "th", 14);
      \u0275\u0275text(27, "M\xF4 t\u1EA3");
      \u0275\u0275elementEnd();
      \u0275\u0275template(28, LessonComponent_th_28_Template, 2, 0, "th", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "tbody", 16);
      \u0275\u0275conditionalCreate(30, LessonComponent_Conditional_30_Template, 8, 0, "tr")(31, LessonComponent_Conditional_31_Template, 3, 0, "tr")(32, LessonComponent_Conditional_32_Template, 2, 0);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(33, "div", 17)(34, "div");
      \u0275\u0275text(35, "Hi\u1EC3n th\u1ECB t\u1EEB ");
      \u0275\u0275elementStart(36, "span", 18);
      \u0275\u0275text(37);
      \u0275\u0275elementEnd();
      \u0275\u0275text(38, " \u0111\u1EBFn ");
      \u0275\u0275elementStart(39, "span", 18);
      \u0275\u0275text(40);
      \u0275\u0275elementEnd();
      \u0275\u0275text(41, " trong t\u1ED5ng s\u1ED1 ");
      \u0275\u0275elementStart(42, "span", 18);
      \u0275\u0275text(43);
      \u0275\u0275elementEnd();
      \u0275\u0275text(44, " m\u1EE5c");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "div", 19)(46, "button", 20);
      \u0275\u0275listener("click", function LessonComponent_Template_button_click_46_listener() {
        return ctx.changePage(ctx.currentPage() - 1);
      });
      \u0275\u0275text(47, "Tr\u01B0\u1EDBc");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "span", 21);
      \u0275\u0275text(49);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "button", 20);
      \u0275\u0275listener("click", function LessonComponent_Template_button_click_50_listener() {
        return ctx.changePage(ctx.currentPage() + 1);
      });
      \u0275\u0275text(51, "Sau");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(52, LessonComponent_Conditional_52_Template, 35, 3, "div", 22);
      \u0275\u0275conditionalCreate(53, LessonComponent_Conditional_53_Template, 11, 1, "div", 22);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("hasPermission", "LESSON_CREATE");
      \u0275\u0275advance(4);
      \u0275\u0275property("formControl", ctx.selectedClassFilter);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.classes());
      \u0275\u0275advance(14);
      \u0275\u0275property("hasAnyPermission", \u0275\u0275pureFunction0(13, _c010));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isLoading() ? 30 : ctx.lessons().length === 0 ? 31 : 32);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.startIndex());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.endIndex());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.totalElements());
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", ctx.currentPage() <= 1);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2("Trang ", ctx.currentPage(), " / ", ctx.totalPages() || 1);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.currentPage() >= ctx.totalPages());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isModalOpen() ? 52 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isDeleteModalOpen() ? 53 : -1);
    }
  }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormControlDirective, FormGroupDirective, FormControlName, HasPermissionDirective], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LessonComponent, [{
    type: Component,
    args: [{ selector: "app-lesson", imports: [CommonModule, ReactiveFormsModule, HasPermissionDirective], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="p-6 space-y-6">\r
  <!-- Header section -->\r
  <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">\r
    <div>\r
      <h1 class="text-2xl font-bold text-gray-900 dark:text-white">Qu\u1EA3n l\xFD Bu\u1ED5i h\u1ECDc / B\xE0i h\u1ECDc (Lessons)</h1>\r
      <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">Qu\u1EA3n l\xFD danh s\xE1ch b\xE0i h\u1ECDc theo t\u1EEBng l\u1EDBp h\u1ECDc</p>\r
    </div>\r
    <button *hasPermission="'LESSON_CREATE'" (click)="openModal()" class="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-xl transition-colors shadow-sm shadow-blue-500/10">\r
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>\r
      </svg>\r
      Th\xEAm b\xE0i h\u1ECDc m\u1EDBi\r
    </button>\r
  </div>\r
\r
  <!-- Table Container -->\r
  <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">\r
    <!-- Search & Filter bar -->\r
    <div class="p-4 border-b border-gray-100 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/50 flex flex-col sm:flex-row items-start sm:items-center gap-4">\r
      <div class="relative w-full sm:w-72">\r
        <select [formControl]="selectedClassFilter" class="w-full pl-4 pr-10 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">\r
          <option value="">-- T\u1EA5t c\u1EA3 l\u1EDBp h\u1ECDc --</option>\r
          @for (cls of classes(); track cls.id) {\r
            <option [value]="cls.id">{{ cls.code }} - {{ cls.name }}</option>\r
          }\r
        </select>\r
      </div>\r
    </div>\r
\r
    <!-- Table content -->\r
    <div class="overflow-x-auto">\r
      <table class="w-full text-sm text-left text-gray-600 dark:text-gray-300">\r
        <thead class="text-xs uppercase bg-gray-50 dark:bg-gray-900/50 text-gray-500 dark:text-gray-400 border-b border-gray-100 dark:border-gray-700">\r
          <tr>\r
            <th class="px-6 py-3.5 font-semibold">L\u1EDBp h\u1ECDc</th>\r
            <th class="px-6 py-3.5 font-semibold">Th\u1EE9 t\u1EF1</th>\r
            <th class="px-6 py-3.5 font-semibold">T\xEAn b\xE0i h\u1ECDc</th>\r
            <th class="px-6 py-3.5 font-semibold">M\xF4 t\u1EA3</th>\r
            <th *hasAnyPermission="['LESSON_UPDATE', 'LESSON_DELETE']" class="px-6 py-3.5 font-semibold text-right">Thao t\xE1c</th>\r
          </tr>\r
        </thead>\r
        <tbody class="divide-y divide-gray-100 dark:divide-gray-700">\r
          @if (isLoading()) {\r
            <tr>\r
              <td colspan="5" class="px-6 py-8 text-center text-gray-400">\r
                <div class="inline-flex items-center gap-2">\r
                  <svg class="animate-spin h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24">\r
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>\r
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>\r
                  </svg>\r
                  <span>\u0110ang t\u1EA3i d\u1EEF li\u1EC7u...</span>\r
                </div>\r
              </td>\r
            </tr>\r
          } @else if (lessons().length === 0) {\r
            <tr>\r
              <td colspan="5" class="px-6 py-8 text-center text-gray-400">Ch\u01B0a c\xF3 b\xE0i h\u1ECDc n\xE0o.</td>\r
            </tr>\r
          } @else {\r
            @for (lesson of lessons(); track lesson.id) {\r
              <tr class="hover:bg-gray-50/50 dark:hover:bg-gray-700/50 transition-colors">\r
                <td class="px-6 py-4 font-medium text-gray-900 dark:text-white">{{ lesson.classCode || lesson.className || '-' }}</td>\r
                <td class="px-6 py-4 font-mono text-blue-600 dark:text-blue-400">#{{ lesson.orderNumber }}</td>\r
                <td class="px-6 py-4 font-medium text-gray-900 dark:text-white">{{ lesson.name }}</td>\r
                <td class="px-6 py-4 text-gray-500 max-w-md truncate">{{ lesson.description || '-' }}</td>\r
                <td *hasAnyPermission="['LESSON_UPDATE', 'LESSON_DELETE']" class="px-6 py-4 text-right space-x-2">\r
                  <button *hasPermission="'LESSON_UPDATE'" (click)="openModal(lesson)" class="px-3 py-1.5 text-xs font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-lg transition-colors">S\u1EEDa</button>\r
                  <button *hasPermission="'LESSON_DELETE'" (click)="onDelete(lesson.id)" class="px-3 py-1.5 text-xs font-medium text-rose-600 hover:text-rose-700 hover:bg-rose-50 dark:hover:bg-rose-900/30 rounded-lg transition-colors">X\xF3a</button>\r
                </td>\r
              </tr>\r
            }\r
          }\r
        </tbody>\r
      </table>\r
    </div>\r
\r
    <!-- Pagination -->\r
    <div class="p-4 border-t border-gray-100 dark:border-gray-700 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">\r
      <div>Hi\u1EC3n th\u1ECB t\u1EEB <span class="font-medium text-gray-900 dark:text-white">{{ startIndex() }}</span> \u0111\u1EBFn <span class="font-medium text-gray-900 dark:text-white">{{ endIndex() }}</span> trong t\u1ED5ng s\u1ED1 <span class="font-medium text-gray-900 dark:text-white">{{ totalElements() }}</span> m\u1EE5c</div>\r
      <div class="flex items-center gap-1">\r
        <button (click)="changePage(currentPage() - 1)" [disabled]="currentPage() <= 1" class="px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 disabled:opacity-40 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">Tr\u01B0\u1EDBc</button>\r
        <span class="px-3 py-1.5 font-medium text-gray-900 dark:text-white">Trang {{ currentPage() }} / {{ totalPages() || 1 }}</span>\r
        <button (click)="changePage(currentPage() + 1)" [disabled]="currentPage() >= totalPages()" class="px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 disabled:opacity-40 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">Sau</button>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Form Modal -->\r
  @if (isModalOpen()) {\r
    <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">\r
      <div class="bg-white dark:bg-gray-800 rounded-2xl max-w-lg w-full p-6 shadow-xl border border-gray-100 dark:border-gray-700 space-y-6">\r
        <div class="flex justify-between items-center">\r
          <h3 class="text-lg font-bold text-gray-900 dark:text-white">{{ isEditing() ? 'Ch\u1EC9nh s\u1EEDa b\xE0i h\u1ECDc' : 'Th\xEAm b\xE0i h\u1ECDc m\u1EDBi' }}</h3>\r
          <button (click)="closeModal()" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">\r
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>\r
          </button>\r
        </div>\r
\r
        <form [formGroup]="lessonForm" (ngSubmit)="onSubmit()" class="space-y-4">\r
          <div>\r
            <label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">L\u1EDBp h\u1ECDc *</label>\r
            <select formControlName="classId" class="w-full px-3 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:ring-2 focus:ring-blue-500">\r
              <option value="">-- Ch\u1ECDn l\u1EDBp h\u1ECDc --</option>\r
              @for (cls of classes(); track cls.id) {\r
                <option [value]="cls.id">{{ cls.code }} - {{ cls.name }}</option>\r
              }\r
            </select>\r
          </div>\r
          <div class="grid grid-cols-2 gap-4">\r
            <div>\r
              <label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">Th\u1EE9 t\u1EF1 b\xE0i h\u1ECDc *</label>\r
              <input formControlName="orderNumber" type="number" min="1" class="w-full px-3 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:ring-2 focus:ring-blue-500">\r
            </div>\r
            <div>\r
              <label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">T\xEAn b\xE0i h\u1ECDc *</label>\r
              <input formControlName="name" type="text" placeholder="VD: Gi\u1EDBi thi\u1EC7u IELTS Speaking" class="w-full px-3 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:ring-2 focus:ring-blue-500">\r
            </div>\r
          </div>\r
          <div>\r
            <label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">M\xF4 t\u1EA3</label>\r
            <textarea formControlName="description" rows="3" placeholder="N\u1ED9i dung m\xF4 t\u1EA3 b\xE0i h\u1ECDc..." class="w-full px-3 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:ring-2 focus:ring-blue-500"></textarea>\r
          </div>\r
\r
          <div class="flex justify-end gap-3 pt-4 border-t border-gray-100 dark:border-gray-700">\r
            <button type="button" (click)="closeModal()" class="px-4 py-2 text-xs font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl">H\u1EE7y</button>\r
            <button type="submit" [disabled]="lessonForm.invalid || isLoading()" class="px-4 py-2 text-xs font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-xl disabled:opacity-50">L\u01B0u</button>\r
          </div>\r
        </form>\r
      </div>\r
    </div>\r
  }\r
\r
  <!-- Delete Confirmation Modal -->\r
  @if (isDeleteModalOpen()) {\r
    <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">\r
      <div class="bg-white dark:bg-gray-800 rounded-2xl max-w-sm w-full p-6 shadow-xl border border-gray-100 dark:border-gray-700 space-y-4">\r
        <h3 class="text-base font-bold text-gray-900 dark:text-white">X\xE1c nh\u1EADn x\xF3a b\xE0i h\u1ECDc</h3>\r
        <p class="text-xs text-gray-500">B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a b\xE0i h\u1ECDc n\xE0y? Thao t\xE1c n\xE0y kh\xF4ng th\u1EC3 ho\xE0n t\xE1c.</p>\r
        <div class="flex justify-end gap-3 pt-2">\r
          <button (click)="closeDeleteModal()" class="px-4 py-2 text-xs font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl">H\u1EE7y</button>\r
          <button (click)="confirmDelete()" [disabled]="isLoading()" class="px-4 py-2 text-xs font-medium bg-rose-600 hover:bg-rose-700 text-white rounded-xl disabled:opacity-50">X\xF3a</button>\r
        </div>\r
      </div>\r
    </div>\r
  }\r
</div>\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LessonComponent, { className: "LessonComponent", filePath: "src/app/features/admin/pages/lesson/lesson.component.ts", lineNumber: 18 });
})();

// src/app/features/admin/admin.routes.ts
var adminRoutes = [
  {
    path: "dashboard",
    component: AdminDashboardComponent,
    canActivate: [authGuard]
  },
  {
    path: "terms",
    component: TermComponent,
    canActivate: [authGuard, permissionGuard(["TERM_VIEW", "TERM_READ", "TERM_MANAGE", "TERM_CREATE", "TERM_UPDATE", "TERM_DELETE"])]
  },
  {
    path: "courses",
    component: CourseComponent,
    canActivate: [authGuard, permissionGuard(["COURSE_VIEW", "COURSE_READ", "COURSE_MANAGE", "COURSE_CREATE", "COURSE_UPDATE", "COURSE_DELETE"])]
  },
  {
    path: "classes",
    component: ClassComponent,
    canActivate: [authGuard, permissionGuard(["CLASS_VIEW", "CLASS_READ", "CLASS_MANAGE", "CLASS_CREATE", "CLASS_UPDATE", "CLASS_DELETE"])]
  },
  {
    path: "classes/:id/schedules",
    component: ScheduleComponent,
    canActivate: [authGuard, permissionGuard(["SCHEDULE_VIEW", "SCHEDULE_READ", "SCHEDULE_MANAGE", "CLASS_VIEW", "CLASS_READ"])]
  },
  {
    path: "classes/:id/enrollments",
    component: EnrollmentComponent,
    canActivate: [authGuard, permissionGuard(["ENROLLMENT_VIEW", "ENROLLMENT_READ", "ENROLLMENT_MANAGE", "CLASS_VIEW", "CLASS_READ"])]
  },
  {
    path: "classes/:id/lessons",
    component: LessonComponent,
    canActivate: [authGuard, permissionGuard(["LESSON_VIEW", "LESSON_READ", "LESSON_MANAGE", "CLASS_VIEW", "CLASS_READ"])]
  },
  {
    path: "rooms",
    component: RoomComponent,
    canActivate: [authGuard, permissionGuard(["ROOM_VIEW", "ROOM_READ", "ROOM_MANAGE", "ROOM_CREATE", "ROOM_UPDATE", "ROOM_DELETE"])]
  },
  {
    path: "class-schedules",
    component: ScheduleComponent,
    canActivate: [authGuard, permissionGuard(["SCHEDULE_VIEW", "SCHEDULE_READ", "SCHEDULE_MANAGE", "SCHEDULE_CREATE"])]
  },
  {
    path: "teaching-assignments",
    component: TeachingAssignmentComponent,
    canActivate: [authGuard, permissionGuard(["ASSIGNMENT_VIEW", "ASSIGNMENT_CREATE", "ASSIGNMENT_UPDATE", "ASSIGNMENT_DELETE"])]
  },
  {
    path: "schedule-assignments",
    component: ScheduleAssignmentComponent,
    canActivate: [authGuard, permissionGuard(["ASSIGNMENT_VIEW", "ASSIGNMENT_CREATE", "ASSIGNMENT_UPDATE", "ASSIGNMENT_DELETE"])]
  },
  {
    path: "teaching-substitutions",
    component: TeachingSubstitutionComponent,
    canActivate: [authGuard, permissionGuard(["ASSIGNMENT_VIEW", "ASSIGNMENT_CREATE", "ASSIGNMENT_UPDATE", "ASSIGNMENT_DELETE"])]
  },
  {
    path: "enrollments",
    component: EnrollmentComponent,
    canActivate: [authGuard, permissionGuard(["ENROLLMENT_VIEW", "ENROLLMENT_READ", "ENROLLMENT_MANAGE", "ENROLLMENT_CREATE"])]
  },
  {
    path: "learning-materials",
    component: LearningMaterialComponent,
    canActivate: [authGuard, permissionGuard(["MATERIAL_VIEW", "MATERIAL_READ", "MATERIAL_MANAGE", "MATERIAL_CREATE", "LEARNING_MATERIAL_VIEW", "LEARNING_MATERIAL_READ"])]
  },
  {
    path: "students",
    component: StudentComponent,
    canActivate: [authGuard, permissionGuard(["STUDENT_VIEW", "STUDENT_READ", "STUDENT_MANAGE", "STUDENT_CREATE", "STUDENT_UPDATE", "STUDENT_DELETE"])]
  },
  {
    path: "staffs",
    component: StaffComponent,
    canActivate: [authGuard, permissionGuard(["STAFF_VIEW", "STAFF_READ", "STAFF_MANAGE", "STAFF_CREATE", "STAFF_UPDATE", "STAFF_DELETE"])]
  },
  {
    path: "teachers",
    redirectTo: "staffs",
    pathMatch: "full"
  },
  {
    path: "departments",
    component: DepartmentComponent,
    canActivate: [authGuard, permissionGuard(["DEPARTMENT_VIEW", "DEPARTMENT_READ", "DEPARTMENT_MANAGE", "DEPARTMENT_CREATE", "DEPARTMENT_UPDATE", "DEPARTMENT_DELETE"])]
  },
  {
    path: "roles",
    component: RoleComponent,
    canActivate: [authGuard, permissionGuard(["ROLE_VIEW", "ROLE_READ", "ROLE_MANAGE", "ROLE_CREATE", "ROLE_UPDATE", "ROLE_DELETE", "ROLE_ASSIGN_PERMISSION"])]
  },
  {
    path: "permissions",
    component: PermissionComponent,
    canActivate: [authGuard, permissionGuard(["PERMISSION_VIEW", "PERMISSION_READ", "PERMISSION_MANAGE", "PERMISSION_CREATE", "PERMISSION_UPDATE", "PERMISSION_DELETE"])]
  },
  {
    path: "users",
    component: UserComponent,
    canActivate: [authGuard, permissionGuard(["ACCOUNT_VIEW", "ACCOUNT_READ", "ACCOUNT_MANAGE", "ACCOUNT_UPDATE", "ACCOUNT_CREATE"])]
  },
  {
    path: "reports",
    component: AdminReportingComponent,
    canActivate: [authGuard, permissionGuard(["REPORT_VIEW", "REPORT_READ", "REPORT_MANAGE", "TRAINING_VIEW"])]
  },
  {
    path: "reporting",
    redirectTo: "reports",
    pathMatch: "full"
  },
  {
    path: "activity-logs",
    component: ActivityLogComponent,
    canActivate: [authGuard, permissionGuard(["LOG_VIEW", "LOG_READ", "ROLE_VIEW"])]
  },
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full"
  }
];
export {
  adminRoutes
};
//# sourceMappingURL=chunk-UDYFF4R7.js.map
