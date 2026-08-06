import {
  ActivityLogComponent,
  ClassService,
  CourseService,
  DAY_OF_WEEK_MAP,
  DepartmentComponent,
  EnrollmentComponent,
  LearningMaterialComponent,
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
import "./chunk-HGEUBDJK.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControl,
  FormControlDirective,
  FormControlName,
  FormGroupDirective,
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
import "./chunk-T67WJEUA.js";
import {
  ChangeDetectionStrategy,
  CommonModule,
  Component,
  DecimalPipe,
  DestroyRef,
  computed,
  debounceTime,
  distinctUntilChanged,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
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
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3
} from "./chunk-4WA2FUT3.js";

// src/app/features/academic/pages/course/course.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function CourseComponent_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function CourseComponent_button_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 29);
    \u0275\u0275element(2, "path", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Th\xEAm kh\xF3a h\u1ECDc ");
    \u0275\u0275elementEnd();
  }
}
function CourseComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 31);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 32);
    \u0275\u0275element(3, "circle", 33)(4, "path", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " \u0110ang t\u1EA3i danh s\xE1ch kh\xF3a h\u1ECDc... ");
    \u0275\u0275elementEnd()();
  }
}
function CourseComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 31);
    \u0275\u0275text(2, " Kh\xF4ng t\xECm th\u1EA5y kh\xF3a h\u1ECDc n\xE0o ph\xF9 h\u1EE3p. ");
    \u0275\u0275elementEnd()();
  }
}
function CourseComponent_Conditional_33_For_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const course_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(course_r3.description);
  }
}
function CourseComponent_Conditional_33_For_1_Case_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 43);
    \u0275\u0275element(1, "span", 49);
    \u0275\u0275text(2, " \u0110ang ho\u1EA1t \u0111\u1ED9ng ");
    \u0275\u0275elementEnd();
  }
}
function CourseComponent_Conditional_33_For_1_Case_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275element(1, "span", 50);
    \u0275\u0275text(2, " B\u1EA3n nh\xE1p ");
    \u0275\u0275elementEnd();
  }
}
function CourseComponent_Conditional_33_For_1_Case_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 45);
    \u0275\u0275element(1, "span", 51);
    \u0275\u0275text(2, " T\u1EA1m ng\u1EEBng ");
    \u0275\u0275elementEnd();
  }
}
function CourseComponent_Conditional_33_For_1_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 52);
    \u0275\u0275listener("click", function CourseComponent_Conditional_33_For_1_button_19_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const course_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openModal(course_r3));
    });
    \u0275\u0275text(1, " Ch\u1EC9nh s\u1EEDa ");
    \u0275\u0275elementEnd();
  }
}
function CourseComponent_Conditional_33_For_1_button_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 53);
    \u0275\u0275listener("click", function CourseComponent_Conditional_33_For_1_button_20_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const course_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDelete(course_r3.id));
    });
    \u0275\u0275text(1, " X\xF3a ");
    \u0275\u0275elementEnd();
  }
}
function CourseComponent_Conditional_33_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 35)(1, "td", 36);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 37)(4, "div", 38);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, CourseComponent_Conditional_33_For_1_Conditional_6_Template, 2, 1, "div", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 40)(8, "span", 41);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " gi\u1EDD ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 42);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 37);
    \u0275\u0275conditionalCreate(15, CourseComponent_Conditional_33_For_1_Case_15_Template, 3, 0, "span", 43)(16, CourseComponent_Conditional_33_For_1_Case_16_Template, 3, 0, "span", 44)(17, CourseComponent_Conditional_33_For_1_Case_17_Template, 3, 0, "span", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td", 46);
    \u0275\u0275template(19, CourseComponent_Conditional_33_For_1_button_19_Template, 2, 0, "button", 47)(20, CourseComponent_Conditional_33_For_1_button_20_Template, 2, 0, "button", 48);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_16_0;
    const course_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", course_r3.code, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(course_r3.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(course_r3.description ? 6 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(course_r3.durationHours || 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(13, 8, course_r3.basePrice || 0, "1.0-0"), " VN\u0110 ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional((tmp_16_0 = course_r3.status) === "ACTIVE" ? 15 : tmp_16_0 === "DRAFT" ? 16 : 17);
    \u0275\u0275advance(4);
    \u0275\u0275property("hasPermission", "COURSES_UPDATE");
    \u0275\u0275advance();
    \u0275\u0275property("hasPermission", "COURSES_DELETE");
  }
}
function CourseComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, CourseComponent_Conditional_33_For_1_Template, 21, 11, "tr", 35, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r1.courses());
  }
}
function CourseComponent_Conditional_57_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 66);
    \u0275\u0275text(1, "M\xE3 kh\xF3a h\u1ECDc kh\xF4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng");
    \u0275\u0275elementEnd();
  }
}
function CourseComponent_Conditional_57_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 66);
    \u0275\u0275text(1, "T\xEAn kh\xF3a h\u1ECDc kh\xF4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng");
    \u0275\u0275elementEnd();
  }
}
function CourseComponent_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 54);
    \u0275\u0275listener("click", function CourseComponent_Conditional_57_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 55)(3, "div", 56)(4, "div", 57)(5, "h3", 58);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 59);
    \u0275\u0275listener("click", function CourseComponent_Conditional_57_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 60);
    \u0275\u0275element(9, "path", 61);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(10, "form", 62);
    \u0275\u0275listener("ngSubmit", function CourseComponent_Conditional_57_Template_form_ngSubmit_10_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(11, "div")(12, "label", 63);
    \u0275\u0275text(13, " M\xE3 kh\xF3a h\u1ECDc ");
    \u0275\u0275elementStart(14, "span", 64);
    \u0275\u0275text(15, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(16, "input", 65);
    \u0275\u0275conditionalCreate(17, CourseComponent_Conditional_57_Conditional_17_Template, 2, 0, "p", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div")(19, "label", 63);
    \u0275\u0275text(20, " T\xEAn kh\xF3a h\u1ECDc ");
    \u0275\u0275elementStart(21, "span", 64);
    \u0275\u0275text(22, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(23, "input", 67);
    \u0275\u0275conditionalCreate(24, CourseComponent_Conditional_57_Conditional_24_Template, 2, 0, "p", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 68)(26, "div")(27, "label", 63);
    \u0275\u0275text(28, " Th\u1EDDi l\u01B0\u1EE3ng (Gi\u1EDD) ");
    \u0275\u0275elementStart(29, "span", 64);
    \u0275\u0275text(30, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(31, "input", 69);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div")(33, "label", 63);
    \u0275\u0275text(34, " H\u1ECDc ph\xED c\u01A1 b\u1EA3n ");
    \u0275\u0275elementStart(35, "span", 64);
    \u0275\u0275text(36, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 5)(38, "input", 70);
    \u0275\u0275listener("input", function CourseComponent_Conditional_57_Template_input_input_38_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPriceInput($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "span", 71);
    \u0275\u0275text(40, " VN\u0110 ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(41, "div")(42, "label", 63);
    \u0275\u0275text(43, " Tr\u1EA1ng th\xE1i ");
    \u0275\u0275elementStart(44, "span", 64);
    \u0275\u0275text(45, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "select", 72)(47, "option", 73);
    \u0275\u0275text(48, "\u0110ang ho\u1EA1t \u0111\u1ED9ng (ACTIVE)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "option", 74);
    \u0275\u0275text(50, "B\u1EA3n nh\xE1p (DRAFT)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "option", 75);
    \u0275\u0275text(52, "T\u1EA1m kh\xF3a (INACTIVE)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(53, "div")(54, "label", 63);
    \u0275\u0275text(55, "M\xF4 t\u1EA3 kh\xF3a h\u1ECDc");
    \u0275\u0275elementEnd();
    \u0275\u0275element(56, "textarea", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "div", 77)(58, "button", 78);
    \u0275\u0275listener("click", function CourseComponent_Conditional_57_Template_button_click_58_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275text(59, " H\u1EE7y b\u1ECF ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "button", 79);
    \u0275\u0275text(61);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isEditing() ? "C\u1EADp nh\u1EADt kh\xF3a h\u1ECDc" : "Th\xEAm kh\xF3a h\u1ECDc m\u1EDBi", " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("formGroup", ctx_r1.courseForm);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("border-red-400", ctx_r1.isFormSubmitted() && ((tmp_3_0 = ctx_r1.courseForm.get("code")) == null ? null : tmp_3_0.invalid));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isFormSubmitted() && ((tmp_4_0 = ctx_r1.courseForm.get("code")) == null ? null : tmp_4_0.hasError("required")) ? 17 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("border-red-400", ctx_r1.isFormSubmitted() && ((tmp_5_0 = ctx_r1.courseForm.get("name")) == null ? null : tmp_5_0.invalid));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isFormSubmitted() && ((tmp_6_0 = ctx_r1.courseForm.get("name")) == null ? null : tmp_6_0.hasError("required")) ? 24 : -1);
    \u0275\u0275advance(14);
    \u0275\u0275property("value", ctx_r1.formattedPrice());
    \u0275\u0275advance(23);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isEditing() ? "C\u1EADp nh\u1EADt" : "Th\xEAm m\u1EDBi", " ");
  }
}
function CourseComponent_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 54);
    \u0275\u0275listener("click", function CourseComponent_Conditional_58_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDeleteModal());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 55)(3, "div", 80)(4, "div", 81)(5, "div", 82);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 83);
    \u0275\u0275element(7, "path", 84);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "h3", 85);
    \u0275\u0275text(9, "X\xE1c nh\u1EADn x\xF3a kh\xF3a h\u1ECDc");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "p", 86);
    \u0275\u0275text(11, " B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a kh\xF3a h\u1ECDc n\xE0y kh\xF4ng? H\xE0nh \u0111\u1ED9ng n\xE0y kh\xF4ng th\u1EC3 ho\xE0n t\xE1c v\xE0 c\xF3 th\u1EC3 \u1EA3nh h\u01B0\u1EDFng \u0111\u1EBFn c\xE1c l\u1EDBp h\u1ECDc li\xEAn quan. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 87)(13, "button", 88);
    \u0275\u0275listener("click", function CourseComponent_Conditional_58_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDeleteModal());
    });
    \u0275\u0275text(14, " H\u1EE7y ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 89);
    \u0275\u0275listener("click", function CourseComponent_Conditional_58_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmDelete());
    });
    \u0275\u0275text(16, " \u0110\u1ED3ng \xFD X\xF3a ");
    \u0275\u0275elementEnd()()()()();
  }
}
var CourseComponent = class _CourseComponent {
  courseService = inject(CourseService);
  fb = inject(FormBuilder);
  destroyRef = inject(DestroyRef);
  toastService = inject(ToastService);
  // --- STATE DANH SÁCH KHÓA HỌC ---
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
  // --- STATE MODAL THÊM / SỬA ---
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
  // --- STATE MODAL XÓA ---
  isDeleteModalOpen = signal(false, ...ngDevMode ? [{ debugName: "isDeleteModalOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  idToDelete = signal(null, ...ngDevMode ? [{ debugName: "idToDelete" }] : (
    /* istanbul ignore next */
    []
  ));
  // Computed signals
  totalPages = computed(() => Math.max(1, Math.ceil(this.totalElements() / this.pageSize())), ...ngDevMode ? [{ debugName: "totalPages" }] : (
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
    this.courseForm = this.fb.group({
      code: ["", [Validators.required, Validators.maxLength(50)]],
      name: ["", [Validators.required, Validators.maxLength(255)]],
      description: [""],
      durationHours: [0, [Validators.required, Validators.min(0)]],
      basePrice: [0, [Validators.required, Validators.min(0)]],
      status: ["ACTIVE", [Validators.required]]
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
    this.courseService.getCourses({
      page: this.currentPage(),
      size: this.pageSize(),
      keyword: this.searchControl.value || ""
    }).subscribe({
      next: (response) => {
        this.courses.set(response.content || []);
        this.totalElements.set(response.totalElements || 0);
        this.isLoading.set(false);
      },
      error: (err) => {
        this.toastService.error("L\u1ED7i", "L\u1ED7i khi t\u1EA3i danh s\xE1ch kh\xF3a h\u1ECDc: " + (err.error?.message || err.message));
        this.isLoading.set(false);
      }
    });
  }
  changePage(page) {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage.set(page);
      this.loadData();
    }
  }
  // Signal quản lý chuỗi hiển thị giá học phí có phân cách hàng nghìn (VD: 5,000,000)
  formattedPrice = signal("0", ...ngDevMode ? [{ debugName: "formattedPrice" }] : (
    /* istanbul ignore next */
    []
  ));
  openModal(course) {
    this.isFormSubmitted.set(false);
    if (course && course.id) {
      this.isEditing.set(true);
      this.currentId.set(course.id);
      const price = course.basePrice || 0;
      this.formattedPrice.set(price.toLocaleString("en-US"));
      this.courseForm.patchValue({
        code: course.code,
        name: course.name,
        description: course.description || "",
        durationHours: course.durationHours || 0,
        basePrice: price,
        status: course.status || "ACTIVE"
      });
    } else {
      if (this.isEditing() || !this.courseForm.get("code")?.value) {
        this.isEditing.set(false);
        this.currentId.set(null);
        this.resetAddForm();
      } else {
        this.isEditing.set(false);
        this.currentId.set(null);
      }
    }
    this.isModalOpen.set(true);
  }
  resetAddForm() {
    this.formattedPrice.set("0");
    this.courseForm.reset({
      code: "",
      name: "",
      description: "",
      durationHours: 0,
      basePrice: 0,
      status: "ACTIVE"
    });
  }
  closeModal() {
    this.isModalOpen.set(false);
  }
  onPriceInput(event) {
    const input = event.target;
    const rawValue = input.value.replace(/\D/g, "");
    if (!rawValue) {
      this.courseForm.patchValue({ basePrice: 0 });
      this.formattedPrice.set("");
      input.value = "";
      return;
    }
    const numericValue = parseInt(rawValue, 10);
    this.courseForm.patchValue({ basePrice: numericValue });
    const formatted = numericValue.toLocaleString("en-US");
    this.formattedPrice.set(formatted);
    input.value = formatted;
  }
  isFormSubmitted = signal(false, ...ngDevMode ? [{ debugName: "isFormSubmitted" }] : (
    /* istanbul ignore next */
    []
  ));
  onSubmit() {
    this.isFormSubmitted.set(true);
    if (this.courseForm.invalid) {
      this.toastService.error("Th\xF4ng b\xE1o", "Vui l\xF2ng ki\u1EC3m tra l\u1EA1i c\xE1c tr\u01B0\u1EDDng d\u1EEF li\u1EC7u b\u1EAFt bu\u1ED9c");
      return;
    }
    const formValues = this.courseForm.value;
    const courseData = {
      code: formValues.code,
      name: formValues.name,
      description: formValues.description,
      durationHours: Number(formValues.durationHours),
      basePrice: Number(formValues.basePrice),
      status: formValues.status
    };
    if (this.isEditing() && this.currentId()) {
      this.courseService.update(this.currentId(), courseData).subscribe({
        next: (res) => {
          this.toastService.success("Th\xE0nh c\xF4ng", res.message || "C\u1EADp nh\u1EADt kh\xF3a h\u1ECDc th\xE0nh c\xF4ng!");
          this.closeModal();
          this.loadData();
        },
        error: (err) => {
          this.toastService.error("L\u1ED7i", "C\u1EADp nh\u1EADt th\u1EA5t b\u1EA1i: " + (err.error?.message || err.message));
        }
      });
    } else {
      this.courseService.create(courseData).subscribe({
        next: (res) => {
          this.toastService.success("Th\xE0nh c\xF4ng", res.message || "T\u1EA1o m\u1EDBi kh\xF3a h\u1ECDc th\xE0nh c\xF4ng!");
          this.resetAddForm();
          this.closeModal();
          this.loadData();
        },
        error: (err) => {
          this.toastService.error("L\u1ED7i", "T\u1EA1o m\u1EDBi th\u1EA5t b\u1EA1i: " + (err.error?.message || err.message));
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
  confirmDelete() {
    const id = this.idToDelete();
    if (!id)
      return;
    this.courseService.delete(id).subscribe({
      next: (res) => {
        this.toastService.success("Th\xE0nh c\xF4ng", res.message || "X\xF3a kh\xF3a h\u1ECDc th\xE0nh c\xF4ng!");
        this.isDeleteModalOpen.set(false);
        this.idToDelete.set(null);
        this.loadData();
      },
      error: (err) => {
        this.toastService.error("L\u1ED7i", "X\xF3a th\u1EA5t b\u1EA1i: " + (err.error?.message || err.message));
      }
    });
  }
  closeDeleteModal() {
    this.isDeleteModalOpen.set(false);
    this.idToDelete.set(null);
  }
  static \u0275fac = function CourseComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CourseComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CourseComponent, selectors: [["app-course"]], decls: 59, vars: 12, consts: [[1, "space-y-6"], [1, "flex", "flex-col", "md:flex-row", "md:items-end", "justify-between", "gap-4", "pb-4", "border-b", "border-gray-100"], [1, "text-2xl", "font-extrabold", "text-gray-900", "tracking-tight"], [1, "text-sm", "text-gray-500", "mt-1"], [1, "flex", "space-x-3"], [1, "relative"], [1, "absolute", "inset-y-0", "left-0", "flex", "items-center", "pl-3", "pointer-events-none"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-gray-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], ["type", "text", "placeholder", "T\xECm m\xE3 ho\u1EB7c t\xEAn kh\xF3a...", 1, "bg-white", "border", "border-gray-200", "text-gray-900", "text-sm", "rounded-xl", "focus:ring-2", "focus:ring-blue-100", "focus:border-blue-500", "block", "w-64", "pl-10", "p-2.5", "outline-none", "transition", "shadow-sm", 3, "formControl"], ["class", "bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-5 rounded-xl flex items-center transition shadow-md hover:shadow-lg text-sm", 3, "click", 4, "hasPermission"], [1, "bg-white", "rounded-2xl", "shadow-sm", "border", "border-gray-100", "overflow-hidden"], [1, "w-full", "text-sm", "text-left", "text-gray-500"], [1, "text-xs", "text-gray-500", "uppercase", "bg-gray-50/80", "border-b", "border-gray-100", "font-semibold"], ["scope", "col", 1, "px-6", "py-4"], ["scope", "col", 1, "px-6", "py-4", "text-right"], [1, "divide-y", "divide-gray-50"], [1, "flex", "flex-col", "sm:flex-row", "items-center", "justify-between", "px-6", "py-4", "bg-gray-50/80", "border-t", "border-gray-100", "rounded-b-2xl", "gap-3"], [1, "text-sm", "text-gray-500"], [1, "font-semibold", "text-gray-900"], [1, "flex", "space-x-2"], [1, "px-3.5", "py-1.5", "text-sm", "font-medium", "text-gray-700", "bg-white", "border", "border-gray-300", "rounded-lg", "hover:bg-gray-50", "disabled:opacity-50", "disabled:cursor-not-allowed", "transition", "shadow-sm", "flex", "items-center", 3, "click", "disabled"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "mr-1"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 19l-7-7 7-7"], [1, "px-3.5", "py-1.5", "text-sm", "font-semibold", "text-gray-800", "bg-gray-100", "rounded-lg", "flex", "items-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "ml-1"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 5l7 7-7 7"], [1, "fixed", "inset-0", "z-50", "overflow-y-auto"], [1, "bg-blue-600", "hover:bg-blue-700", "text-white", "font-semibold", "py-2.5", "px-5", "rounded-xl", "flex", "items-center", "transition", "shadow-md", "hover:shadow-lg", "text-sm", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "mr-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 4v16m8-8H4"], ["colspan", "6", 1, "px-6", "py-12", "text-center", "text-gray-500"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "mx-auto", "h-8", "w-8", "text-blue-500", "mb-3"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"], [1, "bg-white", "hover:bg-blue-50/50", "transition", "duration-200"], [1, "px-6", "py-4", "font-mono", "font-bold", "text-blue-600"], [1, "px-6", "py-4"], [1, "font-bold", "text-gray-900"], [1, "text-xs", "text-gray-400", "truncate", "max-w-xs", "mt-0.5"], [1, "px-6", "py-4", "text-gray-700"], [1, "font-semibold"], [1, "px-6", "py-4", "font-semibold", "text-gray-900"], [1, "px-3", "py-1", "text-xs", "font-semibold", "rounded-full", "border", "bg-emerald-50", "text-emerald-700", "border-emerald-200", "inline-flex", "items-center"], [1, "px-3", "py-1", "text-xs", "font-semibold", "rounded-full", "border", "bg-amber-50", "text-amber-700", "border-amber-200", "inline-flex", "items-center"], [1, "px-3", "py-1", "text-xs", "font-semibold", "rounded-full", "border", "bg-gray-50", "text-gray-600", "border-gray-200", "inline-flex", "items-center"], [1, "px-6", "py-4", "text-right", "space-x-3"], ["class", "font-medium text-blue-600 hover:text-blue-800 transition text-sm", 3, "click", 4, "hasPermission"], ["class", "font-medium text-red-600 hover:text-red-800 transition text-sm", 3, "click", 4, "hasPermission"], [1, "w-1.5", "h-1.5", "rounded-full", "mr-1.5", "bg-emerald-500"], [1, "w-1.5", "h-1.5", "rounded-full", "mr-1.5", "bg-amber-500"], [1, "w-1.5", "h-1.5", "rounded-full", "mr-1.5", "bg-gray-400"], [1, "font-medium", "text-blue-600", "hover:text-blue-800", "transition", "text-sm", 3, "click"], [1, "font-medium", "text-red-600", "hover:text-red-800", "transition", "text-sm", 3, "click"], [1, "fixed", "inset-0", "bg-gray-900/50", "backdrop-blur-sm", "transition-opacity", 3, "click"], [1, "flex", "min-h-full", "items-center", "justify-center", "p-4"], [1, "relative", "w-full", "max-w-lg", "rounded-2xl", "bg-white", "p-6", "shadow-2xl", "transition-all", "border", "border-gray-100"], [1, "flex", "items-center", "justify-between", "pb-4", "border-b", "border-gray-100"], [1, "text-xl", "font-bold", "text-gray-900"], [1, "text-gray-400", "hover:text-gray-600", "transition", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "mt-4", "space-y-4", 3, "ngSubmit", "formGroup"], [1, "block", "text-xs", "font-semibold", "text-gray-700", "uppercase", "tracking-wider", "mb-1"], [1, "text-red-500"], ["type", "text", "formControlName", "code", "placeholder", "VD: ENG-IELTS-6.5", 1, "w-full", "px-3.5", "py-2.5", "border", "border-gray-200", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-100", "focus:border-blue-500", "outline-none", "transition"], [1, "mt-1", "text-xs", "text-red-500"], ["type", "text", "formControlName", "name", "placeholder", "VD: Kh\xF3a luy\u1EC7n thi IELTS 6.5+", 1, "w-full", "px-3.5", "py-2.5", "border", "border-gray-200", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-100", "focus:border-blue-500", "outline-none", "transition"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "gap-4"], ["type", "number", "formControlName", "durationHours", "placeholder", "VD: 60", 1, "w-full", "px-3.5", "py-2.5", "border", "border-gray-200", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-100", "focus:border-blue-500", "outline-none", "transition"], ["type", "text", "placeholder", "VD: 5,000,000", 1, "w-full", "px-3.5", "py-2.5", "pr-14", "border", "border-gray-200", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-100", "focus:border-blue-500", "outline-none", "transition", "font-semibold", "text-gray-900", 3, "input", "value"], [1, "absolute", "inset-y-0", "right-0", "flex", "items-center", "pr-3.5", "pointer-events-none", "text-xs", "font-bold", "text-gray-400", "uppercase"], ["formControlName", "status", 1, "w-full", "px-3.5", "py-2.5", "border", "border-gray-200", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-100", "focus:border-blue-500", "outline-none", "transition", "bg-white"], ["value", "ACTIVE"], ["value", "DRAFT"], ["value", "INACTIVE"], ["formControlName", "description", "rows", "3", "placeholder", "Nh\u1EADp th\xF4ng tin m\xF4 t\u1EA3 chi ti\u1EBFt v\u1EC1 kh\xF3a h\u1ECDc...", 1, "w-full", "px-3.5", "py-2.5", "border", "border-gray-200", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-100", "focus:border-blue-500", "outline-none", "transition", "resize-none"], [1, "flex", "justify-end", "space-x-3", "pt-4", "border-t", "border-gray-100"], ["type", "button", 1, "px-4", "py-2.5", "text-sm", "font-medium", "text-gray-700", "bg-white", "border", "border-gray-300", "rounded-xl", "hover:bg-gray-50", "transition", 3, "click"], ["type", "submit", 1, "px-5", "py-2.5", "text-sm", "font-semibold", "text-white", "bg-blue-600", "hover:bg-blue-700", "rounded-xl", "transition", "shadow-md"], [1, "relative", "w-full", "max-w-md", "rounded-2xl", "bg-white", "p-6", "shadow-2xl", "transition-all", "border", "border-gray-100"], [1, "flex", "items-center", "space-x-3", "text-red-600", "mb-4"], [1, "p-3", "bg-red-50", "rounded-full"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"], [1, "text-lg", "font-bold", "text-gray-900"], [1, "text-sm", "text-gray-600", "mb-6"], [1, "flex", "justify-end", "space-x-3"], [1, "px-4", "py-2", "text-sm", "font-medium", "text-gray-700", "bg-white", "border", "border-gray-300", "rounded-xl", "hover:bg-gray-50", "transition", 3, "click"], [1, "px-4", "py-2", "text-sm", "font-semibold", "text-white", "bg-red-600", "hover:bg-red-700", "rounded-xl", "transition", "shadow-md", 3, "click"]], template: function CourseComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Qu\u1EA3n l\xFD Kh\xF3a h\u1ECDc");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Qu\u1EA3n l\xFD ch\u01B0\u01A1ng tr\xECnh \u0111\xE0o t\u1EA1o, m\xF4n h\u1ECDc v\xE0 m\u1EE9c h\u1ECDc ph\xED c\u01A1 b\u1EA3n");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 4)(8, "div", 5)(9, "div", 6);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(10, "svg", 7);
      \u0275\u0275element(11, "path", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275element(12, "input", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275template(13, CourseComponent_button_13_Template, 4, 0, "button", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 11)(15, "table", 12)(16, "thead", 13)(17, "tr")(18, "th", 14);
      \u0275\u0275text(19, "M\xE3 KH");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "th", 14);
      \u0275\u0275text(21, "T\xEAn kh\xF3a h\u1ECDc");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "th", 14);
      \u0275\u0275text(23, "Th\u1EDDi l\u01B0\u1EE3ng");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "th", 14);
      \u0275\u0275text(25, "H\u1ECDc ph\xED c\u01A1 b\u1EA3n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "th", 14);
      \u0275\u0275text(27, "Tr\u1EA1ng th\xE1i");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "th", 15);
      \u0275\u0275text(29, "Thao t\xE1c");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(30, "tbody", 16);
      \u0275\u0275conditionalCreate(31, CourseComponent_Conditional_31_Template, 6, 0, "tr")(32, CourseComponent_Conditional_32_Template, 3, 0, "tr")(33, CourseComponent_Conditional_33_Template, 2, 0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "div", 17)(35, "div", 18);
      \u0275\u0275text(36, " Hi\u1EC3n th\u1ECB ");
      \u0275\u0275elementStart(37, "span", 19);
      \u0275\u0275text(38);
      \u0275\u0275elementEnd();
      \u0275\u0275text(39, " - ");
      \u0275\u0275elementStart(40, "span", 19);
      \u0275\u0275text(41);
      \u0275\u0275elementEnd();
      \u0275\u0275text(42, " trong t\u1ED5ng s\u1ED1 ");
      \u0275\u0275elementStart(43, "span", 19);
      \u0275\u0275text(44);
      \u0275\u0275elementEnd();
      \u0275\u0275text(45, " k\u1EBFt qu\u1EA3 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "div", 20)(47, "button", 21);
      \u0275\u0275listener("click", function CourseComponent_Template_button_click_47_listener() {
        return ctx.changePage(ctx.currentPage() - 1);
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(48, "svg", 22);
      \u0275\u0275element(49, "path", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275text(50, " Tr\u01B0\u1EDBc ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(51, "span", 24);
      \u0275\u0275text(52);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "button", 21);
      \u0275\u0275listener("click", function CourseComponent_Template_button_click_53_listener() {
        return ctx.changePage(ctx.currentPage() + 1);
      });
      \u0275\u0275text(54, " Sau ");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(55, "svg", 25);
      \u0275\u0275element(56, "path", 26);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275conditionalCreate(57, CourseComponent_Conditional_57_Template, 62, 10, "div", 27);
      \u0275\u0275conditionalCreate(58, CourseComponent_Conditional_58_Template, 17, 0, "div", 27);
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275property("formControl", ctx.searchControl);
      \u0275\u0275advance();
      \u0275\u0275property("hasPermission", "COURSES_CREATE");
      \u0275\u0275advance(18);
      \u0275\u0275conditional(ctx.isLoading() && ctx.courses().length === 0 ? 31 : ctx.courses().length === 0 ? 32 : 33);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.startIndex());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.endIndex());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.totalElements());
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", ctx.currentPage() === 1);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate2(" ", ctx.currentPage(), " / ", ctx.totalPages(), " ");
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.currentPage() >= ctx.totalPages());
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.isModalOpen() ? 57 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isDeleteModalOpen() ? 58 : -1);
    }
  }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormControlDirective, FormGroupDirective, FormControlName, HasPermissionDirective, DecimalPipe], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CourseComponent, [{
    type: Component,
    args: [{ selector: "app-course", imports: [CommonModule, ReactiveFormsModule, HasPermissionDirective], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="space-y-6">\r
  <!-- PAGE HEADER -->\r
  <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-gray-100">\r
    <div>\r
      <h1 class="text-2xl font-extrabold text-gray-900 tracking-tight">Qu\u1EA3n l\xFD Kh\xF3a h\u1ECDc</h1>\r
      <p class="text-sm text-gray-500 mt-1">Qu\u1EA3n l\xFD ch\u01B0\u01A1ng tr\xECnh \u0111\xE0o t\u1EA1o, m\xF4n h\u1ECDc v\xE0 m\u1EE9c h\u1ECDc ph\xED c\u01A1 b\u1EA3n</p>\r
    </div>\r
    <div class="flex space-x-3">\r
      <!-- Search Input -->\r
      <div class="relative">\r
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">\r
          <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>\r
          </svg>\r
        </div>\r
        <input \r
          type="text" \r
          [formControl]="searchControl" \r
          placeholder="T\xECm m\xE3 ho\u1EB7c t\xEAn kh\xF3a..." \r
          class="bg-white border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-500 block w-64 pl-10 p-2.5 outline-none transition shadow-sm"\r
        >\r
      </div>\r
\r
      <!-- Add Button -->\r
      <button \r
        *hasPermission="'COURSES_CREATE'"\r
        (click)="openModal()" \r
        class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-5 rounded-xl flex items-center transition shadow-md hover:shadow-lg text-sm"\r
      >\r
        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>\r
        </svg>\r
        Th\xEAm kh\xF3a h\u1ECDc\r
      </button>\r
    </div>\r
  </div>\r
\r
  <!-- TABLE CONTAINER -->\r
  <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">\r
    <table class="w-full text-sm text-left text-gray-500">\r
      <thead class="text-xs text-gray-500 uppercase bg-gray-50/80 border-b border-gray-100 font-semibold">\r
        <tr>\r
          <th scope="col" class="px-6 py-4">M\xE3 KH</th>\r
          <th scope="col" class="px-6 py-4">T\xEAn kh\xF3a h\u1ECDc</th>\r
          <th scope="col" class="px-6 py-4">Th\u1EDDi l\u01B0\u1EE3ng</th>\r
          <th scope="col" class="px-6 py-4">H\u1ECDc ph\xED c\u01A1 b\u1EA3n</th>\r
          <th scope="col" class="px-6 py-4">Tr\u1EA1ng th\xE1i</th>\r
          <th scope="col" class="px-6 py-4 text-right">Thao t\xE1c</th>\r
        </tr>\r
      </thead>\r
      <tbody class="divide-y divide-gray-50">\r
        @if (isLoading() && courses().length === 0) {\r
          <tr>\r
            <td colspan="6" class="px-6 py-12 text-center text-gray-500">\r
              <svg class="animate-spin mx-auto h-8 w-8 text-blue-500 mb-3" fill="none" viewBox="0 0 24 24">\r
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>\r
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>\r
              </svg>\r
              \u0110ang t\u1EA3i danh s\xE1ch kh\xF3a h\u1ECDc...\r
            </td>\r
          </tr>\r
        } @else if (courses().length === 0) {\r
          <tr>\r
            <td colspan="6" class="px-6 py-12 text-center text-gray-500">\r
              Kh\xF4ng t\xECm th\u1EA5y kh\xF3a h\u1ECDc n\xE0o ph\xF9 h\u1EE3p.\r
            </td>\r
          </tr>\r
        } @else {\r
          @for (course of courses(); track course.id) {\r
            <tr class="bg-white hover:bg-blue-50/50 transition duration-200">\r
              <!-- Code -->\r
              <td class="px-6 py-4 font-mono font-bold text-blue-600">\r
                {{ course.code }}\r
              </td>\r
              <!-- Name & Description -->\r
              <td class="px-6 py-4">\r
                <div class="font-bold text-gray-900">{{ course.name }}</div>\r
                @if (course.description) {\r
                  <div class="text-xs text-gray-400 truncate max-w-xs mt-0.5">{{ course.description }}</div>\r
                }\r
              </td>\r
              <!-- Duration -->\r
              <td class="px-6 py-4 text-gray-700">\r
                <span class="font-semibold">{{ course.durationHours || 0 }}</span> gi\u1EDD\r
              </td>\r
              <!-- Base Price -->\r
              <td class="px-6 py-4 font-semibold text-gray-900">\r
                {{ (course.basePrice || 0) | number:'1.0-0' }} VN\u0110\r
              </td>\r
              <!-- Status Badge -->\r
              <td class="px-6 py-4">\r
                @switch (course.status) {\r
                  @case ('ACTIVE') {\r
                    <span class="px-3 py-1 text-xs font-semibold rounded-full border bg-emerald-50 text-emerald-700 border-emerald-200 inline-flex items-center">\r
                      <span class="w-1.5 h-1.5 rounded-full mr-1.5 bg-emerald-500"></span>\r
                      \u0110ang ho\u1EA1t \u0111\u1ED9ng\r
                    </span>\r
                  }\r
                  @case ('DRAFT') {\r
                    <span class="px-3 py-1 text-xs font-semibold rounded-full border bg-amber-50 text-amber-700 border-amber-200 inline-flex items-center">\r
                      <span class="w-1.5 h-1.5 rounded-full mr-1.5 bg-amber-500"></span>\r
                      B\u1EA3n nh\xE1p\r
                    </span>\r
                  }\r
                  @default {\r
                    <span class="px-3 py-1 text-xs font-semibold rounded-full border bg-gray-50 text-gray-600 border-gray-200 inline-flex items-center">\r
                      <span class="w-1.5 h-1.5 rounded-full mr-1.5 bg-gray-400"></span>\r
                      T\u1EA1m ng\u1EEBng\r
                    </span>\r
                  }\r
                }\r
              </td>\r
              <!-- Actions -->\r
              <td class="px-6 py-4 text-right space-x-3">\r
                <button \r
                  *hasPermission="'COURSES_UPDATE'"\r
                  (click)="openModal(course)" \r
                  class="font-medium text-blue-600 hover:text-blue-800 transition text-sm"\r
                >\r
                  Ch\u1EC9nh s\u1EEDa\r
                </button>\r
                <button \r
                  *hasPermission="'COURSES_DELETE'"\r
                  (click)="onDelete(course.id!)" \r
                  class="font-medium text-red-600 hover:text-red-800 transition text-sm"\r
                >\r
                  X\xF3a\r
                </button>\r
              </td>\r
            </tr>\r
          }\r
        }\r
      </tbody>\r
    </table>\r
\r
    <!-- PAGINATION FOOTER -->\r
    <div class="flex flex-col sm:flex-row items-center justify-between px-6 py-4 bg-gray-50/80 border-t border-gray-100 rounded-b-2xl gap-3">\r
      <div class="text-sm text-gray-500">\r
        Hi\u1EC3n th\u1ECB <span class="font-semibold text-gray-900">{{ startIndex() }}</span> \r
        - <span class="font-semibold text-gray-900">{{ endIndex() }}</span> \r
        trong t\u1ED5ng s\u1ED1 <span class="font-semibold text-gray-900">{{ totalElements() }}</span> k\u1EBFt qu\u1EA3\r
      </div>\r
      \r
      <div class="flex space-x-2">\r
        <button \r
          (click)="changePage(currentPage() - 1)" \r
          [disabled]="currentPage() === 1"\r
          class="px-3.5 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition shadow-sm flex items-center"\r
        >\r
          <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>\r
          </svg>\r
          Tr\u01B0\u1EDBc\r
        </button>\r
\r
        <span class="px-3.5 py-1.5 text-sm font-semibold text-gray-800 bg-gray-100 rounded-lg flex items-center">\r
          {{ currentPage() }} / {{ totalPages() }}\r
        </span>\r
\r
        <button \r
          (click)="changePage(currentPage() + 1)" \r
          [disabled]="currentPage() >= totalPages()"\r
          class="px-3.5 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition shadow-sm flex items-center"\r
        >\r
          Sau\r
          <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>\r
          </svg>\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- MODAL TH\xCAM / C\u1EACP NH\u1EACT KH\xD3A H\u1ECCC -->\r
@if (isModalOpen()) {\r
  <div class="fixed inset-0 z-50 overflow-y-auto">\r
    <div class="fixed inset-0 bg-gray-900/50 backdrop-blur-sm transition-opacity" (click)="closeModal()"></div>\r
\r
    <div class="flex min-h-full items-center justify-center p-4">\r
      <div class="relative w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl transition-all border border-gray-100">\r
        \r
        <!-- Modal Header -->\r
        <div class="flex items-center justify-between pb-4 border-b border-gray-100">\r
          <h3 class="text-xl font-bold text-gray-900">\r
            {{ isEditing() ? 'C\u1EADp nh\u1EADt kh\xF3a h\u1ECDc' : 'Th\xEAm kh\xF3a h\u1ECDc m\u1EDBi' }}\r
          </h3>\r
          <button (click)="closeModal()" class="text-gray-400 hover:text-gray-600 transition">\r
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>\r
            </svg>\r
          </button>\r
        </div>\r
\r
        <!-- Modal Form -->\r
        <form [formGroup]="courseForm" (ngSubmit)="onSubmit()" class="mt-4 space-y-4">\r
          <!-- Code -->\r
          <div>\r
            <label class="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">\r
              M\xE3 kh\xF3a h\u1ECDc <span class="text-red-500">*</span>\r
            </label>\r
            <input \r
              type="text" \r
              formControlName="code"\r
              placeholder="VD: ENG-IELTS-6.5"\r
              class="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition"\r
              [class.border-red-400]="isFormSubmitted() && courseForm.get('code')?.invalid"\r
            >\r
            @if (isFormSubmitted() && courseForm.get('code')?.hasError('required')) {\r
              <p class="mt-1 text-xs text-red-500">M\xE3 kh\xF3a h\u1ECDc kh\xF4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng</p>\r
            }\r
          </div>\r
\r
          <!-- Name -->\r
          <div>\r
            <label class="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">\r
              T\xEAn kh\xF3a h\u1ECDc <span class="text-red-500">*</span>\r
            </label>\r
            <input \r
              type="text" \r
              formControlName="name"\r
              placeholder="VD: Kh\xF3a luy\u1EC7n thi IELTS 6.5+"\r
              class="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition"\r
              [class.border-red-400]="isFormSubmitted() && courseForm.get('name')?.invalid"\r
            >\r
            @if (isFormSubmitted() && courseForm.get('name')?.hasError('required')) {\r
              <p class="mt-1 text-xs text-red-500">T\xEAn kh\xF3a h\u1ECDc kh\xF4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng</p>\r
            }\r
          </div>\r
\r
          <!-- Duration & Price Grid -->\r
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">\r
            <div>\r
              <label class="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">\r
                Th\u1EDDi l\u01B0\u1EE3ng (Gi\u1EDD) <span class="text-red-500">*</span>\r
              </label>\r
              <input \r
                type="number" \r
                formControlName="durationHours"\r
                placeholder="VD: 60"\r
                class="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition"\r
              >\r
            </div>\r
\r
            <div>\r
              <label class="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">\r
                H\u1ECDc ph\xED c\u01A1 b\u1EA3n <span class="text-red-500">*</span>\r
              </label>\r
              <div class="relative">\r
                <input \r
                  type="text" \r
                  [value]="formattedPrice()"\r
                  (input)="onPriceInput($event)"\r
                  placeholder="VD: 5,000,000"\r
                  class="w-full px-3.5 py-2.5 pr-14 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition font-semibold text-gray-900"\r
                >\r
                <span class="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-none text-xs font-bold text-gray-400 uppercase">\r
                  VN\u0110\r
                </span>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- Status Select -->\r
          <div>\r
            <label class="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">\r
              Tr\u1EA1ng th\xE1i <span class="text-red-500">*</span>\r
            </label>\r
            <select \r
              formControlName="status"\r
              class="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition bg-white"\r
            >\r
              <option value="ACTIVE">\u0110ang ho\u1EA1t \u0111\u1ED9ng (ACTIVE)</option>\r
              <option value="DRAFT">B\u1EA3n nh\xE1p (DRAFT)</option>\r
              <option value="INACTIVE">T\u1EA1m kh\xF3a (INACTIVE)</option>\r
            </select>\r
          </div>\r
\r
          <!-- Description -->\r
          <div>\r
            <label class="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">M\xF4 t\u1EA3 kh\xF3a h\u1ECDc</label>\r
            <textarea \r
              formControlName="description"\r
              rows="3"\r
              placeholder="Nh\u1EADp th\xF4ng tin m\xF4 t\u1EA3 chi ti\u1EBFt v\u1EC1 kh\xF3a h\u1ECDc..."\r
              class="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition resize-none"\r
            ></textarea>\r
          </div>\r
\r
          <!-- Modal Footer Actions -->\r
          <div class="flex justify-end space-x-3 pt-4 border-t border-gray-100">\r
            <button \r
              type="button" \r
              (click)="closeModal()"\r
              class="px-4 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition"\r
            >\r
              H\u1EE7y b\u1ECF\r
            </button>\r
            <button \r
              type="submit"\r
              class="px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition shadow-md"\r
            >\r
              {{ isEditing() ? 'C\u1EADp nh\u1EADt' : 'Th\xEAm m\u1EDBi' }}\r
            </button>\r
          </div>\r
        </form>\r
      </div>\r
    </div>\r
  </div>\r
}\r
\r
<!-- MODAL X\xC1C NH\u1EACN X\xD3A -->\r
@if (isDeleteModalOpen()) {\r
  <div class="fixed inset-0 z-50 overflow-y-auto">\r
    <div class="fixed inset-0 bg-gray-900/50 backdrop-blur-sm transition-opacity" (click)="closeDeleteModal()"></div>\r
\r
    <div class="flex min-h-full items-center justify-center p-4">\r
      <div class="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl transition-all border border-gray-100">\r
        <div class="flex items-center space-x-3 text-red-600 mb-4">\r
          <div class="p-3 bg-red-50 rounded-full">\r
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>\r
            </svg>\r
          </div>\r
          <h3 class="text-lg font-bold text-gray-900">X\xE1c nh\u1EADn x\xF3a kh\xF3a h\u1ECDc</h3>\r
        </div>\r
        <p class="text-sm text-gray-600 mb-6">\r
          B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a kh\xF3a h\u1ECDc n\xE0y kh\xF4ng? H\xE0nh \u0111\u1ED9ng n\xE0y kh\xF4ng th\u1EC3 ho\xE0n t\xE1c v\xE0 c\xF3 th\u1EC3 \u1EA3nh h\u01B0\u1EDFng \u0111\u1EBFn c\xE1c l\u1EDBp h\u1ECDc li\xEAn quan.\r
        </p>\r
        <div class="flex justify-end space-x-3">\r
          <button \r
            (click)="closeDeleteModal()"\r
            class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition"\r
          >\r
            H\u1EE7y\r
          </button>\r
          <button \r
            (click)="confirmDelete()"\r
            class="px-4 py-2 text-sm font-semibold text-white bg-red-600 hover:bg-red-700 rounded-xl transition shadow-md"\r
          >\r
            \u0110\u1ED3ng \xFD X\xF3a\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
}\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CourseComponent, { className: "CourseComponent", filePath: "src/app/features/academic/pages/course/course.component.ts", lineNumber: 18 });
})();

// src/app/features/academic/pages/term/term.component.ts
var _forTrack02 = ($index, $item) => $item.id;
function TermComponent_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 30);
    \u0275\u0275listener("click", function TermComponent_button_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 31);
    \u0275\u0275element(2, "path", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Th\xEAm k\u1EF3 h\u1ECDc ");
    \u0275\u0275elementEnd();
  }
}
function TermComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 33);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 34);
    \u0275\u0275element(3, "circle", 35)(4, "path", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " \u0110ang t\u1EA3i danh s\xE1ch k\u1EF3 h\u1ECDc... ");
    \u0275\u0275elementEnd()();
  }
}
function TermComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 33);
    \u0275\u0275text(2, " Kh\xF4ng t\xECm th\u1EA5y k\u1EF3 h\u1ECDc n\xE0o ph\xF9 h\u1EE3p. ");
    \u0275\u0275elementEnd()();
  }
}
function TermComponent_Conditional_33_For_1_Case_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 46);
    \u0275\u0275element(1, "span", 51);
    \u0275\u0275text(2, " \u0110ang di\u1EC5n ra ");
    \u0275\u0275elementEnd();
  }
}
function TermComponent_Conditional_33_For_1_Case_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 47);
    \u0275\u0275element(1, "span", 52);
    \u0275\u0275text(2, " \u0110\xE3 k\u1EBFt th\xFAc ");
    \u0275\u0275elementEnd();
  }
}
function TermComponent_Conditional_33_For_1_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 53);
    \u0275\u0275listener("click", function TermComponent_Conditional_33_For_1_button_19_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const term_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openModal(term_r4));
    });
    \u0275\u0275text(1, " Ch\u1EC9nh s\u1EEDa ");
    \u0275\u0275elementEnd();
  }
}
function TermComponent_Conditional_33_For_1_button_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 54);
    \u0275\u0275listener("click", function TermComponent_Conditional_33_For_1_button_20_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const term_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDelete(term_r4.id));
    });
    \u0275\u0275text(1, " X\xF3a ");
    \u0275\u0275elementEnd();
  }
}
function TermComponent_Conditional_33_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 37)(1, "td", 38);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 39);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 40);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 41)(8, "div", 42)(9, "span", 43);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 44);
    \u0275\u0275text(12, "\u2794");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 43);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "td", 45);
    \u0275\u0275conditionalCreate(16, TermComponent_Conditional_33_For_1_Case_16_Template, 3, 0, "span", 46)(17, TermComponent_Conditional_33_For_1_Case_17_Template, 3, 0, "span", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td", 48);
    \u0275\u0275template(19, TermComponent_Conditional_33_For_1_button_19_Template, 2, 0, "button", 49)(20, TermComponent_Conditional_33_For_1_button_20_Template, 2, 0, "button", 50);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_16_0;
    const term_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", term_r4.code, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", term_r4.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", term_r4.year, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.formatDateVN(term_r4.startDate));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.formatDateVN(term_r4.endDate));
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_16_0 = term_r4.status) === "ACTIVE" ? 16 : 17);
    \u0275\u0275advance(3);
    \u0275\u0275property("hasPermission", "TERM_UPDATE");
    \u0275\u0275advance();
    \u0275\u0275property("hasPermission", "TERM_DELETE");
  }
}
function TermComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, TermComponent_Conditional_33_For_1_Template, 21, 8, "tr", 37, _forTrack02);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r1.terms());
  }
}
function TermComponent_Conditional_57_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 69);
    \u0275\u0275text(1, "M\xE3 k\u1EF3 h\u1ECDc kh\xF4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng");
    \u0275\u0275elementEnd();
  }
}
function TermComponent_Conditional_57_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 69);
    \u0275\u0275text(1, "T\xEAn k\u1EF3 h\u1ECDc kh\xF4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng");
    \u0275\u0275elementEnd();
  }
}
function TermComponent_Conditional_57_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 69);
    \u0275\u0275text(1, "Vui l\xF2ng ch\u1ECDn/nh\u1EADp \u0111\xFAng ng\xE0y b\u1EAFt \u0111\u1EA7u");
    \u0275\u0275elementEnd();
  }
}
function TermComponent_Conditional_57_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 69);
    \u0275\u0275text(1, "Vui l\xF2ng ch\u1ECDn/nh\u1EADp \u0111\xFAng ng\xE0y k\u1EBFt th\xFAc");
    \u0275\u0275elementEnd();
  }
}
function TermComponent_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 55);
    \u0275\u0275listener("click", function TermComponent_Conditional_57_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 56)(3, "div", 57)(4, "div", 58)(5, "h3", 59);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 60);
    \u0275\u0275listener("click", function TermComponent_Conditional_57_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 61);
    \u0275\u0275element(9, "path", 62);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(10, "form", 63);
    \u0275\u0275listener("ngSubmit", function TermComponent_Conditional_57_Template_form_ngSubmit_10_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(11, "div", 64)(12, "div", 65)(13, "label", 66);
    \u0275\u0275text(14, " M\xE3 k\u1EF3 h\u1ECDc ");
    \u0275\u0275elementStart(15, "span", 67);
    \u0275\u0275text(16, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(17, "input", 68);
    \u0275\u0275conditionalCreate(18, TermComponent_Conditional_57_Conditional_18_Template, 2, 0, "p", 69);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div")(20, "label", 66);
    \u0275\u0275text(21, " N\u0103m h\u1ECDc ");
    \u0275\u0275elementStart(22, "span", 67);
    \u0275\u0275text(23, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(24, "input", 70);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div")(26, "label", 66);
    \u0275\u0275text(27, " T\xEAn k\u1EF3 / \u0111\u1EE3t h\u1ECDc ");
    \u0275\u0275elementStart(28, "span", 67);
    \u0275\u0275text(29, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(30, "input", 71);
    \u0275\u0275conditionalCreate(31, TermComponent_Conditional_57_Conditional_31_Template, 2, 0, "p", 69);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 72)(33, "div")(34, "label", 66);
    \u0275\u0275text(35, " Ng\xE0y b\u1EAFt \u0111\u1EA7u ");
    \u0275\u0275elementStart(36, "span", 67);
    \u0275\u0275text(37, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 73);
    \u0275\u0275listener("click", function TermComponent_Conditional_57_Template_div_click_38_listener() {
      \u0275\u0275restoreView(_r6);
      const startDatePicker_r7 = \u0275\u0275reference(44);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openPicker(startDatePicker_r7));
    });
    \u0275\u0275elementStart(39, "input", 74);
    \u0275\u0275listener("input", function TermComponent_Conditional_57_Template_input_input_39_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDateTextInput($event, "startDate"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 75);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(41, "svg", 61);
    \u0275\u0275element(42, "path", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(43, "input", 77, 0);
    \u0275\u0275listener("change", function TermComponent_Conditional_57_Template_input_change_43_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDatePickerChange($event, "startDate"));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(45, TermComponent_Conditional_57_Conditional_45_Template, 2, 0, "p", 69);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div")(47, "label", 66);
    \u0275\u0275text(48, " Ng\xE0y k\u1EBFt th\xFAc ");
    \u0275\u0275elementStart(49, "span", 67);
    \u0275\u0275text(50, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 73);
    \u0275\u0275listener("click", function TermComponent_Conditional_57_Template_div_click_51_listener() {
      \u0275\u0275restoreView(_r6);
      const endDatePicker_r8 = \u0275\u0275reference(57);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openPicker(endDatePicker_r8));
    });
    \u0275\u0275elementStart(52, "input", 74);
    \u0275\u0275listener("input", function TermComponent_Conditional_57_Template_input_input_52_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDateTextInput($event, "endDate"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "div", 75);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(54, "svg", 61);
    \u0275\u0275element(55, "path", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(56, "input", 77, 1);
    \u0275\u0275listener("change", function TermComponent_Conditional_57_Template_input_change_56_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDatePickerChange($event, "endDate"));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(58, TermComponent_Conditional_57_Conditional_58_Template, 2, 0, "p", 69);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "div")(60, "label", 66);
    \u0275\u0275text(61, " Tr\u1EA1ng th\xE1i ");
    \u0275\u0275elementStart(62, "span", 67);
    \u0275\u0275text(63, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "select", 78)(65, "option", 79);
    \u0275\u0275text(66, "\u0110ang di\u1EC5n ra (ACTIVE)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "option", 80);
    \u0275\u0275text(68, "\u0110\xE3 k\u1EBFt th\xFAc (CLOSED)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(69, "div", 81)(70, "button", 82);
    \u0275\u0275listener("click", function TermComponent_Conditional_57_Template_button_click_70_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275text(71, " H\u1EE7y b\u1ECF ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "button", 83);
    \u0275\u0275text(73);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    let tmp_11_0;
    let tmp_12_0;
    let tmp_13_0;
    let tmp_15_0;
    let tmp_16_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isEditing() ? "C\u1EADp nh\u1EADt th\xF4ng tin k\u1EF3 h\u1ECDc" : "Th\xEAm k\u1EF3 h\u1ECDc m\u1EDBi", " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("formGroup", ctx_r1.termForm);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("border-red-400", ctx_r1.isFormSubmitted() && ((tmp_5_0 = ctx_r1.termForm.get("code")) == null ? null : tmp_5_0.invalid));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isFormSubmitted() && ((tmp_6_0 = ctx_r1.termForm.get("code")) == null ? null : tmp_6_0.hasError("required")) ? 18 : -1);
    \u0275\u0275advance(12);
    \u0275\u0275classProp("border-red-400", ctx_r1.isFormSubmitted() && ((tmp_7_0 = ctx_r1.termForm.get("name")) == null ? null : tmp_7_0.invalid));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isFormSubmitted() && ((tmp_8_0 = ctx_r1.termForm.get("name")) == null ? null : tmp_8_0.hasError("required")) ? 31 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275classProp("border-red-400", ctx_r1.isFormSubmitted() && ((tmp_9_0 = ctx_r1.termForm.get("startDate")) == null ? null : tmp_9_0.invalid));
    \u0275\u0275property("value", ctx_r1.startDateDisplay());
    \u0275\u0275advance(4);
    \u0275\u0275property("value", (tmp_11_0 = ctx_r1.termForm.get("startDate")) == null ? null : tmp_11_0.value);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isFormSubmitted() && ((tmp_12_0 = ctx_r1.termForm.get("startDate")) == null ? null : tmp_12_0.invalid) ? 45 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("border-red-400", ctx_r1.isFormSubmitted() && ((tmp_13_0 = ctx_r1.termForm.get("endDate")) == null ? null : tmp_13_0.invalid));
    \u0275\u0275property("value", ctx_r1.endDateDisplay());
    \u0275\u0275advance(4);
    \u0275\u0275property("value", (tmp_15_0 = ctx_r1.termForm.get("endDate")) == null ? null : tmp_15_0.value);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isFormSubmitted() && ((tmp_16_0 = ctx_r1.termForm.get("endDate")) == null ? null : tmp_16_0.invalid) ? 58 : -1);
    \u0275\u0275advance(15);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isEditing() ? "C\u1EADp nh\u1EADt" : "Th\xEAm m\u1EDBi", " ");
  }
}
function TermComponent_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 55);
    \u0275\u0275listener("click", function TermComponent_Conditional_58_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDeleteModal());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 56)(3, "div", 84)(4, "div", 85)(5, "div", 86);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 87);
    \u0275\u0275element(7, "path", 88);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "h3", 89);
    \u0275\u0275text(9, "X\xE1c nh\u1EADn x\xF3a k\u1EF3 h\u1ECDc");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "p", 90);
    \u0275\u0275text(11, " B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a k\u1EF3 h\u1ECDc n\xE0y kh\xF4ng? H\xE0nh \u0111\u1ED9ng n\xE0y kh\xF4ng th\u1EC3 ho\xE0n t\xE1c v\xE0 c\xF3 th\u1EC3 \u1EA3nh h\u01B0\u1EDFng \u0111\u1EBFn l\u1ECBch h\u1ECDc v\xE0 c\xE1c l\u1EDBp h\u1ECDc thu\u1ED9c k\u1EF3 n\xE0y. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 91)(13, "button", 92);
    \u0275\u0275listener("click", function TermComponent_Conditional_58_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDeleteModal());
    });
    \u0275\u0275text(14, " H\u1EE7y ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 93);
    \u0275\u0275listener("click", function TermComponent_Conditional_58_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmDelete());
    });
    \u0275\u0275text(16, " \u0110\u1ED3ng \xFD X\xF3a ");
    \u0275\u0275elementEnd()()()()();
  }
}
var TermComponent = class _TermComponent {
  termService = inject(TermService);
  fb = inject(FormBuilder);
  destroyRef = inject(DestroyRef);
  toastService = inject(ToastService);
  // --- STATE DANH SÁCH KỲ HỌC ---
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
  // --- STATE MODAL THÊM / SỬA ---
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
  isFormSubmitted = signal(false, ...ngDevMode ? [{ debugName: "isFormSubmitted" }] : (
    /* istanbul ignore next */
    []
  ));
  // --- STATE MODAL XÓA ---
  isDeleteModalOpen = signal(false, ...ngDevMode ? [{ debugName: "isDeleteModalOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  idToDelete = signal(null, ...ngDevMode ? [{ debugName: "idToDelete" }] : (
    /* istanbul ignore next */
    []
  ));
  // Computed signals
  totalPages = computed(() => Math.max(1, Math.ceil(this.totalElements() / this.pageSize())), ...ngDevMode ? [{ debugName: "totalPages" }] : (
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
    const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    this.termForm = this.fb.group({
      code: ["", [Validators.required, Validators.maxLength(50)]],
      name: ["", [Validators.required, Validators.maxLength(255)]],
      year: [currentYear, [Validators.required, Validators.min(2e3)]],
      startDate: ["", [Validators.required]],
      endDate: ["", [Validators.required]],
      status: ["ACTIVE", [Validators.required]]
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
    this.termService.getTerms({
      page: this.currentPage(),
      size: this.pageSize(),
      keyword: this.searchControl.value || ""
    }).subscribe({
      next: (response) => {
        this.terms.set(response.content || []);
        this.totalElements.set(response.totalElements || 0);
        this.isLoading.set(false);
      },
      error: (err) => {
        this.toastService.error("L\u1ED7i", "L\u1ED7i khi t\u1EA3i danh s\xE1ch k\u1EF3 h\u1ECDc: " + (err.error?.message || err.message));
        this.isLoading.set(false);
      }
    });
  }
  changePage(page) {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage.set(page);
      this.loadData();
    }
  }
  // Signals lưu chuỗi hiển thị theo định dạng dd/mm/yyyy trong ô input
  startDateDisplay = signal("", ...ngDevMode ? [{ debugName: "startDateDisplay" }] : (
    /* istanbul ignore next */
    []
  ));
  endDateDisplay = signal("", ...ngDevMode ? [{ debugName: "endDateDisplay" }] : (
    /* istanbul ignore next */
    []
  ));
  openModal(term) {
    this.isFormSubmitted.set(false);
    if (term && term.id) {
      this.isEditing.set(true);
      this.currentId.set(term.id);
      const startIso = term.startDate ? term.startDate.split("T")[0] : "";
      const endIso = term.endDate ? term.endDate.split("T")[0] : "";
      this.startDateDisplay.set(this.formatDateVN(startIso));
      this.endDateDisplay.set(this.formatDateVN(endIso));
      this.termForm.patchValue({
        code: term.code,
        name: term.name,
        year: term.year || (/* @__PURE__ */ new Date()).getFullYear(),
        startDate: startIso,
        endDate: endIso,
        status: term.status || "ACTIVE"
      });
    } else {
      if (this.isEditing() || !this.termForm.get("code")?.value) {
        this.isEditing.set(false);
        this.currentId.set(null);
        this.resetAddForm();
      } else {
        this.isEditing.set(false);
        this.currentId.set(null);
      }
    }
    this.isModalOpen.set(true);
  }
  resetAddForm() {
    this.startDateDisplay.set("");
    this.endDateDisplay.set("");
    const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    this.termForm.reset({
      code: "",
      name: "",
      year: currentYear,
      startDate: "",
      endDate: "",
      status: "ACTIVE"
    });
  }
  onDateTextInput(event, field) {
    const input = event.target;
    let value = input.value.replace(/\D/g, "");
    if (value.length > 8)
      value = value.substring(0, 8);
    let formatted = "";
    if (value.length > 0) {
      formatted = value.substring(0, 2);
      if (value.length >= 3) {
        formatted += "/" + value.substring(2, 4);
      }
      if (value.length >= 5) {
        formatted += "/" + value.substring(4, 8);
      }
    }
    input.value = formatted;
    if (field === "startDate") {
      this.startDateDisplay.set(formatted);
    } else {
      this.endDateDisplay.set(formatted);
    }
    if (formatted.length === 10) {
      const parts = formatted.split("/");
      const day = parts[0];
      const month = parts[1];
      const year = parts[2];
      const isoDate = `${year}-${month}-${day}`;
      this.termForm.get(field)?.setValue(isoDate);
    } else {
      this.termForm.get(field)?.setValue("");
    }
  }
  openPicker(pickerInput) {
    try {
      if (pickerInput && typeof pickerInput.showPicker === "function") {
        pickerInput.showPicker();
      } else if (pickerInput && typeof pickerInput.click === "function") {
        pickerInput.click();
      }
    } catch (e) {
      if (pickerInput && typeof pickerInput.click === "function") {
        pickerInput.click();
      }
    }
  }
  onDatePickerChange(event, field) {
    const input = event.target;
    const isoDate = input.value;
    if (isoDate) {
      this.termForm.get(field)?.setValue(isoDate);
      const formatted = this.formatDateVN(isoDate);
      if (field === "startDate") {
        this.startDateDisplay.set(formatted);
      } else {
        this.endDateDisplay.set(formatted);
      }
    }
  }
  closeModal() {
    this.isModalOpen.set(false);
  }
  onSubmit() {
    this.isFormSubmitted.set(true);
    if (this.termForm.invalid) {
      this.toastService.error("Th\xF4ng b\xE1o", "Vui l\xF2ng ki\u1EC3m tra l\u1EA1i c\xE1c tr\u01B0\u1EDDng d\u1EEF li\u1EC7u b\u1EAFt bu\u1ED9c");
      return;
    }
    const formValues = this.termForm.value;
    if (formValues.startDate && formValues.endDate && formValues.startDate > formValues.endDate) {
      this.toastService.error("L\u1ED7i ng\xE0y th\xE1ng", "Ng\xE0y k\u1EBFt th\xFAc ph\u1EA3i sau ho\u1EB7c b\u1EB1ng ng\xE0y b\u1EAFt \u0111\u1EA7u");
      return;
    }
    const termData = {
      code: formValues.code,
      name: formValues.name,
      year: Number(formValues.year),
      startDate: formValues.startDate,
      endDate: formValues.endDate,
      status: formValues.status
    };
    if (this.isEditing() && this.currentId()) {
      this.termService.update(this.currentId(), termData).subscribe({
        next: (res) => {
          this.toastService.success("Th\xE0nh c\xF4ng", res.message || "C\u1EADp nh\u1EADt k\u1EF3 h\u1ECDc th\xE0nh c\xF4ng!");
          this.closeModal();
          this.loadData();
        },
        error: (err) => {
          this.toastService.error("L\u1ED7i", "C\u1EADp nh\u1EADt th\u1EA5t b\u1EA1i: " + (err.error?.message || err.message));
        }
      });
    } else {
      this.termService.create(termData).subscribe({
        next: (res) => {
          this.toastService.success("Th\xE0nh c\xF4ng", res.message || "T\u1EA1o m\u1EDBi k\u1EF3 h\u1ECDc th\xE0nh c\xF4ng!");
          this.resetAddForm();
          this.closeModal();
          this.loadData();
        },
        error: (err) => {
          this.toastService.error("L\u1ED7i", "T\u1EA1o m\u1EDBi th\u1EA5t b\u1EA1i: " + (err.error?.message || err.message));
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
  confirmDelete() {
    const id = this.idToDelete();
    if (!id)
      return;
    this.termService.delete(id).subscribe({
      next: (res) => {
        this.toastService.success("Th\xE0nh c\xF4ng", res.message || "X\xF3a k\u1EF3 h\u1ECDc th\xE0nh c\xF4ng!");
        this.isDeleteModalOpen.set(false);
        this.idToDelete.set(null);
        this.loadData();
      },
      error: (err) => {
        this.toastService.error("L\u1ED7i", "X\xF3a th\u1EA5t b\u1EA1i: " + (err.error?.message || err.message));
      }
    });
  }
  closeDeleteModal() {
    this.isDeleteModalOpen.set(false);
    this.idToDelete.set(null);
  }
  formatDateVN(dateStr) {
    if (!dateStr)
      return "";
    const parts = dateStr.split("T")[0].split("-");
    if (parts.length === 3) {
      return `${parts[2]}/${parts[1]}/${parts[0]}`;
    }
    return dateStr;
  }
  static \u0275fac = function TermComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TermComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TermComponent, selectors: [["app-term"]], decls: 59, vars: 12, consts: [["startDatePicker", ""], ["endDatePicker", ""], [1, "space-y-6"], [1, "flex", "flex-col", "md:flex-row", "md:items-end", "justify-between", "gap-4", "pb-4", "border-b", "border-gray-100"], [1, "text-2xl", "font-extrabold", "text-gray-900", "tracking-tight"], [1, "text-sm", "text-gray-500", "mt-1"], [1, "flex", "space-x-3"], [1, "relative"], [1, "absolute", "inset-y-0", "left-0", "flex", "items-center", "pl-3", "pointer-events-none"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-gray-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], ["type", "text", "placeholder", "T\xECm m\xE3 ho\u1EB7c t\xEAn k\u1EF3 h\u1ECDc...", 1, "bg-white", "border", "border-gray-200", "text-gray-900", "text-sm", "rounded-xl", "focus:ring-2", "focus:ring-blue-100", "focus:border-blue-500", "block", "w-64", "pl-10", "p-2.5", "outline-none", "transition", "shadow-sm", 3, "formControl"], ["class", "bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-5 rounded-xl flex items-center transition shadow-md hover:shadow-lg text-sm", 3, "click", 4, "hasPermission"], [1, "bg-white", "rounded-2xl", "shadow-sm", "border", "border-gray-100", "overflow-hidden"], [1, "w-full", "text-sm", "text-left", "text-gray-500"], [1, "text-xs", "text-gray-500", "uppercase", "bg-gray-50/80", "border-b", "border-gray-100", "font-semibold"], ["scope", "col", 1, "px-6", "py-4"], ["scope", "col", 1, "px-6", "py-4", "text-right"], [1, "divide-y", "divide-gray-50"], [1, "flex", "flex-col", "sm:flex-row", "items-center", "justify-between", "px-6", "py-4", "bg-gray-50/80", "border-t", "border-gray-100", "rounded-b-2xl", "gap-3"], [1, "text-sm", "text-gray-500"], [1, "font-semibold", "text-gray-900"], [1, "flex", "space-x-2"], [1, "px-3.5", "py-1.5", "text-sm", "font-medium", "text-gray-700", "bg-white", "border", "border-gray-300", "rounded-lg", "hover:bg-gray-50", "disabled:opacity-50", "disabled:cursor-not-allowed", "transition", "shadow-sm", "flex", "items-center", 3, "click", "disabled"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "mr-1"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 19l-7-7 7-7"], [1, "px-3.5", "py-1.5", "text-sm", "font-semibold", "text-gray-800", "bg-gray-100", "rounded-lg", "flex", "items-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "ml-1"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 5l7 7-7 7"], [1, "fixed", "inset-0", "z-50", "overflow-y-auto"], [1, "bg-blue-600", "hover:bg-blue-700", "text-white", "font-semibold", "py-2.5", "px-5", "rounded-xl", "flex", "items-center", "transition", "shadow-md", "hover:shadow-lg", "text-sm", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "mr-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 4v16m8-8H4"], ["colspan", "6", 1, "px-6", "py-12", "text-center", "text-gray-500"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "mx-auto", "h-8", "w-8", "text-blue-500", "mb-3"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"], [1, "bg-white", "hover:bg-blue-50/50", "transition", "duration-200"], [1, "px-6", "py-4", "font-mono", "font-bold", "text-blue-600"], [1, "px-6", "py-4", "font-bold", "text-gray-900"], [1, "px-6", "py-4", "font-semibold", "text-gray-700"], [1, "px-6", "py-4", "text-xs", "font-medium", "text-gray-600"], [1, "flex", "items-center", "space-x-1.5"], [1, "px-2", "py-0.5", "bg-gray-100", "text-gray-700", "rounded", "font-mono"], [1, "text-gray-400"], [1, "px-6", "py-4"], [1, "px-3", "py-1", "text-xs", "font-semibold", "rounded-full", "border", "bg-emerald-50", "text-emerald-700", "border-emerald-200", "inline-flex", "items-center"], [1, "px-3", "py-1", "text-xs", "font-semibold", "rounded-full", "border", "bg-gray-50", "text-gray-600", "border-gray-200", "inline-flex", "items-center"], [1, "px-6", "py-4", "text-right", "space-x-3"], ["class", "font-medium text-blue-600 hover:text-blue-800 transition text-sm", 3, "click", 4, "hasPermission"], ["class", "font-medium text-red-600 hover:text-red-800 transition text-sm", 3, "click", 4, "hasPermission"], [1, "w-1.5", "h-1.5", "rounded-full", "mr-1.5", "bg-emerald-500"], [1, "w-1.5", "h-1.5", "rounded-full", "mr-1.5", "bg-gray-400"], [1, "font-medium", "text-blue-600", "hover:text-blue-800", "transition", "text-sm", 3, "click"], [1, "font-medium", "text-red-600", "hover:text-red-800", "transition", "text-sm", 3, "click"], [1, "fixed", "inset-0", "bg-gray-900/50", "backdrop-blur-sm", "transition-opacity", 3, "click"], [1, "flex", "min-h-full", "items-center", "justify-center", "p-4"], [1, "relative", "w-full", "max-w-lg", "rounded-2xl", "bg-white", "p-6", "shadow-2xl", "transition-all", "border", "border-gray-100"], [1, "flex", "items-center", "justify-between", "pb-4", "border-b", "border-gray-100"], [1, "text-xl", "font-bold", "text-gray-900"], [1, "text-gray-400", "hover:text-gray-600", "transition", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "mt-4", "space-y-4", 3, "ngSubmit", "formGroup"], [1, "grid", "grid-cols-1", "sm:grid-cols-3", "gap-4"], [1, "sm:col-span-2"], [1, "block", "text-xs", "font-semibold", "text-gray-700", "uppercase", "tracking-wider", "mb-1"], [1, "text-red-500"], ["type", "text", "formControlName", "code", "placeholder", "VD: TERM-2026-K1", 1, "w-full", "px-3.5", "py-2.5", "border", "border-gray-200", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-100", "focus:border-blue-500", "outline-none", "transition", "font-mono", "font-semibold"], [1, "mt-1", "text-xs", "text-red-500"], ["type", "number", "formControlName", "year", "placeholder", "2026", 1, "w-full", "px-3.5", "py-2.5", "border", "border-gray-200", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-100", "focus:border-blue-500", "outline-none", "transition", "font-semibold"], ["type", "text", "formControlName", "name", "placeholder", "VD: H\u1ECDc k\u1EF3 1 - N\u0103m 2026", 1, "w-full", "px-3.5", "py-2.5", "border", "border-gray-200", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-100", "focus:border-blue-500", "outline-none", "transition"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "gap-4"], [1, "relative", "flex", "items-center", "cursor-pointer", 3, "click"], ["type", "text", "placeholder", "Ch\u1ECDn ng\xE0y (dd/MM/yyyy)", "maxlength", "10", 1, "w-full", "px-3.5", "py-2.5", "pr-10", "border", "border-gray-200", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-100", "focus:border-blue-500", "outline-none", "transition", "font-semibold", "text-gray-900", "bg-white", "cursor-pointer", 3, "input", "value"], [1, "absolute", "right-2.5", "flex", "items-center", "text-gray-400", "hover:text-blue-600", "transition", "p-1"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"], ["type", "date", 1, "sr-only", "opacity-0", "w-0", "h-0", "absolute", "pointer-events-none", 3, "change", "value"], ["formControlName", "status", 1, "w-full", "px-3.5", "py-2.5", "border", "border-gray-200", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-100", "focus:border-blue-500", "outline-none", "transition", "bg-white", "font-medium"], ["value", "ACTIVE"], ["value", "CLOSED"], [1, "flex", "justify-end", "space-x-3", "pt-4", "border-t", "border-gray-100"], ["type", "button", 1, "px-4", "py-2.5", "text-sm", "font-medium", "text-gray-700", "bg-white", "border", "border-gray-300", "rounded-xl", "hover:bg-gray-50", "transition", 3, "click"], ["type", "submit", 1, "px-5", "py-2.5", "text-sm", "font-semibold", "text-white", "bg-blue-600", "hover:bg-blue-700", "rounded-xl", "transition", "shadow-md"], [1, "relative", "w-full", "max-w-md", "rounded-2xl", "bg-white", "p-6", "shadow-2xl", "transition-all", "border", "border-gray-100"], [1, "flex", "items-center", "space-x-3", "text-red-600", "mb-4"], [1, "p-3", "bg-red-50", "rounded-full"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"], [1, "text-lg", "font-bold", "text-gray-900"], [1, "text-sm", "text-gray-600", "mb-6"], [1, "flex", "justify-end", "space-x-3"], [1, "px-4", "py-2", "text-sm", "font-medium", "text-gray-700", "bg-white", "border", "border-gray-300", "rounded-xl", "hover:bg-gray-50", "transition", 3, "click"], [1, "px-4", "py-2", "text-sm", "font-semibold", "text-white", "bg-red-600", "hover:bg-red-700", "rounded-xl", "transition", "shadow-md", 3, "click"]], template: function TermComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div")(3, "h1", 4);
      \u0275\u0275text(4, "Qu\u1EA3n l\xFD K\u1EF3 / \u0110\u1EE3t h\u1ECDc");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 5);
      \u0275\u0275text(6, "Qu\u1EA3n l\xFD danh s\xE1ch h\u1ECDc k\u1EF3, \u0111\u1EE3t tuy\u1EC3n sinh v\xE0 kho\u1EA3ng th\u1EDDi gian \u0111\xE0o t\u1EA1o");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 6)(8, "div", 7)(9, "div", 8);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(10, "svg", 9);
      \u0275\u0275element(11, "path", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275element(12, "input", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275template(13, TermComponent_button_13_Template, 4, 0, "button", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 13)(15, "table", 14)(16, "thead", 15)(17, "tr")(18, "th", 16);
      \u0275\u0275text(19, "M\xE3 k\u1EF3 h\u1ECDc");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "th", 16);
      \u0275\u0275text(21, "T\xEAn k\u1EF3 h\u1ECDc");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "th", 16);
      \u0275\u0275text(23, "N\u0103m h\u1ECDc");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "th", 16);
      \u0275\u0275text(25, "Kho\u1EA3ng th\u1EDDi gian");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "th", 16);
      \u0275\u0275text(27, "Tr\u1EA1ng th\xE1i");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "th", 17);
      \u0275\u0275text(29, "Thao t\xE1c");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(30, "tbody", 18);
      \u0275\u0275conditionalCreate(31, TermComponent_Conditional_31_Template, 6, 0, "tr")(32, TermComponent_Conditional_32_Template, 3, 0, "tr")(33, TermComponent_Conditional_33_Template, 2, 0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "div", 19)(35, "div", 20);
      \u0275\u0275text(36, " Hi\u1EC3n th\u1ECB ");
      \u0275\u0275elementStart(37, "span", 21);
      \u0275\u0275text(38);
      \u0275\u0275elementEnd();
      \u0275\u0275text(39, " - ");
      \u0275\u0275elementStart(40, "span", 21);
      \u0275\u0275text(41);
      \u0275\u0275elementEnd();
      \u0275\u0275text(42, " trong t\u1ED5ng s\u1ED1 ");
      \u0275\u0275elementStart(43, "span", 21);
      \u0275\u0275text(44);
      \u0275\u0275elementEnd();
      \u0275\u0275text(45, " k\u1EBFt qu\u1EA3 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "div", 22)(47, "button", 23);
      \u0275\u0275listener("click", function TermComponent_Template_button_click_47_listener() {
        return ctx.changePage(ctx.currentPage() - 1);
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(48, "svg", 24);
      \u0275\u0275element(49, "path", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275text(50, " Tr\u01B0\u1EDBc ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(51, "span", 26);
      \u0275\u0275text(52);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "button", 23);
      \u0275\u0275listener("click", function TermComponent_Template_button_click_53_listener() {
        return ctx.changePage(ctx.currentPage() + 1);
      });
      \u0275\u0275text(54, " Sau ");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(55, "svg", 27);
      \u0275\u0275element(56, "path", 28);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275conditionalCreate(57, TermComponent_Conditional_57_Template, 74, 19, "div", 29);
      \u0275\u0275conditionalCreate(58, TermComponent_Conditional_58_Template, 17, 0, "div", 29);
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275property("formControl", ctx.searchControl);
      \u0275\u0275advance();
      \u0275\u0275property("hasPermission", "TERM_CREATE");
      \u0275\u0275advance(18);
      \u0275\u0275conditional(ctx.isLoading() && ctx.terms().length === 0 ? 31 : ctx.terms().length === 0 ? 32 : 33);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.startIndex());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.endIndex());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.totalElements());
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", ctx.currentPage() === 1);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate2(" ", ctx.currentPage(), " / ", ctx.totalPages(), " ");
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.currentPage() >= ctx.totalPages());
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.isModalOpen() ? 57 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isDeleteModalOpen() ? 58 : -1);
    }
  }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormControlDirective, FormGroupDirective, FormControlName, HasPermissionDirective], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TermComponent, [{
    type: Component,
    args: [{ selector: "app-term", imports: [CommonModule, ReactiveFormsModule, HasPermissionDirective], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="space-y-6">\r
  <!-- PAGE HEADER -->\r
  <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-gray-100">\r
    <div>\r
      <h1 class="text-2xl font-extrabold text-gray-900 tracking-tight">Qu\u1EA3n l\xFD K\u1EF3 / \u0110\u1EE3t h\u1ECDc</h1>\r
      <p class="text-sm text-gray-500 mt-1">Qu\u1EA3n l\xFD danh s\xE1ch h\u1ECDc k\u1EF3, \u0111\u1EE3t tuy\u1EC3n sinh v\xE0 kho\u1EA3ng th\u1EDDi gian \u0111\xE0o t\u1EA1o</p>\r
    </div>\r
    <div class="flex space-x-3">\r
      <!-- Search Input -->\r
      <div class="relative">\r
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">\r
          <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>\r
          </svg>\r
        </div>\r
        <input \r
          type="text" \r
          [formControl]="searchControl" \r
          placeholder="T\xECm m\xE3 ho\u1EB7c t\xEAn k\u1EF3 h\u1ECDc..." \r
          class="bg-white border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-500 block w-64 pl-10 p-2.5 outline-none transition shadow-sm"\r
        >\r
      </div>\r
\r
      <!-- Add Button -->\r
      <button \r
        *hasPermission="'TERM_CREATE'"\r
        (click)="openModal()" \r
        class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-5 rounded-xl flex items-center transition shadow-md hover:shadow-lg text-sm"\r
      >\r
        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>\r
        </svg>\r
        Th\xEAm k\u1EF3 h\u1ECDc\r
      </button>\r
    </div>\r
  </div>\r
\r
  <!-- DATA TABLE -->\r
  <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">\r
    <table class="w-full text-sm text-left text-gray-500">\r
      <thead class="text-xs text-gray-500 uppercase bg-gray-50/80 border-b border-gray-100 font-semibold">\r
        <tr>\r
          <th scope="col" class="px-6 py-4">M\xE3 k\u1EF3 h\u1ECDc</th>\r
          <th scope="col" class="px-6 py-4">T\xEAn k\u1EF3 h\u1ECDc</th>\r
          <th scope="col" class="px-6 py-4">N\u0103m h\u1ECDc</th>\r
          <th scope="col" class="px-6 py-4">Kho\u1EA3ng th\u1EDDi gian</th>\r
          <th scope="col" class="px-6 py-4">Tr\u1EA1ng th\xE1i</th>\r
          <th scope="col" class="px-6 py-4 text-right">Thao t\xE1c</th>\r
        </tr>\r
      </thead>\r
      <tbody class="divide-y divide-gray-50">\r
        @if (isLoading() && terms().length === 0) {\r
          <tr>\r
            <td colspan="6" class="px-6 py-12 text-center text-gray-500">\r
              <svg class="animate-spin mx-auto h-8 w-8 text-blue-500 mb-3" fill="none" viewBox="0 0 24 24">\r
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>\r
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>\r
              </svg>\r
              \u0110ang t\u1EA3i danh s\xE1ch k\u1EF3 h\u1ECDc...\r
            </td>\r
          </tr>\r
        } @else if (terms().length === 0) {\r
          <tr>\r
            <td colspan="6" class="px-6 py-12 text-center text-gray-500">\r
              Kh\xF4ng t\xECm th\u1EA5y k\u1EF3 h\u1ECDc n\xE0o ph\xF9 h\u1EE3p.\r
            </td>\r
          </tr>\r
        } @else {\r
          @for (term of terms(); track term.id) {\r
            <tr class="bg-white hover:bg-blue-50/50 transition duration-200">\r
              <!-- Code -->\r
              <td class="px-6 py-4 font-mono font-bold text-blue-600">\r
                {{ term.code }}\r
              </td>\r
              <!-- Name -->\r
              <td class="px-6 py-4 font-bold text-gray-900">\r
                {{ term.name }}\r
              </td>\r
              <!-- Year -->\r
              <td class="px-6 py-4 font-semibold text-gray-700">\r
                {{ term.year }}\r
              </td>\r
              <!-- Date Range -->\r
              <td class="px-6 py-4 text-xs font-medium text-gray-600">\r
                <div class="flex items-center space-x-1.5">\r
                  <span class="px-2 py-0.5 bg-gray-100 text-gray-700 rounded font-mono">{{ formatDateVN(term.startDate) }}</span>\r
                  <span class="text-gray-400">\u2794</span>\r
                  <span class="px-2 py-0.5 bg-gray-100 text-gray-700 rounded font-mono">{{ formatDateVN(term.endDate) }}</span>\r
                </div>\r
              </td>\r
              <!-- Status Badge -->\r
              <td class="px-6 py-4">\r
                @switch (term.status) {\r
                  @case ('ACTIVE') {\r
                    <span class="px-3 py-1 text-xs font-semibold rounded-full border bg-emerald-50 text-emerald-700 border-emerald-200 inline-flex items-center">\r
                      <span class="w-1.5 h-1.5 rounded-full mr-1.5 bg-emerald-500"></span>\r
                      \u0110ang di\u1EC5n ra\r
                    </span>\r
                  }\r
                  @default {\r
                    <span class="px-3 py-1 text-xs font-semibold rounded-full border bg-gray-50 text-gray-600 border-gray-200 inline-flex items-center">\r
                      <span class="w-1.5 h-1.5 rounded-full mr-1.5 bg-gray-400"></span>\r
                      \u0110\xE3 k\u1EBFt th\xFAc\r
                    </span>\r
                  }\r
                }\r
              </td>\r
              <!-- Actions -->\r
              <td class="px-6 py-4 text-right space-x-3">\r
                <button \r
                  *hasPermission="'TERM_UPDATE'"\r
                  (click)="openModal(term)" \r
                  class="font-medium text-blue-600 hover:text-blue-800 transition text-sm"\r
                >\r
                  Ch\u1EC9nh s\u1EEDa\r
                </button>\r
                <button \r
                  *hasPermission="'TERM_DELETE'"\r
                  (click)="onDelete(term.id!)" \r
                  class="font-medium text-red-600 hover:text-red-800 transition text-sm"\r
                >\r
                  X\xF3a\r
                </button>\r
              </td>\r
            </tr>\r
          }\r
        }\r
      </tbody>\r
    </table>\r
\r
    <!-- PAGINATION FOOTER -->\r
    <div class="flex flex-col sm:flex-row items-center justify-between px-6 py-4 bg-gray-50/80 border-t border-gray-100 rounded-b-2xl gap-3">\r
      <div class="text-sm text-gray-500">\r
        Hi\u1EC3n th\u1ECB <span class="font-semibold text-gray-900">{{ startIndex() }}</span> \r
        - <span class="font-semibold text-gray-900">{{ endIndex() }}</span> \r
        trong t\u1ED5ng s\u1ED1 <span class="font-semibold text-gray-900">{{ totalElements() }}</span> k\u1EBFt qu\u1EA3\r
      </div>\r
      \r
      <div class="flex space-x-2">\r
        <button \r
          (click)="changePage(currentPage() - 1)" \r
          [disabled]="currentPage() === 1"\r
          class="px-3.5 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition shadow-sm flex items-center"\r
        >\r
          <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>\r
          </svg>\r
          Tr\u01B0\u1EDBc\r
        </button>\r
\r
        <span class="px-3.5 py-1.5 text-sm font-semibold text-gray-800 bg-gray-100 rounded-lg flex items-center">\r
          {{ currentPage() }} / {{ totalPages() }}\r
        </span>\r
\r
        <button \r
          (click)="changePage(currentPage() + 1)" \r
          [disabled]="currentPage() >= totalPages()"\r
          class="px-3.5 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition shadow-sm flex items-center"\r
        >\r
          Sau\r
          <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>\r
          </svg>\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- MODAL TH\xCAM / C\u1EACP NH\u1EACT K\u1EF2 H\u1ECCC -->\r
@if (isModalOpen()) {\r
  <div class="fixed inset-0 z-50 overflow-y-auto">\r
    <div class="fixed inset-0 bg-gray-900/50 backdrop-blur-sm transition-opacity" (click)="closeModal()"></div>\r
\r
    <div class="flex min-h-full items-center justify-center p-4">\r
      <div class="relative w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl transition-all border border-gray-100">\r
        \r
        <!-- Modal Header -->\r
        <div class="flex items-center justify-between pb-4 border-b border-gray-100">\r
          <h3 class="text-xl font-bold text-gray-900">\r
            {{ isEditing() ? 'C\u1EADp nh\u1EADt th\xF4ng tin k\u1EF3 h\u1ECDc' : 'Th\xEAm k\u1EF3 h\u1ECDc m\u1EDBi' }}\r
          </h3>\r
          <button (click)="closeModal()" class="text-gray-400 hover:text-gray-600 transition">\r
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>\r
            </svg>\r
          </button>\r
        </div>\r
\r
        <!-- Modal Form -->\r
        <form [formGroup]="termForm" (ngSubmit)="onSubmit()" class="mt-4 space-y-4">\r
          \r
          <!-- Code & Year Grid -->\r
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">\r
            <div class="sm:col-span-2">\r
              <label class="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">\r
                M\xE3 k\u1EF3 h\u1ECDc <span class="text-red-500">*</span>\r
              </label>\r
              <input \r
                type="text" \r
                formControlName="code"\r
                placeholder="VD: TERM-2026-K1"\r
                class="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition font-mono font-semibold"\r
                [class.border-red-400]="isFormSubmitted() && termForm.get('code')?.invalid"\r
              >\r
              @if (isFormSubmitted() && termForm.get('code')?.hasError('required')) {\r
                <p class="mt-1 text-xs text-red-500">M\xE3 k\u1EF3 h\u1ECDc kh\xF4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng</p>\r
              }\r
            </div>\r
\r
            <div>\r
              <label class="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">\r
                N\u0103m h\u1ECDc <span class="text-red-500">*</span>\r
              </label>\r
              <input \r
                type="number" \r
                formControlName="year"\r
                placeholder="2026"\r
                class="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition font-semibold"\r
              >\r
            </div>\r
          </div>\r
\r
          <!-- Name -->\r
          <div>\r
            <label class="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">\r
              T\xEAn k\u1EF3 / \u0111\u1EE3t h\u1ECDc <span class="text-red-500">*</span>\r
            </label>\r
            <input \r
              type="text" \r
              formControlName="name"\r
              placeholder="VD: H\u1ECDc k\u1EF3 1 - N\u0103m 2026"\r
              class="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition"\r
              [class.border-red-400]="isFormSubmitted() && termForm.get('name')?.invalid"\r
            >\r
            @if (isFormSubmitted() && termForm.get('name')?.hasError('required')) {\r
              <p class="mt-1 text-xs text-red-500">T\xEAn k\u1EF3 h\u1ECDc kh\xF4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng</p>\r
            }\r
          </div>\r
\r
          <!-- Date Range Grid -->\r
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">\r
            <!-- Start Date -->\r
            <div>\r
              <label class="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">\r
                Ng\xE0y b\u1EAFt \u0111\u1EA7u <span class="text-red-500">*</span>\r
              </label>\r
              <div class="relative flex items-center cursor-pointer" (click)="openPicker(startDatePicker)">\r
                <input \r
                  type="text" \r
                  [value]="startDateDisplay()"\r
                  (input)="onDateTextInput($event, 'startDate')"\r
                  placeholder="Ch\u1ECDn ng\xE0y (dd/MM/yyyy)"\r
                  maxlength="10"\r
                  class="w-full px-3.5 py-2.5 pr-10 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition font-semibold text-gray-900 bg-white cursor-pointer"\r
                  [class.border-red-400]="isFormSubmitted() && termForm.get('startDate')?.invalid"\r
                >\r
                <div class="absolute right-2.5 flex items-center text-gray-400 hover:text-blue-600 transition p-1">\r
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>\r
                  </svg>\r
                  <input \r
                    #startDatePicker\r
                    type="date" \r
                    [value]="termForm.get('startDate')?.value"\r
                    (change)="onDatePickerChange($event, 'startDate')"\r
                    class="sr-only opacity-0 w-0 h-0 absolute pointer-events-none"\r
                  >\r
                </div>\r
              </div>\r
              @if (isFormSubmitted() && termForm.get('startDate')?.invalid) {\r
                <p class="mt-1 text-xs text-red-500">Vui l\xF2ng ch\u1ECDn/nh\u1EADp \u0111\xFAng ng\xE0y b\u1EAFt \u0111\u1EA7u</p>\r
              }\r
            </div>\r
\r
            <!-- End Date -->\r
            <div>\r
              <label class="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">\r
                Ng\xE0y k\u1EBFt th\xFAc <span class="text-red-500">*</span>\r
              </label>\r
              <div class="relative flex items-center cursor-pointer" (click)="openPicker(endDatePicker)">\r
                <input \r
                  type="text" \r
                  [value]="endDateDisplay()"\r
                  (input)="onDateTextInput($event, 'endDate')"\r
                  placeholder="Ch\u1ECDn ng\xE0y (dd/MM/yyyy)"\r
                  maxlength="10"\r
                  class="w-full px-3.5 py-2.5 pr-10 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition font-semibold text-gray-900 bg-white cursor-pointer"\r
                  [class.border-red-400]="isFormSubmitted() && termForm.get('endDate')?.invalid"\r
                >\r
                <div class="absolute right-2.5 flex items-center text-gray-400 hover:text-blue-600 transition p-1">\r
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>\r
                  </svg>\r
                  <input \r
                    #endDatePicker\r
                    type="date" \r
                    [value]="termForm.get('endDate')?.value"\r
                    (change)="onDatePickerChange($event, 'endDate')"\r
                    class="sr-only opacity-0 w-0 h-0 absolute pointer-events-none"\r
                  >\r
                </div>\r
              </div>\r
              @if (isFormSubmitted() && termForm.get('endDate')?.invalid) {\r
                <p class="mt-1 text-xs text-red-500">Vui l\xF2ng ch\u1ECDn/nh\u1EADp \u0111\xFAng ng\xE0y k\u1EBFt th\xFAc</p>\r
              }\r
            </div>\r
          </div>\r
\r
          <!-- Status Select -->\r
          <div>\r
            <label class="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">\r
              Tr\u1EA1ng th\xE1i <span class="text-red-500">*</span>\r
            </label>\r
            <select \r
              formControlName="status"\r
              class="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition bg-white font-medium"\r
            >\r
              <option value="ACTIVE">\u0110ang di\u1EC5n ra (ACTIVE)</option>\r
              <option value="CLOSED">\u0110\xE3 k\u1EBFt th\xFAc (CLOSED)</option>\r
            </select>\r
          </div>\r
\r
          <!-- Modal Footer Actions -->\r
          <div class="flex justify-end space-x-3 pt-4 border-t border-gray-100">\r
            <button \r
              type="button" \r
              (click)="closeModal()"\r
              class="px-4 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition"\r
            >\r
              H\u1EE7y b\u1ECF\r
            </button>\r
            <button \r
              type="submit"\r
              class="px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition shadow-md"\r
            >\r
              {{ isEditing() ? 'C\u1EADp nh\u1EADt' : 'Th\xEAm m\u1EDBi' }}\r
            </button>\r
          </div>\r
        </form>\r
      </div>\r
    </div>\r
  </div>\r
}\r
\r
<!-- MODAL X\xC1C NH\u1EACN X\xD3A -->\r
@if (isDeleteModalOpen()) {\r
  <div class="fixed inset-0 z-50 overflow-y-auto">\r
    <div class="fixed inset-0 bg-gray-900/50 backdrop-blur-sm transition-opacity" (click)="closeDeleteModal()"></div>\r
\r
    <div class="flex min-h-full items-center justify-center p-4">\r
      <div class="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl transition-all border border-gray-100">\r
        <div class="flex items-center space-x-3 text-red-600 mb-4">\r
          <div class="p-3 bg-red-50 rounded-full">\r
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>\r
            </svg>\r
          </div>\r
          <h3 class="text-lg font-bold text-gray-900">X\xE1c nh\u1EADn x\xF3a k\u1EF3 h\u1ECDc</h3>\r
        </div>\r
        <p class="text-sm text-gray-600 mb-6">\r
          B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a k\u1EF3 h\u1ECDc n\xE0y kh\xF4ng? H\xE0nh \u0111\u1ED9ng n\xE0y kh\xF4ng th\u1EC3 ho\xE0n t\xE1c v\xE0 c\xF3 th\u1EC3 \u1EA3nh h\u01B0\u1EDFng \u0111\u1EBFn l\u1ECBch h\u1ECDc v\xE0 c\xE1c l\u1EDBp h\u1ECDc thu\u1ED9c k\u1EF3 n\xE0y.\r
        </p>\r
        <div class="flex justify-end space-x-3">\r
          <button \r
            (click)="closeDeleteModal()"\r
            class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition"\r
          >\r
            H\u1EE7y\r
          </button>\r
          <button \r
            (click)="confirmDelete()"\r
            class="px-4 py-2 text-sm font-semibold text-white bg-red-600 hover:bg-red-700 rounded-xl transition shadow-md"\r
          >\r
            \u0110\u1ED3ng \xFD X\xF3a\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
}\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TermComponent, { className: "TermComponent", filePath: "src/app/features/academic/pages/term/term.component.ts", lineNumber: 18 });
})();

// src/app/features/academic/pages/classes/classes.component.ts
var _forTrack03 = ($index, $item) => $item.id;
function ClassesComponent_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 30);
    \u0275\u0275listener("click", function ClassesComponent_button_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 31);
    \u0275\u0275element(2, "path", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Th\xEAm l\u1EDBp h\u1ECDc ");
    \u0275\u0275elementEnd();
  }
}
function ClassesComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 33);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 34);
    \u0275\u0275element(3, "circle", 35)(4, "path", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " \u0110ang t\u1EA3i danh s\xE1ch l\u1EDBp h\u1ECDc... ");
    \u0275\u0275elementEnd()();
  }
}
function ClassesComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 33);
    \u0275\u0275text(2, " Kh\xF4ng t\xECm th\u1EA5y l\u1EDBp h\u1ECDc n\xE0o ph\xF9 h\u1EE3p. ");
    \u0275\u0275elementEnd()();
  }
}
function ClassesComponent_Conditional_35_For_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r3.termName);
  }
}
function ClassesComponent_Conditional_35_For_1_Case_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275element(1, "span", 56);
    \u0275\u0275text(2, " \u0110ang tuy\u1EC3n sinh ");
    \u0275\u0275elementEnd();
  }
}
function ClassesComponent_Conditional_35_For_1_Case_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 50);
    \u0275\u0275element(1, "span", 57);
    \u0275\u0275text(2, " \u0110ang h\u1ECDc ");
    \u0275\u0275elementEnd();
  }
}
function ClassesComponent_Conditional_35_For_1_Case_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 51);
    \u0275\u0275element(1, "span", 58);
    \u0275\u0275text(2, " \u0110\xE3 h\u1EE7y ");
    \u0275\u0275elementEnd();
  }
}
function ClassesComponent_Conditional_35_For_1_Case_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 52);
    \u0275\u0275element(1, "span", 59);
    \u0275\u0275text(2, " \u0110\xE3 k\u1EBFt th\xFAc ");
    \u0275\u0275elementEnd();
  }
}
function ClassesComponent_Conditional_35_For_1_button_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 60);
    \u0275\u0275listener("click", function ClassesComponent_Conditional_35_For_1_button_27_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const c_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openModal(c_r3));
    });
    \u0275\u0275text(1, " Ch\u1EC9nh s\u1EEDa ");
    \u0275\u0275elementEnd();
  }
}
function ClassesComponent_Conditional_35_For_1_button_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 61);
    \u0275\u0275listener("click", function ClassesComponent_Conditional_35_For_1_button_28_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const c_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDelete(c_r3.id));
    });
    \u0275\u0275text(1, " X\xF3a ");
    \u0275\u0275elementEnd();
  }
}
function ClassesComponent_Conditional_35_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 37)(1, "td", 38);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 39);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 40)(6, "div", 41);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, ClassesComponent_Conditional_35_For_1_Conditional_8_Template, 2, 1, "div", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 43)(10, "span", 44);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 45)(14, "div", 46)(15, "span", 47);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 48);
    \u0275\u0275text(18, "\u2794");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 47);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "td", 40);
    \u0275\u0275conditionalCreate(22, ClassesComponent_Conditional_35_For_1_Case_22_Template, 3, 0, "span", 49)(23, ClassesComponent_Conditional_35_For_1_Case_23_Template, 3, 0, "span", 50)(24, ClassesComponent_Conditional_35_For_1_Case_24_Template, 3, 0, "span", 51)(25, ClassesComponent_Conditional_35_For_1_Case_25_Template, 3, 0, "span", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "td", 53);
    \u0275\u0275template(27, ClassesComponent_Conditional_35_For_1_button_27_Template, 2, 0, "button", 54)(28, ClassesComponent_Conditional_35_For_1_button_28_Template, 2, 0, "button", 55);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_19_0;
    const c_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", c_r3.code, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", c_r3.name, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r3.courseName || "---");
    \u0275\u0275advance();
    \u0275\u0275conditional(c_r3.termName ? 8 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r3.currentStudents || 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" / ", c_r3.maxStudents || 20, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.formatDateVN(c_r3.startDate));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.formatDateVN(c_r3.endDate));
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_19_0 = c_r3.status) === "OPENING" ? 22 : tmp_19_0 === "ONGOING" ? 23 : tmp_19_0 === "CANCELLED" ? 24 : 25);
    \u0275\u0275advance(5);
    \u0275\u0275property("hasPermission", "CLASS_UPDATE");
    \u0275\u0275advance();
    \u0275\u0275property("hasPermission", "CLASS_DELETE");
  }
}
function ClassesComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ClassesComponent_Conditional_35_For_1_Template, 29, 11, "tr", 37, _forTrack03);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r1.classes());
  }
}
function ClassesComponent_Conditional_59_For_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 76);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const course_r7 = ctx.$implicit;
    \u0275\u0275property("value", course_r7.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", course_r7.code, " - ", course_r7.name);
  }
}
function ClassesComponent_Conditional_59_For_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 76);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const term_r8 = ctx.$implicit;
    \u0275\u0275property("value", term_r8.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", term_r8.code, " (", term_r8.name, ")");
  }
}
function ClassesComponent_Conditional_59_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 79);
    \u0275\u0275text(1, "M\xE3 l\u1EDBp h\u1ECDc kh\xF4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng");
    \u0275\u0275elementEnd();
  }
}
function ClassesComponent_Conditional_59_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 79);
    \u0275\u0275text(1, "T\xEAn l\u1EDBp h\u1ECDc kh\xF4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng");
    \u0275\u0275elementEnd();
  }
}
function ClassesComponent_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 62);
    \u0275\u0275listener("click", function ClassesComponent_Conditional_59_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 63)(3, "div", 64)(4, "div", 65)(5, "h3", 66);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 67);
    \u0275\u0275listener("click", function ClassesComponent_Conditional_59_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 68);
    \u0275\u0275element(9, "path", 69);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(10, "form", 70);
    \u0275\u0275listener("ngSubmit", function ClassesComponent_Conditional_59_Template_form_ngSubmit_10_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(11, "div", 71)(12, "div")(13, "label", 72);
    \u0275\u0275text(14, " Kh\xF3a h\u1ECDc ");
    \u0275\u0275elementStart(15, "span", 73);
    \u0275\u0275text(16, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "select", 74);
    \u0275\u0275listener("change", function ClassesComponent_Conditional_59_Template_select_change_17_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCourseChange());
    });
    \u0275\u0275elementStart(18, "option", 75);
    \u0275\u0275text(19, "-- Ch\u1ECDn Kh\xF3a h\u1ECDc --");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(20, ClassesComponent_Conditional_59_For_21_Template, 2, 3, "option", 76, _forTrack03);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div")(23, "label", 72);
    \u0275\u0275text(24, " K\u1EF3 h\u1ECDc (T\xF9y ch\u1ECDn) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "select", 77)(26, "option", 75);
    \u0275\u0275text(27, "-- Ch\u1ECDn K\u1EF3 h\u1ECDc --");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(28, ClassesComponent_Conditional_59_For_29_Template, 2, 3, "option", 76, _forTrack03);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div")(31, "label", 72);
    \u0275\u0275text(32, " M\xE3 l\u1EDBp h\u1ECDc ");
    \u0275\u0275elementStart(33, "span", 73);
    \u0275\u0275text(34, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(35, "input", 78);
    \u0275\u0275conditionalCreate(36, ClassesComponent_Conditional_59_Conditional_36_Template, 2, 0, "p", 79);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div")(38, "label", 72);
    \u0275\u0275text(39, " T\xEAn l\u1EDBp h\u1ECDc ");
    \u0275\u0275elementStart(40, "span", 73);
    \u0275\u0275text(41, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(42, "input", 80);
    \u0275\u0275conditionalCreate(43, ClassesComponent_Conditional_59_Conditional_43_Template, 2, 0, "p", 79);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 71)(45, "div")(46, "label", 72);
    \u0275\u0275text(47, " S\u1EE9c ch\u1EE9a t\u1ED1i \u0111a ");
    \u0275\u0275elementStart(48, "span", 73);
    \u0275\u0275text(49, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(50, "input", 81);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "div")(52, "label", 72);
    \u0275\u0275text(53, " Tr\u1EA1ng th\xE1i ");
    \u0275\u0275elementStart(54, "span", 73);
    \u0275\u0275text(55, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "select", 82)(57, "option", 83);
    \u0275\u0275text(58, "\u0110ang m\u1EDF tuy\u1EC3n sinh (OPENING)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "option", 84);
    \u0275\u0275text(60, "\u0110ang h\u1ECDc (ONGOING)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "option", 85);
    \u0275\u0275text(62, "\u0110\xE3 k\u1EBFt th\xFAc (CLOSED)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "option", 86);
    \u0275\u0275text(64, "\u0110\xE3 h\u1EE7y (CANCELLED)");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(65, "div", 71)(66, "div")(67, "label", 72);
    \u0275\u0275text(68, " Ng\xE0y khai gi\u1EA3ng ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "div", 87);
    \u0275\u0275listener("click", function ClassesComponent_Conditional_59_Template_div_click_69_listener() {
      \u0275\u0275restoreView(_r6);
      const startDatePicker_r9 = \u0275\u0275reference(75);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openPicker(startDatePicker_r9));
    });
    \u0275\u0275elementStart(70, "input", 88);
    \u0275\u0275listener("input", function ClassesComponent_Conditional_59_Template_input_input_70_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDateTextInput($event, "startDate"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "div", 89);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(72, "svg", 68);
    \u0275\u0275element(73, "path", 90);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(74, "input", 91, 0);
    \u0275\u0275listener("change", function ClassesComponent_Conditional_59_Template_input_change_74_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDatePickerChange($event, "startDate"));
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(76, "div")(77, "label", 72);
    \u0275\u0275text(78, " Ng\xE0y k\u1EBFt th\xFAc ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "div", 87);
    \u0275\u0275listener("click", function ClassesComponent_Conditional_59_Template_div_click_79_listener() {
      \u0275\u0275restoreView(_r6);
      const endDatePicker_r10 = \u0275\u0275reference(85);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openPicker(endDatePicker_r10));
    });
    \u0275\u0275elementStart(80, "input", 88);
    \u0275\u0275listener("input", function ClassesComponent_Conditional_59_Template_input_input_80_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDateTextInput($event, "endDate"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "div", 89);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(82, "svg", 68);
    \u0275\u0275element(83, "path", 90);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(84, "input", 91, 1);
    \u0275\u0275listener("change", function ClassesComponent_Conditional_59_Template_input_change_84_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDatePickerChange($event, "endDate"));
    });
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(86, "div", 92)(87, "button", 93);
    \u0275\u0275listener("click", function ClassesComponent_Conditional_59_Template_button_click_87_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275text(88, " H\u1EE7y b\u1ECF ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "button", 94);
    \u0275\u0275text(90);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_8_0;
    let tmp_9_0;
    let tmp_10_0;
    let tmp_11_0;
    let tmp_13_0;
    let tmp_15_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isEditing() ? "C\u1EADp nh\u1EADt th\xF4ng tin l\u1EDBp h\u1ECDc" : "Th\xEAm l\u1EDBp h\u1ECDc m\u1EDBi", " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("formGroup", ctx_r1.classForm);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("border-red-400", ctx_r1.isFormSubmitted() && ((tmp_5_0 = ctx_r1.classForm.get("courseId")) == null ? null : tmp_5_0.invalid));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.availableCourses());
    \u0275\u0275advance(8);
    \u0275\u0275repeater(ctx_r1.availableTerms());
    \u0275\u0275advance(7);
    \u0275\u0275classProp("border-red-400", ctx_r1.isFormSubmitted() && ((tmp_8_0 = ctx_r1.classForm.get("code")) == null ? null : tmp_8_0.invalid));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isFormSubmitted() && ((tmp_9_0 = ctx_r1.classForm.get("code")) == null ? null : tmp_9_0.hasError("required")) ? 36 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("border-red-400", ctx_r1.isFormSubmitted() && ((tmp_10_0 = ctx_r1.classForm.get("name")) == null ? null : tmp_10_0.invalid));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isFormSubmitted() && ((tmp_11_0 = ctx_r1.classForm.get("name")) == null ? null : tmp_11_0.hasError("required")) ? 43 : -1);
    \u0275\u0275advance(27);
    \u0275\u0275property("value", ctx_r1.startDateDisplay());
    \u0275\u0275advance(4);
    \u0275\u0275property("value", (tmp_13_0 = ctx_r1.classForm.get("startDate")) == null ? null : tmp_13_0.value);
    \u0275\u0275advance(6);
    \u0275\u0275property("value", ctx_r1.endDateDisplay());
    \u0275\u0275advance(4);
    \u0275\u0275property("value", (tmp_15_0 = ctx_r1.classForm.get("endDate")) == null ? null : tmp_15_0.value);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isEditing() ? "C\u1EADp nh\u1EADt" : "Th\xEAm m\u1EDBi", " ");
  }
}
function ClassesComponent_Conditional_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 62);
    \u0275\u0275listener("click", function ClassesComponent_Conditional_60_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDeleteModal());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 63)(3, "div", 95)(4, "div", 96)(5, "div", 97);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 98);
    \u0275\u0275element(7, "path", 99);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "h3", 100);
    \u0275\u0275text(9, "X\xE1c nh\u1EADn x\xF3a l\u1EDBp h\u1ECDc");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "p", 101);
    \u0275\u0275text(11, " B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a l\u1EDBp h\u1ECDc n\xE0y kh\xF4ng? H\xE0nh \u0111\u1ED9ng n\xE0y kh\xF4ng th\u1EC3 ho\xE0n t\xE1c v\xE0 c\xF3 th\u1EC3 \u1EA3nh h\u01B0\u1EDFng \u0111\u1EBFn l\u1ECBch h\u1ECDc v\xE0 danh s\xE1ch h\u1ECDc vi\xEAn trong l\u1EDBp. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 102)(13, "button", 103);
    \u0275\u0275listener("click", function ClassesComponent_Conditional_60_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDeleteModal());
    });
    \u0275\u0275text(14, " H\u1EE7y ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 104);
    \u0275\u0275listener("click", function ClassesComponent_Conditional_60_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmDelete());
    });
    \u0275\u0275text(16, " \u0110\u1ED3ng \xFD X\xF3a ");
    \u0275\u0275elementEnd()()()()();
  }
}
var ClassesComponent = class _ClassesComponent {
  classesService = inject(ClassService);
  courseService = inject(CourseService);
  termService = inject(TermService);
  fb = inject(FormBuilder);
  destroyRef = inject(DestroyRef);
  toastService = inject(ToastService);
  // --- STATE DANH SÁCH LỚP HỌC ---
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
  searchControl = new FormControl("");
  // --- STATE LIST DROPDOWN LỰA CHỌN KHÓA HỌC & KỲ HỌC ---
  availableCourses = signal([], ...ngDevMode ? [{ debugName: "availableCourses" }] : (
    /* istanbul ignore next */
    []
  ));
  availableTerms = signal([], ...ngDevMode ? [{ debugName: "availableTerms" }] : (
    /* istanbul ignore next */
    []
  ));
  // --- STATE MODAL THÊM / SỬA ---
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
  isFormSubmitted = signal(false, ...ngDevMode ? [{ debugName: "isFormSubmitted" }] : (
    /* istanbul ignore next */
    []
  ));
  // Signals lưu chuỗi hiển thị theo định dạng dd/mm/yyyy trong ô input
  startDateDisplay = signal("", ...ngDevMode ? [{ debugName: "startDateDisplay" }] : (
    /* istanbul ignore next */
    []
  ));
  endDateDisplay = signal("", ...ngDevMode ? [{ debugName: "endDateDisplay" }] : (
    /* istanbul ignore next */
    []
  ));
  // --- STATE MODAL XÓA ---
  isDeleteModalOpen = signal(false, ...ngDevMode ? [{ debugName: "isDeleteModalOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  idToDelete = signal(null, ...ngDevMode ? [{ debugName: "idToDelete" }] : (
    /* istanbul ignore next */
    []
  ));
  // Computed signals
  totalPages = computed(() => Math.max(1, Math.ceil(this.totalElements() / this.pageSize())), ...ngDevMode ? [{ debugName: "totalPages" }] : (
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
    this.loadDropdownOptions();
  }
  initForm() {
    this.classForm = this.fb.group({
      courseId: ["", [Validators.required]],
      termId: [""],
      code: ["", [Validators.required, Validators.maxLength(50)]],
      name: ["", [Validators.required, Validators.maxLength(255)]],
      startDate: [""],
      endDate: [""],
      maxStudents: [20, [Validators.required, Validators.min(10)]],
      status: ["OPENING", [Validators.required]]
    });
  }
  setupSearch() {
    this.searchControl.valueChanges.pipe(debounceTime(400), distinctUntilChanged(), takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.currentPage.set(1);
      this.loadData();
    });
  }
  loadDropdownOptions() {
    this.courseService.getCourses({ size: 100 }).subscribe({
      next: (res) => this.availableCourses.set(res.content || []),
      error: () => {
      }
    });
    this.termService.getTerms({ size: 100 }).subscribe({
      next: (res) => this.availableTerms.set(res.content || []),
      error: () => {
      }
    });
  }
  loadData() {
    this.isLoading.set(true);
    this.classesService.getClasses({
      page: this.currentPage(),
      size: this.pageSize(),
      keyword: this.searchControl.value || ""
    }).subscribe({
      next: (response) => {
        this.classes.set(response.content || []);
        this.totalElements.set(response.totalElements || 0);
        this.isLoading.set(false);
      },
      error: (err) => {
        this.toastService.error("L\u1ED7i", "L\u1ED7i khi t\u1EA3i danh s\xE1ch l\u1EDBp h\u1ECDc: " + (err.error?.message || err.message));
        this.isLoading.set(false);
      }
    });
  }
  changePage(page) {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage.set(page);
      this.loadData();
    }
  }
  openModal(classItem) {
    this.isFormSubmitted.set(false);
    this.loadDropdownOptions();
    if (classItem && classItem.id) {
      this.isEditing.set(true);
      this.currentId.set(classItem.id);
      const startIso = classItem.startDate ? classItem.startDate.split("T")[0] : "";
      const endIso = classItem.endDate ? classItem.endDate.split("T")[0] : "";
      this.startDateDisplay.set(this.formatDateVN(startIso));
      this.endDateDisplay.set(this.formatDateVN(endIso));
      this.classForm.patchValue({
        courseId: classItem.courseId,
        termId: classItem.termId || "",
        code: classItem.code,
        name: classItem.name,
        startDate: startIso,
        endDate: endIso,
        maxStudents: classItem.maxStudents || 20,
        status: classItem.status || "OPENING"
      });
    } else {
      if (this.isEditing() || !this.classForm.get("courseId")?.value) {
        this.isEditing.set(false);
        this.currentId.set(null);
        this.resetAddForm();
      } else {
        this.isEditing.set(false);
        this.currentId.set(null);
      }
    }
    this.isModalOpen.set(true);
  }
  resetAddForm() {
    this.startDateDisplay.set("");
    this.endDateDisplay.set("");
    this.classForm.reset({
      courseId: "",
      termId: "",
      code: "",
      name: "",
      startDate: "",
      endDate: "",
      maxStudents: 20,
      status: "OPENING"
    });
  }
  closeModal() {
    this.isModalOpen.set(false);
  }
  onCourseChange() {
    const selectedCourseId = this.classForm.get("courseId")?.value;
    const course = this.availableCourses().find((c) => c.id === Number(selectedCourseId));
    if (course && !this.isEditing()) {
      const randomSuffix = Math.floor(100 + Math.random() * 900);
      this.classForm.patchValue({
        code: `${course.code}-K${randomSuffix}`,
        name: `L\u1EDBp ${course.name} - \u0110\u1EE3t ${randomSuffix}`
      });
    }
  }
  openPicker(pickerInput) {
    try {
      if (pickerInput && typeof pickerInput.showPicker === "function") {
        pickerInput.showPicker();
      } else if (pickerInput && typeof pickerInput.click === "function") {
        pickerInput.click();
      }
    } catch (e) {
      if (pickerInput && typeof pickerInput.click === "function") {
        pickerInput.click();
      }
    }
  }
  onDateTextInput(event, field) {
    const input = event.target;
    let value = input.value.replace(/\D/g, "");
    if (value.length > 8)
      value = value.substring(0, 8);
    let formatted = "";
    if (value.length > 0) {
      formatted = value.substring(0, 2);
      if (value.length >= 3) {
        formatted += "/" + value.substring(2, 4);
      }
      if (value.length >= 5) {
        formatted += "/" + value.substring(4, 8);
      }
    }
    input.value = formatted;
    if (field === "startDate") {
      this.startDateDisplay.set(formatted);
    } else {
      this.endDateDisplay.set(formatted);
    }
    if (formatted.length === 10) {
      const parts = formatted.split("/");
      const day = parts[0];
      const month = parts[1];
      const year = parts[2];
      const isoDate = `${year}-${month}-${day}`;
      this.classForm.get(field)?.setValue(isoDate);
    } else {
      this.classForm.get(field)?.setValue("");
    }
  }
  onDatePickerChange(event, field) {
    const input = event.target;
    const isoDate = input.value;
    if (isoDate) {
      this.classForm.get(field)?.setValue(isoDate);
      const formatted = this.formatDateVN(isoDate);
      if (field === "startDate") {
        this.startDateDisplay.set(formatted);
      } else {
        this.endDateDisplay.set(formatted);
      }
    }
  }
  onSubmit() {
    this.isFormSubmitted.set(true);
    if (this.classForm.invalid) {
      this.toastService.error("Th\xF4ng b\xE1o", "Vui l\xF2ng ki\u1EC3m tra l\u1EA1i c\xE1c tr\u01B0\u1EDDng d\u1EEF li\u1EC7u b\u1EAFt bu\u1ED9c");
      return;
    }
    const formValues = this.classForm.value;
    if (formValues.startDate && formValues.endDate && formValues.startDate > formValues.endDate) {
      this.toastService.error("L\u1ED7i ng\xE0y th\xE1ng", "Ng\xE0y k\u1EBFt th\xFAc ph\u1EA3i sau ho\u1EB7c b\u1EB1ng ng\xE0y b\u1EAFt \u0111\u1EA7u");
      return;
    }
    const classData = {
      courseId: Number(formValues.courseId),
      termId: formValues.termId ? Number(formValues.termId) : void 0,
      code: formValues.code,
      name: formValues.name,
      startDate: formValues.startDate || void 0,
      endDate: formValues.endDate || void 0,
      maxStudents: Number(formValues.maxStudents),
      status: formValues.status
    };
    if (this.isEditing() && this.currentId()) {
      this.classesService.update(this.currentId(), classData).subscribe({
        next: (res) => {
          this.toastService.success("Th\xE0nh c\xF4ng", res.message || "C\u1EADp nh\u1EADt l\u1EDBp h\u1ECDc th\xE0nh c\xF4ng!");
          this.closeModal();
          this.loadData();
        },
        error: (err) => {
          this.toastService.error("L\u1ED7i", "C\u1EADp nh\u1EADt th\u1EA5t b\u1EA1i: " + (err.error?.message || err.message));
        }
      });
    } else {
      this.classesService.create(classData).subscribe({
        next: (res) => {
          this.toastService.success("Th\xE0nh c\xF4ng", res.message || "T\u1EA1o m\u1EDBi l\u1EDBp h\u1ECDc th\xE0nh c\xF4ng!");
          this.resetAddForm();
          this.closeModal();
          this.loadData();
        },
        error: (err) => {
          this.toastService.error("L\u1ED7i", "T\u1EA1o m\u1EDBi th\u1EA5t b\u1EA1i: " + (err.error?.message || err.message));
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
  confirmDelete() {
    const id = this.idToDelete();
    if (!id)
      return;
    this.classesService.delete(id).subscribe({
      next: (res) => {
        this.toastService.success("Th\xE0nh c\xF4ng", res.message || "X\xF3a l\u1EDBp h\u1ECDc th\xE0nh c\xF4ng!");
        this.isDeleteModalOpen.set(false);
        this.idToDelete.set(null);
        this.loadData();
      },
      error: (err) => {
        this.toastService.error("L\u1ED7i", "X\xF3a th\u1EA5t b\u1EA1i: " + (err.error?.message || err.message));
      }
    });
  }
  closeDeleteModal() {
    this.isDeleteModalOpen.set(false);
    this.idToDelete.set(null);
  }
  formatDateVN(dateStr) {
    if (!dateStr)
      return "---";
    const parts = dateStr.split("T")[0].split("-");
    if (parts.length === 3) {
      return `${parts[2]}/${parts[1]}/${parts[0]}`;
    }
    return dateStr;
  }
  static \u0275fac = function ClassesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ClassesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClassesComponent, selectors: [["app-classes"]], decls: 61, vars: 12, consts: [["startDatePicker", ""], ["endDatePicker", ""], [1, "space-y-6"], [1, "flex", "flex-col", "md:flex-row", "md:items-end", "justify-between", "gap-4", "pb-4", "border-b", "border-gray-100"], [1, "text-2xl", "font-extrabold", "text-gray-900", "tracking-tight"], [1, "text-sm", "text-gray-500", "mt-1"], [1, "flex", "space-x-3"], [1, "relative"], [1, "absolute", "inset-y-0", "left-0", "flex", "items-center", "pl-3", "pointer-events-none"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-gray-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], ["type", "text", "placeholder", "T\xECm m\xE3 ho\u1EB7c t\xEAn l\u1EDBp...", 1, "bg-white", "border", "border-gray-200", "text-gray-900", "text-sm", "rounded-xl", "focus:ring-2", "focus:ring-blue-100", "focus:border-blue-500", "block", "w-64", "pl-10", "p-2.5", "outline-none", "transition", "shadow-sm", 3, "formControl"], ["class", "bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-5 rounded-xl flex items-center transition shadow-md hover:shadow-lg text-sm", 3, "click", 4, "hasPermission"], [1, "bg-white", "rounded-2xl", "shadow-sm", "border", "border-gray-100", "overflow-hidden"], [1, "w-full", "text-sm", "text-left", "text-gray-500"], [1, "text-xs", "text-gray-500", "uppercase", "bg-gray-50/80", "border-b", "border-gray-100", "font-semibold"], ["scope", "col", 1, "px-6", "py-4"], ["scope", "col", 1, "px-6", "py-4", "text-right"], [1, "divide-y", "divide-gray-50"], [1, "flex", "flex-col", "sm:flex-row", "items-center", "justify-between", "px-6", "py-4", "bg-gray-50/80", "border-t", "border-gray-100", "rounded-b-2xl", "gap-3"], [1, "text-sm", "text-gray-500"], [1, "font-semibold", "text-gray-900"], [1, "flex", "space-x-2"], [1, "px-3.5", "py-1.5", "text-sm", "font-medium", "text-gray-700", "bg-white", "border", "border-gray-300", "rounded-lg", "hover:bg-gray-50", "disabled:opacity-50", "disabled:cursor-not-allowed", "transition", "shadow-sm", "flex", "items-center", 3, "click", "disabled"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "mr-1"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 19l-7-7 7-7"], [1, "px-3.5", "py-1.5", "text-sm", "font-semibold", "text-gray-800", "bg-gray-100", "rounded-lg", "flex", "items-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "ml-1"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 5l7 7-7 7"], [1, "fixed", "inset-0", "z-50", "overflow-y-auto"], [1, "bg-blue-600", "hover:bg-blue-700", "text-white", "font-semibold", "py-2.5", "px-5", "rounded-xl", "flex", "items-center", "transition", "shadow-md", "hover:shadow-lg", "text-sm", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "mr-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 4v16m8-8H4"], ["colspan", "7", 1, "px-6", "py-12", "text-center", "text-gray-500"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "mx-auto", "h-8", "w-8", "text-blue-500", "mb-3"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"], [1, "bg-white", "hover:bg-blue-50/50", "transition", "duration-200"], [1, "px-6", "py-4", "font-mono", "font-bold", "text-blue-600"], [1, "px-6", "py-4", "font-bold", "text-gray-900"], [1, "px-6", "py-4"], [1, "font-semibold", "text-gray-800"], [1, "text-xs", "text-gray-500", "mt-0.5"], [1, "px-6", "py-4", "font-semibold", "text-gray-900"], [1, "text-blue-600"], [1, "px-6", "py-4", "text-xs", "font-medium", "text-gray-600"], [1, "flex", "items-center", "space-x-1.5"], [1, "px-2", "py-0.5", "bg-gray-100", "text-gray-700", "rounded", "font-mono"], [1, "text-gray-400"], [1, "px-3", "py-1", "text-xs", "font-semibold", "rounded-full", "border", "bg-blue-50", "text-blue-700", "border-blue-200", "inline-flex", "items-center"], [1, "px-3", "py-1", "text-xs", "font-semibold", "rounded-full", "border", "bg-emerald-50", "text-emerald-700", "border-emerald-200", "inline-flex", "items-center"], [1, "px-3", "py-1", "text-xs", "font-semibold", "rounded-full", "border", "bg-red-50", "text-red-700", "border-red-200", "inline-flex", "items-center"], [1, "px-3", "py-1", "text-xs", "font-semibold", "rounded-full", "border", "bg-gray-50", "text-gray-600", "border-gray-200", "inline-flex", "items-center"], [1, "px-6", "py-4", "text-right", "space-x-3"], ["class", "font-medium text-blue-600 hover:text-blue-800 transition text-sm", 3, "click", 4, "hasPermission"], ["class", "font-medium text-red-600 hover:text-red-800 transition text-sm", 3, "click", 4, "hasPermission"], [1, "w-1.5", "h-1.5", "rounded-full", "mr-1.5", "bg-blue-500"], [1, "w-1.5", "h-1.5", "rounded-full", "mr-1.5", "bg-emerald-500"], [1, "w-1.5", "h-1.5", "rounded-full", "mr-1.5", "bg-red-500"], [1, "w-1.5", "h-1.5", "rounded-full", "mr-1.5", "bg-gray-400"], [1, "font-medium", "text-blue-600", "hover:text-blue-800", "transition", "text-sm", 3, "click"], [1, "font-medium", "text-red-600", "hover:text-red-800", "transition", "text-sm", 3, "click"], [1, "fixed", "inset-0", "bg-gray-900/50", "backdrop-blur-sm", "transition-opacity", 3, "click"], [1, "flex", "min-h-full", "items-center", "justify-center", "p-4"], [1, "relative", "w-full", "max-w-lg", "rounded-2xl", "bg-white", "p-6", "shadow-2xl", "transition-all", "border", "border-gray-100"], [1, "flex", "items-center", "justify-between", "pb-4", "border-b", "border-gray-100"], [1, "text-xl", "font-bold", "text-gray-900"], [1, "text-gray-400", "hover:text-gray-600", "transition", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "mt-4", "space-y-4", 3, "ngSubmit", "formGroup"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "gap-4"], [1, "block", "text-xs", "font-semibold", "text-gray-700", "uppercase", "tracking-wider", "mb-1"], [1, "text-red-500"], ["formControlName", "courseId", 1, "w-full", "px-3.5", "py-2.5", "border", "border-gray-200", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-100", "focus:border-blue-500", "outline-none", "transition", "bg-white", "font-medium", 3, "change"], ["value", ""], [3, "value"], ["formControlName", "termId", 1, "w-full", "px-3.5", "py-2.5", "border", "border-gray-200", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-100", "focus:border-blue-500", "outline-none", "transition", "bg-white", "font-medium"], ["type", "text", "formControlName", "code", "placeholder", "VD: CLASS-IELTS-K1", 1, "w-full", "px-3.5", "py-2.5", "border", "border-gray-200", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-100", "focus:border-blue-500", "outline-none", "transition", "font-mono", "font-semibold"], [1, "mt-1", "text-xs", "text-red-500"], ["type", "text", "formControlName", "name", "placeholder", "VD: L\u1EDBp IELTS 6.5+ \u0110\u1EE3t 1", 1, "w-full", "px-3.5", "py-2.5", "border", "border-gray-200", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-100", "focus:border-blue-500", "outline-none", "transition", "font-semibold"], ["type", "number", "formControlName", "maxStudents", "placeholder", "20", 1, "w-full", "px-3.5", "py-2.5", "border", "border-gray-200", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-100", "focus:border-blue-500", "outline-none", "transition", "font-semibold"], ["formControlName", "status", 1, "w-full", "px-3.5", "py-2.5", "border", "border-gray-200", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-100", "focus:border-blue-500", "outline-none", "transition", "bg-white", "font-medium"], ["value", "OPENING"], ["value", "ONGOING"], ["value", "CLOSED"], ["value", "CANCELLED"], [1, "relative", "flex", "items-center", "cursor-pointer", 3, "click"], ["type", "text", "placeholder", "Ch\u1ECDn ng\xE0y (dd/MM/yyyy)", "maxlength", "10", 1, "w-full", "px-3.5", "py-2.5", "pr-10", "border", "border-gray-200", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-100", "focus:border-blue-500", "outline-none", "transition", "font-semibold", "text-gray-900", "bg-white", "cursor-pointer", 3, "input", "value"], [1, "absolute", "right-2.5", "flex", "items-center", "text-gray-400", "hover:text-blue-600", "transition", "p-1"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"], ["type", "date", 1, "sr-only", "opacity-0", "w-0", "h-0", "absolute", "pointer-events-none", 3, "change", "value"], [1, "flex", "justify-end", "space-x-3", "pt-4", "border-t", "border-gray-100"], ["type", "button", 1, "px-4", "py-2.5", "text-sm", "font-medium", "text-gray-700", "bg-white", "border", "border-gray-300", "rounded-xl", "hover:bg-gray-50", "transition", 3, "click"], ["type", "submit", 1, "px-5", "py-2.5", "text-sm", "font-semibold", "text-white", "bg-blue-600", "hover:bg-blue-700", "rounded-xl", "transition", "shadow-md"], [1, "relative", "w-full", "max-w-md", "rounded-2xl", "bg-white", "p-6", "shadow-2xl", "transition-all", "border", "border-gray-100"], [1, "flex", "items-center", "space-x-3", "text-red-600", "mb-4"], [1, "p-3", "bg-red-50", "rounded-full"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"], [1, "text-lg", "font-bold", "text-gray-900"], [1, "text-sm", "text-gray-600", "mb-6"], [1, "flex", "justify-end", "space-x-3"], [1, "px-4", "py-2", "text-sm", "font-medium", "text-gray-700", "bg-white", "border", "border-gray-300", "rounded-xl", "hover:bg-gray-50", "transition", 3, "click"], [1, "px-4", "py-2", "text-sm", "font-semibold", "text-white", "bg-red-600", "hover:bg-red-700", "rounded-xl", "transition", "shadow-md", 3, "click"]], template: function ClassesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div")(3, "h1", 4);
      \u0275\u0275text(4, "Qu\u1EA3n l\xFD L\u1EDBp h\u1ECDc");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 5);
      \u0275\u0275text(6, "Qu\u1EA3n l\xFD danh s\xE1ch l\u1EDBp h\u1ECDc, s\u0129 s\u1ED1, th\u1EDDi gian \u0111\xE0o t\u1EA1o v\xE0 tr\u1EA1ng th\xE1i m\u1EDF l\u1EDBp");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 6)(8, "div", 7)(9, "div", 8);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(10, "svg", 9);
      \u0275\u0275element(11, "path", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275element(12, "input", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275template(13, ClassesComponent_button_13_Template, 4, 0, "button", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 13)(15, "table", 14)(16, "thead", 15)(17, "tr")(18, "th", 16);
      \u0275\u0275text(19, "M\xE3 l\u1EDBp");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "th", 16);
      \u0275\u0275text(21, "T\xEAn l\u1EDBp h\u1ECDc");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "th", 16);
      \u0275\u0275text(23, "Kh\xF3a h\u1ECDc / K\u1EF3 h\u1ECDc");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "th", 16);
      \u0275\u0275text(25, "S\u0129 s\u1ED1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "th", 16);
      \u0275\u0275text(27, "Kho\u1EA3ng th\u1EDDi gian");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "th", 16);
      \u0275\u0275text(29, "Tr\u1EA1ng th\xE1i");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "th", 17);
      \u0275\u0275text(31, "Thao t\xE1c");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(32, "tbody", 18);
      \u0275\u0275conditionalCreate(33, ClassesComponent_Conditional_33_Template, 6, 0, "tr")(34, ClassesComponent_Conditional_34_Template, 3, 0, "tr")(35, ClassesComponent_Conditional_35_Template, 2, 0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "div", 19)(37, "div", 20);
      \u0275\u0275text(38, " Hi\u1EC3n th\u1ECB ");
      \u0275\u0275elementStart(39, "span", 21);
      \u0275\u0275text(40);
      \u0275\u0275elementEnd();
      \u0275\u0275text(41, " - ");
      \u0275\u0275elementStart(42, "span", 21);
      \u0275\u0275text(43);
      \u0275\u0275elementEnd();
      \u0275\u0275text(44, " trong t\u1ED5ng s\u1ED1 ");
      \u0275\u0275elementStart(45, "span", 21);
      \u0275\u0275text(46);
      \u0275\u0275elementEnd();
      \u0275\u0275text(47, " k\u1EBFt qu\u1EA3 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "div", 22)(49, "button", 23);
      \u0275\u0275listener("click", function ClassesComponent_Template_button_click_49_listener() {
        return ctx.changePage(ctx.currentPage() - 1);
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(50, "svg", 24);
      \u0275\u0275element(51, "path", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275text(52, " Tr\u01B0\u1EDBc ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(53, "span", 26);
      \u0275\u0275text(54);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "button", 23);
      \u0275\u0275listener("click", function ClassesComponent_Template_button_click_55_listener() {
        return ctx.changePage(ctx.currentPage() + 1);
      });
      \u0275\u0275text(56, " Sau ");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(57, "svg", 27);
      \u0275\u0275element(58, "path", 28);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275conditionalCreate(59, ClassesComponent_Conditional_59_Template, 91, 15, "div", 29);
      \u0275\u0275conditionalCreate(60, ClassesComponent_Conditional_60_Template, 17, 0, "div", 29);
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275property("formControl", ctx.searchControl);
      \u0275\u0275advance();
      \u0275\u0275property("hasPermission", "CLASS_CREATE");
      \u0275\u0275advance(20);
      \u0275\u0275conditional(ctx.isLoading() && ctx.classes().length === 0 ? 33 : ctx.classes().length === 0 ? 34 : 35);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.startIndex());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.endIndex());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.totalElements());
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", ctx.currentPage() === 1);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate2(" ", ctx.currentPage(), " / ", ctx.totalPages(), " ");
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.currentPage() >= ctx.totalPages());
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.isModalOpen() ? 59 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isDeleteModalOpen() ? 60 : -1);
    }
  }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormControlDirective, FormGroupDirective, FormControlName, HasPermissionDirective], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClassesComponent, [{
    type: Component,
    args: [{ selector: "app-classes", imports: [CommonModule, ReactiveFormsModule, HasPermissionDirective], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="space-y-6">\r
  <!-- PAGE HEADER -->\r
  <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-gray-100">\r
    <div>\r
      <h1 class="text-2xl font-extrabold text-gray-900 tracking-tight">Qu\u1EA3n l\xFD L\u1EDBp h\u1ECDc</h1>\r
      <p class="text-sm text-gray-500 mt-1">Qu\u1EA3n l\xFD danh s\xE1ch l\u1EDBp h\u1ECDc, s\u0129 s\u1ED1, th\u1EDDi gian \u0111\xE0o t\u1EA1o v\xE0 tr\u1EA1ng th\xE1i m\u1EDF l\u1EDBp</p>\r
    </div>\r
    <div class="flex space-x-3">\r
      <!-- Search Input -->\r
      <div class="relative">\r
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">\r
          <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>\r
          </svg>\r
        </div>\r
        <input \r
          type="text" \r
          [formControl]="searchControl" \r
          placeholder="T\xECm m\xE3 ho\u1EB7c t\xEAn l\u1EDBp..." \r
          class="bg-white border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-500 block w-64 pl-10 p-2.5 outline-none transition shadow-sm"\r
        >\r
      </div>\r
\r
      <!-- Add Button -->\r
      <button \r
        *hasPermission="'CLASS_CREATE'"\r
        (click)="openModal()" \r
        class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-5 rounded-xl flex items-center transition shadow-md hover:shadow-lg text-sm"\r
      >\r
        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>\r
        </svg>\r
        Th\xEAm l\u1EDBp h\u1ECDc\r
      </button>\r
    </div>\r
  </div>\r
\r
  <!-- DATA TABLE -->\r
  <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">\r
    <table class="w-full text-sm text-left text-gray-500">\r
      <thead class="text-xs text-gray-500 uppercase bg-gray-50/80 border-b border-gray-100 font-semibold">\r
        <tr>\r
          <th scope="col" class="px-6 py-4">M\xE3 l\u1EDBp</th>\r
          <th scope="col" class="px-6 py-4">T\xEAn l\u1EDBp h\u1ECDc</th>\r
          <th scope="col" class="px-6 py-4">Kh\xF3a h\u1ECDc / K\u1EF3 h\u1ECDc</th>\r
          <th scope="col" class="px-6 py-4">S\u0129 s\u1ED1</th>\r
          <th scope="col" class="px-6 py-4">Kho\u1EA3ng th\u1EDDi gian</th>\r
          <th scope="col" class="px-6 py-4">Tr\u1EA1ng th\xE1i</th>\r
          <th scope="col" class="px-6 py-4 text-right">Thao t\xE1c</th>\r
        </tr>\r
      </thead>\r
      <tbody class="divide-y divide-gray-50">\r
        @if (isLoading() && classes().length === 0) {\r
          <tr>\r
            <td colspan="7" class="px-6 py-12 text-center text-gray-500">\r
              <svg class="animate-spin mx-auto h-8 w-8 text-blue-500 mb-3" fill="none" viewBox="0 0 24 24">\r
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>\r
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>\r
              </svg>\r
              \u0110ang t\u1EA3i danh s\xE1ch l\u1EDBp h\u1ECDc...\r
            </td>\r
          </tr>\r
        } @else if (classes().length === 0) {\r
          <tr>\r
            <td colspan="7" class="px-6 py-12 text-center text-gray-500">\r
              Kh\xF4ng t\xECm th\u1EA5y l\u1EDBp h\u1ECDc n\xE0o ph\xF9 h\u1EE3p.\r
            </td>\r
          </tr>\r
        } @else {\r
          @for (c of classes(); track c.id) {\r
            <tr class="bg-white hover:bg-blue-50/50 transition duration-200">\r
              <!-- Code -->\r
              <td class="px-6 py-4 font-mono font-bold text-blue-600">\r
                {{ c.code }}\r
              </td>\r
              <!-- Name -->\r
              <td class="px-6 py-4 font-bold text-gray-900">\r
                {{ c.name }}\r
              </td>\r
              <!-- Course / Term -->\r
              <td class="px-6 py-4">\r
                <div class="font-semibold text-gray-800">{{ c.courseName || '---' }}</div>\r
                @if (c.termName) {\r
                  <div class="text-xs text-gray-500 mt-0.5">{{ c.termName }}</div>\r
                }\r
              </td>\r
              <!-- Students Capacity -->\r
              <td class="px-6 py-4 font-semibold text-gray-900">\r
                <span class="text-blue-600">{{ c.currentStudents || 0 }}</span> / {{ c.maxStudents || 20 }}\r
              </td>\r
              <!-- Date Range -->\r
              <td class="px-6 py-4 text-xs font-medium text-gray-600">\r
                <div class="flex items-center space-x-1.5">\r
                  <span class="px-2 py-0.5 bg-gray-100 text-gray-700 rounded font-mono">{{ formatDateVN(c.startDate) }}</span>\r
                  <span class="text-gray-400">\u2794</span>\r
                  <span class="px-2 py-0.5 bg-gray-100 text-gray-700 rounded font-mono">{{ formatDateVN(c.endDate) }}</span>\r
                </div>\r
              </td>\r
              <!-- Status Badge -->\r
              <td class="px-6 py-4">\r
                @switch (c.status) {\r
                  @case ('OPENING') {\r
                    <span class="px-3 py-1 text-xs font-semibold rounded-full border bg-blue-50 text-blue-700 border-blue-200 inline-flex items-center">\r
                      <span class="w-1.5 h-1.5 rounded-full mr-1.5 bg-blue-500"></span>\r
                      \u0110ang tuy\u1EC3n sinh\r
                    </span>\r
                  }\r
                  @case ('ONGOING') {\r
                    <span class="px-3 py-1 text-xs font-semibold rounded-full border bg-emerald-50 text-emerald-700 border-emerald-200 inline-flex items-center">\r
                      <span class="w-1.5 h-1.5 rounded-full mr-1.5 bg-emerald-500"></span>\r
                      \u0110ang h\u1ECDc\r
                    </span>\r
                  }\r
                  @case ('CANCELLED') {\r
                    <span class="px-3 py-1 text-xs font-semibold rounded-full border bg-red-50 text-red-700 border-red-200 inline-flex items-center">\r
                      <span class="w-1.5 h-1.5 rounded-full mr-1.5 bg-red-500"></span>\r
                      \u0110\xE3 h\u1EE7y\r
                    </span>\r
                  }\r
                  @default {\r
                    <span class="px-3 py-1 text-xs font-semibold rounded-full border bg-gray-50 text-gray-600 border-gray-200 inline-flex items-center">\r
                      <span class="w-1.5 h-1.5 rounded-full mr-1.5 bg-gray-400"></span>\r
                      \u0110\xE3 k\u1EBFt th\xFAc\r
                    </span>\r
                  }\r
                }\r
              </td>\r
              <!-- Actions -->\r
              <td class="px-6 py-4 text-right space-x-3">\r
                <button \r
                  *hasPermission="'CLASS_UPDATE'"\r
                  (click)="openModal(c)" \r
                  class="font-medium text-blue-600 hover:text-blue-800 transition text-sm"\r
                >\r
                  Ch\u1EC9nh s\u1EEDa\r
                </button>\r
                <button \r
                  *hasPermission="'CLASS_DELETE'"\r
                  (click)="onDelete(c.id!)" \r
                  class="font-medium text-red-600 hover:text-red-800 transition text-sm"\r
                >\r
                  X\xF3a\r
                </button>\r
              </td>\r
            </tr>\r
          }\r
        }\r
      </tbody>\r
    </table>\r
\r
    <!-- PAGINATION FOOTER -->\r
    <div class="flex flex-col sm:flex-row items-center justify-between px-6 py-4 bg-gray-50/80 border-t border-gray-100 rounded-b-2xl gap-3">\r
      <div class="text-sm text-gray-500">\r
        Hi\u1EC3n th\u1ECB <span class="font-semibold text-gray-900">{{ startIndex() }}</span> \r
        - <span class="font-semibold text-gray-900">{{ endIndex() }}</span> \r
        trong t\u1ED5ng s\u1ED1 <span class="font-semibold text-gray-900">{{ totalElements() }}</span> k\u1EBFt qu\u1EA3\r
      </div>\r
      \r
      <div class="flex space-x-2">\r
        <button \r
          (click)="changePage(currentPage() - 1)" \r
          [disabled]="currentPage() === 1"\r
          class="px-3.5 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition shadow-sm flex items-center"\r
        >\r
          <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>\r
          </svg>\r
          Tr\u01B0\u1EDBc\r
        </button>\r
\r
        <span class="px-3.5 py-1.5 text-sm font-semibold text-gray-800 bg-gray-100 rounded-lg flex items-center">\r
          {{ currentPage() }} / {{ totalPages() }}\r
        </span>\r
\r
        <button \r
          (click)="changePage(currentPage() + 1)" \r
          [disabled]="currentPage() >= totalPages()"\r
          class="px-3.5 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition shadow-sm flex items-center"\r
        >\r
          Sau\r
          <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>\r
          </svg>\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- MODAL TH\xCAM / C\u1EACP NH\u1EACT L\u1EDAP H\u1ECCC -->\r
@if (isModalOpen()) {\r
  <div class="fixed inset-0 z-50 overflow-y-auto">\r
    <div class="fixed inset-0 bg-gray-900/50 backdrop-blur-sm transition-opacity" (click)="closeModal()"></div>\r
\r
    <div class="flex min-h-full items-center justify-center p-4">\r
      <div class="relative w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl transition-all border border-gray-100">\r
        \r
        <!-- Modal Header -->\r
        <div class="flex items-center justify-between pb-4 border-b border-gray-100">\r
          <h3 class="text-xl font-bold text-gray-900">\r
            {{ isEditing() ? 'C\u1EADp nh\u1EADt th\xF4ng tin l\u1EDBp h\u1ECDc' : 'Th\xEAm l\u1EDBp h\u1ECDc m\u1EDBi' }}\r
          </h3>\r
          <button (click)="closeModal()" class="text-gray-400 hover:text-gray-600 transition">\r
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>\r
            </svg>\r
          </button>\r
        </div>\r
\r
        <!-- Modal Form -->\r
        <form [formGroup]="classForm" (ngSubmit)="onSubmit()" class="mt-4 space-y-4">\r
          \r
          <!-- Course & Term Select Grid -->\r
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">\r
            <div>\r
              <label class="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">\r
                Kh\xF3a h\u1ECDc <span class="text-red-500">*</span>\r
              </label>\r
              <select \r
                formControlName="courseId"\r
                (change)="onCourseChange()"\r
                class="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition bg-white font-medium"\r
                [class.border-red-400]="isFormSubmitted() && classForm.get('courseId')?.invalid"\r
              >\r
                <option value="">-- Ch\u1ECDn Kh\xF3a h\u1ECDc --</option>\r
                @for (course of availableCourses(); track course.id) {\r
                  <option [value]="course.id">{{ course.code }} - {{ course.name }}</option>\r
                }\r
              </select>\r
            </div>\r
\r
            <div>\r
              <label class="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">\r
                K\u1EF3 h\u1ECDc (T\xF9y ch\u1ECDn)\r
              </label>\r
              <select \r
                formControlName="termId"\r
                class="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition bg-white font-medium"\r
              >\r
                <option value="">-- Ch\u1ECDn K\u1EF3 h\u1ECDc --</option>\r
                @for (term of availableTerms(); track term.id) {\r
                  <option [value]="term.id">{{ term.code }} ({{ term.name }})</option>\r
                }\r
              </select>\r
            </div>\r
          </div>\r
\r
          <!-- Code & Name -->\r
          <div>\r
            <label class="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">\r
              M\xE3 l\u1EDBp h\u1ECDc <span class="text-red-500">*</span>\r
            </label>\r
            <input \r
              type="text" \r
              formControlName="code"\r
              placeholder="VD: CLASS-IELTS-K1"\r
              class="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition font-mono font-semibold"\r
              [class.border-red-400]="isFormSubmitted() && classForm.get('code')?.invalid"\r
            >\r
            @if (isFormSubmitted() && classForm.get('code')?.hasError('required')) {\r
              <p class="mt-1 text-xs text-red-500">M\xE3 l\u1EDBp h\u1ECDc kh\xF4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng</p>\r
            }\r
          </div>\r
\r
          <div>\r
            <label class="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">\r
              T\xEAn l\u1EDBp h\u1ECDc <span class="text-red-500">*</span>\r
            </label>\r
            <input \r
              type="text" \r
              formControlName="name"\r
              placeholder="VD: L\u1EDBp IELTS 6.5+ \u0110\u1EE3t 1"\r
              class="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition font-semibold"\r
              [class.border-red-400]="isFormSubmitted() && classForm.get('name')?.invalid"\r
            >\r
            @if (isFormSubmitted() && classForm.get('name')?.hasError('required')) {\r
              <p class="mt-1 text-xs text-red-500">T\xEAn l\u1EDBp h\u1ECDc kh\xF4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng</p>\r
            }\r
          </div>\r
\r
          <!-- Capacity & Status Grid -->\r
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">\r
            <div>\r
              <label class="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">\r
                S\u1EE9c ch\u1EE9a t\u1ED1i \u0111a <span class="text-red-500">*</span>\r
              </label>\r
              <input \r
                type="number" \r
                formControlName="maxStudents"\r
                placeholder="20"\r
                class="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition font-semibold"\r
              >\r
            </div>\r
\r
            <div>\r
              <label class="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">\r
                Tr\u1EA1ng th\xE1i <span class="text-red-500">*</span>\r
              </label>\r
              <select \r
                formControlName="status"\r
                class="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition bg-white font-medium"\r
              >\r
                <option value="OPENING">\u0110ang m\u1EDF tuy\u1EC3n sinh (OPENING)</option>\r
                <option value="ONGOING">\u0110ang h\u1ECDc (ONGOING)</option>\r
                <option value="CLOSED">\u0110\xE3 k\u1EBFt th\xFAc (CLOSED)</option>\r
                <option value="CANCELLED">\u0110\xE3 h\u1EE7y (CANCELLED)</option>\r
              </select>\r
            </div>\r
          </div>\r
\r
          <!-- Date Range Grid -->\r
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">\r
            <!-- Start Date -->\r
            <div>\r
              <label class="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">\r
                Ng\xE0y khai gi\u1EA3ng\r
              </label>\r
              <div class="relative flex items-center cursor-pointer" (click)="openPicker(startDatePicker)">\r
                <input \r
                  type="text" \r
                  [value]="startDateDisplay()"\r
                  (input)="onDateTextInput($event, 'startDate')"\r
                  placeholder="Ch\u1ECDn ng\xE0y (dd/MM/yyyy)"\r
                  maxlength="10"\r
                  class="w-full px-3.5 py-2.5 pr-10 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition font-semibold text-gray-900 bg-white cursor-pointer"\r
                >\r
                <div class="absolute right-2.5 flex items-center text-gray-400 hover:text-blue-600 transition p-1">\r
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>\r
                  </svg>\r
                  <input \r
                    #startDatePicker\r
                    type="date" \r
                    [value]="classForm.get('startDate')?.value"\r
                    (change)="onDatePickerChange($event, 'startDate')"\r
                    class="sr-only opacity-0 w-0 h-0 absolute pointer-events-none"\r
                  >\r
                </div>\r
              </div>\r
            </div>\r
\r
            <!-- End Date -->\r
            <div>\r
              <label class="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">\r
                Ng\xE0y k\u1EBFt th\xFAc\r
              </label>\r
              <div class="relative flex items-center cursor-pointer" (click)="openPicker(endDatePicker)">\r
                <input \r
                  type="text" \r
                  [value]="endDateDisplay()"\r
                  (input)="onDateTextInput($event, 'endDate')"\r
                  placeholder="Ch\u1ECDn ng\xE0y (dd/MM/yyyy)"\r
                  maxlength="10"\r
                  class="w-full px-3.5 py-2.5 pr-10 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition font-semibold text-gray-900 bg-white cursor-pointer"\r
                >\r
                <div class="absolute right-2.5 flex items-center text-gray-400 hover:text-blue-600 transition p-1">\r
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>\r
                  </svg>\r
                  <input \r
                    #endDatePicker\r
                    type="date" \r
                    [value]="classForm.get('endDate')?.value"\r
                    (change)="onDatePickerChange($event, 'endDate')"\r
                    class="sr-only opacity-0 w-0 h-0 absolute pointer-events-none"\r
                  >\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- Modal Footer Actions -->\r
          <div class="flex justify-end space-x-3 pt-4 border-t border-gray-100">\r
            <button \r
              type="button" \r
              (click)="closeModal()"\r
              class="px-4 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition"\r
            >\r
              H\u1EE7y b\u1ECF\r
            </button>\r
            <button \r
              type="submit"\r
              class="px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition shadow-md"\r
            >\r
              {{ isEditing() ? 'C\u1EADp nh\u1EADt' : 'Th\xEAm m\u1EDBi' }}\r
            </button>\r
          </div>\r
        </form>\r
      </div>\r
    </div>\r
  </div>\r
}\r
\r
<!-- MODAL X\xC1C NH\u1EACN X\xD3A -->\r
@if (isDeleteModalOpen()) {\r
  <div class="fixed inset-0 z-50 overflow-y-auto">\r
    <div class="fixed inset-0 bg-gray-900/50 backdrop-blur-sm transition-opacity" (click)="closeDeleteModal()"></div>\r
\r
    <div class="flex min-h-full items-center justify-center p-4">\r
      <div class="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl transition-all border border-gray-100">\r
        <div class="flex items-center space-x-3 text-red-600 mb-4">\r
          <div class="p-3 bg-red-50 rounded-full">\r
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>\r
            </svg>\r
          </div>\r
          <h3 class="text-lg font-bold text-gray-900">X\xE1c nh\u1EADn x\xF3a l\u1EDBp h\u1ECDc</h3>\r
        </div>\r
        <p class="text-sm text-gray-600 mb-6">\r
          B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a l\u1EDBp h\u1ECDc n\xE0y kh\xF4ng? H\xE0nh \u0111\u1ED9ng n\xE0y kh\xF4ng th\u1EC3 ho\xE0n t\xE1c v\xE0 c\xF3 th\u1EC3 \u1EA3nh h\u01B0\u1EDFng \u0111\u1EBFn l\u1ECBch h\u1ECDc v\xE0 danh s\xE1ch h\u1ECDc vi\xEAn trong l\u1EDBp.\r
        </p>\r
        <div class="flex justify-end space-x-3">\r
          <button \r
            (click)="closeDeleteModal()"\r
            class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition"\r
          >\r
            H\u1EE7y\r
          </button>\r
          <button \r
            (click)="confirmDelete()"\r
            class="px-4 py-2 text-sm font-semibold text-white bg-red-600 hover:bg-red-700 rounded-xl transition shadow-md"\r
          >\r
            \u0110\u1ED3ng \xFD X\xF3a\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
}\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClassesComponent, { className: "ClassesComponent", filePath: "src/app/features/academic/pages/classes/classes.component.ts", lineNumber: 22 });
})();

// src/app/features/academic/pages/room/room.component.ts
var _forTrack04 = ($index, $item) => $item.id;
function RoomComponent_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function RoomComponent_button_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 29);
    \u0275\u0275element(2, "path", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Th\xEAm ph\xF2ng h\u1ECDc ");
    \u0275\u0275elementEnd();
  }
}
function RoomComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 31);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 32);
    \u0275\u0275element(3, "circle", 33)(4, "path", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " \u0110ang t\u1EA3i danh s\xE1ch ph\xF2ng h\u1ECDc... ");
    \u0275\u0275elementEnd()();
  }
}
function RoomComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 31);
    \u0275\u0275text(2, " Kh\xF4ng t\xECm th\u1EA5y ph\xF2ng h\u1ECDc n\xE0o. ");
    \u0275\u0275elementEnd()();
  }
}
function RoomComponent_Conditional_33_For_1_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 42);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 49);
    \u0275\u0275element(2, "path", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Ph\xF2ng Online (Zoom/LMS) ");
    \u0275\u0275elementEnd();
  }
}
function RoomComponent_Conditional_33_For_1_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 43);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 49);
    \u0275\u0275element(2, "path", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Ph\xF2ng h\u1ECDc th\u1EF1c t\u1EBF ");
    \u0275\u0275elementEnd();
  }
}
function RoomComponent_Conditional_33_For_1_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 52);
    \u0275\u0275listener("click", function RoomComponent_Conditional_33_For_1_button_17_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const r_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openModal(r_r4));
    });
    \u0275\u0275text(1, " Ch\u1EC9nh s\u1EEDa ");
    \u0275\u0275elementEnd();
  }
}
function RoomComponent_Conditional_33_For_1_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 53);
    \u0275\u0275listener("click", function RoomComponent_Conditional_33_For_1_button_18_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const r_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDelete(r_r4.id));
    });
    \u0275\u0275text(1, " X\xF3a ");
    \u0275\u0275elementEnd();
  }
}
function RoomComponent_Conditional_33_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 35)(1, "td", 36);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 37)(4, "div", 38);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 39);
    \u0275\u0275element(6, "path", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "td", 41);
    \u0275\u0275conditionalCreate(10, RoomComponent_Conditional_33_For_1_Conditional_10_Template, 4, 0, "span", 42)(11, RoomComponent_Conditional_33_For_1_Conditional_11_Template, 4, 0, "span", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 44);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 45);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 46);
    \u0275\u0275template(17, RoomComponent_Conditional_33_For_1_button_17_Template, 2, 0, "button", 47)(18, RoomComponent_Conditional_33_For_1_button_18_Template, 2, 0, "button", 48);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r4 = ctx.$implicit;
    const \u0275$index_81_r6 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" #", ctx_r1.startIndex() + \u0275$index_81_r6, " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(r_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(r_r4.roomType === "LMS" || r_r4.roomType === "ONLINE" ? 10 : 11);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", r_r4.capacity || "N/A", " ch\u1ED7 ng\u1ED3i ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatDateVN(r_r4.createdAt), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("hasPermission", "ROOM_UPDATE");
    \u0275\u0275advance();
    \u0275\u0275property("hasPermission", "ROOM_DELETE");
  }
}
function RoomComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, RoomComponent_Conditional_33_For_1_Template, 19, 7, "tr", 35, _forTrack04);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r1.rooms());
  }
}
function RoomComponent_Conditional_57_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 66);
    \u0275\u0275text(1, "T\xEAn ph\xF2ng h\u1ECDc kh\xF4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng");
    \u0275\u0275elementEnd();
  }
}
function RoomComponent_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 54);
    \u0275\u0275listener("click", function RoomComponent_Conditional_57_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 55)(3, "div", 56)(4, "div", 57)(5, "h3", 58);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 59);
    \u0275\u0275listener("click", function RoomComponent_Conditional_57_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 60);
    \u0275\u0275element(9, "path", 61);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(10, "form", 62);
    \u0275\u0275listener("ngSubmit", function RoomComponent_Conditional_57_Template_form_ngSubmit_10_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(11, "div")(12, "label", 63);
    \u0275\u0275text(13, " T\xEAn ph\xF2ng h\u1ECDc ");
    \u0275\u0275elementStart(14, "span", 64);
    \u0275\u0275text(15, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(16, "input", 65);
    \u0275\u0275conditionalCreate(17, RoomComponent_Conditional_57_Conditional_17_Template, 2, 0, "p", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 67)(19, "div")(20, "label", 63);
    \u0275\u0275text(21, " Lo\u1EA1i ph\xF2ng ");
    \u0275\u0275elementStart(22, "span", 64);
    \u0275\u0275text(23, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "select", 68)(25, "option", 69);
    \u0275\u0275text(26, "Ph\xF2ng h\u1ECDc th\u1EF1c t\u1EBF (PHYSICAL)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "option", 70);
    \u0275\u0275text(28, "Ph\xF2ng Online / Zoom (LMS)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div")(30, "label", 63);
    \u0275\u0275text(31, " S\u1EE9c ch\u1EE9a (S\u1ED1 ch\u1ED7) ");
    \u0275\u0275elementStart(32, "span", 64);
    \u0275\u0275text(33, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(34, "input", 71);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 72)(36, "button", 73);
    \u0275\u0275listener("click", function RoomComponent_Conditional_57_Template_button_click_36_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275text(37, " H\u1EE7y b\u1ECF ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "button", 74);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isEditing() ? "C\u1EADp nh\u1EADt th\xF4ng tin ph\xF2ng h\u1ECDc" : "Th\xEAm ph\xF2ng h\u1ECDc m\u1EDBi", " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("formGroup", ctx_r1.roomForm);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("border-red-400", ctx_r1.isFormSubmitted() && ((tmp_3_0 = ctx_r1.roomForm.get("name")) == null ? null : tmp_3_0.invalid));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isFormSubmitted() && ((tmp_4_0 = ctx_r1.roomForm.get("name")) == null ? null : tmp_4_0.hasError("required")) ? 17 : -1);
    \u0275\u0275advance(17);
    \u0275\u0275classProp("border-red-400", ctx_r1.isFormSubmitted() && ((tmp_5_0 = ctx_r1.roomForm.get("capacity")) == null ? null : tmp_5_0.invalid));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isEditing() ? "C\u1EADp nh\u1EADt" : "Th\xEAm m\u1EDBi", " ");
  }
}
function RoomComponent_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 54);
    \u0275\u0275listener("click", function RoomComponent_Conditional_58_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDeleteModal());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 55)(3, "div", 75)(4, "div", 76)(5, "div", 77);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 78);
    \u0275\u0275element(7, "path", 79);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "h3", 80);
    \u0275\u0275text(9, "X\xE1c nh\u1EADn x\xF3a ph\xF2ng h\u1ECDc");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "p", 81);
    \u0275\u0275text(11, " B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a ph\xF2ng h\u1ECDc n\xE0y kh\xF4ng? H\xE0nh \u0111\u1ED9ng n\xE0y kh\xF4ng th\u1EC3 ho\xE0n t\xE1c v\xE0 c\xF3 th\u1EC3 \u1EA3nh h\u01B0\u1EDFng \u0111\u1EBFn l\u1ECBch h\u1ECDc \u0111\xE3 x\u1EBFp. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 82)(13, "button", 83);
    \u0275\u0275listener("click", function RoomComponent_Conditional_58_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDeleteModal());
    });
    \u0275\u0275text(14, " H\u1EE7y ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 84);
    \u0275\u0275listener("click", function RoomComponent_Conditional_58_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmDelete());
    });
    \u0275\u0275text(16, " \u0110\u1ED3ng \xFD X\xF3a ");
    \u0275\u0275elementEnd()()()()();
  }
}
var RoomComponent = class _RoomComponent {
  roomService = inject(RoomService);
  fb = inject(FormBuilder);
  destroyRef = inject(DestroyRef);
  toastService = inject(ToastService);
  // State
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
  // Modal State
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
  isFormSubmitted = signal(false, ...ngDevMode ? [{ debugName: "isFormSubmitted" }] : (
    /* istanbul ignore next */
    []
  ));
  // Delete Modal State
  isDeleteModalOpen = signal(false, ...ngDevMode ? [{ debugName: "isDeleteModalOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  idToDelete = signal(null, ...ngDevMode ? [{ debugName: "idToDelete" }] : (
    /* istanbul ignore next */
    []
  ));
  // Computed signals
  totalPages = computed(() => Math.max(1, Math.ceil(this.totalElements() / this.pageSize())), ...ngDevMode ? [{ debugName: "totalPages" }] : (
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
    this.roomForm = this.fb.group({
      name: ["", [Validators.required, Validators.maxLength(100)]],
      roomType: ["PHYSICAL", [Validators.required]],
      capacity: [30, [Validators.required, Validators.min(1)]]
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
    this.roomService.getRooms({
      page: this.currentPage(),
      size: this.pageSize(),
      keyword: this.searchControl.value || ""
    }).subscribe({
      next: (response) => {
        this.rooms.set(response.content || []);
        this.totalElements.set(response.totalElements || 0);
        this.isLoading.set(false);
      },
      error: (err) => {
        this.toastService.error("L\u1ED7i", "L\u1ED7i khi t\u1EA3i danh s\xE1ch ph\xF2ng h\u1ECDc: " + (err.error?.message || err.message));
        this.isLoading.set(false);
      }
    });
  }
  changePage(page) {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage.set(page);
      this.loadData();
    }
  }
  openModal(room) {
    this.isFormSubmitted.set(false);
    if (room && room.id) {
      this.isEditing.set(true);
      this.currentId.set(room.id);
      this.roomForm.patchValue({
        name: room.name,
        roomType: room.roomType || "PHYSICAL",
        capacity: room.capacity || 30
      });
    } else {
      if (this.isEditing() || !this.roomForm.get("name")?.value) {
        this.isEditing.set(false);
        this.currentId.set(null);
        this.resetAddForm();
      } else {
        this.isEditing.set(false);
        this.currentId.set(null);
      }
    }
    this.isModalOpen.set(true);
  }
  resetAddForm() {
    this.roomForm.reset({
      name: "",
      roomType: "PHYSICAL",
      capacity: 30
    });
  }
  closeModal() {
    this.isModalOpen.set(false);
  }
  onSubmit() {
    this.isFormSubmitted.set(true);
    if (this.roomForm.invalid) {
      this.toastService.error("Th\xF4ng b\xE1o", "Vui l\xF2ng ki\u1EC3m tra l\u1EA1i c\xE1c tr\u01B0\u1EDDng d\u1EEF li\u1EC7u b\u1EAFt bu\u1ED9c");
      return;
    }
    const formValues = this.roomForm.value;
    const roomData = {
      name: formValues.name,
      roomType: formValues.roomType,
      capacity: Number(formValues.capacity)
    };
    if (this.isEditing() && this.currentId()) {
      this.roomService.update(this.currentId(), roomData).subscribe({
        next: (res) => {
          this.toastService.success("Th\xE0nh c\xF4ng", res.message || "C\u1EADp nh\u1EADt ph\xF2ng h\u1ECDc th\xE0nh c\xF4ng!");
          this.closeModal();
          this.loadData();
        },
        error: (err) => {
          this.toastService.error("L\u1ED7i", "C\u1EADp nh\u1EADt th\u1EA5t b\u1EA1i: " + (err.error?.message || err.message));
        }
      });
    } else {
      this.roomService.create(roomData).subscribe({
        next: (res) => {
          this.toastService.success("Th\xE0nh c\xF4ng", res.message || "T\u1EA1o m\u1EDBi ph\xF2ng h\u1ECDc th\xE0nh c\xF4ng!");
          this.resetAddForm();
          this.closeModal();
          this.loadData();
        },
        error: (err) => {
          this.toastService.error("L\u1ED7i", "T\u1EA1o m\u1EDBi th\u1EA5t b\u1EA1i: " + (err.error?.message || err.message));
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
  confirmDelete() {
    const id = this.idToDelete();
    if (!id)
      return;
    this.roomService.delete(id).subscribe({
      next: (res) => {
        this.toastService.success("Th\xE0nh c\xF4ng", res.message || "X\xF3a ph\xF2ng h\u1ECDc th\xE0nh c\xF4ng!");
        this.isDeleteModalOpen.set(false);
        this.idToDelete.set(null);
        this.loadData();
      },
      error: (err) => {
        this.toastService.error("L\u1ED7i", "X\xF3a th\u1EA5t b\u1EA1i: " + (err.error?.message || err.message));
      }
    });
  }
  closeDeleteModal() {
    this.isDeleteModalOpen.set(false);
    this.idToDelete.set(null);
  }
  formatDateVN(dateStr) {
    if (!dateStr)
      return "---";
    const parts = dateStr.split("T")[0].split("-");
    if (parts.length === 3) {
      return `${parts[2]}/${parts[1]}/${parts[0]}`;
    }
    return dateStr;
  }
  static \u0275fac = function RoomComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RoomComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RoomComponent, selectors: [["app-room"]], decls: 59, vars: 12, consts: [[1, "space-y-6"], [1, "flex", "flex-col", "md:flex-row", "md:items-end", "justify-between", "gap-4", "pb-4", "border-b", "border-gray-100"], [1, "text-2xl", "font-extrabold", "text-gray-900", "tracking-tight"], [1, "text-sm", "text-gray-500", "mt-1"], [1, "flex", "space-x-3"], [1, "relative"], [1, "absolute", "inset-y-0", "left-0", "flex", "items-center", "pl-3", "pointer-events-none"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-gray-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], ["type", "text", "placeholder", "T\xECm t\xEAn ph\xF2ng h\u1ECDc...", 1, "bg-white", "border", "border-gray-200", "text-gray-900", "text-sm", "rounded-xl", "focus:ring-2", "focus:ring-blue-100", "focus:border-blue-500", "block", "w-64", "pl-10", "p-2.5", "outline-none", "transition", "shadow-sm", 3, "formControl"], ["class", "bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-5 rounded-xl flex items-center transition shadow-md hover:shadow-lg text-sm", 3, "click", 4, "hasPermission"], [1, "bg-white", "rounded-2xl", "shadow-sm", "border", "border-gray-100", "overflow-hidden"], [1, "w-full", "text-sm", "text-left", "text-gray-500"], [1, "text-xs", "text-gray-500", "uppercase", "bg-gray-50/80", "border-b", "border-gray-100", "font-semibold"], ["scope", "col", 1, "px-6", "py-4"], ["scope", "col", 1, "px-6", "py-4", "text-right"], [1, "divide-y", "divide-gray-50"], [1, "flex", "flex-col", "sm:flex-row", "items-center", "justify-between", "px-6", "py-4", "bg-gray-50/80", "border-t", "border-gray-100", "rounded-b-2xl", "gap-3"], [1, "text-sm", "text-gray-500"], [1, "font-semibold", "text-gray-900"], [1, "flex", "space-x-2"], [1, "px-3.5", "py-1.5", "text-sm", "font-medium", "text-gray-700", "bg-white", "border", "border-gray-300", "rounded-lg", "hover:bg-gray-50", "disabled:opacity-50", "disabled:cursor-not-allowed", "transition", "shadow-sm", "flex", "items-center", 3, "click", "disabled"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "mr-1"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 19l-7-7 7-7"], [1, "px-3.5", "py-1.5", "text-sm", "font-semibold", "text-gray-800", "bg-gray-100", "rounded-lg", "flex", "items-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "ml-1"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 5l7 7-7 7"], [1, "fixed", "inset-0", "z-50", "overflow-y-auto"], [1, "bg-blue-600", "hover:bg-blue-700", "text-white", "font-semibold", "py-2.5", "px-5", "rounded-xl", "flex", "items-center", "transition", "shadow-md", "hover:shadow-lg", "text-sm", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "mr-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 4v16m8-8H4"], ["colspan", "6", 1, "px-6", "py-12", "text-center", "text-gray-500"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "mx-auto", "h-8", "w-8", "text-blue-500", "mb-3"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"], [1, "bg-white", "hover:bg-blue-50/50", "transition", "duration-200"], [1, "px-6", "py-4", "font-semibold", "text-gray-400"], [1, "px-6", "py-4", "font-bold", "text-gray-900"], [1, "flex", "items-center", "space-x-2"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-blue-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0v-5a2 2 0 012-2h2a2 2 0 012 2v5m-6 0h6"], [1, "px-6", "py-4"], [1, "px-3", "py-1", "text-xs", "font-semibold", "rounded-full", "border", "bg-purple-50", "text-purple-700", "border-purple-200", "inline-flex", "items-center"], [1, "px-3", "py-1", "text-xs", "font-semibold", "rounded-full", "border", "bg-emerald-50", "text-emerald-700", "border-emerald-200", "inline-flex", "items-center"], [1, "px-6", "py-4", "font-semibold", "text-gray-900"], [1, "px-6", "py-4", "text-xs", "font-medium", "text-gray-500", "font-mono"], [1, "px-6", "py-4", "text-right", "space-x-3"], ["class", "font-medium text-blue-600 hover:text-blue-800 transition text-sm", 3, "click", 4, "hasPermission"], ["class", "font-medium text-red-600 hover:text-red-800 transition text-sm", 3, "click", 4, "hasPermission"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-3.5", "h-3.5", "mr-1"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"], [1, "font-medium", "text-blue-600", "hover:text-blue-800", "transition", "text-sm", 3, "click"], [1, "font-medium", "text-red-600", "hover:text-red-800", "transition", "text-sm", 3, "click"], [1, "fixed", "inset-0", "bg-gray-900/50", "backdrop-blur-sm", "transition-opacity", 3, "click"], [1, "flex", "min-h-full", "items-center", "justify-center", "p-4"], [1, "relative", "w-full", "max-w-lg", "rounded-2xl", "bg-white", "p-6", "shadow-2xl", "transition-all", "border", "border-gray-100"], [1, "flex", "items-center", "justify-between", "pb-4", "border-b", "border-gray-100"], [1, "text-xl", "font-bold", "text-gray-900"], [1, "text-gray-400", "hover:text-gray-600", "transition", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "mt-4", "space-y-4", 3, "ngSubmit", "formGroup"], [1, "block", "text-xs", "font-semibold", "text-gray-700", "uppercase", "tracking-wider", "mb-1"], [1, "text-red-500"], ["type", "text", "formControlName", "name", "placeholder", "VD: Ph\xF2ng A101, Ph\xF2ng Lab 02, Zoom Online...", 1, "w-full", "px-3.5", "py-2.5", "border", "border-gray-200", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-100", "focus:border-blue-500", "outline-none", "transition", "font-semibold", "text-gray-900"], [1, "mt-1", "text-xs", "text-red-500"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "gap-4"], ["formControlName", "roomType", 1, "w-full", "px-3.5", "py-2.5", "border", "border-gray-200", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-100", "focus:border-blue-500", "outline-none", "transition", "bg-white", "font-semibold", "text-gray-900"], ["value", "PHYSICAL"], ["value", "LMS"], ["type", "number", "formControlName", "capacity", "placeholder", "30", 1, "w-full", "px-3.5", "py-2.5", "border", "border-gray-200", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-100", "focus:border-blue-500", "outline-none", "transition", "font-semibold", "text-gray-900"], [1, "flex", "justify-end", "space-x-3", "pt-4", "border-t", "border-gray-100"], ["type", "button", 1, "px-4", "py-2.5", "text-sm", "font-medium", "text-gray-700", "bg-white", "border", "border-gray-300", "rounded-xl", "hover:bg-gray-50", "transition", 3, "click"], ["type", "submit", 1, "px-5", "py-2.5", "text-sm", "font-semibold", "text-white", "bg-blue-600", "hover:bg-blue-700", "rounded-xl", "transition", "shadow-md"], [1, "relative", "w-full", "max-w-md", "rounded-2xl", "bg-white", "p-6", "shadow-2xl", "transition-all", "border", "border-gray-100"], [1, "flex", "items-center", "space-x-3", "text-red-600", "mb-4"], [1, "p-3", "bg-red-50", "rounded-full"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"], [1, "text-lg", "font-bold", "text-gray-900"], [1, "text-sm", "text-gray-600", "mb-6"], [1, "flex", "justify-end", "space-x-3"], [1, "px-4", "py-2", "text-sm", "font-medium", "text-gray-700", "bg-white", "border", "border-gray-300", "rounded-xl", "hover:bg-gray-50", "transition", 3, "click"], [1, "px-4", "py-2", "text-sm", "font-semibold", "text-white", "bg-red-600", "hover:bg-red-700", "rounded-xl", "transition", "shadow-md", 3, "click"]], template: function RoomComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Qu\u1EA3n l\xFD Ph\xF2ng h\u1ECDc");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Qu\u1EA3n l\xFD c\u01A1 s\u1EDF v\u1EADt ch\u1EA5t, ph\xF2ng h\u1ECDc tr\u1EF1c ti\u1EBFp v\xE0 ph\xF2ng h\u1ECDc tr\u1EF1c tuy\u1EBFn (LMS / Zoom)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 4)(8, "div", 5)(9, "div", 6);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(10, "svg", 7);
      \u0275\u0275element(11, "path", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275element(12, "input", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275template(13, RoomComponent_button_13_Template, 4, 0, "button", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 11)(15, "table", 12)(16, "thead", 13)(17, "tr")(18, "th", 14);
      \u0275\u0275text(19, "STT");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "th", 14);
      \u0275\u0275text(21, "T\xEAn ph\xF2ng h\u1ECDc");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "th", 14);
      \u0275\u0275text(23, "Lo\u1EA1i ph\xF2ng");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "th", 14);
      \u0275\u0275text(25, "S\u1EE9c ch\u1EE9a");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "th", 14);
      \u0275\u0275text(27, "Ng\xE0y t\u1EA1o");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "th", 15);
      \u0275\u0275text(29, "Thao t\xE1c");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(30, "tbody", 16);
      \u0275\u0275conditionalCreate(31, RoomComponent_Conditional_31_Template, 6, 0, "tr")(32, RoomComponent_Conditional_32_Template, 3, 0, "tr")(33, RoomComponent_Conditional_33_Template, 2, 0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "div", 17)(35, "div", 18);
      \u0275\u0275text(36, " Hi\u1EC3n th\u1ECB ");
      \u0275\u0275elementStart(37, "span", 19);
      \u0275\u0275text(38);
      \u0275\u0275elementEnd();
      \u0275\u0275text(39, " - ");
      \u0275\u0275elementStart(40, "span", 19);
      \u0275\u0275text(41);
      \u0275\u0275elementEnd();
      \u0275\u0275text(42, " trong t\u1ED5ng s\u1ED1 ");
      \u0275\u0275elementStart(43, "span", 19);
      \u0275\u0275text(44);
      \u0275\u0275elementEnd();
      \u0275\u0275text(45, " k\u1EBFt qu\u1EA3 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "div", 20)(47, "button", 21);
      \u0275\u0275listener("click", function RoomComponent_Template_button_click_47_listener() {
        return ctx.changePage(ctx.currentPage() - 1);
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(48, "svg", 22);
      \u0275\u0275element(49, "path", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275text(50, " Tr\u01B0\u1EDBc ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(51, "span", 24);
      \u0275\u0275text(52);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "button", 21);
      \u0275\u0275listener("click", function RoomComponent_Template_button_click_53_listener() {
        return ctx.changePage(ctx.currentPage() + 1);
      });
      \u0275\u0275text(54, " Sau ");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(55, "svg", 25);
      \u0275\u0275element(56, "path", 26);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275conditionalCreate(57, RoomComponent_Conditional_57_Template, 40, 8, "div", 27);
      \u0275\u0275conditionalCreate(58, RoomComponent_Conditional_58_Template, 17, 0, "div", 27);
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275property("formControl", ctx.searchControl);
      \u0275\u0275advance();
      \u0275\u0275property("hasPermission", "ROOM_CREATE");
      \u0275\u0275advance(18);
      \u0275\u0275conditional(ctx.isLoading() && ctx.rooms().length === 0 ? 31 : ctx.rooms().length === 0 ? 32 : 33);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.startIndex());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.endIndex());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.totalElements());
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", ctx.currentPage() === 1);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate2(" ", ctx.currentPage(), " / ", ctx.totalPages(), " ");
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.currentPage() >= ctx.totalPages());
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.isModalOpen() ? 57 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isDeleteModalOpen() ? 58 : -1);
    }
  }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormControlDirective, FormGroupDirective, FormControlName, HasPermissionDirective], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RoomComponent, [{
    type: Component,
    args: [{ selector: "app-room", imports: [CommonModule, ReactiveFormsModule, HasPermissionDirective], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="space-y-6">\r
  <!-- PAGE HEADER -->\r
  <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-gray-100">\r
    <div>\r
      <h1 class="text-2xl font-extrabold text-gray-900 tracking-tight">Qu\u1EA3n l\xFD Ph\xF2ng h\u1ECDc</h1>\r
      <p class="text-sm text-gray-500 mt-1">Qu\u1EA3n l\xFD c\u01A1 s\u1EDF v\u1EADt ch\u1EA5t, ph\xF2ng h\u1ECDc tr\u1EF1c ti\u1EBFp v\xE0 ph\xF2ng h\u1ECDc tr\u1EF1c tuy\u1EBFn (LMS / Zoom)</p>\r
    </div>\r
    <div class="flex space-x-3">\r
      <!-- Search Input -->\r
      <div class="relative">\r
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">\r
          <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>\r
          </svg>\r
        </div>\r
        <input \r
          type="text" \r
          [formControl]="searchControl" \r
          placeholder="T\xECm t\xEAn ph\xF2ng h\u1ECDc..." \r
          class="bg-white border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-500 block w-64 pl-10 p-2.5 outline-none transition shadow-sm"\r
        >\r
      </div>\r
\r
      <!-- Add Button -->\r
      <button \r
        *hasPermission="'ROOM_CREATE'"\r
        (click)="openModal()" \r
        class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-5 rounded-xl flex items-center transition shadow-md hover:shadow-lg text-sm"\r
      >\r
        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>\r
        </svg>\r
        Th\xEAm ph\xF2ng h\u1ECDc\r
      </button>\r
    </div>\r
  </div>\r
\r
  <!-- DATA TABLE -->\r
  <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">\r
    <table class="w-full text-sm text-left text-gray-500">\r
      <thead class="text-xs text-gray-500 uppercase bg-gray-50/80 border-b border-gray-100 font-semibold">\r
        <tr>\r
          <th scope="col" class="px-6 py-4">STT</th>\r
          <th scope="col" class="px-6 py-4">T\xEAn ph\xF2ng h\u1ECDc</th>\r
          <th scope="col" class="px-6 py-4">Lo\u1EA1i ph\xF2ng</th>\r
          <th scope="col" class="px-6 py-4">S\u1EE9c ch\u1EE9a</th>\r
          <th scope="col" class="px-6 py-4">Ng\xE0y t\u1EA1o</th>\r
          <th scope="col" class="px-6 py-4 text-right">Thao t\xE1c</th>\r
        </tr>\r
      </thead>\r
      <tbody class="divide-y divide-gray-50">\r
        @if (isLoading() && rooms().length === 0) {\r
          <tr>\r
            <td colspan="6" class="px-6 py-12 text-center text-gray-500">\r
              <svg class="animate-spin mx-auto h-8 w-8 text-blue-500 mb-3" fill="none" viewBox="0 0 24 24">\r
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>\r
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>\r
              </svg>\r
              \u0110ang t\u1EA3i danh s\xE1ch ph\xF2ng h\u1ECDc...\r
            </td>\r
          </tr>\r
        } @else if (rooms().length === 0) {\r
          <tr>\r
            <td colspan="6" class="px-6 py-12 text-center text-gray-500">\r
              Kh\xF4ng t\xECm th\u1EA5y ph\xF2ng h\u1ECDc n\xE0o.\r
            </td>\r
          </tr>\r
        } @else {\r
          @for (r of rooms(); track r.id; let idx = $index) {\r
            <tr class="bg-white hover:bg-blue-50/50 transition duration-200">\r
              <!-- Index -->\r
              <td class="px-6 py-4 font-semibold text-gray-400">\r
                #{{ startIndex() + idx }}\r
              </td>\r
              <!-- Name -->\r
              <td class="px-6 py-4 font-bold text-gray-900">\r
                <div class="flex items-center space-x-2">\r
                  <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0v-5a2 2 0 012-2h2a2 2 0 012 2v5m-6 0h6"></path>\r
                  </svg>\r
                  <span>{{ r.name }}</span>\r
                </div>\r
              </td>\r
              <!-- Room Type Badge -->\r
              <td class="px-6 py-4">\r
                @if (r.roomType === 'LMS' || r.roomType === 'ONLINE') {\r
                  <span class="px-3 py-1 text-xs font-semibold rounded-full border bg-purple-50 text-purple-700 border-purple-200 inline-flex items-center">\r
                    <svg class="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>\r
                    </svg>\r
                    Ph\xF2ng Online (Zoom/LMS)\r
                  </span>\r
                } @else {\r
                  <span class="px-3 py-1 text-xs font-semibold rounded-full border bg-emerald-50 text-emerald-700 border-emerald-200 inline-flex items-center">\r
                    <svg class="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"></path>\r
                    </svg>\r
                    Ph\xF2ng h\u1ECDc th\u1EF1c t\u1EBF\r
                  </span>\r
                }\r
              </td>\r
              <!-- Capacity -->\r
              <td class="px-6 py-4 font-semibold text-gray-900">\r
                {{ r.capacity || 'N/A' }} ch\u1ED7 ng\u1ED3i\r
              </td>\r
              <!-- Created Date -->\r
              <td class="px-6 py-4 text-xs font-medium text-gray-500 font-mono">\r
                {{ formatDateVN(r.createdAt) }}\r
              </td>\r
              <!-- Actions -->\r
              <td class="px-6 py-4 text-right space-x-3">\r
                <button \r
                  *hasPermission="'ROOM_UPDATE'"\r
                  (click)="openModal(r)" \r
                  class="font-medium text-blue-600 hover:text-blue-800 transition text-sm"\r
                >\r
                  Ch\u1EC9nh s\u1EEDa\r
                </button>\r
                <button \r
                  *hasPermission="'ROOM_DELETE'"\r
                  (click)="onDelete(r.id!)" \r
                  class="font-medium text-red-600 hover:text-red-800 transition text-sm"\r
                >\r
                  X\xF3a\r
                </button>\r
              </td>\r
            </tr>\r
          }\r
        }\r
      </tbody>\r
    </table>\r
\r
    <!-- PAGINATION FOOTER -->\r
    <div class="flex flex-col sm:flex-row items-center justify-between px-6 py-4 bg-gray-50/80 border-t border-gray-100 rounded-b-2xl gap-3">\r
      <div class="text-sm text-gray-500">\r
        Hi\u1EC3n th\u1ECB <span class="font-semibold text-gray-900">{{ startIndex() }}</span> \r
        - <span class="font-semibold text-gray-900">{{ endIndex() }}</span> \r
        trong t\u1ED5ng s\u1ED1 <span class="font-semibold text-gray-900">{{ totalElements() }}</span> k\u1EBFt qu\u1EA3\r
      </div>\r
      \r
      <div class="flex space-x-2">\r
        <button \r
          (click)="changePage(currentPage() - 1)" \r
          [disabled]="currentPage() === 1"\r
          class="px-3.5 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition shadow-sm flex items-center"\r
        >\r
          <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>\r
          </svg>\r
          Tr\u01B0\u1EDBc\r
        </button>\r
\r
        <span class="px-3.5 py-1.5 text-sm font-semibold text-gray-800 bg-gray-100 rounded-lg flex items-center">\r
          {{ currentPage() }} / {{ totalPages() }}\r
        </span>\r
\r
        <button \r
          (click)="changePage(currentPage() + 1)" \r
          [disabled]="currentPage() >= totalPages()"\r
          class="px-3.5 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition shadow-sm flex items-center"\r
        >\r
          Sau\r
          <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>\r
          </svg>\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- MODAL TH\xCAM / C\u1EACP NH\u1EACT PH\xD2NG H\u1ECCC -->\r
@if (isModalOpen()) {\r
  <div class="fixed inset-0 z-50 overflow-y-auto">\r
    <div class="fixed inset-0 bg-gray-900/50 backdrop-blur-sm transition-opacity" (click)="closeModal()"></div>\r
\r
    <div class="flex min-h-full items-center justify-center p-4">\r
      <div class="relative w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl transition-all border border-gray-100">\r
        \r
        <!-- Modal Header -->\r
        <div class="flex items-center justify-between pb-4 border-b border-gray-100">\r
          <h3 class="text-xl font-bold text-gray-900">\r
            {{ isEditing() ? 'C\u1EADp nh\u1EADt th\xF4ng tin ph\xF2ng h\u1ECDc' : 'Th\xEAm ph\xF2ng h\u1ECDc m\u1EDBi' }}\r
          </h3>\r
          <button (click)="closeModal()" class="text-gray-400 hover:text-gray-600 transition">\r
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>\r
            </svg>\r
          </button>\r
        </div>\r
\r
        <!-- Modal Form -->\r
        <form [formGroup]="roomForm" (ngSubmit)="onSubmit()" class="mt-4 space-y-4">\r
          \r
          <!-- Name -->\r
          <div>\r
            <label class="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">\r
              T\xEAn ph\xF2ng h\u1ECDc <span class="text-red-500">*</span>\r
            </label>\r
            <input \r
              type="text" \r
              formControlName="name"\r
              placeholder="VD: Ph\xF2ng A101, Ph\xF2ng Lab 02, Zoom Online..."\r
              class="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition font-semibold text-gray-900"\r
              [class.border-red-400]="isFormSubmitted() && roomForm.get('name')?.invalid"\r
            >\r
            @if (isFormSubmitted() && roomForm.get('name')?.hasError('required')) {\r
              <p class="mt-1 text-xs text-red-500">T\xEAn ph\xF2ng h\u1ECDc kh\xF4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng</p>\r
            }\r
          </div>\r
\r
          <!-- Room Type & Capacity Grid -->\r
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">\r
            <div>\r
              <label class="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">\r
                Lo\u1EA1i ph\xF2ng <span class="text-red-500">*</span>\r
              </label>\r
              <select \r
                formControlName="roomType"\r
                class="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition bg-white font-semibold text-gray-900"\r
              >\r
                <option value="PHYSICAL">Ph\xF2ng h\u1ECDc th\u1EF1c t\u1EBF (PHYSICAL)</option>\r
                <option value="LMS">Ph\xF2ng Online / Zoom (LMS)</option>\r
              </select>\r
            </div>\r
\r
            <div>\r
              <label class="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">\r
                S\u1EE9c ch\u1EE9a (S\u1ED1 ch\u1ED7) <span class="text-red-500">*</span>\r
              </label>\r
              <input \r
                type="number" \r
                formControlName="capacity"\r
                placeholder="30"\r
                class="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition font-semibold text-gray-900"\r
                [class.border-red-400]="isFormSubmitted() && roomForm.get('capacity')?.invalid"\r
              >\r
            </div>\r
          </div>\r
\r
          <!-- Modal Footer Actions -->\r
          <div class="flex justify-end space-x-3 pt-4 border-t border-gray-100">\r
            <button \r
              type="button" \r
              (click)="closeModal()"\r
              class="px-4 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition"\r
            >\r
              H\u1EE7y b\u1ECF\r
            </button>\r
            <button \r
              type="submit"\r
              class="px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition shadow-md"\r
            >\r
              {{ isEditing() ? 'C\u1EADp nh\u1EADt' : 'Th\xEAm m\u1EDBi' }}\r
            </button>\r
          </div>\r
        </form>\r
      </div>\r
    </div>\r
  </div>\r
}\r
\r
<!-- MODAL X\xC1C NH\u1EACN X\xD3A -->\r
@if (isDeleteModalOpen()) {\r
  <div class="fixed inset-0 z-50 overflow-y-auto">\r
    <div class="fixed inset-0 bg-gray-900/50 backdrop-blur-sm transition-opacity" (click)="closeDeleteModal()"></div>\r
\r
    <div class="flex min-h-full items-center justify-center p-4">\r
      <div class="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl transition-all border border-gray-100">\r
        <div class="flex items-center space-x-3 text-red-600 mb-4">\r
          <div class="p-3 bg-red-50 rounded-full">\r
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>\r
            </svg>\r
          </div>\r
          <h3 class="text-lg font-bold text-gray-900">X\xE1c nh\u1EADn x\xF3a ph\xF2ng h\u1ECDc</h3>\r
        </div>\r
        <p class="text-sm text-gray-600 mb-6">\r
          B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a ph\xF2ng h\u1ECDc n\xE0y kh\xF4ng? H\xE0nh \u0111\u1ED9ng n\xE0y kh\xF4ng th\u1EC3 ho\xE0n t\xE1c v\xE0 c\xF3 th\u1EC3 \u1EA3nh h\u01B0\u1EDFng \u0111\u1EBFn l\u1ECBch h\u1ECDc \u0111\xE3 x\u1EBFp.\r
        </p>\r
        <div class="flex justify-end space-x-3">\r
          <button \r
            (click)="closeDeleteModal()"\r
            class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition"\r
          >\r
            H\u1EE7y\r
          </button>\r
          <button \r
            (click)="confirmDelete()"\r
            class="px-4 py-2 text-sm font-semibold text-white bg-red-600 hover:bg-red-700 rounded-xl transition shadow-md"\r
          >\r
            \u0110\u1ED3ng \xFD X\xF3a\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
}\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RoomComponent, { className: "RoomComponent", filePath: "src/app/features/academic/pages/room/room.component.ts", lineNumber: 18 });
})();

// src/app/modules/teaching/models/teaching-assignment.model.ts
var TEACHING_ROLE_MAP = {
  MAIN_TEACHER: { label: "Gi\u1EA3ng vi\xEAn ch\xEDnh", bgClass: "bg-blue-50", textClass: "text-blue-700", borderClass: "border-blue-200" },
  ASSISTANT_TEACHER: { label: "Tr\u1EE3 gi\u1EA3ng", bgClass: "bg-purple-50", textClass: "text-purple-700", borderClass: "border-purple-200" },
  TUTOR: { label: "Gia s\u01B0 / H\u01B0\u1EDBng d\u1EABn", bgClass: "bg-amber-50", textClass: "text-amber-700", borderClass: "border-amber-200" }
};
var TEACHING_ROLE_OPTIONS = [
  { value: "MAIN_TEACHER", label: "Gi\u1EA3ng vi\xEAn ch\xEDnh" },
  { value: "ASSISTANT_TEACHER", label: "Tr\u1EE3 gi\u1EA3ng" },
  { value: "TUTOR", label: "Gia s\u01B0 / H\u01B0\u1EDBng d\u1EABn" }
];

// src/app/features/academic/pages/teaching-assignment/teaching-assignment.component.ts
var _forTrack05 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.value;
function TeachingAssignmentComponent_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 30);
    \u0275\u0275listener("click", function TeachingAssignmentComponent_button_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 31);
    \u0275\u0275element(2, "path", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " T\u1EA1o ph\xE2n c\xF4ng m\u1EDBi ");
    \u0275\u0275elementEnd();
  }
}
function TeachingAssignmentComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 33);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 34);
    \u0275\u0275element(3, "circle", 35)(4, "path", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " \u0110ang t\u1EA3i danh s\xE1ch ph\xE2n c\xF4ng... ");
    \u0275\u0275elementEnd()();
  }
}
function TeachingAssignmentComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 33);
    \u0275\u0275text(2, " Kh\xF4ng t\xECm th\u1EA5y ph\xE2n c\xF4ng gi\u1EA3ng d\u1EA1y n\xE0o. ");
    \u0275\u0275elementEnd()();
  }
}
function TeachingAssignmentComponent_Conditional_35_For_1_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 48);
    \u0275\u0275element(1, "span", 53);
    \u0275\u0275text(2, " \u0110ang ph\xE2n c\xF4ng ");
    \u0275\u0275elementEnd();
  }
}
function TeachingAssignmentComponent_Conditional_35_For_1_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275element(1, "span", 54);
    \u0275\u0275text(2, " T\u1EA1m ng\u01B0ng ");
    \u0275\u0275elementEnd();
  }
}
function TeachingAssignmentComponent_Conditional_35_For_1_button_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 55);
    \u0275\u0275listener("click", function TeachingAssignmentComponent_Conditional_35_For_1_button_28_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const a_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openModal(a_r4));
    });
    \u0275\u0275text(1, " Ch\u1EC9nh s\u1EEDa ");
    \u0275\u0275elementEnd();
  }
}
function TeachingAssignmentComponent_Conditional_35_For_1_button_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 56);
    \u0275\u0275listener("click", function TeachingAssignmentComponent_Conditional_35_For_1_button_29_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const a_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDelete(a_r4.id));
    });
    \u0275\u0275text(1, " X\xF3a ");
    \u0275\u0275elementEnd();
  }
}
function TeachingAssignmentComponent_Conditional_35_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 37)(1, "td", 38);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 39)(4, "div", 40);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 41);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td", 39)(9, "div", 40);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 42);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td", 39)(14, "span", 43);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td", 44)(17, "div", 45)(18, "span", 46);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 47);
    \u0275\u0275text(21, "\u2794");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 46);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "td", 39);
    \u0275\u0275conditionalCreate(25, TeachingAssignmentComponent_Conditional_35_For_1_Conditional_25_Template, 3, 0, "span", 48)(26, TeachingAssignmentComponent_Conditional_35_For_1_Conditional_26_Template, 3, 0, "span", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "td", 50);
    \u0275\u0275template(28, TeachingAssignmentComponent_Conditional_35_For_1_button_28_Template, 2, 0, "button", 51)(29, TeachingAssignmentComponent_Conditional_35_For_1_button_29_Template, 2, 0, "button", 52);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r4 = ctx.$implicit;
    const \u0275$index_84_r6 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" #", ctx_r1.startIndex() + \u0275$index_84_r6, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(a_r4.teacherName || "---");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r4.staffCode || "M\xE3 NV");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(a_r4.className || "---");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r4.classCode || "M\xE3 l\u1EDBp");
    const badge_r7 = ctx_r1.getRoleBadge(a_r4.role);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(badge_r7.bgClass + " " + badge_r7.textClass + " " + badge_r7.borderClass);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", badge_r7.label, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.formatDateVN(a_r4.assignedDate));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.formatDateVN(a_r4.endDate));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(a_r4.status === "ACTIVE" ? 25 : 26);
    \u0275\u0275advance(3);
    \u0275\u0275property("hasPermission", "ASSIGNMENT_UPDATE");
    \u0275\u0275advance();
    \u0275\u0275property("hasPermission", "ASSIGNMENT_DELETE");
  }
}
function TeachingAssignmentComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, TeachingAssignmentComponent_Conditional_35_For_1_Template, 30, 13, "tr", 37, _forTrack05);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r1.assignments());
  }
}
function TeachingAssignmentComponent_Conditional_59_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 70);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const st_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", st_r9.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3("", st_r9.fullName, " (", st_r9.staffCode, " - ", ctx_r1.formatStaffTypeLabel(st_r9.staffType), ")");
  }
}
function TeachingAssignmentComponent_Conditional_59_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 71);
    \u0275\u0275text(1, "Vui l\xF2ng ch\u1ECDn gi\u1EA3ng vi\xEAn/nh\xE2n s\u1EF1");
    \u0275\u0275elementEnd();
  }
}
function TeachingAssignmentComponent_Conditional_59_For_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 70);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cls_r10 = ctx.$implicit;
    \u0275\u0275property("value", cls_r10.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", cls_r10.code, " - ", cls_r10.name);
  }
}
function TeachingAssignmentComponent_Conditional_59_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 71);
    \u0275\u0275text(1, "Vui l\xF2ng ch\u1ECDn l\u1EDBp h\u1ECDc");
    \u0275\u0275elementEnd();
  }
}
function TeachingAssignmentComponent_Conditional_59_For_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 70);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r11 = ctx.$implicit;
    \u0275\u0275property("value", r_r11.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r11.label);
  }
}
function TeachingAssignmentComponent_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 57);
    \u0275\u0275listener("click", function TeachingAssignmentComponent_Conditional_59_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 58)(3, "div", 59)(4, "div", 60)(5, "h3", 61);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 62);
    \u0275\u0275listener("click", function TeachingAssignmentComponent_Conditional_59_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 63);
    \u0275\u0275element(9, "path", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(10, "form", 65);
    \u0275\u0275listener("ngSubmit", function TeachingAssignmentComponent_Conditional_59_Template_form_ngSubmit_10_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(11, "div")(12, "label", 66);
    \u0275\u0275text(13, " Gi\u1EA3ng vi\xEAn / Nh\xE2n s\u1EF1 ");
    \u0275\u0275elementStart(14, "span", 67);
    \u0275\u0275text(15, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "select", 68)(17, "option", 69);
    \u0275\u0275text(18, "-- Ch\u1ECDn Gi\u1EA3ng vi\xEAn --");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(19, TeachingAssignmentComponent_Conditional_59_For_20_Template, 2, 4, "option", 70, _forTrack05);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(21, TeachingAssignmentComponent_Conditional_59_Conditional_21_Template, 2, 0, "p", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div")(23, "label", 66);
    \u0275\u0275text(24, " L\u1EDBp h\u1ECDc ph\xE2n c\xF4ng ");
    \u0275\u0275elementStart(25, "span", 67);
    \u0275\u0275text(26, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "select", 72)(28, "option", 69);
    \u0275\u0275text(29, "-- Ch\u1ECDn L\u1EDBp h\u1ECDc --");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(30, TeachingAssignmentComponent_Conditional_59_For_31_Template, 2, 3, "option", 70, _forTrack05);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(32, TeachingAssignmentComponent_Conditional_59_Conditional_32_Template, 2, 0, "p", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 73)(34, "div")(35, "label", 66);
    \u0275\u0275text(36, " Vai tr\xF2 gi\u1EA3ng d\u1EA1y ");
    \u0275\u0275elementStart(37, "span", 67);
    \u0275\u0275text(38, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "select", 74);
    \u0275\u0275repeaterCreate(40, TeachingAssignmentComponent_Conditional_59_For_41_Template, 2, 2, "option", 70, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div")(43, "label", 66);
    \u0275\u0275text(44, " Tr\u1EA1ng th\xE1i ");
    \u0275\u0275elementStart(45, "span", 67);
    \u0275\u0275text(46, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "select", 75)(48, "option", 76);
    \u0275\u0275text(49, "\u0110ang ph\xE2n c\xF4ng (ACTIVE)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "option", 77);
    \u0275\u0275text(51, "T\u1EA1m ng\u01B0ng (INACTIVE)");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(52, "div", 73)(53, "div")(54, "label", 66);
    \u0275\u0275text(55, " Ng\xE0y b\u1EAFt \u0111\u1EA7u ph\xE2n c\xF4ng ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "div", 78);
    \u0275\u0275listener("click", function TeachingAssignmentComponent_Conditional_59_Template_div_click_56_listener() {
      \u0275\u0275restoreView(_r8);
      const startDatePicker_r12 = \u0275\u0275reference(62);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openPicker(startDatePicker_r12));
    });
    \u0275\u0275elementStart(57, "input", 79);
    \u0275\u0275listener("input", function TeachingAssignmentComponent_Conditional_59_Template_input_input_57_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDateTextInput($event, "assignedDate"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "div", 80);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(59, "svg", 63);
    \u0275\u0275element(60, "path", 81);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(61, "input", 82, 0);
    \u0275\u0275listener("change", function TeachingAssignmentComponent_Conditional_59_Template_input_change_61_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDatePickerChange($event, "assignedDate"));
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(63, "div")(64, "label", 66);
    \u0275\u0275text(65, " Ng\xE0y k\u1EBFt th\xFAc ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "div", 78);
    \u0275\u0275listener("click", function TeachingAssignmentComponent_Conditional_59_Template_div_click_66_listener() {
      \u0275\u0275restoreView(_r8);
      const endDatePicker_r13 = \u0275\u0275reference(72);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openPicker(endDatePicker_r13));
    });
    \u0275\u0275elementStart(67, "input", 79);
    \u0275\u0275listener("input", function TeachingAssignmentComponent_Conditional_59_Template_input_input_67_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDateTextInput($event, "endDate"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "div", 80);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(69, "svg", 63);
    \u0275\u0275element(70, "path", 81);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(71, "input", 82, 1);
    \u0275\u0275listener("change", function TeachingAssignmentComponent_Conditional_59_Template_input_change_71_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDatePickerChange($event, "endDate"));
    });
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(73, "div", 83)(74, "button", 84);
    \u0275\u0275listener("click", function TeachingAssignmentComponent_Conditional_59_Template_button_click_74_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275text(75, " H\u1EE7y b\u1ECF ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "button", 85);
    \u0275\u0275text(77);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_10_0;
    let tmp_13_0;
    let tmp_15_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isEditing() ? "C\u1EADp nh\u1EADt ph\xE2n c\xF4ng gi\u1EA3ng d\u1EA1y" : "T\u1EA1o ph\xE2n c\xF4ng gi\u1EA3ng d\u1EA1y m\u1EDBi", " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("formGroup", ctx_r1.assignmentForm);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("border-red-400", ctx_r1.isFormSubmitted() && ((tmp_5_0 = ctx_r1.assignmentForm.get("staffId")) == null ? null : tmp_5_0.invalid));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.availableStaffs());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isFormSubmitted() && ((tmp_7_0 = ctx_r1.assignmentForm.get("staffId")) == null ? null : tmp_7_0.hasError("required")) ? 21 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("border-red-400", ctx_r1.isFormSubmitted() && ((tmp_8_0 = ctx_r1.assignmentForm.get("classId")) == null ? null : tmp_8_0.invalid));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.availableClasses());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isFormSubmitted() && ((tmp_10_0 = ctx_r1.assignmentForm.get("classId")) == null ? null : tmp_10_0.hasError("required")) ? 32 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275repeater(ctx_r1.roleOptions);
    \u0275\u0275advance(17);
    \u0275\u0275property("value", ctx_r1.startDateDisplay());
    \u0275\u0275advance(4);
    \u0275\u0275property("value", (tmp_13_0 = ctx_r1.assignmentForm.get("assignedDate")) == null ? null : tmp_13_0.value);
    \u0275\u0275advance(6);
    \u0275\u0275property("value", ctx_r1.endDateDisplay());
    \u0275\u0275advance(4);
    \u0275\u0275property("value", (tmp_15_0 = ctx_r1.assignmentForm.get("endDate")) == null ? null : tmp_15_0.value);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isEditing() ? "C\u1EADp nh\u1EADt" : "T\u1EA1o m\u1EDBi", " ");
  }
}
function TeachingAssignmentComponent_Conditional_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 57);
    \u0275\u0275listener("click", function TeachingAssignmentComponent_Conditional_60_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDeleteModal());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 58)(3, "div", 86)(4, "div", 87)(5, "div", 88);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 89);
    \u0275\u0275element(7, "path", 90);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "h3", 91);
    \u0275\u0275text(9, "X\xE1c nh\u1EADn x\xF3a ph\xE2n c\xF4ng");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "p", 92);
    \u0275\u0275text(11, " B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a ph\xE2n c\xF4ng gi\u1EA3ng d\u1EA1y n\xE0y kh\xF4ng? H\xE0nh \u0111\u1ED9ng n\xE0y kh\xF4ng th\u1EC3 ho\xE0n t\xE1c. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 93)(13, "button", 94);
    \u0275\u0275listener("click", function TeachingAssignmentComponent_Conditional_60_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDeleteModal());
    });
    \u0275\u0275text(14, " H\u1EE7y ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 95);
    \u0275\u0275listener("click", function TeachingAssignmentComponent_Conditional_60_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmDelete());
    });
    \u0275\u0275text(16, " \u0110\u1ED3ng \xFD X\xF3a ");
    \u0275\u0275elementEnd()()()()();
  }
}
var TeachingAssignmentComponent = class _TeachingAssignmentComponent {
  assignmentService = inject(TeachingAssignmentService);
  classesService = inject(ClassService);
  staffService = inject(StaffService);
  fb = inject(FormBuilder);
  destroyRef = inject(DestroyRef);
  toastService = inject(ToastService);
  // Constants
  roleOptions = TEACHING_ROLE_OPTIONS;
  roleMap = TEACHING_ROLE_MAP;
  // State
  assignments = signal([], ...ngDevMode ? [{ debugName: "assignments" }] : (
    /* istanbul ignore next */
    []
  ));
  availableClasses = signal([], ...ngDevMode ? [{ debugName: "availableClasses" }] : (
    /* istanbul ignore next */
    []
  ));
  availableStaffs = signal([], ...ngDevMode ? [{ debugName: "availableStaffs" }] : (
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
  // Modal State
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
  isFormSubmitted = signal(false, ...ngDevMode ? [{ debugName: "isFormSubmitted" }] : (
    /* istanbul ignore next */
    []
  ));
  // Date Displays
  startDateDisplay = signal("", ...ngDevMode ? [{ debugName: "startDateDisplay" }] : (
    /* istanbul ignore next */
    []
  ));
  endDateDisplay = signal("", ...ngDevMode ? [{ debugName: "endDateDisplay" }] : (
    /* istanbul ignore next */
    []
  ));
  // Delete Modal State
  isDeleteModalOpen = signal(false, ...ngDevMode ? [{ debugName: "isDeleteModalOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  idToDelete = signal(null, ...ngDevMode ? [{ debugName: "idToDelete" }] : (
    /* istanbul ignore next */
    []
  ));
  // Computed signals
  totalPages = computed(() => Math.max(1, Math.ceil(this.totalElements() / this.pageSize())), ...ngDevMode ? [{ debugName: "totalPages" }] : (
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
    this.loadDropdownOptions();
  }
  initForm() {
    this.assignmentForm = this.fb.group({
      staffId: ["", [Validators.required]],
      classId: ["", [Validators.required]],
      role: ["MAIN_TEACHER", [Validators.required]],
      assignedDate: [""],
      endDate: [""],
      status: ["ACTIVE", [Validators.required]]
    });
  }
  setupSearch() {
    this.searchControl.valueChanges.pipe(debounceTime(400), distinctUntilChanged(), takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.currentPage.set(1);
      this.loadData();
    });
  }
  loadDropdownOptions() {
    this.classesService.getClasses({ size: 100 }).subscribe({
      next: (res) => this.availableClasses.set(res.content || []),
      error: () => {
      }
    });
    this.staffService.getTeachers().subscribe({
      next: (res) => this.availableStaffs.set(res || []),
      error: (err) => {
        this.toastService.error("L\u1ED7i", "Kh\xF4ng th\u1EC3 t\u1EA3i danh s\xE1ch gi\u1EA3ng vi\xEAn: " + (err.error?.message || err.message));
      }
    });
  }
  loadData() {
    this.isLoading.set(true);
    this.assignmentService.getAllAssignments({
      page: this.currentPage(),
      size: this.pageSize(),
      keyword: this.searchControl.value || ""
    }).subscribe({
      next: (response) => {
        this.assignments.set(response.content || []);
        this.totalElements.set(response.totalElements || 0);
        this.isLoading.set(false);
      },
      error: (err) => {
        this.toastService.error("L\u1ED7i", "L\u1ED7i khi t\u1EA3i danh s\xE1ch ph\xE2n c\xF4ng: " + (err.error?.message || err.message));
        this.isLoading.set(false);
      }
    });
  }
  changePage(page) {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage.set(page);
      this.loadData();
    }
  }
  openModal(item) {
    this.isFormSubmitted.set(false);
    this.loadDropdownOptions();
    if (item && item.id) {
      this.isEditing.set(true);
      this.currentId.set(item.id);
      const startIso = item.assignedDate ? item.assignedDate.split("T")[0] : "";
      const endIso = item.endDate ? item.endDate.split("T")[0] : "";
      this.startDateDisplay.set(this.formatDateVN(startIso));
      this.endDateDisplay.set(this.formatDateVN(endIso));
      this.assignmentForm.patchValue({
        staffId: item.staffId,
        classId: item.classId,
        role: item.role || "MAIN_TEACHER",
        assignedDate: startIso,
        endDate: endIso,
        status: item.status || "ACTIVE"
      });
    } else {
      if (this.isEditing() || !this.assignmentForm.get("staffId")?.value) {
        this.isEditing.set(false);
        this.currentId.set(null);
        this.resetAddForm();
      } else {
        this.isEditing.set(false);
        this.currentId.set(null);
      }
    }
    this.isModalOpen.set(true);
  }
  resetAddForm() {
    this.startDateDisplay.set("");
    this.endDateDisplay.set("");
    this.assignmentForm.reset({
      staffId: "",
      classId: "",
      role: "MAIN_TEACHER",
      assignedDate: "",
      endDate: "",
      status: "ACTIVE"
    });
  }
  closeModal() {
    this.isModalOpen.set(false);
  }
  openPicker(pickerInput) {
    try {
      if (pickerInput && typeof pickerInput.showPicker === "function") {
        pickerInput.showPicker();
      } else if (pickerInput && typeof pickerInput.click === "function") {
        pickerInput.click();
      }
    } catch (e) {
      if (pickerInput && typeof pickerInput.click === "function") {
        pickerInput.click();
      }
    }
  }
  onDateTextInput(event, field) {
    const input = event.target;
    let value = input.value.replace(/\D/g, "");
    if (value.length > 8)
      value = value.substring(0, 8);
    let formatted = "";
    if (value.length > 0) {
      formatted = value.substring(0, 2);
      if (value.length >= 3) {
        formatted += "/" + value.substring(2, 4);
      }
      if (value.length >= 5) {
        formatted += "/" + value.substring(4, 8);
      }
    }
    input.value = formatted;
    if (field === "assignedDate") {
      this.startDateDisplay.set(formatted);
    } else {
      this.endDateDisplay.set(formatted);
    }
    if (formatted.length === 10) {
      const parts = formatted.split("/");
      const day = parts[0];
      const month = parts[1];
      const year = parts[2];
      const isoDate = `${year}-${month}-${day}`;
      this.assignmentForm.get(field)?.setValue(isoDate);
    } else {
      this.assignmentForm.get(field)?.setValue("");
    }
  }
  onDatePickerChange(event, field) {
    const input = event.target;
    const isoDate = input.value;
    if (isoDate) {
      this.assignmentForm.get(field)?.setValue(isoDate);
      const formatted = this.formatDateVN(isoDate);
      if (field === "assignedDate") {
        this.startDateDisplay.set(formatted);
      } else {
        this.endDateDisplay.set(formatted);
      }
    }
  }
  onSubmit() {
    this.isFormSubmitted.set(true);
    if (this.assignmentForm.invalid) {
      this.toastService.error("Th\xF4ng b\xE1o", "Vui l\xF2ng \u0111i\u1EC1n \u0111\u1EA7y \u0111\u1EE7 c\xE1c tr\u01B0\u1EDDng b\u1EAFt bu\u1ED9c");
      return;
    }
    const formValues = this.assignmentForm.value;
    if (formValues.assignedDate && formValues.endDate && formValues.assignedDate > formValues.endDate) {
      this.toastService.error("L\u1ED7i ng\xE0y th\xE1ng", "Ng\xE0y k\u1EBFt th\xFAc ph\u1EA3i sau ho\u1EB7c b\u1EB1ng ng\xE0y ph\xE2n c\xF4ng");
      return;
    }
    const dto = {
      staffId: Number(formValues.staffId),
      classId: Number(formValues.classId),
      role: formValues.role,
      assignedDate: formValues.assignedDate || void 0,
      endDate: formValues.endDate || void 0,
      status: formValues.status
    };
    if (this.isEditing() && this.currentId()) {
      this.assignmentService.update(this.currentId(), dto).subscribe({
        next: (res) => {
          this.toastService.success("Th\xE0nh c\xF4ng", res.message || "C\u1EADp nh\u1EADt ph\xE2n c\xF4ng th\xE0nh c\xF4ng!");
          this.closeModal();
          this.loadData();
        },
        error: (err) => {
          this.toastService.error("L\u1ED7i", "C\u1EADp nh\u1EADt th\u1EA5t b\u1EA1i: " + (err.error?.message || err.message));
        }
      });
    } else {
      this.assignmentService.create(dto).subscribe({
        next: (res) => {
          this.toastService.success("Th\xE0nh c\xF4ng", res.message || "T\u1EA1o m\u1EDBi ph\xE2n c\xF4ng th\xE0nh c\xF4ng!");
          this.resetAddForm();
          this.closeModal();
          this.loadData();
        },
        error: (err) => {
          this.toastService.error("L\u1ED7i", "T\u1EA1o m\u1EDBi th\u1EA5t b\u1EA1i: " + (err.error?.message || err.message));
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
  confirmDelete() {
    const id = this.idToDelete();
    if (!id)
      return;
    this.assignmentService.delete(id).subscribe({
      next: (res) => {
        this.toastService.success("Th\xE0nh c\xF4ng", res.message || "X\xF3a ph\xE2n c\xF4ng th\xE0nh c\xF4ng!");
        this.isDeleteModalOpen.set(false);
        this.idToDelete.set(null);
        this.loadData();
      },
      error: (err) => {
        this.toastService.error("L\u1ED7i", "X\xF3a th\u1EA5t b\u1EA1i: " + (err.error?.message || err.message));
      }
    });
  }
  closeDeleteModal() {
    this.isDeleteModalOpen.set(false);
    this.idToDelete.set(null);
  }
  getRoleBadge(roleKey) {
    if (!roleKey)
      return { label: "Gi\u1EA3ng vi\xEAn", bgClass: "bg-gray-50", textClass: "text-gray-700", borderClass: "border-gray-200" };
    return this.roleMap[roleKey] || { label: roleKey, bgClass: "bg-gray-50", textClass: "text-gray-700", borderClass: "border-gray-200" };
  }
  formatDateVN(dateStr) {
    if (!dateStr)
      return "---";
    const parts = dateStr.split("T")[0].split("-");
    if (parts.length === 3) {
      return `${parts[2]}/${parts[1]}/${parts[0]}`;
    }
    return dateStr;
  }
  formatStaffTypeLabel(type) {
    if (!type)
      return "Gi\u1EA3ng vi\xEAn";
    const typeUpper = type.toUpperCase();
    if (typeUpper === "TEACHER")
      return "Gi\u1EA3ng vi\xEAn";
    if (typeUpper === "TEACHING_ASSISTANT")
      return "Tr\u1EE3 gi\u1EA3ng";
    if (typeUpper === "FOREIGN_TEACHER" || typeUpper === "NATIVE_TEACHER")
      return "Gi\xE1o vi\xEAn n\u01B0\u1EDBc ngo\xE0i";
    if (typeUpper === "GUEST_TEACHER")
      return "Gi\u1EA3ng vi\xEAn th\u1EC9nh gi\u1EA3ng";
    return type;
  }
  static \u0275fac = function TeachingAssignmentComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TeachingAssignmentComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TeachingAssignmentComponent, selectors: [["app-teaching-assignment"]], decls: 61, vars: 12, consts: [["startDatePicker", ""], ["endDatePicker", ""], [1, "space-y-6"], [1, "flex", "flex-col", "md:flex-row", "md:items-end", "justify-between", "gap-4", "pb-4", "border-b", "border-gray-100"], [1, "text-2xl", "font-extrabold", "text-gray-900", "tracking-tight"], [1, "text-sm", "text-gray-500", "mt-1"], [1, "flex", "space-x-3"], [1, "relative"], [1, "absolute", "inset-y-0", "left-0", "flex", "items-center", "pl-3", "pointer-events-none"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-gray-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], ["type", "text", "placeholder", "T\xECm gi\u1EA3ng vi\xEAn ho\u1EB7c t\xEAn l\u1EDBp...", 1, "bg-white", "border", "border-gray-200", "text-gray-900", "text-sm", "rounded-xl", "focus:ring-2", "focus:ring-blue-100", "focus:border-blue-500", "block", "w-64", "pl-10", "p-2.5", "outline-none", "transition", "shadow-sm", 3, "formControl"], ["class", "bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-5 rounded-xl flex items-center transition shadow-md hover:shadow-lg text-sm", 3, "click", 4, "hasPermission"], [1, "bg-white", "rounded-2xl", "shadow-sm", "border", "border-gray-100", "overflow-hidden"], [1, "w-full", "text-sm", "text-left", "text-gray-500"], [1, "text-xs", "text-gray-500", "uppercase", "bg-gray-50/80", "border-b", "border-gray-100", "font-semibold"], ["scope", "col", 1, "px-6", "py-4"], ["scope", "col", 1, "px-6", "py-4", "text-right"], [1, "divide-y", "divide-gray-50"], [1, "flex", "flex-col", "sm:flex-row", "items-center", "justify-between", "px-6", "py-4", "bg-gray-50/80", "border-t", "border-gray-100", "rounded-b-2xl", "gap-3"], [1, "text-sm", "text-gray-500"], [1, "font-semibold", "text-gray-900"], [1, "flex", "space-x-2"], [1, "px-3.5", "py-1.5", "text-sm", "font-medium", "text-gray-700", "bg-white", "border", "border-gray-300", "rounded-lg", "hover:bg-gray-50", "disabled:opacity-50", "disabled:cursor-not-allowed", "transition", "shadow-sm", "flex", "items-center", 3, "click", "disabled"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "mr-1"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 19l-7-7 7-7"], [1, "px-3.5", "py-1.5", "text-sm", "font-semibold", "text-gray-800", "bg-gray-100", "rounded-lg", "flex", "items-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "ml-1"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 5l7 7-7 7"], [1, "fixed", "inset-0", "z-50", "overflow-y-auto"], [1, "bg-blue-600", "hover:bg-blue-700", "text-white", "font-semibold", "py-2.5", "px-5", "rounded-xl", "flex", "items-center", "transition", "shadow-md", "hover:shadow-lg", "text-sm", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "mr-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 4v16m8-8H4"], ["colspan", "7", 1, "px-6", "py-12", "text-center", "text-gray-500"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "mx-auto", "h-8", "w-8", "text-blue-500", "mb-3"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"], [1, "bg-white", "hover:bg-blue-50/50", "transition", "duration-200"], [1, "px-6", "py-4", "font-semibold", "text-gray-400"], [1, "px-6", "py-4"], [1, "font-bold", "text-gray-900"], [1, "font-mono", "text-xs", "text-blue-600", "mt-0.5"], [1, "font-mono", "text-xs", "text-gray-500", "mt-0.5"], [1, "px-3", "py-1", "text-xs", "font-semibold", "rounded-full", "border", "inline-flex", "items-center"], [1, "px-6", "py-4", "text-xs", "font-medium", "text-gray-600"], [1, "flex", "items-center", "space-x-1.5"], [1, "px-2", "py-0.5", "bg-gray-100", "text-gray-700", "rounded", "font-mono"], [1, "text-gray-400"], [1, "px-3", "py-1", "text-xs", "font-semibold", "rounded-full", "border", "bg-emerald-50", "text-emerald-700", "border-emerald-200", "inline-flex", "items-center"], [1, "px-3", "py-1", "text-xs", "font-semibold", "rounded-full", "border", "bg-gray-50", "text-gray-600", "border-gray-200", "inline-flex", "items-center"], [1, "px-6", "py-4", "text-right", "space-x-3"], ["class", "font-medium text-blue-600 hover:text-blue-800 transition text-sm", 3, "click", 4, "hasPermission"], ["class", "font-medium text-red-600 hover:text-red-800 transition text-sm", 3, "click", 4, "hasPermission"], [1, "w-1.5", "h-1.5", "rounded-full", "mr-1.5", "bg-emerald-500"], [1, "w-1.5", "h-1.5", "rounded-full", "mr-1.5", "bg-gray-400"], [1, "font-medium", "text-blue-600", "hover:text-blue-800", "transition", "text-sm", 3, "click"], [1, "font-medium", "text-red-600", "hover:text-red-800", "transition", "text-sm", 3, "click"], [1, "fixed", "inset-0", "bg-gray-900/50", "backdrop-blur-sm", "transition-opacity", 3, "click"], [1, "flex", "min-h-full", "items-center", "justify-center", "p-4"], [1, "relative", "w-full", "max-w-lg", "rounded-2xl", "bg-white", "p-6", "shadow-2xl", "transition-all", "border", "border-gray-100"], [1, "flex", "items-center", "justify-between", "pb-4", "border-b", "border-gray-100"], [1, "text-xl", "font-bold", "text-gray-900"], [1, "text-gray-400", "hover:text-gray-600", "transition", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "mt-4", "space-y-4", 3, "ngSubmit", "formGroup"], [1, "block", "text-xs", "font-semibold", "text-gray-700", "uppercase", "tracking-wider", "mb-1"], [1, "text-red-500"], ["formControlName", "staffId", 1, "w-full", "px-3.5", "py-2.5", "border", "border-gray-200", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-100", "focus:border-blue-500", "outline-none", "transition", "bg-white", "font-semibold", "text-gray-900"], ["value", ""], [3, "value"], [1, "mt-1", "text-xs", "text-red-500"], ["formControlName", "classId", 1, "w-full", "px-3.5", "py-2.5", "border", "border-gray-200", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-100", "focus:border-blue-500", "outline-none", "transition", "bg-white", "font-semibold", "text-gray-900"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "gap-4"], ["formControlName", "role", 1, "w-full", "px-3.5", "py-2.5", "border", "border-gray-200", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-100", "focus:border-blue-500", "outline-none", "transition", "bg-white", "font-semibold", "text-gray-900"], ["formControlName", "status", 1, "w-full", "px-3.5", "py-2.5", "border", "border-gray-200", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-100", "focus:border-blue-500", "outline-none", "transition", "bg-white", "font-semibold", "text-gray-900"], ["value", "ACTIVE"], ["value", "INACTIVE"], [1, "relative", "flex", "items-center", "cursor-pointer", 3, "click"], ["type", "text", "placeholder", "Ch\u1ECDn ng\xE0y (dd/MM/yyyy)", "maxlength", "10", 1, "w-full", "px-3.5", "py-2.5", "pr-10", "border", "border-gray-200", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-100", "focus:border-blue-500", "outline-none", "transition", "font-semibold", "text-gray-900", "bg-white", "cursor-pointer", 3, "input", "value"], [1, "absolute", "right-2.5", "flex", "items-center", "text-gray-400", "hover:text-blue-600", "transition", "p-1"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"], ["type", "date", 1, "sr-only", "opacity-0", "w-0", "h-0", "absolute", "pointer-events-none", 3, "change", "value"], [1, "flex", "justify-end", "space-x-3", "pt-4", "border-t", "border-gray-100"], ["type", "button", 1, "px-4", "py-2.5", "text-sm", "font-medium", "text-gray-700", "bg-white", "border", "border-gray-300", "rounded-xl", "hover:bg-gray-50", "transition", 3, "click"], ["type", "submit", 1, "px-5", "py-2.5", "text-sm", "font-semibold", "text-white", "bg-blue-600", "hover:bg-blue-700", "rounded-xl", "transition", "shadow-md"], [1, "relative", "w-full", "max-w-md", "rounded-2xl", "bg-white", "p-6", "shadow-2xl", "transition-all", "border", "border-gray-100"], [1, "flex", "items-center", "space-x-3", "text-red-600", "mb-4"], [1, "p-3", "bg-red-50", "rounded-full"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"], [1, "text-lg", "font-bold", "text-gray-900"], [1, "text-sm", "text-gray-600", "mb-6"], [1, "flex", "justify-end", "space-x-3"], [1, "px-4", "py-2", "text-sm", "font-medium", "text-gray-700", "bg-white", "border", "border-gray-300", "rounded-xl", "hover:bg-gray-50", "transition", 3, "click"], [1, "px-4", "py-2", "text-sm", "font-semibold", "text-white", "bg-red-600", "hover:bg-red-700", "rounded-xl", "transition", "shadow-md", 3, "click"]], template: function TeachingAssignmentComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div")(3, "h1", 4);
      \u0275\u0275text(4, "Ph\xE2n c\xF4ng Gi\u1EA3ng d\u1EA1y");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 5);
      \u0275\u0275text(6, "Qu\u1EA3n l\xFD ph\xE2n c\xF4ng Gi\u1EA3ng vi\xEAn ch\xEDnh, Tr\u1EE3 gi\u1EA3ng v\xE0 C\u1ED1 v\u1EA5n h\u1ECDc t\u1EADp cho c\xE1c l\u1EDBp \u0111\xE0o t\u1EA1o");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 6)(8, "div", 7)(9, "div", 8);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(10, "svg", 9);
      \u0275\u0275element(11, "path", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275element(12, "input", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275template(13, TeachingAssignmentComponent_button_13_Template, 4, 0, "button", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 13)(15, "table", 14)(16, "thead", 15)(17, "tr")(18, "th", 16);
      \u0275\u0275text(19, "STT");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "th", 16);
      \u0275\u0275text(21, "Gi\u1EA3ng vi\xEAn / Nh\xE2n s\u1EF1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "th", 16);
      \u0275\u0275text(23, "L\u1EDBp h\u1ECDc ph\xE2n c\xF4ng");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "th", 16);
      \u0275\u0275text(25, "Vai tr\xF2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "th", 16);
      \u0275\u0275text(27, "Th\u1EDDi gian ph\xE2n c\xF4ng");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "th", 16);
      \u0275\u0275text(29, "Tr\u1EA1ng th\xE1i");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "th", 17);
      \u0275\u0275text(31, "Thao t\xE1c");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(32, "tbody", 18);
      \u0275\u0275conditionalCreate(33, TeachingAssignmentComponent_Conditional_33_Template, 6, 0, "tr")(34, TeachingAssignmentComponent_Conditional_34_Template, 3, 0, "tr")(35, TeachingAssignmentComponent_Conditional_35_Template, 2, 0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "div", 19)(37, "div", 20);
      \u0275\u0275text(38, " Hi\u1EC3n th\u1ECB ");
      \u0275\u0275elementStart(39, "span", 21);
      \u0275\u0275text(40);
      \u0275\u0275elementEnd();
      \u0275\u0275text(41, " - ");
      \u0275\u0275elementStart(42, "span", 21);
      \u0275\u0275text(43);
      \u0275\u0275elementEnd();
      \u0275\u0275text(44, " trong t\u1ED5ng s\u1ED1 ");
      \u0275\u0275elementStart(45, "span", 21);
      \u0275\u0275text(46);
      \u0275\u0275elementEnd();
      \u0275\u0275text(47, " k\u1EBFt qu\u1EA3 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "div", 22)(49, "button", 23);
      \u0275\u0275listener("click", function TeachingAssignmentComponent_Template_button_click_49_listener() {
        return ctx.changePage(ctx.currentPage() - 1);
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(50, "svg", 24);
      \u0275\u0275element(51, "path", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275text(52, " Tr\u01B0\u1EDBc ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(53, "span", 26);
      \u0275\u0275text(54);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "button", 23);
      \u0275\u0275listener("click", function TeachingAssignmentComponent_Template_button_click_55_listener() {
        return ctx.changePage(ctx.currentPage() + 1);
      });
      \u0275\u0275text(56, " Sau ");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(57, "svg", 27);
      \u0275\u0275element(58, "path", 28);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275conditionalCreate(59, TeachingAssignmentComponent_Conditional_59_Template, 78, 13, "div", 29);
      \u0275\u0275conditionalCreate(60, TeachingAssignmentComponent_Conditional_60_Template, 17, 0, "div", 29);
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275property("formControl", ctx.searchControl);
      \u0275\u0275advance();
      \u0275\u0275property("hasPermission", "ASSIGNMENT_CREATE");
      \u0275\u0275advance(20);
      \u0275\u0275conditional(ctx.isLoading() && ctx.assignments().length === 0 ? 33 : ctx.assignments().length === 0 ? 34 : 35);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.startIndex());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.endIndex());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.totalElements());
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", ctx.currentPage() === 1);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate2(" ", ctx.currentPage(), " / ", ctx.totalPages(), " ");
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.currentPage() >= ctx.totalPages());
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.isModalOpen() ? 59 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isDeleteModalOpen() ? 60 : -1);
    }
  }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormControlDirective, FormGroupDirective, FormControlName, HasPermissionDirective], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TeachingAssignmentComponent, [{
    type: Component,
    args: [{ selector: "app-teaching-assignment", imports: [CommonModule, ReactiveFormsModule, HasPermissionDirective], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="space-y-6">\r
  <!-- PAGE HEADER -->\r
  <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-gray-100">\r
    <div>\r
      <h1 class="text-2xl font-extrabold text-gray-900 tracking-tight">Ph\xE2n c\xF4ng Gi\u1EA3ng d\u1EA1y</h1>\r
      <p class="text-sm text-gray-500 mt-1">Qu\u1EA3n l\xFD ph\xE2n c\xF4ng Gi\u1EA3ng vi\xEAn ch\xEDnh, Tr\u1EE3 gi\u1EA3ng v\xE0 C\u1ED1 v\u1EA5n h\u1ECDc t\u1EADp cho c\xE1c l\u1EDBp \u0111\xE0o t\u1EA1o</p>\r
    </div>\r
    <div class="flex space-x-3">\r
      <!-- Search Input -->\r
      <div class="relative">\r
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">\r
          <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>\r
          </svg>\r
        </div>\r
        <input \r
          type="text" \r
          [formControl]="searchControl" \r
          placeholder="T\xECm gi\u1EA3ng vi\xEAn ho\u1EB7c t\xEAn l\u1EDBp..." \r
          class="bg-white border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-500 block w-64 pl-10 p-2.5 outline-none transition shadow-sm"\r
        >\r
      </div>\r
\r
      <!-- Add Button -->\r
      <button \r
        *hasPermission="'ASSIGNMENT_CREATE'"\r
        (click)="openModal()" \r
        class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-5 rounded-xl flex items-center transition shadow-md hover:shadow-lg text-sm"\r
      >\r
        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>\r
        </svg>\r
        T\u1EA1o ph\xE2n c\xF4ng m\u1EDBi\r
      </button>\r
    </div>\r
  </div>\r
\r
  <!-- DATA TABLE -->\r
  <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">\r
    <table class="w-full text-sm text-left text-gray-500">\r
      <thead class="text-xs text-gray-500 uppercase bg-gray-50/80 border-b border-gray-100 font-semibold">\r
        <tr>\r
          <th scope="col" class="px-6 py-4">STT</th>\r
          <th scope="col" class="px-6 py-4">Gi\u1EA3ng vi\xEAn / Nh\xE2n s\u1EF1</th>\r
          <th scope="col" class="px-6 py-4">L\u1EDBp h\u1ECDc ph\xE2n c\xF4ng</th>\r
          <th scope="col" class="px-6 py-4">Vai tr\xF2</th>\r
          <th scope="col" class="px-6 py-4">Th\u1EDDi gian ph\xE2n c\xF4ng</th>\r
          <th scope="col" class="px-6 py-4">Tr\u1EA1ng th\xE1i</th>\r
          <th scope="col" class="px-6 py-4 text-right">Thao t\xE1c</th>\r
        </tr>\r
      </thead>\r
      <tbody class="divide-y divide-gray-50">\r
        @if (isLoading() && assignments().length === 0) {\r
          <tr>\r
            <td colspan="7" class="px-6 py-12 text-center text-gray-500">\r
              <svg class="animate-spin mx-auto h-8 w-8 text-blue-500 mb-3" fill="none" viewBox="0 0 24 24">\r
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>\r
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>\r
              </svg>\r
              \u0110ang t\u1EA3i danh s\xE1ch ph\xE2n c\xF4ng...\r
            </td>\r
          </tr>\r
        } @else if (assignments().length === 0) {\r
          <tr>\r
            <td colspan="7" class="px-6 py-12 text-center text-gray-500">\r
              Kh\xF4ng t\xECm th\u1EA5y ph\xE2n c\xF4ng gi\u1EA3ng d\u1EA1y n\xE0o.\r
            </td>\r
          </tr>\r
        } @else {\r
          @for (a of assignments(); track a.id; let idx = $index) {\r
            <tr class="bg-white hover:bg-blue-50/50 transition duration-200">\r
              <!-- Index -->\r
              <td class="px-6 py-4 font-semibold text-gray-400">\r
                #{{ startIndex() + idx }}\r
              </td>\r
              <!-- Teacher -->\r
              <td class="px-6 py-4">\r
                <div class="font-bold text-gray-900">{{ a.teacherName || '---' }}</div>\r
                <div class="font-mono text-xs text-blue-600 mt-0.5">{{ a.staffCode || 'M\xE3 NV' }}</div>\r
              </td>\r
              <!-- Class -->\r
              <td class="px-6 py-4">\r
                <div class="font-bold text-gray-900">{{ a.className || '---' }}</div>\r
                <div class="font-mono text-xs text-gray-500 mt-0.5">{{ a.classCode || 'M\xE3 l\u1EDBp' }}</div>\r
              </td>\r
              <!-- Role Badge -->\r
              <td class="px-6 py-4">\r
                @let badge = getRoleBadge(a.role);\r
                <span class="px-3 py-1 text-xs font-semibold rounded-full border inline-flex items-center" [class]="badge.bgClass + ' ' + badge.textClass + ' ' + badge.borderClass">\r
                  {{ badge.label }}\r
                </span>\r
              </td>\r
              <!-- Date Range -->\r
              <td class="px-6 py-4 text-xs font-medium text-gray-600">\r
                <div class="flex items-center space-x-1.5">\r
                  <span class="px-2 py-0.5 bg-gray-100 text-gray-700 rounded font-mono">{{ formatDateVN(a.assignedDate) }}</span>\r
                  <span class="text-gray-400">\u2794</span>\r
                  <span class="px-2 py-0.5 bg-gray-100 text-gray-700 rounded font-mono">{{ formatDateVN(a.endDate) }}</span>\r
                </div>\r
              </td>\r
              <!-- Status Badge -->\r
              <td class="px-6 py-4">\r
                @if (a.status === 'ACTIVE') {\r
                  <span class="px-3 py-1 text-xs font-semibold rounded-full border bg-emerald-50 text-emerald-700 border-emerald-200 inline-flex items-center">\r
                    <span class="w-1.5 h-1.5 rounded-full mr-1.5 bg-emerald-500"></span>\r
                    \u0110ang ph\xE2n c\xF4ng\r
                  </span>\r
                } @else {\r
                  <span class="px-3 py-1 text-xs font-semibold rounded-full border bg-gray-50 text-gray-600 border-gray-200 inline-flex items-center">\r
                    <span class="w-1.5 h-1.5 rounded-full mr-1.5 bg-gray-400"></span>\r
                    T\u1EA1m ng\u01B0ng\r
                  </span>\r
                }\r
              </td>\r
              <!-- Actions -->\r
              <td class="px-6 py-4 text-right space-x-3">\r
                <button \r
                  *hasPermission="'ASSIGNMENT_UPDATE'"\r
                  (click)="openModal(a)" \r
                  class="font-medium text-blue-600 hover:text-blue-800 transition text-sm"\r
                >\r
                  Ch\u1EC9nh s\u1EEDa\r
                </button>\r
                <button \r
                  *hasPermission="'ASSIGNMENT_DELETE'"\r
                  (click)="onDelete(a.id!)" \r
                  class="font-medium text-red-600 hover:text-red-800 transition text-sm"\r
                >\r
                  X\xF3a\r
                </button>\r
              </td>\r
            </tr>\r
          }\r
        }\r
      </tbody>\r
    </table>\r
\r
    <!-- PAGINATION FOOTER -->\r
    <div class="flex flex-col sm:flex-row items-center justify-between px-6 py-4 bg-gray-50/80 border-t border-gray-100 rounded-b-2xl gap-3">\r
      <div class="text-sm text-gray-500">\r
        Hi\u1EC3n th\u1ECB <span class="font-semibold text-gray-900">{{ startIndex() }}</span> \r
        - <span class="font-semibold text-gray-900">{{ endIndex() }}</span> \r
        trong t\u1ED5ng s\u1ED1 <span class="font-semibold text-gray-900">{{ totalElements() }}</span> k\u1EBFt qu\u1EA3\r
      </div>\r
      \r
      <div class="flex space-x-2">\r
        <button \r
          (click)="changePage(currentPage() - 1)" \r
          [disabled]="currentPage() === 1"\r
          class="px-3.5 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition shadow-sm flex items-center"\r
        >\r
          <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>\r
          </svg>\r
          Tr\u01B0\u1EDBc\r
        </button>\r
\r
        <span class="px-3.5 py-1.5 text-sm font-semibold text-gray-800 bg-gray-100 rounded-lg flex items-center">\r
          {{ currentPage() }} / {{ totalPages() }}\r
        </span>\r
\r
        <button \r
          (click)="changePage(currentPage() + 1)" \r
          [disabled]="currentPage() >= totalPages()"\r
          class="px-3.5 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition shadow-sm flex items-center"\r
        >\r
          Sau\r
          <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>\r
          </svg>\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- MODAL TH\xCAM / C\u1EACP NH\u1EACT PH\xC2N C\xD4NG GI\u1EA2NG D\u1EA0Y -->\r
@if (isModalOpen()) {\r
  <div class="fixed inset-0 z-50 overflow-y-auto">\r
    <div class="fixed inset-0 bg-gray-900/50 backdrop-blur-sm transition-opacity" (click)="closeModal()"></div>\r
\r
    <div class="flex min-h-full items-center justify-center p-4">\r
      <div class="relative w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl transition-all border border-gray-100">\r
        \r
        <!-- Modal Header -->\r
        <div class="flex items-center justify-between pb-4 border-b border-gray-100">\r
          <h3 class="text-xl font-bold text-gray-900">\r
            {{ isEditing() ? 'C\u1EADp nh\u1EADt ph\xE2n c\xF4ng gi\u1EA3ng d\u1EA1y' : 'T\u1EA1o ph\xE2n c\xF4ng gi\u1EA3ng d\u1EA1y m\u1EDBi' }}\r
          </h3>\r
          <button (click)="closeModal()" class="text-gray-400 hover:text-gray-600 transition">\r
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>\r
            </svg>\r
          </button>\r
        </div>\r
\r
        <!-- Modal Form -->\r
        <form [formGroup]="assignmentForm" (ngSubmit)="onSubmit()" class="mt-4 space-y-4">\r
          \r
          <!-- Staff Select -->\r
          <div>\r
            <label class="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">\r
              Gi\u1EA3ng vi\xEAn / Nh\xE2n s\u1EF1 <span class="text-red-500">*</span>\r
            </label>\r
            <select \r
              formControlName="staffId"\r
              class="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition bg-white font-semibold text-gray-900"\r
              [class.border-red-400]="isFormSubmitted() && assignmentForm.get('staffId')?.invalid"\r
            >\r
              <option value="">-- Ch\u1ECDn Gi\u1EA3ng vi\xEAn --</option>\r
              @for (st of availableStaffs(); track st.id) {\r
                <option [value]="st.id">{{ st.fullName }} ({{ st.staffCode }} - {{ formatStaffTypeLabel(st.staffType) }})</option>\r
              }\r
            </select>\r
            @if (isFormSubmitted() && assignmentForm.get('staffId')?.hasError('required')) {\r
              <p class="mt-1 text-xs text-red-500">Vui l\xF2ng ch\u1ECDn gi\u1EA3ng vi\xEAn/nh\xE2n s\u1EF1</p>\r
            }\r
          </div>\r
\r
          <!-- Class Select -->\r
          <div>\r
            <label class="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">\r
              L\u1EDBp h\u1ECDc ph\xE2n c\xF4ng <span class="text-red-500">*</span>\r
            </label>\r
            <select \r
              formControlName="classId"\r
              class="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition bg-white font-semibold text-gray-900"\r
              [class.border-red-400]="isFormSubmitted() && assignmentForm.get('classId')?.invalid"\r
            >\r
              <option value="">-- Ch\u1ECDn L\u1EDBp h\u1ECDc --</option>\r
              @for (cls of availableClasses(); track cls.id) {\r
                <option [value]="cls.id">{{ cls.code }} - {{ cls.name }}</option>\r
              }\r
            </select>\r
            @if (isFormSubmitted() && assignmentForm.get('classId')?.hasError('required')) {\r
              <p class="mt-1 text-xs text-red-500">Vui l\xF2ng ch\u1ECDn l\u1EDBp h\u1ECDc</p>\r
            }\r
          </div>\r
\r
          <!-- Role & Status Grid -->\r
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">\r
            <div>\r
              <label class="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">\r
                Vai tr\xF2 gi\u1EA3ng d\u1EA1y <span class="text-red-500">*</span>\r
              </label>\r
              <select \r
                formControlName="role"\r
                class="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition bg-white font-semibold text-gray-900"\r
              >\r
                @for (r of roleOptions; track r.value) {\r
                  <option [value]="r.value">{{ r.label }}</option>\r
                }\r
              </select>\r
            </div>\r
\r
            <div>\r
              <label class="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">\r
                Tr\u1EA1ng th\xE1i <span class="text-red-500">*</span>\r
              </label>\r
              <select \r
                formControlName="status"\r
                class="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition bg-white font-semibold text-gray-900"\r
              >\r
                <option value="ACTIVE">\u0110ang ph\xE2n c\xF4ng (ACTIVE)</option>\r
                <option value="INACTIVE">T\u1EA1m ng\u01B0ng (INACTIVE)</option>\r
              </select>\r
            </div>\r
          </div>\r
\r
          <!-- Date Range Grid -->\r
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">\r
            <!-- Assigned Date -->\r
            <div>\r
              <label class="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">\r
                Ng\xE0y b\u1EAFt \u0111\u1EA7u ph\xE2n c\xF4ng\r
              </label>\r
              <div class="relative flex items-center cursor-pointer" (click)="openPicker(startDatePicker)">\r
                <input \r
                  type="text" \r
                  [value]="startDateDisplay()"\r
                  (input)="onDateTextInput($event, 'assignedDate')"\r
                  placeholder="Ch\u1ECDn ng\xE0y (dd/MM/yyyy)"\r
                  maxlength="10"\r
                  class="w-full px-3.5 py-2.5 pr-10 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition font-semibold text-gray-900 bg-white cursor-pointer"\r
                >\r
                <div class="absolute right-2.5 flex items-center text-gray-400 hover:text-blue-600 transition p-1">\r
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>\r
                  </svg>\r
                  <input \r
                    #startDatePicker\r
                    type="date" \r
                    [value]="assignmentForm.get('assignedDate')?.value"\r
                    (change)="onDatePickerChange($event, 'assignedDate')"\r
                    class="sr-only opacity-0 w-0 h-0 absolute pointer-events-none"\r
                  >\r
                </div>\r
              </div>\r
            </div>\r
\r
            <!-- End Date -->\r
            <div>\r
              <label class="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">\r
                Ng\xE0y k\u1EBFt th\xFAc\r
              </label>\r
              <div class="relative flex items-center cursor-pointer" (click)="openPicker(endDatePicker)">\r
                <input \r
                  type="text" \r
                  [value]="endDateDisplay()"\r
                  (input)="onDateTextInput($event, 'endDate')"\r
                  placeholder="Ch\u1ECDn ng\xE0y (dd/MM/yyyy)"\r
                  maxlength="10"\r
                  class="w-full px-3.5 py-2.5 pr-10 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition font-semibold text-gray-900 bg-white cursor-pointer"\r
                >\r
                <div class="absolute right-2.5 flex items-center text-gray-400 hover:text-blue-600 transition p-1">\r
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>\r
                  </svg>\r
                  <input \r
                    #endDatePicker\r
                    type="date" \r
                    [value]="assignmentForm.get('endDate')?.value"\r
                    (change)="onDatePickerChange($event, 'endDate')"\r
                    class="sr-only opacity-0 w-0 h-0 absolute pointer-events-none"\r
                  >\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- Modal Footer Actions -->\r
          <div class="flex justify-end space-x-3 pt-4 border-t border-gray-100">\r
            <button \r
              type="button" \r
              (click)="closeModal()"\r
              class="px-4 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition"\r
            >\r
              H\u1EE7y b\u1ECF\r
            </button>\r
            <button \r
              type="submit"\r
              class="px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition shadow-md"\r
            >\r
              {{ isEditing() ? 'C\u1EADp nh\u1EADt' : 'T\u1EA1o m\u1EDBi' }}\r
            </button>\r
          </div>\r
        </form>\r
      </div>\r
    </div>\r
  </div>\r
}\r
\r
<!-- MODAL X\xC1C NH\u1EACN X\xD3A -->\r
@if (isDeleteModalOpen()) {\r
  <div class="fixed inset-0 z-50 overflow-y-auto">\r
    <div class="fixed inset-0 bg-gray-900/50 backdrop-blur-sm transition-opacity" (click)="closeDeleteModal()"></div>\r
\r
    <div class="flex min-h-full items-center justify-center p-4">\r
      <div class="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl transition-all border border-gray-100">\r
        <div class="flex items-center space-x-3 text-red-600 mb-4">\r
          <div class="p-3 bg-red-50 rounded-full">\r
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>\r
            </svg>\r
          </div>\r
          <h3 class="text-lg font-bold text-gray-900">X\xE1c nh\u1EADn x\xF3a ph\xE2n c\xF4ng</h3>\r
        </div>\r
        <p class="text-sm text-gray-600 mb-6">\r
          B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a ph\xE2n c\xF4ng gi\u1EA3ng d\u1EA1y n\xE0y kh\xF4ng? H\xE0nh \u0111\u1ED9ng n\xE0y kh\xF4ng th\u1EC3 ho\xE0n t\xE1c.\r
        </p>\r
        <div class="flex justify-end space-x-3">\r
          <button \r
            (click)="closeDeleteModal()"\r
            class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition"\r
          >\r
            H\u1EE7y\r
          </button>\r
          <button \r
            (click)="confirmDelete()"\r
            class="px-4 py-2 text-sm font-semibold text-white bg-red-600 hover:bg-red-700 rounded-xl transition shadow-md"\r
          >\r
            \u0110\u1ED3ng \xFD X\xF3a\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
}\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TeachingAssignmentComponent, { className: "TeachingAssignmentComponent", filePath: "src/app/features/academic/pages/teaching-assignment/teaching-assignment.component.ts", lineNumber: 21 });
})();

// src/app/modules/teaching/models/schedule-assignment.model.ts
var SCHEDULE_ROLE_MAP = {
  MAIN_TEACHER: "Gi\u1EA3ng vi\xEAn ch\xEDnh",
  ASSISTANT_TEACHER: "Tr\u1EE3 gi\u1EA3ng",
  TUTOR: "Gia s\u01B0 / H\u01B0\u1EDBng d\u1EABn"
};
var SCHEDULE_ROLE_OPTIONS = [
  { value: "MAIN_TEACHER", label: "Gi\u1EA3ng vi\xEAn ch\xEDnh" },
  { value: "ASSISTANT_TEACHER", label: "Tr\u1EE3 gi\u1EA3ng" },
  { value: "TUTOR", label: "Gia s\u01B0 / H\u01B0\u1EDBng d\u1EABn" }
];

// src/app/features/academic/pages/schedule-assignment/schedule-assignment.component.ts
var _forTrack06 = ($index, $item) => $item.id;
var _forTrack12 = ($index, $item) => $item.value;
function ScheduleAssignmentComponent_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r1 = ctx.$implicit;
    \u0275\u0275property("value", c_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", c_r1.code, " - ", c_r1.name);
  }
}
function ScheduleAssignmentComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 34);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 35);
    \u0275\u0275element(3, "circle", 36)(4, "path", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " \u0110ang t\u1EA3i danh s\xE1ch ph\xE2n c\xF4ng ca h\u1ECDc... ");
    \u0275\u0275elementEnd()();
  }
}
function ScheduleAssignmentComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 34);
    \u0275\u0275text(2, " Kh\xF4ng t\xECm th\u1EA5y ph\xE2n c\xF4ng bu\u1ED5i h\u1ECDc n\xE0o. ");
    \u0275\u0275elementEnd()();
  }
}
function ScheduleAssignmentComponent_Conditional_42_For_1_Conditional_9_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 53);
    \u0275\u0275element(2, "path", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", a_r3.roomName, " ");
  }
}
function ScheduleAssignmentComponent_Conditional_42_For_1_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49)(1, "span", 50);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 51);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(5, ScheduleAssignmentComponent_Conditional_42_For_1_Conditional_9_Conditional_5_Template, 4, 1, "div", 52);
  }
  if (rf & 2) {
    const a_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r3.formatDayOfWeek(a_r3.dayOfWeek), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", a_r3.startTime, " - ", a_r3.endTime, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(a_r3.roomName ? 5 : -1);
  }
}
function ScheduleAssignmentComponent_Conditional_42_For_1_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Ca h\u1ECDc #", a_r3.scheduleId, " ");
  }
}
function ScheduleAssignmentComponent_Conditional_42_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 38)(1, "td", 39);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 40)(4, "div", 41);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 42);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td", 40);
    \u0275\u0275conditionalCreate(9, ScheduleAssignmentComponent_Conditional_42_For_1_Conditional_9_Template, 6, 4)(10, ScheduleAssignmentComponent_Conditional_42_For_1_Conditional_10_Template, 2, 1, "span", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 40)(12, "div", 41);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 44);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td", 40)(17, "span", 45);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td", 46)(20, "button", 47);
    \u0275\u0275listener("click", function ScheduleAssignmentComponent_Conditional_42_For_1_Template_button_click_20_listener() {
      const a_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.openModal(a_r3));
    });
    \u0275\u0275text(21, " Ch\u1EC9nh s\u1EEDa ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 48);
    \u0275\u0275listener("click", function ScheduleAssignmentComponent_Conditional_42_For_1_Template_button_click_22_listener() {
      const a_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onDelete(a_r3.id));
    });
    \u0275\u0275text(23, " X\xF3a ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const a_r3 = ctx.$implicit;
    const \u0275$index_90_r5 = ctx.$index;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" #", ctx_r3.startIndex() + \u0275$index_90_r5, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(a_r3.className || "---");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r3.classCode || "M\xE3 l\u1EDBp");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(a_r3.dayOfWeek || a_r3.startTime ? 9 : 10);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(a_r3.teacherName || "---");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r3.staffCode || "M\xE3 NV");
    const badge_r6 = ctx_r3.getRoleBadge(a_r3.role);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(badge_r6.bgClass + " " + badge_r6.textClass + " " + badge_r6.borderClass);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", badge_r6.label, " ");
  }
}
function ScheduleAssignmentComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ScheduleAssignmentComponent_Conditional_42_For_1_Template, 24, 9, "tr", 38, _forTrack06);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r3.assignments());
  }
}
function ScheduleAssignmentComponent_Conditional_66_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 8);
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
function ScheduleAssignmentComponent_Conditional_66_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 67);
    \u0275\u0275text(1, "Vui l\xF2ng ch\u1ECDn l\u1EDBp h\u1ECDc");
    \u0275\u0275elementEnd();
  }
}
function ScheduleAssignmentComponent_Conditional_66_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 7);
    \u0275\u0275text(1, "-- L\u1EDBp n\xE0y ch\u01B0a c\xF3 ca h\u1ECDc n\xE0o --");
    \u0275\u0275elementEnd();
  }
}
function ScheduleAssignmentComponent_Conditional_66_Conditional_29_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const sch_r9 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275property("value", sch_r9.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.formatScheduleLabel(sch_r9));
  }
}
function ScheduleAssignmentComponent_Conditional_66_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 7);
    \u0275\u0275text(1, "-- Ch\u1ECDn Ca h\u1ECDc --");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(2, ScheduleAssignmentComponent_Conditional_66_Conditional_29_For_3_Template, 2, 2, "option", 8, _forTrack06);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r3.modalSchedules());
  }
}
function ScheduleAssignmentComponent_Conditional_66_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 67);
    \u0275\u0275text(1, "Vui l\xF2ng ch\u1ECDn ca l\u1ECBch h\u1ECDc");
    \u0275\u0275elementEnd();
  }
}
function ScheduleAssignmentComponent_Conditional_66_For_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const st_r10 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", st_r10.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3("", st_r10.fullName, " (", st_r10.staffCode, " - ", ctx_r3.formatStaffTypeLabel(st_r10.staffType), ")");
  }
}
function ScheduleAssignmentComponent_Conditional_66_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 67);
    \u0275\u0275text(1, "Vui l\xF2ng ch\u1ECDn gi\u1EA3ng vi\xEAn/nh\xE2n s\u1EF1");
    \u0275\u0275elementEnd();
  }
}
function ScheduleAssignmentComponent_Conditional_66_For_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r11 = ctx.$implicit;
    \u0275\u0275property("value", r_r11.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r11.label);
  }
}
function ScheduleAssignmentComponent_Conditional_66_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 55);
    \u0275\u0275listener("click", function ScheduleAssignmentComponent_Conditional_66_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeModal());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 56)(3, "div", 57)(4, "div", 58)(5, "h3", 59);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 60);
    \u0275\u0275listener("click", function ScheduleAssignmentComponent_Conditional_66_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 61);
    \u0275\u0275element(9, "path", 62);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(10, "form", 63);
    \u0275\u0275listener("ngSubmit", function ScheduleAssignmentComponent_Conditional_66_Template_form_ngSubmit_10_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onSubmit());
    });
    \u0275\u0275elementStart(11, "div")(12, "label", 64);
    \u0275\u0275text(13, " Ch\u1ECDn L\u1EDBp h\u1ECDc ");
    \u0275\u0275elementStart(14, "span", 65);
    \u0275\u0275text(15, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "select", 66)(17, "option", 7);
    \u0275\u0275text(18, "-- Ch\u1ECDn L\u1EDBp h\u1ECDc --");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(19, ScheduleAssignmentComponent_Conditional_66_For_20_Template, 2, 3, "option", 8, _forTrack06);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(21, ScheduleAssignmentComponent_Conditional_66_Conditional_21_Template, 2, 0, "p", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div")(23, "label", 64);
    \u0275\u0275text(24, " Ch\u1ECDn Ca l\u1ECBch h\u1ECDc ");
    \u0275\u0275elementStart(25, "span", 65);
    \u0275\u0275text(26, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "select", 68);
    \u0275\u0275conditionalCreate(28, ScheduleAssignmentComponent_Conditional_66_Conditional_28_Template, 2, 0, "option", 7)(29, ScheduleAssignmentComponent_Conditional_66_Conditional_29_Template, 4, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(30, ScheduleAssignmentComponent_Conditional_66_Conditional_30_Template, 2, 0, "p", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div")(32, "label", 64);
    \u0275\u0275text(33, " Gi\u1EA3ng vi\xEAn / Nh\xE2n s\u1EF1 ");
    \u0275\u0275elementStart(34, "span", 65);
    \u0275\u0275text(35, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "select", 69)(37, "option", 7);
    \u0275\u0275text(38, "-- Ch\u1ECDn Gi\u1EA3ng vi\xEAn --");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(39, ScheduleAssignmentComponent_Conditional_66_For_40_Template, 2, 4, "option", 8, _forTrack06);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(41, ScheduleAssignmentComponent_Conditional_66_Conditional_41_Template, 2, 0, "p", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div")(43, "label", 64);
    \u0275\u0275text(44, " Vai tr\xF2 trong ca h\u1ECDc ");
    \u0275\u0275elementStart(45, "span", 65);
    \u0275\u0275text(46, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "select", 70);
    \u0275\u0275repeaterCreate(48, ScheduleAssignmentComponent_Conditional_66_For_49_Template, 2, 2, "option", 8, _forTrack12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 71)(51, "button", 72);
    \u0275\u0275listener("click", function ScheduleAssignmentComponent_Conditional_66_Template_button_click_51_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeModal());
    });
    \u0275\u0275text(52, " H\u1EE7y b\u1ECF ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "button", 73);
    \u0275\u0275text(54);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_8_0;
    let tmp_9_0;
    let tmp_11_0;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r3.isEditing() ? "C\u1EADp nh\u1EADt ph\xE2n c\xF4ng bu\u1ED5i h\u1ECDc" : "Ph\xE2n c\xF4ng gi\xE1o vi\xEAn v\xE0o ca h\u1ECDc m\u1EDBi", " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("formGroup", ctx_r3.assignmentForm);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("border-red-400", ctx_r3.isFormSubmitted() && ((tmp_3_0 = ctx_r3.assignmentForm.get("classId")) == null ? null : tmp_3_0.invalid));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r3.availableClasses());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.isFormSubmitted() && ((tmp_5_0 = ctx_r3.assignmentForm.get("classId")) == null ? null : tmp_5_0.hasError("required")) ? 21 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("border-red-400", ctx_r3.isFormSubmitted() && ((tmp_6_0 = ctx_r3.assignmentForm.get("scheduleId")) == null ? null : tmp_6_0.invalid));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.modalSchedules().length === 0 ? 28 : 29);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.isFormSubmitted() && ((tmp_8_0 = ctx_r3.assignmentForm.get("scheduleId")) == null ? null : tmp_8_0.hasError("required")) ? 30 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("border-red-400", ctx_r3.isFormSubmitted() && ((tmp_9_0 = ctx_r3.assignmentForm.get("staffId")) == null ? null : tmp_9_0.invalid));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r3.availableStaffs());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.isFormSubmitted() && ((tmp_11_0 = ctx_r3.assignmentForm.get("staffId")) == null ? null : tmp_11_0.hasError("required")) ? 41 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275repeater(ctx_r3.roleOptions);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r3.isEditing() ? "C\u1EADp nh\u1EADt" : "T\u1EA1o m\u1EDBi", " ");
  }
}
function ScheduleAssignmentComponent_Conditional_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 55);
    \u0275\u0275listener("click", function ScheduleAssignmentComponent_Conditional_67_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeDeleteModal());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 56)(3, "div", 74)(4, "div", 75)(5, "div", 76);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 77);
    \u0275\u0275element(7, "path", 78);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "h3", 79);
    \u0275\u0275text(9, "X\xE1c nh\u1EADn h\u1EE7y ph\xE2n c\xF4ng ca");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "p", 80);
    \u0275\u0275text(11, " B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n h\u1EE7y ph\xE2n c\xF4ng gi\xE1o vi\xEAn v\xE0o ca h\u1ECDc n\xE0y kh\xF4ng? H\xE0nh \u0111\u1ED9ng n\xE0y kh\xF4ng th\u1EC3 ho\xE0n t\xE1c. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 81)(13, "button", 82);
    \u0275\u0275listener("click", function ScheduleAssignmentComponent_Conditional_67_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeDeleteModal());
    });
    \u0275\u0275text(14, " H\u1EE7y ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 83);
    \u0275\u0275listener("click", function ScheduleAssignmentComponent_Conditional_67_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.confirmDelete());
    });
    \u0275\u0275text(16, " \u0110\u1ED3ng \xFD X\xF3a ");
    \u0275\u0275elementEnd()()()()();
  }
}
var ScheduleAssignmentComponent = class _ScheduleAssignmentComponent {
  assignmentService = inject(ScheduleAssignmentService);
  classesService = inject(ClassService);
  scheduleService = inject(ScheduleService);
  staffService = inject(StaffService);
  fb = inject(FormBuilder);
  destroyRef = inject(DestroyRef);
  toastService = inject(ToastService);
  // Constants
  roleOptions = SCHEDULE_ROLE_OPTIONS;
  roleMap = SCHEDULE_ROLE_MAP;
  dayMap = DAY_OF_WEEK_MAP;
  // State
  assignments = signal([], ...ngDevMode ? [{ debugName: "assignments" }] : (
    /* istanbul ignore next */
    []
  ));
  availableClasses = signal([], ...ngDevMode ? [{ debugName: "availableClasses" }] : (
    /* istanbul ignore next */
    []
  ));
  modalSchedules = signal([], ...ngDevMode ? [{ debugName: "modalSchedules" }] : (
    /* istanbul ignore next */
    []
  ));
  availableStaffs = signal([], ...ngDevMode ? [{ debugName: "availableStaffs" }] : (
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
  // Filters
  selectedFilterClassId = signal(null, ...ngDevMode ? [{ debugName: "selectedFilterClassId" }] : (
    /* istanbul ignore next */
    []
  ));
  searchControl = new FormControl("");
  // Modal State
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
  isFormSubmitted = signal(false, ...ngDevMode ? [{ debugName: "isFormSubmitted" }] : (
    /* istanbul ignore next */
    []
  ));
  // Delete Modal State
  isDeleteModalOpen = signal(false, ...ngDevMode ? [{ debugName: "isDeleteModalOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  idToDelete = signal(null, ...ngDevMode ? [{ debugName: "idToDelete" }] : (
    /* istanbul ignore next */
    []
  ));
  // Computed signals
  totalPages = computed(() => Math.max(1, Math.ceil(this.totalElements() / this.pageSize())), ...ngDevMode ? [{ debugName: "totalPages" }] : (
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
    this.loadDropdownOptions();
    this.loadData();
  }
  initForm() {
    this.assignmentForm = this.fb.group({
      classId: ["", [Validators.required]],
      scheduleId: ["", [Validators.required]],
      staffId: ["", [Validators.required]],
      role: ["MAIN_TEACHER", [Validators.required]]
    });
    this.assignmentForm.get("classId")?.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((classIdVal) => {
      if (classIdVal) {
        this.loadModalSchedules(Number(classIdVal));
      } else {
        this.modalSchedules.set([]);
        this.assignmentForm.get("scheduleId")?.setValue("");
      }
    });
  }
  setupSearch() {
    this.searchControl.valueChanges.pipe(debounceTime(400), distinctUntilChanged(), takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.currentPage.set(1);
      this.loadData();
    });
  }
  loadDropdownOptions() {
    this.classesService.getClasses({ size: 100 }).subscribe({
      next: (res) => this.availableClasses.set(res.content || []),
      error: () => {
      }
    });
    this.staffService.getTeachers().subscribe({
      next: (res) => this.availableStaffs.set(res || []),
      error: () => {
      }
    });
  }
  loadModalSchedules(classId, selectedScheduleId) {
    this.scheduleService.getSchedulesByClassId(classId).subscribe({
      next: (schedules) => {
        this.modalSchedules.set(schedules || []);
        if (selectedScheduleId) {
          this.assignmentForm.get("scheduleId")?.setValue(selectedScheduleId);
        } else if (schedules && schedules.length > 0) {
          if (!this.isEditing()) {
            this.assignmentForm.get("scheduleId")?.setValue(schedules[0].id);
          }
        } else {
          this.assignmentForm.get("scheduleId")?.setValue("");
        }
      },
      error: () => {
        this.modalSchedules.set([]);
      }
    });
  }
  loadData() {
    this.isLoading.set(true);
    const filterClassId = this.selectedFilterClassId();
    if (filterClassId) {
      this.assignmentService.getAssignmentsByClassId(filterClassId).subscribe({
        next: (list) => {
          this.assignments.set(list || []);
          this.totalElements.set(list ? list.length : 0);
          this.isLoading.set(false);
        },
        error: (err) => {
          this.toastService.error("L\u1ED7i", "L\u1ED7i khi t\u1EA3i ph\xE2n c\xF4ng ca h\u1ECDc: " + (err.error?.message || err.message));
          this.isLoading.set(false);
        }
      });
    } else {
      this.assignmentService.getAll({
        page: this.currentPage(),
        size: this.pageSize(),
        keyword: this.searchControl.value || ""
      }).subscribe({
        next: (response) => {
          this.assignments.set(response.content || []);
          this.totalElements.set(response.totalElements || 0);
          this.isLoading.set(false);
        },
        error: (err) => {
          this.toastService.error("L\u1ED7i", "L\u1ED7i khi t\u1EA3i danh s\xE1ch ph\xE2n c\xF4ng ca h\u1ECDc: " + (err.error?.message || err.message));
          this.isLoading.set(false);
        }
      });
    }
  }
  onFilterClassChange(event) {
    const val = event.target.value;
    this.selectedFilterClassId.set(val ? Number(val) : null);
    this.currentPage.set(1);
    this.loadData();
  }
  changePage(page) {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage.set(page);
      this.loadData();
    }
  }
  openModal(item) {
    this.isFormSubmitted.set(false);
    this.loadDropdownOptions();
    if (item && item.id) {
      this.isEditing.set(true);
      this.currentId.set(item.id);
      const matchedClass = this.availableClasses().find((c) => c.code === item.classCode);
      const classIdVal = matchedClass ? matchedClass.id : "";
      this.assignmentForm.patchValue({
        classId: classIdVal,
        staffId: item.staffId,
        role: item.role || "MAIN_TEACHER"
      });
      if (classIdVal) {
        this.loadModalSchedules(Number(classIdVal), Number(item.scheduleId));
      }
    } else {
      if (this.isEditing() || !this.assignmentForm.get("staffId")?.value) {
        this.isEditing.set(false);
        this.currentId.set(null);
        this.resetAddForm();
      } else {
        this.isEditing.set(false);
        this.currentId.set(null);
      }
    }
    this.isModalOpen.set(true);
  }
  resetAddForm() {
    this.assignmentForm.reset({
      classId: "",
      scheduleId: "",
      staffId: "",
      role: "MAIN_TEACHER"
    });
  }
  closeModal() {
    this.isModalOpen.set(false);
  }
  onSubmit() {
    this.isFormSubmitted.set(true);
    if (this.assignmentForm.invalid) {
      this.toastService.error("Th\xF4ng b\xE1o", "Vui l\xF2ng \u0111i\u1EC1n \u0111\u1EA7y \u0111\u1EE7 c\xE1c tr\u01B0\u1EDDng b\u1EAFt bu\u1ED9c");
      return;
    }
    const formValues = this.assignmentForm.value;
    const dto = {
      scheduleId: Number(formValues.scheduleId),
      staffId: Number(formValues.staffId),
      role: formValues.role
    };
    if (this.isEditing() && this.currentId()) {
      this.assignmentService.update(this.currentId(), dto).subscribe({
        next: (res) => {
          this.toastService.success("Th\xE0nh c\xF4ng", res.message || "C\u1EADp nh\u1EADt ph\xE2n c\xF4ng ca h\u1ECDc th\xE0nh c\xF4ng!");
          this.closeModal();
          this.loadData();
        },
        error: (err) => {
          this.toastService.error("L\u1ED7i", "C\u1EADp nh\u1EADt th\u1EA5t b\u1EA1i: " + (err.error?.message || err.message));
        }
      });
    } else {
      this.assignmentService.create(dto).subscribe({
        next: (res) => {
          this.toastService.success("Th\xE0nh c\xF4ng", res.message || "T\u1EA1o m\u1EDBi ph\xE2n c\xF4ng ca h\u1ECDc th\xE0nh c\xF4ng!");
          this.resetAddForm();
          this.closeModal();
          this.loadData();
        },
        error: (err) => {
          this.toastService.error("L\u1ED7i", "Ph\xE2n c\xF4ng ca h\u1ECDc th\u1EA5t b\u1EA1i: " + (err.error?.message || err.message));
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
  confirmDelete() {
    const id = this.idToDelete();
    if (!id)
      return;
    this.assignmentService.delete(id).subscribe({
      next: (res) => {
        this.toastService.success("Th\xE0nh c\xF4ng", res.message || "H\u1EE7y ph\xE2n c\xF4ng ca h\u1ECDc th\xE0nh c\xF4ng!");
        this.isDeleteModalOpen.set(false);
        this.idToDelete.set(null);
        this.loadData();
      },
      error: (err) => {
        this.toastService.error("L\u1ED7i", "H\u1EE7y th\u1EA5t b\u1EA1i: " + (err.error?.message || err.message));
      }
    });
  }
  closeDeleteModal() {
    this.isDeleteModalOpen.set(false);
    this.idToDelete.set(null);
  }
  formatStaffTypeLabel(type) {
    if (!type)
      return "Gi\u1EA3ng vi\xEAn";
    const typeUpper = type.toUpperCase();
    if (typeUpper === "TEACHER")
      return "Gi\u1EA3ng vi\xEAn";
    if (typeUpper === "TEACHING_ASSISTANT")
      return "Tr\u1EE3 gi\u1EA3ng";
    if (typeUpper === "FOREIGN_TEACHER" || typeUpper === "NATIVE_TEACHER")
      return "Gi\xE1o vi\xEAn n\u01B0\u1EDBc ngo\xE0i";
    if (typeUpper === "GUEST_TEACHER")
      return "Gi\u1EA3ng vi\xEAn th\u1EC9nh gi\u1EA3ng";
    return type;
  }
  formatScheduleLabel(sch) {
    const dayLabel = this.dayMap[sch.dayOfWeek] || sch.dayOfWeek;
    const roomText = sch.roomName ? ` - ${sch.roomName}` : "";
    return `${dayLabel} (${sch.startTime} - ${sch.endTime}${roomText})`;
  }
  formatDayOfWeek(day) {
    if (!day)
      return "---";
    return this.dayMap[day] || `Th\u1EE9 ${day}`;
  }
  getRoleBadge(roleKey) {
    const label = roleKey ? this.roleMap[roleKey] || roleKey : "Gi\u1EA3ng vi\xEAn ch\xEDnh";
    if (roleKey === "ASSISTANT_TEACHER") {
      return { label, bgClass: "bg-purple-50", textClass: "text-purple-700", borderClass: "border-purple-200" };
    }
    if (roleKey === "TUTOR") {
      return { label, bgClass: "bg-amber-50", textClass: "text-amber-700", borderClass: "border-amber-200" };
    }
    return { label, bgClass: "bg-blue-50", textClass: "text-blue-700", borderClass: "border-blue-200" };
  }
  static \u0275fac = function ScheduleAssignmentComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ScheduleAssignmentComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ScheduleAssignmentComponent, selectors: [["app-schedule-assignment"]], decls: 68, vars: 12, consts: [[1, "space-y-6"], [1, "flex", "flex-col", "md:flex-row", "md:items-end", "justify-between", "gap-4", "pb-4", "border-b", "border-gray-100"], [1, "text-2xl", "font-extrabold", "text-gray-900", "tracking-tight"], [1, "text-sm", "text-gray-500", "mt-1"], [1, "flex", "flex-wrap", "items-center", "gap-3"], [1, "w-56"], [1, "bg-white", "border", "border-gray-200", "text-gray-900", "text-sm", "rounded-xl", "focus:ring-2", "focus:ring-blue-100", "focus:border-blue-500", "block", "w-full", "p-2.5", "outline-none", "transition", "shadow-sm", "font-medium", 3, "change", "value"], ["value", ""], [3, "value"], [1, "relative"], [1, "absolute", "inset-y-0", "left-0", "flex", "items-center", "pl-3", "pointer-events-none"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-gray-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], ["type", "text", "placeholder", "T\xECm gi\u1EA3ng vi\xEAn ho\u1EB7c m\xE3 l\u1EDBp...", 1, "bg-white", "border", "border-gray-200", "text-gray-900", "text-sm", "rounded-xl", "focus:ring-2", "focus:ring-blue-100", "focus:border-blue-500", "block", "w-56", "pl-10", "p-2.5", "outline-none", "transition", "shadow-sm", 3, "formControl"], [1, "bg-blue-600", "hover:bg-blue-700", "text-white", "font-semibold", "py-2.5", "px-5", "rounded-xl", "flex", "items-center", "transition", "shadow-md", "hover:shadow-lg", "text-sm", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "mr-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 4v16m8-8H4"], [1, "bg-white", "rounded-2xl", "shadow-sm", "border", "border-gray-100", "overflow-hidden"], [1, "w-full", "text-sm", "text-left", "text-gray-500"], [1, "text-xs", "text-gray-500", "uppercase", "bg-gray-50/80", "border-b", "border-gray-100", "font-semibold"], ["scope", "col", 1, "px-6", "py-4"], ["scope", "col", 1, "px-6", "py-4", "text-right"], [1, "divide-y", "divide-gray-50"], [1, "flex", "flex-col", "sm:flex-row", "items-center", "justify-between", "px-6", "py-4", "bg-gray-50/80", "border-t", "border-gray-100", "rounded-b-2xl", "gap-3"], [1, "text-sm", "text-gray-500"], [1, "font-semibold", "text-gray-900"], [1, "flex", "space-x-2"], [1, "px-3.5", "py-1.5", "text-sm", "font-medium", "text-gray-700", "bg-white", "border", "border-gray-300", "rounded-lg", "hover:bg-gray-50", "disabled:opacity-50", "disabled:cursor-not-allowed", "transition", "shadow-sm", "flex", "items-center", 3, "click", "disabled"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "mr-1"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 19l-7-7 7-7"], [1, "px-3.5", "py-1.5", "text-sm", "font-semibold", "text-gray-800", "bg-gray-100", "rounded-lg", "flex", "items-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "ml-1"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 5l7 7-7 7"], [1, "fixed", "inset-0", "z-50", "overflow-y-auto"], ["colspan", "6", 1, "px-6", "py-12", "text-center", "text-gray-500"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "mx-auto", "h-8", "w-8", "text-blue-500", "mb-3"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"], [1, "bg-white", "hover:bg-blue-50/50", "transition", "duration-200"], [1, "px-6", "py-4", "font-semibold", "text-gray-400"], [1, "px-6", "py-4"], [1, "font-bold", "text-gray-900"], [1, "font-mono", "text-xs", "text-blue-600", "mt-0.5"], [1, "px-2.5", "py-1", "bg-gray-100", "text-gray-800", "rounded-lg", "font-mono", "text-xs", "font-semibold"], [1, "font-mono", "text-xs", "text-gray-500", "mt-0.5"], [1, "px-3", "py-1", "text-xs", "font-semibold", "rounded-full", "border", "inline-flex", "items-center"], [1, "px-6", "py-4", "text-right", "space-x-3"], [1, "font-medium", "text-blue-600", "hover:text-blue-800", "transition", "text-sm", 3, "click"], [1, "font-medium", "text-red-600", "hover:text-red-800", "transition", "text-sm", 3, "click"], [1, "font-bold", "text-gray-900", "flex", "items-center", "space-x-1.5"], [1, "px-2", "py-0.5", "bg-blue-50", "text-blue-700", "rounded", "text-xs", "font-semibold", "border", "border-blue-100"], [1, "text-xs", "text-gray-700", "font-mono"], [1, "text-xs", "text-gray-500", "mt-1", "flex", "items-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-3.5", "h-3.5", "mr-1", "text-gray-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0v-5a2 2 0 012-2h2a2 2 0 012 2v5m-6 0h6"], [1, "fixed", "inset-0", "bg-gray-900/50", "backdrop-blur-sm", "transition-opacity", 3, "click"], [1, "flex", "min-h-full", "items-center", "justify-center", "p-4"], [1, "relative", "w-full", "max-w-lg", "rounded-2xl", "bg-white", "p-6", "shadow-2xl", "transition-all", "border", "border-gray-100"], [1, "flex", "items-center", "justify-between", "pb-4", "border-b", "border-gray-100"], [1, "text-xl", "font-bold", "text-gray-900"], [1, "text-gray-400", "hover:text-gray-600", "transition", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "mt-4", "space-y-4", 3, "ngSubmit", "formGroup"], [1, "block", "text-xs", "font-semibold", "text-gray-700", "uppercase", "tracking-wider", "mb-1"], [1, "text-red-500"], ["formControlName", "classId", 1, "w-full", "px-3.5", "py-2.5", "border", "border-gray-200", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-100", "focus:border-blue-500", "outline-none", "transition", "bg-white", "font-semibold", "text-gray-900"], [1, "mt-1", "text-xs", "text-red-500"], ["formControlName", "scheduleId", 1, "w-full", "px-3.5", "py-2.5", "border", "border-gray-200", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-100", "focus:border-blue-500", "outline-none", "transition", "bg-white", "font-semibold", "text-gray-900"], ["formControlName", "staffId", 1, "w-full", "px-3.5", "py-2.5", "border", "border-gray-200", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-100", "focus:border-blue-500", "outline-none", "transition", "bg-white", "font-semibold", "text-gray-900"], ["formControlName", "role", 1, "w-full", "px-3.5", "py-2.5", "border", "border-gray-200", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-100", "focus:border-blue-500", "outline-none", "transition", "bg-white", "font-semibold", "text-gray-900"], [1, "flex", "justify-end", "space-x-3", "pt-4", "border-t", "border-gray-100"], ["type", "button", 1, "px-4", "py-2.5", "text-sm", "font-medium", "text-gray-700", "bg-white", "border", "border-gray-300", "rounded-xl", "hover:bg-gray-50", "transition", 3, "click"], ["type", "submit", 1, "px-5", "py-2.5", "text-sm", "font-semibold", "text-white", "bg-blue-600", "hover:bg-blue-700", "rounded-xl", "transition", "shadow-md"], [1, "relative", "w-full", "max-w-md", "rounded-2xl", "bg-white", "p-6", "shadow-2xl", "transition-all", "border", "border-gray-100"], [1, "flex", "items-center", "space-x-3", "text-red-600", "mb-4"], [1, "p-3", "bg-red-50", "rounded-full"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"], [1, "text-lg", "font-bold", "text-gray-900"], [1, "text-sm", "text-gray-600", "mb-6"], [1, "flex", "justify-end", "space-x-3"], [1, "px-4", "py-2", "text-sm", "font-medium", "text-gray-700", "bg-white", "border", "border-gray-300", "rounded-xl", "hover:bg-gray-50", "transition", 3, "click"], [1, "px-4", "py-2", "text-sm", "font-semibold", "text-white", "bg-red-600", "hover:bg-red-700", "rounded-xl", "transition", "shadow-md", 3, "click"]], template: function ScheduleAssignmentComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Ph\xE2n c\xF4ng Bu\u1ED5i h\u1ECDc");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "G\xE1n Gi\u1EA3ng vi\xEAn ch\xEDnh, Gi\xE1o vi\xEAn n\u01B0\u1EDBc ngo\xE0i v\xE0 Tr\u1EE3 gi\u1EA3ng v\xE0o t\u1EEBng ca l\u1ECBch h\u1ECDc c\u1EE5 th\u1EC3 c\u1EE7a l\u1EDBp");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 4)(8, "div", 5)(9, "select", 6);
      \u0275\u0275listener("change", function ScheduleAssignmentComponent_Template_select_change_9_listener($event) {
        return ctx.onFilterClassChange($event);
      });
      \u0275\u0275elementStart(10, "option", 7);
      \u0275\u0275text(11, "-- T\u1EA5t c\u1EA3 l\u1EDBp h\u1ECDc --");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(12, ScheduleAssignmentComponent_For_13_Template, 2, 3, "option", 8, _forTrack06);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 9)(15, "div", 10);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(16, "svg", 11);
      \u0275\u0275element(17, "path", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275element(18, "input", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "button", 14);
      \u0275\u0275listener("click", function ScheduleAssignmentComponent_Template_button_click_19_listener() {
        return ctx.openModal();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(20, "svg", 15);
      \u0275\u0275element(21, "path", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275text(22, " Ph\xE2n c\xF4ng ca m\u1EDBi ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(23, "div", 17)(24, "table", 18)(25, "thead", 19)(26, "tr")(27, "th", 20);
      \u0275\u0275text(28, "STT");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "th", 20);
      \u0275\u0275text(30, "L\u1EDBp h\u1ECDc");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "th", 20);
      \u0275\u0275text(32, "Ca l\u1ECBch h\u1ECDc / Khung gi\u1EDD");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "th", 20);
      \u0275\u0275text(34, "Gi\u1EA3ng vi\xEAn / Tr\u1EE3 gi\u1EA3ng");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "th", 20);
      \u0275\u0275text(36, "Vai tr\xF2 ca d\u1EA1y");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "th", 21);
      \u0275\u0275text(38, "Thao t\xE1c");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(39, "tbody", 22);
      \u0275\u0275conditionalCreate(40, ScheduleAssignmentComponent_Conditional_40_Template, 6, 0, "tr")(41, ScheduleAssignmentComponent_Conditional_41_Template, 3, 0, "tr")(42, ScheduleAssignmentComponent_Conditional_42_Template, 2, 0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "div", 23)(44, "div", 24);
      \u0275\u0275text(45, " Hi\u1EC3n th\u1ECB ");
      \u0275\u0275elementStart(46, "span", 25);
      \u0275\u0275text(47);
      \u0275\u0275elementEnd();
      \u0275\u0275text(48, " - ");
      \u0275\u0275elementStart(49, "span", 25);
      \u0275\u0275text(50);
      \u0275\u0275elementEnd();
      \u0275\u0275text(51, " trong t\u1ED5ng s\u1ED1 ");
      \u0275\u0275elementStart(52, "span", 25);
      \u0275\u0275text(53);
      \u0275\u0275elementEnd();
      \u0275\u0275text(54, " k\u1EBFt qu\u1EA3 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "div", 26)(56, "button", 27);
      \u0275\u0275listener("click", function ScheduleAssignmentComponent_Template_button_click_56_listener() {
        return ctx.changePage(ctx.currentPage() - 1);
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(57, "svg", 28);
      \u0275\u0275element(58, "path", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275text(59, " Tr\u01B0\u1EDBc ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(60, "span", 30);
      \u0275\u0275text(61);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "button", 27);
      \u0275\u0275listener("click", function ScheduleAssignmentComponent_Template_button_click_62_listener() {
        return ctx.changePage(ctx.currentPage() + 1);
      });
      \u0275\u0275text(63, " Sau ");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(64, "svg", 31);
      \u0275\u0275element(65, "path", 32);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275conditionalCreate(66, ScheduleAssignmentComponent_Conditional_66_Template, 55, 13, "div", 33);
      \u0275\u0275conditionalCreate(67, ScheduleAssignmentComponent_Conditional_67_Template, 17, 0, "div", 33);
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275property("value", ctx.selectedFilterClassId() || "");
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.availableClasses());
      \u0275\u0275advance(6);
      \u0275\u0275property("formControl", ctx.searchControl);
      \u0275\u0275advance(22);
      \u0275\u0275conditional(ctx.isLoading() && ctx.assignments().length === 0 ? 40 : ctx.assignments().length === 0 ? 41 : 42);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.startIndex());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.endIndex());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.totalElements());
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", ctx.currentPage() === 1);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate2(" ", ctx.currentPage(), " / ", ctx.totalPages(), " ");
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.currentPage() >= ctx.totalPages());
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.isModalOpen() ? 66 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isDeleteModalOpen() ? 67 : -1);
    }
  }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormControlDirective, FormGroupDirective, FormControlName], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScheduleAssignmentComponent, [{
    type: Component,
    args: [{ selector: "app-schedule-assignment", imports: [CommonModule, ReactiveFormsModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="space-y-6">\r
  <!-- PAGE HEADER -->\r
  <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-gray-100">\r
    <div>\r
      <h1 class="text-2xl font-extrabold text-gray-900 tracking-tight">Ph\xE2n c\xF4ng Bu\u1ED5i h\u1ECDc</h1>\r
      <p class="text-sm text-gray-500 mt-1">G\xE1n Gi\u1EA3ng vi\xEAn ch\xEDnh, Gi\xE1o vi\xEAn n\u01B0\u1EDBc ngo\xE0i v\xE0 Tr\u1EE3 gi\u1EA3ng v\xE0o t\u1EEBng ca l\u1ECBch h\u1ECDc c\u1EE5 th\u1EC3 c\u1EE7a l\u1EDBp</p>\r
    </div>\r
    <div class="flex flex-wrap items-center gap-3">\r
      \r
      <!-- Filter Class Select -->\r
      <div class="w-56">\r
        <select \r
          [value]="selectedFilterClassId() || ''"\r
          (change)="onFilterClassChange($event)"\r
          class="bg-white border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-500 block w-full p-2.5 outline-none transition shadow-sm font-medium"\r
        >\r
          <option value="">-- T\u1EA5t c\u1EA3 l\u1EDBp h\u1ECDc --</option>\r
          @for (c of availableClasses(); track c.id) {\r
            <option [value]="c.id">{{ c.code }} - {{ c.name }}</option>\r
          }\r
        </select>\r
      </div>\r
\r
      <!-- Search Input -->\r
      <div class="relative">\r
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">\r
          <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>\r
          </svg>\r
        </div>\r
        <input \r
          type="text" \r
          [formControl]="searchControl" \r
          placeholder="T\xECm gi\u1EA3ng vi\xEAn ho\u1EB7c m\xE3 l\u1EDBp..." \r
          class="bg-white border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-500 block w-56 pl-10 p-2.5 outline-none transition shadow-sm"\r
        >\r
      </div>\r
\r
      <!-- Add Button -->\r
      <button \r
        (click)="openModal()" \r
        class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-5 rounded-xl flex items-center transition shadow-md hover:shadow-lg text-sm"\r
      >\r
        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>\r
        </svg>\r
        Ph\xE2n c\xF4ng ca m\u1EDBi\r
      </button>\r
    </div>\r
  </div>\r
\r
  <!-- DATA TABLE -->\r
  <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">\r
    <table class="w-full text-sm text-left text-gray-500">\r
      <thead class="text-xs text-gray-500 uppercase bg-gray-50/80 border-b border-gray-100 font-semibold">\r
        <tr>\r
          <th scope="col" class="px-6 py-4">STT</th>\r
          <th scope="col" class="px-6 py-4">L\u1EDBp h\u1ECDc</th>\r
          <th scope="col" class="px-6 py-4">Ca l\u1ECBch h\u1ECDc / Khung gi\u1EDD</th>\r
          <th scope="col" class="px-6 py-4">Gi\u1EA3ng vi\xEAn / Tr\u1EE3 gi\u1EA3ng</th>\r
          <th scope="col" class="px-6 py-4">Vai tr\xF2 ca d\u1EA1y</th>\r
          <th scope="col" class="px-6 py-4 text-right">Thao t\xE1c</th>\r
        </tr>\r
      </thead>\r
      <tbody class="divide-y divide-gray-50">\r
        @if (isLoading() && assignments().length === 0) {\r
          <tr>\r
            <td colspan="6" class="px-6 py-12 text-center text-gray-500">\r
              <svg class="animate-spin mx-auto h-8 w-8 text-blue-500 mb-3" fill="none" viewBox="0 0 24 24">\r
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>\r
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>\r
              </svg>\r
              \u0110ang t\u1EA3i danh s\xE1ch ph\xE2n c\xF4ng ca h\u1ECDc...\r
            </td>\r
          </tr>\r
        } @else if (assignments().length === 0) {\r
          <tr>\r
            <td colspan="6" class="px-6 py-12 text-center text-gray-500">\r
              Kh\xF4ng t\xECm th\u1EA5y ph\xE2n c\xF4ng bu\u1ED5i h\u1ECDc n\xE0o.\r
            </td>\r
          </tr>\r
        } @else {\r
          @for (a of assignments(); track a.id; let idx = $index) {\r
            <tr class="bg-white hover:bg-blue-50/50 transition duration-200">\r
              <!-- Index -->\r
              <td class="px-6 py-4 font-semibold text-gray-400">\r
                #{{ startIndex() + idx }}\r
              </td>\r
              <!-- Class Info -->\r
              <td class="px-6 py-4">\r
                <div class="font-bold text-gray-900">{{ a.className || '---' }}</div>\r
                <div class="font-mono text-xs text-blue-600 mt-0.5">{{ a.classCode || 'M\xE3 l\u1EDBp' }}</div>\r
              </td>\r
              <!-- Schedule Info -->\r
              <td class="px-6 py-4">\r
                @if (a.dayOfWeek || a.startTime) {\r
                  <div class="font-bold text-gray-900 flex items-center space-x-1.5">\r
                    <span class="px-2 py-0.5 bg-blue-50 text-blue-700 rounded text-xs font-semibold border border-blue-100">\r
                      {{ formatDayOfWeek(a.dayOfWeek) }}\r
                    </span>\r
                    <span class="text-xs text-gray-700 font-mono">\r
                      {{ a.startTime }} - {{ a.endTime }}\r
                    </span>\r
                  </div>\r
                  @if (a.roomName) {\r
                    <div class="text-xs text-gray-500 mt-1 flex items-center">\r
                      <svg class="w-3.5 h-3.5 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0v-5a2 2 0 012-2h2a2 2 0 012 2v5m-6 0h6"></path>\r
                      </svg>\r
                      {{ a.roomName }}\r
                    </div>\r
                  }\r
                } @else {\r
                  <span class="px-2.5 py-1 bg-gray-100 text-gray-800 rounded-lg font-mono text-xs font-semibold">\r
                    Ca h\u1ECDc #{{ a.scheduleId }}\r
                  </span>\r
                }\r
              </td>\r
              <!-- Teacher Info -->\r
              <td class="px-6 py-4">\r
                <div class="font-bold text-gray-900">{{ a.teacherName || '---' }}</div>\r
                <div class="font-mono text-xs text-gray-500 mt-0.5">{{ a.staffCode || 'M\xE3 NV' }}</div>\r
              </td>\r
              <!-- Role Badge -->\r
              <td class="px-6 py-4">\r
                @let badge = getRoleBadge(a.role);\r
                <span class="px-3 py-1 text-xs font-semibold rounded-full border inline-flex items-center" [class]="badge.bgClass + ' ' + badge.textClass + ' ' + badge.borderClass">\r
                  {{ badge.label }}\r
                </span>\r
              </td>\r
              <!-- Actions -->\r
              <td class="px-6 py-4 text-right space-x-3">\r
                <button \r
                  (click)="openModal(a)" \r
                  class="font-medium text-blue-600 hover:text-blue-800 transition text-sm"\r
                >\r
                  Ch\u1EC9nh s\u1EEDa\r
                </button>\r
                <button \r
                  (click)="onDelete(a.id!)" \r
                  class="font-medium text-red-600 hover:text-red-800 transition text-sm"\r
                >\r
                  X\xF3a\r
                </button>\r
              </td>\r
            </tr>\r
          }\r
        }\r
      </tbody>\r
    </table>\r
\r
    <!-- PAGINATION FOOTER -->\r
    <div class="flex flex-col sm:flex-row items-center justify-between px-6 py-4 bg-gray-50/80 border-t border-gray-100 rounded-b-2xl gap-3">\r
      <div class="text-sm text-gray-500">\r
        Hi\u1EC3n th\u1ECB <span class="font-semibold text-gray-900">{{ startIndex() }}</span> \r
        - <span class="font-semibold text-gray-900">{{ endIndex() }}</span> \r
        trong t\u1ED5ng s\u1ED1 <span class="font-semibold text-gray-900">{{ totalElements() }}</span> k\u1EBFt qu\u1EA3\r
      </div>\r
      \r
      <div class="flex space-x-2">\r
        <button \r
          (click)="changePage(currentPage() - 1)" \r
          [disabled]="currentPage() === 1"\r
          class="px-3.5 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition shadow-sm flex items-center"\r
        >\r
          <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>\r
          </svg>\r
          Tr\u01B0\u1EDBc\r
        </button>\r
\r
        <span class="px-3.5 py-1.5 text-sm font-semibold text-gray-800 bg-gray-100 rounded-lg flex items-center">\r
          {{ currentPage() }} / {{ totalPages() }}\r
        </span>\r
\r
        <button \r
          (click)="changePage(currentPage() + 1)" \r
          [disabled]="currentPage() >= totalPages()"\r
          class="px-3.5 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition shadow-sm flex items-center"\r
        >\r
          Sau\r
          <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>\r
          </svg>\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- MODAL TH\xCAM / C\u1EACP NH\u1EACT PH\xC2N C\xD4NG BU\u1ED4I H\u1ECCC -->\r
@if (isModalOpen()) {\r
  <div class="fixed inset-0 z-50 overflow-y-auto">\r
    <div class="fixed inset-0 bg-gray-900/50 backdrop-blur-sm transition-opacity" (click)="closeModal()"></div>\r
\r
    <div class="flex min-h-full items-center justify-center p-4">\r
      <div class="relative w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl transition-all border border-gray-100">\r
        \r
        <!-- Modal Header -->\r
        <div class="flex items-center justify-between pb-4 border-b border-gray-100">\r
          <h3 class="text-xl font-bold text-gray-900">\r
            {{ isEditing() ? 'C\u1EADp nh\u1EADt ph\xE2n c\xF4ng bu\u1ED5i h\u1ECDc' : 'Ph\xE2n c\xF4ng gi\xE1o vi\xEAn v\xE0o ca h\u1ECDc m\u1EDBi' }}\r
          </h3>\r
          <button (click)="closeModal()" class="text-gray-400 hover:text-gray-600 transition">\r
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>\r
            </svg>\r
          </button>\r
        </div>\r
\r
        <!-- Modal Form -->\r
        <form [formGroup]="assignmentForm" (ngSubmit)="onSubmit()" class="mt-4 space-y-4">\r
          \r
          <!-- Class Select -->\r
          <div>\r
            <label class="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">\r
              Ch\u1ECDn L\u1EDBp h\u1ECDc <span class="text-red-500">*</span>\r
            </label>\r
            <select \r
              formControlName="classId"\r
              class="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition bg-white font-semibold text-gray-900"\r
              [class.border-red-400]="isFormSubmitted() && assignmentForm.get('classId')?.invalid"\r
            >\r
              <option value="">-- Ch\u1ECDn L\u1EDBp h\u1ECDc --</option>\r
              @for (cls of availableClasses(); track cls.id) {\r
                <option [value]="cls.id">{{ cls.code }} - {{ cls.name }}</option>\r
              }\r
            </select>\r
            @if (isFormSubmitted() && assignmentForm.get('classId')?.hasError('required')) {\r
              <p class="mt-1 text-xs text-red-500">Vui l\xF2ng ch\u1ECDn l\u1EDBp h\u1ECDc</p>\r
            }\r
          </div>\r
\r
          <!-- Schedule Select -->\r
          <div>\r
            <label class="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">\r
              Ch\u1ECDn Ca l\u1ECBch h\u1ECDc <span class="text-red-500">*</span>\r
            </label>\r
            <select \r
              formControlName="scheduleId"\r
              class="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition bg-white font-semibold text-gray-900"\r
              [class.border-red-400]="isFormSubmitted() && assignmentForm.get('scheduleId')?.invalid"\r
            >\r
              @if (modalSchedules().length === 0) {\r
                <option value="">-- L\u1EDBp n\xE0y ch\u01B0a c\xF3 ca h\u1ECDc n\xE0o --</option>\r
              } @else {\r
                <option value="">-- Ch\u1ECDn Ca h\u1ECDc --</option>\r
                @for (sch of modalSchedules(); track sch.id) {\r
                  <option [value]="sch.id">{{ formatScheduleLabel(sch) }}</option>\r
                }\r
              }\r
            </select>\r
            @if (isFormSubmitted() && assignmentForm.get('scheduleId')?.hasError('required')) {\r
              <p class="mt-1 text-xs text-red-500">Vui l\xF2ng ch\u1ECDn ca l\u1ECBch h\u1ECDc</p>\r
            }\r
          </div>\r
\r
          <!-- Teacher Select -->\r
          <div>\r
            <label class="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">\r
              Gi\u1EA3ng vi\xEAn / Nh\xE2n s\u1EF1 <span class="text-red-500">*</span>\r
            </label>\r
            <select \r
              formControlName="staffId"\r
              class="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition bg-white font-semibold text-gray-900"\r
              [class.border-red-400]="isFormSubmitted() && assignmentForm.get('staffId')?.invalid"\r
            >\r
              <option value="">-- Ch\u1ECDn Gi\u1EA3ng vi\xEAn --</option>\r
              @for (st of availableStaffs(); track st.id) {\r
                <option [value]="st.id">{{ st.fullName }} ({{ st.staffCode }} - {{ formatStaffTypeLabel(st.staffType) }})</option>\r
              }\r
            </select>\r
            @if (isFormSubmitted() && assignmentForm.get('staffId')?.hasError('required')) {\r
              <p class="mt-1 text-xs text-red-500">Vui l\xF2ng ch\u1ECDn gi\u1EA3ng vi\xEAn/nh\xE2n s\u1EF1</p>\r
            }\r
          </div>\r
\r
          <!-- Role Select -->\r
          <div>\r
            <label class="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">\r
              Vai tr\xF2 trong ca h\u1ECDc <span class="text-red-500">*</span>\r
            </label>\r
            <select \r
              formControlName="role"\r
              class="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition bg-white font-semibold text-gray-900"\r
            >\r
              @for (r of roleOptions; track r.value) {\r
                <option [value]="r.value">{{ r.label }}</option>\r
              }\r
            </select>\r
          </div>\r
\r
          <!-- Modal Footer Actions -->\r
          <div class="flex justify-end space-x-3 pt-4 border-t border-gray-100">\r
            <button \r
              type="button" \r
              (click)="closeModal()"\r
              class="px-4 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition"\r
            >\r
              H\u1EE7y b\u1ECF\r
            </button>\r
            <button \r
              type="submit"\r
              class="px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition shadow-md"\r
            >\r
              {{ isEditing() ? 'C\u1EADp nh\u1EADt' : 'T\u1EA1o m\u1EDBi' }}\r
            </button>\r
          </div>\r
        </form>\r
      </div>\r
    </div>\r
  </div>\r
}\r
\r
<!-- MODAL X\xC1C NH\u1EACN X\xD3A -->\r
@if (isDeleteModalOpen()) {\r
  <div class="fixed inset-0 z-50 overflow-y-auto">\r
    <div class="fixed inset-0 bg-gray-900/50 backdrop-blur-sm transition-opacity" (click)="closeDeleteModal()"></div>\r
\r
    <div class="flex min-h-full items-center justify-center p-4">\r
      <div class="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl transition-all border border-gray-100">\r
        <div class="flex items-center space-x-3 text-red-600 mb-4">\r
          <div class="p-3 bg-red-50 rounded-full">\r
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>\r
            </svg>\r
          </div>\r
          <h3 class="text-lg font-bold text-gray-900">X\xE1c nh\u1EADn h\u1EE7y ph\xE2n c\xF4ng ca</h3>\r
        </div>\r
        <p class="text-sm text-gray-600 mb-6">\r
          B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n h\u1EE7y ph\xE2n c\xF4ng gi\xE1o vi\xEAn v\xE0o ca h\u1ECDc n\xE0y kh\xF4ng? H\xE0nh \u0111\u1ED9ng n\xE0y kh\xF4ng th\u1EC3 ho\xE0n t\xE1c.\r
        </p>\r
        <div class="flex justify-end space-x-3">\r
          <button \r
            (click)="closeDeleteModal()"\r
            class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition"\r
          >\r
            H\u1EE7y\r
          </button>\r
          <button \r
            (click)="confirmDelete()"\r
            class="px-4 py-2 text-sm font-semibold text-white bg-red-600 hover:bg-red-700 rounded-xl transition shadow-md"\r
          >\r
            \u0110\u1ED3ng \xFD X\xF3a\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
}\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ScheduleAssignmentComponent, { className: "ScheduleAssignmentComponent", filePath: "src/app/features/academic/pages/schedule-assignment/schedule-assignment.component.ts", lineNumber: 22 });
})();

// src/app/modules/teaching/models/teaching-substitution.model.ts
var SUBSTITUTION_STATUS_MAP = {
  PENDING: { label: "Ch\u1EDD duy\u1EC7t", bgClass: "bg-amber-50", textClass: "text-amber-700", borderClass: "border-amber-200" },
  APPROVED: { label: "\u0110\xE3 duy\u1EC7t", bgClass: "bg-emerald-50", textClass: "text-emerald-700", borderClass: "border-emerald-200" },
  REJECTED: { label: "T\u1EEB ch\u1ED1i", bgClass: "bg-red-50", textClass: "text-red-700", borderClass: "border-red-200" },
  COMPLETED: { label: "Ho\xE0n th\xE0nh", bgClass: "bg-blue-50", textClass: "text-blue-700", borderClass: "border-blue-200" }
};
var SUBSTITUTION_STATUS_OPTIONS = [
  { value: "PENDING", label: "Ch\u1EDD duy\u1EC7t" },
  { value: "APPROVED", label: "\u0110\xE3 duy\u1EC7t" },
  { value: "REJECTED", label: "T\u1EEB ch\u1ED1i" },
  { value: "COMPLETED", label: "Ho\xE0n th\xE0nh" }
];

// src/app/features/academic/pages/teaching-substitution/teaching-substitution.component.ts
var _forTrack07 = ($index, $item) => $item.id;
var _forTrack13 = ($index, $item) => $item.value;
function TeachingSubstitutionComponent_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r1 = ctx.$implicit;
    \u0275\u0275property("value", c_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", c_r1.code, " - ", c_r1.name);
  }
}
function TeachingSubstitutionComponent_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 36);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 37);
    \u0275\u0275element(3, "circle", 38)(4, "path", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " \u0110ang t\u1EA3i danh s\xE1ch d\u1EA1y thay... ");
    \u0275\u0275elementEnd()();
  }
}
function TeachingSubstitutionComponent_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 36);
    \u0275\u0275text(2, " Kh\xF4ng t\xECm th\u1EA5y ph\xE2n c\xF4ng d\u1EA1y thay n\xE0o. ");
    \u0275\u0275elementEnd()();
  }
}
function TeachingSubstitutionComponent_Conditional_48_For_1_Conditional_9_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 62);
    \u0275\u0275element(2, "path", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", s_r3.roomName, " ");
  }
}
function TeachingSubstitutionComponent_Conditional_48_For_1_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58)(1, "span", 59);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 60);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(5, TeachingSubstitutionComponent_Conditional_48_For_1_Conditional_9_Conditional_5_Template, 4, 1, "div", 61);
  }
  if (rf & 2) {
    const s_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r3.formatDayOfWeek(s_r3.dayOfWeek), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", s_r3.startTime, " - ", s_r3.endTime, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(s_r3.roomName ? 5 : -1);
  }
}
function TeachingSubstitutionComponent_Conditional_48_For_1_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Ca h\u1ECDc #", s_r3.scheduleId, " ");
  }
}
function TeachingSubstitutionComponent_Conditional_48_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 40)(1, "td", 41);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 42)(4, "div", 43);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 44);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td", 42);
    \u0275\u0275conditionalCreate(9, TeachingSubstitutionComponent_Conditional_48_For_1_Conditional_9_Template, 6, 4)(10, TeachingSubstitutionComponent_Conditional_48_For_1_Conditional_10_Template, 2, 1, "span", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 42)(12, "div", 46);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 47);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td", 42)(17, "div", 48);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 47);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "td", 49)(22, "div", 50)(23, "span", 51);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 52);
    \u0275\u0275text(26, "\u2794");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 51);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "td", 53);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "td", 42)(32, "span", 54);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "td", 55)(35, "button", 56);
    \u0275\u0275listener("click", function TeachingSubstitutionComponent_Conditional_48_For_1_Template_button_click_35_listener() {
      const s_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.openModal(s_r3));
    });
    \u0275\u0275text(36, " Ch\u1EC9nh s\u1EEDa ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "button", 57);
    \u0275\u0275listener("click", function TeachingSubstitutionComponent_Conditional_48_For_1_Template_button_click_37_listener() {
      const s_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onDelete(s_r3.id));
    });
    \u0275\u0275text(38, " X\xF3a ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const s_r3 = ctx.$implicit;
    const \u0275$index_99_r5 = ctx.$index;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" #", ctx_r3.startIndex() + \u0275$index_99_r5, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r3.className || "---");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r3.classCode || "M\xE3 l\u1EDBp");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(s_r3.dayOfWeek || s_r3.startTime ? 9 : 10);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(s_r3.absentStaffName || "---");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r3.absentStaffCode || "M\xE3 NV");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r3.substituteStaffName || "---");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r3.substituteStaffCode || "M\xE3 NV");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r3.formatDateVN(s_r3.startDate));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r3.formatDateVN(s_r3.endDate));
    \u0275\u0275advance();
    \u0275\u0275property("title", s_r3.reason);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", s_r3.reason || "---", " ");
    const badge_r6 = ctx_r3.getStatusBadge(s_r3.status);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(badge_r6.bgClass + " " + badge_r6.textClass + " " + badge_r6.borderClass);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", badge_r6.label, " ");
  }
}
function TeachingSubstitutionComponent_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, TeachingSubstitutionComponent_Conditional_48_For_1_Template, 39, 15, "tr", 40, _forTrack07);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r3.substitutions());
  }
}
function TeachingSubstitutionComponent_Conditional_72_For_21_Template(rf, ctx) {
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
function TeachingSubstitutionComponent_Conditional_72_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 9);
    \u0275\u0275text(1, "-- Ch\u1ECDn L\u1EDBp tr\u01B0\u1EDBc --");
    \u0275\u0275elementEnd();
  }
}
function TeachingSubstitutionComponent_Conditional_72_Conditional_29_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const sch_r9 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275property("value", sch_r9.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.formatScheduleLabel(sch_r9));
  }
}
function TeachingSubstitutionComponent_Conditional_72_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 9);
    \u0275\u0275text(1, "-- Ch\u1ECDn Ca h\u1ECDc --");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(2, TeachingSubstitutionComponent_Conditional_72_Conditional_29_For_3_Template, 2, 2, "option", 10, _forTrack07);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r3.modalSchedules());
  }
}
function TeachingSubstitutionComponent_Conditional_72_Conditional_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 84);
    \u0275\u0275text(1, "\u0110ang t\xECm GV ca h\u1ECDc...");
    \u0275\u0275elementEnd();
  }
}
function TeachingSubstitutionComponent_Conditional_72_Conditional_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 96)(1, "div", 97);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 98);
    \u0275\u0275element(3, "path", 99);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementStart(6, "span", 100);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275element(8, "input", 101);
    \u0275\u0275elementStart(9, "p", 102);
    \u0275\u0275text(10, "\u2713 \u0110\xE3 c\u1ED1 \u0111\u1ECBnh theo ph\xE2n c\xF4ng ch\xEDnh c\u1EE7a Ca l\u1ECBch h\u1ECDc n\xE0y.");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", (tmp_4_0 = ctx_r3.assignedAbsentTeacher()) == null ? null : tmp_4_0.fullName, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", ((tmp_5_0 = ctx_r3.assignedAbsentTeacher()) == null ? null : tmp_5_0.staffCode) || "NS#" + ((tmp_5_0 = ctx_r3.assignedAbsentTeacher()) == null ? null : tmp_5_0.id), ")");
  }
}
function TeachingSubstitutionComponent_Conditional_72_Conditional_64_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const st_r12 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275property("value", st_r12.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3("", st_r12.fullName, " (", st_r12.staffCode, " - ", ctx_r3.formatStaffTypeLabel(st_r12.staffType), ")");
  }
}
function TeachingSubstitutionComponent_Conditional_72_Conditional_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "select", 103)(1, "option", 9);
    \u0275\u0275text(2, "-- Ch\u1ECDn Ca h\u1ECDc \u0111\u1EC3 t\u1EF1 l\u1EA5y GV v\u1EAFng m\u1EB7t --");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, TeachingSubstitutionComponent_Conditional_72_Conditional_64_For_4_Template, 2, 4, "option", 10, _forTrack07);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 89);
    \u0275\u0275text(6, "Ch\u1ECDn Ca l\u1ECBch h\u1ECDc \u1EDF tr\xEAn \u0111\u1EC3 h\u1EC7 th\u1ED1ng t\u1EF1 \u0111\u1ED9ng x\xE1c \u0111\u1ECBnh gi\xE1o vi\xEAn v\u1EAFng m\u1EB7t.");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("border-red-400", ctx_r3.isFormSubmitted() && ((tmp_4_0 = ctx_r3.substitutionForm.get("absentStaffId")) == null ? null : tmp_4_0.invalid));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r3.availableStaffs());
  }
}
function TeachingSubstitutionComponent_Conditional_72_Conditional_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 84);
    \u0275\u0275text(1, "\u0110ang ki\u1EC3m tra...");
    \u0275\u0275elementEnd();
  }
}
function TeachingSubstitutionComponent_Conditional_72_Conditional_73_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const st_r13 = ctx.$implicit;
    \u0275\u0275property("value", st_r13.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("\u2714 ", st_r13.fullName, " (", st_r13.staffCode || "NS#" + st_r13.id, ") - Tr\u1ED1ng l\u1ECBch");
  }
}
function TeachingSubstitutionComponent_Conditional_72_Conditional_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 9);
    \u0275\u0275text(1, "-- Ch\u1ECDn GV D\u1EA1y thay (Tr\u1ED1ng l\u1ECBch) --");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(2, TeachingSubstitutionComponent_Conditional_72_Conditional_73_For_3_Template, 2, 3, "option", 10, _forTrack07);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r3.availableSubstituteTeachers());
  }
}
function TeachingSubstitutionComponent_Conditional_72_Conditional_74_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const st_r14 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275property("value", st_r14.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3("", st_r14.fullName, " (", st_r14.staffCode, " - ", ctx_r3.formatStaffTypeLabel(st_r14.staffType), ")");
  }
}
function TeachingSubstitutionComponent_Conditional_72_Conditional_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 9);
    \u0275\u0275text(1, "-- T\u1EA5t c\u1EA3 GV \u0111\u1EC1u b\u1EADn - Ch\u1ECDn GV b\xEAn d\u01B0\u1EDBi --");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(2, TeachingSubstitutionComponent_Conditional_72_Conditional_74_For_3_Template, 2, 4, "option", 10, _forTrack07);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r3.availableStaffs());
  }
}
function TeachingSubstitutionComponent_Conditional_72_Conditional_75_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const st_r15 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275property("value", st_r15.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3("", st_r15.fullName, " (", st_r15.staffCode, " - ", ctx_r3.formatStaffTypeLabel(st_r15.staffType), ")");
  }
}
function TeachingSubstitutionComponent_Conditional_72_Conditional_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 9);
    \u0275\u0275text(1, "-- Ch\u1ECDn L\u1ECBch h\u1ECDc & Ng\xE0y \u0111\u1EC3 l\u1ECDc GV tr\u1ED1ng l\u1ECBch --");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(2, TeachingSubstitutionComponent_Conditional_72_Conditional_75_For_3_Template, 2, 4, "option", 10, _forTrack07);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r3.availableStaffs());
  }
}
function TeachingSubstitutionComponent_Conditional_72_Conditional_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 87);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u2713 \u0110\xE3 t\u1EF1 \u0111\u1ED9ng l\u1ECDc ", ctx_r3.availableSubstituteTeachers().length, " gi\u1EA3ng vi\xEAn kh\xF4ng b\u1ECB tr\xF9ng ca d\u1EA1y ch\xEDnh & ca d\u1EA1y thay kh\xE1c.");
  }
}
function TeachingSubstitutionComponent_Conditional_72_Conditional_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 88);
    \u0275\u0275text(1, "\u26A0\uFE0F T\u1EA5t c\u1EA3 GV \u0111\u1EC1u c\xF3 l\u1ECBch trong ca n\xE0y. B\u1EA1n v\u1EABn c\xF3 th\u1EC3 ch\u1ECDn GV b\xEAn d\u01B0\u1EDBi \u0111\u1EC3 h\u1EC7 th\u1ED1ng ki\u1EC3m tra chi ti\u1EBFt khi l\u01B0u.");
    \u0275\u0275elementEnd();
  }
}
function TeachingSubstitutionComponent_Conditional_72_Conditional_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 89);
    \u0275\u0275text(1, "Vui l\xF2ng ch\u1ECDn Ca l\u1ECBch h\u1ECDc v\xE0 Th\u1EDDi gian \u0111\u1EC3 h\u1EC7 th\u1ED1ng t\u1EF1 \u0111\u1ED9ng l\u1ECDc GV tr\u1ED1ng l\u1ECBch.");
    \u0275\u0275elementEnd();
  }
}
function TeachingSubstitutionComponent_Conditional_72_Conditional_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 91);
    \u0275\u0275text(1, "Vui l\xF2ng nh\u1EADp l\xFD do d\u1EA1y thay");
    \u0275\u0275elementEnd();
  }
}
function TeachingSubstitutionComponent_Conditional_72_For_93_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const st_r16 = ctx.$implicit;
    \u0275\u0275property("value", st_r16.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(st_r16.label);
  }
}
function TeachingSubstitutionComponent_Conditional_72_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35)(1, "div", 64);
    \u0275\u0275listener("click", function TeachingSubstitutionComponent_Conditional_72_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeModal());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 65)(3, "div", 66)(4, "div", 67)(5, "h3", 68);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 69);
    \u0275\u0275listener("click", function TeachingSubstitutionComponent_Conditional_72_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 70);
    \u0275\u0275element(9, "path", 71);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(10, "form", 72);
    \u0275\u0275listener("ngSubmit", function TeachingSubstitutionComponent_Conditional_72_Template_form_ngSubmit_10_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onSubmit());
    });
    \u0275\u0275elementStart(11, "div", 73)(12, "div")(13, "label", 74);
    \u0275\u0275text(14, " L\u1EDBp h\u1ECDc ");
    \u0275\u0275elementStart(15, "span", 75);
    \u0275\u0275text(16, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "select", 76)(18, "option", 9);
    \u0275\u0275text(19, "-- Ch\u1ECDn L\u1EDBp --");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(20, TeachingSubstitutionComponent_Conditional_72_For_21_Template, 2, 3, "option", 10, _forTrack07);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div")(23, "label", 74);
    \u0275\u0275text(24, " Ca l\u1ECBch h\u1ECDc ");
    \u0275\u0275elementStart(25, "span", 75);
    \u0275\u0275text(26, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "select", 77);
    \u0275\u0275conditionalCreate(28, TeachingSubstitutionComponent_Conditional_72_Conditional_28_Template, 2, 0, "option", 9)(29, TeachingSubstitutionComponent_Conditional_72_Conditional_29_Template, 4, 0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 73)(31, "div")(32, "label", 74);
    \u0275\u0275text(33, " Ng\xE0y b\u1EAFt \u0111\u1EA7u d\u1EA1y thay ");
    \u0275\u0275elementStart(34, "span", 75);
    \u0275\u0275text(35, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 78);
    \u0275\u0275listener("click", function TeachingSubstitutionComponent_Conditional_72_Template_div_click_36_listener() {
      \u0275\u0275restoreView(_r7);
      const startDatePicker_r10 = \u0275\u0275reference(42);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.openPicker(startDatePicker_r10));
    });
    \u0275\u0275elementStart(37, "input", 79);
    \u0275\u0275listener("input", function TeachingSubstitutionComponent_Conditional_72_Template_input_input_37_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onDateTextInput($event, "startDate"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 80);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(39, "svg", 70);
    \u0275\u0275element(40, "path", 81);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(41, "input", 82, 0);
    \u0275\u0275listener("change", function TeachingSubstitutionComponent_Conditional_72_Template_input_change_41_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onDatePickerChange($event, "startDate"));
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(43, "div")(44, "label", 74);
    \u0275\u0275text(45, " Ng\xE0y k\u1EBFt th\xFAc d\u1EA1y thay ");
    \u0275\u0275elementStart(46, "span", 75);
    \u0275\u0275text(47, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 78);
    \u0275\u0275listener("click", function TeachingSubstitutionComponent_Conditional_72_Template_div_click_48_listener() {
      \u0275\u0275restoreView(_r7);
      const endDatePicker_r11 = \u0275\u0275reference(54);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.openPicker(endDatePicker_r11));
    });
    \u0275\u0275elementStart(49, "input", 79);
    \u0275\u0275listener("input", function TeachingSubstitutionComponent_Conditional_72_Template_input_input_49_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onDateTextInput($event, "endDate"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "div", 80);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(51, "svg", 70);
    \u0275\u0275element(52, "path", 81);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(53, "input", 82, 1);
    \u0275\u0275listener("change", function TeachingSubstitutionComponent_Conditional_72_Template_input_change_53_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onDatePickerChange($event, "endDate"));
    });
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(55, "div", 73)(56, "div")(57, "label", 83)(58, "span");
    \u0275\u0275text(59, "Gi\u1EA3ng vi\xEAn V\u1EAFng m\u1EB7t ");
    \u0275\u0275elementStart(60, "span", 75);
    \u0275\u0275text(61, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(62, TeachingSubstitutionComponent_Conditional_72_Conditional_62_Template, 2, 0, "span", 84);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(63, TeachingSubstitutionComponent_Conditional_72_Conditional_63_Template, 11, 2)(64, TeachingSubstitutionComponent_Conditional_72_Conditional_64_Template, 7, 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "div")(66, "label", 85)(67, "span");
    \u0275\u0275text(68, "Gi\u1EA3ng vi\xEAn D\u1EA1y thay ");
    \u0275\u0275elementStart(69, "span", 75);
    \u0275\u0275text(70, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(71, TeachingSubstitutionComponent_Conditional_72_Conditional_71_Template, 2, 0, "span", 84);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "select", 86);
    \u0275\u0275conditionalCreate(73, TeachingSubstitutionComponent_Conditional_72_Conditional_73_Template, 4, 0)(74, TeachingSubstitutionComponent_Conditional_72_Conditional_74_Template, 4, 0)(75, TeachingSubstitutionComponent_Conditional_72_Conditional_75_Template, 4, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(76, TeachingSubstitutionComponent_Conditional_72_Conditional_76_Template, 2, 1, "p", 87)(77, TeachingSubstitutionComponent_Conditional_72_Conditional_77_Template, 2, 0, "p", 88)(78, TeachingSubstitutionComponent_Conditional_72_Conditional_78_Template, 2, 0, "p", 89);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(79, "div")(80, "label", 74);
    \u0275\u0275text(81, " L\xFD do d\u1EA1y thay ");
    \u0275\u0275elementStart(82, "span", 75);
    \u0275\u0275text(83, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(84, "textarea", 90);
    \u0275\u0275conditionalCreate(85, TeachingSubstitutionComponent_Conditional_72_Conditional_85_Template, 2, 0, "p", 91);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "div")(87, "label", 74);
    \u0275\u0275text(88, " Tr\u1EA1ng th\xE1i ");
    \u0275\u0275elementStart(89, "span", 75);
    \u0275\u0275text(90, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(91, "select", 92);
    \u0275\u0275repeaterCreate(92, TeachingSubstitutionComponent_Conditional_72_For_93_Template, 2, 2, "option", 10, _forTrack13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(94, "div", 93)(95, "button", 94);
    \u0275\u0275listener("click", function TeachingSubstitutionComponent_Conditional_72_Template_button_click_95_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeModal());
    });
    \u0275\u0275text(96, " H\u1EE7y b\u1ECF ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(97, "button", 95);
    \u0275\u0275text(98);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_7_0;
    let tmp_9_0;
    let tmp_11_0;
    let tmp_12_0;
    let tmp_14_0;
    let tmp_18_0;
    let tmp_19_0;
    let tmp_20_0;
    let tmp_21_0;
    let tmp_22_0;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r3.isEditing() ? "C\u1EADp nh\u1EADt th\xF4ng tin d\u1EA1y thay" : "T\u1EA1o m\u1EDBi ph\xE2n c\xF4ng d\u1EA1y thay", " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("formGroup", ctx_r3.substitutionForm);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("border-red-400", ctx_r3.isFormSubmitted() && ((tmp_5_0 = ctx_r3.substitutionForm.get("classId")) == null ? null : tmp_5_0.invalid));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r3.availableClasses());
    \u0275\u0275advance(7);
    \u0275\u0275classProp("border-red-400", ctx_r3.isFormSubmitted() && ((tmp_7_0 = ctx_r3.substitutionForm.get("scheduleId")) == null ? null : tmp_7_0.invalid));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.modalSchedules().length === 0 ? 28 : 29);
    \u0275\u0275advance(9);
    \u0275\u0275classProp("border-red-400", ctx_r3.isFormSubmitted() && ((tmp_9_0 = ctx_r3.substitutionForm.get("startDate")) == null ? null : tmp_9_0.invalid));
    \u0275\u0275property("value", ctx_r3.startDateDisplay());
    \u0275\u0275advance(4);
    \u0275\u0275property("value", (tmp_11_0 = ctx_r3.substitutionForm.get("startDate")) == null ? null : tmp_11_0.value);
    \u0275\u0275advance(8);
    \u0275\u0275classProp("border-red-400", ctx_r3.isFormSubmitted() && ((tmp_12_0 = ctx_r3.substitutionForm.get("endDate")) == null ? null : tmp_12_0.invalid));
    \u0275\u0275property("value", ctx_r3.endDateDisplay());
    \u0275\u0275advance(4);
    \u0275\u0275property("value", (tmp_14_0 = ctx_r3.substitutionForm.get("endDate")) == null ? null : tmp_14_0.value);
    \u0275\u0275advance(9);
    \u0275\u0275conditional(ctx_r3.isLoadingAbsentTeacher() ? 62 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.assignedAbsentTeacher() ? 63 : 64);
    \u0275\u0275advance(8);
    \u0275\u0275conditional(ctx_r3.isLoadingAvailableTeachers() ? 71 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("border-red-400", ctx_r3.isFormSubmitted() && ((tmp_18_0 = ctx_r3.substitutionForm.get("substituteStaffId")) == null ? null : tmp_18_0.invalid));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.availableSubstituteTeachers().length > 0 ? 73 : ((tmp_19_0 = ctx_r3.substitutionForm.get("scheduleId")) == null ? null : tmp_19_0.value) && ((tmp_19_0 = ctx_r3.substitutionForm.get("startDate")) == null ? null : tmp_19_0.value) && ((tmp_19_0 = ctx_r3.substitutionForm.get("endDate")) == null ? null : tmp_19_0.value) ? 74 : 75);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r3.availableSubstituteTeachers().length > 0 ? 76 : ((tmp_20_0 = ctx_r3.substitutionForm.get("scheduleId")) == null ? null : tmp_20_0.value) && ((tmp_20_0 = ctx_r3.substitutionForm.get("startDate")) == null ? null : tmp_20_0.value) && ((tmp_20_0 = ctx_r3.substitutionForm.get("endDate")) == null ? null : tmp_20_0.value) ? 77 : 78);
    \u0275\u0275advance(8);
    \u0275\u0275classProp("border-red-400", ctx_r3.isFormSubmitted() && ((tmp_21_0 = ctx_r3.substitutionForm.get("reason")) == null ? null : tmp_21_0.invalid));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.isFormSubmitted() && ((tmp_22_0 = ctx_r3.substitutionForm.get("reason")) == null ? null : tmp_22_0.hasError("required")) ? 85 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275repeater(ctx_r3.statusOptions);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r3.isEditing() ? "C\u1EADp nh\u1EADt" : "T\u1EA1o m\u1EDBi", " ");
  }
}
function TeachingSubstitutionComponent_Conditional_73_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35)(1, "div", 64);
    \u0275\u0275listener("click", function TeachingSubstitutionComponent_Conditional_73_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeDeleteModal());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 65)(3, "div", 104)(4, "div", 105)(5, "div", 106);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 107);
    \u0275\u0275element(7, "path", 108);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "h3", 109);
    \u0275\u0275text(9, "X\xE1c nh\u1EADn x\xF3a d\u1EA1y thay");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "p", 110);
    \u0275\u0275text(11, " B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a ph\xE2n c\xF4ng d\u1EA1y thay n\xE0y kh\xF4ng? H\xE0nh \u0111\u1ED9ng n\xE0y kh\xF4ng th\u1EC3 ho\xE0n t\xE1c. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 111)(13, "button", 112);
    \u0275\u0275listener("click", function TeachingSubstitutionComponent_Conditional_73_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeDeleteModal());
    });
    \u0275\u0275text(14, " H\u1EE7y ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 113);
    \u0275\u0275listener("click", function TeachingSubstitutionComponent_Conditional_73_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.confirmDelete());
    });
    \u0275\u0275text(16, " \u0110\u1ED3ng \xFD X\xF3a ");
    \u0275\u0275elementEnd()()()()();
  }
}
var TeachingSubstitutionComponent = class _TeachingSubstitutionComponent {
  substitutionService = inject(TeachingSubstitutionService);
  classesService = inject(ClassService);
  scheduleService = inject(ScheduleService);
  scheduleAssignmentService = inject(ScheduleAssignmentService);
  staffService = inject(StaffService);
  fb = inject(FormBuilder);
  destroyRef = inject(DestroyRef);
  toastService = inject(ToastService);
  // Constants
  statusOptions = SUBSTITUTION_STATUS_OPTIONS;
  statusMap = SUBSTITUTION_STATUS_MAP;
  dayMap = DAY_OF_WEEK_MAP;
  // State
  substitutions = signal([], ...ngDevMode ? [{ debugName: "substitutions" }] : (
    /* istanbul ignore next */
    []
  ));
  availableClasses = signal([], ...ngDevMode ? [{ debugName: "availableClasses" }] : (
    /* istanbul ignore next */
    []
  ));
  modalSchedules = signal([], ...ngDevMode ? [{ debugName: "modalSchedules" }] : (
    /* istanbul ignore next */
    []
  ));
  availableStaffs = signal([], ...ngDevMode ? [{ debugName: "availableStaffs" }] : (
    /* istanbul ignore next */
    []
  ));
  availableSubstituteTeachers = signal([], ...ngDevMode ? [{ debugName: "availableSubstituteTeachers" }] : (
    /* istanbul ignore next */
    []
  ));
  isLoadingAvailableTeachers = signal(false, ...ngDevMode ? [{ debugName: "isLoadingAvailableTeachers" }] : (
    /* istanbul ignore next */
    []
  ));
  assignedAbsentTeacher = signal(null, ...ngDevMode ? [{ debugName: "assignedAbsentTeacher" }] : (
    /* istanbul ignore next */
    []
  ));
  isLoadingAbsentTeacher = signal(false, ...ngDevMode ? [{ debugName: "isLoadingAbsentTeacher" }] : (
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
  // Filters
  selectedFilterClassId = signal(null, ...ngDevMode ? [{ debugName: "selectedFilterClassId" }] : (
    /* istanbul ignore next */
    []
  ));
  searchControl = new FormControl("");
  // Modal State
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
  substitutionForm;
  isFormSubmitted = signal(false, ...ngDevMode ? [{ debugName: "isFormSubmitted" }] : (
    /* istanbul ignore next */
    []
  ));
  // Date Displays
  startDateDisplay = signal("", ...ngDevMode ? [{ debugName: "startDateDisplay" }] : (
    /* istanbul ignore next */
    []
  ));
  endDateDisplay = signal("", ...ngDevMode ? [{ debugName: "endDateDisplay" }] : (
    /* istanbul ignore next */
    []
  ));
  // Delete Modal State
  isDeleteModalOpen = signal(false, ...ngDevMode ? [{ debugName: "isDeleteModalOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  idToDelete = signal(null, ...ngDevMode ? [{ debugName: "idToDelete" }] : (
    /* istanbul ignore next */
    []
  ));
  // Computed signals
  totalPages = computed(() => Math.max(1, Math.ceil(this.totalElements() / this.pageSize())), ...ngDevMode ? [{ debugName: "totalPages" }] : (
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
    this.loadDropdownOptions();
    this.loadData();
  }
  initForm() {
    this.substitutionForm = this.fb.group({
      classId: ["", [Validators.required]],
      scheduleId: ["", [Validators.required]],
      absentStaffId: ["", [Validators.required]],
      substituteStaffId: ["", [Validators.required]],
      startDate: ["", [Validators.required]],
      endDate: ["", [Validators.required]],
      reason: ["", [Validators.required, Validators.maxLength(500)]],
      status: ["PENDING", [Validators.required]]
    });
    this.substitutionForm.get("classId")?.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((classIdVal) => {
      if (classIdVal) {
        this.loadModalSchedules(Number(classIdVal));
      } else {
        this.modalSchedules.set([]);
        this.substitutionForm.get("scheduleId")?.setValue("");
      }
    });
    this.substitutionForm.get("scheduleId")?.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((schIdVal) => {
      if (schIdVal) {
        this.fetchAssignedTeacherForSchedule(Number(schIdVal));
      } else {
        this.assignedAbsentTeacher.set(null);
        this.substitutionForm.get("absentStaffId")?.setValue("");
      }
    });
    this.substitutionForm.valueChanges.pipe(debounceTime(300), takeUntilDestroyed(this.destroyRef)).subscribe((val) => {
      if (val.scheduleId && val.startDate && val.endDate) {
        this.fetchAvailableSubstituteTeachers(Number(val.scheduleId), val.startDate, val.endDate);
      } else {
        this.availableSubstituteTeachers.set([]);
      }
    });
  }
  fetchAssignedTeacherForSchedule(scheduleId) {
    this.isLoadingAbsentTeacher.set(true);
    this.scheduleAssignmentService.getAssignmentsByScheduleId(scheduleId).subscribe({
      next: (assignments) => {
        this.isLoadingAbsentTeacher.set(false);
        if (assignments && assignments.length > 0) {
          const mainAssign = assignments.find((a) => a.role === "MAIN_TEACHER") || assignments[0];
          this.assignedAbsentTeacher.set({
            id: Number(mainAssign.staffId),
            fullName: mainAssign.teacherName || "Gi\u1EA3ng vi\xEAn",
            staffCode: mainAssign.staffCode
          });
          this.substitutionForm.get("absentStaffId")?.setValue(mainAssign.staffId);
        } else {
          this.assignedAbsentTeacher.set(null);
          this.substitutionForm.get("absentStaffId")?.setValue("");
        }
      },
      error: (err) => {
        console.error("L\u1ED7i l\u1EA5y th\xF4ng tin GV ph\xE2n c\xF4ng ca h\u1ECDc:", err);
        this.isLoadingAbsentTeacher.set(false);
        this.assignedAbsentTeacher.set(null);
      }
    });
  }
  fetchAvailableSubstituteTeachers(scheduleId, startDate, endDate) {
    this.isLoadingAvailableTeachers.set(true);
    const excludeId = this.isEditing() && this.currentId() ? this.currentId() : void 0;
    this.substitutionService.getAvailableTeachers(scheduleId, startDate, endDate, excludeId).subscribe({
      next: (teachers) => {
        this.availableSubstituteTeachers.set(teachers || []);
        this.isLoadingAvailableTeachers.set(false);
      },
      error: (err) => {
        console.error("L\u1ED7i l\u1EA5y danh s\xE1ch GV tr\u1ED1ng l\u1ECBch:", err);
        this.availableSubstituteTeachers.set([]);
        this.isLoadingAvailableTeachers.set(false);
      }
    });
  }
  setupSearch() {
    this.searchControl.valueChanges.pipe(debounceTime(400), distinctUntilChanged(), takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.currentPage.set(1);
      this.loadData();
    });
  }
  loadDropdownOptions() {
    this.classesService.getClasses({ size: 100 }).subscribe({
      next: (res) => this.availableClasses.set(res.content || []),
      error: () => {
      }
    });
    this.staffService.getTeachers().subscribe({
      next: (res) => this.availableStaffs.set(res || []),
      error: () => {
      }
    });
  }
  loadModalSchedules(classId, selectedScheduleId) {
    this.scheduleService.getSchedulesByClassId(classId).subscribe({
      next: (schedules) => {
        this.modalSchedules.set(schedules || []);
        if (selectedScheduleId) {
          this.substitutionForm.get("scheduleId")?.setValue(selectedScheduleId);
        } else {
          this.substitutionForm.get("scheduleId")?.setValue("");
        }
      },
      error: () => {
        this.modalSchedules.set([]);
      }
    });
  }
  loadData() {
    this.isLoading.set(true);
    const filterClassId = this.selectedFilterClassId();
    if (filterClassId) {
      this.substitutionService.getSubstitutionsByClassId(filterClassId).subscribe({
        next: (list) => {
          this.substitutions.set(list || []);
          this.totalElements.set(list ? list.length : 0);
          this.isLoading.set(false);
        },
        error: (err) => {
          this.toastService.error("L\u1ED7i", "L\u1ED7i khi t\u1EA3i danh s\xE1ch d\u1EA1y thay: " + (err.error?.message || err.message));
          this.isLoading.set(false);
        }
      });
    } else {
      this.substitutionService.getAll({
        page: this.currentPage(),
        size: this.pageSize(),
        keyword: this.searchControl.value || ""
      }).subscribe({
        next: (response) => {
          this.substitutions.set(response.content || []);
          this.totalElements.set(response.totalElements || 0);
          this.isLoading.set(false);
        },
        error: (err) => {
          this.toastService.error("L\u1ED7i", "L\u1ED7i khi t\u1EA3i danh s\xE1ch d\u1EA1y thay: " + (err.error?.message || err.message));
          this.isLoading.set(false);
        }
      });
    }
  }
  onFilterClassChange(event) {
    const val = event.target.value;
    this.selectedFilterClassId.set(val ? Number(val) : null);
    this.currentPage.set(1);
    this.loadData();
  }
  changePage(page) {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage.set(page);
      this.loadData();
    }
  }
  openModal(item) {
    this.isFormSubmitted.set(false);
    this.loadDropdownOptions();
    if (item && item.id) {
      this.isEditing.set(true);
      this.currentId.set(item.id);
      const startIso = item.startDate ? item.startDate.split("T")[0] : "";
      const endIso = item.endDate ? item.endDate.split("T")[0] : "";
      this.startDateDisplay.set(this.formatDateVN(startIso));
      this.endDateDisplay.set(this.formatDateVN(endIso));
      const matchedClass = this.availableClasses().find((c) => c.code === item.classCode);
      const classIdVal = matchedClass ? matchedClass.id : "";
      this.substitutionForm.patchValue({
        classId: classIdVal,
        absentStaffId: item.absentStaffId,
        substituteStaffId: item.substituteStaffId,
        startDate: startIso,
        endDate: endIso,
        reason: item.reason || "",
        status: item.status || "PENDING"
      });
      if (classIdVal) {
        this.loadModalSchedules(Number(classIdVal), item.scheduleId);
      }
    } else {
      if (this.isEditing() || !this.substitutionForm.get("absentStaffId")?.value) {
        this.isEditing.set(false);
        this.currentId.set(null);
        this.resetAddForm();
      } else {
        this.isEditing.set(false);
        this.currentId.set(null);
      }
    }
    this.isModalOpen.set(true);
  }
  resetAddForm() {
    this.startDateDisplay.set("");
    this.endDateDisplay.set("");
    this.substitutionForm.reset({
      classId: "",
      scheduleId: "",
      absentStaffId: "",
      substituteStaffId: "",
      startDate: "",
      endDate: "",
      reason: "",
      status: "PENDING"
    });
  }
  closeModal() {
    this.isModalOpen.set(false);
  }
  openPicker(pickerInput) {
    try {
      if (pickerInput && typeof pickerInput.showPicker === "function") {
        pickerInput.showPicker();
      } else if (pickerInput && typeof pickerInput.click === "function") {
        pickerInput.click();
      }
    } catch (e) {
      if (pickerInput && typeof pickerInput.click === "function") {
        pickerInput.click();
      }
    }
  }
  onDateTextInput(event, field) {
    const input = event.target;
    let value = input.value.replace(/\D/g, "");
    if (value.length > 8)
      value = value.substring(0, 8);
    let formatted = "";
    if (value.length > 0) {
      formatted = value.substring(0, 2);
      if (value.length >= 3) {
        formatted += "/" + value.substring(2, 4);
      }
      if (value.length >= 5) {
        formatted += "/" + value.substring(4, 8);
      }
    }
    input.value = formatted;
    if (field === "startDate") {
      this.startDateDisplay.set(formatted);
    } else {
      this.endDateDisplay.set(formatted);
    }
    if (formatted.length === 10) {
      const parts = formatted.split("/");
      const day = parts[0];
      const month = parts[1];
      const year = parts[2];
      const isoDate = `${year}-${month}-${day}`;
      this.substitutionForm.get(field)?.setValue(isoDate);
    } else {
      this.substitutionForm.get(field)?.setValue("");
    }
  }
  onDatePickerChange(event, field) {
    const input = event.target;
    const isoDate = input.value;
    if (isoDate) {
      this.substitutionForm.get(field)?.setValue(isoDate);
      const formatted = this.formatDateVN(isoDate);
      if (field === "startDate") {
        this.startDateDisplay.set(formatted);
      } else {
        this.endDateDisplay.set(formatted);
      }
    }
  }
  onSubmit() {
    this.isFormSubmitted.set(true);
    if (this.substitutionForm.invalid) {
      this.toastService.error("Th\xF4ng b\xE1o", "Vui l\xF2ng \u0111i\u1EC1n \u0111\u1EA7y \u0111\u1EE7 c\xE1c tr\u01B0\u1EDDng b\u1EAFt bu\u1ED9c");
      return;
    }
    const formValues = this.substitutionForm.value;
    if (Number(formValues.absentStaffId) === Number(formValues.substituteStaffId)) {
      this.toastService.error("L\u1ED7i ch\u1ECDn gi\u1EA3ng vi\xEAn", "Gi\u1EA3ng vi\xEAn v\u1EAFng m\u1EB7t v\xE0 Gi\u1EA3ng vi\xEAn d\u1EA1y thay kh\xF4ng th\u1EC3 l\xE0 c\xF9ng m\u1ED9t ng\u01B0\u1EDDi");
      return;
    }
    if (formValues.startDate && formValues.endDate && formValues.startDate > formValues.endDate) {
      this.toastService.error("L\u1ED7i ng\xE0y th\xE1ng", "Ng\xE0y k\u1EBFt th\xFAc d\u1EA1y thay ph\u1EA3i sau ho\u1EB7c b\u1EB1ng ng\xE0y b\u1EAFt \u0111\u1EA7u");
      return;
    }
    const dto = {
      scheduleId: Number(formValues.scheduleId),
      absentStaffId: Number(formValues.absentStaffId),
      substituteStaffId: Number(formValues.substituteStaffId),
      startDate: formValues.startDate,
      endDate: formValues.endDate,
      reason: formValues.reason,
      status: formValues.status
    };
    if (this.isEditing() && this.currentId()) {
      this.substitutionService.update(this.currentId(), dto).subscribe({
        next: (res) => {
          this.toastService.success("Th\xE0nh c\xF4ng", res.message || "C\u1EADp nh\u1EADt ph\xE2n c\xF4ng d\u1EA1y thay th\xE0nh c\xF4ng!");
          this.closeModal();
          this.loadData();
        },
        error: (err) => {
          this.toastService.error("L\u1ED7i", "C\u1EADp nh\u1EADt th\u1EA5t b\u1EA1i: " + (err.error?.message || err.message));
        }
      });
    } else {
      this.substitutionService.create(dto).subscribe({
        next: (res) => {
          this.toastService.success("Th\xE0nh c\xF4ng", res.message || "T\u1EA1o m\u1EDBi ph\xE2n c\xF4ng d\u1EA1y thay th\xE0nh c\xF4ng!");
          this.resetAddForm();
          this.closeModal();
          this.loadData();
        },
        error: (err) => {
          this.toastService.error("L\u1ED7i", "T\u1EA1o m\u1EDBi th\u1EA5t b\u1EA1i: " + (err.error?.message || err.message));
        }
      });
    }
  }
  onDelete(id) {
    this.idToDelete.set(id);
    this.isDeleteModalOpen.set(true);
  }
  confirmDelete() {
    const id = this.idToDelete();
    if (!id)
      return;
    this.substitutionService.delete(id).subscribe({
      next: (res) => {
        this.toastService.success("Th\xE0nh c\xF4ng", res.message || "X\xF3a ph\xE2n c\xF4ng d\u1EA1y thay th\xE0nh c\xF4ng!");
        this.isDeleteModalOpen.set(false);
        this.idToDelete.set(null);
        this.loadData();
      },
      error: (err) => {
        this.toastService.error("L\u1ED7i", "X\xF3a th\u1EA5t b\u1EA1i: " + (err.error?.message || err.message));
      }
    });
  }
  closeDeleteModal() {
    this.isDeleteModalOpen.set(false);
    this.idToDelete.set(null);
  }
  getStatusBadge(statusKey) {
    if (!statusKey)
      return { label: "Ch\u1EDD duy\u1EC7t", bgClass: "bg-amber-50", textClass: "text-amber-700", borderClass: "border-amber-200" };
    return this.statusMap[statusKey] || { label: statusKey, bgClass: "bg-gray-50", textClass: "text-gray-700", borderClass: "border-gray-200" };
  }
  formatStaffTypeLabel(type) {
    if (!type)
      return "Gi\u1EA3ng vi\xEAn";
    const typeUpper = type.toUpperCase();
    if (typeUpper === "TEACHER")
      return "Gi\u1EA3ng vi\xEAn";
    if (typeUpper === "TEACHING_ASSISTANT")
      return "Tr\u1EE3 gi\u1EA3ng";
    if (typeUpper === "FOREIGN_TEACHER" || typeUpper === "NATIVE_TEACHER")
      return "Gi\xE1o vi\xEAn n\u01B0\u1EDBc ngo\xE0i";
    if (typeUpper === "GUEST_TEACHER")
      return "Gi\u1EA3ng vi\xEAn th\u1EC9nh gi\u1EA3ng";
    return type;
  }
  formatScheduleLabel(sch) {
    const dayLabel = this.dayMap[sch.dayOfWeek] || sch.dayOfWeek;
    const roomText = sch.roomName ? ` - ${sch.roomName}` : "";
    return `${dayLabel} (${sch.startTime} - ${sch.endTime}${roomText})`;
  }
  formatDateVN(dateStr) {
    if (!dateStr)
      return "---";
    const parts = dateStr.split("T")[0].split("-");
    if (parts.length === 3) {
      return `${parts[2]}/${parts[1]}/${parts[0]}`;
    }
    return dateStr;
  }
  formatDayOfWeek(day) {
    if (!day)
      return "---";
    return this.dayMap[day] || `Th\u1EE9 ${day}`;
  }
  static \u0275fac = function TeachingSubstitutionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TeachingSubstitutionComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TeachingSubstitutionComponent, selectors: [["app-teaching-substitution"]], decls: 74, vars: 12, consts: [["startDatePicker", ""], ["endDatePicker", ""], [1, "space-y-6"], [1, "flex", "flex-col", "md:flex-row", "md:items-end", "justify-between", "gap-4", "pb-4", "border-b", "border-gray-100"], [1, "text-2xl", "font-extrabold", "text-gray-900", "tracking-tight"], [1, "text-sm", "text-gray-500", "mt-1"], [1, "flex", "flex-wrap", "items-center", "gap-3"], [1, "w-56"], [1, "bg-white", "border", "border-gray-200", "text-gray-900", "text-sm", "rounded-xl", "focus:ring-2", "focus:ring-blue-100", "focus:border-blue-500", "block", "w-full", "p-2.5", "outline-none", "transition", "shadow-sm", "font-medium", 3, "change", "value"], ["value", ""], [3, "value"], [1, "relative"], [1, "absolute", "inset-y-0", "left-0", "flex", "items-center", "pl-3", "pointer-events-none"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-gray-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], ["type", "text", "placeholder", "T\xECm t\xEAn GV ho\u1EB7c m\xE3 l\u1EDBp...", 1, "bg-white", "border", "border-gray-200", "text-gray-900", "text-sm", "rounded-xl", "focus:ring-2", "focus:ring-blue-100", "focus:border-blue-500", "block", "w-56", "pl-10", "p-2.5", "outline-none", "transition", "shadow-sm", 3, "formControl"], [1, "bg-blue-600", "hover:bg-blue-700", "text-white", "font-semibold", "py-2.5", "px-5", "rounded-xl", "flex", "items-center", "transition", "shadow-md", "hover:shadow-lg", "text-sm", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "mr-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 4v16m8-8H4"], [1, "bg-white", "rounded-2xl", "shadow-sm", "border", "border-gray-100", "overflow-hidden"], [1, "w-full", "text-sm", "text-left", "text-gray-500"], [1, "text-xs", "text-gray-500", "uppercase", "bg-gray-50/80", "border-b", "border-gray-100", "font-semibold"], ["scope", "col", 1, "px-6", "py-4"], ["scope", "col", 1, "px-6", "py-4", "text-right"], [1, "divide-y", "divide-gray-50"], [1, "flex", "flex-col", "sm:flex-row", "items-center", "justify-between", "px-6", "py-4", "bg-gray-50/80", "border-t", "border-gray-100", "rounded-b-2xl", "gap-3"], [1, "text-sm", "text-gray-500"], [1, "font-semibold", "text-gray-900"], [1, "flex", "space-x-2"], [1, "px-3.5", "py-1.5", "text-sm", "font-medium", "text-gray-700", "bg-white", "border", "border-gray-300", "rounded-lg", "hover:bg-gray-50", "disabled:opacity-50", "disabled:cursor-not-allowed", "transition", "shadow-sm", "flex", "items-center", 3, "click", "disabled"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "mr-1"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 19l-7-7 7-7"], [1, "px-3.5", "py-1.5", "text-sm", "font-semibold", "text-gray-800", "bg-gray-100", "rounded-lg", "flex", "items-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "ml-1"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 5l7 7-7 7"], [1, "fixed", "inset-0", "z-50", "overflow-y-auto"], ["colspan", "9", 1, "px-6", "py-12", "text-center", "text-gray-500"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "mx-auto", "h-8", "w-8", "text-blue-500", "mb-3"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"], [1, "bg-white", "hover:bg-blue-50/50", "transition", "duration-200"], [1, "px-6", "py-4", "font-semibold", "text-gray-400"], [1, "px-6", "py-4"], [1, "font-bold", "text-gray-900"], [1, "font-mono", "text-xs", "text-blue-600", "mt-0.5"], [1, "px-2.5", "py-1", "bg-gray-100", "text-gray-800", "rounded-lg", "font-mono", "text-xs", "font-semibold"], [1, "font-bold", "text-red-600"], [1, "font-mono", "text-xs", "text-gray-400", "mt-0.5"], [1, "font-bold", "text-emerald-600"], [1, "px-6", "py-4", "text-xs", "font-medium", "text-gray-600"], [1, "flex", "items-center", "space-x-1.5"], [1, "px-2", "py-0.5", "bg-gray-100", "text-gray-700", "rounded", "font-mono"], [1, "text-gray-400"], [1, "px-6", "py-4", "max-w-xs", "truncate", "text-xs", "text-gray-600", 3, "title"], [1, "px-3", "py-1", "text-xs", "font-semibold", "rounded-full", "border", "inline-flex", "items-center"], [1, "px-6", "py-4", "text-right", "space-x-3"], [1, "font-medium", "text-blue-600", "hover:text-blue-800", "transition", "text-sm", 3, "click"], [1, "font-medium", "text-red-600", "hover:text-red-800", "transition", "text-sm", 3, "click"], [1, "font-bold", "text-gray-900", "flex", "items-center", "space-x-1.5"], [1, "px-2", "py-0.5", "bg-blue-50", "text-blue-700", "rounded", "text-xs", "font-semibold", "border", "border-blue-100"], [1, "text-xs", "text-gray-700", "font-mono"], [1, "text-xs", "text-gray-500", "mt-1", "flex", "items-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-3.5", "h-3.5", "mr-1", "text-gray-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0v-5a2 2 0 012-2h2a2 2 0 012 2v5m-6 0h6"], [1, "fixed", "inset-0", "bg-gray-900/50", "backdrop-blur-sm", "transition-opacity", 3, "click"], [1, "flex", "min-h-full", "items-center", "justify-center", "p-4"], [1, "relative", "w-full", "max-w-xl", "rounded-2xl", "bg-white", "p-6", "shadow-2xl", "transition-all", "border", "border-gray-100"], [1, "flex", "items-center", "justify-between", "pb-4", "border-b", "border-gray-100"], [1, "text-xl", "font-bold", "text-gray-900"], [1, "text-gray-400", "hover:text-gray-600", "transition", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "mt-4", "space-y-4", 3, "ngSubmit", "formGroup"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "gap-4"], [1, "block", "text-xs", "font-semibold", "text-gray-700", "uppercase", "tracking-wider", "mb-1"], [1, "text-red-500"], ["formControlName", "classId", 1, "w-full", "px-3.5", "py-2.5", "border", "border-gray-200", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-100", "focus:border-blue-500", "outline-none", "transition", "bg-white", "font-semibold", "text-gray-900"], ["formControlName", "scheduleId", 1, "w-full", "px-3.5", "py-2.5", "border", "border-gray-200", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-100", "focus:border-blue-500", "outline-none", "transition", "bg-white", "font-semibold", "text-gray-900"], [1, "relative", "flex", "items-center", "cursor-pointer", 3, "click"], ["type", "text", "placeholder", "dd/MM/yyyy", "maxlength", "10", 1, "w-full", "px-3.5", "py-2.5", "pr-10", "border", "border-gray-200", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-100", "focus:border-blue-500", "outline-none", "transition", "font-semibold", "text-gray-900", "bg-white", "cursor-pointer", 3, "input", "value"], [1, "absolute", "right-2.5", "flex", "items-center", "text-gray-400", "hover:text-blue-600", "transition", "p-1"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"], ["type", "date", 1, "sr-only", "opacity-0", "w-0", "h-0", "absolute", "pointer-events-none", 3, "change", "value"], [1, "block", "text-xs", "font-semibold", "text-red-600", "uppercase", "tracking-wider", "mb-1", "flex", "items-center", "justify-between"], [1, "text-xs", "font-normal", "text-blue-600", "animate-pulse"], [1, "block", "text-xs", "font-semibold", "text-emerald-600", "uppercase", "tracking-wider", "mb-1", "flex", "items-center", "justify-between"], ["formControlName", "substituteStaffId", 1, "w-full", "px-3.5", "py-2.5", "border", "border-emerald-200", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-emerald-100", "focus:border-emerald-500", "outline-none", "transition", "bg-emerald-50/30", "font-semibold", "text-gray-900"], [1, "text-[11px]", "text-emerald-700", "font-medium", "mt-1"], [1, "text-[11px]", "text-amber-700", "font-medium", "mt-1"], [1, "text-[11px]", "text-gray-500", "mt-1"], ["formControlName", "reason", "rows", "3", "placeholder", "Nh\u1EADp l\xFD do chi ti\u1EBFt...", 1, "w-full", "px-3.5", "py-2.5", "border", "border-gray-200", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-100", "focus:border-blue-500", "outline-none", "transition", "bg-white", "text-gray-900"], [1, "mt-1", "text-xs", "text-red-500"], ["formControlName", "status", 1, "w-full", "px-3.5", "py-2.5", "border", "border-gray-200", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-100", "focus:border-blue-500", "outline-none", "transition", "bg-white", "font-semibold", "text-gray-900"], [1, "flex", "justify-end", "space-x-3", "pt-4", "border-t", "border-gray-100"], ["type", "button", 1, "px-4", "py-2.5", "text-sm", "font-medium", "text-gray-700", "bg-white", "border", "border-gray-300", "rounded-xl", "hover:bg-gray-50", "transition", 3, "click"], ["type", "submit", 1, "px-5", "py-2.5", "text-sm", "font-semibold", "text-white", "bg-blue-600", "hover:bg-blue-700", "rounded-xl", "transition", "shadow-md"], [1, "w-full", "px-3.5", "py-2.5", "border", "border-red-200", "rounded-xl", "text-sm", "bg-red-50/50", "font-bold", "text-red-900", "flex", "items-center", "justify-between", "shadow-sm"], [1, "flex", "items-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-red-500", "mr-2", "shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"], [1, "text-xs", "font-mono", "font-normal", "text-red-700"], ["type", "hidden", "formControlName", "absentStaffId"], [1, "text-[11px]", "text-red-600", "font-medium", "mt-1"], ["formControlName", "absentStaffId", 1, "w-full", "px-3.5", "py-2.5", "border", "border-red-200", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-red-100", "focus:border-red-500", "outline-none", "transition", "bg-red-50/30", "font-semibold", "text-gray-900"], [1, "relative", "w-full", "max-w-md", "rounded-2xl", "bg-white", "p-6", "shadow-2xl", "transition-all", "border", "border-gray-100"], [1, "flex", "items-center", "space-x-3", "text-red-600", "mb-4"], [1, "p-3", "bg-red-50", "rounded-full"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"], [1, "text-lg", "font-bold", "text-gray-900"], [1, "text-sm", "text-gray-600", "mb-6"], [1, "flex", "justify-end", "space-x-3"], [1, "px-4", "py-2", "text-sm", "font-medium", "text-gray-700", "bg-white", "border", "border-gray-300", "rounded-xl", "hover:bg-gray-50", "transition", 3, "click"], [1, "px-4", "py-2", "text-sm", "font-semibold", "text-white", "bg-red-600", "hover:bg-red-700", "rounded-xl", "transition", "shadow-md", 3, "click"]], template: function TeachingSubstitutionComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div")(3, "h1", 4);
      \u0275\u0275text(4, "Qu\u1EA3n l\xFD D\u1EA1y thay");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 5);
      \u0275\u0275text(6, "Ph\xE2n c\xF4ng Gi\u1EA3ng vi\xEAn d\u1EA1y thay khi c\xF3 s\u1EF1 c\u1ED1 v\u1EAFng m\u1EB7t ho\u1EB7c thay \u0111\u1ED5i l\u1ECBch gi\u1EA3ng");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 6)(8, "div", 7)(9, "select", 8);
      \u0275\u0275listener("change", function TeachingSubstitutionComponent_Template_select_change_9_listener($event) {
        return ctx.onFilterClassChange($event);
      });
      \u0275\u0275elementStart(10, "option", 9);
      \u0275\u0275text(11, "-- T\u1EA5t c\u1EA3 l\u1EDBp h\u1ECDc --");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(12, TeachingSubstitutionComponent_For_13_Template, 2, 3, "option", 10, _forTrack07);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 11)(15, "div", 12);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(16, "svg", 13);
      \u0275\u0275element(17, "path", 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275element(18, "input", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "button", 16);
      \u0275\u0275listener("click", function TeachingSubstitutionComponent_Template_button_click_19_listener() {
        return ctx.openModal();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(20, "svg", 17);
      \u0275\u0275element(21, "path", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275text(22, " T\u1EA1o ph\xE2n c\xF4ng d\u1EA1y thay ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(23, "div", 19)(24, "table", 20)(25, "thead", 21)(26, "tr")(27, "th", 22);
      \u0275\u0275text(28, "STT");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "th", 22);
      \u0275\u0275text(30, "L\u1EDBp h\u1ECDc");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "th", 22);
      \u0275\u0275text(32, "Ca l\u1ECBch h\u1ECDc / Khung gi\u1EDD");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "th", 22);
      \u0275\u0275text(34, "GV V\u1EAFng m\u1EB7t");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "th", 22);
      \u0275\u0275text(36, "GV D\u1EA1y thay");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "th", 22);
      \u0275\u0275text(38, "Th\u1EDDi gian d\u1EA1y thay");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "th", 22);
      \u0275\u0275text(40, "L\xFD do");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "th", 22);
      \u0275\u0275text(42, "Tr\u1EA1ng th\xE1i");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "th", 23);
      \u0275\u0275text(44, "Thao t\xE1c");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(45, "tbody", 24);
      \u0275\u0275conditionalCreate(46, TeachingSubstitutionComponent_Conditional_46_Template, 6, 0, "tr")(47, TeachingSubstitutionComponent_Conditional_47_Template, 3, 0, "tr")(48, TeachingSubstitutionComponent_Conditional_48_Template, 2, 0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "div", 25)(50, "div", 26);
      \u0275\u0275text(51, " Hi\u1EC3n th\u1ECB ");
      \u0275\u0275elementStart(52, "span", 27);
      \u0275\u0275text(53);
      \u0275\u0275elementEnd();
      \u0275\u0275text(54, " - ");
      \u0275\u0275elementStart(55, "span", 27);
      \u0275\u0275text(56);
      \u0275\u0275elementEnd();
      \u0275\u0275text(57, " trong t\u1ED5ng s\u1ED1 ");
      \u0275\u0275elementStart(58, "span", 27);
      \u0275\u0275text(59);
      \u0275\u0275elementEnd();
      \u0275\u0275text(60, " k\u1EBFt qu\u1EA3 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "div", 28)(62, "button", 29);
      \u0275\u0275listener("click", function TeachingSubstitutionComponent_Template_button_click_62_listener() {
        return ctx.changePage(ctx.currentPage() - 1);
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(63, "svg", 30);
      \u0275\u0275element(64, "path", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275text(65, " Tr\u01B0\u1EDBc ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(66, "span", 32);
      \u0275\u0275text(67);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "button", 29);
      \u0275\u0275listener("click", function TeachingSubstitutionComponent_Template_button_click_68_listener() {
        return ctx.changePage(ctx.currentPage() + 1);
      });
      \u0275\u0275text(69, " Sau ");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(70, "svg", 33);
      \u0275\u0275element(71, "path", 34);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275conditionalCreate(72, TeachingSubstitutionComponent_Conditional_72_Template, 99, 26, "div", 35);
      \u0275\u0275conditionalCreate(73, TeachingSubstitutionComponent_Conditional_73_Template, 17, 0, "div", 35);
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275property("value", ctx.selectedFilterClassId() || "");
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.availableClasses());
      \u0275\u0275advance(6);
      \u0275\u0275property("formControl", ctx.searchControl);
      \u0275\u0275advance(28);
      \u0275\u0275conditional(ctx.isLoading() && ctx.substitutions().length === 0 ? 46 : ctx.substitutions().length === 0 ? 47 : 48);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.startIndex());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.endIndex());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.totalElements());
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", ctx.currentPage() === 1);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate2(" ", ctx.currentPage(), " / ", ctx.totalPages(), " ");
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.currentPage() >= ctx.totalPages());
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.isModalOpen() ? 72 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isDeleteModalOpen() ? 73 : -1);
    }
  }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormControlDirective, FormGroupDirective, FormControlName], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TeachingSubstitutionComponent, [{
    type: Component,
    args: [{ selector: "app-teaching-substitution", imports: [CommonModule, ReactiveFormsModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="space-y-6">\r
  <!-- PAGE HEADER -->\r
  <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-gray-100">\r
    <div>\r
      <h1 class="text-2xl font-extrabold text-gray-900 tracking-tight">Qu\u1EA3n l\xFD D\u1EA1y thay</h1>\r
      <p class="text-sm text-gray-500 mt-1">Ph\xE2n c\xF4ng Gi\u1EA3ng vi\xEAn d\u1EA1y thay khi c\xF3 s\u1EF1 c\u1ED1 v\u1EAFng m\u1EB7t ho\u1EB7c thay \u0111\u1ED5i l\u1ECBch gi\u1EA3ng</p>\r
    </div>\r
    <div class="flex flex-wrap items-center gap-3">\r
      \r
      <!-- Filter Class Select -->\r
      <div class="w-56">\r
        <select \r
          [value]="selectedFilterClassId() || ''"\r
          (change)="onFilterClassChange($event)"\r
          class="bg-white border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-500 block w-full p-2.5 outline-none transition shadow-sm font-medium"\r
        >\r
          <option value="">-- T\u1EA5t c\u1EA3 l\u1EDBp h\u1ECDc --</option>\r
          @for (c of availableClasses(); track c.id) {\r
            <option [value]="c.id">{{ c.code }} - {{ c.name }}</option>\r
          }\r
        </select>\r
      </div>\r
\r
      <!-- Search Input -->\r
      <div class="relative">\r
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">\r
          <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>\r
          </svg>\r
        </div>\r
        <input \r
          type="text" \r
          [formControl]="searchControl" \r
          placeholder="T\xECm t\xEAn GV ho\u1EB7c m\xE3 l\u1EDBp..." \r
          class="bg-white border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-500 block w-56 pl-10 p-2.5 outline-none transition shadow-sm"\r
        >\r
      </div>\r
\r
      <!-- Add Button -->\r
      <button \r
        (click)="openModal()" \r
        class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-5 rounded-xl flex items-center transition shadow-md hover:shadow-lg text-sm"\r
      >\r
        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>\r
        </svg>\r
        T\u1EA1o ph\xE2n c\xF4ng d\u1EA1y thay\r
      </button>\r
    </div>\r
  </div>\r
\r
  <!-- DATA TABLE -->\r
  <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">\r
    <table class="w-full text-sm text-left text-gray-500">\r
      <thead class="text-xs text-gray-500 uppercase bg-gray-50/80 border-b border-gray-100 font-semibold">\r
        <tr>\r
          <th scope="col" class="px-6 py-4">STT</th>\r
          <th scope="col" class="px-6 py-4">L\u1EDBp h\u1ECDc</th>\r
          <th scope="col" class="px-6 py-4">Ca l\u1ECBch h\u1ECDc / Khung gi\u1EDD</th>\r
          <th scope="col" class="px-6 py-4">GV V\u1EAFng m\u1EB7t</th>\r
          <th scope="col" class="px-6 py-4">GV D\u1EA1y thay</th>\r
          <th scope="col" class="px-6 py-4">Th\u1EDDi gian d\u1EA1y thay</th>\r
          <th scope="col" class="px-6 py-4">L\xFD do</th>\r
          <th scope="col" class="px-6 py-4">Tr\u1EA1ng th\xE1i</th>\r
          <th scope="col" class="px-6 py-4 text-right">Thao t\xE1c</th>\r
        </tr>\r
      </thead>\r
      <tbody class="divide-y divide-gray-50">\r
        @if (isLoading() && substitutions().length === 0) {\r
          <tr>\r
            <td colspan="9" class="px-6 py-12 text-center text-gray-500">\r
              <svg class="animate-spin mx-auto h-8 w-8 text-blue-500 mb-3" fill="none" viewBox="0 0 24 24">\r
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>\r
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>\r
              </svg>\r
              \u0110ang t\u1EA3i danh s\xE1ch d\u1EA1y thay...\r
            </td>\r
          </tr>\r
        } @else if (substitutions().length === 0) {\r
          <tr>\r
            <td colspan="9" class="px-6 py-12 text-center text-gray-500">\r
              Kh\xF4ng t\xECm th\u1EA5y ph\xE2n c\xF4ng d\u1EA1y thay n\xE0o.\r
            </td>\r
          </tr>\r
        } @else {\r
          @for (s of substitutions(); track s.id; let idx = $index) {\r
            <tr class="bg-white hover:bg-blue-50/50 transition duration-200">\r
              <!-- Index -->\r
              <td class="px-6 py-4 font-semibold text-gray-400">\r
                #{{ startIndex() + idx }}\r
              </td>\r
              <!-- Class Info -->\r
              <td class="px-6 py-4">\r
                <div class="font-bold text-gray-900">{{ s.className || '---' }}</div>\r
                <div class="font-mono text-xs text-blue-600 mt-0.5">{{ s.classCode || 'M\xE3 l\u1EDBp' }}</div>\r
              </td>\r
              <!-- Schedule Slot -->\r
              <td class="px-6 py-4">\r
                @if (s.dayOfWeek || s.startTime) {\r
                  <div class="font-bold text-gray-900 flex items-center space-x-1.5">\r
                    <span class="px-2 py-0.5 bg-blue-50 text-blue-700 rounded text-xs font-semibold border border-blue-100">\r
                      {{ formatDayOfWeek(s.dayOfWeek) }}\r
                    </span>\r
                    <span class="text-xs text-gray-700 font-mono">\r
                      {{ s.startTime }} - {{ s.endTime }}\r
                    </span>\r
                  </div>\r
                  @if (s.roomName) {\r
                    <div class="text-xs text-gray-500 mt-1 flex items-center">\r
                      <svg class="w-3.5 h-3.5 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0v-5a2 2 0 012-2h2a2 2 0 012 2v5m-6 0h6"></path>\r
                      </svg>\r
                      {{ s.roomName }}\r
                    </div>\r
                  }\r
                } @else {\r
                  <span class="px-2.5 py-1 bg-gray-100 text-gray-800 rounded-lg font-mono text-xs font-semibold">\r
                    Ca h\u1ECDc #{{ s.scheduleId }}\r
                  </span>\r
                }\r
              </td>\r
              <!-- Absent Teacher -->\r
              <td class="px-6 py-4">\r
                <div class="font-bold text-red-600">{{ s.absentStaffName || '---' }}</div>\r
                <div class="font-mono text-xs text-gray-400 mt-0.5">{{ s.absentStaffCode || 'M\xE3 NV' }}</div>\r
              </td>\r
              <!-- Substitute Teacher -->\r
              <td class="px-6 py-4">\r
                <div class="font-bold text-emerald-600">{{ s.substituteStaffName || '---' }}</div>\r
                <div class="font-mono text-xs text-gray-400 mt-0.5">{{ s.substituteStaffCode || 'M\xE3 NV' }}</div>\r
              </td>\r
              <!-- Date Range -->\r
              <td class="px-6 py-4 text-xs font-medium text-gray-600">\r
                <div class="flex items-center space-x-1.5">\r
                  <span class="px-2 py-0.5 bg-gray-100 text-gray-700 rounded font-mono">{{ formatDateVN(s.startDate) }}</span>\r
                  <span class="text-gray-400">\u2794</span>\r
                  <span class="px-2 py-0.5 bg-gray-100 text-gray-700 rounded font-mono">{{ formatDateVN(s.endDate) }}</span>\r
                </div>\r
              </td>\r
              <!-- Reason -->\r
              <td class="px-6 py-4 max-w-xs truncate text-xs text-gray-600" [title]="s.reason">\r
                {{ s.reason || '---' }}\r
              </td>\r
              <!-- Status Badge -->\r
              <td class="px-6 py-4">\r
                @let badge = getStatusBadge(s.status);\r
                <span class="px-3 py-1 text-xs font-semibold rounded-full border inline-flex items-center" [class]="badge.bgClass + ' ' + badge.textClass + ' ' + badge.borderClass">\r
                  {{ badge.label }}\r
                </span>\r
              </td>\r
              <!-- Actions -->\r
              <td class="px-6 py-4 text-right space-x-3">\r
                <button \r
                  (click)="openModal(s)" \r
                  class="font-medium text-blue-600 hover:text-blue-800 transition text-sm"\r
                >\r
                  Ch\u1EC9nh s\u1EEDa\r
                </button>\r
                <button \r
                  (click)="onDelete(s.id!)" \r
                  class="font-medium text-red-600 hover:text-red-800 transition text-sm"\r
                >\r
                  X\xF3a\r
                </button>\r
              </td>\r
            </tr>\r
          }\r
        }\r
      </tbody>\r
    </table>\r
\r
    <!-- PAGINATION FOOTER -->\r
    <div class="flex flex-col sm:flex-row items-center justify-between px-6 py-4 bg-gray-50/80 border-t border-gray-100 rounded-b-2xl gap-3">\r
      <div class="text-sm text-gray-500">\r
        Hi\u1EC3n th\u1ECB <span class="font-semibold text-gray-900">{{ startIndex() }}</span> \r
        - <span class="font-semibold text-gray-900">{{ endIndex() }}</span> \r
        trong t\u1ED5ng s\u1ED1 <span class="font-semibold text-gray-900">{{ totalElements() }}</span> k\u1EBFt qu\u1EA3\r
      </div>\r
      \r
      <div class="flex space-x-2">\r
        <button \r
          (click)="changePage(currentPage() - 1)" \r
          [disabled]="currentPage() === 1"\r
          class="px-3.5 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition shadow-sm flex items-center"\r
        >\r
          <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>\r
          </svg>\r
          Tr\u01B0\u1EDBc\r
        </button>\r
\r
        <span class="px-3.5 py-1.5 text-sm font-semibold text-gray-800 bg-gray-100 rounded-lg flex items-center">\r
          {{ currentPage() }} / {{ totalPages() }}\r
        </span>\r
\r
        <button \r
          (click)="changePage(currentPage() + 1)" \r
          [disabled]="currentPage() >= totalPages()"\r
          class="px-3.5 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition shadow-sm flex items-center"\r
        >\r
          Sau\r
          <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>\r
          </svg>\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- MODAL TH\xCAM / C\u1EACP NH\u1EACT PH\xC2N C\xD4NG D\u1EA0Y THAY -->\r
@if (isModalOpen()) {\r
  <div class="fixed inset-0 z-50 overflow-y-auto">\r
    <div class="fixed inset-0 bg-gray-900/50 backdrop-blur-sm transition-opacity" (click)="closeModal()"></div>\r
\r
    <div class="flex min-h-full items-center justify-center p-4">\r
      <div class="relative w-full max-w-xl rounded-2xl bg-white p-6 shadow-2xl transition-all border border-gray-100">\r
        \r
        <!-- Modal Header -->\r
        <div class="flex items-center justify-between pb-4 border-b border-gray-100">\r
          <h3 class="text-xl font-bold text-gray-900">\r
            {{ isEditing() ? 'C\u1EADp nh\u1EADt th\xF4ng tin d\u1EA1y thay' : 'T\u1EA1o m\u1EDBi ph\xE2n c\xF4ng d\u1EA1y thay' }}\r
          </h3>\r
          <button (click)="closeModal()" class="text-gray-400 hover:text-gray-600 transition">\r
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>\r
            </svg>\r
          </button>\r
        </div>\r
\r
        <!-- Modal Form -->\r
        <form [formGroup]="substitutionForm" (ngSubmit)="onSubmit()" class="mt-4 space-y-4">\r
          \r
          <!-- Class & Schedule Grid -->\r
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">\r
            <!-- Class Select -->\r
            <div>\r
              <label class="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">\r
                L\u1EDBp h\u1ECDc <span class="text-red-500">*</span>\r
              </label>\r
              <select \r
                formControlName="classId"\r
                class="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition bg-white font-semibold text-gray-900"\r
                [class.border-red-400]="isFormSubmitted() && substitutionForm.get('classId')?.invalid"\r
              >\r
                <option value="">-- Ch\u1ECDn L\u1EDBp --</option>\r
                @for (cls of availableClasses(); track cls.id) {\r
                  <option [value]="cls.id">{{ cls.code }} - {{ cls.name }}</option>\r
                }\r
              </select>\r
            </div>\r
\r
            <!-- Schedule Select -->\r
            <div>\r
              <label class="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">\r
                Ca l\u1ECBch h\u1ECDc <span class="text-red-500">*</span>\r
              </label>\r
              <select \r
                formControlName="scheduleId"\r
                class="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition bg-white font-semibold text-gray-900"\r
                [class.border-red-400]="isFormSubmitted() && substitutionForm.get('scheduleId')?.invalid"\r
              >\r
                @if (modalSchedules().length === 0) {\r
                  <option value="">-- Ch\u1ECDn L\u1EDBp tr\u01B0\u1EDBc --</option>\r
                } @else {\r
                  <option value="">-- Ch\u1ECDn Ca h\u1ECDc --</option>\r
                  @for (sch of modalSchedules(); track sch.id) {\r
                    <option [value]="sch.id">{{ formatScheduleLabel(sch) }}</option>\r
                  }\r
                }\r
              </select>\r
            </div>\r
          </div>\r
\r
          <!-- Date Range Grid -->\r
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">\r
            <!-- Start Date -->\r
            <div>\r
              <label class="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">\r
                Ng\xE0y b\u1EAFt \u0111\u1EA7u d\u1EA1y thay <span class="text-red-500">*</span>\r
              </label>\r
              <div class="relative flex items-center cursor-pointer" (click)="openPicker(startDatePicker)">\r
                <input \r
                  type="text" \r
                  [value]="startDateDisplay()"\r
                  (input)="onDateTextInput($event, 'startDate')"\r
                  placeholder="dd/MM/yyyy"\r
                  maxlength="10"\r
                  class="w-full px-3.5 py-2.5 pr-10 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition font-semibold text-gray-900 bg-white cursor-pointer"\r
                  [class.border-red-400]="isFormSubmitted() && substitutionForm.get('startDate')?.invalid"\r
                >\r
                <div class="absolute right-2.5 flex items-center text-gray-400 hover:text-blue-600 transition p-1">\r
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>\r
                  </svg>\r
                  <input \r
                    #startDatePicker\r
                    type="date" \r
                    [value]="substitutionForm.get('startDate')?.value"\r
                    (change)="onDatePickerChange($event, 'startDate')"\r
                    class="sr-only opacity-0 w-0 h-0 absolute pointer-events-none"\r
                  >\r
                </div>\r
              </div>\r
            </div>\r
\r
            <!-- End Date -->\r
            <div>\r
              <label class="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">\r
                Ng\xE0y k\u1EBFt th\xFAc d\u1EA1y thay <span class="text-red-500">*</span>\r
              </label>\r
              <div class="relative flex items-center cursor-pointer" (click)="openPicker(endDatePicker)">\r
                <input \r
                  type="text" \r
                  [value]="endDateDisplay()"\r
                  (input)="onDateTextInput($event, 'endDate')"\r
                  placeholder="dd/MM/yyyy"\r
                  maxlength="10"\r
                  class="w-full px-3.5 py-2.5 pr-10 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition font-semibold text-gray-900 bg-white cursor-pointer"\r
                  [class.border-red-400]="isFormSubmitted() && substitutionForm.get('endDate')?.invalid"\r
                >\r
                <div class="absolute right-2.5 flex items-center text-gray-400 hover:text-blue-600 transition p-1">\r
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>\r
                  </svg>\r
                  <input \r
                    #endDatePicker\r
                    type="date" \r
                    [value]="substitutionForm.get('endDate')?.value"\r
                    (change)="onDatePickerChange($event, 'endDate')"\r
                    class="sr-only opacity-0 w-0 h-0 absolute pointer-events-none"\r
                  >\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- Teachers Grid -->\r
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">\r
            <!-- Absent Staff Display/Select -->\r
            <div>\r
              <label class="block text-xs font-semibold text-red-600 uppercase tracking-wider mb-1 flex items-center justify-between">\r
                <span>Gi\u1EA3ng vi\xEAn V\u1EAFng m\u1EB7t <span class="text-red-500">*</span></span>\r
                @if (isLoadingAbsentTeacher()) {\r
                  <span class="text-xs font-normal text-blue-600 animate-pulse">\u0110ang t\xECm GV ca h\u1ECDc...</span>\r
                }\r
              </label>\r
              \r
              @if (assignedAbsentTeacher()) {\r
                <div class="w-full px-3.5 py-2.5 border border-red-200 rounded-xl text-sm bg-red-50/50 font-bold text-red-900 flex items-center justify-between shadow-sm">\r
                  <div class="flex items-center">\r
                    <svg class="w-4 h-4 text-red-500 mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>\r
                    </svg>\r
                    <span>{{ assignedAbsentTeacher()?.fullName }} <span class="text-xs font-mono font-normal text-red-700">({{ assignedAbsentTeacher()?.staffCode || ('NS#' + assignedAbsentTeacher()?.id) }})</span></span>\r
                  </div>\r
                </div>\r
                <input type="hidden" formControlName="absentStaffId">\r
                <p class="text-[11px] text-red-600 font-medium mt-1">\u2713 \u0110\xE3 c\u1ED1 \u0111\u1ECBnh theo ph\xE2n c\xF4ng ch\xEDnh c\u1EE7a Ca l\u1ECBch h\u1ECDc n\xE0y.</p>\r
              } @else {\r
                <select \r
                  formControlName="absentStaffId"\r
                  class="w-full px-3.5 py-2.5 border border-red-200 rounded-xl text-sm focus:ring-2 focus:ring-red-100 focus:border-red-500 outline-none transition bg-red-50/30 font-semibold text-gray-900"\r
                  [class.border-red-400]="isFormSubmitted() && substitutionForm.get('absentStaffId')?.invalid"\r
                >\r
                  <option value="">-- Ch\u1ECDn Ca h\u1ECDc \u0111\u1EC3 t\u1EF1 l\u1EA5y GV v\u1EAFng m\u1EB7t --</option>\r
                  @for (st of availableStaffs(); track st.id) {\r
                    <option [value]="st.id">{{ st.fullName }} ({{ st.staffCode }} - {{ formatStaffTypeLabel(st.staffType) }})</option>\r
                  }\r
                </select>\r
                <p class="text-[11px] text-gray-500 mt-1">Ch\u1ECDn Ca l\u1ECBch h\u1ECDc \u1EDF tr\xEAn \u0111\u1EC3 h\u1EC7 th\u1ED1ng t\u1EF1 \u0111\u1ED9ng x\xE1c \u0111\u1ECBnh gi\xE1o vi\xEAn v\u1EAFng m\u1EB7t.</p>\r
              }\r
            </div>\r
\r
            <!-- Substitute Staff Select -->\r
            <div>\r
              <label class="block text-xs font-semibold text-emerald-600 uppercase tracking-wider mb-1 flex items-center justify-between">\r
                <span>Gi\u1EA3ng vi\xEAn D\u1EA1y thay <span class="text-red-500">*</span></span>\r
                @if (isLoadingAvailableTeachers()) {\r
                  <span class="text-xs font-normal text-blue-600 animate-pulse">\u0110ang ki\u1EC3m tra...</span>\r
                }\r
              </label>\r
              <select \r
                formControlName="substituteStaffId"\r
                class="w-full px-3.5 py-2.5 border border-emerald-200 rounded-xl text-sm focus:ring-2 focus:ring-emerald-100 focus:border-emerald-500 outline-none transition bg-emerald-50/30 font-semibold text-gray-900"\r
                [class.border-red-400]="isFormSubmitted() && substitutionForm.get('substituteStaffId')?.invalid"\r
              >\r
                @if (availableSubstituteTeachers().length > 0) {\r
                  <option value="">-- Ch\u1ECDn GV D\u1EA1y thay (Tr\u1ED1ng l\u1ECBch) --</option>\r
                  @for (st of availableSubstituteTeachers(); track st.id) {\r
                    <option [value]="st.id">\u2714 {{ st.fullName }} ({{ st.staffCode || ('NS#' + st.id) }}) - Tr\u1ED1ng l\u1ECBch</option>\r
                  }\r
                } @else if (substitutionForm.get('scheduleId')?.value && substitutionForm.get('startDate')?.value && substitutionForm.get('endDate')?.value) {\r
                  <option value="">-- T\u1EA5t c\u1EA3 GV \u0111\u1EC1u b\u1EADn - Ch\u1ECDn GV b\xEAn d\u01B0\u1EDBi --</option>\r
                  @for (st of availableStaffs(); track st.id) {\r
                    <option [value]="st.id">{{ st.fullName }} ({{ st.staffCode }} - {{ formatStaffTypeLabel(st.staffType) }})</option>\r
                  }\r
                } @else {\r
                  <option value="">-- Ch\u1ECDn L\u1ECBch h\u1ECDc & Ng\xE0y \u0111\u1EC3 l\u1ECDc GV tr\u1ED1ng l\u1ECBch --</option>\r
                  @for (st of availableStaffs(); track st.id) {\r
                    <option [value]="st.id">{{ st.fullName }} ({{ st.staffCode }} - {{ formatStaffTypeLabel(st.staffType) }})</option>\r
                  }\r
                }\r
              </select>\r
              @if (availableSubstituteTeachers().length > 0) {\r
                <p class="text-[11px] text-emerald-700 font-medium mt-1">\u2713 \u0110\xE3 t\u1EF1 \u0111\u1ED9ng l\u1ECDc {{ availableSubstituteTeachers().length }} gi\u1EA3ng vi\xEAn kh\xF4ng b\u1ECB tr\xF9ng ca d\u1EA1y ch\xEDnh & ca d\u1EA1y thay kh\xE1c.</p>\r
              } @else if (substitutionForm.get('scheduleId')?.value && substitutionForm.get('startDate')?.value && substitutionForm.get('endDate')?.value) {\r
                <p class="text-[11px] text-amber-700 font-medium mt-1">\u26A0\uFE0F T\u1EA5t c\u1EA3 GV \u0111\u1EC1u c\xF3 l\u1ECBch trong ca n\xE0y. B\u1EA1n v\u1EABn c\xF3 th\u1EC3 ch\u1ECDn GV b\xEAn d\u01B0\u1EDBi \u0111\u1EC3 h\u1EC7 th\u1ED1ng ki\u1EC3m tra chi ti\u1EBFt khi l\u01B0u.</p>\r
              } @else {\r
                <p class="text-[11px] text-gray-500 mt-1">Vui l\xF2ng ch\u1ECDn Ca l\u1ECBch h\u1ECDc v\xE0 Th\u1EDDi gian \u0111\u1EC3 h\u1EC7 th\u1ED1ng t\u1EF1 \u0111\u1ED9ng l\u1ECDc GV tr\u1ED1ng l\u1ECBch.</p>\r
              }\r
            </div>\r
          </div>\r
\r
          <!-- Reason Input -->\r
          <div>\r
            <label class="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">\r
              L\xFD do d\u1EA1y thay <span class="text-red-500">*</span>\r
            </label>\r
            <textarea \r
              formControlName="reason"\r
              rows="3"\r
              placeholder="Nh\u1EADp l\xFD do chi ti\u1EBFt..."\r
              class="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition bg-white text-gray-900"\r
              [class.border-red-400]="isFormSubmitted() && substitutionForm.get('reason')?.invalid"\r
            ></textarea>\r
            @if (isFormSubmitted() && substitutionForm.get('reason')?.hasError('required')) {\r
              <p class="mt-1 text-xs text-red-500">Vui l\xF2ng nh\u1EADp l\xFD do d\u1EA1y thay</p>\r
            }\r
          </div>\r
\r
          <!-- Status Select -->\r
          <div>\r
            <label class="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">\r
              Tr\u1EA1ng th\xE1i <span class="text-red-500">*</span>\r
            </label>\r
            <select \r
              formControlName="status"\r
              class="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition bg-white font-semibold text-gray-900"\r
            >\r
              @for (st of statusOptions; track st.value) {\r
                <option [value]="st.value">{{ st.label }}</option>\r
              }\r
            </select>\r
          </div>\r
\r
          <!-- Modal Footer Actions -->\r
          <div class="flex justify-end space-x-3 pt-4 border-t border-gray-100">\r
            <button \r
              type="button" \r
              (click)="closeModal()"\r
              class="px-4 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition"\r
            >\r
              H\u1EE7y b\u1ECF\r
            </button>\r
            <button \r
              type="submit"\r
              class="px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition shadow-md"\r
            >\r
              {{ isEditing() ? 'C\u1EADp nh\u1EADt' : 'T\u1EA1o m\u1EDBi' }}\r
            </button>\r
          </div>\r
        </form>\r
      </div>\r
    </div>\r
  </div>\r
}\r
\r
<!-- MODAL X\xC1C NH\u1EACN X\xD3A -->\r
@if (isDeleteModalOpen()) {\r
  <div class="fixed inset-0 z-50 overflow-y-auto">\r
    <div class="fixed inset-0 bg-gray-900/50 backdrop-blur-sm transition-opacity" (click)="closeDeleteModal()"></div>\r
\r
    <div class="flex min-h-full items-center justify-center p-4">\r
      <div class="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl transition-all border border-gray-100">\r
        <div class="flex items-center space-x-3 text-red-600 mb-4">\r
          <div class="p-3 bg-red-50 rounded-full">\r
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>\r
            </svg>\r
          </div>\r
          <h3 class="text-lg font-bold text-gray-900">X\xE1c nh\u1EADn x\xF3a d\u1EA1y thay</h3>\r
        </div>\r
        <p class="text-sm text-gray-600 mb-6">\r
          B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a ph\xE2n c\xF4ng d\u1EA1y thay n\xE0y kh\xF4ng? H\xE0nh \u0111\u1ED9ng n\xE0y kh\xF4ng th\u1EC3 ho\xE0n t\xE1c.\r
        </p>\r
        <div class="flex justify-end space-x-3">\r
          <button \r
            (click)="closeDeleteModal()"\r
            class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition"\r
          >\r
            H\u1EE7y\r
          </button>\r
          <button \r
            (click)="confirmDelete()"\r
            class="px-4 py-2 text-sm font-semibold text-white bg-red-600 hover:bg-red-700 rounded-xl transition shadow-md"\r
          >\r
            \u0110\u1ED3ng \xFD X\xF3a\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
}\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TeachingSubstitutionComponent, { className: "TeachingSubstitutionComponent", filePath: "src/app/features/academic/pages/teaching-substitution/teaching-substitution.component.ts", lineNumber: 23 });
})();

// src/app/features/academic/pages/reporting/reporting.component.ts
var _c0 = () => [1, 2, 3, 4];
var _forTrack08 = ($index, $item) => $item.classId;
function ReportingComponent_Conditional_33_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275element(1, "div", 49)(2, "div", 50)(3, "div", 51);
    \u0275\u0275elementEnd();
  }
}
function ReportingComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275repeaterCreate(1, ReportingComponent_Conditional_33_For_2_Template, 4, 0, "div", 48, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function ReportingComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 52);
    \u0275\u0275element(2, "div", 53);
    \u0275\u0275elementStart(3, "div", 54)(4, "span", 55);
    \u0275\u0275text(5, " H\u1ECDc vi\xEAn \u0111ang h\u1ECDc ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 56);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 57);
    \u0275\u0275element(8, "path", 58);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "div", 59)(10, "div", 60);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 61)(14, "span", 62);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 63);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(18, "div", 52);
    \u0275\u0275element(19, "div", 64);
    \u0275\u0275elementStart(20, "div", 54)(21, "span", 65);
    \u0275\u0275text(22, " \u0110\u1ED9i ng\u0169 Gi\u1EA3ng vi\xEAn ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 66);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(24, "svg", 57);
    \u0275\u0275element(25, "path", 67);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(26, "div", 59)(27, "div", 60);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 61)(31, "span", 68);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span", 69);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(35, "div", 52);
    \u0275\u0275element(36, "div", 70);
    \u0275\u0275elementStart(37, "div", 54)(38, "span", 71);
    \u0275\u0275text(39, " Ch\u01B0\u01A1ng tr\xECnh / Kh\xF3a h\u1ECDc ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 72);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(41, "svg", 57);
    \u0275\u0275element(42, "path", 73);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(43, "div", 59)(44, "div", 60);
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div", 74);
    \u0275\u0275text(48, " \u0110ang ho\u1EA1t \u0111\u1ED9ng trong ch\u01B0\u01A1ng tr\xECnh ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(49, "div", 52);
    \u0275\u0275element(50, "div", 75);
    \u0275\u0275elementStart(51, "div", 54)(52, "span", 76);
    \u0275\u0275text(53, " L\u1EDBp h\u1ECDc \u0111ang m\u1EDF ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div", 77);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(55, "svg", 57);
    \u0275\u0275element(56, "path", 78);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(57, "div", 59)(58, "div", 60);
    \u0275\u0275text(59);
    \u0275\u0275pipe(60, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "div", 61)(62, "span", 79);
    \u0275\u0275text(63);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "span", 69);
    \u0275\u0275text(65);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ov_r3 = \u0275\u0275nextContext().overview();
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 10, (ov_r3 == null ? null : ov_r3.totalActiveStudents) || 0), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" +", (ov_r3 == null ? null : ov_r3.newStudentsToday) || 0, " m\u1EDBi h\xF4m nay ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" -", (ov_r3 == null ? null : ov_r3.droppedStudentsToday) || 0, " ngh\u1EC9 ");
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(29, 12, (ov_r3 == null ? null : ov_r3.totalTeachers) || 0), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" +", (ov_r3 == null ? null : ov_r3.newTeachersToday) || 0, " GV m\u1EDBi ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" -", (ov_r3 == null ? null : ov_r3.resignedTeachersToday) || 0, " ngh\u1EC9 ");
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(46, 14, (ov_r3 == null ? null : ov_r3.totalCourses) || 0), " ");
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(60, 16, (ov_r3 == null ? null : ov_r3.totalActiveClasses) || 0), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" +", (ov_r3 == null ? null : ov_r3.newClassesOpened) || 0, " m\u1EDF m\u1EDBi ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" -", (ov_r3 == null ? null : ov_r3.classesClosedToday) || 0, " \u0111\xE3 \u0111\xF3ng ");
  }
}
function ReportingComponent_Conditional_35_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 88);
    \u0275\u0275text(1, "\u0110ang t\u1EA3i d\u1EEF li\u1EC7u t\u1ED5ng h\u1EE3p kho\u1EA3ng th\u1EDDi gian...");
    \u0275\u0275elementEnd();
  }
}
function ReportingComponent_Conditional_35_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 89)(1, "div", 90)(2, "div", 91);
    \u0275\u0275text(3, "HV M\u1EDBi C\u1ED9ng D\u1ED3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 92);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 93)(7, "div", 94);
    \u0275\u0275text(8, "HV Ngh\u1EC9 C\u1ED9ng D\u1ED3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 95);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 96)(12, "div", 97);
    \u0275\u0275text(13, "GV M\u1EDBi Th\xEAm");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 98);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 99)(17, "div", 100);
    \u0275\u0275text(18, "GV Ngh\u1EC9 Vi\u1EC7c");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 101);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 102)(22, "div", 103);
    \u0275\u0275text(23, "L\u1EDBp M\u1EDF M\u1EDBi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 104);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 105)(27, "div", 106);
    \u0275\u0275text(28, "S\u1ED1 Ng\xE0y B\xE1o C\xE1o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 107);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const sum_r8 = \u0275\u0275nextContext(2).summary();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("+", sum_r8.totalNewStudentsInRange);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("-", sum_r8.totalDroppedStudentsInRange);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("+", sum_r8.totalNewTeachersInRange);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("-", sum_r8.totalResignedTeachersInRange);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("+", sum_r8.totalNewClassesOpenedInRange);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", sum_r8.totalDaysReported, " ng\xE0y");
  }
}
function ReportingComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 80)(2, "div")(3, "h2", 81);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 82);
    \u0275\u0275element(5, "path", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " Bi\u1EBFn \u0111\u1ED9ng Th\u1ED1ng k\xEA theo Kho\u1EA3ng th\u1EDDi gian ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "p", 83);
    \u0275\u0275text(8, "Xem c\u1ED9ng d\u1ED3n bi\u1EBFn \u0111\u1ED9ng h\u1ECDc vi\xEAn, gi\xE1o vi\xEAn v\xE0 l\u1EDBp h\u1ECDc trong giai \u0111o\u1EA1n t\xF9y ch\u1ECDn");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 9)(10, "div", 84);
    \u0275\u0275listener("click", function ReportingComponent_Conditional_35_Template_div_click_10_listener() {
      \u0275\u0275restoreView(_r4);
      const startDateInput_r5 = \u0275\u0275reference(18);
      return \u0275\u0275resetView(startDateInput_r5.showPicker());
    });
    \u0275\u0275elementStart(11, "span", 16);
    \u0275\u0275text(12, "T\u1EEB:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 85);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(15, "svg", 86);
    \u0275\u0275element(16, "path", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(17, "input", 19, 1);
    \u0275\u0275listener("change", function ReportingComponent_Conditional_35_Template_input_change_17_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.onRangeStartChange($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 87);
    \u0275\u0275listener("click", function ReportingComponent_Conditional_35_Template_div_click_19_listener() {
      \u0275\u0275restoreView(_r4);
      const endDateInput_r7 = \u0275\u0275reference(27);
      return \u0275\u0275resetView(endDateInput_r7.showPicker());
    });
    \u0275\u0275elementStart(20, "span", 16);
    \u0275\u0275text(21, "\u0110\u1EBFn:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 85);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(24, "svg", 86);
    \u0275\u0275element(25, "path", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(26, "input", 19, 2);
    \u0275\u0275listener("change", function ReportingComponent_Conditional_35_Template_input_change_26_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.onRangeEndChange($event));
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275conditionalCreate(28, ReportingComponent_Conditional_35_Conditional_28_Template, 2, 0, "div", 88)(29, ReportingComponent_Conditional_35_Conditional_29_Template, 31, 6, "div", 89);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate(ctx_r5.rangeStartDateFormatted());
    \u0275\u0275advance(3);
    \u0275\u0275property("value", ctx_r5.rangeStartDate());
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r5.rangeEndDateFormatted());
    \u0275\u0275advance(3);
    \u0275\u0275property("value", ctx_r5.rangeEndDate());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r5.isLoadingSummary() ? 28 : ctx_r5.summary() ? 29 : -1);
  }
}
function ReportingComponent_Conditional_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 108);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 109);
    \u0275\u0275element(3, "circle", 110)(4, "path", 111);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " \u0110ang t\u1EA3i hi\u1EC7u su\u1EA5t c\xE1c l\u1EDBp h\u1ECDc... ");
    \u0275\u0275elementEnd()();
  }
}
function ReportingComponent_Conditional_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 108);
    \u0275\u0275text(2, " Kh\xF4ng t\xECm th\u1EA5y th\xF4ng tin hi\u1EC7u su\u1EA5t l\u1EDBp h\u1ECDc n\xE0o. ");
    \u0275\u0275elementEnd()();
  }
}
function ReportingComponent_Conditional_79_For_1_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 125);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", m_r10.droppedStudents, " HV ");
  }
}
function ReportingComponent_Conditional_79_For_1_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 126);
    \u0275\u0275text(1, "0");
    \u0275\u0275elementEnd();
  }
}
function ReportingComponent_Conditional_79_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 112)(1, "td", 113);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 114)(4, "div", 115);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 116);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td", 117)(9, "span", 118);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td", 119)(12, "div", 120)(13, "span", 121);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 122);
    \u0275\u0275element(16, "div", 123);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "td", 114)(18, "span", 124);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "td", 117);
    \u0275\u0275conditionalCreate(21, ReportingComponent_Conditional_79_For_1_Conditional_21_Template, 2, 1, "span", 125)(22, ReportingComponent_Conditional_79_For_1_Conditional_22_Template, 2, 0, "span", 126);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td", 127);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td", 128)(26, "button", 129);
    \u0275\u0275listener("click", function ReportingComponent_Conditional_79_For_1_Template_button_click_26_listener() {
      const m_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r5 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r5.syncSingleClass(m_r10.classId));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(27, "svg", 130);
    \u0275\u0275element(28, "path", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275text(29, " T\xEDnh l\u1EA1i hi\u1EC7u su\u1EA5t ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const m_r10 = ctx.$implicit;
    const \u0275$index_376_r11 = ctx.$index;
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" #", \u0275$index_376_r11 + 1, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(m_r10.className);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r10.classCode);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", m_r10.totalStudents || 0, " HV ");
    const attRate_r12 = m_r10.averageAttendanceRate || 0;
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r5.getAttendanceBadgeClass(attRate_r12));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", attRate_r12, "% ");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r5.getAttendanceBg(attRate_r12));
    \u0275\u0275styleProp("width", attRate_r12, "%");
    const score_r13 = m_r10.averageAssignmentScore || 0;
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r5.getScoreBadgeClass(score_r13));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u2B50 ", score_r13, " / 10 ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional((m_r10.droppedStudents ?? 0) > 0 ? 21 : 22);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", m_r10.lastCalculatedAt || "---", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r5.syncingClassId() === m_r10.classId);
    \u0275\u0275advance();
    \u0275\u0275classProp("animate-spin", ctx_r5.syncingClassId() === m_r10.classId);
  }
}
function ReportingComponent_Conditional_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ReportingComponent_Conditional_79_For_1_Template, 30, 19, "tr", 112, _forTrack08);
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r5.filteredClassMetrics());
  }
}
var ReportingComponent = class _ReportingComponent {
  reportingService = inject(ReportsService);
  destroyRef = inject(DestroyRef);
  toastService = inject(ToastService);
  // Collapsible section for Range Summary
  isRangeSectionOpen = signal(false, ...ngDevMode ? [{ debugName: "isRangeSectionOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  // Dates (YYYY-MM-DD for backend API and input[type="date"])
  selectedDate = signal(this.getTodayString(), ...ngDevMode ? [{ debugName: "selectedDate" }] : (
    /* istanbul ignore next */
    []
  ));
  rangeStartDate = signal(this.getDaysAgoString(30), ...ngDevMode ? [{ debugName: "rangeStartDate" }] : (
    /* istanbul ignore next */
    []
  ));
  rangeEndDate = signal(this.getTodayString(), ...ngDevMode ? [{ debugName: "rangeEndDate" }] : (
    /* istanbul ignore next */
    []
  ));
  // Formatted date displays (dd/MM/yyyy)
  selectedDateFormatted = computed(() => this.formatDateVn(this.selectedDate()), ...ngDevMode ? [{ debugName: "selectedDateFormatted" }] : (
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
  // Search
  searchControl = new FormControl("");
  // Data Signals
  overview = signal(null, ...ngDevMode ? [{ debugName: "overview" }] : (
    /* istanbul ignore next */
    []
  ));
  classMetrics = signal([], ...ngDevMode ? [{ debugName: "classMetrics" }] : (
    /* istanbul ignore next */
    []
  ));
  summary = signal(null, ...ngDevMode ? [{ debugName: "summary" }] : (
    /* istanbul ignore next */
    []
  ));
  // Loading States
  isLoadingDashboard = signal(false, ...ngDevMode ? [{ debugName: "isLoadingDashboard" }] : (
    /* istanbul ignore next */
    []
  ));
  isLoadingSummary = signal(false, ...ngDevMode ? [{ debugName: "isLoadingSummary" }] : (
    /* istanbul ignore next */
    []
  ));
  isSyncingCenter = signal(false, ...ngDevMode ? [{ debugName: "isSyncingCenter" }] : (
    /* istanbul ignore next */
    []
  ));
  isSyncingAllClasses = signal(false, ...ngDevMode ? [{ debugName: "isSyncingAllClasses" }] : (
    /* istanbul ignore next */
    []
  ));
  syncingClassId = signal(null, ...ngDevMode ? [{ debugName: "syncingClassId" }] : (
    /* istanbul ignore next */
    []
  ));
  // Computed Filtered Classes
  filteredClassMetrics = computed(() => {
    const list = this.classMetrics();
    const query = (this.searchControl.value || "").trim().toLowerCase();
    if (!query)
      return list;
    return list.filter((m) => m.className && m.className.toLowerCase().includes(query) || m.classCode && m.classCode.toLowerCase().includes(query));
  }, ...ngDevMode ? [{ debugName: "filteredClassMetrics" }] : (
    /* istanbul ignore next */
    []
  ));
  // Computed Averages across classes
  overallAvgAttendance = computed(() => {
    const list = this.classMetrics();
    if (list.length === 0)
      return 0;
    const sum = list.reduce((acc, curr) => acc + (Number(curr.averageAttendanceRate) || 0), 0);
    return Math.round(sum / list.length * 10) / 10;
  }, ...ngDevMode ? [{ debugName: "overallAvgAttendance" }] : (
    /* istanbul ignore next */
    []
  ));
  overallAvgScore = computed(() => {
    const list = this.classMetrics();
    if (list.length === 0)
      return 0;
    const sum = list.reduce((acc, curr) => acc + (Number(curr.averageAssignmentScore) || 0), 0);
    return Math.round(sum / list.length * 10) / 10;
  }, ...ngDevMode ? [{ debugName: "overallAvgScore" }] : (
    /* istanbul ignore next */
    []
  ));
  totalDroppedInClasses = computed(() => {
    return this.classMetrics().reduce((acc, curr) => acc + (curr.droppedStudents || 0), 0);
  }, ...ngDevMode ? [{ debugName: "totalDroppedInClasses" }] : (
    /* istanbul ignore next */
    []
  ));
  ngOnInit() {
    this.setupSearch();
    this.loadDashboardData();
  }
  toggleRangeSection() {
    const nextState = !this.isRangeSectionOpen();
    this.isRangeSectionOpen.set(nextState);
    if (nextState && !this.summary()) {
      this.loadSummaryRangeData();
    }
  }
  setupSearch() {
    this.searchControl.valueChanges.pipe(debounceTime(300), distinctUntilChanged(), takeUntilDestroyed(this.destroyRef)).subscribe();
  }
  loadDashboardData() {
    this.isLoadingDashboard.set(true);
    const date = this.selectedDate();
    this.reportingService.getTrainingDashboard(date).subscribe({
      next: (data) => {
        this.overview.set(data.centerOverview || null);
        this.classMetrics.set(data.classMetricsList || []);
        this.isLoadingDashboard.set(false);
      },
      error: (err) => {
        this.toastService.error("L\u1ED7i", "Kh\xF4ng th\u1EC3 t\u1EA3i b\xE1o c\xE1o \u0111\xE0o t\u1EA1o: " + (err.error?.message || err.message));
        this.isLoadingDashboard.set(false);
      }
    });
  }
  loadSummaryRangeData() {
    const start = this.rangeStartDate();
    const end = this.rangeEndDate();
    if (!start || !end)
      return;
    this.isLoadingSummary.set(true);
    this.reportingService.getSummaryReportBetween(start, end).subscribe({
      next: (data) => {
        this.summary.set(data);
        this.isLoadingSummary.set(false);
      },
      error: (err) => {
        this.toastService.error("L\u1ED7i", "Kh\xF4ng th\u1EC3 t\u1EA3i d\u1EEF li\u1EC7u bi\u1EBFn \u0111\u1ED9ng t\u1ED5ng h\u1EE3p: " + (err.error?.message || err.message));
        this.isLoadingSummary.set(false);
      }
    });
  }
  onDateChange(event) {
    const val = event.target.value;
    if (val) {
      this.selectedDate.set(val);
      this.loadDashboardData();
    }
  }
  onRangeStartChange(event) {
    const val = event.target.value;
    if (val) {
      this.rangeStartDate.set(val);
      this.loadSummaryRangeData();
    }
  }
  onRangeEndChange(event) {
    const val = event.target.value;
    if (val) {
      this.rangeEndDate.set(val);
      this.loadSummaryRangeData();
    }
  }
  syncCenterStatistics() {
    this.isSyncingCenter.set(true);
    this.reportingService.syncDailyReport(this.selectedDate()).subscribe({
      next: (res) => {
        this.toastService.success("Th\xE0nh c\xF4ng", res.message || "\u0110\u1ED3ng b\u1ED9 d\u1EEF li\u1EC7u trung t\xE2m th\xE0nh c\xF4ng!");
        this.isSyncingCenter.set(false);
        this.loadDashboardData();
      },
      error: (err) => {
        this.toastService.error("L\u1ED7i", "\u0110\u1ED3ng b\u1ED9 d\u1EEF li\u1EC7u trung t\xE2m th\u1EA5t b\u1EA1i: " + (err.error?.message || err.message));
        this.isSyncingCenter.set(false);
      }
    });
  }
  syncAllClasses() {
    this.isSyncingAllClasses.set(true);
    this.reportingService.syncClassMetrics().subscribe({
      next: (res) => {
        this.toastService.success("Th\xE0nh c\xF4ng", res.message || "\u0110\u1ED3ng b\u1ED9 hi\u1EC7u su\u1EA5t t\u1EA5t c\u1EA3 l\u1EDBp h\u1ECDc th\xE0nh c\xF4ng!");
        this.isSyncingAllClasses.set(false);
        this.loadDashboardData();
      },
      error: (err) => {
        this.toastService.error("L\u1ED7i", "\u0110\u1ED3ng b\u1ED9 hi\u1EC7u su\u1EA5t l\u1EDBp h\u1ECDc th\u1EA5t b\u1EA1i: " + (err.error?.message || err.message));
        this.isSyncingAllClasses.set(false);
      }
    });
  }
  syncSingleClass(classId) {
    if (classId == null)
      return;
    this.syncingClassId.set(classId);
    this.reportingService.syncClassMetrics(classId).subscribe({
      next: (res) => {
        this.toastService.success("Th\xE0nh c\xF4ng", res?.message || `\u0110\u1ED3ng b\u1ED9 hi\u1EC7u su\u1EA5t cho l\u1EDBp ID #${classId} th\xE0nh c\xF4ng!`);
        this.syncingClassId.set(null);
        this.loadDashboardData();
      },
      error: (err) => {
        this.toastService.error("L\u1ED7i", "\u0110\u1ED3ng b\u1ED9 hi\u1EC7u su\u1EA5t l\u1EDBp th\u1EA5t b\u1EA1i: " + (err.error?.message || err.message));
        this.syncingClassId.set(null);
      }
    });
  }
  // --- UI Helpers ---
  formatDateVn(dateStr) {
    if (!dateStr)
      return "";
    const parts = dateStr.split("-");
    if (parts.length === 3) {
      return `${parts[2]}/${parts[1]}/${parts[0]}`;
    }
    return dateStr;
  }
  getAttendanceBg(rate) {
    const val = Number(rate) || 0;
    if (val >= 90)
      return "bg-emerald-500";
    if (val >= 75)
      return "bg-amber-500";
    return "bg-rose-500";
  }
  getAttendanceBadgeClass(rate) {
    const val = Number(rate) || 0;
    if (val >= 90)
      return "bg-emerald-50 text-emerald-700 border-emerald-200";
    if (val >= 75)
      return "bg-amber-50 text-amber-700 border-amber-200";
    return "bg-rose-50 text-rose-700 border-rose-200";
  }
  getScoreBadgeClass(score) {
    const val = Number(score) || 0;
    if (val >= 8)
      return "bg-indigo-50 text-indigo-700 border-indigo-200";
    if (val >= 6.5)
      return "bg-blue-50 text-blue-700 border-blue-200";
    if (val >= 5)
      return "bg-amber-50 text-amber-700 border-amber-200";
    return "bg-rose-50 text-rose-700 border-rose-200";
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
  static \u0275fac = function ReportingComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReportingComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportingComponent, selectors: [["app-reporting"]], decls: 80, vars: 20, consts: [["reportDateInput", ""], ["startDateInput", ""], ["endDateInput", ""], [1, "space-y-6"], [1, "flex", "flex-col", "lg:flex-row", "lg:items-center", "justify-between", "gap-4", "pb-4", "border-b", "border-gray-100"], [1, "text-2xl", "font-extrabold", "text-gray-900", "tracking-tight", "flex", "items-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-7", "h-7", "mr-2", "text-indigo-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"], [1, "text-sm", "text-gray-500", "mt-1"], [1, "flex", "flex-wrap", "items-center", "gap-3"], [1, "bg-white", "hover:bg-gray-50", "text-gray-700", "border", "border-gray-200", "font-semibold", "py-2.5", "px-4", "rounded-xl", "flex", "items-center", "transition", "shadow-sm", "text-sm", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "mr-2", "text-indigo-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "ml-1.5", "transition-transform", "duration-200"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 9l-7 7-7-7"], ["title", "B\u1EA5m \u0111\u1EC3 ch\u1ECDn ng\xE0y b\xE1o c\xE1o", 1, "relative", "flex", "items-center", "bg-white", "px-3.5", "py-2.5", "rounded-xl", "border", "border-gray-200", "shadow-sm", "space-x-2.5", "cursor-pointer", "hover:border-indigo-400", "hover:bg-indigo-50/30", "transition", 3, "click"], [1, "text-xs", "font-semibold", "text-gray-500"], [1, "text-sm", "font-bold", "text-indigo-900", "font-mono", "tracking-tight"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-indigo-600", "ml-1"], ["type", "date", 1, "sr-only", 3, "change", "value"], [1, "bg-indigo-50", "hover:bg-indigo-100", "text-indigo-700", "border", "border-indigo-200", "font-semibold", "py-2.5", "px-4", "rounded-xl", "flex", "items-center", "transition", "shadow-sm", "text-sm", "disabled:opacity-50", 3, "click", "disabled"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "mr-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"], [1, "bg-blue-600", "hover:bg-blue-700", "text-white", "font-semibold", "py-2.5", "px-4", "rounded-xl", "flex", "items-center", "transition", "shadow-md", "text-sm", "disabled:opacity-50", 3, "click", "disabled"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M13 10V3L4 14h7v7l9-11h-7z"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-4", "gap-5"], [1, "bg-white", "rounded-2xl", "shadow-sm", "border", "border-gray-100", "p-6", "space-y-4", "transition-all", "duration-300", "animate-fadeIn"], [1, "bg-white", "rounded-2xl", "shadow-sm", "border", "border-gray-100", "overflow-hidden", "space-y-4"], [1, "p-6", "pb-2", "flex", "flex-col", "md:flex-row", "md:items-center", "justify-between", "gap-4", "border-b", "border-gray-100"], [1, "text-lg", "font-bold", "text-gray-900", "tracking-tight", "flex", "items-center"], [1, "ml-3", "px-2.5", "py-0.5", "text-xs", "font-bold", "bg-blue-50", "text-blue-700", "rounded-full", "border", "border-blue-200"], [1, "text-xs", "text-gray-500", "mt-0.5"], [1, "flex", "items-center", "space-x-3"], [1, "hidden", "lg:flex", "items-center", "space-x-2", "text-xs"], [1, "px-3", "py-1.5", "bg-emerald-50", "text-emerald-800", "rounded-xl", "font-bold", "border", "border-emerald-200"], [1, "px-3", "py-1.5", "bg-indigo-50", "text-indigo-800", "rounded-xl", "font-bold", "border", "border-indigo-200"], [1, "relative", "w-64"], [1, "absolute", "inset-y-0", "left-0", "flex", "items-center", "pl-3", "pointer-events-none"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-gray-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], ["type", "text", "placeholder", "T\xECm theo m\xE3/t\xEAn l\u1EDBp...", 1, "bg-gray-50/80", "border", "border-gray-200", "text-gray-900", "text-sm", "rounded-xl", "focus:ring-2", "focus:ring-blue-100", "focus:border-blue-500", "block", "w-full", "pl-10", "p-2.5", "outline-none", "transition", 3, "formControl"], [1, "overflow-x-auto"], [1, "w-full", "text-sm", "text-left", "text-gray-500"], [1, "text-xs", "text-gray-500", "uppercase", "bg-gray-50/80", "border-b", "border-gray-100", "font-semibold"], ["scope", "col", 1, "px-6", "py-4"], ["scope", "col", 1, "px-6", "py-4", "text-center"], ["scope", "col", 1, "px-6", "py-4", "text-right"], [1, "divide-y", "divide-gray-50"], [1, "bg-white", "p-5", "rounded-2xl", "border", "border-gray-100", "shadow-sm", "animate-pulse", "space-y-3"], [1, "h-4", "bg-gray-200", "rounded", "w-1/2"], [1, "h-8", "bg-gray-200", "rounded", "w-1/3"], [1, "h-3", "bg-gray-100", "rounded", "w-3/4"], [1, "bg-white", "p-5", "rounded-2xl", "border", "border-gray-100", "shadow-sm", "hover:shadow-md", "transition", "duration-200", "relative", "overflow-hidden", "group"], [1, "absolute", "-right-4", "-bottom-4", "w-24", "h-24", "bg-blue-50/60", "rounded-full", "group-hover:scale-110", "transition", "duration-300", "pointer-events-none"], [1, "flex", "items-center", "justify-between"], [1, "text-xs", "font-bold", "uppercase", "tracking-wider", "text-blue-600", "bg-blue-50", "px-2.5", "py-1", "rounded-lg"], [1, "p-2.5", "bg-blue-100/80", "rounded-xl", "text-blue-600"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"], [1, "mt-4"], [1, "text-3xl", "font-black", "text-gray-900", "tracking-tight"], [1, "flex", "items-center", "justify-between", "text-xs", "text-gray-500", "mt-2", "pt-2", "border-t", "border-gray-50"], [1, "text-emerald-600", "font-bold", "inline-flex", "items-center"], [1, "text-rose-500", "font-medium"], [1, "absolute", "-right-4", "-bottom-4", "w-24", "h-24", "bg-purple-50/60", "rounded-full", "group-hover:scale-110", "transition", "duration-300", "pointer-events-none"], [1, "text-xs", "font-bold", "uppercase", "tracking-wider", "text-purple-600", "bg-purple-50", "px-2.5", "py-1", "rounded-lg"], [1, "p-2.5", "bg-purple-100/80", "rounded-xl", "text-purple-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"], [1, "text-purple-700", "font-bold"], [1, "text-gray-400", "font-medium"], [1, "absolute", "-right-4", "-bottom-4", "w-24", "h-24", "bg-amber-50/60", "rounded-full", "group-hover:scale-110", "transition", "duration-300", "pointer-events-none"], [1, "text-xs", "font-bold", "uppercase", "tracking-wider", "text-amber-600", "bg-amber-50", "px-2.5", "py-1", "rounded-lg"], [1, "p-2.5", "bg-amber-100/80", "rounded-xl", "text-amber-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"], [1, "text-xs", "text-amber-700", "font-semibold", "mt-2", "pt-2", "border-t", "border-gray-50"], [1, "absolute", "-right-4", "-bottom-4", "w-24", "h-24", "bg-emerald-50/60", "rounded-full", "group-hover:scale-110", "transition", "duration-300", "pointer-events-none"], [1, "text-xs", "font-bold", "uppercase", "tracking-wider", "text-emerald-600", "bg-emerald-50", "px-2.5", "py-1", "rounded-lg"], [1, "p-2.5", "bg-emerald-100/80", "rounded-xl", "text-emerald-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"], [1, "text-emerald-700", "font-bold"], [1, "flex", "flex-col", "sm:flex-row", "sm:items-center", "justify-between", "gap-3", "pb-3", "border-b", "border-gray-100"], [1, "text-base", "font-extrabold", "text-gray-900", "tracking-tight", "flex", "items-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "mr-2", "text-indigo-500"], [1, "text-xs", "text-gray-500"], ["title", "B\u1EA5m \u0111\u1EC3 ch\u1ECDn T\u1EEB ng\xE0y", 1, "flex", "items-center", "bg-gray-50", "hover:bg-indigo-50/40", "px-3.5", "py-2", "rounded-xl", "border", "border-gray-200", "hover:border-indigo-300", "transition", "cursor-pointer", "space-x-2", 3, "click"], [1, "text-xs", "font-bold", "text-indigo-900", "font-mono", "tracking-tight"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-3.5", "h-3.5", "text-indigo-500", "ml-1"], ["title", "B\u1EA5m \u0111\u1EC3 ch\u1ECDn \u0110\u1EBFn ng\xE0y", 1, "flex", "items-center", "bg-gray-50", "hover:bg-indigo-50/40", "px-3.5", "py-2", "rounded-xl", "border", "border-gray-200", "hover:border-indigo-300", "transition", "cursor-pointer", "space-x-2", 3, "click"], [1, "py-6", "text-center", "text-gray-400", "text-sm"], [1, "grid", "grid-cols-2", "sm:grid-cols-3", "md:grid-cols-6", "gap-4", "text-center"], [1, "bg-blue-50/50", "p-3", "rounded-xl", "border", "border-blue-100"], [1, "text-xs", "text-blue-600", "font-semibold", "mb-1"], [1, "text-xl", "font-extrabold", "text-blue-900"], [1, "bg-rose-50/50", "p-3", "rounded-xl", "border", "border-rose-100"], [1, "text-xs", "text-rose-600", "font-semibold", "mb-1"], [1, "text-xl", "font-extrabold", "text-rose-900"], [1, "bg-purple-50/50", "p-3", "rounded-xl", "border", "border-purple-100"], [1, "text-xs", "text-purple-600", "font-semibold", "mb-1"], [1, "text-xl", "font-extrabold", "text-purple-900"], [1, "bg-amber-50/50", "p-3", "rounded-xl", "border", "border-amber-100"], [1, "text-xs", "text-amber-600", "font-semibold", "mb-1"], [1, "text-xl", "font-extrabold", "text-amber-900"], [1, "bg-emerald-50/50", "p-3", "rounded-xl", "border", "border-emerald-100"], [1, "text-xs", "text-emerald-600", "font-semibold", "mb-1"], [1, "text-xl", "font-extrabold", "text-emerald-900"], [1, "bg-gray-50", "p-3", "rounded-xl", "border", "border-gray-200"], [1, "text-xs", "text-gray-500", "font-semibold", "mb-1"], [1, "text-xl", "font-extrabold", "text-gray-800"], ["colspan", "8", 1, "px-6", "py-12", "text-center", "text-gray-500"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "mx-auto", "h-8", "w-8", "text-blue-500", "mb-3"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"], [1, "bg-white", "hover:bg-blue-50/40", "transition", "duration-200"], [1, "px-6", "py-4", "font-semibold", "text-gray-400"], [1, "px-6", "py-4"], [1, "font-bold", "text-gray-900", "text-sm"], [1, "font-mono", "text-xs", "text-indigo-600", "font-semibold"], [1, "px-6", "py-4", "text-center"], [1, "px-3", "py-1", "bg-gray-100", "text-gray-800", "font-bold", "rounded-lg", "text-xs"], [1, "px-6", "py-4", "max-w-xs"], [1, "flex", "items-center", "justify-between", "mb-1"], [1, "px-2", "py-0.5", "text-xs", "font-bold", "rounded", "border"], [1, "w-full", "bg-gray-100", "rounded-full", "h-2", "overflow-hidden"], [1, "h-2", "rounded-full", "transition-all", "duration-500"], [1, "px-3", "py-1", "text-xs", "font-extrabold", "rounded-lg", "border", "inline-flex", "items-center"], [1, "px-2.5", "py-1", "bg-rose-50", "text-rose-700", "font-bold", "rounded-lg", "text-xs", "border", "border-rose-200"], [1, "text-xs", "text-gray-400", "font-medium"], [1, "px-6", "py-4", "text-xs", "font-mono", "text-gray-400"], [1, "px-6", "py-4", "text-right"], [1, "font-semibold", "text-blue-600", "hover:text-blue-800", "transition", "text-xs", "inline-flex", "items-center", "bg-blue-50", "hover:bg-blue-100", "px-3", "py-1.5", "rounded-lg", "border", "border-blue-200", "disabled:opacity-50", 3, "click", "disabled"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-3.5", "h-3.5", "mr-1"]], template: function ReportingComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "div")(3, "h1", 5);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(4, "svg", 6);
      \u0275\u0275element(5, "path", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275text(6, " B\xE1o c\xE1o & Th\u1ED1ng k\xEA \u0110\xE0o t\u1EA1o ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(7, "p", 8);
      \u0275\u0275text(8, "Theo d\xF5i hi\u1EC7u su\u1EA5t l\u1EDBp h\u1ECDc, t\u1EF7 l\u1EC7 \u0111i\u1EC3m danh, \u0111i\u1EC3m trung b\xECnh v\xE0 ch\u1EC9 s\u1ED1 t\u1ED5ng quan h\u1EC7 th\u1ED1ng");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 9)(10, "button", 10);
      \u0275\u0275listener("click", function ReportingComponent_Template_button_click_10_listener() {
        return ctx.toggleRangeSection();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(11, "svg", 11);
      \u0275\u0275element(12, "path", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275text(13);
      \u0275\u0275elementStart(14, "svg", 13);
      \u0275\u0275element(15, "path", 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(16, "div", 15);
      \u0275\u0275listener("click", function ReportingComponent_Template_div_click_16_listener() {
        \u0275\u0275restoreView(_r1);
        const reportDateInput_r2 = \u0275\u0275reference(24);
        return \u0275\u0275resetView(reportDateInput_r2.showPicker());
      });
      \u0275\u0275elementStart(17, "span", 16);
      \u0275\u0275text(18, "Ng\xE0y:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "span", 17);
      \u0275\u0275text(20);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(21, "svg", 18);
      \u0275\u0275element(22, "path", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(23, "input", 19, 0);
      \u0275\u0275listener("change", function ReportingComponent_Template_input_change_23_listener($event) {
        return ctx.onDateChange($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "button", 20);
      \u0275\u0275listener("click", function ReportingComponent_Template_button_click_25_listener() {
        return ctx.syncCenterStatistics();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(26, "svg", 21);
      \u0275\u0275element(27, "path", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275text(28);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(29, "button", 23);
      \u0275\u0275listener("click", function ReportingComponent_Template_button_click_29_listener() {
        return ctx.syncAllClasses();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(30, "svg", 21);
      \u0275\u0275element(31, "path", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275text(32);
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(33, ReportingComponent_Conditional_33_Template, 3, 1, "div", 25)(34, ReportingComponent_Conditional_34_Template, 66, 18, "div", 25);
      \u0275\u0275conditionalCreate(35, ReportingComponent_Conditional_35_Template, 30, 5, "div", 26);
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(36, "div", 27)(37, "div", 28)(38, "div")(39, "h2", 29);
      \u0275\u0275text(40, " B\u1EA3ng Hi\u1EC7u su\u1EA5t L\u1EDBp h\u1ECDc ");
      \u0275\u0275elementStart(41, "span", 30);
      \u0275\u0275text(42);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "p", 31);
      \u0275\u0275text(44, "T\u1EF7 l\u1EC7 \u0111i\u1EC3m danh trung b\xECnh, \u0111i\u1EC3m s\u1ED1 b\xE0i t\u1EADp v\xE0 ch\u1EC9 s\u1ED1 ngh\u1EC9 h\u1ECDc c\u1EE7a t\u1EEBng l\u1EDBp");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "div", 32)(46, "div", 33)(47, "div", 34);
      \u0275\u0275text(48);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "div", 35);
      \u0275\u0275text(50);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(51, "div", 36)(52, "div", 37);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(53, "svg", 38);
      \u0275\u0275element(54, "path", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275element(55, "input", 40);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(56, "div", 41)(57, "table", 42)(58, "thead", 43)(59, "tr")(60, "th", 44);
      \u0275\u0275text(61, "STT");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "th", 44);
      \u0275\u0275text(63, "M\xE3 & T\xEAn L\u1EDBp h\u1ECDc");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "th", 45);
      \u0275\u0275text(65, "S\u0129 s\u1ED1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "th", 44);
      \u0275\u0275text(67, "T\u1EF7 l\u1EC7 \u0110i\u1EC3m danh TB");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "th", 44);
      \u0275\u0275text(69, "\u0110i\u1EC3m B\xE0i t\u1EADp TB");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "th", 45);
      \u0275\u0275text(71, "HV Ngh\u1EC9/B\u1ECF");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "th", 44);
      \u0275\u0275text(73, "L\u1EA7n c\u1EADp nh\u1EADt cu\u1ED1i");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "th", 46);
      \u0275\u0275text(75, "Thao t\xE1c");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(76, "tbody", 47);
      \u0275\u0275conditionalCreate(77, ReportingComponent_Conditional_77_Template, 6, 0, "tr")(78, ReportingComponent_Conditional_78_Template, 3, 0, "tr")(79, ReportingComponent_Conditional_79_Template, 2, 0);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(13);
      \u0275\u0275textInterpolate1(" ", ctx.isRangeSectionOpen() ? "\u1EA8n b\u1ED9 l\u1ECDc kho\u1EA3ng th\u1EDDi gian" : "Xem bi\u1EBFn \u0111\u1ED9ng theo th\u1EDDi gian", " ");
      \u0275\u0275advance();
      \u0275\u0275classProp("rotate-180", ctx.isRangeSectionOpen());
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.selectedDateFormatted());
      \u0275\u0275advance(3);
      \u0275\u0275property("value", ctx.selectedDate());
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.isSyncingCenter());
      \u0275\u0275advance();
      \u0275\u0275classProp("animate-spin", ctx.isSyncingCenter());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.isSyncingCenter() ? "\u0110ang \u0111\u1ED3ng b\u1ED9..." : "\u0110\u1ED3ng b\u1ED9 d\u1EEF li\u1EC7u Trung t\xE2m", " ");
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.isSyncingAllClasses());
      \u0275\u0275advance();
      \u0275\u0275classProp("animate-spin", ctx.isSyncingAllClasses());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.isSyncingAllClasses() ? "\u0110ang \u0111\u1ED3ng b\u1ED9..." : "\u0110\u1ED3ng b\u1ED9 T\u1EA5t c\u1EA3 Hi\u1EC7u su\u1EA5t L\u1EDBp", " ");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isLoadingDashboard() && !ctx.overview() ? 33 : 34);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isRangeSectionOpen() ? 35 : -1);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1(" ", ctx.filteredClassMetrics().length, " l\u1EDBp ");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" TB \u0110i\u1EC3m danh: ", ctx.overallAvgAttendance(), "% ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" TB \u0110i\u1EC3m b\xE0i t\u1EADp: ", ctx.overallAvgScore(), "/10 ");
      \u0275\u0275advance(5);
      \u0275\u0275property("formControl", ctx.searchControl);
      \u0275\u0275advance(22);
      \u0275\u0275conditional(ctx.isLoadingDashboard() && ctx.classMetrics().length === 0 ? 77 : ctx.filteredClassMetrics().length === 0 ? 78 : 79);
    }
  }, dependencies: [CommonModule, ReactiveFormsModule, DefaultValueAccessor, NgControlStatus, FormControlDirective, DecimalPipe], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportingComponent, [{
    type: Component,
    args: [{ selector: "app-reporting", imports: [CommonModule, ReactiveFormsModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="space-y-6">\r
\r
  <!-- PAGE HEADER & ACTION CONTROLS -->\r
  <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-gray-100">\r
    <div>\r
      <h1 class="text-2xl font-extrabold text-gray-900 tracking-tight flex items-center">\r
        <svg class="w-7 h-7 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>\r
        </svg>\r
        B\xE1o c\xE1o & Th\u1ED1ng k\xEA \u0110\xE0o t\u1EA1o\r
      </h1>\r
      <p class="text-sm text-gray-500 mt-1">Theo d\xF5i hi\u1EC7u su\u1EA5t l\u1EDBp h\u1ECDc, t\u1EF7 l\u1EC7 \u0111i\u1EC3m danh, \u0111i\u1EC3m trung b\xECnh v\xE0 ch\u1EC9 s\u1ED1 t\u1ED5ng quan h\u1EC7 th\u1ED1ng</p>\r
    </div>\r
\r
    <!-- Header Action Controls -->\r
    <div class="flex flex-wrap items-center gap-3">\r
      <!-- Toggle Range Summary Button -->\r
      <button \r
        (click)="toggleRangeSection()"\r
        class="bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 font-semibold py-2.5 px-4 rounded-xl flex items-center transition shadow-sm text-sm"\r
      >\r
        <svg class="w-4 h-4 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>\r
        </svg>\r
        {{ isRangeSectionOpen() ? '\u1EA8n b\u1ED9 l\u1ECDc kho\u1EA3ng th\u1EDDi gian' : 'Xem bi\u1EBFn \u0111\u1ED9ng theo th\u1EDDi gian' }}\r
        <svg class="w-4 h-4 ml-1.5 transition-transform duration-200" [class.rotate-180]="isRangeSectionOpen()" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>\r
        </svg>\r
      </button>\r
\r
      <!-- Select Report Date (Clickable Trigger -> showPicker) -->\r
      <div \r
        (click)="reportDateInput.showPicker()"\r
        class="relative flex items-center bg-white px-3.5 py-2.5 rounded-xl border border-gray-200 shadow-sm space-x-2.5 cursor-pointer hover:border-indigo-400 hover:bg-indigo-50/30 transition"\r
        title="B\u1EA5m \u0111\u1EC3 ch\u1ECDn ng\xE0y b\xE1o c\xE1o"\r
      >\r
        <span class="text-xs font-semibold text-gray-500">Ng\xE0y:</span>\r
        <span class="text-sm font-bold text-indigo-900 font-mono tracking-tight">{{ selectedDateFormatted() }}</span>\r
        <svg class="w-4 h-4 text-indigo-600 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>\r
        </svg>\r
        <input \r
          #reportDateInput\r
          type="date" \r
          [value]="selectedDate()"\r
          (change)="onDateChange($event)"\r
          class="sr-only"\r
        >\r
      </div>\r
\r
      <!-- Sync Center Button -->\r
      <button \r
        (click)="syncCenterStatistics()"\r
        [disabled]="isSyncingCenter()"\r
        class="bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 font-semibold py-2.5 px-4 rounded-xl flex items-center transition shadow-sm text-sm disabled:opacity-50"\r
      >\r
        <svg class="w-4 h-4 mr-2" [class.animate-spin]="isSyncingCenter()" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>\r
        </svg>\r
        {{ isSyncingCenter() ? '\u0110ang \u0111\u1ED3ng b\u1ED9...' : '\u0110\u1ED3ng b\u1ED9 d\u1EEF li\u1EC7u Trung t\xE2m' }}\r
      </button>\r
\r
      <!-- Sync All Class Metrics Button -->\r
      <button \r
        (click)="syncAllClasses()"\r
        [disabled]="isSyncingAllClasses()"\r
        class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-4 rounded-xl flex items-center transition shadow-md text-sm disabled:opacity-50"\r
      >\r
        <svg class="w-4 h-4 mr-2" [class.animate-spin]="isSyncingAllClasses()" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>\r
        </svg>\r
        {{ isSyncingAllClasses() ? '\u0110ang \u0111\u1ED3ng b\u1ED9...' : '\u0110\u1ED3ng b\u1ED9 T\u1EA5t c\u1EA3 Hi\u1EC7u su\u1EA5t L\u1EDBp' }}\r
      </button>\r
    </div>\r
  </div>\r
\r
  <!-- SECTION 1: CENTER OVERVIEW CARDS -->\r
  @if (isLoadingDashboard() && !overview()) {\r
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">\r
      @for (i of [1,2,3,4]; track i) {\r
        <div class="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm animate-pulse space-y-3">\r
          <div class="h-4 bg-gray-200 rounded w-1/2"></div>\r
          <div class="h-8 bg-gray-200 rounded w-1/3"></div>\r
          <div class="h-3 bg-gray-100 rounded w-3/4"></div>\r
        </div>\r
      }\r
    </div>\r
  } @else {\r
    @let ov = overview();\r
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">\r
      \r
      <!-- CARD 1: H\u1ECCC VI\xCAN -->\r
      <div class="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition duration-200 relative overflow-hidden group">\r
        <div class="absolute -right-4 -bottom-4 w-24 h-24 bg-blue-50/60 rounded-full group-hover:scale-110 transition duration-300 pointer-events-none"></div>\r
        \r
        <div class="flex items-center justify-between">\r
          <span class="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-lg">\r
            H\u1ECDc vi\xEAn \u0111ang h\u1ECDc\r
          </span>\r
          <div class="p-2.5 bg-blue-100/80 rounded-xl text-blue-600">\r
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>\r
            </svg>\r
          </div>\r
        </div>\r
\r
        <div class="mt-4">\r
          <div class="text-3xl font-black text-gray-900 tracking-tight">\r
            {{ (ov?.totalActiveStudents || 0) | number }}\r
          </div>\r
          <div class="flex items-center justify-between text-xs text-gray-500 mt-2 pt-2 border-t border-gray-50">\r
            <span class="text-emerald-600 font-bold inline-flex items-center">\r
              +{{ ov?.newStudentsToday || 0 }} m\u1EDBi h\xF4m nay\r
            </span>\r
            <span class="text-rose-500 font-medium">\r
              -{{ ov?.droppedStudentsToday || 0 }} ngh\u1EC9\r
            </span>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- CARD 2: GI\u1EA2NG VI\xCAN -->\r
      <div class="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition duration-200 relative overflow-hidden group">\r
        <div class="absolute -right-4 -bottom-4 w-24 h-24 bg-purple-50/60 rounded-full group-hover:scale-110 transition duration-300 pointer-events-none"></div>\r
\r
        <div class="flex items-center justify-between">\r
          <span class="text-xs font-bold uppercase tracking-wider text-purple-600 bg-purple-50 px-2.5 py-1 rounded-lg">\r
            \u0110\u1ED9i ng\u0169 Gi\u1EA3ng vi\xEAn\r
          </span>\r
          <div class="p-2.5 bg-purple-100/80 rounded-xl text-purple-600">\r
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>\r
            </svg>\r
          </div>\r
        </div>\r
\r
        <div class="mt-4">\r
          <div class="text-3xl font-black text-gray-900 tracking-tight">\r
            {{ (ov?.totalTeachers || 0) | number }}\r
          </div>\r
          <div class="flex items-center justify-between text-xs text-gray-500 mt-2 pt-2 border-t border-gray-50">\r
            <span class="text-purple-700 font-bold">\r
              +{{ ov?.newTeachersToday || 0 }} GV m\u1EDBi\r
            </span>\r
            <span class="text-gray-400 font-medium">\r
              -{{ ov?.resignedTeachersToday || 0 }} ngh\u1EC9\r
            </span>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- CARD 3: KH\xD3A H\u1ECCC -->\r
      <div class="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition duration-200 relative overflow-hidden group">\r
        <div class="absolute -right-4 -bottom-4 w-24 h-24 bg-amber-50/60 rounded-full group-hover:scale-110 transition duration-300 pointer-events-none"></div>\r
\r
        <div class="flex items-center justify-between">\r
          <span class="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-2.5 py-1 rounded-lg">\r
            Ch\u01B0\u01A1ng tr\xECnh / Kh\xF3a h\u1ECDc\r
          </span>\r
          <div class="p-2.5 bg-amber-100/80 rounded-xl text-amber-600">\r
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>\r
            </svg>\r
          </div>\r
        </div>\r
\r
        <div class="mt-4">\r
          <div class="text-3xl font-black text-gray-900 tracking-tight">\r
            {{ (ov?.totalCourses || 0) | number }}\r
          </div>\r
          <div class="text-xs text-amber-700 font-semibold mt-2 pt-2 border-t border-gray-50">\r
            \u0110ang ho\u1EA1t \u0111\u1ED9ng trong ch\u01B0\u01A1ng tr\xECnh\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- CARD 4: L\u1EDAP H\u1ECCC -->\r
      <div class="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition duration-200 relative overflow-hidden group">\r
        <div class="absolute -right-4 -bottom-4 w-24 h-24 bg-emerald-50/60 rounded-full group-hover:scale-110 transition duration-300 pointer-events-none"></div>\r
\r
        <div class="flex items-center justify-between">\r
          <span class="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-lg">\r
            L\u1EDBp h\u1ECDc \u0111ang m\u1EDF\r
          </span>\r
          <div class="p-2.5 bg-emerald-100/80 rounded-xl text-emerald-600">\r
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>\r
            </svg>\r
          </div>\r
        </div>\r
\r
        <div class="mt-4">\r
          <div class="text-3xl font-black text-gray-900 tracking-tight">\r
            {{ (ov?.totalActiveClasses || 0) | number }}\r
          </div>\r
          <div class="flex items-center justify-between text-xs text-gray-500 mt-2 pt-2 border-t border-gray-50">\r
            <span class="text-emerald-700 font-bold">\r
              +{{ ov?.newClassesOpened || 0 }} m\u1EDF m\u1EDBi\r
            </span>\r
            <span class="text-gray-400 font-medium">\r
              -{{ ov?.classesClosedToday || 0 }} \u0111\xE3 \u0111\xF3ng\r
            </span>\r
          </div>\r
        </div>\r
      </div>\r
\r
    </div>\r
  }\r
\r
  <!-- COLLAPSIBLE SECTION 2: CUSTOM RANGE SUMMARY -->\r
  @if (isRangeSectionOpen()) {\r
    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-4 transition-all duration-300 animate-fadeIn">\r
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-gray-100">\r
        <div>\r
          <h2 class="text-base font-extrabold text-gray-900 tracking-tight flex items-center">\r
            <svg class="w-5 h-5 mr-2 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>\r
            </svg>\r
            Bi\u1EBFn \u0111\u1ED9ng Th\u1ED1ng k\xEA theo Kho\u1EA3ng th\u1EDDi gian\r
          </h2>\r
          <p class="text-xs text-gray-500">Xem c\u1ED9ng d\u1ED3n bi\u1EBFn \u0111\u1ED9ng h\u1ECDc vi\xEAn, gi\xE1o vi\xEAn v\xE0 l\u1EDBp h\u1ECDc trong giai \u0111o\u1EA1n t\xF9y ch\u1ECDn</p>\r
        </div>\r
\r
        <!-- Range Filter Inputs (Clickable Triggers -> showPicker) -->\r
        <div class="flex flex-wrap items-center gap-3">\r
          <!-- T\u1EEB ng\xE0y -->\r
          <div \r
            (click)="startDateInput.showPicker()"\r
            class="flex items-center bg-gray-50 hover:bg-indigo-50/40 px-3.5 py-2 rounded-xl border border-gray-200 hover:border-indigo-300 transition cursor-pointer space-x-2"\r
            title="B\u1EA5m \u0111\u1EC3 ch\u1ECDn T\u1EEB ng\xE0y"\r
          >\r
            <span class="text-xs font-semibold text-gray-500">T\u1EEB:</span>\r
            <span class="text-xs font-bold text-indigo-900 font-mono tracking-tight">{{ rangeStartDateFormatted() }}</span>\r
            <svg class="w-3.5 h-3.5 text-indigo-500 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>\r
            </svg>\r
            <input \r
              #startDateInput\r
              type="date" \r
              [value]="rangeStartDate()"\r
              (change)="onRangeStartChange($event)"\r
              class="sr-only"\r
            >\r
          </div>\r
\r
          <!-- \u0110\u1EBFn ng\xE0y -->\r
          <div \r
            (click)="endDateInput.showPicker()"\r
            class="flex items-center bg-gray-50 hover:bg-indigo-50/40 px-3.5 py-2 rounded-xl border border-gray-200 hover:border-indigo-300 transition cursor-pointer space-x-2"\r
            title="B\u1EA5m \u0111\u1EC3 ch\u1ECDn \u0110\u1EBFn ng\xE0y"\r
          >\r
            <span class="text-xs font-semibold text-gray-500">\u0110\u1EBFn:</span>\r
            <span class="text-xs font-bold text-indigo-900 font-mono tracking-tight">{{ rangeEndDateFormatted() }}</span>\r
            <svg class="w-3.5 h-3.5 text-indigo-500 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>\r
            </svg>\r
            <input \r
              #endDateInput\r
              type="date" \r
              [value]="rangeEndDate()"\r
              (change)="onRangeEndChange($event)"\r
              class="sr-only"\r
            >\r
          </div>\r
        </div>\r
      </div>\r
\r
      @if (isLoadingSummary()) {\r
        <div class="py-6 text-center text-gray-400 text-sm">\u0110ang t\u1EA3i d\u1EEF li\u1EC7u t\u1ED5ng h\u1EE3p kho\u1EA3ng th\u1EDDi gian...</div>\r
      } @else if (summary()) {\r
        @let sum = summary()!;\r
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 text-center">\r
          \r
          <div class="bg-blue-50/50 p-3 rounded-xl border border-blue-100">\r
            <div class="text-xs text-blue-600 font-semibold mb-1">HV M\u1EDBi C\u1ED9ng D\u1ED3n</div>\r
            <div class="text-xl font-extrabold text-blue-900">+{{ sum.totalNewStudentsInRange }}</div>\r
          </div>\r
\r
          <div class="bg-rose-50/50 p-3 rounded-xl border border-rose-100">\r
            <div class="text-xs text-rose-600 font-semibold mb-1">HV Ngh\u1EC9 C\u1ED9ng D\u1ED3n</div>\r
            <div class="text-xl font-extrabold text-rose-900">-{{ sum.totalDroppedStudentsInRange }}</div>\r
          </div>\r
\r
          <div class="bg-purple-50/50 p-3 rounded-xl border border-purple-100">\r
            <div class="text-xs text-purple-600 font-semibold mb-1">GV M\u1EDBi Th\xEAm</div>\r
            <div class="text-xl font-extrabold text-purple-900">+{{ sum.totalNewTeachersInRange }}</div>\r
          </div>\r
\r
          <div class="bg-amber-50/50 p-3 rounded-xl border border-amber-100">\r
            <div class="text-xs text-amber-600 font-semibold mb-1">GV Ngh\u1EC9 Vi\u1EC7c</div>\r
            <div class="text-xl font-extrabold text-amber-900">-{{ sum.totalResignedTeachersInRange }}</div>\r
          </div>\r
\r
          <div class="bg-emerald-50/50 p-3 rounded-xl border border-emerald-100">\r
            <div class="text-xs text-emerald-600 font-semibold mb-1">L\u1EDBp M\u1EDF M\u1EDBi</div>\r
            <div class="text-xl font-extrabold text-emerald-900">+{{ sum.totalNewClassesOpenedInRange }}</div>\r
          </div>\r
\r
          <div class="bg-gray-50 p-3 rounded-xl border border-gray-200">\r
            <div class="text-xs text-gray-500 font-semibold mb-1">S\u1ED1 Ng\xE0y B\xE1o C\xE1o</div>\r
            <div class="text-xl font-extrabold text-gray-800">{{ sum.totalDaysReported }} ng\xE0y</div>\r
          </div>\r
\r
        </div>\r
      }\r
    </div>\r
  }\r
\r
  <!-- SECTION 3: CLASS PERFORMANCE TABLE -->\r
  <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden space-y-4">\r
    \r
    <!-- Table Header Toolbar -->\r
    <div class="p-6 pb-2 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-100">\r
      <div>\r
        <h2 class="text-lg font-bold text-gray-900 tracking-tight flex items-center">\r
          B\u1EA3ng Hi\u1EC7u su\u1EA5t L\u1EDBp h\u1ECDc\r
          <span class="ml-3 px-2.5 py-0.5 text-xs font-bold bg-blue-50 text-blue-700 rounded-full border border-blue-200">\r
            {{ filteredClassMetrics().length }} l\u1EDBp\r
          </span>\r
        </h2>\r
        <p class="text-xs text-gray-500 mt-0.5">T\u1EF7 l\u1EC7 \u0111i\u1EC3m danh trung b\xECnh, \u0111i\u1EC3m s\u1ED1 b\xE0i t\u1EADp v\xE0 ch\u1EC9 s\u1ED1 ngh\u1EC9 h\u1ECDc c\u1EE7a t\u1EEBng l\u1EDBp</p>\r
      </div>\r
\r
      <div class="flex items-center space-x-3">\r
        <!-- Quick Averages Summary Pills -->\r
        <div class="hidden lg:flex items-center space-x-2 text-xs">\r
          <div class="px-3 py-1.5 bg-emerald-50 text-emerald-800 rounded-xl font-bold border border-emerald-200">\r
            TB \u0110i\u1EC3m danh: {{ overallAvgAttendance() }}%\r
          </div>\r
          <div class="px-3 py-1.5 bg-indigo-50 text-indigo-800 rounded-xl font-bold border border-indigo-200">\r
            TB \u0110i\u1EC3m b\xE0i t\u1EADp: {{ overallAvgScore() }}/10\r
          </div>\r
        </div>\r
\r
        <!-- Search Input -->\r
        <div class="relative w-64">\r
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">\r
            <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>\r
            </svg>\r
          </div>\r
          <input \r
            type="text" \r
            [formControl]="searchControl" \r
            placeholder="T\xECm theo m\xE3/t\xEAn l\u1EDBp..." \r
            class="bg-gray-50/80 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-500 block w-full pl-10 p-2.5 outline-none transition"\r
          >\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Table Container -->\r
    <div class="overflow-x-auto">\r
      <table class="w-full text-sm text-left text-gray-500">\r
        <thead class="text-xs text-gray-500 uppercase bg-gray-50/80 border-b border-gray-100 font-semibold">\r
          <tr>\r
            <th scope="col" class="px-6 py-4">STT</th>\r
            <th scope="col" class="px-6 py-4">M\xE3 & T\xEAn L\u1EDBp h\u1ECDc</th>\r
            <th scope="col" class="px-6 py-4 text-center">S\u0129 s\u1ED1</th>\r
            <th scope="col" class="px-6 py-4">T\u1EF7 l\u1EC7 \u0110i\u1EC3m danh TB</th>\r
            <th scope="col" class="px-6 py-4">\u0110i\u1EC3m B\xE0i t\u1EADp TB</th>\r
            <th scope="col" class="px-6 py-4 text-center">HV Ngh\u1EC9/B\u1ECF</th>\r
            <th scope="col" class="px-6 py-4">L\u1EA7n c\u1EADp nh\u1EADt cu\u1ED1i</th>\r
            <th scope="col" class="px-6 py-4 text-right">Thao t\xE1c</th>\r
          </tr>\r
        </thead>\r
        <tbody class="divide-y divide-gray-50">\r
          @if (isLoadingDashboard() && classMetrics().length === 0) {\r
            <tr>\r
              <td colspan="8" class="px-6 py-12 text-center text-gray-500">\r
                <svg class="animate-spin mx-auto h-8 w-8 text-blue-500 mb-3" fill="none" viewBox="0 0 24 24">\r
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>\r
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>\r
                </svg>\r
                \u0110ang t\u1EA3i hi\u1EC7u su\u1EA5t c\xE1c l\u1EDBp h\u1ECDc...\r
              </td>\r
            </tr>\r
          } @else if (filteredClassMetrics().length === 0) {\r
            <tr>\r
              <td colspan="8" class="px-6 py-12 text-center text-gray-500">\r
                Kh\xF4ng t\xECm th\u1EA5y th\xF4ng tin hi\u1EC7u su\u1EA5t l\u1EDBp h\u1ECDc n\xE0o.\r
              </td>\r
            </tr>\r
          } @else {\r
            @for (m of filteredClassMetrics(); track m.classId; let idx = $index) {\r
              <tr class="bg-white hover:bg-blue-50/40 transition duration-200">\r
                \r
                <!-- STT -->\r
                <td class="px-6 py-4 font-semibold text-gray-400">\r
                  #{{ idx + 1 }}\r
                </td>\r
\r
                <!-- Class Code & Name -->\r
                <td class="px-6 py-4">\r
                  <div class="font-bold text-gray-900 text-sm">{{ m.className }}</div>\r
                  <div class="font-mono text-xs text-indigo-600 font-semibold">{{ m.classCode }}</div>\r
                </td>\r
\r
                <!-- Total Students -->\r
                <td class="px-6 py-4 text-center">\r
                  <span class="px-3 py-1 bg-gray-100 text-gray-800 font-bold rounded-lg text-xs">\r
                    {{ m.totalStudents || 0 }} HV\r
                  </span>\r
                </td>\r
\r
                <!-- Attendance Rate + Progress Bar -->\r
                <td class="px-6 py-4 max-w-xs">\r
                  @let attRate = m.averageAttendanceRate || 0;\r
                  <div class="flex items-center justify-between mb-1">\r
                    <span class="px-2 py-0.5 text-xs font-bold rounded border" [class]="getAttendanceBadgeClass(attRate)">\r
                      {{ attRate }}%\r
                    </span>\r
                  </div>\r
                  <!-- Visual Progress Bar -->\r
                  <div class="w-full bg-gray-100 rounded-full h-2 overflow-hidden">\r
                    <div \r
                      class="h-2 rounded-full transition-all duration-500" \r
                      [class]="getAttendanceBg(attRate)" \r
                      [style.width.%]="attRate"\r
                    ></div>\r
                  </div>\r
                </td>\r
\r
                <!-- Assignment Average Score -->\r
                <td class="px-6 py-4">\r
                  @let score = m.averageAssignmentScore || 0;\r
                  <span class="px-3 py-1 text-xs font-extrabold rounded-lg border inline-flex items-center" [class]="getScoreBadgeClass(score)">\r
                    \u2B50 {{ score }} / 10\r
                  </span>\r
                </td>\r
\r
                <!-- Dropped Students -->\r
                <td class="px-6 py-4 text-center">\r
                  @if ((m.droppedStudents ?? 0) > 0) {\r
                    <span class="px-2.5 py-1 bg-rose-50 text-rose-700 font-bold rounded-lg text-xs border border-rose-200">\r
                      {{ m.droppedStudents }} HV\r
                    </span>\r
                  } @else {\r
                    <span class="text-xs text-gray-400 font-medium">0</span>\r
                  }\r
                </td>\r
\r
                <!-- Last Calculated At -->\r
                <td class="px-6 py-4 text-xs font-mono text-gray-400">\r
                  {{ m.lastCalculatedAt || '---' }}\r
                </td>\r
\r
                <!-- Actions -->\r
                <td class="px-6 py-4 text-right">\r
                  <button \r
                    (click)="syncSingleClass(m.classId)" \r
                    [disabled]="syncingClassId() === m.classId"\r
                    class="font-semibold text-blue-600 hover:text-blue-800 transition text-xs inline-flex items-center bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-lg border border-blue-200 disabled:opacity-50"\r
                  >\r
                    <svg class="w-3.5 h-3.5 mr-1" [class.animate-spin]="syncingClassId() === m.classId" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>\r
                    </svg>\r
                    T\xEDnh l\u1EA1i hi\u1EC7u su\u1EA5t\r
                  </button>\r
                </td>\r
\r
              </tr>\r
            }\r
          }\r
        </tbody>\r
      </table>\r
    </div>\r
\r
  </div>\r
\r
</div>\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportingComponent, { className: "ReportingComponent", filePath: "src/app/features/academic/pages/reporting/reporting.component.ts", lineNumber: 21 });
})();

// src/app/features/academic/academic.routes.ts
var academicRoutes = [
  {
    path: "",
    redirectTo: "courses",
    pathMatch: "full"
  },
  {
    path: "courses",
    component: CourseComponent,
    canActivate: [authGuard, permissionGuard(["COURSES_VIEW", "COURSES_READ", "COURSES_MANAGE", "COURSES_CREATE", "COURSES_UPDATE", "COURSES_DELETE", "COURSE_VIEW", "COURSE_READ", "COURSE_MANAGE"])]
  },
  {
    path: "terms",
    component: TermComponent,
    canActivate: [authGuard, permissionGuard(["TERM_VIEW", "TERM_READ", "TERM_MANAGE", "TERM_CREATE", "TERM_UPDATE", "TERM_DELETE"])]
  },
  {
    path: "classes",
    component: ClassesComponent,
    canActivate: [authGuard, permissionGuard(["CLASS_VIEW", "CLASS_READ", "CLASS_MANAGE", "CLASS_CREATE", "CLASS_UPDATE", "CLASS_DELETE"])]
  },
  {
    path: "schedules",
    component: ScheduleComponent,
    canActivate: [authGuard, permissionGuard(["SCHEDULE_VIEW", "SCHEDULE_READ", "SCHEDULE_MANAGE", "SCHEDULE_CREATE"])]
  },
  {
    path: "rooms",
    component: RoomComponent,
    canActivate: [authGuard, permissionGuard(["ROOM_VIEW", "ROOM_READ", "ROOM_MANAGE", "ROOM_CREATE", "ROOM_UPDATE", "ROOM_DELETE"])]
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
    canActivate: [authGuard, permissionGuard(["MATERIAL_VIEW", "MATERIAL_READ", "MATERIAL_MANAGE", "MATERIAL_CREATE", "MATERIAL_UPDATE"])]
  },
  {
    path: "reports",
    component: ReportingComponent,
    canActivate: [authGuard, permissionGuard(["REPORT_VIEW", "REPORT_READ", "REPORT_MANAGE", "TRAINING_VIEW"])]
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
  // --- Các trang quản trị hệ thống được cấp quyền truy cập cho bộ phận khác ---
  {
    path: "users",
    component: UserComponent,
    canActivate: [authGuard, permissionGuard(["ACCOUNT_VIEW", "ACCOUNT_READ", "ACCOUNT_MANAGE", "ACCOUNT_UPDATE", "ACCOUNT_CREATE"])]
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
    path: "departments",
    component: DepartmentComponent,
    canActivate: [authGuard, permissionGuard(["DEPARTMENT_VIEW", "DEPARTMENT_READ", "DEPARTMENT_MANAGE", "DEPARTMENT_CREATE", "DEPARTMENT_UPDATE", "DEPARTMENT_DELETE"])]
  },
  {
    path: "activity-logs",
    component: ActivityLogComponent,
    canActivate: [authGuard, permissionGuard(["LOG_VIEW", "LOG_READ", "ROLE_VIEW"])]
  }
];
export {
  academicRoutes
};
//# sourceMappingURL=chunk-6EEFKX64.js.map
