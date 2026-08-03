import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { ActivityLog, LogStatus, SpringPage } from '../models/activity-log.model';

@Injectable({
  providedIn: 'root'
})
export class ActivityLogService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/api/v1/activity-logs`;

  getAllLogs(
    keyword?: string,
    module?: string,
    action?: string,
    status?: LogStatus,
    startDate?: string,
    endDate?: string,
    page = 0,
    size = 20,
    sortBy = 'createdAt',
    sortDir: 'asc' | 'desc' = 'desc'
  ): Observable<SpringPage<ActivityLog>> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('sortBy', sortBy)
      .set('sortDir', sortDir);

    if (keyword) params = params.set('keyword', keyword);
    if (module) params = params.set('module', module);
    if (action) params = params.set('action', action);
    if (status) params = params.set('status', status);
    if (startDate) params = params.set('startDate', `${startDate}T00:00:00`);
    if (endDate) params = params.set('endDate', `${endDate}T23:59:59`);

    return this.http.get<SpringPage<ActivityLog>>(this.apiUrl, { params });
  }

  getById(id: number): Observable<ActivityLog> {
    return this.http.get<ActivityLog>(`${this.apiUrl}/${id}`);
  }

  getUserLogs(userId: number, page = 0, size = 20): Observable<SpringPage<ActivityLog>> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
    return this.http.get<SpringPage<ActivityLog>>(`${this.apiUrl}/user/${userId}`, { params });
  }
}
