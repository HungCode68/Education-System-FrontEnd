import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { User, SpringPage } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/api/v1/users`;

  getAll(keyword?: string, status?: string, role?: string, page: number = 0, size: number = 10): Observable<SpringPage<User>> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    if (keyword) params = params.set('keyword', keyword);
    if (status) params = params.set('status', status);
    if (role) params = params.set('role', role);

    return this.http.get<SpringPage<User>>(this.apiUrl, { params });
  }

  getById(id: string | number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }

  update(id: string | number, data: Partial<User>): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/${id}`, data);
  }

  /** Gán nhiều role cho user (Set&lt;string&gt;) */
  updateRoles(userId: string | number, roles: string[]): Observable<unknown> {
    return this.http.patch(`${this.apiUrl}/${userId}/roles`, { roles });
  }

  updateStatus(userId: string | number, status: string): Observable<unknown> {
    return this.http.patch(`${this.apiUrl}/${userId}/status`, { status });
  }

  resetPassword(userId: string | number): Observable<unknown> {
    return this.http.patch(`${this.apiUrl}/${userId}/reset-password`, {});
  }
}
