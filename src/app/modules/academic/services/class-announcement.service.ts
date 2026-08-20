import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ClassAnnouncementService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/api/v1/class-announcements`;

  getAnnouncementsByClassId(classId: string | number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/class/${classId}`);
  }

  createAnnouncement(payload: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, payload);
  }

  createAnnouncementWithFile(classId: string | number, title: string, content: string, isPinned: boolean, file: File): Observable<any> {
    const formData = new FormData();
    formData.append('classId', classId.toString());
    formData.append('title', title);
    formData.append('content', content);
    formData.append('isPinned', isPinned.toString());
    formData.append('file', file);
    return this.http.post<any>(`${this.apiUrl}/upload`, formData);
  }

  updateAnnouncementWithFile(id: string | number, title: string, content: string, isPinned: boolean, removeAttachment: boolean, file?: File | null): Observable<any> {
    const formData = new FormData();
    if (title) formData.append('title', title);
    if (content) formData.append('content', content);
    formData.append('isPinned', isPinned.toString());
    formData.append('removeAttachment', removeAttachment.toString());
    if (file) {
      formData.append('file', file);
    }
    return this.http.put<any>(`${this.apiUrl}/${id}`, formData);
  }

  deleteAnnouncement(id: string | number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  togglePin(id: string | number, isPinned: boolean): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/${id}/pin?isPinned=${isPinned}`, {});
  }
}
