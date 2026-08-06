import {
  HttpClient,
  HttpParams,
  Injectable,
  environment,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-4WA2FUT3.js";

// src/app/features/student/services/student-class.service.ts
var StudentClassService = class _StudentClassService {
  http = inject(HttpClient);
  apiUrl = `${environment.apiUrl}/api/v1/online-classes`;
  // Gọi API lấy danh sách lớp học của Học sinh đang đăng nhập
  getMyClasses() {
    return this.http.get(`${this.apiUrl}/student/my-classes`);
  }
  // Lấy chi tiết thông tin Lớp học (Tên lớp, Tên GV)
  getClassDetail(classId) {
    return this.http.get(`${this.apiUrl}/${classId}`);
  }
  // Lấy danh sách thành viên trong lớp (Học sinh)
  getClassStudents(classId) {
    return this.http.get(`${this.apiUrl}/${classId}/students?status=active`);
  }
  // Lấy danh sách tài liệu của lớp (Chỉ lấy những tài liệu đã Published)
  getClassMaterials(classId) {
    return this.http.get(`${this.apiUrl}/../learning-materials/student/class/${classId}`);
  }
  // Lấy link tải file thực tế (MinIO Presigned URL hoặc External Link)
  getMaterialDownloadUrl(materialId) {
    return this.http.get(`${this.apiUrl}/../learning-materials/${materialId}/download-url`);
  }
  // Lấy danh sách bài tập của lớp
  // API Backend của bạn đang dùng page=0 cho trang đầu tiên
  getClassAssignments(classId, page = 0, size = 10) {
    const params = new HttpParams().set("page", page.toString()).set("size", size.toString()).set("sortBy", "createdAt").set("sortDir", "desc");
    return this.http.get(`${environment.apiUrl}/api/v1/assignments/class/${classId}`, { params });
  }
  static \u0275fac = function StudentClassService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StudentClassService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _StudentClassService, factory: _StudentClassService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StudentClassService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  StudentClassService
};
//# sourceMappingURL=chunk-655QJQXX.js.map
