import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class TeachingAssignmentHistoryService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/api/v1/teaching-assignment-history`;

  // Tìm kiếm lịch sử (Dùng cho màn hình Nhật ký chung)
  searchHistory(keyword: string = '', actionType: string = '', page: number = 1, size: number = 15): Observable<any> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    if (keyword) {
      params = params.set('keyword', keyword);
    }
    if (actionType) params = params.set('actionType', actionType);

    return this.http.get(this.apiUrl, { params });
  }

  // Lấy lịch sử theo ID phân công (Tùy chọn dùng sau này)
  getByAssignment(assignmentId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/assignment/${assignmentId}`);
  }
}