import {
  HttpClient,
  HttpParams,
  Injectable,
  environment,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-4WA2FUT3.js";

// src/app/modules/academic/services/schedule.service.ts
var ScheduleService = class _ScheduleService {
  http = inject(HttpClient);
  apiUrl = `${environment.apiUrl}/api/v1/class-schedules`;
  getAll(page = 0, size = 10, classId) {
    let params = new HttpParams();
    if (typeof page === "object" && page !== null) {
      const pageIndex = page.page != null ? Math.max(0, Number(page.page) - 1) : 0;
      params = params.set("page", pageIndex.toString());
      if (page.size !== void 0)
        params = params.set("size", page.size.toString());
      if (page.classId)
        params = params.set("classId", page.classId.toString());
      if (page.keyword)
        params = params.set("keyword", page.keyword);
    } else {
      const pageIndex = Math.max(0, Number(page) - 1);
      params = params.set("page", pageIndex.toString()).set("size", (size || 10).toString());
      if (classId)
        params = params.set("classId", classId.toString());
    }
    return this.http.get(this.apiUrl, { params });
  }
  getByClassId(classId) {
    return this.http.get(`${this.apiUrl}/class/${classId}`);
  }
  getSchedulesByClassId(classId) {
    return this.getByClassId(classId);
  }
  getById(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  create(schedule) {
    return this.http.post(this.apiUrl, schedule);
  }
  update(id, schedule) {
    return this.http.put(`${this.apiUrl}/${id}`, schedule);
  }
  delete(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  getMyTimetable(startDate, endDate) {
    const params = new HttpParams().set("startDate", startDate).set("endDate", endDate);
    return this.http.get(`${this.apiUrl}/my-timetable`, { params });
  }
  getTeacherTimetable(teacherId, startDate, endDate) {
    const params = new HttpParams().set("startDate", startDate).set("endDate", endDate);
    return this.http.get(`${this.apiUrl}/teacher/${teacherId}/timetable`, { params });
  }
  static \u0275fac = function ScheduleService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ScheduleService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ScheduleService, factory: _ScheduleService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScheduleService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/modules/academic/services/enrollment.service.ts
var EnrollmentService = class _EnrollmentService {
  http = inject(HttpClient);
  apiUrl = `${environment.apiUrl}/api/v1/enrollments`;
  getAll(page = 1, size = 10, classId, keyword, status) {
    let params = new HttpParams();
    if (typeof page === "object" && page !== null) {
      const pageIndex = page.page != null ? Math.max(0, Number(page.page) - 1) : 0;
      params = params.set("page", pageIndex.toString());
      if (page.size !== void 0)
        params = params.set("size", page.size.toString());
      if (page.classId)
        params = params.set("classId", page.classId.toString());
      if (page.keyword)
        params = params.set("keyword", page.keyword.toString());
      if (page.status)
        params = params.set("status", page.status.toString());
    } else {
      const pageIndex = Math.max(0, Number(page) - 1);
      params = params.set("page", pageIndex.toString()).set("size", (size || 10).toString());
      if (classId)
        params = params.set("classId", classId.toString());
      if (keyword)
        params = params.set("keyword", keyword.toString());
      if (status)
        params = params.set("status", status.toString());
    }
    return this.http.get(this.apiUrl, { params });
  }
  getByClassId(classId) {
    return this.http.get(`${this.apiUrl}/class/${classId}`);
  }
  enrollStudent(classId, studentId) {
    return this.http.post(`${this.apiUrl}`, { classId, studentId });
  }
  create(data) {
    return this.http.post(this.apiUrl, data);
  }
  update(id, data) {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }
  bulkEnroll(dto) {
    return this.http.post(`${this.apiUrl}/bulk`, dto);
  }
  enrollBulk(dto) {
    return this.bulkEnroll(dto);
  }
  delete(enrollmentId) {
    return this.http.delete(`${this.apiUrl}/${enrollmentId}`);
  }
  static \u0275fac = function EnrollmentService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EnrollmentService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EnrollmentService, factory: _EnrollmentService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EnrollmentService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  ScheduleService,
  EnrollmentService
};
//# sourceMappingURL=chunk-RYS3MB5W.js.map
