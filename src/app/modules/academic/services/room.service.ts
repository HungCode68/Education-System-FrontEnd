import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Room, SpringPage } from '../models/room.model';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/api/v1/rooms`;

  getAll(page: any = 1, size: any = 10, keyword?: string): Observable<SpringPage<Room>> {
    let params = new HttpParams();
    if (typeof page === 'object' && page !== null) {
      const pageIndex = page.page != null ? Math.max(0, Number(page.page) - 1) : 0;
      params = params.set('page', pageIndex.toString());
      if (page.size !== undefined) params = params.set('size', page.size.toString());
      if (page.keyword) params = params.set('keyword', page.keyword);

    } else {
      const pageIndex = Math.max(0, Number(page) - 1);
      params = params.set('page', pageIndex.toString()).set('size', (size || 10).toString());
      if (keyword) params = params.set('keyword', keyword);

    }

    return this.http.get<SpringPage<Room>>(this.apiUrl, { params });
  }

  getRooms(params?: any): Observable<SpringPage<Room>> {
    return this.getAll(params);
  }

  getById(id: number | string): Observable<Room> {
    return this.http.get<Room>(`${this.apiUrl}/${id}`);
  }

  create(data: Partial<Room>): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }

  update(id: number | string, data: Partial<Room>): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, data);
  }

  delete(id: number | string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  getAvailableRooms(classId: number, dayOfWeek: number, startTime: string, endTime: string, excludeScheduleId?: number): Observable<Room[]> {
    let params = new HttpParams()
      .set('classId', classId.toString())
      .set('dayOfWeek', dayOfWeek.toString())
      .set('startTime', startTime)
      .set('endTime', endTime);
    if (excludeScheduleId) {
      params = params.set('excludeScheduleId', excludeScheduleId.toString());
    }
    return this.http.get<Room[]>(`${this.apiUrl}/available`, { params });
  }
}
