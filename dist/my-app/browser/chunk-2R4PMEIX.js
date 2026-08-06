import {
  StudentClassService
} from "./chunk-655QJQXX.js";
import {
  ToastService
} from "./chunk-LTLTAR4B.js";
import {
  ActivatedRoute,
  RouterLink,
  RouterModule
} from "./chunk-T67WJEUA.js";
import {
  CommonModule,
  Component,
  DatePipe,
  NgClass,
  NgForOf,
  NgIf,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵdefineComponent,
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
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-4WA2FUT3.js";

// src/app/features/student/pages/class-detail/student-class-detail.component.ts
var _c0 = (a0, a1) => ({ "border-indigo-500 text-indigo-600": a0, "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300": a1 });
function StudentClassDetailComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 4);
    \u0275\u0275element(2, "circle", 5)(3, "path", 6);
    \u0275\u0275elementEnd()();
  }
}
function StudentClassDetailComponent_ng_container_2_div_19_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 33);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 34)(4, "h3", 35);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 36);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const student_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getInitials(student_r3.studentName), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(student_r3.studentName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(student_r3.studentCode);
  }
}
function StudentClassDetailComponent_ng_container_2_div_19_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275text(1, " Ch\u01B0a c\xF3 h\u1ECDc sinh n\xE0o trong l\u1EDBp n\xE0y. ");
    \u0275\u0275elementEnd();
  }
}
function StudentClassDetailComponent_ng_container_2_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "section")(2, "h2", 20);
    \u0275\u0275text(3, "Gi\xE1o vi\xEAn gi\u1EA3ng d\u1EA1y");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 21)(5, "div", 22);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 23)(8, "h3", 24);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 25);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(12, "section")(13, "div", 26)(14, "h2", 27);
    \u0275\u0275text(15, "Th\xE0nh vi\xEAn l\u1EDBp");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 28);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 29);
    \u0275\u0275template(19, StudentClassDetailComponent_ng_container_2_div_19_div_19_Template, 8, 3, "div", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, StudentClassDetailComponent_ng_container_2_div_19_div_20_Template, 2, 0, "div", 31);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getInitials(ctx_r1.classDetail().teacherName), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.classDetail().teacherName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("M\xE3 GV: ", ctx_r1.classDetail().teacherCode);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r1.classmates().length, " h\u1ECDc sinh");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.classmates());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.classmates().length === 0);
  }
}
function StudentClassDetailComponent_ng_container_2_div_20_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "div", 49);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 50);
    \u0275\u0275element(3, "path", 51);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "h3", 24);
    \u0275\u0275text(5, "Ch\u01B0a c\xF3 t\xE0i li\u1EC7u n\xE0o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 52);
    \u0275\u0275text(7, "Gi\xE1o vi\xEAn c\u1EE7a b\u1EA1n ch\u01B0a \u0111\u0103ng t\u1EA3i t\xE0i li\u1EC7u h\u1ECDc t\u1EADp n\xE0o cho l\u1EDBp n\xE0y.");
    \u0275\u0275elementEnd()();
  }
}
function StudentClassDetailComponent_ng_container_2_div_20_div_14_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 76);
    \u0275\u0275element(2, "circle", 5)(3, "path", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span", 77);
    \u0275\u0275text(5, "\u0110ang m\u1EDF t\xE0i li\u1EC7u...");
    \u0275\u0275elementEnd()();
  }
}
function StudentClassDetailComponent_ng_container_2_div_20_div_14_p_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 78);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r5.description);
  }
}
function StudentClassDetailComponent_ng_container_2_div_20_div_14_span_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 66);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.formatBytes(item_r5.fileSize));
  }
}
function StudentClassDetailComponent_ng_container_2_div_20_div_14_p_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 79);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.formatBytes(item_r5.fileSize));
  }
}
function StudentClassDetailComponent_ng_container_2_div_20_div_14_p_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 79);
    \u0275\u0275text(1, "Li\xEAn k\u1EBFt ngo\xE0i");
    \u0275\u0275elementEnd();
  }
}
function StudentClassDetailComponent_ng_container_2_div_20_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275listener("click", function StudentClassDetailComponent_ng_container_2_div_20_div_14_Template_div_click_0_listener() {
      const item_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openMaterial(item_r5.id));
    });
    \u0275\u0275template(1, StudentClassDetailComponent_ng_container_2_div_20_div_14_div_1_Template, 6, 0, "div", 54);
    \u0275\u0275elementStart(2, "div", 55)(3, "div");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 56);
    \u0275\u0275element(5, "path", 57);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "div", 58)(7, "div", 59)(8, "span", 60);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 61);
    \u0275\u0275text(11, "\u2022");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 62);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "h3", 63);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, StudentClassDetailComponent_ng_container_2_div_20_div_14_p_17_Template, 2, 1, "p", 64);
    \u0275\u0275elementStart(18, "div", 65)(19, "span", 66);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, StudentClassDetailComponent_ng_container_2_div_20_div_14_span_21_Template, 2, 1, "span", 67);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 68)(23, "div", 69)(24, "p", 70);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275template(26, StudentClassDetailComponent_ng_container_2_div_20_div_14_p_26_Template, 2, 1, "p", 71)(27, StudentClassDetailComponent_ng_container_2_div_20_div_14_p_27_Template, 2, 0, "p", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 72);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(29, "svg", 73);
    \u0275\u0275element(30, "path", 74);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isOpeningFile() === item_r5.id);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("w-12 h-12 rounded-xl flex items-center justify-center shrink-0 " + ctx_r1.getFileIcon(item_r5.fileType).bg);
    \u0275\u0275advance();
    \u0275\u0275classMap("w-6 h-6 " + ctx_r1.getFileIcon(item_r5.fileType).color);
    \u0275\u0275advance();
    \u0275\u0275attribute("d", ctx_r1.getFileIcon(item_r5.fileType).icon);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(item_r5.uploadedByName || "Gi\xE1o vi\xEAn");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(14, 15, item_r5.createdAt, "dd/MM/yyyy HH:mm"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r5.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r5.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r5.fileType);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r5.fileSize);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(item_r5.fileType);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r5.fileSize);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !item_r5.fileSize && item_r5.fileType === "link");
  }
}
function StudentClassDetailComponent_ng_container_2_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 39)(2, "div", 40);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 41)(5, "p", 42);
    \u0275\u0275text(6, " Ch\xE0o m\u1EEBng c\xE1c b\u1EA1n \u0111\u1EBFn v\u1EDBi l\u1EDBp h\u1ECDc ");
    \u0275\u0275elementStart(7, "span", 43);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, ". T\u1EA5t c\u1EA3 t\xE0i li\u1EC7u b\xE0i gi\u1EA3ng, video h\u01B0\u1EDBng d\u1EABn v\xE0 tham kh\u1EA3o s\u1EBD \u0111\u01B0\u1EE3c th\u1EA7y/c\xF4 \u0111\u0103ng t\u1EA3i t\u1EA1i \u0111\xE2y nh\xE9! ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 44);
    \u0275\u0275text(11, "\u0110\u0103ng t\u1EF1 \u0111\u1ED9ng b\u1EDFi H\u1EC7 th\u1ED1ng");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(12, StudentClassDetailComponent_ng_container_2_div_20_div_12_Template, 8, 0, "div", 45);
    \u0275\u0275elementStart(13, "div", 46);
    \u0275\u0275template(14, StudentClassDetailComponent_ng_container_2_div_20_div_14_Template, 31, 18, "div", 47);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getInitials(ctx_r1.classDetail().teacherName), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.classDetail().subjectName);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.materials().length === 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.materials());
  }
}
function StudentClassDetailComponent_ng_container_2_div_21_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 83);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 84);
    \u0275\u0275element(2, "circle", 5)(3, "path", 6);
    \u0275\u0275elementEnd()();
  }
}
function StudentClassDetailComponent_ng_container_2_div_21_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 85)(1, "div", 86);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 87);
    \u0275\u0275element(3, "path", 88);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "h3", 24);
    \u0275\u0275text(5, "Tuy\u1EC7t v\u1EDDi! B\u1EA1n ch\u01B0a c\xF3 b\xE0i t\u1EADp n\xE0o.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 52);
    \u0275\u0275text(7, "H\xE3y theo d\xF5i b\u1EA3ng tin th\u01B0\u1EDDng xuy\xEAn \u0111\u1EC3 kh\xF4ng b\u1ECF l\u1EE1 b\xE0i t\u1EADp m\u1EDBi nh\xE9.");
    \u0275\u0275elementEnd()();
  }
}
function StudentClassDetailComponent_ng_container_2_div_21_div_3_div_1_span_16_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 105);
    \u0275\u0275text(1, "(\u0110\xE3 qu\xE1 h\u1EA1n)");
    \u0275\u0275elementEnd();
  }
}
function StudentClassDetailComponent_ng_container_2_div_21_div_3_div_1_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 102);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 93);
    \u0275\u0275element(2, "path", 103);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275template(5, StudentClassDetailComponent_ng_container_2_div_21_div_3_div_1_span_16_span_5_Template, 2, 0, "span", 104);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngClass", ctx_r1.isOverdue(item_r6.dueTime) ? "text-red-500" : "text-emerald-600");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" H\u1EA1n n\u1ED9p: ", \u0275\u0275pipeBind2(4, 3, item_r6.dueTime, "HH:mm dd/MM/yyyy"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isOverdue(item_r6.dueTime));
  }
}
function StudentClassDetailComponent_ng_container_2_div_21_div_3_div_1_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 106);
    \u0275\u0275text(1, "Kh\xF4ng c\xF3 h\u1EA1n n\u1ED9p");
    \u0275\u0275elementEnd();
  }
}
function StudentClassDetailComponent_ng_container_2_div_21_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 90)(1, "div", 55)(2, "div");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 56);
    \u0275\u0275element(4, "path", 57);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div", 58)(6, "h3", 63);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 91)(9, "span", 92);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 93);
    \u0275\u0275element(11, "path", 94);
    \u0275\u0275elementEnd();
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(14, "span", 95);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, StudentClassDetailComponent_ng_container_2_div_21_div_3_div_1_span_16_Template, 6, 6, "span", 96)(17, StudentClassDetailComponent_ng_container_2_div_21_div_3_div_1_span_17_Template, 2, 0, "span", 97);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 98)(19, "span", 99);
    \u0275\u0275text(20, " L\xE0m b\xE0i ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(21, "svg", 100);
    \u0275\u0275element(22, "path", 101);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("routerLink", \u0275\u0275interpolate1("/student/assignment/", item_r6.id))("ngClass", ctx_r1.isOverdue(item_r6.dueTime) ? "border-l-red-500 border-gray-200" : "border-l-indigo-500 border-indigo-50");
    \u0275\u0275advance(2);
    \u0275\u0275classMap("w-12 h-12 rounded-xl flex items-center justify-center shrink-0 " + ctx_r1.getAssignmentTypeUI(item_r6.assignmentType).bg);
    \u0275\u0275advance();
    \u0275\u0275classMap("w-6 h-6 " + ctx_r1.getAssignmentTypeUI(item_r6.assignmentType).text);
    \u0275\u0275advance();
    \u0275\u0275attribute("d", ctx_r1.getAssignmentTypeUI(item_r6.assignmentType).icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r6.title);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" \u0110\u0103ng ng\xE0y: ", \u0275\u0275pipeBind2(13, 13, item_r6.createdAt, "dd/MM/yyyy"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" \u0110i\u1EC3m: ", item_r6.maxScore, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r6.dueTime);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !item_r6.dueTime);
  }
}
function StudentClassDetailComponent_ng_container_2_div_21_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275template(1, StudentClassDetailComponent_ng_container_2_div_21_div_3_div_1_Template, 23, 16, "div", 89);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.assignments());
  }
}
function StudentClassDetailComponent_ng_container_2_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275template(1, StudentClassDetailComponent_ng_container_2_div_21_div_1_Template, 4, 0, "div", 80)(2, StudentClassDetailComponent_ng_container_2_div_21_div_2_Template, 8, 0, "div", 81)(3, StudentClassDetailComponent_ng_container_2_div_21_div_3_Template, 2, 1, "div", 82);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isAssignmentsLoading());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isAssignmentsLoading() && ctx_r1.assignments().length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isAssignmentsLoading() && ctx_r1.assignments().length > 0);
  }
}
function StudentClassDetailComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 7);
    \u0275\u0275element(2, "div", 8)(3, "div", 9);
    \u0275\u0275elementStart(4, "div", 10)(5, "div")(6, "h1", 11);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 12)(9, "span", 13);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(11, "div", 14)(12, "nav", 15)(13, "button", 16);
    \u0275\u0275listener("click", function StudentClassDetailComponent_ng_container_2_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.changeTab("materials"));
    });
    \u0275\u0275text(14, " T\xE0i li\u1EC7u ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 16);
    \u0275\u0275listener("click", function StudentClassDetailComponent_ng_container_2_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.changeTab("assignments"));
    });
    \u0275\u0275text(16, " B\xE0i t\u1EADp ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 16);
    \u0275\u0275listener("click", function StudentClassDetailComponent_ng_container_2_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.changeTab("members"));
    });
    \u0275\u0275text(18, " M\u1ECDi ng\u01B0\u1EDDi ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(19, StudentClassDetailComponent_ng_container_2_div_19_Template, 21, 6, "div", 17)(20, StudentClassDetailComponent_ng_container_2_div_20_Template, 15, 4, "div", 18)(21, StudentClassDetailComponent_ng_container_2_div_21_Template, 4, 3, "div", 18);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.classDetail().subjectName || ctx_r1.classDetail().name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("L\u1EDBp: ", ctx_r1.classDetail().physicalClassName);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(8, _c0, ctx_r1.activeTab() === "materials", ctx_r1.activeTab() !== "materials"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(11, _c0, ctx_r1.activeTab() === "assignments", ctx_r1.activeTab() !== "assignments"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(14, _c0, ctx_r1.activeTab() === "members", ctx_r1.activeTab() !== "members"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.activeTab() === "members");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeTab() === "materials");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeTab() === "assignments");
  }
}
var StudentClassDetailComponent = class _StudentClassDetailComponent {
  route = inject(ActivatedRoute);
  classService = inject(StudentClassService);
  toastService = inject(ToastService);
  classId = signal("", ...ngDevMode ? [{ debugName: "classId" }] : (
    /* istanbul ignore next */
    []
  ));
  classDetail = signal(null, ...ngDevMode ? [{ debugName: "classDetail" }] : (
    /* istanbul ignore next */
    []
  ));
  classmates = signal([], ...ngDevMode ? [{ debugName: "classmates" }] : (
    /* istanbul ignore next */
    []
  ));
  isLoading = signal(true, ...ngDevMode ? [{ debugName: "isLoading" }] : (
    /* istanbul ignore next */
    []
  ));
  // KHAI BÁO THÊM STATE Ở TRÊN CÙNG
  materials = signal([], ...ngDevMode ? [{ debugName: "materials" }] : (
    /* istanbul ignore next */
    []
  ));
  isOpeningFile = signal(null, ...ngDevMode ? [{ debugName: "isOpeningFile" }] : (
    /* istanbul ignore next */
    []
  ));
  assignments = signal([], ...ngDevMode ? [{ debugName: "assignments" }] : (
    /* istanbul ignore next */
    []
  ));
  isAssignmentsLoading = signal(false, ...ngDevMode ? [{ debugName: "isAssignmentsLoading" }] : (
    /* istanbul ignore next */
    []
  ));
  // Quản lý Tab đang mở (mặc định mở tab "Thành viên")
  activeTab = signal("members", ...ngDevMode ? [{ debugName: "activeTab" }] : (
    /* istanbul ignore next */
    []
  ));
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get("id");
      if (id) {
        this.classId.set(id);
        this.loadClassData();
      }
    });
  }
  loadClassData() {
    this.isLoading.set(true);
    this.classService.getClassDetail(this.classId()).subscribe({
      next: (detailRes) => {
        this.classDetail.set(detailRes);
        this.classService.getClassStudents(this.classId()).subscribe({
          next: (studentsRes) => {
            this.classmates.set(studentsRes || []);
            this.isLoading.set(false);
          },
          error: () => {
            this.toastService.error("L\u1ED7i", "Kh\xF4ng th\u1EC3 t\u1EA3i danh s\xE1ch l\u1EDBp.");
            this.isLoading.set(false);
          }
        });
        this.classService.getClassMaterials(this.classId()).subscribe({
          next: (materialsRes) => {
            this.materials.set(materialsRes || []);
            this.isLoading.set(false);
          },
          error: () => this.isLoading.set(false)
        });
      },
      error: () => {
        this.toastService.error("L\u1ED7i", "Kh\xF4ng th\u1EC3 t\u1EA3i th\xF4ng tin l\u1EDBp h\u1ECDc.");
        this.isLoading.set(false);
      }
    });
  }
  // Hàm tạo Avatar chữ cái đầu (VD: Nguyễn Văn A -> A)
  getInitials(name) {
    if (!name)
      return "?";
    const parts = name.trim().split(" ");
    return parts[parts.length - 1].charAt(0).toUpperCase();
  }
  // Hành động khi học sinh click vào tài liệu
  openMaterial(materialId) {
    this.isOpeningFile.set(materialId);
    this.classService.getMaterialDownloadUrl(materialId).subscribe({
      next: (res) => {
        this.isOpeningFile.set(null);
        if (res && res.url) {
          window.open(res.url, "_blank");
        }
      },
      error: (err) => {
        this.isOpeningFile.set(null);
        this.toastService.error("L\u1ED7i", err.error?.message || "Kh\xF4ng th\u1EC3 m\u1EDF t\xE0i li\u1EC7u n\xE0y.");
      }
    });
  }
  getFileIcon(fileType) {
    switch (fileType) {
      case "slide":
        return { icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z", color: "text-amber-500", bg: "bg-amber-100" };
      case "video":
        return { icon: "M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z M21 12a9 9 0 11-18 0 9 9 0 0118 0z", color: "text-rose-500", bg: "bg-rose-100" };
      case "document":
        return { icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", color: "text-blue-500", bg: "bg-blue-100" };
      case "link":
        return { icon: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1", color: "text-emerald-500", bg: "bg-emerald-100" };
      default:
        return { icon: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z", color: "text-gray-500", bg: "bg-gray-100" };
    }
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
  changeTab(tabName) {
    this.activeTab.set(tabName);
    if (tabName === "assignments" && this.assignments().length === 0) {
      this.loadAssignments();
    }
  }
  // THÊM HÀM LOAD BÀI TẬP
  loadAssignments() {
    this.isAssignmentsLoading.set(true);
    this.classService.getClassAssignments(this.classId()).subscribe({
      next: (res) => {
        const allAssignments = res.content || [];
        const publishedOnly = allAssignments.filter((item) => item.status && item.status.toString().toLowerCase() === "published");
        this.assignments.set(publishedOnly);
        this.isAssignmentsLoading.set(false);
      },
      error: () => {
        this.toastService.error("L\u1ED7i", "Kh\xF4ng th\u1EC3 t\u1EA3i danh s\xE1ch b\xE0i t\u1EADp.");
        this.isAssignmentsLoading.set(false);
      }
    });
  }
  // HÀM TIỆN ÍCH CHO UI BÀI TẬP
  getAssignmentTypeUI(type) {
    switch (type) {
      case "multiple_choice":
        return { label: "Tr\u1EAFc nghi\u1EC7m", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4", bg: "bg-blue-100", text: "text-blue-700" };
      case "essay":
        return { label: "T\u1EF1 lu\u1EADn", icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z", bg: "bg-amber-100", text: "text-amber-700" };
      case "file_upload":
        return { label: "N\u1ED9p File", icon: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12", bg: "bg-emerald-100", text: "text-emerald-700" };
      case "mixed":
        return { label: "H\u1ED7n h\u1EE3p", icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10", bg: "bg-purple-100", text: "text-purple-700" };
      default:
        return { label: "Kh\xE1c", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", bg: "bg-gray-100", text: "text-gray-700" };
    }
  }
  // Hàm kiểm tra trạng thái quá hạn
  isOverdue(dueTime) {
    if (!dueTime)
      return false;
    return new Date(dueTime).getTime() < (/* @__PURE__ */ new Date()).getTime();
  }
  static \u0275fac = function StudentClassDetailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StudentClassDetailComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StudentClassDetailComponent, selectors: [["app-student-class-detail"]], decls: 3, vars: 2, consts: [[1, "max-w-6xl", "mx-auto", "space-y-6", "pb-10"], ["class", "py-20 flex justify-center", 4, "ngIf"], [4, "ngIf"], [1, "py-20", "flex", "justify-center"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-10", "w-10", "text-indigo-500"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"], [1, "relative", "bg-gradient-to-r", "from-indigo-600", "to-blue-700", "rounded-3xl", "p-8", "sm:p-10", "text-white", "shadow-lg", "overflow-hidden"], [1, "absolute", "top-0", "right-0", "-mt-10", "-mr-10", "w-40", "h-40", "bg-white", "opacity-10", "rounded-full", "blur-2xl"], [1, "absolute", "bottom-0", "left-0", "-mb-10", "-ml-10", "w-32", "h-32", "bg-white", "opacity-10", "rounded-full", "blur-xl"], [1, "relative", "z-10", "flex", "flex-col", "sm:flex-row", "sm:items-end", "justify-between", "gap-4"], [1, "text-3xl", "sm:text-4xl", "font-extrabold", "tracking-tight", "mb-2"], [1, "flex", "items-center", "space-x-4", "text-indigo-100", "font-medium", "text-sm"], [1, "bg-white/20", "px-3", "py-1", "rounded-full", "backdrop-blur-sm"], [1, "border-b", "border-gray-200"], ["aria-label", "Tabs", 1, "-mb-px", "flex", "space-x-8", "px-4"], [1, "whitespace-nowrap", "py-4", "px-1", "border-b-2", "font-bold", "text-sm", "transition", 3, "click", "ngClass"], ["class", "max-w-4xl mx-auto space-y-10 py-6 animate-[fadeIn_0.3s_ease-out]", 4, "ngIf"], ["class", "max-w-4xl mx-auto space-y-6 py-6 animate-[fadeIn_0.3s_ease-out]", 4, "ngIf"], [1, "max-w-4xl", "mx-auto", "space-y-10", "py-6", "animate-[fadeIn_0.3s_ease-out]"], [1, "text-2xl", "font-extrabold", "text-indigo-700", "border-b-2", "border-indigo-100", "pb-3", "mb-6"], [1, "flex", "items-center", "p-4", "rounded-2xl", "hover:bg-gray-50", "transition", "cursor-pointer"], [1, "h-12", "w-12", "rounded-full", "bg-indigo-100", "text-indigo-600", "flex", "items-center", "justify-center", "font-bold", "text-lg", "shadow-sm", "border", "border-indigo-200"], [1, "ml-4", "flex-1"], [1, "text-lg", "font-bold", "text-gray-900"], [1, "text-sm", "text-gray-500"], [1, "flex", "items-end", "justify-between", "border-b-2", "border-indigo-100", "pb-3", "mb-6"], [1, "text-2xl", "font-extrabold", "text-indigo-700"], [1, "text-sm", "font-bold", "text-gray-500", "bg-gray-100", "px-3", "py-1", "rounded-full"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-4"], ["class", "flex items-center p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition", 4, "ngFor", "ngForOf"], ["class", "text-center py-10 text-gray-500", 4, "ngIf"], [1, "flex", "items-center", "p-4", "bg-white", "rounded-2xl", "border", "border-gray-100", "shadow-sm", "hover:shadow-md", "transition"], [1, "h-10", "w-10", "rounded-full", "bg-gray-100", "text-gray-600", "flex", "items-center", "justify-center", "font-bold", "shadow-inner"], [1, "ml-4", "flex-1", "overflow-hidden"], [1, "text-sm", "font-bold", "text-gray-900", "truncate"], [1, "text-xs", "text-gray-500", "truncate"], [1, "text-center", "py-10", "text-gray-500"], [1, "max-w-4xl", "mx-auto", "space-y-6", "py-6", "animate-[fadeIn_0.3s_ease-out]"], [1, "bg-white", "rounded-3xl", "p-6", "border", "border-gray-100", "shadow-sm", "flex", "items-start", "gap-4"], [1, "h-12", "w-12", "rounded-full", "bg-indigo-100", "text-indigo-600", "flex", "items-center", "justify-center", "font-bold", "text-lg", "shrink-0"], [1, "flex-1"], [1, "text-gray-900", "font-medium", "mt-1"], [1, "font-bold", "text-indigo-600"], [1, "text-xs", "text-gray-400", "mt-2"], ["class", "text-center py-16 bg-gray-50/50 rounded-3xl border border-dashed border-gray-200", 4, "ngIf"], [1, "space-y-4"], ["class", "group flex flex-col sm:flex-row sm:items-center justify-between p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden relative", 3, "click", 4, "ngFor", "ngForOf"], [1, "text-center", "py-16", "bg-gray-50/50", "rounded-3xl", "border", "border-dashed", "border-gray-200"], [1, "mx-auto", "w-16", "h-16", "bg-gray-100", "rounded-full", "flex", "items-center", "justify-center", "mb-4"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-8", "h-8", "text-gray-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z"], [1, "text-sm", "text-gray-500", "mt-1"], [1, "group", "flex", "flex-col", "sm:flex-row", "sm:items-center", "justify-between", "p-5", "bg-white", "rounded-2xl", "border", "border-gray-100", "shadow-sm", "hover:shadow-md", "hover:-translate-y-1", "transition-all", "duration-300", "cursor-pointer", "overflow-hidden", "relative", 3, "click"], ["class", "absolute inset-0 bg-white/80 backdrop-blur-sm z-10 flex items-center justify-center", 4, "ngIf"], [1, "flex", "items-start", "gap-4", "flex-1", "min-w-0"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2"], [1, "flex-1", "min-w-0", "pr-4"], [1, "flex", "items-center", "gap-2", "mb-1"], [1, "text-xs", "font-bold", "uppercase", "tracking-wider", "text-gray-500"], [1, "text-gray-300"], [1, "text-xs", "text-gray-500"], [1, "text-base", "font-bold", "text-gray-900", "truncate", "group-hover:text-indigo-600", "transition-colors"], ["class", "text-sm text-gray-500 line-clamp-2 mt-1", 4, "ngIf"], [1, "mt-2", "flex", "sm:hidden", "gap-2"], [1, "inline-flex", "items-center", "px-2", "py-0.5", "rounded", "text-[10px]", "font-bold", "bg-gray-100", "text-gray-600"], ["class", "inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-gray-100 text-gray-600", 4, "ngIf"], [1, "hidden", "sm:flex", "items-center", "gap-4", "shrink-0", "pl-4", "border-l", "border-gray-100", "ml-4"], [1, "text-right"], [1, "text-xs", "font-bold", "text-gray-900", "uppercase"], ["class", "text-xs text-gray-500 mt-0.5", 4, "ngIf"], [1, "w-10", "h-10", "rounded-full", "bg-gray-50", "flex", "items-center", "justify-center", "group-hover:bg-indigo-100", "group-hover:text-indigo-600", "transition-colors"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-gray-400", "group-hover:text-indigo-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"], [1, "absolute", "inset-0", "bg-white/80", "backdrop-blur-sm", "z-10", "flex", "items-center", "justify-center"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-6", "w-6", "text-indigo-600"], [1, "ml-2", "text-sm", "font-bold", "text-indigo-600"], [1, "text-sm", "text-gray-500", "line-clamp-2", "mt-1"], [1, "text-xs", "text-gray-500", "mt-0.5"], ["class", "py-12 flex justify-center", 4, "ngIf"], ["class", "text-center py-16 bg-white rounded-3xl border border-gray-100 shadow-sm", 4, "ngIf"], ["class", "space-y-4", 4, "ngIf"], [1, "py-12", "flex", "justify-center"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-8", "w-8", "text-indigo-500"], [1, "text-center", "py-16", "bg-white", "rounded-3xl", "border", "border-gray-100", "shadow-sm"], [1, "mx-auto", "w-16", "h-16", "bg-indigo-50", "rounded-full", "flex", "items-center", "justify-center", "mb-4"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-8", "h-8", "text-indigo-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"], ["class", "group flex flex-col sm:flex-row sm:items-center justify-between p-5 bg-white rounded-2xl border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden border-l-4", 3, "routerLink", "ngClass", 4, "ngFor", "ngForOf"], [1, "group", "flex", "flex-col", "sm:flex-row", "sm:items-center", "justify-between", "p-5", "bg-white", "rounded-2xl", "border", "shadow-sm", "hover:shadow-lg", "hover:-translate-y-1", "transition-all", "duration-300", "cursor-pointer", "overflow-hidden", "border-l-4", 3, "routerLink", "ngClass"], [1, "flex", "flex-wrap", "items-center", "gap-x-4", "gap-y-1", "mt-1.5", "text-xs", "text-gray-500"], [1, "flex", "items-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-3.5", "h-3.5", "mr-1"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"], [1, "flex", "items-center", "font-medium", "text-amber-600", "bg-amber-50", "px-2", "py-0.5", "rounded", "text-[10px]"], ["class", "flex items-center font-bold", 3, "ngClass", 4, "ngIf"], ["class", "flex items-center text-emerald-600 font-bold", 4, "ngIf"], [1, "hidden", "sm:flex", "items-center", "shrink-0", "pl-4"], [1, "text-sm", "font-bold", "text-indigo-600", "group-hover:text-indigo-800", "transition-colors", "flex", "items-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "ml-1", "transform", "group-hover:translate-x-1", "transition"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 5l7 7-7 7"], [1, "flex", "items-center", "font-bold", 3, "ngClass"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"], ["class", "ml-1 text-[10px] uppercase bg-red-100 text-red-700 px-1.5 rounded", 4, "ngIf"], [1, "ml-1", "text-[10px]", "uppercase", "bg-red-100", "text-red-700", "px-1.5", "rounded"], [1, "flex", "items-center", "text-emerald-600", "font-bold"]], template: function StudentClassDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, StudentClassDetailComponent_div_1_Template, 4, 0, "div", 1)(2, StudentClassDetailComponent_ng_container_2_Template, 22, 17, "ng-container", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading() && ctx.classDetail());
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, RouterModule, RouterLink, DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StudentClassDetailComponent, [{
    type: Component,
    args: [{ selector: "app-student-class-detail", standalone: true, imports: [CommonModule, RouterModule], template: `<div class="max-w-6xl mx-auto space-y-6 pb-10">\r
\r
  <div *ngIf="isLoading()" class="py-20 flex justify-center">\r
    <svg class="animate-spin h-10 w-10 text-indigo-500" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>\r
  </div>\r
\r
  <ng-container *ngIf="!isLoading() && classDetail()">\r
    <div class="relative bg-gradient-to-r from-indigo-600 to-blue-700 rounded-3xl p-8 sm:p-10 text-white shadow-lg overflow-hidden">\r
      <div class="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>\r
      <div class="absolute bottom-0 left-0 -mb-10 -ml-10 w-32 h-32 bg-white opacity-10 rounded-full blur-xl"></div>\r
      \r
      <div class="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">\r
        <div>\r
          <h1 class="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">{{ classDetail().subjectName || classDetail().name }}</h1>\r
          <div class="flex items-center space-x-4 text-indigo-100 font-medium text-sm">\r
            <span class="bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">L\u1EDBp: {{ classDetail().physicalClassName }}</span>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div class="border-b border-gray-200">\r
      <nav class="-mb-px flex space-x-8 px-4" aria-label="Tabs">\r
        <button (click)="changeTab('materials')" [ngClass]="{'border-indigo-500 text-indigo-600': activeTab() === 'materials', 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300': activeTab() !== 'materials'}" class="whitespace-nowrap py-4 px-1 border-b-2 font-bold text-sm transition">\r
            T\xE0i li\u1EC7u\r
        </button>\r
        <button (click)="changeTab('assignments')" [ngClass]="{'border-indigo-500 text-indigo-600': activeTab() === 'assignments', 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300': activeTab() !== 'assignments'}" class="whitespace-nowrap py-4 px-1 border-b-2 font-bold text-sm transition">\r
          B\xE0i t\u1EADp\r
        </button>\r
        <button (click)="changeTab('members')" [ngClass]="{'border-indigo-500 text-indigo-600': activeTab() === 'members', 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300': activeTab() !== 'members'}" class="whitespace-nowrap py-4 px-1 border-b-2 font-bold text-sm transition">\r
          M\u1ECDi ng\u01B0\u1EDDi\r
        </button>\r
      </nav>\r
    </div>\r
\r
    <div *ngIf="activeTab() === 'members'" class="max-w-4xl mx-auto space-y-10 py-6 animate-[fadeIn_0.3s_ease-out]">\r
      \r
      <section>\r
        <h2 class="text-2xl font-extrabold text-indigo-700 border-b-2 border-indigo-100 pb-3 mb-6">Gi\xE1o vi\xEAn gi\u1EA3ng d\u1EA1y</h2>\r
        <div class="flex items-center p-4 rounded-2xl hover:bg-gray-50 transition cursor-pointer">\r
          <div class="h-12 w-12 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-lg shadow-sm border border-indigo-200">\r
            {{ getInitials(classDetail().teacherName) }}\r
          </div>\r
          <div class="ml-4 flex-1">\r
            <h3 class="text-lg font-bold text-gray-900">{{ classDetail().teacherName }}</h3>\r
            <p class="text-sm text-gray-500">M\xE3 GV: {{ classDetail().teacherCode }}</p>\r
          </div>\r
        </div>\r
      </section>\r
\r
      <section>\r
        <div class="flex items-end justify-between border-b-2 border-indigo-100 pb-3 mb-6">\r
          <h2 class="text-2xl font-extrabold text-indigo-700">Th\xE0nh vi\xEAn l\u1EDBp</h2>\r
          <span class="text-sm font-bold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{{ classmates().length }} h\u1ECDc sinh</span>\r
        </div>\r
\r
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">\r
          <div *ngFor="let student of classmates()" class="flex items-center p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">\r
            <div class="h-10 w-10 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center font-bold shadow-inner">\r
              {{ getInitials(student.studentName) }}\r
            </div>\r
            <div class="ml-4 flex-1 overflow-hidden">\r
              <h3 class="text-sm font-bold text-gray-900 truncate">{{ student.studentName }}</h3>\r
              <p class="text-xs text-gray-500 truncate">{{ student.studentCode }}</p>\r
            </div>\r
          </div>\r
        </div>\r
        \r
        <div *ngIf="classmates().length === 0" class="text-center py-10 text-gray-500">\r
          Ch\u01B0a c\xF3 h\u1ECDc sinh n\xE0o trong l\u1EDBp n\xE0y.\r
        </div>\r
      </section>\r
\r
    </div>\r
\r
    <div *ngIf="activeTab() === 'materials'" class="max-w-4xl mx-auto space-y-6 py-6 animate-[fadeIn_0.3s_ease-out]">\r
      \r
      <div class="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex items-start gap-4">\r
        <div class="h-12 w-12 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-lg shrink-0">\r
          {{ getInitials(classDetail().teacherName) }}\r
        </div>\r
        <div class="flex-1">\r
          <p class="text-gray-900 font-medium mt-1">\r
            Ch\xE0o m\u1EEBng c\xE1c b\u1EA1n \u0111\u1EBFn v\u1EDBi l\u1EDBp h\u1ECDc <span class="font-bold text-indigo-600">{{ classDetail().subjectName }}</span>. \r
            T\u1EA5t c\u1EA3 t\xE0i li\u1EC7u b\xE0i gi\u1EA3ng, video h\u01B0\u1EDBng d\u1EABn v\xE0 tham kh\u1EA3o s\u1EBD \u0111\u01B0\u1EE3c th\u1EA7y/c\xF4 \u0111\u0103ng t\u1EA3i t\u1EA1i \u0111\xE2y nh\xE9!\r
          </p>\r
          <p class="text-xs text-gray-400 mt-2">\u0110\u0103ng t\u1EF1 \u0111\u1ED9ng b\u1EDFi H\u1EC7 th\u1ED1ng</p>\r
        </div>\r
      </div>\r
\r
      <div *ngIf="materials().length === 0" class="text-center py-16 bg-gray-50/50 rounded-3xl border border-dashed border-gray-200">\r
        <div class="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">\r
          <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z"></path></svg>\r
        </div>\r
        <h3 class="text-lg font-bold text-gray-900">Ch\u01B0a c\xF3 t\xE0i li\u1EC7u n\xE0o</h3>\r
        <p class="text-sm text-gray-500 mt-1">Gi\xE1o vi\xEAn c\u1EE7a b\u1EA1n ch\u01B0a \u0111\u0103ng t\u1EA3i t\xE0i li\u1EC7u h\u1ECDc t\u1EADp n\xE0o cho l\u1EDBp n\xE0y.</p>\r
      </div>\r
\r
      <div class="space-y-4">\r
        <div *ngFor="let item of materials()" \r
             (click)="openMaterial(item.id)"\r
             class="group flex flex-col sm:flex-row sm:items-center justify-between p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden relative">\r
          \r
          <div *ngIf="isOpeningFile() === item.id" class="absolute inset-0 bg-white/80 backdrop-blur-sm z-10 flex items-center justify-center">\r
            <svg class="animate-spin h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>\r
            <span class="ml-2 text-sm font-bold text-indigo-600">\u0110ang m\u1EDF t\xE0i li\u1EC7u...</span>\r
          </div>\r
\r
          <div class="flex items-start gap-4 flex-1 min-w-0">\r
            <div [class]="'w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ' + getFileIcon(item.fileType).bg">\r
              <svg [class]="'w-6 h-6 ' + getFileIcon(item.fileType).color" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" [attr.d]="getFileIcon(item.fileType).icon"></path>\r
              </svg>\r
            </div>\r
            \r
            <div class="flex-1 min-w-0 pr-4">\r
              <div class="flex items-center gap-2 mb-1">\r
                <span class="text-xs font-bold uppercase tracking-wider text-gray-500">{{ item.uploadedByName || 'Gi\xE1o vi\xEAn' }}</span>\r
                <span class="text-gray-300">\u2022</span>\r
                <span class="text-xs text-gray-500">{{ item.createdAt | date:'dd/MM/yyyy HH:mm' }}</span>\r
              </div>\r
              <h3 class="text-base font-bold text-gray-900 truncate group-hover:text-indigo-600 transition-colors">{{ item.title }}</h3>\r
              <p *ngIf="item.description" class="text-sm text-gray-500 line-clamp-2 mt-1">{{ item.description }}</p>\r
              \r
              <div class="mt-2 flex sm:hidden gap-2">\r
                <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-gray-100 text-gray-600">{{ item.fileType }}</span>\r
                <span *ngIf="item.fileSize" class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-gray-100 text-gray-600">{{ formatBytes(item.fileSize) }}</span>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <div class="hidden sm:flex items-center gap-4 shrink-0 pl-4 border-l border-gray-100 ml-4">\r
            <div class="text-right">\r
              <p class="text-xs font-bold text-gray-900 uppercase">{{ item.fileType }}</p>\r
              <p *ngIf="item.fileSize" class="text-xs text-gray-500 mt-0.5">{{ formatBytes(item.fileSize) }}</p>\r
              <p *ngIf="!item.fileSize && item.fileType === 'link'" class="text-xs text-gray-500 mt-0.5">Li\xEAn k\u1EBFt ngo\xE0i</p>\r
            </div>\r
            <div class="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-indigo-100 group-hover:text-indigo-600 transition-colors">\r
               <svg class="w-5 h-5 text-gray-400 group-hover:text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>\r
            </div>\r
          </div>\r
\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div *ngIf="activeTab() === 'assignments'" class="max-w-4xl mx-auto space-y-6 py-6 animate-[fadeIn_0.3s_ease-out]">\r
      \r
      <div *ngIf="isAssignmentsLoading()" class="py-12 flex justify-center">\r
        <svg class="animate-spin h-8 w-8 text-indigo-500" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>\r
      </div>\r
\r
      <div *ngIf="!isAssignmentsLoading() && assignments().length === 0" class="text-center py-16 bg-white rounded-3xl border border-gray-100 shadow-sm">\r
        <div class="mx-auto w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center mb-4">\r
          <svg class="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg>\r
        </div>\r
        <h3 class="text-lg font-bold text-gray-900">Tuy\u1EC7t v\u1EDDi! B\u1EA1n ch\u01B0a c\xF3 b\xE0i t\u1EADp n\xE0o.</h3>\r
        <p class="text-sm text-gray-500 mt-1">H\xE3y theo d\xF5i b\u1EA3ng tin th\u01B0\u1EDDng xuy\xEAn \u0111\u1EC3 kh\xF4ng b\u1ECF l\u1EE1 b\xE0i t\u1EADp m\u1EDBi nh\xE9.</p>\r
      </div>\r
\r
      <div *ngIf="!isAssignmentsLoading() && assignments().length > 0" class="space-y-4">\r
        \r
        <div *ngFor="let item of assignments()" \r
             routerLink="/student/assignment/{{item.id}}"\r
             class="group flex flex-col sm:flex-row sm:items-center justify-between p-5 bg-white rounded-2xl border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden border-l-4"\r
             [ngClass]="isOverdue(item.dueTime) ? 'border-l-red-500 border-gray-200' : 'border-l-indigo-500 border-indigo-50'">\r
          \r
          <div class="flex items-start gap-4 flex-1 min-w-0">\r
            <div [class]="'w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ' + getAssignmentTypeUI(item.assignmentType).bg">\r
              <svg [class]="'w-6 h-6 ' + getAssignmentTypeUI(item.assignmentType).text" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" [attr.d]="getAssignmentTypeUI(item.assignmentType).icon"></path>\r
              </svg>\r
            </div>\r
            \r
            <div class="flex-1 min-w-0 pr-4">\r
              <h3 class="text-base font-bold text-gray-900 truncate group-hover:text-indigo-600 transition-colors">{{ item.title }}</h3>\r
              \r
              <div class="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1.5 text-xs text-gray-500">\r
                <span class="flex items-center">\r
                  <svg class="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>\r
                  \u0110\u0103ng ng\xE0y: {{ item.createdAt | date:'dd/MM/yyyy' }}\r
                </span>\r
                \r
                <span class="flex items-center font-medium text-amber-600 bg-amber-50 px-2 py-0.5 rounded text-[10px]">\r
                  \u0110i\u1EC3m: {{ item.maxScore }}\r
                </span>\r
\r
                <span *ngIf="item.dueTime" class="flex items-center font-bold" [ngClass]="isOverdue(item.dueTime) ? 'text-red-500' : 'text-emerald-600'">\r
                  <svg class="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>\r
                  H\u1EA1n n\u1ED9p: {{ item.dueTime | date:'HH:mm dd/MM/yyyy' }}\r
                  <span *ngIf="isOverdue(item.dueTime)" class="ml-1 text-[10px] uppercase bg-red-100 text-red-700 px-1.5 rounded">(\u0110\xE3 qu\xE1 h\u1EA1n)</span>\r
                </span>\r
                <span *ngIf="!item.dueTime" class="flex items-center text-emerald-600 font-bold">Kh\xF4ng c\xF3 h\u1EA1n n\u1ED9p</span>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <div class="hidden sm:flex items-center shrink-0 pl-4">\r
            <span class="text-sm font-bold text-indigo-600 group-hover:text-indigo-800 transition-colors flex items-center">\r
              L\xE0m b\xE0i\r
              <svg class="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>\r
            </span>\r
          </div>\r
\r
        </div>\r
      </div>\r
    </div>\r
\r
  </ng-container>\r
</div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StudentClassDetailComponent, { className: "StudentClassDetailComponent", filePath: "src/app/features/student/pages/class-detail/student-class-detail.component.ts", lineNumber: 13 });
})();
export {
  StudentClassDetailComponent
};
//# sourceMappingURL=chunk-2R4PMEIX.js.map
