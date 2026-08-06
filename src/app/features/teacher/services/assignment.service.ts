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

  createAssignment(dto: any): Observable<any> {
    return this.http.post(this.apiUrl, dto);
  }

  // Cập nhật bài tập
  updateAssignment(id: string | number, dto: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, dto);
  }

  // Xóa bài tập
  deleteAssignment(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // Lấy danh sách bài tập thuộc bài học cụ thể (lessonId)
  getAssignmentsByLessonId(lessonId: string | number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/lesson/${lessonId}`);
  }
}