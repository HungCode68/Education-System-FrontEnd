import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { LearningMaterial, LessonDto } from '../models/learning-material.model';
import { PageResponse } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class LearningMaterialService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/api/v1/learning-materials`;
  private lessonsApiUrl = `${environment.apiUrl}/api/v1/lessons`;

  getAll(paramsOrPage?: any, size?: number, classId?: number | string): Observable<PageResponse<any>> {
    let httpParams = new HttpParams();
    if (typeof paramsOrPage === 'object' && paramsOrPage !== null) {
      httpParams = httpParams
        .set('page', (paramsOrPage.page !== undefined ? paramsOrPage.page - 1 : 0).toString())
        .set('size', (paramsOrPage.size || 10).toString())
        .set('sortBy', paramsOrPage.sortBy || 'displayOrder')
        .set('sortDir', paramsOrPage.sortDir || 'asc');
      if (paramsOrPage.keyword && paramsOrPage.keyword.trim() !== '') {
        httpParams = httpParams.set('keyword', paramsOrPage.keyword.trim());
      }
    } else {
      const page = typeof paramsOrPage === 'number' ? paramsOrPage : 0;
      httpParams = httpParams
        .set('page', page.toString())
        .set('size', (size || 10).toString());
      if (classId) {
        httpParams = httpParams.set('classId', classId.toString());
      }
    }

    return this.http.get<PageResponse<any>>(this.apiUrl, { params: httpParams });
  }

  getByCourseId(courseId: number | string): Observable<LearningMaterial[]> {
    return this.http.get<LearningMaterial[]>(`${this.apiUrl}/course/${courseId}`);
  }

  getByLessonId(lessonId: number | string): Observable<LearningMaterial[]> {
    return this.http.get<LearningMaterial[]>(`${this.apiUrl}/lesson/${lessonId}`);
  }

  getByClassId(classId: number | string): Observable<LearningMaterial[]> {
    return this.http.get<LearningMaterial[]>(`${this.apiUrl}/class/${classId}`);
  }

  getById(id: number | string): Observable<LearningMaterial> {
    return this.http.get<LearningMaterial>(`${this.apiUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }

  uploadFile(formData: FormData): Observable<{ message: string; data: LearningMaterial }> {
    return this.http.post<{ message: string; data: LearningMaterial }>(`${this.apiUrl}/upload`, formData);
  }

  createLink(dto: Partial<LearningMaterial>): Observable<{ message: string; data: LearningMaterial }> {
    return this.http.post<{ message: string; data: LearningMaterial }>(`${this.apiUrl}/link`, dto);
  }

  update(id: number | string, dto: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, dto);
  }

  updateWithFile(id: number | string, formData: FormData): Observable<{ message: string; data: LearningMaterial }> {
    return this.http.put<{ message: string; data: LearningMaterial }>(`${this.apiUrl}/${id}`, formData);
  }

  delete(id: number | string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  getLessonsByClassId(classId: number | string): Observable<LessonDto[]> {
    return this.http.get<LessonDto[]>(`${this.lessonsApiUrl}/class/${classId}`);
  }
}
