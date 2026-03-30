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
  private apiUrl = `${environment.apiUrl}/api/students`;

  // Spring Data Pageable mặc định bắt đầu từ 0
  getAll(keyword?: string, status?: string, admissionYear?: number, page: number = 0, size: number = 10): Observable<SpringPage<Student>> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    if (keyword) params = params.set('keyword', keyword);
    if (status) params = params.set('status', status);
    if (admissionYear) params = params.set('admissionYear', admissionYear.toString());

    return this.http.get<SpringPage<Student>>(this.apiUrl, { params });
  }

  getById(id: string): Observable<Student> {
    return this.http.get<Student>(`${this.apiUrl}/${id}`);
  }

  create(data: Partial<Student>): Observable<Student> {
    return this.http.post<Student>(this.apiUrl, data);
  }

  update(id: string, data: Partial<Student>): Observable<Student> {
    return this.http.put<Student>(`${this.apiUrl}/${id}`, data);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  createAccount(id: string, email?: string): Observable<any> {
    const body = email ? { email } : {}; // Gửi email hoặc rỗng để BE tự tạo
    return this.http.post(`${this.apiUrl}/${id}/create-account`, body);
  }

  createAccountsBatch(studentIds: string[]): Observable<any> {
    return this.http.post(`${this.apiUrl}/create-accounts-batch`, { studentIds });
  }
}