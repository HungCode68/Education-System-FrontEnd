import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Enrollment } from '../models/enrollment.model';
import { PageResponse } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/api/v1/enrollments`;

  getAll(page: any = 1, size: any = 10, classId?: any, keyword?: any, status?: any): Observable<PageResponse<Enrollment>> {
    let params = new HttpParams();
    if (typeof page === 'object' && page !== null) {
      const pageIndex = page.page != null ? Math.max(0, Number(page.page) - 1) : 0;
      params = params.set('page', pageIndex.toString());
      if (page.size !== undefined) params = params.set('size', page.size.toString());
      if (page.classId) params = params.set('classId', page.classId.toString());
      if (page.keyword) params = params.set('keyword', page.keyword.toString());
      if (page.status) params = params.set('status', page.status.toString());
    } else {
      const pageIndex = Math.max(0, Number(page) - 1);
      params = params.set('page', pageIndex.toString()).set('size', (size || 10).toString());
      if (classId) params = params.set('classId', classId.toString());
      if (keyword) params = params.set('keyword', keyword.toString());
      if (status) params = params.set('status', status.toString());
    }
    return this.http.get<PageResponse<Enrollment>>(this.apiUrl, { params });
  }

  getByClassId(classId: number | string): Observable<Enrollment[]> {
    return this.http.get<Enrollment[]>(`${this.apiUrl}/class/${classId}`);
  }

  getByStudentId(studentId: number | string): Observable<Enrollment[]> {
    return this.http.get<Enrollment[]>(`${this.apiUrl}/student/${studentId}`);
  }

  enrollStudent(classId: number | string, studentId: number | string): Observable<Enrollment> {
    return this.http.post<Enrollment>(`${this.apiUrl}`, { classId, studentId });
  }

  create(data: Partial<Enrollment>): Observable<Enrollment> {
    return this.http.post<Enrollment>(this.apiUrl, data);
  }

  update(id: number | string, data: Partial<Enrollment>): Observable<Enrollment> {
    return this.http.put<Enrollment>(`${this.apiUrl}/${id}`, data);
  }

  bulkEnroll(dto: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/bulk`, dto);
  }

  enrollBulk(dto: any): Observable<any> {
    return this.bulkEnroll(dto);
  }

  delete(enrollmentId: number | string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${enrollmentId}`);
  }
}
