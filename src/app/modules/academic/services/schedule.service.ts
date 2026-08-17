import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { ClassSchedule } from '../models/schedule.model';

/**
 * Backend endpoint: /api/v1/class-schedules (NOT /api/v1/schedules)
 * Backend page is 0-indexed (Spring Pageable), frontend signals are 1-indexed.
 * Conversion is done here in the service layer.
 */
@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/api/v1/class-schedules`;

  getAll(page: any = 0, size: any = 10, classId?: any): Observable<{ content: ClassSchedule[]; totalElements: number }> {
    let params = new HttpParams();
    if (typeof page === 'object' && page !== null) {
      // Convert 1-indexed page to 0-indexed for Spring
      const pageIndex = page.page != null ? Math.max(0, Number(page.page) - 1) : 0;
      params = params.set('page', pageIndex.toString());
      if (page.size !== undefined) params = params.set('size', page.size.toString());
      if (page.classId) params = params.set('classId', page.classId.toString());
      if (page.keyword) params = params.set('keyword', page.keyword);
    } else {
      const pageIndex = Math.max(0, Number(page) - 1);
      params = params.set('page', pageIndex.toString()).set('size', (size || 10).toString());
      if (classId) params = params.set('classId', classId.toString());
    }
    return this.http.get<{ content: ClassSchedule[]; totalElements: number }>(this.apiUrl, { params });
  }

  getByClassId(classId: number | string): Observable<ClassSchedule[]> {
    return this.http.get<ClassSchedule[]>(`${this.apiUrl}/class/${classId}`);
  }

  getSchedulesByClassId(classId: number | string): Observable<ClassSchedule[]> {
    return this.getByClassId(classId);
  }

  getById(id: number | string): Observable<ClassSchedule> {
    return this.http.get<ClassSchedule>(`${this.apiUrl}/${id}`);
  }

  create(schedule: Partial<ClassSchedule>): Observable<ClassSchedule> {
    return this.http.post<ClassSchedule>(this.apiUrl, schedule);
  }

  update(id: number | string, schedule: Partial<ClassSchedule>): Observable<ClassSchedule> {
    return this.http.put<ClassSchedule>(`${this.apiUrl}/${id}`, schedule);
  }

  delete(id: number | string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getMyTimetable(startDate: string, endDate: string): Observable<any[]> {
    const params = new HttpParams()
      .set('startDate', startDate)
      .set('endDate', endDate);
    return this.http.get<any[]>(`${this.apiUrl}/my-timetable`, { params });
  }

  getTimetable(startDate: string, endDate: string, classId?: number | null): Observable<any[]> {
    let params = new HttpParams()
      .set('startDate', startDate)
      .set('endDate', endDate);
    
    if (classId) {
      params = params.set('classId', classId.toString());
    }
    
    return this.http.get<any[]>(`${this.apiUrl}/timetable`, { params });
  }

  getTeacherTimetable(teacherId: number | string, startDate: string, endDate: string): Observable<any[]> {
    const params = new HttpParams()
      .set('startDate', startDate)
      .set('endDate', endDate);
    return this.http.get<any[]>(`${this.apiUrl}/teacher/${teacherId}/timetable`, { params });
  }
}
