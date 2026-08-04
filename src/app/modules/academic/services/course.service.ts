import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Course, SpringPage } from '../models/course.model';

/**
 * Backend: /api/v1/courses, page 0-indexed (Spring Pageable).
 * Frontend signals are 1-indexed. Conversion done here.
 */
@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/api/v1/courses`;

  getAll(page: any = 1, size: any = 10, keyword?: string, status?: string): Observable<SpringPage<Course>> {
    let params = new HttpParams();
    if (typeof page === 'object' && page !== null) {
      const pageIndex = page.page != null ? Math.max(0, Number(page.page) - 1) : 0;
      params = params.set('page', pageIndex.toString());
      if (page.size !== undefined) params = params.set('size', page.size.toString());
      if (page.keyword) params = params.set('keyword', page.keyword);
      if (page.status) params = params.set('status', page.status);
    } else {
      const pageIndex = Math.max(0, Number(page) - 1);
      params = params.set('page', pageIndex.toString()).set('size', (size || 10).toString());
      if (keyword) params = params.set('keyword', keyword);
      if (status) params = params.set('status', status);
    }
    return this.http.get<SpringPage<Course>>(this.apiUrl, { params });
  }

  getCourses(params?: any): Observable<SpringPage<Course>> {
    return this.getAll(params);
  }

  getById(id: number | string): Observable<Course> {
    return this.http.get<Course>(`${this.apiUrl}/${id}`);
  }

  getByCode(code: string): Observable<Course> {
    return this.http.get<Course>(`${this.apiUrl}/code/${code}`);
  }

  create(data: Partial<Course>): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }

  update(id: number | string, data: Partial<Course>): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, data);
  }

  delete(id: number | string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
