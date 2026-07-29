import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { TeachingSubstitution, SpringPage } from '../models/teaching-substitution.model';

@Injectable({
  providedIn: 'root'
})
export class TeachingSubstitutionService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/api/v1/teaching-substitutions`;

  getAll(page: number = 0, size: number = 10, scheduleId?: number | string, absentStaffId?: number | string, substituteStaffId?: number | string): Observable<SpringPage<TeachingSubstitution>> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    if (scheduleId) params = params.set('scheduleId', scheduleId.toString());
    if (absentStaffId) params = params.set('absentStaffId', absentStaffId.toString());
    if (substituteStaffId) params = params.set('substituteStaffId', substituteStaffId.toString());

    return this.http.get<SpringPage<TeachingSubstitution>>(this.apiUrl, { params });
  }

  getById(id: number | string): Observable<TeachingSubstitution> {
    return this.http.get<TeachingSubstitution>(`${this.apiUrl}/${id}`);
  }

  create(data: Partial<TeachingSubstitution>): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }

  update(id: number | string, data: Partial<TeachingSubstitution>): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, data);
  }

  delete(id: number | string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
