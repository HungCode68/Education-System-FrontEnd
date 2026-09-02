import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Student, SpringPage } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/api/v1/students`;

  /**
   * Lấy danh sách học viên có phân trang.
   * Hỗ trợ cả Object form { page, size, keyword, status } và Positional form (keyword, status, page, size).
   */
  getAll(param1?: any, param2?: any, param3?: any, param4?: any, param5?: any): Observable<SpringPage<Student>> {
    let params = new HttpParams();

    if (typeof param1 === 'object' && param1 !== null) {
      // Object-form: { page (1-indexed), size, keyword, status }
      const pageIndex = param1.page != null ? Math.max(0, Number(param1.page) - 1) : 0;
      params = params.set('page', pageIndex.toString());
      params = params.set('size', (param1.size || 10).toString());
      if (param1.keyword) params = params.set('keyword', param1.keyword);
      if (param1.status) params = params.set('status', param1.status);
    } else {
      // Positional-form
      const keyword = typeof param1 === 'string' && param1.trim() !== '' ? param1.trim() : undefined;
      const status = typeof param2 === 'string' && param2.trim() !== '' ? param2.trim() : undefined;
      let page = 0;
      let size = 10;

      const nums = [param1, param2, param3, param4, param5].filter(x => typeof x === 'number');
      if (nums.length === 1) {
        size = nums[0];
      } else if (nums.length >= 2) {
        page = nums[0];
        size = nums[1];
      }

      params = params.set('page', page.toString()).set('size', size.toString());
      if (keyword) params = params.set('keyword', keyword);
      if (status) params = params.set('status', status);
    }

    return this.http.get<SpringPage<Student>>(this.apiUrl, { params });
  }

  getById(id: number | string): Observable<Student> {
    return this.http.get<Student>(`${this.apiUrl}/${id}`);
  }

  create(data: Partial<Student>): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }

  update(id: number | string, data: Partial<Student>): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, data);
  }

  delete(id: number | string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  deleteMultiple(ids: (number | string)[]): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/batch`, { body: ids });
  }

  /**
   * Backend endpoint: POST /api/v1/students/provision-accounts
   * Cấp tài khoản hàng loạt — nhận { studentIds: number[] }
   */
  createAccount(id: number | string, roleIds: number[], email?: string): Observable<any> {
    const payload: any = { studentIds: [id], roleIds };
    if (email) payload.email = email;
    return this.http.post(`${this.apiUrl}/provision-accounts`, payload);
  }

  createAccountsBatch(studentIds: (number | string)[], roleIds: number[]): Observable<any> {
    return this.http.post(`${this.apiUrl}/provision-accounts`, { studentIds, roleIds });
  }
}