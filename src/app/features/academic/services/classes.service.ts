import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { ClassEntity, ClassFilterParams } from '../models/class.model';
import { PageResponse } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class ClassesService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/api/v1/classes`;

  /**
   * Lấy danh sách lớp học có phân trang và tìm kiếm
   */
  getClasses(params: ClassFilterParams = {}): Observable<PageResponse<ClassEntity>> {
    let httpParams = new HttpParams()
      .set('page', (params.page !== undefined ? params.page - 1 : 0).toString())
      .set('size', (params.size || 10).toString())
      .set('sortBy', params.sortBy || 'code')
      .set('sortDir', params.sortDir || 'asc');

    if (params.keyword && params.keyword.trim() !== '') {
      httpParams = httpParams.set('keyword', params.keyword.trim());
    }

    return this.http.get<PageResponse<ClassEntity>>(this.apiUrl, { params: httpParams });
  }

  /**
   * Lấy chi tiết 1 lớp học theo ID
   */
  getById(id: number): Observable<ClassEntity> {
    return this.http.get<ClassEntity>(`${this.apiUrl}/${id}`);
  }

  /**
   * Tạo mới 1 lớp học
   */
  create(classData: Partial<ClassEntity>): Observable<{ message: string; data: ClassEntity }> {
    return this.http.post<{ message: string; data: ClassEntity }>(this.apiUrl, classData);
  }

  /**
   * Cập nhật thông tin 1 lớp học
   */
  update(id: number, classData: Partial<ClassEntity>): Observable<{ message: string; data: ClassEntity }> {
    return this.http.put<{ message: string; data: ClassEntity }>(`${this.apiUrl}/${id}`, classData);
  }

  /**
   * Xóa 1 lớp học
   */
  delete(id: number): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.apiUrl}/${id}`);
  }
}
