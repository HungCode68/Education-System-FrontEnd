import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Class, SpringPage } from '../models/class.model';

@Injectable({
  providedIn: 'root'
})
export class ClassService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/api/v1/classes`;

  getAll(page: number = 0, size: number = 10, keyword?: string, status?: string, courseId?: number | string, termId?: number | string): Observable<SpringPage<Class>> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    if (keyword) params = params.set('keyword', keyword);
    if (status) params = params.set('status', status);
    if (courseId) params = params.set('courseId', courseId.toString());
    if (termId) params = params.set('termId', termId.toString());

    return this.http.get<SpringPage<Class>>(this.apiUrl, { params });
  }

  getById(id: number | string): Observable<Class> {
    return this.http.get<Class>(`${this.apiUrl}/${id}`);
  }

  create(data: Partial<Class>): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }

  update(id: number | string, data: Partial<Class>): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, data);
  }

  delete(id: number | string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
