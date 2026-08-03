import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Enrollment, BulkEnrollmentDto, SpringPage } from '../models/enrollment.model';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/api/v1/enrollments`;

  getAll(page: number = 0, size: number = 10, classId?: number | string, studentId?: number | string, status?: string): Observable<SpringPage<Enrollment>> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    if (classId) params = params.set('classId', classId.toString());
    if (studentId) params = params.set('studentId', studentId.toString());
    if (status) params = params.set('status', status);

    return this.http.get<SpringPage<Enrollment>>(this.apiUrl, { params });
  }

  getByStudent(studentId: number | string): Observable<Enrollment[]> {
    return this.http.get<Enrollment[]>(`${this.apiUrl}/student/${studentId}`);
  }

  getByClass(classId: number | string): Observable<Enrollment[]> {
    return this.http.get<Enrollment[]>(`${this.apiUrl}/class/${classId}`);
  }

  create(data: Partial<Enrollment>): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }

  bulkEnroll(data: BulkEnrollmentDto): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/bulk`, data);
  }

  update(id: number | string, data: Partial<Enrollment>): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, data);
  }

  delete(id: number | string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
