import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { PhysicalClass, PageResponse } from '../models/physical-class.model';

@Injectable({
  providedIn: 'root'
})
export class PhysicalClassService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/api/v1/physical-classes`;

  search(page: number = 1, size: number = 10, schoolYearId?: string, gradeId?: string, keyword?: string): Observable<PageResponse<PhysicalClass>> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
      
    if (schoolYearId) params = params.set('schoolYearId', schoolYearId);
    if (gradeId) params = params.set('gradeId', gradeId);
    if (keyword) params = params.set('keyword', keyword);

    return this.http.get<PageResponse<PhysicalClass>>(this.apiUrl, { params });
  }

  create(data: Partial<PhysicalClass>): Observable<PhysicalClass> {
    return this.http.post<PhysicalClass>(this.apiUrl, data);
  }

  getById(id: string): Observable<PhysicalClass> {
    return this.http.get<PhysicalClass>(`${this.apiUrl}/${id}`);
  }

  update(id: string, data: Partial<PhysicalClass>): Observable<PhysicalClass> {
    return this.http.put<PhysicalClass>(`${this.apiUrl}/${id}`, data);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}