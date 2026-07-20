import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Role, SpringPage } from '../models/role.model';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/api/v1/roles`;

  getAll(keyword?: string, status?: string, page: number = 0, size: number = 10): Observable<SpringPage<Role>> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    if (keyword) params = params.set('keyword', keyword);
    if (status) params = params.set('status', status);

    return this.http.get<SpringPage<Role>>(this.apiUrl, { params });
  }

  getById(id: string): Observable<Role> {
    return this.http.get<Role>(`${this.apiUrl}/${id}`);
  }

  create(data: Partial<Role>): Observable<Role> {
    return this.http.post<Role>(this.apiUrl, data);
  }

  update(id: string, data: Partial<Role>): Observable<Role> {
    return this.http.put<Role>(`${this.apiUrl}/${id}`, data);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  assignPermissions(roleId: string, permissionIds: (string | number)[]): Observable<Role> {
    return this.http.post<Role>(`${this.apiUrl}/assign-permissions`, { roleId, permissionIds });
  }
}