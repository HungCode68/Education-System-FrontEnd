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

  getAll(page: number = 0, size: number = 10, keyword?: string, status?: string): Observable<SpringPage<Term>> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    if (keyword) params = params.set('keyword', keyword);
    if (status) params = params.set('status', status);

    return this.http.get<SpringPage<Term>>(this.apiUrl, { params });
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
