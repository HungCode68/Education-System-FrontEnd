import { Injectable, inject, signal } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { SpringPage } from './student-profile.service';

export interface ClassAnnouncementDto {
  id: number;
  classId: number;
  createdById?: number | null;
  title: string;
  content: string;
  hasAttachment?: boolean | null;
  attachmentUrl?: string | null;
  isPinned?: boolean | null;
  createdAt?: string | null;
  className?: string | null;
  classCode?: string | null;
  createdByName?: string | null;
  createdByEmail?: string | null;
  createdByRole?: string | null;
  physicalClassName?: string;
}

@Injectable({ providedIn: 'root' })
export class StudentAnnouncementService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/api/v1/class-announcements`;

  hasNewAnnouncement = signal<boolean>(false);

  // Lấy danh sách thông báo của Lớp học
  getHomeroomAnnouncements(classId: string, page: number = 1, size: number = 10): Observable<SpringPage<ClassAnnouncementDto>> {
    const backendPage = Math.max(0, page - 1);
    const params = new HttpParams()
      .set('page', backendPage.toString())
      .set('size', size.toString());

    return this.http.get<SpringPage<ClassAnnouncementDto>>(`${this.apiUrl}/class/${classId}/paged`, { params });
  }

  // Lấy chi tiết 1 thông báo
  getAnnouncementById(id: string): Observable<ClassAnnouncementDto> {
    return this.http.get<ClassAnnouncementDto>(`${this.apiUrl}/${id}`);
  }

  checkNewAnnouncements(classId: string) {
    this.getHomeroomAnnouncements(classId, 1, 1).subscribe({
      next: (res) => {
        if (res.content && res.content.length > 0) {
          const latest = (res.content as ClassAnnouncementDto[])[0];
          const latestDate = latest.createdAt ? new Date(latest.createdAt).getTime() : 0;
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

  markAsSeen(classId: string) {
    localStorage.setItem(`last_seen_stream_${classId}`, new Date().toISOString());
    this.hasNewAnnouncement.set(false);
  }
}
