import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

export interface AttendanceDto {
  id?: number;
  scheduleId: number;
  studentId: number;
  attendanceDate: string; // 'YYYY-MM-DD'
  status: 'PRESENT' | 'ABSENT' | 'EXCUSED' | 'LATE';
  note?: string;
  studentName?: string;
  studentCode?: string;
  className?: string;
  courseName?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/api/v1/attendances`;

  getAttendanceSheet(scheduleId: number | string, dateStr: string): Observable<AttendanceDto[]> {
    return this.http.get<AttendanceDto[]>(`${this.apiUrl}/schedule/${scheduleId}/date/${dateStr}`);
  }

  batchMarkAttendance(scheduleId: number | string, dateStr: string, sheet: AttendanceDto[]): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/schedule/${scheduleId}/date/${dateStr}/batch`, sheet);
  }
}
