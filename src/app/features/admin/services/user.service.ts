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

  getAll(keyword?: string, status?: string, roleCode?: string, page: number = 0, size: number = 10): Observable<SpringPage<User>> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    if (keyword) params = params.set('keyword', keyword);
    if (status) params = params.set('status', status);
    if (roleCode) params = params.set('roleCode', roleCode);

    return this.http.get<SpringPage<User>>(this.apiUrl, { params });
  }

  getById(id: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }

  changeRole(userId: string, roleCode: string): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${userId}/role`, { roleCode });
  }

  updateStatus(userId: string, status: string): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${userId}/status`, { status });
  }

  resetPassword(userId: string): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${userId}/reset-password`, {});
  }
}