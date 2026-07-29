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

  getAll(page: number = 0, size: number = 10, scheduleId?: number | string, staffId?: number | string): Observable<SpringPage<ScheduleAssignment>> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    if (scheduleId) params = params.set('scheduleId', scheduleId.toString());
    if (staffId) params = params.set('staffId', staffId.toString());

    return this.http.get<SpringPage<ScheduleAssignment>>(this.apiUrl, { params });
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
