import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { ClassSchedule, SpringPage } from '../models/class-schedule.model';

@Injectable({
  providedIn: 'root'
})
export class ClassScheduleService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/api/v1/class-schedules`;

  getAll(page: number = 0, size: number = 10, classId?: number | string): Observable<SpringPage<ClassSchedule>> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    if (classId) params = params.set('classId', classId.toString());

    return this.http.get<SpringPage<ClassSchedule>>(this.apiUrl, { params });
  }

  getByClass(classId: number | string): Observable<ClassSchedule[]> {
    return this.http.get<ClassSchedule[]>(`${this.apiUrl}/class/${classId}`);
  }

  getStudentTimetable(studentId: number | string): Observable<ClassSchedule[]> {
    return this.http.get<ClassSchedule[]>(`${this.apiUrl}/student/${studentId}/timetable`);
  }

  getTeacherTimetable(teacherId: number | string): Observable<ClassSchedule[]> {
    return this.http.get<ClassSchedule[]>(`${this.apiUrl}/teacher/${teacherId}/timetable`);
  }

  create(data: Partial<ClassSchedule>): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }

  update(id: number | string, data: Partial<ClassSchedule>): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, data);
  }

  delete(id: number | string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
