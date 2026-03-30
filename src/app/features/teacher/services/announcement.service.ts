import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AnnouncementService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/api/v1/announcements`;

  // Lấy danh sách thông báo của Lớp Offline (Lớp chủ nhiệm)
  getPhysicalClassAnnouncements(classId: string, page: number = 1): Observable<any> {
    const params = new HttpParams().set('page', page.toString()).set('size', '10');
    return this.http.get<any>(`${this.apiUrl}/physical-class/${classId}`, { params });
  }

  // Lấy danh sách thông báo của Lớp Online (Dành cho GV bộ môn dùng sau này)
  getOnlineClassAnnouncements(classId: string, page: number = 1): Observable<any> {
    const params = new HttpParams().set('page', page.toString()).set('size', '10');
    return this.http.get<any>(`${this.apiUrl}/online-class/${classId}`, { params });
  }

  // Tạo thông báo mới (Xử lý RequestPart Data + File)
  createAnnouncement(dto: any, file?: File): Observable<any> {
    const formData = new FormData();
    
    // Ép kiểu DTO thành chuỗi JSON và bọc trong Blob để Spring Boot hiểu được @RequestPart("data")
    formData.append('data', new Blob([JSON.stringify(dto)], { type: 'application/json' }));
    
    // Nếu có file đính kèm thì nhét thêm vào
    if (file) {
      formData.append('file', file);
    }

    return this.http.post(`${this.apiUrl}`, formData);
  }

  // Xóa thông báo
  deleteAnnouncement(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // Gọi API lấy Lớp chủ nhiệm của tôi
  getMyHomeroomClass(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/api/v1/physical-classes/my-homeroom`);
  }

  // Cập nhật thông báo (Hỗ trợ thay đổi file đính kèm)
  updateAnnouncement(id: string, dto: any, file?: File): Observable<any> {
    const formData = new FormData();
    formData.append('data', new Blob([JSON.stringify(dto)], { type: 'application/json' }));
    
    if (file) {
      formData.append('file', file);
    }
    return this.http.put(`${this.apiUrl}/${id}`, formData);
  }
}