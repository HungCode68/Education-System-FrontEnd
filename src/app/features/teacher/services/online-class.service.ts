import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeacherClassService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/api/v1/online-classes`;

  //  Lấy danh sách lớp gv dạy
  getMyClasses(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/teacher/my-classes`);
  }

  // Lấy chi tiết lớp học
  getClassById(classId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${classId}`);
  }

  // Lấy danh sách học sinh trong lớp
  getStudentsByClass(classId: string, status?: string): Observable<any[]> {
    const url = status ? `${this.apiUrl}/${classId}/students?status=${status}` : `${this.apiUrl}/${classId}/students`;
    return this.http.get<any[]>(url);
  }
}