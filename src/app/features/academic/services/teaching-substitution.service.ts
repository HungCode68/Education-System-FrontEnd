import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { TeachingSubstitution } from '../models/teaching-substitution.model';
import { PageResponse } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class TeachingSubstitutionService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/api/v1/teaching-substitutions`;

  /**
   * Lấy danh sách dạy thay có phân trang và tìm kiếm
   */
  getAll(params: { page?: number; size?: number; keyword?: string; sortBy?: string; sortDir?: string } = {}): Observable<PageResponse<TeachingSubstitution>> {
    let httpParams = new HttpParams()
      .set('page', (params.page !== undefined ? params.page - 1 : 0).toString())
      .set('size', (params.size || 10).toString())
      .set('sortBy', params.sortBy || 'id')
      .set('sortDir', params.sortDir || 'desc');

    if (params.keyword && params.keyword.trim() !== '') {
      httpParams = httpParams.set('keyword', params.keyword.trim());
    }

    return this.http.get<PageResponse<TeachingSubstitution>>(this.apiUrl, { params: httpParams });
  }

  getSubstitutionsByClassId(classId: number): Observable<TeachingSubstitution[]> {
    return this.http.get<TeachingSubstitution[]>(`${this.apiUrl}/class/${classId}`);
  }

  getById(id: number): Observable<TeachingSubstitution> {
    return this.http.get<TeachingSubstitution>(`${this.apiUrl}/${id}`);
  }

  getAvailableTeachers(scheduleId: number, startDate: string, endDate: string, excludeSubstitutionId?: number): Observable<any[]> {
    let params = new HttpParams()
      .set('scheduleId', scheduleId.toString())
      .set('startDate', startDate)
      .set('endDate', endDate);

    if (excludeSubstitutionId) {
      params = params.set('excludeSubstitutionId', excludeSubstitutionId.toString());
    }

    return this.http.get<any[]>(`${this.apiUrl}/available-teachers`, { params });
  }

  create(dto: Partial<TeachingSubstitution>): Observable<{ message: string; data: TeachingSubstitution }> {
    return this.http.post<{ message: string; data: TeachingSubstitution }>(this.apiUrl, dto);
  }

  update(id: number, dto: Partial<TeachingSubstitution>): Observable<{ message: string; data: TeachingSubstitution }> {
    return this.http.put<{ message: string; data: TeachingSubstitution }>(`${this.apiUrl}/${id}`, dto);
  }

  delete(id: number): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.apiUrl}/${id}`);
  }
}
