import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { ClassSchedule } from '../models/schedule.model';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/api/v1/class-schedules`;

  /**
   * Lấy danh sách ca lịch học theo ID lớp học
   */
  getSchedulesByClassId(classId: number): Observable<ClassSchedule[]> {
    return this.http.get<ClassSchedule[]>(`${this.apiUrl}/class/${classId}`);
  }

  /**
   * Lấy chi tiết 1 ca lịch học theo ID
   */
  getById(id: number): Observable<ClassSchedule> {
    return this.http.get<ClassSchedule>(`${this.apiUrl}/${id}`);
  }

  /**
   * Tạo mới 1 ca lịch học
   */
  create(dto: Partial<ClassSchedule>): Observable<{ message: string; data: ClassSchedule }> {
    return this.http.post<{ message: string; data: ClassSchedule }>(this.apiUrl, dto);
  }

  /**
   * Cập nhật thông tin 1 ca lịch học
   */
  update(id: number, dto: Partial<ClassSchedule>): Observable<{ message: string; data: ClassSchedule }> {
    return this.http.put<{ message: string; data: ClassSchedule }>(`${this.apiUrl}/${id}`, dto);
  }

  /**
   * Xóa 1 ca lịch học
   */
  delete(id: number): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.apiUrl}/${id}`);
  }
}
