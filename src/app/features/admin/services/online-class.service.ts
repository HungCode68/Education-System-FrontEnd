import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { OnlineClass, PageResponse } from '../models/online-class.model';

@Injectable({
  providedIn: 'root'
})
export class OnlineClassService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/api/v1/online-classes`;

  search(keyword?: string, status?: string, physicalClassId?: string, page: number = 1, size: number = 10): Observable<PageResponse<OnlineClass>> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    if (keyword) params = params.set('keyword', keyword);
    if (status) params = params.set('status', status);
    if (physicalClassId) params = params.set('physicalClassId', physicalClassId); // Thêm dòng này

    return this.http.get<PageResponse<OnlineClass>>(this.apiUrl, { params });
  }

  getById(id: string): Observable<OnlineClass> {
    return this.http.get<OnlineClass>(`${this.apiUrl}/${id}`);
  }

  update(id: string, data: { name: string; status: string }): Observable<OnlineClass> {
    return this.http.put<OnlineClass>(`${this.apiUrl}/${id}`, data);
  }
}