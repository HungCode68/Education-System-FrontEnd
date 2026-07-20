import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Permission, SpringPage } from '../models/permission.model';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/api/v1/permissions`;

  getAll(keyword?: string, scope?: string, page: number = 0, size: number = 10): Observable<SpringPage<Permission>> {
    let params = new HttpParams().set('page', page.toString()).set('size', size.toString());
    if (keyword) params = params.set('keyword', keyword);
    if (scope) params = params.set('scope', scope);
    return this.http.get<SpringPage<Permission>>(this.apiUrl, { params });
  }

  create(data: Partial<Permission>): Observable<Permission> {
    return this.http.post<Permission>(this.apiUrl, data);
  }

  update(id: number, data: Partial<Permission>): Observable<Permission> {
    return this.http.put<Permission>(`${this.apiUrl}/${id}`, data);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}