import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Subject, PageResponse } from '../models/subject.model';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/api/v1/subjects`;

  // API Tìm kiếm và phân trang
  search(page: number = 1, size: number = 10, keyword?: string, isActive?: boolean): Observable<PageResponse<Subject>> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
      
    if (keyword) params = params.set('keyword', keyword);
    if (isActive !== undefined) params = params.set('isActive', isActive.toString());

    return this.http.get<PageResponse<Subject>>(this.apiUrl, { params });
  }

  // API Lấy toàn bộ môn đang hoạt động (cho dropdown)
  getAllActive(): Observable<Subject[]> {
    return this.http.get<Subject[]>(`${this.apiUrl}/active-list`); 
  }

  create(data: Partial<Subject>): Observable<Subject> {
    return this.http.post<Subject>(this.apiUrl, data);
  }

  update(id: string, data: Partial<Subject>): Observable<Subject> {
    return this.http.put<Subject>(`${this.apiUrl}/${id}`, data);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}