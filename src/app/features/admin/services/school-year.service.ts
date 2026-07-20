import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { SchoolYear, PageResponse } from '../models/school-year.model';

@Injectable({
  providedIn: 'root'
})
export class SchoolYearService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/api/v1/school-years`;

  getAll(page: number = 1, size: number = 10, keyword?: string, status?: string): Observable<PageResponse<SchoolYear>> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
      
    if (keyword) params = params.set('keyword', keyword);
    if (status) params = params.set('status', status);

    return this.http.get<PageResponse<SchoolYear>>(this.apiUrl, { params });
  }

  create(data: Partial<SchoolYear>): Observable<SchoolYear> {
    return this.http.post<SchoolYear>(this.apiUrl, data);
  }

  update(id: string, data: Partial<SchoolYear>): Observable<SchoolYear> {
    return this.http.put<SchoolYear>(`${this.apiUrl}/${id}`, data);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  bulkDelete(ids: string[]): Observable<any> {
    return this.http.delete(this.apiUrl, { body: ids });
  }

  archive(id: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}/archive`, {});
  }
}