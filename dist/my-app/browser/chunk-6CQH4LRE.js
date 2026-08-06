import {
  HasPermissionDirective
} from "./chunk-ZGQZPNIZ.js";
import {
  EnrollmentService,
  ScheduleService
} from "./chunk-RYS3MB5W.js";
import {
  CheckboxControlValueAccessor,
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
  RadioControlValueAccessor,
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
  Router
} from "./chunk-T67WJEUA.js";
import {
  ChangeDetectionStrategy,
  CommonModule,
  Component,
  DOCUMENT,
  DatePipe,
  DestroyRef,
  HttpClient,
  HttpParams,
  Injectable,
  NgClass,
  NgForOf,
  NgIf,
  Observable,
  __spreadProps,
  __spreadValues,
  assertInInjectionContext,
  computed,
  debounceTime,
  distinctUntilChanged,
  environment,
  filter,
  forkJoin,
  inject,
  interval,
  map,
  of,
  setClassMetadata,
  signal,
  takeUntil,
  tap,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
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
  ɵɵpureFunction0,
  ɵɵpureFunction4,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3
} from "./chunk-4WA2FUT3.js";

// src/app/modules/academic/services/class.service.ts
var ClassService = class _ClassService {
  http = inject(HttpClient);
  apiUrl = `${environment.apiUrl}/api/v1/classes`;
  getAll(page = 1, size = 10, keyword, status, courseId, termId) {
    let params = new HttpParams();
    if (typeof page === "object" && page !== null) {
      const pageIndex = page.page != null ? Math.max(0, Number(page.page) - 1) : 0;
      params = params.set("page", pageIndex.toString());
      if (page.size !== void 0)
        params = params.set("size", page.size.toString());
      if (page.keyword)
        params = params.set("keyword", page.keyword);
      if (page.status)
        params = params.set("status", page.status);
      if (page.courseId)
        params = params.set("courseId", page.courseId.toString());
      if (page.termId)
        params = params.set("termId", page.termId.toString());
    } else {
      const pageIndex = Math.max(0, Number(page) - 1);
      params = params.set("page", pageIndex.toString()).set("size", (size || 10).toString());
      if (keyword)
        params = params.set("keyword", keyword);
      if (status)
        params = params.set("status", status);
      if (courseId)
        params = params.set("courseId", courseId.toString());
      if (termId)
        params = params.set("termId", termId.toString());
    }
    return this.http.get(this.apiUrl, { params });
  }
  getClasses(params) {
    return this.getAll(params);
  }
  getById(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  create(data) {
    return this.http.post(this.apiUrl, data);
  }
  update(id, data) {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }
  delete(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  static \u0275fac = function ClassService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ClassService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ClassService, factory: _ClassService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClassService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/modules/academic/services/room.service.ts
var RoomService = class _RoomService {
  http = inject(HttpClient);
  apiUrl = `${environment.apiUrl}/api/v1/rooms`;
  getAll(page = 1, size = 10, keyword, roomType) {
    let params = new HttpParams();
    if (typeof page === "object" && page !== null) {
      const pageIndex = page.page != null ? Math.max(0, Number(page.page) - 1) : 0;
      params = params.set("page", pageIndex.toString());
      if (page.size !== void 0)
        params = params.set("size", page.size.toString());
      if (page.keyword)
        params = params.set("keyword", page.keyword);
      if (page.roomType)
        params = params.set("roomType", page.roomType);
    } else {
      const pageIndex = Math.max(0, Number(page) - 1);
      params = params.set("page", pageIndex.toString()).set("size", (size || 10).toString());
      if (keyword)
        params = params.set("keyword", keyword);
      if (roomType)
        params = params.set("roomType", roomType);
    }
    return this.http.get(this.apiUrl, { params });
  }
  getRooms(params) {
    return this.getAll(params);
  }
  getById(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  create(data) {
    return this.http.post(this.apiUrl, data);
  }
  update(id, data) {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }
  delete(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  static \u0275fac = function RoomService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RoomService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RoomService, factory: _RoomService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RoomService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/modules/academic/models/schedule.model.ts
var DAY_OF_WEEK_MAP = {
  2: "Th\u1EE9 Hai",
  3: "Th\u1EE9 Ba",
  4: "Th\u1EE9 T\u01B0",
  5: "Th\u1EE9 N\u0103m",
  6: "Th\u1EE9 S\xE1u",
  7: "Th\u1EE9 B\u1EA3y",
  8: "Ch\u1EE7 Nh\u1EADt"
};
var DAY_OPTIONS = [
  { value: 2, label: "Th\u1EE9 Hai" },
  { value: 3, label: "Th\u1EE9 Ba" },
  { value: 4, label: "Th\u1EE9 T\u01B0" },
  { value: 5, label: "Th\u1EE9 N\u0103m" },
  { value: 6, label: "Th\u1EE9 S\xE1u" },
  { value: 7, label: "Th\u1EE9 B\u1EA3y" },
  { value: 8, label: "Ch\u1EE7 Nh\u1EADt" }
];

// src/app/features/academic/pages/schedule/schedule.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.value;
function ScheduleComponent_For_13_Template(rf, ctx) {
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
function ScheduleComponent_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function ScheduleComponent_button_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 18);
    \u0275\u0275element(2, "path", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Th\xEAm ca h\u1ECDc m\u1EDBi ");
    \u0275\u0275elementEnd();
  }
}
function ScheduleComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 20);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 21);
    \u0275\u0275element(3, "circle", 22)(4, "path", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " \u0110ang t\u1EA3i th\u1EDDi kh\xF3a bi\u1EC3u l\u1EDBp h\u1ECDc... ");
    \u0275\u0275elementEnd()();
  }
}
function ScheduleComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 20);
    \u0275\u0275text(2, " L\u1EDBp h\u1ECDc n\xE0y ch\u01B0a c\xF3 ca h\u1ECDc n\xE0o \u0111\u01B0\u1EE3c x\u1EBFp l\u1ECBch. ");
    \u0275\u0275elementEnd()();
  }
}
function ScheduleComponent_Conditional_34_For_1_button_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 41);
    \u0275\u0275listener("click", function ScheduleComponent_Conditional_34_For_1_button_28_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const s_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openModal(s_r5));
    });
    \u0275\u0275text(1, " Ch\u1EC9nh s\u1EEDa ");
    \u0275\u0275elementEnd();
  }
}
function ScheduleComponent_Conditional_34_For_1_button_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 42);
    \u0275\u0275listener("click", function ScheduleComponent_Conditional_34_For_1_button_29_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const s_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onDelete(s_r5.id));
    });
    \u0275\u0275text(1, " X\xF3a ");
    \u0275\u0275elementEnd();
  }
}
function ScheduleComponent_Conditional_34_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 24)(1, "td", 25);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 26)(4, "div", 27);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 28);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td", 26)(9, "span", 29);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 30);
    \u0275\u0275element(11, "path", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(13, "td", 26)(14, "div", 32)(15, "span");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 33);
    \u0275\u0275text(18, "\u2794");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "td", 34)(22, "div", 35);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(23, "svg", 36);
    \u0275\u0275element(24, "path", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(25, "span");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "td", 38);
    \u0275\u0275template(28, ScheduleComponent_Conditional_34_For_1_button_28_Template, 2, 0, "button", 39)(29, ScheduleComponent_Conditional_34_For_1_button_29_Template, 2, 0, "button", 40);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r5 = ctx.$implicit;
    const \u0275$index_82_r7 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" #", \u0275$index_82_r7 + 1, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r5.classCode || "---");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r5.className || "L\u1EDBp \u0111\xE0o t\u1EA1o");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.getDayName(s_r5.dayOfWeek), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.formatTimeDisplay(s_r5.startTime));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.formatTimeDisplay(s_r5.endTime));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(s_r5.roomName || "Ch\u01B0a x\u1EBFp ph\xF2ng");
    \u0275\u0275advance(2);
    \u0275\u0275property("hasPermission", "SCHEDULE_UPDATE");
    \u0275\u0275advance();
    \u0275\u0275property("hasPermission", "SCHEDULE_DELETE");
  }
}
function ScheduleComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ScheduleComponent_Conditional_34_For_1_Template, 30, 9, "tr", 24, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r2.schedules());
  }
}
function ScheduleComponent_Conditional_35_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cls_r9 = ctx.$implicit;
    \u0275\u0275property("value", cls_r9.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", cls_r9.code, " - ", cls_r9.name);
  }
}
function ScheduleComponent_Conditional_35_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 56);
    \u0275\u0275text(1, "Vui l\xF2ng ch\u1ECDn l\u1EDBp h\u1ECDc");
    \u0275\u0275elementEnd();
  }
}
function ScheduleComponent_Conditional_35_For_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r10 = ctx.$implicit;
    \u0275\u0275property("value", day_r10.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(day_r10.label);
  }
}
function ScheduleComponent_Conditional_35_For_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r11 = ctx.$implicit;
    \u0275\u0275property("value", r_r11.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", r_r11.name, " (S\u1EE9c ch\u1EE9a: ", r_r11.capacity || "N/A", ")");
  }
}
function ScheduleComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 43);
    \u0275\u0275listener("click", function ScheduleComponent_Conditional_35_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeModal());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 44)(3, "div", 45)(4, "div", 46)(5, "h3", 47);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 48);
    \u0275\u0275listener("click", function ScheduleComponent_Conditional_35_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 49);
    \u0275\u0275element(9, "path", 50);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(10, "form", 51);
    \u0275\u0275listener("ngSubmit", function ScheduleComponent_Conditional_35_Template_form_ngSubmit_10_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onSubmit());
    });
    \u0275\u0275elementStart(11, "div")(12, "label", 52);
    \u0275\u0275text(13, " L\u1EDBp h\u1ECDc ");
    \u0275\u0275elementStart(14, "span", 53);
    \u0275\u0275text(15, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "select", 54)(17, "option", 55);
    \u0275\u0275text(18, "-- Ch\u1ECDn L\u1EDBp h\u1ECDc --");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(19, ScheduleComponent_Conditional_35_For_20_Template, 2, 3, "option", 8, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(21, ScheduleComponent_Conditional_35_Conditional_21_Template, 2, 0, "p", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 57)(23, "div")(24, "label", 52);
    \u0275\u0275text(25, " Th\u1EE9 trong tu\u1EA7n ");
    \u0275\u0275elementStart(26, "span", 53);
    \u0275\u0275text(27, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "select", 58)(29, "option", 55);
    \u0275\u0275text(30, "-- Ch\u1ECDn Th\u1EE9 trong tu\u1EA7n --");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(31, ScheduleComponent_Conditional_35_For_32_Template, 2, 2, "option", 8, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div")(34, "label", 52);
    \u0275\u0275text(35, " Ph\xF2ng h\u1ECDc / Zoom ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "select", 59)(37, "option", 55);
    \u0275\u0275text(38, "-- Ch\u1ECDn Ph\xF2ng h\u1ECDc --");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(39, ScheduleComponent_Conditional_35_For_40_Template, 2, 3, "option", 8, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "div", 57)(42, "div")(43, "label", 52);
    \u0275\u0275text(44, " Gi\u1EDD b\u1EAFt \u0111\u1EA7u ");
    \u0275\u0275elementStart(45, "span", 53);
    \u0275\u0275text(46, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(47, "input", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div")(49, "label", 52);
    \u0275\u0275text(50, " Gi\u1EDD k\u1EBFt th\xFAc ");
    \u0275\u0275elementStart(51, "span", 53);
    \u0275\u0275text(52, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(53, "input", 61);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "div", 62)(55, "button", 63);
    \u0275\u0275listener("click", function ScheduleComponent_Conditional_35_Template_button_click_55_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeModal());
    });
    \u0275\u0275text(56, " H\u1EE7y b\u1ECF ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "button", 64);
    \u0275\u0275text(58);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_5_0;
    let tmp_8_0;
    let tmp_9_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r2.isEditing() ? "C\u1EADp nh\u1EADt ca l\u1ECBch h\u1ECDc" : "Th\xEAm ca l\u1ECBch h\u1ECDc m\u1EDBi", " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("formGroup", ctx_r2.scheduleForm);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("border-red-400", ctx_r2.isFormSubmitted() && ((tmp_3_0 = ctx_r2.scheduleForm.get("classId")) == null ? null : tmp_3_0.invalid));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.availableClasses());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.isFormSubmitted() && ((tmp_5_0 = ctx_r2.scheduleForm.get("classId")) == null ? null : tmp_5_0.hasError("required")) ? 21 : -1);
    \u0275\u0275advance(10);
    \u0275\u0275repeater(ctx_r2.dayOptions);
    \u0275\u0275advance(8);
    \u0275\u0275repeater(ctx_r2.availableRooms());
    \u0275\u0275advance(8);
    \u0275\u0275classProp("border-red-400", ctx_r2.isFormSubmitted() && ((tmp_8_0 = ctx_r2.scheduleForm.get("startTime")) == null ? null : tmp_8_0.invalid));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("border-red-400", ctx_r2.isFormSubmitted() && ((tmp_9_0 = ctx_r2.scheduleForm.get("endTime")) == null ? null : tmp_9_0.invalid));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.isEditing() ? "C\u1EADp nh\u1EADt" : "Th\xEAm m\u1EDBi", " ");
  }
}
function ScheduleComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 43);
    \u0275\u0275listener("click", function ScheduleComponent_Conditional_36_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeDeleteModal());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 44)(3, "div", 65)(4, "div", 66)(5, "div", 67);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 68);
    \u0275\u0275element(7, "path", 69);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "h3", 70);
    \u0275\u0275text(9, "X\xE1c nh\u1EADn x\xF3a ca l\u1ECBch h\u1ECDc");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "p", 71);
    \u0275\u0275text(11, " B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a ca l\u1ECBch h\u1ECDc n\xE0y kh\xF4ng? Ca h\u1ECDc s\u1EBD b\u1ECB x\xF3a kh\u1ECFi th\u1EDDi kh\xF3a bi\u1EC3u c\u1EE7a l\u1EDBp. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 72)(13, "button", 73);
    \u0275\u0275listener("click", function ScheduleComponent_Conditional_36_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeDeleteModal());
    });
    \u0275\u0275text(14, " H\u1EE7y ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 74);
    \u0275\u0275listener("click", function ScheduleComponent_Conditional_36_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.confirmDelete());
    });
    \u0275\u0275text(16, " \u0110\u1ED3ng \xFD X\xF3a ");
    \u0275\u0275elementEnd()()()()();
  }
}
var ScheduleComponent = class _ScheduleComponent {
  scheduleService = inject(ScheduleService);
  classesService = inject(ClassService);
  roomService = inject(RoomService);
  fb = inject(FormBuilder);
  toastService = inject(ToastService);
  route = inject(ActivatedRoute);
  // Constants
  dayOptions = DAY_OPTIONS;
  dayOfWeekMap = DAY_OF_WEEK_MAP;
  // State
  schedules = signal([], ...ngDevMode ? [{ debugName: "schedules" }] : (
    /* istanbul ignore next */
    []
  ));
  availableClasses = signal([], ...ngDevMode ? [{ debugName: "availableClasses" }] : (
    /* istanbul ignore next */
    []
  ));
  availableRooms = signal([], ...ngDevMode ? [{ debugName: "availableRooms" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedClassId = signal(null, ...ngDevMode ? [{ debugName: "selectedClassId" }] : (
    /* istanbul ignore next */
    []
  ));
  isLoading = signal(false, ...ngDevMode ? [{ debugName: "isLoading" }] : (
    /* istanbul ignore next */
    []
  ));
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
  scheduleForm;
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
  ngOnInit() {
    this.initForm();
    this.loadAvailableClasses();
    this.loadAvailableRooms();
  }
  initForm() {
    this.scheduleForm = this.fb.group({
      classId: ["", [Validators.required]],
      dayOfWeek: [2, [Validators.required, Validators.min(2), Validators.max(8)]],
      startTime: ["08:00", [Validators.required]],
      endTime: ["10:00", [Validators.required]],
      roomId: [""],
      roomName: [""]
    });
  }
  loadAvailableClasses() {
    this.classesService.getClasses({ size: 100 }).subscribe({
      next: (res) => {
        const list = res.content || [];
        this.availableClasses.set(list);
        const routeClassId = this.route.snapshot.paramMap.get("id") || this.route.snapshot.queryParamMap.get("classId");
        if (routeClassId) {
          this.selectedClassId.set(Number(routeClassId));
        } else if (list.length > 0 && !this.selectedClassId()) {
          this.selectedClassId.set(list[0].id ?? null);
        }
        this.loadSchedules();
      },
      error: (err) => {
        this.toastService.error("L\u1ED7i", "L\u1ED7i khi t\u1EA3i danh s\xE1ch l\u1EDBp h\u1ECDc: " + (err.error?.message || err.message));
      }
    });
  }
  loadAvailableRooms() {
    this.roomService.getRooms({ size: 100 }).subscribe({
      next: (res) => {
        this.availableRooms.set(res.content || []);
      },
      error: () => {
      }
    });
  }
  onClassFilterChange(event) {
    const select = event.target;
    const classId = select.value ? Number(select.value) : null;
    this.selectedClassId.set(classId);
    this.loadSchedules();
  }
  loadSchedules() {
    const classId = this.selectedClassId();
    if (!classId) {
      this.schedules.set([]);
      return;
    }
    this.isLoading.set(true);
    this.scheduleService.getSchedulesByClassId(classId).subscribe({
      next: (data) => {
        this.schedules.set(data || []);
        this.isLoading.set(false);
      },
      error: (err) => {
        this.toastService.error("L\u1ED7i", "L\u1ED7i khi t\u1EA3i l\u1ECBch h\u1ECDc: " + (err.error?.message || err.message));
        this.isLoading.set(false);
      }
    });
  }
  openModal(item) {
    this.isFormSubmitted.set(false);
    this.loadAvailableClasses();
    this.loadAvailableRooms();
    if (item && item.id) {
      this.isEditing.set(true);
      this.currentId.set(item.id);
      const start = item.startTime ? item.startTime.substring(0, 5) : "08:00";
      const end = item.endTime ? item.endTime.substring(0, 5) : "10:00";
      this.scheduleForm.patchValue({
        classId: item.classId,
        dayOfWeek: item.dayOfWeek,
        startTime: start,
        endTime: end,
        roomId: item.roomId || "",
        roomName: item.roomName || ""
      });
    } else {
      if (this.isEditing() || !this.scheduleForm.get("classId")?.value) {
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
    this.scheduleForm.reset({
      classId: this.selectedClassId() || "",
      dayOfWeek: "",
      startTime: "08:00",
      endTime: "10:00",
      roomId: "",
      roomName: ""
    });
  }
  closeModal() {
    this.isModalOpen.set(false);
  }
  onSubmit() {
    this.isFormSubmitted.set(true);
    if (this.scheduleForm.invalid) {
      this.toastService.error("Th\xF4ng b\xE1o", "Vui l\xF2ng \u0111i\u1EC1n \u0111\u1EA7y \u0111\u1EE7 c\xE1c tr\u01B0\u1EDDng b\u1EAFt bu\u1ED9c");
      return;
    }
    const val = this.scheduleForm.value;
    if (val.startTime >= val.endTime) {
      this.toastService.error("L\u1ED7i gi\u1EDD h\u1ECDc", "Gi\u1EDD k\u1EBFt th\xFAc ph\u1EA3i sau gi\u1EDD b\u1EAFt \u0111\u1EA7u");
      return;
    }
    const startTimeFormatted = val.startTime.length === 5 ? `${val.startTime}:00` : val.startTime;
    const endTimeFormatted = val.endTime.length === 5 ? `${val.endTime}:00` : val.endTime;
    const selectedRoom = this.availableRooms().find((r) => r.id === Number(val.roomId));
    const dto = {
      classId: Number(val.classId),
      dayOfWeek: Number(val.dayOfWeek),
      startTime: startTimeFormatted,
      endTime: endTimeFormatted,
      roomId: val.roomId ? Number(val.roomId) : void 0,
      roomName: selectedRoom ? selectedRoom.name : val.roomName
    };
    if (this.isEditing() && this.currentId()) {
      this.scheduleService.update(this.currentId(), dto).subscribe({
        next: () => {
          this.toastService.success("Th\xE0nh c\xF4ng", "C\u1EADp nh\u1EADt ca h\u1ECDc th\xE0nh c\xF4ng!");
          this.closeModal();
          this.loadSchedules();
        },
        error: (err) => {
          this.toastService.error("L\u1ED7i", "C\u1EADp nh\u1EADt th\u1EA5t b\u1EA1i: " + (err.error?.message || err.message));
        }
      });
    } else {
      this.scheduleService.create(dto).subscribe({
        next: () => {
          this.toastService.success("Th\xE0nh c\xF4ng", "T\u1EA1o m\u1EDBi ca h\u1ECDc th\xE0nh c\xF4ng!");
          this.resetAddForm();
          this.closeModal();
          this.loadSchedules();
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
    this.scheduleService.delete(id).subscribe({
      next: () => {
        this.toastService.success("Th\xE0nh c\xF4ng", "X\xF3a ca h\u1ECDc th\xE0nh c\xF4ng!");
        this.isDeleteModalOpen.set(false);
        this.idToDelete.set(null);
        this.loadSchedules();
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
  getDayName(day) {
    return this.dayOfWeekMap[day] || `Th\u1EE9 ${day}`;
  }
  formatTimeDisplay(timeStr) {
    if (!timeStr)
      return "--:--";
    return timeStr.substring(0, 5);
  }
  static \u0275fac = function ScheduleComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ScheduleComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ScheduleComponent, selectors: [["app-schedule"]], decls: 37, vars: 5, consts: [[1, "space-y-6"], [1, "flex", "flex-col", "md:flex-row", "md:items-end", "justify-between", "gap-4", "pb-4", "border-b", "border-gray-100"], [1, "text-2xl", "font-extrabold", "text-gray-900", "tracking-tight"], [1, "text-sm", "text-gray-500", "mt-1"], [1, "flex", "flex-col", "sm:flex-row", "space-y-2", "sm:space-y-0", "sm:space-x-3", "items-stretch", "sm:items-center"], [1, "flex", "items-center", "space-x-2"], [1, "text-xs", "font-bold", "text-gray-600", "uppercase", "whitespace-nowrap"], [1, "bg-white", "border", "border-gray-200", "text-gray-900", "text-sm", "rounded-xl", "focus:ring-2", "focus:ring-blue-100", "focus:border-blue-500", "block", "px-3.5", "py-2.5", "outline-none", "transition", "shadow-sm", "font-semibold", "min-w-[200px]", 3, "change", "value"], [3, "value"], ["class", "bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-5 rounded-xl flex items-center justify-center transition shadow-md hover:shadow-lg text-sm", 3, "click", 4, "hasPermission"], [1, "bg-white", "rounded-2xl", "shadow-sm", "border", "border-gray-100", "overflow-hidden"], [1, "w-full", "text-sm", "text-left", "text-gray-500"], [1, "text-xs", "text-gray-500", "uppercase", "bg-gray-50/80", "border-b", "border-gray-100", "font-semibold"], ["scope", "col", 1, "px-6", "py-4"], ["scope", "col", 1, "px-6", "py-4", "text-right"], [1, "divide-y", "divide-gray-50"], [1, "fixed", "inset-0", "z-50", "overflow-y-auto"], [1, "bg-blue-600", "hover:bg-blue-700", "text-white", "font-semibold", "py-2.5", "px-5", "rounded-xl", "flex", "items-center", "justify-center", "transition", "shadow-md", "hover:shadow-lg", "text-sm", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "mr-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 4v16m8-8H4"], ["colspan", "6", 1, "px-6", "py-12", "text-center", "text-gray-500"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "mx-auto", "h-8", "w-8", "text-blue-500", "mb-3"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"], [1, "bg-white", "hover:bg-blue-50/50", "transition", "duration-200"], [1, "px-6", "py-4", "font-semibold", "text-gray-400"], [1, "px-6", "py-4"], [1, "font-mono", "font-bold", "text-blue-600"], [1, "text-sm", "font-semibold", "text-gray-900", "mt-0.5"], [1, "px-3", "py-1", "text-xs", "font-bold", "rounded-full", "bg-indigo-50", "text-indigo-700", "border", "border-indigo-200", "inline-flex", "items-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-3.5", "h-3.5", "mr-1"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"], [1, "inline-flex", "items-center", "space-x-1.5", "bg-gray-100", "px-3", "py-1", "rounded-lg", "font-mono", "font-bold", "text-gray-800", "text-xs"], [1, "text-gray-400"], [1, "px-6", "py-4", "font-semibold", "text-gray-800"], [1, "flex", "items-center", "space-x-1.5"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-emerald-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0v-5a2 2 0 012-2h2a2 2 0 012 2v5m-6 0h6"], [1, "px-6", "py-4", "text-right", "space-x-3"], ["class", "font-medium text-blue-600 hover:text-blue-800 transition text-sm", 3, "click", 4, "hasPermission"], ["class", "font-medium text-red-600 hover:text-red-800 transition text-sm", 3, "click", 4, "hasPermission"], [1, "font-medium", "text-blue-600", "hover:text-blue-800", "transition", "text-sm", 3, "click"], [1, "font-medium", "text-red-600", "hover:text-red-800", "transition", "text-sm", 3, "click"], [1, "fixed", "inset-0", "bg-gray-900/50", "backdrop-blur-sm", "transition-opacity", 3, "click"], [1, "flex", "min-h-full", "items-center", "justify-center", "p-4"], [1, "relative", "w-full", "max-w-lg", "rounded-2xl", "bg-white", "p-6", "shadow-2xl", "transition-all", "border", "border-gray-100"], [1, "flex", "items-center", "justify-between", "pb-4", "border-b", "border-gray-100"], [1, "text-xl", "font-bold", "text-gray-900"], [1, "text-gray-400", "hover:text-gray-600", "transition", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "mt-4", "space-y-4", 3, "ngSubmit", "formGroup"], [1, "block", "text-xs", "font-semibold", "text-gray-700", "uppercase", "tracking-wider", "mb-1"], [1, "text-red-500"], ["formControlName", "classId", 1, "w-full", "px-3.5", "py-2.5", "border", "border-gray-200", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-100", "focus:border-blue-500", "outline-none", "transition", "bg-white", "font-medium"], ["value", ""], [1, "mt-1", "text-xs", "text-red-500"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "gap-4"], ["formControlName", "dayOfWeek", 1, "w-full", "px-3.5", "py-2.5", "border", "border-gray-200", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-100", "focus:border-blue-500", "outline-none", "transition", "bg-white", "font-semibold", "text-indigo-700"], ["formControlName", "roomId", 1, "w-full", "px-3.5", "py-2.5", "border", "border-gray-200", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-100", "focus:border-blue-500", "outline-none", "transition", "bg-white", "font-semibold", "text-gray-900"], ["type", "time", "formControlName", "startTime", 1, "w-full", "px-3.5", "py-2.5", "border", "border-gray-200", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-100", "focus:border-blue-500", "outline-none", "transition", "font-mono", "font-bold", "bg-white"], ["type", "time", "formControlName", "endTime", 1, "w-full", "px-3.5", "py-2.5", "border", "border-gray-200", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-100", "focus:border-blue-500", "outline-none", "transition", "font-mono", "font-bold", "bg-white"], [1, "flex", "justify-end", "space-x-3", "pt-4", "border-t", "border-gray-100"], ["type", "button", 1, "px-4", "py-2.5", "text-sm", "font-medium", "text-gray-700", "bg-white", "border", "border-gray-300", "rounded-xl", "hover:bg-gray-50", "transition", 3, "click"], ["type", "submit", 1, "px-5", "py-2.5", "text-sm", "font-semibold", "text-white", "bg-blue-600", "hover:bg-blue-700", "rounded-xl", "transition", "shadow-md"], [1, "relative", "w-full", "max-w-md", "rounded-2xl", "bg-white", "p-6", "shadow-2xl", "transition-all", "border", "border-gray-100"], [1, "flex", "items-center", "space-x-3", "text-red-600", "mb-4"], [1, "p-3", "bg-red-50", "rounded-full"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"], [1, "text-lg", "font-bold", "text-gray-900"], [1, "text-sm", "text-gray-600", "mb-6"], [1, "flex", "justify-end", "space-x-3"], [1, "px-4", "py-2", "text-sm", "font-medium", "text-gray-700", "bg-white", "border", "border-gray-300", "rounded-xl", "hover:bg-gray-50", "transition", 3, "click"], [1, "px-4", "py-2", "text-sm", "font-semibold", "text-white", "bg-red-600", "hover:bg-red-700", "rounded-xl", "transition", "shadow-md", 3, "click"]], template: function ScheduleComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Qu\u1EA3n l\xFD L\u1ECBch h\u1ECDc");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "X\u1EBFp th\u1EDDi kh\xF3a bi\u1EC3u, ca h\u1ECDc, th\u1EE9 trong tu\u1EA7n v\xE0 ph\xF2ng h\u1ECDc cho c\xE1c l\u1EDBp \u0111\xE0o t\u1EA1o");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 4)(8, "div", 5)(9, "label", 6);
      \u0275\u0275text(10, "Ch\u1ECDn l\u1EDBp:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "select", 7);
      \u0275\u0275listener("change", function ScheduleComponent_Template_select_change_11_listener($event) {
        return ctx.onClassFilterChange($event);
      });
      \u0275\u0275repeaterCreate(12, ScheduleComponent_For_13_Template, 2, 3, "option", 8, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(14, ScheduleComponent_button_14_Template, 4, 0, "button", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 10)(16, "table", 11)(17, "thead", 12)(18, "tr")(19, "th", 13);
      \u0275\u0275text(20, "STT");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "th", 13);
      \u0275\u0275text(22, "M\xE3 & T\xEAn l\u1EDBp h\u1ECDc");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "th", 13);
      \u0275\u0275text(24, "Th\u1EE9 trong tu\u1EA7n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "th", 13);
      \u0275\u0275text(26, "Khung gi\u1EDD h\u1ECDc");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "th", 13);
      \u0275\u0275text(28, "Ph\xF2ng h\u1ECDc");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "th", 14);
      \u0275\u0275text(30, "Thao t\xE1c");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(31, "tbody", 15);
      \u0275\u0275conditionalCreate(32, ScheduleComponent_Conditional_32_Template, 6, 0, "tr")(33, ScheduleComponent_Conditional_33_Template, 3, 0, "tr")(34, ScheduleComponent_Conditional_34_Template, 2, 0);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(35, ScheduleComponent_Conditional_35_Template, 59, 10, "div", 16);
      \u0275\u0275conditionalCreate(36, ScheduleComponent_Conditional_36_Template, 17, 0, "div", 16);
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275property("value", ctx.selectedClassId() || "");
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.availableClasses());
      \u0275\u0275advance(2);
      \u0275\u0275property("hasPermission", "SCHEDULE_CREATE");
      \u0275\u0275advance(18);
      \u0275\u0275conditional(ctx.isLoading() && ctx.schedules().length === 0 ? 32 : ctx.schedules().length === 0 ? 33 : 34);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.isModalOpen() ? 35 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isDeleteModalOpen() ? 36 : -1);
    }
  }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, HasPermissionDirective], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScheduleComponent, [{
    type: Component,
    args: [{ selector: "app-schedule", imports: [CommonModule, ReactiveFormsModule, HasPermissionDirective], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="space-y-6">\r
  <!-- PAGE HEADER -->\r
  <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-gray-100">\r
    <div>\r
      <h1 class="text-2xl font-extrabold text-gray-900 tracking-tight">Qu\u1EA3n l\xFD L\u1ECBch h\u1ECDc</h1>\r
      <p class="text-sm text-gray-500 mt-1">X\u1EBFp th\u1EDDi kh\xF3a bi\u1EC3u, ca h\u1ECDc, th\u1EE9 trong tu\u1EA7n v\xE0 ph\xF2ng h\u1ECDc cho c\xE1c l\u1EDBp \u0111\xE0o t\u1EA1o</p>\r
    </div>\r
    \r
    <div class="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 items-stretch sm:items-center">\r
      <!-- Filter Class Select -->\r
      <div class="flex items-center space-x-2">\r
        <label class="text-xs font-bold text-gray-600 uppercase whitespace-nowrap">Ch\u1ECDn l\u1EDBp:</label>\r
        <select \r
          [value]="selectedClassId() || ''"\r
          (change)="onClassFilterChange($event)"\r
          class="bg-white border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-500 block px-3.5 py-2.5 outline-none transition shadow-sm font-semibold min-w-[200px]"\r
        >\r
          @for (c of availableClasses(); track c.id) {\r
            <option [value]="c.id">{{ c.code }} - {{ c.name }}</option>\r
          }\r
        </select>\r
      </div>\r
\r
      <!-- Add Schedule Button -->\r
      <button \r
        *hasPermission="'SCHEDULE_CREATE'"\r
        (click)="openModal()" \r
        class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-5 rounded-xl flex items-center justify-center transition shadow-md hover:shadow-lg text-sm"\r
      >\r
        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>\r
        </svg>\r
        Th\xEAm ca h\u1ECDc m\u1EDBi\r
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
          <th scope="col" class="px-6 py-4">M\xE3 & T\xEAn l\u1EDBp h\u1ECDc</th>\r
          <th scope="col" class="px-6 py-4">Th\u1EE9 trong tu\u1EA7n</th>\r
          <th scope="col" class="px-6 py-4">Khung gi\u1EDD h\u1ECDc</th>\r
          <th scope="col" class="px-6 py-4">Ph\xF2ng h\u1ECDc</th>\r
          <th scope="col" class="px-6 py-4 text-right">Thao t\xE1c</th>\r
        </tr>\r
      </thead>\r
      <tbody class="divide-y divide-gray-50">\r
        @if (isLoading() && schedules().length === 0) {\r
          <tr>\r
            <td colspan="6" class="px-6 py-12 text-center text-gray-500">\r
              <svg class="animate-spin mx-auto h-8 w-8 text-blue-500 mb-3" fill="none" viewBox="0 0 24 24">\r
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>\r
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>\r
              </svg>\r
              \u0110ang t\u1EA3i th\u1EDDi kh\xF3a bi\u1EC3u l\u1EDBp h\u1ECDc...\r
            </td>\r
          </tr>\r
        } @else if (schedules().length === 0) {\r
          <tr>\r
            <td colspan="6" class="px-6 py-12 text-center text-gray-500">\r
              L\u1EDBp h\u1ECDc n\xE0y ch\u01B0a c\xF3 ca h\u1ECDc n\xE0o \u0111\u01B0\u1EE3c x\u1EBFp l\u1ECBch.\r
            </td>\r
          </tr>\r
        } @else {\r
          @for (s of schedules(); track s.id; let idx = $index) {\r
            <tr class="bg-white hover:bg-blue-50/50 transition duration-200">\r
              <!-- Index -->\r
              <td class="px-6 py-4 font-semibold text-gray-400">\r
                #{{ idx + 1 }}\r
              </td>\r
              <!-- Class Info -->\r
              <td class="px-6 py-4">\r
                <div class="font-mono font-bold text-blue-600">{{ s.classCode || '---' }}</div>\r
                <div class="text-sm font-semibold text-gray-900 mt-0.5">{{ s.className || 'L\u1EDBp \u0111\xE0o t\u1EA1o' }}</div>\r
              </td>\r
              <!-- Day of week badge -->\r
              <td class="px-6 py-4">\r
                <span class="px-3 py-1 text-xs font-bold rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200 inline-flex items-center">\r
                  <svg class="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>\r
                  </svg>\r
                  {{ getDayName(s.dayOfWeek) }}\r
                </span>\r
              </td>\r
              <!-- Time slot -->\r
              <td class="px-6 py-4">\r
                <div class="inline-flex items-center space-x-1.5 bg-gray-100 px-3 py-1 rounded-lg font-mono font-bold text-gray-800 text-xs">\r
                  <span>{{ formatTimeDisplay(s.startTime) }}</span>\r
                  <span class="text-gray-400">\u2794</span>\r
                  <span>{{ formatTimeDisplay(s.endTime) }}</span>\r
                </div>\r
              </td>\r
              <!-- Room Name -->\r
              <td class="px-6 py-4 font-semibold text-gray-800">\r
                <div class="flex items-center space-x-1.5">\r
                  <svg class="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0v-5a2 2 0 012-2h2a2 2 0 012 2v5m-6 0h6"></path>\r
                  </svg>\r
                  <span>{{ s.roomName || 'Ch\u01B0a x\u1EBFp ph\xF2ng' }}</span>\r
                </div>\r
              </td>\r
              <!-- Actions -->\r
              <td class="px-6 py-4 text-right space-x-3">\r
                <button \r
                  *hasPermission="'SCHEDULE_UPDATE'"\r
                  (click)="openModal(s)" \r
                  class="font-medium text-blue-600 hover:text-blue-800 transition text-sm"\r
                >\r
                  Ch\u1EC9nh s\u1EEDa\r
                </button>\r
                <button \r
                  *hasPermission="'SCHEDULE_DELETE'"\r
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
  </div>\r
</div>\r
\r
<!-- MODAL TH\xCAM / C\u1EACP NH\u1EACT CA H\u1ECCC -->\r
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
            {{ isEditing() ? 'C\u1EADp nh\u1EADt ca l\u1ECBch h\u1ECDc' : 'Th\xEAm ca l\u1ECBch h\u1ECDc m\u1EDBi' }}\r
          </h3>\r
          <button (click)="closeModal()" class="text-gray-400 hover:text-gray-600 transition">\r
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>\r
            </svg>\r
          </button>\r
        </div>\r
\r
        <!-- Modal Form -->\r
        <form [formGroup]="scheduleForm" (ngSubmit)="onSubmit()" class="mt-4 space-y-4">\r
          \r
          <!-- Class Select -->\r
          <div>\r
            <label class="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">\r
              L\u1EDBp h\u1ECDc <span class="text-red-500">*</span>\r
            </label>\r
            <select \r
              formControlName="classId"\r
              class="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition bg-white font-medium"\r
              [class.border-red-400]="isFormSubmitted() && scheduleForm.get('classId')?.invalid"\r
            >\r
              <option value="">-- Ch\u1ECDn L\u1EDBp h\u1ECDc --</option>\r
              @for (cls of availableClasses(); track cls.id) {\r
                <option [value]="cls.id">{{ cls.code }} - {{ cls.name }}</option>\r
              }\r
            </select>\r
            @if (isFormSubmitted() && scheduleForm.get('classId')?.hasError('required')) {\r
              <p class="mt-1 text-xs text-red-500">Vui l\xF2ng ch\u1ECDn l\u1EDBp h\u1ECDc</p>\r
            }\r
          </div>\r
\r
          <!-- Day of week & Room Grid -->\r
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">\r
            <div>\r
              <label class="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">\r
                Th\u1EE9 trong tu\u1EA7n <span class="text-red-500">*</span>\r
              </label>\r
              <select \r
                formControlName="dayOfWeek"\r
                class="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition bg-white font-semibold text-indigo-700"\r
              >\r
                <option value="">-- Ch\u1ECDn Th\u1EE9 trong tu\u1EA7n --</option>\r
                @for (day of dayOptions; track day.value) {\r
                  <option [value]="day.value">{{ day.label }}</option>\r
                }\r
              </select>\r
            </div>\r
\r
            <div>\r
              <label class="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">\r
                Ph\xF2ng h\u1ECDc / Zoom\r
              </label>\r
              <select \r
                formControlName="roomId"\r
                class="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition bg-white font-semibold text-gray-900"\r
              >\r
                <option value="">-- Ch\u1ECDn Ph\xF2ng h\u1ECDc --</option>\r
                @for (r of availableRooms(); track r.id) {\r
                  <option [value]="r.id">{{ r.name }} (S\u1EE9c ch\u1EE9a: {{ r.capacity || 'N/A' }})</option>\r
                }\r
              </select>\r
            </div>\r
          </div>\r
\r
          <!-- Time Range Grid -->\r
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">\r
            <div>\r
              <label class="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">\r
                Gi\u1EDD b\u1EAFt \u0111\u1EA7u <span class="text-red-500">*</span>\r
              </label>\r
              <input \r
                type="time" \r
                formControlName="startTime"\r
                class="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition font-mono font-bold bg-white"\r
                [class.border-red-400]="isFormSubmitted() && scheduleForm.get('startTime')?.invalid"\r
              >\r
            </div>\r
\r
            <div>\r
              <label class="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">\r
                Gi\u1EDD k\u1EBFt th\xFAc <span class="text-red-500">*</span>\r
              </label>\r
              <input \r
                type="time" \r
                formControlName="endTime"\r
                class="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition font-mono font-bold bg-white"\r
                [class.border-red-400]="isFormSubmitted() && scheduleForm.get('endTime')?.invalid"\r
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
          <h3 class="text-lg font-bold text-gray-900">X\xE1c nh\u1EADn x\xF3a ca l\u1ECBch h\u1ECDc</h3>\r
        </div>\r
        <p class="text-sm text-gray-600 mb-6">\r
          B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a ca l\u1ECBch h\u1ECDc n\xE0y kh\xF4ng? Ca h\u1ECDc s\u1EBD b\u1ECB x\xF3a kh\u1ECFi th\u1EDDi kh\xF3a bi\u1EC3u c\u1EE7a l\u1EDBp.\r
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ScheduleComponent, { className: "ScheduleComponent", filePath: "src/app/features/academic/pages/schedule/schedule.component.ts", lineNumber: 21 });
})();

// node_modules/@angular/core/fesm2022/rxjs-interop.mjs
function takeUntilDestroyed(destroyRef) {
  if (!destroyRef) {
    ngDevMode && assertInInjectionContext(takeUntilDestroyed);
    destroyRef = inject(DestroyRef);
  }
  const destroyed$ = new Observable((subscriber) => {
    if (destroyRef.destroyed) {
      subscriber.next();
      return;
    }
    const unregisterFn = destroyRef.onDestroy(subscriber.next.bind(subscriber));
    return unregisterFn;
  });
  return (source) => {
    return source.pipe(takeUntil(destroyed$));
  };
}

// src/app/modules/user/services/student.service.ts
var StudentService = class _StudentService {
  http = inject(HttpClient);
  apiUrl = `${environment.apiUrl}/api/v1/students`;
  /**
   * Lấy danh sách học viên có phân trang.
   * Hỗ trợ cả Object form { page, size, keyword, status } và Positional form (keyword, status, page, size).
   */
  getAll(param1, param2, param3, param4, param5) {
    let params = new HttpParams();
    if (typeof param1 === "object" && param1 !== null) {
      const pageIndex = param1.page != null ? Math.max(0, Number(param1.page) - 1) : 0;
      params = params.set("page", pageIndex.toString());
      params = params.set("size", (param1.size || 10).toString());
      if (param1.keyword)
        params = params.set("keyword", param1.keyword);
      if (param1.status)
        params = params.set("status", param1.status);
    } else {
      const keyword = typeof param1 === "string" && param1.trim() !== "" ? param1.trim() : void 0;
      const status = typeof param2 === "string" && param2.trim() !== "" ? param2.trim() : void 0;
      let page = 0;
      let size = 10;
      const nums = [param1, param2, param3, param4, param5].filter((x) => typeof x === "number");
      if (nums.length === 1) {
        size = nums[0];
      } else if (nums.length >= 2) {
        page = nums[0];
        size = nums[1];
      }
      params = params.set("page", page.toString()).set("size", size.toString());
      if (keyword)
        params = params.set("keyword", keyword);
      if (status)
        params = params.set("status", status);
    }
    return this.http.get(this.apiUrl, { params });
  }
  getById(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  create(data) {
    return this.http.post(this.apiUrl, data);
  }
  update(id, data) {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }
  delete(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  /**
   * Backend endpoint: POST /api/v1/students/provision-accounts
   * Cấp tài khoản hàng loạt — nhận { studentIds: number[] }
   */
  createAccount(id, email) {
    return this.http.post(`${this.apiUrl}/provision-accounts`, { studentIds: [id] });
  }
  createAccountsBatch(studentIds) {
    return this.http.post(`${this.apiUrl}/provision-accounts`, { studentIds });
  }
  static \u0275fac = function StudentService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StudentService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _StudentService, factory: _StudentService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StudentService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/modules/user/services/class-student.service.ts
var ClassStudentService = class _ClassStudentService {
  http = inject(HttpClient);
  apiUrl = `${environment.apiUrl}/api/v1/class-students`;
  autoDistribute(data) {
    return this.http.post(`${this.apiUrl}/auto-distribute`, data);
  }
  static \u0275fac = function ClassStudentService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ClassStudentService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ClassStudentService, factory: _ClassStudentService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClassStudentService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/features/admin/pages/student/student.component.ts
var _c0 = () => ["STUDENT_UPDATE", "STUDENT_DELETE"];
var _c1 = (a0, a1, a2, a3) => ({ "bg-green-50 text-green-700 border-green-200": a0, "bg-blue-50 text-blue-700 border-blue-200": a1, "bg-amber-50 text-amber-700 border-amber-200": a2, "bg-red-50 text-red-700 border-red-200": a3 });
function StudentComponent_Conditional_8_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 38);
    \u0275\u0275listener("click", function StudentComponent_Conditional_8_button_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openBatchAccountModal());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" C\u1EA5p TK h\xE0ng lo\u1EA1t (", ctx_r1.selectedStudentIds().length, ") ");
  }
}
function StudentComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StudentComponent_Conditional_8_button_0_Template, 2, 1, "button", 37);
  }
  if (rf & 2) {
    \u0275\u0275property("hasPermission", "STUDENT_PROVISION");
  }
}
function StudentComponent_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 39);
    \u0275\u0275listener("click", function StudentComponent_button_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 40);
    \u0275\u0275element(2, "path", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Th\xEAm h\u1ECDc vi\xEAn m\u1EDBi ");
    \u0275\u0275elementEnd();
  }
}
function StudentComponent_th_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "th", 42)(1, "input", 43);
    \u0275\u0275listener("change", function StudentComponent_th_32_Template_input_change_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleAllStudents($event));
    });
    \u0275\u0275elementEnd()();
  }
}
function StudentComponent_th_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 25);
    \u0275\u0275text(1, "T\xE0i kho\u1EA3n");
    \u0275\u0275elementEnd();
  }
}
function StudentComponent_th_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 44);
    \u0275\u0275text(1, "Thao t\xE1c");
    \u0275\u0275elementEnd();
  }
}
function StudentComponent_tr_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 45);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 46);
    \u0275\u0275element(3, "circle", 47)(4, "path", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " \u0110ang t\u1EA3i d\u1EEF li\u1EC7u... ");
    \u0275\u0275elementEnd()();
  }
}
function StudentComponent_tr_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 45);
    \u0275\u0275text(2, "Kh\xF4ng t\xECm th\u1EA5y h\u1ECDc vi\xEAn n\xE0o.");
    \u0275\u0275elementEnd()();
  }
}
function StudentComponent_tr_46_td_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 65)(1, "input", 66);
    \u0275\u0275listener("change", function StudentComponent_tr_46_td_1_Template_input_change_1_listener() {
      \u0275\u0275restoreView(_r5);
      const std_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleStudent(std_r6.id));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const std_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r1.selectedStudentIds().includes(std_r6.id));
  }
}
function StudentComponent_tr_46_td_24_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 59);
    \u0275\u0275element(2, "path", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " \u0110\xE3 c\u1EA5p ");
    \u0275\u0275elementEnd();
  }
}
function StudentComponent_tr_46_td_24_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 71);
    \u0275\u0275listener("click", function StudentComponent_tr_46_td_24_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const std_r6 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openAccountModal(std_r6));
    });
    \u0275\u0275text(1, " + C\u1EA5p TK ");
    \u0275\u0275elementEnd();
  }
}
function StudentComponent_tr_46_td_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 61);
    \u0275\u0275template(1, StudentComponent_tr_46_td_24_div_1_Template, 4, 0, "div", 67)(2, StudentComponent_tr_46_td_24_button_2_Template, 2, 0, "button", 68);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const std_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", std_r6.userId);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !std_r6.userId);
  }
}
function StudentComponent_tr_46_td_25_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 75);
    \u0275\u0275listener("click", function StudentComponent_tr_46_td_25_button_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const std_r6 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openModal(std_r6));
    });
    \u0275\u0275text(1, "S\u1EEDa");
    \u0275\u0275elementEnd();
  }
}
function StudentComponent_tr_46_td_25_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 76);
    \u0275\u0275listener("click", function StudentComponent_tr_46_td_25_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const std_r6 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDelete(std_r6.id));
    });
    \u0275\u0275text(1, "X\xF3a");
    \u0275\u0275elementEnd();
  }
}
function StudentComponent_tr_46_td_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 72);
    \u0275\u0275template(1, StudentComponent_tr_46_td_25_button_1_Template, 2, 0, "button", 73)(2, StudentComponent_tr_46_td_25_button_2_Template, 2, 0, "button", 74);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("hasPermission", "STUDENT_UPDATE");
    \u0275\u0275advance();
    \u0275\u0275property("hasPermission", "STUDENT_DELETE");
  }
}
function StudentComponent_tr_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 49);
    \u0275\u0275template(1, StudentComponent_tr_46_td_1_Template, 2, 1, "td", 50);
    \u0275\u0275elementStart(2, "td", 51)(3, "div", 52);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 53)(6, "span", 54);
    \u0275\u0275text(7, "M\xE3 HV:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td", 51)(10, "div", 55);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 56);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td", 51)(15, "div", 57);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 58);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(18, "svg", 59);
    \u0275\u0275element(19, "path", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(21, "td", 61)(22, "span", 62);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(24, StudentComponent_tr_46_td_24_Template, 3, 2, "td", 63)(25, StudentComponent_tr_46_td_25_Template, 3, 2, "td", 64);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const std_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("hasPermission", "STUDENT_PROVISION");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(std_r6.fullName);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", std_r6.studentCode || "HV#" + std_r6.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(std_r6.targetScore || "---");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(std_r6.userEmail || "---");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(std_r6.parentName || "---");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", std_r6.parentPhone || "---", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(11, _c1, ctx_r1.isStudying(std_r6.status), ctx_r1.isGraduated(std_r6.status), ctx_r1.isReserved(std_r6.status), ctx_r1.isDropped(std_r6.status)));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getStatusText(std_r6.status), " ");
    \u0275\u0275advance();
    \u0275\u0275property("hasPermission", "STUDENT_PROVISION");
    \u0275\u0275advance();
    \u0275\u0275property("hasAnyPermission", \u0275\u0275pureFunction0(16, _c0));
  }
}
function StudentComponent_Conditional_66_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "label", 83);
    \u0275\u0275text(2, "M\xE3 h\u1ECDc vi\xEAn");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 93);
    \u0275\u0275elementEnd();
  }
}
function StudentComponent_Conditional_66_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 77)(2, "div", 78)(3, "h3", 79);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 80);
    \u0275\u0275listener("click", function StudentComponent_Conditional_66_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 40);
    \u0275\u0275element(7, "path", 81);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "form", 82);
    \u0275\u0275listener("ngSubmit", function StudentComponent_Conditional_66_Template_form_ngSubmit_8_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275conditionalCreate(9, StudentComponent_Conditional_66_Conditional_9_Template, 4, 0, "div");
    \u0275\u0275elementStart(10, "div")(11, "label", 83);
    \u0275\u0275text(12, "H\u1ECD v\xE0 t\xEAn *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 84);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div")(15, "label", 83);
    \u0275\u0275text(16, "M\u1EE5c ti\xEAu \u0111i\u1EC3m s\u1ED1");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "input", 85);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 86)(19, "div")(20, "label", 83);
    \u0275\u0275text(21, "H\u1ECD t\xEAn Ph\u1EE5 huynh");
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "input", 87);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div")(24, "label", 83);
    \u0275\u0275text(25, "S\u0110T Ph\u1EE5 huynh");
    \u0275\u0275elementEnd();
    \u0275\u0275element(26, "input", 88);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div")(28, "label", 83);
    \u0275\u0275text(29, "Tr\u1EA1ng th\xE1i h\u1ECDc vi\xEAn *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "select", 89)(31, "option", 16);
    \u0275\u0275text(32, "STUDYING (\u0110ang theo h\u1ECDc)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "option", 17);
    \u0275\u0275text(34, "RESERVED (\u0110ang b\u1EA3o l\u01B0u)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "option", 18);
    \u0275\u0275text(36, "GRADUATED (T\u1ED1t nghi\u1EC7p)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "option", 19);
    \u0275\u0275text(38, "DROPPED (\u0110\xE3 ngh\u1EC9 h\u1ECDc)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(39, "div", 90)(40, "button", 91);
    \u0275\u0275listener("click", function StudentComponent_Conditional_66_Template_button_click_40_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275text(41, "H\u1EE7y");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "button", 92);
    \u0275\u0275text(43, "L\u01B0u");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.isEditing() ? "Ch\u1EC9nh s\u1EEDa h\u1ED3 s\u01A1 h\u1ECDc vi\xEAn" : "Th\xEAm h\u1ECDc vi\xEAn m\u1EDBi");
    \u0275\u0275advance(4);
    \u0275\u0275property("formGroup", ctx_r1.studentForm);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isEditing() ? 9 : -1);
    \u0275\u0275advance(33);
    \u0275\u0275property("disabled", ctx_r1.studentForm.invalid || ctx_r1.isLoading());
  }
}
function StudentComponent_Conditional_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 94)(2, "h3", 95);
    \u0275\u0275text(3, "C\u1EA5p t\xE0i kho\u1EA3n \u0111\u0103ng nh\u1EADp");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 56);
    \u0275\u0275text(5, "T\u1EA1o t\xE0i kho\u1EA3n \u0111\u0103ng nh\u1EADp cho h\u1ECDc vi\xEAn ");
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, ".");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "form", 82);
    \u0275\u0275listener("ngSubmit", function StudentComponent_Conditional_67_Template_form_ngSubmit_9_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmitAccount());
    });
    \u0275\u0275elementStart(10, "div")(11, "label", 83);
    \u0275\u0275text(12, "Email t\xE0i kho\u1EA3n (T\xF9y ch\u1ECDn)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 96);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 97)(15, "button", 91);
    \u0275\u0275listener("click", function StudentComponent_Conditional_67_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAccountModal());
    });
    \u0275\u0275text(16, "H\u1EE7y");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 98);
    \u0275\u0275text(18, "T\u1EA1o t\xE0i kho\u1EA3n");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate((tmp_1_0 = ctx_r1.selectedStudentForAccount()) == null ? null : tmp_1_0.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx_r1.accountForm);
    \u0275\u0275advance(8);
    \u0275\u0275property("disabled", ctx_r1.isLoading());
  }
}
function StudentComponent_Conditional_68_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 94)(2, "h3", 95);
    \u0275\u0275text(3, "X\xE1c nh\u1EADn c\u1EA5p h\xE0ng lo\u1EA1t");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 56);
    \u0275\u0275text(5, "B\u1EA1n s\u1EAFp t\u1EA1o t\xE0i kho\u1EA3n \u0111\u0103ng nh\u1EADp t\u1EF1 \u0111\u1ED9ng cho ");
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " h\u1ECDc vi\xEAn \u0111\xE3 ch\u1ECDn.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 97)(10, "button", 99);
    \u0275\u0275listener("click", function StudentComponent_Conditional_68_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeBatchAccountModal());
    });
    \u0275\u0275text(11, "H\u1EE7y");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 100);
    \u0275\u0275listener("click", function StudentComponent_Conditional_68_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.executeBatchAccountCreation());
    });
    \u0275\u0275text(13, "C\u1EA5p t\xE0i kho\u1EA3n");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.selectedStudentIds().length);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r1.isLoading());
  }
}
function StudentComponent_Conditional_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 94)(2, "h3", 95);
    \u0275\u0275text(3, "X\xE1c nh\u1EADn x\xF3a h\u1ECDc vi\xEAn");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 56);
    \u0275\u0275text(5, "B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a h\u1ED3 s\u01A1 h\u1ECDc vi\xEAn n\xE0y?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 97)(7, "button", 99);
    \u0275\u0275listener("click", function StudentComponent_Conditional_69_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDeleteModal());
    });
    \u0275\u0275text(8, "H\u1EE7y");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 101);
    \u0275\u0275listener("click", function StudentComponent_Conditional_69_Template_button_click_9_listener() {
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
var StudentComponent = class _StudentComponent {
  studentService = inject(StudentService);
  classStudentService = inject(ClassStudentService);
  toastService = inject(ToastService);
  fb = inject(FormBuilder);
  destroyRef = inject(DestroyRef);
  router = inject(Router);
  isReadOnly = signal(false, ...ngDevMode ? [{ debugName: "isReadOnly" }] : (
    /* istanbul ignore next */
    []
  ));
  isAcademic = signal(false, ...ngDevMode ? [{ debugName: "isAcademic" }] : (
    /* istanbul ignore next */
    []
  ));
  canProvisionAccount = computed(() => !this.isAcademic(), ...ngDevMode ? [{ debugName: "canProvisionAccount" }] : (
    /* istanbul ignore next */
    []
  ));
  canDelete = computed(() => !this.isAcademic(), ...ngDevMode ? [{ debugName: "canDelete" }] : (
    /* istanbul ignore next */
    []
  ));
  students = signal([], ...ngDevMode ? [{ debugName: "students" }] : (
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
  searchControl = new FormControl("");
  statusFilterControl = new FormControl("");
  selectedStudentIds = signal([], ...ngDevMode ? [{ debugName: "selectedStudentIds" }] : (
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
  studentForm;
  isAccountModalOpen = signal(false, ...ngDevMode ? [{ debugName: "isAccountModalOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  accountForm;
  selectedStudentForAccount = signal(null, ...ngDevMode ? [{ debugName: "selectedStudentForAccount" }] : (
    /* istanbul ignore next */
    []
  ));
  isDeleteModalOpen = signal(false, ...ngDevMode ? [{ debugName: "isDeleteModalOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  idToDelete = signal(null, ...ngDevMode ? [{ debugName: "idToDelete" }] : (
    /* istanbul ignore next */
    []
  ));
  isBatchAccountModalOpen = signal(false, ...ngDevMode ? [{ debugName: "isBatchAccountModalOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  isDistributeModalOpen = signal(false, ...ngDevMode ? [{ debugName: "isDistributeModalOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedClassIds = signal([], ...ngDevMode ? [{ debugName: "selectedClassIds" }] : (
    /* istanbul ignore next */
    []
  ));
  distributeForm;
  ngOnInit() {
    const isAcad = this.router.url.startsWith("/academic");
    this.isAcademic.set(isAcad);
    this.isReadOnly.set(isAcad);
    this.initForms();
    this.setupFilters();
    this.loadData();
  }
  initForms() {
    this.studentForm = this.fb.group({
      studentCode: [""],
      fullName: ["", [Validators.required, Validators.maxLength(100)]],
      parentName: [""],
      parentPhone: [""],
      targetScore: [""],
      status: ["STUDYING", Validators.required]
    });
    this.accountForm = this.fb.group({
      email: [""]
    });
    this.distributeForm = this.fb.group({
      schoolYearId: ["", Validators.required]
    });
  }
  setupFilters() {
    this.searchControl.valueChanges.pipe(debounceTime(400), distinctUntilChanged(), takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.currentPage.set(1);
      this.loadData();
    });
    this.statusFilterControl.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.currentPage.set(1);
      this.loadData();
    });
  }
  loadData() {
    this.isLoading.set(true);
    const keyword = this.searchControl.value || void 0;
    const status = this.statusFilterControl.value || void 0;
    this.studentService.getAll(keyword, status, this.currentPage() - 1, this.pageSize()).subscribe({
      next: (res) => {
        let content = res?.content || (Array.isArray(res) ? res : []);
        if (status) {
          content = content.filter((s) => s.status === status);
        }
        this.students.set(content);
        this.totalElements.set(status ? content.length : res?.totalElements !== void 0 ? res.totalElements : content.length);
        this.selectedStudentIds.set([]);
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error("L\u1ED7i t\u1EA3i danh s\xE1ch h\u1ECDc vi\xEAn:", err);
        this.students.set([]);
        this.totalElements.set(0);
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
  toggleStudent(id) {
    const current = this.selectedStudentIds();
    if (current.includes(id)) {
      this.selectedStudentIds.set(current.filter((x) => x !== id));
    } else {
      this.selectedStudentIds.set([...current, id]);
    }
  }
  toggleAllStudents(event) {
    if (event.target.checked) {
      this.selectedStudentIds.set(this.students().map((s) => s.id));
    } else {
      this.selectedStudentIds.set([]);
    }
  }
  // --- LOGIC MODAL PHÂN LỚP ---
  toggleClassTarget(classId, event) {
    const current = this.selectedClassIds();
    if (event.target.checked) {
      this.selectedClassIds.set([...current, classId]);
    } else {
      this.selectedClassIds.set(current.filter((x) => x !== classId));
    }
  }
  openDistributeModal() {
    this.distributeForm.reset({ schoolYearId: "" });
    this.selectedClassIds.set([]);
    this.isDistributeModalOpen.set(true);
  }
  closeDistributeModal() {
    this.isDistributeModalOpen.set(false);
  }
  onSubmitDistribute() {
    if (this.distributeForm.invalid || this.selectedClassIds().length === 0) {
      this.toastService.warning("Ch\u01B0a \u0111\u1EE7 th\xF4ng tin", "Vui l\xF2ng ch\u1ECDn N\u0103m h\u1ECDc v\xE0 \xEDt nh\u1EA5t 1 L\u1EDBp \u0111\xEDch!");
      return;
    }
    this.isLoading.set(true);
    const request = {
      schoolYearId: this.distributeForm.value.schoolYearId,
      classIds: this.selectedClassIds(),
      studentIds: this.selectedStudentIds()
    };
    this.classStudentService.autoDistribute(request).subscribe({
      next: (res) => {
        this.isLoading.set(false);
        this.closeDistributeModal();
        this.selectedStudentIds.set([]);
        let msg = "";
        for (const [key, value] of Object.entries(res)) {
          msg += `\u2022 ${key}: ${value}
`;
        }
        this.toastService.success("B\xE1o c\xE1o ph\xE2n l\u1EDBp", msg);
        this.loadData();
      },
      error: (err) => {
        this.isLoading.set(false);
        this.toastService.error("Th\u1EA5t b\u1EA1i", err.error?.message || "C\xF3 l\u1ED7i x\u1EA3y ra khi ph\xE2n l\u1EDBp!");
      }
    });
  }
  // --- HELPERS TRẠNG THÁI & GIỚI TÍNH ---
  getGenderText(gender) {
    if (!gender)
      return "Ch\u01B0a c\u1EADp nh\u1EADt";
    const g = gender.toLowerCase();
    if (g === "male")
      return "Nam";
    if (g === "female")
      return "N\u1EEF";
    return gender;
  }
  isStudying(status) {
    if (!status)
      return true;
    const s = status.toUpperCase();
    return s === "STUDYING" || s === "ACTIVE";
  }
  isGraduated(status) {
    if (!status)
      return false;
    const s = status.toUpperCase();
    return s === "GRADUATED";
  }
  isReserved(status) {
    if (!status)
      return false;
    const s = status.toUpperCase();
    return s === "RESERVED" || s === "TRANSFERRED";
  }
  isDropped(status) {
    if (!status)
      return false;
    const s = status.toUpperCase();
    return s === "DROPPED" || s === "DROPPED_OUT";
  }
  getStatusText(status) {
    if (this.isGraduated(status))
      return "T\u1ED1t nghi\u1EC7p";
    if (this.isReserved(status))
      return "B\u1EA3o l\u01B0u";
    if (this.isDropped(status))
      return "B\u1ECF h\u1ECDc";
    return "\u0110ang h\u1ECDc";
  }
  // --- XỬ LÝ FORM CHÍNH ---
  openModal(student) {
    if (student) {
      this.isEditing.set(true);
      this.currentId.set(student.id);
      this.studentForm.patchValue({
        studentCode: student.studentCode,
        fullName: student.fullName,
        parentName: student.parentName || "",
        parentPhone: student.parentPhone || "",
        targetScore: student.targetScore || "",
        status: student.status
      });
      this.studentForm.get("studentCode")?.disable();
    } else {
      this.isEditing.set(false);
      this.currentId.set(null);
      this.studentForm.reset({
        studentCode: "",
        fullName: "",
        parentName: "",
        parentPhone: "",
        targetScore: "",
        status: "STUDYING"
      });
      this.studentForm.get("studentCode")?.enable();
    }
    this.isModalOpen.set(true);
  }
  closeModal() {
    this.isModalOpen.set(false);
    this.currentId.set(null);
  }
  onSubmit() {
    if (this.studentForm.invalid)
      return;
    this.isLoading.set(true);
    const data = this.studentForm.getRawValue();
    if (this.isEditing() && this.currentId() != null) {
      this.studentService.update(this.currentId(), data).subscribe({
        next: () => {
          this.loadData();
          this.closeModal();
          this.toastService.success("Th\xE0nh c\xF4ng", "\u0110\xE3 c\u1EADp nh\u1EADt th\xF4ng tin h\u1ECDc vi\xEAn!");
        },
        error: (err) => {
          this.isLoading.set(false);
          this.toastService.error("Th\u1EA5t b\u1EA1i", err.error?.message || "C\xF3 l\u1ED7i x\u1EA3y ra khi c\u1EADp nh\u1EADt!");
        }
      });
    } else {
      delete data.studentCode;
      this.studentService.create(data).subscribe({
        next: () => {
          this.loadData();
          this.closeModal();
          this.toastService.success("Th\xE0nh c\xF4ng", "\u0110\xE3 th\xEAm h\u1ECDc vi\xEAn m\u1EDBi!");
        },
        error: (err) => {
          this.isLoading.set(false);
          this.toastService.error("Th\u1EA5t b\u1EA1i", err.error?.message || "C\xF3 l\u1ED7i x\u1EA3y ra khi th\xEAm m\u1EDBi!");
        }
      });
    }
  }
  openAccountModal(student) {
    this.selectedStudentForAccount.set(student);
    this.accountForm.reset({ email: student.userEmail || "" });
    this.isAccountModalOpen.set(true);
  }
  closeAccountModal() {
    this.isAccountModalOpen.set(false);
    this.selectedStudentForAccount.set(null);
  }
  onSubmitAccount() {
    const studentId = this.selectedStudentForAccount()?.id;
    if (!studentId)
      return;
    this.isLoading.set(true);
    const email = this.accountForm.value.email;
    this.studentService.createAccount(studentId, email).subscribe({
      next: () => {
        this.loadData();
        this.closeAccountModal();
        this.toastService.success("\u0110\xE3 c\u1EA5p", "T\xE0i kho\u1EA3n \u0111\xE3 \u0111\u01B0\u1EE3c t\u1EA1o th\xE0nh c\xF4ng!");
      },
      error: (err) => {
        this.isLoading.set(false);
        this.toastService.error("L\u1ED7i c\u1EA5p TK", err.error?.message || "Kh\xF4ng th\u1EC3 t\u1EA1o t\xE0i kho\u1EA3n!");
      }
    });
  }
  openBatchAccountModal() {
    if (this.selectedStudentIds().length === 0)
      return;
    this.isBatchAccountModalOpen.set(true);
  }
  closeBatchAccountModal() {
    this.isBatchAccountModalOpen.set(false);
  }
  executeBatchAccountCreation() {
    const ids = this.selectedStudentIds();
    if (ids.length === 0)
      return;
    this.isLoading.set(true);
    this.studentService.createAccountsBatch(ids).subscribe({
      next: (res) => {
        this.loadData();
        this.closeBatchAccountModal();
        this.toastService.success("Ho\xE0n t\u1EA5t", `C\u1EA5p t\xE0i kho\u1EA3n th\xE0nh c\xF4ng: ${res.successCount || ids.length}`);
      },
      error: (err) => {
        this.isLoading.set(false);
        this.closeBatchAccountModal();
        this.toastService.error("L\u1ED7i h\u1EC7 th\u1ED1ng", err.error?.message || "C\xF3 l\u1ED7i x\u1EA3y ra khi t\u1EA1o h\xE0ng lo\u1EA1t!");
      }
    });
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
    if (id !== null && id !== void 0) {
      this.isLoading.set(true);
      this.studentService.delete(id).subscribe({
        next: () => {
          this.loadData();
          this.closeDeleteModal();
          this.toastService.success("\u0110\xE3 x\xF3a", "X\xF3a h\u1ED3 s\u01A1 h\u1ECDc vi\xEAn th\xE0nh c\xF4ng!");
        },
        error: (err) => {
          this.isLoading.set(false);
          this.closeDeleteModal();
          this.toastService.error("L\u1ED7i x\xF3a", err.error?.message || "Kh\xF4ng th\u1EC3 x\xF3a h\u1ECDc vi\xEAn n\xE0y!");
        }
      });
    }
  }
  static \u0275fac = function StudentComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StudentComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StudentComponent, selectors: [["app-student"]], decls: 70, vars: 22, consts: [[1, "p-6", "space-y-6"], [1, "flex", "flex-col", "sm:flex-row", "justify-between", "items-start", "sm:items-center", "gap-4", "bg-white", "dark:bg-gray-800", "p-6", "rounded-2xl", "shadow-sm", "border", "border-gray-100", "dark:border-gray-700"], [1, "text-2xl", "font-bold", "text-gray-900", "dark:text-white"], [1, "text-sm", "text-gray-500", "dark:text-gray-400", "mt-1"], [1, "flex", "items-center", "gap-3"], [1, "inline-flex", "items-center", "gap-2", "px-4", "py-2.5", "bg-emerald-600", "hover:bg-emerald-700", "text-white", "text-sm", "font-medium", "rounded-xl", "transition-colors", "shadow-sm"], ["class", "inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-xl transition-colors shadow-sm shadow-blue-500/10", 3, "click", 4, "hasPermission"], [1, "bg-white", "dark:bg-gray-800", "rounded-2xl", "shadow-sm", "border", "border-gray-100", "dark:border-gray-700", "overflow-hidden"], [1, "p-4", "border-b", "border-gray-100", "dark:border-gray-700", "bg-gray-50/50", "dark:bg-gray-800/50", "flex", "flex-col", "sm:flex-row", "items-center", "justify-between", "gap-4"], [1, "relative", "w-full", "sm:w-72"], ["type", "text", "placeholder", "T\xECm t\xEAn, m\xE3 h\u1ECDc vi\xEAn...", 1, "w-full", "pl-10", "pr-4", "py-2", "bg-white", "dark:bg-gray-900", "border", "border-gray-200", "dark:border-gray-700", "rounded-xl", "text-sm", "text-gray-900", "dark:text-white", "placeholder-gray-400", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", 3, "formControl"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-gray-400", "absolute", "left-3", "top-3"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], [1, "w-full", "sm:w-56"], [1, "w-full", "px-3", "py-2", "bg-white", "dark:bg-gray-900", "border", "border-gray-200", "dark:border-gray-700", "rounded-xl", "text-sm", "text-gray-900", "dark:text-white", "focus:ring-2", "focus:ring-blue-500", 3, "formControl"], ["value", ""], ["value", "STUDYING"], ["value", "RESERVED"], ["value", "GRADUATED"], ["value", "DROPPED"], [1, "overflow-x-auto"], [1, "w-full", "text-sm", "text-left", "text-gray-600", "dark:text-gray-300"], [1, "text-xs", "uppercase", "bg-gray-50", "dark:bg-gray-900/50", "text-gray-500", "dark:text-gray-400", "border-b", "border-gray-100", "dark:border-gray-700"], ["class", "p-4 w-4", 4, "hasPermission"], [1, "px-6", "py-3.5", "font-semibold"], [1, "px-6", "py-3.5", "font-semibold", "text-center"], ["class", "px-6 py-3.5 font-semibold text-center", 4, "hasPermission"], ["class", "px-6 py-3.5 font-semibold text-right", 4, "hasAnyPermission"], [1, "divide-y", "divide-gray-50"], [4, "ngIf"], ["class", "bg-white hover:bg-blue-50/50 transition duration-200", 4, "ngFor", "ngForOf"], [1, "p-4", "border-t", "border-gray-100", "dark:border-gray-700", "flex", "flex-col", "sm:flex-row", "justify-between", "items-center", "gap-4", "text-xs", "text-gray-500"], [1, "font-medium", "text-gray-900", "dark:text-white"], [1, "flex", "items-center", "gap-1"], [1, "px-3", "py-1.5", "rounded-lg", "border", "border-gray-200", "dark:border-gray-700", "disabled:opacity-40", "hover:bg-gray-50", "dark:hover:bg-gray-700", "transition-colors", 3, "click", "disabled"], [1, "px-3", "py-1.5", "font-medium", "text-gray-900", "dark:text-white"], [1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "p-4", "bg-black/40", "backdrop-blur-sm"], ["class", "inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium rounded-xl transition-colors shadow-sm", 3, "click", 4, "hasPermission"], [1, "inline-flex", "items-center", "gap-2", "px-4", "py-2.5", "bg-emerald-600", "hover:bg-emerald-700", "text-white", "text-sm", "font-medium", "rounded-xl", "transition-colors", "shadow-sm", 3, "click"], [1, "inline-flex", "items-center", "gap-2", "px-4", "py-2.5", "bg-blue-600", "hover:bg-blue-700", "text-white", "text-sm", "font-medium", "rounded-xl", "transition-colors", "shadow-sm", "shadow-blue-500/10", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 4v16m8-8H4"], [1, "p-4", "w-4"], ["type", "checkbox", 1, "rounded", "border-gray-300", "text-blue-600", "focus:ring-blue-500", 3, "change"], [1, "px-6", "py-3.5", "font-semibold", "text-right"], ["colspan", "7", 1, "px-6", "py-12", "text-center", "text-gray-500"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "mx-auto", "h-8", "w-8", "text-blue-500", "mb-3"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"], [1, "bg-white", "hover:bg-blue-50/50", "transition", "duration-200"], ["class", "px-4 py-4 text-center", 4, "hasPermission"], [1, "px-6", "py-4"], [1, "font-bold", "text-blue-700", "text-base"], [1, "text-xs", "text-gray-500", "font-mono", "mt-0.5"], [1, "font-semibold"], [1, "font-medium", "text-gray-900"], [1, "text-xs", "text-gray-500"], [1, "text-gray-900", "font-medium"], [1, "text-xs", "text-gray-500", "flex", "items-center", "mt-0.5"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-3", "h-3", "mr-1"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"], [1, "px-6", "py-4", "text-center"], [1, "px-2.5", "py-1", "text-xs", "font-semibold", "rounded-full", "border", 3, "ngClass"], ["class", "px-6 py-4 text-center", 4, "hasPermission"], ["class", "px-6 py-4 text-right space-x-3", 4, "hasAnyPermission"], [1, "px-4", "py-4", "text-center"], ["type", "checkbox", 1, "w-4", "h-4", "rounded", "text-blue-600", "cursor-pointer", 3, "change", "checked"], ["class", "inline-flex items-center px-2.5 py-1 rounded-md bg-green-100 text-green-800 text-xs font-bold border border-green-200", 4, "ngIf"], ["class", "inline-flex items-center px-2.5 py-1 rounded-md bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-700 text-xs font-bold border border-gray-200 transition", 3, "click", 4, "ngIf"], [1, "inline-flex", "items-center", "px-2.5", "py-1", "rounded-md", "bg-green-100", "text-green-800", "text-xs", "font-bold", "border", "border-green-200"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M5 13l4 4L19 7"], [1, "inline-flex", "items-center", "px-2.5", "py-1", "rounded-md", "bg-gray-100", "hover:bg-blue-100", "text-gray-700", "hover:text-blue-700", "text-xs", "font-bold", "border", "border-gray-200", "transition", 3, "click"], [1, "px-6", "py-4", "text-right", "space-x-3"], ["class", "font-medium text-blue-600 hover:text-blue-800 transition", 3, "click", 4, "hasPermission"], ["class", "font-medium text-red-600 hover:text-red-800 transition", 3, "click", 4, "hasPermission"], [1, "font-medium", "text-blue-600", "hover:text-blue-800", "transition", 3, "click"], [1, "font-medium", "text-red-600", "hover:text-red-800", "transition", 3, "click"], [1, "bg-white", "dark:bg-gray-800", "rounded-2xl", "max-w-lg", "w-full", "p-6", "shadow-xl", "border", "border-gray-100", "dark:border-gray-700", "space-y-6"], [1, "flex", "justify-between", "items-center"], [1, "text-lg", "font-bold", "text-gray-900", "dark:text-white"], [1, "text-gray-400", "hover:text-gray-600", "dark:hover:text-gray-300", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "space-y-4", 3, "ngSubmit", "formGroup"], [1, "block", "text-xs", "font-semibold", "text-gray-700", "dark:text-gray-300", "mb-1"], ["formControlName", "fullName", "type", "text", "placeholder", "VD: Nguy\u1EC5n V\u0103n A", 1, "w-full", "px-3", "py-2", "bg-white", "dark:bg-gray-900", "border", "border-gray-200", "dark:border-gray-700", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-500"], ["formControlName", "targetScore", "type", "text", "placeholder", "VD: IELTS 7.0, TOEIC 850", 1, "w-full", "px-3", "py-2", "bg-white", "dark:bg-gray-900", "border", "border-gray-200", "dark:border-gray-700", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-500"], [1, "grid", "grid-cols-2", "gap-4"], ["formControlName", "parentName", "type", "text", "placeholder", "VD: Nguy\u1EC5n V\u0103n B", 1, "w-full", "px-3", "py-2", "bg-white", "dark:bg-gray-900", "border", "border-gray-200", "dark:border-gray-700", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-500"], ["formControlName", "parentPhone", "type", "text", "placeholder", "VD: 0912345678", 1, "w-full", "px-3", "py-2", "bg-white", "dark:bg-gray-900", "border", "border-gray-200", "dark:border-gray-700", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-500"], ["formControlName", "status", 1, "w-full", "px-3", "py-2", "bg-white", "dark:bg-gray-900", "border", "border-gray-200", "dark:border-gray-700", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-500"], [1, "flex", "justify-end", "gap-3", "pt-4", "border-t", "border-gray-100", "dark:border-gray-700"], ["type", "button", 1, "px-4", "py-2", "text-xs", "font-medium", "text-gray-600", "dark:text-gray-300", "hover:bg-gray-100", "dark:hover:bg-gray-700", "rounded-xl", 3, "click"], ["type", "submit", 1, "px-4", "py-2", "text-xs", "font-medium", "bg-blue-600", "hover:bg-blue-700", "text-white", "rounded-xl", "disabled:opacity-50", 3, "disabled"], ["formControlName", "studentCode", "type", "text", 1, "w-full", "px-3", "py-2", "bg-gray-100", "dark:bg-gray-900", "border", "border-gray-200", "dark:border-gray-700", "rounded-xl", "text-sm", "font-mono", "cursor-not-allowed"], [1, "bg-white", "dark:bg-gray-800", "rounded-2xl", "max-w-sm", "w-full", "p-6", "shadow-xl", "border", "border-gray-100", "dark:border-gray-700", "space-y-4"], [1, "text-base", "font-bold", "text-gray-900", "dark:text-white"], ["formControlName", "email", "type", "email", "placeholder", "\u0110\u1EC3 tr\u1ED1ng n\u1EBFu t\u1EF1 \u0111\u1ED9ng t\u1EA1o theo m\xE3", 1, "w-full", "px-3", "py-2", "bg-white", "dark:bg-gray-900", "border", "border-gray-200", "dark:border-gray-700", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-500"], [1, "flex", "justify-end", "gap-3", "pt-2"], ["type", "submit", 1, "px-4", "py-2", "text-xs", "font-medium", "bg-emerald-600", "hover:bg-emerald-700", "text-white", "rounded-xl", "disabled:opacity-50", 3, "disabled"], [1, "px-4", "py-2", "text-xs", "font-medium", "text-gray-600", "dark:text-gray-300", "hover:bg-gray-100", "dark:hover:bg-gray-700", "rounded-xl", 3, "click"], [1, "px-4", "py-2", "text-xs", "font-medium", "bg-emerald-600", "hover:bg-emerald-700", "text-white", "rounded-xl", "disabled:opacity-50", 3, "click", "disabled"], [1, "px-4", "py-2", "text-xs", "font-medium", "bg-rose-600", "hover:bg-rose-700", "text-white", "rounded-xl", "disabled:opacity-50", 3, "click", "disabled"]], template: function StudentComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Qu\u1EA3n l\xFD H\u1ECDc vi\xEAn");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Danh s\xE1ch h\u1ECDc vi\xEAn, m\u1EE5c ti\xEAu \u0111i\u1EC3m s\u1ED1 v\xE0 th\xF4ng tin ph\u1EE5 huynh");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 4);
      \u0275\u0275conditionalCreate(8, StudentComponent_Conditional_8_Template, 1, 1, "button", 5);
      \u0275\u0275template(9, StudentComponent_button_9_Template, 4, 0, "button", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 7)(11, "div", 8)(12, "div", 9);
      \u0275\u0275element(13, "input", 10);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(14, "svg", 11);
      \u0275\u0275element(15, "path", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(16, "div", 13)(17, "select", 14)(18, "option", 15);
      \u0275\u0275text(19, "T\u1EA5t c\u1EA3 tr\u1EA1ng th\xE1i");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "option", 16);
      \u0275\u0275text(21, "\u0110ang h\u1ECDc (STUDYING)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "option", 17);
      \u0275\u0275text(23, "B\u1EA3o l\u01B0u (RESERVED)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "option", 18);
      \u0275\u0275text(25, "\u0110\xE3 t\u1ED1t nghi\u1EC7p (GRADUATED)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "option", 19);
      \u0275\u0275text(27, "\u0110\xE3 ngh\u1EC9 h\u1ECDc (DROPPED)");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(28, "div", 20)(29, "table", 21)(30, "thead", 22)(31, "tr");
      \u0275\u0275template(32, StudentComponent_th_32_Template, 2, 0, "th", 23);
      \u0275\u0275elementStart(33, "th", 24);
      \u0275\u0275text(34, "H\u1ECDc vi\xEAn");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "th", 24);
      \u0275\u0275text(36, "M\u1EE5c ti\xEAu \u0111i\u1EC3m s\u1ED1 / Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "th", 24);
      \u0275\u0275text(38, "Ph\u1EE5 huynh & S\u0110T");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "th", 25);
      \u0275\u0275text(40, "Tr\u1EA1ng th\xE1i");
      \u0275\u0275elementEnd();
      \u0275\u0275template(41, StudentComponent_th_41_Template, 2, 0, "th", 26)(42, StudentComponent_th_42_Template, 2, 0, "th", 27);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "tbody", 28);
      \u0275\u0275template(44, StudentComponent_tr_44_Template, 6, 0, "tr", 29)(45, StudentComponent_tr_45_Template, 3, 0, "tr", 29)(46, StudentComponent_tr_46_Template, 26, 17, "tr", 30);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(47, "div", 31)(48, "div");
      \u0275\u0275text(49, "Hi\u1EC3n th\u1ECB t\u1EEB ");
      \u0275\u0275elementStart(50, "span", 32);
      \u0275\u0275text(51);
      \u0275\u0275elementEnd();
      \u0275\u0275text(52, " \u0111\u1EBFn ");
      \u0275\u0275elementStart(53, "span", 32);
      \u0275\u0275text(54);
      \u0275\u0275elementEnd();
      \u0275\u0275text(55, " trong t\u1ED5ng s\u1ED1 ");
      \u0275\u0275elementStart(56, "span", 32);
      \u0275\u0275text(57);
      \u0275\u0275elementEnd();
      \u0275\u0275text(58, " m\u1EE5c");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "div", 33)(60, "button", 34);
      \u0275\u0275listener("click", function StudentComponent_Template_button_click_60_listener() {
        return ctx.changePage(ctx.currentPage() - 1);
      });
      \u0275\u0275text(61, "Tr\u01B0\u1EDBc");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "span", 35);
      \u0275\u0275text(63);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "button", 34);
      \u0275\u0275listener("click", function StudentComponent_Template_button_click_64_listener() {
        return ctx.changePage(ctx.currentPage() + 1);
      });
      \u0275\u0275text(65, "Sau");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(66, StudentComponent_Conditional_66_Template, 44, 4, "div", 36);
      \u0275\u0275conditionalCreate(67, StudentComponent_Conditional_67_Template, 19, 3, "div", 36);
      \u0275\u0275conditionalCreate(68, StudentComponent_Conditional_68_Template, 14, 2, "div", 36);
      \u0275\u0275conditionalCreate(69, StudentComponent_Conditional_69_Template, 11, 1, "div", 36);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275conditional(ctx.selectedStudentIds().length > 0 ? 8 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("hasPermission", "STUDENT_CREATE");
      \u0275\u0275advance(4);
      \u0275\u0275property("formControl", ctx.searchControl);
      \u0275\u0275advance(4);
      \u0275\u0275property("formControl", ctx.statusFilterControl);
      \u0275\u0275advance(15);
      \u0275\u0275property("hasPermission", "STUDENT_PROVISION");
      \u0275\u0275advance(9);
      \u0275\u0275property("hasPermission", "STUDENT_PROVISION");
      \u0275\u0275advance();
      \u0275\u0275property("hasAnyPermission", \u0275\u0275pureFunction0(21, _c0));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isLoading() && ctx.students().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading() && ctx.students().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.students());
      \u0275\u0275advance(5);
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
      \u0275\u0275conditional(ctx.isModalOpen() ? 66 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isAccountModalOpen() && ctx.canProvisionAccount() ? 67 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isBatchAccountModalOpen() && ctx.canProvisionAccount() ? 68 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isDeleteModalOpen() && ctx.canDelete() ? 69 : -1);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormControlDirective, FormGroupDirective, FormControlName, HasPermissionDirective], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StudentComponent, [{
    type: Component,
    args: [{ selector: "app-student", imports: [CommonModule, ReactiveFormsModule, HasPermissionDirective], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="p-6 space-y-6">\r
  <!-- Header section -->\r
  <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">\r
    <div>\r
      <h1 class="text-2xl font-bold text-gray-900 dark:text-white">Qu\u1EA3n l\xFD H\u1ECDc vi\xEAn</h1>\r
      <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">Danh s\xE1ch h\u1ECDc vi\xEAn, m\u1EE5c ti\xEAu \u0111i\u1EC3m s\u1ED1 v\xE0 th\xF4ng tin ph\u1EE5 huynh</p>\r
    </div>\r
    <div class="flex items-center gap-3">\r
      @if (selectedStudentIds().length > 0) {\r
        <button *hasPermission="'STUDENT_PROVISION'" (click)="openBatchAccountModal()" class="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium rounded-xl transition-colors shadow-sm">\r
          C\u1EA5p TK h\xE0ng lo\u1EA1t ({{ selectedStudentIds().length }})\r
        </button>\r
      }\r
      <button *hasPermission="'STUDENT_CREATE'" (click)="openModal()" class="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-xl transition-colors shadow-sm shadow-blue-500/10">\r
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>\r
        </svg>\r
        Th\xEAm h\u1ECDc vi\xEAn m\u1EDBi\r
      </button>\r
    </div>\r
  </div>\r
\r
  <!-- Table Container -->\r
  <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">\r
    <!-- Search & Filter bar -->\r
    <div class="p-4 border-b border-gray-100 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">\r
      <div class="relative w-full sm:w-72">\r
        <input [formControl]="searchControl" type="text" placeholder="T\xECm t\xEAn, m\xE3 h\u1ECDc vi\xEAn..." class="w-full pl-10 pr-4 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500">\r
        <svg class="w-4 h-4 text-gray-400 absolute left-3 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>\r
        </svg>\r
      </div>\r
\r
      <div class="w-full sm:w-56">\r
        <select [formControl]="statusFilterControl" class="w-full px-3 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500">\r
          <option value="">T\u1EA5t c\u1EA3 tr\u1EA1ng th\xE1i</option>\r
          <option value="STUDYING">\u0110ang h\u1ECDc (STUDYING)</option>\r
          <option value="RESERVED">B\u1EA3o l\u01B0u (RESERVED)</option>\r
          <option value="GRADUATED">\u0110\xE3 t\u1ED1t nghi\u1EC7p (GRADUATED)</option>\r
          <option value="DROPPED">\u0110\xE3 ngh\u1EC9 h\u1ECDc (DROPPED)</option>\r
        </select>\r
      </div>\r
    </div>\r
\r
    <!-- Table content -->\r
    <div class="overflow-x-auto">\r
      <table class="w-full text-sm text-left text-gray-600 dark:text-gray-300">\r
        <thead class="text-xs uppercase bg-gray-50 dark:bg-gray-900/50 text-gray-500 dark:text-gray-400 border-b border-gray-100 dark:border-gray-700">\r
          <tr>\r
            <th *hasPermission="'STUDENT_PROVISION'" class="p-4 w-4">\r
              <input type="checkbox" (change)="toggleAllStudents($event)" class="rounded border-gray-300 text-blue-600 focus:ring-blue-500">\r
            </th>\r
            <th class="px-6 py-3.5 font-semibold">H\u1ECDc vi\xEAn</th>\r
            <th class="px-6 py-3.5 font-semibold">M\u1EE5c ti\xEAu \u0111i\u1EC3m s\u1ED1 / Email</th>\r
            <th class="px-6 py-3.5 font-semibold">Ph\u1EE5 huynh & S\u0110T</th>\r
            <th class="px-6 py-3.5 font-semibold text-center">Tr\u1EA1ng th\xE1i</th>\r
            <th *hasPermission="'STUDENT_PROVISION'" class="px-6 py-3.5 font-semibold text-center">T\xE0i kho\u1EA3n</th>\r
            <th *hasAnyPermission="['STUDENT_UPDATE', 'STUDENT_DELETE']" class="px-6 py-3.5 font-semibold text-right">Thao t\xE1c</th>\r
          </tr>\r
        </thead>\r
        <tbody class="divide-y divide-gray-50">\r
          <tr *ngIf="isLoading() && students().length === 0">\r
            <td colspan="7" class="px-6 py-12 text-center text-gray-500">\r
              <svg class="animate-spin mx-auto h-8 w-8 text-blue-500 mb-3" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>\r
              \u0110ang t\u1EA3i d\u1EEF li\u1EC7u...\r
            </td>\r
          </tr>\r
          <tr *ngIf="!isLoading() && students().length === 0">\r
            <td colspan="7" class="px-6 py-12 text-center text-gray-500">Kh\xF4ng t\xECm th\u1EA5y h\u1ECDc vi\xEAn n\xE0o.</td>\r
          </tr>\r
          \r
          <tr *ngFor="let std of students()" class="bg-white hover:bg-blue-50/50 transition duration-200">\r
            <td *hasPermission="'STUDENT_PROVISION'" class="px-4 py-4 text-center">\r
              <input type="checkbox" [checked]="selectedStudentIds().includes(std.id)" (change)="toggleStudent(std.id)" class="w-4 h-4 rounded text-blue-600 cursor-pointer">\r
            </td>\r
            <td class="px-6 py-4">\r
              <div class="font-bold text-blue-700 text-base">{{ std.fullName }}</div>\r
              <div class="text-xs text-gray-500 font-mono mt-0.5"><span class="font-semibold">M\xE3 HV:</span> {{ std.studentCode || ('HV#' + std.id) }}</div>\r
            </td>\r
            <td class="px-6 py-4">\r
              <div class="font-medium text-gray-900">{{ std.targetScore || '---' }}</div>\r
              <div class="text-xs text-gray-500">{{ std.userEmail || '---' }}</div>\r
            </td>\r
            <td class="px-6 py-4">\r
              <div class="text-gray-900 font-medium">{{ std.parentName || '---' }}</div>\r
              <div class="text-xs text-gray-500 flex items-center mt-0.5">\r
                <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>\r
                {{ std.parentPhone || '---' }}\r
              </div>\r
            </td>\r
            <td class="px-6 py-4 text-center">\r
              <span class="px-2.5 py-1 text-xs font-semibold rounded-full border"\r
                    [ngClass]="{\r
                      'bg-green-50 text-green-700 border-green-200': isStudying(std.status),\r
                      'bg-blue-50 text-blue-700 border-blue-200': isGraduated(std.status),\r
                      'bg-amber-50 text-amber-700 border-amber-200': isReserved(std.status),\r
                      'bg-red-50 text-red-700 border-red-200': isDropped(std.status)\r
                    }">\r
                {{ getStatusText(std.status) }}\r
              </span>\r
            </td>\r
            <td *hasPermission="'STUDENT_PROVISION'" class="px-6 py-4 text-center">\r
              <div *ngIf="std.userId" class="inline-flex items-center px-2.5 py-1 rounded-md bg-green-100 text-green-800 text-xs font-bold border border-green-200">\r
                <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> \u0110\xE3 c\u1EA5p\r
              </div>\r
              <button *ngIf="!std.userId" (click)="openAccountModal(std)" class="inline-flex items-center px-2.5 py-1 rounded-md bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-700 text-xs font-bold border border-gray-200 transition">\r
                + C\u1EA5p TK\r
              </button>\r
            </td>\r
            <td *hasAnyPermission="['STUDENT_UPDATE', 'STUDENT_DELETE']" class="px-6 py-4 text-right space-x-3">\r
              <button *hasPermission="'STUDENT_UPDATE'" (click)="openModal(std)" class="font-medium text-blue-600 hover:text-blue-800 transition">S\u1EEDa</button>\r
              <button *hasPermission="'STUDENT_DELETE'" (click)="onDelete(std.id)" class="font-medium text-red-600 hover:text-red-800 transition">X\xF3a</button>\r
            </td>\r
          </tr>\r
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
          <h3 class="text-lg font-bold text-gray-900 dark:text-white">{{ isEditing() ? 'Ch\u1EC9nh s\u1EEDa h\u1ED3 s\u01A1 h\u1ECDc vi\xEAn' : 'Th\xEAm h\u1ECDc vi\xEAn m\u1EDBi' }}</h3>\r
          <button (click)="closeModal()" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">\r
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>\r
          </button>\r
        </div>\r
\r
        <form [formGroup]="studentForm" (ngSubmit)="onSubmit()" class="space-y-4">\r
          @if (isEditing()) {\r
            <div>\r
              <label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">M\xE3 h\u1ECDc vi\xEAn</label>\r
              <input formControlName="studentCode" type="text" class="w-full px-3 py-2 bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm font-mono cursor-not-allowed">\r
            </div>\r
          }\r
\r
          <div>\r
            <label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">H\u1ECD v\xE0 t\xEAn *</label>\r
            <input formControlName="fullName" type="text" placeholder="VD: Nguy\u1EC5n V\u0103n A" class="w-full px-3 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:ring-2 focus:ring-blue-500">\r
          </div>\r
\r
          <div>\r
            <label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">M\u1EE5c ti\xEAu \u0111i\u1EC3m s\u1ED1</label>\r
            <input formControlName="targetScore" type="text" placeholder="VD: IELTS 7.0, TOEIC 850" class="w-full px-3 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:ring-2 focus:ring-blue-500">\r
          </div>\r
\r
          <div class="grid grid-cols-2 gap-4">\r
            <div>\r
              <label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">H\u1ECD t\xEAn Ph\u1EE5 huynh</label>\r
              <input formControlName="parentName" type="text" placeholder="VD: Nguy\u1EC5n V\u0103n B" class="w-full px-3 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:ring-2 focus:ring-blue-500">\r
            </div>\r
            <div>\r
              <label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">S\u0110T Ph\u1EE5 huynh</label>\r
              <input formControlName="parentPhone" type="text" placeholder="VD: 0912345678" class="w-full px-3 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:ring-2 focus:ring-blue-500">\r
            </div>\r
          </div>\r
\r
          <div>\r
            <label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">Tr\u1EA1ng th\xE1i h\u1ECDc vi\xEAn *</label>\r
            <select formControlName="status" class="w-full px-3 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:ring-2 focus:ring-blue-500">\r
              <option value="STUDYING">STUDYING (\u0110ang theo h\u1ECDc)</option>\r
              <option value="RESERVED">RESERVED (\u0110ang b\u1EA3o l\u01B0u)</option>\r
              <option value="GRADUATED">GRADUATED (T\u1ED1t nghi\u1EC7p)</option>\r
              <option value="DROPPED">DROPPED (\u0110\xE3 ngh\u1EC9 h\u1ECDc)</option>\r
            </select>\r
          </div>\r
\r
          <div class="flex justify-end gap-3 pt-4 border-t border-gray-100 dark:border-gray-700">\r
            <button type="button" (click)="closeModal()" class="px-4 py-2 text-xs font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl">H\u1EE7y</button>\r
            <button type="submit" [disabled]="studentForm.invalid || isLoading()" class="px-4 py-2 text-xs font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-xl disabled:opacity-50">L\u01B0u</button>\r
          </div>\r
        </form>\r
      </div>\r
    </div>\r
  }\r
\r
  <!-- Account Modal -->\r
  @if (isAccountModalOpen() && canProvisionAccount()) {\r
    <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">\r
      <div class="bg-white dark:bg-gray-800 rounded-2xl max-w-sm w-full p-6 shadow-xl border border-gray-100 dark:border-gray-700 space-y-4">\r
        <h3 class="text-base font-bold text-gray-900 dark:text-white">C\u1EA5p t\xE0i kho\u1EA3n \u0111\u0103ng nh\u1EADp</h3>\r
        <p class="text-xs text-gray-500">T\u1EA1o t\xE0i kho\u1EA3n \u0111\u0103ng nh\u1EADp cho h\u1ECDc vi\xEAn <strong>{{ selectedStudentForAccount()?.fullName }}</strong>.</p>\r
\r
        <form [formGroup]="accountForm" (ngSubmit)="onSubmitAccount()" class="space-y-4">\r
          <div>\r
            <label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">Email t\xE0i kho\u1EA3n (T\xF9y ch\u1ECDn)</label>\r
            <input formControlName="email" type="email" placeholder="\u0110\u1EC3 tr\u1ED1ng n\u1EBFu t\u1EF1 \u0111\u1ED9ng t\u1EA1o theo m\xE3" class="w-full px-3 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:ring-2 focus:ring-blue-500">\r
          </div>\r
          <div class="flex justify-end gap-3 pt-2">\r
            <button type="button" (click)="closeAccountModal()" class="px-4 py-2 text-xs font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl">H\u1EE7y</button>\r
            <button type="submit" [disabled]="isLoading()" class="px-4 py-2 text-xs font-medium bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl disabled:opacity-50">T\u1EA1o t\xE0i kho\u1EA3n</button>\r
          </div>\r
        </form>\r
      </div>\r
    </div>\r
  }\r
\r
  <!-- Batch Account Modal -->\r
  @if (isBatchAccountModalOpen() && canProvisionAccount()) {\r
    <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">\r
      <div class="bg-white dark:bg-gray-800 rounded-2xl max-w-sm w-full p-6 shadow-xl border border-gray-100 dark:border-gray-700 space-y-4">\r
        <h3 class="text-base font-bold text-gray-900 dark:text-white">X\xE1c nh\u1EADn c\u1EA5p h\xE0ng lo\u1EA1t</h3>\r
        <p class="text-xs text-gray-500">B\u1EA1n s\u1EAFp t\u1EA1o t\xE0i kho\u1EA3n \u0111\u0103ng nh\u1EADp t\u1EF1 \u0111\u1ED9ng cho <strong>{{ selectedStudentIds().length }}</strong> h\u1ECDc vi\xEAn \u0111\xE3 ch\u1ECDn.</p>\r
        <div class="flex justify-end gap-3 pt-2">\r
          <button (click)="closeBatchAccountModal()" class="px-4 py-2 text-xs font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl">H\u1EE7y</button>\r
          <button (click)="executeBatchAccountCreation()" [disabled]="isLoading()" class="px-4 py-2 text-xs font-medium bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl disabled:opacity-50">C\u1EA5p t\xE0i kho\u1EA3n</button>\r
        </div>\r
      </div>\r
    </div>\r
  }\r
\r
  <!-- Delete Modal -->\r
  @if (isDeleteModalOpen() && canDelete()) {\r
    <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">\r
      <div class="bg-white dark:bg-gray-800 rounded-2xl max-w-sm w-full p-6 shadow-xl border border-gray-100 dark:border-gray-700 space-y-4">\r
        <h3 class="text-base font-bold text-gray-900 dark:text-white">X\xE1c nh\u1EADn x\xF3a h\u1ECDc vi\xEAn</h3>\r
        <p class="text-xs text-gray-500">B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a h\u1ED3 s\u01A1 h\u1ECDc vi\xEAn n\xE0y?</p>\r
        <div class="flex justify-end gap-3 pt-2">\r
          <button (click)="closeDeleteModal()" class="px-4 py-2 text-xs font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl">H\u1EE7y</button>\r
          <button (click)="confirmDelete()" [disabled]="isLoading()" class="px-4 py-2 text-xs font-medium bg-rose-600 hover:bg-rose-700 text-white rounded-xl disabled:opacity-50">X\xF3a</button>\r
        </div>\r
      </div>\r
    </div>\r
  }\r
</div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StudentComponent, { className: "StudentComponent", filePath: "src/app/features/admin/pages/student/student.component.ts", lineNumber: 20 });
})();

// src/app/modules/user/services/staff.service.ts
var StaffService = class _StaffService {
  http = inject(HttpClient);
  apiUrl = `${environment.apiUrl}/api/v1/staffs`;
  /** GET /api/v1/staffs — danh sách toàn bộ nhân sự, có filter keyword */
  getAll(keyword, page = 0, size = 10, sortBy = "createdAt", sortDir = "desc") {
    let params = new HttpParams().set("page", page.toString()).set("size", size.toString()).set("sortBy", sortBy).set("sortDir", sortDir);
    if (keyword)
      params = params.set("keyword", keyword);
    return this.http.get(this.apiUrl, { params });
  }
  /** GET /api/v1/staffs/department/{departmentId} — danh sách nhân sự thuộc 1 phòng ban cụ thể */
  getByDepartment(departmentId, page = 0, size = 100) {
    const params = new HttpParams().set("page", page.toString()).set("size", size.toString());
    return this.http.get(`${this.apiUrl}/department/${departmentId}`, { params });
  }
  /** GET /api/v1/staffs/teachers — danh sách toàn bộ nhân sự giảng dạy (staffType chứa TEACHER) */
  getTeachers() {
    return this.http.get(`${this.apiUrl}/teachers`);
  }
  getById(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  getByStaffCode(staffCode) {
    return this.http.get(`${this.apiUrl}/code/${staffCode}`);
  }
  /** POST /api/v1/staffs — backend trả { message, data: StaffDto } */
  create(data) {
    return this.http.post(this.apiUrl, data);
  }
  /** PUT /api/v1/staffs/{id} — backend trả { message, data: StaffDto } */
  update(id, data) {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }
  delete(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  static \u0275fac = function StaffService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StaffService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _StaffService, factory: _StaffService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StaffService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/modules/user/services/department.service.ts
var DepartmentService = class _DepartmentService {
  http = inject(HttpClient);
  apiUrl = `${environment.apiUrl}/api/v1/departments`;
  getAll(keyword, page = 0, size = 10) {
    let params = new HttpParams().set("page", page.toString()).set("size", size.toString());
    if (keyword)
      params = params.set("keyword", keyword);
    return this.http.get(this.apiUrl, { params });
  }
  getById(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  create(data) {
    return this.http.post(this.apiUrl, data);
  }
  update(id, data) {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }
  delete(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  /** Lấy toàn bộ phòng ban (dùng cho dropdown) */
  getAllActive() {
    return this.getAll(void 0, 0, 1e3).pipe(map((res) => res.content || []));
  }
  static \u0275fac = function DepartmentService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DepartmentService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DepartmentService, factory: _DepartmentService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DepartmentService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/features/admin/pages/staff/staff.component.ts
var _c02 = () => ["STAFF_UPDATE", "STAFF_DELETE"];
var _forTrack02 = ($index, $item) => $item.id;
function StaffComponent_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25);
    \u0275\u0275listener("click", function StaffComponent_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 26);
    \u0275\u0275element(2, "path", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isAcademic() ? "Th\xEAm gi\u1EA3ng vi\xEAn m\u1EDBi" : "Th\xEAm nh\xE2n s\u1EF1 m\u1EDBi", " ");
  }
}
function StaffComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "select", 12)(1, "option", 28);
    \u0275\u0275text(2, "T\u1EA5t c\u1EA3 lo\u1EA1i gi\xE1o vi\xEAn");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "option", 29);
    \u0275\u0275text(4, "Gi\xE1o vi\xEAn (TEACHER)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "option", 30);
    \u0275\u0275text(6, "Tr\u1EE3 gi\u1EA3ng (ASSISTANT)");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formControl", ctx_r1.typeFilterControl);
  }
}
function StaffComponent_Conditional_16_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r3 = ctx.$implicit;
    \u0275\u0275property("value", d_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r3.name);
  }
}
function StaffComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "select", 12)(1, "option", 28);
    \u0275\u0275text(2, "T\u1EA5t c\u1EA3 v\u1ECB tr\xED (Staff Type)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "option", 29);
    \u0275\u0275text(4, "Gi\xE1o vi\xEAn (TEACHER)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "option", 30);
    \u0275\u0275text(6, "Tr\u1EE3 gi\u1EA3ng (ASSISTANT)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "option", 31);
    \u0275\u0275text(8, "T\u01B0 v\u1EA5n vi\xEAn (CONSULTANT)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "option", 32);
    \u0275\u0275text(10, "Qu\u1EA3n l\xFD (MANAGER)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "select", 12)(12, "option", 28);
    \u0275\u0275text(13, "T\u1EA5t c\u1EA3 ph\xF2ng ban");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(14, StaffComponent_Conditional_16_For_15_Template, 2, 2, "option", 33, _forTrack02);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formControl", ctx_r1.typeFilterControl);
    \u0275\u0275advance(11);
    \u0275\u0275property("formControl", ctx_r1.deptFilterControl);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.departments());
  }
}
function StaffComponent_Conditional_35_th_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 17);
    \u0275\u0275text(1, "Thao t\xE1c");
    \u0275\u0275elementEnd();
  }
}
function StaffComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StaffComponent_Conditional_35_th_0_Template, 2, 0, "th", 34);
  }
  if (rf & 2) {
    \u0275\u0275property("hasAnyPermission", \u0275\u0275pureFunction0(1, _c02));
  }
}
function StaffComponent_Conditional_37_Template(rf, ctx) {
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
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", ctx_r1.isReadOnly() ? 7 : 8);
  }
}
function StaffComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 35);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", ctx_r1.isReadOnly() ? 7 : 8);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.isAcademic() ? "Ch\u01B0a c\xF3 gi\u1EA3ng vi\xEAn n\xE0o." : "Ch\u01B0a c\xF3 nh\xE2n s\u1EF1 n\xE0o.");
  }
}
function StaffComponent_Conditional_39_For_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const staff_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(staff_r4.userEmail);
  }
}
function StaffComponent_Conditional_39_For_1_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275text(1, "\u0110ang l\xE0m vi\u1EC7c");
    \u0275\u0275elementEnd();
  }
}
function StaffComponent_Conditional_39_For_1_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 50);
    \u0275\u0275text(1, "\u0110\xE3 ngh\u1EC9");
    \u0275\u0275elementEnd();
  }
}
function StaffComponent_Conditional_39_For_1_td_19_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 55);
    \u0275\u0275listener("click", function StaffComponent_Conditional_39_For_1_td_19_button_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const staff_r4 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openModal(staff_r4));
    });
    \u0275\u0275text(1, "S\u1EEDa");
    \u0275\u0275elementEnd();
  }
}
function StaffComponent_Conditional_39_For_1_td_19_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 56);
    \u0275\u0275listener("click", function StaffComponent_Conditional_39_For_1_td_19_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const staff_r4 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDelete(staff_r4.id));
    });
    \u0275\u0275text(1, "X\xF3a");
    \u0275\u0275elementEnd();
  }
}
function StaffComponent_Conditional_39_For_1_td_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 52);
    \u0275\u0275template(1, StaffComponent_Conditional_39_For_1_td_19_button_1_Template, 2, 0, "button", 53)(2, StaffComponent_Conditional_39_For_1_td_19_button_2_Template, 2, 0, "button", 54);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("hasPermission", "STAFF_UPDATE");
    \u0275\u0275advance();
    \u0275\u0275property("hasPermission", "STAFF_DELETE");
  }
}
function StaffComponent_Conditional_39_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 40)(1, "td", 41);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 42)(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, StaffComponent_Conditional_39_For_1_Conditional_6_Template, 2, 1, "div", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 44)(8, "span", 45);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td", 46);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 47);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 48);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 44);
    \u0275\u0275conditionalCreate(17, StaffComponent_Conditional_39_For_1_Conditional_17_Template, 2, 0, "span", 49)(18, StaffComponent_Conditional_39_For_1_Conditional_18_Template, 2, 0, "span", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, StaffComponent_Conditional_39_For_1_td_19_Template, 3, 2, "td", 51);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const staff_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(staff_r4.staffCode);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(staff_r4.fullName);
    \u0275\u0275advance();
    \u0275\u0275conditional(staff_r4.userEmail ? 6 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.staffTypeLabels[staff_r4.staffType] || staff_r4.staffType, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(staff_r4.departmentName || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(staff_r4.phone || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.contractTypeLabels[staff_r4.contractType || "FULLTIME"]);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(staff_r4.status === "ACTIVE" ? 17 : 18);
    \u0275\u0275advance(2);
    \u0275\u0275property("hasAnyPermission", \u0275\u0275pureFunction0(9, _c02));
  }
}
function StaffComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, StaffComponent_Conditional_39_For_1_Template, 20, 10, "tr", 40, _forTrack02);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r1.staffs());
  }
}
function StaffComponent_Conditional_59_For_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r8 = ctx.$implicit;
    \u0275\u0275property("value", d_r8.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r8.name);
  }
}
function StaffComponent_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 57)(2, "div", 58)(3, "h3", 59);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 60);
    \u0275\u0275listener("click", function StaffComponent_Conditional_59_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 26);
    \u0275\u0275element(7, "path", 61);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "form", 62);
    \u0275\u0275listener("ngSubmit", function StaffComponent_Conditional_59_Template_form_ngSubmit_8_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(9, "div", 63)(10, "div")(11, "label", 64);
    \u0275\u0275text(12, "M\xE3 nh\xE2n s\u1EF1 (Code) *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div")(15, "label", 64);
    \u0275\u0275text(16, "Lo\u1EA1i nh\xE2n s\u1EF1 *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "select", 66)(18, "option", 29);
    \u0275\u0275text(19, "TEACHER (Gi\xE1o vi\xEAn)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "option", 30);
    \u0275\u0275text(21, "TEACHING_ASSISTANT (Tr\u1EE3 gi\u1EA3ng)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "option", 31);
    \u0275\u0275text(23, "CONSULTANT (T\u01B0 v\u1EA5n vi\xEAn)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "option", 32);
    \u0275\u0275text(25, "MANAGER (Qu\u1EA3n l\xFD)");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(26, "div")(27, "label", 64);
    \u0275\u0275text(28, "H\u1ECD v\xE0 t\xEAn *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "input", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 63)(31, "div")(32, "label", 64);
    \u0275\u0275text(33, "Ph\xF2ng ban");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "select", 68)(35, "option", 28);
    \u0275\u0275text(36, "-- Ch\u1ECDn ph\xF2ng ban --");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(37, StaffComponent_Conditional_59_For_38_Template, 2, 2, "option", 33, _forTrack02);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div")(40, "label", 64);
    \u0275\u0275text(41, "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i");
    \u0275\u0275elementEnd();
    \u0275\u0275element(42, "input", 69);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 63)(44, "div")(45, "label", 64);
    \u0275\u0275text(46, "Lo\u1EA1i h\u1EE3p \u0111\u1ED3ng");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "select", 70)(48, "option", 71);
    \u0275\u0275text(49, "FULLTIME (To\xE0n th\u1EDDi gian)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "option", 72);
    \u0275\u0275text(51, "PARTTIME (B\xE1n th\u1EDDi gian)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "option", 73);
    \u0275\u0275text(53, "VISITING (Th\u1EC9nh gi\u1EA3ng)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(54, "div")(55, "label", 64);
    \u0275\u0275text(56, "L\u01B0\u01A1ng c\u01A1 b\u1EA3n (VN\u0110)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(57, "input", 74);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "div", 63)(59, "div")(60, "label", 64);
    \u0275\u0275text(61, "Ng\xE0y tuy\u1EC3n d\u1EE5ng");
    \u0275\u0275elementEnd();
    \u0275\u0275element(62, "input", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "div")(64, "label", 64);
    \u0275\u0275text(65, "Tr\u1EA1ng th\xE1i *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "select", 76)(67, "option", 77);
    \u0275\u0275text(68, "ACTIVE (\u0110ang l\xE0m vi\u1EC7c)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "option", 78);
    \u0275\u0275text(70, "INACTIVE (\u0110\xE3 ngh\u1EC9 vi\u1EC7c)");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(71, "div", 79)(72, "button", 80);
    \u0275\u0275listener("click", function StaffComponent_Conditional_59_Template_button_click_72_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275text(73, "H\u1EE7y");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "button", 81);
    \u0275\u0275text(75, "L\u01B0u");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.isEditing() ? "Ch\u1EC9nh s\u1EEDa h\u1ED3 s\u01A1 nh\xE2n s\u1EF1" : "Th\xEAm nh\xE2n s\u1EF1 m\u1EDBi");
    \u0275\u0275advance(4);
    \u0275\u0275property("formGroup", ctx_r1.staffForm);
    \u0275\u0275advance(29);
    \u0275\u0275repeater(ctx_r1.departments());
    \u0275\u0275advance(37);
    \u0275\u0275property("disabled", ctx_r1.staffForm.invalid || ctx_r1.isLoading());
  }
}
function StaffComponent_Conditional_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 82)(2, "h3", 83);
    \u0275\u0275text(3, "X\xE1c nh\u1EADn x\xF3a nh\xE2n s\u1EF1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 84);
    \u0275\u0275text(5, "B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a h\u1ED3 s\u01A1 nh\xE2n s\u1EF1 n\xE0y? Thao t\xE1c n\xE0y kh\xF4ng th\u1EC3 ho\xE0n t\xE1c.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 85)(7, "button", 86);
    \u0275\u0275listener("click", function StaffComponent_Conditional_60_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDeleteModal());
    });
    \u0275\u0275text(8, "H\u1EE7y");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 87);
    \u0275\u0275listener("click", function StaffComponent_Conditional_60_Template_button_click_9_listener() {
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
var StaffComponent = class _StaffComponent {
  staffService = inject(StaffService);
  departmentService = inject(DepartmentService);
  fb = inject(FormBuilder);
  destroyRef = inject(DestroyRef);
  toastService = inject(ToastService);
  router = inject(Router);
  isReadOnly = signal(false, ...ngDevMode ? [{ debugName: "isReadOnly" }] : (
    /* istanbul ignore next */
    []
  ));
  isAcademic = signal(false, ...ngDevMode ? [{ debugName: "isAcademic" }] : (
    /* istanbul ignore next */
    []
  ));
  staffs = signal([], ...ngDevMode ? [{ debugName: "staffs" }] : (
    /* istanbul ignore next */
    []
  ));
  departments = signal([], ...ngDevMode ? [{ debugName: "departments" }] : (
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
  typeFilterControl = new FormControl("");
  deptFilterControl = new FormControl("");
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
  staffForm;
  isDeleteModalOpen = signal(false, ...ngDevMode ? [{ debugName: "isDeleteModalOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  idToDelete = signal(null, ...ngDevMode ? [{ debugName: "idToDelete" }] : (
    /* istanbul ignore next */
    []
  ));
  staffTypeLabels = {
    TEACHER: "Gi\xE1o vi\xEAn",
    TEACHING_ASSISTANT: "Tr\u1EE3 gi\u1EA3ng",
    CONSULTANT: "T\u01B0 v\u1EA5n vi\xEAn",
    MANAGER: "Qu\u1EA3n l\xFD"
  };
  contractTypeLabels = {
    FULLTIME: "To\xE0n th\u1EDDi gian (Full-time)",
    PARTTIME: "B\xE1n th\u1EDDi gian (Part-time)",
    VISITING: "Th\u1EC9nh gi\u1EA3ng"
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
    const isAcad = this.router.url.startsWith("/academic");
    this.isAcademic.set(isAcad);
    this.isReadOnly.set(isAcad);
    this.initForm();
    this.loadDepartments();
    this.setupFilters();
    this.loadData();
  }
  initForm() {
    this.staffForm = this.fb.group({
      staffCode: ["", [Validators.required, Validators.maxLength(50)]],
      fullName: ["", [Validators.required, Validators.maxLength(100)]],
      staffType: ["TEACHER", Validators.required],
      departmentId: [""],
      phone: ["", [Validators.pattern(/^(0[3|5|7|8|9])+([0-9]{8})$/)]],
      hireDate: [""],
      contractType: ["FULLTIME"],
      baseSalary: [0, [Validators.min(0)]],
      status: ["ACTIVE", Validators.required]
    });
  }
  setupFilters() {
    this.searchControl.valueChanges.pipe(debounceTime(400), distinctUntilChanged(), takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.currentPage.set(1);
      this.loadData();
    });
    this.typeFilterControl.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.currentPage.set(1);
      this.loadData();
    });
    this.deptFilterControl.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.currentPage.set(1);
      this.loadData();
    });
  }
  loadDepartments() {
    this.departmentService.getAll(void 0, 0, 100).subscribe({
      next: (res) => this.departments.set(res.content || [])
    });
  }
  loadData() {
    this.isLoading.set(true);
    const keyword = this.searchControl.value || void 0;
    const selectedType = this.typeFilterControl.value || void 0;
    const deptIdFilter = this.isAcademic() ? void 0 : this.deptFilterControl.value || void 0;
    const handleFiltering = (resContent, totalCount) => {
      let list = resContent || [];
      if (this.isAcademic()) {
        if (selectedType) {
          list = list.filter((s) => s.staffType === selectedType);
        } else {
          list = list.filter((s) => s.staffType === "TEACHER" || s.staffType === "TEACHING_ASSISTANT");
        }
      } else {
        if (selectedType) {
          list = list.filter((s) => s.staffType === selectedType);
        }
      }
      this.staffs.set(list);
      this.totalElements.set(selectedType || this.isAcademic() ? list.length : totalCount);
      this.isLoading.set(false);
    };
    if (deptIdFilter) {
      this.staffService.getByDepartment(deptIdFilter, this.currentPage() - 1, this.pageSize()).subscribe({
        next: (res) => handleFiltering(res.content || [], res.totalElements || 0),
        error: () => this.isLoading.set(false)
      });
    } else {
      this.staffService.getAll(keyword, this.currentPage() - 1, this.pageSize()).subscribe({
        next: (res) => handleFiltering(res.content || [], res.totalElements || 0),
        error: () => this.isLoading.set(false)
      });
    }
  }
  changePage(page) {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage.set(page);
      this.loadData();
    }
  }
  openModal(staff) {
    if (staff) {
      this.isEditing.set(true);
      this.currentId.set(staff.id);
      this.staffForm.patchValue({
        staffCode: staff.staffCode,
        fullName: staff.fullName,
        staffType: staff.staffType,
        departmentId: staff.departmentId || "",
        phone: staff.phone || "",
        hireDate: staff.hireDate || "",
        contractType: staff.contractType || "FULLTIME",
        baseSalary: staff.baseSalary || 0,
        status: staff.status || "ACTIVE"
      });
      this.staffForm.get("staffCode")?.disable();
    } else {
      this.isEditing.set(false);
      this.currentId.set(null);
      this.staffForm.reset({
        staffCode: "",
        fullName: "",
        staffType: "TEACHER",
        departmentId: "",
        phone: "",
        hireDate: "",
        contractType: "FULLTIME",
        baseSalary: 0,
        status: "ACTIVE"
      });
      this.staffForm.get("staffCode")?.enable();
    }
    this.isModalOpen.set(true);
  }
  closeModal() {
    this.isModalOpen.set(false);
    this.currentId.set(null);
  }
  onSubmit() {
    if (this.staffForm.invalid)
      return;
    this.isLoading.set(true);
    const data = this.staffForm.getRawValue();
    data.staffCode = data.staffCode.toUpperCase().trim();
    if (data.departmentId)
      data.departmentId = Number(data.departmentId);
    if (this.isEditing() && this.currentId() != null) {
      this.staffService.update(this.currentId(), data).subscribe({
        next: () => {
          this.loadData();
          this.closeModal();
          this.toastService.success("Th\xE0nh c\xF4ng", "\u0110\xE3 c\u1EADp nh\u1EADt th\xF4ng tin nh\xE2n s\u1EF1!");
        },
        error: (err) => {
          this.isLoading.set(false);
          this.toastService.error("Th\u1EA5t b\u1EA1i", err.error?.message || "C\xF3 l\u1ED7i x\u1EA3y ra khi c\u1EADp nh\u1EADt!");
        }
      });
    } else {
      this.staffService.create(data).subscribe({
        next: () => {
          this.loadData();
          this.closeModal();
          this.toastService.success("Th\xE0nh c\xF4ng", "\u0110\xE3 th\xEAm nh\xE2n s\u1EF1 m\u1EDBi!");
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
      this.staffService.delete(id).subscribe({
        next: () => {
          this.loadData();
          this.closeDeleteModal();
          this.toastService.success("\u0110\xE3 x\xF3a", "X\xF3a nh\xE2n s\u1EF1 th\xE0nh c\xF4ng!");
        },
        error: (err) => {
          this.isLoading.set(false);
          this.closeDeleteModal();
          this.toastService.error("L\u1ED7i x\xF3a", err.error?.message || "Kh\xF4ng th\u1EC3 x\xF3a nh\xE2n s\u1EF1 n\xE0y!");
        }
      });
    }
  }
  static \u0275fac = function StaffComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StaffComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StaffComponent, selectors: [["app-staff"]], decls: 61, vars: 18, consts: [[1, "p-6", "space-y-6"], [1, "flex", "flex-col", "sm:flex-row", "justify-between", "items-start", "sm:items-center", "gap-4", "bg-white", "dark:bg-gray-800", "p-6", "rounded-2xl", "shadow-sm", "border", "border-gray-100", "dark:border-gray-700"], [1, "text-2xl", "font-bold", "text-gray-900", "dark:text-white"], [1, "text-sm", "text-gray-500", "dark:text-gray-400", "mt-1"], ["class", "inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-xl transition-colors shadow-sm shadow-blue-500/10", 3, "click", 4, "hasPermission"], [1, "bg-white", "dark:bg-gray-800", "rounded-2xl", "shadow-sm", "border", "border-gray-100", "dark:border-gray-700", "overflow-hidden"], [1, "p-4", "border-b", "border-gray-100", "dark:border-gray-700", "bg-gray-50/50", "dark:bg-gray-800/50", "flex", "flex-col", "md:flex-row", "items-center", "justify-between", "gap-4"], [1, "relative", "w-full", "md:w-64"], ["type", "text", 1, "w-full", "pl-10", "pr-4", "py-2", "bg-white", "dark:bg-gray-900", "border", "border-gray-200", "dark:border-gray-700", "rounded-xl", "text-sm", "text-gray-900", "dark:text-white", "placeholder-gray-400", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", 3, "formControl", "placeholder"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-gray-400", "absolute", "left-3", "top-3"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], [1, "flex", "flex-wrap", "items-center", "gap-3", "w-full", "md:w-auto"], [1, "px-3", "py-2", "bg-white", "dark:bg-gray-900", "border", "border-gray-200", "dark:border-gray-700", "rounded-xl", "text-sm", "text-gray-900", "dark:text-white", "focus:ring-2", "focus:ring-blue-500", 3, "formControl"], [1, "overflow-x-auto"], [1, "w-full", "text-sm", "text-left", "text-gray-600", "dark:text-gray-300"], [1, "text-xs", "uppercase", "bg-gray-50", "dark:bg-gray-900/50", "text-gray-500", "dark:text-gray-400", "border-b", "border-gray-100", "dark:border-gray-700"], [1, "px-6", "py-3.5", "font-semibold"], [1, "px-6", "py-3.5", "font-semibold", "text-right"], [1, "divide-y", "divide-gray-100", "dark:divide-gray-700"], [1, "p-4", "border-t", "border-gray-100", "dark:border-gray-700", "flex", "flex-col", "sm:flex-row", "justify-between", "items-center", "gap-4", "text-xs", "text-gray-500"], [1, "font-medium", "text-gray-900", "dark:text-white"], [1, "flex", "items-center", "gap-1"], [1, "px-3", "py-1.5", "rounded-lg", "border", "border-gray-200", "dark:border-gray-700", "disabled:opacity-40", "hover:bg-gray-50", "dark:hover:bg-gray-700", "transition-colors", 3, "click", "disabled"], [1, "px-3", "py-1.5", "font-medium", "text-gray-900", "dark:text-white"], [1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "p-4", "bg-black/40", "backdrop-blur-sm"], [1, "inline-flex", "items-center", "gap-2", "px-4", "py-2.5", "bg-blue-600", "hover:bg-blue-700", "text-white", "text-sm", "font-medium", "rounded-xl", "transition-colors", "shadow-sm", "shadow-blue-500/10", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 4v16m8-8H4"], ["value", ""], ["value", "TEACHER"], ["value", "TEACHING_ASSISTANT"], ["value", "CONSULTANT"], ["value", "MANAGER"], [3, "value"], ["class", "px-6 py-3.5 font-semibold text-right", 4, "hasAnyPermission"], [1, "px-6", "py-8", "text-center", "text-gray-400"], [1, "inline-flex", "items-center", "gap-2"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-5", "w-5", "text-blue-600"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"], [1, "hover:bg-gray-50/50", "dark:hover:bg-gray-700/50", "transition-colors"], [1, "px-6", "py-4", "font-mono", "font-medium", "text-blue-600", "dark:text-blue-400"], [1, "px-6", "py-4", "font-medium", "text-gray-900", "dark:text-white"], [1, "text-xs", "text-gray-400", "font-normal"], [1, "px-6", "py-4"], [1, "inline-flex", "items-center", "px-2.5", "py-0.5", "rounded-full", "text-xs", "font-medium", "bg-indigo-50", "text-indigo-700", "dark:bg-indigo-950/40", "dark:text-indigo-400", "border", "border-indigo-200"], [1, "px-6", "py-4", "text-gray-600", "dark:text-gray-300"], [1, "px-6", "py-4", "font-mono"], [1, "px-6", "py-4", "text-xs"], [1, "inline-flex", "items-center", "px-2.5", "py-0.5", "rounded-full", "text-xs", "font-medium", "bg-emerald-50", "text-emerald-700", "dark:bg-emerald-950/40", "dark:text-emerald-400", "border", "border-emerald-200"], [1, "inline-flex", "items-center", "px-2.5", "py-0.5", "rounded-full", "text-xs", "font-medium", "bg-gray-100", "text-gray-700", "dark:bg-gray-700", "dark:text-gray-300"], ["class", "px-6 py-4 text-right space-x-2", 4, "hasAnyPermission"], [1, "px-6", "py-4", "text-right", "space-x-2"], ["class", "px-3 py-1.5 text-xs font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-lg transition-colors", 3, "click", 4, "hasPermission"], ["class", "px-3 py-1.5 text-xs font-medium text-rose-600 hover:text-rose-700 hover:bg-rose-50 dark:hover:bg-rose-900/30 rounded-lg transition-colors", 3, "click", 4, "hasPermission"], [1, "px-3", "py-1.5", "text-xs", "font-medium", "text-blue-600", "hover:text-blue-700", "hover:bg-blue-50", "dark:hover:bg-blue-900/30", "rounded-lg", "transition-colors", 3, "click"], [1, "px-3", "py-1.5", "text-xs", "font-medium", "text-rose-600", "hover:text-rose-700", "hover:bg-rose-50", "dark:hover:bg-rose-900/30", "rounded-lg", "transition-colors", 3, "click"], [1, "bg-white", "dark:bg-gray-800", "rounded-2xl", "max-w-lg", "w-full", "p-6", "shadow-xl", "border", "border-gray-100", "dark:border-gray-700", "space-y-6"], [1, "flex", "justify-between", "items-center"], [1, "text-lg", "font-bold", "text-gray-900", "dark:text-white"], [1, "text-gray-400", "hover:text-gray-600", "dark:hover:text-gray-300", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "space-y-4", 3, "ngSubmit", "formGroup"], [1, "grid", "grid-cols-2", "gap-4"], [1, "block", "text-xs", "font-semibold", "text-gray-700", "dark:text-gray-300", "mb-1"], ["formControlName", "staffCode", "type", "text", "placeholder", "VD: NV001, GV-01", 1, "w-full", "px-3", "py-2", "bg-white", "dark:bg-gray-900", "border", "border-gray-200", "dark:border-gray-700", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-500", "uppercase"], ["formControlName", "staffType", 1, "w-full", "px-3", "py-2", "bg-white", "dark:bg-gray-900", "border", "border-gray-200", "dark:border-gray-700", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-500"], ["formControlName", "fullName", "type", "text", "placeholder", "VD: Nguy\u1EC5n V\u0103n Anh", 1, "w-full", "px-3", "py-2", "bg-white", "dark:bg-gray-900", "border", "border-gray-200", "dark:border-gray-700", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-500"], ["formControlName", "departmentId", 1, "w-full", "px-3", "py-2", "bg-white", "dark:bg-gray-900", "border", "border-gray-200", "dark:border-gray-700", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-500"], ["formControlName", "phone", "type", "text", "placeholder", "VD: 0912345678", 1, "w-full", "px-3", "py-2", "bg-white", "dark:bg-gray-900", "border", "border-gray-200", "dark:border-gray-700", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-500"], ["formControlName", "contractType", 1, "w-full", "px-3", "py-2", "bg-white", "dark:bg-gray-900", "border", "border-gray-200", "dark:border-gray-700", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-500"], ["value", "FULLTIME"], ["value", "PARTTIME"], ["value", "VISITING"], ["formControlName", "baseSalary", "type", "number", 1, "w-full", "px-3", "py-2", "bg-white", "dark:bg-gray-900", "border", "border-gray-200", "dark:border-gray-700", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-500"], ["formControlName", "hireDate", "type", "date", 1, "w-full", "px-3", "py-2", "bg-white", "dark:bg-gray-900", "border", "border-gray-200", "dark:border-gray-700", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-500"], ["formControlName", "status", 1, "w-full", "px-3", "py-2", "bg-white", "dark:bg-gray-900", "border", "border-gray-200", "dark:border-gray-700", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-500"], ["value", "ACTIVE"], ["value", "INACTIVE"], [1, "flex", "justify-end", "gap-3", "pt-4", "border-t", "border-gray-100", "dark:border-gray-700"], ["type", "button", 1, "px-4", "py-2", "text-xs", "font-medium", "text-gray-600", "dark:text-gray-300", "hover:bg-gray-100", "dark:hover:bg-gray-700", "rounded-xl", 3, "click"], ["type", "submit", 1, "px-4", "py-2", "text-xs", "font-medium", "bg-blue-600", "hover:bg-blue-700", "text-white", "rounded-xl", "disabled:opacity-50", 3, "disabled"], [1, "bg-white", "dark:bg-gray-800", "rounded-2xl", "max-w-sm", "w-full", "p-6", "shadow-xl", "border", "border-gray-100", "dark:border-gray-700", "space-y-4"], [1, "text-base", "font-bold", "text-gray-900", "dark:text-white"], [1, "text-xs", "text-gray-500"], [1, "flex", "justify-end", "gap-3", "pt-2"], [1, "px-4", "py-2", "text-xs", "font-medium", "text-gray-600", "dark:text-gray-300", "hover:bg-gray-100", "dark:hover:bg-gray-700", "rounded-xl", 3, "click"], [1, "px-4", "py-2", "text-xs", "font-medium", "bg-rose-600", "hover:bg-rose-700", "text-white", "rounded-xl", "disabled:opacity-50", 3, "click", "disabled"]], template: function StaffComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(7, StaffComponent_button_7_Template, 4, 1, "button", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 5)(9, "div", 6)(10, "div", 7);
      \u0275\u0275element(11, "input", 8);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(12, "svg", 9);
      \u0275\u0275element(13, "path", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(14, "div", 11);
      \u0275\u0275conditionalCreate(15, StaffComponent_Conditional_15_Template, 7, 1, "select", 12)(16, StaffComponent_Conditional_16_Template, 16, 2);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 13)(18, "table", 14)(19, "thead", 15)(20, "tr")(21, "th", 16);
      \u0275\u0275text(22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "th", 16);
      \u0275\u0275text(24, "H\u1ECD v\xE0 t\xEAn");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "th", 16);
      \u0275\u0275text(26, "V\u1ECB tr\xED");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "th", 16);
      \u0275\u0275text(28, "Ph\xF2ng ban");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "th", 16);
      \u0275\u0275text(30, "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "th", 16);
      \u0275\u0275text(32, "H\u1EE3p \u0111\u1ED3ng");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "th", 16);
      \u0275\u0275text(34, "Tr\u1EA1ng th\xE1i");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(35, StaffComponent_Conditional_35_Template, 1, 2, "th", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "tbody", 18);
      \u0275\u0275conditionalCreate(37, StaffComponent_Conditional_37_Template, 8, 1, "tr")(38, StaffComponent_Conditional_38_Template, 3, 2, "tr")(39, StaffComponent_Conditional_39_Template, 2, 0);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(40, "div", 19)(41, "div");
      \u0275\u0275text(42, "Hi\u1EC3n th\u1ECB t\u1EEB ");
      \u0275\u0275elementStart(43, "span", 20);
      \u0275\u0275text(44);
      \u0275\u0275elementEnd();
      \u0275\u0275text(45, " \u0111\u1EBFn ");
      \u0275\u0275elementStart(46, "span", 20);
      \u0275\u0275text(47);
      \u0275\u0275elementEnd();
      \u0275\u0275text(48, " trong t\u1ED5ng s\u1ED1 ");
      \u0275\u0275elementStart(49, "span", 20);
      \u0275\u0275text(50);
      \u0275\u0275elementEnd();
      \u0275\u0275text(51, " m\u1EE5c");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "div", 21)(53, "button", 22);
      \u0275\u0275listener("click", function StaffComponent_Template_button_click_53_listener() {
        return ctx.changePage(ctx.currentPage() - 1);
      });
      \u0275\u0275text(54, "Tr\u01B0\u1EDBc");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "span", 23);
      \u0275\u0275text(56);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "button", 22);
      \u0275\u0275listener("click", function StaffComponent_Template_button_click_57_listener() {
        return ctx.changePage(ctx.currentPage() + 1);
      });
      \u0275\u0275text(58, "Sau");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(59, StaffComponent_Conditional_59_Template, 76, 3, "div", 24);
      \u0275\u0275conditionalCreate(60, StaffComponent_Conditional_60_Template, 11, 1, "div", 24);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.isAcademic() ? "Qu\u1EA3n l\xFD Gi\u1EA3ng vi\xEAn" : "Qu\u1EA3n l\xFD Nh\xE2n s\u1EF1 & Gi\u1EA3ng vi\xEAn");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.isAcademic() ? "Danh s\xE1ch gi\u1EA3ng vi\xEAn gi\u1EA3ng d\u1EA1y t\u1EA1i trung t\xE2m" : "Danh s\xE1ch nh\xE2n s\u1EF1 thu\u1ED9c trung t\xE2m (Gi\xE1o vi\xEAn, Tr\u1EE3 gi\u1EA3ng, T\u01B0 v\u1EA5n vi\xEAn, Qu\u1EA3n l\xFD)");
      \u0275\u0275advance();
      \u0275\u0275property("hasPermission", "STAFF_CREATE");
      \u0275\u0275advance(4);
      \u0275\u0275property("formControl", ctx.searchControl)("placeholder", ctx.isAcademic() ? "T\xECm t\xEAn, m\xE3 gi\u1EA3ng vi\xEAn..." : "T\xECm t\xEAn, m\xE3 nh\xE2n s\u1EF1...");
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.isAcademic() ? 15 : 16);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.isAcademic() ? "M\xE3 gi\u1EA3ng vi\xEAn" : "M\xE3 nh\xE2n s\u1EF1");
      \u0275\u0275advance(13);
      \u0275\u0275conditional(!ctx.isReadOnly() ? 35 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isLoading() ? 37 : ctx.staffs().length === 0 ? 38 : 39);
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
      \u0275\u0275conditional(ctx.isModalOpen() ? 59 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isDeleteModalOpen() && !ctx.isReadOnly() ? 60 : -1);
    }
  }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormControlDirective, FormGroupDirective, FormControlName, HasPermissionDirective], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StaffComponent, [{
    type: Component,
    args: [{ selector: "app-staff", imports: [CommonModule, ReactiveFormsModule, HasPermissionDirective], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="p-6 space-y-6">\r
  <!-- Header section -->\r
  <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">\r
    <div>\r
      <h1 class="text-2xl font-bold text-gray-900 dark:text-white">{{ isAcademic() ? 'Qu\u1EA3n l\xFD Gi\u1EA3ng vi\xEAn' : 'Qu\u1EA3n l\xFD Nh\xE2n s\u1EF1 & Gi\u1EA3ng vi\xEAn' }}</h1>\r
      <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">{{ isAcademic() ? 'Danh s\xE1ch gi\u1EA3ng vi\xEAn gi\u1EA3ng d\u1EA1y t\u1EA1i trung t\xE2m' : 'Danh s\xE1ch nh\xE2n s\u1EF1 thu\u1ED9c trung t\xE2m (Gi\xE1o vi\xEAn, Tr\u1EE3 gi\u1EA3ng, T\u01B0 v\u1EA5n vi\xEAn, Qu\u1EA3n l\xFD)' }}</p>\r
    </div>\r
    <button *hasPermission="'STAFF_CREATE'" (click)="openModal()" class="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-xl transition-colors shadow-sm shadow-blue-500/10">\r
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>\r
      </svg>\r
      {{ isAcademic() ? 'Th\xEAm gi\u1EA3ng vi\xEAn m\u1EDBi' : 'Th\xEAm nh\xE2n s\u1EF1 m\u1EDBi' }}\r
    </button>\r
  </div>\r
\r
  <!-- Table Container -->\r
  <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">\r
    <!-- Search & Filter bar -->\r
    <div class="p-4 border-b border-gray-100 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/50 flex flex-col md:flex-row items-center justify-between gap-4">\r
      <div class="relative w-full md:w-64">\r
        <input [formControl]="searchControl" type="text" [placeholder]="isAcademic() ? 'T\xECm t\xEAn, m\xE3 gi\u1EA3ng vi\xEAn...' : 'T\xECm t\xEAn, m\xE3 nh\xE2n s\u1EF1...'" class="w-full pl-10 pr-4 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500">\r
        <svg class="w-4 h-4 text-gray-400 absolute left-3 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>\r
        </svg>\r
      </div>\r
\r
      <div class="flex flex-wrap items-center gap-3 w-full md:w-auto">\r
        @if (isAcademic()) {\r
          <select [formControl]="typeFilterControl" class="px-3 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500">\r
            <option value="">T\u1EA5t c\u1EA3 lo\u1EA1i gi\xE1o vi\xEAn</option>\r
            <option value="TEACHER">Gi\xE1o vi\xEAn (TEACHER)</option>\r
            <option value="TEACHING_ASSISTANT">Tr\u1EE3 gi\u1EA3ng (ASSISTANT)</option>\r
          </select>\r
        } @else {\r
          <select [formControl]="typeFilterControl" class="px-3 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500">\r
            <option value="">T\u1EA5t c\u1EA3 v\u1ECB tr\xED (Staff Type)</option>\r
            <option value="TEACHER">Gi\xE1o vi\xEAn (TEACHER)</option>\r
            <option value="TEACHING_ASSISTANT">Tr\u1EE3 gi\u1EA3ng (ASSISTANT)</option>\r
            <option value="CONSULTANT">T\u01B0 v\u1EA5n vi\xEAn (CONSULTANT)</option>\r
            <option value="MANAGER">Qu\u1EA3n l\xFD (MANAGER)</option>\r
          </select>\r
\r
          <select [formControl]="deptFilterControl" class="px-3 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500">\r
            <option value="">T\u1EA5t c\u1EA3 ph\xF2ng ban</option>\r
            @for (d of departments(); track d.id) {\r
              <option [value]="d.id">{{ d.name }}</option>\r
            }\r
          </select>\r
        }\r
      </div>\r
    </div>\r
\r
    <!-- Table content -->\r
    <div class="overflow-x-auto">\r
      <table class="w-full text-sm text-left text-gray-600 dark:text-gray-300">\r
        <thead class="text-xs uppercase bg-gray-50 dark:bg-gray-900/50 text-gray-500 dark:text-gray-400 border-b border-gray-100 dark:border-gray-700">\r
          <tr>\r
            <th class="px-6 py-3.5 font-semibold">{{ isAcademic() ? 'M\xE3 gi\u1EA3ng vi\xEAn' : 'M\xE3 nh\xE2n s\u1EF1' }}</th>\r
            <th class="px-6 py-3.5 font-semibold">H\u1ECD v\xE0 t\xEAn</th>\r
            <th class="px-6 py-3.5 font-semibold">V\u1ECB tr\xED</th>\r
            <th class="px-6 py-3.5 font-semibold">Ph\xF2ng ban</th>\r
            <th class="px-6 py-3.5 font-semibold">S\u1ED1 \u0111i\u1EC7n tho\u1EA1i</th>\r
            <th class="px-6 py-3.5 font-semibold">H\u1EE3p \u0111\u1ED3ng</th>\r
            <th class="px-6 py-3.5 font-semibold">Tr\u1EA1ng th\xE1i</th>\r
            @if (!isReadOnly()) {\r
              <th *hasAnyPermission="['STAFF_UPDATE', 'STAFF_DELETE']" class="px-6 py-3.5 font-semibold text-right">Thao t\xE1c</th>\r
            }\r
          </tr>\r
        </thead>\r
        <tbody class="divide-y divide-gray-100 dark:divide-gray-700">\r
          @if (isLoading()) {\r
            <tr>\r
              <td [attr.colspan]="isReadOnly() ? 7 : 8" class="px-6 py-8 text-center text-gray-400">\r
                <div class="inline-flex items-center gap-2">\r
                  <svg class="animate-spin h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24">\r
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>\r
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>\r
                  </svg>\r
                  <span>\u0110ang t\u1EA3i d\u1EEF li\u1EC7u...</span>\r
                </div>\r
              </td>\r
            </tr>\r
          } @else if (staffs().length === 0) {\r
            <tr>\r
              <td [attr.colspan]="isReadOnly() ? 7 : 8" class="px-6 py-8 text-center text-gray-400">{{ isAcademic() ? 'Ch\u01B0a c\xF3 gi\u1EA3ng vi\xEAn n\xE0o.' : 'Ch\u01B0a c\xF3 nh\xE2n s\u1EF1 n\xE0o.' }}</td>\r
            </tr>\r
          } @else {\r
            @for (staff of staffs(); track staff.id) {\r
              <tr class="hover:bg-gray-50/50 dark:hover:bg-gray-700/50 transition-colors">\r
                <td class="px-6 py-4 font-mono font-medium text-blue-600 dark:text-blue-400">{{ staff.staffCode }}</td>\r
                <td class="px-6 py-4 font-medium text-gray-900 dark:text-white">\r
                  <div>{{ staff.fullName }}</div>\r
                  @if (staff.userEmail) {\r
                    <div class="text-xs text-gray-400 font-normal">{{ staff.userEmail }}</div>\r
                  }\r
                </td>\r
                <td class="px-6 py-4">\r
                  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-50 text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-400 border border-indigo-200">\r
                    {{ staffTypeLabels[staff.staffType] || staff.staffType }}\r
                  </span>\r
                </td>\r
                <td class="px-6 py-4 text-gray-600 dark:text-gray-300">{{ staff.departmentName || '\u2014' }}</td>\r
                <td class="px-6 py-4 font-mono">{{ staff.phone || '\u2014' }}</td>\r
                <td class="px-6 py-4 text-xs">{{ contractTypeLabels[staff.contractType || 'FULLTIME'] }}</td>\r
                <td class="px-6 py-4">\r
                  @if (staff.status === 'ACTIVE') {\r
                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 border border-emerald-200">\u0110ang l\xE0m vi\u1EC7c</span>\r
                  } @else {\r
                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300">\u0110\xE3 ngh\u1EC9</span>\r
                  }\r
                </td>\r
                <td *hasAnyPermission="['STAFF_UPDATE', 'STAFF_DELETE']" class="px-6 py-4 text-right space-x-2">\r
                  <button *hasPermission="'STAFF_UPDATE'" (click)="openModal(staff)" class="px-3 py-1.5 text-xs font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-lg transition-colors">S\u1EEDa</button>\r
                  <button *hasPermission="'STAFF_DELETE'" (click)="onDelete(staff.id)" class="px-3 py-1.5 text-xs font-medium text-rose-600 hover:text-rose-700 hover:bg-rose-50 dark:hover:bg-rose-900/30 rounded-lg transition-colors">X\xF3a</button>\r
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
          <h3 class="text-lg font-bold text-gray-900 dark:text-white">{{ isEditing() ? 'Ch\u1EC9nh s\u1EEDa h\u1ED3 s\u01A1 nh\xE2n s\u1EF1' : 'Th\xEAm nh\xE2n s\u1EF1 m\u1EDBi' }}</h3>\r
          <button (click)="closeModal()" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">\r
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>\r
          </button>\r
        </div>\r
\r
        <form [formGroup]="staffForm" (ngSubmit)="onSubmit()" class="space-y-4">\r
          <div class="grid grid-cols-2 gap-4">\r
            <div>\r
              <label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">M\xE3 nh\xE2n s\u1EF1 (Code) *</label>\r
              <input formControlName="staffCode" type="text" placeholder="VD: NV001, GV-01" class="w-full px-3 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 uppercase">\r
            </div>\r
            <div>\r
              <label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">Lo\u1EA1i nh\xE2n s\u1EF1 *</label>\r
              <select formControlName="staffType" class="w-full px-3 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:ring-2 focus:ring-blue-500">\r
                <option value="TEACHER">TEACHER (Gi\xE1o vi\xEAn)</option>\r
                <option value="TEACHING_ASSISTANT">TEACHING_ASSISTANT (Tr\u1EE3 gi\u1EA3ng)</option>\r
                <option value="CONSULTANT">CONSULTANT (T\u01B0 v\u1EA5n vi\xEAn)</option>\r
                <option value="MANAGER">MANAGER (Qu\u1EA3n l\xFD)</option>\r
              </select>\r
            </div>\r
          </div>\r
\r
          <div>\r
            <label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">H\u1ECD v\xE0 t\xEAn *</label>\r
            <input formControlName="fullName" type="text" placeholder="VD: Nguy\u1EC5n V\u0103n Anh" class="w-full px-3 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:ring-2 focus:ring-blue-500">\r
          </div>\r
\r
          <div class="grid grid-cols-2 gap-4">\r
            <div>\r
              <label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">Ph\xF2ng ban</label>\r
              <select formControlName="departmentId" class="w-full px-3 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:ring-2 focus:ring-blue-500">\r
                <option value="">-- Ch\u1ECDn ph\xF2ng ban --</option>\r
                @for (d of departments(); track d.id) {\r
                  <option [value]="d.id">{{ d.name }}</option>\r
                }\r
              </select>\r
            </div>\r
            <div>\r
              <label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">S\u1ED1 \u0111i\u1EC7n tho\u1EA1i</label>\r
              <input formControlName="phone" type="text" placeholder="VD: 0912345678" class="w-full px-3 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:ring-2 focus:ring-blue-500">\r
            </div>\r
          </div>\r
\r
          <div class="grid grid-cols-2 gap-4">\r
            <div>\r
              <label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">Lo\u1EA1i h\u1EE3p \u0111\u1ED3ng</label>\r
              <select formControlName="contractType" class="w-full px-3 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:ring-2 focus:ring-blue-500">\r
                <option value="FULLTIME">FULLTIME (To\xE0n th\u1EDDi gian)</option>\r
                <option value="PARTTIME">PARTTIME (B\xE1n th\u1EDDi gian)</option>\r
                <option value="VISITING">VISITING (Th\u1EC9nh gi\u1EA3ng)</option>\r
              </select>\r
            </div>\r
            <div>\r
              <label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">L\u01B0\u01A1ng c\u01A1 b\u1EA3n (VN\u0110)</label>\r
              <input formControlName="baseSalary" type="number" class="w-full px-3 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:ring-2 focus:ring-blue-500">\r
            </div>\r
          </div>\r
\r
          <div class="grid grid-cols-2 gap-4">\r
            <div>\r
              <label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">Ng\xE0y tuy\u1EC3n d\u1EE5ng</label>\r
              <input formControlName="hireDate" type="date" class="w-full px-3 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:ring-2 focus:ring-blue-500">\r
            </div>\r
            <div>\r
              <label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">Tr\u1EA1ng th\xE1i *</label>\r
              <select formControlName="status" class="w-full px-3 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:ring-2 focus:ring-blue-500">\r
                <option value="ACTIVE">ACTIVE (\u0110ang l\xE0m vi\u1EC7c)</option>\r
                <option value="INACTIVE">INACTIVE (\u0110\xE3 ngh\u1EC9 vi\u1EC7c)</option>\r
              </select>\r
            </div>\r
          </div>\r
\r
          <div class="flex justify-end gap-3 pt-4 border-t border-gray-100 dark:border-gray-700">\r
            <button type="button" (click)="closeModal()" class="px-4 py-2 text-xs font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl">H\u1EE7y</button>\r
            <button type="submit" [disabled]="staffForm.invalid || isLoading()" class="px-4 py-2 text-xs font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-xl disabled:opacity-50">L\u01B0u</button>\r
          </div>\r
        </form>\r
      </div>\r
    </div>\r
  }\r
\r
  <!-- Delete Confirmation Modal -->\r
  @if (isDeleteModalOpen() && !isReadOnly()) {\r
    <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">\r
      <div class="bg-white dark:bg-gray-800 rounded-2xl max-w-sm w-full p-6 shadow-xl border border-gray-100 dark:border-gray-700 space-y-4">\r
        <h3 class="text-base font-bold text-gray-900 dark:text-white">X\xE1c nh\u1EADn x\xF3a nh\xE2n s\u1EF1</h3>\r
        <p class="text-xs text-gray-500">B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a h\u1ED3 s\u01A1 nh\xE2n s\u1EF1 n\xE0y? Thao t\xE1c n\xE0y kh\xF4ng th\u1EC3 ho\xE0n t\xE1c.</p>\r
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StaffComponent, { className: "StaffComponent", filePath: "src/app/features/admin/pages/staff/staff.component.ts", lineNumber: 21 });
})();

// src/app/features/admin/pages/department/department.component.ts
var _c03 = () => ["DEPARTMENT_UPDATE", "DEPARTMENT_DELETE"];
var _forTrack03 = ($index, $item) => $item.id;
function DepartmentComponent_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function DepartmentComponent_button_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 29);
    \u0275\u0275element(2, "path", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Th\xEAm Ph\xF2ng ban ");
    \u0275\u0275elementEnd();
  }
}
function DepartmentComponent_th_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 31);
    \u0275\u0275text(1, "Thao t\xE1c");
    \u0275\u0275elementEnd();
  }
}
function DepartmentComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 32);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 33);
    \u0275\u0275element(3, "circle", 34)(4, "path", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " \u0110ang t\u1EA3i d\u1EEF li\u1EC7u... ");
    \u0275\u0275elementEnd()();
  }
}
function DepartmentComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 32);
    \u0275\u0275text(2, "Ch\u01B0a c\xF3 d\u1EEF li\u1EC7u ph\xF2ng ban n\xE0o.");
    \u0275\u0275elementEnd()();
  }
}
function DepartmentComponent_For_30_td_9_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 45);
    \u0275\u0275listener("click", function DepartmentComponent_For_30_td_9_button_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const dept_r4 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openModal(dept_r4));
    });
    \u0275\u0275text(1, "S\u1EEDa");
    \u0275\u0275elementEnd();
  }
}
function DepartmentComponent_For_30_td_9_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 46);
    \u0275\u0275listener("click", function DepartmentComponent_For_30_td_9_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const dept_r4 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDelete(dept_r4.id));
    });
    \u0275\u0275text(1, "X\xF3a");
    \u0275\u0275elementEnd();
  }
}
function DepartmentComponent_For_30_td_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 41)(1, "button", 42);
    \u0275\u0275listener("click", function DepartmentComponent_For_30_td_9_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const dept_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openTeacherListModal(dept_r4));
    });
    \u0275\u0275text(2, "DS Nh\xE2n s\u1EF1");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, DepartmentComponent_For_30_td_9_button_3_Template, 2, 0, "button", 43)(4, DepartmentComponent_For_30_td_9_button_4_Template, 2, 0, "button", 44);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275property("hasPermission", "DEPARTMENT_UPDATE");
    \u0275\u0275advance();
    \u0275\u0275property("hasPermission", "DEPARTMENT_DELETE");
  }
}
function DepartmentComponent_For_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 18)(1, "td", 36)(2, "span", 37);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 36)(5, "div", 38);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td", 39);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, DepartmentComponent_For_30_td_9_Template, 5, 2, "td", 40);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dept_r4 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(dept_r4.code);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(dept_r4.name);
    \u0275\u0275advance();
    \u0275\u0275property("title", dept_r4.description || "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", dept_r4.description || "---", " ");
    \u0275\u0275advance();
    \u0275\u0275property("hasAnyPermission", \u0275\u0275pureFunction0(5, _c03));
  }
}
function DepartmentComponent_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 47);
    \u0275\u0275listener("click", function DepartmentComponent_Conditional_50_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 48)(3, "div", 49)(4, "h3", 50);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 51);
    \u0275\u0275listener("click", function DepartmentComponent_Conditional_50_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 52);
    \u0275\u0275element(8, "path", 53);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "form", 54);
    \u0275\u0275listener("ngSubmit", function DepartmentComponent_Conditional_50_Template_form_ngSubmit_9_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(10, "div")(11, "label", 55);
    \u0275\u0275text(12, "M\xE3 ph\xF2ng ban *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div")(15, "label", 55);
    \u0275\u0275text(16, "T\xEAn Ph\xF2ng ban *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "input", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div")(19, "label", 55);
    \u0275\u0275text(20, "M\xF4 t\u1EA3 chi ti\u1EBFt");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "textarea", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 59)(23, "button", 60);
    \u0275\u0275listener("click", function DepartmentComponent_Conditional_50_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275text(24, "H\u1EE7y b\u1ECF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 61);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.isEditing() ? "C\u1EADp nh\u1EADt Ph\xF2ng ban" : "Th\xEAm Ph\xF2ng ban M\u1EDBi");
    \u0275\u0275advance(4);
    \u0275\u0275property("formGroup", ctx_r1.departmentForm);
    \u0275\u0275advance(16);
    \u0275\u0275property("disabled", ctx_r1.departmentForm.invalid || ctx_r1.isLoading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isEditing() ? "L\u01B0u c\u1EADp nh\u1EADt" : "T\u1EA1o ph\xF2ng ban", " ");
  }
}
function DepartmentComponent_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 47);
    \u0275\u0275listener("click", function DepartmentComponent_Conditional_51_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDeleteModal());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 62)(3, "div", 63);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 64);
    \u0275\u0275element(5, "path", 65);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "h3", 50);
    \u0275\u0275text(7, "X\xF3a Ph\xF2ng ban?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 66);
    \u0275\u0275text(9, "Thao t\xE1c n\xE0y kh\xF4ng th\u1EC3 ho\xE0n t\xE1c n\u1EBFu ph\xF2ng ban kh\xF4ng c\xF2n nh\xE2n s\u1EF1 tr\u1EF1c thu\u1ED9c.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 67)(11, "button", 68);
    \u0275\u0275listener("click", function DepartmentComponent_Conditional_51_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDeleteModal());
    });
    \u0275\u0275text(12, "H\u1EE7y");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 69);
    \u0275\u0275listener("click", function DepartmentComponent_Conditional_51_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmDelete());
    });
    \u0275\u0275text(14, "\u0110\u1ED3ng \xFD x\xF3a");
    \u0275\u0275elementEnd()()()();
  }
}
function DepartmentComponent_Conditional_52_For_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 79);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r10 = ctx.$implicit;
    \u0275\u0275property("value", t_r10.staffCode);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("H\u1ECD t\xEAn: ", t_r10.fullName);
  }
}
function DepartmentComponent_Conditional_52_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 32);
    \u0275\u0275text(2, "\u0110ang t\u1EA3i danh s\xE1ch...");
    \u0275\u0275elementEnd()();
  }
}
function DepartmentComponent_Conditional_52_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 84);
    \u0275\u0275text(2, "Ch\u01B0a c\xF3 nh\xE2n s\u1EF1 n\xE0o tr\u1EF1c thu\u1ED9c.");
    \u0275\u0275elementEnd()();
  }
}
function DepartmentComponent_Conditional_52_For_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 83)(1, "td", 85);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 86);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 87);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 88)(8, "button", 89);
    \u0275\u0275listener("click", function DepartmentComponent_Conditional_52_For_40_Template_button_click_8_listener() {
      const gv_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openUnassignModal(gv_r12));
    });
    \u0275\u0275text(9, " G\u1EE1 kh\u1ECFi ph\xF2ng ban ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const gv_r12 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(gv_r12.staffCode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(gv_r12.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(gv_r12.staffType);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isAssigning());
  }
}
function DepartmentComponent_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 47);
    \u0275\u0275listener("click", function DepartmentComponent_Conditional_52_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeTeacherListModal());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 70)(3, "div", 71)(4, "div")(5, "h3", 50);
    \u0275\u0275text(6, "Danh s\xE1ch Nh\xE2n s\u1EF1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 3);
    \u0275\u0275text(8, "Tr\u1EF1c thu\u1ED9c: ");
    \u0275\u0275elementStart(9, "strong", 72);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "button", 73);
    \u0275\u0275listener("click", function DepartmentComponent_Conditional_52_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeTeacherListModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(12, "svg", 52);
    \u0275\u0275element(13, "path", 53);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(14, "div", 74)(15, "div", 75)(16, "label", 76);
    \u0275\u0275text(17, "G\xF5 M\xE3 nh\xE2n s\u1EF1 ho\u1EB7c Ch\u1ECDn t\u1EEB danh s\xE1ch *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "input", 77);
    \u0275\u0275elementStart(19, "datalist", 78);
    \u0275\u0275repeaterCreate(20, DepartmentComponent_Conditional_52_For_21_Template, 2, 2, "option", 79, _forTrack03);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "button", 80);
    \u0275\u0275listener("click", function DepartmentComponent_Conditional_52_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.assignTeacher());
    });
    \u0275\u0275text(23, " Th\xEAm v\xE0o ph\xF2ng ban ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 81)(25, "table", 13)(26, "thead", 82)(27, "tr")(28, "th", 15);
    \u0275\u0275text(29, "M\xE3 NS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "th", 15);
    \u0275\u0275text(31, "H\u1ECD v\xE0 T\xEAn");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "th", 15);
    \u0275\u0275text(33, "Lo\u1EA1i nh\xE2n s\u1EF1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "th", 31);
    \u0275\u0275text(35, "Thao t\xE1c");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "tbody", 17);
    \u0275\u0275conditionalCreate(37, DepartmentComponent_Conditional_52_Conditional_37_Template, 3, 0, "tr");
    \u0275\u0275conditionalCreate(38, DepartmentComponent_Conditional_52_Conditional_38_Template, 3, 0, "tr");
    \u0275\u0275repeaterCreate(39, DepartmentComponent_Conditional_52_For_40_Template, 10, 4, "tr", 83, _forTrack03);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.selectedDepartmentName());
    \u0275\u0275advance(8);
    \u0275\u0275property("formControl", ctx_r1.selectedTeacherToAssign);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.availableTeachers());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r1.selectedTeacherToAssign.value || ctx_r1.isAssigning() || ctx_r1.isLoadingTeachers());
    \u0275\u0275advance(15);
    \u0275\u0275conditional(ctx_r1.isLoadingTeachers() && ctx_r1.departmentTeachers().length === 0 ? 37 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.isLoadingTeachers() && ctx_r1.departmentTeachers().length === 0 ? 38 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.departmentTeachers());
  }
}
function DepartmentComponent_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 47);
    \u0275\u0275listener("click", function DepartmentComponent_Conditional_53_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeUnassignModal());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 62)(3, "h3", 50);
    \u0275\u0275text(4, "G\u1EE1 kh\u1ECFi ph\xF2ng ban?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 90);
    \u0275\u0275text(6, " B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n g\u1EE1 ");
    \u0275\u0275elementStart(7, "strong", 91);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, " kh\u1ECFi t\u1ED5 n\xE0y? ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 67)(11, "button", 92);
    \u0275\u0275listener("click", function DepartmentComponent_Conditional_53_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeUnassignModal());
    });
    \u0275\u0275text(12, "H\u1EE7y b\u1ECF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 93);
    \u0275\u0275listener("click", function DepartmentComponent_Conditional_53_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmUnassignTeacher());
    });
    \u0275\u0275text(14, " \u0110\u1ED3ng \xFD g\u1EE1 ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate((tmp_1_0 = ctx_r1.teacherToUnassign()) == null ? null : tmp_1_0.fullName);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r1.isAssigning());
  }
}
var DepartmentComponent = class _DepartmentComponent {
  departmentService = inject(DepartmentService);
  toastService = inject(ToastService);
  fb = inject(FormBuilder);
  destroyRef = inject(DestroyRef);
  staffService = inject(StaffService);
  departments = signal([], ...ngDevMode ? [{ debugName: "departments" }] : (
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
  departmentForm;
  isDeleteModalOpen = signal(false, ...ngDevMode ? [{ debugName: "isDeleteModalOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  idToDelete = signal(null, ...ngDevMode ? [{ debugName: "idToDelete" }] : (
    /* istanbul ignore next */
    []
  ));
  isTeacherListModalOpen = signal(false, ...ngDevMode ? [{ debugName: "isTeacherListModalOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  departmentTeachers = signal([], ...ngDevMode ? [{ debugName: "departmentTeachers" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedDepartmentName = signal("", ...ngDevMode ? [{ debugName: "selectedDepartmentName" }] : (
    /* istanbul ignore next */
    []
  ));
  isLoadingTeachers = signal(false, ...ngDevMode ? [{ debugName: "isLoadingTeachers" }] : (
    /* istanbul ignore next */
    []
  ));
  currentDepartmentId = signal(null, ...ngDevMode ? [{ debugName: "currentDepartmentId" }] : (
    /* istanbul ignore next */
    []
  ));
  availableTeachers = signal([], ...ngDevMode ? [{ debugName: "availableTeachers" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedTeacherToAssign = new FormControl("");
  isAssigning = signal(false, ...ngDevMode ? [{ debugName: "isAssigning" }] : (
    /* istanbul ignore next */
    []
  ));
  isUnassignModalOpen = signal(false, ...ngDevMode ? [{ debugName: "isUnassignModalOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  teacherToUnassign = signal(null, ...ngDevMode ? [{ debugName: "teacherToUnassign" }] : (
    /* istanbul ignore next */
    []
  ));
  ngOnInit() {
    this.initForm();
    this.setupFilters();
    this.loadData();
  }
  initForm() {
    this.departmentForm = this.fb.group({
      code: ["", [Validators.required, Validators.maxLength(50)]],
      name: ["", [Validators.required, Validators.maxLength(100)]],
      description: [""]
    });
  }
  setupFilters() {
    this.searchControl.valueChanges.pipe(debounceTime(400), distinctUntilChanged(), takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.currentPage.set(1);
      this.loadData();
    });
  }
  loadData() {
    this.isLoading.set(true);
    const keyword = this.searchControl.value || void 0;
    this.departmentService.getAll(keyword, this.currentPage() - 1, this.pageSize()).subscribe({
      next: (res) => {
        this.departments.set(res.content);
        this.totalElements.set(res.totalElements);
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
  openModal(dept) {
    if (dept) {
      this.isEditing.set(true);
      this.currentId.set(dept.id);
      this.departmentForm.patchValue({
        code: dept.code,
        name: dept.name,
        description: dept.description
      });
    } else {
      this.isEditing.set(false);
      this.currentId.set(null);
      this.departmentForm.reset();
    }
    this.isModalOpen.set(true);
  }
  closeModal() {
    this.isModalOpen.set(false);
    this.currentId.set(null);
  }
  onSubmit() {
    if (this.departmentForm.invalid)
      return;
    this.isLoading.set(true);
    const data = this.departmentForm.value;
    data.code = data.code.toUpperCase().trim();
    if (this.isEditing() && this.currentId() != null) {
      this.departmentService.update(this.currentId(), data).subscribe({
        next: () => {
          this.loadData();
          this.closeModal();
          this.toastService.success("Th\xE0nh c\xF4ng", "\u0110\xE3 c\u1EADp nh\u1EADt ph\xF2ng ban!");
        },
        error: (err) => {
          this.isLoading.set(false);
          this.toastService.error("L\u1ED7i", err.error?.message || "C\u1EADp nh\u1EADt th\u1EA5t b\u1EA1i");
        }
      });
    } else {
      this.departmentService.create(data).subscribe({
        next: () => {
          this.loadData();
          this.closeModal();
          this.toastService.success("Th\xE0nh c\xF4ng", "\u0110\xE3 th\xEAm ph\xF2ng ban m\u1EDBi!");
        },
        error: (err) => {
          this.isLoading.set(false);
          this.toastService.error("L\u1ED7i", err.error?.message || "Th\xEAm th\u1EA5t b\u1EA1i");
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
      this.departmentService.delete(id).subscribe({
        next: () => {
          this.loadData();
          this.closeDeleteModal();
          this.toastService.success("Th\xE0nh c\xF4ng", "\u0110\xE3 x\xF3a ph\xF2ng ban!");
        },
        error: (err) => {
          this.isLoading.set(false);
          this.closeDeleteModal();
          this.toastService.error("L\u1ED7i", err.error?.message || "Kh\xF4ng th\u1EC3 x\xF3a ph\xF2ng ban n\xE0y!");
        }
      });
    }
  }
  openTeacherListModal(dept) {
    this.selectedDepartmentName.set(dept.name);
    this.currentDepartmentId.set(dept.id);
    this.isTeacherListModalOpen.set(true);
    this.loadModalData();
  }
  loadModalData() {
    const deptId = this.currentDepartmentId();
    if (deptId == null)
      return;
    this.isLoadingTeachers.set(true);
    this.selectedTeacherToAssign.reset("");
    this.staffService.getByDepartment(deptId, 0, 100).subscribe({
      next: (resAssigned) => {
        this.departmentTeachers.set(resAssigned.content || []);
        this.staffService.getAll(void 0, 0, 1e3).subscribe({
          next: (resAll) => {
            const assignedIds = resAssigned.content.map((t) => t.id);
            const available = resAll.content.filter((t) => !assignedIds.includes(t.id));
            this.availableTeachers.set(available);
            this.isLoadingTeachers.set(false);
          },
          error: () => this.isLoadingTeachers.set(false)
        });
      },
      error: () => {
        this.isLoadingTeachers.set(false);
        this.toastService.error("L\u1ED7i", "Kh\xF4ng th\u1EC3 t\u1EA3i danh s\xE1ch nh\xE2n s\u1EF1!");
      }
    });
  }
  closeTeacherListModal() {
    this.isTeacherListModalOpen.set(false);
    this.currentDepartmentId.set(null);
  }
  assignTeacher() {
    const inputValue = this.selectedTeacherToAssign.value?.trim().toLowerCase();
    const deptId = this.currentDepartmentId();
    if (!inputValue || deptId == null)
      return;
    const teacher = this.availableTeachers().find((t) => (t.staffCode || "").toLowerCase() === inputValue || String(t.id) === inputValue);
    if (!teacher) {
      this.toastService.warning("Kh\xF4ng t\xECm th\u1EA5y", "M\xE3 nh\xE2n s\u1EF1 kh\xF4ng ch\xEDnh x\xE1c ho\u1EB7c nh\xE2n s\u1EF1 n\xE0y \u0111\xE3 thu\u1ED9c ph\xF2ng ban kh\xE1c!");
      return;
    }
    this.isAssigning.set(true);
    const updatedData = __spreadProps(__spreadValues({}, teacher), { departmentId: Number(deptId) });
    this.staffService.update(teacher.id, updatedData).subscribe({
      next: () => {
        this.toastService.success("Th\xE0nh c\xF4ng", `\u0110\xE3 th\xEAm ${teacher.fullName} v\xE0o ph\xF2ng ban!`);
        this.isAssigning.set(false);
        this.selectedTeacherToAssign.reset("");
        this.loadModalData();
      },
      error: (err) => {
        this.isAssigning.set(false);
        this.toastService.error("L\u1ED7i", err.error?.message || "Kh\xF4ng th\u1EC3 th\xEAm nh\xE2n s\u1EF1!");
      }
    });
  }
  openUnassignModal(teacher) {
    this.teacherToUnassign.set(teacher);
    this.isUnassignModalOpen.set(true);
  }
  closeUnassignModal() {
    this.isUnassignModalOpen.set(false);
    this.teacherToUnassign.set(null);
  }
  confirmUnassignTeacher() {
    const teacher = this.teacherToUnassign();
    if (!teacher)
      return;
    this.isAssigning.set(true);
    const updatedData = __spreadProps(__spreadValues({}, teacher), { departmentId: void 0 });
    this.staffService.update(teacher.id, updatedData).subscribe({
      next: () => {
        this.toastService.success("\u0110\xE3 g\u1EE1", `Nh\xE2n s\u1EF1 ${teacher.fullName} \u0111\xE3 r\u1EDDi ph\xF2ng ban.`);
        this.isAssigning.set(false);
        this.closeUnassignModal();
        this.loadModalData();
      },
      error: (err) => {
        this.isAssigning.set(false);
        this.toastService.error("L\u1ED7i", err.error?.message || "Kh\xF4ng th\u1EC3 g\u1EE1 nh\xE2n s\u1EF1!");
      }
    });
  }
  static \u0275fac = function DepartmentComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DepartmentComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DepartmentComponent, selectors: [["app-department"]], decls: 54, vars: 17, consts: [[1, "space-y-6"], [1, "flex", "flex-col", "xl:flex-row", "xl:justify-between", "xl:items-end", "pb-4", "border-b", "border-gray-100", "gap-4"], [1, "text-2xl", "font-extrabold", "text-gray-900", "tracking-tight"], [1, "text-sm", "text-gray-500", "mt-1"], [1, "flex", "flex-wrap", "items-center", "gap-3"], [1, "relative"], [1, "absolute", "inset-y-0", "left-0", "flex", "items-center", "pl-3", "pointer-events-none"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-gray-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], ["type", "text", "placeholder", "T\xECm m\xE3 ho\u1EB7c t\xEAn...", 1, "bg-white", "border", "border-gray-200", "text-gray-900", "text-sm", "rounded-xl", "focus:ring-2", "focus:ring-blue-100", "focus:border-blue-500", "block", "w-48", "xl:w-64", "pl-10", "p-2.5", "outline-none", "transition", "shadow-sm", 3, "formControl"], ["class", "bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-5 rounded-xl flex items-center transition shadow-md hover:shadow-lg text-sm shrink-0", 3, "click", 4, "hasPermission"], [1, "bg-white", "rounded-2xl", "shadow-sm", "border", "border-gray-100", "overflow-hidden"], [1, "overflow-x-auto"], [1, "w-full", "text-sm", "text-left", "text-gray-500"], [1, "text-xs", "text-gray-500", "uppercase", "bg-gray-50/80", "border-b", "border-gray-100", "font-semibold"], ["scope", "col", 1, "px-6", "py-4"], ["scope", "col", "class", "px-6 py-4 text-right", 4, "hasAnyPermission"], [1, "divide-y", "divide-gray-50"], [1, "bg-white", "hover:bg-blue-50/50", "transition", "duration-200"], [1, "flex", "items-center", "justify-between", "px-6", "py-4", "bg-gray-50/80", "border-t", "border-gray-100", "rounded-b-2xl"], [1, "text-sm", "text-gray-500"], [1, "font-semibold", "text-gray-900"], [1, "flex", "space-x-2"], [1, "px-3", "py-1.5", "text-sm", "font-medium", "text-gray-700", "bg-white", "border", "border-gray-300", "rounded-lg", "hover:bg-gray-50", "disabled:opacity-50", "transition", "shadow-sm", 3, "click", "disabled"], [1, "flex", "items-center", "justify-center", "px-4", "py-1.5", "text-sm", "font-medium", "text-gray-700", "bg-gray-100", "rounded-lg", "border", "border-gray-200"], [1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "p-4"], [1, "fixed", "inset-0", "z-[60]", "flex", "items-center", "justify-center", "p-4"], [1, "fixed", "inset-0", "z-[70]", "flex", "items-center", "justify-center", "p-4"], [1, "bg-blue-600", "hover:bg-blue-700", "text-white", "font-semibold", "py-2.5", "px-5", "rounded-xl", "flex", "items-center", "transition", "shadow-md", "hover:shadow-lg", "text-sm", "shrink-0", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "mr-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 4v16m8-8H4"], ["scope", "col", 1, "px-6", "py-4", "text-right"], ["colspan", "4", 1, "px-6", "py-12", "text-center", "text-gray-500"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "mx-auto", "h-8", "w-8", "text-blue-500", "mb-3"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"], [1, "px-6", "py-4"], [1, "font-mono", "font-bold", "text-blue-700", "bg-blue-50", "px-2.5", "py-1", "rounded-lg", "border", "border-blue-100"], [1, "font-bold", "text-gray-900", "text-base"], [1, "px-6", "py-4", "text-gray-600", "max-w-xs", "truncate", 3, "title"], ["class", "px-6 py-4 text-right space-x-3", 4, "hasAnyPermission"], [1, "px-6", "py-4", "text-right", "space-x-3"], [1, "font-medium", "text-emerald-600", "hover:text-emerald-800", "transition", 3, "click"], ["class", "font-medium text-blue-600 hover:text-blue-800 transition", 3, "click", 4, "hasPermission"], ["class", "font-medium text-red-600 hover:text-red-800 transition", 3, "click", 4, "hasPermission"], [1, "font-medium", "text-blue-600", "hover:text-blue-800", "transition", 3, "click"], [1, "font-medium", "text-red-600", "hover:text-red-800", "transition", 3, "click"], [1, "absolute", "inset-0", "bg-gray-900/60", "backdrop-blur-sm", 3, "click"], [1, "relative", "bg-white", "rounded-3xl", "shadow-2xl", "w-full", "max-w-xl", "p-8", "border", "border-gray-100"], [1, "flex", "justify-between", "items-center", "mb-6", "border-b", "border-gray-100", "pb-4"], [1, "text-2xl", "font-extrabold", "text-gray-900"], [1, "text-gray-400", "hover:text-gray-900", "p-2", "rounded-full", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "space-y-5", 3, "ngSubmit", "formGroup"], [1, "block", "mb-1.5", "text-sm", "font-bold", "text-gray-700"], ["type", "text", "formControlName", "code", "placeholder", "VD: ACADEMIC, CONSULTING", 1, "bg-gray-50", "border", "border-gray-200", "text-gray-900", "font-mono", "text-sm", "rounded-xl", "focus:ring-2", "focus:ring-blue-500", "block", "w-full", "p-3", "outline-none", "uppercase"], ["type", "text", "formControlName", "name", "placeholder", "VD: T\u1ED5 Academic", 1, "bg-gray-50", "border", "border-gray-200", "text-gray-900", "text-sm", "rounded-xl", "focus:ring-2", "focus:ring-blue-500", "block", "w-full", "p-3", "outline-none"], ["formControlName", "description", "rows", "3", "placeholder", "Nh\u1EADp ghi ch\xFA ho\u1EB7c m\xF4 t\u1EA3...", 1, "bg-gray-50", "border", "border-gray-200", "text-gray-900", "text-sm", "rounded-xl", "focus:ring-2", "focus:ring-blue-500", "block", "w-full", "p-3", "outline-none", "resize-none"], [1, "flex", "justify-end", "space-x-3.5", "pt-4"], ["type", "button", 1, "px-5", "py-3", "text-sm", "font-semibold", "text-gray-700", "bg-white", "border", "border-gray-300", "rounded-xl", "hover:bg-gray-50", "shadow-sm", 3, "click"], ["type", "submit", 1, "px-5", "py-3", "text-sm", "font-semibold", "text-white", "bg-blue-600", "rounded-xl", "hover:bg-blue-700", "disabled:bg-blue-300", "shadow-md", 3, "disabled"], [1, "relative", "bg-white", "rounded-3xl", "shadow-2xl", "w-full", "max-w-md", "p-8", "border", "border-gray-100", "text-center"], [1, "mx-auto", "flex", "items-center", "justify-center", "h-20", "w-20", "rounded-full", "bg-red-100", "mb-6", "border-4", "border-white", "shadow-lg"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "h-10", "w-10", "text-red-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"], [1, "text-gray-600", "mt-3", "text-sm"], [1, "grid", "grid-cols-2", "gap-4", "mt-8", "pt-6", "border-t", "border-gray-100"], [1, "px-5", "py-3.5", "text-sm", "font-semibold", "text-gray-700", "bg-white", "border", "border-gray-300", "rounded-xl", "hover:bg-gray-50", "shadow-sm", 3, "click"], [1, "px-5", "py-3.5", "text-sm", "font-semibold", "text-white", "bg-red-600", "rounded-xl", "hover:bg-red-700", "shadow-md", 3, "click"], [1, "relative", "bg-white", "rounded-3xl", "shadow-2xl", "w-full", "max-w-4xl", "p-8", "border", "border-gray-100", "flex", "flex-col", "max-h-[90vh]"], [1, "flex", "justify-between", "items-center", "mb-6", "border-b", "border-gray-100", "pb-4", "shrink-0"], [1, "text-blue-600"], [1, "text-gray-400", "hover:text-gray-900", "p-2", "rounded-full", "bg-gray-50", "hover:bg-gray-100", "transition", 3, "click"], [1, "mb-5", "flex", "flex-col", "sm:flex-row", "items-end", "gap-3", "bg-blue-50/60", "p-4", "rounded-xl", "border", "border-blue-100", "shrink-0"], [1, "flex-1", "w-full", "relative"], [1, "block", "mb-1.5", "text-sm", "font-bold", "text-blue-900"], ["type", "text", "list", "available-teachers-list", "placeholder", "VD: NS26001", 1, "bg-white", "border", "border-blue-200", "text-gray-900", "text-sm", "rounded-xl", "focus:ring-2", "focus:ring-blue-400", "block", "w-full", "p-2.5", "outline-none", "font-medium", "shadow-sm", "transition", 3, "formControl"], ["id", "available-teachers-list"], [3, "value"], [1, "w-full", "sm:w-auto", "bg-blue-600", "hover:bg-blue-700", "text-white", "font-semibold", "py-2.5", "px-5", "rounded-xl", "transition", "shadow-md", "hover:shadow-lg", "disabled:opacity-50", "disabled:shadow-none", "flex", "items-center", "justify-center", "shrink-0", 3, "click", "disabled"], [1, "overflow-y-auto", "flex-1", "pr-2", "scrollbar-thin", "border", "border-gray-100", "rounded-xl", "relative"], [1, "text-xs", "text-gray-500", "uppercase", "bg-gray-50", "sticky", "top-0", "z-10", "shadow-sm", "border-b", "border-gray-100"], [1, "hover:bg-blue-50/50", "transition"], ["colspan", "4", 1, "px-6", "py-12", "text-center", "text-gray-500", "bg-gray-50/50"], [1, "px-6", "py-4", "font-mono", "text-gray-600"], [1, "px-6", "py-4", "font-bold", "text-gray-900"], [1, "px-6", "py-4", "text-gray-700"], [1, "px-6", "py-4", "text-right"], [1, "text-red-600", "hover:text-red-800", "font-semibold", "text-xs", "bg-red-50", "hover:bg-red-100", "px-3", "py-2", "rounded-lg", "transition", "disabled:opacity-50", 3, "click", "disabled"], [1, "text-gray-600", "mt-3", "text-sm", "leading-relaxed"], [1, "text-red-600"], [1, "px-5", "py-3.5", "text-sm", "font-semibold", "text-gray-700", "bg-white", "border", "border-gray-300", "rounded-xl", "hover:bg-gray-50", "transition", "shadow-sm", 3, "click"], [1, "px-5", "py-3.5", "text-sm", "font-semibold", "text-white", "bg-red-600", "rounded-xl", "hover:bg-red-700", "disabled:bg-red-300", "transition", "shadow-md", 3, "click", "disabled"]], template: function DepartmentComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "C\u01A1 c\u1EA5u T\u1ED5 ch\u1EE9c");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Qu\u1EA3n l\xFD c\xE1c ph\xF2ng ban / t\u1ED5 b\u1ED9 m\xF4n c\u1EE7a trung t\xE2m");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 4)(8, "div", 5)(9, "div", 6);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(10, "svg", 7);
      \u0275\u0275element(11, "path", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275element(12, "input", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275template(13, DepartmentComponent_button_13_Template, 4, 0, "button", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 11)(15, "div", 12)(16, "table", 13)(17, "thead", 14)(18, "tr")(19, "th", 15);
      \u0275\u0275text(20, "M\xE3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "th", 15);
      \u0275\u0275text(22, "T\xEAn Ph\xF2ng ban");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "th", 15);
      \u0275\u0275text(24, "M\xF4 t\u1EA3");
      \u0275\u0275elementEnd();
      \u0275\u0275template(25, DepartmentComponent_th_25_Template, 2, 0, "th", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "tbody", 17);
      \u0275\u0275conditionalCreate(27, DepartmentComponent_Conditional_27_Template, 6, 0, "tr");
      \u0275\u0275conditionalCreate(28, DepartmentComponent_Conditional_28_Template, 3, 0, "tr");
      \u0275\u0275repeaterCreate(29, DepartmentComponent_For_30_Template, 10, 6, "tr", 18, _forTrack03);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(31, "div", 19)(32, "div", 20);
      \u0275\u0275text(33, " Hi\u1EC3n th\u1ECB ");
      \u0275\u0275elementStart(34, "span", 21);
      \u0275\u0275text(35);
      \u0275\u0275elementEnd();
      \u0275\u0275text(36, " - ");
      \u0275\u0275elementStart(37, "span", 21);
      \u0275\u0275text(38);
      \u0275\u0275elementEnd();
      \u0275\u0275text(39, " trong s\u1ED1 ");
      \u0275\u0275elementStart(40, "span", 21);
      \u0275\u0275text(41);
      \u0275\u0275elementEnd();
      \u0275\u0275text(42, " k\u1EBFt qu\u1EA3 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "div", 22)(44, "button", 23);
      \u0275\u0275listener("click", function DepartmentComponent_Template_button_click_44_listener() {
        return ctx.changePage(ctx.currentPage() - 1);
      });
      \u0275\u0275text(45, " Tr\u01B0\u1EDBc ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "div", 24);
      \u0275\u0275text(47);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "button", 23);
      \u0275\u0275listener("click", function DepartmentComponent_Template_button_click_48_listener() {
        return ctx.changePage(ctx.currentPage() + 1);
      });
      \u0275\u0275text(49, " Sau ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275conditionalCreate(50, DepartmentComponent_Conditional_50_Template, 27, 4, "div", 25);
      \u0275\u0275conditionalCreate(51, DepartmentComponent_Conditional_51_Template, 15, 0, "div", 26);
      \u0275\u0275conditionalCreate(52, DepartmentComponent_Conditional_52_Template, 41, 5, "div", 26);
      \u0275\u0275conditionalCreate(53, DepartmentComponent_Conditional_53_Template, 15, 2, "div", 27);
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275property("formControl", ctx.searchControl);
      \u0275\u0275advance();
      \u0275\u0275property("hasPermission", "DEPARTMENT_CREATE");
      \u0275\u0275advance(12);
      \u0275\u0275property("hasAnyPermission", \u0275\u0275pureFunction0(16, _c03));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isLoading() && ctx.departments().length === 0 ? 27 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isLoading() && ctx.departments().length === 0 ? 28 : -1);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.departments());
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.startIndex());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.endIndex());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.totalElements());
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", ctx.currentPage() === 1);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2(" Trang ", ctx.currentPage(), " / ", ctx.totalPages() === 0 ? 1 : ctx.totalPages(), " ");
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.currentPage() === ctx.totalPages() || ctx.totalPages() === 0);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isModalOpen() ? 50 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isDeleteModalOpen() ? 51 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isTeacherListModalOpen() ? 52 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isUnassignModalOpen() ? 53 : -1);
    }
  }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormControlDirective, FormGroupDirective, FormControlName, HasPermissionDirective], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DepartmentComponent, [{
    type: Component,
    args: [{ selector: "app-department", imports: [CommonModule, ReactiveFormsModule, HasPermissionDirective], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="space-y-6">\r
  <div class="flex flex-col xl:flex-row xl:justify-between xl:items-end pb-4 border-b border-gray-100 gap-4">\r
    <div>\r
      <h1 class="text-2xl font-extrabold text-gray-900 tracking-tight">C\u01A1 c\u1EA5u T\u1ED5 ch\u1EE9c</h1>\r
      <p class="text-sm text-gray-500 mt-1">Qu\u1EA3n l\xFD c\xE1c ph\xF2ng ban / t\u1ED5 b\u1ED9 m\xF4n c\u1EE7a trung t\xE2m</p>\r
    </div>\r
\r
    <div class="flex flex-wrap items-center gap-3">\r
      <div class="relative">\r
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">\r
          <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>\r
        </div>\r
        <input type="text" [formControl]="searchControl" placeholder="T\xECm m\xE3 ho\u1EB7c t\xEAn..." class="bg-white border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-500 block w-48 xl:w-64 pl-10 p-2.5 outline-none transition shadow-sm">\r
      </div>\r
\r
      <button *hasPermission="'DEPARTMENT_CREATE'" (click)="openModal()" class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-5 rounded-xl flex items-center transition shadow-md hover:shadow-lg text-sm shrink-0">\r
        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>\r
        Th\xEAm Ph\xF2ng ban\r
      </button>\r
    </div>\r
  </div>\r
\r
  <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">\r
    <div class="overflow-x-auto">\r
      <table class="w-full text-sm text-left text-gray-500">\r
        <thead class="text-xs text-gray-500 uppercase bg-gray-50/80 border-b border-gray-100 font-semibold">\r
          <tr>\r
            <th scope="col" class="px-6 py-4">M\xE3</th>\r
            <th scope="col" class="px-6 py-4">T\xEAn Ph\xF2ng ban</th>\r
            <th scope="col" class="px-6 py-4">M\xF4 t\u1EA3</th>\r
            <th *hasAnyPermission="['DEPARTMENT_UPDATE', 'DEPARTMENT_DELETE']" scope="col" class="px-6 py-4 text-right">Thao t\xE1c</th>\r
          </tr>\r
        </thead>\r
        <tbody class="divide-y divide-gray-50">\r
          @if (isLoading() && departments().length === 0) {\r
            <tr>\r
              <td colspan="4" class="px-6 py-12 text-center text-gray-500">\r
                <svg class="animate-spin mx-auto h-8 w-8 text-blue-500 mb-3" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>\r
                \u0110ang t\u1EA3i d\u1EEF li\u1EC7u...\r
              </td>\r
            </tr>\r
          }\r
          @if (!isLoading() && departments().length === 0) {\r
            <tr>\r
              <td colspan="4" class="px-6 py-12 text-center text-gray-500">Ch\u01B0a c\xF3 d\u1EEF li\u1EC7u ph\xF2ng ban n\xE0o.</td>\r
            </tr>\r
          }\r
\r
          @for (dept of departments(); track dept.id) {\r
            <tr class="bg-white hover:bg-blue-50/50 transition duration-200">\r
              <td class="px-6 py-4">\r
                <span class="font-mono font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-100">{{ dept.code }}</span>\r
              </td>\r
              <td class="px-6 py-4">\r
                <div class="font-bold text-gray-900 text-base">{{ dept.name }}</div>\r
              </td>\r
              <td class="px-6 py-4 text-gray-600 max-w-xs truncate" [title]="dept.description || ''">\r
                {{ dept.description || '---' }}\r
              </td>\r
              <td *hasAnyPermission="['DEPARTMENT_UPDATE', 'DEPARTMENT_DELETE']" class="px-6 py-4 text-right space-x-3">\r
                <button (click)="openTeacherListModal(dept)" class="font-medium text-emerald-600 hover:text-emerald-800 transition">DS Nh\xE2n s\u1EF1</button>\r
                <button *hasPermission="'DEPARTMENT_UPDATE'" (click)="openModal(dept)" class="font-medium text-blue-600 hover:text-blue-800 transition">S\u1EEDa</button>\r
                <button *hasPermission="'DEPARTMENT_DELETE'" (click)="onDelete(dept.id)" class="font-medium text-red-600 hover:text-red-800 transition">X\xF3a</button>\r
              </td>\r
            </tr>\r
          }\r
        </tbody>\r
      </table>\r
    </div>\r
\r
    <div class="flex items-center justify-between px-6 py-4 bg-gray-50/80 border-t border-gray-100 rounded-b-2xl">\r
      <div class="text-sm text-gray-500">\r
        Hi\u1EC3n th\u1ECB <span class="font-semibold text-gray-900">{{ startIndex() }}</span> - <span class="font-semibold text-gray-900">{{ endIndex() }}</span>\r
        trong s\u1ED1 <span class="font-semibold text-gray-900">{{ totalElements() }}</span> k\u1EBFt qu\u1EA3\r
      </div>\r
      <div class="flex space-x-2">\r
        <button (click)="changePage(currentPage() - 1)" [disabled]="currentPage() === 1"\r
          class="px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 transition shadow-sm">\r
          Tr\u01B0\u1EDBc\r
        </button>\r
        <div class="flex items-center justify-center px-4 py-1.5 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg border border-gray-200">\r
          Trang {{ currentPage() }} / {{ totalPages() === 0 ? 1 : totalPages() }}\r
        </div>\r
        <button (click)="changePage(currentPage() + 1)" [disabled]="currentPage() === totalPages() || totalPages() === 0"\r
          class="px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 transition shadow-sm">\r
          Sau\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
@if (isModalOpen()) {\r
  <div class="fixed inset-0 z-50 flex items-center justify-center p-4">\r
    <div class="absolute inset-0 bg-gray-900/60 backdrop-blur-sm" (click)="closeModal()"></div>\r
    <div class="relative bg-white rounded-3xl shadow-2xl w-full max-w-xl p-8 border border-gray-100">\r
      <div class="flex justify-between items-center mb-6 border-b border-gray-100 pb-4">\r
        <h3 class="text-2xl font-extrabold text-gray-900">{{ isEditing() ? 'C\u1EADp nh\u1EADt Ph\xF2ng ban' : 'Th\xEAm Ph\xF2ng ban M\u1EDBi' }}</h3>\r
        <button (click)="closeModal()" class="text-gray-400 hover:text-gray-900 p-2 rounded-full"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button>\r
      </div>\r
\r
      <form [formGroup]="departmentForm" (ngSubmit)="onSubmit()" class="space-y-5">\r
        <div>\r
          <label class="block mb-1.5 text-sm font-bold text-gray-700">M\xE3 ph\xF2ng ban *</label>\r
          <input type="text" formControlName="code" placeholder="VD: ACADEMIC, CONSULTING" class="bg-gray-50 border border-gray-200 text-gray-900 font-mono text-sm rounded-xl focus:ring-2 focus:ring-blue-500 block w-full p-3 outline-none uppercase">\r
        </div>\r
\r
        <div>\r
          <label class="block mb-1.5 text-sm font-bold text-gray-700">T\xEAn Ph\xF2ng ban *</label>\r
          <input type="text" formControlName="name" placeholder="VD: T\u1ED5 Academic" class="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-2 focus:ring-blue-500 block w-full p-3 outline-none">\r
        </div>\r
\r
        <div>\r
          <label class="block mb-1.5 text-sm font-bold text-gray-700">M\xF4 t\u1EA3 chi ti\u1EBFt</label>\r
          <textarea formControlName="description" rows="3" placeholder="Nh\u1EADp ghi ch\xFA ho\u1EB7c m\xF4 t\u1EA3..." class="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-2 focus:ring-blue-500 block w-full p-3 outline-none resize-none"></textarea>\r
        </div>\r
\r
        <div class="flex justify-end space-x-3.5 pt-4">\r
          <button type="button" (click)="closeModal()" class="px-5 py-3 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 shadow-sm">H\u1EE7y b\u1ECF</button>\r
          <button type="submit" [disabled]="departmentForm.invalid || isLoading()" class="px-5 py-3 text-sm font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-700 disabled:bg-blue-300 shadow-md">\r
            {{ isEditing() ? 'L\u01B0u c\u1EADp nh\u1EADt' : 'T\u1EA1o ph\xF2ng ban' }}\r
          </button>\r
        </div>\r
      </form>\r
    </div>\r
  </div>\r
}\r
\r
@if (isDeleteModalOpen()) {\r
  <div class="fixed inset-0 z-[60] flex items-center justify-center p-4">\r
    <div class="absolute inset-0 bg-gray-900/60 backdrop-blur-sm" (click)="closeDeleteModal()"></div>\r
    <div class="relative bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 border border-gray-100 text-center">\r
      <div class="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-red-100 mb-6 border-4 border-white shadow-lg">\r
        <svg class="h-10 w-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>\r
      </div>\r
      <h3 class="text-2xl font-extrabold text-gray-900">X\xF3a Ph\xF2ng ban?</h3>\r
      <p class="text-gray-600 mt-3 text-sm">Thao t\xE1c n\xE0y kh\xF4ng th\u1EC3 ho\xE0n t\xE1c n\u1EBFu ph\xF2ng ban kh\xF4ng c\xF2n nh\xE2n s\u1EF1 tr\u1EF1c thu\u1ED9c.</p>\r
      <div class="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-gray-100">\r
        <button (click)="closeDeleteModal()" class="px-5 py-3.5 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 shadow-sm">H\u1EE7y</button>\r
        <button (click)="confirmDelete()" class="px-5 py-3.5 text-sm font-semibold text-white bg-red-600 rounded-xl hover:bg-red-700 shadow-md">\u0110\u1ED3ng \xFD x\xF3a</button>\r
      </div>\r
    </div>\r
  </div>\r
}\r
\r
@if (isTeacherListModalOpen()) {\r
  <div class="fixed inset-0 z-[60] flex items-center justify-center p-4">\r
    <div class="absolute inset-0 bg-gray-900/60 backdrop-blur-sm" (click)="closeTeacherListModal()"></div>\r
\r
    <div class="relative bg-white rounded-3xl shadow-2xl w-full max-w-4xl p-8 border border-gray-100 flex flex-col max-h-[90vh]">\r
      <div class="flex justify-between items-center mb-6 border-b border-gray-100 pb-4 shrink-0">\r
        <div>\r
          <h3 class="text-2xl font-extrabold text-gray-900">Danh s\xE1ch Nh\xE2n s\u1EF1</h3>\r
          <p class="text-sm text-gray-500 mt-1">Tr\u1EF1c thu\u1ED9c: <strong class="text-blue-600">{{ selectedDepartmentName() }}</strong></p>\r
        </div>\r
        <button (click)="closeTeacherListModal()" class="text-gray-400 hover:text-gray-900 p-2 rounded-full bg-gray-50 hover:bg-gray-100 transition">\r
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>\r
        </button>\r
      </div>\r
\r
      <div class="mb-5 flex flex-col sm:flex-row items-end gap-3 bg-blue-50/60 p-4 rounded-xl border border-blue-100 shrink-0">\r
        <div class="flex-1 w-full relative">\r
          <label class="block mb-1.5 text-sm font-bold text-blue-900">G\xF5 M\xE3 nh\xE2n s\u1EF1 ho\u1EB7c Ch\u1ECDn t\u1EEB danh s\xE1ch *</label>\r
          <input type="text" [formControl]="selectedTeacherToAssign" list="available-teachers-list" placeholder="VD: NS26001"\r
                 class="bg-white border border-blue-200 text-gray-900 text-sm rounded-xl focus:ring-2 focus:ring-blue-400 block w-full p-2.5 outline-none font-medium shadow-sm transition">\r
          <datalist id="available-teachers-list">\r
            @for (t of availableTeachers(); track t.id) {\r
              <option [value]="t.staffCode">H\u1ECD t\xEAn: {{ t.fullName }}</option>\r
            }\r
          </datalist>\r
        </div>\r
\r
        <button (click)="assignTeacher()" [disabled]="!selectedTeacherToAssign.value || isAssigning() || isLoadingTeachers()"\r
                class="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-5 rounded-xl transition shadow-md hover:shadow-lg disabled:opacity-50 disabled:shadow-none flex items-center justify-center shrink-0">\r
          Th\xEAm v\xE0o ph\xF2ng ban\r
        </button>\r
      </div>\r
\r
      <div class="overflow-y-auto flex-1 pr-2 scrollbar-thin border border-gray-100 rounded-xl relative">\r
        <table class="w-full text-sm text-left text-gray-500">\r
          <thead class="text-xs text-gray-500 uppercase bg-gray-50 sticky top-0 z-10 shadow-sm border-b border-gray-100">\r
            <tr>\r
              <th scope="col" class="px-6 py-4">M\xE3 NS</th>\r
              <th scope="col" class="px-6 py-4">H\u1ECD v\xE0 T\xEAn</th>\r
              <th scope="col" class="px-6 py-4">Lo\u1EA1i nh\xE2n s\u1EF1</th>\r
              <th scope="col" class="px-6 py-4 text-right">Thao t\xE1c</th>\r
            </tr>\r
          </thead>\r
          <tbody class="divide-y divide-gray-50">\r
            @if (isLoadingTeachers() && departmentTeachers().length === 0) {\r
              <tr>\r
                <td colspan="4" class="px-6 py-12 text-center text-gray-500">\u0110ang t\u1EA3i danh s\xE1ch...</td>\r
              </tr>\r
            }\r
            @if (!isLoadingTeachers() && departmentTeachers().length === 0) {\r
              <tr>\r
                <td colspan="4" class="px-6 py-12 text-center text-gray-500 bg-gray-50/50">Ch\u01B0a c\xF3 nh\xE2n s\u1EF1 n\xE0o tr\u1EF1c thu\u1ED9c.</td>\r
              </tr>\r
            }\r
            @for (gv of departmentTeachers(); track gv.id) {\r
              <tr class="hover:bg-blue-50/50 transition">\r
                <td class="px-6 py-4 font-mono text-gray-600">{{ gv.staffCode }}</td>\r
                <td class="px-6 py-4 font-bold text-gray-900">{{ gv.fullName }}</td>\r
                <td class="px-6 py-4 text-gray-700">{{ gv.staffType }}</td>\r
                <td class="px-6 py-4 text-right">\r
                  <button (click)="openUnassignModal(gv)" [disabled]="isAssigning()" class="text-red-600 hover:text-red-800 font-semibold text-xs bg-red-50 hover:bg-red-100 px-3 py-2 rounded-lg transition disabled:opacity-50">\r
                    G\u1EE1 kh\u1ECFi ph\xF2ng ban\r
                  </button>\r
                </td>\r
              </tr>\r
            }\r
          </tbody>\r
        </table>\r
      </div>\r
    </div>\r
  </div>\r
}\r
\r
@if (isUnassignModalOpen()) {\r
  <div class="fixed inset-0 z-[70] flex items-center justify-center p-4">\r
    <div class="absolute inset-0 bg-gray-900/60 backdrop-blur-sm" (click)="closeUnassignModal()"></div>\r
    <div class="relative bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 border border-gray-100 text-center">\r
      <h3 class="text-2xl font-extrabold text-gray-900">G\u1EE1 kh\u1ECFi ph\xF2ng ban?</h3>\r
      <p class="text-gray-600 mt-3 text-sm leading-relaxed">\r
        B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n g\u1EE1 <strong class="text-red-600">{{ teacherToUnassign()?.fullName }}</strong> kh\u1ECFi t\u1ED5 n\xE0y?\r
      </p>\r
      <div class="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-gray-100">\r
        <button (click)="closeUnassignModal()" class="px-5 py-3.5 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition shadow-sm">H\u1EE7y b\u1ECF</button>\r
        <button (click)="confirmUnassignTeacher()" [disabled]="isAssigning()" class="px-5 py-3.5 text-sm font-semibold text-white bg-red-600 rounded-xl hover:bg-red-700 disabled:bg-red-300 transition shadow-md">\r
          \u0110\u1ED3ng \xFD g\u1EE1\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
}\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DepartmentComponent, { className: "DepartmentComponent", filePath: "src/app/features/admin/pages/department/department.component.ts", lineNumber: 19 });
})();

// src/app/modules/user/services/role.service.ts
var RoleService = class _RoleService {
  http = inject(HttpClient);
  apiUrl = `${environment.apiUrl}/api/v1/roles`;
  getAll(keyword, page = 0, size = 10) {
    let params = new HttpParams().set("page", page.toString()).set("size", size.toString());
    if (keyword)
      params = params.set("keyword", keyword);
    return this.http.get(this.apiUrl, { params });
  }
  getById(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  create(data) {
    return this.http.post(this.apiUrl, data);
  }
  update(id, data) {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }
  delete(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  assignPermissions(roleId, permissionIds) {
    return this.http.post(`${this.apiUrl}/assign-permissions`, { roleId, permissionIds });
  }
  static \u0275fac = function RoleService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RoleService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RoleService, factory: _RoleService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RoleService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/modules/user/services/permission.service.ts
var PermissionService = class _PermissionService {
  http = inject(HttpClient);
  apiUrl = `${environment.apiUrl}/api/v1/permissions`;
  getAll(keyword, page = 0, size = 10) {
    let params = new HttpParams().set("page", page.toString()).set("size", size.toString());
    if (keyword)
      params = params.set("keyword", keyword);
    return this.http.get(this.apiUrl, { params });
  }
  create(data) {
    return this.http.post(this.apiUrl, data);
  }
  update(id, data) {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }
  delete(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  static \u0275fac = function PermissionService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PermissionService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PermissionService, factory: _PermissionService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PermissionService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/features/admin/pages/role/role.component.ts
var _c04 = () => ["ROLE_UPDATE", "ROLE_DELETE", "ROLE_ASSIGN_PERMISSION"];
var _forTrack04 = ($index, $item) => $item.id;
var _forTrack12 = ($index, $item) => $item.label;
function RoleComponent_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function RoleComponent_button_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 29);
    \u0275\u0275element(2, "path", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " T\u1EA1o Vai tr\xF2 m\u1EDBi ");
    \u0275\u0275elementEnd();
  }
}
function RoleComponent_th_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 31);
    \u0275\u0275text(1, "Thao t\xE1c");
    \u0275\u0275elementEnd();
  }
}
function RoleComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 32);
    \u0275\u0275text(2, "\u0110ang t\u1EA3i d\u1EEF li\u1EC7u...");
    \u0275\u0275elementEnd()();
  }
}
function RoleComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 32);
    \u0275\u0275text(2, "Kh\xF4ng t\xECm th\u1EA5y d\u1EEF li\u1EC7u.");
    \u0275\u0275elementEnd()();
  }
}
function RoleComponent_For_30_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const role_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("T\u1EA1o: ", \u0275\u0275pipeBind2(2, 1, role_r3.createdAt, "dd/MM/yyyy"));
  }
}
function RoleComponent_For_30_td_10_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 44);
    \u0275\u0275listener("click", function RoleComponent_For_30_td_10_button_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const role_r3 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openPermissionModal(role_r3));
    });
    \u0275\u0275text(1, "Ph\xE2n quy\u1EC1n");
    \u0275\u0275elementEnd();
  }
}
function RoleComponent_For_30_td_10_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 45);
    \u0275\u0275listener("click", function RoleComponent_For_30_td_10_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const role_r3 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openModal(role_r3));
    });
    \u0275\u0275text(1, "S\u1EEDa");
    \u0275\u0275elementEnd();
  }
}
function RoleComponent_For_30_td_10_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 46);
    \u0275\u0275listener("click", function RoleComponent_For_30_td_10_button_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const role_r3 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDelete(role_r3.id));
    });
    \u0275\u0275text(1, "X\xF3a");
    \u0275\u0275elementEnd();
  }
}
function RoleComponent_For_30_td_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 40);
    \u0275\u0275template(1, RoleComponent_For_30_td_10_button_1_Template, 2, 0, "button", 41)(2, RoleComponent_For_30_td_10_button_2_Template, 2, 0, "button", 42)(3, RoleComponent_For_30_td_10_button_3_Template, 2, 0, "button", 43);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("hasPermission", "ROLE_ASSIGN_PERMISSION");
    \u0275\u0275advance();
    \u0275\u0275property("hasPermission", "ROLE_UPDATE");
    \u0275\u0275advance();
    \u0275\u0275property("hasPermission", "ROLE_DELETE");
  }
}
function RoleComponent_For_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 19)(1, "td", 33)(2, "span", 34);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, RoleComponent_For_30_Conditional_4_Template, 3, 4, "div", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 36);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 37)(8, "div", 38);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, RoleComponent_For_30_td_10_Template, 4, 3, "td", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const role_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(role_r3.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(role_r3.createdAt ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("title", role_r3.description || "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", role_r3.description || "---", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", role_r3.permissions ? role_r3.permissions.length : 0, " ");
    \u0275\u0275advance();
    \u0275\u0275property("hasAnyPermission", \u0275\u0275pureFunction0(6, _c04));
  }
}
function RoleComponent_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 47);
    \u0275\u0275listener("click", function RoleComponent_Conditional_50_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 48)(3, "div", 49)(4, "h3", 50);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 51);
    \u0275\u0275listener("click", function RoleComponent_Conditional_50_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 52);
    \u0275\u0275element(8, "path", 53);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "form", 54);
    \u0275\u0275listener("ngSubmit", function RoleComponent_Conditional_50_Template_form_ngSubmit_9_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(10, "div")(11, "label", 55);
    \u0275\u0275text(12, "T\xEAn Vai tr\xF2 *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 56);
    \u0275\u0275elementStart(14, "p", 57);
    \u0275\u0275text(15, "Vi\u1EBFt li\u1EC1n kh\xF4ng d\u1EA5u, in hoa. VD: ROLE_ADMIN, ROLE_TEACHER...");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div")(17, "label", 55);
    \u0275\u0275text(18, "M\xF4 t\u1EA3");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "textarea", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 59)(21, "button", 60);
    \u0275\u0275listener("click", function RoleComponent_Conditional_50_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275text(22, "H\u1EE7y b\u1ECF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 61);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.isEditing() ? "C\u1EADp nh\u1EADt Vai tr\xF2" : "T\u1EA1o Vai tr\xF2 m\u1EDBi");
    \u0275\u0275advance(4);
    \u0275\u0275property("formGroup", ctx_r1.roleForm);
    \u0275\u0275advance(14);
    \u0275\u0275property("disabled", ctx_r1.roleForm.invalid || ctx_r1.isLoading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isEditing() ? "L\u01B0u c\u1EADp nh\u1EADt" : "T\u1EA1o vai tr\xF2", " ");
  }
}
function RoleComponent_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 47);
    \u0275\u0275listener("click", function RoleComponent_Conditional_51_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDeleteModal());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 62)(3, "h3", 50);
    \u0275\u0275text(4, "X\xF3a Vai tr\xF2?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 63);
    \u0275\u0275text(6, "Ch\u1EC9 x\xF3a \u0111\u01B0\u1EE3c khi ch\u01B0a c\xF3 t\xE0i kho\u1EA3n n\xE0o \u0111\u01B0\u1EE3c g\xE1n vai tr\xF2 n\xE0y.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 64)(8, "button", 65);
    \u0275\u0275listener("click", function RoleComponent_Conditional_51_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDeleteModal());
    });
    \u0275\u0275text(9, "H\u1EE7y");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 66);
    \u0275\u0275listener("click", function RoleComponent_Conditional_51_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmDelete());
    });
    \u0275\u0275text(11, "\u0110\u1ED3ng \xFD x\xF3a");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275property("disabled", ctx_r1.isLoading());
  }
}
function RoleComponent_Conditional_52_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 76);
    \u0275\u0275text(1, "\u0110ang t\u1EA3i danh s\xE1ch quy\u1EC1n...");
    \u0275\u0275elementEnd();
  }
}
function RoleComponent_Conditional_52_Conditional_21_For_1_For_10_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 95);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const perm_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(perm_r13.description);
  }
}
function RoleComponent_Conditional_52_Conditional_21_For_1_For_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 91)(1, "input", 92);
    \u0275\u0275listener("change", function RoleComponent_Conditional_52_Conditional_21_For_1_For_10_Template_input_change_1_listener() {
      const perm_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.togglePermission(perm_r13.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 93)(3, "p", 94);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, RoleComponent_Conditional_52_Conditional_21_For_1_For_10_Conditional_5_Template, 2, 1, "p", 95);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const perm_r13 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classMap(ctx_r1.selectedPermissionIds().includes(perm_r13.id) ? "bg-purple-50 border-purple-200" : "border-transparent hover:bg-gray-50 hover:border-gray-200");
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r1.selectedPermissionIds().includes(perm_r13.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(perm_r13.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(perm_r13.description ? 5 : -1);
  }
}
function RoleComponent_Conditional_52_Conditional_21_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 83)(1, "div", 84)(2, "label", 85)(3, "input", 86);
    \u0275\u0275listener("change", function RoleComponent_Conditional_52_Conditional_21_For_1_Template_input_change_3_listener() {
      const group_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleGroupPermissions(group_r11.permissions, !ctx_r1.isGroupAllSelected(group_r11.permissions)));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 87);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "span", 88);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 89);
    \u0275\u0275repeaterCreate(9, RoleComponent_Conditional_52_Conditional_21_For_1_For_10_Template, 6, 5, "label", 90, _forTrack04);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const group_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275property("checked", ctx_r1.isGroupAllSelected(group_r11.permissions))("indeterminate", ctx_r1.isGroupPartialSelected(group_r11.permissions));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(group_r11.label);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.isGroupAllSelected(group_r11.permissions) ? "bg-purple-600 text-white" : ctx_r1.isGroupPartialSelected(group_r11.permissions) ? "bg-amber-100 text-amber-700" : "bg-gray-100 text-gray-500");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r1.getGroupSelectedCount(group_r11.permissions), " / ", group_r11.permissions.length, " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(group_r11.permissions);
  }
}
function RoleComponent_Conditional_52_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, RoleComponent_Conditional_52_Conditional_21_For_1_Template, 11, 7, "div", 83, _forTrack12);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r1.groupedPermissions());
  }
}
function RoleComponent_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 47);
    \u0275\u0275listener("click", function RoleComponent_Conditional_52_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closePermissionModal());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 67)(3, "div", 68)(4, "div")(5, "h3", 50);
    \u0275\u0275text(6, "C\u1EA5u h\xECnh Ph\xE2n quy\u1EC1n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 3);
    \u0275\u0275text(8, "Vai tr\xF2: ");
    \u0275\u0275elementStart(9, "strong", 69);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "button", 70);
    \u0275\u0275listener("click", function RoleComponent_Conditional_52_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closePermissionModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(12, "svg", 52);
    \u0275\u0275element(13, "path", 53);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(14, "div", 71)(15, "label", 72)(16, "input", 73);
    \u0275\u0275listener("change", function RoleComponent_Conditional_52_Template_input_change_16_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleAllPermissions($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 74);
    \u0275\u0275text(18, "Ch\u1ECDn t\u1EA5t c\u1EA3");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 75);
    \u0275\u0275conditionalCreate(20, RoleComponent_Conditional_52_Conditional_20_Template, 2, 0, "div", 76)(21, RoleComponent_Conditional_52_Conditional_21_Template, 2, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 77)(23, "div", 78);
    \u0275\u0275text(24, " \u0110ang ch\u1ECDn: ");
    \u0275\u0275elementStart(25, "span", 79);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275text(27, " quy\u1EC1n ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 80)(29, "button", 81);
    \u0275\u0275listener("click", function RoleComponent_Conditional_52_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closePermissionModal());
    });
    \u0275\u0275text(30, "H\u1EE7y");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 82);
    \u0275\u0275listener("click", function RoleComponent_Conditional_52_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.savePermissions());
    });
    \u0275\u0275text(32, " L\u01B0u Ph\xE2n Quy\u1EC1n ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate((tmp_1_0 = ctx_r1.selectedRoleForPermission()) == null ? null : tmp_1_0.name);
    \u0275\u0275advance(6);
    \u0275\u0275property("checked", ctx_r1.isAllSelected());
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.isLoading() ? 20 : 21);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.selectedPermissionIds().length);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r1.isAssigning());
  }
}
var RoleComponent = class _RoleComponent {
  roleService = inject(RoleService);
  toastService = inject(ToastService);
  fb = inject(FormBuilder);
  destroyRef = inject(DestroyRef);
  permissionService = inject(PermissionService);
  roles = signal([], ...ngDevMode ? [{ debugName: "roles" }] : (
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
  roleForm;
  isDeleteModalOpen = signal(false, ...ngDevMode ? [{ debugName: "isDeleteModalOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  idToDelete = signal(null, ...ngDevMode ? [{ debugName: "idToDelete" }] : (
    /* istanbul ignore next */
    []
  ));
  isPermissionModalOpen = signal(false, ...ngDevMode ? [{ debugName: "isPermissionModalOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedRoleForPermission = signal(null, ...ngDevMode ? [{ debugName: "selectedRoleForPermission" }] : (
    /* istanbul ignore next */
    []
  ));
  allPermissions = signal([], ...ngDevMode ? [{ debugName: "allPermissions" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedPermissionIds = signal([], ...ngDevMode ? [{ debugName: "selectedPermissionIds" }] : (
    /* istanbul ignore next */
    []
  ));
  isAssigning = signal(false, ...ngDevMode ? [{ debugName: "isAssigning" }] : (
    /* istanbul ignore next */
    []
  ));
  MODULE_LABELS = {
    COURSE: "\u{1F4DA} Qu\u1EA3n l\xFD Kh\xF3a h\u1ECDc",
    CLASS: "\u{1F3EB} Qu\u1EA3n l\xFD L\u1EDBp h\u1ECDc",
    STUDENT: "\u{1F393} Qu\u1EA3n l\xFD H\u1ECDc vi\xEAn",
    STAFF: "\u{1F468}\u200D\u{1F3EB} Qu\u1EA3n l\xFD Gi\u1EA3ng vi\xEAn",
    ENROLLMENT: "\u{1F4CB} Qu\u1EA3n l\xFD \u0110\u0103ng k\xFD h\u1ECDc",
    SCHEDULE: "\u{1F4C5} Qu\u1EA3n l\xFD L\u1ECBch h\u1ECDc",
    LESSON: "\u{1F4D6} Qu\u1EA3n l\xFD Bu\u1ED5i h\u1ECDc",
    ROOM: "\u{1F3E2} Qu\u1EA3n l\xFD Ph\xF2ng h\u1ECDc",
    TERM: "\u{1F4C6} Qu\u1EA3n l\xFD H\u1ECDc k\u1EF3",
    TEACHING: "\u{1F58A}\uFE0F Ph\xE2n c\xF4ng Gi\u1EA3ng d\u1EA1y",
    ASSIGNMENT: "\u{1F4DD} Qu\u1EA3n l\xFD B\xE0i t\u1EADp",
    SUBSTITUTION: "\u{1F504} Thay th\u1EBF Gi\u1EA3ng d\u1EA1y",
    DEPARTMENT: "\u{1F3DB}\uFE0F Qu\u1EA3n l\xFD B\u1ED9 ph\u1EADn",
    ROLE: "\u{1F6E1}\uFE0F Qu\u1EA3n l\xFD Vai tr\xF2",
    PERMISSION: "\u{1F511} Qu\u1EA3n l\xFD Quy\u1EC1n h\u1EA1n",
    ACCOUNT: "\u{1F464} Qu\u1EA3n l\xFD T\xE0i kho\u1EA3n",
    USER: "\u{1F464} Qu\u1EA3n l\xFD Ng\u01B0\u1EDDi d\xF9ng",
    REPORT: "\u{1F4CA} B\xE1o c\xE1o & Th\u1ED1ng k\xEA",
    LOG: "\u{1F4DC} Nh\u1EADt k\xFD ho\u1EA1t \u0111\u1ED9ng",
    SYSTEM: "\u2699\uFE0F Qu\u1EA3n l\xFD H\u1EC7 th\u1ED1ng"
  };
  groupedPermissions = computed(() => {
    const groups = /* @__PURE__ */ new Map();
    for (const perm of this.allPermissions()) {
      const prefix = perm.name.split("_")[0];
      const label = this.MODULE_LABELS[prefix] ?? `\u{1F527} ${prefix}`;
      if (!groups.has(prefix)) {
        groups.set(prefix, { label, permissions: [] });
      }
      groups.get(prefix).permissions.push(perm);
    }
    return Array.from(groups.values()).sort((a, b) => a.label.localeCompare(b.label));
  }, ...ngDevMode ? [{ debugName: "groupedPermissions" }] : (
    /* istanbul ignore next */
    []
  ));
  isGroupAllSelected(permissions) {
    const current = this.selectedPermissionIds();
    return permissions.length > 0 && permissions.every((p) => current.includes(Number(p.id)));
  }
  isGroupPartialSelected(permissions) {
    const current = this.selectedPermissionIds();
    const count = permissions.filter((p) => current.includes(Number(p.id))).length;
    return count > 0 && count < permissions.length;
  }
  getGroupSelectedCount(permissions) {
    const current = this.selectedPermissionIds();
    return permissions.filter((p) => current.includes(Number(p.id))).length;
  }
  toggleGroupPermissions(permissions, selectAll) {
    const ids = permissions.map((p) => Number(p.id));
    const current = this.selectedPermissionIds();
    if (selectAll) {
      const merged = Array.from(/* @__PURE__ */ new Set([...current, ...ids]));
      this.selectedPermissionIds.set(merged);
    } else {
      this.selectedPermissionIds.set(current.filter((id) => !ids.includes(id)));
    }
  }
  ngOnInit() {
    this.initForm();
    this.setupFilters();
    this.loadData();
  }
  initForm() {
    this.roleForm = this.fb.group({
      name: ["", [Validators.required, Validators.maxLength(50)]],
      description: ["", [Validators.maxLength(255)]]
    });
  }
  setupFilters() {
    this.searchControl.valueChanges.pipe(debounceTime(400), distinctUntilChanged(), takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.currentPage.set(1);
      this.loadData();
    });
  }
  loadData() {
    this.isLoading.set(true);
    const keyword = this.searchControl.value || void 0;
    this.roleService.getAll(keyword, this.currentPage() - 1, this.pageSize()).subscribe({
      next: (res) => {
        this.roles.set(res.content);
        this.totalElements.set(res.totalElements);
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
  openModal(role) {
    if (role) {
      this.isEditing.set(true);
      this.currentId.set(role.id);
      this.roleForm.patchValue({
        name: role.name,
        description: role.description
      });
    } else {
      this.isEditing.set(false);
      this.currentId.set(null);
      this.roleForm.reset();
    }
    this.isModalOpen.set(true);
  }
  closeModal() {
    this.isModalOpen.set(false);
    this.currentId.set(null);
  }
  onSubmit() {
    if (this.roleForm.invalid)
      return;
    this.isLoading.set(true);
    const data = __spreadValues({}, this.roleForm.value);
    data.name = data.name.toUpperCase().trim();
    if (this.isEditing() && this.currentId() != null) {
      this.roleService.update(this.currentId(), data).subscribe({
        next: () => {
          this.loadData();
          this.closeModal();
          this.toastService.success("Th\xE0nh c\xF4ng", "\u0110\xE3 c\u1EADp nh\u1EADt Vai tr\xF2!");
        },
        error: (err) => {
          this.isLoading.set(false);
          this.toastService.error("L\u1ED7i", err.error?.message || "C\u1EADp nh\u1EADt th\u1EA5t b\u1EA1i");
        }
      });
    } else {
      this.roleService.create(data).subscribe({
        next: () => {
          this.loadData();
          this.closeModal();
          this.toastService.success("Th\xE0nh c\xF4ng", "\u0110\xE3 t\u1EA1o Vai tr\xF2 m\u1EDBi!");
        },
        error: (err) => {
          this.isLoading.set(false);
          this.toastService.error("L\u1ED7i", err.error?.message || "Th\xEAm th\u1EA5t b\u1EA1i");
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
      this.roleService.delete(id).subscribe({
        next: () => {
          this.loadData();
          this.closeDeleteModal();
          this.toastService.success("Ho\xE0n t\u1EA5t", "\u0110\xE3 x\xF3a vai tr\xF2.");
        },
        error: (err) => {
          this.isLoading.set(false);
          this.closeDeleteModal();
          this.toastService.error("L\u1ED7i", err.error?.message || "Kh\xF4ng th\u1EC3 x\u1EED l\xFD!");
        }
      });
    }
  }
  openPermissionModal(role) {
    this.selectedRoleForPermission.set(role);
    this.isPermissionModalOpen.set(true);
    this.isLoading.set(true);
    const currentPerms = role.permissions || [];
    this.selectedPermissionIds.set(currentPerms.map((p) => Number(p.id)));
    this.permissionService.getAll(void 0, 0, 1e3).subscribe({
      next: (res) => {
        this.allPermissions.set(res.content);
        this.isLoading.set(false);
      },
      error: () => this.isLoading.set(false)
    });
  }
  closePermissionModal() {
    this.isPermissionModalOpen.set(false);
    this.selectedRoleForPermission.set(null);
  }
  togglePermission(permId) {
    const current = this.selectedPermissionIds();
    if (current.includes(permId)) {
      this.selectedPermissionIds.set(current.filter((id) => id !== permId));
    } else {
      this.selectedPermissionIds.set([...current, permId]);
    }
  }
  toggleAllPermissions(event) {
    const isChecked = event.target.checked;
    if (isChecked) {
      this.selectedPermissionIds.set(this.allPermissions().map((p) => Number(p.id)));
    } else {
      this.selectedPermissionIds.set([]);
    }
  }
  isAllSelected() {
    const all = this.allPermissions();
    if (all.length === 0)
      return false;
    const current = this.selectedPermissionIds();
    return all.every((p) => current.includes(Number(p.id)));
  }
  savePermissions() {
    const roleId = this.selectedRoleForPermission()?.id;
    if (roleId == null)
      return;
    this.isAssigning.set(true);
    this.roleService.assignPermissions(roleId, this.selectedPermissionIds()).subscribe({
      next: () => {
        this.isAssigning.set(false);
        this.closePermissionModal();
        this.toastService.success("Th\xE0nh c\xF4ng", "\u0110\xE3 c\u1EADp nh\u1EADt ph\xE2n quy\u1EC1n!");
        this.loadData();
      },
      error: (err) => {
        this.isAssigning.set(false);
        this.toastService.error("L\u1ED7i", err.error?.message || "L\u1ED7i ph\xE2n quy\u1EC1n!");
      }
    });
  }
  static \u0275fac = function RoleComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RoleComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RoleComponent, selectors: [["app-role"]], decls: 53, vars: 16, consts: [[1, "space-y-6"], [1, "flex", "flex-col", "xl:flex-row", "xl:justify-between", "xl:items-end", "pb-4", "border-b", "border-gray-100", "gap-4"], [1, "text-2xl", "font-extrabold", "text-gray-900", "tracking-tight"], [1, "text-sm", "text-gray-500", "mt-1"], [1, "flex", "flex-wrap", "items-center", "gap-3"], [1, "relative"], [1, "absolute", "inset-y-0", "left-0", "flex", "items-center", "pl-3", "pointer-events-none"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-gray-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], ["type", "text", "placeholder", "T\xECm t\xEAn role...", 1, "bg-white", "border", "border-gray-200", "text-gray-900", "text-sm", "rounded-xl", "focus:ring-2", "focus:ring-blue-100", "focus:border-blue-500", "block", "w-48", "xl:w-64", "pl-10", "p-2.5", "outline-none", "transition", "shadow-sm", 3, "formControl"], ["class", "bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-5 rounded-xl flex items-center transition shadow-md hover:shadow-lg text-sm shrink-0", 3, "click", 4, "hasPermission"], [1, "bg-white", "rounded-2xl", "shadow-sm", "border", "border-gray-100", "overflow-hidden"], [1, "overflow-x-auto"], [1, "w-full", "text-sm", "text-left", "text-gray-500"], [1, "text-xs", "text-gray-500", "uppercase", "bg-gray-50/80", "border-b", "border-gray-100", "font-semibold"], ["scope", "col", 1, "px-6", "py-4"], ["scope", "col", 1, "px-6", "py-4", "text-center"], ["scope", "col", "class", "px-6 py-4 text-right", 4, "hasAnyPermission"], [1, "divide-y", "divide-gray-50"], [1, "bg-white", "hover:bg-blue-50/50", "transition", "duration-200"], [1, "flex", "items-center", "justify-between", "px-6", "py-4", "bg-gray-50/80", "border-t", "border-gray-100", "rounded-b-2xl"], [1, "text-sm", "text-gray-500"], [1, "font-semibold", "text-gray-900"], [1, "flex", "space-x-2"], [1, "px-3", "py-1.5", "text-sm", "font-medium", "text-gray-700", "bg-white", "border", "border-gray-300", "rounded-lg", "hover:bg-gray-50", "disabled:opacity-50", "transition", "shadow-sm", 3, "click", "disabled"], [1, "flex", "items-center", "justify-center", "px-4", "py-1.5", "text-sm", "font-medium", "text-gray-700", "bg-gray-100", "rounded-lg", "border", "border-gray-200"], [1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "p-4"], [1, "fixed", "inset-0", "z-[60]", "flex", "items-center", "justify-center", "p-4"], [1, "bg-blue-600", "hover:bg-blue-700", "text-white", "font-semibold", "py-2.5", "px-5", "rounded-xl", "flex", "items-center", "transition", "shadow-md", "hover:shadow-lg", "text-sm", "shrink-0", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "mr-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 4v16m8-8H4"], ["scope", "col", 1, "px-6", "py-4", "text-right"], ["colspan", "4", 1, "px-6", "py-12", "text-center", "text-gray-500"], [1, "px-6", "py-4"], [1, "font-mono", "font-bold", "text-blue-700", "bg-blue-50", "px-2.5", "py-1", "rounded-lg", "border", "border-blue-100"], [1, "text-xs", "text-gray-500", "mt-1"], [1, "px-6", "py-4", "text-gray-600", "max-w-xs", "truncate", 3, "title"], [1, "px-6", "py-4", "text-center"], [1, "inline-flex", "items-center", "justify-center", "w-8", "h-8", "rounded-full", "bg-gray-100", "text-gray-800", "font-bold", "border", "border-gray-200"], ["class", "px-6 py-4 text-right space-x-4", 4, "hasAnyPermission"], [1, "px-6", "py-4", "text-right", "space-x-4"], ["class", "font-semibold text-purple-600 hover:text-purple-800 transition", 3, "click", 4, "hasPermission"], ["class", "font-semibold text-blue-600 hover:text-blue-800 transition", 3, "click", 4, "hasPermission"], ["class", "font-semibold text-red-600 hover:text-red-800 transition", 3, "click", 4, "hasPermission"], [1, "font-semibold", "text-purple-600", "hover:text-purple-800", "transition", 3, "click"], [1, "font-semibold", "text-blue-600", "hover:text-blue-800", "transition", 3, "click"], [1, "font-semibold", "text-red-600", "hover:text-red-800", "transition", 3, "click"], [1, "absolute", "inset-0", "bg-gray-900/60", "backdrop-blur-sm", 3, "click"], [1, "relative", "bg-white", "rounded-3xl", "shadow-2xl", "w-full", "max-w-lg", "p-8", "border", "border-gray-100"], [1, "flex", "justify-between", "items-center", "mb-6", "border-b", "border-gray-100", "pb-4"], [1, "text-2xl", "font-extrabold", "text-gray-900"], [1, "text-gray-400", "hover:text-gray-900", "p-2", "rounded-full", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "space-y-5", 3, "ngSubmit", "formGroup"], [1, "block", "mb-1.5", "text-sm", "font-bold", "text-gray-700"], ["type", "text", "formControlName", "name", "placeholder", "VD: ROLE_ADMIN", 1, "bg-gray-50", "border", "border-gray-200", "text-gray-900", "font-mono", "text-sm", "rounded-xl", "focus:ring-2", "focus:ring-blue-500", "block", "w-full", "p-3", "outline-none", "uppercase", "transition"], [1, "text-xs", "text-gray-500", "mt-1.5"], ["formControlName", "description", "rows", "3", "placeholder", "VD: Qu\u1EA3n tr\u1ECB vi\xEAn h\u1EC7 th\u1ED1ng", 1, "bg-gray-50", "border", "border-gray-200", "text-gray-900", "text-sm", "rounded-xl", "focus:ring-2", "focus:ring-blue-500", "block", "w-full", "p-3", "outline-none", "resize-none"], [1, "flex", "justify-end", "space-x-3.5", "pt-4", "border-t", "border-gray-100"], ["type", "button", 1, "px-5", "py-3", "text-sm", "font-semibold", "text-gray-700", "bg-white", "border", "border-gray-300", "rounded-xl", "hover:bg-gray-50", "shadow-sm", 3, "click"], ["type", "submit", 1, "px-5", "py-3", "text-sm", "font-semibold", "text-white", "bg-blue-600", "rounded-xl", "hover:bg-blue-700", "disabled:bg-blue-300", "shadow-md", 3, "disabled"], [1, "relative", "bg-white", "rounded-3xl", "shadow-2xl", "w-full", "max-w-md", "p-8", "border", "border-gray-100", "text-center"], [1, "text-gray-600", "mt-3", "text-sm"], [1, "grid", "grid-cols-2", "gap-4", "mt-8", "pt-6", "border-t", "border-gray-100"], [1, "px-5", "py-3.5", "text-sm", "font-semibold", "text-gray-700", "bg-white", "border", "border-gray-300", "rounded-xl", "hover:bg-gray-50", "shadow-sm", 3, "click"], [1, "px-5", "py-3.5", "text-sm", "font-semibold", "text-white", "bg-red-600", "rounded-xl", "hover:bg-red-700", "shadow-md", 3, "click", "disabled"], [1, "relative", "bg-white", "rounded-3xl", "shadow-2xl", "w-full", "max-w-4xl", "p-8", "border", "border-gray-100", "flex", "flex-col", "max-h-[90vh]"], [1, "flex", "justify-between", "items-center", "mb-6", "border-b", "border-gray-100", "pb-4", "shrink-0"], [1, "text-purple-600", "font-mono"], [1, "text-gray-400", "hover:text-gray-900", "p-2", "rounded-full", "bg-gray-50", "hover:bg-gray-100", "transition", 3, "click"], [1, "flex", "items-center", "justify-between", "mb-4", "shrink-0"], [1, "flex", "items-center", "space-x-2", "cursor-pointer", "bg-gray-50", "px-3", "py-2", "rounded-lg", "border", "border-gray-200", "hover:bg-purple-50", "transition"], ["type", "checkbox", 1, "w-4", "h-4", "text-purple-600", "rounded", "cursor-pointer", 3, "change", "checked"], [1, "text-sm", "font-semibold", "text-gray-700"], [1, "flex-1", "overflow-y-auto", "pr-1", "scrollbar-thin", "space-y-4"], [1, "text-center", "py-10", "text-gray-500"], [1, "flex", "justify-between", "items-center", "pt-5", "mt-5", "border-t", "border-gray-100", "shrink-0"], [1, "text-sm", "font-medium", "text-gray-600"], [1, "text-purple-600", "font-bold", "text-lg"], [1, "flex", "space-x-3.5"], [1, "px-5", "py-2.5", "text-sm", "font-semibold", "text-gray-700", "bg-white", "border", "border-gray-300", "rounded-xl", "hover:bg-gray-50", 3, "click"], [1, "px-6", "py-2.5", "text-sm", "font-semibold", "text-white", "bg-purple-600", "rounded-xl", "hover:bg-purple-700", "shadow-md", 3, "click", "disabled"], [1, "border", "border-gray-200", "rounded-2xl", "overflow-hidden"], [1, "flex", "items-center", "justify-between", "px-4", "py-3", "bg-gradient-to-r", "from-purple-50", "to-indigo-50", "border-b", "border-gray-200"], [1, "flex", "items-center", "gap-3", "cursor-pointer", "flex-1"], ["type", "checkbox", 1, "w-4", "h-4", "text-purple-600", "rounded", "cursor-pointer", "accent-purple-600", 3, "change", "checked", "indeterminate"], [1, "text-sm", "font-bold", "text-gray-800"], [1, "text-xs", "font-semibold", "px-2.5", "py-1", "rounded-full"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-2", "p-3", "bg-white"], [1, "flex", "items-start", "gap-2.5", "p-2.5", "rounded-xl", "cursor-pointer", "border", "transition-all", 3, "class"], [1, "flex", "items-start", "gap-2.5", "p-2.5", "rounded-xl", "cursor-pointer", "border", "transition-all"], ["type", "checkbox", 1, "w-3.5", "h-3.5", "mt-0.5", "accent-purple-600", "cursor-pointer", "shrink-0", 3, "change", "checked"], [1, "min-w-0"], [1, "text-xs", "font-bold", "text-gray-800", "font-mono", "leading-tight"], [1, "text-xs", "text-gray-400", "mt-0.5", "leading-tight"]], template: function RoleComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Qu\u1EA3n l\xFD Vai tr\xF2 (Roles)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Thi\u1EBFt l\u1EADp c\xE1c nh\xF3m quy\u1EC1n v\xE0 g\xE1n t\xEDnh n\u0103ng cho t\u1EEBng vai tr\xF2");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 4)(8, "div", 5)(9, "div", 6);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(10, "svg", 7);
      \u0275\u0275element(11, "path", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275element(12, "input", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275template(13, RoleComponent_button_13_Template, 4, 0, "button", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 11)(15, "div", 12)(16, "table", 13)(17, "thead", 14)(18, "tr")(19, "th", 15);
      \u0275\u0275text(20, "T\xEAn Vai tr\xF2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "th", 15);
      \u0275\u0275text(22, "M\xF4 t\u1EA3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "th", 16);
      \u0275\u0275text(24, "S\u1ED1 quy\u1EC1n");
      \u0275\u0275elementEnd();
      \u0275\u0275template(25, RoleComponent_th_25_Template, 2, 0, "th", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "tbody", 18);
      \u0275\u0275conditionalCreate(27, RoleComponent_Conditional_27_Template, 3, 0, "tr");
      \u0275\u0275conditionalCreate(28, RoleComponent_Conditional_28_Template, 3, 0, "tr");
      \u0275\u0275repeaterCreate(29, RoleComponent_For_30_Template, 11, 7, "tr", 19, _forTrack04);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(31, "div", 20)(32, "div", 21);
      \u0275\u0275text(33, " Hi\u1EC3n th\u1ECB ");
      \u0275\u0275elementStart(34, "span", 22);
      \u0275\u0275text(35);
      \u0275\u0275elementEnd();
      \u0275\u0275text(36, " - ");
      \u0275\u0275elementStart(37, "span", 22);
      \u0275\u0275text(38);
      \u0275\u0275elementEnd();
      \u0275\u0275text(39, " trong s\u1ED1 ");
      \u0275\u0275elementStart(40, "span", 22);
      \u0275\u0275text(41);
      \u0275\u0275elementEnd();
      \u0275\u0275text(42, " k\u1EBFt qu\u1EA3 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "div", 23)(44, "button", 24);
      \u0275\u0275listener("click", function RoleComponent_Template_button_click_44_listener() {
        return ctx.changePage(ctx.currentPage() - 1);
      });
      \u0275\u0275text(45, "Tr\u01B0\u1EDBc");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "div", 25);
      \u0275\u0275text(47);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "button", 24);
      \u0275\u0275listener("click", function RoleComponent_Template_button_click_48_listener() {
        return ctx.changePage(ctx.currentPage() + 1);
      });
      \u0275\u0275text(49, "Sau");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275conditionalCreate(50, RoleComponent_Conditional_50_Template, 25, 4, "div", 26);
      \u0275\u0275conditionalCreate(51, RoleComponent_Conditional_51_Template, 12, 1, "div", 27);
      \u0275\u0275conditionalCreate(52, RoleComponent_Conditional_52_Template, 33, 5, "div", 27);
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275property("formControl", ctx.searchControl);
      \u0275\u0275advance();
      \u0275\u0275property("hasPermission", "ROLE_CREATE");
      \u0275\u0275advance(12);
      \u0275\u0275property("hasAnyPermission", \u0275\u0275pureFunction0(15, _c04));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isLoading() && ctx.roles().length === 0 ? 27 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isLoading() && ctx.roles().length === 0 ? 28 : -1);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.roles());
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.startIndex());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.endIndex());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.totalElements());
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", ctx.currentPage() === 1);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2(" Trang ", ctx.currentPage(), " / ", ctx.totalPages() === 0 ? 1 : ctx.totalPages(), " ");
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.currentPage() === ctx.totalPages() || ctx.totalPages() === 0);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isModalOpen() ? 50 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isDeleteModalOpen() ? 51 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isPermissionModalOpen() ? 52 : -1);
    }
  }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormControlDirective, FormGroupDirective, FormControlName, HasPermissionDirective, DatePipe], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RoleComponent, [{
    type: Component,
    args: [{ selector: "app-role", imports: [CommonModule, ReactiveFormsModule, HasPermissionDirective], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="space-y-6">\r
  <div class="flex flex-col xl:flex-row xl:justify-between xl:items-end pb-4 border-b border-gray-100 gap-4">\r
    <div>\r
      <h1 class="text-2xl font-extrabold text-gray-900 tracking-tight">Qu\u1EA3n l\xFD Vai tr\xF2 (Roles)</h1>\r
      <p class="text-sm text-gray-500 mt-1">Thi\u1EBFt l\u1EADp c\xE1c nh\xF3m quy\u1EC1n v\xE0 g\xE1n t\xEDnh n\u0103ng cho t\u1EEBng vai tr\xF2</p>\r
    </div>\r
\r
    <div class="flex flex-wrap items-center gap-3">\r
      <div class="relative">\r
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">\r
          <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>\r
        </div>\r
        <input type="text" [formControl]="searchControl" placeholder="T\xECm t\xEAn role..." class="bg-white border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-500 block w-48 xl:w-64 pl-10 p-2.5 outline-none transition shadow-sm">\r
      </div>\r
\r
      <button *hasPermission="'ROLE_CREATE'" (click)="openModal()" class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-5 rounded-xl flex items-center transition shadow-md hover:shadow-lg text-sm shrink-0">\r
        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>\r
        T\u1EA1o Vai tr\xF2 m\u1EDBi\r
      </button>\r
    </div>\r
  </div>\r
\r
  <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">\r
    <div class="overflow-x-auto">\r
      <table class="w-full text-sm text-left text-gray-500">\r
        <thead class="text-xs text-gray-500 uppercase bg-gray-50/80 border-b border-gray-100 font-semibold">\r
          <tr>\r
            <th scope="col" class="px-6 py-4">T\xEAn Vai tr\xF2</th>\r
            <th scope="col" class="px-6 py-4">M\xF4 t\u1EA3</th>\r
            <th scope="col" class="px-6 py-4 text-center">S\u1ED1 quy\u1EC1n</th>\r
            <th *hasAnyPermission="['ROLE_UPDATE', 'ROLE_DELETE', 'ROLE_ASSIGN_PERMISSION']" scope="col" class="px-6 py-4 text-right">Thao t\xE1c</th>\r
          </tr>\r
        </thead>\r
        <tbody class="divide-y divide-gray-50">\r
          @if (isLoading() && roles().length === 0) {\r
            <tr>\r
              <td colspan="4" class="px-6 py-12 text-center text-gray-500">\u0110ang t\u1EA3i d\u1EEF li\u1EC7u...</td>\r
            </tr>\r
          }\r
          @if (!isLoading() && roles().length === 0) {\r
            <tr>\r
              <td colspan="4" class="px-6 py-12 text-center text-gray-500">Kh\xF4ng t\xECm th\u1EA5y d\u1EEF li\u1EC7u.</td>\r
            </tr>\r
          }\r
\r
          @for (role of roles(); track role.id) {\r
            <tr class="bg-white hover:bg-blue-50/50 transition duration-200">\r
              <td class="px-6 py-4">\r
                <span class="font-mono font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-100">{{ role.name }}</span>\r
                @if (role.createdAt) {\r
                  <div class="text-xs text-gray-500 mt-1">T\u1EA1o: {{ role.createdAt | date:'dd/MM/yyyy' }}</div>\r
                }\r
              </td>\r
              <td class="px-6 py-4 text-gray-600 max-w-xs truncate" [title]="role.description || ''">\r
                {{ role.description || '---' }}\r
              </td>\r
              <td class="px-6 py-4 text-center">\r
                <div class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-800 font-bold border border-gray-200">\r
                  {{ role.permissions ? role.permissions.length : 0 }}\r
                </div>\r
              </td>\r
              <td *hasAnyPermission="['ROLE_UPDATE', 'ROLE_DELETE', 'ROLE_ASSIGN_PERMISSION']" class="px-6 py-4 text-right space-x-4">\r
                <button *hasPermission="'ROLE_ASSIGN_PERMISSION'" (click)="openPermissionModal(role)" class="font-semibold text-purple-600 hover:text-purple-800 transition">Ph\xE2n quy\u1EC1n</button>\r
                <button *hasPermission="'ROLE_UPDATE'" (click)="openModal(role)" class="font-semibold text-blue-600 hover:text-blue-800 transition">S\u1EEDa</button>\r
                <button *hasPermission="'ROLE_DELETE'" (click)="onDelete(role.id)" class="font-semibold text-red-600 hover:text-red-800 transition">X\xF3a</button>\r
              </td>\r
            </tr>\r
          }\r
        </tbody>\r
      </table>\r
    </div>\r
\r
    <div class="flex items-center justify-between px-6 py-4 bg-gray-50/80 border-t border-gray-100 rounded-b-2xl">\r
      <div class="text-sm text-gray-500">\r
        Hi\u1EC3n th\u1ECB <span class="font-semibold text-gray-900">{{ startIndex() }}</span> - <span class="font-semibold text-gray-900">{{ endIndex() }}</span>\r
        trong s\u1ED1 <span class="font-semibold text-gray-900">{{ totalElements() }}</span> k\u1EBFt qu\u1EA3\r
      </div>\r
      <div class="flex space-x-2">\r
        <button (click)="changePage(currentPage() - 1)" [disabled]="currentPage() === 1"\r
          class="px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 transition shadow-sm">Tr\u01B0\u1EDBc</button>\r
        <div class="flex items-center justify-center px-4 py-1.5 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg border border-gray-200">\r
          Trang {{ currentPage() }} / {{ totalPages() === 0 ? 1 : totalPages() }}\r
        </div>\r
        <button (click)="changePage(currentPage() + 1)" [disabled]="currentPage() === totalPages() || totalPages() === 0"\r
          class="px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 transition shadow-sm">Sau</button>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
@if (isModalOpen()) {\r
  <div class="fixed inset-0 z-50 flex items-center justify-center p-4">\r
    <div class="absolute inset-0 bg-gray-900/60 backdrop-blur-sm" (click)="closeModal()"></div>\r
    <div class="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg p-8 border border-gray-100">\r
      <div class="flex justify-between items-center mb-6 border-b border-gray-100 pb-4">\r
        <h3 class="text-2xl font-extrabold text-gray-900">{{ isEditing() ? 'C\u1EADp nh\u1EADt Vai tr\xF2' : 'T\u1EA1o Vai tr\xF2 m\u1EDBi' }}</h3>\r
        <button (click)="closeModal()" class="text-gray-400 hover:text-gray-900 p-2 rounded-full"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button>\r
      </div>\r
\r
      <form [formGroup]="roleForm" (ngSubmit)="onSubmit()" class="space-y-5">\r
        <div>\r
          <label class="block mb-1.5 text-sm font-bold text-gray-700">T\xEAn Vai tr\xF2 *</label>\r
          <input type="text" formControlName="name" placeholder="VD: ROLE_ADMIN" class="bg-gray-50 border border-gray-200 text-gray-900 font-mono text-sm rounded-xl focus:ring-2 focus:ring-blue-500 block w-full p-3 outline-none uppercase transition">\r
          <p class="text-xs text-gray-500 mt-1.5">Vi\u1EBFt li\u1EC1n kh\xF4ng d\u1EA5u, in hoa. VD: ROLE_ADMIN, ROLE_TEACHER...</p>\r
        </div>\r
\r
        <div>\r
          <label class="block mb-1.5 text-sm font-bold text-gray-700">M\xF4 t\u1EA3</label>\r
          <textarea formControlName="description" rows="3" placeholder="VD: Qu\u1EA3n tr\u1ECB vi\xEAn h\u1EC7 th\u1ED1ng" class="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-2 focus:ring-blue-500 block w-full p-3 outline-none resize-none"></textarea>\r
        </div>\r
\r
        <div class="flex justify-end space-x-3.5 pt-4 border-t border-gray-100">\r
          <button type="button" (click)="closeModal()" class="px-5 py-3 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 shadow-sm">H\u1EE7y b\u1ECF</button>\r
          <button type="submit" [disabled]="roleForm.invalid || isLoading()" class="px-5 py-3 text-sm font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-700 disabled:bg-blue-300 shadow-md">\r
            {{ isEditing() ? 'L\u01B0u c\u1EADp nh\u1EADt' : 'T\u1EA1o vai tr\xF2' }}\r
          </button>\r
        </div>\r
      </form>\r
    </div>\r
  </div>\r
}\r
\r
@if (isDeleteModalOpen()) {\r
  <div class="fixed inset-0 z-[60] flex items-center justify-center p-4">\r
    <div class="absolute inset-0 bg-gray-900/60 backdrop-blur-sm" (click)="closeDeleteModal()"></div>\r
    <div class="relative bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 border border-gray-100 text-center">\r
      <h3 class="text-2xl font-extrabold text-gray-900">X\xF3a Vai tr\xF2?</h3>\r
      <p class="text-gray-600 mt-3 text-sm">Ch\u1EC9 x\xF3a \u0111\u01B0\u1EE3c khi ch\u01B0a c\xF3 t\xE0i kho\u1EA3n n\xE0o \u0111\u01B0\u1EE3c g\xE1n vai tr\xF2 n\xE0y.</p>\r
      <div class="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-gray-100">\r
        <button (click)="closeDeleteModal()" class="px-5 py-3.5 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 shadow-sm">H\u1EE7y</button>\r
        <button (click)="confirmDelete()" [disabled]="isLoading()" class="px-5 py-3.5 text-sm font-semibold text-white bg-red-600 rounded-xl hover:bg-red-700 shadow-md">\u0110\u1ED3ng \xFD x\xF3a</button>\r
      </div>\r
    </div>\r
  </div>\r
}\r
\r
@if (isPermissionModalOpen()) {\r
  <div class="fixed inset-0 z-[60] flex items-center justify-center p-4">\r
    <div class="absolute inset-0 bg-gray-900/60 backdrop-blur-sm" (click)="closePermissionModal()"></div>\r
    <div class="relative bg-white rounded-3xl shadow-2xl w-full max-w-4xl p-8 border border-gray-100 flex flex-col max-h-[90vh]">\r
      <div class="flex justify-between items-center mb-6 border-b border-gray-100 pb-4 shrink-0">\r
        <div>\r
          <h3 class="text-2xl font-extrabold text-gray-900">C\u1EA5u h\xECnh Ph\xE2n quy\u1EC1n</h3>\r
          <p class="text-sm text-gray-500 mt-1">Vai tr\xF2: <strong class="text-purple-600 font-mono">{{ selectedRoleForPermission()?.name }}</strong></p>\r
        </div>\r
        <button (click)="closePermissionModal()" class="text-gray-400 hover:text-gray-900 p-2 rounded-full bg-gray-50 hover:bg-gray-100 transition">\r
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>\r
        </button>\r
      </div>\r
\r
      <div class="flex items-center justify-between mb-4 shrink-0">\r
        <label class="flex items-center space-x-2 cursor-pointer bg-gray-50 px-3 py-2 rounded-lg border border-gray-200 hover:bg-purple-50 transition">\r
          <input type="checkbox" [checked]="isAllSelected()" (change)="toggleAllPermissions($event)" class="w-4 h-4 text-purple-600 rounded cursor-pointer">\r
          <span class="text-sm font-semibold text-gray-700">Ch\u1ECDn t\u1EA5t c\u1EA3</span>\r
        </label>\r
      </div>\r
\r
      <div class="flex-1 overflow-y-auto pr-1 scrollbar-thin space-y-4">\r
        @if (isLoading()) {\r
          <div class="text-center py-10 text-gray-500">\u0110ang t\u1EA3i danh s\xE1ch quy\u1EC1n...</div>\r
        } @else {\r
          @for (group of groupedPermissions(); track group.label) {\r
            <div class="border border-gray-200 rounded-2xl overflow-hidden">\r
              <!-- Group Header -->\r
              <div class="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-purple-50 to-indigo-50 border-b border-gray-200">\r
                <label class="flex items-center gap-3 cursor-pointer flex-1">\r
                  <input\r
                    type="checkbox"\r
                    [checked]="isGroupAllSelected(group.permissions)"\r
                    [indeterminate]="isGroupPartialSelected(group.permissions)"\r
                    (change)="toggleGroupPermissions(group.permissions, !isGroupAllSelected(group.permissions))"\r
                    class="w-4 h-4 text-purple-600 rounded cursor-pointer accent-purple-600"\r
                  >\r
                  <span class="text-sm font-bold text-gray-800">{{ group.label }}</span>\r
                </label>\r
                <span class="text-xs font-semibold px-2.5 py-1 rounded-full"\r
                      [class]="isGroupAllSelected(group.permissions)\r
                        ? 'bg-purple-600 text-white'\r
                        : isGroupPartialSelected(group.permissions)\r
                          ? 'bg-amber-100 text-amber-700'\r
                          : 'bg-gray-100 text-gray-500'">\r
                  {{ getGroupSelectedCount(group.permissions) }} / {{ group.permissions.length }}\r
                </span>\r
              </div>\r
              <!-- Permission Items -->\r
              <div class="grid grid-cols-1 md:grid-cols-2 gap-2 p-3 bg-white">\r
                @for (perm of group.permissions; track perm.id) {\r
                  <label class="flex items-start gap-2.5 p-2.5 rounded-xl cursor-pointer border transition-all"\r
                         [class]="selectedPermissionIds().includes($any(perm.id))\r
                           ? 'bg-purple-50 border-purple-200'\r
                           : 'border-transparent hover:bg-gray-50 hover:border-gray-200'">\r
                    <input\r
                      type="checkbox"\r
                      [checked]="selectedPermissionIds().includes($any(perm.id))"\r
                      (change)="togglePermission($any(perm.id))"\r
                      class="w-3.5 h-3.5 mt-0.5 accent-purple-600 cursor-pointer shrink-0"\r
                    >\r
                    <div class="min-w-0">\r
                      <p class="text-xs font-bold text-gray-800 font-mono leading-tight">{{ perm.name }}</p>\r
                      @if (perm.description) {\r
                        <p class="text-xs text-gray-400 mt-0.5 leading-tight">{{ perm.description }}</p>\r
                      }\r
                    </div>\r
                  </label>\r
                }\r
              </div>\r
            </div>\r
          }\r
        }\r
      </div>\r
\r
      <div class="flex justify-between items-center pt-5 mt-5 border-t border-gray-100 shrink-0">\r
        <div class="text-sm font-medium text-gray-600">\r
          \u0110ang ch\u1ECDn: <span class="text-purple-600 font-bold text-lg">{{ selectedPermissionIds().length }}</span> quy\u1EC1n\r
        </div>\r
        <div class="flex space-x-3.5">\r
          <button (click)="closePermissionModal()" class="px-5 py-2.5 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gray-50">H\u1EE7y</button>\r
          <button (click)="savePermissions()" [disabled]="isAssigning()" class="px-6 py-2.5 text-sm font-semibold text-white bg-purple-600 rounded-xl hover:bg-purple-700 shadow-md">\r
            L\u01B0u Ph\xE2n Quy\u1EC1n\r
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RoleComponent, { className: "RoleComponent", filePath: "src/app/features/admin/pages/role/role.component.ts", lineNumber: 18 });
})();

// src/app/features/admin/pages/permission/permission.component.ts
var _c05 = () => ["PERMISSION_UPDATE", "PERMISSION_DELETE"];
var _forTrack05 = ($index, $item) => $item.id;
function PermissionComponent_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 26);
    \u0275\u0275listener("click", function PermissionComponent_button_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 27);
    \u0275\u0275element(2, "path", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " T\u1EA1o Quy\u1EC1n ");
    \u0275\u0275elementEnd();
  }
}
function PermissionComponent_th_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 29);
    \u0275\u0275text(1, "Thao t\xE1c");
    \u0275\u0275elementEnd();
  }
}
function PermissionComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 30);
    \u0275\u0275text(2, "\u0110ang t\u1EA3i d\u1EEF li\u1EC7u...");
    \u0275\u0275elementEnd()();
  }
}
function PermissionComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 30);
    \u0275\u0275text(2, "Kh\xF4ng t\xECm th\u1EA5y quy\u1EC1n n\xE0o.");
    \u0275\u0275elementEnd()();
  }
}
function PermissionComponent_For_28_td_6_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 38);
    \u0275\u0275listener("click", function PermissionComponent_For_28_td_6_button_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const p_r4 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openModal(p_r4));
    });
    \u0275\u0275text(1, "S\u1EEDa");
    \u0275\u0275elementEnd();
  }
}
function PermissionComponent_For_28_td_6_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 39);
    \u0275\u0275listener("click", function PermissionComponent_For_28_td_6_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const p_r4 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDelete(p_r4.id));
    });
    \u0275\u0275text(1, "X\xF3a");
    \u0275\u0275elementEnd();
  }
}
function PermissionComponent_For_28_td_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 35);
    \u0275\u0275template(1, PermissionComponent_For_28_td_6_button_1_Template, 2, 0, "button", 36)(2, PermissionComponent_For_28_td_6_button_2_Template, 2, 0, "button", 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("hasPermission", "PERMISSION_UPDATE");
    \u0275\u0275advance();
    \u0275\u0275property("hasPermission", "PERMISSION_DELETE");
  }
}
function PermissionComponent_For_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 18)(1, "td", 31)(2, "span", 32);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 33);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, PermissionComponent_For_28_td_6_Template, 3, 2, "td", 34);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r4 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r4.name);
    \u0275\u0275advance();
    \u0275\u0275property("title", p_r4.description || "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r4.description || "Ch\u01B0a c\xF3 m\xF4 t\u1EA3", " ");
    \u0275\u0275advance();
    \u0275\u0275property("hasAnyPermission", \u0275\u0275pureFunction0(4, _c05));
  }
}
function PermissionComponent_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 40);
    \u0275\u0275listener("click", function PermissionComponent_Conditional_48_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 41)(3, "div", 42)(4, "h3", 43);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 44);
    \u0275\u0275listener("click", function PermissionComponent_Conditional_48_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 45);
    \u0275\u0275element(8, "path", 46);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "form", 47);
    \u0275\u0275listener("ngSubmit", function PermissionComponent_Conditional_48_Template_form_ngSubmit_9_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(10, "div")(11, "label", 48);
    \u0275\u0275text(12, "T\xEAn quy\u1EC1n *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 49);
    \u0275\u0275elementStart(14, "p", 50);
    \u0275\u0275text(15, "Vi\u1EBFt li\u1EC1n kh\xF4ng d\u1EA5u, in hoa.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div")(17, "label", 48);
    \u0275\u0275text(18, "M\xF4 t\u1EA3 chi ti\u1EBFt");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "textarea", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 52)(21, "button", 53);
    \u0275\u0275listener("click", function PermissionComponent_Conditional_48_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275text(22, "H\u1EE7y b\u1ECF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 54);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.isEditing() ? "C\u1EADp nh\u1EADt Quy\u1EC1n" : "T\u1EA1o Quy\u1EC1n m\u1EDBi");
    \u0275\u0275advance(4);
    \u0275\u0275property("formGroup", ctx_r1.permForm);
    \u0275\u0275advance(14);
    \u0275\u0275property("disabled", ctx_r1.permForm.invalid || ctx_r1.isLoading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isEditing() ? "L\u01B0u c\u1EADp nh\u1EADt" : "T\u1EA1o quy\u1EC1n", " ");
  }
}
function PermissionComponent_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 40);
    \u0275\u0275listener("click", function PermissionComponent_Conditional_49_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDeleteModal());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 55)(3, "h3", 43);
    \u0275\u0275text(4, "X\xF3a Quy\u1EC1n?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 56);
    \u0275\u0275text(6, "Ch\u1EC9 x\xF3a \u0111\u01B0\u1EE3c khi quy\u1EC1n ch\u01B0a \u0111\u01B0\u1EE3c g\xE1n cho b\u1EA5t k\u1EF3 vai tr\xF2 n\xE0o.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 57)(8, "button", 58);
    \u0275\u0275listener("click", function PermissionComponent_Conditional_49_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDeleteModal());
    });
    \u0275\u0275text(9, "H\u1EE7y");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 59);
    \u0275\u0275listener("click", function PermissionComponent_Conditional_49_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmDelete());
    });
    \u0275\u0275text(11, "\u0110\u1ED3ng \xFD x\xF3a");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275property("disabled", ctx_r1.isLoading());
  }
}
var PermissionComponent = class _PermissionComponent {
  permissionService = inject(PermissionService);
  toastService = inject(ToastService);
  fb = inject(FormBuilder);
  destroyRef = inject(DestroyRef);
  permissions = signal([], ...ngDevMode ? [{ debugName: "permissions" }] : (
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
  permForm;
  isDeleteModalOpen = signal(false, ...ngDevMode ? [{ debugName: "isDeleteModalOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  idToDelete = signal(null, ...ngDevMode ? [{ debugName: "idToDelete" }] : (
    /* istanbul ignore next */
    []
  ));
  ngOnInit() {
    this.initForm();
    this.setupFilters();
    this.loadData();
  }
  initForm() {
    this.permForm = this.fb.group({
      name: ["", [Validators.required, Validators.maxLength(100)]],
      description: [""]
    });
  }
  setupFilters() {
    this.searchControl.valueChanges.pipe(debounceTime(400), distinctUntilChanged(), takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.currentPage.set(1);
      this.loadData();
    });
  }
  loadData() {
    this.isLoading.set(true);
    const keyword = this.searchControl.value || void 0;
    this.permissionService.getAll(keyword, this.currentPage() - 1, this.pageSize()).subscribe({
      next: (res) => {
        this.permissions.set(res.content);
        this.totalElements.set(res.totalElements);
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
  openModal(perm) {
    if (perm) {
      this.isEditing.set(true);
      this.currentId.set(perm.id);
      this.permForm.patchValue({
        name: perm.name,
        description: perm.description
      });
    } else {
      this.isEditing.set(false);
      this.currentId.set(null);
      this.permForm.reset();
    }
    this.isModalOpen.set(true);
  }
  closeModal() {
    this.isModalOpen.set(false);
  }
  onSubmit() {
    if (this.permForm.invalid)
      return;
    this.isLoading.set(true);
    const data = __spreadValues({}, this.permForm.value);
    data.name = data.name.toUpperCase().trim();
    if (this.isEditing() && this.currentId()) {
      this.permissionService.update(this.currentId(), data).subscribe({
        next: () => {
          this.loadData();
          this.closeModal();
          this.toastService.success("Th\xE0nh c\xF4ng", "\u0110\xE3 c\u1EADp nh\u1EADt!");
        },
        error: (err) => {
          this.isLoading.set(false);
          this.toastService.error("L\u1ED7i", err.error?.message);
        }
      });
    } else {
      this.permissionService.create(data).subscribe({
        next: () => {
          this.loadData();
          this.closeModal();
          this.toastService.success("Th\xE0nh c\xF4ng", "\u0110\xE3 t\u1EA1o quy\u1EC1n m\u1EDBi!");
        },
        error: (err) => {
          this.isLoading.set(false);
          this.toastService.error("L\u1ED7i", err.error?.message);
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
  }
  confirmDelete() {
    const id = this.idToDelete();
    if (id) {
      this.isLoading.set(true);
      this.permissionService.delete(id).subscribe({
        next: () => {
          this.loadData();
          this.closeDeleteModal();
          this.toastService.success("\u0110\xE3 x\xF3a", "X\xF3a quy\u1EC1n th\xE0nh c\xF4ng.");
        },
        error: (err) => {
          this.isLoading.set(false);
          this.closeDeleteModal();
          this.toastService.error("L\u1ED7i", err.error?.message);
        }
      });
    }
  }
  static \u0275fac = function PermissionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PermissionComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PermissionComponent, selectors: [["app-permission"]], decls: 50, vars: 15, consts: [[1, "space-y-6"], [1, "flex", "flex-col", "xl:flex-row", "xl:justify-between", "xl:items-end", "pb-4", "border-b", "border-gray-100", "gap-4"], [1, "text-2xl", "font-extrabold", "text-gray-900", "tracking-tight"], [1, "text-sm", "text-gray-500", "mt-1"], [1, "flex", "flex-wrap", "items-center", "gap-3"], [1, "relative"], [1, "absolute", "inset-y-0", "left-0", "flex", "items-center", "pl-3", "pointer-events-none"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-gray-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], ["type", "text", "placeholder", "T\xECm t\xEAn quy\u1EC1n...", 1, "bg-white", "border", "border-gray-200", "text-gray-900", "text-sm", "rounded-xl", "focus:ring-2", "focus:ring-indigo-100", "focus:border-indigo-500", "block", "w-48", "xl:w-64", "pl-10", "p-2.5", "outline-none", "transition", "shadow-sm", 3, "formControl"], ["class", "bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 px-5 rounded-xl flex items-center transition shadow-md hover:shadow-lg text-sm shrink-0", 3, "click", 4, "hasPermission"], [1, "bg-white", "rounded-2xl", "shadow-sm", "border", "border-gray-100", "overflow-hidden"], [1, "overflow-x-auto"], [1, "w-full", "text-sm", "text-left", "text-gray-500"], [1, "text-xs", "text-gray-500", "uppercase", "bg-gray-50/80", "border-b", "border-gray-100", "font-semibold"], ["scope", "col", 1, "px-6", "py-4"], ["scope", "col", "class", "px-6 py-4 text-right", 4, "hasAnyPermission"], [1, "divide-y", "divide-gray-50"], [1, "bg-white", "hover:bg-indigo-50/50", "transition", "duration-200"], [1, "flex", "items-center", "justify-between", "px-6", "py-4", "bg-gray-50/80", "border-t", "border-gray-100", "rounded-b-2xl"], [1, "text-sm", "text-gray-500"], [1, "font-semibold", "text-gray-900"], [1, "flex", "space-x-2"], [1, "px-3", "py-1.5", "text-sm", "font-medium", "text-gray-700", "bg-white", "border", "border-gray-300", "rounded-lg", "hover:bg-gray-50", "disabled:opacity-50", "transition", "shadow-sm", 3, "click", "disabled"], [1, "flex", "items-center", "justify-center", "px-4", "py-1.5", "text-sm", "font-medium", "text-gray-700", "bg-gray-100", "rounded-lg", "border", "border-gray-200"], [1, "fixed", "inset-0", "z-[60]", "flex", "items-center", "justify-center", "p-4"], [1, "bg-indigo-600", "hover:bg-indigo-700", "text-white", "font-semibold", "py-2.5", "px-5", "rounded-xl", "flex", "items-center", "transition", "shadow-md", "hover:shadow-lg", "text-sm", "shrink-0", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "mr-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 4v16m8-8H4"], ["scope", "col", 1, "px-6", "py-4", "text-right"], ["colspan", "3", 1, "px-6", "py-12", "text-center", "text-gray-500"], [1, "px-6", "py-4"], [1, "font-mono", "font-bold", "text-indigo-700", "bg-indigo-50", "px-2", "py-1", "rounded-md", "border", "border-indigo-100"], [1, "px-6", "py-4", "text-gray-600", "max-w-md", "truncate", 3, "title"], ["class", "px-6 py-4 text-right space-x-4", 4, "hasAnyPermission"], [1, "px-6", "py-4", "text-right", "space-x-4"], ["class", "font-semibold text-blue-600 hover:text-blue-800 transition", 3, "click", 4, "hasPermission"], ["class", "font-semibold text-red-600 hover:text-red-800 transition", 3, "click", 4, "hasPermission"], [1, "font-semibold", "text-blue-600", "hover:text-blue-800", "transition", 3, "click"], [1, "font-semibold", "text-red-600", "hover:text-red-800", "transition", 3, "click"], [1, "absolute", "inset-0", "bg-gray-900/60", "backdrop-blur-sm", 3, "click"], [1, "relative", "bg-white", "rounded-3xl", "shadow-2xl", "w-full", "max-w-lg", "p-8", "border", "border-gray-100"], [1, "flex", "justify-between", "items-center", "mb-6", "border-b", "border-gray-100", "pb-4"], [1, "text-2xl", "font-extrabold", "text-gray-900"], [1, "text-gray-400", "hover:text-gray-900", "p-2", "rounded-full", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "space-y-5", 3, "ngSubmit", "formGroup"], [1, "block", "mb-1.5", "text-sm", "font-bold", "text-gray-700"], ["type", "text", "formControlName", "name", "placeholder", "VD: COURSE_CREATE, CLASS_VIEW", 1, "bg-gray-50", "border", "border-gray-200", "text-gray-900", "font-mono", "text-sm", "rounded-xl", "focus:ring-2", "focus:ring-indigo-500", "block", "w-full", "p-3", "outline-none", "uppercase", "transition"], [1, "text-xs", "text-gray-500", "mt-1.5"], ["formControlName", "description", "rows", "3", "placeholder", "Nh\u1EADp m\xF4 t\u1EA3 chi ti\u1EBFt ch\u1EE9c n\u0103ng...", 1, "bg-gray-50", "border", "border-gray-200", "text-gray-900", "text-sm", "rounded-xl", "focus:ring-2", "focus:ring-indigo-500", "block", "w-full", "p-3", "outline-none", "resize-none"], [1, "flex", "justify-end", "space-x-3.5", "pt-4", "border-t", "border-gray-100"], ["type", "button", 1, "px-5", "py-3", "text-sm", "font-semibold", "text-gray-700", "bg-white", "border", "border-gray-300", "rounded-xl", "hover:bg-gray-50", "shadow-sm", 3, "click"], ["type", "submit", 1, "px-5", "py-3", "text-sm", "font-semibold", "text-white", "bg-indigo-600", "rounded-xl", "hover:bg-indigo-700", "disabled:bg-indigo-300", "shadow-md", 3, "disabled"], [1, "relative", "bg-white", "rounded-3xl", "shadow-2xl", "w-full", "max-w-md", "p-8", "border", "border-gray-100", "text-center"], [1, "text-gray-600", "mt-3", "text-sm"], [1, "grid", "grid-cols-2", "gap-4", "mt-8", "pt-6", "border-t", "border-gray-100"], [1, "px-5", "py-3.5", "text-sm", "font-semibold", "text-gray-700", "bg-white", "border", "border-gray-300", "rounded-xl", "hover:bg-gray-50", "shadow-sm", 3, "click"], [1, "px-5", "py-3.5", "text-sm", "font-semibold", "text-white", "bg-red-600", "rounded-xl", "hover:bg-red-700", "shadow-md", 3, "click", "disabled"]], template: function PermissionComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Qu\u1EA3n l\xFD Quy\u1EC1n (Permissions)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "\u0110\u1ECBnh ngh\u0129a c\xE1c quy\u1EC1n h\u1EA1n c\u1EE5 th\u1EC3 trong h\u1EC7 th\u1ED1ng");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 4)(8, "div", 5)(9, "div", 6);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(10, "svg", 7);
      \u0275\u0275element(11, "path", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275element(12, "input", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275template(13, PermissionComponent_button_13_Template, 4, 0, "button", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 11)(15, "div", 12)(16, "table", 13)(17, "thead", 14)(18, "tr")(19, "th", 15);
      \u0275\u0275text(20, "T\xEAn quy\u1EC1n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "th", 15);
      \u0275\u0275text(22, "M\xF4 t\u1EA3");
      \u0275\u0275elementEnd();
      \u0275\u0275template(23, PermissionComponent_th_23_Template, 2, 0, "th", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "tbody", 17);
      \u0275\u0275conditionalCreate(25, PermissionComponent_Conditional_25_Template, 3, 0, "tr");
      \u0275\u0275conditionalCreate(26, PermissionComponent_Conditional_26_Template, 3, 0, "tr");
      \u0275\u0275repeaterCreate(27, PermissionComponent_For_28_Template, 7, 5, "tr", 18, _forTrack05);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(29, "div", 19)(30, "div", 20);
      \u0275\u0275text(31, " Hi\u1EC3n th\u1ECB ");
      \u0275\u0275elementStart(32, "span", 21);
      \u0275\u0275text(33);
      \u0275\u0275elementEnd();
      \u0275\u0275text(34, " - ");
      \u0275\u0275elementStart(35, "span", 21);
      \u0275\u0275text(36);
      \u0275\u0275elementEnd();
      \u0275\u0275text(37, " trong s\u1ED1 ");
      \u0275\u0275elementStart(38, "span", 21);
      \u0275\u0275text(39);
      \u0275\u0275elementEnd();
      \u0275\u0275text(40, " k\u1EBFt qu\u1EA3 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "div", 22)(42, "button", 23);
      \u0275\u0275listener("click", function PermissionComponent_Template_button_click_42_listener() {
        return ctx.changePage(ctx.currentPage() - 1);
      });
      \u0275\u0275text(43, "Tr\u01B0\u1EDBc");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "div", 24);
      \u0275\u0275text(45);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "button", 23);
      \u0275\u0275listener("click", function PermissionComponent_Template_button_click_46_listener() {
        return ctx.changePage(ctx.currentPage() + 1);
      });
      \u0275\u0275text(47, "Sau");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275conditionalCreate(48, PermissionComponent_Conditional_48_Template, 25, 4, "div", 25);
      \u0275\u0275conditionalCreate(49, PermissionComponent_Conditional_49_Template, 12, 1, "div", 25);
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275property("formControl", ctx.searchControl);
      \u0275\u0275advance();
      \u0275\u0275property("hasPermission", "PERMISSION_CREATE");
      \u0275\u0275advance(10);
      \u0275\u0275property("hasAnyPermission", \u0275\u0275pureFunction0(14, _c05));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isLoading() && ctx.permissions().length === 0 ? 25 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isLoading() && ctx.permissions().length === 0 ? 26 : -1);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.permissions());
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.startIndex());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.endIndex());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.totalElements());
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", ctx.currentPage() === 1);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2(" Trang ", ctx.currentPage(), " / ", ctx.totalPages() === 0 ? 1 : ctx.totalPages(), " ");
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.currentPage() === ctx.totalPages() || ctx.totalPages() === 0);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isModalOpen() ? 48 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isDeleteModalOpen() ? 49 : -1);
    }
  }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormControlDirective, FormGroupDirective, FormControlName, HasPermissionDirective], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PermissionComponent, [{
    type: Component,
    args: [{ selector: "app-permission", imports: [CommonModule, ReactiveFormsModule, HasPermissionDirective], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="space-y-6">\r
  <div class="flex flex-col xl:flex-row xl:justify-between xl:items-end pb-4 border-b border-gray-100 gap-4">\r
    <div>\r
      <h1 class="text-2xl font-extrabold text-gray-900 tracking-tight">Qu\u1EA3n l\xFD Quy\u1EC1n (Permissions)</h1>\r
      <p class="text-sm text-gray-500 mt-1">\u0110\u1ECBnh ngh\u0129a c\xE1c quy\u1EC1n h\u1EA1n c\u1EE5 th\u1EC3 trong h\u1EC7 th\u1ED1ng</p>\r
    </div>\r
    <div class="flex flex-wrap items-center gap-3">\r
      <div class="relative">\r
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">\r
          <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>\r
        </div>\r
        <input type="text" [formControl]="searchControl" placeholder="T\xECm t\xEAn quy\u1EC1n..." class="bg-white border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500 block w-48 xl:w-64 pl-10 p-2.5 outline-none transition shadow-sm">\r
      </div>\r
\r
      <button *hasPermission="'PERMISSION_CREATE'" (click)="openModal()" class="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 px-5 rounded-xl flex items-center transition shadow-md hover:shadow-lg text-sm shrink-0">\r
        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>\r
        T\u1EA1o Quy\u1EC1n\r
      </button>\r
    </div>\r
  </div>\r
\r
  <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">\r
    <div class="overflow-x-auto">\r
      <table class="w-full text-sm text-left text-gray-500">\r
        <thead class="text-xs text-gray-500 uppercase bg-gray-50/80 border-b border-gray-100 font-semibold">\r
          <tr>\r
            <th scope="col" class="px-6 py-4">T\xEAn quy\u1EC1n</th>\r
            <th scope="col" class="px-6 py-4">M\xF4 t\u1EA3</th>\r
            <th *hasAnyPermission="['PERMISSION_UPDATE', 'PERMISSION_DELETE']" scope="col" class="px-6 py-4 text-right">Thao t\xE1c</th>\r
          </tr>\r
        </thead>\r
        <tbody class="divide-y divide-gray-50">\r
          @if (isLoading() && permissions().length === 0) {\r
            <tr>\r
              <td colspan="3" class="px-6 py-12 text-center text-gray-500">\u0110ang t\u1EA3i d\u1EEF li\u1EC7u...</td>\r
            </tr>\r
          }\r
          @if (!isLoading() && permissions().length === 0) {\r
            <tr>\r
              <td colspan="3" class="px-6 py-12 text-center text-gray-500">Kh\xF4ng t\xECm th\u1EA5y quy\u1EC1n n\xE0o.</td>\r
            </tr>\r
          }\r
\r
          @for (p of permissions(); track p.id) {\r
            <tr class="bg-white hover:bg-indigo-50/50 transition duration-200">\r
              <td class="px-6 py-4">\r
                <span class="font-mono font-bold text-indigo-700 bg-indigo-50 px-2 py-1 rounded-md border border-indigo-100">{{ p.name }}</span>\r
              </td>\r
              <td class="px-6 py-4 text-gray-600 max-w-md truncate" [title]="p.description || ''">\r
                {{ p.description || 'Ch\u01B0a c\xF3 m\xF4 t\u1EA3' }}\r
              </td>\r
              <td *hasAnyPermission="['PERMISSION_UPDATE', 'PERMISSION_DELETE']" class="px-6 py-4 text-right space-x-4">\r
                <button *hasPermission="'PERMISSION_UPDATE'" (click)="openModal(p)" class="font-semibold text-blue-600 hover:text-blue-800 transition">S\u1EEDa</button>\r
                <button *hasPermission="'PERMISSION_DELETE'" (click)="onDelete(p.id)" class="font-semibold text-red-600 hover:text-red-800 transition">X\xF3a</button>\r
              </td>\r
            </tr>\r
          }\r
        </tbody>\r
      </table>\r
    </div>\r
\r
    <div class="flex items-center justify-between px-6 py-4 bg-gray-50/80 border-t border-gray-100 rounded-b-2xl">\r
      <div class="text-sm text-gray-500">\r
        Hi\u1EC3n th\u1ECB <span class="font-semibold text-gray-900">{{ startIndex() }}</span> - <span class="font-semibold text-gray-900">{{ endIndex() }}</span>\r
        trong s\u1ED1 <span class="font-semibold text-gray-900">{{ totalElements() }}</span> k\u1EBFt qu\u1EA3\r
      </div>\r
      <div class="flex space-x-2">\r
        <button (click)="changePage(currentPage() - 1)" [disabled]="currentPage() === 1"\r
          class="px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 transition shadow-sm">Tr\u01B0\u1EDBc</button>\r
        <div class="flex items-center justify-center px-4 py-1.5 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg border border-gray-200">\r
          Trang {{ currentPage() }} / {{ totalPages() === 0 ? 1 : totalPages() }}\r
        </div>\r
        <button (click)="changePage(currentPage() + 1)" [disabled]="currentPage() === totalPages() || totalPages() === 0"\r
          class="px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 transition shadow-sm">Sau</button>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
@if (isModalOpen()) {\r
  <div class="fixed inset-0 z-[60] flex items-center justify-center p-4">\r
    <div class="absolute inset-0 bg-gray-900/60 backdrop-blur-sm" (click)="closeModal()"></div>\r
    <div class="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg p-8 border border-gray-100">\r
      <div class="flex justify-between items-center mb-6 border-b border-gray-100 pb-4">\r
        <h3 class="text-2xl font-extrabold text-gray-900">{{ isEditing() ? 'C\u1EADp nh\u1EADt Quy\u1EC1n' : 'T\u1EA1o Quy\u1EC1n m\u1EDBi' }}</h3>\r
        <button (click)="closeModal()" class="text-gray-400 hover:text-gray-900 p-2 rounded-full"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button>\r
      </div>\r
\r
      <form [formGroup]="permForm" (ngSubmit)="onSubmit()" class="space-y-5">\r
        <div>\r
          <label class="block mb-1.5 text-sm font-bold text-gray-700">T\xEAn quy\u1EC1n *</label>\r
          <input type="text" formControlName="name" placeholder="VD: COURSE_CREATE, CLASS_VIEW" class="bg-gray-50 border border-gray-200 text-gray-900 font-mono text-sm rounded-xl focus:ring-2 focus:ring-indigo-500 block w-full p-3 outline-none uppercase transition">\r
          <p class="text-xs text-gray-500 mt-1.5">Vi\u1EBFt li\u1EC1n kh\xF4ng d\u1EA5u, in hoa.</p>\r
        </div>\r
\r
        <div>\r
          <label class="block mb-1.5 text-sm font-bold text-gray-700">M\xF4 t\u1EA3 chi ti\u1EBFt</label>\r
          <textarea formControlName="description" rows="3" placeholder="Nh\u1EADp m\xF4 t\u1EA3 chi ti\u1EBFt ch\u1EE9c n\u0103ng..." class="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-2 focus:ring-indigo-500 block w-full p-3 outline-none resize-none"></textarea>\r
        </div>\r
\r
        <div class="flex justify-end space-x-3.5 pt-4 border-t border-gray-100">\r
          <button type="button" (click)="closeModal()" class="px-5 py-3 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 shadow-sm">H\u1EE7y b\u1ECF</button>\r
          <button type="submit" [disabled]="permForm.invalid || isLoading()" class="px-5 py-3 text-sm font-semibold text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 disabled:bg-indigo-300 shadow-md">\r
            {{ isEditing() ? 'L\u01B0u c\u1EADp nh\u1EADt' : 'T\u1EA1o quy\u1EC1n' }}\r
          </button>\r
        </div>\r
      </form>\r
    </div>\r
  </div>\r
}\r
\r
@if (isDeleteModalOpen()) {\r
  <div class="fixed inset-0 z-[60] flex items-center justify-center p-4">\r
    <div class="absolute inset-0 bg-gray-900/60 backdrop-blur-sm" (click)="closeDeleteModal()"></div>\r
    <div class="relative bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 border border-gray-100 text-center">\r
      <h3 class="text-2xl font-extrabold text-gray-900">X\xF3a Quy\u1EC1n?</h3>\r
      <p class="text-gray-600 mt-3 text-sm">Ch\u1EC9 x\xF3a \u0111\u01B0\u1EE3c khi quy\u1EC1n ch\u01B0a \u0111\u01B0\u1EE3c g\xE1n cho b\u1EA5t k\u1EF3 vai tr\xF2 n\xE0o.</p>\r
      <div class="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-gray-100">\r
        <button (click)="closeDeleteModal()" class="px-5 py-3.5 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 shadow-sm">H\u1EE7y</button>\r
        <button (click)="confirmDelete()" [disabled]="isLoading()" class="px-5 py-3.5 text-sm font-semibold text-white bg-red-600 rounded-xl hover:bg-red-700 shadow-md">\u0110\u1ED3ng \xFD x\xF3a</button>\r
      </div>\r
    </div>\r
  </div>\r
}\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PermissionComponent, { className: "PermissionComponent", filePath: "src/app/features/admin/pages/permission/permission.component.ts", lineNumber: 17 });
})();

// src/app/modules/user/services/user.service.ts
var UserService = class _UserService {
  http = inject(HttpClient);
  apiUrl = `${environment.apiUrl}/api/v1/users`;
  getAll(keyword, status, role, page = 0, size = 10) {
    let params = new HttpParams().set("page", page.toString()).set("size", size.toString());
    if (keyword)
      params = params.set("keyword", keyword);
    if (status)
      params = params.set("status", status);
    if (role)
      params = params.set("role", role);
    return this.http.get(this.apiUrl, { params });
  }
  getById(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  update(id, data) {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }
  /** Gán nhiều role cho user (Set&lt;string&gt;) */
  updateRoles(userId, roles) {
    return this.http.patch(`${this.apiUrl}/${userId}/roles`, { roles });
  }
  updateStatus(userId, status) {
    return this.http.patch(`${this.apiUrl}/${userId}/status`, { status });
  }
  resetPassword(userId) {
    return this.http.patch(`${this.apiUrl}/${userId}/reset-password`, {});
  }
  static \u0275fac = function UserService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UserService, factory: _UserService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/features/admin/pages/user/user.component.ts
var _c06 = () => ["ACCOUNT_UPDATE", "ROLE_ASSIGN_PERMISSION"];
var _forTrack06 = ($index, $item) => $item.id;
function UserComponent_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const role_r1 = ctx.$implicit;
    \u0275\u0275property("value", role_r1.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(role_r1.name);
  }
}
function UserComponent_th_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 34);
    \u0275\u0275text(1, "Thao t\xE1c");
    \u0275\u0275elementEnd();
  }
}
function UserComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 35);
    \u0275\u0275text(2, "\u0110ang t\u1EA3i danh s\xE1ch t\xE0i kho\u1EA3n...");
    \u0275\u0275elementEnd()();
  }
}
function UserComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 35);
    \u0275\u0275text(2, "Kh\xF4ng t\xECm th\u1EA5y t\xE0i kho\u1EA3n n\xE0o ph\xF9 h\u1EE3p v\u1EDBi b\u1ED9 l\u1ECDc.");
    \u0275\u0275elementEnd()();
  }
}
function UserComponent_For_45_Conditional_8_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r2);
  }
}
function UserComponent_For_45_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, UserComponent_For_45_Conditional_8_For_1_Template, 2, 1, "span", 45, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const user_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275repeater(user_r3.roles);
  }
}
function UserComponent_For_45_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 40);
    \u0275\u0275text(1, "---");
    \u0275\u0275elementEnd();
  }
}
function UserComponent_For_45_td_16_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 50);
    \u0275\u0275listener("click", function UserComponent_For_45_td_16_button_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const user_r3 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.openEditModal(user_r3));
    });
    \u0275\u0275text(1, "Ch\u1EC9nh s\u1EEDa");
    \u0275\u0275elementEnd();
  }
}
function UserComponent_For_45_td_16_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 51);
    \u0275\u0275listener("click", function UserComponent_For_45_td_16_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const user_r3 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.openResetModal(user_r3));
    });
    \u0275\u0275text(1, "Reset M\u1EADt kh\u1EA9u");
    \u0275\u0275elementEnd();
  }
}
function UserComponent_For_45_td_16_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 52);
    \u0275\u0275listener("click", function UserComponent_For_45_td_16_button_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const user_r3 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.openRoleModal(user_r3));
    });
    \u0275\u0275text(1, "Vai tr\xF2");
    \u0275\u0275elementEnd();
  }
}
function UserComponent_For_45_td_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 46);
    \u0275\u0275template(1, UserComponent_For_45_td_16_button_1_Template, 2, 0, "button", 47)(2, UserComponent_For_45_td_16_button_2_Template, 2, 0, "button", 48)(3, UserComponent_For_45_td_16_button_3_Template, 2, 0, "button", 49);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("hasPermission", "ACCOUNT_UPDATE");
    \u0275\u0275advance();
    \u0275\u0275property("hasPermission", "ACCOUNT_UPDATE");
    \u0275\u0275advance();
    \u0275\u0275property("hasPermission", "ROLE_ASSIGN_PERMISSION");
  }
}
function UserComponent_For_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 25)(1, "td", 36)(2, "div", 37);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 38);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 36)(7, "div", 39);
    \u0275\u0275conditionalCreate(8, UserComponent_For_45_Conditional_8_Template, 2, 0)(9, UserComponent_For_45_Conditional_9_Template, 2, 0, "span", 40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td", 41);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 42)(14, "span", 43);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(16, UserComponent_For_45_td_16_Template, 4, 3, "td", 44);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_r3 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r3.fullName || "---");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r3.email);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(user_r3.roles && user_r3.roles.length > 0 ? 8 : 9);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(12, 24, user_r3.createdAt, "dd/MM/yyyy HH:mm"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("bg-green-50", user_r3.status === "ACTIVE")("text-green-700", user_r3.status === "ACTIVE")("border-green-200", user_r3.status === "ACTIVE")("bg-gray-100", user_r3.status === "INACTIVE")("text-gray-600", user_r3.status === "INACTIVE")("border-gray-300", user_r3.status === "INACTIVE")("bg-red-50", user_r3.status === "LOCKED")("text-red-700", user_r3.status === "LOCKED")("border-red-200", user_r3.status === "LOCKED");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r4.statusLabel(user_r3.status), " ");
    \u0275\u0275advance();
    \u0275\u0275property("hasAnyPermission", \u0275\u0275pureFunction0(27, _c06));
  }
}
function UserComponent_Conditional_62_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 66);
    \u0275\u0275text(1, "T\xE0i kho\u1EA3n b\u1ECB kh\xF3a s\u1EBD kh\xF4ng th\u1EC3 \u0111\u0103ng nh\u1EADp v\xE0o h\u1EC7 th\u1ED1ng.");
    \u0275\u0275elementEnd();
  }
}
function UserComponent_Conditional_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 53);
    \u0275\u0275listener("click", function UserComponent_Conditional_62_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.closeEditModal());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 54)(3, "div", 55)(4, "h3", 56);
    \u0275\u0275text(5, "Ch\u1EC9nh s\u1EEDa T\xE0i kho\u1EA3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 57);
    \u0275\u0275listener("click", function UserComponent_Conditional_62_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.closeEditModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 58);
    \u0275\u0275element(8, "path", 59);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "p", 60);
    \u0275\u0275text(10, "Email \u0111\u0103ng nh\u1EADp: ");
    \u0275\u0275elementStart(11, "strong", 61);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "form", 62);
    \u0275\u0275listener("ngSubmit", function UserComponent_Conditional_62_Template_form_ngSubmit_13_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.submitEdit());
    });
    \u0275\u0275elementStart(14, "div")(15, "label", 63);
    \u0275\u0275text(16, "H\u1ECD v\xE0 t\xEAn");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "input", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div")(19, "label", 63);
    \u0275\u0275text(20, "Tr\u1EA1ng th\xE1i t\xE0i kho\u1EA3n *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "select", 65)(22, "option", 9);
    \u0275\u0275text(23, "\u0110ang ho\u1EA1t \u0111\u1ED9ng (Active)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "option", 10);
    \u0275\u0275text(25, "Ng\u1EEBng ho\u1EA1t \u0111\u1ED9ng (Inactive)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "option", 11);
    \u0275\u0275text(27, "B\u1ECB kh\xF3a (Locked)");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(28, UserComponent_Conditional_62_Conditional_28_Template, 2, 0, "p", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 67)(30, "button", 68);
    \u0275\u0275listener("click", function UserComponent_Conditional_62_Template_button_click_30_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.closeEditModal());
    });
    \u0275\u0275text(31, "H\u1EE7y");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "button", 69);
    \u0275\u0275text(33, "L\u01B0u c\u1EADp nh\u1EADt");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_3_0;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate((tmp_1_0 = ctx_r4.selectedUserForEdit()) == null ? null : tmp_1_0.email);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r4.editForm);
    \u0275\u0275advance(15);
    \u0275\u0275conditional(((tmp_3_0 = ctx_r4.editForm.get("status")) == null ? null : tmp_3_0.value) === "LOCKED" ? 28 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r4.editForm.invalid || ctx_r4.isProcessing());
  }
}
function UserComponent_Conditional_63_For_24_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 86);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const role_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(role_r11.description);
  }
}
function UserComponent_Conditional_63_For_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 83)(1, "input", 84);
    \u0275\u0275listener("change", function UserComponent_Conditional_63_For_24_Template_input_change_1_listener() {
      const role_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.toggleRole(role_r11.name));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 85);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, UserComponent_Conditional_63_For_24_Conditional_4_Template, 2, 1, "span", 86);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const role_r11 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("bg-purple-50", ctx_r4.isRoleSelected(role_r11.name));
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r4.isRoleSelected(role_r11.name));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(role_r11.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(role_r11.description ? 4 : -1);
  }
}
function UserComponent_Conditional_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 53);
    \u0275\u0275listener("click", function UserComponent_Conditional_63_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.closeRoleModal());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 54)(3, "div", 55)(4, "h3", 56);
    \u0275\u0275text(5, "G\xE1n Vai Tr\xF2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 57);
    \u0275\u0275listener("click", function UserComponent_Conditional_63_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.closeRoleModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 58);
    \u0275\u0275element(8, "path", 59);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "div", 70)(10, "div", 71)(11, "p", 72);
    \u0275\u0275text(12, "T\xE0i kho\u1EA3n: ");
    \u0275\u0275elementStart(13, "strong", 73);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "p", 74);
    \u0275\u0275text(16, "Hi\u1EC7n t\u1EA1i: ");
    \u0275\u0275elementStart(17, "strong", 75);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div")(20, "label", 76);
    \u0275\u0275text(21, "Ch\u1ECDn m\u1ED9t ho\u1EB7c nhi\u1EC1u vai tr\xF2 *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 77);
    \u0275\u0275repeaterCreate(23, UserComponent_Conditional_63_For_24_Template, 5, 5, "label", 78, _forTrack06);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "p", 79);
    \u0275\u0275text(26, "M\u1ED9t t\xE0i kho\u1EA3n c\xF3 th\u1EC3 mang nhi\u1EC1u vai tr\xF2 c\xF9ng l\xFAc.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 80)(28, "button", 81);
    \u0275\u0275listener("click", function UserComponent_Conditional_63_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.closeRoleModal());
    });
    \u0275\u0275text(29, "H\u1EE7y b\u1ECF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "button", 82);
    \u0275\u0275listener("click", function UserComponent_Conditional_63_Template_button_click_30_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.submitRoleChange());
    });
    \u0275\u0275text(31, " L\u01B0u Vai Tr\xF2 ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate((tmp_1_0 = ctx_r4.selectedUserForRole()) == null ? null : tmp_1_0.email);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r4.formatRoles((tmp_2_0 = ctx_r4.selectedUserForRole()) == null ? null : tmp_2_0.roles));
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r4.roles());
    \u0275\u0275advance(7);
    \u0275\u0275property("disabled", ctx_r4.isProcessing());
  }
}
function UserComponent_Conditional_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 53);
    \u0275\u0275listener("click", function UserComponent_Conditional_64_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.closeResetModal());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 87)(3, "h3", 2);
    \u0275\u0275text(4, "Kh\xF4i ph\u1EE5c m\u1EADt kh\u1EA9u?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 88);
    \u0275\u0275text(6, " \u0110\u1EB7t l\u1EA1i m\u1EADt kh\u1EA9u cho t\xE0i kho\u1EA3n ");
    \u0275\u0275elementStart(7, "strong", 61);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, ". ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 89)(11, "button", 90);
    \u0275\u0275listener("click", function UserComponent_Conditional_64_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.closeResetModal());
    });
    \u0275\u0275text(12, " H\u1EE7y b\u1ECF ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 91);
    \u0275\u0275listener("click", function UserComponent_Conditional_64_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.confirmResetPassword());
    });
    \u0275\u0275text(14, " \u0110\u1ED3ng \xFD Reset ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate((tmp_1_0 = ctx_r4.userToReset()) == null ? null : tmp_1_0.email);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r4.isProcessing());
  }
}
var UserComponent = class _UserComponent {
  userService = inject(UserService);
  roleService = inject(RoleService);
  toastService = inject(ToastService);
  fb = inject(FormBuilder);
  destroyRef = inject(DestroyRef);
  users = signal([], ...ngDevMode ? [{ debugName: "users" }] : (
    /* istanbul ignore next */
    []
  ));
  roles = signal([], ...ngDevMode ? [{ debugName: "roles" }] : (
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
  isProcessing = signal(false, ...ngDevMode ? [{ debugName: "isProcessing" }] : (
    /* istanbul ignore next */
    []
  ));
  searchControl = new FormControl("");
  statusFilterControl = new FormControl("");
  roleFilterControl = new FormControl("");
  selectedStatusFilter = signal("", ...ngDevMode ? [{ debugName: "selectedStatusFilter" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedRoleFilter = signal("", ...ngDevMode ? [{ debugName: "selectedRoleFilter" }] : (
    /* istanbul ignore next */
    []
  ));
  // Client-side filtering by status & role
  filteredUsers = computed(() => {
    let list = this.users();
    const status = this.selectedStatusFilter();
    const role = this.selectedRoleFilter();
    if (status) {
      list = list.filter((u) => u.status === status);
    }
    if (role) {
      list = list.filter((u) => u.roles && u.roles.includes(role));
    }
    return list;
  }, ...ngDevMode ? [{ debugName: "filteredUsers" }] : (
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
  // Edit Modal State (Combines Name & Status)
  isEditModalOpen = signal(false, ...ngDevMode ? [{ debugName: "isEditModalOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedUserForEdit = signal(null, ...ngDevMode ? [{ debugName: "selectedUserForEdit" }] : (
    /* istanbul ignore next */
    []
  ));
  editForm;
  // Role Modal State
  isRoleModalOpen = signal(false, ...ngDevMode ? [{ debugName: "isRoleModalOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedUserForRole = signal(null, ...ngDevMode ? [{ debugName: "selectedUserForRole" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedRoleNames = signal([], ...ngDevMode ? [{ debugName: "selectedRoleNames" }] : (
    /* istanbul ignore next */
    []
  ));
  // Reset Password Modal State
  isResetModalOpen = signal(false, ...ngDevMode ? [{ debugName: "isResetModalOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  userToReset = signal(null, ...ngDevMode ? [{ debugName: "userToReset" }] : (
    /* istanbul ignore next */
    []
  ));
  ngOnInit() {
    this.editForm = this.fb.group({
      fullName: ["", [Validators.maxLength(100)]],
      status: ["ACTIVE", [Validators.required]]
    });
    this.loadRoles();
    this.setupFilters();
    this.loadData();
  }
  loadRoles() {
    this.roleService.getAll(void 0, 0, 100).subscribe({
      next: (res) => this.roles.set(res.content || [])
    });
  }
  setupFilters() {
    this.searchControl.valueChanges.pipe(debounceTime(400), distinctUntilChanged(), takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.currentPage.set(1);
      this.loadData();
    });
    this.statusFilterControl.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((val) => {
      this.selectedStatusFilter.set(val || "");
    });
    this.roleFilterControl.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((val) => {
      this.selectedRoleFilter.set(val || "");
    });
  }
  loadData() {
    this.isLoading.set(true);
    const keyword = this.searchControl.value || void 0;
    this.userService.getAll(keyword, void 0, void 0, this.currentPage() - 1, this.pageSize()).subscribe({
      next: (res) => {
        this.users.set(res.content || []);
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
  formatRoles(roles) {
    if (!roles || roles.length === 0)
      return "---";
    return roles.join(", ");
  }
  openEditModal(user) {
    this.selectedUserForEdit.set(user);
    this.editForm.patchValue({
      fullName: user.fullName || "",
      status: user.status || "ACTIVE"
    });
    this.isEditModalOpen.set(true);
  }
  closeEditModal() {
    this.isEditModalOpen.set(false);
    this.selectedUserForEdit.set(null);
  }
  submitEdit() {
    const user = this.selectedUserForEdit();
    if (!user || this.editForm.invalid)
      return;
    const val = this.editForm.value;
    const nameChanged = val.fullName !== user.fullName;
    const statusChanged = val.status && val.status !== user.status;
    if (!nameChanged && !statusChanged) {
      this.closeEditModal();
      return;
    }
    this.isProcessing.set(true);
    const updateName$ = nameChanged ? this.userService.update(user.id, { fullName: val.fullName }) : of(null);
    const updateStatus$ = statusChanged ? this.userService.updateStatus(user.id, val.status) : of(null);
    forkJoin([updateName$, updateStatus$]).subscribe({
      next: () => {
        this.toastService.success("Th\xE0nh c\xF4ng", "\u0110\xE3 c\u1EADp nh\u1EADt th\xF4ng tin t\xE0i kho\u1EA3n!");
        this.isProcessing.set(false);
        this.closeEditModal();
        this.loadData();
      },
      error: (err) => {
        this.isProcessing.set(false);
        this.toastService.error("L\u1ED7i", err.error?.message || "Kh\xF4ng th\u1EC3 c\u1EADp nh\u1EADt!");
      }
    });
  }
  openRoleModal(user) {
    this.selectedUserForRole.set(user);
    this.selectedRoleNames.set([...user.roles || []]);
    this.isRoleModalOpen.set(true);
  }
  closeRoleModal() {
    this.isRoleModalOpen.set(false);
    this.selectedUserForRole.set(null);
  }
  toggleRole(roleName) {
    const current = this.selectedRoleNames();
    if (current.includes(roleName)) {
      this.selectedRoleNames.set(current.filter((r) => r !== roleName));
    } else {
      this.selectedRoleNames.set([...current, roleName]);
    }
  }
  isRoleSelected(roleName) {
    return this.selectedRoleNames().includes(roleName);
  }
  submitRoleChange() {
    const user = this.selectedUserForRole();
    if (!user)
      return;
    const newRoles = this.selectedRoleNames();
    const oldRoles = [...user.roles || []].sort().join(",");
    const nextRoles = [...newRoles].sort().join(",");
    if (oldRoles === nextRoles) {
      this.toastService.warning("C\u1EA3nh b\xE1o", "Danh s\xE1ch vai tr\xF2 kh\xF4ng thay \u0111\u1ED5i.");
      return;
    }
    this.isProcessing.set(true);
    this.userService.updateRoles(user.id, newRoles).subscribe({
      next: () => {
        this.toastService.success("Th\xE0nh c\xF4ng", `\u0110\xE3 c\u1EADp nh\u1EADt vai tr\xF2 cho ${user.email}`);
        this.isProcessing.set(false);
        this.closeRoleModal();
        this.loadData();
      },
      error: (err) => {
        this.isProcessing.set(false);
        this.toastService.error("L\u1ED7i", err.error?.message || "Kh\xF4ng th\u1EC3 \u0111\u1ED5i vai tr\xF2!");
      }
    });
  }
  openResetModal(user) {
    this.userToReset.set(user);
    this.isResetModalOpen.set(true);
  }
  closeResetModal() {
    this.isResetModalOpen.set(false);
    this.userToReset.set(null);
  }
  confirmResetPassword() {
    const user = this.userToReset();
    if (!user)
      return;
    this.isProcessing.set(true);
    this.userService.resetPassword(user.id).subscribe({
      next: (res) => {
        const message = res?.message || "\u0110\xE3 \u0111\u1EB7t l\u1EA1i m\u1EADt kh\u1EA9u v\u1EC1 m\xE3 m\u1EB7c \u0111\u1ECBnh!";
        this.toastService.success("Th\xE0nh c\xF4ng", message);
        this.isProcessing.set(false);
        this.closeResetModal();
      },
      error: (err) => {
        this.isProcessing.set(false);
        this.closeResetModal();
        this.toastService.error("L\u1ED7i", err.error?.message || "Kh\xF4ng th\u1EC3 reset m\u1EADt kh\u1EA9u!");
      }
    });
  }
  statusLabel(status) {
    switch (status) {
      case "ACTIVE":
        return "Ho\u1EA1t \u0111\u1ED9ng";
      case "INACTIVE":
        return "Ng\u1EEBng ho\u1EA1t \u0111\u1ED9ng";
      case "LOCKED":
        return "B\u1ECB kh\xF3a";
      default:
        return status;
    }
  }
  static \u0275fac = function UserComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserComponent, selectors: [["app-user"]], decls: 65, vars: 16, consts: [[1, "space-y-6"], [1, "flex", "flex-col", "xl:flex-row", "xl:justify-between", "xl:items-end", "pb-4", "border-b", "border-gray-100", "gap-4"], [1, "text-2xl", "font-extrabold", "text-gray-900", "tracking-tight"], [1, "text-sm", "text-gray-500", "mt-1"], [1, "flex", "flex-wrap", "items-center", "gap-3"], [1, "bg-white", "border", "border-gray-200", "text-gray-900", "text-sm", "rounded-xl", "focus:ring-2", "focus:ring-blue-100", "focus:border-blue-500", "block", "p-2.5", "outline-none", "transition", "shadow-sm", "font-medium", "w-48", 3, "formControl"], ["value", ""], [3, "value"], [1, "bg-white", "border", "border-gray-200", "text-gray-900", "text-sm", "rounded-xl", "focus:ring-2", "focus:ring-blue-100", "focus:border-blue-500", "block", "p-2.5", "outline-none", "transition", "shadow-sm", "font-medium", "w-40", 3, "formControl"], ["value", "ACTIVE"], ["value", "INACTIVE"], ["value", "LOCKED"], [1, "relative"], [1, "absolute", "inset-y-0", "left-0", "flex", "items-center", "pl-3", "pointer-events-none"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-gray-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], ["type", "text", "placeholder", "T\xECm email / h\u1ECD t\xEAn...", 1, "bg-white", "border", "border-gray-200", "text-gray-900", "text-sm", "rounded-xl", "focus:ring-2", "focus:ring-blue-100", "focus:border-blue-500", "block", "w-56", "xl:w-72", "pl-10", "p-2.5", "outline-none", "transition", "shadow-sm", 3, "formControl"], [1, "bg-white", "rounded-2xl", "shadow-sm", "border", "border-gray-100", "overflow-hidden"], [1, "overflow-x-auto"], [1, "w-full", "text-sm", "text-left", "text-gray-500", "min-w-[900px]"], [1, "text-xs", "text-gray-500", "uppercase", "bg-gray-50/80", "border-b", "border-gray-100", "font-semibold"], ["scope", "col", 1, "px-6", "py-4"], ["scope", "col", 1, "px-6", "py-4", "text-center"], ["scope", "col", "class", "px-6 py-4 text-right", 4, "hasAnyPermission"], [1, "divide-y", "divide-gray-50"], [1, "bg-white", "hover:bg-slate-50/50", "transition", "duration-200"], [1, "flex", "items-center", "justify-between", "px-6", "py-4", "bg-gray-50/80", "border-t", "border-gray-100", "rounded-b-2xl"], [1, "text-sm", "text-gray-500"], [1, "font-semibold", "text-gray-900"], [1, "flex", "space-x-2"], [1, "px-3", "py-1.5", "text-sm", "font-medium", "text-gray-700", "bg-white", "border", "border-gray-300", "rounded-lg", "hover:bg-gray-50", "disabled:opacity-50", "transition", "shadow-sm", 3, "click", "disabled"], [1, "flex", "items-center", "justify-center", "px-4", "py-1.5", "text-sm", "font-medium", "text-gray-700", "bg-gray-100", "rounded-lg", "border", "border-gray-200"], [1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "p-4"], [1, "fixed", "inset-0", "z-[60]", "flex", "items-center", "justify-center", "p-4"], ["scope", "col", 1, "px-6", "py-4", "text-right"], ["colspan", "5", 1, "px-6", "py-12", "text-center", "text-gray-500"], [1, "px-6", "py-4"], [1, "font-bold", "text-slate-800", "text-base"], [1, "text-sm", "text-gray-500", "mt-0.5", "font-mono"], [1, "flex", "flex-wrap", "gap-1"], [1, "text-gray-400"], [1, "px-6", "py-4", "text-center", "text-gray-500"], [1, "px-6", "py-4", "text-center"], [1, "px-2.5", "py-1", "text-xs", "font-semibold", "rounded-full", "border", "inline-flex", "items-center"], ["class", "px-6 py-4 text-right space-x-2", 4, "hasAnyPermission"], [1, "text-xs", "font-mono", "font-semibold", "text-blue-700", "bg-blue-50", "px-2", "py-0.5", "rounded", "border", "border-blue-100"], [1, "px-6", "py-4", "text-right", "space-x-2"], ["class", "font-semibold text-blue-600 hover:text-blue-800 transition bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-lg border border-blue-200 text-xs", 3, "click", 4, "hasPermission"], ["title", "Kh\xF4i ph\u1EE5c m\u1EADt kh\u1EA9u m\u1EB7c \u0111\u1ECBnh", "class", "font-medium text-amber-600 hover:text-amber-800 transition bg-amber-50 hover:bg-amber-100 px-2.5 py-1.5 rounded-lg border border-amber-200 text-xs", 3, "click", 4, "hasPermission"], ["class", "font-semibold text-purple-600 hover:text-purple-800 transition bg-purple-50 hover:bg-purple-100 px-3 py-1.5 rounded-lg border border-purple-200 text-xs", 3, "click", 4, "hasPermission"], [1, "font-semibold", "text-blue-600", "hover:text-blue-800", "transition", "bg-blue-50", "hover:bg-blue-100", "px-3", "py-1.5", "rounded-lg", "border", "border-blue-200", "text-xs", 3, "click"], ["title", "Kh\xF4i ph\u1EE5c m\u1EADt kh\u1EA9u m\u1EB7c \u0111\u1ECBnh", 1, "font-medium", "text-amber-600", "hover:text-amber-800", "transition", "bg-amber-50", "hover:bg-amber-100", "px-2.5", "py-1.5", "rounded-lg", "border", "border-amber-200", "text-xs", 3, "click"], [1, "font-semibold", "text-purple-600", "hover:text-purple-800", "transition", "bg-purple-50", "hover:bg-purple-100", "px-3", "py-1.5", "rounded-lg", "border", "border-purple-200", "text-xs", 3, "click"], [1, "absolute", "inset-0", "bg-gray-900/60", "backdrop-blur-sm", 3, "click"], [1, "relative", "bg-white", "rounded-3xl", "shadow-2xl", "w-full", "max-w-md", "p-8", "border", "border-gray-100"], [1, "flex", "justify-between", "items-center", "mb-6", "border-b", "border-gray-100", "pb-4"], [1, "text-2xl", "font-extrabold", "text-gray-900"], [1, "text-gray-400", "hover:text-gray-900", "p-2", "rounded-full", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "text-sm", "text-gray-500", "mb-4"], [1, "text-gray-900", "font-mono"], [1, "space-y-5", 3, "ngSubmit", "formGroup"], [1, "block", "mb-1.5", "text-sm", "font-bold", "text-gray-700"], ["type", "text", "formControlName", "fullName", "placeholder", "Nguy\u1EC5n V\u0103n A", 1, "bg-gray-50", "border", "border-gray-200", "text-gray-900", "text-sm", "rounded-xl", "focus:ring-2", "focus:ring-blue-500", "block", "w-full", "p-3", "outline-none"], ["formControlName", "status", 1, "bg-gray-50", "border", "border-gray-200", "text-gray-900", "text-sm", "rounded-xl", "focus:ring-2", "focus:ring-blue-500", "block", "w-full", "p-3", "outline-none", "font-semibold"], [1, "text-xs", "text-red-600", "mt-1.5", "font-medium"], [1, "flex", "justify-end", "space-x-3.5", "pt-4", "border-t", "border-gray-100"], ["type", "button", 1, "px-5", "py-3", "text-sm", "font-semibold", "text-gray-700", "bg-white", "border", "border-gray-300", "rounded-xl", "hover:bg-gray-50", "shadow-sm", 3, "click"], ["type", "submit", 1, "px-5", "py-3", "text-sm", "font-semibold", "text-white", "bg-blue-600", "rounded-xl", "hover:bg-blue-700", "disabled:bg-blue-300", "shadow-md", 3, "disabled"], [1, "space-y-5"], [1, "p-4", "bg-purple-50", "rounded-xl", "border", "border-purple-100"], [1, "text-sm", "text-purple-800"], [1, "font-bold", "text-purple-900", "font-mono"], [1, "text-sm", "text-purple-800", "mt-1"], [1, "font-bold", "text-purple-900"], [1, "block", "mb-2", "text-sm", "font-bold", "text-gray-700"], [1, "space-y-2", "max-h-60", "overflow-y-auto", "border", "border-gray-200", "rounded-xl", "p-3"], [1, "flex", "items-center", "p-2", "rounded-lg", "cursor-pointer", "hover:bg-purple-50", "transition", 3, "bg-purple-50"], [1, "text-xs", "text-gray-500", "mt-2"], [1, "flex", "justify-end", "space-x-3.5", "pt-4", "border-t", "border-gray-100", "mt-6"], ["type", "button", 1, "px-5", "py-3", "text-sm", "font-semibold", "text-gray-700", "bg-white", "border", "border-gray-300", "rounded-xl", "hover:bg-gray-50", "shadow-sm", "transition", 3, "click"], ["type", "button", 1, "px-5", "py-3", "text-sm", "font-semibold", "text-white", "bg-purple-600", "rounded-xl", "hover:bg-purple-700", "disabled:bg-purple-300", "shadow-md", "transition", 3, "click", "disabled"], [1, "flex", "items-center", "p-2", "rounded-lg", "cursor-pointer", "hover:bg-purple-50", "transition"], ["type", "checkbox", 1, "w-4", "h-4", "text-purple-600", "rounded", "cursor-pointer", 3, "change", "checked"], [1, "ml-3", "text-sm", "font-mono", "font-semibold", "text-gray-800"], [1, "ml-2", "text-xs", "text-gray-500", "truncate"], [1, "relative", "bg-white", "rounded-3xl", "shadow-2xl", "w-full", "max-w-md", "p-8", "border", "border-gray-100", "text-center"], [1, "text-gray-600", "mt-3", "text-sm", "leading-relaxed"], [1, "grid", "grid-cols-2", "gap-4", "mt-8", "pt-6", "border-t", "border-gray-100"], ["type", "button", 1, "px-5", "py-3.5", "text-sm", "font-semibold", "text-gray-700", "bg-white", "border", "border-gray-300", "rounded-xl", "hover:bg-gray-50", "transition", "shadow-sm", 3, "click"], ["type", "button", 1, "px-5", "py-3.5", "text-sm", "font-semibold", "text-white", "bg-amber-500", "rounded-xl", "hover:bg-amber-600", "disabled:bg-amber-300", "transition", "shadow-md", 3, "click", "disabled"]], template: function UserComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Qu\u1EA3n l\xFD T\xE0i kho\u1EA3n (Users)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Gi\xE1m s\xE1t tr\u1EA1ng th\xE1i ho\u1EA1t \u0111\u1ED9ng v\xE0 ph\xE2n quy\u1EC1n truy c\u1EADp h\u1EC7 th\u1ED1ng");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 4)(8, "select", 5)(9, "option", 6);
      \u0275\u0275text(10, "T\u1EA5t c\u1EA3 Vai tr\xF2");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(11, UserComponent_For_12_Template, 2, 2, "option", 7, _forTrack06);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "select", 8)(14, "option", 6);
      \u0275\u0275text(15, "T\u1EA5t c\u1EA3 tr\u1EA1ng th\xE1i");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "option", 9);
      \u0275\u0275text(17, "\u0110ang ho\u1EA1t \u0111\u1ED9ng");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "option", 10);
      \u0275\u0275text(19, "Ng\u1EEBng ho\u1EA1t \u0111\u1ED9ng");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "option", 11);
      \u0275\u0275text(21, "B\u1ECB kh\xF3a");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "div", 12)(23, "div", 13);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(24, "svg", 14);
      \u0275\u0275element(25, "path", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275element(26, "input", 16);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(27, "div", 17)(28, "div", 18)(29, "table", 19)(30, "thead", 20)(31, "tr")(32, "th", 21);
      \u0275\u0275text(33, "H\u1ECD t\xEAn / Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "th", 21);
      \u0275\u0275text(35, "Vai tr\xF2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "th", 22);
      \u0275\u0275text(37, "Th\u1EDDi gian t\u1EA1o");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "th", 22);
      \u0275\u0275text(39, "Tr\u1EA1ng th\xE1i");
      \u0275\u0275elementEnd();
      \u0275\u0275template(40, UserComponent_th_40_Template, 2, 0, "th", 23);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "tbody", 24);
      \u0275\u0275conditionalCreate(42, UserComponent_Conditional_42_Template, 3, 0, "tr");
      \u0275\u0275conditionalCreate(43, UserComponent_Conditional_43_Template, 3, 0, "tr");
      \u0275\u0275repeaterCreate(44, UserComponent_For_45_Template, 17, 28, "tr", 25, _forTrack06);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(46, "div", 26)(47, "div", 27);
      \u0275\u0275text(48, " Hi\u1EC3n th\u1ECB ");
      \u0275\u0275elementStart(49, "span", 28);
      \u0275\u0275text(50);
      \u0275\u0275elementEnd();
      \u0275\u0275text(51, " / ");
      \u0275\u0275elementStart(52, "span", 28);
      \u0275\u0275text(53);
      \u0275\u0275elementEnd();
      \u0275\u0275text(54, " t\xE0i kho\u1EA3n ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "div", 29)(56, "button", 30);
      \u0275\u0275listener("click", function UserComponent_Template_button_click_56_listener() {
        return ctx.changePage(ctx.currentPage() - 1);
      });
      \u0275\u0275text(57, "Tr\u01B0\u1EDBc");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "div", 31);
      \u0275\u0275text(59);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "button", 30);
      \u0275\u0275listener("click", function UserComponent_Template_button_click_60_listener() {
        return ctx.changePage(ctx.currentPage() + 1);
      });
      \u0275\u0275text(61, "Sau");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275conditionalCreate(62, UserComponent_Conditional_62_Template, 34, 4, "div", 32);
      \u0275\u0275conditionalCreate(63, UserComponent_Conditional_63_Template, 32, 3, "div", 32);
      \u0275\u0275conditionalCreate(64, UserComponent_Conditional_64_Template, 15, 2, "div", 33);
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("formControl", ctx.roleFilterControl);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.roles());
      \u0275\u0275advance(2);
      \u0275\u0275property("formControl", ctx.statusFilterControl);
      \u0275\u0275advance(13);
      \u0275\u0275property("formControl", ctx.searchControl);
      \u0275\u0275advance(14);
      \u0275\u0275property("hasAnyPermission", \u0275\u0275pureFunction0(15, _c06));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isLoading() && ctx.filteredUsers().length === 0 ? 42 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isLoading() && ctx.filteredUsers().length === 0 ? 43 : -1);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.filteredUsers());
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.filteredUsers().length);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.totalElements());
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", ctx.currentPage() === 1);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2(" Trang ", ctx.currentPage(), " / ", ctx.totalPages() === 0 ? 1 : ctx.totalPages(), " ");
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.currentPage() === ctx.totalPages() || ctx.totalPages() === 0);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isEditModalOpen() ? 62 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isRoleModalOpen() ? 63 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isResetModalOpen() ? 64 : -1);
    }
  }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormControlDirective, FormGroupDirective, FormControlName, HasPermissionDirective, DatePipe], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserComponent, [{
    type: Component,
    args: [{ selector: "app-user", imports: [CommonModule, ReactiveFormsModule, HasPermissionDirective], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="space-y-6">\r
  <div class="flex flex-col xl:flex-row xl:justify-between xl:items-end pb-4 border-b border-gray-100 gap-4">\r
    <div>\r
      <h1 class="text-2xl font-extrabold text-gray-900 tracking-tight">Qu\u1EA3n l\xFD T\xE0i kho\u1EA3n (Users)</h1>\r
      <p class="text-sm text-gray-500 mt-1">Gi\xE1m s\xE1t tr\u1EA1ng th\xE1i ho\u1EA1t \u0111\u1ED9ng v\xE0 ph\xE2n quy\u1EC1n truy c\u1EADp h\u1EC7 th\u1ED1ng</p>\r
    </div>\r
\r
    <div class="flex flex-wrap items-center gap-3">\r
      <select [formControl]="roleFilterControl" class="bg-white border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-500 block p-2.5 outline-none transition shadow-sm font-medium w-48">\r
        <option value="">T\u1EA5t c\u1EA3 Vai tr\xF2</option>\r
        @for (role of roles(); track role.id) {\r
          <option [value]="role.name">{{ role.name }}</option>\r
        }\r
      </select>\r
\r
      <select [formControl]="statusFilterControl" class="bg-white border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-500 block p-2.5 outline-none transition shadow-sm font-medium w-40">\r
        <option value="">T\u1EA5t c\u1EA3 tr\u1EA1ng th\xE1i</option>\r
        <option value="ACTIVE">\u0110ang ho\u1EA1t \u0111\u1ED9ng</option>\r
        <option value="INACTIVE">Ng\u1EEBng ho\u1EA1t \u0111\u1ED9ng</option>\r
        <option value="LOCKED">B\u1ECB kh\xF3a</option>\r
      </select>\r
\r
      <div class="relative">\r
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">\r
          <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>\r
        </div>\r
        <input type="text" [formControl]="searchControl" placeholder="T\xECm email / h\u1ECD t\xEAn..." class="bg-white border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-500 block w-56 xl:w-72 pl-10 p-2.5 outline-none transition shadow-sm">\r
      </div>\r
    </div>\r
  </div>\r
\r
  <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">\r
    <div class="overflow-x-auto">\r
      <table class="w-full text-sm text-left text-gray-500 min-w-[900px]">\r
        <thead class="text-xs text-gray-500 uppercase bg-gray-50/80 border-b border-gray-100 font-semibold">\r
          <tr>\r
            <th scope="col" class="px-6 py-4">H\u1ECD t\xEAn / Email</th>\r
            <th scope="col" class="px-6 py-4">Vai tr\xF2</th>\r
            <th scope="col" class="px-6 py-4 text-center">Th\u1EDDi gian t\u1EA1o</th>\r
            <th scope="col" class="px-6 py-4 text-center">Tr\u1EA1ng th\xE1i</th>\r
            <th *hasAnyPermission="['ACCOUNT_UPDATE', 'ROLE_ASSIGN_PERMISSION']" scope="col" class="px-6 py-4 text-right">Thao t\xE1c</th>\r
          </tr>\r
        </thead>\r
        <tbody class="divide-y divide-gray-50">\r
          @if (isLoading() && filteredUsers().length === 0) {\r
            <tr>\r
              <td colspan="5" class="px-6 py-12 text-center text-gray-500">\u0110ang t\u1EA3i danh s\xE1ch t\xE0i kho\u1EA3n...</td>\r
            </tr>\r
          }\r
          @if (!isLoading() && filteredUsers().length === 0) {\r
            <tr>\r
              <td colspan="5" class="px-6 py-12 text-center text-gray-500">Kh\xF4ng t\xECm th\u1EA5y t\xE0i kho\u1EA3n n\xE0o ph\xF9 h\u1EE3p v\u1EDBi b\u1ED9 l\u1ECDc.</td>\r
            </tr>\r
          }\r
\r
          @for (user of filteredUsers(); track user.id) {\r
            <tr class="bg-white hover:bg-slate-50/50 transition duration-200">\r
              <td class="px-6 py-4">\r
                <div class="font-bold text-slate-800 text-base">{{ user.fullName || '---' }}</div>\r
                <div class="text-sm text-gray-500 mt-0.5 font-mono">{{ user.email }}</div>\r
              </td>\r
              <td class="px-6 py-4">\r
                <div class="flex flex-wrap gap-1">\r
                  @if (user.roles && user.roles.length > 0) {\r
                    @for (r of user.roles; track r) {\r
                      <span class="text-xs font-mono font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">{{ r }}</span>\r
                    }\r
                  } @else {\r
                    <span class="text-gray-400">---</span>\r
                  }\r
                </div>\r
              </td>\r
              <td class="px-6 py-4 text-center text-gray-500">\r
                {{ user.createdAt | date:'dd/MM/yyyy HH:mm' }}\r
              </td>\r
              <td class="px-6 py-4 text-center">\r
                <span class="px-2.5 py-1 text-xs font-semibold rounded-full border inline-flex items-center"\r
                      [class.bg-green-50]="user.status === 'ACTIVE'"\r
                      [class.text-green-700]="user.status === 'ACTIVE'"\r
                      [class.border-green-200]="user.status === 'ACTIVE'"\r
                      [class.bg-gray-100]="user.status === 'INACTIVE'"\r
                      [class.text-gray-600]="user.status === 'INACTIVE'"\r
                      [class.border-gray-300]="user.status === 'INACTIVE'"\r
                      [class.bg-red-50]="user.status === 'LOCKED'"\r
                      [class.text-red-700]="user.status === 'LOCKED'"\r
                      [class.border-red-200]="user.status === 'LOCKED'">\r
                  {{ statusLabel(user.status) }}\r
                </span>\r
              </td>\r
              <td *hasAnyPermission="['ACCOUNT_UPDATE', 'ROLE_ASSIGN_PERMISSION']" class="px-6 py-4 text-right space-x-2">\r
                <button *hasPermission="'ACCOUNT_UPDATE'" (click)="openEditModal(user)" class="font-semibold text-blue-600 hover:text-blue-800 transition bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-lg border border-blue-200 text-xs">Ch\u1EC9nh s\u1EEDa</button>\r
                <button *hasPermission="'ACCOUNT_UPDATE'" (click)="openResetModal(user)" title="Kh\xF4i ph\u1EE5c m\u1EADt kh\u1EA9u m\u1EB7c \u0111\u1ECBnh"\r
                        class="font-medium text-amber-600 hover:text-amber-800 transition bg-amber-50 hover:bg-amber-100 px-2.5 py-1.5 rounded-lg border border-amber-200 text-xs">Reset M\u1EADt kh\u1EA9u</button>\r
                <button *hasPermission="'ROLE_ASSIGN_PERMISSION'" (click)="openRoleModal(user)" class="font-semibold text-purple-600 hover:text-purple-800 transition bg-purple-50 hover:bg-purple-100 px-3 py-1.5 rounded-lg border border-purple-200 text-xs">Vai tr\xF2</button>\r
              </td>\r
            </tr>\r
          }\r
        </tbody>\r
      </table>\r
    </div>\r
\r
    <div class="flex items-center justify-between px-6 py-4 bg-gray-50/80 border-t border-gray-100 rounded-b-2xl">\r
      <div class="text-sm text-gray-500">\r
        Hi\u1EC3n th\u1ECB <span class="font-semibold text-gray-900">{{ filteredUsers().length }}</span> / <span class="font-semibold text-gray-900">{{ totalElements() }}</span> t\xE0i kho\u1EA3n\r
      </div>\r
      <div class="flex space-x-2">\r
        <button (click)="changePage(currentPage() - 1)" [disabled]="currentPage() === 1"\r
          class="px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 transition shadow-sm">Tr\u01B0\u1EDBc</button>\r
        <div class="flex items-center justify-center px-4 py-1.5 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg border border-gray-200">\r
          Trang {{ currentPage() }} / {{ totalPages() === 0 ? 1 : totalPages() }}\r
        </div>\r
        <button (click)="changePage(currentPage() + 1)" [disabled]="currentPage() === totalPages() || totalPages() === 0"\r
          class="px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 transition shadow-sm">Sau</button>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- MODAL C\u1EACP NH\u1EACT TH\xD4NG TIN V\xC0 TR\u1EA0NG TH\xC1I T\xC0I KHO\u1EA2N -->\r
@if (isEditModalOpen()) {\r
  <div class="fixed inset-0 z-50 flex items-center justify-center p-4">\r
    <div class="absolute inset-0 bg-gray-900/60 backdrop-blur-sm" (click)="closeEditModal()"></div>\r
    <div class="relative bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 border border-gray-100">\r
      <div class="flex justify-between items-center mb-6 border-b border-gray-100 pb-4">\r
        <h3 class="text-2xl font-extrabold text-gray-900">Ch\u1EC9nh s\u1EEDa T\xE0i kho\u1EA3n</h3>\r
        <button (click)="closeEditModal()" class="text-gray-400 hover:text-gray-900 p-2 rounded-full"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button>\r
      </div>\r
\r
      <p class="text-sm text-gray-500 mb-4">Email \u0111\u0103ng nh\u1EADp: <strong class="text-gray-900 font-mono">{{ selectedUserForEdit()?.email }}</strong></p>\r
\r
      <form [formGroup]="editForm" (ngSubmit)="submitEdit()" class="space-y-5">\r
        <div>\r
          <label class="block mb-1.5 text-sm font-bold text-gray-700">H\u1ECD v\xE0 t\xEAn</label>\r
          <input type="text" formControlName="fullName" placeholder="Nguy\u1EC5n V\u0103n A" class="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-2 focus:ring-blue-500 block w-full p-3 outline-none">\r
        </div>\r
\r
        <div>\r
          <label class="block mb-1.5 text-sm font-bold text-gray-700">Tr\u1EA1ng th\xE1i t\xE0i kho\u1EA3n *</label>\r
          <select formControlName="status" class="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-2 focus:ring-blue-500 block w-full p-3 outline-none font-semibold">\r
            <option value="ACTIVE">\u0110ang ho\u1EA1t \u0111\u1ED9ng (Active)</option>\r
            <option value="INACTIVE">Ng\u1EEBng ho\u1EA1t \u0111\u1ED9ng (Inactive)</option>\r
            <option value="LOCKED">B\u1ECB kh\xF3a (Locked)</option>\r
          </select>\r
          @if (editForm.get('status')?.value === 'LOCKED') {\r
            <p class="text-xs text-red-600 mt-1.5 font-medium">T\xE0i kho\u1EA3n b\u1ECB kh\xF3a s\u1EBD kh\xF4ng th\u1EC3 \u0111\u0103ng nh\u1EADp v\xE0o h\u1EC7 th\u1ED1ng.</p>\r
          }\r
        </div>\r
\r
        <div class="flex justify-end space-x-3.5 pt-4 border-t border-gray-100">\r
          <button type="button" (click)="closeEditModal()" class="px-5 py-3 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 shadow-sm">H\u1EE7y</button>\r
          <button type="submit" [disabled]="editForm.invalid || isProcessing()" class="px-5 py-3 text-sm font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-700 disabled:bg-blue-300 shadow-md">L\u01B0u c\u1EADp nh\u1EADt</button>\r
        </div>\r
      </form>\r
    </div>\r
  </div>\r
}\r
\r
<!-- MODAL G\xC1N VAI TR\xD2 -->\r
@if (isRoleModalOpen()) {\r
  <div class="fixed inset-0 z-50 flex items-center justify-center p-4">\r
    <div class="absolute inset-0 bg-gray-900/60 backdrop-blur-sm" (click)="closeRoleModal()"></div>\r
    <div class="relative bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 border border-gray-100">\r
      <div class="flex justify-between items-center mb-6 border-b border-gray-100 pb-4">\r
        <h3 class="text-2xl font-extrabold text-gray-900">G\xE1n Vai Tr\xF2</h3>\r
        <button (click)="closeRoleModal()" class="text-gray-400 hover:text-gray-900 p-2 rounded-full"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button>\r
      </div>\r
\r
      <div class="space-y-5">\r
        <div class="p-4 bg-purple-50 rounded-xl border border-purple-100">\r
          <p class="text-sm text-purple-800">T\xE0i kho\u1EA3n: <strong class="font-bold text-purple-900 font-mono">{{ selectedUserForRole()?.email }}</strong></p>\r
          <p class="text-sm text-purple-800 mt-1">Hi\u1EC7n t\u1EA1i: <strong class="font-bold text-purple-900">{{ formatRoles(selectedUserForRole()?.roles) }}</strong></p>\r
        </div>\r
\r
        <div>\r
          <label class="block mb-2 text-sm font-bold text-gray-700">Ch\u1ECDn m\u1ED9t ho\u1EB7c nhi\u1EC1u vai tr\xF2 *</label>\r
          <div class="space-y-2 max-h-60 overflow-y-auto border border-gray-200 rounded-xl p-3">\r
            @for (role of roles(); track role.id) {\r
              <label class="flex items-center p-2 rounded-lg cursor-pointer hover:bg-purple-50 transition"\r
                     [class.bg-purple-50]="isRoleSelected(role.name)">\r
                <input type="checkbox"\r
                       [checked]="isRoleSelected(role.name)"\r
                       (change)="toggleRole(role.name)"\r
                       class="w-4 h-4 text-purple-600 rounded cursor-pointer">\r
                <span class="ml-3 text-sm font-mono font-semibold text-gray-800">{{ role.name }}</span>\r
                @if (role.description) {\r
                  <span class="ml-2 text-xs text-gray-500 truncate">{{ role.description }}</span>\r
                }\r
              </label>\r
            }\r
          </div>\r
          <p class="text-xs text-gray-500 mt-2">M\u1ED9t t\xE0i kho\u1EA3n c\xF3 th\u1EC3 mang nhi\u1EC1u vai tr\xF2 c\xF9ng l\xFAc.</p>\r
        </div>\r
\r
        <div class="flex justify-end space-x-3.5 pt-4 border-t border-gray-100 mt-6">\r
          <button type="button" (click)="closeRoleModal()" class="px-5 py-3 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 shadow-sm transition">H\u1EE7y b\u1ECF</button>\r
          <button type="button" (click)="submitRoleChange()" [disabled]="isProcessing()" class="px-5 py-3 text-sm font-semibold text-white bg-purple-600 rounded-xl hover:bg-purple-700 disabled:bg-purple-300 shadow-md transition">\r
            L\u01B0u Vai Tr\xF2\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
}\r
\r
<!-- MODAL RESET M\u1EACT KH\u1EA8U -->\r
@if (isResetModalOpen()) {\r
  <div class="fixed inset-0 z-[60] flex items-center justify-center p-4">\r
    <div class="absolute inset-0 bg-gray-900/60 backdrop-blur-sm" (click)="closeResetModal()"></div>\r
    <div class="relative bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 border border-gray-100 text-center">\r
      <h3 class="text-2xl font-extrabold text-gray-900 tracking-tight">Kh\xF4i ph\u1EE5c m\u1EADt kh\u1EA9u?</h3>\r
      <p class="text-gray-600 mt-3 text-sm leading-relaxed">\r
        \u0110\u1EB7t l\u1EA1i m\u1EADt kh\u1EA9u cho t\xE0i kho\u1EA3n <strong class="text-gray-900 font-mono">{{ userToReset()?.email }}</strong>.\r
      </p>\r
      <div class="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-gray-100">\r
        <button type="button" (click)="closeResetModal()"\r
            class="px-5 py-3.5 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition shadow-sm">\r
            H\u1EE7y b\u1ECF\r
        </button>\r
        <button type="button" (click)="confirmResetPassword()" [disabled]="isProcessing()"\r
            class="px-5 py-3.5 text-sm font-semibold text-white bg-amber-500 rounded-xl hover:bg-amber-600 disabled:bg-amber-300 transition shadow-md">\r
            \u0110\u1ED3ng \xFD Reset\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
}\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserComponent, { className: "UserComponent", filePath: "src/app/features/admin/pages/user/user.component.ts", lineNumber: 21 });
})();

// src/app/modules/academic/models/enrollment.model.ts
var ENROLLMENT_STATUS_MAP = {
  ACTIVE: "\u0110ang h\u1ECDc",
  INACTIVE: "Kh\xF4ng ho\u1EA1t \u0111\u1ED9ng",
  DROPPED: "\u0110\xE3 ngh\u1EC9",
  ENROLLED: "\u0110\xE3 \u0111\u0103ng k\xFD",
  COMPLETED: "Ho\xE0n th\xE0nh",
  PENDING: "Ch\u1EDD x\xE9t duy\u1EC7t"
};
var ENROLLMENT_STATUS_OPTIONS = [
  { value: "ACTIVE", label: "\u0110ang h\u1ECDc" },
  { value: "INACTIVE", label: "Kh\xF4ng ho\u1EA1t \u0111\u1ED9ng" },
  { value: "DROPPED", label: "\u0110\xE3 ngh\u1EC9" },
  { value: "ENROLLED", label: "\u0110\xE3 \u0111\u0103ng k\xFD" },
  { value: "COMPLETED", label: "Ho\xE0n th\xE0nh" },
  { value: "PENDING", label: "Ch\u1EDD x\xE9t duy\u1EC7t" }
];

// src/app/features/academic/pages/enrollment/enrollment.component.ts
var _c07 = () => ["ENROLLMENT_UPDATE", "ENROLLMENT_DELETE"];
var _forTrack07 = ($index, $item) => $item.id;
var _forTrack13 = ($index, $item) => $item.value;
function EnrollmentComponent_Conditional_1_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 29);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 30);
    \u0275\u0275element(3, "circle", 31)(4, "path", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " \u0110ang t\u1EA3i danh s\xE1ch l\u1EDBp h\u1ECDc... ");
    \u0275\u0275elementEnd()();
  }
}
function EnrollmentComponent_Conditional_1_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 29);
    \u0275\u0275text(2, " Kh\xF4ng t\xECm th\u1EA5y l\u1EDBp h\u1ECDc n\xE0o. ");
    \u0275\u0275elementEnd()();
  }
}
function EnrollmentComponent_Conditional_1_Conditional_31_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 33)(1, "td", 34);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 35)(4, "div", 36);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 37);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td", 35)(9, "div", 38);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 39);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td", 40)(14, "div", 41)(15, "span");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 42);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 43);
    \u0275\u0275element(20, "div", 44);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "td", 35)(22, "span", 45);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "td", 46)(25, "button", 47);
    \u0275\u0275listener("click", function EnrollmentComponent_Conditional_1_Conditional_31_For_1_Template_button_click_25_listener() {
      const c_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.viewClassDetail(c_r3));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(26, "svg", 48);
    \u0275\u0275element(27, "path", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275text(28, " Xem h\u1ECDc vi\xEAn ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    const \u0275$index_73_r5 = ctx.$index;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" #", ctx_r3.classStartIndex() + \u0275$index_73_r5, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r3.code);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r3.courseName || "---");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r3.courseCode || "M\xE3 KH");
    const curr_r6 = c_r3.currentStudents || 0;
    const max_r7 = c_r3.maxStudents || 30;
    const percent_r8 = ctx_r3.calculateCapacityPercent(curr_r6, max_r7);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", curr_r6, " / ", max_r7, " HV");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", percent_r8, "%");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(percent_r8 >= 90 ? "bg-red-500" : percent_r8 >= 70 ? "bg-amber-500" : "bg-blue-600");
    \u0275\u0275styleProp("width", percent_r8, "%");
    const badge_r9 = ctx_r3.getClassStatusBadge(c_r3.status);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(badge_r9.bgClass + " " + badge_r9.textClass + " " + badge_r9.borderClass);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", badge_r9.label, " ");
  }
}
function EnrollmentComponent_Conditional_1_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, EnrollmentComponent_Conditional_1_Conditional_31_For_1_Template, 29, 15, "tr", 33, _forTrack07);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r3.classes());
  }
}
function EnrollmentComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div")(2, "h1", 5);
    \u0275\u0275text(3, "Qu\u1EA3n l\xFD X\u1EBFp l\u1EDBp");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 6);
    \u0275\u0275text(5, "Ch\u1ECDn l\u1EDBp h\u1ECDc \u0111\u1EC3 xem danh s\xE1ch h\u1ECDc vi\xEAn v\xE0 qu\u1EA3n l\xFD x\u1EBFp l\u1EDBp/chuy\u1EC3n l\u1EDBp");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 7)(7, "div", 8)(8, "div", 9);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 10);
    \u0275\u0275element(10, "path", 11);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275element(11, "input", 12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 13)(13, "table", 14)(14, "thead", 15)(15, "tr")(16, "th", 16);
    \u0275\u0275text(17, "STT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 16);
    \u0275\u0275text(19, "L\u1EDBp h\u1ECDc");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th", 16);
    \u0275\u0275text(21, "Kh\xF3a h\u1ECDc");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th", 16);
    \u0275\u0275text(23, "S\u0129 s\u1ED1 h\u1ECDc vi\xEAn");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "th", 16);
    \u0275\u0275text(25, "Tr\u1EA1ng th\xE1i l\u1EDBp");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "th", 17);
    \u0275\u0275text(27, "Thao t\xE1c");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "tbody", 18);
    \u0275\u0275conditionalCreate(29, EnrollmentComponent_Conditional_1_Conditional_29_Template, 6, 0, "tr")(30, EnrollmentComponent_Conditional_1_Conditional_30_Template, 3, 0, "tr")(31, EnrollmentComponent_Conditional_1_Conditional_31_Template, 2, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 19)(33, "div", 20);
    \u0275\u0275text(34, " Hi\u1EC3n th\u1ECB ");
    \u0275\u0275elementStart(35, "span", 21);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd();
    \u0275\u0275text(37, " - ");
    \u0275\u0275elementStart(38, "span", 21);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd();
    \u0275\u0275text(40, " trong t\u1ED5ng s\u1ED1 ");
    \u0275\u0275elementStart(41, "span", 21);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd();
    \u0275\u0275text(43, " l\u1EDBp h\u1ECDc ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 22)(45, "button", 23);
    \u0275\u0275listener("click", function EnrollmentComponent_Conditional_1_Template_button_click_45_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.changeClassPage(ctx_r3.classCurrentPage() - 1));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(46, "svg", 24);
    \u0275\u0275element(47, "path", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275text(48, " Tr\u01B0\u1EDBc ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(49, "span", 26);
    \u0275\u0275text(50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "button", 23);
    \u0275\u0275listener("click", function EnrollmentComponent_Conditional_1_Template_button_click_51_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.changeClassPage(ctx_r3.classCurrentPage() + 1));
    });
    \u0275\u0275text(52, " Sau ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(53, "svg", 27);
    \u0275\u0275element(54, "path", 28);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275property("formControl", ctx_r3.classSearchControl);
    \u0275\u0275advance(18);
    \u0275\u0275conditional(ctx_r3.isMasterLoading() && ctx_r3.classes().length === 0 ? 29 : ctx_r3.classes().length === 0 ? 30 : 31);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r3.classStartIndex());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.classEndIndex());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.classTotalElements());
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r3.classCurrentPage() === 1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2(" ", ctx_r3.classCurrentPage(), " / ", ctx_r3.classTotalPages(), " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r3.classCurrentPage() >= ctx_r3.classTotalPages());
  }
}
function EnrollmentComponent_Conditional_2_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 64);
    \u0275\u0275listener("click", function EnrollmentComponent_Conditional_2_button_17_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.openBulkModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 48);
    \u0275\u0275element(2, "path", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Th\xEAm h\u1ECDc vi\xEAn v\xE0o l\u1EDBp ");
    \u0275\u0275elementEnd();
  }
}
function EnrollmentComponent_Conditional_2_th_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 17);
    \u0275\u0275text(1, "Thao t\xE1c");
    \u0275\u0275elementEnd();
  }
}
function EnrollmentComponent_Conditional_2_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 29);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 30);
    \u0275\u0275element(3, "circle", 31)(4, "path", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " \u0110ang t\u1EA3i danh s\xE1ch h\u1ECDc vi\xEAn trong l\u1EDBp... ");
    \u0275\u0275elementEnd()();
  }
}
function EnrollmentComponent_Conditional_2_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 29);
    \u0275\u0275text(2, " L\u1EDBp h\u1ECDc n\xE0y hi\u1EC7n ch\u01B0a c\xF3 h\u1ECDc vi\xEAn n\xE0o \u0111\u01B0\u1EE3c x\u1EBFp l\u1EDBp. ");
    \u0275\u0275elementEnd()();
  }
}
function EnrollmentComponent_Conditional_2_Conditional_36_For_1_td_15_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 74);
    \u0275\u0275listener("click", function EnrollmentComponent_Conditional_2_Conditional_36_For_1_td_15_button_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const e_r13 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.openEditModal(e_r13));
    });
    \u0275\u0275text(1, " Ch\u1EC9nh s\u1EEDa ");
    \u0275\u0275elementEnd();
  }
}
function EnrollmentComponent_Conditional_2_Conditional_36_For_1_td_15_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 75);
    \u0275\u0275listener("click", function EnrollmentComponent_Conditional_2_Conditional_36_For_1_td_15_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const e_r13 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.onDelete(e_r13.id));
    });
    \u0275\u0275text(1, " R\xFAt kh\u1ECFi l\u1EDBp ");
    \u0275\u0275elementEnd();
  }
}
function EnrollmentComponent_Conditional_2_Conditional_36_For_1_td_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 71);
    \u0275\u0275template(1, EnrollmentComponent_Conditional_2_Conditional_36_For_1_td_15_button_1_Template, 2, 0, "button", 72)(2, EnrollmentComponent_Conditional_2_Conditional_36_For_1_td_15_button_2_Template, 2, 0, "button", 73);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("hasPermission", "ENROLLMENT_UPDATE");
    \u0275\u0275advance();
    \u0275\u0275property("hasPermission", "ENROLLMENT_DELETE");
  }
}
function EnrollmentComponent_Conditional_2_Conditional_36_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 33)(1, "td", 34);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 35)(4, "div", 66);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 67);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td", 68);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 35)(11, "span", 45);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td", 69);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, EnrollmentComponent_Conditional_2_Conditional_36_For_1_td_15_Template, 3, 2, "td", 70);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const e_r13 = ctx.$implicit;
    const \u0275$index_252_r15 = ctx.$index;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" #", \u0275$index_252_r15 + 1, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(e_r13.studentName || "---");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r13.studentCode || "M\xE3 HV");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r3.formatDateVN(e_r13.enrollmentDate), " ");
    const badge_r16 = ctx_r3.getStatusBadge(e_r13.status);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(badge_r16.bgClass + " " + badge_r16.textClass + " " + badge_r16.borderClass);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", badge_r16.label, " ");
    \u0275\u0275advance();
    \u0275\u0275property("title", e_r13.note || "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", e_r13.note || "---", " ");
    \u0275\u0275advance();
    \u0275\u0275property("hasAnyPermission", \u0275\u0275pureFunction0(10, _c07));
  }
}
function EnrollmentComponent_Conditional_2_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, EnrollmentComponent_Conditional_2_Conditional_36_For_1_Template, 16, 11, "tr", 33, _forTrack07);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r3.enrollments());
  }
}
function EnrollmentComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 50)(1, "button", 51);
    \u0275\u0275listener("click", function EnrollmentComponent_Conditional_2_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.backToMaster());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 24);
    \u0275\u0275element(3, "path", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Quay l\u1EA1i danh s\xE1ch l\u1EDBp h\u1ECDc ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div", 53)(6, "div")(7, "div", 54)(8, "span", 55);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 56);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "h2", 57);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 58);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 59);
    \u0275\u0275template(17, EnrollmentComponent_Conditional_2_button_17_Template, 4, 0, "button", 60);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 13)(19, "table", 14)(20, "thead", 15)(21, "tr")(22, "th", 16);
    \u0275\u0275text(23, "STT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "th", 16);
    \u0275\u0275text(25, "H\u1ECDc vi\xEAn");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "th", 16);
    \u0275\u0275text(27, "Ng\xE0y nh\u1EADp h\u1ECDc");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "th", 16);
    \u0275\u0275text(29, "Tr\u1EA1ng th\xE1i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "th", 16);
    \u0275\u0275text(31, "Ghi ch\xFA");
    \u0275\u0275elementEnd();
    \u0275\u0275template(32, EnrollmentComponent_Conditional_2_th_32_Template, 2, 0, "th", 61);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "tbody", 18);
    \u0275\u0275conditionalCreate(34, EnrollmentComponent_Conditional_2_Conditional_34_Template, 6, 0, "tr")(35, EnrollmentComponent_Conditional_2_Conditional_35_Template, 3, 0, "tr")(36, EnrollmentComponent_Conditional_2_Conditional_36_Template, 2, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 62)(38, "span");
    \u0275\u0275text(39, "T\u1ED5ng s\u1ED1: ");
    \u0275\u0275elementStart(40, "strong", 63);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd();
    \u0275\u0275text(42, " h\u1ECDc vi\xEAn trong l\u1EDBp");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "span");
    \u0275\u0275text(44, "S\u1EE9c ch\u1EE9a t\u1ED1i \u0111a: ");
    \u0275\u0275elementStart(45, "strong", 63);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd();
    \u0275\u0275text(47, " h\u1ECDc vi\xEAn");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    const cls_r17 = ctx_r3.selectedClass();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", cls_r17.code, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cls_r17.courseName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cls_r17.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("S\u0129 s\u1ED1 hi\u1EC7n t\u1EA1i: ", ctx_r3.enrollments().length, " / ", cls_r17.maxStudents, " h\u1ECDc vi\xEAn");
    \u0275\u0275advance(2);
    \u0275\u0275property("hasPermission", "ENROLLMENT_CREATE");
    \u0275\u0275advance(15);
    \u0275\u0275property("hasAnyPermission", \u0275\u0275pureFunction0(10, _c07));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.isDetailLoading() && ctx_r3.enrollments().length === 0 ? 34 : ctx_r3.enrollments().length === 0 ? 35 : 36);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r3.enrollments().length);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(cls_r17.maxStudents);
  }
}
function EnrollmentComponent_Conditional_3_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 87);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", (tmp_3_0 = ctx_r3.enrollmentForm.get("studentId")) == null ? null : tmp_3_0.value, " - ", (tmp_3_0 = ctx_r3.selectedClass()) == null ? null : tmp_3_0.name, " ");
  }
}
function EnrollmentComponent_Conditional_3_Conditional_17_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 95);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const st_r19 = ctx.$implicit;
    \u0275\u0275property("value", st_r19.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", st_r19.fullName, " (", st_r19.studentCode, ")");
  }
}
function EnrollmentComponent_Conditional_3_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "select", 100)(1, "option", 101);
    \u0275\u0275text(2, "-- Ch\u1ECDn H\u1ECDc vi\xEAn --");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, EnrollmentComponent_Conditional_3_Conditional_17_For_4_Template, 2, 3, "option", 95, _forTrack07);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("border-red-400", ctx_r3.isFormSubmitted() && ((tmp_3_0 = ctx_r3.enrollmentForm.get("studentId")) == null ? null : tmp_3_0.invalid));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r3.allStudents());
  }
}
function EnrollmentComponent_Conditional_3_For_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 95);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const st_r21 = ctx.$implicit;
    \u0275\u0275property("value", st_r21.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(st_r21.label);
  }
}
function EnrollmentComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 76);
    \u0275\u0275listener("click", function EnrollmentComponent_Conditional_3_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeModal());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 77)(3, "div", 78)(4, "div", 79)(5, "h3", 80);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 81);
    \u0275\u0275listener("click", function EnrollmentComponent_Conditional_3_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 82);
    \u0275\u0275element(9, "path", 83);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(10, "form", 84);
    \u0275\u0275listener("ngSubmit", function EnrollmentComponent_Conditional_3_Template_form_ngSubmit_10_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onSubmitSingle());
    });
    \u0275\u0275elementStart(11, "div")(12, "label", 85);
    \u0275\u0275text(13, " H\u1ECDc vi\xEAn ");
    \u0275\u0275elementStart(14, "span", 86);
    \u0275\u0275text(15, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(16, EnrollmentComponent_Conditional_3_Conditional_16_Template, 2, 2, "div", 87)(17, EnrollmentComponent_Conditional_3_Conditional_17_Template, 5, 2, "select", 88);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div")(19, "label", 85);
    \u0275\u0275text(20, " Ng\xE0y nh\u1EADp h\u1ECDc ");
    \u0275\u0275elementStart(21, "span", 86);
    \u0275\u0275text(22, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 89);
    \u0275\u0275listener("click", function EnrollmentComponent_Conditional_3_Template_div_click_23_listener() {
      \u0275\u0275restoreView(_r18);
      const singleDatePicker_r20 = \u0275\u0275reference(29);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.openPicker(singleDatePicker_r20));
    });
    \u0275\u0275elementStart(24, "input", 90);
    \u0275\u0275listener("input", function EnrollmentComponent_Conditional_3_Template_input_input_24_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onDateTextInput($event, false));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 91);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(26, "svg", 82);
    \u0275\u0275element(27, "path", 92);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(28, "input", 93, 0);
    \u0275\u0275listener("change", function EnrollmentComponent_Conditional_3_Template_input_change_28_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onDatePickerChange($event, false));
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(30, "div")(31, "label", 85);
    \u0275\u0275text(32, " Tr\u1EA1ng th\xE1i ");
    \u0275\u0275elementStart(33, "span", 86);
    \u0275\u0275text(34, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "select", 94);
    \u0275\u0275repeaterCreate(36, EnrollmentComponent_Conditional_3_For_37_Template, 2, 2, "option", 95, _forTrack13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div")(39, "label", 85);
    \u0275\u0275text(40, " Ghi ch\xFA ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(41, "textarea", 96);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 97)(43, "button", 98);
    \u0275\u0275listener("click", function EnrollmentComponent_Conditional_3_Template_button_click_43_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeModal());
    });
    \u0275\u0275text(44, " H\u1EE7y b\u1ECF ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "button", 99);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_7_0;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r3.isEditing() ? "C\u1EADp nh\u1EADt \u0111\u0103ng k\xFD h\u1ECDc vi\xEAn" : "Th\xEAm h\u1ECDc vi\xEAn v\xE0o l\u1EDBp", " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("formGroup", ctx_r3.enrollmentForm);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r3.isEditing() ? 16 : 17);
    \u0275\u0275advance(8);
    \u0275\u0275classProp("border-red-400", ctx_r3.isFormSubmitted() && ((tmp_5_0 = ctx_r3.enrollmentForm.get("enrollmentDate")) == null ? null : tmp_5_0.invalid));
    \u0275\u0275property("value", ctx_r3.enrollmentDateDisplay());
    \u0275\u0275advance(4);
    \u0275\u0275property("value", (tmp_7_0 = ctx_r3.enrollmentForm.get("enrollmentDate")) == null ? null : tmp_7_0.value);
    \u0275\u0275advance(8);
    \u0275\u0275repeater(ctx_r3.statusOptions);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1(" ", ctx_r3.isEditing() ? "C\u1EADp nh\u1EADt" : "X\u1EBFp v\xE0o l\u1EDBp", " ");
  }
}
function EnrollmentComponent_Conditional_4_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 115);
    \u0275\u0275text(1, " Kh\xF4ng c\xF2n h\u1ECDc vi\xEAn kh\u1EA3 d\u1EE5ng \u0111\u1EC3 x\u1EBFp l\u1EDBp (ho\u1EB7c kh\xF4ng kh\u1EDBp t\u1EEB kh\xF3a). ");
    \u0275\u0275elementEnd();
  }
}
function EnrollmentComponent_Conditional_4_Conditional_34_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 121)(1, "div", 7)(2, "input", 122);
    \u0275\u0275listener("change", function EnrollmentComponent_Conditional_4_Conditional_34_For_1_Template_input_change_2_listener() {
      const st_r24 = \u0275\u0275restoreView(_r23).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.toggleStudentSelection(st_r24.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "div", 123);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 124);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "span", 125);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const st_r24 = ctx.$implicit;
    const isChecked_r25 = \u0275\u0275nextContext(3).isStudentSelected(st_r24.id);
    \u0275\u0275classProp("bg-blue-50", isChecked_r25);
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", isChecked_r25);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(st_r24.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(st_r24.studentCode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(st_r24.parentPhone || "---");
  }
}
function EnrollmentComponent_Conditional_4_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, EnrollmentComponent_Conditional_4_Conditional_34_For_1_Template, 10, 6, "label", 120, _forTrack07);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r3.filteredStudentsForBulk());
  }
}
function EnrollmentComponent_Conditional_4_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 116);
    \u0275\u0275text(1, "Vui l\xF2ng ch\u1ECDn \xEDt nh\u1EA5t 1 h\u1ECDc vi\xEAn");
    \u0275\u0275elementEnd();
  }
}
function EnrollmentComponent_Conditional_4_For_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 95);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const st_r27 = ctx.$implicit;
    \u0275\u0275property("value", st_r27.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(st_r27.label);
  }
}
function EnrollmentComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 76);
    \u0275\u0275listener("click", function EnrollmentComponent_Conditional_4_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeBulkModal());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 77)(3, "div", 102)(4, "div", 79)(5, "div")(6, "h3", 80);
    \u0275\u0275text(7, "Th\xEAm h\u1ECDc vi\xEAn");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 103);
    \u0275\u0275text(9, "Th\xEAm h\u1ECDc vi\xEAn v\xE0o l\u1EDBp ");
    \u0275\u0275elementStart(10, "strong", 104);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "button", 81);
    \u0275\u0275listener("click", function EnrollmentComponent_Conditional_4_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeBulkModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(13, "svg", 82);
    \u0275\u0275element(14, "path", 83);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(15, "form", 84);
    \u0275\u0275listener("ngSubmit", function EnrollmentComponent_Conditional_4_Template_form_ngSubmit_15_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onSubmitBulk());
    });
    \u0275\u0275elementStart(16, "div", 105)(17, "div", 106)(18, "label", 107);
    \u0275\u0275text(19, " Ch\u1ECDn danh s\xE1ch h\u1ECDc vi\xEAn ");
    \u0275\u0275elementStart(20, "span", 86);
    \u0275\u0275text(21, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 108);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 109)(25, "button", 110);
    \u0275\u0275listener("click", function EnrollmentComponent_Conditional_4_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.selectAllFilteredStudents());
    });
    \u0275\u0275text(26, " Ch\u1ECDn t\u1EA5t c\u1EA3 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 111);
    \u0275\u0275text(28, "|");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 112);
    \u0275\u0275listener("click", function EnrollmentComponent_Conditional_4_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.deselectAllStudents());
    });
    \u0275\u0275text(30, " B\u1ECF ch\u1ECDn ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(31, "input", 113);
    \u0275\u0275elementStart(32, "div", 114);
    \u0275\u0275conditionalCreate(33, EnrollmentComponent_Conditional_4_Conditional_33_Template, 2, 0, "div", 115)(34, EnrollmentComponent_Conditional_4_Conditional_34_Template, 2, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(35, EnrollmentComponent_Conditional_4_Conditional_35_Template, 2, 0, "p", 116);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 117)(37, "div")(38, "label", 85);
    \u0275\u0275text(39, " Ng\xE0y nh\u1EADp h\u1ECDc ");
    \u0275\u0275elementStart(40, "span", 86);
    \u0275\u0275text(41, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 89);
    \u0275\u0275listener("click", function EnrollmentComponent_Conditional_4_Template_div_click_42_listener() {
      \u0275\u0275restoreView(_r22);
      const bulkDatePicker_r26 = \u0275\u0275reference(48);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.openPicker(bulkDatePicker_r26));
    });
    \u0275\u0275elementStart(43, "input", 90);
    \u0275\u0275listener("input", function EnrollmentComponent_Conditional_4_Template_input_input_43_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onDateTextInput($event, true));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 91);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(45, "svg", 82);
    \u0275\u0275element(46, "path", 92);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(47, "input", 93, 1);
    \u0275\u0275listener("change", function EnrollmentComponent_Conditional_4_Template_input_change_47_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onDatePickerChange($event, true));
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(49, "div")(50, "label", 85);
    \u0275\u0275text(51, " Tr\u1EA1ng th\xE1i ");
    \u0275\u0275elementStart(52, "span", 86);
    \u0275\u0275text(53, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "select", 94);
    \u0275\u0275repeaterCreate(55, EnrollmentComponent_Conditional_4_For_56_Template, 2, 2, "option", 95, _forTrack13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(57, "div")(58, "label", 85);
    \u0275\u0275text(59, " Ghi ch\xFA ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(60, "textarea", 118);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "div", 97)(62, "button", 98);
    \u0275\u0275listener("click", function EnrollmentComponent_Conditional_4_Template_button_click_62_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeBulkModal());
    });
    \u0275\u0275text(63, " H\u1EE7y b\u1ECF ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "button", 119);
    \u0275\u0275text(65);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_8_0;
    let tmp_10_0;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate((tmp_2_0 = ctx_r3.selectedClass()) == null ? null : tmp_2_0.name);
    \u0275\u0275advance(4);
    \u0275\u0275property("formGroup", ctx_r3.bulkForm);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("(", ctx_r3.selectedStudentIds().length, " \u0111\xE3 ch\u1ECDn)");
    \u0275\u0275advance(8);
    \u0275\u0275property("formControl", ctx_r3.bulkStudentSearch);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.filteredStudentsForBulk().length === 0 ? 33 : 34);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.isBulkFormSubmitted() && ctx_r3.selectedStudentIds().length === 0 ? 35 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275classProp("border-red-400", ctx_r3.isBulkFormSubmitted() && ((tmp_8_0 = ctx_r3.bulkForm.get("enrollmentDate")) == null ? null : tmp_8_0.invalid));
    \u0275\u0275property("value", ctx_r3.bulkEnrollmentDateDisplay());
    \u0275\u0275advance(4);
    \u0275\u0275property("value", (tmp_10_0 = ctx_r3.bulkForm.get("enrollmentDate")) == null ? null : tmp_10_0.value);
    \u0275\u0275advance(8);
    \u0275\u0275repeater(ctx_r3.statusOptions);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1(" X\u1EBFp l\u1EDBp ", ctx_r3.selectedStudentIds().length, " h\u1ECDc vi\xEAn ");
  }
}
function EnrollmentComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 76);
    \u0275\u0275listener("click", function EnrollmentComponent_Conditional_5_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeDeleteModal());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 77)(3, "div", 126)(4, "div", 127)(5, "div", 128);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 129);
    \u0275\u0275element(7, "path", 130);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "h3", 131);
    \u0275\u0275text(9, "R\xFAt h\u1ECDc vi\xEAn kh\u1ECFi l\u1EDBp");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "p", 132);
    \u0275\u0275text(11, " B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n r\xFAt h\u1ECDc vi\xEAn n\xE0y kh\u1ECFi l\u1EDBp kh\xF4ng? H\xE0nh \u0111\u1ED9ng n\xE0y s\u1EBD x\xF3a th\xF4ng tin x\u1EBFp l\u1EDBp c\u1EE7a h\u1ECDc vi\xEAn. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 133)(13, "button", 134);
    \u0275\u0275listener("click", function EnrollmentComponent_Conditional_5_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeDeleteModal());
    });
    \u0275\u0275text(14, " H\u1EE7y ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 135);
    \u0275\u0275listener("click", function EnrollmentComponent_Conditional_5_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.confirmDelete());
    });
    \u0275\u0275text(16, " \u0110\u1ED3ng \xFD R\xFAt ");
    \u0275\u0275elementEnd()()()()();
  }
}
var EnrollmentComponent = class _EnrollmentComponent {
  classesService = inject(ClassService);
  enrollmentService = inject(EnrollmentService);
  studentService = inject(StudentService);
  fb = inject(FormBuilder);
  destroyRef = inject(DestroyRef);
  toastService = inject(ToastService);
  route = inject(ActivatedRoute);
  // Constants
  statusOptions = ENROLLMENT_STATUS_OPTIONS;
  statusMap = ENROLLMENT_STATUS_MAP;
  Math = Math;
  calculateCapacityPercent(curr, max) {
    const currentVal = curr || 0;
    const maxVal = max || 30;
    return Math.min(100, Math.round(currentVal / maxVal * 100));
  }
  isStudentSelected(studentId) {
    return this.selectedStudentIds().includes(Number(studentId));
  }
  // View Mode: 'master' (Class List) or 'detail' (Students in selected class)
  viewMode = signal("master", ...ngDevMode ? [{ debugName: "viewMode" }] : (
    /* istanbul ignore next */
    []
  ));
  // Master State (Classes)
  classes = signal([], ...ngDevMode ? [{ debugName: "classes" }] : (
    /* istanbul ignore next */
    []
  ));
  classTotalElements = signal(0, ...ngDevMode ? [{ debugName: "classTotalElements" }] : (
    /* istanbul ignore next */
    []
  ));
  classCurrentPage = signal(1, ...ngDevMode ? [{ debugName: "classCurrentPage" }] : (
    /* istanbul ignore next */
    []
  ));
  classPageSize = signal(10, ...ngDevMode ? [{ debugName: "classPageSize" }] : (
    /* istanbul ignore next */
    []
  ));
  isMasterLoading = signal(false, ...ngDevMode ? [{ debugName: "isMasterLoading" }] : (
    /* istanbul ignore next */
    []
  ));
  classSearchControl = new FormControl("");
  // Detail State (Enrollments in selected class)
  selectedClass = signal(null, ...ngDevMode ? [{ debugName: "selectedClass" }] : (
    /* istanbul ignore next */
    []
  ));
  enrollments = signal([], ...ngDevMode ? [{ debugName: "enrollments" }] : (
    /* istanbul ignore next */
    []
  ));
  isDetailLoading = signal(false, ...ngDevMode ? [{ debugName: "isDetailLoading" }] : (
    /* istanbul ignore next */
    []
  ));
  // All Students for Selection Dropdown / Checkbox List
  allStudents = signal([], ...ngDevMode ? [{ debugName: "allStudents" }] : (
    /* istanbul ignore next */
    []
  ));
  // Single Add / Edit Modal
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
  enrollmentForm;
  isFormSubmitted = signal(false, ...ngDevMode ? [{ debugName: "isFormSubmitted" }] : (
    /* istanbul ignore next */
    []
  ));
  enrollmentDateDisplay = signal("", ...ngDevMode ? [{ debugName: "enrollmentDateDisplay" }] : (
    /* istanbul ignore next */
    []
  ));
  // Bulk Enrollment Modal
  isBulkModalOpen = signal(false, ...ngDevMode ? [{ debugName: "isBulkModalOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  bulkStudentSearch = new FormControl("");
  bulkSearchTerm = signal("", ...ngDevMode ? [{ debugName: "bulkSearchTerm" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedStudentIds = signal([], ...ngDevMode ? [{ debugName: "selectedStudentIds" }] : (
    /* istanbul ignore next */
    []
  ));
  bulkEnrollmentDateDisplay = signal("", ...ngDevMode ? [{ debugName: "bulkEnrollmentDateDisplay" }] : (
    /* istanbul ignore next */
    []
  ));
  bulkForm;
  isBulkFormSubmitted = signal(false, ...ngDevMode ? [{ debugName: "isBulkFormSubmitted" }] : (
    /* istanbul ignore next */
    []
  ));
  // Delete Modal
  isDeleteModalOpen = signal(false, ...ngDevMode ? [{ debugName: "isDeleteModalOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  idToDelete = signal(null, ...ngDevMode ? [{ debugName: "idToDelete" }] : (
    /* istanbul ignore next */
    []
  ));
  // Computed signals for Master View Pagination
  classTotalPages = computed(() => Math.max(1, Math.ceil(this.classTotalElements() / this.classPageSize())), ...ngDevMode ? [{ debugName: "classTotalPages" }] : (
    /* istanbul ignore next */
    []
  ));
  classStartIndex = computed(() => this.classTotalElements() === 0 ? 0 : (this.classCurrentPage() - 1) * this.classPageSize() + 1, ...ngDevMode ? [{ debugName: "classStartIndex" }] : (
    /* istanbul ignore next */
    []
  ));
  classEndIndex = computed(() => Math.min(this.classCurrentPage() * this.classPageSize(), this.classTotalElements()), ...ngDevMode ? [{ debugName: "classEndIndex" }] : (
    /* istanbul ignore next */
    []
  ));
  // Computed signal for Bulk Modal: Filtered Students based on search
  filteredStudentsForBulk = computed(() => {
    const search = this.bulkSearchTerm().toLowerCase().trim();
    const students = this.allStudents();
    const existingStudentIds = new Set(this.enrollments().map((e) => e.studentId));
    return students.filter((s) => {
      if (existingStudentIds.has(Number(s.id)))
        return false;
      if (!search)
        return true;
      const codeMatch = s.studentCode ? s.studentCode.toLowerCase().includes(search) : false;
      const nameMatch = s.fullName ? s.fullName.toLowerCase().includes(search) : false;
      return codeMatch || nameMatch;
    });
  }, ...ngDevMode ? [{ debugName: "filteredStudentsForBulk" }] : (
    /* istanbul ignore next */
    []
  ));
  ngOnInit() {
    this.initForms();
    this.setupClassSearch();
    this.loadClasses();
    this.loadStudents();
    const routeClassId = this.route.snapshot.paramMap.get("id") || this.route.snapshot.queryParamMap.get("classId");
    if (routeClassId) {
      this.classesService.getById(routeClassId).subscribe({
        next: (cls) => {
          if (cls) {
            this.viewClassDetail(cls);
          }
        }
      });
    }
  }
  initForms() {
    this.enrollmentForm = this.fb.group({
      studentId: ["", [Validators.required]],
      enrollmentDate: [this.getTodayIsoDate(), [Validators.required]],
      status: ["ACTIVE", [Validators.required]],
      note: ["", [Validators.maxLength(500)]]
    });
    this.bulkForm = this.fb.group({
      enrollmentDate: [this.getTodayIsoDate(), [Validators.required]],
      status: ["ACTIVE", [Validators.required]],
      note: ["", [Validators.maxLength(500)]]
    });
  }
  setupClassSearch() {
    this.classSearchControl.valueChanges.pipe(debounceTime(400), distinctUntilChanged(), takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.classCurrentPage.set(1);
      this.loadClasses();
    });
    this.bulkStudentSearch.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((val) => {
      this.bulkSearchTerm.set(val || "");
    });
  }
  loadClasses() {
    this.isMasterLoading.set(true);
    this.classesService.getClasses({
      page: this.classCurrentPage(),
      size: this.classPageSize(),
      keyword: this.classSearchControl.value || ""
    }).subscribe({
      next: (response) => {
        this.classes.set(response.content || []);
        this.classTotalElements.set(response.totalElements || 0);
        this.isMasterLoading.set(false);
      },
      error: (err) => {
        this.toastService.error("L\u1ED7i", "Kh\xF4ng th\u1EC3 t\u1EA3i danh s\xE1ch l\u1EDBp h\u1ECDc: " + (err.error?.message || err.message));
        this.isMasterLoading.set(false);
      }
    });
  }
  loadStudents() {
    this.studentService.getAll({ page: 1, size: 500 }).subscribe({
      next: (res) => {
        const list = res?.content || (Array.isArray(res) ? res : []);
        this.allStudents.set(list);
      },
      error: (err) => {
        console.error("L\u1ED7i t\u1EA3i danh s\xE1ch h\u1ECDc vi\xEAn cho x\u1EBFp l\u1EDBp:", err);
      }
    });
  }
  changeClassPage(page) {
    if (page >= 1 && page <= this.classTotalPages()) {
      this.classCurrentPage.set(page);
      this.loadClasses();
    }
  }
  // --- DETAIL VIEW LOGIC ---
  viewClassDetail(cls) {
    this.selectedClass.set(cls);
    this.viewMode.set("detail");
    if (cls.id != null)
      this.loadClassEnrollments(cls.id);
  }
  backToMaster() {
    this.viewMode.set("master");
    this.selectedClass.set(null);
    this.enrollments.set([]);
    this.loadClasses();
  }
  loadClassEnrollments(classId) {
    this.isDetailLoading.set(true);
    this.enrollmentService.getByClassId(classId).subscribe({
      next: (list) => {
        this.enrollments.set(list || []);
        this.isDetailLoading.set(false);
      },
      error: (err) => {
        this.toastService.error("L\u1ED7i", "Kh\xF4ng th\u1EC3 t\u1EA3i danh s\xE1ch h\u1ECDc vi\xEAn trong l\u1EDBp: " + (err.error?.message || err.message));
        this.isDetailLoading.set(false);
      }
    });
  }
  // --- SINGLE ADD / EDIT MODAL ---
  openAddModal() {
    this.loadStudents();
    this.isEditing.set(false);
    this.currentId.set(null);
    this.isFormSubmitted.set(false);
    const todayIso = this.getTodayIsoDate();
    this.enrollmentDateDisplay.set(this.formatDateVN(todayIso));
    const enrolledIds = new Set(this.enrollments().map((e) => e.studentId));
    const available = this.allStudents().filter((s) => !enrolledIds.has(Number(s.id)));
    this.enrollmentForm.reset({
      studentId: "",
      enrollmentDate: todayIso,
      status: "ACTIVE",
      note: ""
    });
    this.isModalOpen.set(true);
  }
  openEditModal(item) {
    this.isEditing.set(true);
    this.currentId.set(item.id ?? null);
    this.isFormSubmitted.set(false);
    const isoDate = item.enrollmentDate ? item.enrollmentDate.split("T")[0] : this.getTodayIsoDate();
    this.enrollmentDateDisplay.set(this.formatDateVN(isoDate));
    this.enrollmentForm.patchValue({
      studentId: item.studentId,
      enrollmentDate: isoDate,
      status: item.status || "ACTIVE",
      note: item.note || ""
    });
    this.isModalOpen.set(true);
  }
  closeModal() {
    this.isModalOpen.set(false);
  }
  onSubmitSingle() {
    this.isFormSubmitted.set(true);
    if (this.enrollmentForm.invalid) {
      this.toastService.error("Th\xF4ng b\xE1o", "Vui l\xF2ng \u0111i\u1EC1n \u0111\u1EA7y \u0111\u1EE7 th\xF4ng tin b\u1EAFt bu\u1ED9c");
      return;
    }
    const currentClass = this.selectedClass();
    if (!currentClass || !currentClass.id)
      return;
    const values = this.enrollmentForm.value;
    const dto = {
      classId: currentClass.id,
      studentId: Number(values.studentId),
      enrollmentDate: values.enrollmentDate,
      status: values.status,
      note: values.note
    };
    if (this.isEditing() && this.currentId()) {
      this.enrollmentService.update(this.currentId(), dto).subscribe({
        next: () => {
          this.toastService.success("Th\xE0nh c\xF4ng", "C\u1EADp nh\u1EADt \u0111\u0103ng k\xFD th\xE0nh c\xF4ng!");
          this.closeModal();
          this.loadClassEnrollments(Number(currentClass.id));
        },
        error: (err) => {
          this.toastService.error("L\u1ED7i", "C\u1EADp nh\u1EADt th\u1EA5t b\u1EA1i: " + (err.error?.message || err.message));
        }
      });
    } else {
      this.enrollmentService.create(dto).subscribe({
        next: () => {
          this.toastService.success("Th\xE0nh c\xF4ng", "Th\xEAm h\u1ECDc vi\xEAn v\xE0o l\u1EDBp th\xE0nh c\xF4ng!");
          this.closeModal();
          this.loadClassEnrollments(Number(currentClass.id));
        },
        error: (err) => {
          this.toastService.error("L\u1ED7i", "X\u1EBFp l\u1EDBp th\u1EA5t b\u1EA1i: " + (err.error?.message || err.message));
        }
      });
    }
  }
  // --- BULK ENROLLMENT MODAL ---
  openBulkModal() {
    this.loadStudents();
    this.isBulkModalOpen.set(true);
    this.isBulkFormSubmitted.set(false);
    this.selectedStudentIds.set([]);
    this.bulkStudentSearch.setValue("", { emitEvent: false });
    this.bulkSearchTerm.set("");
    const todayIso = this.getTodayIsoDate();
    this.bulkEnrollmentDateDisplay.set(this.formatDateVN(todayIso));
    this.bulkForm.reset({
      enrollmentDate: todayIso,
      status: "ACTIVE",
      note: ""
    });
  }
  closeBulkModal() {
    this.isBulkModalOpen.set(false);
  }
  toggleStudentSelection(studentIdStr) {
    const sId = Number(studentIdStr);
    const current = this.selectedStudentIds();
    if (current.includes(sId)) {
      this.selectedStudentIds.set(current.filter((id) => id !== sId));
    } else {
      this.selectedStudentIds.set([...current, sId]);
    }
  }
  selectAllFilteredStudents() {
    const filtered = this.filteredStudentsForBulk();
    const ids = filtered.map((s) => Number(s.id));
    this.selectedStudentIds.set(ids);
  }
  deselectAllStudents() {
    this.selectedStudentIds.set([]);
  }
  onSubmitBulk() {
    this.isBulkFormSubmitted.set(true);
    if (this.selectedStudentIds().length === 0) {
      this.toastService.error("Th\xF4ng b\xE1o", "Vui l\xF2ng ch\u1ECDn \xEDt nh\u1EA5t 1 h\u1ECDc vi\xEAn \u0111\u1EC3 x\u1EBFp l\u1EDBp");
      return;
    }
    if (this.bulkForm.invalid) {
      this.toastService.error("Th\xF4ng b\xE1o", "Vui l\xF2ng \u0111i\u1EC1n \u0111\u1EA7y \u0111\u1EE7 c\xE1c tr\u01B0\u1EDDng b\u1EAFt bu\u1ED9c");
      return;
    }
    const currentClass = this.selectedClass();
    if (!currentClass || !currentClass.id)
      return;
    const values = this.bulkForm.value;
    const bulkDto = {
      classId: currentClass.id,
      studentIds: this.selectedStudentIds(),
      enrollmentDate: values.enrollmentDate,
      status: values.status,
      note: values.note
    };
    this.enrollmentService.enrollBulk(bulkDto).subscribe({
      next: (res) => {
        this.toastService.success("Th\xE0nh c\xF4ng", res.message || "\u0110\u0103ng k\xFD h\u1ECDc vi\xEAn h\xE0ng lo\u1EA1t ho\xE0n t\u1EA5t!");
        this.closeBulkModal();
        this.loadClassEnrollments(currentClass.id);
      },
      error: (err) => {
        this.toastService.error("L\u1ED7i", "X\u1EBFp l\u1EDBp h\xE0ng lo\u1EA1t th\u1EA5t b\u1EA1i: " + (err.error?.message || err.message));
      }
    });
  }
  // --- DELETE MODAL ---
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
    const currentClass = this.selectedClass();
    this.enrollmentService.delete(id).subscribe({
      next: () => {
        this.toastService.success("Th\xE0nh c\xF4ng", "X\xF3a h\u1ECDc vi\xEAn kh\u1ECFi l\u1EDBp th\xE0nh c\xF4ng!");
        this.isDeleteModalOpen.set(false);
        this.idToDelete.set(null);
        if (currentClass && currentClass.id) {
          this.loadClassEnrollments(Number(currentClass.id));
        }
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
  // --- HELPERS ---
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
  onDateTextInput(event, isBulk = false) {
    const input = event.target;
    let value = input.value.replace(/\D/g, "");
    if (value.length > 8)
      value = value.substring(0, 8);
    let formatted = "";
    if (value.length > 0) {
      formatted = value.substring(0, 2);
      if (value.length >= 3)
        formatted += "/" + value.substring(2, 4);
      if (value.length >= 5)
        formatted += "/" + value.substring(4, 8);
    }
    input.value = formatted;
    if (isBulk) {
      this.bulkEnrollmentDateDisplay.set(formatted);
    } else {
      this.enrollmentDateDisplay.set(formatted);
    }
    if (formatted.length === 10) {
      const parts = formatted.split("/");
      const isoDate = `${parts[2]}-${parts[1]}-${parts[0]}`;
      const targetForm = isBulk ? this.bulkForm : this.enrollmentForm;
      targetForm.get("enrollmentDate")?.setValue(isoDate);
    } else {
      const targetForm = isBulk ? this.bulkForm : this.enrollmentForm;
      targetForm.get("enrollmentDate")?.setValue("");
    }
  }
  onDatePickerChange(event, isBulk = false) {
    const input = event.target;
    const isoDate = input.value;
    if (isoDate) {
      const targetForm = isBulk ? this.bulkForm : this.enrollmentForm;
      targetForm.get("enrollmentDate")?.setValue(isoDate);
      const formatted = this.formatDateVN(isoDate);
      if (isBulk) {
        this.bulkEnrollmentDateDisplay.set(formatted);
      } else {
        this.enrollmentDateDisplay.set(formatted);
      }
    }
  }
  getStatusBadge(statusKey) {
    const label = statusKey ? this.statusMap[statusKey] || statusKey : "Ch\u1EDD x\xE1c nh\u1EADn";
    if (statusKey === "ACTIVE" || statusKey === "ENROLLED") {
      return { label, bgClass: "bg-emerald-50", textClass: "text-emerald-700", borderClass: "border-emerald-200" };
    }
    if (statusKey === "COMPLETED") {
      return { label, bgClass: "bg-blue-50", textClass: "text-blue-700", borderClass: "border-blue-200" };
    }
    if (statusKey === "DROPPED" || statusKey === "INACTIVE") {
      return { label, bgClass: "bg-rose-50", textClass: "text-rose-700", borderClass: "border-rose-200" };
    }
    return { label, bgClass: "bg-amber-50", textClass: "text-amber-700", borderClass: "border-amber-200" };
  }
  getClassStatusBadge(status) {
    switch (status) {
      case "OPENING":
        return { label: "M\u1EDF \u0111\u0103ng k\xFD", bgClass: "bg-emerald-50", textClass: "text-emerald-700", borderClass: "border-emerald-200" };
      case "ONGOING":
        return { label: "\u0110ang h\u1ECDc", bgClass: "bg-blue-50", textClass: "text-blue-700", borderClass: "border-blue-200" };
      case "CLOSED":
        return { label: "\u0110\xE3 \u0111\xF3ng", bgClass: "bg-gray-50", textClass: "text-gray-700", borderClass: "border-gray-200" };
      case "CANCELLED":
        return { label: "\u0110\xE3 h\u1EE7y", bgClass: "bg-red-50", textClass: "text-red-700", borderClass: "border-red-200" };
      default:
        return { label: status || "Ch\u01B0a x\xE1c \u0111\u1ECBnh", bgClass: "bg-gray-50", textClass: "text-gray-700", borderClass: "border-gray-200" };
    }
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
  getTodayIsoDate() {
    const today = /* @__PURE__ */ new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  }
  static \u0275fac = function EnrollmentComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EnrollmentComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EnrollmentComponent, selectors: [["app-enrollment"]], decls: 6, vars: 5, consts: [["singleDatePicker", ""], ["bulkDatePicker", ""], [1, "space-y-6"], [1, "fixed", "inset-0", "z-50", "overflow-y-auto"], [1, "flex", "flex-col", "md:flex-row", "md:items-end", "justify-between", "gap-4", "pb-4", "border-b", "border-gray-100"], [1, "text-2xl", "font-extrabold", "text-gray-900", "tracking-tight"], [1, "text-sm", "text-gray-500", "mt-1"], [1, "flex", "items-center", "space-x-3"], [1, "relative"], [1, "absolute", "inset-y-0", "left-0", "flex", "items-center", "pl-3", "pointer-events-none"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-gray-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], ["type", "text", "placeholder", "T\xECm theo m\xE3 ho\u1EB7c t\xEAn l\u1EDBp...", 1, "bg-white", "border", "border-gray-200", "text-gray-900", "text-sm", "rounded-xl", "focus:ring-2", "focus:ring-blue-100", "focus:border-blue-500", "block", "w-72", "pl-10", "p-2.5", "outline-none", "transition", "shadow-sm", 3, "formControl"], [1, "bg-white", "rounded-2xl", "shadow-sm", "border", "border-gray-100", "overflow-hidden"], [1, "w-full", "text-sm", "text-left", "text-gray-500"], [1, "text-xs", "text-gray-500", "uppercase", "bg-gray-50/80", "border-b", "border-gray-100", "font-semibold"], ["scope", "col", 1, "px-6", "py-4"], ["scope", "col", 1, "px-6", "py-4", "text-right"], [1, "divide-y", "divide-gray-50"], [1, "flex", "flex-col", "sm:flex-row", "items-center", "justify-between", "px-6", "py-4", "bg-gray-50/80", "border-t", "border-gray-100", "rounded-b-2xl", "gap-3"], [1, "text-sm", "text-gray-500"], [1, "font-semibold", "text-gray-900"], [1, "flex", "space-x-2"], [1, "px-3.5", "py-1.5", "text-sm", "font-medium", "text-gray-700", "bg-white", "border", "border-gray-300", "rounded-lg", "hover:bg-gray-50", "disabled:opacity-50", "disabled:cursor-not-allowed", "transition", "shadow-sm", "flex", "items-center", 3, "click", "disabled"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "mr-1"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 19l-7-7 7-7"], [1, "px-3.5", "py-1.5", "text-sm", "font-semibold", "text-gray-800", "bg-gray-100", "rounded-lg", "flex", "items-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "ml-1"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 5l7 7-7 7"], ["colspan", "6", 1, "px-6", "py-12", "text-center", "text-gray-500"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "mx-auto", "h-8", "w-8", "text-blue-500", "mb-3"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"], [1, "bg-white", "hover:bg-blue-50/40", "transition", "duration-200"], [1, "px-6", "py-4", "font-semibold", "text-gray-400"], [1, "px-6", "py-4"], [1, "font-bold", "text-gray-900", "text-base"], [1, "font-mono", "text-xs", "text-blue-600", "font-semibold", "mt-0.5"], [1, "font-semibold", "text-gray-800"], [1, "font-mono", "text-xs", "text-gray-400", "mt-0.5"], [1, "px-6", "py-4", "w-52"], [1, "flex", "justify-between", "text-xs", "font-semibold", "text-gray-700", "mb-1"], [1, "text-blue-600", "font-mono"], [1, "w-full", "bg-gray-100", "rounded-full", "h-2", "overflow-hidden"], [1, "h-2", "rounded-full", "transition-all", "duration-300"], [1, "px-3", "py-1", "text-xs", "font-semibold", "rounded-full", "border", "inline-flex", "items-center"], [1, "px-6", "py-4", "text-right"], [1, "bg-blue-50", "hover:bg-blue-100", "text-blue-700", "font-semibold", "py-2", "px-4", "rounded-xl", "inline-flex", "items-center", "transition", "text-xs", "border", "border-blue-200/60", "shadow-sm", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "mr-1.5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"], [1, "space-y-4"], [1, "inline-flex", "items-center", "text-sm", "font-semibold", "text-blue-600", "hover:text-blue-800", "transition", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M10 19l-7-7m0 0l7-7m-7 7h18"], [1, "bg-gradient-to-r", "from-blue-600", "via-indigo-600", "to-blue-700", "rounded-2xl", "p-6", "text-white", "shadow-lg", "flex", "flex-col", "md:flex-row", "md:items-center", "justify-between", "gap-4"], [1, "flex", "items-center", "space-x-2"], [1, "px-2.5", "py-0.5", "bg-white/20", "text-white", "rounded-md", "text-xs", "font-mono", "font-bold", "tracking-wide"], [1, "text-xs", "text-blue-100", "font-medium"], [1, "text-2xl", "font-black", "mt-1"], [1, "text-xs", "text-blue-100", "mt-0.5"], [1, "flex", "flex-wrap", "items-center", "gap-3"], ["class", "bg-white hover:bg-blue-50 text-blue-700 font-bold py-2.5 px-4 rounded-xl flex items-center transition shadow-md text-sm", 3, "click", 4, "hasPermission"], ["scope", "col", "class", "px-6 py-4 text-right", 4, "hasAnyPermission"], [1, "px-6", "py-4", "bg-gray-50/80", "border-t", "border-gray-100", "rounded-b-2xl", "text-xs", "text-gray-500", "flex", "justify-between", "items-center"], [1, "text-gray-900", "font-bold"], [1, "bg-white", "hover:bg-blue-50", "text-blue-700", "font-bold", "py-2.5", "px-4", "rounded-xl", "flex", "items-center", "transition", "shadow-md", "text-sm", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"], [1, "font-bold", "text-gray-900"], [1, "font-mono", "text-xs", "text-blue-600", "mt-0.5"], [1, "px-6", "py-4", "font-mono", "text-xs", "text-gray-700"], [1, "px-6", "py-4", "max-w-xs", "truncate", "text-xs", "text-gray-600", 3, "title"], ["class", "px-6 py-4 text-right space-x-3", 4, "hasAnyPermission"], [1, "px-6", "py-4", "text-right", "space-x-3"], ["class", "font-medium text-blue-600 hover:text-blue-800 transition text-sm", 3, "click", 4, "hasPermission"], ["class", "font-medium text-red-600 hover:text-red-800 transition text-sm", 3, "click", 4, "hasPermission"], [1, "font-medium", "text-blue-600", "hover:text-blue-800", "transition", "text-sm", 3, "click"], [1, "font-medium", "text-red-600", "hover:text-red-800", "transition", "text-sm", 3, "click"], [1, "fixed", "inset-0", "bg-gray-900/50", "backdrop-blur-sm", "transition-opacity", 3, "click"], [1, "flex", "min-h-full", "items-center", "justify-center", "p-4"], [1, "relative", "w-full", "max-w-lg", "rounded-2xl", "bg-white", "p-6", "shadow-2xl", "transition-all", "border", "border-gray-100"], [1, "flex", "items-center", "justify-between", "pb-4", "border-b", "border-gray-100"], [1, "text-xl", "font-bold", "text-gray-900"], [1, "text-gray-400", "hover:text-gray-600", "transition", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "mt-4", "space-y-4", 3, "ngSubmit", "formGroup"], [1, "block", "text-xs", "font-semibold", "text-gray-700", "uppercase", "tracking-wider", "mb-1"], [1, "text-red-500"], [1, "px-3.5", "py-2.5", "bg-gray-100", "border", "border-gray-200", "rounded-xl", "text-sm", "font-semibold", "text-gray-700"], ["formControlName", "studentId", 1, "w-full", "px-3.5", "py-2.5", "border", "border-gray-200", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-100", "focus:border-blue-500", "outline-none", "transition", "bg-white", "font-semibold", "text-gray-900", 3, "border-red-400"], [1, "relative", "flex", "items-center", "cursor-pointer", 3, "click"], ["type", "text", "placeholder", "dd/MM/yyyy", "maxlength", "10", 1, "w-full", "px-3.5", "py-2.5", "pr-10", "border", "border-gray-200", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-100", "focus:border-blue-500", "outline-none", "transition", "font-semibold", "text-gray-900", "bg-white", "cursor-pointer", 3, "input", "value"], [1, "absolute", "right-2.5", "flex", "items-center", "text-gray-400", "hover:text-blue-600", "transition", "p-1"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"], ["type", "date", 1, "sr-only", "opacity-0", "w-0", "h-0", "absolute", "pointer-events-none", 3, "change", "value"], ["formControlName", "status", 1, "w-full", "px-3.5", "py-2.5", "border", "border-gray-200", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-100", "focus:border-blue-500", "outline-none", "transition", "bg-white", "font-semibold", "text-gray-900"], [3, "value"], ["formControlName", "note", "rows", "3", "placeholder", "Ghi ch\xFA th\xEAm v\u1EC1 h\u1ECDc vi\xEAn n\xE0y...", 1, "w-full", "px-3.5", "py-2.5", "border", "border-gray-200", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-100", "focus:border-blue-500", "outline-none", "transition", "bg-white", "text-gray-900"], [1, "flex", "justify-end", "space-x-3", "pt-4", "border-t", "border-gray-100"], ["type", "button", 1, "px-4", "py-2.5", "text-sm", "font-medium", "text-gray-700", "bg-white", "border", "border-gray-300", "rounded-xl", "hover:bg-gray-50", "transition", 3, "click"], ["type", "submit", 1, "px-5", "py-2.5", "text-sm", "font-semibold", "text-white", "bg-blue-600", "hover:bg-blue-700", "rounded-xl", "transition", "shadow-md"], ["formControlName", "studentId", 1, "w-full", "px-3.5", "py-2.5", "border", "border-gray-200", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-100", "focus:border-blue-500", "outline-none", "transition", "bg-white", "font-semibold", "text-gray-900"], ["value", ""], [1, "relative", "w-full", "max-w-2xl", "rounded-2xl", "bg-white", "p-6", "shadow-2xl", "transition-all", "border", "border-gray-100"], [1, "text-xs", "text-gray-500", "mt-0.5"], [1, "text-blue-600", "font-bold"], [1, "space-y-2"], [1, "flex", "items-center", "justify-between"], [1, "block", "text-xs", "font-semibold", "text-gray-700", "uppercase", "tracking-wider"], [1, "ml-1", "text-blue-600", "font-bold"], [1, "space-x-2", "text-xs"], ["type", "button", 1, "font-semibold", "text-blue-600", "hover:underline", 3, "click"], [1, "text-gray-300"], ["type", "button", 1, "font-semibold", "text-gray-500", "hover:underline", 3, "click"], ["type", "text", "placeholder", "L\u1ECDc danh s\xE1ch h\u1ECDc vi\xEAn theo t\xEAn ho\u1EB7c m\xE3 HV...", 1, "w-full", "px-3.5", "py-2", "border", "border-gray-200", "rounded-xl", "text-xs", "focus:ring-2", "focus:ring-blue-100", "focus:border-blue-500", "outline-none", "transition", 3, "formControl"], [1, "border", "border-gray-200", "rounded-xl", "max-h-56", "overflow-y-auto", "p-2", "divide-y", "divide-gray-50", "bg-gray-50/50"], [1, "p-4", "text-center", "text-xs", "text-gray-400"], [1, "text-xs", "text-red-500", "font-semibold"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "gap-4"], ["formControlName", "note", "rows", "2", "placeholder", "Ghi ch\xFA th\xEAm cho \u0111\u1EE3t x\u1EBFp l\u1EDBp h\xE0ng lo\u1EA1t n\xE0y...", 1, "w-full", "px-3.5", "py-2.5", "border", "border-gray-200", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-100", "focus:border-blue-500", "outline-none", "transition", "bg-white", "text-gray-900"], ["type", "submit", 1, "px-5", "py-2.5", "text-sm", "font-semibold", "text-white", "bg-emerald-600", "hover:bg-emerald-700", "rounded-xl", "transition", "shadow-md"], [1, "flex", "items-center", "justify-between", "p-2", "rounded-lg", "hover:bg-blue-50/60", "cursor-pointer", "transition", 3, "bg-blue-50"], [1, "flex", "items-center", "justify-between", "p-2", "rounded-lg", "hover:bg-blue-50/60", "cursor-pointer", "transition"], ["type", "checkbox", 1, "w-4", "h-4", "text-blue-600", "rounded", "border-gray-300", "focus:ring-blue-500", "cursor-pointer", 3, "change", "checked"], [1, "text-xs", "font-bold", "text-gray-900"], [1, "text-[11px]", "font-mono", "text-gray-400"], [1, "text-[11px]", "text-gray-400", "font-mono"], [1, "relative", "w-full", "max-w-md", "rounded-2xl", "bg-white", "p-6", "shadow-2xl", "transition-all", "border", "border-gray-100"], [1, "flex", "items-center", "space-x-3", "text-red-600", "mb-4"], [1, "p-3", "bg-red-50", "rounded-full"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"], [1, "text-lg", "font-bold", "text-gray-900"], [1, "text-sm", "text-gray-600", "mb-6"], [1, "flex", "justify-end", "space-x-3"], [1, "px-4", "py-2", "text-sm", "font-medium", "text-gray-700", "bg-white", "border", "border-gray-300", "rounded-xl", "hover:bg-gray-50", "transition", 3, "click"], [1, "px-4", "py-2", "text-sm", "font-semibold", "text-white", "bg-red-600", "hover:bg-red-700", "rounded-xl", "transition", "shadow-md", 3, "click"]], template: function EnrollmentComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 2);
      \u0275\u0275conditionalCreate(1, EnrollmentComponent_Conditional_1_Template, 55, 9);
      \u0275\u0275conditionalCreate(2, EnrollmentComponent_Conditional_2_Template, 48, 11);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(3, EnrollmentComponent_Conditional_3_Template, 47, 8, "div", 3);
      \u0275\u0275conditionalCreate(4, EnrollmentComponent_Conditional_4_Template, 66, 11, "div", 3);
      \u0275\u0275conditionalCreate(5, EnrollmentComponent_Conditional_5_Template, 17, 0, "div", 3);
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.viewMode() === "master" ? 1 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.viewMode() === "detail" && ctx.selectedClass() ? 2 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isModalOpen() ? 3 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isBulkModalOpen() ? 4 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isDeleteModalOpen() ? 5 : -1);
    }
  }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormControlDirective, FormGroupDirective, FormControlName, HasPermissionDirective], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EnrollmentComponent, [{
    type: Component,
    args: [{ selector: "app-enrollment", imports: [CommonModule, ReactiveFormsModule, HasPermissionDirective], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="space-y-6">\r
\r
  <!-- MASTER VIEW: DANH S\xC1CH L\u1EDAP H\u1ECCC -->\r
  @if (viewMode() === 'master') {\r
    <!-- PAGE HEADER -->\r
    <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-gray-100">\r
      <div>\r
        <h1 class="text-2xl font-extrabold text-gray-900 tracking-tight">Qu\u1EA3n l\xFD X\u1EBFp l\u1EDBp</h1>\r
        <p class="text-sm text-gray-500 mt-1">Ch\u1ECDn l\u1EDBp h\u1ECDc \u0111\u1EC3 xem danh s\xE1ch h\u1ECDc vi\xEAn v\xE0 qu\u1EA3n l\xFD x\u1EBFp l\u1EDBp/chuy\u1EC3n l\u1EDBp</p>\r
      </div>\r
      <div class="flex items-center space-x-3">\r
        <!-- Search Class Input -->\r
        <div class="relative">\r
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">\r
            <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>\r
            </svg>\r
          </div>\r
          <input \r
            type="text" \r
            [formControl]="classSearchControl" \r
            placeholder="T\xECm theo m\xE3 ho\u1EB7c t\xEAn l\u1EDBp..." \r
            class="bg-white border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-500 block w-72 pl-10 p-2.5 outline-none transition shadow-sm"\r
          >\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- MASTER DATA TABLE -->\r
    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">\r
      <table class="w-full text-sm text-left text-gray-500">\r
        <thead class="text-xs text-gray-500 uppercase bg-gray-50/80 border-b border-gray-100 font-semibold">\r
          <tr>\r
            <th scope="col" class="px-6 py-4">STT</th>\r
            <th scope="col" class="px-6 py-4">L\u1EDBp h\u1ECDc</th>\r
            <th scope="col" class="px-6 py-4">Kh\xF3a h\u1ECDc</th>\r
            <th scope="col" class="px-6 py-4">S\u0129 s\u1ED1 h\u1ECDc vi\xEAn</th>\r
            <th scope="col" class="px-6 py-4">Tr\u1EA1ng th\xE1i l\u1EDBp</th>\r
            <th scope="col" class="px-6 py-4 text-right">Thao t\xE1c</th>\r
          </tr>\r
        </thead>\r
        <tbody class="divide-y divide-gray-50">\r
          @if (isMasterLoading() && classes().length === 0) {\r
            <tr>\r
              <td colspan="6" class="px-6 py-12 text-center text-gray-500">\r
                <svg class="animate-spin mx-auto h-8 w-8 text-blue-500 mb-3" fill="none" viewBox="0 0 24 24">\r
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>\r
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>\r
                </svg>\r
                \u0110ang t\u1EA3i danh s\xE1ch l\u1EDBp h\u1ECDc...\r
              </td>\r
            </tr>\r
          } @else if (classes().length === 0) {\r
            <tr>\r
              <td colspan="6" class="px-6 py-12 text-center text-gray-500">\r
                Kh\xF4ng t\xECm th\u1EA5y l\u1EDBp h\u1ECDc n\xE0o.\r
              </td>\r
            </tr>\r
          } @else {\r
            @for (c of classes(); track c.id; let idx = $index) {\r
              <tr class="bg-white hover:bg-blue-50/40 transition duration-200">\r
                <!-- STT -->\r
                <td class="px-6 py-4 font-semibold text-gray-400">\r
                  #{{ classStartIndex() + idx }}\r
                </td>\r
                <!-- Class Info -->\r
                <td class="px-6 py-4">\r
                  <div class="font-bold text-gray-900 text-base">{{ c.name }}</div>\r
                  <div class="font-mono text-xs text-blue-600 font-semibold mt-0.5">{{ c.code }}</div>\r
                </td>\r
                <!-- Course -->\r
                <td class="px-6 py-4">\r
                  <div class="font-semibold text-gray-800">{{ c.courseName || '---' }}</div>\r
                  <div class="font-mono text-xs text-gray-400 mt-0.5">{{ c.courseCode || 'M\xE3 KH' }}</div>\r
                </td>\r
                <!-- Student Capacity / Count -->\r
                <td class="px-6 py-4 w-52">\r
                  @let curr = c.currentStudents || 0;\r
                  @let max = c.maxStudents || 30;\r
                  @let percent = calculateCapacityPercent(curr, max);\r
                  \r
                  <div class="flex justify-between text-xs font-semibold text-gray-700 mb-1">\r
                    <span>{{ curr }} / {{ max }} HV</span>\r
                    <span class="text-blue-600 font-mono">{{ percent }}%</span>\r
                  </div>\r
                  <div class="w-full bg-gray-100 rounded-full h-2 overflow-hidden">\r
                    <div \r
                      class="h-2 rounded-full transition-all duration-300"\r
                      [class]="percent >= 90 ? 'bg-red-500' : percent >= 70 ? 'bg-amber-500' : 'bg-blue-600'"\r
                      [style.width.%]="percent"\r
                    ></div>\r
                  </div>\r
                </td>\r
                <!-- Class Status -->\r
                <td class="px-6 py-4">\r
                  @let badge = getClassStatusBadge(c.status);\r
                  <span class="px-3 py-1 text-xs font-semibold rounded-full border inline-flex items-center" [class]="badge.bgClass + ' ' + badge.textClass + ' ' + badge.borderClass">\r
                    {{ badge.label }}\r
                  </span>\r
                </td>\r
                <!-- Action -->\r
                <td class="px-6 py-4 text-right">\r
                  <button \r
                    (click)="viewClassDetail(c)"\r
                    class="bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold py-2 px-4 rounded-xl inline-flex items-center transition text-xs border border-blue-200/60 shadow-sm"\r
                  >\r
                    <svg class="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>\r
                    </svg>\r
                    Xem h\u1ECDc vi\xEAn\r
                  </button>\r
                </td>\r
              </tr>\r
            }\r
          }\r
        </tbody>\r
      </table>\r
\r
      <!-- MASTER PAGINATION FOOTER -->\r
      <div class="flex flex-col sm:flex-row items-center justify-between px-6 py-4 bg-gray-50/80 border-t border-gray-100 rounded-b-2xl gap-3">\r
        <div class="text-sm text-gray-500">\r
          Hi\u1EC3n th\u1ECB <span class="font-semibold text-gray-900">{{ classStartIndex() }}</span> \r
          - <span class="font-semibold text-gray-900">{{ classEndIndex() }}</span> \r
          trong t\u1ED5ng s\u1ED1 <span class="font-semibold text-gray-900">{{ classTotalElements() }}</span> l\u1EDBp h\u1ECDc\r
        </div>\r
        \r
        <div class="flex space-x-2">\r
          <button \r
            (click)="changeClassPage(classCurrentPage() - 1)" \r
            [disabled]="classCurrentPage() === 1"\r
            class="px-3.5 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition shadow-sm flex items-center"\r
          >\r
            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>\r
            </svg>\r
            Tr\u01B0\u1EDBc\r
          </button>\r
\r
          <span class="px-3.5 py-1.5 text-sm font-semibold text-gray-800 bg-gray-100 rounded-lg flex items-center">\r
            {{ classCurrentPage() }} / {{ classTotalPages() }}\r
          </span>\r
\r
          <button \r
            (click)="changeClassPage(classCurrentPage() + 1)" \r
            [disabled]="classCurrentPage() >= classTotalPages()"\r
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
  }\r
\r
  <!-- DETAIL VIEW: H\u1ECCC VI\xCAN TRONG L\u1EDAP \u0110\u01AF\u1EE2C CH\u1ECCN -->\r
  @if (viewMode() === 'detail' && selectedClass()) {\r
    @let cls = selectedClass()!;\r
\r
    <!-- BACK & BANNER -->\r
    <div class="space-y-4">\r
      <button \r
        (click)="backToMaster()"\r
        class="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800 transition"\r
      >\r
        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>\r
        </svg>\r
        Quay l\u1EA1i danh s\xE1ch l\u1EDBp h\u1ECDc\r
      </button>\r
\r
      <!-- Selected Class Summary Banner -->\r
      <div class="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 rounded-2xl p-6 text-white shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-4">\r
        <div>\r
          <div class="flex items-center space-x-2">\r
            <span class="px-2.5 py-0.5 bg-white/20 text-white rounded-md text-xs font-mono font-bold tracking-wide">\r
              {{ cls.code }}\r
            </span>\r
            <span class="text-xs text-blue-100 font-medium">{{ cls.courseName }}</span>\r
          </div>\r
          <h2 class="text-2xl font-black mt-1">{{ cls.name }}</h2>\r
          <p class="text-xs text-blue-100 mt-0.5">S\u0129 s\u1ED1 hi\u1EC7n t\u1EA1i: {{ enrollments().length }} / {{ cls.maxStudents }} h\u1ECDc vi\xEAn</p>\r
        </div>\r
\r
        <!-- Action Buttons -->\r
        <div class="flex flex-wrap items-center gap-3">\r
          <button \r
            *hasPermission="'ENROLLMENT_CREATE'"\r
            (click)="openBulkModal()" \r
            class="bg-white hover:bg-blue-50 text-blue-700 font-bold py-2.5 px-4 rounded-xl flex items-center transition shadow-md text-sm"\r
          >\r
            <svg class="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path>\r
            </svg>\r
            Th\xEAm h\u1ECDc vi\xEAn v\xE0o l\u1EDBp\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- ENROLLMENT DATA TABLE -->\r
    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">\r
      <table class="w-full text-sm text-left text-gray-500">\r
        <thead class="text-xs text-gray-500 uppercase bg-gray-50/80 border-b border-gray-100 font-semibold">\r
          <tr>\r
            <th scope="col" class="px-6 py-4">STT</th>\r
            <th scope="col" class="px-6 py-4">H\u1ECDc vi\xEAn</th>\r
            <th scope="col" class="px-6 py-4">Ng\xE0y nh\u1EADp h\u1ECDc</th>\r
            <th scope="col" class="px-6 py-4">Tr\u1EA1ng th\xE1i</th>\r
            <th scope="col" class="px-6 py-4">Ghi ch\xFA</th>\r
            <th *hasAnyPermission="['ENROLLMENT_UPDATE', 'ENROLLMENT_DELETE']" scope="col" class="px-6 py-4 text-right">Thao t\xE1c</th>\r
          </tr>\r
        </thead>\r
        <tbody class="divide-y divide-gray-50">\r
          @if (isDetailLoading() && enrollments().length === 0) {\r
            <tr>\r
              <td colspan="6" class="px-6 py-12 text-center text-gray-500">\r
                <svg class="animate-spin mx-auto h-8 w-8 text-blue-500 mb-3" fill="none" viewBox="0 0 24 24">\r
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>\r
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>\r
                </svg>\r
                \u0110ang t\u1EA3i danh s\xE1ch h\u1ECDc vi\xEAn trong l\u1EDBp...\r
              </td>\r
            </tr>\r
          } @else if (enrollments().length === 0) {\r
            <tr>\r
              <td colspan="6" class="px-6 py-12 text-center text-gray-500">\r
                L\u1EDBp h\u1ECDc n\xE0y hi\u1EC7n ch\u01B0a c\xF3 h\u1ECDc vi\xEAn n\xE0o \u0111\u01B0\u1EE3c x\u1EBFp l\u1EDBp.\r
              </td>\r
            </tr>\r
          } @else {\r
            @for (e of enrollments(); track e.id; let idx = $index) {\r
              <tr class="bg-white hover:bg-blue-50/40 transition duration-200">\r
                <!-- STT -->\r
                <td class="px-6 py-4 font-semibold text-gray-400">\r
                  #{{ idx + 1 }}\r
                </td>\r
                <!-- Student -->\r
                <td class="px-6 py-4">\r
                  <div class="font-bold text-gray-900">{{ e.studentName || '---' }}</div>\r
                  <div class="font-mono text-xs text-blue-600 mt-0.5">{{ e.studentCode || 'M\xE3 HV' }}</div>\r
                </td>\r
                <!-- Date -->\r
                <td class="px-6 py-4 font-mono text-xs text-gray-700">\r
                  {{ formatDateVN(e.enrollmentDate) }}\r
                </td>\r
                <!-- Status Badge -->\r
                <td class="px-6 py-4">\r
                  @let badge = getStatusBadge(e.status);\r
                  <span class="px-3 py-1 text-xs font-semibold rounded-full border inline-flex items-center" [class]="badge.bgClass + ' ' + badge.textClass + ' ' + badge.borderClass">\r
                    {{ badge.label }}\r
                  </span>\r
                </td>\r
                <!-- Note -->\r
                <td class="px-6 py-4 max-w-xs truncate text-xs text-gray-600" [title]="e.note || ''">\r
                  {{ e.note || '---' }}\r
                </td>\r
                <!-- Actions -->\r
                <td *hasAnyPermission="['ENROLLMENT_UPDATE', 'ENROLLMENT_DELETE']" class="px-6 py-4 text-right space-x-3">\r
                  <button \r
                    *hasPermission="'ENROLLMENT_UPDATE'"\r
                    (click)="openEditModal(e)"\r
                    class="font-medium text-blue-600 hover:text-blue-800 transition text-sm"\r
                  >\r
                    Ch\u1EC9nh s\u1EEDa\r
                  </button>\r
                  <button \r
                    *hasPermission="'ENROLLMENT_DELETE'"\r
                    (click)="onDelete(e.id!)"\r
                    class="font-medium text-red-600 hover:text-red-800 transition text-sm"\r
                  >\r
                    R\xFAt kh\u1ECFi l\u1EDBp\r
                  </button>\r
                </td>\r
              </tr>\r
            }\r
          }\r
        </tbody>\r
      </table>\r
\r
      <!-- DETAIL FOOTER SUMMARY -->\r
      <div class="px-6 py-4 bg-gray-50/80 border-t border-gray-100 rounded-b-2xl text-xs text-gray-500 flex justify-between items-center">\r
        <span>T\u1ED5ng s\u1ED1: <strong class="text-gray-900 font-bold">{{ enrollments().length }}</strong> h\u1ECDc vi\xEAn trong l\u1EDBp</span>\r
        <span>S\u1EE9c ch\u1EE9a t\u1ED1i \u0111a: <strong class="text-gray-900 font-bold">{{ cls.maxStudents }}</strong> h\u1ECDc vi\xEAn</span>\r
      </div>\r
    </div>\r
  }\r
\r
</div>\r
\r
<!-- MODAL TH\xCAM / C\u1EACP NH\u1EACT 1 H\u1ECCC VI\xCAN -->\r
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
            {{ isEditing() ? 'C\u1EADp nh\u1EADt \u0111\u0103ng k\xFD h\u1ECDc vi\xEAn' : 'Th\xEAm h\u1ECDc vi\xEAn v\xE0o l\u1EDBp' }}\r
          </h3>\r
          <button (click)="closeModal()" class="text-gray-400 hover:text-gray-600 transition">\r
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>\r
            </svg>\r
          </button>\r
        </div>\r
\r
        <!-- Form -->\r
        <form [formGroup]="enrollmentForm" (ngSubmit)="onSubmitSingle()" class="mt-4 space-y-4">\r
          \r
          <!-- Student Select (Disabled if editing) -->\r
          <div>\r
            <label class="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">\r
              H\u1ECDc vi\xEAn <span class="text-red-500">*</span>\r
            </label>\r
            @if (isEditing()) {\r
              <div class="px-3.5 py-2.5 bg-gray-100 border border-gray-200 rounded-xl text-sm font-semibold text-gray-700">\r
                {{ enrollmentForm.get('studentId')?.value }} - {{ selectedClass()?.name }}\r
              </div>\r
            } @else {\r
              <select \r
                formControlName="studentId"\r
                class="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition bg-white font-semibold text-gray-900"\r
                [class.border-red-400]="isFormSubmitted() && enrollmentForm.get('studentId')?.invalid"\r
              >\r
                <option value="">-- Ch\u1ECDn H\u1ECDc vi\xEAn --</option>\r
                @for (st of allStudents(); track st.id) {\r
                  <option [value]="st.id">{{ st.fullName }} ({{ st.studentCode }})</option>\r
                }\r
              </select>\r
            }\r
          </div>\r
\r
          <!-- Enrollment Date -->\r
          <div>\r
            <label class="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">\r
              Ng\xE0y nh\u1EADp h\u1ECDc <span class="text-red-500">*</span>\r
            </label>\r
            <div class="relative flex items-center cursor-pointer" (click)="openPicker(singleDatePicker)">\r
              <input \r
                type="text" \r
                [value]="enrollmentDateDisplay()"\r
                (input)="onDateTextInput($event, false)"\r
                placeholder="dd/MM/yyyy"\r
                maxlength="10"\r
                class="w-full px-3.5 py-2.5 pr-10 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition font-semibold text-gray-900 bg-white cursor-pointer"\r
                [class.border-red-400]="isFormSubmitted() && enrollmentForm.get('enrollmentDate')?.invalid"\r
              >\r
              <div class="absolute right-2.5 flex items-center text-gray-400 hover:text-blue-600 transition p-1">\r
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>\r
                </svg>\r
                <input \r
                  #singleDatePicker\r
                  type="date" \r
                  [value]="enrollmentForm.get('enrollmentDate')?.value"\r
                  (change)="onDatePickerChange($event, false)"\r
                  class="sr-only opacity-0 w-0 h-0 absolute pointer-events-none"\r
                >\r
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
              class="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition bg-white font-semibold text-gray-900"\r
            >\r
              @for (st of statusOptions; track st.value) {\r
                <option [value]="st.value">{{ st.label }}</option>\r
              }\r
            </select>\r
          </div>\r
\r
          <!-- Note -->\r
          <div>\r
            <label class="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">\r
              Ghi ch\xFA\r
            </label>\r
            <textarea \r
              formControlName="note"\r
              rows="3"\r
              placeholder="Ghi ch\xFA th\xEAm v\u1EC1 h\u1ECDc vi\xEAn n\xE0y..."\r
              class="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition bg-white text-gray-900"\r
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
              {{ isEditing() ? 'C\u1EADp nh\u1EADt' : 'X\u1EBFp v\xE0o l\u1EDBp' }}\r
            </button>\r
          </div>\r
        </form>\r
      </div>\r
    </div>\r
  </div>\r
}\r
\r
<!-- MODAL X\u1EBEP L\u1EDAP H\xC0NG LO\u1EA0T (BULK ENROLLMENT) -->\r
@if (isBulkModalOpen()) {\r
  <div class="fixed inset-0 z-50 overflow-y-auto">\r
    <div class="fixed inset-0 bg-gray-900/50 backdrop-blur-sm transition-opacity" (click)="closeBulkModal()"></div>\r
\r
    <div class="flex min-h-full items-center justify-center p-4">\r
      <div class="relative w-full max-w-2xl rounded-2xl bg-white p-6 shadow-2xl transition-all border border-gray-100">\r
        \r
        <!-- Header -->\r
        <div class="flex items-center justify-between pb-4 border-b border-gray-100">\r
          <div>\r
            <h3 class="text-xl font-bold text-gray-900">Th\xEAm h\u1ECDc vi\xEAn</h3>\r
            <p class="text-xs text-gray-500 mt-0.5">Th\xEAm h\u1ECDc vi\xEAn v\xE0o l\u1EDBp <strong class="text-blue-600 font-bold">{{ selectedClass()?.name }}</strong></p>\r
          </div>\r
          <button (click)="closeBulkModal()" class="text-gray-400 hover:text-gray-600 transition">\r
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>\r
            </svg>\r
          </button>\r
        </div>\r
\r
        <form [formGroup]="bulkForm" (ngSubmit)="onSubmitBulk()" class="mt-4 space-y-4">\r
\r
          <!-- Student Selection List Header & Search -->\r
          <div class="space-y-2">\r
            <div class="flex items-center justify-between">\r
              <label class="block text-xs font-semibold text-gray-700 uppercase tracking-wider">\r
                Ch\u1ECDn danh s\xE1ch h\u1ECDc vi\xEAn <span class="text-red-500">*</span>\r
                <span class="ml-1 text-blue-600 font-bold">({{ selectedStudentIds().length }} \u0111\xE3 ch\u1ECDn)</span>\r
              </label>\r
              <div class="space-x-2 text-xs">\r
                <button \r
                  type="button" \r
                  (click)="selectAllFilteredStudents()" \r
                  class="font-semibold text-blue-600 hover:underline"\r
                >\r
                  Ch\u1ECDn t\u1EA5t c\u1EA3\r
                </button>\r
                <span class="text-gray-300">|</span>\r
                <button \r
                  type="button" \r
                  (click)="deselectAllStudents()" \r
                  class="font-semibold text-gray-500 hover:underline"\r
                >\r
                  B\u1ECF ch\u1ECDn\r
                </button>\r
              </div>\r
            </div>\r
\r
            <!-- Search filter for Bulk list -->\r
            <input \r
              type="text" \r
              [formControl]="bulkStudentSearch"\r
              placeholder="L\u1ECDc danh s\xE1ch h\u1ECDc vi\xEAn theo t\xEAn ho\u1EB7c m\xE3 HV..."\r
              class="w-full px-3.5 py-2 border border-gray-200 rounded-xl text-xs focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition"\r
            >\r
\r
            <!-- Scrollable Checkbox List -->\r
            <div class="border border-gray-200 rounded-xl max-h-56 overflow-y-auto p-2 divide-y divide-gray-50 bg-gray-50/50">\r
              @if (filteredStudentsForBulk().length === 0) {\r
                <div class="p-4 text-center text-xs text-gray-400">\r
                  Kh\xF4ng c\xF2n h\u1ECDc vi\xEAn kh\u1EA3 d\u1EE5ng \u0111\u1EC3 x\u1EBFp l\u1EDBp (ho\u1EB7c kh\xF4ng kh\u1EDBp t\u1EEB kh\xF3a).\r
                </div>\r
              } @else {\r
                @for (st of filteredStudentsForBulk(); track st.id) {\r
                  @let isChecked = isStudentSelected(st.id);\r
                  <label \r
                    class="flex items-center justify-between p-2 rounded-lg hover:bg-blue-50/60 cursor-pointer transition"\r
                    [class.bg-blue-50]="isChecked"\r
                  >\r
                    <div class="flex items-center space-x-3">\r
                      <input \r
                        type="checkbox" \r
                        [checked]="isChecked"\r
                        (change)="toggleStudentSelection(st.id)"\r
                        class="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500 cursor-pointer"\r
                      >\r
                      <div>\r
                        <div class="text-xs font-bold text-gray-900">{{ st.fullName }}</div>\r
                        <div class="text-[11px] font-mono text-gray-400">{{ st.studentCode }}</div>\r
                      </div>\r
                    </div>\r
                    <span class="text-[11px] text-gray-400 font-mono">{{ st.parentPhone || '---' }}</span>\r
                  </label>\r
                }\r
              }\r
            </div>\r
            @if (isBulkFormSubmitted() && selectedStudentIds().length === 0) {\r
              <p class="text-xs text-red-500 font-semibold">Vui l\xF2ng ch\u1ECDn \xEDt nh\u1EA5t 1 h\u1ECDc vi\xEAn</p>\r
            }\r
          </div>\r
\r
          <!-- Date & Status Grid -->\r
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">\r
            <!-- Enrollment Date -->\r
            <div>\r
              <label class="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">\r
                Ng\xE0y nh\u1EADp h\u1ECDc <span class="text-red-500">*</span>\r
              </label>\r
              <div class="relative flex items-center cursor-pointer" (click)="openPicker(bulkDatePicker)">\r
                <input \r
                  type="text" \r
                  [value]="bulkEnrollmentDateDisplay()"\r
                  (input)="onDateTextInput($event, true)"\r
                  placeholder="dd/MM/yyyy"\r
                  maxlength="10"\r
                  class="w-full px-3.5 py-2.5 pr-10 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition font-semibold text-gray-900 bg-white cursor-pointer"\r
                  [class.border-red-400]="isBulkFormSubmitted() && bulkForm.get('enrollmentDate')?.invalid"\r
                >\r
                <div class="absolute right-2.5 flex items-center text-gray-400 hover:text-blue-600 transition p-1">\r
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>\r
                  </svg>\r
                  <input \r
                    #bulkDatePicker\r
                    type="date" \r
                    [value]="bulkForm.get('enrollmentDate')?.value"\r
                    (change)="onDatePickerChange($event, true)"\r
                    class="sr-only opacity-0 w-0 h-0 absolute pointer-events-none"\r
                  >\r
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
                class="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition bg-white font-semibold text-gray-900"\r
              >\r
                @for (st of statusOptions; track st.value) {\r
                  <option [value]="st.value">{{ st.label }}</option>\r
                }\r
              </select>\r
            </div>\r
          </div>\r
\r
          <!-- Note -->\r
          <div>\r
            <label class="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">\r
              Ghi ch\xFA\r
            </label>\r
            <textarea \r
              formControlName="note"\r
              rows="2"\r
              placeholder="Ghi ch\xFA th\xEAm cho \u0111\u1EE3t x\u1EBFp l\u1EDBp h\xE0ng lo\u1EA1t n\xE0y..."\r
              class="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition bg-white text-gray-900"\r
            ></textarea>\r
          </div>\r
\r
          <!-- Modal Footer Actions -->\r
          <div class="flex justify-end space-x-3 pt-4 border-t border-gray-100">\r
            <button \r
              type="button" \r
              (click)="closeBulkModal()"\r
              class="px-4 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition"\r
            >\r
              H\u1EE7y b\u1ECF\r
            </button>\r
            <button \r
              type="submit"\r
              class="px-5 py-2.5 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition shadow-md"\r
            >\r
              X\u1EBFp l\u1EDBp {{ selectedStudentIds().length }} h\u1ECDc vi\xEAn\r
            </button>\r
          </div>\r
\r
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
          <h3 class="text-lg font-bold text-gray-900">R\xFAt h\u1ECDc vi\xEAn kh\u1ECFi l\u1EDBp</h3>\r
        </div>\r
        <p class="text-sm text-gray-600 mb-6">\r
          B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n r\xFAt h\u1ECDc vi\xEAn n\xE0y kh\u1ECFi l\u1EDBp kh\xF4ng? H\xE0nh \u0111\u1ED9ng n\xE0y s\u1EBD x\xF3a th\xF4ng tin x\u1EBFp l\u1EDBp c\u1EE7a h\u1ECDc vi\xEAn.\r
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
            \u0110\u1ED3ng \xFD R\xFAt\r
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EnrollmentComponent, { className: "EnrollmentComponent", filePath: "src/app/features/academic/pages/enrollment/enrollment.component.ts", lineNumber: 23 });
})();

// src/app/modules/system/services/activity-log.service.ts
var ActivityLogService = class _ActivityLogService {
  http = inject(HttpClient);
  apiUrl = `${environment.apiUrl}/api/v1/activity-logs`;
  getAllLogs(keyword, module, action, status, startDate, endDate, page = 0, size = 20, sortBy = "createdAt", sortDir = "desc") {
    let params = new HttpParams().set("page", page.toString()).set("size", size.toString()).set("sortBy", sortBy).set("sortDir", sortDir);
    if (keyword)
      params = params.set("keyword", keyword);
    if (module)
      params = params.set("module", module);
    if (action)
      params = params.set("action", action);
    if (status)
      params = params.set("status", status);
    if (startDate)
      params = params.set("startDate", `${startDate}T00:00:00`);
    if (endDate)
      params = params.set("endDate", `${endDate}T23:59:59`);
    return this.http.get(this.apiUrl, { params });
  }
  getById(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  getUserLogs(userId, page = 0, size = 20) {
    const params = new HttpParams().set("page", page.toString()).set("size", size.toString());
    return this.http.get(`${this.apiUrl}/user/${userId}`, { params });
  }
  static \u0275fac = function ActivityLogService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ActivityLogService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ActivityLogService, factory: _ActivityLogService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActivityLogService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/features/admin/pages/activity-log/activity-log.component.ts
var _forTrack08 = ($index, $item) => $item.id;
function ActivityLogComponent_Conditional_15_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 56);
    \u0275\u0275text(1, "\u0111ang l\xE0m m\u1EDBi...");
    \u0275\u0275elementEnd();
  }
}
function ActivityLogComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275conditionalCreate(3, ActivityLogComponent_Conditional_15_Conditional_3_Template, 2, 0, "span", 56);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" C\u1EADp nh\u1EADt: ", \u0275\u0275pipeBind2(2, 2, ctx, "HH:mm:ss"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.isRefreshing() ? 3 : -1);
  }
}
function ActivityLogComponent_For_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const mod_r2 = ctx.$implicit;
    \u0275\u0275property("value", mod_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(mod_r2);
  }
}
function ActivityLogComponent_For_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const act_r3 = ctx.$implicit;
    \u0275\u0275property("value", act_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(act_r3);
  }
}
function ActivityLogComponent_Conditional_102_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 57);
    \u0275\u0275text(2, "\u0110ang truy xu\u1EA5t nh\u1EADt k\xFD...");
    \u0275\u0275elementEnd()();
  }
}
function ActivityLogComponent_Conditional_103_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 57);
    \u0275\u0275text(2, "Kh\xF4ng t\xECm th\u1EA5y b\u1EA3n ghi n\xE0o.");
    \u0275\u0275elementEnd()();
  }
}
function ActivityLogComponent_Conditional_104_For_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 61);
    \u0275\u0275text(1, "M\u1EDBi");
    \u0275\u0275elementEnd();
  }
}
function ActivityLogComponent_Conditional_104_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 59)(1, "td", 60);
    \u0275\u0275text(2);
    \u0275\u0275conditionalCreate(3, ActivityLogComponent_Conditional_104_For_1_Conditional_3_Template, 2, 0, "span", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td", 62)(5, "div", 6);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 63);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td", 64);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 65)(14, "div", 66);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td", 65)(17, "span", 67);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td", 68);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td", 69);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td", 70);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td", 71)(26, "span", 72);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "td", 64);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "td", 73)(31, "button", 74);
    \u0275\u0275listener("click", function ActivityLogComponent_Conditional_104_For_1_Template_button_click_31_listener() {
      const log_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openDetailModal(log_r5));
    });
    \u0275\u0275text(32, " Xem ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const log_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r0.isNewLog(log_r5.id) ? "bg-blue-50 hover:bg-blue-100 ring-1 ring-inset ring-blue-200" : "hover:bg-slate-50");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", log_r5.id, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isNewLog(log_r5.id) ? 3 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 18, log_r5.createdAt, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 21, log_r5.createdAt, "HH:mm:ss"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.displayValue(log_r5.userId));
    \u0275\u0275advance(2);
    \u0275\u0275property("title", log_r5.actorName);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(log_r5.actorName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(log_r5.module);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(log_r5.action);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.displayValue(log_r5.targetType));
    \u0275\u0275advance();
    \u0275\u0275property("title", log_r5.targetId ?? "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.displayValue(log_r5.targetId), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r0.statusClass(log_r5.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.statusLabel(log_r5.status), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.displayValue(log_r5.ipAddress));
  }
}
function ActivityLogComponent_Conditional_104_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ActivityLogComponent_Conditional_104_For_1_Template, 33, 24, "tr", 58, _forTrack08);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r0.logs());
  }
}
function ActivityLogComponent_Conditional_116_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 84);
    \u0275\u0275text(1, "\u0110ang t\u1EA3i chi ti\u1EBFt...");
    \u0275\u0275elementEnd();
  }
}
function ActivityLogComponent_Conditional_116_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 85)(1, "div", 86)(2, "p", 87);
    \u0275\u0275text(3, "id");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 88);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 86)(7, "p", 87);
    \u0275\u0275text(8, "user_id");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 88);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 86)(12, "p", 87);
    \u0275\u0275text(13, "created_at");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 88);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 89)(18, "p", 87);
    \u0275\u0275text(19, "actor_name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p", 90);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 86)(23, "p", 87);
    \u0275\u0275text(24, "status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 91);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 86)(28, "p", 87);
    \u0275\u0275text(29, "module");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "p", 92);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 86)(33, "p", 87);
    \u0275\u0275text(34, "action");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "p", 93);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 86)(38, "p", 87);
    \u0275\u0275text(39, "target_type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "p", 94);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 86)(43, "p", 87);
    \u0275\u0275text(44, "target_id");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "p", 95);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 86)(48, "p", 87);
    \u0275\u0275text(49, "ip_address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "p", 88);
    \u0275\u0275text(51);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(52, "div")(53, "p", 96);
    \u0275\u0275text(54, "user_agent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "div", 97);
    \u0275\u0275text(56);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "div")(58, "div", 98)(59, "p", 99);
    \u0275\u0275text(60, "details (JSON)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "button", 100);
    \u0275\u0275listener("click", function ActivityLogComponent_Conditional_116_Conditional_14_Template_button_click_61_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.copyToClipboard());
    });
    \u0275\u0275text(62, " Sao ch\xE9p ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "div", 101)(64, "pre", 102)(65, "code");
    \u0275\u0275text(66);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const log_r8 = ctx;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(log_r8.id);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.displayValue(log_r8.userId));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(16, 15, log_r8.createdAt, "dd/MM/yyyy HH:mm:ss"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.displayValue(log_r8.actorName));
    \u0275\u0275advance(4);
    \u0275\u0275classMap(ctx_r0.statusClass(log_r8.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r0.statusLabel(log_r8.status), " (", log_r8.status, ") ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.displayValue(log_r8.module));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.displayValue(log_r8.action));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.displayValue(log_r8.targetType));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.displayValue(log_r8.targetId));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.displayValue(log_r8.ipAddress));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.displayValue(log_r8.userAgent), " ");
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r0.formattedJsonDetails());
  }
}
function ActivityLogComponent_Conditional_116_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 55)(1, "div", 75);
    \u0275\u0275listener("click", function ActivityLogComponent_Conditional_116_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeDetailModal());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 76)(3, "div", 77)(4, "div")(5, "h3", 78);
    \u0275\u0275text(6, "Chi ti\u1EBFt nh\u1EADt k\xFD ho\u1EA1t \u0111\u1ED9ng");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 79);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 80);
    \u0275\u0275listener("click", function ActivityLogComponent_Conditional_116_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeDetailModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 81);
    \u0275\u0275element(11, "path", 82);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(12, "div", 83);
    \u0275\u0275conditionalCreate(13, ActivityLogComponent_Conditional_116_Conditional_13_Template, 2, 0, "p", 84)(14, ActivityLogComponent_Conditional_116_Conditional_14_Template, 67, 18);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("activity_logs.id = ", (tmp_1_0 = ctx_r0.selectedLog()) == null ? null : tmp_1_0.id);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r0.isDetailLoading() ? 13 : (tmp_2_0 = ctx_r0.selectedLog()) ? 14 : -1, tmp_2_0);
  }
}
var AUTO_REFRESH_MS = 5e3;
var ActivityLogComponent = class _ActivityLogComponent {
  logService = inject(ActivityLogService);
  destroyRef = inject(DestroyRef);
  toastService = inject(ToastService);
  document = inject(DOCUMENT);
  logs = signal([], ...ngDevMode ? [{ debugName: "logs" }] : (
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
  pageSize = signal(20, ...ngDevMode ? [{ debugName: "pageSize" }] : (
    /* istanbul ignore next */
    []
  ));
  isLoading = signal(false, ...ngDevMode ? [{ debugName: "isLoading" }] : (
    /* istanbul ignore next */
    []
  ));
  isRefreshing = signal(false, ...ngDevMode ? [{ debugName: "isRefreshing" }] : (
    /* istanbul ignore next */
    []
  ));
  autoRefreshEnabled = signal(true, ...ngDevMode ? [{ debugName: "autoRefreshEnabled" }] : (
    /* istanbul ignore next */
    []
  ));
  lastRefreshedAt = signal(null, ...ngDevMode ? [{ debugName: "lastRefreshedAt" }] : (
    /* istanbul ignore next */
    []
  ));
  newLogIds = signal(/* @__PURE__ */ new Set(), ...ngDevMode ? [{ debugName: "newLogIds" }] : (
    /* istanbul ignore next */
    []
  ));
  totalPages = computed(() => Math.ceil(this.totalElements() / this.pageSize()) || 1, ...ngDevMode ? [{ debugName: "totalPages" }] : (
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
  searchControl = new FormControl("");
  emailControl = new FormControl("");
  moduleControl = new FormControl("");
  actionControl = new FormControl("");
  statusControl = new FormControl("");
  startDateControl = new FormControl("");
  endDateControl = new FormControl("");
  isDetailModalOpen = signal(false, ...ngDevMode ? [{ debugName: "isDetailModalOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  isDetailLoading = signal(false, ...ngDevMode ? [{ debugName: "isDetailLoading" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedLog = signal(null, ...ngDevMode ? [{ debugName: "selectedLog" }] : (
    /* istanbul ignore next */
    []
  ));
  formattedJsonDetails = signal("", ...ngDevMode ? [{ debugName: "formattedJsonDetails" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Module thực tế từ `@LogActivity` trên backend mới */
  modules = [
    "AUTH",
    "DEPARTMENT",
    "ROLE",
    "PERMISSION",
    "USER",
    "STAFF",
    "STUDENT",
    "TERM",
    "COURSE",
    "CLASS",
    "ROOM",
    "SCHEDULE",
    "ENROLLMENT",
    "TEACHING",
    "LMS",
    "ATTENDANCE",
    "ANNOUNCEMENT",
    "REPORTING"
  ];
  actions = [
    "LOGIN",
    "LOGOUT",
    "REFRESH",
    "CREATE",
    "UPDATE",
    "DELETE",
    "ASSIGN",
    "PROVISION",
    "BULK_CREATE",
    "UPLOAD_FILE",
    "ADD_LINK",
    "START",
    "SUBMIT",
    "GRADE",
    "SYNC",
    "SUBSTITUTE",
    "SUBSTITUTE_UPDATE",
    "SCHEDULE_ASSIGN",
    "SCHEDULE_ASSIGN_UPDATE",
    "SCHEDULE_ASSIGN_DELETE"
  ];
  highlightTimeout = null;
  ngOnInit() {
    this.setupFilters();
    this.setupAutoRefresh();
    this.loadData(1);
    this.destroyRef.onDestroy(() => {
      if (this.highlightTimeout)
        clearTimeout(this.highlightTimeout);
    });
  }
  setupFilters() {
    this.searchControl.valueChanges.pipe(debounceTime(400), distinctUntilChanged(), takeUntilDestroyed(this.destroyRef)).subscribe(() => this.loadData(1));
    this.emailControl.valueChanges.pipe(debounceTime(400), distinctUntilChanged(), takeUntilDestroyed(this.destroyRef)).subscribe(() => this.loadData(1));
    [this.moduleControl, this.actionControl, this.statusControl, this.startDateControl, this.endDateControl].forEach((control) => control.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => this.loadData(1)));
  }
  setupAutoRefresh() {
    interval(AUTO_REFRESH_MS).pipe(filter(() => this.autoRefreshEnabled() && !this.isDetailModalOpen()), filter(() => this.document.visibilityState === "visible"), tap(() => this.refreshSilently()), takeUntilDestroyed(this.destroyRef)).subscribe();
  }
  /** Backend lưu email Gmail vào actor_name — ưu tiên lọc email khi có nhập */
  buildKeyword() {
    const email = this.emailControl.value?.trim();
    if (email)
      return email;
    return this.searchControl.value?.trim() || void 0;
  }
  loadData(pageNo, options = {}) {
    const { silent = false } = options;
    const previousIds = silent ? new Set(this.logs().map((log) => log.id)) : null;
    if (silent) {
      this.isRefreshing.set(true);
    } else {
      this.isLoading.set(true);
      this.newLogIds.set(/* @__PURE__ */ new Set());
    }
    this.currentPage.set(pageNo);
    const keyword = this.buildKeyword();
    const module = this.moduleControl.value || void 0;
    const action = this.actionControl.value || void 0;
    const status = this.statusControl.value || void 0;
    const start = this.startDateControl.value || void 0;
    const end = this.endDateControl.value || void 0;
    this.logService.getAllLogs(keyword, module, action, status, start, end, pageNo - 1, this.pageSize()).subscribe({
      next: (res) => {
        this.logs.set(res.content);
        this.totalElements.set(res.totalElements);
        this.lastRefreshedAt.set(/* @__PURE__ */ new Date());
        if (silent && previousIds && pageNo === 1) {
          const incoming = res.content.filter((log) => !previousIds.has(log.id)).map((log) => log.id);
          if (incoming.length > 0) {
            this.newLogIds.set(new Set(incoming));
            if (this.highlightTimeout)
              clearTimeout(this.highlightTimeout);
            this.highlightTimeout = setTimeout(() => this.newLogIds.set(/* @__PURE__ */ new Set()), 4e3);
          }
        }
        this.isLoading.set(false);
        this.isRefreshing.set(false);
      },
      error: () => {
        this.isLoading.set(false);
        this.isRefreshing.set(false);
        if (!silent) {
          this.toastService.error("L\u1ED7i", "Kh\xF4ng th\u1EC3 t\u1EA3i nh\u1EADt k\xFD ho\u1EA1t \u0111\u1ED9ng. Ki\u1EC3m tra quy\u1EC1n LOG_VIEW.");
        }
      }
    });
  }
  refreshSilently() {
    if (!this.isLoading()) {
      this.loadData(this.currentPage(), { silent: true });
    }
  }
  toggleAutoRefresh() {
    this.autoRefreshEnabled.update((enabled) => !enabled);
  }
  manualRefresh() {
    this.loadData(this.currentPage());
  }
  isNewLog(id) {
    return this.newLogIds().has(id);
  }
  changePage(page) {
    if (page >= 1 && page <= this.totalPages()) {
      this.loadData(page);
    }
  }
  openDetailModal(log) {
    this.isDetailModalOpen.set(true);
    this.isDetailLoading.set(true);
    this.selectedLog.set(log);
    this.formattedJsonDetails.set("");
    this.logService.getById(log.id).subscribe({
      next: (detail) => {
        this.selectedLog.set(detail);
        this.formattedJsonDetails.set(this.formatDetails(detail.details));
        this.isDetailLoading.set(false);
      },
      error: () => {
        this.formattedJsonDetails.set(this.formatDetails(log.details));
        this.isDetailLoading.set(false);
        this.toastService.error("L\u1ED7i", "Kh\xF4ng th\u1EC3 t\u1EA3i chi ti\u1EBFt nh\u1EADt k\xFD.");
      }
    });
  }
  closeDetailModal() {
    this.isDetailModalOpen.set(false);
    this.isDetailLoading.set(false);
    this.selectedLog.set(null);
    this.formattedJsonDetails.set("");
  }
  copyToClipboard() {
    navigator.clipboard.writeText(this.formattedJsonDetails());
    this.toastService.success("\u0110\xE3 copy", "\u0110\xE3 sao ch\xE9p n\u1ED9i dung chi ti\u1EBFt v\xE0o b\u1ED9 nh\u1EDB \u0111\u1EC7m.");
  }
  formatDetails(details) {
    if (!details)
      return "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u chi ti\u1EBFt (details = NULL).";
    try {
      return JSON.stringify(JSON.parse(details), null, 2);
    } catch {
      return details;
    }
  }
  statusLabel(status) {
    const labels = {
      success: "Th\xE0nh c\xF4ng",
      failure: "Th\u1EA5t b\u1EA1i",
      error: "L\u1ED7i h\u1EC7 th\u1ED1ng"
    };
    return labels[status] ?? status;
  }
  statusClass(status) {
    const classes = {
      success: "bg-green-50 text-green-700 border-green-200",
      failure: "bg-amber-50 text-amber-700 border-amber-200",
      error: "bg-red-50 text-red-700 border-red-200"
    };
    return classes[status] ?? "bg-slate-50 text-slate-700 border-slate-200";
  }
  displayValue(value) {
    if (value === null || value === void 0 || value === "")
      return "\u2014";
    return String(value);
  }
  static \u0275fac = function ActivityLogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ActivityLogComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ActivityLogComponent, selectors: [["app-activity-log"]], decls: 117, vars: 22, consts: [[1, "space-y-6"], [1, "flex", "flex-col", "xl:flex-row", "xl:justify-between", "xl:items-end", "pb-4", "border-b", "border-gray-100", "gap-4"], [1, "text-2xl", "font-extrabold", "text-gray-900", "tracking-tight"], [1, "text-sm", "text-gray-500", "mt-1"], [1, "text-xs", "bg-slate-100", "px-1", "rounded"], [1, "flex", "flex-col", "sm:flex-row", "sm:items-center", "gap-3", "text-sm", "text-slate-500"], [1, "font-bold", "text-slate-900"], [1, "text-xs", "text-slate-400"], [1, "flex", "items-center", "gap-2"], ["type", "button", 1, "px-3", "py-1.5", "text-xs", "font-medium", "bg-white", "border", "border-slate-300", "rounded-lg", "hover:bg-slate-50", "disabled:opacity-50", "transition", 3, "click", "disabled"], ["type", "button", 1, "px-3", "py-1.5", "text-xs", "font-medium", "rounded-lg", "border", "transition", 3, "click"], [1, "bg-slate-50", "p-4", "rounded-xl", "border", "border-slate-200", "flex", "flex-wrap", "items-end", "gap-4"], ["for", "log-start-date", 1, "block", "text-xs", "font-semibold", "text-slate-600", "mb-1"], ["id", "log-start-date", "type", "date", 1, "bg-white", "border", "border-slate-300", "text-sm", "rounded-lg", "p-2.5", "outline-none", "focus:ring-2", "focus:ring-slate-400", 3, "formControl"], ["for", "log-end-date", 1, "block", "text-xs", "font-semibold", "text-slate-600", "mb-1"], ["id", "log-end-date", "type", "date", 1, "bg-white", "border", "border-slate-300", "text-sm", "rounded-lg", "p-2.5", "outline-none", "focus:ring-2", "focus:ring-slate-400", 3, "formControl"], ["for", "log-module", 1, "block", "text-xs", "font-semibold", "text-slate-600", "mb-1"], ["id", "log-module", 1, "bg-white", "border", "border-slate-300", "text-sm", "rounded-lg", "p-2.5", "outline-none", "focus:ring-2", "focus:ring-slate-400", "w-44", 3, "formControl"], ["value", ""], [3, "value"], ["for", "log-action", 1, "block", "text-xs", "font-semibold", "text-slate-600", "mb-1"], ["id", "log-action", 1, "bg-white", "border", "border-slate-300", "text-sm", "rounded-lg", "p-2.5", "outline-none", "focus:ring-2", "focus:ring-slate-400", "w-44", 3, "formControl"], ["for", "log-status", 1, "block", "text-xs", "font-semibold", "text-slate-600", "mb-1"], ["id", "log-status", 1, "bg-white", "border", "border-slate-300", "text-sm", "rounded-lg", "p-2.5", "outline-none", "focus:ring-2", "focus:ring-slate-400", "w-40", 3, "formControl"], ["value", "success"], ["value", "failure"], ["value", "error"], [1, "w-full", "sm:w-64"], ["for", "log-email", 1, "block", "text-xs", "font-semibold", "text-slate-600", "mb-1"], [1, "relative"], [1, "absolute", "inset-y-0", "left-0", "flex", "items-center", "pl-3", "pointer-events-none"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", "aria-hidden", "true", 1, "w-4", "h-4", "text-slate-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"], ["id", "log-email", "type", "email", "placeholder", "vd: user@gmail.com", "autocomplete", "off", 1, "bg-white", "border", "border-slate-300", "text-sm", "rounded-lg", "pl-10", "p-2.5", "outline-none", "focus:ring-2", "focus:ring-blue-400", "w-full", 3, "formControl"], [1, "flex-1", "min-w-[220px]"], ["for", "log-keyword", 1, "block", "text-xs", "font-semibold", "text-slate-600", "mb-1"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], ["id", "log-keyword", "type", "search", "placeholder", "G\xF5 t\u1EEB kh\xF3a...", 1, "bg-white", "border", "border-slate-300", "text-sm", "rounded-lg", "pl-10", "p-2.5", "outline-none", "focus:ring-2", "focus:ring-slate-400", "w-full", 3, "formControl"], [1, "bg-white", "rounded-2xl", "shadow-sm", "border", "border-slate-200", "overflow-hidden"], [1, "overflow-x-auto"], [1, "w-full", "text-sm", "text-left", "text-slate-600", "min-w-[1400px]"], [1, "text-xs", "text-slate-500", "uppercase", "bg-slate-100", "border-b", "border-slate-200", "font-bold"], ["scope", "col", 1, "px-4", "py-4", "w-16"], ["scope", "col", 1, "px-4", "py-4", "w-36"], ["scope", "col", 1, "px-4", "py-4", "w-20"], ["scope", "col", 1, "px-4", "py-4", "w-44"], ["scope", "col", 1, "px-4", "py-4", "w-28"], ["scope", "col", 1, "px-4", "py-4", "w-32"], ["scope", "col", 1, "px-4", "py-4", "w-28", "text-center"], ["scope", "col", 1, "px-4", "py-4", "text-right", "w-24"], [1, "divide-y", "divide-slate-100"], [1, "flex", "flex-col", "sm:flex-row", "sm:items-center", "sm:justify-between", "gap-3", "px-6", "py-3", "bg-slate-50", "border-t", "border-slate-200"], [1, "text-sm", "text-slate-500"], [1, "flex", "space-x-2"], ["type", "button", 1, "px-3", "py-1.5", "bg-white", "border", "border-slate-300", "rounded", "hover:bg-slate-100", "disabled:opacity-50", "text-sm", "font-medium", 3, "click", "disabled"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "log-detail-title", 1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "p-4"], [1, "ml-1", "text-blue-600"], ["colspan", "11", 1, "px-6", "py-12", "text-center", "text-slate-500"], [1, "transition", "duration-150", 3, "class"], [1, "transition", "duration-150"], [1, "px-4", "py-3", "font-mono", "text-xs", "text-slate-500"], [1, "ml-1", "inline-block", "px-1.5", "py-0.5", "text-[9px]", "font-bold", "uppercase", "bg-blue-600", "text-white", "rounded"], [1, "px-4", "py-3", "whitespace-nowrap"], [1, "text-xs", "text-slate-500", "font-mono", "mt-0.5"], [1, "px-4", "py-3", "font-mono", "text-xs"], [1, "px-4", "py-3"], [1, "font-semibold", "text-blue-700", "truncate", "max-w-[160px]", 3, "title"], [1, "inline-block", "px-2", "py-0.5", "bg-slate-200", "text-slate-800", "text-[10px]", "font-bold", "rounded"], [1, "px-4", "py-3", "font-semibold", "text-slate-900", "uppercase", "text-xs"], [1, "px-4", "py-3", "font-mono", "text-xs", "text-purple-700"], [1, "px-4", "py-3", "font-mono", "text-xs", "text-slate-500", "truncate", "max-w-[120px]", 3, "title"], [1, "px-4", "py-3", "text-center"], [1, "px-2", "py-1", "text-[10px]", "font-bold", "uppercase", "tracking-wider", "rounded-md", "border"], [1, "px-4", "py-3", "text-right"], ["type", "button", 1, "font-medium", "text-slate-600", "hover:text-blue-700", "transition", "bg-white", "border", "border-slate-300", "hover:border-blue-300", "px-3", "py-1.5", "rounded-lg", "shadow-sm", "text-xs", 3, "click"], [1, "absolute", "inset-0", "bg-slate-900/70", "backdrop-blur-sm", 3, "click"], [1, "relative", "bg-white", "rounded-2xl", "shadow-2xl", "w-full", "max-w-4xl", "border", "border-slate-200", "flex", "flex-col", "max-h-[90vh]"], [1, "flex", "justify-between", "items-center", "px-6", "py-4", "border-b", "border-slate-100", "bg-slate-50", "rounded-t-2xl", "shrink-0"], ["id", "log-detail-title", 1, "text-xl", "font-bold", "text-slate-900"], [1, "text-xs", "text-slate-500", "font-mono", "mt-1"], ["type", "button", "aria-label", "\u0110\xF3ng", 1, "text-slate-400", "hover:text-slate-900", "bg-white", "border", "border-slate-200", "hover:bg-slate-100", "p-2", "rounded-lg", "transition", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", "aria-hidden", "true", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "p-6", "overflow-y-auto", "scrollbar-thin", "space-y-6"], [1, "text-center", "text-slate-500", "py-8"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3", "gap-4"], [1, "bg-slate-50", "rounded-lg", "p-3", "border", "border-slate-100"], [1, "text-[10px]", "font-bold", "text-slate-400", "uppercase", "tracking-wider", "mb-1"], [1, "text-sm", "font-mono", "text-slate-900"], [1, "bg-slate-50", "rounded-lg", "p-3", "border", "border-slate-100", "md:col-span-2"], [1, "text-sm", "text-slate-900", "break-words"], [1, "inline-block", "px-2", "py-0.5", "text-[10px]", "font-bold", "uppercase", "rounded", "border"], [1, "text-sm", "font-semibold", "text-slate-900"], [1, "text-sm", "font-semibold", "uppercase", "text-slate-900"], [1, "text-sm", "font-mono", "text-purple-700"], [1, "text-sm", "font-mono", "text-slate-700", "break-all"], [1, "text-[10px]", "font-bold", "text-slate-400", "uppercase", "tracking-wider", "mb-2"], [1, "bg-slate-100", "p-3", "rounded-lg", "text-sm", "text-slate-800", "break-words", "border", "border-slate-200"], [1, "flex", "items-center", "justify-between", "mb-2"], [1, "text-[10px]", "font-bold", "text-slate-400", "uppercase", "tracking-wider"], ["type", "button", "title", "Sao ch\xE9p JSON", 1, "text-xs", "text-blue-600", "hover:text-blue-800", "font-medium", 3, "click"], [1, "bg-slate-900", "rounded-lg", "overflow-hidden", "border", "border-slate-700"], [1, "p-4", "text-sm", "text-green-400", "font-mono", "overflow-x-auto", "whitespace-pre-wrap"]], template: function ActivityLogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Nh\u1EADt k\xFD H\u1EC7 th\u1ED1ng");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, " Truy v\u1EBFt m\u1ECDi thao t\xE1c tr\xEAn h\u1EC7 th\u1ED1ng \u2014 \u0111\u1ED1i chi\u1EBFu b\u1EA3ng ");
      \u0275\u0275elementStart(7, "code", 4);
      \u0275\u0275text(8, "activity_logs");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(9, "div", 5)(10, "span");
      \u0275\u0275text(11, "T\u1ED5ng ");
      \u0275\u0275elementStart(12, "span", 6);
      \u0275\u0275text(13);
      \u0275\u0275elementEnd();
      \u0275\u0275text(14, " b\u1EA3n ghi");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(15, ActivityLogComponent_Conditional_15_Template, 4, 5, "span", 7);
      \u0275\u0275elementStart(16, "div", 8)(17, "button", 9);
      \u0275\u0275listener("click", function ActivityLogComponent_Template_button_click_17_listener() {
        return ctx.manualRefresh();
      });
      \u0275\u0275text(18, " L\xE0m m\u1EDBi ngay ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "button", 10);
      \u0275\u0275listener("click", function ActivityLogComponent_Template_button_click_19_listener() {
        return ctx.toggleAutoRefresh();
      });
      \u0275\u0275text(20);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(21, "div", 11)(22, "div")(23, "label", 12);
      \u0275\u0275text(24, "Th\u1EDDi gian t\u1EEB");
      \u0275\u0275elementEnd();
      \u0275\u0275element(25, "input", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div")(27, "label", 14);
      \u0275\u0275text(28, "\u0110\u1EBFn ng\xE0y");
      \u0275\u0275elementEnd();
      \u0275\u0275element(29, "input", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div")(31, "label", 16);
      \u0275\u0275text(32, "Ph\xE2n h\u1EC7 (module)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "select", 17)(34, "option", 18);
      \u0275\u0275text(35, "T\u1EA5t c\u1EA3 module");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(36, ActivityLogComponent_For_37_Template, 2, 2, "option", 19, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "div")(39, "label", 20);
      \u0275\u0275text(40, "H\xE0nh \u0111\u1ED9ng (action)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "select", 21)(42, "option", 18);
      \u0275\u0275text(43, "T\u1EA5t c\u1EA3 h\xE0nh \u0111\u1ED9ng");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(44, ActivityLogComponent_For_45_Template, 2, 2, "option", 19, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "div")(47, "label", 22);
      \u0275\u0275text(48, "Tr\u1EA1ng th\xE1i (status)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "select", 23)(50, "option", 18);
      \u0275\u0275text(51, "T\u1EA5t c\u1EA3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "option", 24);
      \u0275\u0275text(53, "Th\xE0nh c\xF4ng");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "option", 25);
      \u0275\u0275text(55, "Th\u1EA5t b\u1EA1i");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "option", 26);
      \u0275\u0275text(57, "L\u1ED7i h\u1EC7 th\u1ED1ng");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(58, "div", 27)(59, "label", 28);
      \u0275\u0275text(60, "T\xE0i kho\u1EA3n Gmail");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "div", 29)(62, "div", 30);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(63, "svg", 31);
      \u0275\u0275element(64, "path", 32);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275element(65, "input", 33);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(66, "div", 34)(67, "label", 35);
      \u0275\u0275text(68, "T\xECm ki\u1EBFm kh\xE1c (action / details / IP)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "div", 29)(70, "div", 30);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(71, "svg", 31);
      \u0275\u0275element(72, "path", 36);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275element(73, "input", 37);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(74, "div", 38)(75, "div", 39)(76, "table", 40)(77, "thead", 41)(78, "tr")(79, "th", 42);
      \u0275\u0275text(80, "ID");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "th", 43);
      \u0275\u0275text(82, "created_at");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "th", 44);
      \u0275\u0275text(84, "user_id");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "th", 45);
      \u0275\u0275text(86, "actor_name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "th", 46);
      \u0275\u0275text(88, "module");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "th", 43);
      \u0275\u0275text(90, "action");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "th", 43);
      \u0275\u0275text(92, "target_type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "th", 47);
      \u0275\u0275text(94, "target_id");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "th", 48);
      \u0275\u0275text(96, "status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "th", 47);
      \u0275\u0275text(98, "ip_address");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "th", 49);
      \u0275\u0275text(100, "Chi ti\u1EBFt");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(101, "tbody", 50);
      \u0275\u0275conditionalCreate(102, ActivityLogComponent_Conditional_102_Template, 3, 0, "tr")(103, ActivityLogComponent_Conditional_103_Template, 3, 0, "tr")(104, ActivityLogComponent_Conditional_104_Template, 2, 0);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(105, "div", 51)(106, "div", 52);
      \u0275\u0275text(107);
      \u0275\u0275elementStart(108, "span", 6);
      \u0275\u0275text(109);
      \u0275\u0275elementEnd();
      \u0275\u0275text(110);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(111, "div", 53)(112, "button", 54);
      \u0275\u0275listener("click", function ActivityLogComponent_Template_button_click_112_listener() {
        return ctx.changePage(ctx.currentPage() - 1);
      });
      \u0275\u0275text(113, " Tr\u01B0\u1EDBc ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "button", 54);
      \u0275\u0275listener("click", function ActivityLogComponent_Template_button_click_114_listener() {
        return ctx.changePage(ctx.currentPage() + 1);
      });
      \u0275\u0275text(115, " Sau ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275conditionalCreate(116, ActivityLogComponent_Conditional_116_Template, 15, 2, "div", 55);
    }
    if (rf & 2) {
      let tmp_1_0;
      \u0275\u0275advance(13);
      \u0275\u0275textInterpolate(ctx.totalElements());
      \u0275\u0275advance(2);
      \u0275\u0275conditional((tmp_1_0 = ctx.lastRefreshedAt()) ? 15 : -1, tmp_1_0);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.isLoading());
      \u0275\u0275advance(2);
      \u0275\u0275classMap(ctx.autoRefreshEnabled() ? "bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100" : "bg-white text-slate-600 border-slate-300 hover:bg-slate-50");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.autoRefreshEnabled() ? "T\u1EF1 \u0111\u1ED9ng: B\u1EADt (5s)" : "T\u1EF1 \u0111\u1ED9ng: T\u1EAFt", " ");
      \u0275\u0275advance(5);
      \u0275\u0275property("formControl", ctx.startDateControl);
      \u0275\u0275advance(4);
      \u0275\u0275property("formControl", ctx.endDateControl);
      \u0275\u0275advance(4);
      \u0275\u0275property("formControl", ctx.moduleControl);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.modules);
      \u0275\u0275advance(5);
      \u0275\u0275property("formControl", ctx.actionControl);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.actions);
      \u0275\u0275advance(5);
      \u0275\u0275property("formControl", ctx.statusControl);
      \u0275\u0275advance(16);
      \u0275\u0275property("formControl", ctx.emailControl);
      \u0275\u0275advance(8);
      \u0275\u0275property("formControl", ctx.searchControl);
      \u0275\u0275advance(29);
      \u0275\u0275conditional(ctx.isLoading() && ctx.logs().length === 0 ? 102 : !ctx.isLoading() && ctx.logs().length === 0 ? 103 : 104);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate3(" Hi\u1EC3n th\u1ECB ", ctx.startIndex(), "\u2013", ctx.endIndex(), " / ", ctx.totalElements(), " \u2014 Trang ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.currentPage());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" / ", ctx.totalPages(), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.currentPage() === 1);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.currentPage() >= ctx.totalPages());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isDetailModalOpen() ? 116 : -1);
    }
  }, dependencies: [CommonModule, ReactiveFormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, FormControlDirective, DatePipe], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActivityLogComponent, [{
    type: Component,
    args: [{ selector: "app-activity-log", imports: [CommonModule, ReactiveFormsModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="space-y-6">\r
  <div class="flex flex-col xl:flex-row xl:justify-between xl:items-end pb-4 border-b border-gray-100 gap-4">\r
    <div>\r
      <h1 class="text-2xl font-extrabold text-gray-900 tracking-tight">Nh\u1EADt k\xFD H\u1EC7 th\u1ED1ng</h1>\r
      <p class="text-sm text-gray-500 mt-1">\r
        Truy v\u1EBFt m\u1ECDi thao t\xE1c tr\xEAn h\u1EC7 th\u1ED1ng \u2014 \u0111\u1ED1i chi\u1EBFu b\u1EA3ng <code class="text-xs bg-slate-100 px-1 rounded">activity_logs</code>\r
      </p>\r
    </div>\r
    <div class="flex flex-col sm:flex-row sm:items-center gap-3 text-sm text-slate-500">\r
      <span>T\u1ED5ng <span class="font-bold text-slate-900">{{ totalElements() }}</span> b\u1EA3n ghi</span>\r
      @if (lastRefreshedAt(); as refreshedAt) {\r
        <span class="text-xs text-slate-400">\r
          C\u1EADp nh\u1EADt: {{ refreshedAt | date:'HH:mm:ss' }}\r
          @if (isRefreshing()) {\r
            <span class="ml-1 text-blue-600">\u0111ang l\xE0m m\u1EDBi...</span>\r
          }\r
        </span>\r
      }\r
      <div class="flex items-center gap-2">\r
        <button type="button" (click)="manualRefresh()" [disabled]="isLoading()"\r
          class="px-3 py-1.5 text-xs font-medium bg-white border border-slate-300 rounded-lg hover:bg-slate-50 disabled:opacity-50 transition">\r
          L\xE0m m\u1EDBi ngay\r
        </button>\r
        <button type="button" (click)="toggleAutoRefresh()"\r
          class="px-3 py-1.5 text-xs font-medium rounded-lg border transition"\r
          [class]="autoRefreshEnabled()\r
            ? 'bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100'\r
            : 'bg-white text-slate-600 border-slate-300 hover:bg-slate-50'">\r
          {{ autoRefreshEnabled() ? 'T\u1EF1 \u0111\u1ED9ng: B\u1EADt (5s)' : 'T\u1EF1 \u0111\u1ED9ng: T\u1EAFt' }}\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 flex flex-wrap items-end gap-4">\r
    <div>\r
      <label for="log-start-date" class="block text-xs font-semibold text-slate-600 mb-1">Th\u1EDDi gian t\u1EEB</label>\r
      <input id="log-start-date" type="date" [formControl]="startDateControl"\r
        class="bg-white border border-slate-300 text-sm rounded-lg p-2.5 outline-none focus:ring-2 focus:ring-slate-400">\r
    </div>\r
    <div>\r
      <label for="log-end-date" class="block text-xs font-semibold text-slate-600 mb-1">\u0110\u1EBFn ng\xE0y</label>\r
      <input id="log-end-date" type="date" [formControl]="endDateControl"\r
        class="bg-white border border-slate-300 text-sm rounded-lg p-2.5 outline-none focus:ring-2 focus:ring-slate-400">\r
    </div>\r
    <div>\r
      <label for="log-module" class="block text-xs font-semibold text-slate-600 mb-1">Ph\xE2n h\u1EC7 (module)</label>\r
      <select id="log-module" [formControl]="moduleControl"\r
        class="bg-white border border-slate-300 text-sm rounded-lg p-2.5 outline-none focus:ring-2 focus:ring-slate-400 w-44">\r
        <option value="">T\u1EA5t c\u1EA3 module</option>\r
        @for (mod of modules; track mod) {\r
          <option [value]="mod">{{ mod }}</option>\r
        }\r
      </select>\r
    </div>\r
    <div>\r
      <label for="log-action" class="block text-xs font-semibold text-slate-600 mb-1">H\xE0nh \u0111\u1ED9ng (action)</label>\r
      <select id="log-action" [formControl]="actionControl"\r
        class="bg-white border border-slate-300 text-sm rounded-lg p-2.5 outline-none focus:ring-2 focus:ring-slate-400 w-44">\r
        <option value="">T\u1EA5t c\u1EA3 h\xE0nh \u0111\u1ED9ng</option>\r
        @for (act of actions; track act) {\r
          <option [value]="act">{{ act }}</option>\r
        }\r
      </select>\r
    </div>\r
    <div>\r
      <label for="log-status" class="block text-xs font-semibold text-slate-600 mb-1">Tr\u1EA1ng th\xE1i (status)</label>\r
      <select id="log-status" [formControl]="statusControl"\r
        class="bg-white border border-slate-300 text-sm rounded-lg p-2.5 outline-none focus:ring-2 focus:ring-slate-400 w-40">\r
        <option value="">T\u1EA5t c\u1EA3</option>\r
        <option value="success">Th\xE0nh c\xF4ng</option>\r
        <option value="failure">Th\u1EA5t b\u1EA1i</option>\r
        <option value="error">L\u1ED7i h\u1EC7 th\u1ED1ng</option>\r
      </select>\r
    </div>\r
    <div class="w-full sm:w-64">\r
      <label for="log-email" class="block text-xs font-semibold text-slate-600 mb-1">T\xE0i kho\u1EA3n Gmail</label>\r
      <div class="relative">\r
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">\r
          <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
              d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path>\r
          </svg>\r
        </div>\r
        <input id="log-email" type="email" [formControl]="emailControl"\r
          placeholder="vd: user@gmail.com"\r
          autocomplete="off"\r
          class="bg-white border border-slate-300 text-sm rounded-lg pl-10 p-2.5 outline-none focus:ring-2 focus:ring-blue-400 w-full">\r
      </div>\r
    </div>\r
    <div class="flex-1 min-w-[220px]">\r
      <label for="log-keyword" class="block text-xs font-semibold text-slate-600 mb-1">T\xECm ki\u1EBFm kh\xE1c (action / details / IP)</label>\r
      <div class="relative">\r
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">\r
          <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>\r
          </svg>\r
        </div>\r
        <input id="log-keyword" type="search" [formControl]="searchControl" placeholder="G\xF5 t\u1EEB kh\xF3a..."\r
          class="bg-white border border-slate-300 text-sm rounded-lg pl-10 p-2.5 outline-none focus:ring-2 focus:ring-slate-400 w-full">\r
      </div>\r
    </div>\r
  </div>\r
\r
  <div class="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">\r
    <div class="overflow-x-auto">\r
      <table class="w-full text-sm text-left text-slate-600 min-w-[1400px]">\r
        <thead class="text-xs text-slate-500 uppercase bg-slate-100 border-b border-slate-200 font-bold">\r
          <tr>\r
            <th scope="col" class="px-4 py-4 w-16">ID</th>\r
            <th scope="col" class="px-4 py-4 w-36">created_at</th>\r
            <th scope="col" class="px-4 py-4 w-20">user_id</th>\r
            <th scope="col" class="px-4 py-4 w-44">actor_name</th>\r
            <th scope="col" class="px-4 py-4 w-28">module</th>\r
            <th scope="col" class="px-4 py-4 w-36">action</th>\r
            <th scope="col" class="px-4 py-4 w-36">target_type</th>\r
            <th scope="col" class="px-4 py-4 w-32">target_id</th>\r
            <th scope="col" class="px-4 py-4 w-28 text-center">status</th>\r
            <th scope="col" class="px-4 py-4 w-32">ip_address</th>\r
            <th scope="col" class="px-4 py-4 text-right w-24">Chi ti\u1EBFt</th>\r
          </tr>\r
        </thead>\r
        <tbody class="divide-y divide-slate-100">\r
          @if (isLoading() && logs().length === 0) {\r
            <tr>\r
              <td colspan="11" class="px-6 py-12 text-center text-slate-500">\u0110ang truy xu\u1EA5t nh\u1EADt k\xFD...</td>\r
            </tr>\r
          } @else if (!isLoading() && logs().length === 0) {\r
            <tr>\r
              <td colspan="11" class="px-6 py-12 text-center text-slate-500">Kh\xF4ng t\xECm th\u1EA5y b\u1EA3n ghi n\xE0o.</td>\r
            </tr>\r
          } @else {\r
            @for (log of logs(); track log.id) {\r
              <tr class="transition duration-150"\r
                [class]="isNewLog(log.id) ? 'bg-blue-50 hover:bg-blue-100 ring-1 ring-inset ring-blue-200' : 'hover:bg-slate-50'">\r
                <td class="px-4 py-3 font-mono text-xs text-slate-500">\r
                  {{ log.id }}\r
                  @if (isNewLog(log.id)) {\r
                    <span class="ml-1 inline-block px-1.5 py-0.5 text-[9px] font-bold uppercase bg-blue-600 text-white rounded">M\u1EDBi</span>\r
                  }\r
                </td>\r
                <td class="px-4 py-3 whitespace-nowrap">\r
                  <div class="font-bold text-slate-900">{{ log.createdAt | date:'dd/MM/yyyy' }}</div>\r
                  <div class="text-xs text-slate-500 font-mono mt-0.5">{{ log.createdAt | date:'HH:mm:ss' }}</div>\r
                </td>\r
                <td class="px-4 py-3 font-mono text-xs">{{ displayValue(log.userId) }}</td>\r
                <td class="px-4 py-3">\r
                  <div class="font-semibold text-blue-700 truncate max-w-[160px]" [title]="log.actorName">{{ log.actorName }}</div>\r
                </td>\r
                <td class="px-4 py-3">\r
                  <span class="inline-block px-2 py-0.5 bg-slate-200 text-slate-800 text-[10px] font-bold rounded">{{ log.module }}</span>\r
                </td>\r
                <td class="px-4 py-3 font-semibold text-slate-900 uppercase text-xs">{{ log.action }}</td>\r
                <td class="px-4 py-3 font-mono text-xs text-purple-700">{{ displayValue(log.targetType) }}</td>\r
                <td class="px-4 py-3 font-mono text-xs text-slate-500 truncate max-w-[120px]" [title]="log.targetId ?? ''">\r
                  {{ displayValue(log.targetId) }}\r
                </td>\r
                <td class="px-4 py-3 text-center">\r
                  <span class="px-2 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md border"\r
                    [class]="statusClass(log.status)">\r
                    {{ statusLabel(log.status) }}\r
                  </span>\r
                </td>\r
                <td class="px-4 py-3 font-mono text-xs">{{ displayValue(log.ipAddress) }}</td>\r
                <td class="px-4 py-3 text-right">\r
                  <button type="button" (click)="openDetailModal(log)"\r
                    class="font-medium text-slate-600 hover:text-blue-700 transition bg-white border border-slate-300 hover:border-blue-300 px-3 py-1.5 rounded-lg shadow-sm text-xs">\r
                    Xem\r
                  </button>\r
                </td>\r
              </tr>\r
            }\r
          }\r
        </tbody>\r
      </table>\r
    </div>\r
\r
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-6 py-3 bg-slate-50 border-t border-slate-200">\r
      <div class="text-sm text-slate-500">\r
        Hi\u1EC3n th\u1ECB {{ startIndex() }}\u2013{{ endIndex() }} / {{ totalElements() }} \u2014\r
        Trang <span class="font-bold text-slate-900">{{ currentPage() }}</span> / {{ totalPages() }}\r
      </div>\r
      <div class="flex space-x-2">\r
        <button type="button" (click)="changePage(currentPage() - 1)" [disabled]="currentPage() === 1"\r
          class="px-3 py-1.5 bg-white border border-slate-300 rounded hover:bg-slate-100 disabled:opacity-50 text-sm font-medium">\r
          Tr\u01B0\u1EDBc\r
        </button>\r
        <button type="button" (click)="changePage(currentPage() + 1)" [disabled]="currentPage() >= totalPages()"\r
          class="px-3 py-1.5 bg-white border border-slate-300 rounded hover:bg-slate-100 disabled:opacity-50 text-sm font-medium">\r
          Sau\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
@if (isDetailModalOpen()) {\r
  <div class="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true"\r
    aria-labelledby="log-detail-title">\r
    <div class="absolute inset-0 bg-slate-900/70 backdrop-blur-sm" (click)="closeDetailModal()"></div>\r
    <div class="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl border border-slate-200 flex flex-col max-h-[90vh]">\r
      <div class="flex justify-between items-center px-6 py-4 border-b border-slate-100 bg-slate-50 rounded-t-2xl shrink-0">\r
        <div>\r
          <h3 id="log-detail-title" class="text-xl font-bold text-slate-900">Chi ti\u1EBFt nh\u1EADt k\xFD ho\u1EA1t \u0111\u1ED9ng</h3>\r
          <p class="text-xs text-slate-500 font-mono mt-1">activity_logs.id = {{ selectedLog()?.id }}</p>\r
        </div>\r
        <button type="button" (click)="closeDetailModal()" aria-label="\u0110\xF3ng"\r
          class="text-slate-400 hover:text-slate-900 bg-white border border-slate-200 hover:bg-slate-100 p-2 rounded-lg transition">\r
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>\r
          </svg>\r
        </button>\r
      </div>\r
\r
      <div class="p-6 overflow-y-auto scrollbar-thin space-y-6">\r
        @if (isDetailLoading()) {\r
          <p class="text-center text-slate-500 py-8">\u0110ang t\u1EA3i chi ti\u1EBFt...</p>\r
        } @else if (selectedLog(); as log) {\r
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">\r
            <div class="bg-slate-50 rounded-lg p-3 border border-slate-100">\r
              <p class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">id</p>\r
              <p class="text-sm font-mono text-slate-900">{{ log.id }}</p>\r
            </div>\r
            <div class="bg-slate-50 rounded-lg p-3 border border-slate-100">\r
              <p class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">user_id</p>\r
              <p class="text-sm font-mono text-slate-900">{{ displayValue(log.userId) }}</p>\r
            </div>\r
            <div class="bg-slate-50 rounded-lg p-3 border border-slate-100">\r
              <p class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">created_at</p>\r
              <p class="text-sm font-mono text-slate-900">{{ log.createdAt | date:'dd/MM/yyyy HH:mm:ss' }}</p>\r
            </div>\r
            <div class="bg-slate-50 rounded-lg p-3 border border-slate-100 md:col-span-2">\r
              <p class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">actor_name</p>\r
              <p class="text-sm text-slate-900 break-words">{{ displayValue(log.actorName) }}</p>\r
            </div>\r
            <div class="bg-slate-50 rounded-lg p-3 border border-slate-100">\r
              <p class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">status</p>\r
              <span class="inline-block px-2 py-0.5 text-[10px] font-bold uppercase rounded border"\r
                [class]="statusClass(log.status)">\r
                {{ statusLabel(log.status) }} ({{ log.status }})\r
              </span>\r
            </div>\r
            <div class="bg-slate-50 rounded-lg p-3 border border-slate-100">\r
              <p class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">module</p>\r
              <p class="text-sm font-semibold text-slate-900">{{ displayValue(log.module) }}</p>\r
            </div>\r
            <div class="bg-slate-50 rounded-lg p-3 border border-slate-100">\r
              <p class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">action</p>\r
              <p class="text-sm font-semibold uppercase text-slate-900">{{ displayValue(log.action) }}</p>\r
            </div>\r
            <div class="bg-slate-50 rounded-lg p-3 border border-slate-100">\r
              <p class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">target_type</p>\r
              <p class="text-sm font-mono text-purple-700">{{ displayValue(log.targetType) }}</p>\r
            </div>\r
            <div class="bg-slate-50 rounded-lg p-3 border border-slate-100">\r
              <p class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">target_id</p>\r
              <p class="text-sm font-mono text-slate-700 break-all">{{ displayValue(log.targetId) }}</p>\r
            </div>\r
            <div class="bg-slate-50 rounded-lg p-3 border border-slate-100">\r
              <p class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">ip_address</p>\r
              <p class="text-sm font-mono text-slate-900">{{ displayValue(log.ipAddress) }}</p>\r
            </div>\r
          </div>\r
\r
          <div>\r
            <p class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">user_agent</p>\r
            <div class="bg-slate-100 p-3 rounded-lg text-sm text-slate-800 break-words border border-slate-200">\r
              {{ displayValue(log.userAgent) }}\r
            </div>\r
          </div>\r
\r
          <div>\r
            <div class="flex items-center justify-between mb-2">\r
              <p class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">details (JSON)</p>\r
              <button type="button" (click)="copyToClipboard()" title="Sao ch\xE9p JSON"\r
                class="text-xs text-blue-600 hover:text-blue-800 font-medium">\r
                Sao ch\xE9p\r
              </button>\r
            </div>\r
            <div class="bg-slate-900 rounded-lg overflow-hidden border border-slate-700">\r
              <pre class="p-4 text-sm text-green-400 font-mono overflow-x-auto whitespace-pre-wrap"><code>{{ formattedJsonDetails() }}</code></pre>\r
            </div>\r
          </div>\r
        }\r
      </div>\r
    </div>\r
  </div>\r
}\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ActivityLogComponent, { className: "ActivityLogComponent", filePath: "src/app/features/admin/pages/activity-log/activity-log.component.ts", lineNumber: 18 });
})();

// src/app/modules/academic/services/learning-material.service.ts
var LearningMaterialService = class _LearningMaterialService {
  http = inject(HttpClient);
  apiUrl = `${environment.apiUrl}/api/v1/learning-materials`;
  lessonsApiUrl = `${environment.apiUrl}/api/v1/lessons`;
  getAll(paramsOrPage, size, classId) {
    let httpParams = new HttpParams();
    if (typeof paramsOrPage === "object" && paramsOrPage !== null) {
      httpParams = httpParams.set("page", (paramsOrPage.page !== void 0 ? paramsOrPage.page - 1 : 0).toString()).set("size", (paramsOrPage.size || 10).toString()).set("sortBy", paramsOrPage.sortBy || "displayOrder").set("sortDir", paramsOrPage.sortDir || "asc");
      if (paramsOrPage.keyword && paramsOrPage.keyword.trim() !== "") {
        httpParams = httpParams.set("keyword", paramsOrPage.keyword.trim());
      }
    } else {
      const page = typeof paramsOrPage === "number" ? paramsOrPage : 0;
      httpParams = httpParams.set("page", page.toString()).set("size", (size || 10).toString());
      if (classId) {
        httpParams = httpParams.set("classId", classId.toString());
      }
    }
    return this.http.get(this.apiUrl, { params: httpParams });
  }
  getByCourseId(courseId) {
    return this.http.get(`${this.apiUrl}/course/${courseId}`);
  }
  getByLessonId(lessonId) {
    return this.http.get(`${this.apiUrl}/lesson/${lessonId}`);
  }
  getByClassId(classId) {
    return this.http.get(`${this.apiUrl}/class/${classId}`);
  }
  getById(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  create(data) {
    return this.http.post(this.apiUrl, data);
  }
  uploadFile(formData) {
    return this.http.post(`${this.apiUrl}/upload`, formData);
  }
  createLink(dto) {
    return this.http.post(`${this.apiUrl}/link`, dto);
  }
  update(id, dto) {
    return this.http.put(`${this.apiUrl}/${id}`, dto);
  }
  updateWithFile(id, formData) {
    return this.http.put(`${this.apiUrl}/${id}`, formData);
  }
  delete(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  getLessonsByClassId(classId) {
    return this.http.get(`${this.lessonsApiUrl}/class/${classId}`);
  }
  static \u0275fac = function LearningMaterialService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LearningMaterialService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LearningMaterialService, factory: _LearningMaterialService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LearningMaterialService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/modules/academic/services/course.service.ts
var CourseService = class _CourseService {
  http = inject(HttpClient);
  apiUrl = `${environment.apiUrl}/api/v1/courses`;
  getAll(page = 1, size = 10, keyword, status) {
    let params = new HttpParams();
    if (typeof page === "object" && page !== null) {
      const pageIndex = page.page != null ? Math.max(0, Number(page.page) - 1) : 0;
      params = params.set("page", pageIndex.toString());
      if (page.size !== void 0)
        params = params.set("size", page.size.toString());
      if (page.keyword)
        params = params.set("keyword", page.keyword);
      if (page.status)
        params = params.set("status", page.status);
    } else {
      const pageIndex = Math.max(0, Number(page) - 1);
      params = params.set("page", pageIndex.toString()).set("size", (size || 10).toString());
      if (keyword)
        params = params.set("keyword", keyword);
      if (status)
        params = params.set("status", status);
    }
    return this.http.get(this.apiUrl, { params });
  }
  getCourses(params) {
    return this.getAll(params);
  }
  getById(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  getByCode(code) {
    return this.http.get(`${this.apiUrl}/code/${code}`);
  }
  create(data) {
    return this.http.post(this.apiUrl, data);
  }
  update(id, data) {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }
  delete(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  static \u0275fac = function CourseService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CourseService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CourseService, factory: _CourseService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CourseService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/modules/academic/models/learning-material.model.ts
var MATERIAL_TYPE_MAP = {
  DOCUMENT: { label: "T\xE0i li\u1EC7u PDF/Word", bgClass: "bg-blue-50", textClass: "text-blue-700", icon: "document" },
  SLIDE: { label: "B\xE0i gi\u1EA3ng Slide", bgClass: "bg-amber-50", textClass: "text-amber-700", icon: "presentation" },
  VIDEO: { label: "Video b\xE0i gi\u1EA3ng", bgClass: "bg-purple-50", textClass: "text-purple-700", icon: "video" },
  IMAGE: { label: "H\xECnh \u1EA3nh / S\u01A1 \u0111\u1ED3", bgClass: "bg-emerald-50", textClass: "text-emerald-700", icon: "image" },
  EXTERNAL_LINK: { label: "Li\xEAn k\u1EBFt ngo\xE0i", bgClass: "bg-indigo-50", textClass: "text-indigo-700", icon: "link" }
};
var INDEXING_STATUS_MAP = {
  NOT_INDEXED: { label: "Ch\u01B0a h\u1ECDc AI", bgClass: "bg-gray-50", textClass: "text-gray-600", borderClass: "border-gray-200" },
  PENDING: { label: "\u0110ang x\u1EED l\xFD AI", bgClass: "bg-amber-50", textClass: "text-amber-700", borderClass: "border-amber-200" },
  INDEXED: { label: "\u0110\xE3 s\u1EB5n s\xE0ng AI", bgClass: "bg-emerald-50", textClass: "text-emerald-700", borderClass: "border-emerald-200" },
  FAILED: { label: "L\u1ED7i h\u1ECDc AI", bgClass: "bg-red-50", textClass: "text-red-700", borderClass: "border-red-200" }
};

// src/app/features/academic/pages/learning-material/learning-material.component.ts
var _forTrack09 = ($index, $item) => $item.id;
function LearningMaterialComponent_For_13_Template(rf, ctx) {
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
function LearningMaterialComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 34);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 35);
    \u0275\u0275element(3, "circle", 36)(4, "path", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " \u0110ang t\u1EA3i danh s\xE1ch t\xE0i li\u1EC7u... ");
    \u0275\u0275elementEnd()();
  }
}
function LearningMaterialComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 34);
    \u0275\u0275text(2, " Kh\xF4ng t\xECm th\u1EA5y t\xE0i li\u1EC7u kh\xF3a h\u1ECDc n\xE0o. ");
    \u0275\u0275elementEnd()();
  }
}
function LearningMaterialComponent_Conditional_44_For_1_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 60);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 61);
    \u0275\u0275element(2, "path", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " MinIO File ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "div", 63);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.formatFileSize(m_r3.fileSize));
  }
}
function LearningMaterialComponent_Conditional_44_For_1_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 61);
    \u0275\u0275element(2, "path", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Link ngo\xE0i ");
    \u0275\u0275elementEnd();
  }
}
function LearningMaterialComponent_Conditional_44_For_1_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55)(1, "span", 65);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const m_r3 = \u0275\u0275nextContext().$implicit;
    const idxBadge_r5 = \u0275\u0275nextContext(2).getIndexingBadge(m_r3.indexingStatus);
    \u0275\u0275advance();
    \u0275\u0275classMap(idxBadge_r5.bgClass + " " + idxBadge_r5.textClass + " " + idxBadge_r5.borderClass);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", idxBadge_r5.label, " ");
  }
}
function LearningMaterialComponent_Conditional_44_For_1_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 57);
    \u0275\u0275text(1, " T\u1EA3i/Xem ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("href", m_r3.downloadUrl, \u0275\u0275sanitizeUrl);
  }
}
function LearningMaterialComponent_Conditional_44_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 38)(1, "td", 39);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "span", 40);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td", 41)(6, "div", 42);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 43)(9, "span", 44);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "td", 45)(12, "div", 46);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 47);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td", 48);
    \u0275\u0275conditionalCreate(17, LearningMaterialComponent_Conditional_44_For_1_Conditional_17_Template, 6, 1)(18, LearningMaterialComponent_Conditional_44_For_1_Conditional_18_Template, 4, 0, "span", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 45)(20, "button", 50);
    \u0275\u0275listener("click", function LearningMaterialComponent_Conditional_44_For_1_Template_button_click_20_listener() {
      const m_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.toggleOfficial(m_r3));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(21, "svg", 51);
    \u0275\u0275element(22, "path", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(24, "td", 45)(25, "div", 53)(26, "button", 54);
    \u0275\u0275listener("click", function LearningMaterialComponent_Conditional_44_For_1_Template_button_click_26_listener() {
      const m_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.toggleRag(m_r3));
    });
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(28, LearningMaterialComponent_Conditional_44_For_1_Conditional_28_Template, 3, 3, "div", 55);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "td", 56);
    \u0275\u0275conditionalCreate(30, LearningMaterialComponent_Conditional_44_For_1_Conditional_30_Template, 2, 1, "a", 57);
    \u0275\u0275elementStart(31, "button", 58);
    \u0275\u0275listener("click", function LearningMaterialComponent_Conditional_44_For_1_Template_button_click_31_listener() {
      const m_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.openModal(m_r3));
    });
    \u0275\u0275text(32, " S\u1EEDa ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "button", 59);
    \u0275\u0275listener("click", function LearningMaterialComponent_Conditional_44_For_1_Template_button_click_33_listener() {
      const m_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onDelete(m_r3.id));
    });
    \u0275\u0275text(34, " X\xF3a ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const m_r3 = ctx.$implicit;
    const \u0275$index_93_r6 = ctx.$index;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" #", ctx_r3.startIndex() + \u0275$index_93_r6, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Th\u1EE9 t\u1EF1: ", m_r3.displayOrder || 0);
    const typeBadge_r7 = ctx_r3.getTypeBadge(m_r3.materialType);
    \u0275\u0275advance(2);
    \u0275\u0275property("title", m_r3.title);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", m_r3.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(typeBadge_r7.bgClass + " " + typeBadge_r7.textClass);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", typeBadge_r7.label, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(m_r3.courseName || "---");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r3.courseCode || "M\xE3 KH");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(m_r3.sourceType === "MINIO" ? 17 : 18);
    \u0275\u0275advance(3);
    \u0275\u0275classMap(m_r3.isOfficial ? "bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100" : "bg-gray-50 text-gray-500 border-gray-200 hover:bg-gray-100");
    \u0275\u0275property("title", m_r3.isOfficial ? "B\u1EA5m \u0111\u1EC3 h\u1EE7y duy\u1EC7t ch\xEDnh th\u1ED1ng" : "B\u1EA5m \u0111\u1EC3 duy\u1EC7t ch\xEDnh th\u1ED1ng");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", m_r3.isOfficial ? "Ch\xEDnh th\u1ED1ng" : "Ch\u1EDD duy\u1EC7t", " ");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(m_r3.isRagEnabled ? "bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100" : "bg-gray-50 text-gray-400 border-gray-200 hover:bg-gray-100");
    \u0275\u0275property("title", m_r3.isRagEnabled ? "B\u1EA5m \u0111\u1EC3 t\u1EAFt AI RAG" : "B\u1EA5m \u0111\u1EC3 k\xEDch ho\u1EA1t AI RAG");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u2728 ", m_r3.isRagEnabled ? "AI RAG B\u1EADt" : "AI RAG T\u1EAFt", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(m_r3.isRagEnabled ? 28 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(m_r3.downloadUrl ? 30 : -1);
  }
}
function LearningMaterialComponent_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, LearningMaterialComponent_Conditional_44_For_1_Template, 35, 20, "tr", 38, _forTrack09);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r3.displayMaterials());
  }
}
function LearningMaterialComponent_Conditional_68_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 8);
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
function LearningMaterialComponent_Conditional_68_Conditional_33_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 103);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("\u0110\xE3 ch\u1ECDn: ", (tmp_3_0 = ctx_r3.selectedFile()) == null ? null : tmp_3_0.name, " (", ctx_r3.formatFileSize((tmp_3_0 = ctx_r3.selectedFile()) == null ? null : tmp_3_0.size), ")");
  }
}
function LearningMaterialComponent_Conditional_68_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label", 84);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 102);
    \u0275\u0275listener("change", function LearningMaterialComponent_Conditional_68_Conditional_33_Template_input_change_3_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onFileSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, LearningMaterialComponent_Conditional_68_Conditional_33_Conditional_4_Template, 2, 2, "p", 103);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Ch\u1ECDn t\u1EC7p tin ", ctx_r3.isEditing() ? "(\u0110\u1EC3 tr\u1ED1ng n\u1EBFu kh\xF4ng thay \u0111\u1ED5i)" : "*", " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.selectedFile() ? 4 : -1);
  }
}
function LearningMaterialComponent_Conditional_68_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "label", 84);
    \u0275\u0275text(2, " \u0110\u01B0\u1EDDng d\u1EABn li\xEAn k\u1EBFt (URL) ");
    \u0275\u0275elementStart(3, "span", 76);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(5, "input", 104);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("border-red-400", ctx_r3.isFormSubmitted() && ((tmp_2_0 = ctx_r3.materialForm.get("resourceUrl")) == null ? null : tmp_2_0.invalid));
  }
}
function LearningMaterialComponent_Conditional_68_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 66);
    \u0275\u0275listener("click", function LearningMaterialComponent_Conditional_68_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeModal());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 67)(3, "div", 68)(4, "div", 69)(5, "h3", 70);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 71);
    \u0275\u0275listener("click", function LearningMaterialComponent_Conditional_68_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 72);
    \u0275\u0275element(9, "path", 73);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(10, "form", 74);
    \u0275\u0275listener("ngSubmit", function LearningMaterialComponent_Conditional_68_Template_form_ngSubmit_10_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onSubmit());
    });
    \u0275\u0275elementStart(11, "div")(12, "label", 75);
    \u0275\u0275text(13, " Thu\u1ED9c Kh\xF3a h\u1ECDc ");
    \u0275\u0275elementStart(14, "span", 76);
    \u0275\u0275text(15, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "select", 77)(17, "option", 7);
    \u0275\u0275text(18, "-- Ch\u1ECDn Kh\xF3a h\u1ECDc --");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(19, LearningMaterialComponent_Conditional_68_For_20_Template, 2, 3, "option", 8, _forTrack09);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div")(22, "label", 78);
    \u0275\u0275text(23, " Ngu\u1ED3n l\u01B0u tr\u1EEF t\xE0i li\u1EC7u ");
    \u0275\u0275elementStart(24, "span", 76);
    \u0275\u0275text(25, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 79)(27, "label", 80);
    \u0275\u0275element(28, "input", 81);
    \u0275\u0275text(29, " \u{1F4C1} T\u1EA3i t\u1EC7p tin v\u1EADt l\xFD (MinIO) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "label", 80);
    \u0275\u0275element(31, "input", 82);
    \u0275\u0275text(32, " \u{1F517} Li\xEAn k\u1EBFt ngo\xE0i (URL / Drive) ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(33, LearningMaterialComponent_Conditional_68_Conditional_33_Template, 5, 2, "div")(34, LearningMaterialComponent_Conditional_68_Conditional_34_Template, 6, 2, "div");
    \u0275\u0275elementStart(35, "div", 83)(36, "div")(37, "label", 84);
    \u0275\u0275text(38, " Ti\xEAu \u0111\u1EC1 t\xE0i li\u1EC7u ");
    \u0275\u0275elementStart(39, "span", 76);
    \u0275\u0275text(40, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(41, "input", 85);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div")(43, "label", 84);
    \u0275\u0275text(44, " Lo\u1EA1i t\xE0i li\u1EC7u ");
    \u0275\u0275elementStart(45, "span", 76);
    \u0275\u0275text(46, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "select", 86)(48, "option", 87);
    \u0275\u0275text(49, "DOCUMENT - T\xE0i li\u1EC7u PDF/Word");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "option", 88);
    \u0275\u0275text(51, "SLIDE - B\xE0i gi\u1EA3ng Slide");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "option", 89);
    \u0275\u0275text(53, "VIDEO - Video b\xE0i gi\u1EA3ng");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "option", 90);
    \u0275\u0275text(55, "IMAGE - H\xECnh \u1EA3nh / S\u01A1 \u0111\u1ED3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "option", 91);
    \u0275\u0275text(57, "EXTERNAL_LINK - Li\xEAn k\u1EBFt ngo\xE0i");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(58, "div")(59, "label", 84);
    \u0275\u0275text(60, " Th\u1EE9 t\u1EF1 s\u1EAFp x\u1EBFp ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(61, "input", 92);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "div", 93)(63, "label", 94);
    \u0275\u0275element(64, "input", 95);
    \u0275\u0275elementStart(65, "span", 96);
    \u0275\u0275text(66, "Duy\u1EC7t T\xE0i li\u1EC7u Ch\xEDnh th\u1ED1ng trung t\xE2m (isOfficial)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(67, "label", 94);
    \u0275\u0275element(68, "input", 97);
    \u0275\u0275elementStart(69, "span", 98);
    \u0275\u0275text(70, "K\xEDch ho\u1EA1t Tr\u1EE3 l\xFD AI RAG t\u1EF1 \u0111\u1ED9ng h\u1ECDc n\u1ED9i dung t\xE0i li\u1EC7u n\xE0y (isRagEnabled)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(71, "div", 99)(72, "button", 100);
    \u0275\u0275listener("click", function LearningMaterialComponent_Conditional_68_Template_button_click_72_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeModal());
    });
    \u0275\u0275text(73, " H\u1EE7y b\u1ECF ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "button", 101);
    \u0275\u0275text(75);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r3.isEditing() ? "C\u1EADp nh\u1EADt th\xF4ng tin t\xE0i li\u1EC7u" : "T\u1EA3i l\xEAn / Th\xEAm t\xE0i li\u1EC7u kh\xF3a h\u1ECDc m\u1EDBi", " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("formGroup", ctx_r3.materialForm);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("border-red-400", ctx_r3.isFormSubmitted() && ((tmp_3_0 = ctx_r3.materialForm.get("courseId")) == null ? null : tmp_3_0.invalid));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r3.availableCourses());
    \u0275\u0275advance(8);
    \u0275\u0275classMap(((tmp_5_0 = ctx_r3.materialForm.get("sourceType")) == null ? null : tmp_5_0.value) === "MINIO" ? "border-blue-500 bg-blue-50/50 text-blue-900" : "border-gray-200 text-gray-600");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(((tmp_6_0 = ctx_r3.materialForm.get("sourceType")) == null ? null : tmp_6_0.value) === "EXTERNAL" ? "border-purple-500 bg-purple-50/50 text-purple-900" : "border-gray-200 text-gray-600");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(((tmp_7_0 = ctx_r3.materialForm.get("sourceType")) == null ? null : tmp_7_0.value) === "MINIO" ? 33 : 34);
    \u0275\u0275advance(8);
    \u0275\u0275classProp("border-red-400", ctx_r3.isFormSubmitted() && ((tmp_8_0 = ctx_r3.materialForm.get("title")) == null ? null : tmp_8_0.invalid));
    \u0275\u0275advance(34);
    \u0275\u0275textInterpolate1(" ", ctx_r3.isEditing() ? "C\u1EADp nh\u1EADt" : "Th\xEAm t\xE0i li\u1EC7u", " ");
  }
}
function LearningMaterialComponent_Conditional_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 66);
    \u0275\u0275listener("click", function LearningMaterialComponent_Conditional_69_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeDeleteModal());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 67)(3, "div", 105)(4, "div", 106)(5, "div", 107);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 108);
    \u0275\u0275element(7, "path", 109);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "h3", 110);
    \u0275\u0275text(9, "X\xE1c nh\u1EADn x\xF3a t\xE0i li\u1EC7u");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "p", 111);
    \u0275\u0275text(11, " B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a t\xE0i li\u1EC7u h\u1ECDc t\u1EADp n\xE0y kh\xF4ng? H\xE0nh \u0111\u1ED9ng n\xE0y s\u1EBD x\xF3a v\u0129nh vi\u1EC5n t\u1EC7p tin kh\u1ECFi h\u1EC7 th\u1ED1ng. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 112)(13, "button", 113);
    \u0275\u0275listener("click", function LearningMaterialComponent_Conditional_69_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeDeleteModal());
    });
    \u0275\u0275text(14, " H\u1EE7y ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 114);
    \u0275\u0275listener("click", function LearningMaterialComponent_Conditional_69_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.confirmDelete());
    });
    \u0275\u0275text(16, " \u0110\u1ED3ng \xFD X\xF3a ");
    \u0275\u0275elementEnd()()()()();
  }
}
var LearningMaterialComponent = class _LearningMaterialComponent {
  materialService = inject(LearningMaterialService);
  courseService = inject(CourseService);
  fb = inject(FormBuilder);
  destroyRef = inject(DestroyRef);
  toastService = inject(ToastService);
  // Constants
  typeMap = MATERIAL_TYPE_MAP;
  statusMap = INDEXING_STATUS_MAP;
  // Data Signals
  materials = signal([], ...ngDevMode ? [{ debugName: "materials" }] : (
    /* istanbul ignore next */
    []
  ));
  availableCourses = signal([], ...ngDevMode ? [{ debugName: "availableCourses" }] : (
    /* istanbul ignore next */
    []
  ));
  // Filter Signals
  selectedCourseFilter = signal(null, ...ngDevMode ? [{ debugName: "selectedCourseFilter" }] : (
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
  // Modal Signals
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
  materialForm;
  selectedFile = signal(null, ...ngDevMode ? [{ debugName: "selectedFile" }] : (
    /* istanbul ignore next */
    []
  ));
  isFormSubmitted = signal(false, ...ngDevMode ? [{ debugName: "isFormSubmitted" }] : (
    /* istanbul ignore next */
    []
  ));
  // Delete Modal Signals
  isDeleteModalOpen = signal(false, ...ngDevMode ? [{ debugName: "isDeleteModalOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  idToDelete = signal(null, ...ngDevMode ? [{ debugName: "idToDelete" }] : (
    /* istanbul ignore next */
    []
  ));
  // Computed signals for Pagination
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
  // Computed: only COURSE-scope materials, optionally filtered by course
  displayMaterials = computed(() => {
    let list = this.materials().filter((m) => m.materialScope === "COURSE");
    const courseId = this.selectedCourseFilter();
    if (courseId) {
      list = list.filter((m) => Number(m.courseId) === Number(courseId));
    }
    return list;
  }, ...ngDevMode ? [{ debugName: "displayMaterials" }] : (
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
    this.materialForm = this.fb.group({
      courseId: ["", [Validators.required]],
      title: ["", [Validators.required, Validators.maxLength(255)]],
      materialType: ["DOCUMENT", [Validators.required]],
      sourceType: ["MINIO", [Validators.required]],
      resourceUrl: [""],
      displayOrder: [0, [Validators.required, Validators.min(0)]],
      isOfficial: [true],
      isRagEnabled: [false]
    });
    this.materialForm.get("sourceType")?.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((srcType) => {
      if (srcType === "EXTERNAL") {
        this.materialForm.get("resourceUrl")?.setValidators([Validators.required]);
      } else {
        this.materialForm.get("resourceUrl")?.clearValidators();
      }
      this.materialForm.get("resourceUrl")?.updateValueAndValidity();
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
  }
  loadData() {
    this.isLoading.set(true);
    this.materialService.getAll({
      page: this.currentPage(),
      size: this.pageSize(),
      keyword: this.searchControl.value || ""
    }).subscribe({
      next: (response) => {
        this.materials.set(response.content || []);
        this.totalElements.set(response.totalElements || 0);
        this.isLoading.set(false);
      },
      error: (err) => {
        this.toastService.error("L\u1ED7i", "Kh\xF4ng th\u1EC3 t\u1EA3i danh s\xE1ch t\xE0i li\u1EC7u: " + (err.error?.message || err.message));
        this.isLoading.set(false);
      }
    });
  }
  onCourseFilterChange(event) {
    const val = event.target.value;
    this.selectedCourseFilter.set(val ? Number(val) : null);
  }
  changePage(page) {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage.set(page);
      this.loadData();
    }
  }
  // --- MODAL LOGIC ---
  openModal(item) {
    this.isFormSubmitted.set(false);
    this.selectedFile.set(null);
    this.loadDropdownOptions();
    if (item && item.id) {
      this.isEditing.set(true);
      this.currentId.set(item.id);
      this.materialForm.patchValue({
        courseId: item.courseId || "",
        title: item.title || "",
        materialType: item.materialType || "DOCUMENT",
        sourceType: item.sourceType || "MINIO",
        resourceUrl: item.resourceUrl || "",
        displayOrder: item.displayOrder !== void 0 ? item.displayOrder : 0,
        isOfficial: item.isOfficial !== void 0 ? item.isOfficial : true,
        isRagEnabled: item.isRagEnabled !== void 0 ? item.isRagEnabled : false
      });
    } else {
      this.isEditing.set(false);
      this.currentId.set(null);
      this.materialForm.reset({
        courseId: "",
        title: "",
        materialType: "DOCUMENT",
        sourceType: "MINIO",
        resourceUrl: "",
        displayOrder: 0,
        isOfficial: true,
        isRagEnabled: false
      });
    }
    this.isModalOpen.set(true);
  }
  closeModal() {
    this.isModalOpen.set(false);
    this.selectedFile.set(null);
  }
  onFileSelected(event) {
    const input = event.target;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.selectedFile.set(file);
      const titleControl = this.materialForm.get("title");
      if (!titleControl?.value) {
        titleControl?.setValue(file.name);
      }
    }
  }
  onSubmit() {
    this.isFormSubmitted.set(true);
    if (this.materialForm.invalid) {
      this.toastService.error("Th\xF4ng b\xE1o", "Vui l\xF2ng \u0111i\u1EC1n \u0111\u1EA7y \u0111\u1EE7 c\xE1c tr\u01B0\u1EDDng b\u1EAFt bu\u1ED9c");
      return;
    }
    const formValues = this.materialForm.value;
    if (!this.isEditing() && formValues.sourceType === "MINIO" && !this.selectedFile()) {
      this.toastService.error("L\u1ED7i t\u1EC7p tin", "Vui l\xF2ng ch\u1ECDn t\u1EC7p tin c\u1EA7n t\u1EA3i l\xEAn");
      return;
    }
    if (this.isEditing() && this.currentId()) {
      this.handleUpdate(formValues);
    } else {
      this.handleCreate(formValues);
    }
  }
  handleCreate(formValues) {
    if (formValues.sourceType === "MINIO" && this.selectedFile()) {
      const formData = new FormData();
      formData.append("courseId", formValues.courseId);
      formData.append("title", formValues.title);
      formData.append("materialType", formValues.materialType);
      formData.append("displayOrder", formValues.displayOrder);
      formData.append("file", this.selectedFile());
      this.materialService.uploadFile(formData).subscribe({
        next: (res) => {
          this.toastService.success("Th\xE0nh c\xF4ng", res.message || "T\u1EA3i l\xEAn t\xE0i li\u1EC7u th\xE0nh c\xF4ng!");
          this.closeModal();
          this.loadData();
        },
        error: (err) => {
          this.toastService.error("L\u1ED7i", "Upload th\u1EA5t b\u1EA1i: " + (err.error?.message || err.message));
        }
      });
    } else {
      const dto = {
        title: formValues.title,
        materialType: formValues.materialType,
        sourceType: "EXTERNAL",
        resourceUrl: formValues.resourceUrl,
        displayOrder: Number(formValues.displayOrder),
        courseId: Number(formValues.courseId)
      };
      this.materialService.createLink(dto).subscribe({
        next: (res) => {
          this.toastService.success("Th\xE0nh c\xF4ng", res.message || "Th\xEAm li\xEAn k\u1EBFt t\xE0i li\u1EC7u th\xE0nh c\xF4ng!");
          this.closeModal();
          this.loadData();
        },
        error: (err) => {
          this.toastService.error("L\u1ED7i", "Th\xEAm link th\u1EA5t b\u1EA1i: " + (err.error?.message || err.message));
        }
      });
    }
  }
  handleUpdate(formValues) {
    const id = this.currentId();
    if (this.selectedFile()) {
      const formData = new FormData();
      formData.append("courseId", formValues.courseId);
      formData.append("title", formValues.title);
      formData.append("materialType", formValues.materialType);
      formData.append("displayOrder", formValues.displayOrder);
      formData.append("isOfficial", formValues.isOfficial);
      formData.append("isRagEnabled", formValues.isRagEnabled);
      formData.append("file", this.selectedFile());
      this.materialService.updateWithFile(id, formData).subscribe({
        next: (res) => {
          this.toastService.success("Th\xE0nh c\xF4ng", res.message || "C\u1EADp nh\u1EADt t\xE0i li\u1EC7u th\xE0nh c\xF4ng!");
          this.closeModal();
          this.loadData();
        },
        error: (err) => {
          this.toastService.error("L\u1ED7i", "C\u1EADp nh\u1EADt th\u1EA5t b\u1EA1i: " + (err.error?.message || err.message));
        }
      });
    } else {
      const dto = {
        title: formValues.title,
        materialType: formValues.materialType,
        sourceType: formValues.sourceType,
        resourceUrl: formValues.resourceUrl,
        displayOrder: Number(formValues.displayOrder),
        isOfficial: formValues.isOfficial,
        isRagEnabled: formValues.isRagEnabled,
        courseId: Number(formValues.courseId)
      };
      this.materialService.update(id, dto).subscribe({
        next: (res) => {
          this.toastService.success("Th\xE0nh c\xF4ng", res.message || "C\u1EADp nh\u1EADt t\xE0i li\u1EC7u th\xE0nh c\xF4ng!");
          this.closeModal();
          this.loadData();
        },
        error: (err) => {
          this.toastService.error("L\u1ED7i", "C\u1EADp nh\u1EADt th\u1EA5t b\u1EA1i: " + (err.error?.message || err.message));
        }
      });
    }
  }
  // --- TOGGLE ACTIONS FROM TABLE ---
  toggleOfficial(item) {
    if (!item.id)
      return;
    const newStatus = !item.isOfficial;
    this.materialService.update(item.id, { isOfficial: newStatus }).subscribe({
      next: (res) => {
        this.toastService.success("Th\xE0nh c\xF4ng", newStatus ? "\u0110\xE3 duy\u1EC7t T\xE0i li\u1EC7u Ch\xEDnh th\u1ED1ng" : "\u0110\xE3 b\u1ECF duy\u1EC7t Ch\xEDnh th\u1ED1ng");
        this.loadData();
      },
      error: (err) => {
        this.toastService.error("L\u1ED7i", "C\u1EADp nh\u1EADt th\u1EA5t b\u1EA1i: " + (err.error?.message || err.message));
      }
    });
  }
  toggleRag(item) {
    if (!item.id)
      return;
    const newStatus = !item.isRagEnabled;
    this.materialService.update(item.id, { isRagEnabled: newStatus }).subscribe({
      next: (res) => {
        this.toastService.success("Th\xE0nh c\xF4ng", newStatus ? "\u0110\xE3 k\xEDch ho\u1EA1t AI RAG cho t\xE0i li\u1EC7u n\xE0y" : "\u0110\xE3 t\u1EAFt AI RAG");
        this.loadData();
      },
      error: (err) => {
        this.toastService.error("L\u1ED7i", "C\u1EADp nh\u1EADt th\u1EA5t b\u1EA1i: " + (err.error?.message || err.message));
      }
    });
  }
  // --- DELETE MODAL ---
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
    this.materialService.delete(id).subscribe({
      next: (res) => {
        this.toastService.success("Th\xE0nh c\xF4ng", res.message || "X\xF3a t\xE0i li\u1EC7u h\u1ECDc t\u1EADp th\xE0nh c\xF4ng!");
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
  // --- HELPERS ---
  getTypeBadge(typeKey) {
    if (!typeKey)
      return { label: "T\xE0i li\u1EC7u", bgClass: "bg-gray-50", textClass: "text-gray-700", icon: "document" };
    return this.typeMap[typeKey] || { label: typeKey, bgClass: "bg-gray-50", textClass: "text-gray-700", icon: "document" };
  }
  getIndexingBadge(statusKey) {
    if (!statusKey)
      return { label: "Ch\u01B0a h\u1ECDc AI", bgClass: "bg-gray-50", textClass: "text-gray-600", borderClass: "border-gray-200" };
    return this.statusMap[statusKey] || { label: statusKey, bgClass: "bg-gray-50", textClass: "text-gray-700", borderClass: "border-gray-200" };
  }
  formatFileSize(bytes) {
    if (!bytes)
      return "N/A";
    if (bytes < 1024)
      return bytes + " B";
    if (bytes < 1024 * 1024)
      return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / (1024 * 1024)).toFixed(1) + " MB";
  }
  static \u0275fac = function LearningMaterialComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LearningMaterialComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LearningMaterialComponent, selectors: [["app-learning-material"]], decls: 70, vars: 12, consts: [[1, "space-y-6"], [1, "flex", "flex-col", "md:flex-row", "md:items-end", "justify-between", "gap-4", "pb-4", "border-b", "border-gray-100"], [1, "text-2xl", "font-extrabold", "text-gray-900", "tracking-tight"], [1, "text-sm", "text-gray-500", "mt-1"], [1, "flex", "flex-wrap", "items-center", "gap-3"], [1, "w-56"], [1, "bg-white", "border", "border-gray-200", "text-gray-900", "text-sm", "rounded-xl", "focus:ring-2", "focus:ring-blue-100", "focus:border-blue-500", "block", "w-full", "p-2.5", "outline-none", "transition", "shadow-sm", "font-medium", 3, "change", "value"], ["value", ""], [3, "value"], [1, "relative"], [1, "absolute", "inset-y-0", "left-0", "flex", "items-center", "pl-3", "pointer-events-none"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-gray-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], ["type", "text", "placeholder", "T\xECm ti\xEAu \u0111\u1EC1 t\xE0i li\u1EC7u...", 1, "bg-white", "border", "border-gray-200", "text-gray-900", "text-sm", "rounded-xl", "focus:ring-2", "focus:ring-blue-100", "focus:border-blue-500", "block", "w-56", "pl-10", "p-2.5", "outline-none", "transition", "shadow-sm", 3, "formControl"], [1, "bg-blue-600", "hover:bg-blue-700", "text-white", "font-semibold", "py-2.5", "px-5", "rounded-xl", "flex", "items-center", "transition", "shadow-md", "hover:shadow-lg", "text-sm", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "mr-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 4v16m8-8H4"], [1, "bg-white", "rounded-2xl", "shadow-sm", "border", "border-gray-100", "overflow-hidden"], [1, "w-full", "text-sm", "text-left", "text-gray-500"], [1, "text-xs", "text-gray-500", "uppercase", "bg-gray-50/80", "border-b", "border-gray-100", "font-semibold"], ["scope", "col", 1, "px-6", "py-4"], ["scope", "col", 1, "px-6", "py-4", "text-right"], [1, "divide-y", "divide-gray-50"], [1, "flex", "flex-col", "sm:flex-row", "items-center", "justify-between", "px-6", "py-4", "bg-gray-50/80", "border-t", "border-gray-100", "rounded-b-2xl", "gap-3"], [1, "text-sm", "text-gray-500"], [1, "font-semibold", "text-gray-900"], [1, "flex", "space-x-2"], [1, "px-3.5", "py-1.5", "text-sm", "font-medium", "text-gray-700", "bg-white", "border", "border-gray-300", "rounded-lg", "hover:bg-gray-50", "disabled:opacity-50", "disabled:cursor-not-allowed", "transition", "shadow-sm", "flex", "items-center", 3, "click", "disabled"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "mr-1"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 19l-7-7 7-7"], [1, "px-3.5", "py-1.5", "text-sm", "font-semibold", "text-gray-800", "bg-gray-100", "rounded-lg", "flex", "items-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "ml-1"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 5l7 7-7 7"], [1, "fixed", "inset-0", "z-50", "overflow-y-auto"], ["colspan", "7", 1, "px-6", "py-12", "text-center", "text-gray-500"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "mx-auto", "h-8", "w-8", "text-blue-500", "mb-3"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"], [1, "bg-white", "hover:bg-blue-50/40", "transition", "duration-200"], [1, "px-6", "py-4", "font-semibold", "text-gray-400"], [1, "text-xs", "text-gray-400", "block", "font-normal", "mt-0.5"], [1, "px-6", "py-4", "max-w-xs"], [1, "font-bold", "text-gray-900", "text-sm", "leading-snug", "line-clamp-2", 3, "title"], [1, "mt-1", "flex", "items-center", "space-x-2"], [1, "px-2", "py-0.5", "text-[11px]", "font-semibold", "rounded-md"], [1, "px-6", "py-4"], [1, "font-bold", "text-indigo-900", "text-xs"], [1, "font-mono", "text-[11px]", "text-gray-400"], [1, "px-6", "py-4", "text-xs", "font-medium"], [1, "inline-flex", "items-center", "text-indigo-700", "font-semibold"], [1, "px-3", "py-1", "text-xs", "font-bold", "rounded-full", "border", "transition", "inline-flex", "items-center", 3, "click", "title"], ["fill", "currentColor", "viewBox", "0 0 20 20", 1, "w-3.5", "h-3.5", "mr-1"], ["fill-rule", "evenodd", "d", "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z", "clip-rule", "evenodd"], [1, "space-y-1"], [1, "px-2.5", "py-0.5", "text-[11px]", "font-bold", "rounded-full", "border", "transition", "inline-flex", "items-center", 3, "click", "title"], [1, "text-[10px]", "font-semibold", "text-gray-500"], [1, "px-6", "py-4", "text-right", "space-x-2"], ["target", "_blank", 1, "font-semibold", "text-emerald-600", "hover:text-emerald-800", "transition", "text-xs", "inline-flex", "items-center", 3, "href"], [1, "font-medium", "text-blue-600", "hover:text-blue-800", "transition", "text-xs", 3, "click"], [1, "font-medium", "text-red-600", "hover:text-red-800", "transition", "text-xs", 3, "click"], [1, "inline-flex", "items-center", "text-blue-700", "font-semibold"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-3.5", "h-3.5", "mr-1"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"], [1, "text-gray-400", "font-mono", "text-[11px]", "mt-0.5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"], [1, "px-2", "py-0.5", "rounded", "border", "inline-block"], [1, "fixed", "inset-0", "bg-gray-900/50", "backdrop-blur-sm", "transition-opacity", 3, "click"], [1, "flex", "min-h-full", "items-center", "justify-center", "p-4"], [1, "relative", "w-full", "max-w-xl", "rounded-2xl", "bg-white", "p-6", "shadow-2xl", "transition-all", "border", "border-gray-100"], [1, "flex", "items-center", "justify-between", "pb-4", "border-b", "border-gray-100"], [1, "text-xl", "font-bold", "text-gray-900"], [1, "text-gray-400", "hover:text-gray-600", "transition", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "mt-4", "space-y-4", 3, "ngSubmit", "formGroup"], [1, "block", "text-xs", "font-semibold", "text-indigo-700", "uppercase", "tracking-wider", "mb-1"], [1, "text-red-500"], ["formControlName", "courseId", 1, "w-full", "px-3.5", "py-2.5", "border", "border-indigo-200", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-indigo-100", "focus:border-indigo-500", "outline-none", "transition", "bg-indigo-50/20", "font-semibold", "text-gray-900"], [1, "block", "text-xs", "font-semibold", "text-gray-700", "uppercase", "tracking-wider", "mb-2"], [1, "grid", "grid-cols-2", "gap-3"], [1, "flex", "items-center", "p-2.5", "rounded-xl", "border", "cursor-pointer", "transition", "text-xs", "font-semibold"], ["type", "radio", "formControlName", "sourceType", "value", "MINIO", 1, "sr-only"], ["type", "radio", "formControlName", "sourceType", "value", "EXTERNAL", 1, "sr-only"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "gap-4"], [1, "block", "text-xs", "font-semibold", "text-gray-700", "uppercase", "tracking-wider", "mb-1"], ["type", "text", "formControlName", "title", "placeholder", "Nh\u1EADp ti\xEAu \u0111\u1EC1 hi\u1EC3n th\u1ECB...", 1, "w-full", "px-3.5", "py-2.5", "border", "border-gray-200", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-100", "outline-none", "transition", "font-semibold", "text-gray-900", "bg-white"], ["formControlName", "materialType", 1, "w-full", "px-3.5", "py-2.5", "border", "border-gray-200", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-100", "outline-none", "transition", "bg-white", "font-semibold", "text-gray-900"], ["value", "DOCUMENT"], ["value", "SLIDE"], ["value", "VIDEO"], ["value", "IMAGE"], ["value", "EXTERNAL_LINK"], ["type", "number", "formControlName", "displayOrder", "min", "0", 1, "w-full", "px-3.5", "py-2", "border", "border-gray-200", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-100", "outline-none", "transition", "font-mono", "bg-white", "text-gray-900"], [1, "pt-2", "space-y-2", "border-t", "border-gray-100"], [1, "flex", "items-center", "space-x-3", "cursor-pointer"], ["type", "checkbox", "formControlName", "isOfficial", 1, "w-4", "h-4", "text-emerald-600", "rounded", "border-gray-300", "focus:ring-emerald-500", "cursor-pointer"], [1, "text-xs", "font-bold", "text-emerald-800"], ["type", "checkbox", "formControlName", "isRagEnabled", 1, "w-4", "h-4", "text-purple-600", "rounded", "border-gray-300", "focus:ring-purple-500", "cursor-pointer"], [1, "text-xs", "font-bold", "text-purple-800"], [1, "flex", "justify-end", "space-x-3", "pt-4", "border-t", "border-gray-100"], ["type", "button", 1, "px-4", "py-2.5", "text-sm", "font-medium", "text-gray-700", "bg-white", "border", "border-gray-300", "rounded-xl", "hover:bg-gray-50", "transition", 3, "click"], ["type", "submit", 1, "px-5", "py-2.5", "text-sm", "font-semibold", "text-white", "bg-blue-600", "hover:bg-blue-700", "rounded-xl", "transition", "shadow-md"], ["type", "file", 1, "w-full", "px-3.5", "py-2", "border", "border-gray-200", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-100", "outline-none", "transition", "bg-white", "text-gray-700", 3, "change"], [1, "mt-1", "text-xs", "text-blue-600", "font-semibold"], ["type", "url", "formControlName", "resourceUrl", "placeholder", "https://drive.google.com/...", 1, "w-full", "px-3.5", "py-2.5", "border", "border-gray-200", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-blue-100", "outline-none", "transition", "font-mono", "bg-white", "text-gray-900"], [1, "relative", "w-full", "max-w-md", "rounded-2xl", "bg-white", "p-6", "shadow-2xl", "transition-all", "border", "border-gray-100"], [1, "flex", "items-center", "space-x-3", "text-red-600", "mb-4"], [1, "p-3", "bg-red-50", "rounded-full"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"], [1, "text-lg", "font-bold", "text-gray-900"], [1, "text-sm", "text-gray-600", "mb-6"], [1, "flex", "justify-end", "space-x-3"], [1, "px-4", "py-2", "text-sm", "font-medium", "text-gray-700", "bg-white", "border", "border-gray-300", "rounded-xl", "hover:bg-gray-50", "transition", 3, "click"], [1, "px-4", "py-2", "text-sm", "font-semibold", "text-white", "bg-red-600", "hover:bg-red-700", "rounded-xl", "transition", "shadow-md", 3, "click"]], template: function LearningMaterialComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Qu\u1EA3n l\xFD T\xE0i li\u1EC7u Kh\xF3a h\u1ECDc");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Qu\u1EA3n l\xFD kho t\xE0i li\u1EC7u ch\xEDnh th\u1ED1ng c\u1EA5p Kh\xF3a h\u1ECDc, ph\xE2n quy\u1EC1n tr\u1EE3 l\xFD RAG AI");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 4)(8, "div", 5)(9, "select", 6);
      \u0275\u0275listener("change", function LearningMaterialComponent_Template_select_change_9_listener($event) {
        return ctx.onCourseFilterChange($event);
      });
      \u0275\u0275elementStart(10, "option", 7);
      \u0275\u0275text(11, "-- T\u1EA5t c\u1EA3 kh\xF3a h\u1ECDc --");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(12, LearningMaterialComponent_For_13_Template, 2, 3, "option", 8, _forTrack09);
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
      \u0275\u0275listener("click", function LearningMaterialComponent_Template_button_click_19_listener() {
        return ctx.openModal();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(20, "svg", 15);
      \u0275\u0275element(21, "path", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275text(22, " Th\xEAm t\xE0i li\u1EC7u m\u1EDBi ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(23, "div", 17)(24, "table", 18)(25, "thead", 19)(26, "tr")(27, "th", 20);
      \u0275\u0275text(28, "STT / Th\u1EE9 t\u1EF1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "th", 20);
      \u0275\u0275text(30, "Ti\xEAu \u0111\u1EC1 & Lo\u1EA1i t\xE0i li\u1EC7u");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "th", 20);
      \u0275\u0275text(32, "Kh\xF3a h\u1ECDc");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "th", 20);
      \u0275\u0275text(34, "Ngu\u1ED3n & Dung l\u01B0\u1EE3ng");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "th", 20);
      \u0275\u0275text(36, "Duy\u1EC7t ch\xEDnh th\u1ED1ng");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "th", 20);
      \u0275\u0275text(38, "AI RAG");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "th", 21);
      \u0275\u0275text(40, "Thao t\xE1c");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(41, "tbody", 22);
      \u0275\u0275conditionalCreate(42, LearningMaterialComponent_Conditional_42_Template, 6, 0, "tr")(43, LearningMaterialComponent_Conditional_43_Template, 3, 0, "tr")(44, LearningMaterialComponent_Conditional_44_Template, 2, 0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "div", 23)(46, "div", 24);
      \u0275\u0275text(47, " Hi\u1EC3n th\u1ECB ");
      \u0275\u0275elementStart(48, "span", 25);
      \u0275\u0275text(49);
      \u0275\u0275elementEnd();
      \u0275\u0275text(50, " - ");
      \u0275\u0275elementStart(51, "span", 25);
      \u0275\u0275text(52);
      \u0275\u0275elementEnd();
      \u0275\u0275text(53, " trong t\u1ED5ng s\u1ED1 ");
      \u0275\u0275elementStart(54, "span", 25);
      \u0275\u0275text(55);
      \u0275\u0275elementEnd();
      \u0275\u0275text(56, " t\xE0i li\u1EC7u ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "div", 26)(58, "button", 27);
      \u0275\u0275listener("click", function LearningMaterialComponent_Template_button_click_58_listener() {
        return ctx.changePage(ctx.currentPage() - 1);
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(59, "svg", 28);
      \u0275\u0275element(60, "path", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275text(61, " Tr\u01B0\u1EDBc ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(62, "span", 30);
      \u0275\u0275text(63);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "button", 27);
      \u0275\u0275listener("click", function LearningMaterialComponent_Template_button_click_64_listener() {
        return ctx.changePage(ctx.currentPage() + 1);
      });
      \u0275\u0275text(65, " Sau ");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(66, "svg", 31);
      \u0275\u0275element(67, "path", 32);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275conditionalCreate(68, LearningMaterialComponent_Conditional_68_Template, 76, 12, "div", 33);
      \u0275\u0275conditionalCreate(69, LearningMaterialComponent_Conditional_69_Template, 17, 0, "div", 33);
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275property("value", ctx.selectedCourseFilter() || "");
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.availableCourses());
      \u0275\u0275advance(6);
      \u0275\u0275property("formControl", ctx.searchControl);
      \u0275\u0275advance(24);
      \u0275\u0275conditional(ctx.isLoading() && ctx.materials().length === 0 ? 42 : ctx.displayMaterials().length === 0 ? 43 : 44);
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
      \u0275\u0275conditional(ctx.isModalOpen() ? 68 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isDeleteModalOpen() ? 69 : -1);
    }
  }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormControlDirective, FormGroupDirective, FormControlName], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LearningMaterialComponent, [{
    type: Component,
    args: [{ selector: "app-learning-material", imports: [CommonModule, ReactiveFormsModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="space-y-6">\r
\r
  <!-- PAGE HEADER -->\r
  <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-gray-100">\r
    <div>\r
      <h1 class="text-2xl font-extrabold text-gray-900 tracking-tight">Qu\u1EA3n l\xFD T\xE0i li\u1EC7u Kh\xF3a h\u1ECDc</h1>\r
      <p class="text-sm text-gray-500 mt-1">Qu\u1EA3n l\xFD kho t\xE0i li\u1EC7u ch\xEDnh th\u1ED1ng c\u1EA5p Kh\xF3a h\u1ECDc, ph\xE2n quy\u1EC1n tr\u1EE3 l\xFD RAG AI</p>\r
    </div>\r
    \r
    <!-- Header Right Actions -->\r
    <div class="flex flex-wrap items-center gap-3">\r
      <!-- Course Filter Select -->\r
      <div class="w-56">\r
        <select \r
          [value]="selectedCourseFilter() || ''"\r
          (change)="onCourseFilterChange($event)"\r
          class="bg-white border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-500 block w-full p-2.5 outline-none transition shadow-sm font-medium"\r
        >\r
          <option value="">-- T\u1EA5t c\u1EA3 kh\xF3a h\u1ECDc --</option>\r
          @for (c of availableCourses(); track c.id) {\r
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
          placeholder="T\xECm ti\xEAu \u0111\u1EC1 t\xE0i li\u1EC7u..." \r
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
        Th\xEAm t\xE0i li\u1EC7u m\u1EDBi\r
      </button>\r
    </div>\r
  </div>\r
\r
  <!-- DATA TABLE -->\r
  <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">\r
    <table class="w-full text-sm text-left text-gray-500">\r
      <thead class="text-xs text-gray-500 uppercase bg-gray-50/80 border-b border-gray-100 font-semibold">\r
        <tr>\r
          <th scope="col" class="px-6 py-4">STT / Th\u1EE9 t\u1EF1</th>\r
          <th scope="col" class="px-6 py-4">Ti\xEAu \u0111\u1EC1 & Lo\u1EA1i t\xE0i li\u1EC7u</th>\r
          <th scope="col" class="px-6 py-4">Kh\xF3a h\u1ECDc</th>\r
          <th scope="col" class="px-6 py-4">Ngu\u1ED3n & Dung l\u01B0\u1EE3ng</th>\r
          <th scope="col" class="px-6 py-4">Duy\u1EC7t ch\xEDnh th\u1ED1ng</th>\r
          <th scope="col" class="px-6 py-4">AI RAG</th>\r
          <th scope="col" class="px-6 py-4 text-right">Thao t\xE1c</th>\r
        </tr>\r
      </thead>\r
      <tbody class="divide-y divide-gray-50">\r
        @if (isLoading() && materials().length === 0) {\r
          <tr>\r
            <td colspan="7" class="px-6 py-12 text-center text-gray-500">\r
              <svg class="animate-spin mx-auto h-8 w-8 text-blue-500 mb-3" fill="none" viewBox="0 0 24 24">\r
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>\r
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>\r
              </svg>\r
              \u0110ang t\u1EA3i danh s\xE1ch t\xE0i li\u1EC7u...\r
            </td>\r
          </tr>\r
        } @else if (displayMaterials().length === 0) {\r
          <tr>\r
            <td colspan="7" class="px-6 py-12 text-center text-gray-500">\r
              Kh\xF4ng t\xECm th\u1EA5y t\xE0i li\u1EC7u kh\xF3a h\u1ECDc n\xE0o.\r
            </td>\r
          </tr>\r
        } @else {\r
          @for (m of displayMaterials(); track m.id; let idx = $index) {\r
            <tr class="bg-white hover:bg-blue-50/40 transition duration-200">\r
              \r
              <!-- STT / Order -->\r
              <td class="px-6 py-4 font-semibold text-gray-400">\r
                #{{ startIndex() + idx }}\r
                <span class="text-xs text-gray-400 block font-normal mt-0.5">Th\u1EE9 t\u1EF1: {{ m.displayOrder || 0 }}</span>\r
              </td>\r
\r
              <!-- Title & Type -->\r
              <td class="px-6 py-4 max-w-xs">\r
                @let typeBadge = getTypeBadge(m.materialType);\r
                <div class="font-bold text-gray-900 text-sm leading-snug line-clamp-2" [title]="m.title">\r
                  {{ m.title }}\r
                </div>\r
                <div class="mt-1 flex items-center space-x-2">\r
                  <span class="px-2 py-0.5 text-[11px] font-semibold rounded-md" [class]="typeBadge.bgClass + ' ' + typeBadge.textClass">\r
                    {{ typeBadge.label }}\r
                  </span>\r
                </div>\r
              </td>\r
\r
              <!-- Kh\xF3a h\u1ECDc -->\r
              <td class="px-6 py-4">\r
                <div class="font-bold text-indigo-900 text-xs">{{ m.courseName || '---' }}</div>\r
                <div class="font-mono text-[11px] text-gray-400">{{ m.courseCode || 'M\xE3 KH' }}</div>\r
              </td>\r
\r
              <!-- Source & File Size -->\r
              <td class="px-6 py-4 text-xs font-medium">\r
                @if (m.sourceType === 'MINIO') {\r
                  <span class="inline-flex items-center text-blue-700 font-semibold">\r
                    <svg class="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>\r
                    </svg>\r
                    MinIO File\r
                  </span>\r
                  <div class="text-gray-400 font-mono text-[11px] mt-0.5">{{ formatFileSize(m.fileSize) }}</div>\r
                } @else {\r
                  <span class="inline-flex items-center text-indigo-700 font-semibold">\r
                    <svg class="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>\r
                    </svg>\r
                    Link ngo\xE0i\r
                  </span>\r
                }\r
              </td>\r
\r
              <!-- Official Badge & Toggle Button -->\r
              <td class="px-6 py-4">\r
                <button \r
                  (click)="toggleOfficial(m)"\r
                  class="px-3 py-1 text-xs font-bold rounded-full border transition inline-flex items-center"\r
                  [class]="m.isOfficial ? 'bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100' : 'bg-gray-50 text-gray-500 border-gray-200 hover:bg-gray-100'"\r
                  [title]="m.isOfficial ? 'B\u1EA5m \u0111\u1EC3 h\u1EE7y duy\u1EC7t ch\xEDnh th\u1ED1ng' : 'B\u1EA5m \u0111\u1EC3 duy\u1EC7t ch\xEDnh th\u1ED1ng'"\r
                >\r
                  <svg class="w-3.5 h-3.5 mr-1" fill="currentColor" viewBox="0 0 20 20">\r
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>\r
                  </svg>\r
                  {{ m.isOfficial ? 'Ch\xEDnh th\u1ED1ng' : 'Ch\u1EDD duy\u1EC7t' }}\r
                </button>\r
              </td>\r
\r
              <!-- AI RAG Toggle & Indexing Status -->\r
              <td class="px-6 py-4">\r
                <div class="space-y-1">\r
                  <button \r
                    (click)="toggleRag(m)"\r
                    class="px-2.5 py-0.5 text-[11px] font-bold rounded-full border transition inline-flex items-center"\r
                    [class]="m.isRagEnabled ? 'bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100' : 'bg-gray-50 text-gray-400 border-gray-200 hover:bg-gray-100'"\r
                    [title]="m.isRagEnabled ? 'B\u1EA5m \u0111\u1EC3 t\u1EAFt AI RAG' : 'B\u1EA5m \u0111\u1EC3 k\xEDch ho\u1EA1t AI RAG'"\r
                  >\r
                    \u2728 {{ m.isRagEnabled ? 'AI RAG B\u1EADt' : 'AI RAG T\u1EAFt' }}\r
                  </button>\r
\r
                  @if (m.isRagEnabled) {\r
                    @let idxBadge = getIndexingBadge(m.indexingStatus);\r
                    <div class="text-[10px] font-semibold text-gray-500">\r
                      <span class="px-2 py-0.5 rounded border inline-block" [class]="idxBadge.bgClass + ' ' + idxBadge.textClass + ' ' + idxBadge.borderClass">\r
                        {{ idxBadge.label }}\r
                      </span>\r
                    </div>\r
                  }\r
                </div>\r
              </td>\r
\r
              <!-- Actions -->\r
              <td class="px-6 py-4 text-right space-x-2">\r
                @if (m.downloadUrl) {\r
                  <a \r
                    [href]="m.downloadUrl" \r
                    target="_blank" \r
                    class="font-semibold text-emerald-600 hover:text-emerald-800 transition text-xs inline-flex items-center"\r
                  >\r
                    T\u1EA3i/Xem\r
                  </a>\r
                }\r
                <button \r
                  (click)="openModal(m)" \r
                  class="font-medium text-blue-600 hover:text-blue-800 transition text-xs"\r
                >\r
                  S\u1EEDa\r
                </button>\r
                <button \r
                  (click)="onDelete(m.id!)" \r
                  class="font-medium text-red-600 hover:text-red-800 transition text-xs"\r
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
        trong t\u1ED5ng s\u1ED1 <span class="font-semibold text-gray-900">{{ totalElements() }}</span> t\xE0i li\u1EC7u\r
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
<!-- MODAL TH\xCAM / C\u1EACP NH\u1EACT T\xC0I LI\u1EC6U -->\r
@if (isModalOpen()) {\r
  <div class="fixed inset-0 z-50 overflow-y-auto">\r
    <div class="fixed inset-0 bg-gray-900/50 backdrop-blur-sm transition-opacity" (click)="closeModal()"></div>\r
\r
    <div class="flex min-h-full items-center justify-center p-4">\r
      <div class="relative w-full max-w-xl rounded-2xl bg-white p-6 shadow-2xl transition-all border border-gray-100">\r
        \r
        <!-- Header -->\r
        <div class="flex items-center justify-between pb-4 border-b border-gray-100">\r
          <h3 class="text-xl font-bold text-gray-900">\r
            {{ isEditing() ? 'C\u1EADp nh\u1EADt th\xF4ng tin t\xE0i li\u1EC7u' : 'T\u1EA3i l\xEAn / Th\xEAm t\xE0i li\u1EC7u kh\xF3a h\u1ECDc m\u1EDBi' }}\r
          </h3>\r
          <button (click)="closeModal()" class="text-gray-400 hover:text-gray-600 transition">\r
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>\r
            </svg>\r
          </button>\r
        </div>\r
\r
        <form [formGroup]="materialForm" (ngSubmit)="onSubmit()" class="mt-4 space-y-4">\r
          \r
          <!-- Course Select -->\r
          <div>\r
            <label class="block text-xs font-semibold text-indigo-700 uppercase tracking-wider mb-1">\r
              Thu\u1ED9c Kh\xF3a h\u1ECDc <span class="text-red-500">*</span>\r
            </label>\r
            <select \r
              formControlName="courseId"\r
              class="w-full px-3.5 py-2.5 border border-indigo-200 rounded-xl text-sm focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500 outline-none transition bg-indigo-50/20 font-semibold text-gray-900"\r
              [class.border-red-400]="isFormSubmitted() && materialForm.get('courseId')?.invalid"\r
            >\r
              <option value="">-- Ch\u1ECDn Kh\xF3a h\u1ECDc --</option>\r
              @for (c of availableCourses(); track c.id) {\r
                <option [value]="c.id">{{ c.code }} - {{ c.name }}</option>\r
              }\r
            </select>\r
          </div>\r
\r
          <!-- 2. Source Type Selection (MinIO vs External) -->\r
          <div>\r
            <label class="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">\r
              Ngu\u1ED3n l\u01B0u tr\u1EEF t\xE0i li\u1EC7u <span class="text-red-500">*</span>\r
            </label>\r
            <div class="grid grid-cols-2 gap-3">\r
              <label \r
                class="flex items-center p-2.5 rounded-xl border cursor-pointer transition text-xs font-semibold"\r
                [class]="materialForm.get('sourceType')?.value === 'MINIO' ? 'border-blue-500 bg-blue-50/50 text-blue-900' : 'border-gray-200 text-gray-600'"\r
              >\r
                <input type="radio" formControlName="sourceType" value="MINIO" class="sr-only">\r
                \u{1F4C1} T\u1EA3i t\u1EC7p tin v\u1EADt l\xFD (MinIO)\r
              </label>\r
\r
              <label \r
                class="flex items-center p-2.5 rounded-xl border cursor-pointer transition text-xs font-semibold"\r
                [class]="materialForm.get('sourceType')?.value === 'EXTERNAL' ? 'border-purple-500 bg-purple-50/50 text-purple-900' : 'border-gray-200 text-gray-600'"\r
              >\r
                <input type="radio" formControlName="sourceType" value="EXTERNAL" class="sr-only">\r
                \u{1F517} Li\xEAn k\u1EBFt ngo\xE0i (URL / Drive)\r
              </label>\r
            </div>\r
          </div>\r
\r
          <!-- Input File OR Input URL -->\r
          @if (materialForm.get('sourceType')?.value === 'MINIO') {\r
            <div>\r
              <label class="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">\r
                Ch\u1ECDn t\u1EC7p tin {{ isEditing() ? '(\u0110\u1EC3 tr\u1ED1ng n\u1EBFu kh\xF4ng thay \u0111\u1ED5i)' : '*' }}\r
              </label>\r
              <input \r
                type="file" \r
                (change)="onFileSelected($event)"\r
                class="w-full px-3.5 py-2 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-100 outline-none transition bg-white text-gray-700"\r
              >\r
              @if (selectedFile()) {\r
                <p class="mt-1 text-xs text-blue-600 font-semibold">\u0110\xE3 ch\u1ECDn: {{ selectedFile()?.name }} ({{ formatFileSize(selectedFile()?.size) }})</p>\r
              }\r
            </div>\r
          } @else {\r
            <div>\r
              <label class="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">\r
                \u0110\u01B0\u1EDDng d\u1EABn li\xEAn k\u1EBFt (URL) <span class="text-red-500">*</span>\r
              </label>\r
              <input \r
                type="url" \r
                formControlName="resourceUrl"\r
                placeholder="https://drive.google.com/..."\r
                class="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-100 outline-none transition font-mono bg-white text-gray-900"\r
                [class.border-red-400]="isFormSubmitted() && materialForm.get('resourceUrl')?.invalid"\r
              >\r
            </div>\r
          }\r
\r
          <!-- Title & Material Type Grid -->\r
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">\r
            <!-- Title -->\r
            <div>\r
              <label class="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">\r
                Ti\xEAu \u0111\u1EC1 t\xE0i li\u1EC7u <span class="text-red-500">*</span>\r
              </label>\r
              <input \r
                type="text" \r
                formControlName="title"\r
                placeholder="Nh\u1EADp ti\xEAu \u0111\u1EC1 hi\u1EC3n th\u1ECB..."\r
                class="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-100 outline-none transition font-semibold text-gray-900 bg-white"\r
                [class.border-red-400]="isFormSubmitted() && materialForm.get('title')?.invalid"\r
              >\r
            </div>\r
\r
            <!-- Material Type -->\r
            <div>\r
              <label class="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">\r
                Lo\u1EA1i t\xE0i li\u1EC7u <span class="text-red-500">*</span>\r
              </label>\r
              <select \r
                formControlName="materialType"\r
                class="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-100 outline-none transition bg-white font-semibold text-gray-900"\r
              >\r
                <option value="DOCUMENT">DOCUMENT - T\xE0i li\u1EC7u PDF/Word</option>\r
                <option value="SLIDE">SLIDE - B\xE0i gi\u1EA3ng Slide</option>\r
                <option value="VIDEO">VIDEO - Video b\xE0i gi\u1EA3ng</option>\r
                <option value="IMAGE">IMAGE - H\xECnh \u1EA3nh / S\u01A1 \u0111\u1ED3</option>\r
                <option value="EXTERNAL_LINK">EXTERNAL_LINK - Li\xEAn k\u1EBFt ngo\xE0i</option>\r
              </select>\r
            </div>\r
          </div>\r
\r
          <!-- Display Order -->\r
          <div>\r
            <label class="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">\r
              Th\u1EE9 t\u1EF1 s\u1EAFp x\u1EBFp\r
            </label>\r
            <input \r
              type="number" \r
              formControlName="displayOrder"\r
              min="0"\r
              class="w-full px-3.5 py-2 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-100 outline-none transition font-mono bg-white text-gray-900"\r
            >\r
          </div>\r
\r
          <!-- Checkbox Switches -->\r
          <div class="pt-2 space-y-2 border-t border-gray-100">\r
            <label class="flex items-center space-x-3 cursor-pointer">\r
              <input \r
                type="checkbox" \r
                formControlName="isOfficial"\r
                class="w-4 h-4 text-emerald-600 rounded border-gray-300 focus:ring-emerald-500 cursor-pointer"\r
              >\r
              <span class="text-xs font-bold text-emerald-800">Duy\u1EC7t T\xE0i li\u1EC7u Ch\xEDnh th\u1ED1ng trung t\xE2m (isOfficial)</span>\r
            </label>\r
\r
            <label class="flex items-center space-x-3 cursor-pointer">\r
              <input \r
                type="checkbox" \r
                formControlName="isRagEnabled"\r
                class="w-4 h-4 text-purple-600 rounded border-gray-300 focus:ring-purple-500 cursor-pointer"\r
              >\r
              <span class="text-xs font-bold text-purple-800">K\xEDch ho\u1EA1t Tr\u1EE3 l\xFD AI RAG t\u1EF1 \u0111\u1ED9ng h\u1ECDc n\u1ED9i dung t\xE0i li\u1EC7u n\xE0y (isRagEnabled)</span>\r
            </label>\r
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
              {{ isEditing() ? 'C\u1EADp nh\u1EADt' : 'Th\xEAm t\xE0i li\u1EC7u' }}\r
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
          <h3 class="text-lg font-bold text-gray-900">X\xE1c nh\u1EADn x\xF3a t\xE0i li\u1EC7u</h3>\r
        </div>\r
        <p class="text-sm text-gray-600 mb-6">\r
          B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a t\xE0i li\u1EC7u h\u1ECDc t\u1EADp n\xE0y kh\xF4ng? H\xE0nh \u0111\u1ED9ng n\xE0y s\u1EBD x\xF3a v\u0129nh vi\u1EC5n t\u1EC7p tin kh\u1ECFi h\u1EC7 th\u1ED1ng.\r
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LearningMaterialComponent, { className: "LearningMaterialComponent", filePath: "src/app/features/academic/pages/learning-material/learning-material.component.ts", lineNumber: 18 });
})();

// src/app/modules/academic/services/term.service.ts
var TermService = class _TermService {
  http = inject(HttpClient);
  apiUrl = `${environment.apiUrl}/api/v1/terms`;
  getAll(page = 1, size = 10, keyword, status) {
    let params = new HttpParams();
    if (typeof page === "object" && page !== null) {
      const pageIndex = page.page != null ? Math.max(0, Number(page.page) - 1) : 0;
      params = params.set("page", pageIndex.toString());
      if (page.size !== void 0)
        params = params.set("size", page.size.toString());
      if (page.keyword)
        params = params.set("keyword", page.keyword);
      if (page.status)
        params = params.set("status", page.status);
    } else {
      const pageIndex = Math.max(0, Number(page) - 1);
      params = params.set("page", pageIndex.toString()).set("size", (size || 10).toString());
      if (keyword)
        params = params.set("keyword", keyword);
      if (status)
        params = params.set("status", status);
    }
    return this.http.get(this.apiUrl, { params });
  }
  getTerms(params) {
    return this.getAll(params);
  }
  getById(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  create(data) {
    return this.http.post(this.apiUrl, data);
  }
  update(id, data) {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }
  delete(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  static \u0275fac = function TermService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TermService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TermService, factory: _TermService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TermService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/modules/teaching/services/teaching-assignment.service.ts
var TeachingAssignmentService = class _TeachingAssignmentService {
  http = inject(HttpClient);
  apiUrl = `${environment.apiUrl}/api/v1/teaching-assignments`;
  getAll(page = 1, size = 10, classId, staffId) {
    let params = new HttpParams();
    if (typeof page === "object" && page !== null) {
      const pageIndex = page.page != null ? Math.max(0, Number(page.page) - 1) : 0;
      params = params.set("page", pageIndex.toString());
      if (page.size !== void 0)
        params = params.set("size", page.size.toString());
      if (page.classId)
        params = params.set("classId", page.classId.toString());
      if (page.staffId)
        params = params.set("staffId", page.staffId.toString());
      if (page.keyword)
        params = params.set("keyword", page.keyword);
    } else {
      const pageIndex = Math.max(0, Number(page) - 1);
      params = params.set("page", pageIndex.toString()).set("size", (size || 10).toString());
      if (classId)
        params = params.set("classId", classId.toString());
      if (staffId)
        params = params.set("staffId", staffId.toString());
    }
    return this.http.get(this.apiUrl, { params });
  }
  getAllAssignments(params) {
    return this.getAll(params);
  }
  getByClassId(classId) {
    return this.http.get(`${this.apiUrl}/class/${classId}`);
  }
  getById(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  create(data) {
    return this.http.post(this.apiUrl, data);
  }
  update(id, data) {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }
  delete(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  static \u0275fac = function TeachingAssignmentService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TeachingAssignmentService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TeachingAssignmentService, factory: _TeachingAssignmentService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TeachingAssignmentService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/modules/teaching/services/teaching-substitution.service.ts
var TeachingSubstitutionService = class _TeachingSubstitutionService {
  http = inject(HttpClient);
  apiUrl = `${environment.apiUrl}/api/v1/teaching-substitutions`;
  /**
   * Lấy danh sách dạy thay có phân trang và tìm kiếm
   */
  getAll(paramsOrPage, size, keyword) {
    let httpParams = new HttpParams();
    if (typeof paramsOrPage === "object" && paramsOrPage !== null) {
      httpParams = httpParams.set("page", (paramsOrPage.page !== void 0 ? paramsOrPage.page - 1 : 0).toString()).set("size", (paramsOrPage.size || 10).toString()).set("sortBy", paramsOrPage.sortBy || "id").set("sortDir", paramsOrPage.sortDir || "desc");
      if (paramsOrPage.keyword && paramsOrPage.keyword.trim() !== "") {
        httpParams = httpParams.set("keyword", paramsOrPage.keyword.trim());
      }
    } else {
      const page = typeof paramsOrPage === "number" ? paramsOrPage : 0;
      httpParams = httpParams.set("page", page.toString()).set("size", (size || 10).toString()).set("sortBy", "id").set("sortDir", "desc");
      if (keyword && keyword.trim() !== "") {
        httpParams = httpParams.set("keyword", keyword.trim());
      }
    }
    return this.http.get(this.apiUrl, { params: httpParams });
  }
  getSubstitutionsByClassId(classId) {
    return this.http.get(`${this.apiUrl}/class/${classId}`);
  }
  getById(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  getAvailableTeachers(scheduleId, startDate, endDate, excludeSubstitutionId) {
    let params = new HttpParams().set("scheduleId", scheduleId.toString()).set("startDate", startDate).set("endDate", endDate);
    if (excludeSubstitutionId) {
      params = params.set("excludeSubstitutionId", excludeSubstitutionId.toString());
    }
    return this.http.get(`${this.apiUrl}/available-teachers`, { params });
  }
  create(dto) {
    return this.http.post(this.apiUrl, dto);
  }
  update(id, dto) {
    return this.http.put(`${this.apiUrl}/${id}`, dto);
  }
  delete(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  static \u0275fac = function TeachingSubstitutionService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TeachingSubstitutionService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TeachingSubstitutionService, factory: _TeachingSubstitutionService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TeachingSubstitutionService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/modules/teaching/services/schedule-assignment.service.ts
var ScheduleAssignmentService = class _ScheduleAssignmentService {
  http = inject(HttpClient);
  apiUrl = `${environment.apiUrl}/api/v1/schedule-assignments`;
  getAll(page = 1, size = 10, scheduleId, staffId) {
    let params = new HttpParams();
    if (typeof page === "object" && page !== null) {
      const pageIndex = page.page != null ? Math.max(0, Number(page.page) - 1) : 0;
      params = params.set("page", pageIndex.toString());
      if (page.size !== void 0)
        params = params.set("size", page.size.toString());
      if (page.scheduleId)
        params = params.set("scheduleId", page.scheduleId.toString());
      if (page.staffId)
        params = params.set("staffId", page.staffId.toString());
      if (page.keyword)
        params = params.set("keyword", page.keyword);
    } else {
      const pageIndex = Math.max(0, Number(page) - 1);
      params = params.set("page", pageIndex.toString()).set("size", (size || 10).toString());
      if (scheduleId)
        params = params.set("scheduleId", scheduleId.toString());
      if (staffId)
        params = params.set("staffId", staffId.toString());
    }
    return this.http.get(this.apiUrl, { params });
  }
  getAssignmentsByScheduleId(scheduleId) {
    return this.http.get(`${this.apiUrl}/schedule/${scheduleId}`);
  }
  getAssignmentsByClassId(classId) {
    return this.http.get(`${this.apiUrl}/class/${classId}`);
  }
  getById(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  create(data) {
    return this.http.post(this.apiUrl, data);
  }
  update(id, data) {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }
  delete(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  static \u0275fac = function ScheduleAssignmentService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ScheduleAssignmentService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ScheduleAssignmentService, factory: _ScheduleAssignmentService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScheduleAssignmentService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/modules/reporting/services/reports.service.ts
var ReportsService = class _ReportsService {
  http = inject(HttpClient);
  statsApiUrl = `${environment.apiUrl}/api/v1/reporting/statistics`;
  classMetricsApiUrl = `${environment.apiUrl}/api/v1/reporting/class-metrics`;
  getLatestReport() {
    return this.http.get(`${this.statsApiUrl}/latest`);
  }
  getReportByDate(date) {
    return this.http.get(`${this.statsApiUrl}/${date}`);
  }
  getReportsRange(start, end) {
    let params = new HttpParams().set("startDate", start).set("endDate", end);
    return this.http.get(`${this.statsApiUrl}/range`, { params });
  }
  getSummaryReportBetween(start, end) {
    let params = new HttpParams();
    if (start)
      params = params.set("startDate", start);
    if (end)
      params = params.set("endDate", end);
    return this.http.get(`${this.statsApiUrl}/summary`, { params });
  }
  syncDailyReport(date) {
    let params = new HttpParams();
    if (date)
      params = params.set("date", date);
    return this.http.post(`${this.statsApiUrl}/sync`, {}, { params });
  }
  getSummary() {
    return this.http.get(`${this.statsApiUrl}/latest`);
  }
  getOverview(date) {
    let params = new HttpParams();
    if (date)
      params = params.set("date", date);
    return this.http.get(`${this.statsApiUrl}/training-dashboard`, { params });
  }
  getTrainingDashboard(date) {
    return this.getOverview(date);
  }
  getClassMetrics(classId) {
    if (classId) {
      return this.http.get(`${this.classMetricsApiUrl}/${classId}`);
    }
    return this.http.get(this.classMetricsApiUrl);
  }
  syncClassMetrics(classId) {
    let params = new HttpParams();
    if (classId)
      params = params.set("classId", classId.toString());
    return this.http.post(`${this.classMetricsApiUrl}/sync`, {}, { params });
  }
  static \u0275fac = function ReportsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReportsService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ReportsService, factory: _ReportsService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  ActivityLogService,
  takeUntilDestroyed,
  TermService,
  CourseService,
  ClassService,
  RoomService,
  DAY_OF_WEEK_MAP,
  ScheduleComponent,
  StudentComponent,
  StaffService,
  StaffComponent,
  DepartmentComponent,
  RoleComponent,
  PermissionComponent,
  UserComponent,
  TeachingAssignmentService,
  TeachingSubstitutionService,
  ScheduleAssignmentService,
  EnrollmentComponent,
  ReportsService,
  LearningMaterialService,
  ActivityLogComponent,
  LearningMaterialComponent
};
/*! Bundled license information:

@angular/core/fesm2022/rxjs-interop.mjs:
  (**
   * @license Angular v21.2.4
   * (c) 2010-2026 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
//# sourceMappingURL=chunk-6CQH4LRE.js.map
