import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { ScheduleAssignment } from '../models/schedule-assignment.model';
import { PageResponse } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class ScheduleAssignmentService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/api/v1/schedule-assignments`;

  /**
   * Lấy danh sách phân công ca học có phân trang và tìm kiếm
   */
  getAll(params: { page?: number; size?: number; keyword?: string; sortBy?: string; sortDir?: string } = {}): Observable<PageResponse<ScheduleAssignment>> {
    let httpParams = new HttpParams()
      .set('page', (params.page !== undefined ? params.page - 1 : 0).toString())
      .set('size', (params.size || 10).toString())
      .set('sortBy', params.sortBy || 'id')
      .set('sortDir', params.sortDir || 'desc');

    if (params.keyword && params.keyword.trim() !== '') {
      httpParams = httpParams.set('keyword', params.keyword.trim());
    }

    return this.http.get<PageResponse<ScheduleAssignment>>(this.apiUrl, { params: httpParams });
  }

  getAssignmentsByClassId(classId: number): Observable<ScheduleAssignment[]> {
    return this.http.get<ScheduleAssignment[]>(`${this.apiUrl}/class/${classId}`);
  }

  getAssignmentsByScheduleId(scheduleId: number): Observable<ScheduleAssignment[]> {
    return this.http.get<ScheduleAssignment[]>(`${this.apiUrl}/schedule/${scheduleId}`);
  }

  getById(id: number): Observable<ScheduleAssignment> {
    return this.http.get<ScheduleAssignment>(`${this.apiUrl}/${id}`);
  }

  create(dto: Partial<ScheduleAssignment>): Observable<{ message: string; data: ScheduleAssignment }> {
    return this.http.post<{ message: string; data: ScheduleAssignment }>(this.apiUrl, dto);
  }

  update(id: number, dto: Partial<ScheduleAssignment>): Observable<{ message: string; data: ScheduleAssignment }> {
    return this.http.put<{ message: string; data: ScheduleAssignment }>(`${this.apiUrl}/${id}`, dto);
  }

  delete(id: number): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.apiUrl}/${id}`);
  }
}
