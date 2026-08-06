import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  RadioControlValueAccessor
} from "./chunk-CWY7GFOW.js";
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
  HttpClient,
  Injectable,
  Location,
  NgClass,
  NgForOf,
  NgIf,
  catchError,
  environment,
  forkJoin,
  inject,
  of,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-4WA2FUT3.js";

// src/app/features/student/services/student-assignment.service.ts
var StudentAssignmentService = class _StudentAssignmentService {
  http = inject(HttpClient);
  // Lấy thông tin chung của bài tập
  getAssignmentDetail(id) {
    return this.http.get(`${environment.apiUrl}/api/v1/assignments/${id}`);
  }
  // Lấy toàn bộ câu hỏi của bài tập đó
  getQuestions(assignmentId) {
    return this.http.get(`${environment.apiUrl}/api/v1/assignment-questions/assignment/${assignmentId}`);
  }
  //  Lấy các đáp án (A,B,C,D) của một câu hỏi trắc nghiệm
  getQuestionOptions(questionId) {
    return this.http.get(`${environment.apiUrl}/api/v1/questions/${questionId}/options`);
  }
  // Lưu nháp (isSubmit = false) hoặc Nộp bài chính thức (isSubmit = true)
  submitAssignment(assignmentId, isSubmit, studentNote = "") {
    return this.http.post(`${environment.apiUrl}/api/v1/assignment-submissions/submit`, {
      assignmentId,
      studentNote,
      isSubmit
    });
  }
  // Lưu đáp án cho từng câu hỏi
  saveAnswer(submissionId, questionId, payload) {
    return this.http.put(`${environment.apiUrl}/api/v1/submission-answers/submission/${submissionId}/question/${questionId}`, payload);
  }
  // Upload file đính kèm cho bài nộp (Dùng FormData)
  uploadAttachment(submissionId, file) {
    const formData = new FormData();
    formData.append("file", file);
    return this.http.post(`${environment.apiUrl}/api/v1/submission-attachments/submission/${submissionId}`, formData);
  }
  // Xóa file đính kèm
  deleteAttachment(attachmentId) {
    return this.http.delete(`${environment.apiUrl}/api/v1/submission-attachments/${attachmentId}`);
  }
  // Lấy lịch sử nộp bài của mình cho 1 bài tập cụ thể
  getMySubmission(assignmentId) {
    return this.http.get(`${environment.apiUrl}/api/v1/assignment-submissions/assignment/${assignmentId}/my-submission`);
  }
  static \u0275fac = function StudentAssignmentService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StudentAssignmentService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _StudentAssignmentService, factory: _StudentAssignmentService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StudentAssignmentService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/features/student/pages/assignment-detail/student-assignment-detail.component.ts
function StudentAssignmentDetailComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 5);
    \u0275\u0275element(2, "circle", 6)(3, "path", 7);
    \u0275\u0275elementEnd()();
  }
}
function StudentAssignmentDetailComponent_ng_container_2_div_5_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Th\u1EDDi gian: ", ctx_r1.assignment().durationMinutes, " ph\xFAt");
  }
}
function StudentAssignmentDetailComponent_ng_container_2_div_5_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 38)(2, "div", 39);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 40);
    \u0275\u0275element(4, "path", 41);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div")(6, "p", 42);
    \u0275\u0275text(7, "T\xE0i li\u1EC7u \u0111\xEDnh k\xE8m");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 43);
    \u0275\u0275text(9, "\u0110\u1EC1 b\xE0i ho\u1EB7c t\u1EC7p h\u01B0\u1EDBng d\u1EABn t\u1EEB gi\xE1o vi\xEAn");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "a", 44);
    \u0275\u0275text(11, " T\u1EA3i xu\u1ED1ng ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(12, "svg", 45);
    \u0275\u0275element(13, "path", 46);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(10);
    \u0275\u0275property("href", ctx_r1.assignment().attachmentUrl, \u0275\u0275sanitizeUrl);
  }
}
function StudentAssignmentDetailComponent_ng_container_2_div_5_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 48);
    \u0275\u0275element(2, "path", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span", 50);
    \u0275\u0275text(4, "\u0110\xE3 h\u1EBFt h\u1EA1n. L\u1EDBp h\u1ECDc kh\xF4ng cho ph\xE9p n\u1ED9p mu\u1ED9n!");
    \u0275\u0275elementEnd()();
  }
}
function StudentAssignmentDetailComponent_ng_container_2_div_5__svg_svg_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 51);
    \u0275\u0275element(1, "circle", 6)(2, "path", 7);
    \u0275\u0275elementEnd();
  }
}
function StudentAssignmentDetailComponent_ng_container_2_div_5__svg_svg_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 52);
    \u0275\u0275element(1, "path", 53);
    \u0275\u0275elementEnd();
  }
}
function StudentAssignmentDetailComponent_ng_container_2_div_5__svg_svg_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 52);
    \u0275\u0275element(1, "path", 54);
    \u0275\u0275elementEnd();
  }
}
function StudentAssignmentDetailComponent_ng_container_2_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14);
    \u0275\u0275element(2, "div", 15);
    \u0275\u0275elementStart(3, "h1", 16);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 17)(6, "span", 18);
    \u0275\u0275text(7, "Lo\u1EA1i: ");
    \u0275\u0275elementStart(8, "span", 19);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "span", 20);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, StudentAssignmentDetailComponent_ng_container_2_div_5_span_12_Template, 2, 1, "span", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 22)(14, "h3", 23);
    \u0275\u0275text(15, "H\u01B0\u1EDBng d\u1EABn l\xE0m b\xE0i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p", 24);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, StudentAssignmentDetailComponent_ng_container_2_div_5_div_18_Template, 14, 1, "div", 25);
    \u0275\u0275elementStart(19, "div", 26)(20, "div", 27)(21, "span", 28);
    \u0275\u0275text(22, "Th\u1EDDi gian m\u1EDF \u0111\u1EC1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 29);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 27)(27, "span", 28);
    \u0275\u0275text(28, "H\u1EA1n n\u1ED9p cu\u1ED1i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span", 30);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div", 31);
    \u0275\u0275template(33, StudentAssignmentDetailComponent_ng_container_2_div_5_div_33_Template, 5, 0, "div", 32);
    \u0275\u0275elementStart(34, "button", 33);
    \u0275\u0275listener("click", function StudentAssignmentDetailComponent_ng_container_2_div_5_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startAssignment());
    });
    \u0275\u0275template(35, StudentAssignmentDetailComponent_ng_container_2_div_5__svg_svg_35_Template, 3, 0, "svg", 34);
    \u0275\u0275text(36);
    \u0275\u0275template(37, StudentAssignmentDetailComponent_ng_container_2_div_5__svg_svg_37_Template, 2, 0, "svg", 35)(38, StudentAssignmentDetailComponent_ng_container_2_div_5__svg_svg_38_Template, 2, 0, "svg", 35);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.assignment().title);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.assignment().assignmentType);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u0110i\u1EC3m t\u1ED1i \u0111a: ", ctx_r1.assignment().maxScore);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.assignment().durationMinutes);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.assignment().description || "Kh\xF4ng c\xF3 h\u01B0\u1EDBng d\u1EABn c\u1EE5 th\u1EC3.");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.assignment().attachmentUrl);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.assignment().startTime ? \u0275\u0275pipeBind2(25, 14, ctx_r1.assignment().startTime, "HH:mm dd/MM/yyyy") : "Lu\xF4n m\u1EDF");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.assignment().dueTime ? \u0275\u0275pipeBind2(31, 17, ctx_r1.assignment().dueTime, "HH:mm dd/MM/yyyy") : "Kh\xF4ng gi\u1EDBi h\u1EA1n");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.isSubmissionBlocked());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.isStarting() || ctx_r1.isSubmissionBlocked());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isStarting());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isStarting() ? "\u0110ang chu\u1EA9n b\u1ECB \u0111\u1EC1..." : ctx_r1.isSubmissionBlocked() ? "B\xE0i t\u1EADp \u0111\xE3 kh\xF3a" : "B\u1EAFt \u0111\u1EA7u l\xE0m b\xE0i", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isStarting() && !ctx_r1.isSubmissionBlocked());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isSubmissionBlocked());
  }
}
function StudentAssignmentDetailComponent_ng_container_2_div_6_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 64);
    \u0275\u0275element(2, "path", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", ctx_r1.remainingTime() <= 300 && ctx_r1.remainingTime() > 0 ? "text-red-600 bg-red-50 border border-red-200 animate-pulse" : "text-gray-800");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.remainingTime() <= 300 && ctx_r1.remainingTime() > 0 ? "text-red-500" : "text-gray-500");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.timerDisplay(), " ");
  }
}
function StudentAssignmentDetailComponent_ng_container_2_div_6__svg_svg_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 66);
    \u0275\u0275element(1, "circle", 6)(2, "path", 7);
    \u0275\u0275elementEnd();
  }
}
function StudentAssignmentDetailComponent_ng_container_2_div_6_div_9_div_1_div_12_label_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 85);
  }
}
function StudentAssignmentDetailComponent_ng_container_2_div_6_div_9_div_1_div_12_label_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 81);
    \u0275\u0275template(1, StudentAssignmentDetailComponent_ng_container_2_div_6_div_9_div_1_div_12_label_1_div_1_Template, 1, 0, "div", 82);
    \u0275\u0275elementStart(2, "input", 83);
    \u0275\u0275twoWayListener("ngModelChange", function StudentAssignmentDetailComponent_ng_container_2_div_6_div_9_div_1_div_12_label_1_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r5);
      const q_r6 = \u0275\u0275nextContext(2).$implicit;
      \u0275\u0275twoWayBindingSet(q_r6.studentAnswer, $event) || (q_r6.studentAnswer = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 84);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const opt_r7 = ctx.$implicit;
    const q_r6 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", q_r6.studentAnswer === opt_r7.id);
    \u0275\u0275advance();
    \u0275\u0275property("name", "question_" + q_r6.id)("value", opt_r7.id);
    \u0275\u0275twoWayProperty("ngModel", q_r6.studentAnswer);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(opt_r7.optionText);
  }
}
function StudentAssignmentDetailComponent_ng_container_2_div_6_div_9_div_1_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79);
    \u0275\u0275template(1, StudentAssignmentDetailComponent_ng_container_2_div_6_div_9_div_1_div_12_label_1_Template, 5, 5, "label", 80);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", q_r6.options);
  }
}
function StudentAssignmentDetailComponent_ng_container_2_div_6_div_9_div_1_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 86)(1, "textarea", 87);
    \u0275\u0275twoWayListener("ngModelChange", function StudentAssignmentDetailComponent_ng_container_2_div_6_div_9_div_1_div_13_Template_textarea_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r8);
      const q_r6 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(q_r6.studentAnswer, $event) || (q_r6.studentAnswer = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const q_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", q_r6.studentAnswer);
  }
}
function StudentAssignmentDetailComponent_ng_container_2_div_6_div_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69)(1, "div", 70)(2, "span", 71);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 72)(5, "p", 73);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 74)(8, "p", 75);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 76);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(12, StudentAssignmentDetailComponent_ng_container_2_div_6_div_9_div_1_div_12_Template, 2, 1, "div", 77)(13, StudentAssignmentDetailComponent_ng_container_2_div_6_div_9_div_1_div_13_Template, 2, 1, "div", 78);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r6 = ctx.$implicit;
    const i_r9 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(i_r9 + 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(q_r6.questionText);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u0110i\u1EC3m: ", q_r6.score);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isMultipleChoice(q_r6.questionType) ? "Tr\u1EAFc nghi\u1EC7m" : "T\u1EF1 lu\u1EADn", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isMultipleChoice(q_r6.questionType));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isEssay(q_r6.questionType));
  }
}
function StudentAssignmentDetailComponent_ng_container_2_div_6_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67);
    \u0275\u0275template(1, StudentAssignmentDetailComponent_ng_container_2_div_6_div_9_div_1_Template, 14, 6, "div", 68);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.questions());
  }
}
function StudentAssignmentDetailComponent_ng_container_2_div_6_div_10_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 94);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 95);
    \u0275\u0275element(2, "circle", 6)(3, "path", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "p", 96);
    \u0275\u0275text(5, "\u0110ang t\u1EA3i file l\xEAn h\u1EC7 th\u1ED1ng...");
    \u0275\u0275elementEnd()();
  }
}
function StudentAssignmentDetailComponent_ng_container_2_div_6_div_10_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 97)(1, "div", 98);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 99);
    \u0275\u0275element(3, "path", 100);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "p", 101);
    \u0275\u0275text(5, "K\xE9o th\u1EA3 file v\xE0o \u0111\xE2y ho\u1EB7c ");
    \u0275\u0275elementStart(6, "span", 102);
    \u0275\u0275text(7, "ch\u1ECDn file");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "p", 103);
    \u0275\u0275text(9, "H\u1ED7 tr\u1EE3 PDF, DOCX, ZIP, \u1EA2nh, Video (T\u1ED1i \u0111a 10MB/file)");
    \u0275\u0275elementEnd()();
  }
}
function StudentAssignmentDetailComponent_ng_container_2_div_6_div_10_div_5_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 107)(1, "div", 108)(2, "div", 109);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 110);
    \u0275\u0275element(4, "path", 41);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div", 111)(6, "p", 112);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 43);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "button", 113);
    \u0275\u0275listener("click", function StudentAssignmentDetailComponent_ng_container_2_div_6_div_10_div_5_div_3_Template_button_click_11_listener() {
      const file_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.removeAttachment(file_r12.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(12, "svg", 110);
    \u0275\u0275element(13, "path", 114);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const file_r12 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(6);
    \u0275\u0275property("title", file_r12.fileName);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(file_r12.fileName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r1.formatBytes(file_r12.fileSize), " \u2022 T\u1EA3i l\xEAn l\xFAc ", \u0275\u0275pipeBind2(10, 4, file_r12.createdAt, "HH:mm"));
  }
}
function StudentAssignmentDetailComponent_ng_container_2_div_6_div_10_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 104)(1, "h4", 105);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, StudentAssignmentDetailComponent_ng_container_2_div_6_div_10_div_5_div_3_Template, 14, 7, "div", 106);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("T\u1EC7p \u0111\xEDnh k\xE8m c\u1EE7a b\u1EA1n (", ctx_r1.attachments().length, ")");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.attachments());
  }
}
function StudentAssignmentDetailComponent_ng_container_2_div_6_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 88)(1, "div", 89)(2, "input", 90);
    \u0275\u0275listener("change", function StudentAssignmentDetailComponent_ng_container_2_div_6_div_10_Template_input_change_2_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onFileSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, StudentAssignmentDetailComponent_ng_container_2_div_6_div_10_div_3_Template, 6, 0, "div", 91)(4, StudentAssignmentDetailComponent_ng_container_2_div_6_div_10_div_4_Template, 10, 0, "div", 92);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, StudentAssignmentDetailComponent_ng_container_2_div_6_div_10_div_5_Template, 4, 2, "div", 93);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isUploading());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isUploading());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isUploading());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.attachments().length > 0);
  }
}
function StudentAssignmentDetailComponent_ng_container_2_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 55)(2, "h2", 56);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 57);
    \u0275\u0275template(5, StudentAssignmentDetailComponent_ng_container_2_div_6_div_5_Template, 4, 3, "div", 58);
    \u0275\u0275elementStart(6, "button", 59);
    \u0275\u0275listener("click", function StudentAssignmentDetailComponent_ng_container_2_div_6_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openSubmitModal());
    });
    \u0275\u0275template(7, StudentAssignmentDetailComponent_ng_container_2_div_6__svg_svg_7_Template, 3, 0, "svg", 60);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(9, StudentAssignmentDetailComponent_ng_container_2_div_6_div_9_Template, 2, 1, "div", 61)(10, StudentAssignmentDetailComponent_ng_container_2_div_6_div_10_Template, 6, 4, "div", 62);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.assignment().title);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.assignment().durationMinutes);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.isSubmitting());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isSubmitting());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isSubmitting() ? "\u0110ang n\u1ED9p..." : "N\u1ED9p b\xE0i", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.assignment().assignmentType !== "file_upload");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.assignment().assignmentType === "file_upload");
  }
}
function StudentAssignmentDetailComponent_ng_container_2_div_7_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 125);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 126);
    \u0275\u0275element(2, "path", 127);
    \u0275\u0275elementEnd()();
  }
}
function StudentAssignmentDetailComponent_ng_container_2_div_7_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 128);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 129);
    \u0275\u0275element(2, "path", 65);
    \u0275\u0275elementEnd()();
  }
}
function StudentAssignmentDetailComponent_ng_container_2_div_7_div_9__svg_svg_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 138);
    \u0275\u0275element(1, "path", 139);
    \u0275\u0275elementEnd();
  }
}
function StudentAssignmentDetailComponent_ng_container_2_div_7_div_9__svg_svg_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 138);
    \u0275\u0275element(1, "path", 140);
    \u0275\u0275elementEnd();
  }
}
function StudentAssignmentDetailComponent_ng_container_2_div_7_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 130);
    \u0275\u0275element(1, "div", 131);
    \u0275\u0275elementStart(2, "p", 132);
    \u0275\u0275text(3, "\u0110i\u1EC3m s\u1ED1 c\u1EE7a b\u1EA1n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 133)(5, "span", 134);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 135);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 136);
    \u0275\u0275template(10, StudentAssignmentDetailComponent_ng_container_2_div_7_div_9__svg_svg_10_Template, 2, 0, "svg", 137)(11, StudentAssignmentDetailComponent_ng_container_2_div_7_div_9__svg_svg_11_Template, 2, 0, "svg", 137);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate((tmp_3_0 = ctx_r1.mySubmission()) == null ? null : tmp_3_0.score);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("/ ", (tmp_4_0 = ctx_r1.assignment()) == null ? null : tmp_4_0.maxScore);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ((tmp_5_0 = ctx_r1.mySubmission()) == null ? null : tmp_5_0.gradingMethod) === "auto" ? "bg-indigo-100 text-indigo-700" : "bg-emerald-100 text-emerald-700");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_6_0 = ctx_r1.mySubmission()) == null ? null : tmp_6_0.gradingMethod) === "auto");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_7_0 = ctx_r1.mySubmission()) == null ? null : tmp_7_0.gradingMethod) !== "auto");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Ch\u1EA5m ", ((tmp_8_0 = ctx_r1.mySubmission()) == null ? null : tmp_8_0.gradingMethod) === "auto" ? "t\u1EF1 \u0111\u1ED9ng b\u1EB1ng H\u1EC7 th\u1ED1ng" : "b\u1EDFi " + (((tmp_8_0 = ctx_r1.mySubmission()) == null ? null : tmp_8_0.gradedByName) || "Gi\xE1o vi\xEAn"), " ");
  }
}
function StudentAssignmentDetailComponent_ng_container_2_div_7_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 141)(1, "h4", 142);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 143);
    \u0275\u0275element(3, "path", 144);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " L\u1EDDi ph\xEA c\u1EE7a gi\xE1o vi\xEAn ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "p", 145);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate((tmp_3_0 = ctx_r1.mySubmission()) == null ? null : tmp_3_0.teacherFeedback);
  }
}
function StudentAssignmentDetailComponent_ng_container_2_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 115)(1, "div", 116)(2, "div", 117);
    \u0275\u0275template(3, StudentAssignmentDetailComponent_ng_container_2_div_7_div_3_Template, 3, 0, "div", 118)(4, StudentAssignmentDetailComponent_ng_container_2_div_7_div_4_Template, 3, 0, "div", 119);
    \u0275\u0275elementStart(5, "h2", 120);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 121);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, StudentAssignmentDetailComponent_ng_container_2_div_7_div_9_Template, 13, 6, "div", 122)(10, StudentAssignmentDetailComponent_ng_container_2_div_7_div_10_Template, 7, 1, "div", 123);
    \u0275\u0275elementStart(11, "button", 124);
    \u0275\u0275listener("click", function StudentAssignmentDetailComponent_ng_container_2_div_7_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275text(12, " Quay l\u1EA1i danh s\xE1ch b\xE0i t\u1EADp ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ((tmp_2_0 = ctx_r1.mySubmission()) == null ? null : tmp_2_0.submissionStatus) === "graded");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_3_0 = ctx_r1.mySubmission()) == null ? null : tmp_3_0.submissionStatus) !== "graded");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ((tmp_4_0 = ctx_r1.mySubmission()) == null ? null : tmp_4_0.submissionStatus) === "graded" ? "B\xE0i t\u1EADp \u0111\xE3 \u0111\u01B0\u1EE3c ch\u1EA5m \u0111i\u1EC3m" : "N\u1ED9p b\xE0i th\xE0nh c\xF4ng!", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ((tmp_5_0 = ctx_r1.mySubmission()) == null ? null : tmp_5_0.submissionStatus) === "graded" ? "H\u1EC7 th\u1ED1ng \u0111\xE3 ghi nh\u1EADn k\u1EBFt qu\u1EA3 b\xE0i l\xE0m c\u1EE7a b\u1EA1n." : "B\xE0i l\xE0m c\u1EE7a b\u1EA1n \u0111\xE3 \u0111\u01B0\u1EE3c g\u1EEDi t\u1EDBi gi\xE1o vi\xEAn v\xE0 \u0111ang ch\u1EDD ch\u1EA5m \u0111i\u1EC3m.", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_6_0 = ctx_r1.mySubmission()) == null ? null : tmp_6_0.submissionStatus) === "graded");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_7_0 = ctx_r1.mySubmission()) == null ? null : tmp_7_0.teacherFeedback);
  }
}
function StudentAssignmentDetailComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 8);
    \u0275\u0275listener("click", function StudentAssignmentDetailComponent_ng_container_2_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 9);
    \u0275\u0275element(3, "path", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Quay l\u1EA1i l\u1EDBp h\u1ECDc ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, StudentAssignmentDetailComponent_ng_container_2_div_5_Template, 39, 20, "div", 11)(6, StudentAssignmentDetailComponent_ng_container_2_div_6_Template, 11, 7, "div", 11)(7, StudentAssignmentDetailComponent_ng_container_2_div_7_Template, 13, 6, "div", 12);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.viewState() === "info");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.viewState() === "doing");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.viewState() === "done");
  }
}
function StudentAssignmentDetailComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 146)(1, "div", 147);
    \u0275\u0275listener("click", function StudentAssignmentDetailComponent_div_3_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDeleteModal());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 148)(3, "div", 149);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 150);
    \u0275\u0275element(5, "path", 114);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "h3", 151);
    \u0275\u0275text(7, "X\xF3a t\xE0i li\u1EC7u n\xE0y?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 152);
    \u0275\u0275text(9, "B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a file \u0111\xEDnh k\xE8m n\xE0y kh\xF4ng? D\u1EEF li\u1EC7u s\u1EBD b\u1ECB x\xF3a v\u0129nh vi\u1EC5n kh\u1ECFi h\u1EC7 th\u1ED1ng v\xE0 kh\xF4ng th\u1EC3 ho\xE0n t\xE1c.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 153)(11, "button", 154);
    \u0275\u0275listener("click", function StudentAssignmentDetailComponent_div_3_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDeleteModal());
    });
    \u0275\u0275text(12, " H\u1EE7y, gi\u1EEF l\u1EA1i ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 155);
    \u0275\u0275listener("click", function StudentAssignmentDetailComponent_div_3_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmDelete());
    });
    \u0275\u0275text(14, " X\xF3a ");
    \u0275\u0275elementEnd()()()();
  }
}
function StudentAssignmentDetailComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 146)(1, "div", 147);
    \u0275\u0275listener("click", function StudentAssignmentDetailComponent_div_4_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSubmitModal());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 148)(3, "div", 156);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 157);
    \u0275\u0275element(5, "path", 127);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "h3", 151);
    \u0275\u0275text(7, "X\xE1c nh\u1EADn n\u1ED9p b\xE0i?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 152);
    \u0275\u0275text(9, "B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n n\u1ED9p b\xE0i ngay b\xE2y gi\u1EDD kh\xF4ng? Sau khi n\u1ED9p, b\u1EA1n s\u1EBD kh\xF4ng th\u1EC3 ch\u1EC9nh s\u1EEDa l\u1EA1i \u0111\xE1p \xE1n hay t\u1EA3i l\xEAn t\u1EC7p m\u1EDBi.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 153)(11, "button", 154);
    \u0275\u0275listener("click", function StudentAssignmentDetailComponent_div_4_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSubmitModal());
    });
    \u0275\u0275text(12, " Ti\u1EBFp t\u1EE5c l\xE0m b\xE0i ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 158);
    \u0275\u0275listener("click", function StudentAssignmentDetailComponent_div_4_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitFinal(false));
    });
    \u0275\u0275text(14, " N\u1ED9p b\xE0i ");
    \u0275\u0275elementEnd()()()();
  }
}
var StudentAssignmentDetailComponent = class _StudentAssignmentDetailComponent {
  route = inject(ActivatedRoute);
  location = inject(Location);
  assignmentService = inject(StudentAssignmentService);
  toastService = inject(ToastService);
  // States
  viewState = signal("info", ...ngDevMode ? [{ debugName: "viewState" }] : (
    /* istanbul ignore next */
    []
  ));
  // Quản lý màn hình hiện tại
  assignment = signal(null, ...ngDevMode ? [{ debugName: "assignment" }] : (
    /* istanbul ignore next */
    []
  ));
  questions = signal([], ...ngDevMode ? [{ debugName: "questions" }] : (
    /* istanbul ignore next */
    []
  ));
  isLoading = signal(true, ...ngDevMode ? [{ debugName: "isLoading" }] : (
    /* istanbul ignore next */
    []
  ));
  isStarting = signal(false, ...ngDevMode ? [{ debugName: "isStarting" }] : (
    /* istanbul ignore next */
    []
  ));
  mySubmission = signal(null, ...ngDevMode ? [{ debugName: "mySubmission" }] : (
    /* istanbul ignore next */
    []
  ));
  // STATE CHO ĐỒNG HỒ ĐẾM NGƯỢC
  remainingTime = signal(0, ...ngDevMode ? [{ debugName: "remainingTime" }] : (
    /* istanbul ignore next */
    []
  ));
  // Lưu số giây còn lại
  timerDisplay = signal("--:--", ...ngDevMode ? [{ debugName: "timerDisplay" }] : (
    /* istanbul ignore next */
    []
  ));
  // Chuỗi hiển thị (VD: 45:00)
  timerInterval;
  submissionId = signal(null, ...ngDevMode ? [{ debugName: "submissionId" }] : (
    /* istanbul ignore next */
    []
  ));
  isSubmitting = signal(false, ...ngDevMode ? [{ debugName: "isSubmitting" }] : (
    /* istanbul ignore next */
    []
  ));
  attachments = signal([], ...ngDevMode ? [{ debugName: "attachments" }] : (
    /* istanbul ignore next */
    []
  ));
  // Lưu danh sách file đã upload
  isUploading = signal(false, ...ngDevMode ? [{ debugName: "isUploading" }] : (
    /* istanbul ignore next */
    []
  ));
  // Trạng thái đang tải file lên
  // Bổ sung State cho Modal Nộp bài
  showSubmitModal = signal(false, ...ngDevMode ? [{ debugName: "showSubmitModal" }] : (
    /* istanbul ignore next */
    []
  ));
  // Bổ sung State cho Modal Xóa File
  showDeleteModal = signal(false, ...ngDevMode ? [{ debugName: "showDeleteModal" }] : (
    /* istanbul ignore next */
    []
  ));
  fileToDelete = signal(null, ...ngDevMode ? [{ debugName: "fileToDelete" }] : (
    /* istanbul ignore next */
    []
  ));
  ngOnDestroy() {
    this.clearTimer();
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.loadAssignmentDetail(id);
    }
  }
  loadAssignmentDetail(id) {
    this.isLoading.set(true);
    forkJoin({
      assignment: this.assignmentService.getAssignmentDetail(id),
      submission: this.assignmentService.getMySubmission(id).pipe(
        catchError(() => of(null))
        // Bắt lỗi nếu học sinh chưa từng làm bài này
      )
    }).subscribe({
      next: (res) => {
        this.assignment.set(res.assignment);
        if (res.submission && ["submitted", "graded", "late"].includes(res.submission.submissionStatus.toLowerCase())) {
          this.mySubmission.set(res.submission);
          this.viewState.set("done");
        } else {
          if (res.submission)
            this.submissionId.set(res.submission.id);
          this.viewState.set("info");
        }
        this.isLoading.set(false);
      },
      error: () => {
        this.toastService.error("L\u1ED7i", "Kh\xF4ng th\u1EC3 t\u1EA3i th\xF4ng tin b\xE0i t\u1EADp.");
        this.isLoading.set(false);
      }
    });
  }
  // Hàm xử lý khi học sinh ấn "Bắt đầu làm bài"
  startAssignment() {
    this.isStarting.set(true);
    const asmId = this.assignment().id;
    const duration = this.assignment().durationMinutes;
    this.assignmentService.getQuestions(asmId).subscribe({
      next: (questionsRes) => {
        this.assignmentService.submitAssignment(asmId, false).subscribe({
          next: (subRes) => {
            this.submissionId.set(subRes.id);
            if (!questionsRes || questionsRes.length === 0) {
              this.viewState.set("doing");
              this.isStarting.set(false);
              if (duration && duration > 0)
                this.startTimer(duration);
              return;
            }
            const optionRequests = questionsRes.map((q) => {
              if (this.isMultipleChoice(q.questionType)) {
                return this.assignmentService.getQuestionOptions(q.id);
              }
              return of([]);
            });
            forkJoin(optionRequests).subscribe((optionsArray) => {
              questionsRes.forEach((q, index) => {
                q.options = optionsArray[index];
                q.studentAnswer = null;
              });
              this.questions.set(questionsRes);
              this.viewState.set("doing");
              this.isStarting.set(false);
              if (duration && duration > 0) {
                this.startTimer(duration);
              }
            });
          },
          error: () => {
            this.toastService.error("L\u1ED7i", "Kh\xF4ng th\u1EC3 kh\u1EDFi t\u1EA1o phi\xEAn l\xE0m b\xE0i. Vui l\xF2ng th\u1EED l\u1EA1i.");
            this.isStarting.set(false);
          }
        });
      },
      error: () => {
        this.toastService.error("L\u1ED7i", "Kh\xF4ng th\u1EC3 t\u1EA3i c\u1EA5u tr\xFAc \u0111\u1EC1 thi.");
        this.isStarting.set(false);
      }
    });
  }
  goBack() {
    this.location.back();
  }
  isMultipleChoice(type) {
    if (!type)
      return false;
    return type.toString().toLowerCase().trim() === "multiple_choice";
  }
  isEssay(type) {
    if (!type)
      return false;
    return type.toString().toLowerCase().trim() === "essay";
  }
  startTimer(minutes) {
    this.remainingTime.set(minutes * 60);
    this.updateTimerDisplay();
    this.timerInterval = setInterval(() => {
      if (this.remainingTime() > 0) {
        this.remainingTime.update((t) => t - 1);
        this.updateTimerDisplay();
      } else {
        this.clearTimer();
        this.toastService.warning("H\u1EBFt gi\u1EDD!", "\u0110\xE3 h\u1EBFt th\u1EDDi gian l\xE0m b\xE0i. H\u1EC7 th\u1ED1ng s\u1EBD t\u1EF1 \u0111\u1ED9ng n\u1ED9p b\xE0i.");
        this.submitFinal(true);
      }
    }, 1e3);
  }
  updateTimerDisplay() {
    const totalSeconds = this.remainingTime();
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor(totalSeconds % 3600 / 60);
    const s = totalSeconds % 60;
    if (h > 0) {
      this.timerDisplay.set(`${this.pad(h)}:${this.pad(m)}:${this.pad(s)}`);
    } else {
      this.timerDisplay.set(`${this.pad(m)}:${this.pad(s)}`);
    }
  }
  pad(val) {
    return val < 10 ? "0" + val : val.toString();
  }
  clearTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }
  openSubmitModal() {
    this.showSubmitModal.set(true);
  }
  // Hàm đóng Modal
  closeSubmitModal() {
    this.showSubmitModal.set(false);
  }
  // LOGIC NỘP BÀI (SUBMIT)
  submitFinal(isAutoSubmit = false) {
    this.closeSubmitModal();
    this.isSubmitting.set(true);
    const subId = this.submissionId();
    if (!subId)
      return;
    if (this.assignment().assignmentType !== "file_upload" && this.questions().length > 0) {
      const saveRequests = this.questions().map((q) => {
        const payload = {};
        if (this.isMultipleChoice(q.questionType)) {
          payload.selectedOptionId = q.studentAnswer;
        } else if (this.isEssay(q.questionType)) {
          payload.answerText = q.studentAnswer;
        }
        if (payload.selectedOptionId || payload.answerText) {
          return this.assignmentService.saveAnswer(subId, q.id, payload);
        }
        return of(null);
      });
      forkJoin(saveRequests).subscribe({
        next: () => this.finalizeSubmission(),
        error: () => {
          this.toastService.error("L\u1ED7i", "Kh\xF4ng th\u1EC3 l\u01B0u \u0111\xE1p \xE1n. Vui l\xF2ng ki\u1EC3m tra m\u1EA1ng v\xE0 th\u1EED l\u1EA1i.");
          this.isSubmitting.set(false);
        }
      });
    } else {
      this.finalizeSubmission();
    }
  }
  finalizeSubmission() {
    this.assignmentService.submitAssignment(this.assignment().id, true).subscribe({
      next: (res) => {
        this.clearTimer();
        this.isSubmitting.set(false);
        this.mySubmission.set(res);
        this.viewState.set("done");
      },
      error: () => {
        this.toastService.error("L\u1ED7i", "C\xF3 l\u1ED7i x\u1EA3y ra khi n\u1ED9p b\xE0i!");
        this.isSubmitting.set(false);
      }
    });
  }
  onFileSelected(event) {
    const file = event.target.files[0];
    if (!file)
      return;
    if (file.size > 10 * 1024 * 1024) {
      this.toastService.warning("File qu\xE1 l\u1EDBn", "Vui l\xF2ng ch\u1ECDn file c\xF3 dung l\u01B0\u1EE3ng d\u01B0\u1EDBi 10MB.");
      event.target.value = "";
      return;
    }
    const subId = this.submissionId();
    if (!subId) {
      this.toastService.error("L\u1ED7i", "Ch\u01B0a kh\u1EDFi t\u1EA1o \u0111\u01B0\u1EE3c phi\xEAn l\xE0m b\xE0i. Vui l\xF2ng t\u1EA3i l\u1EA1i trang.");
      return;
    }
    this.isUploading.set(true);
    this.assignmentService.uploadAttachment(subId, file).subscribe({
      next: (res) => {
        this.attachments.update((files) => [...files, res]);
        this.isUploading.set(false);
      },
      error: (err) => {
        this.toastService.error("L\u1ED7i", err.error?.message || "Kh\xF4ng th\u1EC3 t\u1EA3i file l\xEAn. Vui l\xF2ng th\u1EED l\u1EA1i.");
        this.isUploading.set(false);
      }
    });
    event.target.value = "";
  }
  // Hàm mở Modal khi người dùng ấn nút Xóa
  removeAttachment(attachmentId) {
    this.fileToDelete.set(attachmentId);
    this.showDeleteModal.set(true);
  }
  // Hàm đóng Modal khi người dùng ấn Hủy hoặc Click ra ngoài
  closeDeleteModal() {
    this.showDeleteModal.set(false);
    this.fileToDelete.set(null);
  }
  // Hàm thực thi lệnh Xóa 
  confirmDelete() {
    const attachmentId = this.fileToDelete();
    if (!attachmentId)
      return;
    this.assignmentService.deleteAttachment(attachmentId).subscribe({
      next: () => {
        this.attachments.update((files) => files.filter((f) => f.id !== attachmentId));
        this.closeDeleteModal();
        this.toastService.success("Th\xE0nh c\xF4ng", "\u0110\xE3 x\xF3a file \u0111\xEDnh k\xE8m kh\u1ECFi h\u1EC7 th\u1ED1ng.");
      },
      error: () => {
        this.toastService.error("L\u1ED7i", "Kh\xF4ng th\u1EC3 x\xF3a file. Vui l\xF2ng th\u1EED l\u1EA1i.");
        this.closeDeleteModal();
      }
    });
  }
  formatBytes(bytes, decimals = 2) {
    if (!bytes || bytes === 0)
      return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }
  isSubmissionBlocked() {
    const asm = this.assignment();
    if (!asm || !asm.dueTime)
      return false;
    const now = (/* @__PURE__ */ new Date()).getTime();
    const due = new Date(asm.dueTime).getTime();
    return now > due && !asm.allowLateSubmission;
  }
  static \u0275fac = function StudentAssignmentDetailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StudentAssignmentDetailComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StudentAssignmentDetailComponent, selectors: [["app-student-assignment-detail"]], decls: 5, vars: 4, consts: [[1, "max-w-4xl", "mx-auto", "space-y-6", "pb-12", "pt-4"], ["class", "py-20 flex justify-center", 4, "ngIf"], [4, "ngIf"], ["class", "fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-0", 4, "ngIf"], [1, "py-20", "flex", "justify-center"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-10", "w-10", "text-indigo-500"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"], [1, "flex", "items-center", "text-sm", "font-bold", "text-gray-500", "hover:text-indigo-600", "transition", "group", "mb-2", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "mr-1", "transform", "group-hover:-translate-x-1", "transition"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 19l-7-7 7-7"], ["class", "animate-[fadeIn_0.3s_ease-out]", 4, "ngIf"], ["class", "animate-[fadeIn_0.5s_ease-out] py-8", 4, "ngIf"], [1, "animate-[fadeIn_0.3s_ease-out]"], [1, "bg-white", "p-8", "rounded-3xl", "border", "border-gray-100", "shadow-sm", "relative", "overflow-hidden"], [1, "absolute", "top-0", "left-0", "w-2", "h-full", "bg-indigo-500"], [1, "text-3xl", "font-extrabold", "text-gray-900", "tracking-tight"], [1, "flex", "flex-wrap", "items-center", "gap-4", "mt-4", "text-sm", "font-medium", "text-gray-600"], [1, "bg-gray-100", "px-3", "py-1", "rounded-lg"], [1, "text-indigo-600", "font-bold", "uppercase"], [1, "bg-amber-50", "text-amber-700", "px-3", "py-1", "rounded-lg"], ["class", "bg-emerald-50 text-emerald-700 px-3 py-1 rounded-lg", 4, "ngIf"], [1, "mt-6", "bg-white", "p-8", "rounded-3xl", "border", "border-gray-100", "shadow-sm"], [1, "text-lg", "font-bold", "text-gray-900", "border-b", "border-gray-100", "pb-3", "mb-4"], [1, "text-gray-600", "whitespace-pre-line", "leading-relaxed"], ["class", "mt-6 border border-gray-200 rounded-2xl p-4 flex items-center justify-between bg-gray-50/50 group hover:bg-white hover:border-indigo-100 transition-colors", 4, "ngIf"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "gap-4", "mt-8", "bg-gray-50", "p-5", "rounded-2xl"], [1, "flex", "flex-col"], [1, "text-xs", "font-bold", "text-gray-500", "uppercase"], [1, "text-sm", "font-bold", "text-gray-900", "mt-1"], [1, "text-sm", "font-bold", "text-red-600", "mt-1"], [1, "mt-8", "flex", "flex-col", "sm:flex-row", "justify-end", "items-center", "gap-4"], ["class", "flex items-center text-red-600 bg-red-50 px-5 py-3.5 rounded-xl border border-red-200 w-full sm:w-auto animate-[fadeIn_0.3s_ease-out]", 4, "ngIf"], [1, "flex", "items-center", "justify-center", "px-8", "py-3.5", "bg-indigo-600", "text-white", "text-base", "font-bold", "rounded-xl", "shadow-md", "transition-all", "duration-300", "disabled:opacity-50", "disabled:cursor-not-allowed", "disabled:bg-gray-400", "hover:bg-indigo-700", "hover:-translate-y-0.5", "disabled:hover:translate-y-0", "w-full", "sm:w-auto", 3, "click", "disabled"], ["class", "animate-spin -ml-1 mr-2 h-5 w-5 text-white", "fill", "none", "viewBox", "0 0 24 24", 4, "ngIf"], ["class", "w-5 h-5 ml-2", "fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 4, "ngIf"], [1, "bg-emerald-50", "text-emerald-700", "px-3", "py-1", "rounded-lg"], [1, "mt-6", "border", "border-gray-200", "rounded-2xl", "p-4", "flex", "items-center", "justify-between", "bg-gray-50/50", "group", "hover:bg-white", "hover:border-indigo-100", "transition-colors"], [1, "flex", "items-center", "gap-4"], [1, "w-12", "h-12", "bg-indigo-100", "text-indigo-600", "rounded-xl", "flex", "items-center", "justify-center", "shrink-0"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"], [1, "text-sm", "font-bold", "text-gray-900"], [1, "text-xs", "text-gray-500", "mt-0.5"], ["target", "_blank", 1, "px-5", "py-2.5", "bg-white", "border", "border-gray-200", "text-indigo-600", "text-sm", "font-bold", "rounded-xl", "shadow-sm", "hover:bg-indigo-50", "hover:border-indigo-200", "transition-all", "flex", "items-center", 3, "href"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "ml-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"], [1, "flex", "items-center", "text-red-600", "bg-red-50", "px-5", "py-3.5", "rounded-xl", "border", "border-red-200", "w-full", "sm:w-auto", "animate-[fadeIn_0.3s_ease-out]"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "mr-2", "shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"], [1, "text-sm", "font-bold"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "-ml-1", "mr-2", "h-5", "w-5", "text-white"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "ml-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M13 5l7 7-7 7M5 5l7 7-7 7"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"], [1, "sticky", "top-20", "z-30", "bg-white/90", "backdrop-blur-md", "p-4", "rounded-2xl", "shadow-sm", "border", "border-indigo-100", "flex", "justify-between", "items-center", "mb-6"], [1, "text-lg", "font-bold", "text-gray-900", "truncate", "pr-4"], [1, "flex", "items-center", "space-x-4", "shrink-0"], ["class", "flex items-center px-4 py-2 bg-gray-100 rounded-xl font-mono text-xl font-bold tracking-wider shadow-inner transition-colors duration-300", 3, "ngClass", 4, "ngIf"], [1, "flex", "items-center", "px-6", "py-2.5", "bg-emerald-500", "hover:bg-emerald-600", "text-white", "font-bold", "rounded-xl", "shadow-sm", "transition", "disabled:opacity-70", 3, "click", "disabled"], ["class", "animate-spin -ml-1 mr-2 h-4 w-4 text-white", "fill", "none", "viewBox", "0 0 24 24", 4, "ngIf"], ["class", "space-y-6", 4, "ngIf"], ["class", "bg-white p-6 sm:p-10 rounded-3xl border border-gray-100 shadow-sm", 4, "ngIf"], [1, "flex", "items-center", "px-4", "py-2", "bg-gray-100", "rounded-xl", "font-mono", "text-xl", "font-bold", "tracking-wider", "shadow-inner", "transition-colors", "duration-300", 3, "ngClass"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "mr-2", 3, "ngClass"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "-ml-1", "mr-2", "h-4", "w-4", "text-white"], [1, "space-y-6"], ["class", "bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm", 4, "ngFor", "ngForOf"], [1, "bg-white", "p-6", "sm:p-8", "rounded-3xl", "border", "border-gray-100", "shadow-sm"], [1, "flex", "items-start", "gap-4", "mb-4", "pb-4", "border-b", "border-gray-50"], [1, "flex-shrink-0", "w-8", "h-8", "bg-indigo-100", "text-indigo-700", "font-extrabold", "rounded-full", "flex", "items-center", "justify-center"], [1, "flex-1"], [1, "text-base", "font-bold", "text-gray-900", "leading-relaxed"], [1, "flex", "items-center", "gap-3", "mt-2"], [1, "text-xs", "text-gray-400", "font-medium"], [1, "px-2", "py-0.5", "rounded", "bg-gray-100", "text-gray-500", "text-[10px]", "font-bold", "uppercase", "tracking-wider"], ["class", "ml-12 space-y-3 mt-4", 4, "ngIf"], ["class", "ml-12 mt-4", 4, "ngIf"], [1, "ml-12", "space-y-3", "mt-4"], ["class", "flex items-center p-4 border border-gray-200 rounded-xl cursor-pointer hover:bg-indigo-50 hover:border-indigo-200 transition group relative", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "p-4", "border", "border-gray-200", "rounded-xl", "cursor-pointer", "hover:bg-indigo-50", "hover:border-indigo-200", "transition", "group", "relative"], ["class", "absolute inset-0 border-2 border-indigo-500 rounded-xl bg-indigo-50/50", 4, "ngIf"], ["type", "radio", 1, "w-5", "h-5", "text-indigo-600", "border-gray-300", "focus:ring-indigo-500", "z-10", 3, "ngModelChange", "name", "value", "ngModel"], [1, "ml-4", "text-sm", "font-medium", "text-gray-700", "group-hover:text-indigo-900", "z-10", "transition-colors"], [1, "absolute", "inset-0", "border-2", "border-indigo-500", "rounded-xl", "bg-indigo-50/50"], [1, "ml-12", "mt-4"], ["rows", "6", "placeholder", "Nh\u1EADp c\xE2u tr\u1EA3 l\u1EDDi t\u1EF1 lu\u1EADn c\u1EE7a b\u1EA1n t\u1EA1i \u0111\xE2y...", 1, "w-full", "p-4", "text-sm", "border", "border-gray-200", "rounded-2xl", "focus:ring-2", "focus:ring-indigo-100", "focus:border-indigo-500", "outline-none", "transition", "shadow-inner", "bg-gray-50", "hover:bg-white", "focus:bg-white", "resize-y", "min-h-[150px]", 3, "ngModelChange", "ngModel"], [1, "bg-white", "p-6", "sm:p-10", "rounded-3xl", "border", "border-gray-100", "shadow-sm"], [1, "border-2", "border-dashed", "border-indigo-200", "bg-indigo-50/50", "rounded-2xl", "p-8", "sm:p-12", "text-center", "transition-colors", "hover:bg-indigo-50", "relative", "group"], ["type", "file", 1, "absolute", "inset-0", "w-full", "h-full", "opacity-0", "cursor-pointer", "z-10", "disabled:cursor-not-allowed", 3, "change", "disabled"], ["class", "flex flex-col items-center justify-center animate-[fadeIn_0.2s_ease-out]", 4, "ngIf"], ["class", "flex flex-col items-center justify-center", 4, "ngIf"], ["class", "mt-8 space-y-3", 4, "ngIf"], [1, "flex", "flex-col", "items-center", "justify-center", "animate-[fadeIn_0.2s_ease-out]"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-10", "w-10", "text-indigo-600", "mb-4"], [1, "text-sm", "font-bold", "text-indigo-700"], [1, "flex", "flex-col", "items-center", "justify-center"], [1, "w-16", "h-16", "bg-white", "rounded-full", "shadow-sm", "flex", "items-center", "justify-center", "mb-4", "group-hover:scale-110", "transition-transform"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "h-8", "w-8", "text-indigo-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"], [1, "text-base", "font-bold", "text-gray-900"], [1, "text-indigo-600", "underline"], [1, "mt-2", "text-xs", "text-gray-500"], [1, "mt-8", "space-y-3"], [1, "text-sm", "font-bold", "text-gray-900", "mb-4", "border-b", "border-gray-100", "pb-2"], ["class", "flex items-center justify-between p-4 bg-white border border-gray-200 rounded-xl shadow-sm hover:border-indigo-300 transition-colors", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "justify-between", "p-4", "bg-white", "border", "border-gray-200", "rounded-xl", "shadow-sm", "hover:border-indigo-300", "transition-colors"], [1, "flex", "items-center", "gap-3", "overflow-hidden"], [1, "w-10", "h-10", "bg-indigo-50", "text-indigo-600", "rounded-lg", "flex", "items-center", "justify-center", "shrink-0"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], [1, "min-w-0", "flex-1"], [1, "text-sm", "font-bold", "text-gray-900", "truncate", 3, "title"], ["title", "X\xF3a file", 1, "p-2", "text-gray-400", "hover:text-red-600", "hover:bg-red-50", "rounded-lg", "transition-colors", "shrink-0", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"], [1, "animate-[fadeIn_0.5s_ease-out]", "py-8"], [1, "max-w-2xl", "mx-auto"], [1, "bg-white", "p-8", "sm:p-10", "rounded-3xl", "border", "border-gray-100", "shadow-sm", "text-center", "mb-6"], ["class", "mx-auto w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mb-6 border-4 border-white shadow-md", 4, "ngIf"], ["class", "mx-auto w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mb-6 border-4 border-white shadow-md", 4, "ngIf"], [1, "text-3xl", "font-extrabold", "text-gray-900", "mb-3"], [1, "text-gray-500", "mb-8", "text-base"], ["class", "bg-gray-50 rounded-3xl p-8 mb-8 border border-gray-100 relative overflow-hidden", 4, "ngIf"], ["class", "text-left bg-amber-50/80 rounded-2xl p-6 border border-amber-200 mb-8 shadow-sm", 4, "ngIf"], [1, "w-full", "py-4", "bg-gray-50", "text-gray-700", "font-bold", "rounded-2xl", "hover:bg-gray-100", "hover:text-indigo-600", "transition-colors", "border", "border-gray-200", 3, "click"], [1, "mx-auto", "w-24", "h-24", "bg-emerald-100", "rounded-full", "flex", "items-center", "justify-center", "mb-6", "border-4", "border-white", "shadow-md"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-12", "h-12", "text-emerald-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "mx-auto", "w-24", "h-24", "bg-blue-100", "rounded-full", "flex", "items-center", "justify-center", "mb-6", "border-4", "border-white", "shadow-md"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-12", "h-12", "text-blue-500"], [1, "bg-gray-50", "rounded-3xl", "p-8", "mb-8", "border", "border-gray-100", "relative", "overflow-hidden"], [1, "absolute", "top-0", "right-0", "w-32", "h-32", "bg-indigo-100", "rounded-full", "blur-3xl", "opacity-50", "-mr-10", "-mt-10"], [1, "text-sm", "font-bold", "text-gray-500", "uppercase", "tracking-widest", "mb-3", "relative", "z-10"], [1, "flex", "items-baseline", "justify-center", "gap-2", "relative", "z-10"], [1, "text-6xl", "font-black", "text-indigo-600"], [1, "text-2xl", "font-bold", "text-gray-400"], [1, "mt-5", "inline-flex", "items-center", "px-4", "py-1.5", "rounded-full", "text-xs", "font-bold", "relative", "z-10", "shadow-sm", 3, "ngClass"], ["class", "w-4 h-4 mr-1.5", "fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 4, "ngIf"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "mr-1.5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M13 10V3L4 14h7v7l9-11h-7z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"], [1, "text-left", "bg-amber-50/80", "rounded-2xl", "p-6", "border", "border-amber-200", "mb-8", "shadow-sm"], [1, "text-sm", "font-bold", "text-amber-900", "mb-3", "flex", "items-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "mr-2", "text-amber-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"], [1, "text-sm", "text-amber-800", "leading-relaxed", "whitespace-pre-line", "font-medium"], [1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "p-4", "sm:p-0"], [1, "fixed", "inset-0", "bg-gray-900/40", "backdrop-blur-sm", "transition-opacity", 3, "click"], [1, "relative", "bg-white", "rounded-3xl", "shadow-2xl", "w-full", "max-w-md", "overflow-hidden", "transform", "transition-all", "p-6", "sm:p-8", "text-center", "animate-[slideUp_0.2s_ease-out]"], [1, "mx-auto", "w-16", "h-16", "bg-red-50", "rounded-full", "flex", "items-center", "justify-center", "mb-6", "border", "border-red-100"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-8", "h-8", "text-red-500"], [1, "text-2xl", "font-extrabold", "text-gray-900", "mb-2"], [1, "text-gray-500", "text-sm", "mb-8", "leading-relaxed"], [1, "flex", "flex-col", "sm:flex-row", "gap-3"], [1, "w-full", "px-5", "py-3", "text-sm", "font-bold", "text-gray-700", "bg-gray-100", "hover:bg-gray-200", "rounded-xl", "transition-colors", 3, "click"], [1, "w-full", "px-5", "py-3", "text-sm", "font-bold", "text-white", "bg-red-600", "hover:bg-red-700", "rounded-xl", "transition-colors", "shadow-md", "shadow-red-200", 3, "click"], [1, "mx-auto", "w-16", "h-16", "bg-emerald-50", "rounded-full", "flex", "items-center", "justify-center", "mb-6", "border", "border-emerald-100"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-8", "h-8", "text-emerald-500"], [1, "w-full", "px-5", "py-3", "text-sm", "font-bold", "text-white", "bg-emerald-500", "hover:bg-emerald-600", "rounded-xl", "transition-colors", "shadow-md", "shadow-emerald-200", 3, "click"]], template: function StudentAssignmentDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, StudentAssignmentDetailComponent_div_1_Template, 4, 0, "div", 1)(2, StudentAssignmentDetailComponent_ng_container_2_Template, 8, 3, "ng-container", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275template(3, StudentAssignmentDetailComponent_div_3_Template, 15, 0, "div", 3)(4, StudentAssignmentDetailComponent_div_4_Template, 15, 0, "div", 3);
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading() && ctx.assignment());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showDeleteModal());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showSubmitModal());
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, RouterModule, FormsModule, DefaultValueAccessor, RadioControlValueAccessor, NgControlStatus, NgModel, DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StudentAssignmentDetailComponent, [{
    type: Component,
    args: [{ selector: "app-student-assignment-detail", standalone: true, imports: [CommonModule, RouterModule, FormsModule], template: `<div class="max-w-4xl mx-auto space-y-6 pb-12 pt-4">\r
\r
  <div *ngIf="isLoading()" class="py-20 flex justify-center">\r
    <svg class="animate-spin h-10 w-10 text-indigo-500" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>\r
  </div>\r
\r
  <ng-container *ngIf="!isLoading() && assignment()">\r
    \r
    <button (click)="goBack()" class="flex items-center text-sm font-bold text-gray-500 hover:text-indigo-600 transition group mb-2">\r
      <svg class="w-5 h-5 mr-1 transform group-hover:-translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>\r
      Quay l\u1EA1i l\u1EDBp h\u1ECDc\r
    </button>\r
\r
    <div *ngIf="viewState() === 'info'" class="animate-[fadeIn_0.3s_ease-out]">\r
      \r
      <div class="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden">\r
        <div class="absolute top-0 left-0 w-2 h-full bg-indigo-500"></div>\r
        <h1 class="text-3xl font-extrabold text-gray-900 tracking-tight">{{ assignment().title }}</h1>\r
        <div class="flex flex-wrap items-center gap-4 mt-4 text-sm font-medium text-gray-600">\r
          <span class="bg-gray-100 px-3 py-1 rounded-lg">Lo\u1EA1i: <span class="text-indigo-600 font-bold uppercase">{{ assignment().assignmentType }}</span></span>\r
          <span class="bg-amber-50 text-amber-700 px-3 py-1 rounded-lg">\u0110i\u1EC3m t\u1ED1i \u0111a: {{ assignment().maxScore }}</span>\r
          <span class="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-lg" *ngIf="assignment().durationMinutes">Th\u1EDDi gian: {{ assignment().durationMinutes }} ph\xFAt</span>\r
        </div>\r
      </div>\r
\r
      <div class="mt-6 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">\r
        <h3 class="text-lg font-bold text-gray-900 border-b border-gray-100 pb-3 mb-4">H\u01B0\u1EDBng d\u1EABn l\xE0m b\xE0i</h3>\r
        <p class="text-gray-600 whitespace-pre-line leading-relaxed">{{ assignment().description || 'Kh\xF4ng c\xF3 h\u01B0\u1EDBng d\u1EABn c\u1EE5 th\u1EC3.' }}</p>\r
\r
        <div *ngIf="assignment().attachmentUrl" class="mt-6 border border-gray-200 rounded-2xl p-4 flex items-center justify-between bg-gray-50/50 group hover:bg-white hover:border-indigo-100 transition-colors">\r
          <div class="flex items-center gap-4">\r
            <div class="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center shrink-0">\r
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path></svg>\r
            </div>\r
            <div>\r
              <p class="text-sm font-bold text-gray-900">T\xE0i li\u1EC7u \u0111\xEDnh k\xE8m</p>\r
              <p class="text-xs text-gray-500 mt-0.5">\u0110\u1EC1 b\xE0i ho\u1EB7c t\u1EC7p h\u01B0\u1EDBng d\u1EABn t\u1EEB gi\xE1o vi\xEAn</p>\r
            </div>\r
          </div>\r
          <a [href]="assignment().attachmentUrl" target="_blank" class="px-5 py-2.5 bg-white border border-gray-200 text-indigo-600 text-sm font-bold rounded-xl shadow-sm hover:bg-indigo-50 hover:border-indigo-200 transition-all flex items-center">\r
            T\u1EA3i xu\u1ED1ng\r
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>\r
          </a>\r
        </div>\r
\r
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 bg-gray-50 p-5 rounded-2xl">\r
          <div class="flex flex-col">\r
            <span class="text-xs font-bold text-gray-500 uppercase">Th\u1EDDi gian m\u1EDF \u0111\u1EC1</span>\r
            <span class="text-sm font-bold text-gray-900 mt-1">{{ assignment().startTime ? (assignment().startTime | date:'HH:mm dd/MM/yyyy') : 'Lu\xF4n m\u1EDF' }}</span>\r
          </div>\r
          <div class="flex flex-col">\r
            <span class="text-xs font-bold text-gray-500 uppercase">H\u1EA1n n\u1ED9p cu\u1ED1i</span>\r
            <span class="text-sm font-bold text-red-600 mt-1">{{ assignment().dueTime ? (assignment().dueTime | date:'HH:mm dd/MM/yyyy') : 'Kh\xF4ng gi\u1EDBi h\u1EA1n' }}</span>\r
          </div>\r
        </div>\r
\r
        <div class="mt-8 flex flex-col sm:flex-row justify-end items-center gap-4">\r
          \r
          <div *ngIf="isSubmissionBlocked()" class="flex items-center text-red-600 bg-red-50 px-5 py-3.5 rounded-xl border border-red-200 w-full sm:w-auto animate-[fadeIn_0.3s_ease-out]">\r
            <svg class="w-5 h-5 mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>\r
            <span class="text-sm font-bold">\u0110\xE3 h\u1EBFt h\u1EA1n. L\u1EDBp h\u1ECDc kh\xF4ng cho ph\xE9p n\u1ED9p mu\u1ED9n!</span>\r
          </div>\r
\r
          <button (click)="startAssignment()" \r
                  [disabled]="isStarting() || isSubmissionBlocked()" \r
                  class="flex items-center justify-center px-8 py-3.5 bg-indigo-600 text-white text-base font-bold rounded-xl shadow-md transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-400 hover:bg-indigo-700 hover:-translate-y-0.5 disabled:hover:translate-y-0 w-full sm:w-auto">\r
            \r
            <svg *ngIf="isStarting()" class="animate-spin -ml-1 mr-2 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>\r
            \r
            {{ isStarting() ? '\u0110ang chu\u1EA9n b\u1ECB \u0111\u1EC1...' : (isSubmissionBlocked() ? 'B\xE0i t\u1EADp \u0111\xE3 kh\xF3a' : 'B\u1EAFt \u0111\u1EA7u l\xE0m b\xE0i') }}\r
            \r
            <svg *ngIf="!isStarting() && !isSubmissionBlocked()" class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>\r
            <svg *ngIf="isSubmissionBlocked()" class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div *ngIf="viewState() === 'doing'" class="animate-[fadeIn_0.3s_ease-out]">\r
      \r
      <div class="sticky top-20 z-30 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-sm border border-indigo-100 flex justify-between items-center mb-6">\r
        <h2 class="text-lg font-bold text-gray-900 truncate pr-4">{{ assignment().title }}</h2>\r
        <div class="flex items-center space-x-4 shrink-0">\r
\r
            <div *ngIf="assignment().durationMinutes" \r
                class="flex items-center px-4 py-2 bg-gray-100 rounded-xl font-mono text-xl font-bold tracking-wider shadow-inner transition-colors duration-300"\r
                [ngClass]="remainingTime() <= 300 && remainingTime() > 0 ? 'text-red-600 bg-red-50 border border-red-200 animate-pulse' : 'text-gray-800'">\r
             <svg class="w-5 h-5 mr-2" [ngClass]="remainingTime() <= 300 && remainingTime() > 0 ? 'text-red-500' : 'text-gray-500'" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>\r
             {{ timerDisplay() }}\r
           </div>\r
\r
           <button (click)="openSubmitModal()" [disabled]="isSubmitting()" class="flex items-center px-6 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl shadow-sm transition disabled:opacity-70">\r
             <svg *ngIf="isSubmitting()" class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>\r
             {{ isSubmitting() ? '\u0110ang n\u1ED9p...' : 'N\u1ED9p b\xE0i' }}\r
           </button>\r
        </div>\r
      </div>\r
\r
      <div class="space-y-6" *ngIf="assignment().assignmentType !== 'file_upload'">\r
        <div *ngFor="let q of questions(); let i = index" class="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm">\r
          \r
          <div class="flex items-start gap-4 mb-4 pb-4 border-b border-gray-50">\r
            <span class="flex-shrink-0 w-8 h-8 bg-indigo-100 text-indigo-700 font-extrabold rounded-full flex items-center justify-center">{{ i + 1 }}</span>\r
            <div class="flex-1">\r
              <p class="text-base font-bold text-gray-900 leading-relaxed">{{ q.questionText }}</p>\r
              <div class="flex items-center gap-3 mt-2">\r
                <p class="text-xs text-gray-400 font-medium">\u0110i\u1EC3m: {{ q.score }}</p>\r
                <span class="px-2 py-0.5 rounded bg-gray-100 text-gray-500 text-[10px] font-bold uppercase tracking-wider">\r
                  {{ isMultipleChoice(q.questionType) ? 'Tr\u1EAFc nghi\u1EC7m' : 'T\u1EF1 lu\u1EADn' }}\r
                </span>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <div *ngIf="isMultipleChoice(q.questionType)" class="ml-12 space-y-3 mt-4">\r
            <label *ngFor="let opt of q.options" class="flex items-center p-4 border border-gray-200 rounded-xl cursor-pointer hover:bg-indigo-50 hover:border-indigo-200 transition group relative">\r
              <div *ngIf="q.studentAnswer === opt.id" class="absolute inset-0 border-2 border-indigo-500 rounded-xl bg-indigo-50/50"></div>\r
              <input type="radio" [name]="'question_' + q.id" [value]="opt.id" [(ngModel)]="q.studentAnswer" class="w-5 h-5 text-indigo-600 border-gray-300 focus:ring-indigo-500 z-10">\r
              <span class="ml-4 text-sm font-medium text-gray-700 group-hover:text-indigo-900 z-10 transition-colors">{{ opt.optionText }}</span>\r
            </label>\r
          </div>\r
\r
          <div *ngIf="isEssay(q.questionType)" class="ml-12 mt-4">\r
             <textarea \r
                [(ngModel)]="q.studentAnswer" \r
                rows="6" \r
                placeholder="Nh\u1EADp c\xE2u tr\u1EA3 l\u1EDDi t\u1EF1 lu\u1EADn c\u1EE7a b\u1EA1n t\u1EA1i \u0111\xE2y..." \r
                class="w-full p-4 text-sm border border-gray-200 rounded-2xl focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500 outline-none transition shadow-inner bg-gray-50 hover:bg-white focus:bg-white resize-y min-h-[150px]"></textarea>\r
          </div>\r
\r
        </div>\r
      </div>\r
\r
      <div *ngIf="assignment().assignmentType === 'file_upload'" class="bg-white p-6 sm:p-10 rounded-3xl border border-gray-100 shadow-sm">\r
        \r
        <div class="border-2 border-dashed border-indigo-200 bg-indigo-50/50 rounded-2xl p-8 sm:p-12 text-center transition-colors hover:bg-indigo-50 relative group">\r
          \r
          <input type="file" (change)="onFileSelected($event)" [disabled]="isUploading()" \r
                 class="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10 disabled:cursor-not-allowed">\r
          \r
          <div *ngIf="isUploading()" class="flex flex-col items-center justify-center animate-[fadeIn_0.2s_ease-out]">\r
            <svg class="animate-spin h-10 w-10 text-indigo-600 mb-4" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>\r
            <p class="text-sm font-bold text-indigo-700">\u0110ang t\u1EA3i file l\xEAn h\u1EC7 th\u1ED1ng...</p>\r
          </div>\r
\r
          <div *ngIf="!isUploading()" class="flex flex-col items-center justify-center">\r
            <div class="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">\r
              <svg class="h-8 w-8 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>\r
            </div>\r
            <p class="text-base font-bold text-gray-900">K\xE9o th\u1EA3 file v\xE0o \u0111\xE2y ho\u1EB7c <span class="text-indigo-600 underline">ch\u1ECDn file</span></p>\r
            <p class="mt-2 text-xs text-gray-500">H\u1ED7 tr\u1EE3 PDF, DOCX, ZIP, \u1EA2nh, Video (T\u1ED1i \u0111a 10MB/file)</p>\r
          </div>\r
        </div>\r
\r
        <div *ngIf="attachments().length > 0" class="mt-8 space-y-3">\r
          <h4 class="text-sm font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">T\u1EC7p \u0111\xEDnh k\xE8m c\u1EE7a b\u1EA1n ({{ attachments().length }})</h4>\r
          \r
          <div *ngFor="let file of attachments()" class="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-xl shadow-sm hover:border-indigo-300 transition-colors">\r
            <div class="flex items-center gap-3 overflow-hidden">\r
              <div class="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center shrink-0">\r
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path></svg>\r
              </div>\r
              <div class="min-w-0 flex-1">\r
                <p class="text-sm font-bold text-gray-900 truncate" [title]="file.fileName">{{ file.fileName }}</p>\r
                <p class="text-xs text-gray-500 mt-0.5">{{ formatBytes(file.fileSize) }} \u2022 T\u1EA3i l\xEAn l\xFAc {{ file.createdAt | date:'HH:mm' }}</p>\r
              </div>\r
            </div>\r
            \r
            <button (click)="removeAttachment(file.id)" class="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors shrink-0" title="X\xF3a file">\r
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>\r
            </button>\r
          </div>\r
        </div>\r
\r
      </div>\r
\r
    </div>\r
\r
    <div *ngIf="viewState() === 'done'" class="animate-[fadeIn_0.5s_ease-out] py-8">\r
      <div class="max-w-2xl mx-auto">\r
        <div class="bg-white p-8 sm:p-10 rounded-3xl border border-gray-100 shadow-sm text-center mb-6">\r
          \r
          <div *ngIf="mySubmission()?.submissionStatus === 'graded'" class="mx-auto w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mb-6 border-4 border-white shadow-md">\r
            <svg class="w-12 h-12 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>\r
          </div>\r
          <div *ngIf="mySubmission()?.submissionStatus !== 'graded'" class="mx-auto w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mb-6 border-4 border-white shadow-md">\r
            <svg class="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>\r
          </div>\r
\r
          <h2 class="text-3xl font-extrabold text-gray-900 mb-3">\r
            {{ mySubmission()?.submissionStatus === 'graded' ? 'B\xE0i t\u1EADp \u0111\xE3 \u0111\u01B0\u1EE3c ch\u1EA5m \u0111i\u1EC3m' : 'N\u1ED9p b\xE0i th\xE0nh c\xF4ng!' }}\r
          </h2>\r
          <p class="text-gray-500 mb-8 text-base">\r
            {{ mySubmission()?.submissionStatus === 'graded' ? 'H\u1EC7 th\u1ED1ng \u0111\xE3 ghi nh\u1EADn k\u1EBFt qu\u1EA3 b\xE0i l\xE0m c\u1EE7a b\u1EA1n.' : 'B\xE0i l\xE0m c\u1EE7a b\u1EA1n \u0111\xE3 \u0111\u01B0\u1EE3c g\u1EEDi t\u1EDBi gi\xE1o vi\xEAn v\xE0 \u0111ang ch\u1EDD ch\u1EA5m \u0111i\u1EC3m.' }}\r
          </p>\r
\r
          <div *ngIf="mySubmission()?.submissionStatus === 'graded'" class="bg-gray-50 rounded-3xl p-8 mb-8 border border-gray-100 relative overflow-hidden">\r
            <div class="absolute top-0 right-0 w-32 h-32 bg-indigo-100 rounded-full blur-3xl opacity-50 -mr-10 -mt-10"></div>\r
            \r
            <p class="text-sm font-bold text-gray-500 uppercase tracking-widest mb-3 relative z-10">\u0110i\u1EC3m s\u1ED1 c\u1EE7a b\u1EA1n</p>\r
            <div class="flex items-baseline justify-center gap-2 relative z-10">\r
              <span class="text-6xl font-black text-indigo-600">{{ mySubmission()?.score }}</span>\r
              <span class="text-2xl font-bold text-gray-400">/ {{ assignment()?.maxScore }}</span>\r
            </div>\r
            \r
            <div class="mt-5 inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold relative z-10 shadow-sm"\r
                 [ngClass]="mySubmission()?.gradingMethod === 'auto' ? 'bg-indigo-100 text-indigo-700' : 'bg-emerald-100 text-emerald-700'">\r
              <svg *ngIf="mySubmission()?.gradingMethod === 'auto'" class="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>\r
              <svg *ngIf="mySubmission()?.gradingMethod !== 'auto'" class="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>\r
              Ch\u1EA5m {{ mySubmission()?.gradingMethod === 'auto' ? 't\u1EF1 \u0111\u1ED9ng b\u1EB1ng H\u1EC7 th\u1ED1ng' : 'b\u1EDFi ' + (mySubmission()?.gradedByName || 'Gi\xE1o vi\xEAn') }}\r
            </div>\r
          </div>\r
\r
          <div *ngIf="mySubmission()?.teacherFeedback" class="text-left bg-amber-50/80 rounded-2xl p-6 border border-amber-200 mb-8 shadow-sm">\r
            <h4 class="text-sm font-bold text-amber-900 mb-3 flex items-center">\r
              <svg class="w-5 h-5 mr-2 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>\r
              L\u1EDDi ph\xEA c\u1EE7a gi\xE1o vi\xEAn\r
            </h4>\r
            <p class="text-sm text-amber-800 leading-relaxed whitespace-pre-line font-medium">{{ mySubmission()?.teacherFeedback }}</p>\r
          </div>\r
\r
          <button (click)="goBack()" class="w-full py-4 bg-gray-50 text-gray-700 font-bold rounded-2xl hover:bg-gray-100 hover:text-indigo-600 transition-colors border border-gray-200">\r
            Quay l\u1EA1i danh s\xE1ch b\xE0i t\u1EADp\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
\r
  </ng-container>\r
</div>\r
\r
<div *ngIf="showDeleteModal()" class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-0">\r
    <div class="fixed inset-0 bg-gray-900/40 backdrop-blur-sm transition-opacity" (click)="closeDeleteModal()"></div>\r
\r
    <div class="relative bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden transform transition-all p-6 sm:p-8 text-center animate-[slideUp_0.2s_ease-out]">\r
      \r
      <div class="mx-auto w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-6 border border-red-100">\r
        <svg class="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>\r
      </div>\r
      \r
      <h3 class="text-2xl font-extrabold text-gray-900 mb-2">X\xF3a t\xE0i li\u1EC7u n\xE0y?</h3>\r
      <p class="text-gray-500 text-sm mb-8 leading-relaxed">B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a file \u0111\xEDnh k\xE8m n\xE0y kh\xF4ng? D\u1EEF li\u1EC7u s\u1EBD b\u1ECB x\xF3a v\u0129nh vi\u1EC5n kh\u1ECFi h\u1EC7 th\u1ED1ng v\xE0 kh\xF4ng th\u1EC3 ho\xE0n t\xE1c.</p>\r
      \r
      <div class="flex flex-col sm:flex-row gap-3">\r
        <button (click)="closeDeleteModal()" class="w-full px-5 py-3 text-sm font-bold text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors">\r
          H\u1EE7y, gi\u1EEF l\u1EA1i\r
        </button>\r
        <button (click)="confirmDelete()" class="w-full px-5 py-3 text-sm font-bold text-white bg-red-600 hover:bg-red-700 rounded-xl transition-colors shadow-md shadow-red-200">\r
           X\xF3a\r
        </button>\r
      </div>\r
      \r
    </div>\r
  </div>\r
\r
  <div *ngIf="showSubmitModal()" class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-0">\r
    <div class="fixed inset-0 bg-gray-900/40 backdrop-blur-sm transition-opacity" (click)="closeSubmitModal()"></div>\r
\r
    <div class="relative bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden transform transition-all p-6 sm:p-8 text-center animate-[slideUp_0.2s_ease-out]">\r
      \r
      <div class="mx-auto w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mb-6 border border-emerald-100">\r
        <svg class="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>\r
      </div>\r
      \r
      <h3 class="text-2xl font-extrabold text-gray-900 mb-2">X\xE1c nh\u1EADn n\u1ED9p b\xE0i?</h3>\r
      <p class="text-gray-500 text-sm mb-8 leading-relaxed">B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n n\u1ED9p b\xE0i ngay b\xE2y gi\u1EDD kh\xF4ng? Sau khi n\u1ED9p, b\u1EA1n s\u1EBD kh\xF4ng th\u1EC3 ch\u1EC9nh s\u1EEDa l\u1EA1i \u0111\xE1p \xE1n hay t\u1EA3i l\xEAn t\u1EC7p m\u1EDBi.</p>\r
      \r
      <div class="flex flex-col sm:flex-row gap-3">\r
        <button (click)="closeSubmitModal()" class="w-full px-5 py-3 text-sm font-bold text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors">\r
          Ti\u1EBFp t\u1EE5c l\xE0m b\xE0i\r
        </button>\r
        <button (click)="submitFinal(false)" class="w-full px-5 py-3 text-sm font-bold text-white bg-emerald-500 hover:bg-emerald-600 rounded-xl transition-colors shadow-md shadow-emerald-200">\r
          N\u1ED9p b\xE0i\r
        </button>\r
      </div>\r
      \r
    </div>\r
  </div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StudentAssignmentDetailComponent, { className: "StudentAssignmentDetailComponent", filePath: "src/app/features/student/pages/assignment-detail/student-assignment-detail.component.ts", lineNumber: 16 });
})();
export {
  StudentAssignmentDetailComponent
};
//# sourceMappingURL=chunk-HG6G27SO.js.map
