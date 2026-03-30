import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { GradeSubject, PageResponse } from '../models/grade-subject.model';

@Injectable({
  providedIn: 'root'
})
export class GradeSubjectService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/api/v1/grade-subjects`;

  search(page: number = 1, size: number = 10, gradeId?: string, keyword?: string): Observable<PageResponse<GradeSubject>> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
      
    if (gradeId) params = params.set('gradeId', gradeId);
    if (keyword) params = params.set('keyword', keyword);

    return this.http.get<PageResponse<GradeSubject>>(this.apiUrl, { params });
  }

  create(data: Partial<GradeSubject>): Observable<GradeSubject> {
    return this.http.post<GradeSubject>(this.apiUrl, data);
  }

  update(id: string, data: Partial<GradeSubject>): Observable<GradeSubject> {
    return this.http.put<GradeSubject>(`${this.apiUrl}/${id}`, data);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}