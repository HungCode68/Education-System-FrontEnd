import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Grade, PageResponse } from '../models/grade.model';

@Injectable({
  providedIn: 'root'
})
export class GradeService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/api/v1/grades`;

  // API Tìm kiếm và phân trang
  search(page: number = 1, size: number = 10, keyword?: string, isActive?: boolean): Observable<PageResponse<Grade>> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
      
    if (keyword) params = params.set('keyword', keyword);
    if (isActive !== undefined) params = params.set('isActive', isActive.toString());

    return this.http.get<PageResponse<Grade>>(this.apiUrl, { params });
  }

  // API lấy danh sách khối đang hoạt động 
  getAllActive(): Observable<Grade[]> {
    return this.http.get<Grade[]>(`${this.apiUrl}/active-list`); 
  }

  create(data: Partial<Grade>): Observable<Grade> {
    return this.http.post<Grade>(this.apiUrl, data);
  }

  update(id: string, data: Partial<Grade>): Observable<Grade> {
    return this.http.put<Grade>(`${this.apiUrl}/${id}`, data);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}