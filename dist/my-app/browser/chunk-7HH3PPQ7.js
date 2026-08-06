import {
  EnrollmentService,
  ScheduleService
} from "./chunk-RYS3MB5W.js";
import {
  AuthService
} from "./chunk-HGEUBDJK.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormArrayName,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormGroupName,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
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
  DomSanitizer,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet
} from "./chunk-T67WJEUA.js";
import {
  CommonModule,
  Component,
  DatePipe,
  HttpClient,
  HttpParams,
  Injectable,
  Location,
  NgClass,
  NgForOf,
  NgIf,
  __spreadProps,
  __spreadValues,
  computed,
  environment,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
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
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction4,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeResourceUrl,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-4WA2FUT3.js";

// src/app/features/teacher/services/online-class.service.ts
var TeacherClassService = class _TeacherClassService {
  http = inject(HttpClient);
  classesApiUrl = `${environment.apiUrl}/api/v1/classes`;
  //  Lấy danh sách lớp gv dạy
  getMyClasses() {
    return this.http.get(`${this.classesApiUrl}/my-classes`);
  }
  // Lấy chi tiết lớp học
  getClassById(classId) {
    return this.http.get(`${this.classesApiUrl}/${classId}`);
  }
  // Lấy danh sách học sinh trong lớp
  getStudentsByClass(classId, status) {
    const url = status ? `${environment.apiUrl}/api/v1/enrollments/class/${classId}?status=${status}` : `${environment.apiUrl}/api/v1/enrollments/class/${classId}`;
    return this.http.get(url);
  }
  static \u0275fac = function TeacherClassService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TeacherClassService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TeacherClassService, factory: _TeacherClassService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TeacherClassService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/features/teacher/services/learning-material.service.ts
var LearningMaterialService = class _LearningMaterialService {
  http = inject(HttpClient);
  apiUrl = `${environment.apiUrl}/api/v1/learning-materials`;
  // Lấy tài liệu (Góc nhìn GV)
  getMaterialsForTeacher(classId) {
    return this.http.get(`${this.apiUrl}/teacher/class/${classId}`);
  }
  // Upload File vật lý
  uploadFile(file, data) {
    const formData = new FormData();
    formData.append("file", file);
    if (data.lessonId)
      formData.append("lessonId", data.lessonId.toString());
    if (data.courseId)
      formData.append("courseId", data.courseId.toString());
    if (data.classId)
      formData.append("classId", data.classId.toString());
    if (data.onlineClassId)
      formData.append("onlineClassId", data.onlineClassId.toString());
    if (data.title)
      formData.append("title", data.title);
    if (data.fileType || data.materialType)
      formData.append("materialType", (data.materialType || data.fileType).toUpperCase());
    formData.append("data", new Blob([JSON.stringify(data)], { type: "application/json" }));
    return this.http.post(`${this.apiUrl}/upload`, formData);
  }
  // Thêm Link
  addLink(data) {
    const payload = __spreadProps(__spreadValues({}, data), {
      classId: data.classId || data.onlineClassId
    });
    return this.http.post(`${this.apiUrl}/link`, payload);
  }
  // Cập nhật tài liệu
  updateMaterial(id, data, file) {
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      if (data.title)
        formData.append("title", data.title);
      if (data.materialType)
        formData.append("materialType", data.materialType);
      if (data.displayOrder !== void 0)
        formData.append("displayOrder", data.displayOrder.toString());
      return this.http.put(`${this.apiUrl}/${id}`, formData);
    } else {
      return this.http.put(`${this.apiUrl}/${id}`, data);
    }
  }
  // Cập nhật trạng thái
  changeStatus(id, status) {
    return this.http.patch(`${this.apiUrl}/${id}/status?status=${status}`, {});
  }
  // Xóa
  deleteMaterial(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  // Lấy Presigned URL tải file
  getDownloadUrl(id) {
    return this.http.get(`${this.apiUrl}/${id}/download-url`);
  }
  // Lấy danh sách bài học theo ID lớp
  getLessonsByClassId(classId) {
    return this.http.get(`${environment.apiUrl}/api/v1/lessons/class/${classId}`);
  }
  // Lấy tài liệu thuộc về bài học cụ thể (lessonId)
  getMaterialsByLessonId(lessonId) {
    return this.http.get(`${this.apiUrl}/lesson/${lessonId}`);
  }
  // Lấy tài liệu chung thuộc về khóa học (courseId)
  getMaterialsByCourseId(courseId) {
    return this.http.get(`${this.apiUrl}/course/${courseId}`);
  }
  static \u0275fac = function LearningMaterialService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LearningMaterialService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LearningMaterialService, factory: _LearningMaterialService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LearningMaterialService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/features/teacher/services/assignment.service.ts
var AssignmentService = class _AssignmentService {
  http = inject(HttpClient);
  apiUrl = `${environment.apiUrl}/api/v1/assignments`;
  // Lấy danh sách bài tập của 1 lớp
  getAssignmentsByClass(classId, page = 0, size = 10) {
    let params = new HttpParams().set("page", page.toString()).set("size", size.toString()).set("sortBy", "createdAt").set("sortDir", "desc");
    return this.http.get(`${this.apiUrl}/class/${classId}`, { params });
  }
  // Lấy chi tiết 1 bài tập
  getAssignmentById(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  createAssignment(dto) {
    return this.http.post(this.apiUrl, dto);
  }
  // Cập nhật bài tập
  updateAssignment(id, dto) {
    return this.http.put(`${this.apiUrl}/${id}`, dto);
  }
  // Xóa bài tập
  deleteAssignment(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  // Lấy danh sách bài tập thuộc bài học cụ thể (lessonId)
  getAssignmentsByLessonId(lessonId) {
    return this.http.get(`${this.apiUrl}/lesson/${lessonId}`);
  }
  static \u0275fac = function AssignmentService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AssignmentService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AssignmentService, factory: _AssignmentService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssignmentService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/features/teacher/pages/class-detail/class-detail.component.ts
var _c0 = () => [];
var _c1 = (a0, a1, a2, a3) => ({ "!text-blue-600": a0, "!text-orange-500": a1, "!text-red-500": a2, "!text-emerald-600": a3 });
var _c2 = (a0) => ({ "border-blue-500 bg-blue-50/50": a0 });
function ClassDetailComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 12);
    \u0275\u0275element(2, "circle", 13)(3, "path", 14);
    \u0275\u0275elementEnd()();
  }
}
function ClassDetailComponent_ng_container_11_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 31);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 32);
    \u0275\u0275element(3, "path", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "input", 34);
    \u0275\u0275listener("ngModelChange", function ClassDetailComponent_ng_container_11_div_24_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onSearchChange($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r1.searchQuery());
  }
}
function ClassDetailComponent_ng_container_11_div_25_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 39);
    \u0275\u0275element(2, "circle", 13)(3, "path", 14);
    \u0275\u0275elementEnd()();
  }
}
function ClassDetailComponent_ng_container_11_div_25_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "div", 41);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 42);
    \u0275\u0275element(3, "path", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "h3", 43);
    \u0275\u0275text(5, "Ch\u01B0a c\xF3 b\xE0i h\u1ECDc n\xE0o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 44);
    \u0275\u0275text(7, "Ch\u01B0a c\xF3 n\u1ED9i dung b\xE0i h\u1ECDc \u0111\u01B0\u1EE3c \u0111\u0103ng t\u1EA3i cho l\u1EDBp h\u1ECDc n\xE0y.");
    \u0275\u0275elementEnd()();
  }
}
function ClassDetailComponent_ng_container_11_div_25_div_3_div_1_p_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 58);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const les_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(les_r5.description);
  }
}
function ClassDetailComponent_ng_container_11_div_25_div_3_div_1_div_16_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 74);
    \u0275\u0275text(1, " B\xE0i h\u1ECDc n\xE0y ch\u01B0a c\xF3 t\xE0i li\u1EC7u \u0111i k\xE8m. ");
    \u0275\u0275elementEnd();
  }
}
function ClassDetailComponent_ng_container_11_div_25_div_3_div_1_div_16_div_15_div_1_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 87);
    \u0275\u0275listener("click", function ClassDetailComponent_ng_container_11_div_25_div_3_div_1_div_16_div_15_div_1_ng_container_13_Template_button_click_1_listener($event) {
      \u0275\u0275restoreView(_r9);
      const m_r8 = \u0275\u0275nextContext().$implicit;
      const les_r5 = \u0275\u0275nextContext(3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.openEditMaterialModal(m_r8, $event, les_r5.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 80);
    \u0275\u0275element(3, "path", 88);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "button", 89);
    \u0275\u0275listener("click", function ClassDetailComponent_ng_container_11_div_25_div_3_div_1_div_16_div_15_div_1_ng_container_13_Template_button_click_4_listener($event) {
      \u0275\u0275restoreView(_r9);
      const m_r8 = \u0275\u0275nextContext().$implicit;
      const les_r5 = \u0275\u0275nextContext(3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.deleteMaterial(m_r8.id, $event, les_r5.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 80);
    \u0275\u0275element(6, "path", 90);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
}
function ClassDetailComponent_ng_container_11_div_25_div_3_div_1_div_16_div_15_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 77)(1, "div", 78);
    \u0275\u0275listener("click", function ClassDetailComponent_ng_container_11_div_25_div_3_div_1_div_16_div_15_div_1_Template_div_click_1_listener() {
      const m_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(7);
      return \u0275\u0275resetView(ctx_r1.openPreview(m_r8));
    });
    \u0275\u0275elementStart(2, "div", 79);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 80);
    \u0275\u0275element(4, "path", 81);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div", 82)(6, "p", 83);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 84);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 85)(11, "button", 86);
    \u0275\u0275listener("click", function ClassDetailComponent_ng_container_11_div_25_div_3_div_1_div_16_div_15_div_1_Template_button_click_11_listener() {
      const m_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(7);
      return \u0275\u0275resetView(ctx_r1.openPreview(m_r8));
    });
    \u0275\u0275text(12, " Xem ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, ClassDetailComponent_ng_container_11_div_25_div_3_div_1_div_16_div_15_div_1_ng_container_13_Template, 7, 0, "ng-container", 7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const m_r8 = ctx.$implicit;
    const les_r5 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(m_r8.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r8.materialType || m_r8.fileType || "Document");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.lessonMaterialManageMap()[les_r5.id]);
  }
}
function ClassDetailComponent_ng_container_11_div_25_div_3_div_1_div_16_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75);
    \u0275\u0275template(1, ClassDetailComponent_ng_container_11_div_25_div_3_div_1_div_16_div_15_div_1_Template, 14, 3, "div", 76);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const les_r5 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.lessonMaterialsMap()[les_r5.id]);
  }
}
function ClassDetailComponent_ng_container_11_div_25_div_3_div_1_div_16_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 74);
    \u0275\u0275text(1, " B\xE0i h\u1ECDc n\xE0y ch\u01B0a c\xF3 b\xE0i t\u1EADp n\xE0o. ");
    \u0275\u0275elementEnd();
  }
}
function ClassDetailComponent_ng_container_11_div_25_div_3_div_1_div_16_div_30_div_1_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ass_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("H\u1EA1n n\u1ED9p: ", \u0275\u0275pipeBind2(2, 1, ass_r11.dueDate, "dd/MM/yyyy HH:mm"));
  }
}
function ClassDetailComponent_ng_container_11_div_25_div_3_div_1_div_16_div_30_div_1_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ass_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Th\u1EDDi gian: ", ass_r11.timeLimitMinutes, " ph\xFAt");
  }
}
function ClassDetailComponent_ng_container_11_div_25_div_3_div_1_div_16_div_30_div_1_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ass_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("T\u1ED1i \u0111a: ", ass_r11.maxAttempts, " l\u1EA7n l\xE0m");
  }
}
function ClassDetailComponent_ng_container_11_div_25_div_3_div_1_div_16_div_30_div_1_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 99);
    \u0275\u0275listener("click", function ClassDetailComponent_ng_container_11_div_25_div_3_div_1_div_16_div_30_div_1_div_11_Template_div_click_0_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(1, "button", 100);
    \u0275\u0275listener("click", function ClassDetailComponent_ng_container_11_div_25_div_3_div_1_div_16_div_30_div_1_div_11_Template_button_click_1_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ass_r11 = \u0275\u0275nextContext().$implicit;
      const les_r5 = \u0275\u0275nextContext(3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.openEditAssignmentModal(ass_r11, $event, les_r5.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 80);
    \u0275\u0275element(3, "path", 88);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "button", 101);
    \u0275\u0275listener("click", function ClassDetailComponent_ng_container_11_div_25_div_3_div_1_div_16_div_30_div_1_div_11_Template_button_click_4_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ass_r11 = \u0275\u0275nextContext().$implicit;
      const les_r5 = \u0275\u0275nextContext(3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.deleteAssignmentItem(ass_r11.id, $event, les_r5.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 80);
    \u0275\u0275element(6, "path", 90);
    \u0275\u0275elementEnd()()();
  }
}
function ClassDetailComponent_ng_container_11_div_25_div_3_div_1_div_16_div_30_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 93);
    \u0275\u0275listener("click", function ClassDetailComponent_ng_container_11_div_25_div_3_div_1_div_16_div_30_div_1_Template_div_click_0_listener($event) {
      const ass_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(7);
      return \u0275\u0275resetView(ctx_r1.navigateToAssignmentDetail(ass_r11.id, $event));
    });
    \u0275\u0275elementStart(1, "div")(2, "div", 94)(3, "h6", 95);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 96);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 97);
    \u0275\u0275template(8, ClassDetailComponent_ng_container_11_div_25_div_3_div_1_div_16_div_30_div_1_span_8_Template, 3, 4, "span", 7)(9, ClassDetailComponent_ng_container_11_div_25_div_3_div_1_div_16_div_30_div_1_span_9_Template, 2, 1, "span", 7)(10, ClassDetailComponent_ng_container_11_div_25_div_3_div_1_div_16_div_30_div_1_span_10_Template, 2, 1, "span", 7);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(11, ClassDetailComponent_ng_container_11_div_25_div_3_div_1_div_16_div_30_div_1_div_11_Template, 7, 0, "div", 98);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ass_r11 = ctx.$implicit;
    const les_r5 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ass_r11.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ass_r11.assignmentType || "HOMEWORK");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ass_r11.dueDate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ass_r11.timeLimitMinutes);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ass_r11.maxAttempts);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.lessonAssignmentManageMap()[les_r5.id]);
  }
}
function ClassDetailComponent_ng_container_11_div_25_div_3_div_1_div_16_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 91);
    \u0275\u0275template(1, ClassDetailComponent_ng_container_11_div_25_div_3_div_1_div_16_div_30_div_1_Template, 12, 6, "div", 92);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const les_r5 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.lessonAssignmentsMap()[les_r5.id]);
  }
}
function ClassDetailComponent_ng_container_11_div_25_div_3_div_1_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 59)(1, "div")(2, "div", 60)(3, "h5", 61);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 62);
    \u0275\u0275element(5, "path", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " T\xE0i li\u1EC7u h\u1ECDc t\u1EADp ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "div", 63)(8, "button", 64);
    \u0275\u0275listener("click", function ClassDetailComponent_ng_container_11_div_25_div_3_div_1_div_16_Template_button_click_8_listener($event) {
      \u0275\u0275restoreView(_r6);
      const les_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.toggleLessonMaterialManageMode(les_r5.id, $event));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 65);
    \u0275\u0275element(10, "path", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(12, "button", 67);
    \u0275\u0275listener("click", function ClassDetailComponent_ng_container_11_div_25_div_3_div_1_div_16_Template_button_click_12_listener($event) {
      \u0275\u0275restoreView(_r6);
      const les_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.openAddMaterialModal(les_r5.id, $event));
    });
    \u0275\u0275text(13, " + Th\xEAm t\xE0i li\u1EC7u ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(14, ClassDetailComponent_ng_container_11_div_25_div_3_div_1_div_16_div_14_Template, 2, 0, "div", 68)(15, ClassDetailComponent_ng_container_11_div_25_div_3_div_1_div_16_div_15_Template, 2, 1, "div", 69);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div")(17, "div", 60)(18, "h5", 61);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(19, "svg", 70);
    \u0275\u0275element(20, "path", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275text(21, " B\xE0i t\u1EADp & \u0110\xE1nh gi\xE1 ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(22, "div", 63)(23, "button", 64);
    \u0275\u0275listener("click", function ClassDetailComponent_ng_container_11_div_25_div_3_div_1_div_16_Template_button_click_23_listener($event) {
      \u0275\u0275restoreView(_r6);
      const les_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.toggleLessonAssignmentManageMode(les_r5.id, $event));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(24, "svg", 65);
    \u0275\u0275element(25, "path", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(27, "button", 72);
    \u0275\u0275listener("click", function ClassDetailComponent_ng_container_11_div_25_div_3_div_1_div_16_Template_button_click_27_listener($event) {
      \u0275\u0275restoreView(_r6);
      const les_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.openAddAssignmentModal(les_r5.id, $event));
    });
    \u0275\u0275text(28, " + T\u1EA1o b\xE0i t\u1EADp ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(29, ClassDetailComponent_ng_container_11_div_25_div_3_div_1_div_16_div_29_Template, 2, 0, "div", 68)(30, ClassDetailComponent_ng_container_11_div_25_div_3_div_1_div_16_div_30_Template, 2, 1, "div", 73);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const les_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngClass", ctx_r1.lessonMaterialManageMap()[les_r5.id] ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.lessonMaterialManageMap()[les_r5.id] ? "Xong" : "S\u1EEDa", " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", (ctx_r1.lessonMaterialsMap()[les_r5.id] || \u0275\u0275pureFunction0(8, _c0)).length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.lessonMaterialsMap()[les_r5.id] || \u0275\u0275pureFunction0(9, _c0)).length > 0);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngClass", ctx_r1.lessonAssignmentManageMap()[les_r5.id] ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.lessonAssignmentManageMap()[les_r5.id] ? "Xong" : "S\u1EEDa", " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", (ctx_r1.lessonAssignmentsMap()[les_r5.id] || \u0275\u0275pureFunction0(10, _c0)).length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.lessonAssignmentsMap()[les_r5.id] || \u0275\u0275pureFunction0(11, _c0)).length > 0);
  }
}
function ClassDetailComponent_ng_container_11_div_25_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 47);
    \u0275\u0275listener("click", function ClassDetailComponent_ng_container_11_div_25_div_3_div_1_Template_div_click_1_listener() {
      const les_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.toggleLessonExpand(les_r5.id));
    });
    \u0275\u0275elementStart(2, "div", 48)(3, "div", 49);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "h4", 50);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, ClassDetailComponent_ng_container_11_div_25_div_3_div_1_p_8_Template, 2, 1, "p", 51);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 52)(10, "span", 53);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 54);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(14, "svg", 55);
    \u0275\u0275element(15, "path", 56);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(16, ClassDetailComponent_ng_container_11_div_25_div_3_div_1_div_16_Template, 31, 12, "div", 57);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const les_r5 = ctx.$implicit;
    const i_r13 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" #", les_r5.orderNumber || i_r13 + 1, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(les_r5.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", les_r5.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" \u{1F4C4} ", (ctx_r1.lessonMaterialsMap()[les_r5.id] || \u0275\u0275pureFunction0(8, _c0)).length, " T\xE0i li\u1EC7u ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" \u270F\uFE0F ", (ctx_r1.lessonAssignmentsMap()[les_r5.id] || \u0275\u0275pureFunction0(9, _c0)).length, " B\xE0i t\u1EADp ");
    \u0275\u0275advance();
    \u0275\u0275classProp("rotate-180", ctx_r1.isLessonExpanded(les_r5.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isLessonExpanded(les_r5.id));
  }
}
function ClassDetailComponent_ng_container_11_div_25_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275template(1, ClassDetailComponent_ng_container_11_div_25_div_3_div_1_Template, 17, 10, "div", 45);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.lessons());
  }
}
function ClassDetailComponent_ng_container_11_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275template(1, ClassDetailComponent_ng_container_11_div_25_div_1_Template, 4, 0, "div", 36)(2, ClassDetailComponent_ng_container_11_div_25_div_2_Template, 8, 0, "div", 37)(3, ClassDetailComponent_ng_container_11_div_25_div_3_Template, 2, 1, "div", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isLoadingLessons());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoadingLessons() && ctx_r1.lessons().length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoadingLessons() && ctx_r1.lessons().length > 0);
  }
}
function ClassDetailComponent_ng_container_11_ng_container_26_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 104);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 105);
    \u0275\u0275element(2, "circle", 13)(3, "path", 14);
    \u0275\u0275elementEnd()();
  }
}
function ClassDetailComponent_ng_container_11_ng_container_26_div_2_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 120);
    \u0275\u0275text(2, "Ch\u01B0a c\xF3 h\u1ECDc sinh n\xE0o trong l\u1EDBp h\u1ECDc n\xE0y.");
    \u0275\u0275elementEnd()();
  }
}
function ClassDetailComponent_ng_container_11_ng_container_26_div_2_tr_17_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const student_r15 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(student_r15.studentEmail);
  }
}
function ClassDetailComponent_ng_container_11_ng_container_26_div_2_tr_17_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " \u2022 ");
    \u0275\u0275elementEnd();
  }
}
function ClassDetailComponent_ng_container_11_ng_container_26_div_2_tr_17_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const student_r15 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(student_r15.studentPhone);
  }
}
function ClassDetailComponent_ng_container_11_ng_container_26_div_2_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 121)(1, "td", 122);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 123)(4, "div", 21)(5, "div", 124);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div")(8, "div", 125);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 126);
    \u0275\u0275template(11, ClassDetailComponent_ng_container_11_ng_container_26_div_2_tr_17_span_11_Template, 2, 1, "span", 7)(12, ClassDetailComponent_ng_container_11_ng_container_26_div_2_tr_17_span_12_Template, 2, 0, "span", 7)(13, ClassDetailComponent_ng_container_11_ng_container_26_div_2_tr_17_span_13_Template, 2, 1, "span", 7);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(14, "td", 123)(15, "span", 127);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "td", 128);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td", 129)(21, "span", 130);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const student_r15 = ctx.$implicit;
    const i_r16 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r1.currentPage() - 1) * ctx_r1.pageSize() + i_r16 + 1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", (student_r15.studentName || "H").charAt(0), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(student_r15.studentName || "H\u1ECDc vi\xEAn");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", student_r15.studentEmail);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", student_r15.studentEmail && student_r15.studentPhone);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", student_r15.studentPhone);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(student_r15.studentCode || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", student_r15.enrollmentDate ? \u0275\u0275pipeBind2(19, 10, student_r15.enrollmentDate, "dd/MM/yyyy") : "\u2014", " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", student_r15.status === "ACTIVE" || student_r15.status === "active" ? "bg-emerald-50 text-emerald-700 border-emerald-200" : "bg-amber-50 text-amber-700 border-amber-200");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", student_r15.status === "ACTIVE" || student_r15.status === "active" ? "\u{1F7E2} \u0110ang h\u1ECDc" : student_r15.status || "\u0110\xE3 \u0111\u0103ng k\xFD", " ");
  }
}
function ClassDetailComponent_ng_container_11_ng_container_26_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 106)(1, "div", 107)(2, "table", 108)(3, "thead", 109)(4, "tr")(5, "th", 110);
    \u0275\u0275text(6, "STT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 111);
    \u0275\u0275text(8, "Th\xF4ng tin H\u1ECDc sinh");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 111);
    \u0275\u0275text(10, "M\xE3 H\u1ECDc sinh");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 111);
    \u0275\u0275text(12, "Ng\xE0y nh\u1EADp h\u1ECDc");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 112);
    \u0275\u0275text(14, "Tr\u1EA1ng th\xE1i");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "tbody", 113);
    \u0275\u0275template(16, ClassDetailComponent_ng_container_11_ng_container_26_div_2_tr_16_Template, 3, 0, "tr", 7)(17, ClassDetailComponent_ng_container_11_ng_container_26_div_2_tr_17_Template, 23, 13, "tr", 114);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 115)(19, "div", 44);
    \u0275\u0275text(20, "Hi\u1EC3n th\u1ECB ");
    \u0275\u0275elementStart(21, "span", 116);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, " - ");
    \u0275\u0275elementStart(24, "span", 116);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275text(26, " trong s\u1ED1 ");
    \u0275\u0275elementStart(27, "span", 116);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275text(29, " h\u1ECDc sinh");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 117)(31, "button", 118);
    \u0275\u0275listener("click", function ClassDetailComponent_ng_container_11_ng_container_26_div_2_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.changePage(ctx_r1.currentPage() - 1));
    });
    \u0275\u0275text(32, "Tr\u01B0\u1EDBc");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 119);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "button", 118);
    \u0275\u0275listener("click", function ClassDetailComponent_ng_container_11_ng_container_26_div_2_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.changePage(ctx_r1.currentPage() + 1));
    });
    \u0275\u0275text(36, "Sau");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(16);
    \u0275\u0275property("ngIf", ctx_r1.paginatedStudents().length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.paginatedStudents());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.startIndex());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.endIndex());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.filteredStudents().length);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.currentPage() === 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" Trang ", ctx_r1.currentPage(), " / ", ctx_r1.totalPages());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.currentPage() === ctx_r1.totalPages());
  }
}
function ClassDetailComponent_ng_container_11_ng_container_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ClassDetailComponent_ng_container_11_ng_container_26_div_1_Template, 4, 0, "div", 102)(2, ClassDetailComponent_ng_container_11_ng_container_26_div_2_Template, 37, 9, "div", 103);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isLoadingStudents());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoadingStudents());
  }
}
function ClassDetailComponent_ng_container_11_ng_container_27_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 136);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 105);
    \u0275\u0275element(2, "circle", 13)(3, "path", 14);
    \u0275\u0275elementEnd()();
  }
}
function ClassDetailComponent_ng_container_11_ng_container_27_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 137)(1, "p", 138);
    \u0275\u0275text(2, "Ch\u01B0a c\xF3 t\xE0i li\u1EC7u chung n\xE0o \u0111\u01B0\u1EE3c t\u1EA3i l\xEAn cho kh\xF3a h\u1ECDc n\xE0y.");
    \u0275\u0275elementEnd()();
  }
}
function ClassDetailComponent_ng_container_11_ng_container_27_div_6_li_7__svg_svg_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 160);
    \u0275\u0275element(1, "path", 161);
    \u0275\u0275elementEnd();
  }
}
function ClassDetailComponent_ng_container_11_ng_container_27_div_6_li_7__svg_svg_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 160);
    \u0275\u0275element(1, "path", 162)(2, "path", 163);
    \u0275\u0275elementEnd();
  }
}
function ClassDetailComponent_ng_container_11_ng_container_27_div_6_li_7__svg_svg_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 160);
    \u0275\u0275element(1, "path", 164);
    \u0275\u0275elementEnd();
  }
}
function ClassDetailComponent_ng_container_11_ng_container_27_div_6_li_7__svg_svg_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 165);
    \u0275\u0275element(1, "path", 166);
    \u0275\u0275elementEnd();
  }
}
function ClassDetailComponent_ng_container_11_ng_container_27_div_6_li_7_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 167);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 65);
    \u0275\u0275element(2, "path", 164);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Li\xEAn k\u1EBFt ngo\xE0i ");
    \u0275\u0275elementEnd();
  }
}
function ClassDetailComponent_ng_container_11_ng_container_27_div_6_li_7_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r18 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" T\u1EC7p tin \u2022 ", ctx_r1.formatBytes(m_r18.fileSize), " ");
  }
}
function ClassDetailComponent_ng_container_11_ng_container_27_div_6_li_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 145)(1, "div", 146);
    \u0275\u0275listener("click", function ClassDetailComponent_ng_container_11_ng_container_27_div_6_li_7_Template_div_click_1_listener() {
      const m_r18 = \u0275\u0275restoreView(_r17).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.openPreview(m_r18));
    });
    \u0275\u0275elementStart(2, "div", 147);
    \u0275\u0275template(3, ClassDetailComponent_ng_container_11_ng_container_27_div_6_li_7__svg_svg_3_Template, 2, 0, "svg", 148)(4, ClassDetailComponent_ng_container_11_ng_container_27_div_6_li_7__svg_svg_4_Template, 3, 0, "svg", 148)(5, ClassDetailComponent_ng_container_11_ng_container_27_div_6_li_7__svg_svg_5_Template, 2, 0, "svg", 148);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 149)(7, "div", 21)(8, "h4", 150);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, ClassDetailComponent_ng_container_11_ng_container_27_div_6_li_7__svg_svg_10_Template, 2, 0, "svg", 151);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 152);
    \u0275\u0275template(12, ClassDetailComponent_ng_container_11_ng_container_27_div_6_li_7_span_12_Template, 4, 0, "span", 153)(13, ClassDetailComponent_ng_container_11_ng_container_27_div_6_li_7_span_13_Template, 2, 1, "span", 154);
    \u0275\u0275element(14, "span", 155);
    \u0275\u0275elementStart(15, "span", 156);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(16, "svg", 65);
    \u0275\u0275element(17, "path", 157);
    \u0275\u0275elementEnd();
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "date");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(20, "div", 158)(21, "button", 159);
    \u0275\u0275listener("click", function ClassDetailComponent_ng_container_11_ng_container_27_div_6_li_7_Template_button_click_21_listener() {
      const m_r18 = \u0275\u0275restoreView(_r17).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.openPreview(m_r18));
    });
    \u0275\u0275text(22, " Xem ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const m_r18 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(12, _c1, m_r18.fileType === "document", m_r18.fileType === "slide", m_r18.fileType === "video", m_r18.fileType === "link"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", m_r18.fileType === "document" || m_r18.fileType === "slide");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", m_r18.fileType === "video");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", m_r18.fileType === "link");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(m_r18.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", m_r18.fileType === "link");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", m_r18.fileType === "link");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", m_r18.fileType !== "link");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" \u0110\u0103ng l\xFAc: ", \u0275\u0275pipeBind2(19, 9, m_r18.createdAt, "dd/MM/yyyy HH:mm"), " ");
  }
}
function ClassDetailComponent_ng_container_11_ng_container_27_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 139)(1, "div", 140);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 141);
    \u0275\u0275element(3, "path", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span", 142);
    \u0275\u0275text(5, "T\u1EA5t c\u1EA3 t\xE0i li\u1EC7u");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "ul", 143);
    \u0275\u0275template(7, ClassDetailComponent_ng_container_11_ng_container_27_div_6_li_7_Template, 23, 17, "li", 144);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r1.materials());
  }
}
function ClassDetailComponent_ng_container_11_ng_container_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 131)(2, "h3", 132);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, ClassDetailComponent_ng_container_11_ng_container_27_div_4_Template, 4, 0, "div", 133)(5, ClassDetailComponent_ng_container_11_ng_container_27_div_5_Template, 3, 0, "div", 134)(6, ClassDetailComponent_ng_container_11_ng_container_27_div_6_Template, 8, 1, "div", 135);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("T\xE0i li\u1EC7u chung kh\xF3a h\u1ECDc ", ((tmp_2_0 = ctx_r1.classInfo()) == null ? null : tmp_2_0.courseName) ? "(" + ((tmp_2_0 = ctx_r1.classInfo()) == null ? null : tmp_2_0.courseName) + ")" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isLoadingMaterials());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoadingMaterials() && ctx_r1.materials().length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoadingMaterials() && ctx_r1.materials().length > 0);
  }
}
function ClassDetailComponent_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 15);
    \u0275\u0275element(2, "div", 16)(3, "div", 17);
    \u0275\u0275elementStart(4, "div", 18)(5, "h1", 19);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 20)(8, "div", 21);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 22);
    \u0275\u0275element(10, "path", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(12, "div", 21);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(13, "svg", 22);
    \u0275\u0275element(14, "path", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(16, "div", 25)(17, "div", 26)(18, "button", 27);
    \u0275\u0275listener("click", function ClassDetailComponent_ng_container_11_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.switchTab("lessons"));
    });
    \u0275\u0275text(19, " B\xE0i h\u1ECDc ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 27);
    \u0275\u0275listener("click", function ClassDetailComponent_ng_container_11_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.switchTab("students"));
    });
    \u0275\u0275text(21, " Danh s\xE1ch H\u1ECDc vi\xEAn ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 27);
    \u0275\u0275listener("click", function ClassDetailComponent_ng_container_11_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.switchTab("materials"));
    });
    \u0275\u0275text(23, " T\xE0i li\u1EC7u chung kh\xF3a h\u1ECDc ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(24, ClassDetailComponent_ng_container_11_div_24_Template, 5, 1, "div", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275template(25, ClassDetailComponent_ng_container_11_div_25_Template, 4, 3, "div", 29)(26, ClassDetailComponent_ng_container_11_ng_container_26_Template, 3, 2, "ng-container", 7)(27, ClassDetailComponent_ng_container_11_ng_container_27_Template, 7, 4, "ng-container", 7);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate((tmp_1_0 = ctx_r1.classInfo()) == null ? null : tmp_1_0.name);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", (tmp_2_0 = ctx_r1.classInfo()) == null ? null : tmp_2_0.subjectName, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" M\xE3 l\u1EDBp: ", ((tmp_3_0 = ctx_r1.classInfo()) == null ? null : tmp_3_0.code) || ((tmp_3_0 = ctx_r1.classInfo()) == null ? null : tmp_3_0.physicalClassName), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r1.activeTab() === "lessons" ? "bg-white text-blue-700 shadow-sm" : "text-gray-500 hover:text-gray-700");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.activeTab() === "students" ? "bg-white text-blue-700 shadow-sm" : "text-gray-500 hover:text-gray-700");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.activeTab() === "materials" ? "bg-white text-blue-700 shadow-sm" : "text-gray-500 hover:text-gray-700");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.activeTab() === "students");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeTab() === "lessons");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeTab() === "students");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeTab() === "materials");
  }
}
function ClassDetailComponent_div_12_a_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 185);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 186);
    \u0275\u0275element(2, "path", 187);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " T\u1EA3i xu\u1ED1ng ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("href", ctx_r1.previewData().rawUrl, \u0275\u0275sanitizeUrl);
  }
}
function ClassDetailComponent_div_12_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 188);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 189);
    \u0275\u0275element(2, "circle", 13)(3, "path", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "p", 190);
    \u0275\u0275text(5, "\u0110ang t\u1EA3i t\u1EC7p an to\xE0n t\u1EEB h\u1EC7 th\u1ED1ng...");
    \u0275\u0275elementEnd()();
  }
}
function ClassDetailComponent_div_12_img_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 191);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.previewData().rawUrl, \u0275\u0275sanitizeUrl);
  }
}
function ClassDetailComponent_div_12_video_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "video", 192);
    \u0275\u0275element(1, "source", 193);
    \u0275\u0275text(2, " Tr\xECnh duy\u1EC7t c\u1EE7a b\u1EA1n kh\xF4ng h\u1ED7 tr\u1EE3 ph\xE1t video. ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.previewData().rawUrl);
  }
}
function ClassDetailComponent_div_12_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 194)(1, "div", 195);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 42);
    \u0275\u0275element(3, "path", 196);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "audio", 197);
    \u0275\u0275element(5, "source", 198);
    \u0275\u0275text(6, " Tr\xECnh duy\u1EC7t c\u1EE7a b\u1EA1n kh\xF4ng h\u1ED7 tr\u1EE3 ph\xE1t \xE2m thanh. ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("src", ctx_r1.previewData().rawUrl);
  }
}
function ClassDetailComponent_div_12_iframe_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "iframe", 199);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.previewData().url, \u0275\u0275sanitizeResourceUrl);
  }
}
function ClassDetailComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 168)(1, "div", 169);
    \u0275\u0275listener("click", function ClassDetailComponent_div_12_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closePreview());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 170)(3, "div", 171)(4, "div", 172)(5, "span", 173);
    \u0275\u0275text(6, "Xem tr\u01B0\u1EDBc");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h3", 174);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 175);
    \u0275\u0275template(10, ClassDetailComponent_div_12_a_10_Template, 4, 1, "a", 176);
    \u0275\u0275elementStart(11, "button", 177);
    \u0275\u0275listener("click", function ClassDetailComponent_div_12_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closePreview());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(12, "svg", 160);
    \u0275\u0275element(13, "path", 178);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(14, "div", 179);
    \u0275\u0275template(15, ClassDetailComponent_div_12_div_15_Template, 6, 0, "div", 180)(16, ClassDetailComponent_div_12_img_16_Template, 1, 1, "img", 181)(17, ClassDetailComponent_div_12_video_17_Template, 3, 1, "video", 182)(18, ClassDetailComponent_div_12_div_18_Template, 7, 1, "div", 183)(19, ClassDetailComponent_div_12_iframe_19_Template, 1, 1, "iframe", 184);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("title", ctx_r1.previewData().title);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r1.previewData().title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.previewData().rawUrl && ctx_r1.previewData().sourceType !== "EXTERNAL" && ctx_r1.previewData().type !== "EXTERNAL_LINK" && ctx_r1.previewData().type !== "link");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.isPreviewLoading());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isPreviewLoading() && ctx_r1.previewData().rawUrl && (ctx_r1.previewData().type === "IMAGE" || ctx_r1.previewData().type === "image"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isPreviewLoading() && ctx_r1.previewData().rawUrl && (ctx_r1.previewData().type === "VIDEO" || ctx_r1.previewData().type === "video"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isPreviewLoading() && ctx_r1.previewData().rawUrl && (ctx_r1.previewData().type === "AUDIO" || ctx_r1.previewData().type === "audio"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isPreviewLoading() && ctx_r1.previewData().url && ctx_r1.previewData().type !== "VIDEO" && ctx_r1.previewData().type !== "video" && ctx_r1.previewData().type !== "IMAGE" && ctx_r1.previewData().type !== "image" && ctx_r1.previewData().type !== "AUDIO" && ctx_r1.previewData().type !== "audio");
  }
}
function ClassDetailComponent_div_13_div_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "label", 209);
    \u0275\u0275text(2, "\u0110\u01B0\u1EDDng d\u1EABn li\xEAn k\u1EBFt (URL) ");
    \u0275\u0275elementStart(3, "span", 210);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(5, "input", 228);
    \u0275\u0275elementEnd();
  }
}
function ClassDetailComponent_div_13_div_49_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 210);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function ClassDetailComponent_div_13_div_49_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 240);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 160);
    \u0275\u0275element(2, "path", 241);
    \u0275\u0275elementEnd()();
  }
}
function ClassDetailComponent_div_13_div_49_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 242);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 160);
    \u0275\u0275element(2, "path", 243);
    \u0275\u0275elementEnd()();
  }
}
function ClassDetailComponent_div_13_div_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 229)(1, "label", 230);
    \u0275\u0275text(2);
    \u0275\u0275template(3, ClassDetailComponent_div_13_div_49_span_3_Template, 2, 0, "span", 231);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 232)(5, "div", 233);
    \u0275\u0275template(6, ClassDetailComponent_div_13_div_49_div_6_Template, 3, 0, "div", 234)(7, ClassDetailComponent_div_13_div_49_div_7_Template, 3, 0, "div", 235);
    \u0275\u0275elementStart(8, "div", 236)(9, "label", 237)(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 238);
    \u0275\u0275listener("change", function ClassDetailComponent_div_13_div_49_Template_input_change_12_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onFileSelected($event));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "p", 239);
    \u0275\u0275text(14, "H\u1ED7 tr\u1EE3 PDF, Word, PPT, MP4, MP3, H\xECnh \u1EA3nh (Max 50MB)");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_7_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isEditMaterialMode() ? "Thay \u0111\u1ED5i t\u1EC7p \u0111\xEDnh k\xE8m (kh\xF4ng b\u1EAFt bu\u1ED9c)" : "T\u1EC7p \u0111\xEDnh k\xE8m", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isEditMaterialMode());
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(6, _c2, ctx_r1.selectedFile()));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.selectedFile());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedFile());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.selectedFile() ? (tmp_7_0 = ctx_r1.selectedFile()) == null ? null : tmp_7_0.name : "Nh\u1EA5n \u0111\u1EC3 ch\u1ECDn t\u1EC7p tin t\u1EEB m\xE1y t\xEDnh");
  }
}
function ClassDetailComponent_div_13__svg_svg_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 244);
    \u0275\u0275element(1, "circle", 13)(2, "path", 14);
    \u0275\u0275elementEnd();
  }
}
function ClassDetailComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 200)(1, "div", 201);
    \u0275\u0275listener("click", function ClassDetailComponent_div_13_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeMaterialModal());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 202)(3, "div", 203)(4, "div", 204)(5, "div", 205);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 160);
    \u0275\u0275element(7, "path", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "h3", 206);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 207);
    \u0275\u0275listener("click", function ClassDetailComponent_div_13_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeMaterialModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 160);
    \u0275\u0275element(12, "path", 178);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(13, "form", 208);
    \u0275\u0275listener("ngSubmit", function ClassDetailComponent_div_13_Template_form_ngSubmit_13_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitMaterialForm());
    });
    \u0275\u0275elementStart(14, "div")(15, "label", 209);
    \u0275\u0275text(16, "Ngu\u1ED3n t\xE0i li\u1EC7u ");
    \u0275\u0275elementStart(17, "span", 210);
    \u0275\u0275text(18, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 211)(20, "label", 212);
    \u0275\u0275element(21, "input", 213);
    \u0275\u0275text(22, " \u{1F4C1} T\u1EC7p tin (T\u1EA3i l\xEAn) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "label", 212);
    \u0275\u0275element(24, "input", 214);
    \u0275\u0275text(25, " \u{1F517} \u0110\u01B0\u1EDDng d\u1EABn li\xEAn k\u1EBFt ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div")(27, "label", 209);
    \u0275\u0275text(28, "Ti\xEAu \u0111\u1EC1 t\xE0i li\u1EC7u ");
    \u0275\u0275elementStart(29, "span", 210);
    \u0275\u0275text(30, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(31, "input", 215);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div")(33, "label", 209);
    \u0275\u0275text(34, "Ph\xE2n lo\u1EA1i t\xE0i li\u1EC7u");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "select", 216)(36, "option", 217);
    \u0275\u0275text(37, "\u{1F4C4} T\xE0i li\u1EC7u (PDF/Word)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "option", 218);
    \u0275\u0275text(39, "\u{1F4CA} B\xE0i gi\u1EA3ng (Slide/PPT)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "option", 219);
    \u0275\u0275text(41, "\u{1F3A5} Video b\xE0i gi\u1EA3ng");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "option", 220);
    \u0275\u0275text(43, "\u{1F3A7} \xC2m thanh / B\xE0i nghe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "option", 221);
    \u0275\u0275text(45, "\u{1F5BC}\uFE0F H\xECnh \u1EA3nh minh h\u1ECDa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "option", 222);
    \u0275\u0275text(47, "\u{1F517} Li\xEAn k\u1EBFt ngo\xE0i");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(48, ClassDetailComponent_div_13_div_48_Template, 6, 0, "div", 7)(49, ClassDetailComponent_div_13_div_49_Template, 15, 8, "div", 223);
    \u0275\u0275elementStart(50, "div", 224)(51, "button", 225);
    \u0275\u0275listener("click", function ClassDetailComponent_div_13_Template_button_click_51_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeMaterialModal());
    });
    \u0275\u0275text(52, " H\u1EE7y b\u1ECF ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "button", 226);
    \u0275\u0275template(54, ClassDetailComponent_div_13__svg_svg_54_Template, 3, 0, "svg", 227);
    \u0275\u0275text(55);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.isEditMaterialMode() ? "Ch\u1EC9nh s\u1EEDa t\xE0i li\u1EC7u" : "Th\xEAm t\xE0i li\u1EC7u m\u1EDBi");
    \u0275\u0275advance(4);
    \u0275\u0275property("formGroup", ctx_r1.materialForm);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngClass", ((tmp_3_0 = ctx_r1.materialForm.get("sourceType")) == null ? null : tmp_3_0.value) === "MINIO" ? "bg-blue-50 border-blue-500 text-blue-700" : "bg-gray-50 border-gray-200 text-gray-600");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ((tmp_4_0 = ctx_r1.materialForm.get("sourceType")) == null ? null : tmp_4_0.value) === "EXTERNAL" ? "bg-emerald-50 border-emerald-500 text-emerald-700" : "bg-gray-50 border-gray-200 text-gray-600");
    \u0275\u0275advance(25);
    \u0275\u0275property("ngIf", ((tmp_5_0 = ctx_r1.materialForm.get("sourceType")) == null ? null : tmp_5_0.value) === "EXTERNAL");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_6_0 = ctx_r1.materialForm.get("sourceType")) == null ? null : tmp_6_0.value) === "MINIO");
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.materialForm.invalid || ctx_r1.isUploading());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isUploading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isUploading() ? "\u0110ang l\u01B0u..." : ctx_r1.isEditMaterialMode() ? "L\u01B0u c\u1EADp nh\u1EADt" : "T\u1EA1o t\xE0i li\u1EC7u", " ");
  }
}
function ClassDetailComponent_div_14__svg_svg_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 244);
    \u0275\u0275element(1, "circle", 13)(2, "path", 14);
    \u0275\u0275elementEnd();
  }
}
function ClassDetailComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 245)(1, "div", 201);
    \u0275\u0275listener("click", function ClassDetailComponent_div_14_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDeleteModal());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 246)(3, "div", 247);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 248);
    \u0275\u0275element(5, "path", 249);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "h3", 250);
    \u0275\u0275text(7, "X\xF3a b\xE0i t\u1EADp n\xE0y?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 251);
    \u0275\u0275text(9, " B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a b\xE0i t\u1EADp n\xE0y kh\xF4ng? To\xE0n b\u1ED9 ");
    \u0275\u0275elementStart(10, "strong");
    \u0275\u0275text(11, "c\xE2u h\u1ECFi, c\u1EA5u h\xECnh v\xE0 b\xE0i l\xE0m c\u1EE7a h\u1ECDc sinh (n\u1EBFu c\xF3)");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, " s\u1EBD b\u1ECB x\xF3a v\u0129nh vi\u1EC5n v\xE0 kh\xF4ng th\u1EC3 kh\xF4i ph\u1EE5c. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 252)(14, "button", 253);
    \u0275\u0275listener("click", function ClassDetailComponent_div_14_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDeleteModal());
    });
    \u0275\u0275text(15, " H\u1EE7y b\u1ECF ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 254);
    \u0275\u0275listener("click", function ClassDetailComponent_div_14_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmDeleteAssignment());
    });
    \u0275\u0275template(17, ClassDetailComponent_div_14__svg_svg_17_Template, 3, 0, "svg", 227);
    \u0275\u0275text(18, " X\xF3a b\xE0i t\u1EADp ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(16);
    \u0275\u0275property("disabled", ctx_r1.isDeleting());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isDeleting());
  }
}
function ClassDetailComponent_div_15_option_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 276);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const les_r24 = ctx.$implicit;
    \u0275\u0275property("value", les_r24.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(les_r24.name);
  }
}
function ClassDetailComponent_div_15__svg_svg_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 244);
    \u0275\u0275element(1, "circle", 13)(2, "path", 14);
    \u0275\u0275elementEnd();
  }
}
function ClassDetailComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 200)(1, "div", 201);
    \u0275\u0275listener("click", function ClassDetailComponent_div_15_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAssignmentModal());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 202)(3, "div", 255)(4, "div", 204)(5, "div", 205);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 160);
    \u0275\u0275element(7, "path", 256);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "h3", 206);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 257);
    \u0275\u0275listener("click", function ClassDetailComponent_div_15_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAssignmentModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 160);
    \u0275\u0275element(12, "path", 178);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(13, "form", 258);
    \u0275\u0275listener("ngSubmit", function ClassDetailComponent_div_15_Template_form_ngSubmit_13_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitAssignmentForm());
    });
    \u0275\u0275elementStart(14, "div")(15, "label", 209);
    \u0275\u0275text(16, "B\xE0i h\u1ECDc li\xEAn k\u1EBFt ");
    \u0275\u0275elementStart(17, "span", 210);
    \u0275\u0275text(18, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "select", 259)(20, "option", 260);
    \u0275\u0275text(21, "-- Ch\u1ECDn b\xE0i h\u1ECDc --");
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, ClassDetailComponent_div_15_option_22_Template, 2, 2, "option", 261);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div")(24, "label", 209);
    \u0275\u0275text(25, "Ti\xEAu \u0111\u1EC1 b\xE0i t\u1EADp ");
    \u0275\u0275elementStart(26, "span", 210);
    \u0275\u0275text(27, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(28, "input", 262);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 263)(30, "div")(31, "label", 209);
    \u0275\u0275text(32, "Lo\u1EA1i b\xE0i t\u1EADp");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "select", 264)(34, "option", 265);
    \u0275\u0275text(35, "\u{1F4DD} B\xE0i t\u1EADp v\u1EC1 nh\xE0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "option", 266);
    \u0275\u0275text(37, "\u{1F4CB} B\xE0i ki\u1EC3m tra");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "div")(39, "label", 209);
    \u0275\u0275text(40, "Tr\u1EA1ng th\xE1i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "select", 267)(42, "option", 268);
    \u0275\u0275text(43, "\u{1F7E2} Xu\u1EA5t b\u1EA3n ngay");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "option", 269);
    \u0275\u0275text(45, "\u{1F7E1} L\u01B0u b\u1EA3n nh\xE1p");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(46, "div")(47, "label", 209);
    \u0275\u0275text(48, "H\u1EA1n n\u1ED9p b\xE0i ");
    \u0275\u0275elementStart(49, "span", 210);
    \u0275\u0275text(50, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(51, "input", 270);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "div", 263)(53, "div")(54, "label", 209);
    \u0275\u0275text(55, "Th\u1EDDi gian l\xE0m (ph\xFAt)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(56, "input", 271);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "div")(58, "label", 209);
    \u0275\u0275text(59, "S\u1ED1 l\u1EA7n l\xE0m t\u1ED1i \u0111a");
    \u0275\u0275elementEnd();
    \u0275\u0275element(60, "input", 272);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "div")(62, "label", 209);
    \u0275\u0275text(63, "M\xF4 t\u1EA3 / H\u01B0\u1EDBng d\u1EABn b\xE0i l\xE0m");
    \u0275\u0275elementEnd();
    \u0275\u0275element(64, "textarea", 273);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "div", 274)(66, "button", 225);
    \u0275\u0275listener("click", function ClassDetailComponent_div_15_Template_button_click_66_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAssignmentModal());
    });
    \u0275\u0275text(67, " H\u1EE7y b\u1ECF ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "button", 275);
    \u0275\u0275template(69, ClassDetailComponent_div_15__svg_svg_69_Template, 3, 0, "svg", 227);
    \u0275\u0275text(70);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.isEditAssignmentMode() ? "Ch\u1EC9nh s\u1EEDa b\xE0i t\u1EADp" : "T\u1EA1o b\xE0i t\u1EADp m\u1EDBi");
    \u0275\u0275advance(4);
    \u0275\u0275property("formGroup", ctx_r1.assignmentForm);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.lessons());
    \u0275\u0275advance(46);
    \u0275\u0275property("disabled", ctx_r1.assignmentForm.invalid || ctx_r1.isSavingAssignment());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isSavingAssignment());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isSavingAssignment() ? "\u0110ang l\u01B0u..." : ctx_r1.isEditAssignmentMode() ? "L\u01B0u c\u1EADp nh\u1EADt" : "T\u1EA1o b\xE0i t\u1EADp", " ");
  }
}
var ClassDetailComponent = class _ClassDetailComponent {
  route = inject(ActivatedRoute);
  router = inject(Router);
  classService = inject(TeacherClassService);
  materialService = inject(LearningMaterialService);
  fb = inject(FormBuilder);
  toastService = inject(ToastService);
  sanitizer = inject(DomSanitizer);
  assignmentService = inject(AssignmentService);
  enrollmentService = inject(EnrollmentService);
  classId = signal(null, ...ngDevMode ? [{ debugName: "classId" }] : (
    /* istanbul ignore next */
    []
  ));
  classInfo = signal(null, ...ngDevMode ? [{ debugName: "classInfo" }] : (
    /* istanbul ignore next */
    []
  ));
  isLoading = signal(true, ...ngDevMode ? [{ debugName: "isLoading" }] : (
    /* istanbul ignore next */
    []
  ));
  // --- STATE TABS ---
  activeTab = signal("lessons", ...ngDevMode ? [{ debugName: "activeTab" }] : (
    /* istanbul ignore next */
    []
  ));
  // --- STATE BÀI HỌC (LESSONS) ---
  lessons = signal([], ...ngDevMode ? [{ debugName: "lessons" }] : (
    /* istanbul ignore next */
    []
  ));
  isLoadingLessons = signal(false, ...ngDevMode ? [{ debugName: "isLoadingLessons" }] : (
    /* istanbul ignore next */
    []
  ));
  expandedLessonIds = signal(/* @__PURE__ */ new Set(), ...ngDevMode ? [{ debugName: "expandedLessonIds" }] : (
    /* istanbul ignore next */
    []
  ));
  lessonMaterialsMap = signal({}, ...ngDevMode ? [{ debugName: "lessonMaterialsMap" }] : (
    /* istanbul ignore next */
    []
  ));
  lessonAssignmentsMap = signal({}, ...ngDevMode ? [{ debugName: "lessonAssignmentsMap" }] : (
    /* istanbul ignore next */
    []
  ));
  isLoadingLessonDetailsMap = signal({}, ...ngDevMode ? [{ debugName: "isLoadingLessonDetailsMap" }] : (
    /* istanbul ignore next */
    []
  ));
  // --- STATE HỌC SINH ---
  students = signal([], ...ngDevMode ? [{ debugName: "students" }] : (
    /* istanbul ignore next */
    []
  ));
  isLoadingStudents = signal(false, ...ngDevMode ? [{ debugName: "isLoadingStudents" }] : (
    /* istanbul ignore next */
    []
  ));
  searchQuery = signal("", ...ngDevMode ? [{ debugName: "searchQuery" }] : (
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
  filteredStudents = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();
    if (!query)
      return this.students();
    return this.students().filter((s) => s.studentName.toLowerCase().includes(query) || s.studentCode.toLowerCase().includes(query));
  }, ...ngDevMode ? [{ debugName: "filteredStudents" }] : (
    /* istanbul ignore next */
    []
  ));
  totalPages = computed(() => Math.ceil(this.filteredStudents().length / this.pageSize()) || 1, ...ngDevMode ? [{ debugName: "totalPages" }] : (
    /* istanbul ignore next */
    []
  ));
  startIndex = computed(() => this.filteredStudents().length === 0 ? 0 : (this.currentPage() - 1) * this.pageSize() + 1, ...ngDevMode ? [{ debugName: "startIndex" }] : (
    /* istanbul ignore next */
    []
  ));
  endIndex = computed(() => Math.min(this.currentPage() * this.pageSize(), this.filteredStudents().length), ...ngDevMode ? [{ debugName: "endIndex" }] : (
    /* istanbul ignore next */
    []
  ));
  paginatedStudents = computed(() => {
    const start = (this.currentPage() - 1) * this.pageSize();
    return this.filteredStudents().slice(start, start + this.pageSize());
  }, ...ngDevMode ? [{ debugName: "paginatedStudents" }] : (
    /* istanbul ignore next */
    []
  ));
  // --- STATE TÀI LIỆU ---
  materials = signal([], ...ngDevMode ? [{ debugName: "materials" }] : (
    /* istanbul ignore next */
    []
  ));
  isLoadingMaterials = signal(false, ...ngDevMode ? [{ debugName: "isLoadingMaterials" }] : (
    /* istanbul ignore next */
    []
  ));
  isMaterialModalOpen = signal(false, ...ngDevMode ? [{ debugName: "isMaterialModalOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  isEditMaterialMode = signal(false, ...ngDevMode ? [{ debugName: "isEditMaterialMode" }] : (
    /* istanbul ignore next */
    []
  ));
  editingMaterialId = signal(null, ...ngDevMode ? [{ debugName: "editingMaterialId" }] : (
    /* istanbul ignore next */
    []
  ));
  isUploading = signal(false, ...ngDevMode ? [{ debugName: "isUploading" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedFile = signal(null, ...ngDevMode ? [{ debugName: "selectedFile" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedTargetLessonId = signal(null, ...ngDevMode ? [{ debugName: "selectedTargetLessonId" }] : (
    /* istanbul ignore next */
    []
  ));
  materialForm;
  // --- STATE PREVIEW TÀI LIỆU ---
  isPreviewModalOpen = signal(false, ...ngDevMode ? [{ debugName: "isPreviewModalOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  isPreviewLoading = signal(false, ...ngDevMode ? [{ debugName: "isPreviewLoading" }] : (
    /* istanbul ignore next */
    []
  ));
  previewData = signal({
    url: null,
    rawUrl: "",
    type: "",
    sourceType: "",
    title: ""
  }, ...ngDevMode ? [{ debugName: "previewData" }] : (
    /* istanbul ignore next */
    []
  ));
  // --- STATE BÀI TẬP ---
  assignments = signal([], ...ngDevMode ? [{ debugName: "assignments" }] : (
    /* istanbul ignore next */
    []
  ));
  isLoadingAssignments = signal(false, ...ngDevMode ? [{ debugName: "isLoadingAssignments" }] : (
    /* istanbul ignore next */
    []
  ));
  assignmentPage = signal(0, ...ngDevMode ? [{ debugName: "assignmentPage" }] : (
    /* istanbul ignore next */
    []
  ));
  assignmentTotalPages = signal(1, ...ngDevMode ? [{ debugName: "assignmentTotalPages" }] : (
    /* istanbul ignore next */
    []
  ));
  // --- STATE CHẾ ĐỘ QUẢN LÝ BÀI TẬP ---
  isAssignmentManageMode = signal(false, ...ngDevMode ? [{ debugName: "isAssignmentManageMode" }] : (
    /* istanbul ignore next */
    []
  ));
  lessonAssignmentManageMap = signal({}, ...ngDevMode ? [{ debugName: "lessonAssignmentManageMap" }] : (
    /* istanbul ignore next */
    []
  ));
  // --- STATE CHẾ ĐỘ QUẢN LÝ TÀI LIỆU HỌC TẬP ---
  isMaterialManageMode = signal(false, ...ngDevMode ? [{ debugName: "isMaterialManageMode" }] : (
    /* istanbul ignore next */
    []
  ));
  lessonMaterialManageMap = signal({}, ...ngDevMode ? [{ debugName: "lessonMaterialManageMap" }] : (
    /* istanbul ignore next */
    []
  ));
  toggleMaterialManageMode() {
    this.isMaterialManageMode.update((val) => !val);
  }
  toggleLessonMaterialManageMode(lessonId, event) {
    if (event)
      event.stopPropagation();
    this.lessonMaterialManageMap.update((map) => __spreadProps(__spreadValues({}, map), {
      [lessonId]: !map[lessonId]
    }));
  }
  toggleAssignmentManageMode() {
    this.isAssignmentManageMode.update((val) => !val);
  }
  toggleLessonAssignmentManageMode(lessonId, event) {
    if (event)
      event.stopPropagation();
    this.lessonAssignmentManageMap.update((map) => __spreadProps(__spreadValues({}, map), {
      [lessonId]: !map[lessonId]
    }));
  }
  navigateToAssignmentDetail(assignmentId, event) {
    if (event)
      event.stopPropagation();
    this.router.navigate(["/teacher/assignments", assignmentId]);
  }
  // --- STATE BÀI TẬP MODAL ---
  isAssignmentModalOpen = signal(false, ...ngDevMode ? [{ debugName: "isAssignmentModalOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  isEditAssignmentMode = signal(false, ...ngDevMode ? [{ debugName: "isEditAssignmentMode" }] : (
    /* istanbul ignore next */
    []
  ));
  editingAssignmentId = signal(null, ...ngDevMode ? [{ debugName: "editingAssignmentId" }] : (
    /* istanbul ignore next */
    []
  ));
  isSavingAssignment = signal(false, ...ngDevMode ? [{ debugName: "isSavingAssignment" }] : (
    /* istanbul ignore next */
    []
  ));
  assignmentForm;
  // --- STATE XÓA BÀI TẬP ---
  isDeleteModalOpen = signal(false, ...ngDevMode ? [{ debugName: "isDeleteModalOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  assignmentToDelete = signal(null, ...ngDevMode ? [{ debugName: "assignmentToDelete" }] : (
    /* istanbul ignore next */
    []
  ));
  isDeleting = signal(false, ...ngDevMode ? [{ debugName: "isDeleting" }] : (
    /* istanbul ignore next */
    []
  ));
  ngOnInit() {
    this.initForms();
    this.route.paramMap.subscribe((params) => {
      this.classId.set(params.get("id"));
      if (this.classId()) {
        this.loadClassDetails();
      }
    });
  }
  initForms() {
    this.materialForm = this.fb.group({
      title: ["", Validators.required],
      sourceType: ["MINIO", Validators.required],
      materialType: ["DOCUMENT", Validators.required],
      resourceUrl: [""],
      displayOrder: [0],
      status: ["published"]
    });
    this.assignmentForm = this.fb.group({
      lessonId: [null, Validators.required],
      title: ["", Validators.required],
      assignmentType: ["HOMEWORK", Validators.required],
      dueDate: ["", Validators.required],
      timeLimitMinutes: [0, [Validators.min(0)]],
      maxAttempts: [1, [Validators.min(1)]],
      description: [""],
      status: ["PUBLISHED", Validators.required]
    });
  }
  switchTab(tab) {
    this.activeTab.set(tab);
    if (tab === "lessons" && this.lessons().length === 0) {
      this.loadLessons();
    }
    if (tab === "students") {
      this.loadStudents();
    }
    if (tab === "materials") {
      this.loadMaterials();
    }
  }
  // --- LOGIC HỌC SINH ---
  loadStudents(targetClassId) {
    const id = targetClassId || this.classId();
    if (!id)
      return;
    this.isLoadingStudents.set(true);
    this.enrollmentService.getByClassId(id).subscribe({
      next: (res) => {
        this.students.set(res || []);
        this.isLoadingStudents.set(false);
      },
      error: (err) => {
        console.error("L\u1ED7i khi t\u1EA3i danh s\xE1ch h\u1ECDc vi\xEAn:", err);
        this.isLoadingStudents.set(false);
      }
    });
  }
  // --- LOGIC TÀI LIỆU CHUNG KHÓA HỌC ---
  loadMaterials(targetCourseId) {
    const courseId = targetCourseId || this.classInfo()?.courseId;
    if (!courseId)
      return;
    this.isLoadingMaterials.set(true);
    this.materialService.getMaterialsByCourseId(courseId).subscribe({
      next: (res) => {
        this.materials.set(res || []);
        this.isLoadingMaterials.set(false);
      },
      error: (err) => {
        console.error("L\u1ED7i khi t\u1EA3i danh s\xE1ch t\xE0i li\u1EC7u kh\xF3a h\u1ECDc:", err);
        this.isLoadingMaterials.set(false);
      }
    });
  }
  // --- LOGIC BÀI HỌC (LESSON) ---
  loadLessons(targetClassId) {
    const id = targetClassId || this.classId();
    if (!id)
      return;
    this.isLoadingLessons.set(true);
    this.materialService.getLessonsByClassId(id).subscribe({
      next: (res) => {
        this.lessons.set(res || []);
        this.isLoadingLessons.set(false);
      },
      error: (err) => {
        console.error("L\u1ED7i khi t\u1EA3i danh s\xE1ch b\xE0i h\u1ECDc:", err);
        this.isLoadingLessons.set(false);
      }
    });
  }
  toggleLessonExpand(lessonId) {
    const currentSet = new Set(this.expandedLessonIds());
    if (currentSet.has(lessonId)) {
      currentSet.delete(lessonId);
    } else {
      currentSet.add(lessonId);
      this.loadLessonDetails(lessonId);
    }
    this.expandedLessonIds.set(currentSet);
  }
  loadLessonDetails(lessonId) {
    const loadingMap = __spreadProps(__spreadValues({}, this.isLoadingLessonDetailsMap()), { [lessonId]: true });
    this.isLoadingLessonDetailsMap.set(loadingMap);
    this.materialService.getMaterialsByLessonId(lessonId).subscribe({
      next: (materials) => {
        const matList = Array.isArray(materials) ? materials : materials.content || [];
        const matMap = __spreadProps(__spreadValues({}, this.lessonMaterialsMap()), { [lessonId]: matList });
        this.lessonMaterialsMap.set(matMap);
        this.finishLessonLoading(lessonId);
      },
      error: () => this.finishLessonLoading(lessonId)
    });
    this.assignmentService.getAssignmentsByLessonId(lessonId).subscribe({
      next: (assignments) => {
        const assignList = Array.isArray(assignments) ? assignments : assignments.content || [];
        const assignMap = __spreadProps(__spreadValues({}, this.lessonAssignmentsMap()), { [lessonId]: assignList });
        this.lessonAssignmentsMap.set(assignMap);
        this.finishLessonLoading(lessonId);
      },
      error: () => this.finishLessonLoading(lessonId)
    });
  }
  finishLessonLoading(lessonId) {
    const loadingMap = __spreadProps(__spreadValues({}, this.isLoadingLessonDetailsMap()), { [lessonId]: false });
    this.isLoadingLessonDetailsMap.set(loadingMap);
  }
  isLessonExpanded(lessonId) {
    return this.expandedLessonIds().has(lessonId);
  }
  // --- LOGIC BÀI TẬP ---
  loadAssignments() {
    this.isLoadingAssignments.set(true);
    this.assignmentService.getAssignmentsByClass(this.classId(), this.assignmentPage(), 10).subscribe({
      next: (res) => {
        this.assignments.set(res.content || []);
        this.assignmentTotalPages.set(res.totalPages || 1);
        this.isLoadingAssignments.set(false);
      },
      error: () => this.isLoadingAssignments.set(false)
    });
  }
  deleteAssignment(id, event) {
    event.stopPropagation();
    this.assignmentToDelete.set(id);
    this.isDeleteModalOpen.set(true);
  }
  // Helper dịch loại bài tập sang Tiếng Việt
  getAssignmentTypeName(type) {
    const map = {
      "multiple_choice": "Tr\u1EAFc nghi\u1EC7m",
      "essay": "T\u1EF1 lu\u1EADn",
      "file_upload": "N\u1ED9p File",
      "mixed": "H\u1ED7n h\u1EE3p"
    };
    return map[type] || "Kh\xF4ng x\xE1c \u0111\u1ECBnh";
  }
  // --- LOGIC HỌC SINH & LỚP HỌC ---
  loadClassDetails() {
    this.isLoading.set(true);
    this.classService.getClassById(this.classId()).subscribe({
      next: (res) => {
        this.classInfo.set(res);
        this.isLoading.set(false);
        this.loadLessons(res.id);
        this.loadStudents(res.id);
        if (res?.courseId) {
          this.loadMaterials(res.courseId);
        }
      },
      error: (err) => {
        console.error("L\u1ED7i khi t\u1EA3i th\xF4ng tin l\u1EDBp:", err);
        this.isLoading.set(false);
      }
    });
  }
  onSearchChange(query) {
    this.searchQuery.set(query);
    this.currentPage.set(1);
  }
  changePage(page) {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage.set(page);
    }
  }
  openAddMaterialModal(lessonId, event) {
    if (event)
      event.stopPropagation();
    this.isEditMaterialMode.set(false);
    this.editingMaterialId.set(null);
    this.selectedTargetLessonId.set(lessonId || null);
    this.selectedFile.set(null);
    this.materialForm.reset({
      sourceType: "MINIO",
      materialType: "DOCUMENT",
      displayOrder: 0,
      status: "published"
    });
    this.isMaterialModalOpen.set(true);
  }
  openEditMaterialModal(m, event, lessonId) {
    event.stopPropagation();
    this.isEditMaterialMode.set(true);
    this.editingMaterialId.set(m.id);
    this.selectedTargetLessonId.set(lessonId || null);
    this.selectedFile.set(null);
    this.materialForm.patchValue({
      title: m.title,
      sourceType: m.sourceType || (m.resourceUrl?.startsWith("http") ? "EXTERNAL" : "MINIO"),
      materialType: m.materialType || "DOCUMENT",
      resourceUrl: m.resourceUrl || "",
      displayOrder: m.displayOrder || 0,
      status: m.status || "published"
    });
    this.isMaterialModalOpen.set(true);
  }
  closeMaterialModal() {
    this.isMaterialModalOpen.set(false);
    this.isEditMaterialMode.set(false);
    this.editingMaterialId.set(null);
    this.selectedTargetLessonId.set(null);
    this.selectedFile.set(null);
  }
  onFileSelected(event) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile.set(file);
      if (!this.materialForm.get("title")?.value) {
        this.materialForm.patchValue({ title: file.name });
      }
    }
  }
  submitMaterialForm() {
    if (this.materialForm.invalid)
      return;
    const formVal = this.materialForm.value;
    const targetLessonId = this.selectedTargetLessonId();
    if (formVal.sourceType === "MINIO" && !this.isEditMaterialMode() && !this.selectedFile()) {
      this.toastService.error("Ch\xFA \xFD", "Vui l\xF2ng ch\u1ECDn t\u1EC7p tin c\u1EA7n t\u1EA3i l\xEAn!");
      return;
    }
    this.isUploading.set(true);
    if (this.isEditMaterialMode()) {
      const materialId = this.editingMaterialId();
      this.materialService.updateMaterial(materialId, formVal, this.selectedFile()).subscribe({
        next: () => {
          this.toastService.success("Th\xE0nh c\xF4ng", "\u0110\xE3 c\u1EADp nh\u1EADt th\xF4ng tin t\xE0i li\u1EC7u!");
          this.closeMaterialModal();
          this.isUploading.set(false);
          if (targetLessonId) {
            this.loadLessonDetails(targetLessonId);
          }
          this.loadMaterials();
        },
        error: (err) => {
          this.toastService.error("L\u1ED7i", err.error?.message || "C\u1EADp nh\u1EADt t\xE0i li\u1EC7u th\u1EA5t b\u1EA1i");
          this.isUploading.set(false);
        }
      });
    } else {
      if (formVal.sourceType === "MINIO") {
        const payload = {
          title: formVal.title,
          materialType: formVal.materialType,
          displayOrder: formVal.displayOrder,
          onlineClassId: this.classId()
        };
        if (targetLessonId) {
          payload.lessonId = targetLessonId;
          payload.materialScope = "LESSON";
        } else {
          payload.courseId = this.classInfo()?.courseId;
          payload.materialScope = "COURSE";
        }
        this.materialService.uploadFile(this.selectedFile(), payload).subscribe({
          next: () => {
            this.toastService.success("Th\xE0nh c\xF4ng", "\u0110\xE3 t\u1EA3i l\xEAn t\xE0i li\u1EC7u m\u1EDBi!");
            this.closeMaterialModal();
            this.isUploading.set(false);
            if (targetLessonId) {
              this.loadLessonDetails(targetLessonId);
            }
            this.loadMaterials();
          },
          error: (err) => {
            this.toastService.error("L\u1ED7i", err.error?.message || "T\u1EA3i l\xEAn t\xE0i li\u1EC7u th\u1EA5t b\u1EA1i");
            this.isUploading.set(false);
          }
        });
      } else {
        const payload = {
          title: formVal.title,
          materialType: formVal.materialType,
          sourceType: "EXTERNAL",
          resourceUrl: formVal.resourceUrl,
          displayOrder: formVal.displayOrder,
          onlineClassId: this.classId()
        };
        if (targetLessonId) {
          payload.lessonId = targetLessonId;
          payload.materialScope = "LESSON";
        } else {
          payload.courseId = this.classInfo()?.courseId;
          payload.materialScope = "COURSE";
        }
        this.materialService.addLink(payload).subscribe({
          next: () => {
            this.toastService.success("Th\xE0nh c\xF4ng", "\u0110\xE3 th\xEAm li\xEAn k\u1EBFt t\xE0i li\u1EC7u!");
            this.closeMaterialModal();
            this.isUploading.set(false);
            if (targetLessonId) {
              this.loadLessonDetails(targetLessonId);
            }
            this.loadMaterials();
          },
          error: (err) => {
            this.toastService.error("L\u1ED7i", err.error?.message || "Th\xEAm li\xEAn k\u1EBFt th\u1EA5t b\u1EA1i");
            this.isUploading.set(false);
          }
        });
      }
    }
  }
  toggleMaterialStatus(m, event) {
    event.stopPropagation();
    const newStatus = m.status === "published" ? "unpublished" : "published";
    this.materialService.changeStatus(m.id, newStatus).subscribe({
      next: () => {
        this.toastService.success("Th\xE0nh c\xF4ng", "\u0110\xE3 c\u1EADp nh\u1EADt tr\u1EA1ng th\xE1i t\xE0i li\u1EC7u");
        this.loadMaterials();
      },
      error: () => {
        this.toastService.error("L\u1ED7i", "Kh\xF4ng th\u1EC3 thay \u0111\u1ED5i tr\u1EA1ng th\xE1i");
      }
    });
  }
  deleteMaterial(id, event, lessonId) {
    event.stopPropagation();
    if (confirm("B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a t\xE0i li\u1EC7u n\xE0y? Kh\xF4ng th\u1EC3 kh\xF4i ph\u1EE5c sau khi x\xF3a!")) {
      this.materialService.deleteMaterial(id).subscribe({
        next: () => {
          this.toastService.success("Th\xE0nh c\xF4ng", "\u0110\xE3 x\xF3a t\xE0i li\u1EC7u kh\u1ECFi h\u1EC7 th\u1ED1ng");
          if (lessonId) {
            this.loadLessonDetails(lessonId);
          }
          this.loadMaterials();
        },
        error: () => {
          this.toastService.error("L\u1ED7i", "X\xF3a t\xE0i li\u1EC7u th\u1EA5t b\u1EA1i");
        }
      });
    }
  }
  deleteLessonAssignment(id, event, lessonId) {
    event.stopPropagation();
    if (confirm("B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a b\xE0i t\u1EADp n\xE0y? Kh\xF4ng th\u1EC3 kh\xF4i ph\u1EE5c sau khi x\xF3a!")) {
      this.assignmentService.deleteAssignment(id).subscribe({
        next: () => {
          this.toastService.success("Th\xE0nh c\xF4ng", "\u0110\xE3 x\xF3a b\xE0i t\u1EADp!");
          this.loadLessonDetails(lessonId);
          this.loadAssignments();
        },
        error: (err) => {
          this.toastService.error("L\u1ED7i", err.error?.message || "X\xF3a b\xE0i t\u1EADp th\u1EA5t b\u1EA1i");
        }
      });
    }
  }
  downloadMaterial(m, event) {
    event.stopPropagation();
    const targetUrl = m.downloadUrl || m.resourceUrl;
    if (targetUrl) {
      window.open(targetUrl, "_blank");
    } else {
      this.toastService.error("L\u1ED7i", "Kh\xF4ng t\xECm th\u1EA5y \u0111\u01B0\u1EDDng d\u1EABn t\xE0i li\u1EC7u");
    }
  }
  // --- LOGIC XEM TRƯỚC (PREVIEW) ---
  openPreview(m) {
    const rawUrl = m.downloadUrl || m.resourceUrl || "";
    const srcType = m.sourceType || (rawUrl.startsWith("http") ? "EXTERNAL" : "MINIO");
    const matType = m.materialType || m.fileType || "DOCUMENT";
    let safeUrl = null;
    if (srcType === "EXTERNAL" || matType === "EXTERNAL_LINK" || matType === "link") {
      let embedUrl = rawUrl;
      if (embedUrl.includes("youtube.com/watch?v=")) {
        embedUrl = embedUrl.replace("watch?v=", "embed/");
      } else if (embedUrl.includes("youtu.be/")) {
        embedUrl = embedUrl.replace("youtu.be/", "youtube.com/embed/");
      }
      safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
    } else if (rawUrl) {
      safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(rawUrl);
    }
    this.previewData.set({
      url: safeUrl,
      rawUrl,
      type: matType,
      sourceType: srcType,
      title: m.title || "T\xE0i li\u1EC7u"
    });
    this.isPreviewModalOpen.set(true);
  }
  closePreview() {
    this.isPreviewModalOpen.set(false);
    this.previewData.set({ url: null, rawUrl: "", type: "", sourceType: "", title: "" });
    this.isPreviewLoading.set(false);
  }
  // Đóng Modal Xóa
  closeDeleteModal() {
    this.isDeleteModalOpen.set(false);
    this.assignmentToDelete.set(null);
  }
  // Hàm gọi API xóa thực sự khi người dùng ấn nút Xác nhận trên Modal
  confirmDeleteAssignment() {
    const id = this.assignmentToDelete();
    if (!id)
      return;
    this.isDeleting.set(true);
    this.assignmentService.deleteAssignment(id).subscribe({
      next: () => {
        this.toastService.success("Th\xE0nh c\xF4ng", "\u0110\xE3 x\xF3a b\xE0i t\u1EADp kh\u1ECFi h\u1EC7 th\u1ED1ng!");
        this.isDeleting.set(false);
        this.closeDeleteModal();
        this.loadAssignments();
      },
      error: (err) => {
        this.toastService.error("L\u1ED7i", err.error?.message || "X\xF3a b\xE0i t\u1EADp th\u1EA5t b\u1EA1i");
        this.isDeleting.set(false);
        this.closeDeleteModal();
      }
    });
  }
  // --- LOGIC BÀI TẬP MODAL ---
  openAddAssignmentModal(lessonId, event) {
    if (event)
      event.stopPropagation();
    this.isEditAssignmentMode.set(false);
    this.editingAssignmentId.set(null);
    this.selectedTargetLessonId.set(lessonId || null);
    this.assignmentForm.reset({
      lessonId: lessonId || (this.lessons().length > 0 ? this.lessons()[0].id : null),
      title: "",
      assignmentType: "HOMEWORK",
      dueDate: this.getDefaultDueDate(),
      timeLimitMinutes: 0,
      maxAttempts: 1,
      description: "",
      status: "PUBLISHED"
    });
    this.isAssignmentModalOpen.set(true);
  }
  openEditAssignmentModal(ass, event, lessonId) {
    if (event)
      event.stopPropagation();
    this.isEditAssignmentMode.set(true);
    this.editingAssignmentId.set(ass.id);
    this.selectedTargetLessonId.set(lessonId || ass.lessonId || null);
    this.assignmentForm.patchValue({
      lessonId: ass.lessonId || lessonId || (this.lessons().length > 0 ? this.lessons()[0].id : null),
      title: ass.title,
      assignmentType: ass.assignmentType || "HOMEWORK",
      dueDate: this.formatToDateTimeLocal(ass.dueDate),
      timeLimitMinutes: ass.timeLimitMinutes || 0,
      maxAttempts: ass.maxAttempts || 1,
      description: ass.description || "",
      status: ass.status || "PUBLISHED"
    });
    this.isAssignmentModalOpen.set(true);
  }
  closeAssignmentModal() {
    this.isAssignmentModalOpen.set(false);
    this.isEditAssignmentMode.set(false);
    this.editingAssignmentId.set(null);
  }
  getDefaultDueDate() {
    const nextWeek = /* @__PURE__ */ new Date();
    nextWeek.setDate(nextWeek.getDate() + 7);
    nextWeek.setHours(23, 59, 0, 0);
    return nextWeek.toISOString().slice(0, 16);
  }
  formatToDateTimeLocal(dateStr) {
    if (!dateStr)
      return this.getDefaultDueDate();
    return dateStr.replace(" ", "T").substring(0, 16);
  }
  formatDateTimeForBackend(datetimeLocal) {
    if (!datetimeLocal)
      return "";
    return datetimeLocal.replace("T", " ") + ":00";
  }
  submitAssignmentForm() {
    if (this.assignmentForm.invalid) {
      this.assignmentForm.markAllAsTouched();
      return;
    }
    const val = this.assignmentForm.value;
    const payload = __spreadProps(__spreadValues({}, val), {
      lessonId: Number(val.lessonId),
      dueDate: this.formatDateTimeForBackend(val.dueDate)
    });
    this.isSavingAssignment.set(true);
    if (this.isEditAssignmentMode() && this.editingAssignmentId()) {
      this.assignmentService.updateAssignment(this.editingAssignmentId(), payload).subscribe({
        next: () => {
          this.toastService.success("Th\xE0nh c\xF4ng", "\u0110\xE3 c\u1EADp nh\u1EADt th\xF4ng tin b\xE0i t\u1EADp!");
          this.isSavingAssignment.set(false);
          this.closeAssignmentModal();
          this.refreshAssignmentsData(payload.lessonId);
        },
        error: (err) => {
          console.error("L\u1ED7i c\u1EADp nh\u1EADt b\xE0i t\u1EADp:", err);
          this.toastService.error("L\u1ED7i", err.error?.message || "C\u1EADp nh\u1EADt b\xE0i t\u1EADp th\u1EA5t b\u1EA1i");
          this.isSavingAssignment.set(false);
        }
      });
    } else {
      this.assignmentService.createAssignment(payload).subscribe({
        next: () => {
          this.toastService.success("Th\xE0nh c\xF4ng", "T\u1EA1o b\xE0i t\u1EADp m\u1EDBi th\xE0nh c\xF4ng!");
          this.isSavingAssignment.set(false);
          this.closeAssignmentModal();
          this.refreshAssignmentsData(payload.lessonId);
        },
        error: (err) => {
          console.error("L\u1ED7i t\u1EA1o b\xE0i t\u1EADp:", err);
          this.toastService.error("L\u1ED7i", err.error?.message || "T\u1EA1o b\xE0i t\u1EADp th\u1EA5t b\u1EA1i");
          this.isSavingAssignment.set(false);
        }
      });
    }
  }
  deleteAssignmentItem(id, event, lessonId) {
    if (event)
      event.stopPropagation();
    if (!confirm("B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a b\xE0i t\u1EADp n\xE0y kh\xF4ng?"))
      return;
    this.assignmentService.deleteAssignment(id.toString()).subscribe({
      next: () => {
        this.toastService.success("Th\xE0nh c\xF4ng", "\u0110\xE3 x\xF3a b\xE0i t\u1EADp!");
        this.refreshAssignmentsData(lessonId);
      },
      error: (err) => {
        console.error("L\u1ED7i x\xF3a b\xE0i t\u1EADp:", err);
        this.toastService.error("L\u1ED7i", err.error?.message || "Kh\xF4ng th\u1EC3 x\xF3a b\xE0i t\u1EADp n\xE0y");
      }
    });
  }
  refreshAssignmentsData(lessonId) {
    if (this.classId()) {
      this.loadAssignments();
    }
    if (lessonId) {
      this.loadLessonDetails(lessonId);
    }
  }
  // --- HÀM TIỆN ÍCH ---
  formatBytes(bytes, decimals = 2) {
    if (!+bytes)
      return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
  }
  static \u0275fac = function ClassDetailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ClassDetailComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClassDetailComponent, selectors: [["app-class-detail"]], decls: 16, vars: 7, consts: [[1, "space-y-6", "max-w-7xl", "mx-auto"], [1, "flex", "items-center", "space-x-2", "text-sm", "text-gray-500", "mb-2"], ["routerLink", "/teacher/my-classes", 1, "hover:text-blue-600", "transition", "flex", "items-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "mr-1"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M10 19l-7-7m0 0l7-7m-7 7h18"], [1, "text-gray-900", "font-medium"], ["class", "flex justify-center py-20", 4, "ngIf"], [4, "ngIf"], ["class", "fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-6 lg:p-12", 4, "ngIf"], ["class", "fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-0", 4, "ngIf"], ["class", "fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-0", 4, "ngIf"], [1, "flex", "justify-center", "py-20"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-10", "w-10", "text-blue-500"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"], [1, "bg-gradient-to-r", "from-blue-700", "to-indigo-800", "rounded-3xl", "p-8", "sm:p-10", "shadow-lg", "text-white", "relative", "overflow-hidden"], [1, "absolute", "-top-24", "-right-24", "w-64", "h-64", "bg-white", "opacity-10", "rounded-full", "blur-3xl"], [1, "absolute", "-bottom-10", "-left-10", "w-32", "h-32", "bg-white", "opacity-10", "rounded-full", "blur-xl"], [1, "relative", "z-10"], [1, "text-3xl", "sm:text-4xl", "font-extrabold", "tracking-tight", "mb-2"], [1, "flex", "flex-wrap", "items-center", "gap-4", "text-blue-100", "mt-4"], [1, "flex", "items-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "mr-1.5", "opacity-80"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"], [1, "flex", "flex-col", "sm:flex-row", "justify-between", "items-center", "bg-white", "p-2", "rounded-2xl", "shadow-sm", "border", "border-gray-100", "gap-4"], [1, "flex", "space-x-1", "p-1", "bg-gray-50", "rounded-xl", "w-full", "sm:w-auto"], [1, "px-6", "py-2.5", "text-sm", "font-bold", "rounded-lg", "w-full", "sm:w-auto", "transition", 3, "click", "ngClass"], ["class", "relative w-full sm:w-80 px-2 sm:px-0", 4, "ngIf"], ["class", "space-y-4", 4, "ngIf"], [1, "relative", "w-full", "sm:w-80", "px-2", "sm:px-0"], [1, "absolute", "inset-y-0", "left-0", "flex", "items-center", "pl-5", "sm:pl-3", "pointer-events-none"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-gray-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], ["type", "text", "placeholder", "T\xECm h\u1ECDc sinh theo t\xEAn, m\xE3 HS...", 1, "bg-gray-50", "border", "border-gray-200", "text-gray-900", "text-sm", "rounded-xl", "focus:ring-2", "focus:ring-blue-100", "focus:border-blue-500", "block", "w-full", "pl-10", "p-2.5", "outline-none", "transition", 3, "ngModelChange", "ngModel"], [1, "space-y-4"], ["class", "flex justify-center py-12 bg-white rounded-2xl border border-gray-100 shadow-sm", 4, "ngIf"], ["class", "bg-white rounded-2xl border border-dashed border-gray-200 p-12 text-center shadow-sm", 4, "ngIf"], [1, "flex", "justify-center", "py-12", "bg-white", "rounded-2xl", "border", "border-gray-100", "shadow-sm"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-8", "w-8", "text-blue-500"], [1, "bg-white", "rounded-2xl", "border", "border-dashed", "border-gray-200", "p-12", "text-center", "shadow-sm"], [1, "w-16", "h-16", "bg-blue-50", "text-blue-600", "rounded-full", "flex", "items-center", "justify-center", "mx-auto", "mb-3"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-8", "h-8"], [1, "text-lg", "font-bold", "text-gray-900", "mb-1"], [1, "text-sm", "text-gray-500"], ["class", "bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden transition-all duration-200", 4, "ngFor", "ngForOf"], [1, "bg-white", "rounded-2xl", "border", "border-gray-200", "shadow-sm", "overflow-hidden", "transition-all", "duration-200"], [1, "p-5", "flex", "items-center", "justify-between", "cursor-pointer", "hover:bg-gray-50/80", "transition", "select-none", 3, "click"], [1, "flex", "items-center", "space-x-4"], [1, "w-10", "h-10", "rounded-xl", "bg-blue-100", "text-blue-700", "font-extrabold", "flex", "items-center", "justify-center", "shrink-0", "text-sm", "shadow-inner"], [1, "text-base", "font-bold", "text-gray-900", "leading-snug"], ["class", "text-xs text-gray-500 mt-0.5 line-clamp-1", 4, "ngIf"], [1, "flex", "items-center", "space-x-3"], [1, "inline-flex", "items-center", "px-2.5", "py-1", "rounded-full", "text-xs", "font-semibold", "bg-gray-100", "text-gray-700"], [1, "inline-flex", "items-center", "px-2.5", "py-1", "rounded-full", "text-xs", "font-semibold", "bg-blue-50", "text-blue-700"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-gray-400", "transform", "transition-transform", "duration-200"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 9l-7 7-7-7"], ["class", "border-t border-gray-100 bg-gray-50/50 p-6 space-y-6", 4, "ngIf"], [1, "text-xs", "text-gray-500", "mt-0.5", "line-clamp-1"], [1, "border-t", "border-gray-100", "bg-gray-50/50", "p-6", "space-y-6"], [1, "flex", "items-center", "justify-between", "mb-3"], [1, "text-sm", "font-bold", "text-gray-800", "uppercase", "tracking-wider", "flex", "items-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "mr-2", "text-blue-600"], [1, "flex", "items-center", "space-x-2"], [1, "inline-flex", "items-center", "text-xs", "font-semibold", "px-2.5", "py-1", "rounded-lg", "transition", "shadow-2xs", 3, "click", "ngClass"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-3.5", "h-3.5", "mr-1"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"], [1, "inline-flex", "items-center", "text-xs", "font-semibold", "text-blue-700", "bg-blue-50", "hover:bg-blue-100", "border", "border-blue-200", "px-2.5", "py-1", "rounded-lg", "transition", 3, "click"], ["class", "text-xs text-gray-400 italic py-2", 4, "ngIf"], ["class", "grid grid-cols-1 sm:grid-cols-2 gap-3", 4, "ngIf"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "mr-2", "text-indigo-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 5h6m-6 4h6m-9 4h12M7 3h10a2 2 0 012 2v16a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2z"], [1, "inline-flex", "items-center", "text-xs", "font-semibold", "text-indigo-700", "bg-indigo-50", "hover:bg-indigo-100", "border", "border-indigo-200", "px-2.5", "py-1", "rounded-lg", "transition", 3, "click"], ["class", "space-y-2.5", 4, "ngIf"], [1, "text-xs", "text-gray-400", "italic", "py-2"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "gap-3"], ["class", "bg-white p-3.5 rounded-xl border border-gray-200 flex items-center justify-between shadow-2xs hover:shadow-xs transition", 4, "ngFor", "ngForOf"], [1, "bg-white", "p-3.5", "rounded-xl", "border", "border-gray-200", "flex", "items-center", "justify-between", "shadow-2xs", "hover:shadow-xs", "transition"], [1, "flex", "items-center", "space-x-3", "overflow-hidden", "cursor-pointer", 3, "click"], [1, "w-8", "h-8", "rounded-lg", "bg-blue-50", "text-blue-600", "flex", "items-center", "justify-center", "shrink-0"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 01-2-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"], [1, "truncate"], [1, "text-xs", "font-bold", "text-gray-900", "truncate", "hover:text-blue-600", "transition"], [1, "text-[11px]", "text-gray-400", "mt-0.5"], [1, "flex", "items-center", "space-x-1", "shrink-0", "ml-2"], [1, "text-xs", "font-semibold", "text-blue-600", "hover:text-blue-800", "bg-blue-50", "px-2.5", "py-1", "rounded-lg", "transition", 3, "click"], ["title", "S\u1EEDa t\xE0i li\u1EC7u", 1, "p-1", "text-gray-400", "hover:text-blue-600", "hover:bg-blue-50", "rounded-lg", "transition", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"], ["title", "X\xF3a t\xE0i li\u1EC7u", 1, "p-1", "text-gray-400", "hover:text-rose-600", "hover:bg-rose-50", "rounded-lg", "transition", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"], [1, "space-y-2.5"], ["class", "bg-white p-4 rounded-xl border border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-2xs hover:shadow-md hover:border-indigo-300 transition cursor-pointer group", 3, "click", 4, "ngFor", "ngForOf"], [1, "bg-white", "p-4", "rounded-xl", "border", "border-gray-200", "flex", "flex-col", "sm:flex-row", "sm:items-center", "justify-between", "gap-3", "shadow-2xs", "hover:shadow-md", "hover:border-indigo-300", "transition", "cursor-pointer", "group", 3, "click"], [1, "flex", "items-center", "space-x-2", "mb-1"], [1, "text-xs", "font-bold", "text-gray-900", "group-hover:text-indigo-600", "transition"], [1, "px-2", "py-0.5", "rounded-md", "bg-indigo-50", "text-indigo-700", "font-semibold", "text-[10px]"], [1, "flex", "flex-wrap", "items-center", "gap-3", "text-[11px]", "text-gray-500"], ["class", "flex items-center space-x-1 shrink-0", 3, "click", 4, "ngIf"], [1, "flex", "items-center", "space-x-1", "shrink-0", 3, "click"], ["title", "S\u1EEDa th\xF4ng tin b\xE0i t\u1EADp", 1, "p-1.5", "text-gray-400", "hover:text-indigo-600", "hover:bg-indigo-50", "rounded-lg", "transition", 3, "click"], ["title", "X\xF3a b\xE0i t\u1EADp", 1, "p-1.5", "text-gray-400", "hover:text-rose-600", "hover:bg-rose-50", "rounded-lg", "transition", 3, "click"], ["class", "py-12 text-center text-indigo-500", 4, "ngIf"], ["class", "bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden", 4, "ngIf"], [1, "py-12", "text-center", "text-indigo-500"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "inline-block", "h-8", "w-8"], [1, "bg-white", "rounded-2xl", "shadow-sm", "border", "border-gray-100", "overflow-hidden"], [1, "overflow-x-auto"], [1, "w-full", "text-sm", "text-left", "text-gray-500"], [1, "text-xs", "text-gray-500", "uppercase", "bg-gray-50/80", "border-b", "border-gray-100", "font-semibold"], ["scope", "col", 1, "px-6", "py-4", "w-16", "text-center"], ["scope", "col", 1, "px-6", "py-4"], ["scope", "col", 1, "px-6", "py-4", "text-center"], [1, "divide-y", "divide-gray-50"], ["class", "hover:bg-blue-50/30 transition duration-150", 4, "ngFor", "ngForOf"], [1, "flex", "flex-col", "sm:flex-row", "items-center", "justify-between", "px-6", "py-4", "bg-gray-50", "border-t", "border-gray-100", "rounded-b-2xl", "gap-4"], [1, "font-semibold", "text-gray-900"], [1, "flex", "space-x-2"], [1, "px-3", "py-1.5", "text-sm", "font-medium", "text-gray-700", "bg-white", "border", "border-gray-300", "rounded-lg", "hover:bg-gray-50", "disabled:opacity-50", "transition", "shadow-sm", 3, "click", "disabled"], [1, "flex", "items-center", "justify-center", "px-4", "py-1.5", "text-sm", "font-medium", "text-gray-700", "bg-gray-100", "rounded-lg", "border", "border-gray-200"], ["colspan", "5", 1, "px-6", "py-12", "text-center", "text-gray-500"], [1, "hover:bg-blue-50/30", "transition", "duration-150"], [1, "px-6", "py-4", "text-center", "font-medium", "text-gray-400"], [1, "px-6", "py-4"], [1, "w-9", "h-9", "rounded-full", "bg-indigo-100", "text-indigo-700", "font-bold", "text-sm", "flex", "items-center", "justify-center", "mr-3", "uppercase", "shrink-0"], [1, "font-bold", "text-gray-900"], [1, "text-xs", "text-gray-500", "mt-0.5"], [1, "font-mono", "text-gray-700", "bg-gray-100", "px-2.5", "py-1", "rounded-lg", "border", "border-gray-200", "text-xs", "font-bold"], [1, "px-6", "py-4", "text-gray-600", "text-xs", "font-medium"], [1, "px-6", "py-4", "text-center"], [1, "px-2.5", "py-1", "text-[11px]", "font-bold", "uppercase", "tracking-wider", "rounded-md", "border", 3, "ngClass"], [1, "flex", "justify-between", "items-center", "mb-4"], [1, "text-lg", "font-bold", "text-gray-800"], ["class", "py-12 text-center text-blue-500", 4, "ngIf"], ["class", "bg-gray-50 border border-dashed border-gray-300 rounded-2xl p-12 text-center", 4, "ngIf"], ["class", "bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden", 4, "ngIf"], [1, "py-12", "text-center", "text-blue-500"], [1, "bg-gray-50", "border", "border-dashed", "border-gray-300", "rounded-2xl", "p-12", "text-center"], [1, "text-gray-500"], [1, "bg-white", "rounded-xl", "shadow-sm", "border", "border-gray-200", "overflow-hidden"], [1, "bg-gray-50/80", "px-5", "py-3", "border-b", "border-gray-200", "flex", "items-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-gray-500", "mr-2"], [1, "font-bold", "text-gray-800"], [1, "divide-y", "divide-gray-100"], ["class", "group hover:bg-blue-50/30 transition-colors duration-200 flex items-center justify-between p-4 sm:px-6", 4, "ngFor", "ngForOf"], [1, "group", "hover:bg-blue-50/30", "transition-colors", "duration-200", "flex", "items-center", "justify-between", "p-4", "sm:px-6"], [1, "flex", "items-center", "flex-1", "min-w-0", "cursor-pointer", 3, "click"], [1, "w-10", "h-10", "rounded", "bg-gray-50", "flex", "items-center", "justify-center", "mr-4", "shrink-0", "shadow-sm", "border", "border-gray-100", "text-gray-500", "group-hover:text-blue-600", "transition", 3, "ngClass"], ["class", "w-5 h-5", "fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 4, "ngIf"], [1, "truncate", "pr-4"], [1, "font-medium", "text-gray-900", "text-base", "truncate", "group-hover:text-blue-700", "transition"], ["class", "w-3.5 h-3.5 text-gray-400 ml-2 shrink-0", "fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 4, "ngIf"], [1, "flex", "items-center", "text-xs", "text-gray-500", "mt-1.5", "space-x-3"], ["class", "flex items-center text-emerald-600 font-medium", 4, "ngIf"], ["class", "flex items-center", 4, "ngIf"], [1, "w-1", "h-1", "rounded-full", "bg-gray-300"], [1, "flex", "items-center", "text-gray-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "flex", "items-center", "space-x-2", "shrink-0"], [1, "px-3", "py-1.5", "text-xs", "font-semibold", "text-blue-700", "bg-blue-50", "border", "border-blue-200", "rounded-lg", "hover:bg-blue-600", "hover:text-white", "transition", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 12a9 9 0 11-18 0 9 9 0 0118 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-3.5", "h-3.5", "text-gray-400", "ml-2", "shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"], [1, "flex", "items-center", "text-emerald-600", "font-medium"], [1, "fixed", "inset-0", "z-[80]", "flex", "items-center", "justify-center", "p-4", "sm:p-6", "lg:p-12"], [1, "absolute", "inset-0", "bg-gray-900/90", "backdrop-blur-md", "transition-opacity", 3, "click"], [1, "relative", "bg-white", "rounded-2xl", "shadow-2xl", "w-full", "h-full", "max-w-6xl", "flex", "flex-col", "overflow-hidden"], [1, "px-5", "py-4", "border-b", "border-gray-200", "flex", "justify-between", "items-center", "bg-gray-50", "shrink-0"], [1, "flex", "items-center", "overflow-hidden"], [1, "text-xs", "font-bold", "uppercase", "tracking-wider", "text-blue-600", "bg-blue-100", "px-2", "py-1", "rounded", "mr-3", "shrink-0"], [1, "text-lg", "font-bold", "text-gray-900", "truncate", 3, "title"], [1, "flex", "items-center", "space-x-2", "shrink-0", "ml-4"], ["target", "_blank", "download", "", "class", "inline-flex items-center text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-3.5 py-2 rounded-xl transition shadow-2xs", 3, "href", 4, "ngIf"], [1, "p-2", "text-gray-500", "hover:text-gray-900", "hover:bg-gray-200", "rounded-full", "transition", "shrink-0", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "flex-1", "bg-gray-100", "flex", "items-center", "justify-center", "relative", "w-full", "h-full", "overflow-hidden"], ["class", "flex flex-col items-center justify-center", 4, "ngIf"], ["class", "max-w-full max-h-full object-contain p-4 rounded-xl", "alt", "Preview", 3, "src", 4, "ngIf"], ["controls", "", "autoplay", "", "class", "w-full max-h-full bg-black", 4, "ngIf"], ["class", "p-8 bg-white rounded-2xl shadow-md text-center space-y-4", 4, "ngIf"], ["class", "w-full h-full border-0", "allowfullscreen", "", 3, "src", 4, "ngIf"], ["target", "_blank", "download", "", 1, "inline-flex", "items-center", "text-xs", "font-bold", "text-emerald-700", "bg-emerald-50", "hover:bg-emerald-100", "border", "border-emerald-200", "px-3.5", "py-2", "rounded-xl", "transition", "shadow-2xs", 3, "href"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "mr-1.5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"], [1, "flex", "flex-col", "items-center", "justify-center"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-10", "w-10", "text-blue-500", "mb-3"], [1, "text-sm", "font-medium", "text-gray-500"], ["alt", "Preview", 1, "max-w-full", "max-h-full", "object-contain", "p-4", "rounded-xl", 3, "src"], ["controls", "", "autoplay", "", 1, "w-full", "max-h-full", "bg-black"], ["type", "video/mp4", 3, "src"], [1, "p-8", "bg-white", "rounded-2xl", "shadow-md", "text-center", "space-y-4"], [1, "w-16", "h-16", "bg-indigo-50", "text-indigo-600", "rounded-full", "flex", "items-center", "justify-center", "mx-auto"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 .895-2 3-2 3 .895 3 2zm12 0c0 1.105-1.343 2-3 2s-3-.895-3-2 .895-2 3-2 3 .895 3 2zM9 10l12-3"], ["controls", "", "autoplay", "", 1, "w-72", "sm:w-96"], [3, "src"], ["allowfullscreen", "", 1, "w-full", "h-full", "border-0", 3, "src"], [1, "fixed", "inset-0", "z-[70]", "flex", "items-center", "justify-center", "p-4", "sm:p-0"], [1, "absolute", "inset-0", "bg-gray-900/60", "backdrop-blur-sm", "transition-opacity", 3, "click"], [1, "relative", "bg-white", "rounded-3xl", "shadow-2xl", "w-full", "max-w-lg", "overflow-hidden", "transform", "transition-all"], [1, "bg-gradient-to-r", "from-blue-600", "to-indigo-700", "px-6", "py-5", "flex", "justify-between", "items-center"], [1, "flex", "items-center", "text-white"], [1, "w-10", "h-10", "rounded-full", "bg-white/20", "flex", "items-center", "justify-center", "mr-3", "backdrop-blur-md"], [1, "text-xl", "font-extrabold", "tracking-wide"], [1, "text-blue-100", "hover:text-white", "bg-white/10", "hover:bg-white/20", "p-2", "rounded-full", "transition", 3, "click"], [1, "p-6", "sm:p-8", "space-y-5", 3, "ngSubmit", "formGroup"], [1, "block", "text-sm", "font-bold", "text-gray-700", "mb-1.5"], [1, "text-red-500"], [1, "grid", "grid-cols-2", "gap-3"], [1, "flex", "items-center", "justify-center", "p-3", "rounded-xl", "border", "cursor-pointer", "transition", "text-sm", "font-semibold", 3, "ngClass"], ["type", "radio", "formControlName", "sourceType", "value", "MINIO", 1, "sr-only"], ["type", "radio", "formControlName", "sourceType", "value", "EXTERNAL", 1, "sr-only"], ["formControlName", "title", "type", "text", "placeholder", "VD: B\xE0i gi\u1EA3ng B\xE0i 1 - Kh\xE1i ni\u1EC7m c\u01A1 b\u1EA3n", 1, "bg-gray-50", "border", "border-gray-200", "text-gray-900", "text-sm", "rounded-xl", "focus:ring-2", "focus:ring-blue-100", "focus:border-blue-500", "block", "w-full", "p-3", "outline-none", "transition"], ["formControlName", "materialType", 1, "bg-gray-50", "border", "border-gray-200", "text-gray-900", "text-sm", "rounded-xl", "focus:ring-2", "focus:ring-blue-100", "focus:border-blue-500", "block", "w-full", "p-3", "outline-none", "transition", "cursor-pointer", "font-medium"], ["value", "DOCUMENT"], ["value", "SLIDE"], ["value", "VIDEO"], ["value", "AUDIO"], ["value", "IMAGE"], ["value", "EXTERNAL_LINK"], ["class", "pt-1", 4, "ngIf"], [1, "flex", "justify-end", "space-x-3", "pt-5", "border-t", "border-gray-100", "mt-2"], ["type", "button", 1, "px-5", "py-2.5", "bg-white", "border", "border-gray-300", "text-gray-700", "font-semibold", "rounded-xl", "hover:bg-gray-50", "shadow-sm", "transition", 3, "click"], ["type", "submit", 1, "px-6", "py-2.5", "bg-blue-600", "text-white", "font-bold", "rounded-xl", "disabled:bg-blue-300", "hover:bg-blue-700", "shadow-md", "transition", "flex", "items-center", 3, "disabled"], ["class", "animate-spin -ml-1 mr-2 h-4 w-4 text-white", "fill", "none", "viewBox", "0 0 24 24", 4, "ngIf"], ["formControlName", "resourceUrl", "type", "url", "placeholder", "https://www.youtube.com/watch?v=...", 1, "bg-gray-50", "border", "border-gray-200", "text-gray-900", "text-sm", "rounded-xl", "focus:ring-2", "focus:ring-emerald-100", "focus:border-emerald-500", "block", "w-full", "p-3", "outline-none", "transition"], [1, "pt-1"], [1, "block", "text-sm", "font-bold", "text-gray-700", "mb-2"], ["class", "text-red-500", 4, "ngIf"], [1, "mt-1", "flex", "justify-center", "px-6", "pt-5", "pb-6", "border-2", "border-gray-300", "border-dashed", "rounded-2xl", "hover:border-blue-500", "hover:bg-blue-50/50", "transition-colors", "relative", "group", 3, "ngClass"], [1, "space-y-2", "text-center"], ["class", "mx-auto w-10 h-10 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center", 4, "ngIf"], ["class", "mx-auto w-10 h-10 bg-green-50 text-green-600 rounded-full flex items-center justify-center", 4, "ngIf"], [1, "text-sm", "text-gray-600"], [1, "relative", "cursor-pointer", "font-bold", "text-blue-600", "hover:text-blue-700"], ["type", "file", 1, "sr-only", 3, "change"], [1, "text-xs", "text-gray-500"], [1, "mx-auto", "w-10", "h-10", "bg-blue-50", "text-blue-500", "rounded-full", "flex", "items-center", "justify-center"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"], [1, "mx-auto", "w-10", "h-10", "bg-green-50", "text-green-600", "rounded-full", "flex", "items-center", "justify-center"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M5 13l4 4L19 7"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "-ml-1", "mr-2", "h-4", "w-4", "text-white"], [1, "fixed", "inset-0", "z-[80]", "flex", "items-center", "justify-center", "p-4", "sm:p-0"], [1, "relative", "bg-white", "rounded-3xl", "shadow-2xl", "w-full", "max-w-md", "p-6", "sm:p-8", "text-center", "transform", "transition-all"], [1, "mx-auto", "flex", "items-center", "justify-center", "h-20", "w-20", "rounded-full", "bg-red-50", "mb-6", "border-4", "border-red-100", "shadow-sm"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "h-10", "w-10", "text-red-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"], [1, "text-2xl", "font-extrabold", "text-gray-900", "mb-3", "tracking-tight"], [1, "text-gray-500", "text-sm", "leading-relaxed", "mb-6"], [1, "grid", "grid-cols-2", "gap-4", "mt-2"], ["type", "button", 1, "px-5", "py-3", "text-sm", "font-bold", "text-gray-700", "bg-white", "border", "border-gray-300", "rounded-xl", "hover:bg-gray-50", "shadow-sm", "transition", 3, "click"], ["type", "button", 1, "px-5", "py-3", "text-sm", "font-bold", "text-white", "bg-red-600", "rounded-xl", "hover:bg-red-700", "disabled:bg-red-300", "shadow-md", "flex", "items-center", "justify-center", "transition", 3, "click", "disabled"], [1, "bg-gradient-to-r", "from-indigo-600", "to-purple-700", "px-6", "py-5", "flex", "justify-between", "items-center"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"], [1, "text-indigo-100", "hover:text-white", "bg-white/10", "hover:bg-white/20", "p-2", "rounded-full", "transition", 3, "click"], [1, "p-6", "sm:p-8", "space-y-4", 3, "ngSubmit", "formGroup"], ["formControlName", "lessonId", 1, "bg-gray-50", "border", "border-gray-200", "text-gray-900", "text-sm", "rounded-xl", "focus:ring-2", "focus:ring-indigo-100", "focus:border-indigo-500", "block", "w-full", "p-3", "outline-none", "transition", "cursor-pointer", "font-medium"], ["disabled", "", 3, "ngValue"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "title", "type", "text", "placeholder", "VD: B\xE0i t\u1EADp Tr\u1EAFc nghi\u1EC7m Unit 1 - Grammar", 1, "bg-gray-50", "border", "border-gray-200", "text-gray-900", "text-sm", "rounded-xl", "focus:ring-2", "focus:ring-indigo-100", "focus:border-indigo-500", "block", "w-full", "p-3", "outline-none", "transition"], [1, "grid", "grid-cols-2", "gap-4"], ["formControlName", "assignmentType", 1, "bg-gray-50", "border", "border-gray-200", "text-gray-900", "text-sm", "rounded-xl", "focus:ring-2", "focus:ring-indigo-100", "focus:border-indigo-500", "block", "w-full", "p-3", "outline-none", "transition", "cursor-pointer", "font-medium"], ["value", "HOMEWORK"], ["value", "QUIZ"], ["formControlName", "status", 1, "bg-gray-50", "border", "border-gray-200", "text-gray-900", "text-sm", "rounded-xl", "focus:ring-2", "focus:ring-indigo-100", "focus:border-indigo-500", "block", "w-full", "p-3", "outline-none", "transition", "cursor-pointer", "font-medium"], ["value", "PUBLISHED"], ["value", "UNPUBLISHED"], ["formControlName", "dueDate", "type", "datetime-local", 1, "bg-gray-50", "border", "border-gray-200", "text-gray-900", "text-sm", "rounded-xl", "focus:ring-2", "focus:ring-indigo-100", "focus:border-indigo-500", "block", "w-full", "p-3", "outline-none", "transition"], ["formControlName", "timeLimitMinutes", "type", "number", "min", "0", "placeholder", "0 = Kh\xF4ng gi\u1EDBi h\u1EA1n", 1, "bg-gray-50", "border", "border-gray-200", "text-gray-900", "text-sm", "rounded-xl", "focus:ring-2", "focus:ring-indigo-100", "focus:border-indigo-500", "block", "w-full", "p-3", "outline-none", "transition"], ["formControlName", "maxAttempts", "type", "number", "min", "1", "placeholder", "1", 1, "bg-gray-50", "border", "border-gray-200", "text-gray-900", "text-sm", "rounded-xl", "focus:ring-2", "focus:ring-indigo-100", "focus:border-indigo-500", "block", "w-full", "p-3", "outline-none", "transition"], ["formControlName", "description", "rows", "2", "placeholder", "Nh\u1EADp h\u01B0\u1EDBng d\u1EABn ng\u1EAFn g\u1ECDn cho h\u1ECDc sinh...", 1, "bg-gray-50", "border", "border-gray-200", "text-gray-900", "text-sm", "rounded-xl", "focus:ring-2", "focus:ring-indigo-100", "focus:border-indigo-500", "block", "w-full", "p-3", "outline-none", "transition", "resize-none"], [1, "flex", "justify-end", "space-x-3", "pt-4", "border-t", "border-gray-100", "mt-2"], ["type", "submit", 1, "px-6", "py-2.5", "bg-indigo-600", "text-white", "font-bold", "rounded-xl", "disabled:bg-indigo-300", "hover:bg-indigo-700", "shadow-md", "transition", "flex", "items-center", 3, "disabled"], [3, "value"]], template: function ClassDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "a", 2);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(3, "svg", 3);
      \u0275\u0275element(4, "path", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275text(5, " L\u1EDBp h\u1ECDc c\u1EE7a t\xF4i ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(6, "span");
      \u0275\u0275text(7, "/");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "span", 5);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(10, ClassDetailComponent_div_10_Template, 4, 0, "div", 6)(11, ClassDetailComponent_ng_container_11_Template, 28, 10, "ng-container", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275template(12, ClassDetailComponent_div_12_Template, 20, 8, "div", 8)(13, ClassDetailComponent_div_13_Template, 56, 9, "div", 9)(14, ClassDetailComponent_div_14_Template, 19, 2, "div", 10)(15, ClassDetailComponent_div_15_Template, 71, 7, "div", 9);
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(((tmp_0_0 = ctx.classInfo()) == null ? null : tmp_0_0.name) || "\u0110ang t\u1EA3i...");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading() && ctx.classInfo());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isPreviewModalOpen());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isMaterialModalOpen());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isDeleteModalOpen());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isAssignmentModalOpen());
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, RouterModule, RouterLink, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, NgModel, ReactiveFormsModule, FormGroupDirective, FormControlName, DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClassDetailComponent, [{
    type: Component,
    args: [{ selector: "app-class-detail", standalone: true, imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule], template: `<div class="space-y-6 max-w-7xl mx-auto">\r
\r
  <div class="flex items-center space-x-2 text-sm text-gray-500 mb-2">\r
    <a routerLink="/teacher/my-classes" class="hover:text-blue-600 transition flex items-center">\r
      <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>\r
      </svg>\r
      L\u1EDBp h\u1ECDc c\u1EE7a t\xF4i\r
    </a>\r
    <span>/</span>\r
    <span class="text-gray-900 font-medium">{{ classInfo()?.name || '\u0110ang t\u1EA3i...' }}</span>\r
  </div>\r
\r
  <div *ngIf="isLoading()" class="flex justify-center py-20">\r
    <svg class="animate-spin h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24">\r
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>\r
      <path class="opacity-75" fill="currentColor"\r
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">\r
      </path>\r
    </svg>\r
  </div>\r
\r
  <ng-container *ngIf="!isLoading() && classInfo()">\r
\r
    <div\r
      class="bg-gradient-to-r from-blue-700 to-indigo-800 rounded-3xl p-8 sm:p-10 shadow-lg text-white relative overflow-hidden">\r
      <div class="absolute -top-24 -right-24 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>\r
      <div class="absolute -bottom-10 -left-10 w-32 h-32 bg-white opacity-10 rounded-full blur-xl"></div>\r
\r
      <div class="relative z-10">\r
        <h1 class="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">{{ classInfo()?.name }}</h1>\r
        <div class="flex flex-wrap items-center gap-4 text-blue-100 mt-4">\r
          <div class="flex items-center">\r
            <svg class="w-5 h-5 mr-1.5 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253">\r
              </path>\r
            </svg>\r
            {{ classInfo()?.subjectName }}\r
          </div>\r
          <div class="flex items-center">\r
            <svg class="w-5 h-5 mr-1.5 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z">\r
              </path>\r
            </svg>\r
            M\xE3 l\u1EDBp: {{ classInfo()?.code || classInfo()?.physicalClassName }}\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div\r
      class="flex flex-col sm:flex-row justify-between items-center bg-white p-2 rounded-2xl shadow-sm border border-gray-100 gap-4">\r
      <div class="flex space-x-1 p-1 bg-gray-50 rounded-xl w-full sm:w-auto">\r
        <button (click)="switchTab('lessons')"\r
          [ngClass]="activeTab() === 'lessons' ? 'bg-white text-blue-700 shadow-sm' : 'text-gray-500 hover:text-gray-700'"\r
          class="px-6 py-2.5 text-sm font-bold rounded-lg w-full sm:w-auto transition">\r
          B\xE0i h\u1ECDc\r
        </button>\r
        <button (click)="switchTab('students')"\r
          [ngClass]="activeTab() === 'students' ? 'bg-white text-blue-700 shadow-sm' : 'text-gray-500 hover:text-gray-700'"\r
          class="px-6 py-2.5 text-sm font-bold rounded-lg w-full sm:w-auto transition">\r
          Danh s\xE1ch H\u1ECDc vi\xEAn\r
        </button>\r
        <button (click)="switchTab('materials')"\r
          [ngClass]="activeTab() === 'materials' ? 'bg-white text-blue-700 shadow-sm' : 'text-gray-500 hover:text-gray-700'"\r
          class="px-6 py-2.5 text-sm font-bold rounded-lg w-full sm:w-auto transition">\r
          T\xE0i li\u1EC7u chung kh\xF3a h\u1ECDc\r
        </button>\r
      </div>\r
\r
      <div *ngIf="activeTab() === 'students'" class="relative w-full sm:w-80 px-2 sm:px-0">\r
        <div class="absolute inset-y-0 left-0 flex items-center pl-5 sm:pl-3 pointer-events-none">\r
          <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>\r
          </svg>\r
        </div>\r
        <input type="text" [ngModel]="searchQuery()" (ngModelChange)="onSearchChange($event)"\r
          placeholder="T\xECm h\u1ECDc sinh theo t\xEAn, m\xE3 HS..."\r
          class="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-500 block w-full pl-10 p-2.5 outline-none transition">\r
      </div>\r
    </div>\r
\r
    <!-- TAB B\xC0I H\u1ECCC (LESSONS) - ACCORDION TIMELINE -->\r
    <div *ngIf="activeTab() === 'lessons'" class="space-y-4">\r
      <div *ngIf="isLoadingLessons()" class="flex justify-center py-12 bg-white rounded-2xl border border-gray-100 shadow-sm">\r
        <svg class="animate-spin h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24">\r
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>\r
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>\r
        </svg>\r
      </div>\r
\r
      <div *ngIf="!isLoadingLessons() && lessons().length === 0" class="bg-white rounded-2xl border border-dashed border-gray-200 p-12 text-center shadow-sm">\r
        <div class="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">\r
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>\r
          </svg>\r
        </div>\r
        <h3 class="text-lg font-bold text-gray-900 mb-1">Ch\u01B0a c\xF3 b\xE0i h\u1ECDc n\xE0o</h3>\r
        <p class="text-sm text-gray-500">Ch\u01B0a c\xF3 n\u1ED9i dung b\xE0i h\u1ECDc \u0111\u01B0\u1EE3c \u0111\u0103ng t\u1EA3i cho l\u1EDBp h\u1ECDc n\xE0y.</p>\r
      </div>\r
\r
      <div *ngIf="!isLoadingLessons() && lessons().length > 0" class="space-y-4">\r
        <div *ngFor="let les of lessons(); let i = index" \r
             class="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden transition-all duration-200">\r
          \r
          <!-- Lesson Card Header -->\r
          <div (click)="toggleLessonExpand(les.id)" \r
               class="p-5 flex items-center justify-between cursor-pointer hover:bg-gray-50/80 transition select-none">\r
            <div class="flex items-center space-x-4">\r
              <div class="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 font-extrabold flex items-center justify-center shrink-0 text-sm shadow-inner">\r
                #{{ les.orderNumber || (i + 1) }}\r
              </div>\r
              <div>\r
                <h4 class="text-base font-bold text-gray-900 leading-snug">{{ les.name }}</h4>\r
                <p class="text-xs text-gray-500 mt-0.5 line-clamp-1" *ngIf="les.description">{{ les.description }}</p>\r
              </div>\r
            </div>\r
\r
            <div class="flex items-center space-x-3">\r
              <span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-700">\r
                \u{1F4C4} {{ (lessonMaterialsMap()[les.id] || []).length }} T\xE0i li\u1EC7u\r
              </span>\r
              <span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700">\r
                \u270F\uFE0F {{ (lessonAssignmentsMap()[les.id] || []).length }} B\xE0i t\u1EADp\r
              </span>\r
              <svg class="w-5 h-5 text-gray-400 transform transition-transform duration-200" \r
                   [class.rotate-180]="isLessonExpanded(les.id)" \r
                   fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>\r
              </svg>\r
            </div>\r
          </div>\r
\r
          <!-- Expanded Accordion Content -->\r
          <div *ngIf="isLessonExpanded(les.id)" class="border-t border-gray-100 bg-gray-50/50 p-6 space-y-6">\r
            \r
            <!-- SECTION 1: T\xC0I LI\u1EC6U H\u1ECCC T\u1EACP OF LESSON -->\r
            <div>\r
              <div class="flex items-center justify-between mb-3">\r
                <h5 class="text-sm font-bold text-gray-800 uppercase tracking-wider flex items-center">\r
                  <svg class="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>\r
                  T\xE0i li\u1EC7u h\u1ECDc t\u1EADp\r
                </h5>\r
\r
                <div class="flex items-center space-x-2">\r
                  <button (click)="toggleLessonMaterialManageMode(les.id, $event)"\r
                     [ngClass]="lessonMaterialManageMap()[les.id] ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'"\r
                     class="inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-lg transition shadow-2xs">\r
                    <svg class="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>\r
                    {{ lessonMaterialManageMap()[les.id] ? 'Xong' : 'S\u1EEDa' }}\r
                  </button>\r
\r
                  <button (click)="openAddMaterialModal(les.id, $event)" \r
                          class="inline-flex items-center text-xs font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 px-2.5 py-1 rounded-lg transition">\r
                    + Th\xEAm t\xE0i li\u1EC7u\r
                  </button>\r
                </div>\r
              </div>\r
\r
              <div *ngIf="(lessonMaterialsMap()[les.id] || []).length === 0" class="text-xs text-gray-400 italic py-2">\r
                B\xE0i h\u1ECDc n\xE0y ch\u01B0a c\xF3 t\xE0i li\u1EC7u \u0111i k\xE8m.\r
              </div>\r
\r
              <div *ngIf="(lessonMaterialsMap()[les.id] || []).length > 0" class="grid grid-cols-1 sm:grid-cols-2 gap-3">\r
                <div *ngFor="let m of lessonMaterialsMap()[les.id]" class="bg-white p-3.5 rounded-xl border border-gray-200 flex items-center justify-between shadow-2xs hover:shadow-xs transition">\r
                  <div class="flex items-center space-x-3 overflow-hidden cursor-pointer" (click)="openPreview(m)">\r
                    <div class="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">\r
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 01-2-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>\r
                    </div>\r
                    <div class="truncate">\r
                      <p class="text-xs font-bold text-gray-900 truncate hover:text-blue-600 transition">{{ m.title }}</p>\r
                      <p class="text-[11px] text-gray-400 mt-0.5">{{ m.materialType || m.fileType || 'Document' }}</p>\r
                    </div>\r
                  </div>\r
\r
                  <div class="flex items-center space-x-1 shrink-0 ml-2">\r
                    <button (click)="openPreview(m)" class="text-xs font-semibold text-blue-600 hover:text-blue-800 bg-blue-50 px-2.5 py-1 rounded-lg transition">\r
                      Xem\r
                    </button>\r
                    <!-- N\xFAt thao t\xE1c (Ch\u1EC9 hi\u1EC7n khi \u1EDF Ch\u1EBF \u0111\u1ED9 S\u1EEDa) -->\r
                    <ng-container *ngIf="lessonMaterialManageMap()[les.id]">\r
                      <button (click)="openEditMaterialModal(m, $event, les.id)" title="S\u1EEDa t\xE0i li\u1EC7u" class="p-1 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition">\r
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>\r
                      </button>\r
                      <button (click)="deleteMaterial(m.id, $event, les.id)" title="X\xF3a t\xE0i li\u1EC7u" class="p-1 text-gray-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition">\r
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>\r
                      </button>\r
                    </ng-container>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
\r
            <!-- SECTION 2: B\xC0I T\u1EACP & KI\u1EC2M TRA OF LESSON -->\r
            <div>\r
              <div class="flex items-center justify-between mb-3">\r
                <h5 class="text-sm font-bold text-gray-800 uppercase tracking-wider flex items-center">\r
                  <svg class="w-4 h-4 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5h6m-6 4h6m-9 4h12M7 3h10a2 2 0 012 2v16a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2z"></path></svg>\r
                  B\xE0i t\u1EADp & \u0110\xE1nh gi\xE1\r
                </h5>\r
\r
                <div class="flex items-center space-x-2">\r
                  <button (click)="toggleLessonAssignmentManageMode(les.id, $event)"\r
                     [ngClass]="lessonAssignmentManageMap()[les.id] ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'"\r
                     class="inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-lg transition shadow-2xs">\r
                    <svg class="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>\r
                    {{ lessonAssignmentManageMap()[les.id] ? 'Xong' : 'S\u1EEDa' }}\r
                  </button>\r
\r
                  <button (click)="openAddAssignmentModal(les.id, $event)"\r
                     class="inline-flex items-center text-xs font-semibold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 px-2.5 py-1 rounded-lg transition">\r
                    + T\u1EA1o b\xE0i t\u1EADp\r
                  </button>\r
                </div>\r
              </div>\r
\r
              <div *ngIf="(lessonAssignmentsMap()[les.id] || []).length === 0" class="text-xs text-gray-400 italic py-2">\r
                B\xE0i h\u1ECDc n\xE0y ch\u01B0a c\xF3 b\xE0i t\u1EADp n\xE0o.\r
              </div>\r
\r
              <div *ngIf="(lessonAssignmentsMap()[les.id] || []).length > 0" class="space-y-2.5">\r
                <div *ngFor="let ass of lessonAssignmentsMap()[les.id]"\r
                     (click)="navigateToAssignmentDetail(ass.id, $event)"\r
                     class="bg-white p-4 rounded-xl border border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-2xs hover:shadow-md hover:border-indigo-300 transition cursor-pointer group">\r
                  <div>\r
                    <div class="flex items-center space-x-2 mb-1">\r
                      <h6 class="text-xs font-bold text-gray-900 group-hover:text-indigo-600 transition">{{ ass.title }}</h6>\r
                      <span class="px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-700 font-semibold text-[10px]">{{ ass.assignmentType || 'HOMEWORK' }}</span>\r
                    </div>\r
                    <div class="flex flex-wrap items-center gap-3 text-[11px] text-gray-500">\r
                      <span *ngIf="ass.dueDate">H\u1EA1n n\u1ED9p: {{ ass.dueDate | date:'dd/MM/yyyy HH:mm' }}</span>\r
                      <span *ngIf="ass.timeLimitMinutes">Th\u1EDDi gian: {{ ass.timeLimitMinutes }} ph\xFAt</span>\r
                      <span *ngIf="ass.maxAttempts">T\u1ED1i \u0111a: {{ ass.maxAttempts }} l\u1EA7n l\xE0m</span>\r
                    </div>\r
                  </div>\r
\r
                  <!-- N\xFAt thao t\xE1c (Ch\u1EC9 hi\u1EC7n khi \u1EDF Ch\u1EBF \u0111\u1ED9 S\u1EEDa) -->\r
                  <div *ngIf="lessonAssignmentManageMap()[les.id]" class="flex items-center space-x-1 shrink-0" (click)="$event.stopPropagation()">\r
                    <button (click)="openEditAssignmentModal(ass, $event, les.id)" title="S\u1EEDa th\xF4ng tin b\xE0i t\u1EADp" class="p-1.5 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition">\r
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>\r
                    </button>\r
                    <button (click)="deleteAssignmentItem(ass.id, $event, les.id)" title="X\xF3a b\xE0i t\u1EADp" class="p-1.5 text-gray-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition">\r
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>\r
                    </button>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <ng-container *ngIf="activeTab() === 'students'">\r
\r
      <div *ngIf="isLoadingStudents()" class="py-12 text-center text-indigo-500">\r
        <svg class="animate-spin inline-block h-8 w-8" fill="none" viewBox="0 0 24 24">\r
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>\r
          <path class="opacity-75" fill="currentColor"\r
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">\r
          </path>\r
        </svg>\r
      </div>\r
\r
      <div *ngIf="!isLoadingStudents()" class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">\r
        <div class="overflow-x-auto">\r
          <table class="w-full text-sm text-left text-gray-500">\r
            <thead class="text-xs text-gray-500 uppercase bg-gray-50/80 border-b border-gray-100 font-semibold">\r
              <tr>\r
                <th scope="col" class="px-6 py-4 w-16 text-center">STT</th>\r
                <th scope="col" class="px-6 py-4">Th\xF4ng tin H\u1ECDc sinh</th>\r
                <th scope="col" class="px-6 py-4">M\xE3 H\u1ECDc sinh</th>\r
                <th scope="col" class="px-6 py-4">Ng\xE0y nh\u1EADp h\u1ECDc</th>\r
                <th scope="col" class="px-6 py-4 text-center">Tr\u1EA1ng th\xE1i</th>\r
              </tr>\r
            </thead>\r
            <tbody class="divide-y divide-gray-50">\r
              <tr *ngIf="paginatedStudents().length === 0">\r
                <td colspan="5" class="px-6 py-12 text-center text-gray-500">Ch\u01B0a c\xF3 h\u1ECDc sinh n\xE0o trong l\u1EDBp h\u1ECDc n\xE0y.</td>\r
              </tr>\r
\r
              <tr *ngFor="let student of paginatedStudents(); let i = index"\r
                class="hover:bg-blue-50/30 transition duration-150">\r
                <td class="px-6 py-4 text-center font-medium text-gray-400">{{ (currentPage() - 1) * pageSize() + i + 1 }}</td>\r
                <td class="px-6 py-4">\r
                  <div class="flex items-center">\r
                    <div class="w-9 h-9 rounded-full bg-indigo-100 text-indigo-700 font-bold text-sm flex items-center justify-center mr-3 uppercase shrink-0">\r
                      {{ (student.studentName || 'H').charAt(0) }}\r
                    </div>\r
                    <div>\r
                      <div class="font-bold text-gray-900">{{ student.studentName || 'H\u1ECDc vi\xEAn' }}</div>\r
                      <div class="text-xs text-gray-500 mt-0.5">\r
                        <span *ngIf="student.studentEmail">{{ student.studentEmail }}</span>\r
                        <span *ngIf="student.studentEmail && student.studentPhone"> \u2022 </span>\r
                        <span *ngIf="student.studentPhone">{{ student.studentPhone }}</span>\r
                      </div>\r
                    </div>\r
                  </div>\r
                </td>\r
                <td class="px-6 py-4">\r
                  <span class="font-mono text-gray-700 bg-gray-100 px-2.5 py-1 rounded-lg border border-gray-200 text-xs font-bold">{{ student.studentCode || 'N/A' }}</span>\r
                </td>\r
                <td class="px-6 py-4 text-gray-600 text-xs font-medium">\r
                  {{ student.enrollmentDate ? (student.enrollmentDate | date:'dd/MM/yyyy') : '\u2014' }}\r
                </td>\r
                <td class="px-6 py-4 text-center">\r
                  <span class="px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider rounded-md border"\r
                    [ngClass]="student.status === 'ACTIVE' || student.status === 'active' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-amber-50 text-amber-700 border-amber-200'">\r
                    {{ student.status === 'ACTIVE' || student.status === 'active' ? '\u{1F7E2} \u0110ang h\u1ECDc' : (student.status || '\u0110\xE3 \u0111\u0103ng k\xFD') }}\r
                  </span>\r
                </td>\r
              </tr>\r
            </tbody>\r
          </table>\r
        </div>\r
\r
        <div\r
          class="flex flex-col sm:flex-row items-center justify-between px-6 py-4 bg-gray-50 border-t border-gray-100 rounded-b-2xl gap-4">\r
          <div class="text-sm text-gray-500">Hi\u1EC3n th\u1ECB <span class="font-semibold text-gray-900">{{ startIndex() }}</span> - <span class="font-semibold text-gray-900">{{ endIndex() }}</span> trong s\u1ED1 <span class="font-semibold text-gray-900">{{ filteredStudents().length }}</span> h\u1ECDc sinh</div>\r
          <div class="flex space-x-2">\r
            <button (click)="changePage(currentPage() - 1)" [disabled]="currentPage() === 1"\r
              class="px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 transition shadow-sm">Tr\u01B0\u1EDBc</button>\r
            <div\r
              class="flex items-center justify-center px-4 py-1.5 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg border border-gray-200">\r
              Trang {{ currentPage() }} / {{ totalPages() }}</div>\r
            <button (click)="changePage(currentPage() + 1)" [disabled]="currentPage() === totalPages()"\r
              class="px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 transition shadow-sm">Sau</button>\r
          </div>\r
        </div>\r
      </div>\r
    </ng-container>\r
\r
    <ng-container *ngIf="activeTab() === 'materials'">\r
      <div class="flex justify-between items-center mb-4">\r
        <h3 class="text-lg font-bold text-gray-800">T\xE0i li\u1EC7u chung kh\xF3a h\u1ECDc {{ classInfo()?.courseName ? '(' + classInfo()?.courseName + ')' : '' }}</h3>\r
      </div>\r
\r
      <div *ngIf="isLoadingMaterials()" class="py-12 text-center text-blue-500">\r
        <svg class="animate-spin inline-block h-8 w-8" fill="none" viewBox="0 0 24 24">\r
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>\r
          <path class="opacity-75" fill="currentColor"\r
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">\r
          </path>\r
        </svg>\r
      </div>\r
\r
      <div *ngIf="!isLoadingMaterials() && materials().length === 0"\r
        class="bg-gray-50 border border-dashed border-gray-300 rounded-2xl p-12 text-center">\r
        <p class="text-gray-500">Ch\u01B0a c\xF3 t\xE0i li\u1EC7u chung n\xE0o \u0111\u01B0\u1EE3c t\u1EA3i l\xEAn cho kh\xF3a h\u1ECDc n\xE0y.</p>\r
      </div>\r
\r
      <div *ngIf="!isLoadingMaterials() && materials().length > 0"\r
        class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">\r
\r
        <div class="bg-gray-50/80 px-5 py-3 border-b border-gray-200 flex items-center">\r
          <svg class="w-4 h-4 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>\r
          </svg>\r
          <span class="font-bold text-gray-800">T\u1EA5t c\u1EA3 t\xE0i li\u1EC7u</span>\r
        </div>\r
\r
        <ul class="divide-y divide-gray-100">\r
          <li *ngFor="let m of materials()"\r
            class="group hover:bg-blue-50/30 transition-colors duration-200 flex items-center justify-between p-4 sm:px-6">\r
\r
            <div class="flex items-center flex-1 min-w-0 cursor-pointer" (click)="openPreview(m)">\r
              <div\r
                class="w-10 h-10 rounded bg-gray-50 flex items-center justify-center mr-4 shrink-0 shadow-sm border border-gray-100 text-gray-500 group-hover:text-blue-600 transition"\r
                [ngClass]="{'!text-blue-600': m.fileType === 'document', '!text-orange-500': m.fileType === 'slide', '!text-red-500': m.fileType === 'video', '!text-emerald-600': m.fileType === 'link'}">\r
                <svg *ngIf="m.fileType === 'document' || m.fileType === 'slide'" class="w-5 h-5" fill="none"\r
                  stroke="currentColor" viewBox="0 0 24 24">\r
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z">\r
                  </path>\r
                </svg>\r
                <svg *ngIf="m.fileType === 'video'" class="w-5 h-5" fill="none" stroke="currentColor"\r
                  viewBox="0 0 24 24">\r
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z">\r
                  </path>\r
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>\r
                </svg>\r
                <svg *ngIf="m.fileType === 'link'" class="w-5 h-5" fill="none" stroke="currentColor"\r
                  viewBox="0 0 24 24">\r
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1">\r
                  </path>\r
                </svg>\r
              </div>\r
\r
              <div class="truncate pr-4">\r
                <div class="flex items-center">\r
                  <h4 class="font-medium text-gray-900 text-base truncate group-hover:text-blue-700 transition">{{\r
                    m.title }}</h4>\r
                  <svg *ngIf="m.fileType === 'link'" class="w-3.5 h-3.5 text-gray-400 ml-2 shrink-0" fill="none"\r
                    stroke="currentColor" viewBox="0 0 24 24">\r
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>\r
                  </svg>\r
                </div>\r
\r
                <div class="flex items-center text-xs text-gray-500 mt-1.5 space-x-3">\r
                  <span *ngIf="m.fileType === 'link'" class="flex items-center text-emerald-600 font-medium">\r
                    <svg class="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1">\r
                      </path>\r
                    </svg>\r
                    Li\xEAn k\u1EBFt ngo\xE0i\r
                  </span>\r
                  <span *ngIf="m.fileType !== 'link'" class="flex items-center">\r
                    T\u1EC7p tin \u2022 {{ formatBytes(m.fileSize) }}\r
                  </span>\r
\r
                  <span class="w-1 h-1 rounded-full bg-gray-300"></span>\r
\r
                  <span class="flex items-center text-gray-400">\r
                    <svg class="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>\r
                    </svg>\r
                    \u0110\u0103ng l\xFAc: {{ m.createdAt | date:'dd/MM/yyyy HH:mm' }}\r
                  </span>\r
                </div>\r
              </div>\r
            </div>\r
\r
            <div class="flex items-center space-x-2 shrink-0">\r
              <button (click)="openPreview(m)"\r
                class="px-3 py-1.5 text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-600 hover:text-white transition">\r
                Xem\r
              </button>\r
            </div>\r
          </li>\r
        </ul>\r
      </div>\r
    </ng-container>\r
\r
\r
\r
  </ng-container>\r
</div>\r
\r
<div *ngIf="isPreviewModalOpen()" class="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-6 lg:p-12">\r
  <div class="absolute inset-0 bg-gray-900/90 backdrop-blur-md transition-opacity" (click)="closePreview()"></div>\r
\r
  <div class="relative bg-white rounded-2xl shadow-2xl w-full h-full max-w-6xl flex flex-col overflow-hidden">\r
    <div class="px-5 py-4 border-b border-gray-200 flex justify-between items-center bg-gray-50 shrink-0">\r
      <div class="flex items-center overflow-hidden">\r
        <span\r
          class="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-100 px-2 py-1 rounded mr-3 shrink-0">Xem\r
          tr\u01B0\u1EDBc</span>\r
        <h3 class="text-lg font-bold text-gray-900 truncate" [title]="previewData().title">{{ previewData().title }}\r
        </h3>\r
      </div>\r
      <div class="flex items-center space-x-2 shrink-0 ml-4">\r
        <a *ngIf="previewData().rawUrl && previewData().sourceType !== 'EXTERNAL' && previewData().type !== 'EXTERNAL_LINK' && previewData().type !== 'link'"\r
           [href]="previewData().rawUrl"\r
           target="_blank"\r
           download\r
           class="inline-flex items-center text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-3.5 py-2 rounded-xl transition shadow-2xs">\r
          <svg class="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>\r
          T\u1EA3i xu\u1ED1ng\r
        </a>\r
        <button (click)="closePreview()"\r
          class="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-200 rounded-full transition shrink-0">\r
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>\r
          </svg>\r
        </button>\r
      </div>\r
    </div>\r
\r
    <div class="flex-1 bg-gray-100 flex items-center justify-center relative w-full h-full overflow-hidden">\r
\r
      <div *ngIf="isPreviewLoading()" class="flex flex-col items-center justify-center">\r
        <svg class="animate-spin h-10 w-10 text-blue-500 mb-3" fill="none" viewBox="0 0 24 24">\r
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>\r
          <path class="opacity-75" fill="currentColor"\r
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">\r
          </path>\r
        </svg>\r
        <p class="text-sm font-medium text-gray-500">\u0110ang t\u1EA3i t\u1EC7p an to\xE0n t\u1EEB h\u1EC7 th\u1ED1ng...</p>\r
      </div>\r
\r
      <!-- Image Preview -->\r
      <img *ngIf="!isPreviewLoading() && previewData().rawUrl && (previewData().type === 'IMAGE' || previewData().type === 'image')"\r
        [src]="previewData().rawUrl" class="max-w-full max-h-full object-contain p-4 rounded-xl" alt="Preview">\r
\r
      <!-- Video Preview -->\r
      <video *ngIf="!isPreviewLoading() && previewData().rawUrl && (previewData().type === 'VIDEO' || previewData().type === 'video')" controls autoplay\r
        class="w-full max-h-full bg-black">\r
        <source [src]="previewData().rawUrl" type="video/mp4">\r
        Tr\xECnh duy\u1EC7t c\u1EE7a b\u1EA1n kh\xF4ng h\u1ED7 tr\u1EE3 ph\xE1t video.\r
      </video>\r
\r
      <!-- Audio Preview -->\r
      <div *ngIf="!isPreviewLoading() && previewData().rawUrl && (previewData().type === 'AUDIO' || previewData().type === 'audio')" class="p-8 bg-white rounded-2xl shadow-md text-center space-y-4">\r
        <div class="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mx-auto">\r
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 .895-2 3-2 3 .895 3 2zm12 0c0 1.105-1.343 2-3 2s-3-.895-3-2 .895-2 3-2 3 .895 3 2zM9 10l12-3"></path></svg>\r
        </div>\r
        <audio controls autoplay class="w-72 sm:w-96">\r
          <source [src]="previewData().rawUrl">\r
          Tr\xECnh duy\u1EC7t c\u1EE7a b\u1EA1n kh\xF4ng h\u1ED7 tr\u1EE3 ph\xE1t \xE2m thanh.\r
        </audio>\r
      </div>\r
\r
      <!-- Iframe for PDF, External Link, Youtube Embed -->\r
      <iframe *ngIf="!isPreviewLoading() && previewData().url && previewData().type !== 'VIDEO' && previewData().type !== 'video' && previewData().type !== 'IMAGE' && previewData().type !== 'image' && previewData().type !== 'AUDIO' && previewData().type !== 'audio'"\r
        [src]="previewData().url" class="w-full h-full border-0" allowfullscreen>\r
      </iframe>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- UNIFIED TH\xCAM / S\u1EECA T\xC0I LI\u1EC6U MODAL -->\r
<div *ngIf="isMaterialModalOpen()" class="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-0">\r
  <div class="absolute inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity" (click)="closeMaterialModal()"></div>\r
\r
  <div class="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden transform transition-all">\r
    <div class="bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-5 flex justify-between items-center">\r
      <div class="flex items-center text-white">\r
        <div class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3 backdrop-blur-md">\r
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>\r
          </svg>\r
        </div>\r
        <h3 class="text-xl font-extrabold tracking-wide">{{ isEditMaterialMode() ? 'Ch\u1EC9nh s\u1EEDa t\xE0i li\u1EC7u' : 'Th\xEAm t\xE0i li\u1EC7u m\u1EDBi' }}</h3>\r
      </div>\r
      <button (click)="closeMaterialModal()" class="text-blue-100 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition">\r
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>\r
        </svg>\r
      </button>\r
    </div>\r
\r
    <form [formGroup]="materialForm" (ngSubmit)="submitMaterialForm()" class="p-6 sm:p-8 space-y-5">\r
      \r
      <!-- Ngu\u1ED3n t\xE0i li\u1EC7u -->\r
      <div>\r
        <label class="block text-sm font-bold text-gray-700 mb-1.5">Ngu\u1ED3n t\xE0i li\u1EC7u <span class="text-red-500">*</span></label>\r
        <div class="grid grid-cols-2 gap-3">\r
          <label class="flex items-center justify-center p-3 rounded-xl border cursor-pointer transition text-sm font-semibold"\r
                 [ngClass]="materialForm.get('sourceType')?.value === 'MINIO' ? 'bg-blue-50 border-blue-500 text-blue-700' : 'bg-gray-50 border-gray-200 text-gray-600'">\r
            <input type="radio" formControlName="sourceType" value="MINIO" class="sr-only">\r
            \u{1F4C1} T\u1EC7p tin (T\u1EA3i l\xEAn)\r
          </label>\r
          <label class="flex items-center justify-center p-3 rounded-xl border cursor-pointer transition text-sm font-semibold"\r
                 [ngClass]="materialForm.get('sourceType')?.value === 'EXTERNAL' ? 'bg-emerald-50 border-emerald-500 text-emerald-700' : 'bg-gray-50 border-gray-200 text-gray-600'">\r
            <input type="radio" formControlName="sourceType" value="EXTERNAL" class="sr-only">\r
            \u{1F517} \u0110\u01B0\u1EDDng d\u1EABn li\xEAn k\u1EBFt\r
          </label>\r
        </div>\r
      </div>\r
\r
      <!-- Ti\xEAu \u0111\u1EC1 -->\r
      <div>\r
        <label class="block text-sm font-bold text-gray-700 mb-1.5">Ti\xEAu \u0111\u1EC1 t\xE0i li\u1EC7u <span class="text-red-500">*</span></label>\r
        <input formControlName="title" type="text"\r
          class="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-500 block w-full p-3 outline-none transition"\r
          placeholder="VD: B\xE0i gi\u1EA3ng B\xE0i 1 - Kh\xE1i ni\u1EC7m c\u01A1 b\u1EA3n">\r
      </div>\r
\r
      <!-- Lo\u1EA1i t\xE0i li\u1EC7u -->\r
      <div>\r
        <label class="block text-sm font-bold text-gray-700 mb-1.5">Ph\xE2n lo\u1EA1i t\xE0i li\u1EC7u</label>\r
        <select formControlName="materialType"\r
          class="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-500 block w-full p-3 outline-none transition cursor-pointer font-medium">\r
          <option value="DOCUMENT">\u{1F4C4} T\xE0i li\u1EC7u (PDF/Word)</option>\r
          <option value="SLIDE">\u{1F4CA} B\xE0i gi\u1EA3ng (Slide/PPT)</option>\r
          <option value="VIDEO">\u{1F3A5} Video b\xE0i gi\u1EA3ng</option>\r
          <option value="AUDIO">\u{1F3A7} \xC2m thanh / B\xE0i nghe</option>\r
          <option value="IMAGE">\u{1F5BC}\uFE0F H\xECnh \u1EA3nh minh h\u1ECDa</option>\r
          <option value="EXTERNAL_LINK">\u{1F517} Li\xEAn k\u1EBFt ngo\xE0i</option>\r
        </select>\r
      </div>\r
\r
      <!-- \u0110\u01AF\u1EDCNG D\u1EAAN LI\xCAN K\u1EBET (n\u1EBFu sourceType === 'EXTERNAL') -->\r
      <div *ngIf="materialForm.get('sourceType')?.value === 'EXTERNAL'">\r
        <label class="block text-sm font-bold text-gray-700 mb-1.5">\u0110\u01B0\u1EDDng d\u1EABn li\xEAn k\u1EBFt (URL) <span class="text-red-500">*</span></label>\r
        <input formControlName="resourceUrl" type="url"\r
          class="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-2 focus:ring-emerald-100 focus:border-emerald-500 block w-full p-3 outline-none transition"\r
          placeholder="https://www.youtube.com/watch?v=...">\r
      </div>\r
\r
      <!-- CH\u1ECCN T\u1EC6P TIN (n\u1EBFu sourceType === 'MINIO') -->\r
      <div *ngIf="materialForm.get('sourceType')?.value === 'MINIO'" class="pt-1">\r
        <label class="block text-sm font-bold text-gray-700 mb-2">\r
          {{ isEditMaterialMode() ? 'Thay \u0111\u1ED5i t\u1EC7p \u0111\xEDnh k\xE8m (kh\xF4ng b\u1EAFt bu\u1ED9c)' : 'T\u1EC7p \u0111\xEDnh k\xE8m' }}\r
          <span *ngIf="!isEditMaterialMode()" class="text-red-500">*</span>\r
        </label>\r
        <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-2xl hover:border-blue-500 hover:bg-blue-50/50 transition-colors relative group"\r
             [ngClass]="{'border-blue-500 bg-blue-50/50': selectedFile()}">\r
          <div class="space-y-2 text-center">\r
            <div *ngIf="!selectedFile()" class="mx-auto w-10 h-10 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center">\r
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>\r
            </div>\r
            <div *ngIf="selectedFile()" class="mx-auto w-10 h-10 bg-green-50 text-green-600 rounded-full flex items-center justify-center">\r
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>\r
            </div>\r
            <div class="text-sm text-gray-600">\r
              <label class="relative cursor-pointer font-bold text-blue-600 hover:text-blue-700">\r
                <span>{{ selectedFile() ? selectedFile()?.name : 'Nh\u1EA5n \u0111\u1EC3 ch\u1ECDn t\u1EC7p tin t\u1EEB m\xE1y t\xEDnh' }}</span>\r
                <input type="file" class="sr-only" (change)="onFileSelected($event)">\r
              </label>\r
            </div>\r
            <p class="text-xs text-gray-500">H\u1ED7 tr\u1EE3 PDF, Word, PPT, MP4, MP3, H\xECnh \u1EA3nh (Max 50MB)</p>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Action buttons -->\r
      <div class="flex justify-end space-x-3 pt-5 border-t border-gray-100 mt-2">\r
        <button type="button" (click)="closeMaterialModal()"\r
          class="px-5 py-2.5 bg-white border border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 shadow-sm transition">\r
          H\u1EE7y b\u1ECF\r
        </button>\r
        <button type="submit" [disabled]="materialForm.invalid || isUploading()"\r
          class="px-6 py-2.5 bg-blue-600 text-white font-bold rounded-xl disabled:bg-blue-300 hover:bg-blue-700 shadow-md transition flex items-center">\r
          <svg *ngIf="isUploading()" class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">\r
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>\r
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>\r
          </svg>\r
          {{ isUploading() ? '\u0110ang l\u01B0u...' : (isEditMaterialMode() ? 'L\u01B0u c\u1EADp nh\u1EADt' : 'T\u1EA1o t\xE0i li\u1EC7u') }}\r
        </button>\r
      </div>\r
    </form>\r
  </div>\r
</div>\r
\r
<div *ngIf="isDeleteModalOpen()" class="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-0">\r
  <div class="absolute inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity" (click)="closeDeleteModal()"></div>\r
\r
  <div class="relative bg-white rounded-3xl shadow-2xl w-full max-w-md p-6 sm:p-8 text-center transform transition-all">\r
\r
    <div\r
      class="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-red-50 mb-6 border-4 border-red-100 shadow-sm">\r
      <svg class="h-10 w-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z">\r
        </path>\r
      </svg>\r
    </div>\r
\r
    <h3 class="text-2xl font-extrabold text-gray-900 mb-3 tracking-tight">X\xF3a b\xE0i t\u1EADp n\xE0y?</h3>\r
\r
    <p class="text-gray-500 text-sm leading-relaxed mb-6">\r
      B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a b\xE0i t\u1EADp n\xE0y kh\xF4ng? To\xE0n b\u1ED9 <strong>c\xE2u h\u1ECFi, c\u1EA5u h\xECnh v\xE0 b\xE0i l\xE0m c\u1EE7a h\u1ECDc sinh (n\u1EBFu\r
        c\xF3)</strong> s\u1EBD b\u1ECB x\xF3a v\u0129nh vi\u1EC5n v\xE0 kh\xF4ng th\u1EC3 kh\xF4i ph\u1EE5c.\r
    </p>\r
\r
    <div class="grid grid-cols-2 gap-4 mt-2">\r
      <button type="button" (click)="closeDeleteModal()"\r
        class="px-5 py-3 text-sm font-bold text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 shadow-sm transition">\r
        H\u1EE7y b\u1ECF\r
      </button>\r
      <button type="button" (click)="confirmDeleteAssignment()" [disabled]="isDeleting()"\r
        class="px-5 py-3 text-sm font-bold text-white bg-red-600 rounded-xl hover:bg-red-700 disabled:bg-red-300 shadow-md flex items-center justify-center transition">\r
        <svg *ngIf="isDeleting()" class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">\r
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>\r
          <path class="opacity-75" fill="currentColor"\r
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">\r
          </path>\r
        </svg>\r
        X\xF3a b\xE0i t\u1EADp\r
      </button>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- UNIFIED TH\xCAM / S\u1EECA B\xC0I T\u1EACP MODAL -->\r
<div *ngIf="isAssignmentModalOpen()" class="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-0">\r
  <div class="absolute inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity" (click)="closeAssignmentModal()"></div>\r
\r
  <div class="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden transform transition-all">\r
    <div class="bg-gradient-to-r from-indigo-600 to-purple-700 px-6 py-5 flex justify-between items-center">\r
      <div class="flex items-center text-white">\r
        <div class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3 backdrop-blur-md">\r
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>\r
          </svg>\r
        </div>\r
        <h3 class="text-xl font-extrabold tracking-wide">{{ isEditAssignmentMode() ? 'Ch\u1EC9nh s\u1EEDa b\xE0i t\u1EADp' : 'T\u1EA1o b\xE0i t\u1EADp m\u1EDBi' }}</h3>\r
      </div>\r
      <button (click)="closeAssignmentModal()" class="text-indigo-100 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition">\r
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>\r
        </svg>\r
      </button>\r
    </div>\r
\r
    <form [formGroup]="assignmentForm" (ngSubmit)="submitAssignmentForm()" class="p-6 sm:p-8 space-y-4">\r
      \r
      <!-- Ch\u1ECDn B\xE0i h\u1ECDc li\xEAn k\u1EBFt -->\r
      <div>\r
        <label class="block text-sm font-bold text-gray-700 mb-1.5">B\xE0i h\u1ECDc li\xEAn k\u1EBFt <span class="text-red-500">*</span></label>\r
        <select formControlName="lessonId"\r
          class="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500 block w-full p-3 outline-none transition cursor-pointer font-medium">\r
          <option [ngValue]="null" disabled>-- Ch\u1ECDn b\xE0i h\u1ECDc --</option>\r
          <option *ngFor="let les of lessons()" [value]="les.id">{{ les.name }}</option>\r
        </select>\r
      </div>\r
\r
      <!-- Ti\xEAu \u0111\u1EC1 b\xE0i t\u1EADp -->\r
      <div>\r
        <label class="block text-sm font-bold text-gray-700 mb-1.5">Ti\xEAu \u0111\u1EC1 b\xE0i t\u1EADp <span class="text-red-500">*</span></label>\r
        <input formControlName="title" type="text"\r
          class="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500 block w-full p-3 outline-none transition"\r
          placeholder="VD: B\xE0i t\u1EADp Tr\u1EAFc nghi\u1EC7m Unit 1 - Grammar">\r
      </div>\r
\r
      <!-- Ph\xE2n lo\u1EA1i b\xE0i t\u1EADp & Tr\u1EA1ng th\xE1i -->\r
      <div class="grid grid-cols-2 gap-4">\r
        <div>\r
          <label class="block text-sm font-bold text-gray-700 mb-1.5">Lo\u1EA1i b\xE0i t\u1EADp</label>\r
          <select formControlName="assignmentType"\r
            class="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500 block w-full p-3 outline-none transition cursor-pointer font-medium">\r
            <option value="HOMEWORK">\u{1F4DD} B\xE0i t\u1EADp v\u1EC1 nh\xE0</option>\r
            <option value="QUIZ">\u{1F4CB} B\xE0i ki\u1EC3m tra</option>\r
          </select>\r
        </div>\r
\r
        <div>\r
          <label class="block text-sm font-bold text-gray-700 mb-1.5">Tr\u1EA1ng th\xE1i</label>\r
          <select formControlName="status"\r
            class="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500 block w-full p-3 outline-none transition cursor-pointer font-medium">\r
            <option value="PUBLISHED">\u{1F7E2} Xu\u1EA5t b\u1EA3n ngay</option>\r
            <option value="UNPUBLISHED">\u{1F7E1} L\u01B0u b\u1EA3n nh\xE1p</option>\r
          </select>\r
        </div>\r
      </div>\r
\r
      <!-- H\u1EA1n n\u1ED9p b\xE0i -->\r
      <div>\r
        <label class="block text-sm font-bold text-gray-700 mb-1.5">H\u1EA1n n\u1ED9p b\xE0i <span class="text-red-500">*</span></label>\r
        <input formControlName="dueDate" type="datetime-local"\r
          class="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500 block w-full p-3 outline-none transition">\r
      </div>\r
\r
      <!-- Th\u1EDDi gian l\xE0m b\xE0i (Ph\xFAt) & S\u1ED1 l\u1EA7n l\xE0m t\u1ED1i \u0111a -->\r
      <div class="grid grid-cols-2 gap-4">\r
        <div>\r
          <label class="block text-sm font-bold text-gray-700 mb-1.5">Th\u1EDDi gian l\xE0m (ph\xFAt)</label>\r
          <input formControlName="timeLimitMinutes" type="number" min="0"\r
            class="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500 block w-full p-3 outline-none transition"\r
            placeholder="0 = Kh\xF4ng gi\u1EDBi h\u1EA1n">\r
        </div>\r
\r
        <div>\r
          <label class="block text-sm font-bold text-gray-700 mb-1.5">S\u1ED1 l\u1EA7n l\xE0m t\u1ED1i \u0111a</label>\r
          <input formControlName="maxAttempts" type="number" min="1"\r
            class="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500 block w-full p-3 outline-none transition"\r
            placeholder="1">\r
        </div>\r
      </div>\r
\r
      <!-- M\xF4 t\u1EA3 b\xE0i t\u1EADp -->\r
      <div>\r
        <label class="block text-sm font-bold text-gray-700 mb-1.5">M\xF4 t\u1EA3 / H\u01B0\u1EDBng d\u1EABn b\xE0i l\xE0m</label>\r
        <textarea formControlName="description" rows="2"\r
          class="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500 block w-full p-3 outline-none transition resize-none"\r
          placeholder="Nh\u1EADp h\u01B0\u1EDBng d\u1EABn ng\u1EAFn g\u1ECDn cho h\u1ECDc sinh..."></textarea>\r
      </div>\r
\r
      <!-- Action buttons -->\r
      <div class="flex justify-end space-x-3 pt-4 border-t border-gray-100 mt-2">\r
        <button type="button" (click)="closeAssignmentModal()"\r
          class="px-5 py-2.5 bg-white border border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 shadow-sm transition">\r
          H\u1EE7y b\u1ECF\r
        </button>\r
        <button type="submit" [disabled]="assignmentForm.invalid || isSavingAssignment()"\r
          class="px-6 py-2.5 bg-indigo-600 text-white font-bold rounded-xl disabled:bg-indigo-300 hover:bg-indigo-700 shadow-md transition flex items-center">\r
          <svg *ngIf="isSavingAssignment()" class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">\r
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>\r
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>\r
          </svg>\r
          {{ isSavingAssignment() ? '\u0110ang l\u01B0u...' : (isEditAssignmentMode() ? 'L\u01B0u c\u1EADp nh\u1EADt' : 'T\u1EA1o b\xE0i t\u1EADp') }}\r
        </button>\r
      </div>\r
    </form>\r
  </div>\r
</div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClassDetailComponent, { className: "ClassDetailComponent", filePath: "src/app/features/teacher/pages/class-detail/class-detail.component.ts", lineNumber: 18 });
})();

// src/app/features/teacher/pages/online-class/my-classes.component.ts
var _c02 = (a0) => ["/teacher/classes", a0];
function MyClassesComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 13);
    \u0275\u0275element(2, "circle", 14)(3, "path", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "p", 16);
    \u0275\u0275text(5, "\u0110ang t\u1EA3i kh\xF4ng gian l\u1EDBp h\u1ECDc...");
    \u0275\u0275elementEnd()();
  }
}
function MyClassesComponent_div_13_Template(rf, ctx) {
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
    \u0275\u0275text(7, "Hi\u1EC7n t\u1EA1i b\u1EA1n ch\u01B0a \u0111\u01B0\u1EE3c ph\xE2n c\xF4ng ho\u1EB7c kh\xF4ng t\xECm th\u1EA5y l\u1EDBp h\u1ECDc ph\xF9 h\u1EE3p.");
    \u0275\u0275elementEnd()();
  }
}
function MyClassesComponent_div_14_a_1_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 44);
    \u0275\u0275element(2, "path", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "div", 46);
    \u0275\u0275text(4, " B\u1EA1n \u0111ang ");
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6, "d\u1EA1y thay");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const cls_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" l\u1EDBp n\xE0y \u0111\u1EBFn h\u1EBFt ng\xE0y ", \u0275\u0275pipeBind2(8, 1, cls_r1.subEndDate, "dd/MM/yyyy"), ". ");
  }
}
function MyClassesComponent_div_14_a_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 25)(1, "div", 26);
    \u0275\u0275element(2, "div", 27)(3, "div", 28);
    \u0275\u0275elementStart(4, "div", 29)(5, "h2", 30);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 31);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 32)(10, "div", 33)(11, "div", 34);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(12, "svg", 35);
    \u0275\u0275element(13, "path", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, " M\xE3 l\u1EDBp: ");
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(15, "span", 37);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(17, MyClassesComponent_div_14_a_1_div_17_Template, 9, 4, "div", 38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 39)(19, "span", 40);
    \u0275\u0275text(20, " V\xE0o l\u1EDBp h\u1ECDc ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(21, "svg", 41);
    \u0275\u0275element(22, "path", 42);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const cls_r1 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(6, _c02, cls_r1.id));
    \u0275\u0275advance(5);
    \u0275\u0275property("title", cls_r1.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cls_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cls_r1.subjectName);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(cls_r1.code || cls_r1.physicalClassName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", cls_r1.isSubstituted);
  }
}
function MyClassesComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275template(1, MyClassesComponent_div_14_a_1_Template, 23, 8, "a", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.filteredClasses());
  }
}
var MyClassesComponent = class _MyClassesComponent {
  classService = inject(TeacherClassService);
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
  // Lọc danh sách lớp học trên Client
  filteredClasses = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();
    if (!query)
      return this.classes();
    return this.classes().filter((c) => c.name && c.name.toLowerCase().includes(query) || c.code && c.code.toLowerCase().includes(query) || c.subjectName && c.subjectName.toLowerCase().includes(query) || c.physicalClassName && c.physicalClassName.toLowerCase().includes(query));
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
        const rawList = Array.isArray(res) ? res : res.content || [];
        const formatted = rawList.map((item) => __spreadProps(__spreadValues({}, item), {
          subjectName: item.subjectName || item.courseName || "Ch\u01B0a x\u1EBFp m\xF4n",
          physicalClassName: item.physicalClassName || item.code || "L\u1EDBp h\u1ECDc ph\u1EA7n"
        }));
        this.classes.set(formatted);
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error("L\u1ED7i khi t\u1EA3i danh s\xE1ch l\u1EDBp h\u1ECDc:", err);
        this.isLoading.set(false);
      }
    });
  }
  cardPalettes = [
    // 1. Indigo (Màu gốc)
    { cardBg: "bg-indigo-50/50", border: "border-indigo-100", textPrimary: "text-indigo-900", textSecondary: "text-indigo-600", badge: "bg-indigo-100 text-indigo-700 border-indigo-200", button: "bg-indigo-600 text-white hover:bg-indigo-700" },
    // 2. Emerald (Xanh lá - Trẻ trung)
    { cardBg: "bg-emerald-50/50", border: "border-emerald-100", textPrimary: "text-emerald-900", textSecondary: "text-emerald-600", badge: "bg-emerald-100 text-emerald-700 border-emerald-200", button: "bg-emerald-600 text-white hover:bg-emerald-700" },
    // 3. Sky (Xanh dương - Tin cậy)
    { cardBg: "bg-sky-50/50", border: "border-sky-100", textPrimary: "text-sky-900", textSecondary: "text-sky-600", badge: "bg-sky-100 text-sky-700 border-sky-200", button: "bg-sky-600 text-white hover:bg-sky-700" },
    // 4. Amber (Vàng cam - Ấm áp)
    { cardBg: "bg-amber-50/50", border: "border-amber-100", textPrimary: "text-amber-900", textSecondary: "text-amber-600", badge: "bg-amber-100 text-amber-700 border-amber-200", button: "bg-amber-600 text-white hover:bg-amber-700" },
    // 5. Rose (Hồng đỏ - Cá tính)
    { cardBg: "bg-rose-50/50", border: "border-rose-100", textPrimary: "text-rose-900", textSecondary: "text-rose-600", badge: "bg-rose-100 text-rose-700 border-rose-200", button: "bg-rose-600 text-white hover:bg-rose-700" }
  ];
  // Hàm tính toán lấy màu dựa trên index
  getPalette(index) {
    return this.cardPalettes[index % this.cardPalettes.length];
  }
  static \u0275fac = function MyClassesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MyClassesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MyClassesComponent, selectors: [["app-my-classes"]], decls: 15, vars: 4, consts: [[1, "space-y-6", "max-w-7xl", "mx-auto"], [1, "flex", "flex-col", "sm:flex-row", "sm:justify-between", "sm:items-end", "pb-4", "border-b", "border-gray-100", "gap-4"], [1, "text-3xl", "font-extrabold", "text-gray-900", "tracking-tight"], [1, "text-sm", "text-gray-500", "mt-1"], [1, "relative", "w-full", "sm:w-72"], [1, "absolute", "inset-y-0", "left-0", "flex", "items-center", "pl-3", "pointer-events-none"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-gray-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], ["type", "text", "placeholder", "T\xECm m\xF4n h\u1ECDc, t\xEAn l\u1EDBp...", 1, "bg-white", "border", "border-gray-200", "text-gray-900", "text-sm", "rounded-xl", "focus:ring-2", "focus:ring-blue-100", "focus:border-blue-500", "block", "w-full", "pl-10", "p-3", "outline-none", "transition", "shadow-sm", 3, "ngModelChange", "ngModel"], ["class", "flex flex-col items-center justify-center py-20", 4, "ngIf"], ["class", "bg-gray-50 rounded-2xl border border-dashed border-gray-300 p-12 text-center", 4, "ngIf"], ["class", "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", 4, "ngIf"], [1, "flex", "flex-col", "items-center", "justify-center", "py-20"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-10", "w-10", "text-blue-500", "mb-4"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"], [1, "text-gray-500", "font-medium"], [1, "bg-gray-50", "rounded-2xl", "border", "border-dashed", "border-gray-300", "p-12", "text-center"], [1, "mx-auto", "w-20", "h-20", "bg-gray-100", "rounded-full", "flex", "items-center", "justify-center", "mb-4"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-10", "h-10", "text-gray-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"], [1, "text-lg", "font-bold", "text-gray-900", "mb-1"], [1, "text-gray-500", "text-sm"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3", "gap-6"], ["class", "group bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col cursor-pointer transform hover:-translate-y-1", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "group", "bg-white", "rounded-2xl", "border", "border-gray-200", "shadow-sm", "hover:shadow-xl", "transition-all", "duration-300", "overflow-hidden", "flex", "flex-col", "cursor-pointer", "transform", "hover:-translate-y-1", 3, "routerLink"], [1, "h-32", "bg-gradient-to-r", "from-blue-600", "to-indigo-700", "p-5", "relative", "overflow-hidden", "flex", "flex-col", "justify-end"], [1, "absolute", "-top-10", "-right-10", "w-32", "h-32", "bg-white", "opacity-10", "rounded-full", "blur-2xl"], [1, "absolute", "-bottom-10", "-left-10", "w-24", "h-24", "bg-white", "opacity-10", "rounded-full", "blur-xl"], [1, "relative", "z-10"], [1, "text-xl", "font-bold", "text-white", "line-clamp-1", 3, "title"], [1, "text-blue-100", "text-sm", "mt-1", "truncate"], [1, "p-5", "flex-1", "flex", "flex-col", "justify-between"], [1, "space-y-3"], [1, "flex", "items-center", "text-gray-600", "text-sm"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "mr-2.5", "text-gray-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"], [1, "font-semibold", "text-gray-900", "ml-1"], ["class", "flex items-start bg-amber-50 p-2.5 rounded-lg border border-amber-100", 4, "ngIf"], [1, "px-5", "py-4", "border-t", "border-gray-100", "bg-gray-50", "flex", "justify-end"], [1, "text-sm", "font-semibold", "text-blue-600", "group-hover:text-blue-800", "transition", "flex", "items-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "ml-1", "transform", "group-hover:translate-x-1", "transition"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 5l7 7-7 7"], [1, "flex", "items-start", "bg-amber-50", "p-2.5", "rounded-lg", "border", "border-amber-100"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "mr-2", "text-amber-500", "mt-0.5", "shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "text-xs", "text-amber-800"]], template: function MyClassesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "C\xE1c L\u1EDBp H\u1ECDc \u0110\u01B0\u1EE3c Ph\xE2n C\xF4ng");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Danh s\xE1ch c\xE1c l\u1EDBp h\u1ECDc ph\u1EA7n b\u1EA1n \u0111ang ph\u1EE5 tr\xE1ch gi\u1EA3ng d\u1EA1y");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 4)(8, "div", 5);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(9, "svg", 6);
      \u0275\u0275element(10, "path", 7);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(11, "input", 8);
      \u0275\u0275listener("ngModelChange", function MyClassesComponent_Template_input_ngModelChange_11_listener($event) {
        return ctx.searchQuery.set($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(12, MyClassesComponent_div_12_Template, 6, 0, "div", 9)(13, MyClassesComponent_div_13_Template, 8, 0, "div", 10)(14, MyClassesComponent_div_14_Template, 2, 1, "div", 11);
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
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyClassesComponent, [{
    type: Component,
    args: [{ selector: "app-my-classes", standalone: true, imports: [CommonModule, RouterModule, FormsModule], template: `<div class="space-y-6 max-w-7xl mx-auto">\r
  <div class="flex flex-col sm:flex-row sm:justify-between sm:items-end pb-4 border-b border-gray-100 gap-4">\r
    <div>\r
      <h1 class="text-3xl font-extrabold text-gray-900 tracking-tight">C\xE1c L\u1EDBp H\u1ECDc \u0110\u01B0\u1EE3c Ph\xE2n C\xF4ng</h1>\r
      <p class="text-sm text-gray-500 mt-1">Danh s\xE1ch c\xE1c l\u1EDBp h\u1ECDc ph\u1EA7n b\u1EA1n \u0111ang ph\u1EE5 tr\xE1ch gi\u1EA3ng d\u1EA1y</p>\r
    </div>\r
\r
    <div class="relative w-full sm:w-72">\r
      <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">\r
        <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>\r
      </div>\r
      <input type="text" [ngModel]="searchQuery()" (ngModelChange)="searchQuery.set($event)" placeholder="T\xECm m\xF4n h\u1ECDc, t\xEAn l\u1EDBp..." \r
             class="bg-white border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-500 block w-full pl-10 p-3 outline-none transition shadow-sm">\r
    </div>\r
  </div>\r
\r
  <div *ngIf="isLoading()" class="flex flex-col items-center justify-center py-20">\r
    <svg class="animate-spin h-10 w-10 text-blue-500 mb-4" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>\r
    <p class="text-gray-500 font-medium">\u0110ang t\u1EA3i kh\xF4ng gian l\u1EDBp h\u1ECDc...</p>\r
  </div>\r
\r
  <div *ngIf="!isLoading() && filteredClasses().length === 0" class="bg-gray-50 rounded-2xl border border-dashed border-gray-300 p-12 text-center">\r
    <div class="mx-auto w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">\r
      <svg class="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>\r
    </div>\r
    <h3 class="text-lg font-bold text-gray-900 mb-1">Ch\u01B0a c\xF3 l\u1EDBp h\u1ECDc n\xE0o</h3>\r
    <p class="text-gray-500 text-sm">Hi\u1EC7n t\u1EA1i b\u1EA1n ch\u01B0a \u0111\u01B0\u1EE3c ph\xE2n c\xF4ng ho\u1EB7c kh\xF4ng t\xECm th\u1EA5y l\u1EDBp h\u1ECDc ph\xF9 h\u1EE3p.</p>\r
  </div>\r
\r
  <div *ngIf="!isLoading() && filteredClasses().length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">\r
    <a *ngFor="let cls of filteredClasses()" [routerLink]="['/teacher/classes', cls.id]" \r
       class="group bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col cursor-pointer transform hover:-translate-y-1">\r
      \r
      <div class="h-32 bg-gradient-to-r from-blue-600 to-indigo-700 p-5 relative overflow-hidden flex flex-col justify-end">\r
        <div class="absolute -top-10 -right-10 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl"></div>\r
        <div class="absolute -bottom-10 -left-10 w-24 h-24 bg-white opacity-10 rounded-full blur-xl"></div>\r
        \r
        <div class="relative z-10">\r
          <h2 class="text-xl font-bold text-white line-clamp-1" [title]="cls.name">{{ cls.name }}</h2>\r
          <p class="text-blue-100 text-sm mt-1 truncate">{{ cls.subjectName }}</p>\r
        </div>\r
      </div>\r
\r
      <div class="p-5 flex-1 flex flex-col justify-between">\r
        <div class="space-y-3">\r
          <div class="flex items-center text-gray-600 text-sm">\r
            <svg class="w-4 h-4 mr-2.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>\r
            M\xE3 l\u1EDBp: <span class="font-semibold text-gray-900 ml-1">{{ cls.code || cls.physicalClassName }}</span>\r
          </div>\r
          \r
          <div *ngIf="cls.isSubstituted" class="flex items-start bg-amber-50 p-2.5 rounded-lg border border-amber-100">\r
             <svg class="w-4 h-4 mr-2 text-amber-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>\r
             <div class="text-xs text-amber-800">\r
               B\u1EA1n \u0111ang <strong>d\u1EA1y thay</strong> l\u1EDBp n\xE0y \u0111\u1EBFn h\u1EBFt ng\xE0y {{ cls.subEndDate | date:'dd/MM/yyyy' }}.\r
             </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div class="px-5 py-4 border-t border-gray-100 bg-gray-50 flex justify-end">\r
        <span class="text-sm font-semibold text-blue-600 group-hover:text-blue-800 transition flex items-center">\r
          V\xE0o l\u1EDBp h\u1ECDc\r
          <svg class="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>\r
        </span>\r
      </div>\r
    </a>\r
  </div>\r
</div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MyClassesComponent, { className: "MyClassesComponent", filePath: "src/app/features/teacher/pages/online-class/my-classes.component.ts", lineNumber: 13 });
})();

// src/app/features/teacher/layout/teacher-layout/teacher-layout.component.ts
function TeacherLayoutComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275listener("click", function TeacherLayoutComponent_div_31_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleSidebar());
    });
    \u0275\u0275elementEnd();
  }
}
var TeacherLayoutComponent = class _TeacherLayoutComponent {
  authService = inject(AuthService);
  router = inject(Router);
  // Lấy Họ tên/Email giáo viên từ AuthState
  teacherName = computed(() => this.authService.authState().fullName || this.authService.authState().email || "Gi\xE1o vi\xEAn", ...ngDevMode ? [{ debugName: "teacherName" }] : (
    /* istanbul ignore next */
    []
  ));
  // State đóng/mở sidebar trên mobile
  isSidebarOpen = signal(false, ...ngDevMode ? [{ debugName: "isSidebarOpen" }] : (
    /* istanbul ignore next */
    []
  ));
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
  static \u0275fac = function TeacherLayoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TeacherLayoutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TeacherLayoutComponent, selectors: [["app-teacher-layout"]], decls: 45, vars: 4, consts: [[1, "min-h-screen", "bg-gray-50", "flex", "font-sans", "text-gray-900"], [1, "fixed", "inset-y-0", "left-0", "z-50", "w-64", "bg-white", "border-r", "border-gray-100", "shadow-sm", "transform", "transition-transform", "duration-300", "ease-in-out", "lg:translate-x-0", "lg:static", "lg:flex-shrink-0", 3, "ngClass"], [1, "h-full", "flex", "flex-col"], [1, "header-logo", "h-16", "flex", "items-center", "px-6", "border-b", "border-gray-100"], ["src", "assets/Icon-Dai-hoc-CMC.png", "alt", "EduSystem Logo", 1, "w-8", "h-8", "object-contain", "mr-3"], [1, "text-xl", "font-extrabold", "text-gray-800", "tracking-tight"], [1, "px-6", "py-4", "border-b", "border-gray-50", "bg-indigo-50/30"], [1, "text-xs", "font-semibold", "text-indigo-600", "uppercase", "tracking-wider", "mb-0.5"], [1, "text-sm", "font-bold", "text-gray-900", "truncate", 3, "title"], [1, "flex-1", "px-3", "py-4", "space-y-1", "overflow-y-auto", "custom-scrollbar"], [1, "px-3", "pt-5", "pb-2"], [1, "text-xs", "font-semibold", "text-gray-400", "uppercase", "tracking-wider"], ["routerLink", "/teacher/my-classes", "routerLinkActive", "bg-indigo-50 text-indigo-700", 1, "flex", "items-center", "px-3", "py-2.5", "text-sm", "font-medium", "rounded-xl", "text-gray-600", "hover:bg-gray-50", "hover:text-gray-900", "transition", "group"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "mr-3", "text-gray-400", "group-hover:text-indigo-600", "transition"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"], ["routerLink", "/teacher/schedule", "routerLinkActive", "bg-indigo-50 text-indigo-700", 1, "flex", "items-center", "px-3", "py-2.5", "text-sm", "font-medium", "rounded-xl", "text-gray-600", "hover:bg-gray-50", "hover:text-gray-900", "transition", "group"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"], ["routerLink", "/teacher/profile", "routerLinkActive", "bg-indigo-50 text-indigo-700", 1, "flex", "items-center", "px-3", "py-2.5", "text-sm", "font-medium", "rounded-xl", "text-gray-600", "hover:bg-gray-50", "hover:text-gray-900", "transition", "group"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"], ["class", "fixed inset-0 bg-gray-900/50 z-40 lg:hidden backdrop-blur-sm", 3, "click", 4, "ngIf"], [1, "flex-1", "flex", "flex-col", "min-w-0", "h-screen", "overflow-hidden"], [1, "h-16", "bg-white", "border-b", "border-gray-100", "flex", "items-center", "justify-between", "px-4", "sm:px-6", "lg:px-8", "shrink-0", "shadow-sm", "z-10"], [1, "lg:hidden", "p-2", "rounded-md", "text-gray-400", "hover:text-gray-500", "hover:bg-gray-100", "focus:outline-none", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "h-6", "w-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 6h16M4 12h16M4 18h7"], [1, "hidden", "lg:block", "flex-1"], [1, "flex", "items-center", "space-x-4"], [1, "flex", "items-center", "text-sm", "font-medium", "text-red-600", "hover:text-red-800", "bg-red-50", "hover:bg-red-100", "px-3", "py-1.5", "rounded-lg", "transition", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "mr-1.5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"], [1, "flex-1", "overflow-auto", "bg-gray-50/50", "p-4", "sm:p-6", "lg:p-8", "relative"], [1, "fixed", "inset-0", "bg-gray-900/50", "z-40", "lg:hidden", "backdrop-blur-sm", 3, "click"]], template: function TeacherLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "aside", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275element(4, "img", 4);
      \u0275\u0275elementStart(5, "span", 5);
      \u0275\u0275text(6, "EduSystem");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 6)(8, "p", 7);
      \u0275\u0275text(9, "C\u1ED5ng Gi\xE1o Vi\xEAn");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "p", 8);
      \u0275\u0275text(11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "nav", 9)(13, "div", 10)(14, "p", 11);
      \u0275\u0275text(15, "Gi\u1EA3ng d\u1EA1y");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "a", 12);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(17, "svg", 13);
      \u0275\u0275element(18, "path", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275text(19, " L\u1EDBp h\u1ECDc c\u1EE7a t\xF4i ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(20, "a", 15);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(21, "svg", 13);
      \u0275\u0275element(22, "path", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275text(23, " L\u1ECBch d\u1EA1y h\u1ECDc ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(24, "div", 10)(25, "p", 11);
      \u0275\u0275text(26, "C\xE1 nh\xE2n");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "a", 17);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(28, "svg", 13);
      \u0275\u0275element(29, "path", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275text(30, " H\u1ED3 s\u01A1 c\xE1 nh\xE2n ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(31, TeacherLayoutComponent_div_31_Template, 1, 0, "div", 19);
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(32, "main", 20)(33, "header", 21)(34, "button", 22);
      \u0275\u0275listener("click", function TeacherLayoutComponent_Template_button_click_34_listener() {
        return ctx.toggleSidebar();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(35, "svg", 23);
      \u0275\u0275element(36, "path", 24);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275element(37, "div", 25);
      \u0275\u0275elementStart(38, "div", 26)(39, "button", 27);
      \u0275\u0275listener("click", function TeacherLayoutComponent_Template_button_click_39_listener() {
        return ctx.logout();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(40, "svg", 28);
      \u0275\u0275element(41, "path", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275text(42, " \u0110\u0103ng xu\u1EA5t ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(43, "div", 30);
      \u0275\u0275element(44, "router-outlet");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.isSidebarOpen() ? "translate-x-0" : "-translate-x-full");
      \u0275\u0275advance(9);
      \u0275\u0275property("title", ctx.teacherName());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.teacherName());
      \u0275\u0275advance(20);
      \u0275\u0275property("ngIf", ctx.isSidebarOpen());
    }
  }, dependencies: [CommonModule, NgClass, NgIf, RouterModule, RouterOutlet, RouterLink, RouterLinkActive], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TeacherLayoutComponent, [{
    type: Component,
    args: [{ selector: "app-teacher-layout", standalone: true, imports: [CommonModule, RouterModule], template: `<div class="min-h-screen bg-gray-50 flex font-sans text-gray-900">\r
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
        <p class="text-xs font-semibold text-indigo-600 uppercase tracking-wider mb-0.5">C\u1ED5ng Gi\xE1o Vi\xEAn</p>\r
        <p class="text-sm font-bold text-gray-900 truncate" [title]="teacherName()">{{ teacherName() }}</p>\r
      </div>\r
\r
      <nav class="flex-1 px-3 py-4 space-y-1 overflow-y-auto custom-scrollbar">\r
\r
\r
\r
        <div class="px-3 pt-5 pb-2">\r
          <p class="text-xs font-semibold text-gray-400 uppercase tracking-wider">Gi\u1EA3ng d\u1EA1y</p>\r
        </div>\r
\r
        <a routerLink="/teacher/my-classes" routerLinkActive="bg-indigo-50 text-indigo-700"\r
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
        <a routerLink="/teacher/schedule" routerLinkActive="bg-indigo-50 text-indigo-700"\r
          class="flex items-center px-3 py-2.5 text-sm font-medium rounded-xl text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition group">\r
          <svg class="w-5 h-5 mr-3 text-gray-400 group-hover:text-indigo-600 transition" fill="none"\r
            stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z">\r
            </path>\r
          </svg>\r
          L\u1ECBch d\u1EA1y h\u1ECDc\r
        </a>\r
\r
        <div class="px-3 pt-5 pb-2">\r
          <p class="text-xs font-semibold text-gray-400 uppercase tracking-wider">C\xE1 nh\xE2n</p>\r
        </div>\r
\r
        <a routerLink="/teacher/profile" routerLinkActive="bg-indigo-50 text-indigo-700"\r
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TeacherLayoutComponent, { className: "TeacherLayoutComponent", filePath: "src/app/features/teacher/layout/teacher-layout/teacher-layout.component.ts", lineNumber: 12 });
})();

// src/app/features/teacher/pages/assignment/assignment-form.component.ts
function AssignmentFormComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 11);
    \u0275\u0275element(2, "circle", 12)(3, "path", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "p", 14);
    \u0275\u0275text(5, "\u0110ang n\u1EA1p th\xF4ng tin b\xE0i t\u1EADp...");
    \u0275\u0275elementEnd()();
  }
}
function AssignmentFormComponent_form_12_option_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const les_r3 = ctx.$implicit;
    \u0275\u0275property("value", les_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(les_r3.name);
  }
}
function AssignmentFormComponent_form_12__svg_svg_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 49);
    \u0275\u0275element(1, "circle", 12)(2, "path", 13);
    \u0275\u0275elementEnd();
  }
}
function AssignmentFormComponent_form_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 15);
    \u0275\u0275listener("ngSubmit", function AssignmentFormComponent_form_12_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(1, "div", 16)(2, "div", 17)(3, "h3", 18);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 19);
    \u0275\u0275element(5, "path", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " Th\xF4ng tin ch\xEDnh ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "div")(8, "label", 21);
    \u0275\u0275text(9, "B\xE0i h\u1ECDc li\xEAn k\u1EBFt ");
    \u0275\u0275elementStart(10, "span", 22);
    \u0275\u0275text(11, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "select", 23)(13, "option", 24);
    \u0275\u0275text(14, "-- Ch\u1ECDn b\xE0i h\u1ECDc cho b\xE0i t\u1EADp n\xE0y --");
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, AssignmentFormComponent_form_12_option_15_Template, 2, 2, "option", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div")(17, "label", 21);
    \u0275\u0275text(18, "Ti\xEAu \u0111\u1EC1 b\xE0i t\u1EADp ");
    \u0275\u0275elementStart(19, "span", 22);
    \u0275\u0275text(20, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(21, "input", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div")(23, "label", 27);
    \u0275\u0275text(24, "Lo\u1EA1i b\xE0i t\u1EADp ");
    \u0275\u0275elementStart(25, "span", 22);
    \u0275\u0275text(26, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 28)(28, "label", 29);
    \u0275\u0275element(29, "input", 30);
    \u0275\u0275elementStart(30, "span", 31);
    \u0275\u0275text(31, "\u{1F4DD}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 32);
    \u0275\u0275text(33, "B\xE0i t\u1EADp v\u1EC1 nh\xE0");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "label", 29);
    \u0275\u0275element(35, "input", 33);
    \u0275\u0275elementStart(36, "span", 31);
    \u0275\u0275text(37, "\u{1F4CB}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "span", 32);
    \u0275\u0275text(39, "B\xE0i ki\u1EC3m tra");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(40, "div")(41, "label", 21);
    \u0275\u0275text(42, "Ghi ch\xFA & H\u01B0\u1EDBng d\u1EABn cho h\u1ECDc sinh");
    \u0275\u0275elementEnd();
    \u0275\u0275element(43, "textarea", 34);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(44, "div", 35)(45, "div", 17)(46, "h3", 18);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(47, "svg", 19);
    \u0275\u0275element(48, "path", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275text(49, " C\u1EA5u h\xECnh th\u1EDDi gian ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(50, "div")(51, "label", 21);
    \u0275\u0275text(52, "H\u1EA1n n\u1ED9p b\xE0i ");
    \u0275\u0275elementStart(53, "span", 22);
    \u0275\u0275text(54, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(55, "input", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "div")(57, "label", 21);
    \u0275\u0275text(58, "Th\u1EDDi gian l\xE0m b\xE0i (Ph\xFAt)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(59, "input", 38);
    \u0275\u0275elementStart(60, "p", 39);
    \u0275\u0275text(61, "\u0110\u1ED3ng h\u1ED3 \u0111\u1EBFm ng\u01B0\u1EE3c s\u1EBD ch\u1EA1y khi h\u1ECDc sinh b\u1EAFt \u0111\u1EA7u l\xE0m b\xE0i.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "div")(63, "label", 21);
    \u0275\u0275text(64, "S\u1ED1 l\u1EA7n l\xE0m t\u1ED1i \u0111a");
    \u0275\u0275elementEnd();
    \u0275\u0275element(65, "input", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "div")(67, "label", 21);
    \u0275\u0275text(68, "Tr\u1EA1ng th\xE1i ph\xE1t h\xE0nh");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "select", 41)(70, "option", 42);
    \u0275\u0275text(71, "\u{1F7E2} \u0110\xE3 xu\u1EA5t b\u1EA3n (H\u1ECDc sinh c\xF3 th\u1EC3 th\u1EA5y)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "option", 43);
    \u0275\u0275text(73, "\u{1F7E1} L\u01B0u nh\xE1p (\u1EA8n v\u1EDBi h\u1ECDc sinh)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(74, "div", 44)(75, "button", 45);
    \u0275\u0275template(76, AssignmentFormComponent_form_12__svg_svg_76_Template, 3, 0, "svg", 46);
    \u0275\u0275text(77);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "button", 47);
    \u0275\u0275listener("click", function AssignmentFormComponent_form_12_Template_button_click_78_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.router.navigate(["/teacher/classes", ctx_r1.classId()]));
    });
    \u0275\u0275text(79, " H\u1EE7y b\u1ECF ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.assignmentForm);
    \u0275\u0275advance(13);
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.lessons());
    \u0275\u0275advance(13);
    \u0275\u0275property("ngClass", ((tmp_4_0 = ctx_r1.assignmentForm.get("assignmentType")) == null ? null : tmp_4_0.value) === "HOMEWORK" ? "bg-indigo-50 border-indigo-500 text-indigo-700 font-bold" : "bg-gray-50 border-gray-200 text-gray-600");
    \u0275\u0275advance(6);
    \u0275\u0275property("ngClass", ((tmp_5_0 = ctx_r1.assignmentForm.get("assignmentType")) == null ? null : tmp_5_0.value) === "QUIZ" ? "bg-purple-50 border-purple-500 text-purple-700 font-bold" : "bg-gray-50 border-gray-200 text-gray-600");
    \u0275\u0275advance(35);
    \u0275\u0275property("ngClass", ((tmp_6_0 = ctx_r1.assignmentForm.get("status")) == null ? null : tmp_6_0.value) === "PUBLISHED" ? "text-green-700 bg-green-50/50" : "text-gray-600");
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r1.assignmentForm.invalid || ctx_r1.isSubmitting());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isSubmitting());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isSubmitting() ? "\u0110ang l\u01B0u..." : ctx_r1.isEditMode() ? "L\u01B0u c\u1EADp nh\u1EADt" : "T\u1EA1o b\xE0i t\u1EADp & So\u1EA1n c\xE2u h\u1ECFi", " ");
  }
}
var AssignmentFormComponent = class _AssignmentFormComponent {
  fb = inject(FormBuilder);
  assignmentService = inject(AssignmentService);
  materialService = inject(LearningMaterialService);
  toastService = inject(ToastService);
  router = inject(Router);
  route = inject(ActivatedRoute);
  assignmentForm;
  classId = signal(null, ...ngDevMode ? [{ debugName: "classId" }] : (
    /* istanbul ignore next */
    []
  ));
  assignmentId = signal(null, ...ngDevMode ? [{ debugName: "assignmentId" }] : (
    /* istanbul ignore next */
    []
  ));
  lessons = signal([], ...ngDevMode ? [{ debugName: "lessons" }] : (
    /* istanbul ignore next */
    []
  ));
  isEditMode = signal(false, ...ngDevMode ? [{ debugName: "isEditMode" }] : (
    /* istanbul ignore next */
    []
  ));
  isSubmitting = signal(false, ...ngDevMode ? [{ debugName: "isSubmitting" }] : (
    /* istanbul ignore next */
    []
  ));
  isLoadingData = signal(false, ...ngDevMode ? [{ debugName: "isLoadingData" }] : (
    /* istanbul ignore next */
    []
  ));
  ngOnInit() {
    this.initForm();
    this.route.paramMap.subscribe((params) => {
      const id = params.get("id");
      if (id) {
        this.isEditMode.set(true);
        this.assignmentId.set(id);
        this.loadExistingAssignment(id);
      } else {
        this.route.queryParamMap.subscribe((qParams) => {
          const cid = qParams.get("classId");
          const lid = qParams.get("lessonId");
          if (cid) {
            this.classId.set(cid);
            this.loadLessons(cid, lid ? Number(lid) : void 0);
          } else {
            this.toastService.error("L\u1ED7i", "Kh\xF4ng x\xE1c \u0111\u1ECBnh \u0111\u01B0\u1EE3c L\u1EDBp h\u1ECDc!");
            this.router.navigate(["/teacher/my-classes"]);
          }
        });
      }
    });
  }
  initForm() {
    this.assignmentForm = this.fb.group({
      lessonId: [null, Validators.required],
      title: ["", Validators.required],
      assignmentType: ["HOMEWORK", Validators.required],
      dueDate: [this.getDefaultDueDate(), Validators.required],
      timeLimitMinutes: [0, [Validators.min(0)]],
      maxAttempts: [1, [Validators.min(1)]],
      description: [""],
      status: ["PUBLISHED", Validators.required]
    });
  }
  loadLessons(classId, preselectedLessonId) {
    this.materialService.getLessonsByClassId(classId).subscribe({
      next: (res) => {
        this.lessons.set(res || []);
        if (preselectedLessonId) {
          this.assignmentForm.patchValue({ lessonId: preselectedLessonId });
        } else if (res && res.length > 0 && !this.assignmentForm.get("lessonId")?.value) {
          this.assignmentForm.patchValue({ lessonId: res[0].id });
        }
      },
      error: (err) => console.error("L\u1ED7i khi t\u1EA3i b\xE0i h\u1ECDc:", err)
    });
  }
  loadExistingAssignment(id) {
    this.isLoadingData.set(true);
    this.assignmentService.getAssignmentById(id).subscribe({
      next: (res) => {
        if (res.classId) {
          this.classId.set(res.classId.toString());
          this.loadLessons(res.classId.toString(), res.lessonId);
        }
        this.assignmentForm.patchValue({
          lessonId: res.lessonId,
          title: res.title,
          assignmentType: res.assignmentType || "HOMEWORK",
          dueDate: this.formatToDateTimeLocal(res.dueDate),
          timeLimitMinutes: res.timeLimitMinutes || 0,
          maxAttempts: res.maxAttempts || 1,
          description: res.description || "",
          status: res.status || "PUBLISHED"
        });
        this.isLoadingData.set(false);
      },
      error: () => {
        this.toastService.error("L\u1ED7i", "Kh\xF4ng th\u1EC3 t\u1EA3i th\xF4ng tin b\xE0i t\u1EADp!");
        this.router.navigate(["/teacher/my-classes"]);
      }
    });
  }
  getDefaultDueDate() {
    const nextWeek = /* @__PURE__ */ new Date();
    nextWeek.setDate(nextWeek.getDate() + 7);
    nextWeek.setHours(23, 59, 0, 0);
    return nextWeek.toISOString().slice(0, 16);
  }
  formatToDateTimeLocal(dateStr) {
    if (!dateStr)
      return this.getDefaultDueDate();
    return dateStr.replace(" ", "T").substring(0, 16);
  }
  formatDateTimeForBackend(datetimeLocal) {
    if (!datetimeLocal)
      return "";
    return datetimeLocal.replace("T", " ") + ":00";
  }
  onSubmit() {
    if (this.assignmentForm.invalid) {
      this.assignmentForm.markAllAsTouched();
      return;
    }
    this.isSubmitting.set(true);
    const val = this.assignmentForm.value;
    const payload = __spreadProps(__spreadValues({}, val), {
      lessonId: Number(val.lessonId),
      dueDate: this.formatDateTimeForBackend(val.dueDate)
    });
    if (this.isEditMode()) {
      this.assignmentService.updateAssignment(this.assignmentId(), payload).subscribe({
        next: () => {
          this.toastService.success("Th\xE0nh c\xF4ng", "\u0110\xE3 c\u1EADp nh\u1EADt b\xE0i t\u1EADp!");
          this.isSubmitting.set(false);
          this.router.navigate(["/teacher/assignments", this.assignmentId()]);
        },
        error: (err) => {
          this.toastService.error("L\u1ED7i", err.error?.message || "C\u1EADp nh\u1EADt b\xE0i t\u1EADp th\u1EA5t b\u1EA1i");
          this.isSubmitting.set(false);
        }
      });
    } else {
      this.assignmentService.createAssignment(payload).subscribe({
        next: (res) => {
          this.toastService.success("Th\xE0nh c\xF4ng", "\u0110\xE3 t\u1EA1o b\xE0i t\u1EADp m\u1EDBi!");
          this.isSubmitting.set(false);
          const createdId = res?.data?.id || res?.id;
          if (createdId) {
            this.router.navigate(["/teacher/assignments", createdId]);
          } else if (this.classId()) {
            this.router.navigate(["/teacher/classes", this.classId()]);
          }
        },
        error: (err) => {
          this.toastService.error("L\u1ED7i", err.error?.message || "T\u1EA1o b\xE0i t\u1EADp th\u1EA5t b\u1EA1i");
          this.isSubmitting.set(false);
        }
      });
    }
  }
  static \u0275fac = function AssignmentFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AssignmentFormComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssignmentFormComponent, selectors: [["app-assignment-form"]], decls: 13, vars: 3, consts: [[1, "p-6", "max-w-5xl", "mx-auto", "space-y-6"], [1, "flex", "items-center", "justify-between"], [1, "flex", "items-center", "space-x-4"], [1, "p-2.5", "rounded-xl", "bg-white", "border", "border-gray-200", "text-gray-600", "hover:text-indigo-600", "hover:bg-indigo-50", "transition", "shadow-xs", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M10 19l-7-7m0 0l7-7m-7 7h18"], [1, "text-2xl", "font-black", "text-gray-900", "tracking-tight"], [1, "text-sm", "text-gray-500", "mt-0.5"], ["class", "py-16 text-center text-indigo-600", 4, "ngIf"], ["class", "grid grid-cols-1 lg:grid-cols-3 gap-6", 3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "py-16", "text-center", "text-indigo-600"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-10", "w-10", "mx-auto"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"], [1, "text-sm", "font-semibold", "mt-3"], [1, "grid", "grid-cols-1", "lg:grid-cols-3", "gap-6", 3, "ngSubmit", "formGroup"], [1, "lg:col-span-2", "space-y-6"], [1, "bg-white", "rounded-3xl", "p-6", "sm:p-8", "shadow-sm", "border", "border-gray-100", "space-y-5"], [1, "text-lg", "font-bold", "text-gray-900", "border-b", "border-gray-100", "pb-3", "flex", "items-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "mr-2", "text-indigo-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"], [1, "block", "text-sm", "font-bold", "text-gray-700", "mb-1.5"], [1, "text-red-500"], ["formControlName", "lessonId", 1, "bg-gray-50", "border", "border-gray-200", "text-gray-900", "text-sm", "rounded-xl", "focus:ring-2", "focus:ring-indigo-100", "focus:border-indigo-500", "block", "w-full", "p-3.5", "outline-none", "transition", "cursor-pointer", "font-semibold"], ["disabled", "", 3, "ngValue"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "title", "type", "text", "placeholder", "VD: B\xE0i t\u1EADp Tr\u1EAFc nghi\u1EC7m Ki\u1EC3m tra gi\u1EEFa k\u1EF3 - Grammar & Vocabulary", 1, "bg-gray-50", "border", "border-gray-200", "text-gray-900", "text-sm", "rounded-xl", "focus:ring-2", "focus:ring-indigo-100", "focus:border-indigo-500", "block", "w-full", "p-3.5", "outline-none", "transition", "font-medium"], [1, "block", "text-sm", "font-bold", "text-gray-700", "mb-2"], [1, "grid", "grid-cols-2", "gap-3"], [1, "flex", "flex-col", "items-center", "justify-center", "p-3.5", "rounded-2xl", "border", "cursor-pointer", "transition", "text-center", 3, "ngClass"], ["type", "radio", "formControlName", "assignmentType", "value", "HOMEWORK", 1, "sr-only"], [1, "text-2xl", "mb-1"], [1, "text-xs", "font-bold"], ["type", "radio", "formControlName", "assignmentType", "value", "QUIZ", 1, "sr-only"], ["formControlName", "description", "rows", "4", "placeholder", "Nh\u1EADp y\xEAu c\u1EA7u chi ti\u1EBFt ho\u1EB7c l\u01B0u \xFD b\xE0i l\xE0m...", 1, "bg-gray-50", "border", "border-gray-200", "text-gray-900", "text-sm", "rounded-xl", "focus:ring-2", "focus:ring-indigo-100", "focus:border-indigo-500", "block", "w-full", "p-3.5", "outline-none", "transition", "resize-none"], [1, "space-y-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"], ["formControlName", "dueDate", "type", "datetime-local", 1, "bg-gray-50", "border", "border-gray-200", "text-gray-900", "text-sm", "rounded-xl", "focus:ring-2", "focus:ring-indigo-100", "focus:border-indigo-500", "block", "w-full", "p-3", "outline-none", "transition", "font-medium"], ["formControlName", "timeLimitMinutes", "type", "number", "min", "0", "placeholder", "0 = Kh\xF4ng gi\u1EDBi h\u1EA1n th\u1EDDi gian", 1, "bg-gray-50", "border", "border-gray-200", "text-gray-900", "text-sm", "rounded-xl", "focus:ring-2", "focus:ring-indigo-100", "focus:border-indigo-500", "block", "w-full", "p-3", "outline-none", "transition", "font-medium"], [1, "text-xs", "text-gray-400", "mt-1"], ["formControlName", "maxAttempts", "type", "number", "min", "1", "placeholder", "1", 1, "bg-gray-50", "border", "border-gray-200", "text-gray-900", "text-sm", "rounded-xl", "focus:ring-2", "focus:ring-indigo-100", "focus:border-indigo-500", "block", "w-full", "p-3", "outline-none", "transition", "font-medium"], ["formControlName", "status", 1, "bg-gray-50", "border", "border-gray-200", "text-gray-900", "text-sm", "rounded-xl", "focus:ring-2", "focus:ring-indigo-100", "focus:border-indigo-500", "block", "w-full", "p-3", "outline-none", "transition", "cursor-pointer", "font-bold", 3, "ngClass"], ["value", "PUBLISHED"], ["value", "UNPUBLISHED"], [1, "pt-4", "border-t", "border-gray-100", "flex", "flex-col", "space-y-3"], ["type", "submit", 1, "w-full", "py-3.5", "bg-indigo-600", "text-white", "font-bold", "text-base", "rounded-2xl", "hover:bg-indigo-700", "disabled:bg-indigo-300", "shadow-md", "transition", "flex", "items-center", "justify-center", 3, "disabled"], ["class", "animate-spin -ml-1 mr-2 h-5 w-5 text-white", "fill", "none", "viewBox", "0 0 24 24", 4, "ngIf"], ["type", "button", 1, "w-full", "py-3", "bg-gray-100", "text-gray-700", "font-semibold", "rounded-2xl", "hover:bg-gray-200", "transition", "text-center", 3, "click"], [3, "value"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "-ml-1", "mr-2", "h-5", "w-5", "text-white"]], template: function AssignmentFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
      \u0275\u0275listener("click", function AssignmentFormComponent_Template_button_click_3_listener() {
        return ctx.router.navigate(["/teacher/classes", ctx.classId()]);
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(4, "svg", 4);
      \u0275\u0275element(5, "path", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(6, "div")(7, "h2", 6);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 7);
      \u0275\u0275text(10, "So\u1EA1n th\u1EA3o b\xE0i t\u1EADp v\xE0 c\u1EA5u h\xECnh th\u1EDDi gian l\xE0m b\xE0i cho l\u1EDBp h\u1ECDc");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(11, AssignmentFormComponent_div_11_Template, 6, 0, "div", 8)(12, AssignmentFormComponent_form_12_Template, 80, 9, "form", 9);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate1(" ", ctx.isEditMode() ? "Ch\u1EC9nh s\u1EEDa b\xE0i t\u1EADp" : "T\u1EA1o m\u1EDBi b\xE0i t\u1EADp", " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.isLoadingData());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoadingData());
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormGroupDirective, FormControlName, RouterModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssignmentFormComponent, [{
    type: Component,
    args: [{ selector: "app-assignment-form", standalone: true, imports: [CommonModule, ReactiveFormsModule, RouterModule], template: `<div class="p-6 max-w-5xl mx-auto space-y-6">
  <!-- Header & Back Button -->
  <div class="flex items-center justify-between">
    <div class="flex items-center space-x-4">
      <button (click)="router.navigate(['/teacher/classes', classId()])"
        class="p-2.5 rounded-xl bg-white border border-gray-200 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 transition shadow-xs">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
        </svg>
      </button>
      <div>
        <h2 class="text-2xl font-black text-gray-900 tracking-tight">
          {{ isEditMode() ? 'Ch\u1EC9nh s\u1EEDa b\xE0i t\u1EADp' : 'T\u1EA1o m\u1EDBi b\xE0i t\u1EADp' }}
        </h2>
        <p class="text-sm text-gray-500 mt-0.5">So\u1EA1n th\u1EA3o b\xE0i t\u1EADp v\xE0 c\u1EA5u h\xECnh th\u1EDDi gian l\xE0m b\xE0i cho l\u1EDBp h\u1ECDc</p>
      </div>
    </div>
  </div>

  <div *ngIf="isLoadingData()" class="py-16 text-center text-indigo-600">
    <svg class="animate-spin h-10 w-10 mx-auto" fill="none" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
    <p class="text-sm font-semibold mt-3">\u0110ang n\u1EA1p th\xF4ng tin b\xE0i t\u1EADp...</p>
  </div>

  <form *ngIf="!isLoadingData()" [formGroup]="assignmentForm" (ngSubmit)="onSubmit()" class="grid grid-cols-1 lg:grid-cols-3 gap-6">
    
    <!-- C\u1ED9t b\xEAn tr\xE1i: N\u1ED9i dung b\xE0i t\u1EADp (2 cols) -->
    <div class="lg:col-span-2 space-y-6">
      <div class="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 space-y-5">
        <h3 class="text-lg font-bold text-gray-900 border-b border-gray-100 pb-3 flex items-center">
          <svg class="w-5 h-5 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
          </svg> Th\xF4ng tin ch\xEDnh
        </h3>

        <!-- B\xE0i h\u1ECDc li\xEAn k\u1EBFt -->
        <div>
          <label class="block text-sm font-bold text-gray-700 mb-1.5">B\xE0i h\u1ECDc li\xEAn k\u1EBFt <span class="text-red-500">*</span></label>
          <select formControlName="lessonId"
            class="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500 block w-full p-3.5 outline-none transition cursor-pointer font-semibold">
            <option [ngValue]="null" disabled>-- Ch\u1ECDn b\xE0i h\u1ECDc cho b\xE0i t\u1EADp n\xE0y --</option>
            <option *ngFor="let les of lessons()" [value]="les.id">{{ les.name }}</option>
          </select>
        </div>

        <!-- Ti\xEAu \u0111\u1EC1 b\xE0i t\u1EADp -->
        <div>
          <label class="block text-sm font-bold text-gray-700 mb-1.5">Ti\xEAu \u0111\u1EC1 b\xE0i t\u1EADp <span class="text-red-500">*</span></label>
          <input formControlName="title" type="text"
            class="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500 block w-full p-3.5 outline-none transition font-medium"
            placeholder="VD: B\xE0i t\u1EADp Tr\u1EAFc nghi\u1EC7m Ki\u1EC3m tra gi\u1EEFa k\u1EF3 - Grammar & Vocabulary">
        </div>

        <!-- Ph\xE2n lo\u1EA1i b\xE0i t\u1EADp -->
        <div>
          <label class="block text-sm font-bold text-gray-700 mb-2">Lo\u1EA1i b\xE0i t\u1EADp <span class="text-red-500">*</span></label>
          <div class="grid grid-cols-2 gap-3">
            <label class="flex flex-col items-center justify-center p-3.5 rounded-2xl border cursor-pointer transition text-center"
                   [ngClass]="assignmentForm.get('assignmentType')?.value === 'HOMEWORK' ? 'bg-indigo-50 border-indigo-500 text-indigo-700 font-bold' : 'bg-gray-50 border-gray-200 text-gray-600'">
              <input type="radio" formControlName="assignmentType" value="HOMEWORK" class="sr-only">
              <span class="text-2xl mb-1">\u{1F4DD}</span>
              <span class="text-xs font-bold">B\xE0i t\u1EADp v\u1EC1 nh\xE0</span>
            </label>
            <label class="flex flex-col items-center justify-center p-3.5 rounded-2xl border cursor-pointer transition text-center"
                   [ngClass]="assignmentForm.get('assignmentType')?.value === 'QUIZ' ? 'bg-purple-50 border-purple-500 text-purple-700 font-bold' : 'bg-gray-50 border-gray-200 text-gray-600'">
              <input type="radio" formControlName="assignmentType" value="QUIZ" class="sr-only">
              <span class="text-2xl mb-1">\u{1F4CB}</span>
              <span class="text-xs font-bold">B\xE0i ki\u1EC3m tra</span>
            </label>
          </div>
        </div>

        <!-- M\xF4 t\u1EA3 / H\u01B0\u1EDBng d\u1EABn -->
        <div>
          <label class="block text-sm font-bold text-gray-700 mb-1.5">Ghi ch\xFA & H\u01B0\u1EDBng d\u1EABn cho h\u1ECDc sinh</label>
          <textarea formControlName="description" rows="4"
            class="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500 block w-full p-3.5 outline-none transition resize-none"
            placeholder="Nh\u1EADp y\xEAu c\u1EA7u chi ti\u1EBFt ho\u1EB7c l\u01B0u \xFD b\xE0i l\xE0m..."></textarea>
        </div>
      </div>
    </div>

    <!-- C\u1ED9t b\xEAn ph\u1EA3i: C\u1EA5u h\xECnh n\u1ED9p & Tr\u1EA1ng th\xE1i (1 col) -->
    <div class="space-y-6">
      <div class="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 space-y-5">
        <h3 class="text-lg font-bold text-gray-900 border-b border-gray-100 pb-3 flex items-center">
          <svg class="w-5 h-5 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg> C\u1EA5u h\xECnh th\u1EDDi gian
        </h3>

        <!-- H\u1EA1n n\u1ED9p b\xE0i -->
        <div>
          <label class="block text-sm font-bold text-gray-700 mb-1.5">H\u1EA1n n\u1ED9p b\xE0i <span class="text-red-500">*</span></label>
          <input formControlName="dueDate" type="datetime-local"
            class="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500 block w-full p-3 outline-none transition font-medium">
        </div>

        <!-- Th\u1EDDi gian l\xE0m b\xE0i (Ph\xFAt) -->
        <div>
          <label class="block text-sm font-bold text-gray-700 mb-1.5">Th\u1EDDi gian l\xE0m b\xE0i (Ph\xFAt)</label>
          <input formControlName="timeLimitMinutes" type="number" min="0"
            class="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500 block w-full p-3 outline-none transition font-medium"
            placeholder="0 = Kh\xF4ng gi\u1EDBi h\u1EA1n th\u1EDDi gian">
          <p class="text-xs text-gray-400 mt-1">\u0110\u1ED3ng h\u1ED3 \u0111\u1EBFm ng\u01B0\u1EE3c s\u1EBD ch\u1EA1y khi h\u1ECDc sinh b\u1EAFt \u0111\u1EA7u l\xE0m b\xE0i.</p>
        </div>

        <!-- S\u1ED1 l\u1EA7n l\xE0m b\xE0i t\u1ED1i \u0111a -->
        <div>
          <label class="block text-sm font-bold text-gray-700 mb-1.5">S\u1ED1 l\u1EA7n l\xE0m t\u1ED1i \u0111a</label>
          <input formControlName="maxAttempts" type="number" min="1"
            class="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500 block w-full p-3 outline-none transition font-medium"
            placeholder="1">
        </div>

        <!-- Tr\u1EA1ng th\xE1i xu\u1EA5t b\u1EA3n -->
        <div>
          <label class="block text-sm font-bold text-gray-700 mb-1.5">Tr\u1EA1ng th\xE1i ph\xE1t h\xE0nh</label>
          <select formControlName="status"
            class="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500 block w-full p-3 outline-none transition cursor-pointer font-bold"
            [ngClass]="assignmentForm.get('status')?.value === 'PUBLISHED' ? 'text-green-700 bg-green-50/50' : 'text-gray-600'">
            <option value="PUBLISHED">\u{1F7E2} \u0110\xE3 xu\u1EA5t b\u1EA3n (H\u1ECDc sinh c\xF3 th\u1EC3 th\u1EA5y)</option>
            <option value="UNPUBLISHED">\u{1F7E1} L\u01B0u nh\xE1p (\u1EA8n v\u1EDBi h\u1ECDc sinh)</option>
          </select>
        </div>

        <!-- Action Buttons -->
        <div class="pt-4 border-t border-gray-100 flex flex-col space-y-3">
          <button type="submit" [disabled]="assignmentForm.invalid || isSubmitting()"
            class="w-full py-3.5 bg-indigo-600 text-white font-bold text-base rounded-2xl hover:bg-indigo-700 disabled:bg-indigo-300 shadow-md transition flex items-center justify-center">
            <svg *ngIf="isSubmitting()" class="animate-spin -ml-1 mr-2 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            {{ isSubmitting() ? '\u0110ang l\u01B0u...' : (isEditMode() ? 'L\u01B0u c\u1EADp nh\u1EADt' : 'T\u1EA1o b\xE0i t\u1EADp & So\u1EA1n c\xE2u h\u1ECFi') }}
          </button>
          
          <button type="button" (click)="router.navigate(['/teacher/classes', classId()])"
            class="w-full py-3 bg-gray-100 text-gray-700 font-semibold rounded-2xl hover:bg-gray-200 transition text-center">
            H\u1EE7y b\u1ECF
          </button>
        </div>
      </div>
    </div>

  </form>
</div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssignmentFormComponent, { className: "AssignmentFormComponent", filePath: "src/app/features/teacher/pages/assignment/assignment-form.component.ts", lineNumber: 15 });
})();

// src/app/features/teacher/services/assignment-question.service.ts
var AssignmentQuestionService = class _AssignmentQuestionService {
  http = inject(HttpClient);
  apiUrl = `${environment.apiUrl}/api/v1/assignment-questions`;
  // Lấy danh sách câu hỏi đính kèm bài tập
  getQuestionsByAssignmentId(assignmentId) {
    return this.http.get(`${this.apiUrl}/assignment/${assignmentId}`);
  }
  // Thêm 1 câu hỏi vào bài tập
  addQuestionToAssignment(assignmentId, dto) {
    return this.http.post(`${this.apiUrl}/assignment/${assignmentId}`, dto);
  }
  // Cập nhật điểm số / thứ tự câu hỏi trong bài tập
  updateQuestionInAssignment(assignmentId, questionId, dto) {
    return this.http.put(`${this.apiUrl}/assignment/${assignmentId}/question/${questionId}`, dto);
  }
  // Xóa câu hỏi khỏi bài tập
  removeQuestionFromAssignment(assignmentId, questionId) {
    return this.http.delete(`${this.apiUrl}/assignment/${assignmentId}/question/${questionId}`);
  }
  // Thay thế / gán hàng loạt câu hỏi vào bài tập
  batchReplaceAssignmentQuestions(assignmentId, dtos) {
    return this.http.put(`${this.apiUrl}/assignment/${assignmentId}/batch`, dtos);
  }
  static \u0275fac = function AssignmentQuestionService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AssignmentQuestionService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AssignmentQuestionService, factory: _AssignmentQuestionService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssignmentQuestionService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/features/teacher/services/question.service.ts
var QuestionService = class _QuestionService {
  http = inject(HttpClient);
  apiUrl = `${environment.apiUrl}/api/v1/questions`;
  // Lấy danh sách câu hỏi trong ngân hàng
  getQuestions(keyword, questionType, page = 0, size = 20) {
    let params = new HttpParams().set("page", page.toString()).set("size", size.toString());
    if (keyword)
      params = params.set("keyword", keyword);
    if (questionType)
      params = params.set("questionType", questionType);
    return this.http.get(this.apiUrl, { params });
  }
  // Lấy câu hỏi theo ID
  getQuestionById(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  buildFormData(dto, file) {
    const formData = new FormData();
    Object.keys(dto).forEach((key) => {
      if (dto[key] !== null && dto[key] !== void 0) {
        if (key === "options" && Array.isArray(dto.options)) {
          const optionsList = dto.options.map((opt) => ({
            optionContent: opt.optionContent || opt.optionText || "",
            isCorrect: !!opt.isCorrect
          }));
          formData.append("optionsJson", JSON.stringify(optionsList));
          optionsList.forEach((opt, idx) => {
            formData.append(`options[${idx}].optionContent`, opt.optionContent);
            formData.append(`options[${idx}].isCorrect`, opt.isCorrect.toString());
          });
        } else if (typeof dto[key] === "object") {
          formData.append(key, JSON.stringify(dto[key]));
        } else {
          formData.append(key, dto[key].toString());
        }
      }
    });
    if (file) {
      formData.append("file", file);
    }
    return formData;
  }
  // Tạo mới câu hỏi
  createQuestion(dto, file) {
    const formData = this.buildFormData(dto, file);
    return this.http.post(this.apiUrl, formData);
  }
  // Cập nhật câu hỏi
  updateQuestion(id, dto, file) {
    const formData = this.buildFormData(dto, file);
    return this.http.put(`${this.apiUrl}/${id}`, formData);
  }
  // Xóa câu hỏi
  deleteQuestion(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  // Tải file template Excel
  downloadTemplate() {
    return this.http.get(`${this.apiUrl}/import/template`, { responseType: "blob" });
  }
  // Import câu hỏi từ file Excel
  importExcel(file, assignmentId) {
    const formData = new FormData();
    formData.append("file", file);
    if (assignmentId) {
      formData.append("assignmentId", assignmentId.toString());
    }
    return this.http.post(`${this.apiUrl}/import`, formData);
  }
  static \u0275fac = function QuestionService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _QuestionService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _QuestionService, factory: _QuestionService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuestionService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/features/teacher/pages/assignment-detail/assignment-detail.component.ts
var _c03 = (a0) => ["/teacher/classes", a0];
var _c12 = (a0) => ["/teacher/assignments/edit", a0];
var _c22 = (a0) => ["/teacher/assignments", a0, "submissions"];
var _c3 = () => [];
function AssignmentDetailComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 8);
    \u0275\u0275element(2, "circle", 9)(3, "path", 10);
    \u0275\u0275elementEnd()();
  }
}
function AssignmentDetailComponent_ng_container_2_span_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 73);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r1.assignmentQuestions().length, " c\xE2u");
  }
}
function AssignmentDetailComponent_ng_container_2__svg_svg_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 74);
    \u0275\u0275element(1, "circle", 9)(2, "path", 10);
    \u0275\u0275elementEnd();
  }
}
function AssignmentDetailComponent_ng_container_2__svg_svg_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 45);
    \u0275\u0275element(1, "path", 75);
    \u0275\u0275elementEnd();
  }
}
function AssignmentDetailComponent_ng_container_2_div_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 76);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 77);
    \u0275\u0275element(2, "circle", 9)(3, "path", 10);
    \u0275\u0275elementEnd()();
  }
}
function AssignmentDetailComponent_ng_container_2_div_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 78);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 79);
    \u0275\u0275element(2, "path", 80);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, 'B\xE0i t\u1EADp n\xE0y ch\u01B0a c\xF3 c\xE2u h\u1ECFi n\xE0o. B\u1EA1n h\xE3y nh\u1EA5n "Th\xEAm c\xE2u h\u1ECFi" ho\u1EB7c s\u1EED d\u1EE5ng "Import Excel".');
    \u0275\u0275elementEnd()();
  }
}
function AssignmentDetailComponent_ng_container_2_div_64_div_1_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 102)(1, "p", 103);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 104);
    \u0275\u0275element(3, "path", 105);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Audio file b\xE0i nghe: ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275element(5, "audio", 106);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const aq_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275property("src", aq_r5.question.downloadMediaUrl);
  }
}
function AssignmentDetailComponent_ng_container_2_div_64_div_1_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 107);
    \u0275\u0275element(1, "img", 108);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const aq_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", aq_r5.question.downloadMediaUrl, \u0275\u0275sanitizeUrl);
  }
}
function AssignmentDetailComponent_ng_container_2_div_64_div_1_div_15_div_1__svg_svg_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 114);
    \u0275\u0275element(1, "path", 115);
    \u0275\u0275elementEnd();
  }
}
function AssignmentDetailComponent_ng_container_2_div_64_div_1_div_15_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 111)(1, "div", 112);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 87);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, AssignmentDetailComponent_ng_container_2_div_64_div_1_div_15_div_1__svg_svg_5_Template, 2, 0, "svg", 113);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r6 = ctx.$implicit;
    const optIndex_r7 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("ngClass", opt_r6.isCorrect ? "bg-emerald-50 border-emerald-300 text-emerald-900 font-semibold" : "bg-white border-gray-200 text-gray-700");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", opt_r6.isCorrect ? "bg-emerald-600 border-emerald-600 text-white shadow-xs" : "bg-gray-50 border-gray-300 text-gray-500");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getAlphabetLetter(optIndex_r7), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(opt_r6.optionContent || opt_r6.optionText);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", opt_r6.isCorrect);
  }
}
function AssignmentDetailComponent_ng_container_2_div_64_div_1_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 109);
    \u0275\u0275template(1, AssignmentDetailComponent_ng_container_2_div_64_div_1_div_15_div_1_Template, 6, 5, "div", 110);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const aq_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", (aq_r5.question == null ? null : aq_r5.question.options) || \u0275\u0275pureFunction0(1, _c3));
  }
}
function AssignmentDetailComponent_ng_container_2_div_64_div_1_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 116);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 117);
    \u0275\u0275element(2, "path", 118);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "div")(4, "strong", 119);
    \u0275\u0275text(5, "\u{1F4A1} Gi\u1EA3i th\xEDch \u0111\xE1p \xE1n / L\u1EDDi gi\u1EA3i:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 120);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const aq_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(aq_r5.question.readingPassage);
  }
}
function AssignmentDetailComponent_ng_container_2_div_64_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 83)(1, "div", 84)(2, "div", 85)(3, "span", 86);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 87)(6, "h4", 88);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 89)(9, "span", 90);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 91);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(13, AssignmentDetailComponent_ng_container_2_div_64_div_1_div_13_Template, 6, 1, "div", 92)(14, AssignmentDetailComponent_ng_container_2_div_64_div_1_div_14_Template, 2, 1, "div", 93)(15, AssignmentDetailComponent_ng_container_2_div_64_div_1_div_15_Template, 2, 2, "div", 94)(16, AssignmentDetailComponent_ng_container_2_div_64_div_1_div_16_Template, 8, 1, "div", 95);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 96)(18, "button", 97);
    \u0275\u0275listener("click", function AssignmentDetailComponent_ng_container_2_div_64_div_1_Template_button_click_18_listener() {
      const aq_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.editQuestion(aq_r5));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(19, "svg", 98);
    \u0275\u0275element(20, "path", 99);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(21, "button", 100);
    \u0275\u0275listener("click", function AssignmentDetailComponent_ng_container_2_div_64_div_1_Template_button_click_21_listener() {
      const aq_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openDeleteQuestionModal(aq_r5.questionId || (aq_r5.question == null ? null : aq_r5.question.id)));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(22, "svg", 98);
    \u0275\u0275element(23, "path", 101);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const aq_r5 = ctx.$implicit;
    const i_r8 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(aq_r5.orderNumber || i_r8 + 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((aq_r5.question == null ? null : aq_r5.question.content) || aq_r5.questionText || "C\xE2u h\u1ECFi");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getAssignmentTypeName((aq_r5.question == null ? null : aq_r5.question.questionType) || "MULTIPLE_CHOICE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("H\u1EC7 s\u1ED1 \u0111i\u1EC3m: ", aq_r5.scoreWeight || 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (aq_r5.question == null ? null : aq_r5.question.downloadMediaUrl) && (ctx_r1.isAudioUrl(aq_r5.question == null ? null : aq_r5.question.downloadMediaUrl) || (aq_r5.question == null ? null : aq_r5.question.questionType) === "LISTENING"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (aq_r5.question == null ? null : aq_r5.question.downloadMediaUrl) && ctx_r1.isImageUrl(aq_r5.question == null ? null : aq_r5.question.downloadMediaUrl));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((aq_r5.question == null ? null : aq_r5.question.options) || \u0275\u0275pureFunction0(8, _c3)).length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", aq_r5.question == null ? null : aq_r5.question.readingPassage);
  }
}
function AssignmentDetailComponent_ng_container_2_div_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81);
    \u0275\u0275template(1, AssignmentDetailComponent_ng_container_2_div_64_div_1_Template, 24, 9, "div", 82);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.assignmentQuestions());
  }
}
function AssignmentDetailComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 11)(2, "a", 12);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 13);
    \u0275\u0275element(4, "path", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7, "/");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 15);
    \u0275\u0275text(9, "Qu\u1EA3n l\xFD c\xE2u h\u1ECFi b\xE0i t\u1EADp");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 16)(11, "div", 17)(12, "div", 18);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(13, "svg", 19);
    \u0275\u0275element(14, "path", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(15, "div")(16, "div", 21)(17, "h1", 22);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 23);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "p", 24);
    \u0275\u0275text(22, " B\xE0i h\u1ECDc: ");
    \u0275\u0275elementStart(23, "strong", 25);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 26);
    \u0275\u0275text(26, "\u2022");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27, " H\u1EA1n n\u1ED9p: ");
    \u0275\u0275elementStart(28, "strong", 27);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "date");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(31, "div", 28)(32, "button", 29);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(33, "svg", 30);
    \u0275\u0275element(34, "path", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275text(35, " S\u1EEDa b\xE0i t\u1EADp ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(36, "div", 32)(37, "div", 33)(38, "div", 34)(39, "h3", 35);
    \u0275\u0275text(40, "H\u01B0\u1EDBng d\u1EABn l\xE0m b\xE0i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 36);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 37)(44, "div", 38)(45, "div", 39)(46, "h3", 40);
    \u0275\u0275text(47, "Danh s\xE1ch C\xE2u h\u1ECFi");
    \u0275\u0275elementEnd();
    \u0275\u0275template(48, AssignmentDetailComponent_ng_container_2_span_48_Template, 2, 1, "span", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div", 42)(50, "input", 43, 0);
    \u0275\u0275listener("change", function AssignmentDetailComponent_ng_container_2_Template_input_change_50_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onExcelFileSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "button", 44);
    \u0275\u0275listener("click", function AssignmentDetailComponent_ng_container_2_Template_button_click_52_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openQuestionModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(53, "svg", 45);
    \u0275\u0275element(54, "path", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275text(55, " Th\xEAm c\xE2u h\u1ECFi ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(56, "button", 47);
    \u0275\u0275listener("click", function AssignmentDetailComponent_ng_container_2_Template_button_click_56_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.downloadTemplate());
    });
    \u0275\u0275text(57, " \u{1F4C4} T\u1EA3i file m\u1EABu Excel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "button", 48);
    \u0275\u0275listener("click", function AssignmentDetailComponent_ng_container_2_Template_button_click_58_listener() {
      \u0275\u0275restoreView(_r1);
      const excelInput_r3 = \u0275\u0275reference(51);
      return \u0275\u0275resetView(excelInput_r3.click());
    });
    \u0275\u0275template(59, AssignmentDetailComponent_ng_container_2__svg_svg_59_Template, 3, 0, "svg", 49)(60, AssignmentDetailComponent_ng_container_2__svg_svg_60_Template, 2, 0, "svg", 50);
    \u0275\u0275text(61);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(62, AssignmentDetailComponent_ng_container_2_div_62_Template, 4, 0, "div", 51)(63, AssignmentDetailComponent_ng_container_2_div_63_Template, 5, 0, "div", 52)(64, AssignmentDetailComponent_ng_container_2_div_64_Template, 2, 1, "div", 53);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "div", 54)(66, "div", 55)(67, "h3", 56);
    \u0275\u0275text(68, "Th\xF4ng tin b\xE0i t\u1EADp");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "ul", 57)(70, "li", 58);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(71, "svg", 59);
    \u0275\u0275element(72, "path", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(73, "div")(74, "p", 61);
    \u0275\u0275text(75, "Ph\xE2n lo\u1EA1i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "p", 62);
    \u0275\u0275text(77);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(78, "li", 58);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(79, "svg", 63);
    \u0275\u0275element(80, "path", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(81, "div")(82, "p", 61);
    \u0275\u0275text(83, "H\u1EA1n ch\xF3t n\u1ED9p b\xE0i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "p", 65);
    \u0275\u0275text(85);
    \u0275\u0275pipe(86, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(87, "li", 58);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(88, "svg", 66);
    \u0275\u0275element(89, "path", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(90, "div")(91, "p", 61);
    \u0275\u0275text(92, "Th\u1EDDi gian l\xE0m b\xE0i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "p", 62);
    \u0275\u0275text(94);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(95, "li", 58);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(96, "svg", 67);
    \u0275\u0275element(97, "path", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(98, "div")(99, "p", 61);
    \u0275\u0275text(100, "S\u1ED1 l\u1EA7n l\xE0m t\u1ED1i \u0111a");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "p", 62);
    \u0275\u0275text(102);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(103, "div", 69)(104, "a", 70);
    \u0275\u0275text(105, " Ch\u1EA5m b\xE0i & Xem k\u1EBFt qu\u1EA3 ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(106, "svg", 71);
    \u0275\u0275element(107, "path", 72);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(28, _c03, ctx_r1.assignment().classId));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.assignment().className || ctx_r1.assignment().classCode || "L\u1EDBp h\u1ECDc", " ");
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(ctx_r1.assignment().title);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.assignment().status === "PUBLISHED" || ctx_r1.assignment().status === "published" ? "bg-green-50 text-green-700 border-green-200" : "bg-gray-100 text-gray-600 border-gray-200");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.assignment().status === "PUBLISHED" || ctx_r1.assignment().status === "published" ? "\u0110ang m\u1EDF (Published)" : "Nh\xE1p / \u0110ang \u1EA9n", " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.assignment().lessonName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.assignment().dueDate ? \u0275\u0275pipeBind2(30, 22, ctx_r1.assignment().dueDate, "dd/MM/yyyy HH:mm") : "Kh\xF4ng gi\u1EDBi h\u1EA1n");
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(30, _c12, ctx_r1.assignment().id));
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1(" ", ctx_r1.assignment().description || "Kh\xF4ng c\xF3 m\xF4 t\u1EA3 h\u01B0\u1EDBng d\u1EABn.", " ");
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r1.assignmentQuestions().length > 0);
    \u0275\u0275advance(10);
    \u0275\u0275property("disabled", ctx_r1.isImporting());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isImporting());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isImporting());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isImporting() ? "\u0110ang x\u1EED l\xFD..." : "Import Excel", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isLoadingQuestions());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoadingQuestions() && ctx_r1.assignmentQuestions().length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoadingQuestions() && ctx_r1.assignmentQuestions().length > 0);
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(ctx_r1.getAssignmentTypeName(ctx_r1.assignment().assignmentType));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.assignment().dueDate ? \u0275\u0275pipeBind2(86, 25, ctx_r1.assignment().dueDate, "dd/MM/yyyy HH:mm") : "Kh\xF4ng gi\u1EDBi h\u1EA1n");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.assignment().timeLimitMinutes ? ctx_r1.assignment().timeLimitMinutes + " ph\xFAt" : "Kh\xF4ng gi\u1EDBi h\u1EA1n");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", ctx_r1.assignment().maxAttempts || 1, " l\u1EA7n");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(32, _c22, ctx_r1.assignment().id));
  }
}
function AssignmentDetailComponent_div_3_span_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 157);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 158);
    \u0275\u0275listener("click", function AssignmentDetailComponent_div_3_span_45_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeSelectedMediaFile());
    });
    \u0275\u0275text(3, "\u2715");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u{1F4CE} ", (tmp_3_0 = ctx_r1.selectedMediaFile()) == null ? null : tmp_3_0.name, " ");
  }
}
function AssignmentDetailComponent_div_3_div_46_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 165)(1, "label", 166);
    \u0275\u0275element(2, "input", 167);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 168);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "input", 169);
    \u0275\u0275elementStart(6, "button", 170);
    \u0275\u0275listener("click", function AssignmentDetailComponent_div_3_div_46_div_7_Template_button_click_6_listener() {
      const i_r14 = \u0275\u0275restoreView(_r13).index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removeOption(i_r14));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 98);
    \u0275\u0275element(8, "path", 130);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const i_r14 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("formGroupName", i_r14);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.getAlphabetLetter(i_r14));
  }
}
function AssignmentDetailComponent_div_3_div_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 159)(1, "div", 160)(2, "label", 161);
    \u0275\u0275text(3, "C\xE1c \u0111\xE1p \xE1n l\u1EF1a ch\u1ECDn (T\xEDch ch\u1ECDn \xF4 b\xEAn tr\xE1i cho \u0111\xE1p \xE1n \u0110\xDANG)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 162);
    \u0275\u0275listener("click", function AssignmentDetailComponent_div_3_div_46_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addOption());
    });
    \u0275\u0275text(5, "+ Th\xEAm \u0111\xE1p \xE1n");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 163);
    \u0275\u0275template(7, AssignmentDetailComponent_div_3_div_46_div_7_Template, 9, 2, "div", 164);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r1.optionsFormArray.controls);
  }
}
function AssignmentDetailComponent_div_3__svg_svg_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 171);
    \u0275\u0275element(1, "circle", 9)(2, "path", 10);
    \u0275\u0275elementEnd();
  }
}
function AssignmentDetailComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 121)(1, "div", 122);
    \u0275\u0275listener("click", function AssignmentDetailComponent_div_3_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeQuestionModal());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 123)(3, "div", 124)(4, "div", 125)(5, "div", 126);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 98);
    \u0275\u0275element(7, "path", 46);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "h3", 127);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 128);
    \u0275\u0275listener("click", function AssignmentDetailComponent_div_3_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeQuestionModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 129);
    \u0275\u0275element(12, "path", 130);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(13, "form", 131);
    \u0275\u0275listener("ngSubmit", function AssignmentDetailComponent_div_3_Template_form_ngSubmit_13_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitQuestion());
    });
    \u0275\u0275elementStart(14, "div", 132)(15, "div", 133)(16, "label", 134);
    \u0275\u0275text(17, "Lo\u1EA1i c\xE2u h\u1ECFi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "select", 135)(19, "option", 136);
    \u0275\u0275text(20, "\u2753 Tr\u1EAFc nghi\u1EC7m nhi\u1EC1u l\u1EF1a ch\u1ECDn");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "option", 137);
    \u0275\u0275text(22, "\u270D\uFE0F T\u1EF1 lu\u1EADn (G\xF5 v\u0103n b\u1EA3n)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "option", 138);
    \u0275\u0275text(24, "\u{1F4DD} \u0110i\u1EC1n t\u1EEB v\xE0o ch\u1ED7 tr\u1ED1ng");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 139)(26, "label", 134);
    \u0275\u0275text(27, "H\u1EC7 s\u1ED1 \u0111i\u1EC3m");
    \u0275\u0275elementEnd();
    \u0275\u0275element(28, "input", 140);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div")(30, "label", 134);
    \u0275\u0275text(31, "N\u1ED9i dung c\xE2u h\u1ECFi ");
    \u0275\u0275elementStart(32, "span", 141);
    \u0275\u0275text(33, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(34, "textarea", 142);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div")(36, "label", 143);
    \u0275\u0275text(37, "T\u1EC7p \xE2m thanh b\xE0i nghe / H\xECnh \u1EA3nh minh h\u1ECDa (N\u1EBFu c\xF3)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 144)(39, "input", 145, 1);
    \u0275\u0275listener("change", function AssignmentDetailComponent_div_3_Template_input_change_39_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onMediaFileSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "button", 146);
    \u0275\u0275listener("click", function AssignmentDetailComponent_div_3_Template_button_click_41_listener() {
      \u0275\u0275restoreView(_r9);
      const mediaInput_r10 = \u0275\u0275reference(40);
      return \u0275\u0275resetView(mediaInput_r10.click());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(42, "svg", 147);
    \u0275\u0275element(43, "path", 148);
    \u0275\u0275elementEnd();
    \u0275\u0275text(44);
    \u0275\u0275elementEnd();
    \u0275\u0275template(45, AssignmentDetailComponent_div_3_span_45_Template, 4, 1, "span", 149);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(46, AssignmentDetailComponent_div_3_div_46_Template, 8, 1, "div", 150);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(47, "div")(48, "label", 151);
    \u0275\u0275text(49, "\u{1F4A1} Gi\u1EA3i th\xEDch \u0111\xE1p \xE1n / L\u1EDDi gi\u1EA3i chi ti\u1EBFt (Kh\xF4ng b\u1EAFt bu\u1ED9c)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(50, "textarea", 152);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 153)(52, "button", 154);
    \u0275\u0275listener("click", function AssignmentDetailComponent_div_3_Template_button_click_52_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeQuestionModal());
    });
    \u0275\u0275text(53, "H\u1EE7y b\u1ECF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "button", 155);
    \u0275\u0275listener("click", function AssignmentDetailComponent_div_3_Template_button_click_54_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitQuestion());
    });
    \u0275\u0275template(55, AssignmentDetailComponent_div_3__svg_svg_55_Template, 3, 0, "svg", 156);
    \u0275\u0275text(56);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_6_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", ctx_r1.editingQuestion() ? "Ch\u1EC9nh s\u1EEDa c\xE2u h\u1ECFi" : "So\u1EA1n c\xE2u h\u1ECFi m\u1EDBi", " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("formGroup", ctx_r1.questionForm);
    \u0275\u0275advance(31);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedMediaFile() ? "\u0110\u1ED5i t\u1EC7p kh\xE1c" : "Ch\u1ECDn t\u1EC7p Audio (.mp3, .wav) ho\u1EB7c \u1EA2nh", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedMediaFile());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_6_0 = ctx_r1.questionForm.get("questionType")) == null ? null : tmp_6_0.value) === "MULTIPLE_CHOICE" || ((tmp_6_0 = ctx_r1.questionForm.get("questionType")) == null ? null : tmp_6_0.value) === "multiple_choice");
    \u0275\u0275advance(8);
    \u0275\u0275property("disabled", ctx_r1.questionForm.invalid || ctx_r1.isSavingQuestion());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isSavingQuestion());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isSavingQuestion() ? "\u0110ang l\u01B0u..." : ctx_r1.editingQuestion() ? "C\u1EADp nh\u1EADt c\xE2u h\u1ECFi" : "L\u01B0u c\xE2u h\u1ECFi", " ");
  }
}
function AssignmentDetailComponent_div_4__svg_svg_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 171);
    \u0275\u0275element(1, "circle", 9)(2, "path", 10);
    \u0275\u0275elementEnd();
  }
}
function AssignmentDetailComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 172)(1, "div", 122);
    \u0275\u0275listener("click", function AssignmentDetailComponent_div_4_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDeleteQuestionModal());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 173)(3, "div", 174);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 175);
    \u0275\u0275element(5, "path", 176);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "h3", 177);
    \u0275\u0275text(7, "X\xF3a c\xE2u h\u1ECFi?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 178);
    \u0275\u0275text(9, "B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n g\u1EE1 c\xE2u h\u1ECFi n\xE0y kh\u1ECFi b\xE0i t\u1EADp kh\xF4ng?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 179)(11, "button", 180);
    \u0275\u0275listener("click", function AssignmentDetailComponent_div_4_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDeleteQuestionModal());
    });
    \u0275\u0275text(12, "H\u1EE7y");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 181);
    \u0275\u0275listener("click", function AssignmentDetailComponent_div_4_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmDeleteQuestion());
    });
    \u0275\u0275template(14, AssignmentDetailComponent_div_4__svg_svg_14_Template, 3, 0, "svg", 156);
    \u0275\u0275text(15, " X\xF3a ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275property("disabled", ctx_r1.isDeletingQuestion());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isDeletingQuestion());
  }
}
var AssignmentDetailComponent = class _AssignmentDetailComponent {
  route = inject(ActivatedRoute);
  router = inject(Router);
  assignmentService = inject(AssignmentService);
  toastService = inject(ToastService);
  assignmentQuestionService = inject(AssignmentQuestionService);
  questionService = inject(QuestionService);
  fb = inject(FormBuilder);
  assignmentId = signal(null, ...ngDevMode ? [{ debugName: "assignmentId" }] : (
    /* istanbul ignore next */
    []
  ));
  assignment = signal(null, ...ngDevMode ? [{ debugName: "assignment" }] : (
    /* istanbul ignore next */
    []
  ));
  isLoading = signal(true, ...ngDevMode ? [{ debugName: "isLoading" }] : (
    /* istanbul ignore next */
    []
  ));
  assignmentQuestions = signal([], ...ngDevMode ? [{ debugName: "assignmentQuestions" }] : (
    /* istanbul ignore next */
    []
  ));
  isLoadingQuestions = signal(false, ...ngDevMode ? [{ debugName: "isLoadingQuestions" }] : (
    /* istanbul ignore next */
    []
  ));
  isImporting = signal(false, ...ngDevMode ? [{ debugName: "isImporting" }] : (
    /* istanbul ignore next */
    []
  ));
  // --- STATE MODAL CÂU HỎI & MEDIA FILE ---
  isQuestionModalOpen = signal(false, ...ngDevMode ? [{ debugName: "isQuestionModalOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  isSavingQuestion = signal(false, ...ngDevMode ? [{ debugName: "isSavingQuestion" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedMediaFile = signal(null, ...ngDevMode ? [{ debugName: "selectedMediaFile" }] : (
    /* istanbul ignore next */
    []
  ));
  questionForm;
  // --- STATE SỬA / XÓA CÂU HỎI ---
  editingQuestion = signal(null, ...ngDevMode ? [{ debugName: "editingQuestion" }] : (
    /* istanbul ignore next */
    []
  ));
  isDeleteQuestionModalOpen = signal(false, ...ngDevMode ? [{ debugName: "isDeleteQuestionModalOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  isDeletingQuestion = signal(false, ...ngDevMode ? [{ debugName: "isDeletingQuestion" }] : (
    /* istanbul ignore next */
    []
  ));
  questionToDeleteId = signal(null, ...ngDevMode ? [{ debugName: "questionToDeleteId" }] : (
    /* istanbul ignore next */
    []
  ));
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get("id");
      if (id) {
        this.assignmentId.set(id);
        this.loadAssignmentDetails(id);
        this.initQuestionForm();
      }
    });
  }
  initQuestionForm() {
    this.questionForm = this.fb.group({
      questionType: ["MULTIPLE_CHOICE", Validators.required],
      scoreWeight: [1, [Validators.required, Validators.min(0)]],
      content: ["", Validators.required],
      readingPassage: [""],
      options: this.fb.array([
        this.createOptionForm(true),
        this.createOptionForm(false),
        this.createOptionForm(false),
        this.createOptionForm(false)
      ])
    });
    this.questionForm.get("questionType")?.valueChanges.subscribe((type) => {
      const optionsArray = this.questionForm.get("options");
      if (type === "MULTIPLE_CHOICE" || type === "multiple_choice" || type === "LISTENING") {
        optionsArray.enable();
      } else {
        optionsArray.disable();
      }
    });
  }
  get optionsFormArray() {
    return this.questionForm.get("options");
  }
  addOption() {
    this.optionsFormArray.push(this.createOptionForm());
  }
  removeOption(index) {
    if (this.optionsFormArray.length > 2) {
      this.optionsFormArray.removeAt(index);
    } else {
      this.toastService.warning("C\u1EA3nh b\xE1o", "C\xE2u h\u1ECFi tr\u1EAFc nghi\u1EC7m ph\u1EA3i c\xF3 \xEDt nh\u1EA5t 2 \u0111\xE1p \xE1n!");
    }
  }
  createOptionForm(isCorrect = false) {
    return this.fb.group({
      optionContent: ["", Validators.required],
      isCorrect: [isCorrect]
    });
  }
  onMediaFileSelected(event) {
    const file = event.target.files[0];
    if (file) {
      this.selectedMediaFile.set(file);
    }
  }
  removeSelectedMediaFile() {
    this.selectedMediaFile.set(null);
  }
  loadAssignmentDetails(id) {
    this.isLoading.set(true);
    this.assignmentService.getAssignmentById(id).subscribe({
      next: (res) => {
        this.assignment.set(res);
        this.isLoading.set(false);
        this.loadQuestions(id);
      },
      error: () => {
        this.toastService.error("L\u1ED7i", "Kh\xF4ng th\u1EC3 t\u1EA3i th\xF4ng tin b\xE0i t\u1EADp");
        this.isLoading.set(false);
      }
    });
  }
  loadQuestions(assignmentId) {
    this.isLoadingQuestions.set(true);
    this.assignmentQuestionService.getQuestionsByAssignmentId(assignmentId).subscribe({
      next: (aqList) => {
        this.assignmentQuestions.set(aqList || []);
        this.isLoadingQuestions.set(false);
      },
      error: () => {
        this.toastService.error("L\u1ED7i", "Kh\xF4ng th\u1EC3 t\u1EA3i danh s\xE1ch c\xE2u h\u1ECFi c\u1EE7a b\xE0i t\u1EADp");
        this.isLoadingQuestions.set(false);
      }
    });
  }
  getAlphabetLetter(index) {
    return String.fromCharCode(65 + index);
  }
  getAssignmentTypeName(type) {
    const map = {
      "HOMEWORK": "B\xE0i t\u1EADp v\u1EC1 nh\xE0",
      "QUIZ": "Tr\u1EAFc nghi\u1EC7m",
      "ESSAY": "T\u1EF1 lu\u1EADn",
      "PROJECT": "\u0110\u1ED3 \xE1n",
      "MULTIPLE_CHOICE": "Tr\u1EAFc nghi\u1EC7m",
      "LISTENING": "\u{1F3A7} B\xE0i nghe (Audio)",
      "FILL_BLANK": "\u0110i\u1EC1n t\u1EEB",
      "TRUE_FALSE": "\u0110\xFAng / Sai",
      "multiple_choice": "Tr\u1EAFc nghi\u1EC7m",
      "essay": "T\u1EF1 lu\u1EADn"
    };
    return map[type] || type || "B\xE0i t\u1EADp";
  }
  isAudioUrl(url) {
    if (!url)
      return false;
    const cleanUrl = url.split("?")[0].toLowerCase();
    return cleanUrl.endsWith(".mp3") || cleanUrl.endsWith(".wav") || cleanUrl.endsWith(".aac") || cleanUrl.endsWith(".m4a") || cleanUrl.endsWith(".ogg");
  }
  isImageUrl(url) {
    if (!url)
      return false;
    const cleanUrl = url.split("?")[0].toLowerCase();
    return cleanUrl.endsWith(".png") || cleanUrl.endsWith(".jpg") || cleanUrl.endsWith(".jpeg") || cleanUrl.endsWith(".webp") || cleanUrl.endsWith(".gif") || cleanUrl.endsWith(".svg");
  }
  onExcelFileSelected(event) {
    const file = event.target.files[0];
    if (!file)
      return;
    if (!file.name.endsWith(".xlsx") && !file.name.endsWith(".xls")) {
      this.toastService.warning("C\u1EA3nh b\xE1o", "Vui l\xF2ng ch\u1ECDn file Excel (.xlsx ho\u1EB7c .xls)");
      event.target.value = "";
      return;
    }
    this.isImporting.set(true);
    this.questionService.importExcel(file, this.assignmentId()).subscribe({
      next: (res) => {
        const count = res.successCount || res.importedQuestions?.length || 0;
        this.toastService.success("Import th\xE0nh c\xF4ng!", `\u0110\xE3 th\xEAm ${count} c\xE2u h\u1ECFi v\xE0o b\xE0i t\u1EADp.`);
        this.isImporting.set(false);
        event.target.value = "";
        if (this.assignmentId()) {
          this.loadQuestions(this.assignmentId());
        }
      },
      error: (err) => {
        this.toastService.error("L\u1ED7i Import", err.error?.message || "C\xF3 l\u1ED7i x\u1EA3y ra khi import file!");
        this.isImporting.set(false);
        event.target.value = "";
      }
    });
  }
  downloadTemplate() {
    this.questionService.downloadTemplate().subscribe({
      next: (blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "Question_Import_Template.xlsx";
        a.click();
        window.URL.revokeObjectURL(url);
      },
      error: () => this.toastService.error("L\u1ED7i", "Kh\xF4ng th\u1EC3 t\u1EA3i file m\u1EABu")
    });
  }
  openQuestionModal() {
    this.editingQuestion.set(null);
    this.selectedMediaFile.set(null);
    this.initQuestionForm();
    this.isQuestionModalOpen.set(true);
  }
  closeQuestionModal() {
    this.isQuestionModalOpen.set(false);
    this.editingQuestion.set(null);
    this.selectedMediaFile.set(null);
  }
  editQuestion(aq) {
    const q = aq.question || aq;
    this.editingQuestion.set(aq);
    this.selectedMediaFile.set(null);
    this.initQuestionForm();
    this.questionForm.patchValue({
      questionType: q.questionType || "MULTIPLE_CHOICE",
      scoreWeight: aq.scoreWeight || 1,
      content: q.content || q.questionText || "",
      readingPassage: q.readingPassage || ""
    });
    if ((q.questionType === "MULTIPLE_CHOICE" || q.questionType === "multiple_choice" || q.questionType === "LISTENING") && q.options) {
      const optionsArray = this.optionsFormArray;
      optionsArray.clear();
      q.options.forEach((opt) => {
        optionsArray.push(this.fb.group({
          optionContent: [opt.optionContent || opt.optionText, Validators.required],
          isCorrect: [!!opt.isCorrect]
        }));
      });
    }
    this.isQuestionModalOpen.set(true);
  }
  submitQuestion() {
    if (this.questionForm.invalid) {
      this.questionForm.markAllAsTouched();
      return;
    }
    const formValues = this.questionForm.value;
    const isMultipleChoice = formValues.questionType === "MULTIPLE_CHOICE" || formValues.questionType === "multiple_choice" || formValues.questionType === "LISTENING";
    if (isMultipleChoice) {
      const hasCorrect = formValues.options.some((opt) => opt.isCorrect);
      if (!hasCorrect) {
        this.toastService.warning("L\u1ED7i", "Vui l\xF2ng ch\u1ECDn \xEDt nh\u1EA5t 1 \u0111\xE1p \xE1n \u0110\xDANG!");
        return;
      }
    }
    this.isSavingQuestion.set(true);
    const questionDto = {
      questionType: formValues.questionType,
      content: formValues.content,
      readingPassage: formValues.readingPassage,
      options: isMultipleChoice ? formValues.options : []
    };
    const mediaFile = this.selectedMediaFile();
    if (this.editingQuestion()) {
      const aq = this.editingQuestion();
      const questionId = aq.questionId || aq.question?.id;
      this.questionService.updateQuestion(questionId, questionDto, mediaFile).subscribe({
        next: () => {
          this.assignmentQuestionService.updateQuestionInAssignment(this.assignmentId(), questionId, {
            orderNumber: aq.orderNumber,
            scoreWeight: formValues.scoreWeight
          }).subscribe({
            next: () => this.finalizeSubmit("\u0110\xE3 c\u1EADp nh\u1EADt c\xE2u h\u1ECFi th\xE0nh c\xF4ng!"),
            error: () => this.finalizeSubmit("\u0110\xE3 c\u1EADp nh\u1EADt c\xE2u h\u1ECFi!")
          });
        },
        error: (err) => {
          this.toastService.error("L\u1ED7i", err.error?.message || "Kh\xF4ng th\u1EC3 c\u1EADp nh\u1EADt c\xE2u h\u1ECFi");
          this.isSavingQuestion.set(false);
        }
      });
    } else {
      this.questionService.createQuestion(questionDto, mediaFile).subscribe({
        next: (res) => {
          const newQuestionId = res?.data?.id || res?.id;
          if (newQuestionId) {
            const nextOrder = this.assignmentQuestions().length + 1;
            this.assignmentQuestionService.addQuestionToAssignment(this.assignmentId(), {
              questionId: newQuestionId,
              orderNumber: nextOrder,
              scoreWeight: formValues.scoreWeight
            }).subscribe({
              next: () => this.finalizeSubmit("\u0110\xE3 th\xEAm c\xE2u h\u1ECFi v\xE0o b\xE0i t\u1EADp th\xE0nh c\xF4ng!"),
              error: () => this.finalizeSubmit("\u0110\xE3 t\u1EA1o c\xE2u h\u1ECFi!")
            });
          } else {
            this.finalizeSubmit("\u0110\xE3 t\u1EA1o c\xE2u h\u1ECFi!");
          }
        },
        error: (err) => {
          this.toastService.error("L\u1ED7i", err.error?.message || "Kh\xF4ng th\u1EC3 t\u1EA1o c\xE2u h\u1ECFi");
          this.isSavingQuestion.set(false);
        }
      });
    }
  }
  finalizeSubmit(message) {
    this.toastService.success("Th\xE0nh c\xF4ng", message);
    this.isSavingQuestion.set(false);
    this.closeQuestionModal();
    this.loadQuestions(this.assignmentId());
  }
  openDeleteQuestionModal(questionId) {
    this.questionToDeleteId.set(questionId);
    this.isDeleteQuestionModalOpen.set(true);
  }
  closeDeleteQuestionModal() {
    this.isDeleteQuestionModalOpen.set(false);
    this.questionToDeleteId.set(null);
  }
  confirmDeleteQuestion() {
    const qId = this.questionToDeleteId();
    if (!qId || !this.assignmentId())
      return;
    this.isDeletingQuestion.set(true);
    this.assignmentQuestionService.removeQuestionFromAssignment(this.assignmentId(), qId).subscribe({
      next: () => {
        this.toastService.success("Th\xE0nh c\xF4ng", "\u0110\xE3 x\xF3a c\xE2u h\u1ECFi kh\u1ECFi b\xE0i t\u1EADp!");
        this.isDeletingQuestion.set(false);
        this.closeDeleteQuestionModal();
        this.loadQuestions(this.assignmentId());
      },
      error: (err) => {
        this.toastService.error("L\u1ED7i", err.error?.message || "X\xF3a c\xE2u h\u1ECFi th\u1EA5t b\u1EA1i");
        this.isDeletingQuestion.set(false);
        this.closeDeleteQuestionModal();
      }
    });
  }
  static \u0275fac = function AssignmentDetailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AssignmentDetailComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssignmentDetailComponent, selectors: [["app-assignment-detail"]], decls: 5, vars: 4, consts: [["excelInput", ""], ["mediaInput", ""], [1, "space-y-6", "max-w-7xl", "mx-auto", "p-4", "sm:p-6"], ["class", "flex justify-center py-20", 4, "ngIf"], [4, "ngIf"], ["class", "fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-0", 4, "ngIf"], ["class", "fixed inset-0 z-[90] flex items-center justify-center p-4 sm:p-0", 4, "ngIf"], [1, "flex", "justify-center", "py-20"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-10", "w-10", "text-indigo-600"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"], [1, "flex", "items-center", "space-x-2", "text-sm", "text-gray-500", "mb-2"], [1, "hover:text-indigo-600", "transition", "flex", "items-center", "cursor-pointer", "font-medium", 3, "routerLink"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "mr-1"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M10 19l-7-7m0 0l7-7m-7 7h18"], [1, "text-gray-900", "font-medium"], [1, "bg-white", "rounded-3xl", "p-6", "sm:p-8", "shadow-sm", "border", "border-gray-200", "flex", "flex-col", "md:flex-row", "justify-between", "md:items-start", "gap-6"], [1, "flex", "items-start", "flex-1"], [1, "w-16", "h-16", "rounded-2xl", "bg-indigo-50", "flex", "items-center", "justify-center", "mr-5", "shrink-0", "border", "border-indigo-100", "text-indigo-600", "shadow-xs"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-8", "h-8"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"], [1, "flex", "items-center", "flex-wrap", "gap-3", "mb-2"], [1, "text-2xl", "sm:text-3xl", "font-extrabold", "text-gray-900", "tracking-tight"], [1, "px-3", "py-1", "text-xs", "font-bold", "uppercase", "tracking-wider", "rounded-lg", "border", 3, "ngClass"], [1, "text-gray-500", "text-sm", "flex", "items-center"], [1, "ml-1", "text-indigo-700", "font-bold"], [1, "mx-2"], [1, "ml-1", "text-gray-700"], [1, "flex", "space-x-3", "shrink-0"], [1, "px-5", "py-2.5", "text-sm", "font-bold", "text-gray-700", "bg-white", "border", "border-gray-300", "hover:bg-gray-50", "rounded-xl", "shadow-sm", "transition", "flex", "items-center", 3, "routerLink"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "mr-2", "text-gray-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"], [1, "grid", "grid-cols-1", "lg:grid-cols-3", "gap-6"], [1, "lg:col-span-2", "space-y-6"], [1, "bg-white", "rounded-2xl", "shadow-sm", "border", "border-gray-100", "p-6", "sm:p-8"], [1, "text-lg", "font-bold", "text-gray-900", "mb-3", "border-b", "border-gray-100", "pb-3"], [1, "prose", "max-w-none", "text-gray-700", "text-sm", "leading-relaxed", "whitespace-pre-wrap"], [1, "bg-white", "rounded-2xl", "shadow-sm", "border", "border-gray-100", "overflow-hidden"], [1, "p-6", "border-b", "border-gray-100", "flex", "flex-col", "sm:flex-row", "justify-between", "items-start", "sm:items-center", "bg-gray-50/50", "gap-4"], [1, "flex", "items-center", "space-x-2"], [1, "text-lg", "font-bold", "text-gray-900"], ["class", "bg-indigo-100 text-indigo-700 font-bold px-2.5 py-0.5 rounded-full text-xs", 4, "ngIf"], [1, "flex", "flex-wrap", "items-center", "gap-2"], ["type", "file", "accept", ".xlsx, .xls", 1, "hidden", 3, "change"], [1, "px-4", "py-2", "text-sm", "font-bold", "text-indigo-700", "bg-indigo-50", "hover:bg-indigo-100", "rounded-xl", "transition", "flex", "items-center", "border", "border-indigo-200", "shadow-2xs", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "mr-1.5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 4v16m8-8H4"], ["title", "T\u1EA3i m\u1EABu file Excel ra \u0111\u1EC1", 1, "px-3", "py-2", "text-sm", "font-bold", "text-gray-700", "bg-white", "hover:bg-gray-50", "border", "border-gray-200", "rounded-xl", "transition", "flex", "items-center", 3, "click"], [1, "px-4", "py-2", "text-sm", "font-bold", "text-white", "bg-emerald-600", "hover:bg-emerald-700", "disabled:bg-emerald-400", "rounded-xl", "shadow-md", "transition", "flex", "items-center", 3, "click", "disabled"], ["class", "animate-spin -ml-1 mr-1.5 h-4 w-4 text-white", "fill", "none", "viewBox", "0 0 24 24", 4, "ngIf"], ["class", "w-4 h-4 mr-1.5", "fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 4, "ngIf"], ["class", "py-12 text-center text-indigo-500", 4, "ngIf"], ["class", "p-12 text-center text-gray-500 bg-gray-50/30", 4, "ngIf"], ["class", "divide-y divide-gray-100", 4, "ngIf"], [1, "lg:col-span-1", "space-y-6"], [1, "bg-white", "rounded-2xl", "shadow-sm", "border", "border-gray-100", "p-6"], [1, "text-sm", "font-extrabold", "uppercase", "text-gray-400", "tracking-wider", "mb-5"], [1, "space-y-4", "text-sm"], [1, "flex", "items-start"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-indigo-400", "mr-3", "shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"], [1, "text-gray-500", "font-medium"], [1, "font-bold", "text-gray-900", "mt-0.5"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-amber-500", "mr-3", "shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "font-bold", "text-red-600", "mt-0.5"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-emerald-500", "mr-3", "shrink-0"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-blue-500", "mr-3", "shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "mt-6", "pt-5", "border-t", "border-gray-100"], [1, "w-full", "py-3", "bg-indigo-600", "hover:bg-indigo-700", "text-white", "font-bold", "rounded-xl", "shadow-md", "transition", "flex", "items-center", "justify-center", 3, "routerLink"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "ml-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 5l7 7-7 7"], [1, "bg-indigo-100", "text-indigo-700", "font-bold", "px-2.5", "py-0.5", "rounded-full", "text-xs"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "-ml-1", "mr-1.5", "h-4", "w-4", "text-white"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"], [1, "py-12", "text-center", "text-indigo-500"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "inline-block", "h-8", "w-8"], [1, "p-12", "text-center", "text-gray-500", "bg-gray-50/30"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "mx-auto", "h-12", "w-12", "text-gray-300", "mb-3"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"], [1, "divide-y", "divide-gray-100"], ["class", "p-6 hover:bg-gray-50/50 transition", 4, "ngFor", "ngForOf"], [1, "p-6", "hover:bg-gray-50/50", "transition"], [1, "flex", "items-start", "justify-between"], [1, "flex", "items-start", "flex-1", "pr-4"], [1, "flex", "items-center", "justify-center", "w-8", "h-8", "rounded-full", "bg-indigo-100", "text-indigo-700", "font-extrabold", "text-sm", "shrink-0", "mr-4", "mt-0.5", "shadow-2xs"], [1, "flex-1"], [1, "text-base", "font-bold", "text-gray-900", "leading-relaxed"], [1, "flex", "items-center", "space-x-3", "mt-1.5", "mb-3"], [1, "text-[11px]", "font-bold", "px-2.5", "py-0.5", "rounded", "bg-gray-100", "text-gray-600", "border", "border-gray-200", "uppercase", "tracking-wider"], [1, "text-xs", "font-bold", "text-indigo-600", "bg-indigo-50", "px-2", "py-0.5", "rounded", "border", "border-indigo-100"], ["class", "my-3 p-3 bg-indigo-50/70 rounded-2xl border border-indigo-100", 4, "ngIf"], ["class", "my-3", 4, "ngIf"], ["class", "space-y-2 mt-3 pl-1", 4, "ngIf"], ["class", "mt-3 p-3.5 bg-amber-50/70 border border-amber-200/80 rounded-xl text-xs text-amber-900 flex items-start", 4, "ngIf"], [1, "flex", "items-center", "space-x-1", "shrink-0", "ml-4"], ["title", "S\u1EEDa c\xE2u h\u1ECFi", 1, "p-2", "text-gray-400", "hover:text-indigo-600", "hover:bg-indigo-50", "rounded-lg", "transition", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"], ["title", "X\xF3a c\xE2u h\u1ECFi", 1, "p-2", "text-gray-400", "hover:text-red-600", "hover:bg-red-50", "rounded-lg", "transition", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"], [1, "my-3", "p-3", "bg-indigo-50/70", "rounded-2xl", "border", "border-indigo-100"], [1, "text-xs", "font-bold", "text-indigo-900", "mb-1", "flex", "items-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "mr-1", "text-indigo-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"], ["controls", "", 1, "w-full", "h-10", "outline-none", 3, "src"], [1, "my-3"], [1, "max-h-60", "rounded-2xl", "border", "border-gray-200", "shadow-xs", "object-cover", 3, "src"], [1, "space-y-2", "mt-3", "pl-1"], ["class", "flex items-center p-3 rounded-xl border transition text-sm", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "p-3", "rounded-xl", "border", "transition", "text-sm", 3, "ngClass"], [1, "w-6", "h-6", "rounded-full", "border", "flex", "items-center", "justify-center", "text-xs", "font-bold", "mr-3", "shrink-0", 3, "ngClass"], ["class", "w-5 h-5 ml-auto text-emerald-600 shrink-0", "fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 4, "ngIf"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "ml-auto", "text-emerald-600", "shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M5 13l4 4L19 7"], [1, "mt-3", "p-3.5", "bg-amber-50/70", "border", "border-amber-200/80", "rounded-xl", "text-xs", "text-amber-900", "flex", "items-start"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "mr-2", "text-amber-600", "shrink-0", "mt-0.5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "font-bold", "text-amber-950", "block", "mb-0.5"], [1, "whitespace-pre-wrap", "leading-relaxed", "text-amber-900", "font-medium"], [1, "fixed", "inset-0", "z-[80]", "flex", "items-center", "justify-center", "p-4", "sm:p-0"], [1, "absolute", "inset-0", "bg-gray-900/60", "backdrop-blur-sm", "transition-opacity", 3, "click"], [1, "relative", "bg-white", "rounded-3xl", "shadow-2xl", "w-full", "max-w-3xl", "max-h-[90vh]", "flex", "flex-col", "overflow-hidden", "transform", "transition-all"], [1, "bg-gradient-to-r", "from-indigo-600", "to-purple-700", "px-6", "py-4", "flex", "justify-between", "items-center", "shrink-0"], [1, "flex", "items-center", "text-white"], [1, "w-8", "h-8", "rounded-full", "bg-white/20", "flex", "items-center", "justify-center", "mr-3"], [1, "text-xl", "font-bold", "tracking-wide"], [1, "text-indigo-100", "hover:text-white", "p-2", "rounded-full", "transition", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "flex-1", "overflow-y-auto", "p-6", "sm:p-8", "space-y-5", "custom-scrollbar", 3, "ngSubmit", "formGroup"], [1, "grid", "grid-cols-3", "gap-6"], [1, "col-span-2"], [1, "block", "text-sm", "font-bold", "text-gray-700", "mb-2"], ["formControlName", "questionType", 1, "bg-gray-50", "border", "border-gray-200", "text-gray-900", "text-sm", "rounded-xl", "focus:ring-2", "focus:ring-indigo-100", "focus:border-indigo-500", "block", "w-full", "p-3", "outline-none", "font-medium"], ["value", "MULTIPLE_CHOICE"], ["value", "ESSAY"], ["value", "FILL_BLANK"], [1, "col-span-1"], ["formControlName", "scoreWeight", "type", "number", "step", "0.5", "min", "0", 1, "bg-gray-50", "border", "border-gray-200", "text-indigo-700", "text-base", "font-bold", "rounded-xl", "focus:ring-2", "focus:ring-indigo-100", "focus:border-indigo-500", "block", "w-full", "p-2.5", "outline-none", "text-center"], [1, "text-red-500"], ["formControlName", "content", "rows", "3", "placeholder", "Nh\u1EADp c\xE2u h\u1ECFi v\xE0o \u0111\xE2y...", 1, "bg-gray-50", "border", "border-gray-200", "text-gray-900", "text-sm", "rounded-xl", "focus:ring-2", "focus:ring-indigo-100", "focus:border-indigo-500", "block", "w-full", "p-3.5", "outline-none", "resize-none", "font-medium"], [1, "block", "text-sm", "font-bold", "text-indigo-900", "mb-2"], [1, "flex", "items-center", "space-x-3"], ["type", "file", "accept", "audio/*,image/*", 1, "hidden", 3, "change"], ["type", "button", 1, "px-4", "py-2.5", "text-sm", "font-bold", "text-indigo-700", "bg-indigo-50", "border", "border-indigo-200", "hover:bg-indigo-100", "rounded-xl", "transition", "flex", "items-center", "shadow-2xs", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "mr-2", "text-indigo-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"], ["class", "text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-2 rounded-xl border border-emerald-200 flex items-center", 4, "ngIf"], ["class", "bg-indigo-50/50 rounded-2xl p-5 border border-indigo-100 space-y-3", 4, "ngIf"], [1, "block", "text-sm", "font-bold", "text-amber-800", "mb-2"], ["formControlName", "readingPassage", "rows", "2.5", "placeholder", "Nh\u1EADp gi\u1EA3i th\xEDch \u0111\xE1p \xE1n ho\u1EB7c l\u1EDDi gi\u1EA3i chi ti\u1EBFt (Hi\u1EC3n th\u1ECB khi h\u1ECDc sinh xem l\u1EA1i b\xE0i l\xE0m)...", 1, "bg-amber-50/40", "border", "border-amber-200", "text-gray-900", "text-sm", "rounded-xl", "focus:ring-2", "focus:ring-amber-100", "focus:border-amber-500", "block", "w-full", "p-3.5", "outline-none", "resize-none", "font-medium"], [1, "bg-gray-50", "border-t", "border-gray-100", "px-6", "py-4", "flex", "justify-end", "space-x-3", "shrink-0"], ["type", "button", 1, "px-6", "py-2.5", "text-sm", "font-bold", "text-gray-700", "bg-white", "border", "border-gray-300", "rounded-xl", "hover:bg-gray-50", "transition", 3, "click"], ["type", "submit", 1, "px-8", "py-2.5", "text-sm", "font-bold", "text-white", "bg-indigo-600", "rounded-xl", "hover:bg-indigo-700", "disabled:bg-indigo-300", "shadow-md", "transition", "flex", "items-center", 3, "click", "disabled"], ["class", "animate-spin -ml-1 mr-2 h-4 w-4 text-white", "fill", "none", "viewBox", "0 0 24 24", 4, "ngIf"], [1, "text-xs", "font-semibold", "text-emerald-700", "bg-emerald-50", "px-3", "py-2", "rounded-xl", "border", "border-emerald-200", "flex", "items-center"], ["type", "button", 1, "ml-2", "text-rose-500", "hover:text-rose-700", "font-bold", "text-sm", 3, "click"], [1, "bg-indigo-50/50", "rounded-2xl", "p-5", "border", "border-indigo-100", "space-y-3"], [1, "flex", "justify-between", "items-center", "mb-2"], [1, "text-sm", "font-bold", "text-indigo-900"], ["type", "button", 1, "text-xs", "font-bold", "text-indigo-600", "bg-white", "border", "border-indigo-200", "hover:bg-indigo-50", "px-3", "py-1.5", "rounded-lg", "transition", 3, "click"], ["formArrayName", "options", 1, "space-y-3"], ["class", "flex items-center space-x-3 bg-white p-2.5 rounded-xl border border-gray-200 shadow-2xs transition-all focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500", 3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "space-x-3", "bg-white", "p-2.5", "rounded-xl", "border", "border-gray-200", "shadow-2xs", "transition-all", "focus-within:border-indigo-500", "focus-within:ring-1", "focus-within:ring-indigo-500", 3, "formGroupName"], ["title", "T\xEDch ch\u1ECDn \u0111\xE1p \xE1n \u0111\xFAng", 1, "flex", "items-center", "justify-center", "pl-2", "cursor-pointer", "group"], ["type", "checkbox", "formControlName", "isCorrect", 1, "w-5", "h-5", "text-emerald-600", "bg-gray-100", "border-gray-300", "rounded", "focus:ring-emerald-500", "cursor-pointer"], [1, "font-bold", "text-gray-400", "w-5", "text-center", "shrink-0"], ["type", "text", "formControlName", "optionContent", "placeholder", "Nh\u1EADp n\u1ED9i dung \u0111\xE1p \xE1n...", 1, "flex-1", "bg-transparent", "border-0", "text-sm", "text-gray-900", "outline-none", "p-1", "focus:ring-0", "placeholder-gray-400", "font-medium"], ["type", "button", "title", "X\xF3a", 1, "p-1.5", "text-gray-400", "hover:text-red-500", "hover:bg-red-50", "rounded-lg", "transition", "shrink-0", 3, "click"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "-ml-1", "mr-2", "h-4", "w-4", "text-white"], [1, "fixed", "inset-0", "z-[90]", "flex", "items-center", "justify-center", "p-4", "sm:p-0"], [1, "relative", "bg-white", "rounded-3xl", "shadow-2xl", "w-full", "max-w-sm", "p-6", "text-center", "transform", "transition-all"], [1, "mx-auto", "flex", "items-center", "justify-center", "h-16", "w-16", "rounded-full", "bg-red-50", "mb-4", "border-4", "border-red-100"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "h-8", "w-8", "text-red-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"], [1, "text-xl", "font-extrabold", "text-gray-900", "mb-2"], [1, "text-gray-500", "text-sm", "mb-6"], [1, "flex", "space-x-3"], ["type", "button", 1, "flex-1", "py-2.5", "text-sm", "font-bold", "text-gray-700", "bg-gray-100", "rounded-xl", "hover:bg-gray-200", "transition", 3, "click"], ["type", "button", 1, "flex-1", "py-2.5", "text-sm", "font-bold", "text-white", "bg-red-600", "rounded-xl", "hover:bg-red-700", "disabled:bg-red-300", "transition", "flex", "items-center", "justify-center", 3, "click", "disabled"]], template: function AssignmentDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 2);
      \u0275\u0275template(1, AssignmentDetailComponent_div_1_Template, 4, 0, "div", 3)(2, AssignmentDetailComponent_ng_container_2_Template, 108, 34, "ng-container", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275template(3, AssignmentDetailComponent_div_3_Template, 57, 8, "div", 5)(4, AssignmentDetailComponent_div_4_Template, 16, 2, "div", 6);
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading() && ctx.assignment());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isQuestionModalOpen());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isDeleteQuestionModalOpen());
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, RouterModule, RouterLink, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormGroupDirective, FormControlName, FormGroupName, FormArrayName, DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssignmentDetailComponent, [{
    type: Component,
    args: [{ selector: "app-assignment-detail", standalone: true, imports: [CommonModule, RouterModule, ReactiveFormsModule], template: `<div class="space-y-6 max-w-7xl mx-auto p-4 sm:p-6">
  
  <div *ngIf="isLoading()" class="flex justify-center py-20">
    <svg class="animate-spin h-10 w-10 text-indigo-600" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
  </div>

  <ng-container *ngIf="!isLoading() && assignment()">
    
    <div class="flex items-center space-x-2 text-sm text-gray-500 mb-2">
      <a [routerLink]="['/teacher/classes', assignment().classId]" class="hover:text-indigo-600 transition flex items-center cursor-pointer font-medium">
        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
        {{ assignment().className || assignment().classCode || 'L\u1EDBp h\u1ECDc' }}
      </a>
      <span>/</span>
      <span class="text-gray-900 font-medium">Qu\u1EA3n l\xFD c\xE2u h\u1ECFi b\xE0i t\u1EADp</span>
    </div>

    <!-- Header Card -->
    <div class="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-200 flex flex-col md:flex-row justify-between md:items-start gap-6">
      <div class="flex items-start flex-1">
        <div class="w-16 h-16 rounded-2xl bg-indigo-50 flex items-center justify-center mr-5 shrink-0 border border-indigo-100 text-indigo-600 shadow-xs">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg>
        </div>
        <div>
          <div class="flex items-center flex-wrap gap-3 mb-2">
            <h1 class="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">{{ assignment().title }}</h1>
            <span class="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-lg border"
                  [ngClass]="assignment().status === 'PUBLISHED' || assignment().status === 'published' ? 'bg-green-50 text-green-700 border-green-200' : 'bg-gray-100 text-gray-600 border-gray-200'">
              {{ assignment().status === 'PUBLISHED' || assignment().status === 'published' ? '\u0110ang m\u1EDF (Published)' : 'Nh\xE1p / \u0110ang \u1EA9n' }}
            </span>
          </div>
          <p class="text-gray-500 text-sm flex items-center">
            B\xE0i h\u1ECDc: <strong class="ml-1 text-indigo-700 font-bold">{{ assignment().lessonName }}</strong>
            <span class="mx-2">\u2022</span>
            H\u1EA1n n\u1ED9p: <strong class="ml-1 text-gray-700">{{ assignment().dueDate ? (assignment().dueDate | date:'dd/MM/yyyy HH:mm') : 'Kh\xF4ng gi\u1EDBi h\u1EA1n' }}</strong>
          </p>
        </div>
      </div>

      <div class="flex space-x-3 shrink-0">
        <button [routerLink]="['/teacher/assignments/edit', assignment().id]" class="px-5 py-2.5 text-sm font-bold text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 rounded-xl shadow-sm transition flex items-center">
          <svg class="w-4 h-4 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg> S\u1EEDa b\xE0i t\u1EADp
        </button>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      
      <div class="lg:col-span-2 space-y-6">
        
        <!-- H\u01B0\u1EDBng d\u1EABn b\xE0i t\u1EADp -->
        <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
          <h3 class="text-lg font-bold text-gray-900 mb-3 border-b border-gray-100 pb-3">H\u01B0\u1EDBng d\u1EABn l\xE0m b\xE0i</h3>
          <div class="prose max-w-none text-gray-700 text-sm leading-relaxed whitespace-pre-wrap">
            {{ assignment().description || 'Kh\xF4ng c\xF3 m\xF4 t\u1EA3 h\u01B0\u1EDBng d\u1EABn.' }}
          </div>
        </div>

        <!-- Danh s\xE1ch C\xE2u h\u1ECFi -->
        <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          
          <div class="p-6 border-b border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center bg-gray-50/50 gap-4">
            <div class="flex items-center space-x-2">
              <h3 class="text-lg font-bold text-gray-900">Danh s\xE1ch C\xE2u h\u1ECFi</h3>
              <span *ngIf="assignmentQuestions().length > 0" class="bg-indigo-100 text-indigo-700 font-bold px-2.5 py-0.5 rounded-full text-xs">{{ assignmentQuestions().length }} c\xE2u</span>
            </div>

            <div class="flex flex-wrap items-center gap-2">
              <input type="file" #excelInput class="hidden" accept=".xlsx, .xls" (change)="onExcelFileSelected($event)">
              
              <button (click)="openQuestionModal()" class="px-4 py-2 text-sm font-bold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 rounded-xl transition flex items-center border border-indigo-200 shadow-2xs">
                <svg class="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg> Th\xEAm c\xE2u h\u1ECFi
              </button>

              <button (click)="downloadTemplate()" title="T\u1EA3i m\u1EABu file Excel ra \u0111\u1EC1" class="px-3 py-2 text-sm font-bold text-gray-700 bg-white hover:bg-gray-50 border border-gray-200 rounded-xl transition flex items-center">
                \u{1F4C4} T\u1EA3i file m\u1EABu Excel
              </button>

              <button (click)="excelInput.click()" [disabled]="isImporting()" class="px-4 py-2 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 rounded-xl shadow-md transition flex items-center">
                <svg *ngIf="isImporting()" class="animate-spin -ml-1 mr-1.5 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                <svg *ngIf="!isImporting()" class="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
                {{ isImporting() ? '\u0110ang x\u1EED l\xFD...' : 'Import Excel' }}
              </button>
            </div>
          </div>

          <div *ngIf="isLoadingQuestions()" class="py-12 text-center text-indigo-500">
            <svg class="animate-spin inline-block h-8 w-8" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
          </div>

          <div *ngIf="!isLoadingQuestions() && assignmentQuestions().length === 0" class="p-12 text-center text-gray-500 bg-gray-50/30">
            <svg class="mx-auto h-12 w-12 text-gray-300 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
            <p>B\xE0i t\u1EADp n\xE0y ch\u01B0a c\xF3 c\xE2u h\u1ECFi n\xE0o. B\u1EA1n h\xE3y nh\u1EA5n "Th\xEAm c\xE2u h\u1ECFi" ho\u1EB7c s\u1EED d\u1EE5ng "Import Excel".</p>
          </div>

          <div *ngIf="!isLoadingQuestions() && assignmentQuestions().length > 0" class="divide-y divide-gray-100">
            <div *ngFor="let aq of assignmentQuestions(); let i = index" class="p-6 hover:bg-gray-50/50 transition">
              <div class="flex items-start justify-between">
                <div class="flex items-start flex-1 pr-4">
                  
                  <span class="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 font-extrabold text-sm shrink-0 mr-4 mt-0.5 shadow-2xs">{{ aq.orderNumber || (i + 1) }}</span>
                  
                  <div class="flex-1">
                    <h4 class="text-base font-bold text-gray-900 leading-relaxed">{{ aq.question?.content || aq.questionText || 'C\xE2u h\u1ECFi' }}</h4>
                    
                    <div class="flex items-center space-x-3 mt-1.5 mb-3">
                      <span class="text-[11px] font-bold px-2.5 py-0.5 rounded bg-gray-100 text-gray-600 border border-gray-200 uppercase tracking-wider">
                        {{ getAssignmentTypeName(aq.question?.questionType || 'MULTIPLE_CHOICE') }}
                      </span>
                      <span class="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100">H\u1EC7 s\u1ED1 \u0111i\u1EC3m: {{ aq.scoreWeight || 1 }}</span>
                    </div>

                    <!-- Audio player n\u1EBFu c\xF3 (Hi\u1EC3n th\u1ECB ngay d\u01B0\u1EDBi n\u1ED9i dung c\xE2u h\u1ECFi) -->
                    <div *ngIf="aq.question?.downloadMediaUrl && (isAudioUrl(aq.question?.downloadMediaUrl) || aq.question?.questionType === 'LISTENING')" class="my-3 p-3 bg-indigo-50/70 rounded-2xl border border-indigo-100">
                      <p class="text-xs font-bold text-indigo-900 mb-1 flex items-center">
                        <svg class="w-4 h-4 mr-1 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path></svg>
                        Audio file b\xE0i nghe:
                      </p>
                      <audio controls [src]="aq.question.downloadMediaUrl" class="w-full h-10 outline-none"></audio>
                    </div>

                    <!-- H\xECnh \u1EA3nh minh h\u1ECDa n\u1EBFu c\xF3 (Hi\u1EC3n th\u1ECB ngay d\u01B0\u1EDBi n\u1ED9i dung c\xE2u h\u1ECFi) -->
                    <div *ngIf="aq.question?.downloadMediaUrl && isImageUrl(aq.question?.downloadMediaUrl)" class="my-3">
                      <img [src]="aq.question.downloadMediaUrl" class="max-h-60 rounded-2xl border border-gray-200 shadow-xs object-cover">
                    </div>

                    <!-- M\u1EA1ch \u0111\xE1p \xE1n Tr\u1EAFc nghi\u1EC7m (N\u1EBFu c\xF3) -->
                    <div *ngIf="(aq.question?.options || []).length > 0" class="space-y-2 mt-3 pl-1">
                      <div *ngFor="let opt of (aq.question?.options || []); let optIndex = index"
                           class="flex items-center p-3 rounded-xl border transition text-sm"
                           [ngClass]="opt.isCorrect ? 'bg-emerald-50 border-emerald-300 text-emerald-900 font-semibold' : 'bg-white border-gray-200 text-gray-700'">
                        <div class="w-6 h-6 rounded-full border flex items-center justify-center text-xs font-bold mr-3 shrink-0"
                             [ngClass]="opt.isCorrect ? 'bg-emerald-600 border-emerald-600 text-white shadow-xs' : 'bg-gray-50 border-gray-300 text-gray-500'">
                          {{ getAlphabetLetter(optIndex) }}
                        </div>
                        <span class="flex-1">{{ opt.optionContent || opt.optionText }}</span>
                        <svg *ngIf="opt.isCorrect" class="w-5 h-5 ml-auto text-emerald-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                      </div>
                    </div>

                    <!-- Gi\u1EA3i th\xEDch \u0111\xE1p \xE1n n\u1EBFu c\xF3 -->
                    <div *ngIf="aq.question?.readingPassage" class="mt-3 p-3.5 bg-amber-50/70 border border-amber-200/80 rounded-xl text-xs text-amber-900 flex items-start">
                      <svg class="w-4 h-4 mr-2 text-amber-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      <div>
                        <strong class="font-bold text-amber-950 block mb-0.5">\u{1F4A1} Gi\u1EA3i th\xEDch \u0111\xE1p \xE1n / L\u1EDDi gi\u1EA3i:</strong>
                        <p class="whitespace-pre-wrap leading-relaxed text-amber-900 font-medium">{{ aq.question.readingPassage }}</p>
                      </div>
                    </div>

                  </div>
                </div>

                <div class="flex items-center space-x-1 shrink-0 ml-4">
                  <button (click)="editQuestion(aq)" class="p-2 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition" title="S\u1EEDa c\xE2u h\u1ECFi">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                  </button>
                  <button (click)="openDeleteQuestionModal(aq.questionId || aq.question?.id)" class="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition" title="X\xF3a c\xE2u h\u1ECFi">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- Right Column: Sidebar Configuration -->
      <div class="lg:col-span-1 space-y-6">
        <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h3 class="text-sm font-extrabold uppercase text-gray-400 tracking-wider mb-5">Th\xF4ng tin b\xE0i t\u1EADp</h3>
          
          <ul class="space-y-4 text-sm">
            <li class="flex items-start">
              <svg class="w-5 h-5 text-indigo-400 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg>
              <div>
                <p class="text-gray-500 font-medium">Ph\xE2n lo\u1EA1i</p>
                <p class="font-bold text-gray-900 mt-0.5">{{ getAssignmentTypeName(assignment().assignmentType) }}</p>
              </div>
            </li>
            
            <li class="flex items-start">
              <svg class="w-5 h-5 text-amber-500 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <div>
                <p class="text-gray-500 font-medium">H\u1EA1n ch\xF3t n\u1ED9p b\xE0i</p>
                <p class="font-bold text-red-600 mt-0.5">{{ assignment().dueDate ? (assignment().dueDate | date:'dd/MM/yyyy HH:mm') : 'Kh\xF4ng gi\u1EDBi h\u1EA1n' }}</p>
              </div>
            </li>

            <li class="flex items-start">
              <svg class="w-5 h-5 text-emerald-500 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <div>
                <p class="text-gray-500 font-medium">Th\u1EDDi gian l\xE0m b\xE0i</p>
                <p class="font-bold text-gray-900 mt-0.5">{{ assignment().timeLimitMinutes ? assignment().timeLimitMinutes + ' ph\xFAt' : 'Kh\xF4ng gi\u1EDBi h\u1EA1n' }}</p>
              </div>
            </li>

            <li class="flex items-start">
              <svg class="w-5 h-5 text-blue-500 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <div>
                <p class="text-gray-500 font-medium">S\u1ED1 l\u1EA7n l\xE0m t\u1ED1i \u0111a</p>
                <p class="font-bold text-gray-900 mt-0.5">{{ assignment().maxAttempts || 1 }} l\u1EA7n</p>
              </div>
            </li>
          </ul>

          <div class="mt-6 pt-5 border-t border-gray-100">
            <a [routerLink]="['/teacher/assignments', assignment().id, 'submissions']" class="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-md transition flex items-center justify-center">
              Ch\u1EA5m b\xE0i & Xem k\u1EBFt qu\u1EA3
              <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            </a>
          </div>
        </div>

      </div>
    </div>
  </ng-container>
</div>

<!-- Modal Th\xEAm / S\u1EEDa C\xE2u h\u1ECFi -->
<div *ngIf="isQuestionModalOpen()" class="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-0">
  <div class="absolute inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity" (click)="closeQuestionModal()"></div>
  
  <div class="relative bg-white rounded-3xl shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden transform transition-all">
    
    <div class="bg-gradient-to-r from-indigo-600 to-purple-700 px-6 py-4 flex justify-between items-center shrink-0">
      <div class="flex items-center text-white">
        <div class="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-3"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg></div>
        <h3 class="text-xl font-bold tracking-wide">
          {{ editingQuestion() ? 'Ch\u1EC9nh s\u1EEDa c\xE2u h\u1ECFi' : 'So\u1EA1n c\xE2u h\u1ECFi m\u1EDBi' }}
        </h3>
      </div>
      <button (click)="closeQuestionModal()" class="text-indigo-100 hover:text-white p-2 rounded-full transition"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button>
    </div>

    <form [formGroup]="questionForm" (ngSubmit)="submitQuestion()" class="flex-1 overflow-y-auto p-6 sm:p-8 space-y-5 custom-scrollbar">
      
      <div class="grid grid-cols-3 gap-6">
        <div class="col-span-2">
          <label class="block text-sm font-bold text-gray-700 mb-2">Lo\u1EA1i c\xE2u h\u1ECFi</label>
          <select formControlName="questionType" class="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500 block w-full p-3 outline-none font-medium">
            <option value="MULTIPLE_CHOICE">\u2753 Tr\u1EAFc nghi\u1EC7m nhi\u1EC1u l\u1EF1a ch\u1ECDn</option>
            <option value="ESSAY">\u270D\uFE0F T\u1EF1 lu\u1EADn (G\xF5 v\u0103n b\u1EA3n)</option>
            <option value="FILL_BLANK">\u{1F4DD} \u0110i\u1EC1n t\u1EEB v\xE0o ch\u1ED7 tr\u1ED1ng</option>
          </select>
        </div>
        <div class="col-span-1">
          <label class="block text-sm font-bold text-gray-700 mb-2">H\u1EC7 s\u1ED1 \u0111i\u1EC3m</label>
          <input formControlName="scoreWeight" type="number" step="0.5" min="0" class="bg-gray-50 border border-gray-200 text-indigo-700 text-base font-bold rounded-xl focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500 block w-full p-2.5 outline-none text-center">
        </div>
      </div>

      <div>
        <label class="block text-sm font-bold text-gray-700 mb-2">N\u1ED9i dung c\xE2u h\u1ECFi <span class="text-red-500">*</span></label>
        <textarea formControlName="content" rows="3" class="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500 block w-full p-3.5 outline-none resize-none font-medium" placeholder="Nh\u1EADp c\xE2u h\u1ECFi v\xE0o \u0111\xE2y..."></textarea>
      </div>

      <!-- T\u1EC7p \u0111\xEDnh k\xE8m Media / Audio b\xE0i nghe -->
      <div>
        <label class="block text-sm font-bold text-indigo-900 mb-2">T\u1EC7p \xE2m thanh b\xE0i nghe / H\xECnh \u1EA3nh minh h\u1ECDa (N\u1EBFu c\xF3)</label>
        <div class="flex items-center space-x-3">
          <input type="file" #mediaInput class="hidden" accept="audio/*,image/*" (change)="onMediaFileSelected($event)">
          
          <button type="button" (click)="mediaInput.click()" class="px-4 py-2.5 text-sm font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 hover:bg-indigo-100 rounded-xl transition flex items-center shadow-2xs">
            <svg class="w-4 h-4 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path></svg>
            {{ selectedMediaFile() ? '\u0110\u1ED5i t\u1EC7p kh\xE1c' : 'Ch\u1ECDn t\u1EC7p Audio (.mp3, .wav) ho\u1EB7c \u1EA2nh' }}
          </button>

          <span *ngIf="selectedMediaFile()" class="text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-2 rounded-xl border border-emerald-200 flex items-center">
            \u{1F4CE} {{ selectedMediaFile()?.name }}
            <button type="button" (click)="removeSelectedMediaFile()" class="ml-2 text-rose-500 hover:text-rose-700 font-bold text-sm">\u2715</button>
          </span>
        </div>
      </div>

      <div *ngIf="questionForm.get('questionType')?.value === 'MULTIPLE_CHOICE' || questionForm.get('questionType')?.value === 'multiple_choice'" class="bg-indigo-50/50 rounded-2xl p-5 border border-indigo-100 space-y-3">
        <div class="flex justify-between items-center mb-2">
          <label class="text-sm font-bold text-indigo-900">C\xE1c \u0111\xE1p \xE1n l\u1EF1a ch\u1ECDn (T\xEDch ch\u1ECDn \xF4 b\xEAn tr\xE1i cho \u0111\xE1p \xE1n \u0110\xDANG)</label>
          <button type="button" (click)="addOption()" class="text-xs font-bold text-indigo-600 bg-white border border-indigo-200 hover:bg-indigo-50 px-3 py-1.5 rounded-lg transition">+ Th\xEAm \u0111\xE1p \xE1n</button>
        </div>
        
        <div formArrayName="options" class="space-y-3">
          <div *ngFor="let opt of optionsFormArray.controls; let i = index" [formGroupName]="i" class="flex items-center space-x-3 bg-white p-2.5 rounded-xl border border-gray-200 shadow-2xs transition-all focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500">
            
            <label class="flex items-center justify-center pl-2 cursor-pointer group" title="T\xEDch ch\u1ECDn \u0111\xE1p \xE1n \u0111\xFAng">
              <input type="checkbox" formControlName="isCorrect" class="w-5 h-5 text-emerald-600 bg-gray-100 border-gray-300 rounded focus:ring-emerald-500 cursor-pointer">
            </label>
            
            <div class="font-bold text-gray-400 w-5 text-center shrink-0">{{ getAlphabetLetter(i) }}</div>
            
            <input type="text" formControlName="optionContent" class="flex-1 bg-transparent border-0 text-sm text-gray-900 outline-none p-1 focus:ring-0 placeholder-gray-400 font-medium" placeholder="Nh\u1EADp n\u1ED9i dung \u0111\xE1p \xE1n...">
            
            <button type="button" (click)="removeOption(i)" class="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition shrink-0" title="X\xF3a">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>
        </div>
      </div>

      <div>
        <label class="block text-sm font-bold text-amber-800 mb-2">\u{1F4A1} Gi\u1EA3i th\xEDch \u0111\xE1p \xE1n / L\u1EDDi gi\u1EA3i chi ti\u1EBFt (Kh\xF4ng b\u1EAFt bu\u1ED9c)</label>
        <textarea formControlName="readingPassage" rows="2.5" class="bg-amber-50/40 border border-amber-200 text-gray-900 text-sm rounded-xl focus:ring-2 focus:ring-amber-100 focus:border-amber-500 block w-full p-3.5 outline-none resize-none font-medium" placeholder="Nh\u1EADp gi\u1EA3i th\xEDch \u0111\xE1p \xE1n ho\u1EB7c l\u1EDDi gi\u1EA3i chi ti\u1EBFt (Hi\u1EC3n th\u1ECB khi h\u1ECDc sinh xem l\u1EA1i b\xE0i l\xE0m)..."></textarea>
      </div>

    </form>

    <div class="bg-gray-50 border-t border-gray-100 px-6 py-4 flex justify-end space-x-3 shrink-0">
      <button type="button" (click)="closeQuestionModal()" class="px-6 py-2.5 text-sm font-bold text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition">H\u1EE7y b\u1ECF</button>
      <button type="submit" (click)="submitQuestion()" [disabled]="questionForm.invalid || isSavingQuestion()" class="px-8 py-2.5 text-sm font-bold text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 disabled:bg-indigo-300 shadow-md transition flex items-center">
        <svg *ngIf="isSavingQuestion()" class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
        {{ isSavingQuestion() ? '\u0110ang l\u01B0u...' : (editingQuestion() ? 'C\u1EADp nh\u1EADt c\xE2u h\u1ECFi' : 'L\u01B0u c\xE2u h\u1ECFi') }}
      </button>
    </div>
  </div>
</div>

<!-- Modal X\xF3a C\xE2u h\u1ECFi -->
<div *ngIf="isDeleteQuestionModalOpen()" class="fixed inset-0 z-[90] flex items-center justify-center p-4 sm:p-0">
  <div class="absolute inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity" (click)="closeDeleteQuestionModal()"></div>
  
  <div class="relative bg-white rounded-3xl shadow-2xl w-full max-w-sm p-6 text-center transform transition-all">
    <div class="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-50 mb-4 border-4 border-red-100">
      <svg class="h-8 w-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
    </div>
    <h3 class="text-xl font-extrabold text-gray-900 mb-2">X\xF3a c\xE2u h\u1ECFi?</h3>
    <p class="text-gray-500 text-sm mb-6">B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n g\u1EE1 c\xE2u h\u1ECFi n\xE0y kh\u1ECFi b\xE0i t\u1EADp kh\xF4ng?</p>

    <div class="flex space-x-3">
      <button type="button" (click)="closeDeleteQuestionModal()" class="flex-1 py-2.5 text-sm font-bold text-gray-700 bg-gray-100 rounded-xl hover:bg-gray-200 transition">H\u1EE7y</button>
      <button type="button" (click)="confirmDeleteQuestion()" [disabled]="isDeletingQuestion()" class="flex-1 py-2.5 text-sm font-bold text-white bg-red-600 rounded-xl hover:bg-red-700 disabled:bg-red-300 transition flex items-center justify-center">
        <svg *ngIf="isDeletingQuestion()" class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
        X\xF3a
      </button>
    </div>
  </div>
</div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssignmentDetailComponent, { className: "AssignmentDetailComponent", filePath: "src/app/features/teacher/pages/assignment-detail/assignment-detail.component.ts", lineNumber: 16 });
})();

// src/app/features/teacher/services/assignment-submission.service.ts
var AssignmentSubmissionService = class _AssignmentSubmissionService {
  http = inject(HttpClient);
  submissionUrl = `${environment.apiUrl}/api/v1/assignment-submissions`;
  attachmentUrl = `${environment.apiUrl}/api/v1/submission-attachments`;
  // Lấy danh sách bài nộp theo Assignment (Hỗ trợ phân trang và lọc)
  getSubmissions(assignmentId, page = 1, status = "") {
    let params = new HttpParams().set("page", page.toString()).set("size", "10").set("sortBy", "submittedAt").set("sortDir", "desc");
    if (status && status !== "ALL") {
      params = params.set("status", status);
    }
    return this.http.get(`${this.submissionUrl}/assignment/${assignmentId}`, { params });
  }
  // Lấy file đính kèm của 1 bài nộp
  getAttachments(submissionId) {
    return this.http.get(`${this.attachmentUrl}/submission/${submissionId}`);
  }
  // Chấm điểm bài nộp
  gradeSubmission(submissionId, payload) {
    return this.http.patch(`${this.submissionUrl}/${submissionId}/grade`, payload);
  }
  // Lấy chi tiết các câu trả lời của 1 bài nộp
  getSubmissionAnswers(submissionId) {
    return this.http.get(`${environment.apiUrl}/api/v1/submission-answers/submission/${submissionId}`);
  }
  // Kích hoạt chấm điểm tự động cho bài nộp (thường dùng cho bài Hỗn hợp)
  triggerAutoGrade(submissionId) {
    return this.http.post(`${environment.apiUrl}/api/v1/submission-answers/submission/${submissionId}/auto-grade`, {});
  }
  static \u0275fac = function AssignmentSubmissionService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AssignmentSubmissionService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AssignmentSubmissionService, factory: _AssignmentSubmissionService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssignmentSubmissionService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/features/teacher/pages/assignment-submission/assignment-submissions.component.ts
function AssignmentSubmissionsComponent_tr_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 32);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 33);
    \u0275\u0275element(3, "circle", 34)(4, "path", 35);
    \u0275\u0275elementEnd()()();
  }
}
function AssignmentSubmissionsComponent_tr_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 36);
    \u0275\u0275text(2, "Kh\xF4ng t\xECm th\u1EA5y b\xE0i n\u1ED9p n\xE0o ph\xF9 h\u1EE3p.");
    \u0275\u0275elementEnd()();
  }
}
function AssignmentSubmissionsComponent_tr_42_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, s_r1.submittedAt, "dd/MM/yyyy"));
  }
}
function AssignmentSubmissionsComponent_tr_42_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, s_r1.submittedAt, "HH:mm:ss"));
  }
}
function AssignmentSubmissionsComponent_tr_42_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275text(1, "--");
    \u0275\u0275elementEnd();
  }
}
function AssignmentSubmissionsComponent_tr_42_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 50);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r1.score);
  }
}
function AssignmentSubmissionsComponent_tr_42_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 51);
    \u0275\u0275text(1, "--");
    \u0275\u0275elementEnd();
  }
}
function AssignmentSubmissionsComponent_tr_42_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 52);
    \u0275\u0275listener("click", function AssignmentSubmissionsComponent_tr_42_button_17_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const s_r1 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openGradeModal(s_r1));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("ngClass", s_r1.score === null ? "bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm" : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", s_r1.score === null ? "Ch\u1EA5m \u0111i\u1EC3m" : "S\u1EEDa \u0111i\u1EC3m", " ");
  }
}
function AssignmentSubmissionsComponent_tr_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 37)(1, "td", 19)(2, "div", 38);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 39);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 20)(7, "span", 40);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td", 19);
    \u0275\u0275template(10, AssignmentSubmissionsComponent_tr_42_div_10_Template, 3, 4, "div", 41)(11, AssignmentSubmissionsComponent_tr_42_div_11_Template, 3, 4, "div", 42)(12, AssignmentSubmissionsComponent_tr_42_div_12_Template, 2, 0, "div", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 20);
    \u0275\u0275template(14, AssignmentSubmissionsComponent_tr_42_span_14_Template, 2, 1, "span", 44)(15, AssignmentSubmissionsComponent_tr_42_span_15_Template, 2, 0, "span", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 21);
    \u0275\u0275template(17, AssignmentSubmissionsComponent_tr_42_button_17_Template, 2, 2, "button", 46);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r1 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r1.studentName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("M\xE3 HS: ", s_r1.studentCode);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r2.getStatusLabel(s_r1.submissionStatus, s_r1.isLate).class);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getStatusLabel(s_r1.submissionStatus, s_r1.isLate).text, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", s_r1.submittedAt);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", s_r1.submittedAt);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !s_r1.submittedAt);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", s_r1.score !== null);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", s_r1.score === null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", s_r1.submissionStatus !== "not_submitted" && s_r1.submissionStatus !== "draft");
  }
}
function AssignmentSubmissionsComponent_div_56_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 95);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 96);
    \u0275\u0275element(2, "circle", 34)(3, "path", 35);
    \u0275\u0275elementEnd()();
  }
}
function AssignmentSubmissionsComponent_div_56_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 97);
    \u0275\u0275text(1, "Kh\xF4ng c\xF3 file \u0111\xEDnh k\xE8m.");
    \u0275\u0275elementEnd();
  }
}
function AssignmentSubmissionsComponent_div_56_ul_29_li_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 100)(1, "div", 101)(2, "div", 102);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 103);
    \u0275\u0275element(4, "path", 104);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div", 105)(6, "p", 106);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 107);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "a", 108);
    \u0275\u0275text(11, "T\u1EA3i / Xem");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const file_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(file_r5.fileName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatBytes(file_r5.fileSize));
    \u0275\u0275advance();
    \u0275\u0275property("href", file_r5.fileUrl, \u0275\u0275sanitizeUrl);
  }
}
function AssignmentSubmissionsComponent_div_56_ul_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 98);
    \u0275\u0275template(1, AssignmentSubmissionsComponent_div_56_ul_29_li_1_Template, 12, 3, "li", 99);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.attachments());
  }
}
function AssignmentSubmissionsComponent_div_56_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 95);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 96);
    \u0275\u0275element(2, "circle", 34)(3, "path", 35);
    \u0275\u0275elementEnd()();
  }
}
function AssignmentSubmissionsComponent_div_56_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 109);
    \u0275\u0275text(1, " B\xE0i t\u1EADp n\xE0y kh\xF4ng c\xF3 c\xE2u h\u1ECFi tr\u1EAFc nghi\u1EC7m/t\u1EF1 lu\u1EADn n\xE0o tr\xEAn h\u1EC7 th\u1ED1ng. ");
    \u0275\u0275elementEnd();
  }
}
function AssignmentSubmissionsComponent_div_56_div_37_div_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 119)(1, "p", 120);
    \u0275\u0275text(2, "B\xE0i l\xE0m c\u1EE7a h\u1ECDc sinh:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 121);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 122)(6, "span", 123);
    \u0275\u0275text(7, "Gi\xE1o vi\xEAn \u0111\u1ECDc v\xE0 c\u1ED9ng \u0111i\u1EC3m v\xE0o t\u1ED5ng \u0111i\u1EC3m b\xEAn ph\u1EA3i.");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ans_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ans_r6.answerText, " ");
  }
}
function AssignmentSubmissionsComponent_div_56_div_37_div_1_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 124)(1, "span", 125);
    \u0275\u0275text(2, "Lo\u1EA1i: ");
    \u0275\u0275elementStart(3, "span", 126);
    \u0275\u0275text(4, "Tr\u1EAFc nghi\u1EC7m");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "span", 127);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ans_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", ans_r6.isCorrect ? "text-emerald-600" : "text-red-600");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u0110i\u1EC3m \u0111\u1EA1t: ", ans_r6.score || 0, " ");
  }
}
function AssignmentSubmissionsComponent_div_56_div_37_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 112)(1, "div", 113)(2, "h5", 114)(3, "span", 115);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 116);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, AssignmentSubmissionsComponent_div_56_div_37_div_1_div_8_Template, 8, 1, "div", 117)(9, AssignmentSubmissionsComponent_div_56_div_37_div_1_div_9_Template, 7, 2, "div", 118);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ans_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    \u0275\u0275property("ngClass", ans_r6.isCorrect === true ? "border-emerald-200" : ans_r6.isCorrect === false ? "border-red-200" : "border-gray-200");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("C\xE2u ", i_r7 + 1, ":");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ans_r6.questionText, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ans_r6.isCorrect === true ? "bg-emerald-50 text-emerald-700 border-emerald-200" : ans_r6.isCorrect === false ? "bg-red-50 text-red-700 border-red-200" : "bg-amber-50 text-amber-700 border-amber-200");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ans_r6.isCorrect === true ? "\u0110\xDANG" : ans_r6.isCorrect === false ? "SAI" : "CH\u1EDC CH\u1EA4M", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ans_r6.answerText);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ans_r6.answerText);
  }
}
function AssignmentSubmissionsComponent_div_56_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 110);
    \u0275\u0275template(1, AssignmentSubmissionsComponent_div_56_div_37_div_1_Template, 10, 7, "div", 111);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.answers());
  }
}
function AssignmentSubmissionsComponent_div_56__svg_svg_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 128);
    \u0275\u0275element(1, "circle", 34)(2, "path", 35);
    \u0275\u0275elementEnd();
  }
}
function AssignmentSubmissionsComponent_div_56__svg_svg_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 129);
    \u0275\u0275element(1, "path", 130);
    \u0275\u0275elementEnd();
  }
}
function AssignmentSubmissionsComponent_div_56_p_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 131);
    \u0275\u0275text(1, "Vui l\xF2ng nh\u1EADp \u0111i\u1EC3m h\u1EE3p l\u1EC7 (0-100)");
    \u0275\u0275elementEnd();
  }
}
function AssignmentSubmissionsComponent_div_56__svg_svg_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 132);
    \u0275\u0275element(1, "circle", 34)(2, "path", 35);
    \u0275\u0275elementEnd();
  }
}
function AssignmentSubmissionsComponent_div_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 53)(1, "div", 54);
    \u0275\u0275listener("click", function AssignmentSubmissionsComponent_div_56_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeGradeModal());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 55)(3, "div", 56)(4, "div", 57)(5, "h3", 58);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 59);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 60);
    \u0275\u0275listener("click", function AssignmentSubmissionsComponent_div_56_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeGradeModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 61);
    \u0275\u0275element(12, "path", 62);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(13, "div", 63)(14, "div", 64)(15, "div", 65)(16, "h4", 66);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(17, "svg", 67);
    \u0275\u0275element(18, "path", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " Ghi ch\xFA c\u1EE7a h\u1ECDc sinh ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(20, "div", 69);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 65)(23, "h4", 70);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(24, "svg", 71);
    \u0275\u0275element(25, "path", 72);
    \u0275\u0275elementEnd();
    \u0275\u0275text(26, " T\u1EC7p \u0111\xEDnh k\xE8m b\xE0i l\xE0m ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(27, AssignmentSubmissionsComponent_div_56_div_27_Template, 4, 0, "div", 73)(28, AssignmentSubmissionsComponent_div_56_div_28_Template, 2, 0, "div", 74)(29, AssignmentSubmissionsComponent_div_56_ul_29_Template, 2, 1, "ul", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(30, "div", 65)(31, "h4", 70);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(32, "svg", 76);
    \u0275\u0275element(33, "path", 77);
    \u0275\u0275elementEnd();
    \u0275\u0275text(34, " Chi ti\u1EBFt b\xE0i l\xE0m (Tr\u1EAFc nghi\u1EC7m / T\u1EF1 lu\u1EADn) ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(35, AssignmentSubmissionsComponent_div_56_div_35_Template, 4, 0, "div", 73)(36, AssignmentSubmissionsComponent_div_56_div_36_Template, 2, 0, "div", 78)(37, AssignmentSubmissionsComponent_div_56_div_37_Template, 2, 1, "div", 79);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(38, "div", 80)(39, "form", 81)(40, "div")(41, "div", 82)(42, "label", 83);
    \u0275\u0275text(43, "\u0110i\u1EC3m s\u1ED1 ");
    \u0275\u0275elementStart(44, "span", 84);
    \u0275\u0275text(45, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "button", 85);
    \u0275\u0275listener("click", function AssignmentSubmissionsComponent_div_56_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.autoGradeMultipleChoice());
    });
    \u0275\u0275template(47, AssignmentSubmissionsComponent_div_56__svg_svg_47_Template, 3, 0, "svg", 86)(48, AssignmentSubmissionsComponent_div_56__svg_svg_48_Template, 2, 0, "svg", 87);
    \u0275\u0275text(49, " Ch\u1EA5m t\u1EF1 \u0111\u1ED9ng Tr\u1EAFc nghi\u1EC7m ");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(50, "input", 88);
    \u0275\u0275template(51, AssignmentSubmissionsComponent_div_56_p_51_Template, 2, 0, "p", 89);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "div", 90)(53, "label", 91);
    \u0275\u0275text(54, "L\u1EDDi ph\xEA c\u1EE7a gi\xE1o vi\xEAn");
    \u0275\u0275elementEnd();
    \u0275\u0275element(55, "textarea", 92);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "button", 93);
    \u0275\u0275listener("click", function AssignmentSubmissionsComponent_div_56_Template_button_click_56_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.submitGrade());
    });
    \u0275\u0275template(57, AssignmentSubmissionsComponent_div_56__svg_svg_57_Template, 3, 0, "svg", 94);
    \u0275\u0275text(58);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    let tmp_14_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("Ch\u1EA5m \u0111i\u1EC3m: ", (tmp_1_0 = ctx_r2.selectedSubmission()) == null ? null : tmp_1_0.studentName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("M\xE3 HS: ", (tmp_2_0 = ctx_r2.selectedSubmission()) == null ? null : tmp_2_0.studentCode, " \u2022 N\u1ED9p l\xFAc: ", \u0275\u0275pipeBind2(9, 18, (tmp_2_0 = ctx_r2.selectedSubmission()) == null ? null : tmp_2_0.submittedAt, "dd/MM/yy HH:mm"));
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate1(" ", ((tmp_3_0 = ctx_r2.selectedSubmission()) == null ? null : tmp_3_0.studentNote) || "H\u1ECDc sinh kh\xF4ng \u0111\u1EC3 l\u1EA1i l\u1EDDi nh\u1EAFn n\xE0o.", " ");
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r2.isLoadingAttachments());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isLoadingAttachments() && ctx_r2.attachments().length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isLoadingAttachments() && ctx_r2.attachments().length > 0);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r2.isLoadingAnswers());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isLoadingAnswers() && ctx_r2.answers().length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isLoadingAnswers() && ctx_r2.answers().length > 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx_r2.gradeForm);
    \u0275\u0275advance(7);
    \u0275\u0275property("disabled", ctx_r2.isAutoGrading() || ctx_r2.isGrading());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isAutoGrading());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isAutoGrading());
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ((tmp_14_0 = ctx_r2.gradeForm.get("score")) == null ? null : tmp_14_0.invalid) && ((tmp_14_0 = ctx_r2.gradeForm.get("score")) == null ? null : tmp_14_0.touched));
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r2.gradeForm.invalid || ctx_r2.isGrading());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isGrading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.isGrading() ? "\u0110ang ch\u1EA5m..." : "X\xE1c nh\u1EADn Ch\u1EA5m \u0111i\u1EC3m", " ");
  }
}
var AssignmentSubmissionsComponent = class _AssignmentSubmissionsComponent {
  route = inject(ActivatedRoute);
  submissionService = inject(AssignmentSubmissionService);
  toastService = inject(ToastService);
  fb = inject(FormBuilder);
  location = inject(Location);
  assignmentId = signal(null, ...ngDevMode ? [{ debugName: "assignmentId" }] : (
    /* istanbul ignore next */
    []
  ));
  // State Danh sách
  submissions = signal([], ...ngDevMode ? [{ debugName: "submissions" }] : (
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
  totalElements = signal(0, ...ngDevMode ? [{ debugName: "totalElements" }] : (
    /* istanbul ignore next */
    []
  ));
  currentFilter = signal("ALL", ...ngDevMode ? [{ debugName: "currentFilter" }] : (
    /* istanbul ignore next */
    []
  ));
  // State Modal Chấm bài
  isGradingModalOpen = signal(false, ...ngDevMode ? [{ debugName: "isGradingModalOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  isGrading = signal(false, ...ngDevMode ? [{ debugName: "isGrading" }] : (
    /* istanbul ignore next */
    []
  ));
  isAutoGrading = signal(false, ...ngDevMode ? [{ debugName: "isAutoGrading" }] : (
    /* istanbul ignore next */
    []
  ));
  isLoadingAttachments = signal(false, ...ngDevMode ? [{ debugName: "isLoadingAttachments" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedSubmission = signal(null, ...ngDevMode ? [{ debugName: "selectedSubmission" }] : (
    /* istanbul ignore next */
    []
  ));
  attachments = signal([], ...ngDevMode ? [{ debugName: "attachments" }] : (
    /* istanbul ignore next */
    []
  ));
  gradeForm;
  // --- STATE CHI TIẾT BÀI LÀM ---
  answers = signal([], ...ngDevMode ? [{ debugName: "answers" }] : (
    /* istanbul ignore next */
    []
  ));
  isLoadingAnswers = signal(false, ...ngDevMode ? [{ debugName: "isLoadingAnswers" }] : (
    /* istanbul ignore next */
    []
  ));
  goBack() {
    this.location.back();
  }
  ngOnInit() {
    this.gradeForm = this.fb.group({
      score: ["", [Validators.required, Validators.min(0), Validators.max(100)]],
      feedback: [""]
    });
    this.route.paramMap.subscribe((params) => {
      const id = params.get("id");
      if (id) {
        this.assignmentId.set(id);
        this.loadSubmissions();
      }
    });
  }
  loadSubmissions() {
    this.isLoading.set(true);
    this.submissionService.getSubmissions(this.assignmentId(), this.currentPage(), this.currentFilter()).subscribe({
      next: (res) => {
        this.submissions.set(res.content || []);
        this.totalPages.set(res.totalPages || 1);
        this.totalElements.set(res.totalElements || 0);
        this.isLoading.set(false);
      },
      error: () => {
        this.toastService.error("L\u1ED7i", "Kh\xF4ng th\u1EC3 t\u1EA3i danh s\xE1ch b\xE0i n\u1ED9p");
        this.isLoading.set(false);
      }
    });
  }
  changePage(page) {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage.set(page);
      this.loadSubmissions();
    }
  }
  onFilterChange(event) {
    this.currentFilter.set(event.target.value);
    this.currentPage.set(1);
    this.loadSubmissions();
  }
  // Mở modal chấm điểm
  openGradeModal(sub) {
    this.selectedSubmission.set(sub);
    this.isGradingModalOpen.set(true);
    this.gradeForm.patchValue({
      score: sub.score !== null ? sub.score : "",
      feedback: sub.teacherFeedback || ""
    });
    this.isLoadingAttachments.set(true);
    this.submissionService.getAttachments(sub.id).subscribe({
      next: (res) => {
        this.attachments.set(res || []);
        this.isLoadingAttachments.set(false);
      },
      error: () => this.isLoadingAttachments.set(false)
    });
    this.isLoadingAnswers.set(true);
    this.submissionService.getSubmissionAnswers(sub.id).subscribe({
      next: (res) => {
        this.answers.set(res || []);
        this.isLoadingAnswers.set(false);
      },
      error: () => {
        this.toastService.error("L\u1ED7i", "Kh\xF4ng t\u1EA3i \u0111\u01B0\u1EE3c chi ti\u1EBFt b\xE0i l\xE0m");
        this.isLoadingAnswers.set(false);
      }
    });
  }
  closeGradeModal() {
    this.isGradingModalOpen.set(false);
    this.selectedSubmission.set(null);
    this.attachments.set([]);
    this.answers.set([]);
    this.gradeForm.reset();
  }
  submitGrade() {
    if (this.gradeForm.invalid || !this.selectedSubmission()) {
      this.gradeForm.markAllAsTouched();
      return;
    }
    this.isGrading.set(true);
    this.submissionService.gradeSubmission(this.selectedSubmission().id, this.gradeForm.value).subscribe({
      next: () => {
        this.toastService.success("Th\xE0nh c\xF4ng", "\u0110\xE3 ch\u1EA5m \u0111i\u1EC3m & g\u1EEDi th\xF4ng b\xE1o cho h\u1ECDc sinh!");
        this.isGrading.set(false);
        this.closeGradeModal();
        this.loadSubmissions();
      },
      error: (err) => {
        this.toastService.error("L\u1ED7i", err.error?.message || "Ch\u1EA5m \u0111i\u1EC3m th\u1EA5t b\u1EA1i");
        this.isGrading.set(false);
      }
    });
  }
  // Kích hoạt chấm tự động phần trắc nghiệm
  autoGradeMultipleChoice() {
    if (!this.selectedSubmission())
      return;
    this.isAutoGrading.set(true);
    this.submissionService.triggerAutoGrade(this.selectedSubmission().id).subscribe({
      next: (res) => {
        this.toastService.success("Th\xE0nh c\xF4ng", `\u0110\xE3 ch\u1EA5m t\u1EF1 \u0111\u1ED9ng! \u0110i\u1EC3m ph\u1EA7n tr\u1EAFc nghi\u1EC7m: ${res.totalScore}`);
        this.gradeForm.patchValue({ score: res.totalScore });
        this.isLoadingAnswers.set(true);
        this.submissionService.getSubmissionAnswers(this.selectedSubmission().id).subscribe({
          next: (answersRes) => {
            this.answers.set(answersRes || []);
            this.isLoadingAnswers.set(false);
          }
        });
        this.isAutoGrading.set(false);
      },
      error: (err) => {
        this.toastService.error("L\u1ED7i", err.error?.message || "Kh\xF4ng th\u1EC3 ch\u1EA5m \u0111i\u1EC3m t\u1EF1 \u0111\u1ED9ng");
        this.isAutoGrading.set(false);
      }
    });
  }
  // Tiện ích
  getStatusLabel(status, isLate) {
    if (status === "graded")
      return { text: "\u0110\xE3 ch\u1EA5m", class: "bg-green-100 text-green-700" };
    if (status === "submitted")
      return isLate ? { text: "N\u1ED9p mu\u1ED9n", class: "bg-amber-100 text-amber-700" } : { text: "\u0110\xE3 n\u1ED9p", class: "bg-blue-100 text-blue-700" };
    if (status === "draft")
      return { text: "\u0110ang nh\xE1p", class: "bg-gray-100 text-gray-600" };
    return { text: "Ch\u01B0a n\u1ED9p", class: "bg-red-50 text-red-600 border border-red-200" };
  }
  formatBytes(bytes) {
    if (!+bytes)
      return "0 Bytes";
    const k = 1024, dm = 2, sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
  }
  static \u0275fac = function AssignmentSubmissionsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AssignmentSubmissionsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssignmentSubmissionsComponent, selectors: [["app-assignment-submissions"]], decls: 57, vars: 9, consts: [[1, "space-y-6", "max-w-7xl", "mx-auto"], [1, "flex", "items-center", "space-x-2", "text-sm", "text-gray-500", "mb-2"], [1, "hover:text-indigo-600", "transition", "flex", "items-center", "cursor-pointer", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "mr-1"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M10 19l-7-7m0 0l7-7m-7 7h18"], [1, "flex", "flex-col", "sm:flex-row", "sm:items-end", "justify-between", "gap-4"], [1, "text-2xl", "font-extrabold", "text-gray-900", "tracking-tight"], [1, "text-sm", "text-gray-500", "mt-1"], [1, "flex", "items-center", "space-x-3", "bg-white", "p-2", "rounded-xl", "shadow-sm", "border", "border-gray-200"], [1, "text-sm", "font-semibold", "text-gray-600", "pl-2"], [1, "bg-gray-50", "border", "border-gray-200", "text-sm", "rounded-lg", "focus:ring-indigo-500", "focus:border-indigo-500", "block", "p-2", "outline-none", "font-medium", 3, "change"], ["value", "ALL"], ["value", "submitted"], ["value", "graded"], ["value", "late"], [1, "bg-white", "rounded-2xl", "shadow-sm", "border", "border-gray-200", "overflow-hidden"], [1, "overflow-x-auto"], [1, "w-full", "text-sm", "text-left", "text-gray-600"], [1, "text-xs", "text-gray-500", "uppercase", "bg-gray-50/80", "border-b", "border-gray-200", "font-bold"], [1, "px-6", "py-4"], [1, "px-6", "py-4", "text-center"], [1, "px-6", "py-4", "text-right"], [1, "divide-y", "divide-gray-100"], [4, "ngIf"], ["class", "hover:bg-indigo-50/20 transition", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "justify-between", "px-6", "py-4", "bg-gray-50", "border-t", "border-gray-200"], [1, "text-sm", "text-gray-500"], [1, "text-gray-900"], [1, "flex", "space-x-2"], [1, "px-3", "py-1.5", "text-sm", "font-medium", "text-gray-700", "bg-white", "border", "border-gray-300", "rounded-lg", "hover:bg-gray-50", "disabled:opacity-50", 3, "click", "disabled"], [1, "flex", "items-center", "px-3", "text-sm", "font-medium", "text-gray-700", "bg-gray-100", "rounded-lg"], ["class", "fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-0", 4, "ngIf"], ["colspan", "5", 1, "py-12", "text-center", "text-indigo-500"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "inline-block", "h-8", "w-8"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"], ["colspan", "5", 1, "px-6", "py-12", "text-center", "text-gray-500"], [1, "hover:bg-indigo-50/20", "transition"], [1, "font-bold", "text-gray-900"], [1, "text-xs", "text-gray-500", "mt-0.5"], [1, "px-2.5", "py-1", "text-xs", "font-bold", "uppercase", "tracking-wider", "rounded-md", 3, "ngClass"], ["class", "text-gray-900 font-medium", 4, "ngIf"], ["class", "text-xs text-gray-500", 4, "ngIf"], ["class", "text-gray-400 italic", 4, "ngIf"], ["class", "font-extrabold text-lg text-indigo-600", 4, "ngIf"], ["class", "text-gray-400 font-medium", 4, "ngIf"], ["class", "px-4 py-2 text-sm font-bold rounded-xl transition", 3, "ngClass", "click", 4, "ngIf"], [1, "text-gray-900", "font-medium"], [1, "text-xs", "text-gray-500"], [1, "text-gray-400", "italic"], [1, "font-extrabold", "text-lg", "text-indigo-600"], [1, "text-gray-400", "font-medium"], [1, "px-4", "py-2", "text-sm", "font-bold", "rounded-xl", "transition", 3, "click", "ngClass"], [1, "fixed", "inset-0", "z-[80]", "flex", "items-center", "justify-center", "p-4", "sm:p-0"], [1, "absolute", "inset-0", "bg-gray-900/70", "backdrop-blur-sm", "transition-opacity", 3, "click"], [1, "relative", "bg-white", "rounded-3xl", "shadow-2xl", "w-full", "max-w-5xl", "max-h-[90vh]", "flex", "flex-col", "overflow-hidden"], [1, "bg-gradient-to-r", "from-indigo-700", "to-blue-800", "px-6", "py-4", "flex", "justify-between", "items-center", "shrink-0"], [1, "text-white"], [1, "text-xl", "font-bold"], [1, "text-indigo-200", "text-xs", "mt-0.5"], [1, "text-white", "hover:bg-white/20", "p-2", "rounded-full", "transition", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "flex-1", "overflow-y-auto", "flex", "flex-col", "md:flex-row", "bg-gray-50/50"], [1, "md:w-3/5", "p-6", "border-r", "border-gray-200", "space-y-6"], [1, "bg-white", "p-5", "rounded-2xl", "border", "border-gray-200", "shadow-sm"], [1, "text-sm", "font-bold", "text-gray-800", "mb-2", "flex", "items-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "mr-2", "text-indigo-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"], [1, "p-4", "bg-gray-50", "rounded-xl", "text-gray-700", "text-sm", "whitespace-pre-wrap", "border", "border-gray-100", "min-h-[100px]"], [1, "text-sm", "font-bold", "text-gray-800", "mb-4", "flex", "items-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "mr-2", "text-emerald-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"], ["class", "text-center py-6 text-indigo-500", 4, "ngIf"], ["class", "text-sm text-gray-500 text-center py-4 bg-gray-50 rounded-xl", 4, "ngIf"], ["class", "space-y-3", 4, "ngIf"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "mr-2", "text-blue-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"], ["class", "text-sm text-gray-500 text-center py-4 bg-gray-50 rounded-xl border border-dashed border-gray-200", 4, "ngIf"], ["class", "space-y-4", 4, "ngIf"], [1, "md:w-2/5", "p-6", "bg-white", "shrink-0", "flex", "flex-col"], [1, "flex-1", "flex", "flex-col", "space-y-5", 3, "formGroup"], [1, "flex", "items-center", "justify-between", "mb-2"], [1, "block", "text-sm", "font-bold", "text-gray-900"], [1, "text-red-500"], ["type", "button", 1, "text-xs", "font-bold", "text-emerald-600", "bg-emerald-50", "hover:bg-emerald-100", "border", "border-emerald-200", "px-3", "py-1.5", "rounded-lg", "transition", "flex", "items-center", "shadow-sm", "disabled:opacity-50", 3, "click", "disabled"], ["class", "animate-spin -ml-1 mr-1.5 h-3.5 w-3.5 text-emerald-600", "fill", "none", "viewBox", "0 0 24 24", 4, "ngIf"], ["class", "w-3.5 h-3.5 mr-1.5", "fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 4, "ngIf"], ["formControlName", "score", "type", "number", "step", "0.1", "placeholder", "0.0", 1, "w-full", "text-center", "text-4xl", "font-extrabold", "text-indigo-600", "py-6", "border-2", "border-indigo-100", "rounded-2xl", "focus:border-indigo-500", "focus:ring-4", "focus:ring-indigo-100", "outline-none", "transition", "placeholder-gray-300"], ["class", "text-red-500 text-xs text-center mt-2 font-medium", 4, "ngIf"], [1, "flex-1", "flex", "flex-col"], [1, "block", "text-sm", "font-bold", "text-gray-900", "mb-2"], ["formControlName", "feedback", "placeholder", "Nh\u1EADn x\xE9t \u01B0u/khuy\u1EBFt \u0111i\u1EC3m \u0111\u1EC3 h\u1ECDc sinh c\u1ED1 g\u1EAFng...", 1, "flex-1", "w-full", "p-4", "border", "border-gray-200", "rounded-2xl", "text-sm", "focus:border-indigo-500", "focus:ring-2", "focus:ring-indigo-100", "outline-none", "resize-none", "transition"], ["type", "button", 1, "w-full", "py-4", "text-base", "font-bold", "text-white", "bg-indigo-600", "hover:bg-indigo-700", "disabled:bg-indigo-300", "rounded-2xl", "shadow-lg", "transition", "flex", "justify-center", "items-center", 3, "click", "disabled"], ["class", "animate-spin -ml-1 mr-2 h-5 w-5 text-white", "fill", "none", "viewBox", "0 0 24 24", 4, "ngIf"], [1, "text-center", "py-6", "text-indigo-500"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "inline-block", "h-6", "w-6"], [1, "text-sm", "text-gray-500", "text-center", "py-4", "bg-gray-50", "rounded-xl"], [1, "space-y-3"], ["class", "flex justify-between items-center p-3 border border-gray-200 rounded-xl hover:bg-indigo-50/50 transition group", 4, "ngFor", "ngForOf"], [1, "flex", "justify-between", "items-center", "p-3", "border", "border-gray-200", "rounded-xl", "hover:bg-indigo-50/50", "transition", "group"], [1, "flex", "items-center", "min-w-0", "pr-4"], [1, "w-8", "h-8", "rounded", "bg-indigo-100", "text-indigo-600", "flex", "items-center", "justify-center", "mr-3", "shrink-0"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"], [1, "truncate"], [1, "text-sm", "font-bold", "text-gray-900", "truncate"], [1, "text-[11px]", "text-gray-500"], ["target", "_blank", 1, "px-3", "py-1.5", "text-xs", "font-bold", "text-indigo-600", "bg-indigo-50", "hover:bg-indigo-600", "hover:text-white", "rounded-lg", "transition", "shrink-0", 3, "href"], [1, "text-sm", "text-gray-500", "text-center", "py-4", "bg-gray-50", "rounded-xl", "border", "border-dashed", "border-gray-200"], [1, "space-y-4"], ["class", "p-4 border rounded-xl bg-gray-50/30 transition-all hover:shadow-sm", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "p-4", "border", "rounded-xl", "bg-gray-50/30", "transition-all", "hover:shadow-sm", 3, "ngClass"], [1, "flex", "justify-between", "items-start", "mb-2"], [1, "text-sm", "font-bold", "text-gray-900", "leading-relaxed"], [1, "text-indigo-600", "mr-1"], [1, "shrink-0", "ml-3", "px-2", "py-0.5", "text-[11px]", "font-bold", "rounded-md", "uppercase", "tracking-wider", "border", 3, "ngClass"], ["class", "mt-3", 4, "ngIf"], ["class", "mt-3 flex items-center justify-between text-sm pt-2 border-t border-gray-100", 4, "ngIf"], [1, "mt-3"], [1, "text-[11px]", "font-bold", "text-gray-500", "mb-1.5", "uppercase", "tracking-wider"], [1, "p-3", "bg-white", "border", "border-gray-200", "rounded-lg", "text-sm", "text-gray-800", "whitespace-pre-wrap", "shadow-inner", "min-h-[60px]"], [1, "mt-2", "flex", "items-center", "justify-between", "text-sm"], [1, "text-gray-500", "italic", "text-xs"], [1, "mt-3", "flex", "items-center", "justify-between", "text-sm", "pt-2", "border-t", "border-gray-100"], [1, "text-gray-500", "font-medium"], [1, "text-gray-700"], [1, "font-bold", 3, "ngClass"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "-ml-1", "mr-1.5", "h-3.5", "w-3.5", "text-emerald-600"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-3.5", "h-3.5", "mr-1.5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M13 10V3L4 14h7v7l9-11h-7z"], [1, "text-red-500", "text-xs", "text-center", "mt-2", "font-medium"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "-ml-1", "mr-2", "h-5", "w-5", "text-white"]], template: function AssignmentSubmissionsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "a", 2);
      \u0275\u0275listener("click", function AssignmentSubmissionsComponent_Template_a_click_2_listener() {
        return ctx.goBack();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(3, "svg", 3);
      \u0275\u0275element(4, "path", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275text(5, " Quay l\u1EA1i Danh s\xE1ch B\xE0i t\u1EADp ");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(6, "div", 5)(7, "div")(8, "h1", 6);
      \u0275\u0275text(9, "Danh s\xE1ch N\u1ED9p b\xE0i");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "p", 7);
      \u0275\u0275text(11, "Qu\u1EA3n l\xFD v\xE0 ch\u1EA5m \u0111i\u1EC3m b\xE0i l\xE0m c\u1EE7a h\u1ECDc sinh");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 8)(13, "label", 9);
      \u0275\u0275text(14, "L\u1ECDc theo:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "select", 10);
      \u0275\u0275listener("change", function AssignmentSubmissionsComponent_Template_select_change_15_listener($event) {
        return ctx.onFilterChange($event);
      });
      \u0275\u0275elementStart(16, "option", 11);
      \u0275\u0275text(17, "T\u1EA5t c\u1EA3 b\xE0i n\u1ED9p");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "option", 12);
      \u0275\u0275text(19, "M\u1EDBi n\u1ED9p (Ch\u01B0a ch\u1EA5m)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "option", 13);
      \u0275\u0275text(21, "\u0110\xE3 ch\u1EA5m \u0111i\u1EC3m");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "option", 14);
      \u0275\u0275text(23, "N\u1ED9p mu\u1ED9n");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(24, "div", 15)(25, "div", 16)(26, "table", 17)(27, "thead", 18)(28, "tr")(29, "th", 19);
      \u0275\u0275text(30, "H\u1ECDc sinh");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "th", 20);
      \u0275\u0275text(32, "Tr\u1EA1ng th\xE1i");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "th", 19);
      \u0275\u0275text(34, "Th\u1EDDi gian n\u1ED9p");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "th", 20);
      \u0275\u0275text(36, "\u0110i\u1EC3m s\u1ED1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "th", 21);
      \u0275\u0275text(38, "Thao t\xE1c");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(39, "tbody", 22);
      \u0275\u0275template(40, AssignmentSubmissionsComponent_tr_40_Template, 5, 0, "tr", 23)(41, AssignmentSubmissionsComponent_tr_41_Template, 3, 0, "tr", 23)(42, AssignmentSubmissionsComponent_tr_42_Template, 18, 10, "tr", 24);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(43, "div", 25)(44, "div", 26);
      \u0275\u0275text(45, "T\u1ED5ng c\u1ED9ng: ");
      \u0275\u0275elementStart(46, "strong", 27);
      \u0275\u0275text(47);
      \u0275\u0275elementEnd();
      \u0275\u0275text(48, " b\xE0i n\u1ED9p");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "div", 28)(50, "button", 29);
      \u0275\u0275listener("click", function AssignmentSubmissionsComponent_Template_button_click_50_listener() {
        return ctx.changePage(ctx.currentPage() - 1);
      });
      \u0275\u0275text(51, "Tr\u01B0\u1EDBc");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "div", 30);
      \u0275\u0275text(53);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "button", 29);
      \u0275\u0275listener("click", function AssignmentSubmissionsComponent_Template_button_click_54_listener() {
        return ctx.changePage(ctx.currentPage() + 1);
      });
      \u0275\u0275text(55, "Sau");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275template(56, AssignmentSubmissionsComponent_div_56_Template, 59, 21, "div", 31);
    }
    if (rf & 2) {
      \u0275\u0275advance(40);
      \u0275\u0275property("ngIf", ctx.isLoading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading() && ctx.submissions().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.submissions());
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.totalElements());
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", ctx.currentPage() === 1);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2("Trang ", ctx.currentPage(), " / ", ctx.totalPages());
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.currentPage() === ctx.totalPages());
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isGradingModalOpen());
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, RouterModule, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssignmentSubmissionsComponent, [{
    type: Component,
    args: [{ selector: "app-assignment-submissions", standalone: true, imports: [CommonModule, RouterModule, ReactiveFormsModule], template: `<div class="space-y-6 max-w-7xl mx-auto">\r
  \r
  <div class="flex items-center space-x-2 text-sm text-gray-500 mb-2">\r
    <a (click)="goBack()" class="hover:text-indigo-600 transition flex items-center cursor-pointer">\r
      <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>\r
      Quay l\u1EA1i Danh s\xE1ch B\xE0i t\u1EADp\r
    </a>\r
  </div>\r
\r
  <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4">\r
    <div>\r
      <h1 class="text-2xl font-extrabold text-gray-900 tracking-tight">Danh s\xE1ch N\u1ED9p b\xE0i</h1>\r
      <p class="text-sm text-gray-500 mt-1">Qu\u1EA3n l\xFD v\xE0 ch\u1EA5m \u0111i\u1EC3m b\xE0i l\xE0m c\u1EE7a h\u1ECDc sinh</p>\r
    </div>\r
\r
    <div class="flex items-center space-x-3 bg-white p-2 rounded-xl shadow-sm border border-gray-200">\r
      <label class="text-sm font-semibold text-gray-600 pl-2">L\u1ECDc theo:</label>\r
      <select (change)="onFilterChange($event)" class="bg-gray-50 border border-gray-200 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block p-2 outline-none font-medium">\r
        <option value="ALL">T\u1EA5t c\u1EA3 b\xE0i n\u1ED9p</option>\r
        <option value="submitted">M\u1EDBi n\u1ED9p (Ch\u01B0a ch\u1EA5m)</option>\r
        <option value="graded">\u0110\xE3 ch\u1EA5m \u0111i\u1EC3m</option>\r
        <option value="late">N\u1ED9p mu\u1ED9n</option>\r
      </select>\r
    </div>\r
  </div>\r
\r
  <div class="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">\r
    <div class="overflow-x-auto">\r
      <table class="w-full text-sm text-left text-gray-600">\r
        <thead class="text-xs text-gray-500 uppercase bg-gray-50/80 border-b border-gray-200 font-bold">\r
          <tr>\r
            <th class="px-6 py-4">H\u1ECDc sinh</th>\r
            <th class="px-6 py-4 text-center">Tr\u1EA1ng th\xE1i</th>\r
            <th class="px-6 py-4">Th\u1EDDi gian n\u1ED9p</th>\r
            <th class="px-6 py-4 text-center">\u0110i\u1EC3m s\u1ED1</th>\r
            <th class="px-6 py-4 text-right">Thao t\xE1c</th>\r
          </tr>\r
        </thead>\r
        <tbody class="divide-y divide-gray-100">\r
          \r
          <tr *ngIf="isLoading()">\r
            <td colspan="5" class="py-12 text-center text-indigo-500">\r
              <svg class="animate-spin inline-block h-8 w-8" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>\r
            </td>\r
          </tr>\r
\r
          <tr *ngIf="!isLoading() && submissions().length === 0">\r
            <td colspan="5" class="px-6 py-12 text-center text-gray-500">Kh\xF4ng t\xECm th\u1EA5y b\xE0i n\u1ED9p n\xE0o ph\xF9 h\u1EE3p.</td>\r
          </tr>\r
          \r
          <tr *ngFor="let s of submissions()" class="hover:bg-indigo-50/20 transition">\r
            <td class="px-6 py-4">\r
              <div class="font-bold text-gray-900">{{ s.studentName }}</div>\r
              <div class="text-xs text-gray-500 mt-0.5">M\xE3 HS: {{ s.studentCode }}</div>\r
            </td>\r
            \r
            <td class="px-6 py-4 text-center">\r
              <span class="px-2.5 py-1 text-xs font-bold uppercase tracking-wider rounded-md" [ngClass]="getStatusLabel(s.submissionStatus, s.isLate).class">\r
                {{ getStatusLabel(s.submissionStatus, s.isLate).text }}\r
              </span>\r
            </td>\r
            \r
            <td class="px-6 py-4">\r
              <div *ngIf="s.submittedAt" class="text-gray-900 font-medium">{{ s.submittedAt | date:'dd/MM/yyyy' }}</div>\r
              <div *ngIf="s.submittedAt" class="text-xs text-gray-500">{{ s.submittedAt | date:'HH:mm:ss' }}</div>\r
              <div *ngIf="!s.submittedAt" class="text-gray-400 italic">--</div>\r
            </td>\r
            \r
            <td class="px-6 py-4 text-center">\r
              <span *ngIf="s.score !== null" class="font-extrabold text-lg text-indigo-600">{{ s.score }}</span>\r
              <span *ngIf="s.score === null" class="text-gray-400 font-medium">--</span>\r
            </td>\r
            \r
            <td class="px-6 py-4 text-right">\r
              <button *ngIf="s.submissionStatus !== 'not_submitted' && s.submissionStatus !== 'draft'" \r
                      (click)="openGradeModal(s)" \r
                      class="px-4 py-2 text-sm font-bold rounded-xl transition"\r
                      [ngClass]="s.score === null ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm' : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'">\r
                {{ s.score === null ? 'Ch\u1EA5m \u0111i\u1EC3m' : 'S\u1EEDa \u0111i\u1EC3m' }}\r
              </button>\r
            </td>\r
          </tr>\r
        </tbody>\r
      </table>\r
    </div>\r
    \r
    <div class="flex items-center justify-between px-6 py-4 bg-gray-50 border-t border-gray-200">\r
      <div class="text-sm text-gray-500">T\u1ED5ng c\u1ED9ng: <strong class="text-gray-900">{{ totalElements() }}</strong> b\xE0i n\u1ED9p</div>\r
      <div class="flex space-x-2">\r
        <button (click)="changePage(currentPage() - 1)" [disabled]="currentPage() === 1" class="px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50">Tr\u01B0\u1EDBc</button>\r
        <div class="flex items-center px-3 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg">Trang {{ currentPage() }} / {{ totalPages() }}</div>\r
        <button (click)="changePage(currentPage() + 1)" [disabled]="currentPage() === totalPages()" class="px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50">Sau</button>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<div *ngIf="isGradingModalOpen()" class="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-0">\r
  <div class="absolute inset-0 bg-gray-900/70 backdrop-blur-sm transition-opacity" (click)="closeGradeModal()"></div>\r
  \r
  <div class="relative bg-white rounded-3xl shadow-2xl w-full max-w-5xl max-h-[90vh] flex flex-col overflow-hidden">\r
    \r
    <div class="bg-gradient-to-r from-indigo-700 to-blue-800 px-6 py-4 flex justify-between items-center shrink-0">\r
      <div class="text-white">\r
        <h3 class="text-xl font-bold">Ch\u1EA5m \u0111i\u1EC3m: {{ selectedSubmission()?.studentName }}</h3>\r
        <p class="text-indigo-200 text-xs mt-0.5">M\xE3 HS: {{ selectedSubmission()?.studentCode }} \u2022 N\u1ED9p l\xFAc: {{ selectedSubmission()?.submittedAt | date:'dd/MM/yy HH:mm' }}</p>\r
      </div>\r
      <button (click)="closeGradeModal()" class="text-white hover:bg-white/20 p-2 rounded-full transition"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button>\r
    </div>\r
\r
    <div class="flex-1 overflow-y-auto flex flex-col md:flex-row bg-gray-50/50">\r
      \r
      <div class="md:w-3/5 p-6 border-r border-gray-200 space-y-6">\r
        \r
        <div class="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">\r
           <h4 class="text-sm font-bold text-gray-800 mb-2 flex items-center">\r
             <svg class="w-4 h-4 mr-2 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg> Ghi ch\xFA c\u1EE7a h\u1ECDc sinh\r
           </h4>\r
           <div class="p-4 bg-gray-50 rounded-xl text-gray-700 text-sm whitespace-pre-wrap border border-gray-100 min-h-[100px]">\r
             {{ selectedSubmission()?.studentNote || 'H\u1ECDc sinh kh\xF4ng \u0111\u1EC3 l\u1EA1i l\u1EDDi nh\u1EAFn n\xE0o.' }}\r
           </div>\r
        </div>\r
\r
        <div class="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">\r
           <h4 class="text-sm font-bold text-gray-800 mb-4 flex items-center">\r
             <svg class="w-4 h-4 mr-2 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path></svg> T\u1EC7p \u0111\xEDnh k\xE8m b\xE0i l\xE0m\r
           </h4>\r
           \r
           <div *ngIf="isLoadingAttachments()" class="text-center py-6 text-indigo-500"><svg class="animate-spin inline-block h-6 w-6" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg></div>\r
           <div *ngIf="!isLoadingAttachments() && attachments().length === 0" class="text-sm text-gray-500 text-center py-4 bg-gray-50 rounded-xl">Kh\xF4ng c\xF3 file \u0111\xEDnh k\xE8m.</div>\r
           \r
           <ul *ngIf="!isLoadingAttachments() && attachments().length > 0" class="space-y-3">\r
             <li *ngFor="let file of attachments()" class="flex justify-between items-center p-3 border border-gray-200 rounded-xl hover:bg-indigo-50/50 transition group">\r
                <div class="flex items-center min-w-0 pr-4">\r
                  <div class="w-8 h-8 rounded bg-indigo-100 text-indigo-600 flex items-center justify-center mr-3 shrink-0"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg></div>\r
                  <div class="truncate">\r
                    <p class="text-sm font-bold text-gray-900 truncate">{{ file.fileName }}</p>\r
                    <p class="text-[11px] text-gray-500">{{ formatBytes(file.fileSize) }}</p>\r
                  </div>\r
                </div>\r
                <a [href]="file.fileUrl" target="_blank" class="px-3 py-1.5 text-xs font-bold text-indigo-600 bg-indigo-50 hover:bg-indigo-600 hover:text-white rounded-lg transition shrink-0">T\u1EA3i / Xem</a>\r
             </li>\r
           </ul>\r
        </div>\r
\r
        <div class="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">\r
           <h4 class="text-sm font-bold text-gray-800 mb-4 flex items-center">\r
             <svg class="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg> \r
             Chi ti\u1EBFt b\xE0i l\xE0m (Tr\u1EAFc nghi\u1EC7m / T\u1EF1 lu\u1EADn)\r
           </h4>\r
\r
           <div *ngIf="isLoadingAnswers()" class="text-center py-6 text-indigo-500">\r
             <svg class="animate-spin inline-block h-6 w-6" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>\r
           </div>\r
\r
           <div *ngIf="!isLoadingAnswers() && answers().length === 0" class="text-sm text-gray-500 text-center py-4 bg-gray-50 rounded-xl border border-dashed border-gray-200">\r
             B\xE0i t\u1EADp n\xE0y kh\xF4ng c\xF3 c\xE2u h\u1ECFi tr\u1EAFc nghi\u1EC7m/t\u1EF1 lu\u1EADn n\xE0o tr\xEAn h\u1EC7 th\u1ED1ng.\r
           </div>\r
\r
           <div *ngIf="!isLoadingAnswers() && answers().length > 0" class="space-y-4">\r
             <div *ngFor="let ans of answers(); let i = index" class="p-4 border rounded-xl bg-gray-50/30 transition-all hover:shadow-sm" \r
                  [ngClass]="ans.isCorrect === true ? 'border-emerald-200' : (ans.isCorrect === false ? 'border-red-200' : 'border-gray-200')">\r
                \r
                <div class="flex justify-between items-start mb-2">\r
                   <h5 class="text-sm font-bold text-gray-900 leading-relaxed">\r
                     <span class="text-indigo-600 mr-1">C\xE2u {{ i + 1 }}:</span> {{ ans.questionText }}\r
                   </h5>\r
                   \r
                   <span class="shrink-0 ml-3 px-2 py-0.5 text-[11px] font-bold rounded-md uppercase tracking-wider border"\r
                         [ngClass]="ans.isCorrect === true ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : (ans.isCorrect === false ? 'bg-red-50 text-red-700 border-red-200' : 'bg-amber-50 text-amber-700 border-amber-200')">\r
                     {{ ans.isCorrect === true ? '\u0110\xDANG' : (ans.isCorrect === false ? 'SAI' : 'CH\u1EDC CH\u1EA4M') }}\r
                   </span>\r
                </div>\r
\r
                <div *ngIf="ans.answerText" class="mt-3">\r
                   <p class="text-[11px] font-bold text-gray-500 mb-1.5 uppercase tracking-wider">B\xE0i l\xE0m c\u1EE7a h\u1ECDc sinh:</p>\r
                   <div class="p-3 bg-white border border-gray-200 rounded-lg text-sm text-gray-800 whitespace-pre-wrap shadow-inner min-h-[60px]">\r
                     {{ ans.answerText }}\r
                   </div>\r
                   <div class="mt-2 flex items-center justify-between text-sm">\r
                      <span class="text-gray-500 italic text-xs">Gi\xE1o vi\xEAn \u0111\u1ECDc v\xE0 c\u1ED9ng \u0111i\u1EC3m v\xE0o t\u1ED5ng \u0111i\u1EC3m b\xEAn ph\u1EA3i.</span>\r
                   </div>\r
                </div>\r
\r
                <div *ngIf="!ans.answerText" class="mt-3 flex items-center justify-between text-sm pt-2 border-t border-gray-100">\r
                   <span class="text-gray-500 font-medium">Lo\u1EA1i: <span class="text-gray-700">Tr\u1EAFc nghi\u1EC7m</span></span>\r
                   <span class="font-bold" [ngClass]="ans.isCorrect ? 'text-emerald-600' : 'text-red-600'">\r
                      \u0110i\u1EC3m \u0111\u1EA1t: {{ ans.score || 0 }}\r
                   </span>\r
                </div>\r
             </div>\r
           </div>\r
        </div>\r
      </div>\r
\r
      <div class="md:w-2/5 p-6 bg-white shrink-0 flex flex-col">\r
        <form [formGroup]="gradeForm" class="flex-1 flex flex-col space-y-5">\r
          \r
          <div>\r
            <div class="flex items-center justify-between mb-2">\r
              <label class="block text-sm font-bold text-gray-900">\u0110i\u1EC3m s\u1ED1 <span class="text-red-500">*</span></label>\r
              \r
              <button type="button" (click)="autoGradeMultipleChoice()" [disabled]="isAutoGrading() || isGrading()" class="text-xs font-bold text-emerald-600 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-3 py-1.5 rounded-lg transition flex items-center shadow-sm disabled:opacity-50">\r
                <svg *ngIf="isAutoGrading()" class="animate-spin -ml-1 mr-1.5 h-3.5 w-3.5 text-emerald-600" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>\r
                <svg *ngIf="!isAutoGrading()" class="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>\r
                Ch\u1EA5m t\u1EF1 \u0111\u1ED9ng Tr\u1EAFc nghi\u1EC7m\r
              </button>\r
            </div>\r
            \r
            <input formControlName="score" type="number" step="0.1" class="w-full text-center text-4xl font-extrabold text-indigo-600 py-6 border-2 border-indigo-100 rounded-2xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none transition placeholder-gray-300" placeholder="0.0">\r
            <p *ngIf="gradeForm.get('score')?.invalid && gradeForm.get('score')?.touched" class="text-red-500 text-xs text-center mt-2 font-medium">Vui l\xF2ng nh\u1EADp \u0111i\u1EC3m h\u1EE3p l\u1EC7 (0-100)</p>\r
          </div>\r
\r
          <div class="flex-1 flex flex-col">\r
            <label class="block text-sm font-bold text-gray-900 mb-2">L\u1EDDi ph\xEA c\u1EE7a gi\xE1o vi\xEAn</label>\r
            <textarea formControlName="feedback" class="flex-1 w-full p-4 border border-gray-200 rounded-2xl text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none resize-none transition" placeholder="Nh\u1EADn x\xE9t \u01B0u/khuy\u1EBFt \u0111i\u1EC3m \u0111\u1EC3 h\u1ECDc sinh c\u1ED1 g\u1EAFng..."></textarea>\r
          </div>\r
\r
          <button type="button" (click)="submitGrade()" [disabled]="gradeForm.invalid || isGrading()" class="w-full py-4 text-base font-bold text-white bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-300 rounded-2xl shadow-lg transition flex justify-center items-center">\r
            <svg *ngIf="isGrading()" class="animate-spin -ml-1 mr-2 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>\r
            {{ isGrading() ? '\u0110ang ch\u1EA5m...' : 'X\xE1c nh\u1EADn Ch\u1EA5m \u0111i\u1EC3m' }}\r
          </button>\r
        </form>\r
      </div>\r
\r
    </div>\r
  </div>\r
</div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssignmentSubmissionsComponent, { className: "AssignmentSubmissionsComponent", filePath: "src/app/features/teacher/pages/assignment-submission/assignment-submissions.component.ts", lineNumber: 15 });
})();

// src/app/features/teacher/services/teacher-profile.service.ts
var TeacherProfileService = class _TeacherProfileService {
  http = inject(HttpClient);
  apiUrl = `${environment.apiUrl}/api/v1/teachers`;
  // Gọi API lấy hồ sơ cá nhân vừa tạo
  getMyProfile() {
    return this.http.get(`${this.apiUrl}/my-profile`);
  }
  // Tái sử dụng API cập nhật của Admin để tự cập nhật hồ sơ
  updateProfile(id, data) {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }
  static \u0275fac = function TeacherProfileService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TeacherProfileService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TeacherProfileService, factory: _TeacherProfileService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TeacherProfileService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/features/teacher/pages/teacher-profile/teacher-profile.component.ts
function TeacherProfileComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 7);
    \u0275\u0275element(2, "circle", 8)(3, "path", 9);
    \u0275\u0275elementEnd()();
  }
}
function TeacherProfileComponent_div_8_Template(rf, ctx) {
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
    \u0275\u0275text(15, "Ch\u1EE9c v\u1EE5");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 22);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 20)(19, "span", 21);
    \u0275\u0275text(20, "Tr\u1EA1ng th\xE1i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 23);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 20)(24, "span", 21);
    \u0275\u0275text(25, "Ng\xE0y v\xE0o tr\u01B0\u1EDDng");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 22);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "date");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(29, "div", 24);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(30, "svg", 25);
    \u0275\u0275element(31, "path", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(32, "p", 27);
    \u0275\u0275text(33, " Th\xF4ng tin h\u1ED3 s\u01A1 \u0111\u01B0\u1EE3c qu\u1EA3n l\xFD b\u1EDFi Nh\xE0 tr\u01B0\u1EDDng. N\u1EBFu c\xF3 sai s\xF3t, vui l\xF2ng li\xEAn h\u1EC7 ");
    \u0275\u0275elementStart(34, "strong");
    \u0275\u0275text(35, "Qu\u1EA3n tr\u1ECB vi\xEAn (Admin)");
    \u0275\u0275elementEnd();
    \u0275\u0275text(36, " \u0111\u1EC3 \u0111\u01B0\u1EE3c h\u1ED7 tr\u1EE3 c\u1EADp nh\u1EADt. ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "div", 28)(38, "div", 29)(39, "h3", 30);
    \u0275\u0275text(40, "Th\xF4ng tin chi ti\u1EBFt");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 31)(42, "div", 32)(43, "div")(44, "label", 33);
    \u0275\u0275text(45, "H\u1ECD v\xE0 t\xEAn");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 34);
    \u0275\u0275text(47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div")(49, "label", 33);
    \u0275\u0275text(50, "Gi\u1EDBi t\xEDnh");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "div", 34);
    \u0275\u0275text(52);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(53, "div", 32)(54, "div")(55, "label", 33);
    \u0275\u0275text(56, "Ng\xE0y sinh");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "div", 34);
    \u0275\u0275text(58);
    \u0275\u0275pipe(59, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "div")(61, "label", 33);
    \u0275\u0275text(62, "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "div", 34);
    \u0275\u0275text(64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(65, "div")(66, "label", 33);
    \u0275\u0275text(67, "Email li\xEAn h\u1EC7 (T\xE0i kho\u1EA3n)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "div", 35);
    \u0275\u0275text(69);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(70, "div")(71, "label", 33);
    \u0275\u0275text(72, "\u0110\u1ECBa ch\u1EC9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "div", 34);
    \u0275\u0275text(74);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(75, "div", 36)(76, "div")(77, "label", 33);
    \u0275\u0275text(78, "B\u1EB1ng c\u1EA5p");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "div", 34);
    \u0275\u0275text(80);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(81, "div")(82, "label", 33);
    \u0275\u0275text(83, "Chuy\xEAn m\xF4n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "div", 34);
    \u0275\u0275text(85);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r0.profile().fullName.charAt(0), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.profile().fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.profile().teacherCode);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.profile().position);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.profile().status === "working" ? "\u0110ang c\xF4ng t\xE1c" : ctx_r0.profile().status === "on_leave" ? "Ngh\u1EC9 ph\xE9p" : "\u0110\xE3 ngh\u1EC9", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(28, 14, ctx_r0.profile().startDate, "dd/MM/yyyy"));
    \u0275\u0275advance(20);
    \u0275\u0275textInterpolate(ctx_r0.profile().fullName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.profile().gender === "male" ? "Nam" : ctx_r0.profile().gender === "female" ? "N\u1EEF" : "Kh\xE1c", " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(59, 17, ctx_r0.profile().dateOfBirth, "dd/MM/yyyy"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.profile().phone || "Ch\u01B0a c\u1EADp nh\u1EADt");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.profile().emailContact);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.profile().address || "Ch\u01B0a c\u1EADp nh\u1EADt");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.profile().degree);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.profile().major || "Ch\u01B0a c\u1EADp nh\u1EADt");
  }
}
var TeacherProfileComponent = class _TeacherProfileComponent {
  profileService = inject(TeacherProfileService);
  toastService = inject(ToastService);
  fb = inject(FormBuilder);
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
      error: () => {
        this.toastService.error("L\u1ED7i", "Kh\xF4ng th\u1EC3 t\u1EA3i th\xF4ng tin h\u1ED3 s\u01A1");
        this.isLoading.set(false);
      }
    });
  }
  static \u0275fac = function TeacherProfileComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TeacherProfileComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TeacherProfileComponent, selectors: [["app-teacher-profile"]], decls: 9, vars: 2, consts: [[1, "max-w-6xl", "mx-auto", "space-y-6"], [1, "flex", "justify-between", "items-end"], [1, "text-2xl", "font-extrabold", "text-gray-900", "tracking-tight"], [1, "text-sm", "text-gray-500", "mt-1"], ["class", "py-20 text-center text-indigo-500", 4, "ngIf"], ["class", "grid grid-cols-1 md:grid-cols-3 gap-6", 4, "ngIf"], [1, "py-20", "text-center", "text-indigo-500"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "inline-block", "h-8", "w-8"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"], [1, "grid", "grid-cols-1", "md:grid-cols-3", "gap-6"], [1, "md:col-span-1", "space-y-6"], [1, "bg-white", "rounded-2xl", "shadow-sm", "border", "border-gray-200", "p-6", "text-center", "relative", "overflow-hidden"], ["title", "T\xE0i kho\u1EA3n \u0111\xE3 x\xE1c th\u1EF1c", 1, "absolute", "top-4", "right-4", "text-emerald-500", "bg-emerald-50", "p-1.5", "rounded-lg"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "w-32", "h-32", "mx-auto", "bg-gradient-to-br", "from-indigo-500", "to-blue-600", "rounded-full", "shadow-lg", "flex", "items-center", "justify-center", "text-5xl", "font-extrabold", "text-white", "mb-4", "border-4", "border-white", "ring-4", "ring-indigo-50"], [1, "text-xl", "font-bold", "text-gray-900"], [1, "text-indigo-600", "font-semibold", "text-sm", "mt-1"], [1, "mt-6", "pt-6", "border-t", "border-gray-100", "flex", "flex-col", "space-y-3"], [1, "flex", "justify-between", "items-center", "text-sm"], [1, "text-gray-500", "font-medium"], [1, "font-bold", "text-gray-900"], [1, "px-2.5", "py-1", "bg-emerald-100", "text-emerald-700", "text-xs", "font-bold", "rounded-lg", "uppercase"], [1, "bg-amber-50", "rounded-xl", "border", "border-amber-200", "p-4", "flex", "items-start", "space-x-3"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-amber-500", "mt-0.5", "shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "text-xs", "text-amber-800", "leading-relaxed", "font-medium"], [1, "md:col-span-2", "bg-white", "rounded-2xl", "shadow-sm", "border", "border-gray-200", "overflow-hidden"], [1, "p-6", "border-b", "border-gray-100", "bg-gray-50/50"], [1, "text-lg", "font-bold", "text-gray-900"], [1, "p-6", "space-y-6"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "gap-6"], [1, "block", "text-xs", "font-bold", "text-gray-500", "uppercase", "tracking-wider", "mb-1.5"], [1, "text-sm", "text-gray-900", "font-medium"], [1, "text-sm", "text-indigo-600", "font-medium"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "gap-6", "pt-6", "border-t", "border-gray-100"]], template: function TeacherProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "H\u1ED3 s\u01A1 c\xE1 nh\xE2n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Th\xF4ng tin h\u1ED3 s\u01A1 vi\xEAn ch\u1EE9c / gi\xE1o vi\xEAn");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(7, TeacherProfileComponent_div_7_Template, 4, 0, "div", 4)(8, TeacherProfileComponent_div_8_Template, 86, 20, "div", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", ctx.isLoading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading() && ctx.profile());
    }
  }, dependencies: [CommonModule, NgIf, DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TeacherProfileComponent, [{
    type: Component,
    args: [{ selector: "app-teacher-profile", standalone: true, imports: [CommonModule], template: `<div class="max-w-6xl mx-auto space-y-6">\r
  \r
  <div class="flex justify-between items-end">\r
    <div>\r
      <h1 class="text-2xl font-extrabold text-gray-900 tracking-tight">H\u1ED3 s\u01A1 c\xE1 nh\xE2n</h1>\r
      <p class="text-sm text-gray-500 mt-1">Th\xF4ng tin h\u1ED3 s\u01A1 vi\xEAn ch\u1EE9c / gi\xE1o vi\xEAn</p>\r
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
        <div class="absolute top-4 right-4 text-emerald-500 bg-emerald-50 p-1.5 rounded-lg" title="T\xE0i kho\u1EA3n \u0111\xE3 x\xE1c th\u1EF1c">\r
           <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>\r
        </div>\r
\r
        <div class="w-32 h-32 mx-auto bg-gradient-to-br from-indigo-500 to-blue-600 rounded-full shadow-lg flex items-center justify-center text-5xl font-extrabold text-white mb-4 border-4 border-white ring-4 ring-indigo-50">\r
          {{ profile().fullName.charAt(0) }}\r
        </div>\r
        <h2 class="text-xl font-bold text-gray-900">{{ profile().fullName }}</h2>\r
        <p class="text-indigo-600 font-semibold text-sm mt-1">{{ profile().teacherCode }}</p>\r
        \r
        <div class="mt-6 pt-6 border-t border-gray-100 flex flex-col space-y-3">\r
          <div class="flex justify-between items-center text-sm">\r
            <span class="text-gray-500 font-medium">Ch\u1EE9c v\u1EE5</span>\r
            <span class="font-bold text-gray-900">{{ profile().position }}</span>\r
          </div>\r
          <div class="flex justify-between items-center text-sm">\r
            <span class="text-gray-500 font-medium">Tr\u1EA1ng th\xE1i</span>\r
            <span class="px-2.5 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-lg uppercase">\r
               {{ profile().status === 'working' ? '\u0110ang c\xF4ng t\xE1c' : (profile().status === 'on_leave' ? 'Ngh\u1EC9 ph\xE9p' : '\u0110\xE3 ngh\u1EC9') }}\r
            </span>\r
          </div>\r
          <div class="flex justify-between items-center text-sm">\r
            <span class="text-gray-500 font-medium">Ng\xE0y v\xE0o tr\u01B0\u1EDDng</span>\r
            <span class="font-bold text-gray-900">{{ profile().startDate | date:'dd/MM/yyyy' }}</span>\r
          </div>\r
        </div>\r
      </div>\r
      \r
      <div class="bg-amber-50 rounded-xl border border-amber-200 p-4 flex items-start space-x-3">\r
         <svg class="w-5 h-5 text-amber-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>\r
         <p class="text-xs text-amber-800 leading-relaxed font-medium">\r
            Th\xF4ng tin h\u1ED3 s\u01A1 \u0111\u01B0\u1EE3c qu\u1EA3n l\xFD b\u1EDFi Nh\xE0 tr\u01B0\u1EDDng. N\u1EBFu c\xF3 sai s\xF3t, vui l\xF2ng li\xEAn h\u1EC7 <strong>Qu\u1EA3n tr\u1ECB vi\xEAn (Admin)</strong> \u0111\u1EC3 \u0111\u01B0\u1EE3c h\u1ED7 tr\u1EE3 c\u1EADp nh\u1EADt.\r
         </p>\r
      </div>\r
    </div>\r
\r
    <div class="md:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">\r
      \r
      <div class="p-6 border-b border-gray-100 bg-gray-50/50">\r
        <h3 class="text-lg font-bold text-gray-900">Th\xF4ng tin chi ti\u1EBFt</h3>\r
      </div>\r
\r
      <div class="p-6 space-y-6">\r
        \r
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">\r
          <div>\r
            <label class="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">H\u1ECD v\xE0 t\xEAn</label>\r
            <div class="text-sm text-gray-900 font-medium">{{ profile().fullName }}</div>\r
          </div>\r
          <div>\r
            <label class="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Gi\u1EDBi t\xEDnh</label>\r
            <div class="text-sm text-gray-900 font-medium">\r
              {{ profile().gender === 'male' ? 'Nam' : (profile().gender === 'female' ? 'N\u1EEF' : 'Kh\xE1c') }}\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">\r
          <div>\r
            <label class="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Ng\xE0y sinh</label>\r
            <div class="text-sm text-gray-900 font-medium">{{ profile().dateOfBirth | date:'dd/MM/yyyy' }}</div>\r
          </div>\r
          <div>\r
            <label class="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">S\u1ED1 \u0111i\u1EC7n tho\u1EA1i</label>\r
            <div class="text-sm text-gray-900 font-medium">{{ profile().phone || 'Ch\u01B0a c\u1EADp nh\u1EADt' }}</div>\r
          </div>\r
        </div>\r
\r
        <div>\r
          <label class="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Email li\xEAn h\u1EC7 (T\xE0i kho\u1EA3n)</label>\r
          <div class="text-sm text-indigo-600 font-medium">{{ profile().emailContact }}</div>\r
        </div>\r
\r
        <div>\r
          <label class="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">\u0110\u1ECBa ch\u1EC9</label>\r
          <div class="text-sm text-gray-900 font-medium">{{ profile().address || 'Ch\u01B0a c\u1EADp nh\u1EADt' }}</div>\r
        </div>\r
\r
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-gray-100">\r
          <div>\r
            <label class="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">B\u1EB1ng c\u1EA5p</label>\r
            <div class="text-sm text-gray-900 font-medium">{{ profile().degree }}</div>\r
          </div>\r
          <div>\r
            <label class="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Chuy\xEAn m\xF4n</label>\r
            <div class="text-sm text-gray-900 font-medium">{{ profile().major || 'Ch\u01B0a c\u1EADp nh\u1EADt' }}</div>\r
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TeacherProfileComponent, { className: "TeacherProfileComponent", filePath: "src/app/features/teacher/pages/teacher-profile/teacher-profile.component.ts", lineNumber: 13 });
})();

// src/app/features/teacher/services/announcement.service.ts
var AnnouncementService = class _AnnouncementService {
  http = inject(HttpClient);
  apiUrl = `${environment.apiUrl}/api/v1/announcements`;
  // Lấy danh sách thông báo của Lớp Offline (Lớp chủ nhiệm)
  getPhysicalClassAnnouncements(classId, page = 1) {
    const params = new HttpParams().set("page", page.toString()).set("size", "10");
    return this.http.get(`${this.apiUrl}/physical-class/${classId}`, { params });
  }
  // Lấy danh sách thông báo của Lớp Online (Dành cho GV bộ môn dùng sau này)
  getOnlineClassAnnouncements(classId, page = 1) {
    const params = new HttpParams().set("page", page.toString()).set("size", "10");
    return this.http.get(`${this.apiUrl}/online-class/${classId}`, { params });
  }
  // Tạo thông báo mới (Xử lý RequestPart Data + File)
  createAnnouncement(dto, file) {
    const formData = new FormData();
    formData.append("data", new Blob([JSON.stringify(dto)], { type: "application/json" }));
    if (file) {
      formData.append("file", file);
    }
    return this.http.post(`${this.apiUrl}`, formData);
  }
  // Xóa thông báo
  deleteAnnouncement(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  // Gọi API lấy Lớp chủ nhiệm của tôi
  getMyHomeroomClass() {
    return this.http.get(`${environment.apiUrl}/api/v1/physical-classes/my-homeroom`);
  }
  // Cập nhật thông báo (Hỗ trợ thay đổi file đính kèm)
  updateAnnouncement(id, dto, file) {
    const formData = new FormData();
    formData.append("data", new Blob([JSON.stringify(dto)], { type: "application/json" }));
    if (file) {
      formData.append("file", file);
    }
    return this.http.put(`${this.apiUrl}/${id}`, formData);
  }
  static \u0275fac = function AnnouncementService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AnnouncementService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AnnouncementService, factory: _AnnouncementService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnnouncementService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/features/teacher/pages/homeroom/homeroom-announcement.component.ts
function HomeroomAnnouncementComponent_p_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 25);
    \u0275\u0275text(1, "Vui l\xF2ng nh\u1EADp ti\xEAu \u0111\u1EC1");
    \u0275\u0275elementEnd();
  }
}
function HomeroomAnnouncementComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 28);
    \u0275\u0275element(3, "path", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span", 29);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 30);
    \u0275\u0275listener("click", function HomeroomAnnouncementComponent_div_18_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeFile());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 31);
    \u0275\u0275element(8, "path", 32);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((tmp_2_0 = ctx_r2.selectedFile()) == null ? null : tmp_2_0.name);
  }
}
function HomeroomAnnouncementComponent__svg_svg_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 33);
    \u0275\u0275element(1, "circle", 34)(2, "path", 35);
    \u0275\u0275elementEnd();
  }
}
function HomeroomAnnouncementComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 37);
    \u0275\u0275element(2, "circle", 34)(3, "path", 35);
    \u0275\u0275elementEnd()();
  }
}
function HomeroomAnnouncementComponent_div_31_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 43);
    \u0275\u0275element(2, "path", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " L\u1EDBp ch\u01B0a c\xF3 th\xF4ng b\xE1o n\xE0o. ");
    \u0275\u0275elementEnd();
  }
}
function HomeroomAnnouncementComponent_div_31_div_2_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59)(1, "div", 60)(2, "div", 61);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 31);
    \u0275\u0275element(4, "path", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "span", 62);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "a", 63);
    \u0275\u0275text(8, "T\u1EA3i / Xem");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_5_0;
    const post_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate((post_r6.attachmentPath == null ? null : (tmp_5_0 = post_r6.attachmentPath.split("_")) == null ? null : tmp_5_0.pop()) || "T\u1EC7p \u0111\xEDnh k\xE8m");
    \u0275\u0275advance();
    \u0275\u0275property("href", post_r6.attachmentUrl, \u0275\u0275sanitizeUrl);
  }
}
function HomeroomAnnouncementComponent_div_31_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 45)(1, "div", 46)(2, "div", 47)(3, "div", 48);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "div", 49);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 50);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 51)(12, "button", 52);
    \u0275\u0275listener("click", function HomeroomAnnouncementComponent_div_31_div_2_Template_button_click_12_listener() {
      const post_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openEditModal(post_r6));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(13, "svg", 7);
    \u0275\u0275element(14, "path", 53);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(15, "button", 54);
    \u0275\u0275listener("click", function HomeroomAnnouncementComponent_div_31_div_2_Template_button_click_15_listener() {
      const post_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.deletePost(post_r6.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(16, "svg", 7);
    \u0275\u0275element(17, "path", 55);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(18, "h4", 56);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p", 57);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, HomeroomAnnouncementComponent_div_31_div_2_div_22_Template, 9, 2, "div", 58);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const post_r6 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", (post_r6.createdByName == null ? null : post_r6.createdByName.charAt(0)) || "G", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(post_r6.createdByName || "Gi\xE1o vi\xEAn");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 6, post_r6.publishedAt, "dd/MM/yyyy HH:mm"));
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(post_r6.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(post_r6.content);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", post_r6.attachmentUrl);
  }
}
function HomeroomAnnouncementComponent_div_31_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 64)(1, "div", 65)(2, "button", 66);
    \u0275\u0275listener("click", function HomeroomAnnouncementComponent_div_31_div_3_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.changePage(ctx_r2.currentPage() - 1));
    });
    \u0275\u0275text(3, "Trang tr\u01B0\u1EDBc");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 67);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 66);
    \u0275\u0275listener("click", function HomeroomAnnouncementComponent_div_31_div_3_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.changePage(ctx_r2.currentPage() + 1));
    });
    \u0275\u0275text(7, "Trang sau");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.currentPage() === 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r2.currentPage(), " / ", ctx_r2.totalPages());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.currentPage() === ctx_r2.totalPages());
  }
}
function HomeroomAnnouncementComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275template(1, HomeroomAnnouncementComponent_div_31_div_1_Template, 4, 0, "div", 39)(2, HomeroomAnnouncementComponent_div_31_div_2_Template, 23, 9, "div", 40)(3, HomeroomAnnouncementComponent_div_31_div_3_Template, 8, 4, "div", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.announcements().length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.announcements());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.totalPages() > 1);
  }
}
function HomeroomAnnouncementComponent_div_32__svg_svg_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 33);
    \u0275\u0275element(1, "circle", 34)(2, "path", 35);
    \u0275\u0275elementEnd();
  }
}
function HomeroomAnnouncementComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 68)(1, "div", 69)(2, "div", 70)(3, "div", 71);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 72);
    \u0275\u0275element(5, "path", 73);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "h3", 74);
    \u0275\u0275text(7, "X\xF3a th\xF4ng b\xE1o n\xE0y?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 75);
    \u0275\u0275text(9, " H\xE0nh \u0111\u1ED9ng n\xE0y s\u1EBD g\u1EE1 b\u1ECF b\xE0i vi\u1EBFt kh\u1ECFi b\u1EA3ng tin c\u1EE7a l\u1EDBp h\u1ECDc v\xE0 x\xF3a v\u0129nh vi\u1EC5n t\u1EC7p \u0111\xEDnh k\xE8m (n\u1EBFu c\xF3). B\u1EA1n kh\xF4ng th\u1EC3 ho\xE0n t\xE1c. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 76)(11, "button", 77);
    \u0275\u0275listener("click", function HomeroomAnnouncementComponent_div_32_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeDeleteModal());
    });
    \u0275\u0275text(12, " H\u1EE7y b\u1ECF ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 78);
    \u0275\u0275listener("click", function HomeroomAnnouncementComponent_div_32_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.confirmDelete());
    });
    \u0275\u0275template(14, HomeroomAnnouncementComponent_div_32__svg_svg_14_Template, 3, 0, "svg", 21);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275property("disabled", ctx_r2.isDeleting());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.isDeleting());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isDeleting());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.isDeleting() ? "\u0110ang x\xF3a..." : "X\xF3a", " ");
  }
}
function HomeroomAnnouncementComponent_div_33_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 94)(1, "div", 27);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 95);
    \u0275\u0275element(3, "path", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span", 96);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("File hi\u1EC7n t\u1EA1i: ", (tmp_4_0 = ctx_r2.currentAttachmentPath()) == null ? null : (tmp_4_0 = tmp_4_0.split("_")) == null ? null : tmp_4_0.pop());
  }
}
function HomeroomAnnouncementComponent_div_33_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 97)(1, "div", 27);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 98);
    \u0275\u0275element(3, "path", 99);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span", 100);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 101);
    \u0275\u0275listener("click", function HomeroomAnnouncementComponent_div_33_div_24_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.removeNewEditFile());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 31);
    \u0275\u0275element(8, "path", 32);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("S\u1EBD thay th\u1EBF b\u1EB1ng: ", (tmp_4_0 = ctx_r2.newEditFile()) == null ? null : tmp_4_0.name);
  }
}
function HomeroomAnnouncementComponent_div_33__svg_svg_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 33);
    \u0275\u0275element(1, "circle", 34)(2, "path", 35);
    \u0275\u0275elementEnd();
  }
}
function HomeroomAnnouncementComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 68)(1, "div", 79)(2, "div", 80)(3, "div", 81);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 7);
    \u0275\u0275element(5, "path", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "h3", 49);
    \u0275\u0275text(7, "Ch\u1EC9nh s\u1EEDa th\xF4ng b\xE1o");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 82);
    \u0275\u0275listener("click", function HomeroomAnnouncementComponent_div_33_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeEditModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 7);
    \u0275\u0275element(10, "path", 32);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(11, "form", 83);
    \u0275\u0275listener("ngSubmit", function HomeroomAnnouncementComponent_div_33_Template_form_ngSubmit_11_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.submitUpdate());
    });
    \u0275\u0275elementStart(12, "div")(13, "label", 84);
    \u0275\u0275text(14, "Ti\xEAu \u0111\u1EC1");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "input", 85);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div")(17, "label", 84);
    \u0275\u0275text(18, "N\u1ED9i dung");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "textarea", 86);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div")(21, "label", 84);
    \u0275\u0275text(22, "T\u1EC7p \u0111\xEDnh k\xE8m");
    \u0275\u0275elementEnd();
    \u0275\u0275template(23, HomeroomAnnouncementComponent_div_33_div_23_Template, 6, 1, "div", 87)(24, HomeroomAnnouncementComponent_div_33_div_24_Template, 9, 1, "div", 88);
    \u0275\u0275elementStart(25, "input", 16, 1);
    \u0275\u0275listener("change", function HomeroomAnnouncementComponent_div_33_Template_input_change_25_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onEditFileSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 89);
    \u0275\u0275listener("click", function HomeroomAnnouncementComponent_div_33_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r9);
      const editFileInput_r11 = \u0275\u0275reference(26);
      return \u0275\u0275resetView(editFileInput_r11.click());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(28, "svg", 18);
    \u0275\u0275element(29, "path", 90);
    \u0275\u0275elementEnd();
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(31, "div", 91)(32, "button", 92);
    \u0275\u0275listener("click", function HomeroomAnnouncementComponent_div_33_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeEditModal());
    });
    \u0275\u0275text(33, " H\u1EE7y b\u1ECF ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "button", 93);
    \u0275\u0275template(35, HomeroomAnnouncementComponent_div_33__svg_svg_35_Template, 3, 0, "svg", 21);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275property("formGroup", ctx_r2.postForm);
    \u0275\u0275advance(12);
    \u0275\u0275property("ngIf", ctx_r2.currentAttachmentUrl());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.newEditFile());
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r2.currentAttachmentUrl() || ctx_r2.newEditFile() ? "Thay \u0111\u1ED5i t\u1EC7p \u0111\xEDnh k\xE8m" : "Th\xEAm t\u1EC7p \u0111\xEDnh k\xE8m", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.isUpdating());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.postForm.invalid || ctx_r2.isUpdating());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isUpdating());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.isUpdating() ? "\u0110ang l\u01B0u..." : "L\u01B0u thay \u0111\u1ED5i", " ");
  }
}
var HomeroomAnnouncementComponent = class _HomeroomAnnouncementComponent {
  route = inject(ActivatedRoute);
  announcementService = inject(AnnouncementService);
  toastService = inject(ToastService);
  fb = inject(FormBuilder);
  classId = signal(null, ...ngDevMode ? [{ debugName: "classId" }] : (
    /* istanbul ignore next */
    []
  ));
  // State Danh sách
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
  // State Form
  postForm;
  isSubmitting = signal(false, ...ngDevMode ? [{ debugName: "isSubmitting" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedFile = signal(null, ...ngDevMode ? [{ debugName: "selectedFile" }] : (
    /* istanbul ignore next */
    []
  ));
  // --- STATE MODAL SỬA ---
  isEditModalOpen = signal(false, ...ngDevMode ? [{ debugName: "isEditModalOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  editingPostId = signal(null, ...ngDevMode ? [{ debugName: "editingPostId" }] : (
    /* istanbul ignore next */
    []
  ));
  isUpdating = signal(false, ...ngDevMode ? [{ debugName: "isUpdating" }] : (
    /* istanbul ignore next */
    []
  ));
  // Biến tạm để xử lý file đính kèm khi sửa
  currentAttachmentUrl = signal(null, ...ngDevMode ? [{ debugName: "currentAttachmentUrl" }] : (
    /* istanbul ignore next */
    []
  ));
  currentAttachmentPath = signal(null, ...ngDevMode ? [{ debugName: "currentAttachmentPath" }] : (
    /* istanbul ignore next */
    []
  ));
  newEditFile = signal(null, ...ngDevMode ? [{ debugName: "newEditFile" }] : (
    /* istanbul ignore next */
    []
  ));
  // File mới user chọn để thay thế
  // --- STATE MODAL XÓA ---
  isDeleteModalOpen = signal(false, ...ngDevMode ? [{ debugName: "isDeleteModalOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  postToDelete = signal(null, ...ngDevMode ? [{ debugName: "postToDelete" }] : (
    /* istanbul ignore next */
    []
  ));
  isDeleting = signal(false, ...ngDevMode ? [{ debugName: "isDeleting" }] : (
    /* istanbul ignore next */
    []
  ));
  ngOnInit() {
    this.postForm = this.fb.group({
      title: ["", Validators.required],
      content: ["", Validators.required]
    });
    this.isLoading.set(true);
    this.announcementService.getMyHomeroomClass().subscribe({
      next: (res) => {
        this.classId.set(res.id);
        this.loadAnnouncements();
      },
      error: (err) => {
        this.toastService.warning("Th\xF4ng b\xE1o", err.error?.message || "B\u1EA1n ch\u01B0a \u0111\u01B0\u1EE3c ph\xE2n c\xF4ng ch\u1EE7 nhi\u1EC7m l\u1EDBp n\xE0o.");
        this.isLoading.set(false);
      }
    });
  }
  loadAnnouncements() {
    this.isLoading.set(true);
    this.announcementService.getPhysicalClassAnnouncements(this.classId(), this.currentPage()).subscribe({
      next: (res) => {
        this.announcements.set(res.content || []);
        this.totalPages.set(res.totalPages || 1);
        this.isLoading.set(false);
      },
      error: () => {
        this.toastService.error("L\u1ED7i", "Kh\xF4ng th\u1EC3 t\u1EA3i danh s\xE1ch th\xF4ng b\xE1o");
        this.isLoading.set(false);
      }
    });
  }
  onFileSelected(event) {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        this.toastService.warning("C\u1EA3nh b\xE1o", "Vui l\xF2ng ch\u1ECDn file c\xF3 dung l\u01B0\u1EE3ng d\u01B0\u1EDBi 10MB");
        event.target.value = "";
        return;
      }
      this.selectedFile.set(file);
    }
  }
  removeFile() {
    this.selectedFile.set(null);
  }
  submitPost() {
    if (this.postForm.invalid) {
      this.postForm.markAllAsTouched();
      return;
    }
    this.isSubmitting.set(true);
    const dto = {
      title: this.postForm.value.title,
      content: this.postForm.value.content,
      scope: "physical_class",
      physicalClassId: this.classId()
    };
    this.announcementService.createAnnouncement(dto, this.selectedFile() || void 0).subscribe({
      next: () => {
        this.toastService.success("Th\xE0nh c\xF4ng", "\u0110\xE3 \u0111\u0103ng th\xF4ng b\xE1o cho l\u1EDBp!");
        this.postForm.reset();
        this.selectedFile.set(null);
        this.isSubmitting.set(false);
        this.currentPage.set(1);
        this.loadAnnouncements();
      },
      error: (err) => {
        this.toastService.error("L\u1ED7i", err.error?.message || "Kh\xF4ng th\u1EC3 \u0111\u0103ng th\xF4ng b\xE1o");
        this.isSubmitting.set(false);
      }
    });
  }
  // Mở Modal và lưu lại ID cần xóa
  deletePost(id) {
    this.postToDelete.set(id);
    this.isDeleteModalOpen.set(true);
  }
  // Đóng Modal
  closeDeleteModal() {
    this.isDeleteModalOpen.set(false);
    this.postToDelete.set(null);
    this.isDeleting.set(false);
  }
  //  Thực thi gọi API xóa (Khi user bấm "Xác nhận xóa" trên Modal)
  confirmDelete() {
    const id = this.postToDelete();
    if (!id)
      return;
    this.isDeleting.set(true);
    this.announcementService.deleteAnnouncement(id).subscribe({
      next: () => {
        this.toastService.success("Th\xE0nh c\xF4ng", "\u0110\xE3 x\xF3a th\xF4ng b\xE1o");
        this.loadAnnouncements();
        this.closeDeleteModal();
      },
      error: (err) => {
        this.toastService.error("L\u1ED7i", err.error?.message || "X\xF3a th\u1EA5t b\u1EA1i");
        this.isDeleting.set(false);
      }
    });
  }
  // --- CÁC HÀM XỬ LÝ ---
  openEditModal(post) {
    this.editingPostId.set(post.id);
    this.isEditModalOpen.set(true);
    this.postForm.patchValue({
      title: post.title,
      content: post.content
    });
    this.currentAttachmentUrl.set(post.attachmentUrl);
    this.currentAttachmentPath.set(post.attachmentPath);
    this.newEditFile.set(null);
  }
  closeEditModal() {
    this.isEditModalOpen.set(false);
    this.editingPostId.set(null);
    this.postForm.reset();
    this.currentAttachmentUrl.set(null);
    this.currentAttachmentPath.set(null);
    this.newEditFile.set(null);
  }
  onEditFileSelected(event) {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        this.toastService.warning("C\u1EA3nh b\xE1o", "Vui l\xF2ng ch\u1ECDn file d\u01B0\u1EDBi 10MB");
        event.target.value = "";
        return;
      }
      this.newEditFile.set(file);
      this.currentAttachmentUrl.set(null);
    }
  }
  removeNewEditFile() {
    this.newEditFile.set(null);
    if (this.editingPostId()) {
      const post = this.announcements().find((a) => a.id === this.editingPostId());
      if (post && post.attachmentUrl) {
        this.currentAttachmentUrl.set(post.attachmentUrl);
      }
    }
  }
  submitUpdate() {
    if (this.postForm.invalid || !this.editingPostId()) {
      this.postForm.markAllAsTouched();
      return;
    }
    this.isUpdating.set(true);
    const dto = {
      title: this.postForm.value.title,
      content: this.postForm.value.content,
      scope: "physical_class",
      physicalClassId: this.classId()
    };
    this.announcementService.updateAnnouncement(this.editingPostId(), dto, this.newEditFile() || void 0).subscribe({
      next: () => {
        this.toastService.success("Th\xE0nh c\xF4ng", "\u0110\xE3 c\u1EADp nh\u1EADt th\xF4ng b\xE1o");
        this.loadAnnouncements();
        this.closeEditModal();
      },
      error: (err) => {
        this.toastService.error("L\u1ED7i", err.error?.message || "Kh\xF4ng th\u1EC3 c\u1EADp nh\u1EADt th\xF4ng b\xE1o");
        this.isUpdating.set(false);
      }
    });
  }
  changePage(page) {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage.set(page);
      this.loadAnnouncements();
    }
  }
  static \u0275fac = function HomeroomAnnouncementComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HomeroomAnnouncementComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeroomAnnouncementComponent, selectors: [["app-homeroom-announcement"]], decls: 34, vars: 10, consts: [["fileInput", ""], ["editFileInput", ""], [1, "max-w-4xl", "mx-auto", "space-y-6"], [1, "text-2xl", "font-extrabold", "text-gray-900", "tracking-tight"], [1, "text-sm", "text-gray-500", "mt-1"], [1, "bg-white", "rounded-2xl", "shadow-sm", "border", "border-gray-200", "overflow-hidden"], [1, "p-4", "border-b", "border-gray-100", "bg-gray-50/50", "flex", "items-center", "space-x-2", "text-indigo-700"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"], [1, "font-bold"], [1, "p-5", "flex", "flex-col", "space-y-4", 3, "ngSubmit", "formGroup"], ["formControlName", "title", "type", "text", "placeholder", "Ti\xEAu \u0111\u1EC1 th\xF4ng b\xE1o...", 1, "w-full", "text-lg", "font-bold", "text-gray-900", "placeholder-gray-400", "outline-none", "border-b", "border-gray-200", "focus:border-indigo-500", "pb-2", "transition"], ["class", "text-xs text-red-500 mt-1", 4, "ngIf"], ["formControlName", "content", "rows", "3", "placeholder", "Vi\u1EBFt n\u1ED9i dung th\xF4ng b\xE1o, nh\u1EAFc nh\u1EDF ho\u1EB7c d\u1EB7n d\xF2 l\u1EDBp \u1EDF \u0111\xE2y...", 1, "w-full", "text-sm", "text-gray-700", "placeholder-gray-400", "outline-none", "resize-none", "bg-gray-50/50", "p-3", "rounded-xl", "focus:ring-2", "focus:ring-indigo-100", "border", "border-transparent", "focus:border-indigo-300", "transition"], ["class", "flex items-center justify-between p-3 bg-indigo-50 border border-indigo-100 rounded-xl", 4, "ngIf"], [1, "flex", "items-center", "justify-between", "pt-2"], ["type", "file", 1, "hidden", 3, "change"], ["type", "button", 1, "flex", "items-center", "px-4", "py-2", "text-sm", "font-semibold", "text-gray-600", "bg-gray-100", "hover:bg-gray-200", "rounded-full", "transition", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "mr-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"], ["type", "submit", 1, "flex", "items-center", "px-6", "py-2.5", "text-sm", "font-bold", "text-white", "bg-indigo-600", "rounded-full", "hover:bg-indigo-700", "disabled:bg-indigo-300", "shadow-md", "transition", 3, "disabled"], ["class", "animate-spin -ml-1 mr-2 h-4 w-4 text-white", "fill", "none", "viewBox", "0 0 24 24", 4, "ngIf"], ["class", "py-12 text-center text-indigo-500", 4, "ngIf"], ["class", "space-y-4", 4, "ngIf"], ["class", "fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm transition-opacity", 4, "ngIf"], [1, "text-xs", "text-red-500", "mt-1"], [1, "flex", "items-center", "justify-between", "p-3", "bg-indigo-50", "border", "border-indigo-100", "rounded-xl"], [1, "flex", "items-center", "min-w-0"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-indigo-500", "mr-2", "shrink-0"], [1, "text-sm", "font-bold", "text-indigo-900", "truncate"], ["type", "button", 1, "text-indigo-400", "hover:text-red-500", "p-1", "rounded-md", "hover:bg-white", "transition", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "-ml-1", "mr-2", "h-4", "w-4", "text-white"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"], [1, "py-12", "text-center", "text-indigo-500"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "inline-block", "h-8", "w-8"], [1, "space-y-4"], ["class", "text-center py-12 bg-white rounded-2xl border border-gray-200 border-dashed text-gray-500", 4, "ngIf"], ["class", "bg-white p-5 rounded-2xl shadow-sm border border-gray-200", 4, "ngFor", "ngForOf"], ["class", "flex justify-center pt-4", 4, "ngIf"], [1, "text-center", "py-12", "bg-white", "rounded-2xl", "border", "border-gray-200", "border-dashed", "text-gray-500"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-12", "h-12", "mx-auto", "text-gray-300", "mb-3"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"], [1, "bg-white", "p-5", "rounded-2xl", "shadow-sm", "border", "border-gray-200"], [1, "flex", "justify-between", "items-start", "mb-4"], [1, "flex", "items-center", "space-x-3"], [1, "w-10", "h-10", "rounded-full", "bg-gradient-to-br", "from-indigo-500", "to-blue-600", "flex", "items-center", "justify-center", "text-white", "font-bold", "text-lg", "shadow-inner"], [1, "font-bold", "text-gray-900"], [1, "text-xs", "text-gray-500"], [1, "flex", "items-center", "space-x-1"], ["title", "Ch\u1EC9nh s\u1EEDa th\xF4ng b\xE1o", 1, "text-gray-400", "hover:text-indigo-600", "p-2", "rounded-full", "hover:bg-indigo-50", "transition", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"], ["title", "X\xF3a th\xF4ng b\xE1o", 1, "text-gray-400", "hover:text-red-500", "p-2", "rounded-full", "hover:bg-red-50", "transition", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"], [1, "text-lg", "font-bold", "text-gray-900", "mb-2"], [1, "text-sm", "text-gray-700", "whitespace-pre-wrap", "leading-relaxed"], ["class", "mt-4 p-3 bg-gray-50 border border-gray-200 rounded-xl flex items-center justify-between group", 4, "ngIf"], [1, "mt-4", "p-3", "bg-gray-50", "border", "border-gray-200", "rounded-xl", "flex", "items-center", "justify-between", "group"], [1, "flex", "items-center", "min-w-0", "pr-4"], [1, "w-8", "h-8", "rounded", "bg-white", "border", "border-gray-200", "flex", "items-center", "justify-center", "text-gray-500", "mr-3", "shrink-0"], [1, "text-sm", "font-semibold", "text-gray-700", "truncate", "group-hover:text-indigo-600", "transition"], ["target", "_blank", 1, "px-3", "py-1.5", "text-xs", "font-bold", "text-indigo-700", "bg-indigo-100", "hover:bg-indigo-600", "hover:text-white", "rounded-lg", "transition", "shrink-0", 3, "href"], [1, "flex", "justify-center", "pt-4"], [1, "flex", "space-x-2"], [1, "px-3", "py-1.5", "text-sm", "font-medium", "text-gray-700", "bg-white", "border", "border-gray-300", "rounded-lg", "hover:bg-gray-50", "disabled:opacity-50", 3, "click", "disabled"], [1, "px-4", "py-1.5", "text-sm", "font-bold", "text-gray-900", "bg-gray-100", "rounded-lg"], [1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "p-4", "bg-gray-900/60", "backdrop-blur-sm", "transition-opacity"], [1, "bg-white", "rounded-3xl", "shadow-2xl", "w-full", "max-w-md", "overflow-hidden", "transform", "transition-all", "animate-[fadeIn_0.2s_ease-out]"], [1, "p-6", "pt-8"], [1, "flex", "items-center", "justify-center", "w-14", "h-14", "mx-auto", "bg-red-100", "rounded-full", "mb-5", "shadow-inner"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-7", "h-7", "text-red-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"], [1, "text-xl", "font-extrabold", "text-center", "text-gray-900", "mb-2"], [1, "text-sm", "text-center", "text-gray-500", "leading-relaxed", "px-2"], [1, "px-6", "py-4", "bg-gray-50", "flex", "justify-end", "space-x-3", "border-t", "border-gray-100"], [1, "px-5", "py-2.5", "text-sm", "font-bold", "text-gray-700", "bg-white", "border", "border-gray-300", "rounded-xl", "hover:bg-gray-100", "hover:text-gray-900", "transition", "disabled:opacity-50", "shadow-sm", 3, "click", "disabled"], [1, "flex", "items-center", "px-5", "py-2.5", "text-sm", "font-bold", "text-white", "bg-red-600", "border", "border-transparent", "rounded-xl", "hover:bg-red-700", "transition", "disabled:opacity-50", "shadow-md", 3, "click", "disabled"], [1, "bg-white", "rounded-3xl", "shadow-2xl", "w-full", "max-w-2xl", "overflow-hidden", "transform", "transition-all", "animate-[fadeIn_0.2s_ease-out]"], [1, "p-5", "border-b", "border-gray-100", "bg-gray-50/50", "flex", "items-center", "justify-between", "text-indigo-700"], [1, "flex", "items-center", "space-x-2"], [1, "text-gray-400", "hover:text-gray-600", "p-1.5", "rounded-lg", "hover:bg-white", "transition", 3, "click"], [1, "p-6", "flex", "flex-col", "space-y-4", 3, "ngSubmit", "formGroup"], [1, "block", "text-sm", "font-bold", "text-gray-700", "mb-1.5"], ["formControlName", "title", "type", "text", "placeholder", "Ti\xEAu \u0111\u1EC1 th\xF4ng b\xE1o...", 1, "w-full", "text-sm", "font-medium", "text-gray-900", "placeholder-gray-400", "outline-none", "p-3", "rounded-xl", "bg-gray-50/50", "border", "focus:border-indigo-500", "transition"], ["formControlName", "content", "rows", "6", "placeholder", "Vi\u1EBFt n\u1ED9i dung th\xF4ng b\xE1o...", 1, "w-full", "text-sm", "text-gray-700", "placeholder-gray-400", "outline-none", "resize-none", "bg-gray-50/50", "p-3", "rounded-xl", "focus:ring-2", "focus:ring-indigo-100", "border", "focus:border-indigo-300", "transition"], ["class", "flex items-center justify-between p-3 bg-gray-50 border border-gray-200 rounded-xl mb-3", 4, "ngIf"], ["class", "flex items-center justify-between p-3 bg-emerald-50 border border-emerald-100 rounded-xl mb-3", 4, "ngIf"], ["type", "button", 1, "flex", "items-center", "px-4", "py-2", "text-sm", "font-semibold", "text-indigo-700", "bg-indigo-50", "hover:bg-indigo-100", "border", "border-indigo-100", "rounded-full", "transition", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"], [1, "flex", "items-center", "justify-end", "space-x-3", "pt-6", "border-t", "border-gray-100", "mt-4"], ["type", "button", 1, "px-6", "py-2.5", "text-sm", "font-bold", "text-gray-700", "bg-white", "border", "border-gray-300", "rounded-xl", "hover:bg-gray-100", "transition", "shadow-sm", 3, "click", "disabled"], ["type", "submit", 1, "flex", "items-center", "px-8", "py-2.5", "text-sm", "font-bold", "text-white", "bg-indigo-600", "rounded-xl", "hover:bg-indigo-700", "disabled:bg-indigo-300", "shadow-md", "transition", 3, "disabled"], [1, "flex", "items-center", "justify-between", "p-3", "bg-gray-50", "border", "border-gray-200", "rounded-xl", "mb-3"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-gray-400", "mr-2", "shrink-0"], [1, "text-xs", "font-medium", "text-gray-600", "truncate"], [1, "flex", "items-center", "justify-between", "p-3", "bg-emerald-50", "border", "border-emerald-100", "rounded-xl", "mb-3"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-emerald-500", "mr-2", "shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "text-sm", "font-bold", "text-emerald-900", "truncate"], ["type", "button", 1, "text-emerald-400", "hover:text-red-500", "p-1", "rounded-md", "hover:bg-white", "transition", 3, "click"]], template: function HomeroomAnnouncementComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "div")(2, "h1", 3);
      \u0275\u0275text(3, "B\u1EA3ng tin L\u1EDBp ch\u1EE7 nhi\u1EC7m");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 4);
      \u0275\u0275text(5, "\u0110\u0103ng th\xF4ng b\xE1o, nh\u1EAFc nh\u1EDF v\xE0 t\xE0i li\u1EC7u cho h\u1ECDc sinh trong l\u1EDBp");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 5)(7, "div", 6);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(8, "svg", 7);
      \u0275\u0275element(9, "path", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(10, "h3", 9);
      \u0275\u0275text(11, "\u0110\u0103ng th\xF4ng b\xE1o m\u1EDBi");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "form", 10);
      \u0275\u0275listener("ngSubmit", function HomeroomAnnouncementComponent_Template_form_ngSubmit_12_listener() {
        return ctx.submitPost();
      });
      \u0275\u0275elementStart(13, "div");
      \u0275\u0275element(14, "input", 11);
      \u0275\u0275template(15, HomeroomAnnouncementComponent_p_15_Template, 2, 0, "p", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div");
      \u0275\u0275element(17, "textarea", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275template(18, HomeroomAnnouncementComponent_div_18_Template, 9, 1, "div", 14);
      \u0275\u0275elementStart(19, "div", 15)(20, "div")(21, "input", 16, 0);
      \u0275\u0275listener("change", function HomeroomAnnouncementComponent_Template_input_change_21_listener($event) {
        return ctx.onFileSelected($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "button", 17);
      \u0275\u0275listener("click", function HomeroomAnnouncementComponent_Template_button_click_23_listener() {
        \u0275\u0275restoreView(_r1);
        const fileInput_r4 = \u0275\u0275reference(22);
        return \u0275\u0275resetView(fileInput_r4.click());
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(24, "svg", 18);
      \u0275\u0275element(25, "path", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275text(26, " \u0110\xEDnh k\xE8m t\u1EC7p ");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(27, "button", 20);
      \u0275\u0275template(28, HomeroomAnnouncementComponent__svg_svg_28_Template, 3, 0, "svg", 21);
      \u0275\u0275text(29);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(30, HomeroomAnnouncementComponent_div_30_Template, 4, 0, "div", 22)(31, HomeroomAnnouncementComponent_div_31_Template, 4, 3, "div", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275template(32, HomeroomAnnouncementComponent_div_32_Template, 16, 4, "div", 24)(33, HomeroomAnnouncementComponent_div_33_Template, 37, 8, "div", 24);
    }
    if (rf & 2) {
      let tmp_2_0;
      \u0275\u0275advance(12);
      \u0275\u0275property("formGroup", ctx.postForm);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ((tmp_2_0 = ctx.postForm.get("title")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx.postForm.get("title")) == null ? null : tmp_2_0.touched));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.selectedFile());
      \u0275\u0275advance(9);
      \u0275\u0275property("disabled", ctx.postForm.invalid || ctx.isSubmitting());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isSubmitting());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.isSubmitting() ? "\u0110ang \u0111\u0103ng..." : "\u0110\u0103ng th\xF4ng b\xE1o", " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isDeleteModalOpen());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isEditModalOpen());
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomeroomAnnouncementComponent, [{
    type: Component,
    args: [{ selector: "app-homeroom-announcement", standalone: true, imports: [CommonModule, ReactiveFormsModule], template: `<div class="max-w-4xl mx-auto space-y-6">\r
  \r
  <div>\r
    <h1 class="text-2xl font-extrabold text-gray-900 tracking-tight">B\u1EA3ng tin L\u1EDBp ch\u1EE7 nhi\u1EC7m</h1>\r
    <p class="text-sm text-gray-500 mt-1">\u0110\u0103ng th\xF4ng b\xE1o, nh\u1EAFc nh\u1EDF v\xE0 t\xE0i li\u1EC7u cho h\u1ECDc sinh trong l\u1EDBp</p>\r
  </div>\r
\r
  <div class="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">\r
    <div class="p-4 border-b border-gray-100 bg-gray-50/50 flex items-center space-x-2 text-indigo-700">\r
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>\r
      <h3 class="font-bold">\u0110\u0103ng th\xF4ng b\xE1o m\u1EDBi</h3>\r
    </div>\r
    <form [formGroup]="postForm" (ngSubmit)="submitPost()" class="p-5 flex flex-col space-y-4">\r
      \r
      <div>\r
        <input formControlName="title" type="text" placeholder="Ti\xEAu \u0111\u1EC1 th\xF4ng b\xE1o..." class="w-full text-lg font-bold text-gray-900 placeholder-gray-400 outline-none border-b border-gray-200 focus:border-indigo-500 pb-2 transition">\r
        <p *ngIf="postForm.get('title')?.invalid && postForm.get('title')?.touched" class="text-xs text-red-500 mt-1">Vui l\xF2ng nh\u1EADp ti\xEAu \u0111\u1EC1</p>\r
      </div>\r
\r
      <div>\r
        <textarea formControlName="content" rows="3" placeholder="Vi\u1EBFt n\u1ED9i dung th\xF4ng b\xE1o, nh\u1EAFc nh\u1EDF ho\u1EB7c d\u1EB7n d\xF2 l\u1EDBp \u1EDF \u0111\xE2y..." class="w-full text-sm text-gray-700 placeholder-gray-400 outline-none resize-none bg-gray-50/50 p-3 rounded-xl focus:ring-2 focus:ring-indigo-100 border border-transparent focus:border-indigo-300 transition"></textarea>\r
      </div>\r
\r
      <div *ngIf="selectedFile()" class="flex items-center justify-between p-3 bg-indigo-50 border border-indigo-100 rounded-xl">\r
        <div class="flex items-center min-w-0">\r
          <svg class="w-5 h-5 text-indigo-500 mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path></svg>\r
          <span class="text-sm font-bold text-indigo-900 truncate">{{ selectedFile()?.name }}</span>\r
        </div>\r
        <button type="button" (click)="removeFile()" class="text-indigo-400 hover:text-red-500 p-1 rounded-md hover:bg-white transition">\r
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>\r
        </button>\r
      </div>\r
\r
      <div class="flex items-center justify-between pt-2">\r
        <div>\r
          <input type="file" #fileInput class="hidden" (change)="onFileSelected($event)">\r
          <button type="button" (click)="fileInput.click()" class="flex items-center px-4 py-2 text-sm font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-full transition">\r
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path></svg> \u0110\xEDnh k\xE8m t\u1EC7p\r
          </button>\r
        </div>\r
\r
        <button type="submit" [disabled]="postForm.invalid || isSubmitting()" class="flex items-center px-6 py-2.5 text-sm font-bold text-white bg-indigo-600 rounded-full hover:bg-indigo-700 disabled:bg-indigo-300 shadow-md transition">\r
          <svg *ngIf="isSubmitting()" class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>\r
          {{ isSubmitting() ? '\u0110ang \u0111\u0103ng...' : '\u0110\u0103ng th\xF4ng b\xE1o' }}\r
        </button>\r
      </div>\r
    </form>\r
  </div>\r
\r
  <div *ngIf="isLoading()" class="py-12 text-center text-indigo-500">\r
    <svg class="animate-spin inline-block h-8 w-8" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>\r
  </div>\r
\r
  <div *ngIf="!isLoading()" class="space-y-4">\r
    \r
    <div *ngIf="announcements().length === 0" class="text-center py-12 bg-white rounded-2xl border border-gray-200 border-dashed text-gray-500">\r
      <svg class="w-12 h-12 mx-auto text-gray-300 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path></svg>\r
      L\u1EDBp ch\u01B0a c\xF3 th\xF4ng b\xE1o n\xE0o.\r
    </div>\r
\r
    <div *ngFor="let post of announcements()" class="bg-white p-5 rounded-2xl shadow-sm border border-gray-200">\r
      \r
      <div class="flex justify-between items-start mb-4">\r
        <div class="flex items-center space-x-3">\r
          <div class="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-inner">\r
            {{ post.createdByName?.charAt(0) || 'G' }}\r
          </div>\r
          <div>\r
            <div class="font-bold text-gray-900">{{ post.createdByName || 'Gi\xE1o vi\xEAn' }}</div>\r
            <div class="text-xs text-gray-500">{{ post.publishedAt | date:'dd/MM/yyyy HH:mm' }}</div>\r
          </div>\r
        </div>\r
        <div class="flex items-center space-x-1">\r
          <button (click)="openEditModal(post)" class="text-gray-400 hover:text-indigo-600 p-2 rounded-full hover:bg-indigo-50 transition" title="Ch\u1EC9nh s\u1EEDa th\xF4ng b\xE1o">\r
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>\r
          </button>\r
          \r
          <button (click)="deletePost(post.id)" class="text-gray-400 hover:text-red-500 p-2 rounded-full hover:bg-red-50 transition" title="X\xF3a th\xF4ng b\xE1o">\r
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>\r
          </button>\r
        </div>\r
      </div>\r
\r
      <h4 class="text-lg font-bold text-gray-900 mb-2">{{ post.title }}</h4>\r
      <p class="text-sm text-gray-700 whitespace-pre-wrap leading-relaxed">{{ post.content }}</p>\r
\r
      <div *ngIf="post.attachmentUrl" class="mt-4 p-3 bg-gray-50 border border-gray-200 rounded-xl flex items-center justify-between group">\r
        <div class="flex items-center min-w-0 pr-4">\r
          <div class="w-8 h-8 rounded bg-white border border-gray-200 flex items-center justify-center text-gray-500 mr-3 shrink-0"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path></svg></div>\r
          <span class="text-sm font-semibold text-gray-700 truncate group-hover:text-indigo-600 transition">{{ post.attachmentPath?.split('_')?.pop() || 'T\u1EC7p \u0111\xEDnh k\xE8m' }}</span>\r
        </div>\r
        <a [href]="post.attachmentUrl" target="_blank" class="px-3 py-1.5 text-xs font-bold text-indigo-700 bg-indigo-100 hover:bg-indigo-600 hover:text-white rounded-lg transition shrink-0">T\u1EA3i / Xem</a>\r
      </div>\r
    </div>\r
\r
    <div *ngIf="totalPages() > 1" class="flex justify-center pt-4">\r
      <div class="flex space-x-2">\r
        <button (click)="changePage(currentPage() - 1)" [disabled]="currentPage() === 1" class="px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50">Trang tr\u01B0\u1EDBc</button>\r
        <span class="px-4 py-1.5 text-sm font-bold text-gray-900 bg-gray-100 rounded-lg">{{ currentPage() }} / {{ totalPages() }}</span>\r
        <button (click)="changePage(currentPage() + 1)" [disabled]="currentPage() === totalPages()" class="px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50">Trang sau</button>\r
      </div>\r
    </div>\r
\r
  </div>\r
</div>\r
\r
<div *ngIf="isDeleteModalOpen()" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm transition-opacity">\r
  <div class="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden transform transition-all animate-[fadeIn_0.2s_ease-out]">\r
    \r
    <div class="p-6 pt-8">\r
      <div class="flex items-center justify-center w-14 h-14 mx-auto bg-red-100 rounded-full mb-5 shadow-inner">\r
        <svg class="w-7 h-7 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>\r
      </div>\r
      <h3 class="text-xl font-extrabold text-center text-gray-900 mb-2">X\xF3a th\xF4ng b\xE1o n\xE0y?</h3>\r
      <p class="text-sm text-center text-gray-500 leading-relaxed px-2">\r
        H\xE0nh \u0111\u1ED9ng n\xE0y s\u1EBD g\u1EE1 b\u1ECF b\xE0i vi\u1EBFt kh\u1ECFi b\u1EA3ng tin c\u1EE7a l\u1EDBp h\u1ECDc v\xE0 x\xF3a v\u0129nh vi\u1EC5n t\u1EC7p \u0111\xEDnh k\xE8m (n\u1EBFu c\xF3). B\u1EA1n kh\xF4ng th\u1EC3 ho\xE0n t\xE1c.\r
      </p>\r
    </div>\r
\r
    <div class="px-6 py-4 bg-gray-50 flex justify-end space-x-3 border-t border-gray-100">\r
      <button (click)="closeDeleteModal()" [disabled]="isDeleting()" class="px-5 py-2.5 text-sm font-bold text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gray-100 hover:text-gray-900 transition disabled:opacity-50 shadow-sm">\r
        H\u1EE7y b\u1ECF\r
      </button>\r
      <button (click)="confirmDelete()" [disabled]="isDeleting()" class="flex items-center px-5 py-2.5 text-sm font-bold text-white bg-red-600 border border-transparent rounded-xl hover:bg-red-700 transition disabled:opacity-50 shadow-md">\r
        <svg *ngIf="isDeleting()" class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>\r
        {{ isDeleting() ? '\u0110ang x\xF3a...' : 'X\xF3a' }}\r
      </button>\r
    </div>\r
    \r
  </div>\r
</div>\r
\r
<div *ngIf="isEditModalOpen()" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm transition-opacity">\r
  <div class="bg-white rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden transform transition-all animate-[fadeIn_0.2s_ease-out]">\r
    \r
    <div class="p-5 border-b border-gray-100 bg-gray-50/50 flex items-center justify-between text-indigo-700">\r
      <div class="flex items-center space-x-2">\r
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>\r
        <h3 class="font-bold text-gray-900">Ch\u1EC9nh s\u1EEDa th\xF4ng b\xE1o</h3>\r
      </div>\r
      <button (click)="closeEditModal()" class="text-gray-400 hover:text-gray-600 p-1.5 rounded-lg hover:bg-white transition">\r
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>\r
      </button>\r
    </div>\r
\r
    <form [formGroup]="postForm" (ngSubmit)="submitUpdate()" class="p-6 flex flex-col space-y-4">\r
      <div>\r
        <label class="block text-sm font-bold text-gray-700 mb-1.5">Ti\xEAu \u0111\u1EC1</label>\r
        <input formControlName="title" type="text" placeholder="Ti\xEAu \u0111\u1EC1 th\xF4ng b\xE1o..." class="w-full text-sm font-medium text-gray-900 placeholder-gray-400 outline-none p-3 rounded-xl bg-gray-50/50 border focus:border-indigo-500 transition">\r
      </div>\r
\r
      <div>\r
        <label class="block text-sm font-bold text-gray-700 mb-1.5">N\u1ED9i dung</label>\r
        <textarea formControlName="content" rows="6" placeholder="Vi\u1EBFt n\u1ED9i dung th\xF4ng b\xE1o..." class="w-full text-sm text-gray-700 placeholder-gray-400 outline-none resize-none bg-gray-50/50 p-3 rounded-xl focus:ring-2 focus:ring-indigo-100 border focus:border-indigo-300 transition"></textarea>\r
      </div>\r
\r
      <div>\r
        <label class="block text-sm font-bold text-gray-700 mb-1.5">T\u1EC7p \u0111\xEDnh k\xE8m</label>\r
        <div *ngIf="currentAttachmentUrl()" class="flex items-center justify-between p-3 bg-gray-50 border border-gray-200 rounded-xl mb-3">\r
          <div class="flex items-center min-w-0">\r
            <svg class="w-5 h-5 text-gray-400 mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path></svg>\r
            <span class="text-xs font-medium text-gray-600 truncate">File hi\u1EC7n t\u1EA1i: {{ currentAttachmentPath()?.split('_')?.pop() }}</span>\r
          </div>\r
        </div>\r
\r
        <div *ngIf="newEditFile()" class="flex items-center justify-between p-3 bg-emerald-50 border border-emerald-100 rounded-xl mb-3">\r
          <div class="flex items-center min-w-0">\r
            <svg class="w-5 h-5 text-emerald-500 mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>\r
            <span class="text-sm font-bold text-emerald-900 truncate">S\u1EBD thay th\u1EBF b\u1EB1ng: {{ newEditFile()?.name }}</span>\r
          </div>\r
          <button type="button" (click)="removeNewEditFile()" class="text-emerald-400 hover:text-red-500 p-1 rounded-md hover:bg-white transition">\r
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>\r
          </button>\r
        </div>\r
\r
        <input type="file" #editFileInput class="hidden" (change)="onEditFileSelected($event)">\r
        <button type="button" (click)="editFileInput.click()" class="flex items-center px-4 py-2 text-sm font-semibold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 border border-indigo-100 rounded-full transition">\r
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg> \r
          {{ (currentAttachmentUrl() || newEditFile()) ? 'Thay \u0111\u1ED5i t\u1EC7p \u0111\xEDnh k\xE8m' : 'Th\xEAm t\u1EC7p \u0111\xEDnh k\xE8m' }}\r
        </button>\r
      </div>\r
\r
      <div class="flex items-center justify-end space-x-3 pt-6 border-t border-gray-100 mt-4">\r
        <button type="button" (click)="closeEditModal()" [disabled]="isUpdating()" class="px-6 py-2.5 text-sm font-bold text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gray-100 transition shadow-sm">\r
          H\u1EE7y b\u1ECF\r
        </button>\r
        <button type="submit" [disabled]="postForm.invalid || isUpdating()" class="flex items-center px-8 py-2.5 text-sm font-bold text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 disabled:bg-indigo-300 shadow-md transition">\r
          <svg *ngIf="isUpdating()" class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>\r
          {{ isUpdating() ? '\u0110ang l\u01B0u...' : 'L\u01B0u thay \u0111\u1ED5i' }}\r
        </button>\r
      </div>\r
    </form>\r
  </div>\r
</div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeroomAnnouncementComponent, { className: "HomeroomAnnouncementComponent", filePath: "src/app/features/teacher/pages/homeroom/homeroom-announcement.component.ts", lineNumber: 14 });
})();

// src/app/features/teacher/services/department-management.service.ts
var DepartmentManagementService = class _DepartmentManagementService {
  http = inject(HttpClient);
  teacherApiUrl = `${environment.apiUrl}/api/v1/teachers`;
  //  Lấy thông tin cá nhân của Tổ trưởng (để biết họ đang quản lý Tổ nào)
  // (Tái sử dụng API my-profile chúng ta đã làm)
  getMyProfile() {
    return this.http.get(`${this.teacherApiUrl}/my-profile`);
  }
  // Lấy danh sách thành viên trong tổ
  getDepartmentMembers(departmentId, page = 0) {
    const params = new HttpParams().set("departmentId", departmentId).set("page", page.toString()).set("size", "50");
    return this.http.get(this.teacherApiUrl, { params });
  }
  //  Lấy danh sách mặc định hoặc Tìm kiếm giáo viên
  searchAllTeachers(keyword = "") {
    let params = new HttpParams().set("size", "50");
    if (keyword && keyword.trim() !== "") {
      params = params.set("keyword", keyword.trim());
    }
    return this.http.get(this.teacherApiUrl, { params });
  }
  // Thêm / Gỡ giáo viên khỏi tổ (Sử dụng API Update Teacher)
  updateTeacherDepartment(teacherId, fullTeacherData, newDepartmentId) {
    const payload = __spreadProps(__spreadValues({}, fullTeacherData), {
      departmentId: newDepartmentId
    });
    return this.http.put(`${this.teacherApiUrl}/${teacherId}`, payload);
  }
  getDepartmentDetail(departmentId) {
    return this.http.get(`${environment.apiUrl}/api/v1/departments/${departmentId}`);
  }
  static \u0275fac = function DepartmentManagementService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DepartmentManagementService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DepartmentManagementService, factory: _DepartmentManagementService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DepartmentManagementService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/features/teacher/pages/department-member/department-members.component.ts
function DepartmentMembersComponent_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function DepartmentMembersComponent_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openAddModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 11);
    \u0275\u0275element(2, "path", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Th\xEAm th\xE0nh vi\xEAn ");
    \u0275\u0275elementEnd();
  }
}
function DepartmentMembersComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 14);
    \u0275\u0275element(2, "path", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "h3", 16);
    \u0275\u0275text(4, "Kh\xF4ng t\xECm th\u1EA5y t\u1ED5 b\u1ED9 m\xF4n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 17);
    \u0275\u0275text(6, "H\u1ED3 s\u01A1 c\u1EE7a b\u1EA1n ch\u01B0a \u0111\u01B0\u1EE3c Admin ph\xE2n c\xF4ng v\xE0o t\u1ED5 b\u1ED9 m\xF4n n\xE0o.");
    \u0275\u0275elementEnd()();
  }
}
function DepartmentMembersComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 19);
    \u0275\u0275element(2, "circle", 20)(3, "path", 21);
    \u0275\u0275elementEnd()();
  }
}
function DepartmentMembersComponent_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 25)(2, "div", 26);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 27)(5, "h3", 28);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 29);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 30);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 31)(12, "div", 32);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(13, "svg", 33);
    \u0275\u0275element(14, "path", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(16, "div", 32);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(17, "svg", 33);
    \u0275\u0275element(18, "path", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(19, "span", 36);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "button", 37);
    \u0275\u0275listener("click", function DepartmentMembersComponent_div_10_div_1_Template_button_click_21_listener() {
      const teacher_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openRemoveModal(teacher_r4));
    });
    \u0275\u0275text(22, " G\u1EE1 kh\u1ECFi t\u1ED5 ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const teacher_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", teacher_r4.fullName.charAt(0), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(teacher_r4.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(teacher_r4.teacherCode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(teacher_r4.position);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", teacher_r4.phone || "Ch\u01B0a c\u1EADp nh\u1EADt");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(teacher_r4.emailContact);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.isProcessing());
  }
}
function DepartmentMembersComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275template(1, DepartmentMembersComponent_div_10_div_1_Template, 23, 7, "div", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.members());
  }
}
function DepartmentMembersComponent_div_11_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 54);
    \u0275\u0275listener("click", function DepartmentMembersComponent_div_11_button_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.searchKeyword.set("");
      return \u0275\u0275resetView(ctx_r1.searchTeacher());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 55);
    \u0275\u0275element(2, "path", 44);
    \u0275\u0275elementEnd()();
  }
}
function DepartmentMembersComponent_div_11_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275text(1, "\u0110ang t\xECm ki\u1EBFm...");
    \u0275\u0275elementEnd();
  }
}
function DepartmentMembersComponent_div_11_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275text(1, "Kh\xF4ng c\xF3 k\u1EBFt qu\u1EA3 n\xE0o ph\xF9 h\u1EE3p.");
    \u0275\u0275elementEnd();
  }
}
function DepartmentMembersComponent_div_11_div_17_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 60)(1, "div")(2, "p", 61);
    \u0275\u0275text(3);
    \u0275\u0275elementStart(4, "span", 62);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p", 63);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 64);
    \u0275\u0275listener("click", function DepartmentMembersComponent_div_11_div_17_div_1_Template_button_click_8_listener() {
      const t_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.addTeacherToDept(t_r8));
    });
    \u0275\u0275text(9, "Th\xEAm ngay");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", t_r8.fullName, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", t_r8.teacherCode, ")");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Chuy\xEAn m\xF4n: ", t_r8.major || "Ch\u01B0a c\u1EADp nh\u1EADt");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.isProcessing());
  }
}
function DepartmentMembersComponent_div_11_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275template(1, DepartmentMembersComponent_div_11_div_17_div_1_Template, 10, 4, "div", 59);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.searchResults());
  }
}
function DepartmentMembersComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 39)(2, "div", 40)(3, "h3", 41);
    \u0275\u0275text(4, "Th\xEAm gi\xE1o vi\xEAn v\xE0o t\u1ED5");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 42);
    \u0275\u0275listener("click", function DepartmentMembersComponent_div_11_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAddModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 43);
    \u0275\u0275element(7, "path", 44);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "div", 45)(9, "div", 46)(10, "input", 47);
    \u0275\u0275listener("ngModelChange", function DepartmentMembersComponent_div_11_Template_input_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSearchChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, DepartmentMembersComponent_div_11_button_11_Template, 3, 0, "button", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 49);
    \u0275\u0275listener("click", function DepartmentMembersComponent_div_11_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.searchTeacher());
    });
    \u0275\u0275text(13, " T\xECm ki\u1EBFm ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 50);
    \u0275\u0275template(15, DepartmentMembersComponent_div_11_div_15_Template, 2, 0, "div", 51)(16, DepartmentMembersComponent_div_11_div_16_Template, 2, 0, "div", 52)(17, DepartmentMembersComponent_div_11_div_17_Template, 2, 1, "div", 53);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275property("ngModel", ctx_r1.searchKeyword());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.searchKeyword());
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.isSearching());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isSearching() && ctx_r1.searchResults().length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isSearching() && ctx_r1.searchResults().length > 0);
  }
}
function DepartmentMembersComponent_div_12__svg_svg_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 78);
    \u0275\u0275element(1, "circle", 20)(2, "path", 21);
    \u0275\u0275elementEnd();
  }
}
function DepartmentMembersComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 65)(1, "div", 66)(2, "div", 67)(3, "div", 68);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 69);
    \u0275\u0275element(5, "path", 70);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "h3", 71);
    \u0275\u0275text(7, "G\u1EE1 kh\u1ECFi t\u1ED5 b\u1ED9 m\xF4n?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 72);
    \u0275\u0275text(9, " B\u1EA1n \u0111ang th\u1EF1c hi\u1EC7n g\u1EE1 gi\xE1o vi\xEAn ");
    \u0275\u0275elementStart(10, "span", 73);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, " ra kh\u1ECFi t\u1ED5. Gi\xE1o vi\xEAn n\xE0y s\u1EBD kh\xF4ng c\xF2n th\u1EA5y c\xE1c th\xF4ng b\xE1o v\xE0 t\xE0i li\u1EC7u n\u1ED9i b\u1ED9 c\u1EE7a t\u1ED5 n\u1EEFa. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 74)(14, "button", 75);
    \u0275\u0275listener("click", function DepartmentMembersComponent_div_12_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeRemoveModal());
    });
    \u0275\u0275text(15, " H\u1EE7y b\u1ECF ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 76);
    \u0275\u0275listener("click", function DepartmentMembersComponent_div_12_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmRemove());
    });
    \u0275\u0275template(17, DepartmentMembersComponent_div_12__svg_svg_17_Template, 3, 0, "svg", 77);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate((tmp_1_0 = ctx_r1.teacherToRemove()) == null ? null : tmp_1_0.fullName);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.isProcessing());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isProcessing());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isProcessing());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isProcessing() ? "\u0110ang x\u1EED l\xFD..." : "X\xE1c nh\u1EADn g\u1EE1", " ");
  }
}
var DepartmentMembersComponent = class _DepartmentMembersComponent {
  deptService = inject(DepartmentManagementService);
  toastService = inject(ToastService);
  searchTimeout;
  // State
  myDepartmentId = signal(null, ...ngDevMode ? [{ debugName: "myDepartmentId" }] : (
    /* istanbul ignore next */
    []
  ));
  myDepartmentName = signal("T\u1ED5 b\u1ED9 m\xF4n", ...ngDevMode ? [{ debugName: "myDepartmentName" }] : (
    /* istanbul ignore next */
    []
  ));
  members = signal([], ...ngDevMode ? [{ debugName: "members" }] : (
    /* istanbul ignore next */
    []
  ));
  isLoading = signal(true, ...ngDevMode ? [{ debugName: "isLoading" }] : (
    /* istanbul ignore next */
    []
  ));
  // State Modal Thêm GV
  isAddModalOpen = signal(false, ...ngDevMode ? [{ debugName: "isAddModalOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  searchKeyword = signal("", ...ngDevMode ? [{ debugName: "searchKeyword" }] : (
    /* istanbul ignore next */
    []
  ));
  searchResults = signal([], ...ngDevMode ? [{ debugName: "searchResults" }] : (
    /* istanbul ignore next */
    []
  ));
  isSearching = signal(false, ...ngDevMode ? [{ debugName: "isSearching" }] : (
    /* istanbul ignore next */
    []
  ));
  isProcessing = signal(false, ...ngDevMode ? [{ debugName: "isProcessing" }] : (
    /* istanbul ignore next */
    []
  ));
  // Loading khi đang thêm/gỡ
  // --- STATE MODAL GỠ THÀNH VIÊN ---
  isRemoveModalOpen = signal(false, ...ngDevMode ? [{ debugName: "isRemoveModalOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  teacherToRemove = signal(null, ...ngDevMode ? [{ debugName: "teacherToRemove" }] : (
    /* istanbul ignore next */
    []
  ));
  ngOnInit() {
    this.loadMyDepartment();
  }
  loadMyDepartment() {
    this.deptService.getMyProfile().subscribe({
      next: (profile) => {
        if (profile.departmentId) {
          this.myDepartmentId.set(profile.departmentId);
          this.deptService.getDepartmentDetail(profile.departmentId).subscribe({
            next: (dept) => this.myDepartmentName.set(dept.name),
            error: () => console.error("Kh\xF4ng t\u1EA3i \u0111\u01B0\u1EE3c t\xEAn t\u1ED5")
          });
          this.loadMembers();
        } else {
          this.isLoading.set(false);
          this.toastService.warning("Th\xF4ng b\xE1o", "B\u1EA1n ch\u01B0a \u0111\u01B0\u1EE3c ph\xE2n c\xF4ng v\xE0o t\u1ED5 b\u1ED9 m\xF4n n\xE0o.");
        }
      },
      error: () => {
        this.isLoading.set(false);
        this.toastService.error("L\u1ED7i", "Kh\xF4ng th\u1EC3 t\u1EA3i th\xF4ng tin h\u1ED3 s\u01A1.");
      }
    });
  }
  loadMembers() {
    this.isLoading.set(true);
    this.deptService.getDepartmentMembers(this.myDepartmentId()).subscribe({
      next: (res) => {
        this.members.set(res.content || []);
        this.isLoading.set(false);
      },
      error: () => {
        this.toastService.error("L\u1ED7i", "Kh\xF4ng th\u1EC3 t\u1EA3i danh s\xE1ch th\xE0nh vi\xEAn.");
        this.isLoading.set(false);
      }
    });
  }
  // Mở Modal xác nhận gỡ
  openRemoveModal(teacher) {
    this.teacherToRemove.set(teacher);
    this.isRemoveModalOpen.set(true);
  }
  // Đóng Modal xác nhận gỡ
  closeRemoveModal() {
    this.isRemoveModalOpen.set(false);
    this.teacherToRemove.set(null);
    this.isProcessing.set(false);
  }
  // Thực thi gọi API gỡ khỏi tổ
  confirmRemove() {
    const teacher = this.teacherToRemove();
    if (!teacher)
      return;
    this.isProcessing.set(true);
    this.deptService.updateTeacherDepartment(teacher.id, teacher, null).subscribe({
      next: () => {
        this.toastService.success("Th\xE0nh c\xF4ng", `\u0110\xE3 g\u1EE1 ${teacher.fullName} kh\u1ECFi t\u1ED5.`);
        this.loadMembers();
        this.closeRemoveModal();
      },
      error: (err) => {
        this.toastService.error("L\u1ED7i", err.error?.message || "Kh\xF4ng th\u1EC3 g\u1EE1 gi\xE1o vi\xEAn. Vui l\xF2ng ki\u1EC3m tra l\u1EA1i quy\u1EC1n.");
        this.isProcessing.set(false);
        this.closeRemoveModal();
      }
    });
  }
  // --- XỬ LÝ THÊM GIÁO VIÊN ---
  openAddModal() {
    this.isAddModalOpen.set(true);
    this.searchKeyword.set("");
    this.searchTeacher();
  }
  closeAddModal() {
    this.isAddModalOpen.set(false);
  }
  searchTeacher() {
    this.isSearching.set(true);
    this.deptService.searchAllTeachers(this.searchKeyword()).subscribe({
      next: (res) => {
        const filtered = (res.content || []).filter((t) => t.departmentId !== this.myDepartmentId());
        this.searchResults.set(filtered);
        this.isSearching.set(false);
      },
      error: () => {
        this.toastService.error("L\u1ED7i", "Kh\xF4ng th\u1EC3 t\u1EA3i danh s\xE1ch gi\xE1o vi\xEAn");
        this.isSearching.set(false);
      }
    });
  }
  onSearchChange(value) {
    this.searchKeyword.set(value);
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }
    this.searchTimeout = setTimeout(() => {
      this.searchTeacher();
    }, 500);
  }
  addTeacherToDept(teacher) {
    this.isProcessing.set(true);
    this.deptService.updateTeacherDepartment(teacher.id, teacher, this.myDepartmentId()).subscribe({
      next: () => {
        this.toastService.success("Th\xE0nh c\xF4ng", `\u0110\xE3 th\xEAm ${teacher.fullName} v\xE0o t\u1ED5.`);
        this.closeAddModal();
        this.loadMembers();
        this.isProcessing.set(false);
      },
      error: (err) => {
        this.toastService.error("L\u1ED7i", err.error?.message || "Kh\xF4ng th\u1EC3 th\xEAm gi\xE1o vi\xEAn.");
        this.isProcessing.set(false);
      }
    });
  }
  static \u0275fac = function DepartmentMembersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DepartmentMembersComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DepartmentMembersComponent, selectors: [["app-department-members"]], decls: 13, vars: 7, consts: [[1, "max-w-6xl", "mx-auto", "space-y-6"], [1, "flex", "justify-between", "items-end"], [1, "text-2xl", "font-extrabold", "text-gray-900", "tracking-tight"], [1, "text-sm", "text-gray-500", "mt-1"], ["class", "flex items-center px-4 py-2 text-sm font-bold text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 shadow-md transition", 3, "click", 4, "ngIf"], ["class", "p-8 text-center bg-amber-50 rounded-2xl border border-amber-200", 4, "ngIf"], ["class", "py-20 text-center text-indigo-500", 4, "ngIf"], ["class", "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", 4, "ngIf"], ["class", "fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm", 4, "ngIf"], ["class", "fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm transition-opacity", 4, "ngIf"], [1, "flex", "items-center", "px-4", "py-2", "text-sm", "font-bold", "text-white", "bg-indigo-600", "rounded-xl", "hover:bg-indigo-700", "shadow-md", "transition", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "mr-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 4v16m8-8H4"], [1, "p-8", "text-center", "bg-amber-50", "rounded-2xl", "border", "border-amber-200"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-12", "h-12", "mx-auto", "text-amber-500", "mb-3"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"], [1, "text-lg", "font-bold", "text-amber-800"], [1, "text-sm", "text-amber-700", "mt-1"], [1, "py-20", "text-center", "text-indigo-500"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "inline-block", "h-8", "w-8"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3", "gap-6"], ["class", "bg-white rounded-2xl p-5 border border-gray-200 shadow-sm flex flex-col justify-between group", 4, "ngFor", "ngForOf"], [1, "bg-white", "rounded-2xl", "p-5", "border", "border-gray-200", "shadow-sm", "flex", "flex-col", "justify-between", "group"], [1, "flex", "items-start", "space-x-4", "mb-4"], [1, "w-12", "h-12", "rounded-full", "bg-gradient-to-br", "from-indigo-500", "to-blue-600", "flex", "items-center", "justify-center", "text-white", "font-bold", "text-xl", "shadow-inner", "shrink-0"], [1, "min-w-0"], [1, "font-bold", "text-gray-900", "truncate"], [1, "text-xs", "text-indigo-600", "font-semibold", "mb-1"], [1, "inline-block", "px-2", "py-0.5", "bg-gray-100", "text-gray-600", "text-[11px]", "font-bold", "rounded", "uppercase"], [1, "space-y-2", "text-sm", "border-t", "border-gray-100", "pt-3", "mb-4"], [1, "flex", "items-center", "text-gray-600"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "mr-2", "text-gray-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"], [1, "truncate"], [1, "w-full", "py-2", "text-sm", "font-bold", "text-red-600", "bg-red-50", "hover:bg-red-100", "rounded-xl", "transition", "disabled:opacity-50", "border", "border-transparent", "hover:border-red-200", 3, "click", "disabled"], [1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "p-4", "bg-gray-900/60", "backdrop-blur-sm"], [1, "bg-white", "rounded-3xl", "shadow-2xl", "w-full", "max-w-lg", "overflow-hidden", "flex", "flex-col", "max-h-[80vh]"], [1, "p-5", "border-b", "border-gray-100", "flex", "items-center", "justify-between"], [1, "font-bold", "text-gray-900"], [1, "text-gray-400", "hover:text-gray-600", "p-1.5", "rounded-lg", "hover:bg-gray-100", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "p-4", "border-b", "border-gray-100", "bg-gray-50", "flex", "space-x-2", "relative"], [1, "relative", "flex-1"], ["type", "text", "placeholder", "Nh\u1EADp t\xEAn ho\u1EB7c m\xE3 GV \u0111\u1EC3 t\xECm ki\u1EBFm...", 1, "w-full", "text-sm", "bg-white", "border", "border-gray-300", "rounded-xl", "px-4", "py-2.5", "outline-none", "focus:border-indigo-500", "pr-10", 3, "ngModelChange", "ngModel"], ["class", "absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500 transition", 3, "click", 4, "ngIf"], [1, "px-5", "py-2.5", "bg-indigo-600", "text-white", "rounded-xl", "font-bold", "text-sm", "hover:bg-indigo-700", "shadow-sm", "shrink-0", "transition", 3, "click"], [1, "p-4", "overflow-y-auto", "flex-1"], ["class", "text-center py-8 text-indigo-500", 4, "ngIf"], ["class", "text-center py-8 text-gray-500 text-sm", 4, "ngIf"], ["class", "space-y-3", 4, "ngIf"], [1, "absolute", "right-3", "top-1/2", "-translate-y-1/2", "text-gray-400", "hover:text-red-500", "transition", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], [1, "text-center", "py-8", "text-indigo-500"], [1, "text-center", "py-8", "text-gray-500", "text-sm"], [1, "space-y-3"], ["class", "flex items-center justify-between p-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "justify-between", "p-3", "border", "border-gray-200", "rounded-xl", "hover:bg-gray-50", "transition"], [1, "font-bold", "text-gray-900", "text-sm"], [1, "text-indigo-600", "ml-1"], [1, "text-xs", "text-gray-500", "mt-0.5"], [1, "px-3", "py-1.5", "bg-emerald-50", "text-emerald-700", "font-bold", "text-xs", "rounded-lg", "hover:bg-emerald-100", "border", "border-emerald-200", "transition", 3, "click", "disabled"], [1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "p-4", "bg-gray-900/60", "backdrop-blur-sm", "transition-opacity"], [1, "bg-white", "rounded-3xl", "shadow-2xl", "w-full", "max-w-md", "overflow-hidden", "transform", "transition-all", "animate-[fadeIn_0.2s_ease-out]"], [1, "p-6", "pt-8"], [1, "flex", "items-center", "justify-center", "w-14", "h-14", "mx-auto", "bg-amber-100", "rounded-full", "mb-5", "shadow-inner"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-7", "h-7", "text-amber-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "text-xl", "font-extrabold", "text-center", "text-gray-900", "mb-2"], [1, "text-sm", "text-center", "text-gray-500", "leading-relaxed", "px-2"], [1, "font-bold", "text-gray-800"], [1, "px-6", "py-4", "bg-gray-50", "flex", "justify-end", "space-x-3", "border-t", "border-gray-100"], [1, "px-5", "py-2.5", "text-sm", "font-bold", "text-gray-700", "bg-white", "border", "border-gray-300", "rounded-xl", "hover:bg-gray-100", "hover:text-gray-900", "transition", "disabled:opacity-50", "shadow-sm", 3, "click", "disabled"], [1, "flex", "items-center", "px-5", "py-2.5", "text-sm", "font-bold", "text-white", "bg-amber-600", "border", "border-transparent", "rounded-xl", "hover:bg-amber-700", "transition", "disabled:opacity-50", "shadow-md", 3, "click", "disabled"], ["class", "animate-spin -ml-1 mr-2 h-4 w-4 text-white", "fill", "none", "viewBox", "0 0 24 24", 4, "ngIf"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "-ml-1", "mr-2", "h-4", "w-4", "text-white"]], template: function DepartmentMembersComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Danh s\xE1ch c\xE1c gi\xE1o vi\xEAn \u0111ang tr\u1EF1c thu\u1ED9c t\u1ED5 c\u1EE7a b\u1EA1n");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(7, DepartmentMembersComponent_button_7_Template, 4, 0, "button", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275template(8, DepartmentMembersComponent_div_8_Template, 7, 0, "div", 5)(9, DepartmentMembersComponent_div_9_Template, 4, 0, "div", 6)(10, DepartmentMembersComponent_div_10_Template, 2, 1, "div", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275template(11, DepartmentMembersComponent_div_11_Template, 18, 5, "div", 8)(12, DepartmentMembersComponent_div_12_Template, 19, 5, "div", 9);
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("Qu\u1EA3n l\xFD ", ctx.myDepartmentName());
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.myDepartmentId() && !ctx.isLoading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading() && !ctx.myDepartmentId());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading() && ctx.myDepartmentId());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isAddModalOpen());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isRemoveModalOpen());
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DepartmentMembersComponent, [{
    type: Component,
    args: [{ selector: "app-department-members", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="max-w-6xl mx-auto space-y-6">\r
  \r
  <div class="flex justify-between items-end">\r
    <div>\r
      <h1 class="text-2xl font-extrabold text-gray-900 tracking-tight">Qu\u1EA3n l\xFD {{ myDepartmentName() }}</h1>\r
      <p class="text-sm text-gray-500 mt-1">Danh s\xE1ch c\xE1c gi\xE1o vi\xEAn \u0111ang tr\u1EF1c thu\u1ED9c t\u1ED5 c\u1EE7a b\u1EA1n</p>\r
    </div>\r
    <button *ngIf="myDepartmentId() && !isLoading()" (click)="openAddModal()" class="flex items-center px-4 py-2 text-sm font-bold text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 shadow-md transition">\r
      <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>\r
      Th\xEAm th\xE0nh vi\xEAn\r
    </button>\r
  </div>\r
\r
  <div *ngIf="!isLoading() && !myDepartmentId()" class="p-8 text-center bg-amber-50 rounded-2xl border border-amber-200">\r
    <svg class="w-12 h-12 mx-auto text-amber-500 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>\r
    <h3 class="text-lg font-bold text-amber-800">Kh\xF4ng t\xECm th\u1EA5y t\u1ED5 b\u1ED9 m\xF4n</h3>\r
    <p class="text-sm text-amber-700 mt-1">H\u1ED3 s\u01A1 c\u1EE7a b\u1EA1n ch\u01B0a \u0111\u01B0\u1EE3c Admin ph\xE2n c\xF4ng v\xE0o t\u1ED5 b\u1ED9 m\xF4n n\xE0o.</p>\r
  </div>\r
\r
  <div *ngIf="isLoading()" class="py-20 text-center text-indigo-500">\r
    <svg class="animate-spin inline-block h-8 w-8" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>\r
  </div>\r
\r
  <div *ngIf="!isLoading() && myDepartmentId()" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">\r
    <div *ngFor="let teacher of members()" class="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm flex flex-col justify-between group">\r
      \r
      <div class="flex items-start space-x-4 mb-4">\r
        <div class="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-inner shrink-0">\r
          {{ teacher.fullName.charAt(0) }}\r
        </div>\r
        <div class="min-w-0">\r
          <h3 class="font-bold text-gray-900 truncate">{{ teacher.fullName }}</h3>\r
          <p class="text-xs text-indigo-600 font-semibold mb-1">{{ teacher.teacherCode }}</p>\r
          <span class="inline-block px-2 py-0.5 bg-gray-100 text-gray-600 text-[11px] font-bold rounded uppercase">{{ teacher.position }}</span>\r
        </div>\r
      </div>\r
\r
      <div class="space-y-2 text-sm border-t border-gray-100 pt-3 mb-4">\r
        <div class="flex items-center text-gray-600"><svg class="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg> {{ teacher.phone || 'Ch\u01B0a c\u1EADp nh\u1EADt' }}</div>\r
        <div class="flex items-center text-gray-600"><svg class="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg> <span class="truncate">{{ teacher.emailContact }}</span></div>\r
      </div>\r
\r
      <button (click)="openRemoveModal(teacher)" [disabled]="isProcessing()" class="w-full py-2 text-sm font-bold text-red-600 bg-red-50 hover:bg-red-100 rounded-xl transition disabled:opacity-50 border border-transparent hover:border-red-200">\r
        G\u1EE1 kh\u1ECFi t\u1ED5\r
      </button>\r
    </div>\r
  </div>\r
</div>\r
\r
<div *ngIf="isAddModalOpen()" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm">\r
  <div class="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col max-h-[80vh]">\r
    <div class="p-5 border-b border-gray-100 flex items-center justify-between">\r
      <h3 class="font-bold text-gray-900">Th\xEAm gi\xE1o vi\xEAn v\xE0o t\u1ED5</h3>\r
      <button (click)="closeAddModal()" class="text-gray-400 hover:text-gray-600 p-1.5 rounded-lg hover:bg-gray-100"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button>\r
    </div>\r
\r
    <div class="p-4 border-b border-gray-100 bg-gray-50 flex space-x-2 relative">\r
      <div class="relative flex-1">\r
        <input [ngModel]="searchKeyword()" (ngModelChange)="onSearchChange($event)" type="text" placeholder="Nh\u1EADp t\xEAn ho\u1EB7c m\xE3 GV \u0111\u1EC3 t\xECm ki\u1EBFm..." class="w-full text-sm bg-white border border-gray-300 rounded-xl px-4 py-2.5 outline-none focus:border-indigo-500 pr-10">\r
        \r
        <button *ngIf="searchKeyword()" (click)="searchKeyword.set(''); searchTeacher()" class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500 transition">\r
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>\r
        </button>\r
      </div>\r
      <button (click)="searchTeacher()" class="px-5 py-2.5 bg-indigo-600 text-white rounded-xl font-bold text-sm hover:bg-indigo-700 shadow-sm shrink-0 transition">\r
        T\xECm ki\u1EBFm\r
      </button>\r
    </div>\r
\r
    <div class="p-4 overflow-y-auto flex-1">\r
      <div *ngIf="isSearching()" class="text-center py-8 text-indigo-500">\u0110ang t\xECm ki\u1EBFm...</div>\r
      \r
      <div *ngIf="!isSearching() && searchResults().length === 0" class="text-center py-8 text-gray-500 text-sm">Kh\xF4ng c\xF3 k\u1EBFt qu\u1EA3 n\xE0o ph\xF9 h\u1EE3p.</div>\r
\r
      <div class="space-y-3" *ngIf="!isSearching() && searchResults().length > 0">\r
        <div *ngFor="let t of searchResults()" class="flex items-center justify-between p-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition">\r
          <div>\r
            <p class="font-bold text-gray-900 text-sm">{{ t.fullName }} <span class="text-indigo-600 ml-1">({{ t.teacherCode }})</span></p>\r
            <p class="text-xs text-gray-500 mt-0.5">Chuy\xEAn m\xF4n: {{ t.major || 'Ch\u01B0a c\u1EADp nh\u1EADt' }}</p>\r
          </div>\r
          <button (click)="addTeacherToDept(t)" [disabled]="isProcessing()" class="px-3 py-1.5 bg-emerald-50 text-emerald-700 font-bold text-xs rounded-lg hover:bg-emerald-100 border border-emerald-200 transition">Th\xEAm ngay</button>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<div *ngIf="isRemoveModalOpen()" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm transition-opacity">\r
  <div class="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden transform transition-all animate-[fadeIn_0.2s_ease-out]">\r
    \r
    <div class="p-6 pt-8">\r
      <div class="flex items-center justify-center w-14 h-14 mx-auto bg-amber-100 rounded-full mb-5 shadow-inner">\r
        <svg class="w-7 h-7 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>\r
      </div>\r
      <h3 class="text-xl font-extrabold text-center text-gray-900 mb-2">G\u1EE1 kh\u1ECFi t\u1ED5 b\u1ED9 m\xF4n?</h3>\r
      <p class="text-sm text-center text-gray-500 leading-relaxed px-2">\r
        B\u1EA1n \u0111ang th\u1EF1c hi\u1EC7n g\u1EE1 gi\xE1o vi\xEAn <span class="font-bold text-gray-800">{{ teacherToRemove()?.fullName }}</span> ra kh\u1ECFi t\u1ED5. Gi\xE1o vi\xEAn n\xE0y s\u1EBD kh\xF4ng c\xF2n th\u1EA5y c\xE1c th\xF4ng b\xE1o v\xE0 t\xE0i li\u1EC7u n\u1ED9i b\u1ED9 c\u1EE7a t\u1ED5 n\u1EEFa.\r
      </p>\r
    </div>\r
\r
    <div class="px-6 py-4 bg-gray-50 flex justify-end space-x-3 border-t border-gray-100">\r
      <button (click)="closeRemoveModal()" [disabled]="isProcessing()" class="px-5 py-2.5 text-sm font-bold text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gray-100 hover:text-gray-900 transition disabled:opacity-50 shadow-sm">\r
        H\u1EE7y b\u1ECF\r
      </button>\r
      <button (click)="confirmRemove()" [disabled]="isProcessing()" class="flex items-center px-5 py-2.5 text-sm font-bold text-white bg-amber-600 border border-transparent rounded-xl hover:bg-amber-700 transition disabled:opacity-50 shadow-md">\r
        <svg *ngIf="isProcessing()" class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>\r
        {{ isProcessing() ? '\u0110ang x\u1EED l\xFD...' : 'X\xE1c nh\u1EADn g\u1EE1' }}\r
      </button>\r
    </div>\r
    \r
  </div>\r
</div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DepartmentMembersComponent, { className: "DepartmentMembersComponent", filePath: "src/app/features/teacher/pages/department-member/department-members.component.ts", lineNumber: 13 });
})();

// src/app/features/teacher/services/teaching-assignment.service.ts
var TeachingAssignmentService = class _TeachingAssignmentService {
  http = inject(HttpClient);
  apiUrl = `${environment.apiUrl}/api/v1/teaching-assignments`;
  // Thực hiện phân công giảng dạy mới
  assignTeacher(payload) {
    return this.http.post(this.apiUrl, payload);
  }
  //  Lấy danh sách phân công của một lớp (dùng cho các màn hình xem chi tiết)
  getAssignmentsByClass(classId, semesterId) {
    const params = new HttpParams().set("semesterId", semesterId);
    return this.http.get(`${this.apiUrl}/by-class/${classId}`, { params });
  }
  //  Hủy phân công
  unassignTeacher(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  // CÁC HÀM LẤY DỮ LIỆU DROPDOWN CHO FORM PHÂN CÔNG
  getSchoolYears() {
    return this.http.get(`${environment.apiUrl}/api/v1/school-years`);
  }
  getSemesters(schoolYearId) {
    return this.http.get(`${environment.apiUrl}/api/v1/semesters/by-year/${schoolYearId}`);
  }
  getSubjects() {
    return this.http.get(`${environment.apiUrl}/api/v1/subjects`);
  }
  getPhysicalClasses(schoolYearId) {
    return this.http.get(`${environment.apiUrl}/api/v1/physical-classes?schoolYearId=${schoolYearId}&size=200`);
  }
  // Lấy danh sách phân công của Tổ bộ môn (Kèm theo bộ lọc)
  getDepartmentAssignments(deptId, filters, page = 1) {
    let params = new HttpParams().set("departmentId", deptId).set("page", page.toString()).set("size", "10");
    if (filters.schoolYearId)
      params = params.set("schoolYearId", filters.schoolYearId);
    if (filters.semesterId)
      params = params.set("semesterId", filters.semesterId);
    if (filters.physicalClassId)
      params = params.set("physicalClassId", filters.physicalClassId);
    if (filters.teacherId)
      params = params.set("teacherId", filters.teacherId);
    return this.http.get(`${this.apiUrl}/department`, { params });
  }
  static \u0275fac = function TeachingAssignmentService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TeachingAssignmentService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TeachingAssignmentService, factory: _TeachingAssignmentService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TeachingAssignmentService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/features/teacher/pages/teaching-assignment/department-assignment.component.ts
function DepartmentAssignmentComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 6);
    \u0275\u0275element(2, "circle", 7)(3, "path", 8);
    \u0275\u0275elementEnd()();
  }
}
function DepartmentAssignmentComponent_div_7_option_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const sy_r3 = ctx.$implicit;
    \u0275\u0275property("value", sy_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(sy_r3.name);
  }
}
function DepartmentAssignmentComponent_div_7_p_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 31);
    \u0275\u0275text(1, "Vui l\xF2ng ch\u1ECDn n\u0103m h\u1ECDc");
    \u0275\u0275elementEnd();
  }
}
function DepartmentAssignmentComponent_div_7_option_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const sem_r4 = ctx.$implicit;
    \u0275\u0275property("value", sem_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(sem_r4.name);
  }
}
function DepartmentAssignmentComponent_div_7_p_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 31);
    \u0275\u0275text(1, "Vui l\xF2ng ch\u1ECDn h\u1ECDc k\u1EF3");
    \u0275\u0275elementEnd();
  }
}
function DepartmentAssignmentComponent_div_7_option_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const sub_r5 = ctx.$implicit;
    \u0275\u0275property("value", sub_r5.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(sub_r5.name);
  }
}
function DepartmentAssignmentComponent_div_7_p_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 31);
    \u0275\u0275text(1, "Vui l\xF2ng ch\u1ECDn m\xF4n h\u1ECDc");
    \u0275\u0275elementEnd();
  }
}
function DepartmentAssignmentComponent_div_7_option_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pc_r6 = ctx.$implicit;
    \u0275\u0275property("value", pc_r6.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(pc_r6.name);
  }
}
function DepartmentAssignmentComponent_div_7_p_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 31);
    \u0275\u0275text(1, "Vui l\xF2ng ch\u1ECDn l\u1EDBp h\u1ECDc");
    \u0275\u0275elementEnd();
  }
}
function DepartmentAssignmentComponent_div_7_option_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r7 = ctx.$implicit;
    \u0275\u0275property("value", t_r7.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", t_r7.fullName, " (", t_r7.teacherCode, ")");
  }
}
function DepartmentAssignmentComponent_div_7_p_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 31);
    \u0275\u0275text(1, "Vui l\xF2ng ch\u1ECDn gi\xE1o vi\xEAn");
    \u0275\u0275elementEnd();
  }
}
function DepartmentAssignmentComponent_div_7__svg_svg_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 32);
    \u0275\u0275element(1, "circle", 7)(2, "path", 8);
    \u0275\u0275elementEnd();
  }
}
function DepartmentAssignmentComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 11);
    \u0275\u0275element(3, "path", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "h3", 13);
    \u0275\u0275text(5, "Thi\u1EBFt l\u1EADp ph\xE2n c\xF4ng");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "form", 14);
    \u0275\u0275listener("ngSubmit", function DepartmentAssignmentComponent_div_7_Template_form_ngSubmit_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitAssignment());
    });
    \u0275\u0275elementStart(7, "div", 15)(8, "div")(9, "label", 16);
    \u0275\u0275text(10, "N\u0103m h\u1ECDc");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "select", 17)(12, "option", 18);
    \u0275\u0275text(13, "-- Ch\u1ECDn N\u0103m h\u1ECDc --");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, DepartmentAssignmentComponent_div_7_option_14_Template, 2, 2, "option", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, DepartmentAssignmentComponent_div_7_p_15_Template, 2, 0, "p", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div")(17, "label", 16);
    \u0275\u0275text(18, "H\u1ECDc k\u1EF3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "select", 21)(20, "option", 18);
    \u0275\u0275text(21, "-- Ch\u1ECDn H\u1ECDc k\u1EF3 --");
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, DepartmentAssignmentComponent_div_7_option_22_Template, 2, 2, "option", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275template(23, DepartmentAssignmentComponent_div_7_p_23_Template, 2, 0, "p", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 22)(25, "div")(26, "label", 16);
    \u0275\u0275text(27, "M\xF4n h\u1ECDc");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "select", 23)(29, "option", 18);
    \u0275\u0275text(30, "-- Ch\u1ECDn M\xF4n h\u1ECDc --");
    \u0275\u0275elementEnd();
    \u0275\u0275template(31, DepartmentAssignmentComponent_div_7_option_31_Template, 2, 2, "option", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275template(32, DepartmentAssignmentComponent_div_7_p_32_Template, 2, 0, "p", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div")(34, "label", 16);
    \u0275\u0275text(35, "L\u1EDBp h\u1ECDc (Offline)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "select", 24)(37, "option", 18);
    \u0275\u0275text(38, "-- Ch\u1ECDn L\u1EDBp h\u1ECDc --");
    \u0275\u0275elementEnd();
    \u0275\u0275template(39, DepartmentAssignmentComponent_div_7_option_39_Template, 2, 2, "option", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275template(40, DepartmentAssignmentComponent_div_7_p_40_Template, 2, 0, "p", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 25)(42, "label", 16);
    \u0275\u0275text(43, "Gi\xE1o vi\xEAn ph\u1EE5 tr\xE1ch (N\u1ED9i b\u1ED9 t\u1ED5)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "select", 26)(45, "option", 18);
    \u0275\u0275text(46, "-- Ch\u1ECDn Gi\xE1o vi\xEAn trong t\u1ED5 --");
    \u0275\u0275elementEnd();
    \u0275\u0275template(47, DepartmentAssignmentComponent_div_7_option_47_Template, 2, 3, "option", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275template(48, DepartmentAssignmentComponent_div_7_p_48_Template, 2, 0, "p", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div", 27)(50, "button", 28);
    \u0275\u0275template(51, DepartmentAssignmentComponent_div_7__svg_svg_51_Template, 3, 0, "svg", 29);
    \u0275\u0275text(52);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_5_0;
    let tmp_7_0;
    let tmp_9_0;
    let tmp_11_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("formGroup", ctx_r1.assignForm);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngForOf", ctx_r1.schoolYears());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_3_0 = ctx_r1.assignForm.get("schoolYearId")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx_r1.assignForm.get("schoolYearId")) == null ? null : tmp_3_0.touched));
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r1.semesters());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_5_0 = ctx_r1.assignForm.get("semesterId")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx_r1.assignForm.get("semesterId")) == null ? null : tmp_5_0.touched));
    \u0275\u0275advance(8);
    \u0275\u0275property("ngForOf", ctx_r1.subjects());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_7_0 = ctx_r1.assignForm.get("subjectId")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = ctx_r1.assignForm.get("subjectId")) == null ? null : tmp_7_0.touched));
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r1.physicalClasses());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_9_0 = ctx_r1.assignForm.get("physicalClassId")) == null ? null : tmp_9_0.invalid) && ((tmp_9_0 = ctx_r1.assignForm.get("physicalClassId")) == null ? null : tmp_9_0.touched));
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r1.teachers());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_11_0 = ctx_r1.assignForm.get("teacherId")) == null ? null : tmp_11_0.invalid) && ((tmp_11_0 = ctx_r1.assignForm.get("teacherId")) == null ? null : tmp_11_0.touched));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.assignForm.invalid || ctx_r1.isSubmitting());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isSubmitting());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isSubmitting() ? "\u0110ang ph\xE2n c\xF4ng..." : "X\xE1c nh\u1EADn Ph\xE2n c\xF4ng", " ");
  }
}
var DepartmentAssignmentComponent = class _DepartmentAssignmentComponent {
  fb = inject(FormBuilder);
  deptService = inject(DepartmentManagementService);
  assignmentService = inject(TeachingAssignmentService);
  toastService = inject(ToastService);
  assignForm;
  isSubmitting = signal(false, ...ngDevMode ? [{ debugName: "isSubmitting" }] : (
    /* istanbul ignore next */
    []
  ));
  isLoadingData = signal(true, ...ngDevMode ? [{ debugName: "isLoadingData" }] : (
    /* istanbul ignore next */
    []
  ));
  // State lưu trữ dữ liệu cho các Dropdown
  myDepartmentId = signal(null, ...ngDevMode ? [{ debugName: "myDepartmentId" }] : (
    /* istanbul ignore next */
    []
  ));
  teachers = signal([], ...ngDevMode ? [{ debugName: "teachers" }] : (
    /* istanbul ignore next */
    []
  ));
  schoolYears = signal([], ...ngDevMode ? [{ debugName: "schoolYears" }] : (
    /* istanbul ignore next */
    []
  ));
  semesters = signal([], ...ngDevMode ? [{ debugName: "semesters" }] : (
    /* istanbul ignore next */
    []
  ));
  physicalClasses = signal([], ...ngDevMode ? [{ debugName: "physicalClasses" }] : (
    /* istanbul ignore next */
    []
  ));
  subjects = signal([], ...ngDevMode ? [{ debugName: "subjects" }] : (
    /* istanbul ignore next */
    []
  ));
  ngOnInit() {
    this.assignForm = this.fb.group({
      schoolYearId: ["", Validators.required],
      // Khóa 2 ô này lại lúc ban đầu (chỉ mở khi đã chọn Năm học)
      semesterId: [{ value: "", disabled: true }, Validators.required],
      physicalClassId: [{ value: "", disabled: true }, Validators.required],
      subjectId: ["", Validators.required],
      teacherId: ["", Validators.required]
    });
    this.loadInitialData();
    this.onSchoolYearChange();
  }
  loadInitialData() {
    this.isLoadingData.set(true);
    this.deptService.getMyProfile().subscribe((profile) => {
      if (profile.departmentId) {
        this.myDepartmentId.set(profile.departmentId);
        this.deptService.getDepartmentMembers(profile.departmentId).subscribe((res) => {
          this.teachers.set(res.content || []);
        });
      }
    });
    this.assignmentService.getSchoolYears().subscribe((res) => this.schoolYears.set(res.content || []));
    this.assignmentService.getSubjects().subscribe((res) => {
      this.subjects.set(res.content || res);
    });
    this.isLoadingData.set(false);
  }
  // XỬ LÝ DROPDOWN PHỤ THUỘC (Cascading Dropdown)
  onSchoolYearChange() {
    this.assignForm.get("schoolYearId")?.valueChanges.subscribe((yearId) => {
      if (yearId) {
        this.assignForm.get("semesterId")?.enable();
        this.assignForm.get("physicalClassId")?.enable();
        this.assignForm.get("semesterId")?.setValue("");
        this.assignForm.get("physicalClassId")?.setValue("");
        this.assignmentService.getSemesters(yearId).subscribe((res) => this.semesters.set(res.content || res));
        this.assignmentService.getPhysicalClasses(yearId).subscribe((res) => this.physicalClasses.set(res.content || []));
      } else {
        this.assignForm.get("semesterId")?.disable();
        this.assignForm.get("physicalClassId")?.disable();
        this.semesters.set([]);
        this.physicalClasses.set([]);
      }
    });
  }
  submitAssignment() {
    if (this.assignForm.invalid) {
      this.assignForm.markAllAsTouched();
      return;
    }
    this.isSubmitting.set(true);
    const payload = this.assignForm.getRawValue();
    this.assignmentService.assignTeacher(payload).subscribe({
      next: () => {
        this.toastService.success("Th\xE0nh c\xF4ng", "\u0110\xE3 ph\xE2n c\xF4ng gi\u1EA3ng d\u1EA1y th\xE0nh c\xF4ng!");
        this.assignForm.reset();
        this.isSubmitting.set(false);
      },
      error: (err) => {
        this.toastService.error("L\u1ED7i", err.error?.message || "Ph\xE2n c\xF4ng th\u1EA5t b\u1EA1i. Vui l\xF2ng ki\u1EC3m tra l\u1EA1i.");
        this.isSubmitting.set(false);
      }
    });
  }
  static \u0275fac = function DepartmentAssignmentComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DepartmentAssignmentComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DepartmentAssignmentComponent, selectors: [["app-department-assignment"]], decls: 8, vars: 2, consts: [[1, "max-w-4xl", "mx-auto", "space-y-6"], [1, "text-2xl", "font-extrabold", "text-gray-900", "tracking-tight"], [1, "text-sm", "text-gray-500", "mt-1"], ["class", "py-12 text-center text-indigo-500", 4, "ngIf"], ["class", "bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden", 4, "ngIf"], [1, "py-12", "text-center", "text-indigo-500"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "inline-block", "h-8", "w-8"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"], [1, "bg-white", "rounded-2xl", "shadow-sm", "border", "border-gray-200", "overflow-hidden"], [1, "p-5", "border-b", "border-gray-100", "bg-gray-50/50", "flex", "items-center", "space-x-2", "text-indigo-700"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"], [1, "font-bold"], [1, "p-6", "space-y-6", 3, "ngSubmit", "formGroup"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-6"], [1, "block", "text-sm", "font-bold", "text-gray-700", "mb-2"], ["formControlName", "schoolYearId", 1, "w-full", "text-sm", "bg-gray-50", "border", "border-gray-300", "rounded-xl", "px-4", "py-2.5", "outline-none", "focus:border-indigo-500", "transition"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "text-xs text-red-500 mt-1", 4, "ngIf"], ["formControlName", "semesterId", 1, "w-full", "text-sm", "bg-gray-50", "border", "border-gray-300", "rounded-xl", "px-4", "py-2.5", "outline-none", "focus:border-indigo-500", "transition"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-6", "pt-4", "border-t", "border-gray-100"], ["formControlName", "subjectId", 1, "w-full", "text-sm", "bg-gray-50", "border", "border-gray-300", "rounded-xl", "px-4", "py-2.5", "outline-none", "focus:border-indigo-500", "transition"], ["formControlName", "physicalClassId", 1, "w-full", "text-sm", "bg-gray-50", "border", "border-gray-300", "rounded-xl", "px-4", "py-2.5", "outline-none", "focus:border-indigo-500", "transition"], [1, "pt-4", "border-t", "border-gray-100"], ["formControlName", "teacherId", 1, "w-full", "text-sm", "bg-emerald-50", "border", "border-emerald-200", "text-emerald-900", "font-medium", "rounded-xl", "px-4", "py-3", "outline-none", "focus:border-emerald-500", "focus:ring-2", "focus:ring-emerald-200", "transition"], [1, "flex", "justify-end", "pt-6"], ["type", "submit", 1, "flex", "items-center", "px-8", "py-3", "text-sm", "font-bold", "text-white", "bg-indigo-600", "rounded-xl", "hover:bg-indigo-700", "disabled:bg-indigo-300", "shadow-md", "transition", 3, "disabled"], ["class", "animate-spin -ml-1 mr-2 h-4 w-4 text-white", "fill", "none", "viewBox", "0 0 24 24", 4, "ngIf"], [3, "value"], [1, "text-xs", "text-red-500", "mt-1"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "-ml-1", "mr-2", "h-4", "w-4", "text-white"]], template: function DepartmentAssignmentComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h1", 1);
      \u0275\u0275text(3, "Ph\xE2n c\xF4ng gi\u1EA3ng d\u1EA1y");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 2);
      \u0275\u0275text(5, "S\u1EAFp x\u1EBFp gi\xE1o vi\xEAn thu\u1ED9c t\u1ED5 b\u1ED9 m\xF4n v\xE0o c\xE1c l\u1EDBp h\u1ECDc t\u01B0\u01A1ng \u1EE9ng");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(6, DepartmentAssignmentComponent_div_6_Template, 4, 0, "div", 3)(7, DepartmentAssignmentComponent_div_7_Template, 53, 14, "div", 4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", ctx.isLoadingData());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoadingData());
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DepartmentAssignmentComponent, [{
    type: Component,
    args: [{ selector: "app-department-assignment", standalone: true, imports: [CommonModule, ReactiveFormsModule], template: `<div class="max-w-4xl mx-auto space-y-6">\r
  \r
  <div>\r
    <h1 class="text-2xl font-extrabold text-gray-900 tracking-tight">Ph\xE2n c\xF4ng gi\u1EA3ng d\u1EA1y</h1>\r
    <p class="text-sm text-gray-500 mt-1">S\u1EAFp x\u1EBFp gi\xE1o vi\xEAn thu\u1ED9c t\u1ED5 b\u1ED9 m\xF4n v\xE0o c\xE1c l\u1EDBp h\u1ECDc t\u01B0\u01A1ng \u1EE9ng</p>\r
  </div>\r
\r
  <div *ngIf="isLoadingData()" class="py-12 text-center text-indigo-500">\r
    <svg class="animate-spin inline-block h-8 w-8" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>\r
  </div>\r
\r
  <div *ngIf="!isLoadingData()" class="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">\r
    \r
    <div class="p-5 border-b border-gray-100 bg-gray-50/50 flex items-center space-x-2 text-indigo-700">\r
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>\r
      <h3 class="font-bold">Thi\u1EBFt l\u1EADp ph\xE2n c\xF4ng</h3>\r
    </div>\r
\r
    <form [formGroup]="assignForm" (ngSubmit)="submitAssignment()" class="p-6 space-y-6">\r
      \r
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">\r
        <div>\r
          <label class="block text-sm font-bold text-gray-700 mb-2">N\u0103m h\u1ECDc</label>\r
          <select formControlName="schoolYearId" class="w-full text-sm bg-gray-50 border border-gray-300 rounded-xl px-4 py-2.5 outline-none focus:border-indigo-500 transition">\r
            <option value="">-- Ch\u1ECDn N\u0103m h\u1ECDc --</option>\r
            <option *ngFor="let sy of schoolYears()" [value]="sy.id">{{ sy.name }}</option>\r
          </select>\r
          <p *ngIf="assignForm.get('schoolYearId')?.invalid && assignForm.get('schoolYearId')?.touched" class="text-xs text-red-500 mt-1">Vui l\xF2ng ch\u1ECDn n\u0103m h\u1ECDc</p>\r
        </div>\r
        \r
        <div>\r
          <label class="block text-sm font-bold text-gray-700 mb-2">H\u1ECDc k\u1EF3</label>\r
          <select formControlName="semesterId" class="w-full text-sm bg-gray-50 border border-gray-300 rounded-xl px-4 py-2.5 outline-none focus:border-indigo-500 transition">\r
            <option value="">-- Ch\u1ECDn H\u1ECDc k\u1EF3 --</option>\r
            <option *ngFor="let sem of semesters()" [value]="sem.id">{{ sem.name }}</option>\r
          </select>\r
          <p *ngIf="assignForm.get('semesterId')?.invalid && assignForm.get('semesterId')?.touched" class="text-xs text-red-500 mt-1">Vui l\xF2ng ch\u1ECDn h\u1ECDc k\u1EF3</p>\r
        </div>\r
      </div>\r
\r
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-gray-100">\r
        <div>\r
          <label class="block text-sm font-bold text-gray-700 mb-2">M\xF4n h\u1ECDc</label>\r
          <select formControlName="subjectId" class="w-full text-sm bg-gray-50 border border-gray-300 rounded-xl px-4 py-2.5 outline-none focus:border-indigo-500 transition">\r
            <option value="">-- Ch\u1ECDn M\xF4n h\u1ECDc --</option>\r
            <option *ngFor="let sub of subjects()" [value]="sub.id">{{ sub.name }}</option>\r
          </select>\r
          <p *ngIf="assignForm.get('subjectId')?.invalid && assignForm.get('subjectId')?.touched" class="text-xs text-red-500 mt-1">Vui l\xF2ng ch\u1ECDn m\xF4n h\u1ECDc</p>\r
        </div>\r
\r
        <div>\r
          <label class="block text-sm font-bold text-gray-700 mb-2">L\u1EDBp h\u1ECDc (Offline)</label>\r
          <select formControlName="physicalClassId" class="w-full text-sm bg-gray-50 border border-gray-300 rounded-xl px-4 py-2.5 outline-none focus:border-indigo-500 transition">\r
            <option value="">-- Ch\u1ECDn L\u1EDBp h\u1ECDc --</option>\r
            <option *ngFor="let pc of physicalClasses()" [value]="pc.id">{{ pc.name }}</option>\r
          </select>\r
          <p *ngIf="assignForm.get('physicalClassId')?.invalid && assignForm.get('physicalClassId')?.touched" class="text-xs text-red-500 mt-1">Vui l\xF2ng ch\u1ECDn l\u1EDBp h\u1ECDc</p>\r
        </div>\r
      </div>\r
\r
      <div class="pt-4 border-t border-gray-100">\r
        <label class="block text-sm font-bold text-gray-700 mb-2">Gi\xE1o vi\xEAn ph\u1EE5 tr\xE1ch (N\u1ED9i b\u1ED9 t\u1ED5)</label>\r
        <select formControlName="teacherId" class="w-full text-sm bg-emerald-50 border border-emerald-200 text-emerald-900 font-medium rounded-xl px-4 py-3 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition">\r
          <option value="">-- Ch\u1ECDn Gi\xE1o vi\xEAn trong t\u1ED5 --</option>\r
          <option *ngFor="let t of teachers()" [value]="t.id">{{ t.fullName }} ({{ t.teacherCode }})</option>\r
        </select>\r
        <p *ngIf="assignForm.get('teacherId')?.invalid && assignForm.get('teacherId')?.touched" class="text-xs text-red-500 mt-1">Vui l\xF2ng ch\u1ECDn gi\xE1o vi\xEAn</p>\r
      </div>\r
\r
      <div class="flex justify-end pt-6">\r
        <button type="submit" [disabled]="assignForm.invalid || isSubmitting()" class="flex items-center px-8 py-3 text-sm font-bold text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 disabled:bg-indigo-300 shadow-md transition">\r
          <svg *ngIf="isSubmitting()" class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>\r
          {{ isSubmitting() ? '\u0110ang ph\xE2n c\xF4ng...' : 'X\xE1c nh\u1EADn Ph\xE2n c\xF4ng' }}\r
        </button>\r
      </div>\r
\r
    </form>\r
  </div>\r
</div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DepartmentAssignmentComponent, { className: "DepartmentAssignmentComponent", filePath: "src/app/features/teacher/pages/teaching-assignment/department-assignment.component.ts", lineNumber: 14 });
})();

// src/app/features/teacher/pages/teaching-assginment-list/department-assignment-list.component.ts
function DepartmentAssignmentListComponent_option_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const sy_r1 = ctx.$implicit;
    \u0275\u0275property("value", sy_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(sy_r1.name);
  }
}
function DepartmentAssignmentListComponent_option_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const sem_r2 = ctx.$implicit;
    \u0275\u0275property("value", sem_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(sem_r2.name);
  }
}
function DepartmentAssignmentListComponent_option_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = ctx.$implicit;
    \u0275\u0275property("value", t_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", t_r3.fullName, " (", t_r3.teacherCode, ")");
  }
}
function DepartmentAssignmentListComponent_option_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pc_r4 = ctx.$implicit;
    \u0275\u0275property("value", pc_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(pc_r4.name);
  }
}
function DepartmentAssignmentListComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 17);
    \u0275\u0275element(2, "circle", 18)(3, "path", 19);
    \u0275\u0275elementEnd()();
  }
}
function DepartmentAssignmentListComponent_div_40_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 30);
    \u0275\u0275text(2, "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u ph\xE2n c\xF4ng ph\xF9 h\u1EE3p.");
    \u0275\u0275elementEnd()();
  }
}
function DepartmentAssignmentListComponent_div_40_tr_19_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 40);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 41);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r5.teacherName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r5.teacherCode);
  }
}
function DepartmentAssignmentListComponent_div_40_tr_19_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "div", 43)(2, "span", 44);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 45);
    \u0275\u0275text(5, "D\u1EA1y thay");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 46)(7, "span", 47);
    \u0275\u0275text(8, "G\u1ED1c:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 48);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r5.subTeacherName);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(item_r5.teacherName);
  }
}
function DepartmentAssignmentListComponent_div_40_tr_19_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275text(1, "\u0110ang d\u1EA1y");
    \u0275\u0275elementEnd();
  }
}
function DepartmentAssignmentListComponent_div_40_tr_19_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 50);
    \u0275\u0275text(1, "\u0110\xE3 h\u1EE7y");
    \u0275\u0275elementEnd();
  }
}
function DepartmentAssignmentListComponent_div_40_tr_19_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 51);
    \u0275\u0275listener("click", function DepartmentAssignmentListComponent_div_40_tr_19_button_17_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const item_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r6 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r6.openUnassignModal(item_r5));
    });
    \u0275\u0275text(1, "H\u1EE7y");
    \u0275\u0275elementEnd();
  }
}
function DepartmentAssignmentListComponent_div_40_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 31)(1, "td", 24);
    \u0275\u0275template(2, DepartmentAssignmentListComponent_div_40_tr_19_div_2_Template, 5, 2, "div", 27)(3, DepartmentAssignmentListComponent_div_40_tr_19_div_3_Template, 11, 2, "div", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td", 33);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 34);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 24)(9, "div", 35);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 36);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td", 24);
    \u0275\u0275template(14, DepartmentAssignmentListComponent_div_40_tr_19_span_14_Template, 2, 0, "span", 37)(15, DepartmentAssignmentListComponent_div_40_tr_19_span_15_Template, 2, 0, "span", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 25);
    \u0275\u0275template(17, DepartmentAssignmentListComponent_div_40_tr_19_button_17_Template, 2, 0, "button", 39);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !item_r5.substituted);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r5.substituted);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r5.subjectName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r5.physicalClassName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r5.semesterName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r5.schoolYearName);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", item_r5.status === "active");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r5.status !== "active");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", item_r5.status === "active");
  }
}
function DepartmentAssignmentListComponent_div_40_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 52)(1, "div", 10)(2, "button", 53);
    \u0275\u0275listener("click", function DepartmentAssignmentListComponent_div_40_div_20_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r6 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r6.changePage(ctx_r6.currentPage() - 1));
    });
    \u0275\u0275text(3, "Tr\u01B0\u1EDBc");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 54);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 53);
    \u0275\u0275listener("click", function DepartmentAssignmentListComponent_div_40_div_20_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r6 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r6.changePage(ctx_r6.currentPage() + 1));
    });
    \u0275\u0275text(7, "Sau");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r6 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r6.currentPage() === 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r6.currentPage(), " / ", ctx_r6.totalPages());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r6.currentPage() === ctx_r6.totalPages());
  }
}
function DepartmentAssignmentListComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21)(2, "table", 22)(3, "thead", 23)(4, "tr")(5, "th", 24);
    \u0275\u0275text(6, "Gi\xE1o vi\xEAn");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 24);
    \u0275\u0275text(8, "M\xF4n d\u1EA1y");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 24);
    \u0275\u0275text(10, "L\u1EDBp");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 24);
    \u0275\u0275text(12, "Th\u1EDDi gian");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 24);
    \u0275\u0275text(14, "Tr\u1EA1ng th\xE1i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 25);
    \u0275\u0275text(16, "Thao t\xE1c");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "tbody", 26);
    \u0275\u0275template(18, DepartmentAssignmentListComponent_div_40_tr_18_Template, 3, 0, "tr", 27)(19, DepartmentAssignmentListComponent_div_40_tr_19_Template, 18, 9, "tr", 28);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(20, DepartmentAssignmentListComponent_div_40_div_20_Template, 8, 4, "div", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275advance(18);
    \u0275\u0275property("ngIf", ctx_r6.assignments().length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r6.assignments());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r6.totalPages() > 1);
  }
}
function DepartmentAssignmentListComponent_div_41__svg_svg_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 69);
    \u0275\u0275element(1, "circle", 18)(2, "path", 19);
    \u0275\u0275elementEnd();
  }
}
function DepartmentAssignmentListComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 55)(1, "div", 56)(2, "div", 57)(3, "div", 58);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 59);
    \u0275\u0275element(5, "path", 60);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "h3", 61);
    \u0275\u0275text(7, "H\u1EE7y ph\xE2n c\xF4ng gi\u1EA3ng d\u1EA1y?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 62);
    \u0275\u0275text(9, " B\u1EA1n \u0111ang th\u1EF1c hi\u1EC7n g\u1EE1 ph\xE2n c\xF4ng gi\xE1o vi\xEAn ");
    \u0275\u0275elementStart(10, "span", 63);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, " kh\u1ECFi m\xF4n ");
    \u0275\u0275elementStart(13, "span", 64);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " l\u1EDBp ");
    \u0275\u0275elementStart(16, "span", 64);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275text(18, ". L\u1EDBp h\u1ECDc tr\u1EF1c tuy\u1EBFn li\xEAn k\u1EBFt v\u1EDBi gi\xE1o vi\xEAn n\xE0y c\u0169ng s\u1EBD b\u1ECB kh\xF3a l\u1EA1i. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 65)(20, "button", 66);
    \u0275\u0275listener("click", function DepartmentAssignmentListComponent_div_41_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.closeUnassignModal());
    });
    \u0275\u0275text(21, " Quay l\u1EA1i ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 67);
    \u0275\u0275listener("click", function DepartmentAssignmentListComponent_div_41_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.confirmUnassign());
    });
    \u0275\u0275template(23, DepartmentAssignmentListComponent_div_41__svg_svg_23_Template, 3, 0, "svg", 68);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate((tmp_1_0 = ctx_r6.assignmentToUnassign()) == null ? null : tmp_1_0.teacherName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_2_0 = ctx_r6.assignmentToUnassign()) == null ? null : tmp_2_0.subjectName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_3_0 = ctx_r6.assignmentToUnassign()) == null ? null : tmp_3_0.physicalClassName);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r6.isProcessing());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r6.isProcessing());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r6.isProcessing());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r6.isProcessing() ? "\u0110ang x\u1EED l\xFD..." : "H\u1EE7y ph\xE2n c\xF4ng", " ");
  }
}
var DepartmentAssignmentListComponent = class _DepartmentAssignmentListComponent {
  deptService = inject(DepartmentManagementService);
  assignmentService = inject(TeachingAssignmentService);
  toastService = inject(ToastService);
  myDepartmentId = signal(null, ...ngDevMode ? [{ debugName: "myDepartmentId" }] : (
    /* istanbul ignore next */
    []
  ));
  // Dữ liệu cho Dropdown bộ lọc
  teachers = signal([], ...ngDevMode ? [{ debugName: "teachers" }] : (
    /* istanbul ignore next */
    []
  ));
  schoolYears = signal([], ...ngDevMode ? [{ debugName: "schoolYears" }] : (
    /* istanbul ignore next */
    []
  ));
  semesters = signal([], ...ngDevMode ? [{ debugName: "semesters" }] : (
    /* istanbul ignore next */
    []
  ));
  physicalClasses = signal([], ...ngDevMode ? [{ debugName: "physicalClasses" }] : (
    /* istanbul ignore next */
    []
  ));
  // State Bảng dữ liệu
  assignments = signal([], ...ngDevMode ? [{ debugName: "assignments" }] : (
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
  // --- STATE MODAL HỦY PHÂN CÔNG ---
  isUnassignModalOpen = signal(false, ...ngDevMode ? [{ debugName: "isUnassignModalOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  assignmentToUnassign = signal(null, ...ngDevMode ? [{ debugName: "assignmentToUnassign" }] : (
    /* istanbul ignore next */
    []
  ));
  isProcessing = signal(false, ...ngDevMode ? [{ debugName: "isProcessing" }] : (
    /* istanbul ignore next */
    []
  ));
  // Biến hứng giá trị Bộ lọc
  filters = {
    schoolYearId: "",
    semesterId: "",
    physicalClassId: "",
    teacherId: ""
  };
  ngOnInit() {
    this.loadInitialData();
  }
  loadInitialData() {
    this.isLoading.set(true);
    this.deptService.getMyProfile().subscribe((profile) => {
      if (profile.departmentId) {
        this.myDepartmentId.set(profile.departmentId);
        this.deptService.getDepartmentMembers(profile.departmentId).subscribe((res) => {
          this.teachers.set(res.content || []);
        });
        this.loadAssignments();
      }
    });
    this.assignmentService.getSchoolYears().subscribe((res) => this.schoolYears.set(res.content || []));
  }
  // Khi người dùng đổi Năm học ở bộ lọc -> Tải lại danh sách Học kỳ tương ứng
  onFilterSchoolYearChange() {
    this.filters.semesterId = "";
    this.filters.physicalClassId = "";
    if (this.filters.schoolYearId) {
      this.assignmentService.getSemesters(this.filters.schoolYearId).subscribe((res) => this.semesters.set(res.content || res));
      this.assignmentService.getPhysicalClasses(this.filters.schoolYearId).subscribe((res) => this.physicalClasses.set(res.content || []));
    } else {
      this.semesters.set([]);
      this.physicalClasses.set([]);
    }
    this.applyFilter();
  }
  loadAssignments() {
    if (!this.myDepartmentId())
      return;
    this.isLoading.set(true);
    this.assignmentService.getDepartmentAssignments(this.myDepartmentId(), this.filters, this.currentPage()).subscribe({
      next: (res) => {
        const activeAssignments = (res.content || []).filter((item) => item.status === "active");
        this.assignments.set(activeAssignments);
        this.totalPages.set(res.totalPages || 1);
        this.isLoading.set(false);
      },
      error: () => {
        this.toastService.error("L\u1ED7i", "Kh\xF4ng th\u1EC3 t\u1EA3i danh s\xE1ch ph\xE2n c\xF4ng.");
        this.isLoading.set(false);
      }
    });
  }
  applyFilter() {
    this.currentPage.set(1);
    this.loadAssignments();
  }
  resetFilters() {
    this.filters = { schoolYearId: "", semesterId: "", physicalClassId: "", teacherId: "" };
    this.semesters.set([]);
    this.physicalClasses.set([]);
    this.applyFilter();
  }
  changePage(page) {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage.set(page);
      this.loadAssignments();
    }
  }
  // Mở Modal xác nhận hủy và lưu lại thông tin bản ghi
  openUnassignModal(item) {
    this.assignmentToUnassign.set(item);
    this.isUnassignModalOpen.set(true);
  }
  // Đóng Modal
  closeUnassignModal() {
    this.isUnassignModalOpen.set(false);
    this.assignmentToUnassign.set(null);
    this.isProcessing.set(false);
  }
  // Thực thi gọi API hủy phân công
  confirmUnassign() {
    const item = this.assignmentToUnassign();
    if (!item)
      return;
    this.isProcessing.set(true);
    this.assignmentService.unassignTeacher(item.id).subscribe({
      next: () => {
        this.toastService.success("Th\xE0nh c\xF4ng", "\u0110\xE3 h\u1EE7y ph\xE2n c\xF4ng gi\u1EA3ng d\u1EA1y.");
        this.loadAssignments();
        this.closeUnassignModal();
      },
      error: (err) => {
        this.toastService.error("L\u1ED7i", err.error?.message || "Kh\xF4ng th\u1EC3 h\u1EE7y ph\xE2n c\xF4ng.");
        this.isProcessing.set(false);
        this.closeUnassignModal();
      }
    });
  }
  static \u0275fac = function DepartmentAssignmentListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DepartmentAssignmentListComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DepartmentAssignmentListComponent, selectors: [["app-department-assignment-list"]], decls: 42, vars: 13, consts: [[1, "max-w-6xl", "mx-auto", "space-y-6"], [1, "flex", "justify-between", "items-end"], [1, "text-2xl", "font-extrabold", "text-gray-900", "tracking-tight"], [1, "text-sm", "text-gray-500", "mt-1"], [1, "bg-white", "p-4", "rounded-2xl", "shadow-sm", "border", "border-gray-200", "grid", "grid-cols-1", "md:grid-cols-4", "gap-4", "items-end"], [1, "block", "text-xs", "font-bold", "text-gray-700", "mb-1.5"], [1, "w-full", "text-sm", "bg-gray-50", "border", "border-gray-300", "rounded-xl", "px-3", "py-2", "outline-none", "focus:border-indigo-500", "transition", 3, "ngModelChange", "change", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "w-full", "text-sm", "bg-gray-50", "border", "border-gray-300", "rounded-xl", "px-3", "py-2", "outline-none", "focus:border-indigo-500", "transition", "disabled:opacity-60", 3, "ngModelChange", "change", "ngModel", "disabled"], [1, "flex", "space-x-2"], [1, "px-4", "py-2", "text-sm", "font-bold", "text-gray-600", "bg-gray-100", "rounded-xl", "hover:bg-gray-200", "transition", 3, "click"], ["class", "py-20 text-center text-indigo-500", 4, "ngIf"], ["class", "bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden", 4, "ngIf"], ["class", "fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm transition-opacity", 4, "ngIf"], [3, "value"], [1, "py-20", "text-center", "text-indigo-500"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "inline-block", "h-8", "w-8"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"], [1, "bg-white", "rounded-2xl", "shadow-sm", "border", "border-gray-200", "overflow-hidden"], [1, "overflow-x-auto"], [1, "w-full", "text-left", "text-sm", "text-gray-600"], [1, "bg-gray-50/50", "text-gray-700", "font-bold", "border-b", "border-gray-100"], [1, "px-5", "py-4"], [1, "px-5", "py-4", "text-center"], [1, "divide-y", "divide-gray-100"], [4, "ngIf"], ["class", "hover:bg-gray-50/50 transition", 4, "ngFor", "ngForOf"], ["class", "px-5 py-4 border-t border-gray-100 flex justify-end", 4, "ngIf"], ["colspan", "6", 1, "px-5", "py-12", "text-center", "text-gray-500"], [1, "hover:bg-gray-50/50", "transition"], ["class", "flex flex-col gap-1", 4, "ngIf"], [1, "px-5", "py-4", "font-semibold", "text-gray-800"], [1, "px-5", "py-4", "font-bold", "text-indigo-700"], [1, "text-gray-900"], [1, "text-xs", "text-gray-500"], ["class", "inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800", 4, "ngIf"], ["class", "inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-gray-100 text-gray-800", 4, "ngIf"], ["class", "text-red-500 hover:text-red-700 font-bold text-xs p-2 hover:bg-red-50 rounded-lg transition", 3, "click", 4, "ngIf"], [1, "font-bold", "text-gray-900"], [1, "text-xs", "text-indigo-600"], [1, "flex", "flex-col", "gap-1"], [1, "flex", "items-center", "space-x-2"], [1, "font-bold", "text-amber-600"], [1, "px-1.5", "py-0.5", "text-[10px]", "font-bold", "text-white", "bg-amber-500", "rounded", "uppercase", "tracking-wider", "shadow-sm"], [1, "text-xs", "text-gray-400", "flex", "items-center"], [1, "mr-1"], [1, "line-through"], [1, "inline-flex", "items-center", "px-2.5", "py-0.5", "rounded-full", "text-[11px]", "font-bold", "bg-emerald-100", "text-emerald-800"], [1, "inline-flex", "items-center", "px-2.5", "py-0.5", "rounded-full", "text-[11px]", "font-bold", "bg-gray-100", "text-gray-800"], [1, "text-red-500", "hover:text-red-700", "font-bold", "text-xs", "p-2", "hover:bg-red-50", "rounded-lg", "transition", 3, "click"], [1, "px-5", "py-4", "border-t", "border-gray-100", "flex", "justify-end"], [1, "px-3", "py-1.5", "text-sm", "font-medium", "text-gray-700", "bg-white", "border", "border-gray-300", "rounded-lg", "hover:bg-gray-50", "disabled:opacity-50", 3, "click", "disabled"], [1, "px-4", "py-1.5", "text-sm", "font-bold", "text-gray-900", "bg-gray-100", "rounded-lg"], [1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "p-4", "bg-gray-900/60", "backdrop-blur-sm", "transition-opacity"], [1, "bg-white", "rounded-3xl", "shadow-2xl", "w-full", "max-w-md", "overflow-hidden", "transform", "transition-all", "animate-[fadeIn_0.2s_ease-out]"], [1, "p-6", "pt-8"], [1, "flex", "items-center", "justify-center", "w-14", "h-14", "mx-auto", "bg-red-100", "rounded-full", "mb-5", "shadow-inner"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-7", "h-7", "text-red-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"], [1, "text-xl", "font-extrabold", "text-center", "text-gray-900", "mb-2"], [1, "text-sm", "text-center", "text-gray-500", "leading-relaxed", "px-2"], [1, "font-bold", "text-gray-800"], [1, "font-bold", "text-indigo-600"], [1, "px-6", "py-4", "bg-gray-50", "flex", "justify-end", "space-x-3", "border-t", "border-gray-100"], [1, "px-5", "py-2.5", "text-sm", "font-bold", "text-gray-700", "bg-white", "border", "border-gray-300", "rounded-xl", "hover:bg-gray-100", "hover:text-gray-900", "transition", "disabled:opacity-50", "shadow-sm", 3, "click", "disabled"], [1, "flex", "items-center", "px-5", "py-2.5", "text-sm", "font-bold", "text-white", "bg-red-600", "border", "border-transparent", "rounded-xl", "hover:bg-red-700", "transition", "disabled:opacity-50", "shadow-md", 3, "click", "disabled"], ["class", "animate-spin -ml-1 mr-2 h-4 w-4 text-white", "fill", "none", "viewBox", "0 0 24 24", 4, "ngIf"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "-ml-1", "mr-2", "h-4", "w-4", "text-white"]], template: function DepartmentAssignmentListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Danh s\xE1ch Ph\xE2n c\xF4ng gi\u1EA3ng d\u1EA1y");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Qu\u1EA3n l\xFD v\xE0 theo d\xF5i l\u1ECBch gi\u1EA3ng d\u1EA1y c\u1EE7a c\xE1c gi\xE1o vi\xEAn trong t\u1ED5");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "div", 4)(8, "div")(9, "label", 5);
      \u0275\u0275text(10, "N\u0103m h\u1ECDc");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "select", 6);
      \u0275\u0275twoWayListener("ngModelChange", function DepartmentAssignmentListComponent_Template_select_ngModelChange_11_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filters.schoolYearId, $event) || (ctx.filters.schoolYearId = $event);
        return $event;
      });
      \u0275\u0275listener("change", function DepartmentAssignmentListComponent_Template_select_change_11_listener() {
        return ctx.onFilterSchoolYearChange();
      });
      \u0275\u0275elementStart(12, "option", 7);
      \u0275\u0275text(13, "-- T\u1EA5t c\u1EA3 --");
      \u0275\u0275elementEnd();
      \u0275\u0275template(14, DepartmentAssignmentListComponent_option_14_Template, 2, 2, "option", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div")(16, "label", 5);
      \u0275\u0275text(17, "H\u1ECDc k\u1EF3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "select", 9);
      \u0275\u0275twoWayListener("ngModelChange", function DepartmentAssignmentListComponent_Template_select_ngModelChange_18_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filters.semesterId, $event) || (ctx.filters.semesterId = $event);
        return $event;
      });
      \u0275\u0275listener("change", function DepartmentAssignmentListComponent_Template_select_change_18_listener() {
        return ctx.applyFilter();
      });
      \u0275\u0275elementStart(19, "option", 7);
      \u0275\u0275text(20, "-- T\u1EA5t c\u1EA3 --");
      \u0275\u0275elementEnd();
      \u0275\u0275template(21, DepartmentAssignmentListComponent_option_21_Template, 2, 2, "option", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "div")(23, "label", 5);
      \u0275\u0275text(24, "Gi\xE1o vi\xEAn");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "select", 6);
      \u0275\u0275twoWayListener("ngModelChange", function DepartmentAssignmentListComponent_Template_select_ngModelChange_25_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filters.teacherId, $event) || (ctx.filters.teacherId = $event);
        return $event;
      });
      \u0275\u0275listener("change", function DepartmentAssignmentListComponent_Template_select_change_25_listener() {
        return ctx.applyFilter();
      });
      \u0275\u0275elementStart(26, "option", 7);
      \u0275\u0275text(27, "-- T\u1EA5t c\u1EA3 GV trong t\u1ED5 --");
      \u0275\u0275elementEnd();
      \u0275\u0275template(28, DepartmentAssignmentListComponent_option_28_Template, 2, 3, "option", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "div")(30, "label", 5);
      \u0275\u0275text(31, "L\u1EDBp h\u1ECDc");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "select", 9);
      \u0275\u0275twoWayListener("ngModelChange", function DepartmentAssignmentListComponent_Template_select_ngModelChange_32_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filters.physicalClassId, $event) || (ctx.filters.physicalClassId = $event);
        return $event;
      });
      \u0275\u0275listener("change", function DepartmentAssignmentListComponent_Template_select_change_32_listener() {
        return ctx.applyFilter();
      });
      \u0275\u0275elementStart(33, "option", 7);
      \u0275\u0275text(34, "-- T\u1EA5t c\u1EA3 --");
      \u0275\u0275elementEnd();
      \u0275\u0275template(35, DepartmentAssignmentListComponent_option_35_Template, 2, 2, "option", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "div", 10)(37, "button", 11);
      \u0275\u0275listener("click", function DepartmentAssignmentListComponent_Template_button_click_37_listener() {
        return ctx.resetFilters();
      });
      \u0275\u0275text(38, " X\xF3a l\u1ECDc ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(39, DepartmentAssignmentListComponent_div_39_Template, 4, 0, "div", 12)(40, DepartmentAssignmentListComponent_div_40_Template, 21, 3, "div", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275template(41, DepartmentAssignmentListComponent_div_41_Template, 25, 7, "div", 14);
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275twoWayProperty("ngModel", ctx.filters.schoolYearId);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.schoolYears());
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.filters.semesterId);
      \u0275\u0275property("disabled", !ctx.filters.schoolYearId);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.semesters());
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.filters.teacherId);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.teachers());
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.filters.physicalClassId);
      \u0275\u0275property("disabled", !ctx.filters.schoolYearId);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.physicalClasses());
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.isLoading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isUnassignModalOpen());
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DepartmentAssignmentListComponent, [{
    type: Component,
    args: [{ selector: "app-department-assignment-list", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="max-w-6xl mx-auto space-y-6">\r
  \r
  <div class="flex justify-between items-end">\r
    <div>\r
      <h1 class="text-2xl font-extrabold text-gray-900 tracking-tight">Danh s\xE1ch Ph\xE2n c\xF4ng gi\u1EA3ng d\u1EA1y</h1>\r
      <p class="text-sm text-gray-500 mt-1">Qu\u1EA3n l\xFD v\xE0 theo d\xF5i l\u1ECBch gi\u1EA3ng d\u1EA1y c\u1EE7a c\xE1c gi\xE1o vi\xEAn trong t\u1ED5</p>\r
    </div>\r
  </div>\r
\r
  <div class="bg-white p-4 rounded-2xl shadow-sm border border-gray-200 grid grid-cols-1 md:grid-cols-4 gap-4 items-end">\r
    <div>\r
      <label class="block text-xs font-bold text-gray-700 mb-1.5">N\u0103m h\u1ECDc</label>\r
      <select [(ngModel)]="filters.schoolYearId" (change)="onFilterSchoolYearChange()" class="w-full text-sm bg-gray-50 border border-gray-300 rounded-xl px-3 py-2 outline-none focus:border-indigo-500 transition">\r
        <option value="">-- T\u1EA5t c\u1EA3 --</option>\r
        <option *ngFor="let sy of schoolYears()" [value]="sy.id">{{ sy.name }}</option>\r
      </select>\r
    </div>\r
    \r
    <div>\r
      <label class="block text-xs font-bold text-gray-700 mb-1.5">H\u1ECDc k\u1EF3</label>\r
      <select [(ngModel)]="filters.semesterId" (change)="applyFilter()" [disabled]="!filters.schoolYearId" class="w-full text-sm bg-gray-50 border border-gray-300 rounded-xl px-3 py-2 outline-none focus:border-indigo-500 transition disabled:opacity-60">\r
        <option value="">-- T\u1EA5t c\u1EA3 --</option>\r
        <option *ngFor="let sem of semesters()" [value]="sem.id">{{ sem.name }}</option>\r
      </select>\r
    </div>\r
\r
    <div>\r
      <label class="block text-xs font-bold text-gray-700 mb-1.5">Gi\xE1o vi\xEAn</label>\r
      <select [(ngModel)]="filters.teacherId" (change)="applyFilter()" class="w-full text-sm bg-gray-50 border border-gray-300 rounded-xl px-3 py-2 outline-none focus:border-indigo-500 transition">\r
        <option value="">-- T\u1EA5t c\u1EA3 GV trong t\u1ED5 --</option>\r
        <option *ngFor="let t of teachers()" [value]="t.id">{{ t.fullName }} ({{ t.teacherCode }})</option>\r
      </select>\r
    </div>\r
\r
    <div>\r
      <label class="block text-xs font-bold text-gray-700 mb-1.5">L\u1EDBp h\u1ECDc</label>\r
      <select [(ngModel)]="filters.physicalClassId" (change)="applyFilter()" [disabled]="!filters.schoolYearId" class="w-full text-sm bg-gray-50 border border-gray-300 rounded-xl px-3 py-2 outline-none focus:border-indigo-500 transition disabled:opacity-60">\r
        <option value="">-- T\u1EA5t c\u1EA3 --</option>\r
        <option *ngFor="let pc of physicalClasses()" [value]="pc.id">{{ pc.name }}</option>\r
      </select>\r
    </div>\r
\r
    <div class="flex space-x-2">\r
      <button (click)="resetFilters()" class="px-4 py-2 text-sm font-bold text-gray-600 bg-gray-100 rounded-xl hover:bg-gray-200 transition">\r
        X\xF3a l\u1ECDc\r
      </button>\r
    </div>\r
  </div>\r
\r
  <div *ngIf="isLoading()" class="py-20 text-center text-indigo-500">\r
    <svg class="animate-spin inline-block h-8 w-8" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>\r
  </div>\r
\r
  <div *ngIf="!isLoading()" class="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">\r
    <div class="overflow-x-auto">\r
      <table class="w-full text-left text-sm text-gray-600">\r
        <thead class="bg-gray-50/50 text-gray-700 font-bold border-b border-gray-100">\r
          <tr>\r
            <th class="px-5 py-4">Gi\xE1o vi\xEAn</th>\r
            <th class="px-5 py-4">M\xF4n d\u1EA1y</th>\r
            <th class="px-5 py-4">L\u1EDBp</th>\r
            <th class="px-5 py-4">Th\u1EDDi gian</th>\r
            <th class="px-5 py-4">Tr\u1EA1ng th\xE1i</th>\r
            <th class="px-5 py-4 text-center">Thao t\xE1c</th>\r
          </tr>\r
        </thead>\r
        <tbody class="divide-y divide-gray-100">\r
          <tr *ngIf="assignments().length === 0">\r
            <td colspan="6" class="px-5 py-12 text-center text-gray-500">Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u ph\xE2n c\xF4ng ph\xF9 h\u1EE3p.</td>\r
          </tr>\r
          <tr *ngFor="let item of assignments()" class="hover:bg-gray-50/50 transition">\r
            <td class="px-5 py-4">\r
              <div *ngIf="!item.substituted">\r
                <div class="font-bold text-gray-900">{{ item.teacherName }}</div>\r
                <div class="text-xs text-indigo-600">{{ item.teacherCode }}</div>\r
              </div>\r
\r
              <div *ngIf="item.substituted" class="flex flex-col gap-1">\r
                <div class="flex items-center space-x-2">\r
                  <span class="font-bold text-amber-600">{{ item.subTeacherName }}</span>\r
                  <span class="px-1.5 py-0.5 text-[10px] font-bold text-white bg-amber-500 rounded uppercase tracking-wider shadow-sm">D\u1EA1y thay</span>\r
                </div>\r
                <div class="text-xs text-gray-400 flex items-center">\r
                  <span class="mr-1">G\u1ED1c:</span>\r
                  <span class="line-through">{{ item.teacherName }}</span>\r
                </div>\r
              </div>\r
            </td>\r
            <td class="px-5 py-4 font-semibold text-gray-800">{{ item.subjectName }}</td>\r
            <td class="px-5 py-4 font-bold text-indigo-700">{{ item.physicalClassName }}</td>\r
            <td class="px-5 py-4">\r
              <div class="text-gray-900">{{ item.semesterName }}</div>\r
              <div class="text-xs text-gray-500">{{ item.schoolYearName }}</div>\r
            </td>\r
            <td class="px-5 py-4">\r
              <span *ngIf="item.status === 'active'" class="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800">\u0110ang d\u1EA1y</span>\r
              <span *ngIf="item.status !== 'active'" class="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-gray-100 text-gray-800">\u0110\xE3 h\u1EE7y</span>\r
            </td>\r
            <td class="px-5 py-4 text-center">\r
              <button *ngIf="item.status === 'active'" (click)="openUnassignModal(item)" class="text-red-500 hover:text-red-700 font-bold text-xs p-2 hover:bg-red-50 rounded-lg transition">H\u1EE7y</button>\r
            </td>\r
          </tr>\r
        </tbody>\r
      </table>\r
    </div>\r
    \r
    <div *ngIf="totalPages() > 1" class="px-5 py-4 border-t border-gray-100 flex justify-end">\r
      <div class="flex space-x-2">\r
        <button (click)="changePage(currentPage() - 1)" [disabled]="currentPage() === 1" class="px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50">Tr\u01B0\u1EDBc</button>\r
        <span class="px-4 py-1.5 text-sm font-bold text-gray-900 bg-gray-100 rounded-lg">{{ currentPage() }} / {{ totalPages() }}</span>\r
        <button (click)="changePage(currentPage() + 1)" [disabled]="currentPage() === totalPages()" class="px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50">Sau</button>\r
      </div>\r
    </div>\r
  </div>\r
\r
</div>\r
\r
<div *ngIf="isUnassignModalOpen()" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm transition-opacity">\r
  <div class="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden transform transition-all animate-[fadeIn_0.2s_ease-out]">\r
    \r
    <div class="p-6 pt-8">\r
      <div class="flex items-center justify-center w-14 h-14 mx-auto bg-red-100 rounded-full mb-5 shadow-inner">\r
        <svg class="w-7 h-7 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>\r
      </div>\r
      <h3 class="text-xl font-extrabold text-center text-gray-900 mb-2">H\u1EE7y ph\xE2n c\xF4ng gi\u1EA3ng d\u1EA1y?</h3>\r
      <p class="text-sm text-center text-gray-500 leading-relaxed px-2">\r
        B\u1EA1n \u0111ang th\u1EF1c hi\u1EC7n g\u1EE1 ph\xE2n c\xF4ng gi\xE1o vi\xEAn <span class="font-bold text-gray-800">{{ assignmentToUnassign()?.teacherName }}</span> \r
        kh\u1ECFi m\xF4n <span class="font-bold text-indigo-600">{{ assignmentToUnassign()?.subjectName }}</span> \r
        l\u1EDBp <span class="font-bold text-indigo-600">{{ assignmentToUnassign()?.physicalClassName }}</span>. \r
        L\u1EDBp h\u1ECDc tr\u1EF1c tuy\u1EBFn li\xEAn k\u1EBFt v\u1EDBi gi\xE1o vi\xEAn n\xE0y c\u0169ng s\u1EBD b\u1ECB kh\xF3a l\u1EA1i.\r
      </p>\r
    </div>\r
\r
    <div class="px-6 py-4 bg-gray-50 flex justify-end space-x-3 border-t border-gray-100">\r
      <button (click)="closeUnassignModal()" [disabled]="isProcessing()" class="px-5 py-2.5 text-sm font-bold text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gray-100 hover:text-gray-900 transition disabled:opacity-50 shadow-sm">\r
        Quay l\u1EA1i\r
      </button>\r
      <button (click)="confirmUnassign()" [disabled]="isProcessing()" class="flex items-center px-5 py-2.5 text-sm font-bold text-white bg-red-600 border border-transparent rounded-xl hover:bg-red-700 transition disabled:opacity-50 shadow-md">\r
        <svg *ngIf="isProcessing()" class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>\r
        {{ isProcessing() ? '\u0110ang x\u1EED l\xFD...' : 'H\u1EE7y ph\xE2n c\xF4ng' }}\r
      </button>\r
    </div>\r
    \r
  </div>\r
</div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DepartmentAssignmentListComponent, { className: "DepartmentAssignmentListComponent", filePath: "src/app/features/teacher/pages/teaching-assginment-list/department-assignment-list.component.ts", lineNumber: 14 });
})();

// src/app/features/teacher/services/teaching-substitution.service.ts
var TeachingSubstitutionService = class _TeachingSubstitutionService {
  http = inject(HttpClient);
  apiUrl = `${environment.apiUrl}/api/v1/teaching-substitutions`;
  // Tạo lịch dạy thay
  create(dto) {
    return this.http.post(this.apiUrl, dto);
  }
  // Lấy danh sách dạy thay CỦA TỔ BỘ MÔN 
  getDepartmentSubstitutions(deptId, filters, page = 1) {
    let params = new HttpParams().set("departmentId", deptId).set("page", page.toString()).set("size", "10");
    if (filters.schoolYearId)
      params = params.set("schoolYearId", filters.schoolYearId);
    if (filters.semesterId)
      params = params.set("semesterId", filters.semesterId);
    if (filters.keyword)
      params = params.set("keyword", filters.keyword);
    return this.http.get(`${this.apiUrl}/department`, { params });
  }
  // Hủy lịch dạy thay
  cancel(id) {
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
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/features/teacher/pages/teaching-substitution/department-substitution.component.ts
function DepartmentSubstitutionComponent_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function DepartmentSubstitutionComponent_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openCreateModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 19);
    \u0275\u0275element(2, "path", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Ph\xE2n c\xF4ng d\u1EA1y thay ");
    \u0275\u0275elementEnd();
  }
}
function DepartmentSubstitutionComponent_option_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const sy_r3 = ctx.$implicit;
    \u0275\u0275property("value", sy_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(sy_r3.name);
  }
}
function DepartmentSubstitutionComponent_option_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const sem_r4 = ctx.$implicit;
    \u0275\u0275property("value", sem_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(sem_r4.name);
  }
}
function DepartmentSubstitutionComponent_option_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r5 = ctx.$implicit;
    \u0275\u0275property("value", t_r5.fullName);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", t_r5.fullName, " (", t_r5.teacherCode, ")");
  }
}
function DepartmentSubstitutionComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 23);
    \u0275\u0275element(2, "circle", 24)(3, "path", 25);
    \u0275\u0275elementEnd()();
  }
}
function DepartmentSubstitutionComponent_div_36_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 36);
    \u0275\u0275text(2, "Ch\u01B0a c\xF3 l\u1ECBch d\u1EA1y thay n\xE0o trong t\u1ED5.");
    \u0275\u0275elementEnd()();
  }
}
function DepartmentSubstitutionComponent_div_36_tr_19_span_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 47);
    \u0275\u0275text(1, "\u0110\xE3 duy\u1EC7t");
    \u0275\u0275elementEnd();
  }
}
function DepartmentSubstitutionComponent_div_36_tr_19_span_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 48);
    \u0275\u0275text(1, "\u0110\xE3 h\u1EE7y");
    \u0275\u0275elementEnd();
  }
}
function DepartmentSubstitutionComponent_div_36_tr_19_button_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 49);
    \u0275\u0275listener("click", function DepartmentSubstitutionComponent_div_36_tr_19_button_22_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const item_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openCancelModal(item_r7));
    });
    \u0275\u0275text(1, "H\u1EE7y");
    \u0275\u0275elementEnd();
  }
}
function DepartmentSubstitutionComponent_div_36_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 37)(1, "td", 30)(2, "div", 38);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 30)(5, "div", 39);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 40);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td", 30)(10, "div", 41);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 42);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td", 43);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "date");
    \u0275\u0275pipe(17, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td", 30);
    \u0275\u0275template(19, DepartmentSubstitutionComponent_div_36_tr_19_span_19_Template, 2, 0, "span", 44)(20, DepartmentSubstitutionComponent_div_36_tr_19_span_20_Template, 2, 0, "span", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td", 32);
    \u0275\u0275template(22, DepartmentSubstitutionComponent_div_36_tr_19_button_22_Template, 2, 0, "button", 46);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r7.originalTeacherName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r7.physicalClassName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r7.subjectName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r7.subTeacherName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r7.subTeacherCode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(16, 10, item_r7.startDate, "dd/MM/yyyy"), " - ", \u0275\u0275pipeBind2(17, 13, item_r7.endDate, "dd/MM/yyyy"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", item_r7.status === "approved");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r7.status === "cancelled");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", item_r7.status === "approved");
  }
}
function DepartmentSubstitutionComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27)(2, "table", 28)(3, "thead", 29)(4, "tr")(5, "th", 30);
    \u0275\u0275text(6, "Gi\xE1o vi\xEAn g\u1ED1c (Ngh\u1EC9)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 30);
    \u0275\u0275text(8, "L\u1EDBp - M\xF4n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 31);
    \u0275\u0275text(10, "Gi\xE1o vi\xEAn d\u1EA1y thay");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 30);
    \u0275\u0275text(12, "Th\u1EDDi gian \xE1p d\u1EE5ng");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 30);
    \u0275\u0275text(14, "Tr\u1EA1ng th\xE1i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 32);
    \u0275\u0275text(16, "Thao t\xE1c");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "tbody", 33);
    \u0275\u0275template(18, DepartmentSubstitutionComponent_div_36_tr_18_Template, 3, 0, "tr", 34)(19, DepartmentSubstitutionComponent_div_36_tr_19_Template, 23, 16, "tr", 35);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(18);
    \u0275\u0275property("ngIf", ctx_r1.substitutions().length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.substitutions());
  }
}
function DepartmentSubstitutionComponent_div_37_option_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r9 = ctx.$implicit;
    \u0275\u0275property("value", a_r9.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" L\u1EDBp ", a_r9.physicalClassName, " - M\xF4n ", a_r9.subjectName, " (GV \u0111ang d\u1EA1y: ", a_r9.teacherName, ") ");
  }
}
function DepartmentSubstitutionComponent_div_37_p_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 71);
    \u0275\u0275text(1, "Vui l\xF2ng ch\u1ECDn ph\xE2n c\xF4ng");
    \u0275\u0275elementEnd();
  }
}
function DepartmentSubstitutionComponent_div_37_option_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r10 = ctx.$implicit;
    \u0275\u0275property("value", t_r10.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", t_r10.fullName, " (", t_r10.teacherCode, ")");
  }
}
function DepartmentSubstitutionComponent_div_37_p_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 71);
    \u0275\u0275text(1, "Vui l\xF2ng ch\u1ECDn gi\xE1o vi\xEAn d\u1EA1y thay");
    \u0275\u0275elementEnd();
  }
}
function DepartmentSubstitutionComponent_div_37__svg_svg_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 72);
    \u0275\u0275element(1, "circle", 24)(2, "path", 25);
    \u0275\u0275elementEnd();
  }
}
function DepartmentSubstitutionComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 50)(1, "div", 51)(2, "div", 52)(3, "h3", 53);
    \u0275\u0275text(4, "Ph\xE2n c\xF4ng Gi\xE1o vi\xEAn d\u1EA1y thay");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 54);
    \u0275\u0275listener("click", function DepartmentSubstitutionComponent_div_37_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeCreateModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 55);
    \u0275\u0275element(7, "path", 56);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "form", 57);
    \u0275\u0275listener("ngSubmit", function DepartmentSubstitutionComponent_div_37_Template_form_ngSubmit_8_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitSubstitution());
    });
    \u0275\u0275elementStart(9, "div")(10, "label", 58);
    \u0275\u0275text(11, "L\u1EDBp h\u1ECDc c\u1EA7n d\u1EA1y thay (Ph\xE2n c\xF4ng g\u1ED1c) ");
    \u0275\u0275elementStart(12, "span", 59);
    \u0275\u0275text(13, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "select", 60)(15, "option", 8);
    \u0275\u0275text(16, "-- Ch\u1ECDn ph\xE2n c\xF4ng hi\u1EC7n t\u1EA1i --");
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, DepartmentSubstitutionComponent_div_37_option_17_Template, 2, 4, "option", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, DepartmentSubstitutionComponent_div_37_p_18_Template, 2, 0, "p", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div")(20, "label", 58);
    \u0275\u0275text(21, "Ph\xE2n c\xF4ng cho Gi\xE1o vi\xEAn ");
    \u0275\u0275elementStart(22, "span", 59);
    \u0275\u0275text(23, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "select", 62)(25, "option", 8);
    \u0275\u0275text(26, "-- Ch\u1ECDn gi\xE1o vi\xEAn trong t\u1ED5 --");
    \u0275\u0275elementEnd();
    \u0275\u0275template(27, DepartmentSubstitutionComponent_div_37_option_27_Template, 2, 3, "option", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(28, DepartmentSubstitutionComponent_div_37_p_28_Template, 2, 0, "p", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 63)(30, "div")(31, "label", 58);
    \u0275\u0275text(32, "T\u1EEB ng\xE0y ");
    \u0275\u0275elementStart(33, "span", 59);
    \u0275\u0275text(34, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(35, "input", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div")(37, "label", 58);
    \u0275\u0275text(38, "\u0110\u1EBFn ng\xE0y ");
    \u0275\u0275elementStart(39, "span", 59);
    \u0275\u0275text(40, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(41, "input", 65);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div")(43, "label", 58);
    \u0275\u0275text(44, "L\xFD do (T\xF9y ch\u1ECDn)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(45, "input", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 67)(47, "button", 68);
    \u0275\u0275listener("click", function DepartmentSubstitutionComponent_div_37_Template_button_click_47_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeCreateModal());
    });
    \u0275\u0275text(48, "H\u1EE7y b\u1ECF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "button", 69);
    \u0275\u0275template(50, DepartmentSubstitutionComponent_div_37__svg_svg_50_Template, 3, 0, "svg", 70);
    \u0275\u0275text(51, " X\xE1c nh\u1EADn Ph\xE2n c\xF4ng ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_5_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("formGroup", ctx_r1.subForm);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngForOf", ctx_r1.activeAssignments());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_3_0 = ctx_r1.subForm.get("assignmentId")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx_r1.subForm.get("assignmentId")) == null ? null : tmp_3_0.touched));
    \u0275\u0275advance(9);
    \u0275\u0275property("ngForOf", ctx_r1.teachers());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_5_0 = ctx_r1.subForm.get("subTeacherId")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx_r1.subForm.get("subTeacherId")) == null ? null : tmp_5_0.touched));
    \u0275\u0275advance(21);
    \u0275\u0275property("disabled", ctx_r1.subForm.invalid || ctx_r1.isSubmitting());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isSubmitting());
  }
}
function DepartmentSubstitutionComponent_div_38__svg_svg_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 72);
    \u0275\u0275element(1, "circle", 24)(2, "path", 25);
    \u0275\u0275elementEnd();
  }
}
function DepartmentSubstitutionComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 73)(1, "div", 74)(2, "div", 75)(3, "div", 76);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 77);
    \u0275\u0275element(5, "path", 78);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "h3", 79);
    \u0275\u0275text(7, "H\u1EE7y l\u1ECBch d\u1EA1y thay?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 80);
    \u0275\u0275text(9, " B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n h\u1EE7y l\u1ECBch d\u1EA1y thay c\u1EE7a gi\xE1o vi\xEAn ");
    \u0275\u0275elementStart(10, "span", 39);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, " cho l\u1EDBp ");
    \u0275\u0275elementStart(13, "span", 81);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " kh\xF4ng? L\u1ECBch n\xE0y s\u1EBD kh\xF4ng c\xF2n hi\u1EC7u l\u1EF1c n\u1EEFa. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 82)(17, "button", 83);
    \u0275\u0275listener("click", function DepartmentSubstitutionComponent_div_38_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeCancelModal());
    });
    \u0275\u0275text(18, " Quay l\u1EA1i ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 84);
    \u0275\u0275listener("click", function DepartmentSubstitutionComponent_div_38_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmCancel());
    });
    \u0275\u0275template(20, DepartmentSubstitutionComponent_div_38__svg_svg_20_Template, 3, 0, "svg", 70);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate((tmp_1_0 = ctx_r1.subToCancel()) == null ? null : tmp_1_0.subTeacherName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_2_0 = ctx_r1.subToCancel()) == null ? null : tmp_2_0.physicalClassName);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.isCanceling());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isCanceling());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isCanceling());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isCanceling() ? "\u0110ang h\u1EE7y..." : "X\xE1c nh\u1EADn h\u1EE7y", " ");
  }
}
var DepartmentSubstitutionComponent = class _DepartmentSubstitutionComponent {
  fb = inject(FormBuilder);
  deptService = inject(DepartmentManagementService);
  assignmentService = inject(TeachingAssignmentService);
  subService = inject(TeachingSubstitutionService);
  toastService = inject(ToastService);
  myDepartmentId = signal(null, ...ngDevMode ? [{ debugName: "myDepartmentId" }] : (
    /* istanbul ignore next */
    []
  ));
  // Dữ liệu Dropdown
  teachers = signal([], ...ngDevMode ? [{ debugName: "teachers" }] : (
    /* istanbul ignore next */
    []
  ));
  activeAssignments = signal([], ...ngDevMode ? [{ debugName: "activeAssignments" }] : (
    /* istanbul ignore next */
    []
  ));
  // Danh sách lớp để chọn khi dạy thay
  // Dữ liệu Bảng
  substitutions = signal([], ...ngDevMode ? [{ debugName: "substitutions" }] : (
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
  // Form & Modal
  isCreateModalOpen = signal(false, ...ngDevMode ? [{ debugName: "isCreateModalOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  isSubmitting = signal(false, ...ngDevMode ? [{ debugName: "isSubmitting" }] : (
    /* istanbul ignore next */
    []
  ));
  subForm;
  // --- STATE MODAL HỦY DẠY THAY ---
  isCancelModalOpen = signal(false, ...ngDevMode ? [{ debugName: "isCancelModalOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  subToCancel = signal(null, ...ngDevMode ? [{ debugName: "subToCancel" }] : (
    /* istanbul ignore next */
    []
  ));
  isCanceling = signal(false, ...ngDevMode ? [{ debugName: "isCanceling" }] : (
    /* istanbul ignore next */
    []
  ));
  // --- STATE BỘ LỌC ---
  schoolYears = signal([], ...ngDevMode ? [{ debugName: "schoolYears" }] : (
    /* istanbul ignore next */
    []
  ));
  semesters = signal([], ...ngDevMode ? [{ debugName: "semesters" }] : (
    /* istanbul ignore next */
    []
  ));
  filters = {
    schoolYearId: "",
    semesterId: "",
    keyword: ""
    // Dùng để tìm kiếm tên GV dạy thay
  };
  ngOnInit() {
    this.subForm = this.fb.group({
      assignmentId: ["", Validators.required],
      subTeacherId: ["", Validators.required],
      startDate: ["", Validators.required],
      endDate: ["", Validators.required],
      reason: [""]
    });
    this.loadInitialData();
  }
  loadInitialData() {
    this.isLoading.set(true);
    this.deptService.getMyProfile().subscribe((profile) => {
      if (profile.departmentId) {
        this.myDepartmentId.set(profile.departmentId);
        this.deptService.getDepartmentMembers(profile.departmentId).subscribe((res) => {
          this.teachers.set(res.content || []);
        });
        this.assignmentService.getDepartmentAssignments(profile.departmentId, {}, 1).subscribe((res) => {
          const actives = (res.content || []).filter((a) => a.status === "active");
          this.activeAssignments.set(actives);
        });
        this.loadSubstitutions();
      }
    });
    this.assignmentService.getSchoolYears().subscribe((res) => this.schoolYears.set(res.content || []));
  }
  loadSubstitutions() {
    if (!this.myDepartmentId())
      return;
    this.isLoading.set(true);
    this.subService.getDepartmentSubstitutions(this.myDepartmentId(), this.filters, this.currentPage()).subscribe({
      next: (res) => {
        const activeSubs = (res.content || []).filter((item) => item.status !== "cancelled");
        this.substitutions.set(activeSubs);
        this.totalPages.set(res.totalPages || 1);
        this.isLoading.set(false);
      },
      error: () => {
        this.toastService.error("L\u1ED7i", "Kh\xF4ng th\u1EC3 t\u1EA3i danh s\xE1ch ph\xE2n c\xF4ng d\u1EA1y thay.");
        this.isLoading.set(false);
      }
    });
  }
  // --- LOGIC BỘ LỌC ---
  onFilterSchoolYearChange() {
    this.filters.semesterId = "";
    if (this.filters.schoolYearId) {
      this.assignmentService.getSemesters(this.filters.schoolYearId).subscribe((res) => this.semesters.set(res.content || res));
    } else {
      this.semesters.set([]);
    }
    this.applyFilter();
  }
  applyFilter() {
    this.currentPage.set(1);
    this.loadSubstitutions();
  }
  resetFilters() {
    this.filters = { schoolYearId: "", semesterId: "", keyword: "" };
    this.semesters.set([]);
    this.applyFilter();
  }
  changePage(page) {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage.set(page);
      this.loadSubstitutions();
    }
  }
  // --- LOGIC FORM ---
  openCreateModal() {
    this.subForm.reset();
    this.isCreateModalOpen.set(true);
  }
  closeCreateModal() {
    this.isCreateModalOpen.set(false);
  }
  submitSubstitution() {
    if (this.subForm.invalid) {
      this.subForm.markAllAsTouched();
      return;
    }
    const selectedAssignment = this.activeAssignments().find((a) => a.id === this.subForm.value.assignmentId);
    if (selectedAssignment && selectedAssignment.teacherId === this.subForm.value.subTeacherId) {
      this.toastService.warning("C\u1EA3nh b\xE1o", "Gi\xE1o vi\xEAn d\u1EA1y thay kh\xF4ng th\u1EC3 tr\xF9ng v\u1EDBi gi\xE1o vi\xEAn d\u1EA1y ch\xEDnh!");
      return;
    }
    if (new Date(this.subForm.value.startDate) > new Date(this.subForm.value.endDate)) {
      this.toastService.warning("C\u1EA3nh b\xE1o", "Ng\xE0y b\u1EAFt \u0111\u1EA7u ph\u1EA3i tr\u01B0\u1EDBc ng\xE0y k\u1EBFt th\xFAc!");
      return;
    }
    this.isSubmitting.set(true);
    this.subService.create(this.subForm.value).subscribe({
      next: () => {
        this.toastService.success("Th\xE0nh c\xF4ng", "\u0110\xE3 ph\xE2n c\xF4ng d\u1EA1y thay th\xE0nh c\xF4ng!");
        this.closeCreateModal();
        this.loadSubstitutions();
        this.isSubmitting.set(false);
      },
      error: (err) => {
        this.toastService.error("L\u1ED7i", err.error?.message || "Kh\xF4ng th\u1EC3 t\u1EA1o ph\xE2n c\xF4ng d\u1EA1y thay.");
        this.isSubmitting.set(false);
      }
    });
  }
  // Mở Modal xác nhận hủy
  openCancelModal(item) {
    this.subToCancel.set(item);
    this.isCancelModalOpen.set(true);
  }
  // Đóng Modal
  closeCancelModal() {
    this.isCancelModalOpen.set(false);
    this.subToCancel.set(null);
    this.isCanceling.set(false);
  }
  // Thực thi gọi API hủy phân công dạy thay
  confirmCancel() {
    const item = this.subToCancel();
    if (!item)
      return;
    this.isCanceling.set(true);
    this.subService.cancel(item.id).subscribe({
      next: () => {
        this.toastService.success("Th\xE0nh c\xF4ng", "\u0110\xE3 h\u1EE7y l\u1ECBch d\u1EA1y thay.");
        this.loadSubstitutions();
        this.closeCancelModal();
      },
      error: (err) => {
        this.toastService.error("L\u1ED7i", err.error?.message || "H\u1EE7y th\u1EA5t b\u1EA1i.");
        this.isCanceling.set(false);
        this.closeCancelModal();
      }
    });
  }
  static \u0275fac = function DepartmentSubstitutionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DepartmentSubstitutionComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DepartmentSubstitutionComponent, selectors: [["app-department-substitution"]], decls: 39, vars: 12, consts: [[1, "max-w-6xl", "mx-auto", "space-y-6"], [1, "flex", "justify-between", "items-end"], [1, "text-2xl", "font-extrabold", "text-gray-900", "tracking-tight"], [1, "text-sm", "text-gray-500", "mt-1"], ["class", "flex items-center px-4 py-2 text-sm font-bold text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 shadow-md transition", 3, "click", 4, "ngIf"], [1, "bg-white", "p-4", "rounded-2xl", "shadow-sm", "border", "border-gray-200", "grid", "grid-cols-1", "md:grid-cols-4", "gap-4", "items-end"], [1, "block", "text-xs", "font-bold", "text-gray-700", "mb-1.5"], [1, "w-full", "text-sm", "bg-gray-50", "border", "border-gray-300", "rounded-xl", "px-3", "py-2", "outline-none", "focus:border-indigo-500", "transition", 3, "ngModelChange", "change", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "w-full", "text-sm", "bg-gray-50", "border", "border-gray-300", "rounded-xl", "px-3", "py-2", "outline-none", "focus:border-indigo-500", "transition", "disabled:opacity-60", 3, "ngModelChange", "change", "ngModel", "disabled"], [1, "flex", "space-x-2"], [1, "px-4", "py-2", "text-sm", "font-bold", "text-white", "bg-indigo-600", "rounded-xl", "hover:bg-indigo-700", "transition", "shadow-sm", 3, "click"], [1, "px-4", "py-2", "text-sm", "font-bold", "text-gray-600", "bg-gray-100", "rounded-xl", "hover:bg-gray-200", "transition", 3, "click"], ["class", "py-20 text-center text-indigo-500", 4, "ngIf"], ["class", "bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden", 4, "ngIf"], ["class", "fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm", 4, "ngIf"], ["class", "fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm transition-opacity", 4, "ngIf"], [1, "flex", "items-center", "px-4", "py-2", "text-sm", "font-bold", "text-white", "bg-indigo-600", "rounded-xl", "hover:bg-indigo-700", "shadow-md", "transition", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "mr-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 4v16m8-8H4"], [3, "value"], [1, "py-20", "text-center", "text-indigo-500"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "inline-block", "h-8", "w-8"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"], [1, "bg-white", "rounded-2xl", "shadow-sm", "border", "border-gray-200", "overflow-hidden"], [1, "overflow-x-auto"], [1, "w-full", "text-left", "text-sm", "text-gray-600"], [1, "bg-gray-50/50", "text-gray-700", "font-bold", "border-b", "border-gray-100"], [1, "px-5", "py-4"], [1, "px-5", "py-4", "text-indigo-700"], [1, "px-5", "py-4", "text-center"], [1, "divide-y", "divide-gray-100"], [4, "ngIf"], ["class", "hover:bg-gray-50/50 transition", 4, "ngFor", "ngForOf"], ["colspan", "6", 1, "px-5", "py-12", "text-center", "text-gray-500"], [1, "hover:bg-gray-50/50", "transition"], [1, "font-bold", "text-gray-900", "line-through", "decoration-gray-400"], [1, "font-bold", "text-gray-800"], [1, "text-xs", "text-gray-500"], [1, "font-bold", "text-indigo-700"], [1, "text-xs", "text-indigo-500"], [1, "px-5", "py-4", "font-medium", "text-gray-800"], ["class", "inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800", 4, "ngIf"], ["class", "inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-red-100 text-red-800", 4, "ngIf"], ["class", "text-red-500 hover:text-red-700 font-bold text-xs p-2 hover:bg-red-50 rounded-lg transition", 3, "click", 4, "ngIf"], [1, "inline-flex", "items-center", "px-2.5", "py-0.5", "rounded-full", "text-[11px]", "font-bold", "bg-emerald-100", "text-emerald-800"], [1, "inline-flex", "items-center", "px-2.5", "py-0.5", "rounded-full", "text-[11px]", "font-bold", "bg-red-100", "text-red-800"], [1, "text-red-500", "hover:text-red-700", "font-bold", "text-xs", "p-2", "hover:bg-red-50", "rounded-lg", "transition", 3, "click"], [1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "p-4", "bg-gray-900/60", "backdrop-blur-sm"], [1, "bg-white", "rounded-3xl", "shadow-2xl", "w-full", "max-w-2xl", "overflow-hidden", "flex", "flex-col"], [1, "p-5", "border-b", "border-gray-100", "bg-gray-50/50", "flex", "items-center", "justify-between"], [1, "font-bold", "text-indigo-700", "text-lg"], [1, "text-gray-400", "hover:text-gray-600", "p-1.5", "rounded-lg", "hover:bg-white", "transition", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "p-6", "space-y-5", 3, "ngSubmit", "formGroup"], [1, "block", "text-sm", "font-bold", "text-gray-700", "mb-1.5"], [1, "text-red-500"], ["formControlName", "assignmentId", 1, "w-full", "text-sm", "font-medium", "bg-gray-50", "border", "border-gray-300", "rounded-xl", "px-4", "py-3", "outline-none", "focus:border-indigo-500", "transition"], ["class", "text-xs text-red-500 mt-1", 4, "ngIf"], ["formControlName", "subTeacherId", 1, "w-full", "text-sm", "font-bold", "text-indigo-900", "bg-indigo-50", "border", "border-indigo-200", "rounded-xl", "px-4", "py-3", "outline-none", "focus:border-indigo-500", "transition"], [1, "grid", "grid-cols-2", "gap-4"], ["formControlName", "startDate", "type", "date", 1, "w-full", "text-sm", "bg-gray-50", "border", "border-gray-300", "rounded-xl", "px-4", "py-2.5", "outline-none", "focus:border-indigo-500"], ["formControlName", "endDate", "type", "date", 1, "w-full", "text-sm", "bg-gray-50", "border", "border-gray-300", "rounded-xl", "px-4", "py-2.5", "outline-none", "focus:border-indigo-500"], ["formControlName", "reason", "type", "text", "placeholder", "VD: GV Nguy\u1EC5n V\u0103n A ngh\u1EC9 \u1ED1m...", 1, "w-full", "text-sm", "bg-gray-50", "border", "border-gray-300", "rounded-xl", "px-4", "py-2.5", "outline-none", "focus:border-indigo-500"], [1, "flex", "justify-end", "pt-4", "border-t", "border-gray-100"], ["type", "button", 1, "px-5", "py-2.5", "mr-3", "text-sm", "font-bold", "text-gray-700", "bg-white", "border", "border-gray-300", "rounded-xl", "hover:bg-gray-100", "transition", 3, "click"], ["type", "submit", 1, "flex", "items-center", "px-6", "py-2.5", "text-sm", "font-bold", "text-white", "bg-indigo-600", "rounded-xl", "hover:bg-indigo-700", "disabled:bg-indigo-300", "shadow-md", "transition", 3, "disabled"], ["class", "animate-spin -ml-1 mr-2 h-4 w-4 text-white", "fill", "none", "viewBox", "0 0 24 24", 4, "ngIf"], [1, "text-xs", "text-red-500", "mt-1"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "-ml-1", "mr-2", "h-4", "w-4", "text-white"], [1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "p-4", "bg-gray-900/60", "backdrop-blur-sm", "transition-opacity"], [1, "bg-white", "rounded-3xl", "shadow-2xl", "w-full", "max-w-md", "overflow-hidden", "transform", "transition-all", "animate-[fadeIn_0.2s_ease-out]"], [1, "p-6", "pt-8"], [1, "flex", "items-center", "justify-center", "w-14", "h-14", "mx-auto", "bg-red-100", "rounded-full", "mb-5", "shadow-inner"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-7", "h-7", "text-red-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"], [1, "text-xl", "font-extrabold", "text-center", "text-gray-900", "mb-2"], [1, "text-sm", "text-center", "text-gray-500", "leading-relaxed", "px-2"], [1, "font-bold", "text-indigo-600"], [1, "px-6", "py-4", "bg-gray-50", "flex", "justify-end", "space-x-3", "border-t", "border-gray-100"], [1, "px-5", "py-2.5", "text-sm", "font-bold", "text-gray-700", "bg-white", "border", "border-gray-300", "rounded-xl", "hover:bg-gray-100", "transition", "disabled:opacity-50", "shadow-sm", 3, "click", "disabled"], [1, "flex", "items-center", "px-5", "py-2.5", "text-sm", "font-bold", "text-white", "bg-red-600", "border", "border-transparent", "rounded-xl", "hover:bg-red-700", "transition", "disabled:opacity-50", "shadow-md", 3, "click", "disabled"]], template: function DepartmentSubstitutionComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Qu\u1EA3n l\xFD D\u1EA1y thay");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "S\u1EAFp x\u1EBFp gi\xE1o vi\xEAn d\u1EA1y thay cho c\xE1c tr\u01B0\u1EDDng h\u1EE3p ngh\u1EC9 ph\xE9p, c\xF4ng t\xE1c");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(7, DepartmentSubstitutionComponent_button_7_Template, 4, 0, "button", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 5)(9, "div")(10, "label", 6);
      \u0275\u0275text(11, "N\u0103m h\u1ECDc");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "select", 7);
      \u0275\u0275twoWayListener("ngModelChange", function DepartmentSubstitutionComponent_Template_select_ngModelChange_12_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filters.schoolYearId, $event) || (ctx.filters.schoolYearId = $event);
        return $event;
      });
      \u0275\u0275listener("change", function DepartmentSubstitutionComponent_Template_select_change_12_listener() {
        return ctx.onFilterSchoolYearChange();
      });
      \u0275\u0275elementStart(13, "option", 8);
      \u0275\u0275text(14, "-- T\u1EA5t c\u1EA3 --");
      \u0275\u0275elementEnd();
      \u0275\u0275template(15, DepartmentSubstitutionComponent_option_15_Template, 2, 2, "option", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div")(17, "label", 6);
      \u0275\u0275text(18, "H\u1ECDc k\u1EF3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "select", 10);
      \u0275\u0275twoWayListener("ngModelChange", function DepartmentSubstitutionComponent_Template_select_ngModelChange_19_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filters.semesterId, $event) || (ctx.filters.semesterId = $event);
        return $event;
      });
      \u0275\u0275listener("change", function DepartmentSubstitutionComponent_Template_select_change_19_listener() {
        return ctx.applyFilter();
      });
      \u0275\u0275elementStart(20, "option", 8);
      \u0275\u0275text(21, "-- T\u1EA5t c\u1EA3 --");
      \u0275\u0275elementEnd();
      \u0275\u0275template(22, DepartmentSubstitutionComponent_option_22_Template, 2, 2, "option", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "div")(24, "label", 6);
      \u0275\u0275text(25, "Gi\xE1o vi\xEAn d\u1EA1y thay");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "select", 7);
      \u0275\u0275twoWayListener("ngModelChange", function DepartmentSubstitutionComponent_Template_select_ngModelChange_26_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filters.keyword, $event) || (ctx.filters.keyword = $event);
        return $event;
      });
      \u0275\u0275listener("change", function DepartmentSubstitutionComponent_Template_select_change_26_listener() {
        return ctx.applyFilter();
      });
      \u0275\u0275elementStart(27, "option", 8);
      \u0275\u0275text(28, "-- T\u1EA5t c\u1EA3 GV trong t\u1ED5 --");
      \u0275\u0275elementEnd();
      \u0275\u0275template(29, DepartmentSubstitutionComponent_option_29_Template, 2, 3, "option", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "div", 11)(31, "button", 12);
      \u0275\u0275listener("click", function DepartmentSubstitutionComponent_Template_button_click_31_listener() {
        return ctx.applyFilter();
      });
      \u0275\u0275text(32, " L\u1ECDc ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "button", 13);
      \u0275\u0275listener("click", function DepartmentSubstitutionComponent_Template_button_click_33_listener() {
        return ctx.resetFilters();
      });
      \u0275\u0275text(34, " X\xF3a l\u1ECDc ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(35, DepartmentSubstitutionComponent_div_35_Template, 4, 0, "div", 14)(36, DepartmentSubstitutionComponent_div_36_Template, 20, 2, "div", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275template(37, DepartmentSubstitutionComponent_div_37_Template, 52, 7, "div", 16)(38, DepartmentSubstitutionComponent_div_38_Template, 22, 6, "div", 17);
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", !ctx.isLoading());
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.filters.schoolYearId);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.schoolYears());
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.filters.semesterId);
      \u0275\u0275property("disabled", !ctx.filters.schoolYearId);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.semesters());
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.filters.keyword);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.teachers());
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", ctx.isLoading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isCreateModalOpen());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isCancelModalOpen());
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormsModule, NgModel, DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DepartmentSubstitutionComponent, [{
    type: Component,
    args: [{ selector: "app-department-substitution", standalone: true, imports: [CommonModule, ReactiveFormsModule, FormsModule], template: `<div class="max-w-6xl mx-auto space-y-6">\r
  \r
  <div class="flex justify-between items-end">\r
    <div>\r
      <h1 class="text-2xl font-extrabold text-gray-900 tracking-tight">Qu\u1EA3n l\xFD D\u1EA1y thay</h1>\r
      <p class="text-sm text-gray-500 mt-1">S\u1EAFp x\u1EBFp gi\xE1o vi\xEAn d\u1EA1y thay cho c\xE1c tr\u01B0\u1EDDng h\u1EE3p ngh\u1EC9 ph\xE9p, c\xF4ng t\xE1c</p>\r
    </div>\r
    <button *ngIf="!isLoading()" (click)="openCreateModal()" class="flex items-center px-4 py-2 text-sm font-bold text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 shadow-md transition">\r
      <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>\r
      Ph\xE2n c\xF4ng d\u1EA1y thay\r
    </button>\r
  </div>\r
\r
  <div class="bg-white p-4 rounded-2xl shadow-sm border border-gray-200 grid grid-cols-1 md:grid-cols-4 gap-4 items-end">\r
    \r
    <div>\r
      <label class="block text-xs font-bold text-gray-700 mb-1.5">N\u0103m h\u1ECDc</label>\r
      <select [(ngModel)]="filters.schoolYearId" (change)="onFilterSchoolYearChange()" class="w-full text-sm bg-gray-50 border border-gray-300 rounded-xl px-3 py-2 outline-none focus:border-indigo-500 transition">\r
        <option value="">-- T\u1EA5t c\u1EA3 --</option>\r
        <option *ngFor="let sy of schoolYears()" [value]="sy.id">{{ sy.name }}</option>\r
      </select>\r
    </div>\r
    \r
    <div>\r
      <label class="block text-xs font-bold text-gray-700 mb-1.5">H\u1ECDc k\u1EF3</label>\r
      <select [(ngModel)]="filters.semesterId" (change)="applyFilter()" [disabled]="!filters.schoolYearId" class="w-full text-sm bg-gray-50 border border-gray-300 rounded-xl px-3 py-2 outline-none focus:border-indigo-500 transition disabled:opacity-60">\r
        <option value="">-- T\u1EA5t c\u1EA3 --</option>\r
        <option *ngFor="let sem of semesters()" [value]="sem.id">{{ sem.name }}</option>\r
      </select>\r
    </div>\r
\r
    <div>\r
      <label class="block text-xs font-bold text-gray-700 mb-1.5">Gi\xE1o vi\xEAn d\u1EA1y thay</label>\r
      <select [(ngModel)]="filters.keyword" (change)="applyFilter()" class="w-full text-sm bg-gray-50 border border-gray-300 rounded-xl px-3 py-2 outline-none focus:border-indigo-500 transition">\r
        <option value="">-- T\u1EA5t c\u1EA3 GV trong t\u1ED5 --</option>\r
        <option *ngFor="let t of teachers()" [value]="t.fullName">{{ t.fullName }} ({{ t.teacherCode }})</option>\r
      </select>\r
    </div>\r
\r
    <div class="flex space-x-2">\r
      <button (click)="applyFilter()" class="px-4 py-2 text-sm font-bold text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 transition shadow-sm">\r
        L\u1ECDc\r
      </button>\r
      <button (click)="resetFilters()" class="px-4 py-2 text-sm font-bold text-gray-600 bg-gray-100 rounded-xl hover:bg-gray-200 transition">\r
        X\xF3a l\u1ECDc\r
      </button>\r
    </div>\r
\r
  </div>\r
\r
  <div *ngIf="isLoading()" class="py-20 text-center text-indigo-500">\r
    <svg class="animate-spin inline-block h-8 w-8" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>\r
  </div>\r
\r
  <div *ngIf="!isLoading()" class="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">\r
    <div class="overflow-x-auto">\r
      <table class="w-full text-left text-sm text-gray-600">\r
        <thead class="bg-gray-50/50 text-gray-700 font-bold border-b border-gray-100">\r
          <tr>\r
            <th class="px-5 py-4">Gi\xE1o vi\xEAn g\u1ED1c (Ngh\u1EC9)</th>\r
            <th class="px-5 py-4">L\u1EDBp - M\xF4n</th>\r
            <th class="px-5 py-4 text-indigo-700">Gi\xE1o vi\xEAn d\u1EA1y thay</th>\r
            <th class="px-5 py-4">Th\u1EDDi gian \xE1p d\u1EE5ng</th>\r
            <th class="px-5 py-4">Tr\u1EA1ng th\xE1i</th>\r
            <th class="px-5 py-4 text-center">Thao t\xE1c</th>\r
          </tr>\r
        </thead>\r
        <tbody class="divide-y divide-gray-100">\r
          <tr *ngIf="substitutions().length === 0">\r
            <td colspan="6" class="px-5 py-12 text-center text-gray-500">Ch\u01B0a c\xF3 l\u1ECBch d\u1EA1y thay n\xE0o trong t\u1ED5.</td>\r
          </tr>\r
          <tr *ngFor="let item of substitutions()" class="hover:bg-gray-50/50 transition">\r
            <td class="px-5 py-4">\r
              <div class="font-bold text-gray-900 line-through decoration-gray-400">{{ item.originalTeacherName }}</div>\r
            </td>\r
            <td class="px-5 py-4">\r
              <div class="font-bold text-gray-800">{{ item.physicalClassName }}</div>\r
              <div class="text-xs text-gray-500">{{ item.subjectName }}</div>\r
            </td>\r
            <td class="px-5 py-4">\r
              <div class="font-bold text-indigo-700">{{ item.subTeacherName }}</div>\r
              <div class="text-xs text-indigo-500">{{ item.subTeacherCode }}</div>\r
            </td>\r
            <td class="px-5 py-4 font-medium text-gray-800">\r
              {{ item.startDate | date:'dd/MM/yyyy' }} - {{ item.endDate | date:'dd/MM/yyyy' }}\r
            </td>\r
            <td class="px-5 py-4">\r
              <span *ngIf="item.status === 'approved'" class="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800">\u0110\xE3 duy\u1EC7t</span>\r
              <span *ngIf="item.status === 'cancelled'" class="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-red-100 text-red-800">\u0110\xE3 h\u1EE7y</span>\r
            </td>\r
            <td class="px-5 py-4 text-center">\r
              <button *ngIf="item.status === 'approved'" (click)="openCancelModal(item)" class="text-red-500 hover:text-red-700 font-bold text-xs p-2 hover:bg-red-50 rounded-lg transition">H\u1EE7y</button>\r
            </td>\r
          </tr>\r
        </tbody>\r
      </table>\r
    </div>\r
  </div>\r
\r
</div>\r
\r
<div *ngIf="isCreateModalOpen()" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm">\r
  <div class="bg-white rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col">\r
    \r
    <div class="p-5 border-b border-gray-100 bg-gray-50/50 flex items-center justify-between">\r
      <h3 class="font-bold text-indigo-700 text-lg">Ph\xE2n c\xF4ng Gi\xE1o vi\xEAn d\u1EA1y thay</h3>\r
      <button (click)="closeCreateModal()" class="text-gray-400 hover:text-gray-600 p-1.5 rounded-lg hover:bg-white transition"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button>\r
    </div>\r
\r
    <form [formGroup]="subForm" (ngSubmit)="submitSubstitution()" class="p-6 space-y-5">\r
      \r
      <div>\r
        <label class="block text-sm font-bold text-gray-700 mb-1.5">L\u1EDBp h\u1ECDc c\u1EA7n d\u1EA1y thay (Ph\xE2n c\xF4ng g\u1ED1c) <span class="text-red-500">*</span></label>\r
        <select formControlName="assignmentId" class="w-full text-sm font-medium bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-indigo-500 transition">\r
          <option value="">-- Ch\u1ECDn ph\xE2n c\xF4ng hi\u1EC7n t\u1EA1i --</option>\r
          <option *ngFor="let a of activeAssignments()" [value]="a.id">\r
            L\u1EDBp {{ a.physicalClassName }} - M\xF4n {{ a.subjectName }} (GV \u0111ang d\u1EA1y: {{ a.teacherName }})\r
          </option>\r
        </select>\r
        <p *ngIf="subForm.get('assignmentId')?.invalid && subForm.get('assignmentId')?.touched" class="text-xs text-red-500 mt-1">Vui l\xF2ng ch\u1ECDn ph\xE2n c\xF4ng</p>\r
      </div>\r
\r
      <div>\r
        <label class="block text-sm font-bold text-gray-700 mb-1.5">Ph\xE2n c\xF4ng cho Gi\xE1o vi\xEAn <span class="text-red-500">*</span></label>\r
        <select formControlName="subTeacherId" class="w-full text-sm font-bold text-indigo-900 bg-indigo-50 border border-indigo-200 rounded-xl px-4 py-3 outline-none focus:border-indigo-500 transition">\r
          <option value="">-- Ch\u1ECDn gi\xE1o vi\xEAn trong t\u1ED5 --</option>\r
          <option *ngFor="let t of teachers()" [value]="t.id">{{ t.fullName }} ({{ t.teacherCode }})</option>\r
        </select>\r
        <p *ngIf="subForm.get('subTeacherId')?.invalid && subForm.get('subTeacherId')?.touched" class="text-xs text-red-500 mt-1">Vui l\xF2ng ch\u1ECDn gi\xE1o vi\xEAn d\u1EA1y thay</p>\r
      </div>\r
\r
      <div class="grid grid-cols-2 gap-4">\r
        <div>\r
          <label class="block text-sm font-bold text-gray-700 mb-1.5">T\u1EEB ng\xE0y <span class="text-red-500">*</span></label>\r
          <input formControlName="startDate" type="date" class="w-full text-sm bg-gray-50 border border-gray-300 rounded-xl px-4 py-2.5 outline-none focus:border-indigo-500">\r
        </div>\r
        <div>\r
          <label class="block text-sm font-bold text-gray-700 mb-1.5">\u0110\u1EBFn ng\xE0y <span class="text-red-500">*</span></label>\r
          <input formControlName="endDate" type="date" class="w-full text-sm bg-gray-50 border border-gray-300 rounded-xl px-4 py-2.5 outline-none focus:border-indigo-500">\r
        </div>\r
      </div>\r
\r
      <div>\r
        <label class="block text-sm font-bold text-gray-700 mb-1.5">L\xFD do (T\xF9y ch\u1ECDn)</label>\r
        <input formControlName="reason" type="text" placeholder="VD: GV Nguy\u1EC5n V\u0103n A ngh\u1EC9 \u1ED1m..." class="w-full text-sm bg-gray-50 border border-gray-300 rounded-xl px-4 py-2.5 outline-none focus:border-indigo-500">\r
      </div>\r
\r
      <div class="flex justify-end pt-4 border-t border-gray-100">\r
        <button type="button" (click)="closeCreateModal()" class="px-5 py-2.5 mr-3 text-sm font-bold text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gray-100 transition">H\u1EE7y b\u1ECF</button>\r
        <button type="submit" [disabled]="subForm.invalid || isSubmitting()" class="flex items-center px-6 py-2.5 text-sm font-bold text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 disabled:bg-indigo-300 shadow-md transition">\r
          <svg *ngIf="isSubmitting()" class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>\r
          X\xE1c nh\u1EADn Ph\xE2n c\xF4ng\r
        </button>\r
      </div>\r
    </form>\r
  </div>\r
</div>\r
\r
<div *ngIf="isCancelModalOpen()" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm transition-opacity">\r
  <div class="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden transform transition-all animate-[fadeIn_0.2s_ease-out]">\r
    \r
    <div class="p-6 pt-8">\r
      <div class="flex items-center justify-center w-14 h-14 mx-auto bg-red-100 rounded-full mb-5 shadow-inner">\r
        <svg class="w-7 h-7 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>\r
      </div>\r
      <h3 class="text-xl font-extrabold text-center text-gray-900 mb-2">H\u1EE7y l\u1ECBch d\u1EA1y thay?</h3>\r
      <p class="text-sm text-center text-gray-500 leading-relaxed px-2">\r
        B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n h\u1EE7y l\u1ECBch d\u1EA1y thay c\u1EE7a gi\xE1o vi\xEAn \r
        <span class="font-bold text-gray-800">{{ subToCancel()?.subTeacherName }}</span> \r
        cho l\u1EDBp <span class="font-bold text-indigo-600">{{ subToCancel()?.physicalClassName }}</span> kh\xF4ng? L\u1ECBch n\xE0y s\u1EBD kh\xF4ng c\xF2n hi\u1EC7u l\u1EF1c n\u1EEFa.\r
      </p>\r
    </div>\r
\r
    <div class="px-6 py-4 bg-gray-50 flex justify-end space-x-3 border-t border-gray-100">\r
      <button (click)="closeCancelModal()" [disabled]="isCanceling()" class="px-5 py-2.5 text-sm font-bold text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gray-100 transition disabled:opacity-50 shadow-sm">\r
        Quay l\u1EA1i\r
      </button>\r
      <button (click)="confirmCancel()" [disabled]="isCanceling()" class="flex items-center px-5 py-2.5 text-sm font-bold text-white bg-red-600 border border-transparent rounded-xl hover:bg-red-700 transition disabled:opacity-50 shadow-md">\r
        <svg *ngIf="isCanceling()" class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>\r
        {{ isCanceling() ? '\u0110ang h\u1EE7y...' : 'X\xE1c nh\u1EADn h\u1EE7y' }}\r
      </button>\r
    </div>\r
    \r
  </div>\r
</div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DepartmentSubstitutionComponent, { className: "DepartmentSubstitutionComponent", filePath: "src/app/features/teacher/pages/teaching-substitution/department-substitution.component.ts", lineNumber: 15 });
})();

// src/app/features/teacher/services/teaching-assignment-history.service.ts
var TeachingAssignmentHistoryService = class _TeachingAssignmentHistoryService {
  http = inject(HttpClient);
  apiUrl = `${environment.apiUrl}/api/v1/teaching-assignment-history`;
  // Tìm kiếm lịch sử (Dùng cho màn hình Nhật ký chung)
  searchHistory(keyword = "", actionType = "", page = 1, size = 15) {
    let params = new HttpParams().set("page", page.toString()).set("size", size.toString());
    if (keyword) {
      params = params.set("keyword", keyword);
    }
    if (actionType)
      params = params.set("actionType", actionType);
    return this.http.get(this.apiUrl, { params });
  }
  // Lấy lịch sử theo ID phân công (Tùy chọn dùng sau này)
  getByAssignment(assignmentId) {
    return this.http.get(`${this.apiUrl}/assignment/${assignmentId}`);
  }
  static \u0275fac = function TeachingAssignmentHistoryService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TeachingAssignmentHistoryService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TeachingAssignmentHistoryService, factory: _TeachingAssignmentHistoryService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TeachingAssignmentHistoryService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/features/teacher/pages/assignment-history/assignment-history.component.ts
function AssignmentHistoryComponent_option_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const act_r1 = ctx.$implicit;
    \u0275\u0275property("value", act_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(act_r1.name);
  }
}
function AssignmentHistoryComponent_tr_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 24);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 25);
    \u0275\u0275element(3, "circle", 26)(4, "path", 27);
    \u0275\u0275elementEnd()()();
  }
}
function AssignmentHistoryComponent_tr_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 28);
    \u0275\u0275text(2, "Kh\xF4ng t\xECm th\u1EA5y d\u1EEF li\u1EC7u l\u1ECBch s\u1EED n\xE0o.");
    \u0275\u0275elementEnd()();
  }
}
function AssignmentHistoryComponent_tr_35_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "span", 43);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 44);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const log_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(log_r2.oldTeacherName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("M\xE3: ", log_r2.oldTeacherCode);
  }
}
function AssignmentHistoryComponent_tr_35_span_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 45);
    \u0275\u0275text(1, "-- (Tr\u1ED1ng) --");
    \u0275\u0275elementEnd();
  }
}
function AssignmentHistoryComponent_tr_35_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "span", 30);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 46);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const log_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(log_r2.newTeacherName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("M\xE3: ", log_r2.newTeacherCode);
  }
}
function AssignmentHistoryComponent_tr_35_span_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 45);
    \u0275\u0275text(1, "-- (Tr\u1ED1ng) --");
    \u0275\u0275elementEnd();
  }
}
function AssignmentHistoryComponent_tr_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 29)(1, "td", 18)(2, "div", 30);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 31);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td", 18)(9, "div", 32);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 33);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td", 18)(14, "span");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td", 18)(17, "div", 34)(18, "div", 35);
    \u0275\u0275template(19, AssignmentHistoryComponent_tr_35_div_19_Template, 5, 2, "div", 36)(20, AssignmentHistoryComponent_tr_35_span_20_Template, 2, 0, "span", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 38);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(22, "svg", 39);
    \u0275\u0275element(23, "path", 40);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(24, "div", 35);
    \u0275\u0275template(25, AssignmentHistoryComponent_tr_35_div_25_Template, 5, 2, "div", 36)(26, AssignmentHistoryComponent_tr_35_span_26_Template, 2, 0, "span", 37);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "td", 18)(28, "span", 41);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const log_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(4, 12, log_r2.changedAt, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 15, log_r2.changedAt, "HH:mm:ss"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("L\u1EDBp ", log_r2.physicalClassName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("M\xF4n ", log_r2.subjectName);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wide " + ctx_r2.getActionUI(log_r2.actionType).colorClass);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getActionUI(log_r2.actionType).label, " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", log_r2.oldTeacherName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !log_r2.oldTeacherName);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", log_r2.newTeacherName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !log_r2.newTeacherName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", log_r2.changedBy || "SYSTEM", " ");
  }
}
function AssignmentHistoryComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 47)(1, "div", 48)(2, "span", 49);
    \u0275\u0275text(3, "Hi\u1EC3n th\u1ECB:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "select", 50);
    \u0275\u0275twoWayListener("ngModelChange", function AssignmentHistoryComponent_div_36_Template_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.pageSize, $event) || (ctx_r2.pageSize = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function AssignmentHistoryComponent_div_36_Template_select_ngModelChange_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onPageSizeChange());
    });
    \u0275\u0275elementStart(5, "option", 51);
    \u0275\u0275text(6, "15 d\xF2ng");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "option", 51);
    \u0275\u0275text(8, "30 d\xF2ng");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "option", 51);
    \u0275\u0275text(10, "50 d\xF2ng");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "option", 51);
    \u0275\u0275text(12, "100 d\xF2ng");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "span", 52);
    \u0275\u0275text(14, "T\u1ED5ng s\u1ED1: ");
    \u0275\u0275elementStart(15, "span", 30);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275text(17, " b\u1EA3n ghi");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 53)(19, "button", 54);
    \u0275\u0275listener("click", function AssignmentHistoryComponent_div_36_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.changePage(ctx_r2.currentPage() - 1));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(20, "svg", 55);
    \u0275\u0275element(21, "path", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275text(22, " Tr\u01B0\u1EDBc ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(23, "div", 57);
    \u0275\u0275text(24);
    \u0275\u0275elementStart(25, "span", 58);
    \u0275\u0275text(26, "/");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 54);
    \u0275\u0275listener("click", function AssignmentHistoryComponent_div_36_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.changePage(ctx_r2.currentPage() + 1));
    });
    \u0275\u0275text(29, " Sau ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(30, "svg", 59);
    \u0275\u0275element(31, "path", 60);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.pageSize);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", 15);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngValue", 30);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngValue", 50);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngValue", 100);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.totalElements());
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r2.currentPage() === 1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.currentPage(), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.totalPages(), " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.currentPage() === ctx_r2.totalPages());
  }
}
var AssignmentHistoryComponent = class _AssignmentHistoryComponent {
  historyService = inject(TeachingAssignmentHistoryService);
  toastService = inject(ToastService);
  historyLogs = signal([], ...ngDevMode ? [{ debugName: "historyLogs" }] : (
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
  totalElements = signal(0, ...ngDevMode ? [{ debugName: "totalElements" }] : (
    /* istanbul ignore next */
    []
  ));
  // Thêm tổng số bản ghi để hiển thị cho đẹp
  pageSize = signal(15, ...ngDevMode ? [{ debugName: "pageSize" }] : (
    /* istanbul ignore next */
    []
  ));
  filters = {
    keyword: "",
    actionType: ""
  };
  actionTypes = [
    { id: "ASSIGNED", name: "Ph\xE2n c\xF4ng m\u1EDBi" },
    { id: "REPLACED", name: "\u0110\u1ED5i gi\xE1o vi\xEAn" },
    { id: "UNASSIGNED", name: "H\u1EE7y ph\xE2n c\xF4ng" },
    { id: "SUBSTITUTED", name: "D\u1EA1y thay" }
  ];
  // Debounce tìm kiếm
  searchTimeout;
  ngOnInit() {
    this.loadHistory();
  }
  loadHistory() {
    this.isLoading.set(true);
    this.historyService.searchHistory(this.filters.keyword, this.filters.actionType, this.currentPage(), this.pageSize()).subscribe({
      next: (res) => {
        this.historyLogs.set(res.content || []);
        this.totalPages.set(res.totalPages || 1);
        this.totalElements.set(res.totalElements || 0);
        this.isLoading.set(false);
      },
      error: () => {
        this.toastService.error("L\u1ED7i", "Kh\xF4ng th\u1EC3 t\u1EA3i l\u1ECBch s\u1EED ph\xE2n c\xF4ng.");
        this.isLoading.set(false);
      }
    });
  }
  onSearchChange(value) {
    this.filters.keyword = value;
    if (this.searchTimeout)
      clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(() => {
      this.currentPage.set(1);
      this.loadHistory();
    }, 500);
  }
  onFilterChange() {
    this.currentPage.set(1);
    this.loadHistory();
  }
  onPageSizeChange() {
    this.currentPage.set(1);
    this.loadHistory();
  }
  changePage(page) {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage.set(page);
      this.loadHistory();
    }
  }
  // Hàm chuyển đổi Action Type sang UI hiển thị
  getActionUI(actionType) {
    switch (actionType) {
      case "ASSIGNED":
        return { label: "Ph\xE2n c\xF4ng m\u1EDBi", colorClass: "bg-emerald-100 text-emerald-800" };
      case "REPLACED":
        return { label: "\u0110\u1ED5i gi\xE1o vi\xEAn", colorClass: "bg-blue-100 text-blue-800" };
      case "UNASSIGNED":
        return { label: "H\u1EE7y ph\xE2n c\xF4ng", colorClass: "bg-red-100 text-red-800" };
      case "SUBSTITUTED":
        return { label: "D\u1EA1y thay", colorClass: "bg-amber-100 text-amber-800" };
      default:
        return { label: "Kh\xE1c", colorClass: "bg-gray-100 text-gray-800" };
    }
  }
  static \u0275fac = function AssignmentHistoryComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AssignmentHistoryComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssignmentHistoryComponent, selectors: [["app-assignment-history"]], decls: 37, vars: 7, consts: [[1, "max-w-7xl", "mx-auto", "space-y-6"], [1, "flex", "flex-col", "md:flex-row", "justify-between", "items-start", "md:items-end", "gap-4"], [1, "text-2xl", "font-extrabold", "text-gray-900", "tracking-tight"], [1, "text-sm", "text-gray-500", "mt-1"], [1, "flex", "flex-col", "sm:flex-row", "gap-3", "w-full", "md:w-auto"], [1, "w-full", "sm:w-48", "text-sm", "bg-white", "border", "border-gray-300", "rounded-xl", "px-4", "py-2.5", "outline-none", "focus:ring-2", "focus:ring-indigo-100", "focus:border-indigo-500", "shadow-sm", "transition", "font-medium", "text-gray-700", 3, "ngModelChange", "change", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "w-full", "sm:w-72", "relative"], [1, "absolute", "inset-y-0", "left-0", "pl-3", "flex", "items-center", "pointer-events-none"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-5", "w-5", "text-gray-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], ["type", "text", "placeholder", "T\xECm t\xEAn l\u1EDBp, m\xF4n, gi\xE1o vi\xEAn...", 1, "w-full", "pl-10", "pr-4", "py-2.5", "text-sm", "bg-white", "border", "border-gray-300", "rounded-xl", "focus:ring-2", "focus:ring-indigo-100", "focus:border-indigo-500", "outline-none", "transition", "shadow-sm", 3, "ngModelChange", "ngModel"], [1, "bg-white", "rounded-2xl", "shadow-sm", "border", "border-gray-200", "overflow-hidden"], [1, "overflow-x-auto"], [1, "w-full", "text-left", "text-sm", "text-gray-600"], [1, "bg-gray-50/80", "text-gray-700", "font-bold", "border-b", "border-gray-100", "uppercase", "text-[11px]", "tracking-wider"], [1, "px-5", "py-4", "w-40"], [1, "px-5", "py-4"], [1, "divide-y", "divide-gray-100"], [4, "ngIf"], ["class", "hover:bg-gray-50/50 transition", 4, "ngFor", "ngForOf"], ["class", "px-5 py-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between bg-gray-50/50 gap-4", 4, "ngIf"], [3, "value"], ["colspan", "5", 1, "px-5", "py-12", "text-center", "text-indigo-500"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "inline-block", "h-8", "w-8"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"], ["colspan", "5", 1, "px-5", "py-12", "text-center", "text-gray-500", "font-medium"], [1, "hover:bg-gray-50/50", "transition"], [1, "font-bold", "text-gray-900"], [1, "text-xs", "text-gray-500"], [1, "font-bold", "text-indigo-700"], [1, "text-xs", "font-semibold", "text-gray-600"], [1, "flex", "items-center", "space-x-3", "text-sm"], [1, "flex", "flex-col", "min-w[120px]"], ["class", "flex flex-col", 4, "ngIf"], ["class", "text-gray-400 italic text-xs", 4, "ngIf"], [1, "text-gray-300"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M14 5l7 7m0 0l-7 7m7-7H3"], [1, "px-2.5", "py-1", "bg-gray-100", "text-gray-600", "rounded-lg", "text-xs", "font-bold", "border", "border-gray-200"], [1, "flex", "flex-col"], [1, "font-semibold", "text-gray-600", "line-through", "decoration-gray-400"], [1, "text-[11px]", "text-gray-400", "font-medium"], [1, "text-gray-400", "italic", "text-xs"], [1, "text-[11px]", "text-indigo-600", "font-bold"], [1, "px-5", "py-4", "border-t", "border-gray-100", "flex", "flex-col", "sm:flex-row", "items-center", "justify-between", "bg-gray-50/50", "gap-4"], [1, "flex", "items-center", "text-sm", "text-gray-500"], [1, "mr-3"], [1, "bg-white", "border", "border-gray-300", "rounded-lg", "px-2", "py-1", "outline-none", "focus:border-indigo-500", "font-medium", "text-gray-700", "shadow-sm", "transition", 3, "ngModelChange", "ngModel"], [3, "ngValue"], [1, "ml-4"], [1, "flex", "space-x-2"], [1, "px-4", "py-1.5", "text-sm", "font-medium", "text-gray-700", "bg-white", "border", "border-gray-300", "rounded-lg", "hover:bg-gray-50", "disabled:opacity-50", "disabled:hover:bg-white", "shadow-sm", "transition", "flex", "items-center", 3, "click", "disabled"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "mr-1"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 19l-7-7 7-7"], [1, "px-4", "py-1.5", "text-sm", "font-bold", "text-gray-900", "bg-white", "border", "border-gray-200", "shadow-sm", "rounded-lg", "flex", "items-center"], [1, "text-gray-400", "mx-1"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "ml-1"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 5l7 7-7 7"]], template: function AssignmentHistoryComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Nh\u1EADt k\xFD Ph\xE2n c\xF4ng gi\u1EA3ng d\u1EA1y");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Theo d\xF5i to\xE0n b\u1ED9 l\u1ECBch s\u1EED bi\u1EBFn \u0111\u1ED9ng ph\xE2n c\xF4ng gi\xE1o vi\xEAn trong h\u1EC7 th\u1ED1ng");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 4)(8, "select", 5);
      \u0275\u0275twoWayListener("ngModelChange", function AssignmentHistoryComponent_Template_select_ngModelChange_8_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filters.actionType, $event) || (ctx.filters.actionType = $event);
        return $event;
      });
      \u0275\u0275listener("change", function AssignmentHistoryComponent_Template_select_change_8_listener() {
        return ctx.onFilterChange();
      });
      \u0275\u0275elementStart(9, "option", 6);
      \u0275\u0275text(10, "-- T\u1EA5t c\u1EA3 h\xE0nh \u0111\u1ED9ng --");
      \u0275\u0275elementEnd();
      \u0275\u0275template(11, AssignmentHistoryComponent_option_11_Template, 2, 2, "option", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 8)(13, "div", 9);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(14, "svg", 10);
      \u0275\u0275element(15, "path", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(16, "input", 12);
      \u0275\u0275listener("ngModelChange", function AssignmentHistoryComponent_Template_input_ngModelChange_16_listener($event) {
        return ctx.onSearchChange($event);
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(17, "div", 13)(18, "div", 14)(19, "table", 15)(20, "thead", 16)(21, "tr")(22, "th", 17);
      \u0275\u0275text(23, "Th\u1EDDi gian");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "th", 18);
      \u0275\u0275text(25, "L\u1EDBp - M\xF4n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "th", 18);
      \u0275\u0275text(27, "H\xE0nh \u0111\u1ED9ng");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "th", 18);
      \u0275\u0275text(29, "Chi ti\u1EBFt thay \u0111\u1ED5i (GV C\u0169 \u2794 GV M\u1EDBi)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "th", 18);
      \u0275\u0275text(31, "Ng\u01B0\u1EDDi th\u1EF1c hi\u1EC7n");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(32, "tbody", 19);
      \u0275\u0275template(33, AssignmentHistoryComponent_tr_33_Template, 5, 0, "tr", 20)(34, AssignmentHistoryComponent_tr_34_Template, 3, 0, "tr", 20)(35, AssignmentHistoryComponent_tr_35_Template, 30, 18, "tr", 21);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(36, AssignmentHistoryComponent_div_36_Template, 32, 10, "div", 22);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275twoWayProperty("ngModel", ctx.filters.actionType);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.actionTypes);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngModel", ctx.filters.keyword);
      \u0275\u0275advance(17);
      \u0275\u0275property("ngIf", ctx.isLoading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading() && ctx.historyLogs().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.historyLogs());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading() && ctx.historyLogs().length > 0);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssignmentHistoryComponent, [{
    type: Component,
    args: [{ selector: "app-assignment-history", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="max-w-7xl mx-auto space-y-6">\r
  \r
  <div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">\r
    <div>\r
      <h1 class="text-2xl font-extrabold text-gray-900 tracking-tight">Nh\u1EADt k\xFD Ph\xE2n c\xF4ng gi\u1EA3ng d\u1EA1y</h1>\r
      <p class="text-sm text-gray-500 mt-1">Theo d\xF5i to\xE0n b\u1ED9 l\u1ECBch s\u1EED bi\u1EBFn \u0111\u1ED9ng ph\xE2n c\xF4ng gi\xE1o vi\xEAn trong h\u1EC7 th\u1ED1ng</p>\r
    </div>\r
\r
    <div class="flex flex-col sm:flex-row gap-3 w-full md:w-auto">\r
      \r
      <select [(ngModel)]="filters.actionType" (change)="onFilterChange()" class="w-full sm:w-48 text-sm bg-white border border-gray-300 rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500 shadow-sm transition font-medium text-gray-700">\r
        <option value="">-- T\u1EA5t c\u1EA3 h\xE0nh \u0111\u1ED9ng --</option>\r
        <option *ngFor="let act of actionTypes" [value]="act.id">{{ act.name }}</option>\r
      </select>\r
\r
      <div class="w-full sm:w-72 relative">\r
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">\r
          <svg class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>\r
        </div>\r
        <input [ngModel]="filters.keyword" (ngModelChange)="onSearchChange($event)" type="text" placeholder="T\xECm t\xEAn l\u1EDBp, m\xF4n, gi\xE1o vi\xEAn..." class="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500 outline-none transition shadow-sm">\r
      </div>\r
      \r
    </div>\r
  </div>\r
\r
  <div class="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">\r
    <div class="overflow-x-auto">\r
      <table class="w-full text-left text-sm text-gray-600">\r
        <thead class="bg-gray-50/80 text-gray-700 font-bold border-b border-gray-100 uppercase text-[11px] tracking-wider">\r
          <tr>\r
            <th class="px-5 py-4 w-40">Th\u1EDDi gian</th>\r
            <th class="px-5 py-4">L\u1EDBp - M\xF4n</th>\r
            <th class="px-5 py-4">H\xE0nh \u0111\u1ED9ng</th>\r
            <th class="px-5 py-4">Chi ti\u1EBFt thay \u0111\u1ED5i (GV C\u0169 \u2794 GV M\u1EDBi)</th>\r
            <th class="px-5 py-4">Ng\u01B0\u1EDDi th\u1EF1c hi\u1EC7n</th>\r
          </tr>\r
        </thead>\r
        <tbody class="divide-y divide-gray-100">\r
          \r
          <tr *ngIf="isLoading()">\r
            <td colspan="5" class="px-5 py-12 text-center text-indigo-500">\r
              <svg class="animate-spin inline-block h-8 w-8" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>\r
            </td>\r
          </tr>\r
\r
          <tr *ngIf="!isLoading() && historyLogs().length === 0">\r
            <td colspan="5" class="px-5 py-12 text-center text-gray-500 font-medium">Kh\xF4ng t\xECm th\u1EA5y d\u1EEF li\u1EC7u l\u1ECBch s\u1EED n\xE0o.</td>\r
          </tr>\r
\r
          <tr *ngFor="let log of historyLogs()" class="hover:bg-gray-50/50 transition">\r
            <td class="px-5 py-4">\r
              <div class="font-bold text-gray-900">{{ log.changedAt | date:'dd/MM/yyyy' }}</div>\r
              <div class="text-xs text-gray-500">{{ log.changedAt | date:'HH:mm:ss' }}</div>\r
            </td>\r
            \r
            <td class="px-5 py-4">\r
              <div class="font-bold text-indigo-700">L\u1EDBp {{ log.physicalClassName }}</div>\r
              <div class="text-xs font-semibold text-gray-600">M\xF4n {{ log.subjectName }}</div>\r
            </td>\r
\r
            <td class="px-5 py-4">\r
              <span [class]="'inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wide ' + getActionUI(log.actionType).colorClass">\r
                {{ getActionUI(log.actionType).label }}\r
              </span>\r
            </td>\r
\r
            <td class="px-5 py-4">\r
              <div class="flex items-center space-x-3 text-sm">\r
                <div class="flex flex-col min-w[120px]">\r
                  <div *ngIf="log.oldTeacherName" class="flex flex-col">\r
                    <span class="font-semibold text-gray-600 line-through decoration-gray-400">{{ log.oldTeacherName }}</span>\r
                    <span class="text-[11px] text-gray-400 font-medium">M\xE3: {{ log.oldTeacherCode }}</span>\r
                  </div>\r
                  <span *ngIf="!log.oldTeacherName" class="text-gray-400 italic text-xs">-- (Tr\u1ED1ng) --</span>\r
                </div>\r
\r
                <div class="text-gray-300">\r
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>\r
                </div>\r
\r
                <div class="flex flex-col min-w[120px]">\r
                  <div *ngIf="log.newTeacherName" class="flex flex-col">\r
                    <span class="font-bold text-gray-900">{{ log.newTeacherName }}</span>\r
                    <span class="text-[11px] text-indigo-600 font-bold">M\xE3: {{ log.newTeacherCode }}</span>\r
                  </div>\r
                  <span *ngIf="!log.newTeacherName" class="text-gray-400 italic text-xs">-- (Tr\u1ED1ng) --</span>\r
                </div>\r
              </div>\r
            </td>\r
\r
            <td class="px-5 py-4">\r
              <span class="px-2.5 py-1 bg-gray-100 text-gray-600 rounded-lg text-xs font-bold border border-gray-200">\r
                {{ log.changedBy || 'SYSTEM' }}\r
              </span>\r
            </td>\r
          </tr>\r
        </tbody>\r
      </table>\r
    </div>\r
\r
    <div *ngIf="!isLoading() && historyLogs().length > 0" class="px-5 py-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between bg-gray-50/50 gap-4">\r
      \r
      <div class="flex items-center text-sm text-gray-500">\r
        <span class="mr-3">Hi\u1EC3n th\u1ECB:</span>\r
        <select [(ngModel)]="pageSize" (ngModelChange)="onPageSizeChange()" class="bg-white border border-gray-300 rounded-lg px-2 py-1 outline-none focus:border-indigo-500 font-medium text-gray-700 shadow-sm transition">\r
          <option [ngValue]="15">15 d\xF2ng</option>\r
          <option [ngValue]="30">30 d\xF2ng</option>\r
          <option [ngValue]="50">50 d\xF2ng</option>\r
          <option [ngValue]="100">100 d\xF2ng</option>\r
        </select>\r
        <span class="ml-4">T\u1ED5ng s\u1ED1: <span class="font-bold text-gray-900">{{ totalElements() }}</span> b\u1EA3n ghi</span>\r
      </div>\r
\r
      <div class="flex space-x-2">\r
        <button (click)="changePage(currentPage() - 1)" [disabled]="currentPage() === 1" class="px-4 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:hover:bg-white shadow-sm transition flex items-center">\r
          <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>\r
          Tr\u01B0\u1EDBc\r
        </button>\r
        \r
        <div class="px-4 py-1.5 text-sm font-bold text-gray-900 bg-white border border-gray-200 shadow-sm rounded-lg flex items-center">\r
          {{ currentPage() }} <span class="text-gray-400 mx-1">/</span> {{ totalPages() }}\r
        </div>\r
        \r
        <button (click)="changePage(currentPage() + 1)" [disabled]="currentPage() === totalPages()" class="px-4 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:hover:bg-white shadow-sm transition flex items-center">\r
          Sau\r
          <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>\r
        </button>\r
      </div>\r
\r
    </div>\r
  </div>\r
\r
</div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssignmentHistoryComponent, { className: "AssignmentHistoryComponent", filePath: "src/app/features/teacher/pages/assignment-history/assignment-history.component.ts", lineNumber: 13 });
})();

// src/app/features/teacher/services/attendance.service.ts
var AttendanceService = class _AttendanceService {
  http = inject(HttpClient);
  apiUrl = `${environment.apiUrl}/api/v1/attendances`;
  getAttendanceSheet(scheduleId, dateStr) {
    return this.http.get(`${this.apiUrl}/schedule/${scheduleId}/date/${dateStr}`);
  }
  batchMarkAttendance(scheduleId, dateStr, sheet) {
    return this.http.put(`${this.apiUrl}/schedule/${scheduleId}/date/${dateStr}/batch`, sheet);
  }
  static \u0275fac = function AttendanceService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AttendanceService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AttendanceService, factory: _AttendanceService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AttendanceService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/features/teacher/pages/schedule/teacher-schedule.component.ts
function TeacherScheduleComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 19);
    \u0275\u0275element(2, "circle", 20)(3, "path", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "p", 22);
    \u0275\u0275text(5, "\u0110ang t\u1EA3i l\u1ECBch d\u1EA1y h\u1ECDc...");
    \u0275\u0275elementEnd()();
  }
}
function TeacherScheduleComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 24);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 25);
    \u0275\u0275element(3, "path", 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "h3", 26);
    \u0275\u0275text(5, "Kh\xF4ng C\xF3 L\u1ECBch D\u1EA1y H\u1ECDc Trong Tu\u1EA7n N\xE0y");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 27);
    \u0275\u0275text(7, " Kh\xF4ng t\xECm th\u1EA5y ca gi\u1EA3ng d\u1EA1y n\xE0o t\u1EEB ng\xE0y ");
    \u0275\u0275elementStart(8, "strong");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " \u0111\u1EBFn ");
    \u0275\u0275elementStart(12, "strong");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, ". ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 28)(17, "button", 29);
    \u0275\u0275listener("click", function TeacherScheduleComponent_div_25_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.prevWeek());
    });
    \u0275\u0275text(18, " \u2190 Xem tu\u1EA7n tr\u01B0\u1EDBc ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 30);
    \u0275\u0275listener("click", function TeacherScheduleComponent_div_25_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.nextWeek());
    });
    \u0275\u0275text(20, " Xem tu\u1EA7n sau \u2192 ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 2, ctx_r1.startDateStr(), "dd/MM/yyyy"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(14, 5, ctx_r1.endDateStr(), "dd/MM/yyyy"));
  }
}
function TeacherScheduleComponent_div_26_th_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 39)(1, "div", 40)(2, "span", 41);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 42);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const col_r3 = ctx.$implicit;
    \u0275\u0275property("ngClass", col_r3.isToday ? "bg-indigo-50/70 border-b-2 border-b-indigo-600" : "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", col_r3.isToday ? "text-indigo-700 font-extrabold" : "text-gray-700 font-bold");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", col_r3.dayOfWeekName, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", col_r3.isToday ? "bg-indigo-600 text-white font-extrabold shadow-2xs" : "bg-gray-200/80 text-gray-600 font-semibold");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", col_r3.dayNum, "/", col_r3.monthNum, " ");
  }
}
function TeacherScheduleComponent_div_26_tr_9_td_7_ng_container_2_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 63);
    \u0275\u0275text(1, " D\u1EA1y thay ");
    \u0275\u0275elementEnd();
  }
}
function TeacherScheduleComponent_div_26_tr_9_td_7_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 53);
    \u0275\u0275listener("click", function TeacherScheduleComponent_div_26_tr_9_td_7_ng_container_2_Template_div_click_1_listener($event) {
      const ev_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.openSessionDetail(ev_r5, $event));
    });
    \u0275\u0275element(2, "div", 54);
    \u0275\u0275elementStart(3, "div", 55)(4, "div", 56)(5, "span", 57);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, TeacherScheduleComponent_div_26_tr_9_td_7_ng_container_2_span_7_Template, 2, 0, "span", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "h4", 59);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 60)(11, "span", 61);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 62);
    \u0275\u0275text(14, " \u{1F4CB} \u0110i\u1EC3m danh ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ev_r5 = ctx.$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ev_r5.classCode, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ev_r5.isSubstituted);
    \u0275\u0275advance();
    \u0275\u0275property("title", ev_r5.className);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ev_r5.className, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" \u{1F4CD} ", ev_r5.roomName || "Ph\xF2ng h\u1ECDc", " ");
  }
}
function TeacherScheduleComponent_div_26_tr_9_td_7_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64)(1, "span", 65);
    \u0275\u0275text(2, "-");
    \u0275\u0275elementEnd()();
  }
}
function TeacherScheduleComponent_div_26_tr_9_td_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 49)(1, "div", 50);
    \u0275\u0275template(2, TeacherScheduleComponent_div_26_tr_9_td_7_ng_container_2_Template, 15, 5, "ng-container", 51)(3, TeacherScheduleComponent_div_26_tr_9_td_7_div_3_Template, 3, 0, "div", 52);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const col_r6 = ctx.$implicit;
    const slot_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", col_r6.isToday ? "bg-indigo-50/20" : "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.getEventsForCell(col_r6.dateStr, slot_r7));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getEventsForCell(col_r6.dateStr, slot_r7).length === 0);
  }
}
function TeacherScheduleComponent_div_26_tr_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 43)(1, "td", 44)(2, "div", 45)(3, "span", 46);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 47);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(7, TeacherScheduleComponent_div_26_tr_9_td_7_Template, 4, 3, "td", 48);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const slot_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", slot_r7.bgBadge);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u23F0 ", slot_r7.periodLabel, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(slot_r7.shortTimeLabel);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.weekDays());
  }
}
function TeacherScheduleComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "div", 32)(2, "table", 33)(3, "thead")(4, "tr", 34)(5, "th", 35);
    \u0275\u0275text(6, " Khung Gi\u1EDD D\u1EA1y ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, TeacherScheduleComponent_div_26_th_7_Template, 6, 6, "th", 36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "tbody", 37);
    \u0275\u0275template(9, TeacherScheduleComponent_div_26_tr_9_Template, 8, 4, "tr", 38);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r1.weekDays());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.dynamicTimeSlots());
  }
}
function TeacherScheduleComponent_div_27_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 110);
    \u0275\u0275text(1, "(Ca d\u1EA1y thay)");
    \u0275\u0275elementEnd();
  }
}
function TeacherScheduleComponent_div_27_div_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 111);
    \u0275\u0275text(1, " \u0110ang t\u1EA3i danh s\xE1ch h\u1ECDc vi\xEAn... ");
    \u0275\u0275elementEnd();
  }
}
function TeacherScheduleComponent_div_27_div_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 112);
    \u0275\u0275text(1, " Kh\xF4ng t\xECm th\u1EA5y h\u1ECDc vi\xEAn n\xE0o. ");
    \u0275\u0275elementEnd();
  }
}
function TeacherScheduleComponent_div_27_div_67_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 116)(1, "div", 2)(2, "span", 117);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "h5", 87);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 86);
    \u0275\u0275text(8, "M\xE3: ");
    \u0275\u0275elementStart(9, "span", 118);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(11, "div", 119)(12, "button", 120);
    \u0275\u0275listener("click", function TeacherScheduleComponent_div_27_div_67_div_2_Template_button_click_12_listener() {
      const item_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setStudentStatus(item_r10.studentId, "PRESENT"));
    });
    \u0275\u0275text(13, " C\xF3 m\u1EB7t ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 120);
    \u0275\u0275listener("click", function TeacherScheduleComponent_div_27_div_67_div_2_Template_button_click_14_listener() {
      const item_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setStudentStatus(item_r10.studentId, "ABSENT"));
    });
    \u0275\u0275text(15, " V\u1EAFng m\u1EB7t ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 120);
    \u0275\u0275listener("click", function TeacherScheduleComponent_div_27_div_67_div_2_Template_button_click_16_listener() {
      const item_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setStudentStatus(item_r10.studentId, "LATE"));
    });
    \u0275\u0275text(17, " \u0110i mu\u1ED9n ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 120);
    \u0275\u0275listener("click", function TeacherScheduleComponent_div_27_div_67_div_2_Template_button_click_18_listener() {
      const item_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setStudentStatus(item_r10.studentId, "EXCUSED"));
    });
    \u0275\u0275text(19, " C\xF3 l\xFD do ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const idx_r11 = ctx.index;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(idx_r11 + 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r10.studentName);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(item_r10.studentCode);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", item_r10.status === "PRESENT" ? "bg-emerald-600 text-white font-bold" : "bg-gray-100 text-gray-600 hover:bg-gray-200");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", item_r10.status === "ABSENT" ? "bg-red-600 text-white font-bold" : "bg-gray-100 text-gray-600 hover:bg-gray-200");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", item_r10.status === "LATE" ? "bg-amber-500 text-white font-bold" : "bg-gray-100 text-gray-600 hover:bg-gray-200");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", item_r10.status === "EXCUSED" ? "bg-blue-600 text-white font-bold" : "bg-gray-100 text-gray-600 hover:bg-gray-200");
  }
}
function TeacherScheduleComponent_div_27_div_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 113)(1, "div", 114);
    \u0275\u0275template(2, TeacherScheduleComponent_div_27_div_67_div_2_Template, 20, 7, "div", 115);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.filteredAttendanceSheet());
  }
}
function TeacherScheduleComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 66)(1, "div", 67);
    \u0275\u0275listener("click", function TeacherScheduleComponent_div_27_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAttendanceModal());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 68)(3, "div", 69)(4, "div")(5, "div", 70)(6, "h2", 71);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 72);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "p", 73);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "date");
    \u0275\u0275template(13, TeacherScheduleComponent_div_27_span_13_Template, 2, 0, "span", 74);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "button", 75);
    \u0275\u0275listener("click", function TeacherScheduleComponent_div_27_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAttendanceModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(15, "svg", 4);
    \u0275\u0275element(16, "path", 76);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(17, "div", 77)(18, "div", 78)(19, "div")(20, "p", 79);
    \u0275\u0275text(21, "Gi\u1EA3ng vi\xEAn ph\u1EE5 tr\xE1ch");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 80)(23, "h4", 81);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 82);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 83);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div", 84)(30, "div", 85)(31, "p", 86);
    \u0275\u0275text(32, "Ph\xF2ng h\u1ECDc");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "p", 87);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "button", 88);
    \u0275\u0275listener("click", function TeacherScheduleComponent_div_27_Template_button_click_35_listener() {
      let tmp_2_0;
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.navigateToClass((tmp_2_0 = ctx_r1.selectedSession()) == null ? null : tmp_2_0.classId));
    });
    \u0275\u0275text(36, " \u0110\u1EBFn L\u1EDBp H\u1ECDc \u2192 ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "div")(38, "div", 89)(39, "div")(40, "h3", 90)(41, "span");
    \u0275\u0275text(42, "Danh s\xE1ch h\u1ECDc vi\xEAn \u0111i\u1EC3m danh");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "span", 91);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(45, "div", 70)(46, "button", 92);
    \u0275\u0275listener("click", function TeacherScheduleComponent_div_27_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setAllStatus("PRESENT"));
    });
    \u0275\u0275text(47, " T\u1EA5t c\u1EA3 C\xF3 m\u1EB7t ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "button", 93);
    \u0275\u0275listener("click", function TeacherScheduleComponent_div_27_Template_button_click_48_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setAllStatus("ABSENT"));
    });
    \u0275\u0275text(49, " T\u1EA5t c\u1EA3 V\u1EAFng m\u1EB7t ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(50, "div", 94)(51, "span", 95);
    \u0275\u0275text(52, "Th\u1ED1ng k\xEA:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "span", 96);
    \u0275\u0275text(54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "span", 97);
    \u0275\u0275text(56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "span", 98);
    \u0275\u0275text(58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "span", 99);
    \u0275\u0275text(60);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "div", 100);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(62, "svg", 101);
    \u0275\u0275element(63, "path", 102);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(64, "input", 103);
    \u0275\u0275twoWayListener("ngModelChange", function TeacherScheduleComponent_div_27_Template_input_ngModelChange_64_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.studentFilterQuery, $event) || (ctx_r1.studentFilterQuery = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(65, TeacherScheduleComponent_div_27_div_65_Template, 2, 0, "div", 104)(66, TeacherScheduleComponent_div_27_div_66_Template, 2, 0, "div", 105)(67, TeacherScheduleComponent_div_27_div_67_Template, 3, 1, "div", 106);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(68, "div", 107)(69, "button", 108);
    \u0275\u0275listener("click", function TeacherScheduleComponent_div_27_Template_button_click_69_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAttendanceModal());
    });
    \u0275\u0275text(70, " H\u1EE7y / \u0110\xF3ng ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "button", 109);
    \u0275\u0275listener("click", function TeacherScheduleComponent_div_27_Template_button_click_71_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveAttendanceSheet());
    });
    \u0275\u0275text(72);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate((tmp_1_0 = ctx_r1.selectedSession()) == null ? null : tmp_1_0.className);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", (tmp_2_0 = ctx_r1.selectedSession()) == null ? null : tmp_2_0.classCode, ")");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" \u{1F4C5} ", \u0275\u0275pipeBind2(12, 22, (tmp_3_0 = ctx_r1.selectedSession()) == null ? null : tmp_3_0.date, "dd/MM/yyyy"), " \u2022 \u23F1\uFE0F ", (tmp_3_0 = ctx_r1.selectedSession()) == null ? null : tmp_3_0.startTime, " - ", (tmp_3_0 = ctx_r1.selectedSession()) == null ? null : tmp_3_0.endTime, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (tmp_4_0 = ctx_r1.selectedSession()) == null ? null : tmp_4_0.isSubstituted);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(((tmp_5_0 = ctx_r1.selectedSession()) == null ? null : tmp_5_0.teacherName) || "Gi\xE1o vi\xEAn ph\u1EE5 tr\xE1ch");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(M\xE3: ", ((tmp_6_0 = ctx_r1.selectedSession()) == null ? null : tmp_6_0.teacherCode) || "N/A", ")");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ((tmp_7_0 = ctx_r1.selectedSession()) == null ? null : tmp_7_0.isSubstituted) ? "bg-amber-50 text-amber-700 border-amber-200" : "bg-blue-50 text-blue-700 border-blue-200");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ((tmp_8_0 = ctx_r1.selectedSession()) == null ? null : tmp_8_0.isSubstituted) ? "D\u1EA1y thay" : "Gi\u1EA3ng ch\xEDnh", " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("\u{1F4CD} ", ((tmp_9_0 = ctx_r1.selectedSession()) == null ? null : tmp_9_0.roomName) || "Ph\xF2ng h\u1ECDc");
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1("(", ctx_r1.attendanceSheet().length, " h\u1ECDc vi\xEAn)");
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1("C\xF3 m\u1EB7t: ", ctx_r1.presentCount());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("V\u1EAFng m\u1EB7t: ", ctx_r1.absentCount());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u0110i mu\u1ED9n: ", ctx_r1.lateCount());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("C\xF3 l\xFD do: ", ctx_r1.excusedCount());
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.studentFilterQuery);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isLoadingAttendance());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoadingAttendance() && ctx_r1.filteredAttendanceSheet().length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoadingAttendance() && ctx_r1.filteredAttendanceSheet().length > 0);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.isSavingAttendance());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isSavingAttendance() ? "\u0110ang l\u01B0u..." : "L\u01B0u \u0110i\u1EC3m Danh", " ");
  }
}
var TeacherScheduleComponent = class _TeacherScheduleComponent {
  scheduleService = inject(ScheduleService);
  attendanceService = inject(AttendanceService);
  toastr = inject(ToastService);
  router = inject(Router);
  isLoading = signal(true, ...ngDevMode ? [{ debugName: "isLoading" }] : (
    /* istanbul ignore next */
    []
  ));
  timetable = signal([], ...ngDevMode ? [{ debugName: "timetable" }] : (
    /* istanbul ignore next */
    []
  ));
  dynamicTimeSlots = signal([], ...ngDevMode ? [{ debugName: "dynamicTimeSlots" }] : (
    /* istanbul ignore next */
    []
  ));
  // Current selected reference date (default today)
  referenceDate = signal(/* @__PURE__ */ new Date(), ...ngDevMode ? [{ debugName: "referenceDate" }] : (
    /* istanbul ignore next */
    []
  ));
  weekDays = signal([], ...ngDevMode ? [{ debugName: "weekDays" }] : (
    /* istanbul ignore next */
    []
  ));
  startDateStr = signal("", ...ngDevMode ? [{ debugName: "startDateStr" }] : (
    /* istanbul ignore next */
    []
  ));
  endDateStr = signal("", ...ngDevMode ? [{ debugName: "endDateStr" }] : (
    /* istanbul ignore next */
    []
  ));
  // Attendance Modal state
  isAttendanceModalOpen = signal(false, ...ngDevMode ? [{ debugName: "isAttendanceModalOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedSession = signal(null, ...ngDevMode ? [{ debugName: "selectedSession" }] : (
    /* istanbul ignore next */
    []
  ));
  attendanceSheet = signal([], ...ngDevMode ? [{ debugName: "attendanceSheet" }] : (
    /* istanbul ignore next */
    []
  ));
  isLoadingAttendance = signal(false, ...ngDevMode ? [{ debugName: "isLoadingAttendance" }] : (
    /* istanbul ignore next */
    []
  ));
  isSavingAttendance = signal(false, ...ngDevMode ? [{ debugName: "isSavingAttendance" }] : (
    /* istanbul ignore next */
    []
  ));
  studentFilterQuery = signal("", ...ngDevMode ? [{ debugName: "studentFilterQuery" }] : (
    /* istanbul ignore next */
    []
  ));
  filteredAttendanceSheet = computed(() => {
    const q = this.studentFilterQuery().toLowerCase().trim();
    const sheet = this.attendanceSheet();
    if (!q)
      return sheet;
    return sheet.filter((s) => s.studentName && s.studentName.toLowerCase().includes(q) || s.studentCode && s.studentCode.toLowerCase().includes(q));
  }, ...ngDevMode ? [{ debugName: "filteredAttendanceSheet" }] : (
    /* istanbul ignore next */
    []
  ));
  presentCount = computed(() => this.attendanceSheet().filter((s) => s.status === "PRESENT").length, ...ngDevMode ? [{ debugName: "presentCount" }] : (
    /* istanbul ignore next */
    []
  ));
  absentCount = computed(() => this.attendanceSheet().filter((s) => s.status === "ABSENT").length, ...ngDevMode ? [{ debugName: "absentCount" }] : (
    /* istanbul ignore next */
    []
  ));
  lateCount = computed(() => this.attendanceSheet().filter((s) => s.status === "LATE").length, ...ngDevMode ? [{ debugName: "lateCount" }] : (
    /* istanbul ignore next */
    []
  ));
  excusedCount = computed(() => this.attendanceSheet().filter((s) => s.status === "EXCUSED").length, ...ngDevMode ? [{ debugName: "excusedCount" }] : (
    /* istanbul ignore next */
    []
  ));
  ngOnInit() {
    this.calculateWeekRange(/* @__PURE__ */ new Date());
  }
  calculateWeekRange(refDate) {
    this.referenceDate.set(refDate);
    const curr = new Date(refDate);
    const day = curr.getDay();
    const diffToMonday = curr.getDate() - day + (day === 0 ? -6 : 1);
    const monday = new Date(curr.setDate(diffToMonday));
    monday.setHours(0, 0, 0, 0);
    const todayStr = this.formatDateIso(/* @__PURE__ */ new Date());
    const days = [];
    const dayNames = ["Th\u1EE9 2", "Th\u1EE9 3", "Th\u1EE9 4", "Th\u1EE9 5", "Th\u1EE9 6", "Th\u1EE9 7", "Ch\u1EE7 Nh\u1EADt"];
    for (let i = 0; i < 7; i++) {
      const d = new Date(monday);
      d.setDate(monday.getDate() + i);
      const dateStr = this.formatDateIso(d);
      days.push({
        dateStr,
        dayOfWeekName: dayNames[i],
        dayNum: String(d.getDate()).padStart(2, "0"),
        monthNum: String(d.getMonth() + 1).padStart(2, "0"),
        isToday: dateStr === todayStr
      });
    }
    this.weekDays.set(days);
    this.startDateStr.set(days[0].dateStr);
    this.endDateStr.set(days[6].dateStr);
    this.fetchTimetable();
  }
  prevWeek() {
    const d = new Date(this.referenceDate());
    d.setDate(d.getDate() - 7);
    this.calculateWeekRange(d);
  }
  nextWeek() {
    const d = new Date(this.referenceDate());
    d.setDate(d.getDate() + 7);
    this.calculateWeekRange(d);
  }
  todayWeek() {
    this.calculateWeekRange(/* @__PURE__ */ new Date());
  }
  fetchTimetable() {
    this.isLoading.set(true);
    this.scheduleService.getMyTimetable(this.startDateStr(), this.endDateStr()).subscribe({
      next: (res) => {
        const events = res || [];
        this.timetable.set(events);
        const slotMap = /* @__PURE__ */ new Map();
        events.forEach((item) => {
          if (item.startTime && item.endTime) {
            const key = `${item.startTime}-${item.endTime}`;
            if (!slotMap.has(key)) {
              const startFormatted = item.startTime.substring(0, 5);
              const endFormatted = item.endTime.substring(0, 5);
              const startHour = parseInt(startFormatted.split(":")[0], 10);
              let periodLabel = "S\xE1ng";
              let bgBadge = "bg-amber-100 text-amber-800 border-amber-200";
              if (startHour >= 12 && startHour < 18) {
                periodLabel = "Chi\u1EC1u";
                bgBadge = "bg-blue-100 text-blue-800 border-blue-200";
              } else if (startHour >= 18) {
                periodLabel = "T\u1ED1i";
                bgBadge = "bg-purple-100 text-purple-800 border-purple-200";
              }
              slotMap.set(key, {
                startTime: item.startTime,
                endTime: item.endTime,
                shortTimeLabel: `${startFormatted} - ${endFormatted}`,
                periodLabel,
                bgBadge
              });
            }
          }
        });
        const sortedSlots = Array.from(slotMap.values()).sort((a, b) => a.startTime.localeCompare(b.startTime));
        this.dynamicTimeSlots.set(sortedSlots);
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error("L\u1ED7i khi t\u1EA3i th\u1EDDi kh\xF3a bi\u1EC3u:", err);
        this.toastr.error("Kh\xF4ng th\u1EC3 t\u1EA3i l\u1ECBch d\u1EA1y h\u1ECDc", "L\u1ED7i");
        this.isLoading.set(false);
      }
    });
  }
  getEventsForCell(dateStr, slot) {
    return this.timetable().filter((item) => item.date === dateStr && (item.startTime === slot.startTime || item.startTime?.substring(0, 5) === slot.startTime.substring(0, 5)));
  }
  // --- MODAL ĐIỂM DANH & CHI TIẾT CA DẠY ---
  openSessionDetail(session, event) {
    event.stopPropagation();
    this.selectedSession.set(session);
    this.isAttendanceModalOpen.set(true);
    this.studentFilterQuery.set("");
    if (session.scheduleId && session.date) {
      this.isLoadingAttendance.set(true);
      this.attendanceService.getAttendanceSheet(session.scheduleId, session.date).subscribe({
        next: (res) => {
          this.attendanceSheet.set(res || []);
          this.isLoadingAttendance.set(false);
        },
        error: (err) => {
          console.error("L\u1ED7i khi t\u1EA3i danh s\xE1ch \u0111i\u1EC3m danh:", err);
          this.toastr.error("L\u1ED7i khi t\u1EA3i danh s\xE1ch \u0111i\u1EC3m danh", "L\u1ED7i");
          this.isLoadingAttendance.set(false);
        }
      });
    }
  }
  closeAttendanceModal() {
    this.isAttendanceModalOpen.set(false);
    this.selectedSession.set(null);
    this.attendanceSheet.set([]);
  }
  setStudentStatus(studentId, status) {
    this.attendanceSheet.update((sheet) => sheet.map((item) => item.studentId === studentId ? __spreadProps(__spreadValues({}, item), { status }) : item));
  }
  setAllStatus(status) {
    this.attendanceSheet.update((sheet) => sheet.map((item) => __spreadProps(__spreadValues({}, item), { status })));
  }
  saveAttendanceSheet() {
    const session = this.selectedSession();
    if (!session || !session.scheduleId || !session.date)
      return;
    this.isSavingAttendance.set(true);
    this.attendanceService.batchMarkAttendance(session.scheduleId, session.date, this.attendanceSheet()).subscribe({
      next: () => {
        this.toastr.success("Th\xE0nh c\xF4ng", "\u0110\xE3 l\u01B0u \u0111i\u1EC3m danh ca h\u1ECDc th\xE0nh c\xF4ng!");
        this.isSavingAttendance.set(false);
        this.closeAttendanceModal();
      },
      error: (err) => {
        console.error("L\u1ED7i khi l\u01B0u \u0111i\u1EC3m danh:", err);
        this.toastr.error("L\u1ED7i", err.error?.message || "L\u01B0u \u0111i\u1EC3m danh th\u1EA5t b\u1EA1i");
        this.isSavingAttendance.set(false);
      }
    });
  }
  navigateToClass(classId, event) {
    if (event)
      event.stopPropagation();
    if (classId) {
      this.closeAttendanceModal();
      this.router.navigate(["/teacher/classes", classId]);
    }
  }
  formatDateIso(date) {
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  }
  static \u0275fac = function TeacherScheduleComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TeacherScheduleComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TeacherScheduleComponent, selectors: [["app-teacher-schedule"]], decls: 28, vars: 12, consts: [[1, "space-y-6"], [1, "bg-white", "p-5", "sm:p-6", "rounded-2xl", "shadow-sm", "border", "border-gray-100", "flex", "flex-col", "sm:flex-row", "sm:items-center", "justify-between", "gap-4"], [1, "flex", "items-center", "space-x-3"], [1, "w-10", "h-10", "rounded-xl", "bg-indigo-50", "text-indigo-600", "flex", "items-center", "justify-center", "font-bold", "shadow-sm"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"], [1, "text-xl", "font-bold", "text-gray-900", "tracking-tight"], [1, "text-xs", "text-gray-500", "font-medium", "mt-0.5"], [1, "flex", "items-center", "space-x-1", "bg-indigo-50/70", "p-1.5", "rounded-2xl", "border", "border-indigo-100/80", "shadow-2xs"], ["title", "Tu\u1EA7n tr\u01B0\u1EDBc", 1, "p-2", "rounded-xl", "text-indigo-700", "hover:bg-white", "hover:shadow-sm", "transition", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2.5", "d", "M15 19l-7-7 7-7"], ["title", "B\u1EA5m \u0111\u1EC3 v\u1EC1 Tu\u1EA7n hi\u1EC7n t\u1EA1i", 1, "px-4", "py-2", "bg-white", "text-indigo-700", "font-extrabold", "text-xs", "sm:text-sm", "rounded-xl", "border", "border-indigo-100", "shadow-2xs", "cursor-pointer", "hover:bg-indigo-50", "transition", "flex", "items-center", "space-x-2", 3, "click"], ["title", "Tu\u1EA7n sau", 1, "p-2", "rounded-xl", "text-indigo-700", "hover:bg-white", "hover:shadow-sm", "transition", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2.5", "d", "M9 5l7 7-7 7"], ["class", "bg-white p-12 rounded-2xl border border-gray-100 shadow-sm text-center", 4, "ngIf"], ["class", "bg-white rounded-2xl border border-dashed border-gray-200 p-12 text-center shadow-xs", 4, "ngIf"], ["class", "bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden", 4, "ngIf"], ["class", "fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-6 lg:p-10 overflow-y-auto", 4, "ngIf"], [1, "bg-white", "p-12", "rounded-2xl", "border", "border-gray-100", "shadow-sm", "text-center"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-10", "w-10", "text-indigo-600", "mx-auto", "mb-3"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"], [1, "text-sm", "font-medium", "text-gray-500"], [1, "bg-white", "rounded-2xl", "border", "border-dashed", "border-gray-200", "p-12", "text-center", "shadow-xs"], [1, "w-16", "h-16", "bg-indigo-50", "text-indigo-500", "rounded-full", "flex", "items-center", "justify-center", "mx-auto", "mb-4"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-8", "h-8"], [1, "text-lg", "font-bold", "text-gray-900", "mb-1"], [1, "text-sm", "text-gray-500", "max-w-md", "mx-auto", "mb-6"], [1, "flex", "items-center", "justify-center", "space-x-3"], [1, "px-4", "py-2", "text-xs", "font-bold", "text-gray-700", "bg-gray-100", "hover:bg-gray-200", "rounded-xl", "transition", "flex", "items-center", 3, "click"], [1, "px-4", "py-2", "text-xs", "font-bold", "text-indigo-600", "bg-indigo-50", "hover:bg-indigo-100", "rounded-xl", "transition", "flex", "items-center", 3, "click"], [1, "bg-white", "rounded-2xl", "border", "border-gray-100", "shadow-sm", "overflow-hidden"], [1, "overflow-x-auto", "custom-scrollbar"], [1, "w-full", "text-left", "border-collapse", "min-w-[900px]"], [1, "bg-gray-50/80", "border-b", "border-gray-200"], [1, "p-4", "w-40", "text-center", "text-xs", "font-extrabold", "text-gray-500", "uppercase", "tracking-wider", "border-r", "border-gray-200"], ["class", "p-4 text-center border-r border-gray-200 last:border-r-0 min-w-[140px]", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "divide-y", "divide-gray-200"], ["class", "hover:bg-gray-50/30 transition-colors", 4, "ngFor", "ngForOf"], [1, "p-4", "text-center", "border-r", "border-gray-200", "last:border-r-0", "min-w-[140px]", 3, "ngClass"], [1, "flex", "flex-col", "items-center"], [1, "text-sm", 3, "ngClass"], [1, "mt-1", "text-xs", "px-2", "py-0.5", "rounded-full", 3, "ngClass"], [1, "hover:bg-gray-50/30", "transition-colors"], [1, "p-3", "text-center", "bg-gray-50/50", "border-r", "border-gray-200", "align-middle"], [1, "space-y-1"], [1, "inline-block", "px-2.5", "py-0.5", "text-xs", "font-bold", "rounded-md", "border", 3, "ngClass"], [1, "text-xs", "font-extrabold", "text-gray-800", "tracking-tight"], ["class", "p-2 border-r border-gray-200 last:border-r-0 align-top min-h-[110px] transition", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "p-2", "border-r", "border-gray-200", "last:border-r-0", "align-top", "min-h-[110px]", "transition", 3, "ngClass"], [1, "h-full", "space-y-2"], [4, "ngFor", "ngForOf"], ["class", "h-full min-h-[90px] rounded-xl border border-dashed border-gray-100 flex items-center justify-center opacity-30 hover:opacity-100 transition", 4, "ngIf"], [1, "p-3", "rounded-xl", "bg-white", "border", "border-indigo-100", "hover:border-indigo-400", "shadow-sm", "hover:shadow-md", "transition", "cursor-pointer", "group", "flex", "flex-col", "justify-between", "relative", "overflow-hidden", 3, "click"], [1, "absolute", "top-0", "left-0", "bottom-0", "w-1.5", "bg-indigo-600", "group-hover:bg-indigo-700"], [1, "pl-1"], [1, "flex", "items-center", "justify-between", "gap-1", "mb-1"], [1, "px-2", "py-0.5", "text-[10px]", "font-bold", "uppercase", "rounded", "bg-indigo-50", "text-indigo-700", "border", "border-indigo-100", "truncate"], ["class", "px-1.5 py-0.5 text-[10px] font-bold rounded bg-amber-50 text-amber-700 border border-amber-200 shrink-0", 4, "ngIf"], [1, "text-xs", "font-bold", "text-gray-900", "group-hover:text-indigo-600", "transition", "line-clamp-2", 3, "title"], [1, "pl-1", "pt-2", "border-t", "border-gray-100", "mt-2", "flex", "items-center", "justify-between", "text-[11px]", "text-gray-500"], [1, "font-semibold", "text-gray-700", "flex", "items-center"], [1, "text-[10px]", "font-bold", "text-indigo-600"], [1, "px-1.5", "py-0.5", "text-[10px]", "font-bold", "rounded", "bg-amber-50", "text-amber-700", "border", "border-amber-200", "shrink-0"], [1, "h-full", "min-h-[90px]", "rounded-xl", "border", "border-dashed", "border-gray-100", "flex", "items-center", "justify-center", "opacity-30", "hover:opacity-100", "transition"], [1, "text-[11px]", "text-gray-400", "font-medium"], [1, "fixed", "inset-0", "z-[80]", "flex", "items-center", "justify-center", "p-4", "sm:p-6", "lg:p-10", "overflow-y-auto"], [1, "fixed", "inset-0", "bg-gray-900/60", "backdrop-blur-sm", "transition-opacity", 3, "click"], [1, "relative", "bg-white", "rounded-2xl", "shadow-xl", "w-full", "max-w-4xl", "max-h-[90vh]", "flex", "flex-col", "overflow-hidden", "z-10"], [1, "px-6", "py-4", "border-b", "border-gray-200", "flex", "justify-between", "items-center", "bg-white", "shrink-0"], [1, "flex", "items-center", "space-x-2"], [1, "text-lg", "font-bold", "text-gray-900"], [1, "text-xs", "font-semibold", "px-2", "py-0.5", "bg-gray-100", "text-gray-600", "rounded"], [1, "text-xs", "text-gray-500", "mt-0.5"], ["class", "ml-2 font-bold text-amber-600", 4, "ngIf"], [1, "p-1.5", "text-gray-400", "hover:text-gray-700", "hover:bg-gray-100", "rounded-lg", "transition", "shrink-0", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "flex-1", "overflow-y-auto", "p-6", "space-y-5", "custom-scrollbar"], [1, "bg-gray-50", "border", "border-gray-200", "rounded-xl", "p-4", "flex", "flex-col", "sm:flex-row", "items-start", "sm:items-center", "justify-between", "gap-4"], [1, "text-[11px]", "font-semibold", "text-gray-500", "uppercase", "tracking-wider"], [1, "flex", "items-center", "space-x-2", "mt-0.5"], [1, "text-sm", "font-bold", "text-gray-900"], [1, "text-xs", "text-gray-400"], [1, "text-xs", "font-medium", "px-2", "py-0.5", "rounded", "border", 3, "ngClass"], [1, "flex", "items-center", "space-x-4", "w-full", "sm:w-auto", "justify-between", "sm:justify-end", "border-t", "sm:border-t-0", "pt-3", "sm:pt-0", "border-gray-200"], [1, "text-right"], [1, "text-[11px]", "text-gray-500"], [1, "text-xs", "font-bold", "text-gray-900"], [1, "px-3", "py-1.5", "bg-white", "border", "border-gray-300", "hover:bg-gray-100", "text-gray-700", "font-semibold", "text-xs", "rounded-lg", "shadow-2xs", "transition", 3, "click"], [1, "flex", "flex-col", "sm:flex-row", "sm:items-center", "justify-between", "gap-3", "mb-3"], [1, "text-sm", "font-bold", "text-gray-900", "flex", "items-center", "gap-2"], [1, "text-xs", "font-medium", "text-gray-500"], [1, "px-2.5", "py-1", "bg-emerald-50", "hover:bg-emerald-100", "text-emerald-700", "border", "border-emerald-200", "text-xs", "font-medium", "rounded-lg", "transition", 3, "click"], [1, "px-2.5", "py-1", "bg-red-50", "hover:bg-red-100", "text-red-700", "border", "border-red-200", "text-xs", "font-medium", "rounded-lg", "transition", 3, "click"], [1, "flex", "items-center", "space-x-4", "bg-gray-50", "border", "border-gray-200", "p-2.5", "rounded-xl", "text-xs", "mb-3"], [1, "text-gray-700", "font-semibold"], [1, "text-emerald-700", "font-bold"], [1, "text-red-700", "font-bold"], [1, "text-amber-700", "font-bold"], [1, "text-blue-700", "font-bold"], [1, "relative", "mb-3"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-gray-400", "absolute", "left-3", "top-2.5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], ["type", "text", "placeholder", "T\xECm t\xEAn ho\u1EB7c m\xE3 h\u1ECDc vi\xEAn...", 1, "w-full", "pl-9", "pr-3", "py-1.5", "bg-white", "border", "border-gray-300", "rounded-lg", "text-xs", "focus:outline-none", "focus:ring-1", "focus:ring-blue-500", "transition", 3, "ngModelChange", "ngModel"], ["class", "py-8 text-center text-gray-500 text-xs", 4, "ngIf"], ["class", "bg-gray-50 border border-dashed border-gray-200 rounded-xl p-6 text-center text-gray-400 text-xs", 4, "ngIf"], ["class", "bg-white rounded-xl border border-gray-200 overflow-hidden", 4, "ngIf"], [1, "px-6", "py-3", "border-t", "border-gray-200", "bg-gray-50", "flex", "justify-between", "items-center", "shrink-0"], [1, "px-3", "py-1.5", "text-xs", "font-semibold", "text-gray-600", "hover:bg-gray-200", "rounded-lg", "transition", 3, "click"], [1, "px-5", "py-2", "bg-blue-600", "hover:bg-blue-700", "text-white", "font-bold", "text-xs", "rounded-lg", "shadow-2xs", "transition", "flex", "items-center", "disabled:opacity-50", 3, "click", "disabled"], [1, "ml-2", "font-bold", "text-amber-600"], [1, "py-8", "text-center", "text-gray-500", "text-xs"], [1, "bg-gray-50", "border", "border-dashed", "border-gray-200", "rounded-xl", "p-6", "text-center", "text-gray-400", "text-xs"], [1, "bg-white", "rounded-xl", "border", "border-gray-200", "overflow-hidden"], [1, "divide-y", "divide-gray-100"], ["class", "p-3 hover:bg-gray-50/70 transition flex flex-col sm:flex-row sm:items-center justify-between gap-2", 4, "ngFor", "ngForOf"], [1, "p-3", "hover:bg-gray-50/70", "transition", "flex", "flex-col", "sm:flex-row", "sm:items-center", "justify-between", "gap-2"], [1, "text-xs", "font-semibold", "text-gray-400", "w-5", "text-center"], [1, "font-medium", "text-gray-700"], [1, "flex", "items-center", "space-x-1.5", "shrink-0"], [1, "px-2.5", "py-1", "rounded-lg", "text-xs", "transition", 3, "click", "ngClass"]], template: function TeacherScheduleComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "div", 2)(4, "div", 3);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(5, "svg", 4);
      \u0275\u0275element(6, "path", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(7, "div")(8, "h1", 6);
      \u0275\u0275text(9, "L\u1ECBch D\u1EA1y H\u1ECDc");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "p", 7);
      \u0275\u0275text(11, "B\u1EA5m v\xE0o ca d\u1EA1y \u0111\u1EC3 xem Th\xF4ng tin Gi\u1EA3ng vi\xEAn & \u0110i\u1EC3m danh h\u1ECDc vi\xEAn");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(12, "div", 8)(13, "button", 9);
      \u0275\u0275listener("click", function TeacherScheduleComponent_Template_button_click_13_listener() {
        return ctx.prevWeek();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(14, "svg", 4);
      \u0275\u0275element(15, "path", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(16, "div", 11);
      \u0275\u0275listener("click", function TeacherScheduleComponent_Template_div_click_16_listener() {
        return ctx.todayWeek();
      });
      \u0275\u0275elementStart(17, "span");
      \u0275\u0275text(18);
      \u0275\u0275pipe(19, "date");
      \u0275\u0275pipe(20, "date");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "button", 12);
      \u0275\u0275listener("click", function TeacherScheduleComponent_Template_button_click_21_listener() {
        return ctx.nextWeek();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(22, "svg", 4);
      \u0275\u0275element(23, "path", 13);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(24, TeacherScheduleComponent_div_24_Template, 6, 0, "div", 14)(25, TeacherScheduleComponent_div_25_Template, 21, 8, "div", 15)(26, TeacherScheduleComponent_div_26_Template, 10, 2, "div", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275template(27, TeacherScheduleComponent_div_27_Template, 73, 25, "div", 17);
    }
    if (rf & 2) {
      \u0275\u0275advance(18);
      \u0275\u0275textInterpolate2("\u{1F4C5} Tu\u1EA7n: ", \u0275\u0275pipeBind2(19, 6, ctx.startDateStr(), "dd/MM"), " - ", \u0275\u0275pipeBind2(20, 9, ctx.endDateStr(), "dd/MM/yyyy"));
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", ctx.isLoading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading() && ctx.timetable().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading() && ctx.timetable().length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isAttendanceModalOpen());
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, RouterModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TeacherScheduleComponent, [{
    type: Component,
    args: [{ selector: "app-teacher-schedule", standalone: true, imports: [CommonModule, RouterModule, FormsModule], template: `<div class="space-y-6">

  <!-- HEADER & CONTROLS -->
  <div class="bg-white p-5 sm:p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
    <div>
      <div class="flex items-center space-x-3">
        <div class="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold shadow-sm">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
          </svg>
        </div>
        <div>
          <h1 class="text-xl font-bold text-gray-900 tracking-tight">L\u1ECBch D\u1EA1y H\u1ECDc</h1>
          <p class="text-xs text-gray-500 font-medium mt-0.5">B\u1EA5m v\xE0o ca d\u1EA1y \u0111\u1EC3 xem Th\xF4ng tin Gi\u1EA3ng vi\xEAn & \u0110i\u1EC3m danh h\u1ECDc vi\xEAn</p>
        </div>
      </div>
    </div>

    <!-- COMPACT DATE RANGE NAVIGATOR WITH ARROW BUTTONS -->
    <div class="flex items-center space-x-1 bg-indigo-50/70 p-1.5 rounded-2xl border border-indigo-100/80 shadow-2xs">
      <button (click)="prevWeek()" title="Tu\u1EA7n tr\u01B0\u1EDBc"
        class="p-2 rounded-xl text-indigo-700 hover:bg-white hover:shadow-sm transition">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"></path>
        </svg>
      </button>

      <div (click)="todayWeek()" title="B\u1EA5m \u0111\u1EC3 v\u1EC1 Tu\u1EA7n hi\u1EC7n t\u1EA1i"
        class="px-4 py-2 bg-white text-indigo-700 font-extrabold text-xs sm:text-sm rounded-xl border border-indigo-100 shadow-2xs cursor-pointer hover:bg-indigo-50 transition flex items-center space-x-2">
        <span>\u{1F4C5} Tu\u1EA7n: {{ startDateStr() | date:'dd/MM' }} - {{ endDateStr() | date:'dd/MM/yyyy' }}</span>
      </div>

      <button (click)="nextWeek()" title="Tu\u1EA7n sau"
        class="p-2 rounded-xl text-indigo-700 hover:bg-white hover:shadow-sm transition">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  </div>

  <!-- LOADING SPINNER -->
  <div *ngIf="isLoading()" class="bg-white p-12 rounded-2xl border border-gray-100 shadow-sm text-center">
    <svg class="animate-spin h-10 w-10 text-indigo-600 mx-auto mb-3" fill="none" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
    <p class="text-sm font-medium text-gray-500">\u0110ang t\u1EA3i l\u1ECBch d\u1EA1y h\u1ECDc...</p>
  </div>

  <!-- EMPTY STATE WHEN NO SCHEDULE FOR THE ENTIRE WEEK -->
  <div *ngIf="!isLoading() && timetable().length === 0" class="bg-white rounded-2xl border border-dashed border-gray-200 p-12 text-center shadow-xs">
    <div class="w-16 h-16 bg-indigo-50 text-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
      <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
      </svg>
    </div>
    <h3 class="text-lg font-bold text-gray-900 mb-1">Kh\xF4ng C\xF3 L\u1ECBch D\u1EA1y H\u1ECDc Trong Tu\u1EA7n N\xE0y</h3>
    <p class="text-sm text-gray-500 max-w-md mx-auto mb-6">
      Kh\xF4ng t\xECm th\u1EA5y ca gi\u1EA3ng d\u1EA1y n\xE0o t\u1EEB ng\xE0y <strong>{{ startDateStr() | date:'dd/MM/yyyy' }}</strong> \u0111\u1EBFn <strong>{{ endDateStr() | date:'dd/MM/yyyy' }}</strong>.
    </p>
    <div class="flex items-center justify-center space-x-3">
      <button (click)="prevWeek()" class="px-4 py-2 text-xs font-bold text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-xl transition flex items-center">
        &larr; Xem tu\u1EA7n tr\u01B0\u1EDBc
      </button>

      <button (click)="nextWeek()" class="px-4 py-2 text-xs font-bold text-indigo-600 bg-indigo-50 hover:bg-indigo-100 rounded-xl transition flex items-center">
        Xem tu\u1EA7n sau &rarr;
      </button>
    </div>
  </div>

  <!-- GRID TIMETABLE (B\u1EA2NG D\u1EA0NG L\u01AF\u1EDAI V\u1EDAI KHUNG GI\u1EDC LINH HO\u1EA0T) -->
  <div *ngIf="!isLoading() && timetable().length > 0" class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
    <div class="overflow-x-auto custom-scrollbar">
      <table class="w-full text-left border-collapse min-w-[900px]">
        <thead>
          <tr class="bg-gray-50/80 border-b border-gray-200">
            <!-- Header Column: Khung gi\u1EDD linh ho\u1EA1t -->
            <th class="p-4 w-40 text-center text-xs font-extrabold text-gray-500 uppercase tracking-wider border-r border-gray-200">
              Khung Gi\u1EDD D\u1EA1y
            </th>

            <!-- Header Columns: Th\u1EE9 2 -> Ch\u1EE7 Nh\u1EADt -->
            <th *ngFor="let col of weekDays()"
              [ngClass]="col.isToday ? 'bg-indigo-50/70 border-b-2 border-b-indigo-600' : ''"
              class="p-4 text-center border-r border-gray-200 last:border-r-0 min-w-[140px]">
              <div class="flex flex-col items-center">
                <span [ngClass]="col.isToday ? 'text-indigo-700 font-extrabold' : 'text-gray-700 font-bold'" class="text-sm">
                  {{ col.dayOfWeekName }}
                </span>
                <span [ngClass]="col.isToday ? 'bg-indigo-600 text-white font-extrabold shadow-2xs' : 'bg-gray-200/80 text-gray-600 font-semibold'"
                  class="mt-1 text-xs px-2 py-0.5 rounded-full">
                  {{ col.dayNum }}/{{ col.monthNum }}
                </span>
              </div>
            </th>
          </tr>
        </thead>

        <tbody class="divide-y divide-gray-200">
          <tr *ngFor="let slot of dynamicTimeSlots()" class="hover:bg-gray-50/30 transition-colors">
            <!-- Dynamic Time Slot Column -->
            <td class="p-3 text-center bg-gray-50/50 border-r border-gray-200 align-middle">
              <div class="space-y-1">
                <span class="inline-block px-2.5 py-0.5 text-xs font-bold rounded-md border" [ngClass]="slot.bgBadge">
                  \u23F0 {{ slot.periodLabel }}
                </span>
                <p class="text-xs font-extrabold text-gray-800 tracking-tight">{{ slot.shortTimeLabel }}</p>
              </div>
            </td>

            <!-- Day Columns -->
            <td *ngFor="let col of weekDays()"
              [ngClass]="col.isToday ? 'bg-indigo-50/20' : ''"
              class="p-2 border-r border-gray-200 last:border-r-0 align-top min-h-[110px] transition">

              <div class="h-full space-y-2">
                <ng-container *ngFor="let ev of getEventsForCell(col.dateStr, slot)">
                  <div (click)="openSessionDetail(ev, $event)"
                    class="p-3 rounded-xl bg-white border border-indigo-100 hover:border-indigo-400 shadow-sm hover:shadow-md transition cursor-pointer group flex flex-col justify-between relative overflow-hidden">
                    <div class="absolute top-0 left-0 bottom-0 w-1.5 bg-indigo-600 group-hover:bg-indigo-700"></div>

                    <div class="pl-1">
                      <!-- Badge Row -->
                      <div class="flex items-center justify-between gap-1 mb-1">
                        <span class="px-2 py-0.5 text-[10px] font-bold uppercase rounded bg-indigo-50 text-indigo-700 border border-indigo-100 truncate">
                          {{ ev.classCode }}
                        </span>
                        <span *ngIf="ev.isSubstituted" class="px-1.5 py-0.5 text-[10px] font-bold rounded bg-amber-50 text-amber-700 border border-amber-200 shrink-0">
                          D\u1EA1y thay
                        </span>
                      </div>

                      <!-- Class Name -->
                      <h4 class="text-xs font-bold text-gray-900 group-hover:text-indigo-600 transition line-clamp-2" [title]="ev.className">
                        {{ ev.className }}
                      </h4>
                    </div>

                    <!-- Room & Role Footer -->
                    <div class="pl-1 pt-2 border-t border-gray-100 mt-2 flex items-center justify-between text-[11px] text-gray-500">
                      <span class="font-semibold text-gray-700 flex items-center">
                        \u{1F4CD} {{ ev.roomName || 'Ph\xF2ng h\u1ECDc' }}
                      </span>
                      <span class="text-[10px] font-bold text-indigo-600">
                        \u{1F4CB} \u0110i\u1EC3m danh
                      </span>
                    </div>
                  </div>
                </ng-container>

                <!-- Empty State for cell -->
                <div *ngIf="getEventsForCell(col.dateStr, slot).length === 0"
                  class="h-full min-h-[90px] rounded-xl border border-dashed border-gray-100 flex items-center justify-center opacity-30 hover:opacity-100 transition">
                  <span class="text-[11px] text-gray-400 font-medium">-</span>
                </div>
              </div>

            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

</div>

<!-- MODAL \u0110I\u1EC2M DANH & CHI TI\u1EBET CA D\u1EA0Y (THI\u1EBET K\u1EBE T\u1ED0I GI\u1EA2N & ELEGANT) -->
<div *ngIf="isAttendanceModalOpen()" class="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-6 lg:p-10 overflow-y-auto">
  <!-- Backdrop -->
  <div class="fixed inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity" (click)="closeAttendanceModal()"></div>

  <!-- Dialog Box -->
  <div class="relative bg-white rounded-2xl shadow-xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden z-10">
    
    <!-- MODAL HEADER -->
    <div class="px-6 py-4 border-b border-gray-200 flex justify-between items-center bg-white shrink-0">
      <div>
        <div class="flex items-center space-x-2">
          <h2 class="text-lg font-bold text-gray-900">{{ selectedSession()?.className }}</h2>
          <span class="text-xs font-semibold px-2 py-0.5 bg-gray-100 text-gray-600 rounded">({{ selectedSession()?.classCode }})</span>
        </div>
        <p class="text-xs text-gray-500 mt-0.5">
          \u{1F4C5} {{ selectedSession()?.date | date:'dd/MM/yyyy' }} \u2022 \u23F1\uFE0F {{ selectedSession()?.startTime }} - {{ selectedSession()?.endTime }}
          <span *ngIf="selectedSession()?.isSubstituted" class="ml-2 font-bold text-amber-600">(Ca d\u1EA1y thay)</span>
        </p>
      </div>

      <button (click)="closeAttendanceModal()" class="p-1.5 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition shrink-0">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>

    <!-- MODAL BODY -->
    <div class="flex-1 overflow-y-auto p-6 space-y-5 custom-scrollbar">

      <!-- SECTION 1: TH\xD4NG TIN GI\u1EA2NG VI\xCAN & PH\xD2NG H\u1ECCC (T\u1ED0I GI\u1EA2N - KH\xD4NG ICON) -->
      <div class="bg-gray-50 border border-gray-200 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <!-- Teacher Info (Without Avatar Icon) -->
        <div>
          <p class="text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Gi\u1EA3ng vi\xEAn ph\u1EE5 tr\xE1ch</p>
          <div class="flex items-center space-x-2 mt-0.5">
            <h4 class="text-sm font-bold text-gray-900">{{ selectedSession()?.teacherName || 'Gi\xE1o vi\xEAn ph\u1EE5 tr\xE1ch' }}</h4>
            <span class="text-xs text-gray-400">(M\xE3: {{ selectedSession()?.teacherCode || 'N/A' }})</span>
            <span class="text-xs font-medium px-2 py-0.5 rounded border"
              [ngClass]="selectedSession()?.isSubstituted ? 'bg-amber-50 text-amber-700 border-amber-200' : 'bg-blue-50 text-blue-700 border-blue-200'">
              {{ selectedSession()?.isSubstituted ? 'D\u1EA1y thay' : 'Gi\u1EA3ng ch\xEDnh' }}
            </span>
          </div>
        </div>

        <!-- Room Info & Class Link -->
        <div class="flex items-center space-x-4 w-full sm:w-auto justify-between sm:justify-end border-t sm:border-t-0 pt-3 sm:pt-0 border-gray-200">
          <div class="text-right">
            <p class="text-[11px] text-gray-500">Ph\xF2ng h\u1ECDc</p>
            <p class="text-xs font-bold text-gray-900">\u{1F4CD} {{ selectedSession()?.roomName || 'Ph\xF2ng h\u1ECDc' }}</p>
          </div>

          <button (click)="navigateToClass(selectedSession()?.classId)"
            class="px-3 py-1.5 bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 font-semibold text-xs rounded-lg shadow-2xs transition">
            \u0110\u1EBFn L\u1EDBp H\u1ECDc &rarr;
          </button>
        </div>
      </div>

      <!-- SECTION 2: B\u1EA2NG \u0110I\u1EC2M DANH H\u1ECCC VI\xCAN -->
      <div>
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
          <div>
            <h3 class="text-sm font-bold text-gray-900 flex items-center gap-2">
              <span>Danh s\xE1ch h\u1ECDc vi\xEAn \u0111i\u1EC3m danh</span>
              <span class="text-xs font-medium text-gray-500">({{ attendanceSheet().length }} h\u1ECDc vi\xEAn)</span>
            </h3>
          </div>

          <!-- Quick Action Buttons -->
          <div class="flex items-center space-x-2">
            <button (click)="setAllStatus('PRESENT')"
              class="px-2.5 py-1 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 text-xs font-medium rounded-lg transition">
              T\u1EA5t c\u1EA3 C\xF3 m\u1EB7t
            </button>
            <button (click)="setAllStatus('ABSENT')"
              class="px-2.5 py-1 bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 text-xs font-medium rounded-lg transition">
              T\u1EA5t c\u1EA3 V\u1EAFng m\u1EB7t
            </button>
          </div>
        </div>

        <!-- Summary Bar -->
        <div class="flex items-center space-x-4 bg-gray-50 border border-gray-200 p-2.5 rounded-xl text-xs mb-3">
          <span class="text-gray-700 font-semibold">Th\u1ED1ng k\xEA:</span>
          <span class="text-emerald-700 font-bold">C\xF3 m\u1EB7t: {{ presentCount() }}</span>
          <span class="text-red-700 font-bold">V\u1EAFng m\u1EB7t: {{ absentCount() }}</span>
          <span class="text-amber-700 font-bold">\u0110i mu\u1ED9n: {{ lateCount() }}</span>
          <span class="text-blue-700 font-bold">C\xF3 l\xFD do: {{ excusedCount() }}</span>
        </div>

        <!-- Search Student Bar -->
        <div class="relative mb-3">
          <svg class="w-4 h-4 text-gray-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
          <input type="text" [(ngModel)]="studentFilterQuery" placeholder="T\xECm t\xEAn ho\u1EB7c m\xE3 h\u1ECDc vi\xEAn..."
            class="w-full pl-9 pr-3 py-1.5 bg-white border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-blue-500 transition">
        </div>

        <!-- Loading state -->
        <div *ngIf="isLoadingAttendance()" class="py-8 text-center text-gray-500 text-xs">
          \u0110ang t\u1EA3i danh s\xE1ch h\u1ECDc vi\xEAn...
        </div>

        <!-- Empty List -->
        <div *ngIf="!isLoadingAttendance() && filteredAttendanceSheet().length === 0"
          class="bg-gray-50 border border-dashed border-gray-200 rounded-xl p-6 text-center text-gray-400 text-xs">
          Kh\xF4ng t\xECm th\u1EA5y h\u1ECDc vi\xEAn n\xE0o.
        </div>

        <!-- Student List Table -->
        <div *ngIf="!isLoadingAttendance() && filteredAttendanceSheet().length > 0"
          class="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div class="divide-y divide-gray-100">
            <div *ngFor="let item of filteredAttendanceSheet(); let idx = index"
              class="p-3 hover:bg-gray-50/70 transition flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              
              <!-- Student Info (Minimal without Avatar circle) -->
              <div class="flex items-center space-x-3">
                <span class="text-xs font-semibold text-gray-400 w-5 text-center">{{ idx + 1 }}</span>
                <div>
                  <h5 class="text-xs font-bold text-gray-900">{{ item.studentName }}</h5>
                  <p class="text-[11px] text-gray-500">M\xE3: <span class="font-medium text-gray-700">{{ item.studentCode }}</span></p>
                </div>
              </div>

              <!-- Status Selector Pill Buttons -->
              <div class="flex items-center space-x-1.5 shrink-0">
                <button (click)="setStudentStatus(item.studentId, 'PRESENT')"
                  [ngClass]="item.status === 'PRESENT' ? 'bg-emerald-600 text-white font-bold' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'"
                  class="px-2.5 py-1 rounded-lg text-xs transition">
                  C\xF3 m\u1EB7t
                </button>

                <button (click)="setStudentStatus(item.studentId, 'ABSENT')"
                  [ngClass]="item.status === 'ABSENT' ? 'bg-red-600 text-white font-bold' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'"
                  class="px-2.5 py-1 rounded-lg text-xs transition">
                  V\u1EAFng m\u1EB7t
                </button>

                <button (click)="setStudentStatus(item.studentId, 'LATE')"
                  [ngClass]="item.status === 'LATE' ? 'bg-amber-500 text-white font-bold' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'"
                  class="px-2.5 py-1 rounded-lg text-xs transition">
                  \u0110i mu\u1ED9n
                </button>

                <button (click)="setStudentStatus(item.studentId, 'EXCUSED')"
                  [ngClass]="item.status === 'EXCUSED' ? 'bg-blue-600 text-white font-bold' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'"
                  class="px-2.5 py-1 rounded-lg text-xs transition">
                  C\xF3 l\xFD do
                </button>
              </div>

            </div>
          </div>
        </div>

      </div>

    </div>

    <!-- MODAL FOOTER -->
    <div class="px-6 py-3 border-t border-gray-200 bg-gray-50 flex justify-between items-center shrink-0">
      <button (click)="closeAttendanceModal()" class="px-3 py-1.5 text-xs font-semibold text-gray-600 hover:bg-gray-200 rounded-lg transition">
        H\u1EE7y / \u0110\xF3ng
      </button>

      <button (click)="saveAttendanceSheet()" [disabled]="isSavingAttendance()"
        class="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-lg shadow-2xs transition flex items-center disabled:opacity-50">
        {{ isSavingAttendance() ? '\u0110ang l\u01B0u...' : 'L\u01B0u \u0110i\u1EC3m Danh' }}
      </button>
    </div>

  </div>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TeacherScheduleComponent, { className: "TeacherScheduleComponent", filePath: "src/app/features/teacher/pages/schedule/teacher-schedule.component.ts", lineNumber: 31 });
})();

// src/app/features/teacher/teacher.routes.ts
var teacherRoutes = [
  {
    path: "",
    component: TeacherLayoutComponent,
    // Khung Layout bọc ngoài cùng
    children: [
      { path: "", redirectTo: "my-classes", pathMatch: "full" },
      // Tạm thời chưa làm Dashboard, mình trỏ thẳng vào my-classes
      { path: "my-classes", component: MyClassesComponent },
      { path: "classes/:id", component: ClassDetailComponent },
      { path: "schedule", component: TeacherScheduleComponent },
      { path: "assignments/create", component: AssignmentFormComponent },
      { path: "assignments/:id", component: AssignmentDetailComponent },
      { path: "assignments/edit/:id", component: AssignmentFormComponent },
      { path: "assignments/:id/submissions", component: AssignmentSubmissionsComponent },
      { path: "profile", component: TeacherProfileComponent },
      { path: "homeroom", component: HomeroomAnnouncementComponent },
      { path: "department-member", component: DepartmentMembersComponent },
      { path: "teacher-assignment", component: DepartmentAssignmentComponent },
      { path: "teacher-assignment-list", component: DepartmentAssignmentListComponent },
      { path: "teacher-substitution", component: DepartmentSubstitutionComponent },
      { path: "teacher-history", component: AssignmentHistoryComponent }
    ]
  }
];
export {
  teacherRoutes
};
//# sourceMappingURL=chunk-7HH3PPQ7.js.map
