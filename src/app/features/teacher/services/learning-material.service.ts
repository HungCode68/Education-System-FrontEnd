import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class LearningMaterialService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/api/v1/learning-materials`;

  // Lấy tài liệu (Góc nhìn GV)
  getMaterialsForTeacher(classId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/teacher/class/${classId}`);
  }

  // Upload File vật lý
  uploadFile(file: File, data: any): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('data', new Blob([JSON.stringify(data)], { type: 'application/json' }));
    return this.http.post(`${this.apiUrl}/upload`, formData);
  }

  // Thêm Link
  addLink(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/link`, data);
  }

  // Cập nhật trạng thái
  changeStatus(id: string, status: string): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${id}/status?status=${status}`, {});
  }

  // Xóa
  deleteMaterial(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // Lấy Presigned URL tải file
  getDownloadUrl(id: string): Observable<{url: string}> {
    return this.http.get<{url: string}>(`${this.apiUrl}/${id}/download-url`);
  }
}