import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Staff, SpringPage } from '../models/staff.model';

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/api/v1/staffs`;

  /** GET /api/v1/staffs — danh sách toàn bộ nhân sự, có filter keyword */
  getAll(keyword?: string, page: number = 0, size: number = 10, sortBy = 'createdAt', sortDir = 'desc'): Observable<SpringPage<Staff>> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('sortBy', sortBy)
      .set('sortDir', sortDir);

    if (keyword) params = params.set('keyword', keyword);

    return this.http.get<SpringPage<Staff>>(this.apiUrl, { params });
  }

  /** GET /api/v1/staffs/department/{departmentId} — danh sách nhân sự thuộc 1 phòng ban cụ thể */
  getByDepartment(departmentId: number | string, page: number = 0, size: number = 100): Observable<SpringPage<Staff>> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    return this.http.get<SpringPage<Staff>>(`${this.apiUrl}/department/${departmentId}`, { params });
  }

  /** GET /api/v1/staffs/teachers — danh sách toàn bộ nhân sự giảng dạy (staffType chứa TEACHER) */
  getTeachers(): Observable<Staff[]> {
    return this.http.get<Staff[]>(`${this.apiUrl}/teachers`);
  }

  getById(id: number | string): Observable<Staff> {
    return this.http.get<Staff>(`${this.apiUrl}/${id}`);
  }

  getByStaffCode(staffCode: string): Observable<Staff> {
    return this.http.get<Staff>(`${this.apiUrl}/code/${staffCode}`);
  }

  /** POST /api/v1/staffs — backend trả { message, data: StaffDto } */
  create(data: Partial<Staff>): Observable<{ message: string; data: Staff }> {
    return this.http.post<{ message: string; data: Staff }>(this.apiUrl, data);
  }

  /** PUT /api/v1/staffs/{id} — backend trả { message, data: StaffDto } */
  update(id: number | string, data: Partial<Staff>): Observable<{ message: string; data: Staff }> {
    return this.http.put<{ message: string; data: Staff }>(`${this.apiUrl}/${id}`, data);
  }

  delete(id: number | string): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.apiUrl}/${id}`);
  }

  deleteMultiple(ids: (number | string)[]): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/batch`, { body: ids });
  }

  createAccount(id: number | string, roleIds: (number | string)[], email?: string): Observable<any> {
    const payload: any = { staffIds: [id], roleIds };
    if (email) payload.email = email;
    return this.http.post(`${this.apiUrl}/provision-accounts`, payload);
  }

  createAccountsBatch(staffIds: (number | string)[], roleIds: (number | string)[]): Observable<any> {
    return this.http.post(`${this.apiUrl}/provision-accounts`, { staffIds, roleIds });
  }
}
