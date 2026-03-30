import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { ClassTransferHistory, TransferStudentRequest, PageResponse } from '../models/class-transfer.model';

@Injectable({ providedIn: 'root' })
export class ClassTransferService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/api/v1/class-transfers`;

  transferStudent(request: TransferStudentRequest): Observable<any> {
    return this.http.post(this.apiUrl, request);
  }

  getHistoryByStudent(studentId: string): Observable<ClassTransferHistory[]> {
    return this.http.get<ClassTransferHistory[]>(`${this.apiUrl}/student/${studentId}`);
  }

  searchHistory(keyword?: string, classId?: string, startDate?: string, endDate?: string, page: number = 1, size: number = 10): Observable<PageResponse<ClassTransferHistory>> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    if (keyword) params = params.set('keyword', keyword);
    if (classId) params = params.set('classId', classId);
    if (startDate) params = params.set('startDate', startDate);
    if (endDate) params = params.set('endDate', endDate);

    return this.http.get<PageResponse<ClassTransferHistory>>(this.apiUrl, { params });
  }
}