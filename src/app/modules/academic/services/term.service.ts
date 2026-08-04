import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Term, SpringPage } from '../models/term.model';

@Injectable({
  providedIn: 'root'
})
export class TermService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/api/v1/terms`;

  getAll(page: any = 1, size: any = 10, keyword?: string, status?: string): Observable<SpringPage<Term>> {
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

    return this.http.get<SpringPage<Term>>(this.apiUrl, { params });
  }

  getTerms(params?: any): Observable<SpringPage<Term>> {
    return this.getAll(params);
  }

  getById(id: number | string): Observable<Term> {
    return this.http.get<Term>(`${this.apiUrl}/${id}`);
  }

  create(data: Partial<Term>): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }

  update(id: number | string, data: Partial<Term>): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, data);
  }

  delete(id: number | string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
