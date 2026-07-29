import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { TeachingAssignment, SpringPage } from '../models/teaching-assignment.model';

@Injectable({
  providedIn: 'root'
})
export class TeachingAssignmentService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/api/v1/teaching-assignments`;

  getAll(page: number = 0, size: number = 10, classId?: number | string, staffId?: number | string): Observable<SpringPage<TeachingAssignment>> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    if (classId) params = params.set('classId', classId.toString());
    if (staffId) params = params.set('staffId', staffId.toString());

    return this.http.get<SpringPage<TeachingAssignment>>(this.apiUrl, { params });
  }

  getById(id: number | string): Observable<TeachingAssignment> {
    return this.http.get<TeachingAssignment>(`${this.apiUrl}/${id}`);
  }

  create(data: Partial<TeachingAssignment>): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }

  update(id: number | string, data: Partial<TeachingAssignment>): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, data);
  }

  delete(id: number | string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
