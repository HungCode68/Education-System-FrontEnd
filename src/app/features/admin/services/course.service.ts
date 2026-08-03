import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Course, SpringPage } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/api/v1/courses`;

  getAll(page: number = 0, size: number = 10, keyword?: string, status?: string): Observable<SpringPage<Course>> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    if (keyword) params = params.set('keyword', keyword);
    if (status) params = params.set('status', status);

    return this.http.get<SpringPage<Course>>(this.apiUrl, { params });
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
