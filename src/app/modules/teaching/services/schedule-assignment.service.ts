import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { ScheduleAssignment, SpringPage } from '../models/schedule-assignment.model';

@Injectable({
  providedIn: 'root'
})
export class ScheduleAssignmentService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/api/v1/schedule-assignments`;

  getAll(page: any = 1, size: any = 10, scheduleId?: number | string, staffId?: number | string): Observable<SpringPage<ScheduleAssignment>> {
    let params = new HttpParams();
    if (typeof page === 'object' && page !== null) {
      // Convert 1-indexed page to 0-indexed for Spring
      const pageIndex = page.page != null ? Math.max(0, Number(page.page) - 1) : 0;
      params = params.set('page', pageIndex.toString());
      if (page.size !== undefined) params = params.set('size', page.size.toString());
      if (page.scheduleId) params = params.set('scheduleId', page.scheduleId.toString());
      if (page.staffId) params = params.set('staffId', page.staffId.toString());
      if (page.keyword) params = params.set('keyword', page.keyword);
    } else {
      const pageIndex = Math.max(0, Number(page) - 1);
      params = params.set('page', pageIndex.toString()).set('size', (size || 10).toString());
      if (scheduleId) params = params.set('scheduleId', scheduleId.toString());
      if (staffId) params = params.set('staffId', staffId.toString());
    }

    return this.http.get<SpringPage<ScheduleAssignment>>(this.apiUrl, { params });
  }

  getAssignmentsByScheduleId(scheduleId: number | string): Observable<ScheduleAssignment[]> {
    return this.http.get<ScheduleAssignment[]>(`${this.apiUrl}/schedule/${scheduleId}`);
  }

  getAssignmentsByClassId(classId: number | string): Observable<ScheduleAssignment[]> {
    return this.http.get<ScheduleAssignment[]>(`${this.apiUrl}/class/${classId}`);
  }

  getById(id: number | string): Observable<ScheduleAssignment> {
    return this.http.get<ScheduleAssignment>(`${this.apiUrl}/${id}`);
  }

  create(data: Partial<ScheduleAssignment>): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }

  update(id: number | string, data: Partial<ScheduleAssignment>): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, data);
  }

  delete(id: number | string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
