import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/api/v1/staffs`;

  getTeachersOnly(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/teachers`);
  }

  getAll(keyword?: string, status?: string, departmentId?: string, page: number = 0, size: number = 10): Observable<any> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    if (keyword) params = params.set('keyword', keyword);
    if (status) params = params.set('status', status);
    if (departmentId) params = params.set('departmentId', departmentId);

    return this.http.get<any>(this.apiUrl, { params });
  }

  getById(id: string | number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }

  update(id: string | number, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, data);
  }

  delete(id: string | number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  /**
   * Backend endpoint: POST /api/v1/staffs/provision-accounts
   * Cấp tài khoản cho 1 nhân viên/giáo viên
   */
  createAccount(id: string | number, email?: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/provision-accounts`, { staffIds: [id] });
  }

  createAccountsBatch(staffIds: (string | number)[]): Observable<any> {
    return this.http.post(`${this.apiUrl}/provision-accounts`, { staffIds });
  }
}