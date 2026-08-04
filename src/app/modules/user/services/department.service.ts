import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Department, SpringPage } from '../models/department.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/api/v1/departments`;

  getAll(keyword?: string, page: number = 0, size: number = 10): Observable<SpringPage<Department>> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    if (keyword) params = params.set('keyword', keyword);

    return this.http.get<SpringPage<Department>>(this.apiUrl, { params });
  }

  getById(id: string | number): Observable<Department> {
    return this.http.get<Department>(`${this.apiUrl}/${id}`);
  }

  create(data: Partial<Department>): Observable<Department> {
    return this.http.post<Department>(this.apiUrl, data);
  }

  update(id: string | number, data: Partial<Department>): Observable<Department> {
    return this.http.put<Department>(`${this.apiUrl}/${id}`, data);
  }

  delete(id: string | number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  /** Lấy toàn bộ phòng ban (dùng cho dropdown) */
  getAllActive(): Observable<Department[]> {
    return this.getAll(undefined, 0, 1000).pipe(map(res => res.content || []));
  }
}
