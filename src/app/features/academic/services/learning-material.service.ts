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

  /**
   * Lấy danh sách tài liệu học tập có phân trang và tìm kiếm
   */
  getAll(params: { page?: number; size?: number; keyword?: string; sortBy?: string; sortDir?: string } = {}): Observable<PageResponse<LearningMaterial>> {
    let httpParams = new HttpParams()
      .set('page', (params.page !== undefined ? params.page - 1 : 0).toString())
      .set('size', (params.size || 10).toString())
      .set('sortBy', params.sortBy || 'displayOrder')
      .set('sortDir', params.sortDir || 'asc');

    if (params.keyword && params.keyword.trim() !== '') {
      httpParams = httpParams.set('keyword', params.keyword.trim());
    }

    return this.http.get<PageResponse<LearningMaterial>>(this.apiUrl, { params: httpParams });
  }

  getByCourseId(courseId: number): Observable<LearningMaterial[]> {
    return this.http.get<LearningMaterial[]>(`${this.apiUrl}/course/${courseId}`);
  }

  getByLessonId(lessonId: number): Observable<LearningMaterial[]> {
    return this.http.get<LearningMaterial[]>(`${this.apiUrl}/lesson/${lessonId}`);
  }

  getByClassId(classId: number): Observable<LearningMaterial[]> {
    return this.http.get<LearningMaterial[]>(`${this.apiUrl}/class/${classId}`);
  }

  getById(id: number): Observable<LearningMaterial> {
    return this.http.get<LearningMaterial>(`${this.apiUrl}/${id}`);
  }

  uploadFile(formData: FormData): Observable<{ message: string; data: LearningMaterial }> {
    return this.http.post<{ message: string; data: LearningMaterial }>(`${this.apiUrl}/upload`, formData);
  }

  createLink(dto: Partial<LearningMaterial>): Observable<{ message: string; data: LearningMaterial }> {
    return this.http.post<{ message: string; data: LearningMaterial }>(`${this.apiUrl}/link`, dto);
  }

  update(id: number, dto: Partial<LearningMaterial>): Observable<{ message: string; data: LearningMaterial }> {
    return this.http.put<{ message: string; data: LearningMaterial }>(`${this.apiUrl}/${id}`, dto);
  }

  updateWithFile(id: number, formData: FormData): Observable<{ message: string; data: LearningMaterial }> {
    return this.http.put<{ message: string; data: LearningMaterial }>(`${this.apiUrl}/${id}`, formData);
  }

  delete(id: number): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.apiUrl}/${id}`);
  }

  getLessonsByClassId(classId: number): Observable<LessonDto[]> {
    return this.http.get<LessonDto[]>(`${this.lessonsApiUrl}/class/${classId}`);
  }
}
