import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeacherClassService {
  private http = inject(HttpClient);
  private classesApiUrl = `${environment.apiUrl}/api/v1/classes`;

  //  Lấy danh sách lớp gv dạy
  getMyClasses(): Observable<any[]> {
    return this.http.get<any[]>(`${this.classesApiUrl}/my-classes`);
  }

  // Lấy chi tiết lớp học
  getClassById(classId: string): Observable<any> {
    return this.http.get<any>(`${this.classesApiUrl}/${classId}`);
  }

  // Lấy danh sách học sinh trong lớp
  getStudentsByClass(classId: string, status?: string): Observable<any[]> {
    const url = status 
      ? `${environment.apiUrl}/api/v1/enrollments/class/${classId}?status=${status}` 
      : `${environment.apiUrl}/api/v1/enrollments/class/${classId}`;
    return this.http.get<any[]>(url);
  }
}