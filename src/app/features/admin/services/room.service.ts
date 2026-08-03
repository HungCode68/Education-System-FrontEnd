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

  getAll(page: number = 0, size: number = 10, keyword?: string, roomType?: string): Observable<SpringPage<Room>> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    if (keyword) params = params.set('keyword', keyword);
    if (roomType) params = params.set('roomType', roomType);

    return this.http.get<SpringPage<Room>>(this.apiUrl, { params });
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
}
