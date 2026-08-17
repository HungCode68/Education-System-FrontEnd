import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ScheduleCancellation, SpringPage } from '../models/schedule-cancellation.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ScheduleCancellationService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/api/v1/cancellations`;

  getAll(params: { page?: number, size?: number, classId?: number } = {}): Observable<SpringPage<ScheduleCancellation>> {
    let httpParams = new HttpParams();
    if (params.page !== undefined) httpParams = httpParams.set('page', (params.page - 1).toString());
    if (params.size !== undefined) httpParams = httpParams.set('size', params.size.toString());
    if (params.classId !== undefined && params.classId !== null) httpParams = httpParams.set('classId', params.classId.toString());

    return this.http.get<SpringPage<ScheduleCancellation>>(this.apiUrl, { params: httpParams });
  }

  getById(id: number | string): Observable<ScheduleCancellation> {
    return this.http.get<ScheduleCancellation>(`${this.apiUrl}/${id}`);
  }

  create(data: Partial<ScheduleCancellation>): Observable<ScheduleCancellation> {
    return this.http.post<ScheduleCancellation>(this.apiUrl, data);
  }

  update(id: number | string, data: Partial<ScheduleCancellation>): Observable<ScheduleCancellation> {
    return this.http.put<ScheduleCancellation>(`${this.apiUrl}/${id}`, data);
  }

  delete(id: number | string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
