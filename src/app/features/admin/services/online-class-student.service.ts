import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { OnlineClassStudent } from '../models/online-class-student.model';

@Injectable({
  providedIn: 'root'
})
export class OnlineClassStudentService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/api/v1/online-classes`;

  // Lấy danh sách học sinh trong 1 lớp online cụ thể
  // Giả định backend có API: GET /api/v1/online-classes/{classId}/students
  getStudentsByOnlineClass(classId: string): Observable<OnlineClassStudent[]> {
    return this.http.get<OnlineClassStudent[]>(`${this.apiUrl}/${classId}/students`);
  }

  // Kích hoạt đồng bộ từ lớp vật lý sang
  syncStudents(classId: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/${classId}/sync-students`, {});
  }

  // Thêm học sinh thủ công (manual)
  addStudentManual(classId: string, data: Partial<OnlineClassStudent>): Observable<OnlineClassStudent> {
    return this.http.post<OnlineClassStudent>(`${this.apiUrl}/${classId}/students`, data);
  }
  
  // Gỡ học sinh (Rút môn)
  removeStudent(classId: string, studentId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${classId}/students/${studentId}`);
  }
}