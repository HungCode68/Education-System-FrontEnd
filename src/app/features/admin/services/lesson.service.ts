import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Lesson, SpringPage } from '../models/lesson.model';

@Injectable({
  providedIn: 'root'
})
export class LessonService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/api/v1/lessons`;

  getAll(page: number = 0, size: number = 10, classId?: number | string): Observable<SpringPage<Lesson>> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    if (classId) params = params.set('classId', classId.toString());

    return this.http.get<SpringPage<Lesson>>(this.apiUrl, { params });
  }

  getByClass(classId: number | string): Observable<Lesson[]> {
    return this.http.get<Lesson[]>(`${this.apiUrl}/class/${classId}`);
  }

  getById(id: number | string): Observable<Lesson> {
    return this.http.get<Lesson>(`${this.apiUrl}/${id}`);
  }

  create(data: Partial<Lesson>): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }

  update(id: number | string, data: Partial<Lesson>): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, data);
  }

  delete(id: number | string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
