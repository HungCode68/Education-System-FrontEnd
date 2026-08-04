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

  getAll(page: any = 1, size: any = 10, keyword?: string, status?: string, courseId?: number | string, termId?: number | string): Observable<SpringPage<Class>> {
    let params = new HttpParams();
    if (typeof page === 'object' && page !== null) {
      const pageIndex = page.page != null ? Math.max(0, Number(page.page) - 1) : 0;
      params = params.set('page', pageIndex.toString());
      if (page.size !== undefined) params = params.set('size', page.size.toString());
      if (page.keyword) params = params.set('keyword', page.keyword);
      if (page.status) params = params.set('status', page.status);
      if (page.courseId) params = params.set('courseId', page.courseId.toString());
      if (page.termId) params = params.set('termId', page.termId.toString());
    } else {
      const pageIndex = Math.max(0, Number(page) - 1);
      params = params.set('page', pageIndex.toString()).set('size', (size || 10).toString());
      if (keyword) params = params.set('keyword', keyword);
      if (status) params = params.set('status', status);
      if (courseId) params = params.set('courseId', courseId.toString());
      if (termId) params = params.set('termId', termId.toString());
    }

    return this.http.get<SpringPage<Class>>(this.apiUrl, { params });
  }

  getClasses(params?: any): Observable<SpringPage<Class>> {
    return this.getAll(params);
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

export { ClassService as ClassesService };
