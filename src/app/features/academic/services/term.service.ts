import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Term, TermFilterParams } from '../models/term.model';
import { PageResponse } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class TermService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/api/v1/terms`;

  /**
   * Lấy danh sách kỳ/đợt học có phân trang và tìm kiếm
   */
  getTerms(params: TermFilterParams = {}): Observable<PageResponse<Term>> {
    let httpParams = new HttpParams()
      .set('page', (params.page !== undefined ? params.page - 1 : 0).toString())
      .set('size', (params.size || 10).toString())
      .set('sortBy', params.sortBy || 'code')
      .set('sortDir', params.sortDir || 'asc');

    if (params.keyword && params.keyword.trim() !== '') {
      httpParams = httpParams.set('keyword', params.keyword.trim());
    }

    return this.http.get<PageResponse<Term>>(this.apiUrl, { params: httpParams });
  }

  /**
   * Lấy chi tiết 1 kỳ học theo ID
   */
  getById(id: number): Observable<Term> {
    return this.http.get<Term>(`${this.apiUrl}/${id}`);
  }

  /**
   * Tạo mới 1 kỳ/đợt học
   */
  create(termData: Partial<Term>): Observable<{ message: string; data: Term }> {
    return this.http.post<{ message: string; data: Term }>(this.apiUrl, termData);
  }

  /**
   * Cập nhật thông tin 1 kỳ/đợt học
   */
  update(id: number, termData: Partial<Term>): Observable<{ message: string; data: Term }> {
    return this.http.put<{ message: string; data: Term }>(`${this.apiUrl}/${id}`, termData);
  }

  /**
   * Xóa 1 kỳ/đợt học
   */
  delete(id: number): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.apiUrl}/${id}`);
  }
}
