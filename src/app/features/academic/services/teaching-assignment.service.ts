import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { TeachingAssignment } from '../models/teaching-assignment.model';
import { PageResponse } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class TeachingAssignmentService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/api/v1/teaching-assignments`;

  /**
   * Lấy danh sách phân công giảng dạy có phân trang và tìm kiếm
   */
  getAllAssignments(params: { page?: number; size?: number; keyword?: string; sortBy?: string; sortDir?: string } = {}): Observable<PageResponse<TeachingAssignment>> {
    let httpParams = new HttpParams()
      .set('page', (params.page !== undefined ? params.page - 1 : 0).toString())
      .set('size', (params.size || 10).toString())
      .set('sortBy', params.sortBy || 'id')
      .set('sortDir', params.sortDir || 'desc');

    if (params.keyword && params.keyword.trim() !== '') {
      httpParams = httpParams.set('keyword', params.keyword.trim());
    }

    return this.http.get<PageResponse<TeachingAssignment>>(this.apiUrl, { params: httpParams });
  }

  getAssignmentsByClassId(classId: number): Observable<TeachingAssignment[]> {
    return this.http.get<TeachingAssignment[]>(`${this.apiUrl}/class/${classId}`);
  }

  getById(id: number): Observable<TeachingAssignment> {
    return this.http.get<TeachingAssignment>(`${this.apiUrl}/${id}`);
  }

  create(dto: Partial<TeachingAssignment>): Observable<{ message: string; data: TeachingAssignment }> {
    return this.http.post<{ message: string; data: TeachingAssignment }>(this.apiUrl, dto);
  }

  update(id: number, dto: Partial<TeachingAssignment>): Observable<{ message: string; data: TeachingAssignment }> {
    return this.http.put<{ message: string; data: TeachingAssignment }>(`${this.apiUrl}/${id}`, dto);
  }

  delete(id: number): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.apiUrl}/${id}`);
  }
}
