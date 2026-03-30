import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class TeachingSubstitutionService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/api/v1/teaching-substitutions`;

  // Tạo lịch dạy thay
  create(dto: any): Observable<any> {
    return this.http.post(this.apiUrl, dto);
  }

  // Lấy danh sách dạy thay CỦA TỔ BỘ MÔN 
  getDepartmentSubstitutions(deptId: string, filters: any, page: number = 1): Observable<any> {
    let params = new HttpParams().set('departmentId', deptId).set('page', page.toString()).set('size', '10');
    if (filters.schoolYearId) params = params.set('schoolYearId', filters.schoolYearId);
    if (filters.semesterId) params = params.set('semesterId', filters.semesterId);
    if (filters.keyword) params = params.set('keyword', filters.keyword);
    return this.http.get(`${this.apiUrl}/department`, { params });
  }

  // Hủy lịch dạy thay
  cancel(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}