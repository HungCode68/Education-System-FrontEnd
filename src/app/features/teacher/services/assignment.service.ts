import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AssignmentService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/api/v1/assignments`;

  // Lấy danh sách bài tập của 1 lớp
  getAssignmentsByClass(classId: string, page: number = 0, size: number = 10): Observable<any> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('sortBy', 'createdAt')
      .set('sortDir', 'desc');
    return this.http.get<any>(`${this.apiUrl}/class/${classId}`, { params });
  }

  // Lấy chi tiết 1 bài tập
  getAssignmentById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createAssignment(data: any, file: File | null): Observable<any> {
    const formData = new FormData();
    // Chuyển JSON data thành Blob để gửi kèm FormData
    formData.append('data', new Blob([JSON.stringify(data)], { type: 'application/json' }));
    
    if (file) {
      formData.append('file', file);
    }
    
    return this.http.post(this.apiUrl, formData);
  }

  // Cập nhật bài tập (Có hỗ trợ đổi file đính kèm mới)
  updateAssignment(id: string, data: any, file: File | null): Observable<any> {
    const formData = new FormData();
    formData.append('data', new Blob([JSON.stringify(data)], { type: 'application/json' }));
    
    if (file) {
      formData.append('file', file);
    }
    
    return this.http.put(`${this.apiUrl}/${id}`, formData);
  }

  // Xóa bài tập
  deleteAssignment(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}