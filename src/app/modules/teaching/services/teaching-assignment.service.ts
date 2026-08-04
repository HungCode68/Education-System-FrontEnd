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

  getAll(page: any = 1, size: any = 10, classId?: number | string, staffId?: number | string): Observable<SpringPage<TeachingAssignment>> {
    let params = new HttpParams();
    if (typeof page === 'object' && page !== null) {
      const pageIndex = page.page != null ? Math.max(0, Number(page.page) - 1) : 0;
      params = params.set('page', pageIndex.toString());
      if (page.size !== undefined) params = params.set('size', page.size.toString());
      if (page.classId) params = params.set('classId', page.classId.toString());
      if (page.staffId) params = params.set('staffId', page.staffId.toString());
      if (page.keyword) params = params.set('keyword', page.keyword);
    } else {
      const pageIndex = Math.max(0, Number(page) - 1);
      params = params.set('page', pageIndex.toString()).set('size', (size || 10).toString());
      if (classId) params = params.set('classId', classId.toString());
      if (staffId) params = params.set('staffId', staffId.toString());
    }

    return this.http.get<SpringPage<TeachingAssignment>>(this.apiUrl, { params });
  }

  getAllAssignments(params?: any): Observable<SpringPage<TeachingAssignment>> {
    return this.getAll(params);
  }

  getByClassId(classId: number | string): Observable<TeachingAssignment[]> {
    return this.http.get<TeachingAssignment[]>(`${this.apiUrl}/class/${classId}`);
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
