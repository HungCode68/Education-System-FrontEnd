import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Room } from '../models/room.model';
import { PageResponse } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/api/v1/rooms`;

  /**
   * Lấy danh sách phòng học có phân trang và tìm kiếm
   */
  getRooms(params: { page?: number; size?: number; keyword?: string; sortBy?: string; sortDir?: string } = {}): Observable<PageResponse<Room>> {
    let httpParams = new HttpParams()
      .set('page', (params.page !== undefined ? params.page - 1 : 0).toString())
      .set('size', (params.size || 10).toString())
      .set('sortBy', params.sortBy || 'name')
      .set('sortDir', params.sortDir || 'asc');

    if (params.keyword && params.keyword.trim() !== '') {
      httpParams = httpParams.set('keyword', params.keyword.trim());
    }

    return this.http.get<PageResponse<Room>>(this.apiUrl, { params: httpParams });
  }

  getById(id: number): Observable<Room> {
    return this.http.get<Room>(`${this.apiUrl}/${id}`);
  }

  create(dto: Partial<Room>): Observable<{ message: string; data: Room }> {
    return this.http.post<{ message: string; data: Room }>(this.apiUrl, dto);
  }

  update(id: number, dto: Partial<Room>): Observable<{ message: string; data: Room }> {
    return this.http.put<{ message: string; data: Room }>(`${this.apiUrl}/${id}`, dto);
  }

  delete(id: number): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.apiUrl}/${id}`);
  }
}
