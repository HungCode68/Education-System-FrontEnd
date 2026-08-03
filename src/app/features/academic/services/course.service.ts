import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Course, PageResponse, CourseFilterParams } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/api/v1/courses`;

  /**
   * Lấy danh sách khóa học có phân trang và tìm kiếm
   */
  getCourses(params: CourseFilterParams = {}): Observable<PageResponse<Course>> {
    let httpParams = new HttpParams()
      .set('page', (params.page !== undefined ? params.page - 1 : 0).toString()) // Spring Boot page index is 0-based
      .set('size', (params.size || 10).toString())
      .set('sortBy', params.sortBy || 'createdAt')
      .set('sortDir', params.sortDir || 'desc');

    if (params.keyword && params.keyword.trim() !== '') {
      httpParams = httpParams.set('keyword', params.keyword.trim());
    }

    return this.http.get<PageResponse<Course>>(this.apiUrl, { params: httpParams });
  }

  /**
   * Lấy chi tiết 1 khóa học theo ID
   */
  getById(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.apiUrl}/${id}`);
  }

  /**
   * Lấy chi tiết khóa học theo mã (code)
   */
  getByCode(code: string): Observable<Course> {
    return this.http.get<Course>(`${this.apiUrl}/code/${code}`);
  }

  /**
   * Tạo mới 1 khóa học
   */
  create(courseData: Partial<Course>): Observable<{ message: string; data: Course }> {
    return this.http.post<{ message: string; data: Course }>(this.apiUrl, courseData);
  }

  /**
   * Cập nhật thông tin 1 khóa học
   */
  update(id: number, courseData: Partial<Course>): Observable<{ message: string; data: Course }> {
    return this.http.put<{ message: string; data: Course }>(`${this.apiUrl}/${id}`, courseData);
  }

  /**
   * Xóa 1 khóa học
   */
  delete(id: number): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.apiUrl}/${id}`);
  }
}
