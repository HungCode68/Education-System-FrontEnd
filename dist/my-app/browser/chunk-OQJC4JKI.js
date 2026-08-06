import {
  HttpClient,
  HttpParams,
  Injectable,
  environment,
  inject,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-4WA2FUT3.js";

// src/app/features/student/services/student-announcement.service.ts
var StudentAnnouncementService = class _StudentAnnouncementService {
  http = inject(HttpClient);
  apiUrl = `${environment.apiUrl}/api/v1/announcements`;
  hasNewAnnouncement = signal(false, ...ngDevMode ? [{ debugName: "hasNewAnnouncement" }] : (
    /* istanbul ignore next */
    []
  ));
  // Lấy danh sách thông báo của Lớp chủ nhiệm (Offline/Physical Class)
  getHomeroomAnnouncements(classId, page = 1, size = 10) {
    let params = new HttpParams().set("page", page.toString()).set("size", size.toString());
    return this.http.get(`${this.apiUrl}/physical-class/${classId}`, { params });
  }
  checkNewAnnouncements(classId) {
    this.getHomeroomAnnouncements(classId, 1, 1).subscribe({
      next: (res) => {
        if (res.content && res.content.length > 0) {
          const latestDate = new Date(res.content[0].publishedAt).getTime();
          const lastSeenStr = localStorage.getItem(`last_seen_stream_${classId}`);
          if (!lastSeenStr) {
            this.hasNewAnnouncement.set(true);
          } else {
            const lastSeenDate = new Date(lastSeenStr).getTime();
            this.hasNewAnnouncement.set(latestDate > lastSeenDate);
          }
        }
      }
    });
  }
  // Hàm tắt chấm đỏ khi học sinh vào xem
  markAsSeen(classId) {
    localStorage.setItem(`last_seen_stream_${classId}`, (/* @__PURE__ */ new Date()).toISOString());
    this.hasNewAnnouncement.set(false);
  }
  static \u0275fac = function StudentAnnouncementService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StudentAnnouncementService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _StudentAnnouncementService, factory: _StudentAnnouncementService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StudentAnnouncementService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  StudentAnnouncementService
};
//# sourceMappingURL=chunk-OQJC4JKI.js.map
