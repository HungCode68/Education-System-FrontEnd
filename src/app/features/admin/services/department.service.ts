import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Department, SpringPage } from '../models/department.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/api/departments`;

  getAll(keyword?: string, type?: string, isActive?: boolean, page: number = 0, size: number = 10): Observable<SpringPage<Department>> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    if (keyword) params = params.set('keyword', keyword);
    if (type) params = params.set('type', type);
    if (isActive !== undefined && isActive !== null) params = params.set('isActive', isActive.toString());

    return this.http.get<SpringPage<Department>>(this.apiUrl, { params });
  }

  getById(id: string): Observable<Department> {
    return this.http.get<Department>(`${this.apiUrl}/${id}`);
  }

  create(data: Partial<Department>): Observable<Department> {
    return this.http.post<Department>(this.apiUrl, data);
  }

  update(id: string, data: Partial<Department>): Observable<Department> {
    return this.http.put<Department>(`${this.apiUrl}/${id}`, data);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getAllActive(): Observable<Department[]> {
    return this.http.get<Department[]>(`${this.apiUrl}/active`);
  }

  getActiveByType(type: string): Observable<Department[]> {
    return this.http.get<Department[]>(`${this.apiUrl}/active/type/${type}`);
  }
}