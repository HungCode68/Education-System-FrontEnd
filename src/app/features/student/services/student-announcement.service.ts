import { Injectable, inject, signal } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class StudentAnnouncementService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/api/v1/announcements`;

  hasNewAnnouncement = signal<boolean>(false);

  // Lấy danh sách thông báo của Lớp chủ nhiệm (Offline/Physical Class)
  getHomeroomAnnouncements(classId: string, page: number = 1, size: number = 10): Observable<any> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
      
    return this.http.get(`${this.apiUrl}/physical-class/${classId}`, { params });
  }

  checkNewAnnouncements(classId: string) {
    // Chỉ lấy đúng 1 bài mới nhất (size = 1) để cho nhẹ mạng
    this.getHomeroomAnnouncements(classId, 1, 1).subscribe({
      next: (res) => {
        if (res.content && res.content.length > 0) {
          const latestDate = new Date(res.content[0].publishedAt).getTime();
          const lastSeenStr = localStorage.getItem(`last_seen_stream_${classId}`);

          if (!lastSeenStr) {
             this.hasNewAnnouncement.set(true); // Chưa từng vào xem -> Có bài mới
          } else {
             const lastSeenDate = new Date(lastSeenStr).getTime();
             this.hasNewAnnouncement.set(latestDate > lastSeenDate); // Có bài mới hơn lần cuối xem
          }
        }
      }
    });
  }


  // Hàm tắt chấm đỏ khi học sinh vào xem
  markAsSeen(classId: string) {
    localStorage.setItem(`last_seen_stream_${classId}`, new Date().toISOString());
    this.hasNewAnnouncement.set(false); // Tắt chấm đỏ ngay lập tức
  }
}