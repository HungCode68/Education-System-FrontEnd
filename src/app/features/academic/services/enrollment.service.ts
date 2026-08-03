import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Enrollment, BulkEnrollment } from '../models/enrollment.model';
import { PageResponse } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/api/v1/enrollments`;

  /**
   * Lấy danh sách đăng ký học viên có phân trang và tìm kiếm
   */
  getAll(params: { page?: number; size?: number; keyword?: string; sortBy?: string; sortDir?: string } = {}): Observable<PageResponse<Enrollment>> {
    let httpParams = new HttpParams()
      .set('page', (params.page !== undefined ? params.page - 1 : 0).toString())
      .set('size', (params.size || 10).toString())
      .set('sortBy', params.sortBy || 'id')
      .set('sortDir', params.sortDir || 'desc');

    if (params.keyword && params.keyword.trim() !== '') {
      httpParams = httpParams.set('keyword', params.keyword.trim());
    }

    return this.http.get<PageResponse<Enrollment>>(this.apiUrl, { params: httpParams });
  }

  getByClassId(classId: number): Observable<Enrollment[]> {
    return this.http.get<Enrollment[]>(`${this.apiUrl}/class/${classId}`);
  }

  getByStudentId(studentId: number): Observable<Enrollment[]> {
    return this.http.get<Enrollment[]>(`${this.apiUrl}/student/${studentId}`);
  }

  getById(id: number): Observable<Enrollment> {
    return this.http.get<Enrollment>(`${this.apiUrl}/${id}`);
  }

  create(dto: Partial<Enrollment>): Observable<{ message: string; data: Enrollment }> {
    return this.http.post<{ message: string; data: Enrollment }>(this.apiUrl, dto);
  }

  update(id: number, dto: Partial<Enrollment>): Observable<{ message: string; data: Enrollment }> {
    return this.http.put<{ message: string; data: Enrollment }>(`${this.apiUrl}/${id}`, dto);
  }

  delete(id: number): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.apiUrl}/${id}`);
  }

  enrollBulk(dto: BulkEnrollment): Observable<{ message: string; data: any }> {
    return this.http.post<{ message: string; data: any }>(`${this.apiUrl}/bulk`, dto);
  }
}
