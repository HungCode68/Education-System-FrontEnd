import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { ActivityLog, SpringPage } from '../models/activity-log.model';

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
    status?: string, 
    startDate?: string, 
    endDate?: string, 
    page: number = 0, 
    size: number = 20
  ): Observable<SpringPage<ActivityLog>> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    if (keyword) params = params.set('keyword', keyword);
    if (module) params = params.set('module', module);
    if (action) params = params.set('action', action);
    if (status) params = params.set('status', status);
    
    // Xử lý nối chuỗi giờ phút giây vì backend yêu cầu ISO DATE_TIME
    if (startDate) params = params.set('startDate', `${startDate}T00:00:00`);
    if (endDate) params = params.set('endDate', `${endDate}T23:59:59`);

    return this.http.get<SpringPage<ActivityLog>>(this.apiUrl, { params });
  }

  getUserLogs(userId: string, page: number = 0, size: number = 10): Observable<SpringPage<ActivityLog>> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
    return this.http.get<SpringPage<ActivityLog>>(`${this.apiUrl}/user/${userId}`, { params });
  }
}