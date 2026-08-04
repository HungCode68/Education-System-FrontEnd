import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { TeachingSubstitution } from '../models/teaching-substitution.model';
import { PageResponse } from '../../academic/models/course.model';

@Injectable({
  providedIn: 'root'
})
export class TeachingSubstitutionService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/api/v1/teaching-substitutions`;

  /**
   * Lấy danh sách dạy thay có phân trang và tìm kiếm
   */
  getAll(paramsOrPage?: any, size?: number, keyword?: string): Observable<PageResponse<TeachingSubstitution>> {
    let httpParams = new HttpParams();
    if (typeof paramsOrPage === 'object' && paramsOrPage !== null) {
      httpParams = httpParams
        .set('page', (paramsOrPage.page !== undefined ? paramsOrPage.page - 1 : 0).toString())
        .set('size', (paramsOrPage.size || 10).toString())
        .set('sortBy', paramsOrPage.sortBy || 'id')
        .set('sortDir', paramsOrPage.sortDir || 'desc');
      if (paramsOrPage.keyword && paramsOrPage.keyword.trim() !== '') {
        httpParams = httpParams.set('keyword', paramsOrPage.keyword.trim());
      }
    } else {
      const page = typeof paramsOrPage === 'number' ? paramsOrPage : 0;
      httpParams = httpParams
        .set('page', page.toString())
        .set('size', (size || 10).toString())
        .set('sortBy', 'id')
        .set('sortDir', 'desc');
      if (keyword && keyword.trim() !== '') {
        httpParams = httpParams.set('keyword', keyword.trim());
      }
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

  update(id: number | string, dto: Partial<TeachingSubstitution>): Observable<{ message: string; data: TeachingSubstitution }> {
    return this.http.put<{ message: string; data: TeachingSubstitution }>(`${this.apiUrl}/${id}`, dto);
  }

  delete(id: number | string): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.apiUrl}/${id}`);
  }
}
