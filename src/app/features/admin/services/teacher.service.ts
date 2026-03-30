import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Teacher, SpringPage } from '../models/teacher.model';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/api/teachers`;

  getAll(keyword?: string, status?: string, departmentId?: string, page: number = 0, size: number = 10): Observable<SpringPage<Teacher>> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    if (keyword) params = params.set('keyword', keyword);
    if (status) params = params.set('status', status);
    if (departmentId) params = params.set('departmentId', departmentId);

    return this.http.get<SpringPage<Teacher>>(this.apiUrl, { params });
  }

  getById(id: string): Observable<Teacher> {
    return this.http.get<Teacher>(`${this.apiUrl}/${id}`);
  }

  create(data: Partial<Teacher>): Observable<Teacher> {
    return this.http.post<Teacher>(this.apiUrl, data);
  }

  update(id: string, data: Partial<Teacher>): Observable<Teacher> {
    return this.http.put<Teacher>(`${this.apiUrl}/${id}`, data);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  createAccount(id: string, email?: string): Observable<any> {
    const body = email ? { email } : {}; 
    return this.http.post(`${this.apiUrl}/${id}/create-account`, body);
  }

  createAccountsBatch(teacherIds: string[]): Observable<any> {
    return this.http.post(`${this.apiUrl}/create-accounts-batch`, { teacherIds });
  }
}