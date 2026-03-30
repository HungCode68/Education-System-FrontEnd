import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { ClassStudent, AutoDistributeRequest } from '../models/class-student.model';

@Injectable({
  providedIn: 'root'
})
export class ClassStudentService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/api/v1/class-students`;

  // Lấy danh sách HS trong lớp (Không phân trang theo như backend đang code trả về List)
  getStudentsByClass(classId: string, status?: string): Observable<ClassStudent[]> {
    let params = new HttpParams();
    if (status) params = params.set('status', status);
    
    return this.http.get<ClassStudent[]>(`${this.apiUrl}/by-class/${classId}`, { params });
  }

  // Thêm 1 HS vào lớp
  addStudent(data: Partial<ClassStudent>): Observable<ClassStudent> {
    return this.http.post<ClassStudent>(this.apiUrl, data);
  }

  // Xóa HS khỏi lớp
  removeStudent(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // Cập nhật trạng thái
  updateStatus(id: string, status: string): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${id}/status?status=${status}`, {});
  }

  // Chia lớp tự động
  autoDistribute(request: AutoDistributeRequest): Observable<any> {
    return this.http.post(`${this.apiUrl}/auto-distribute`, request);
  }

  // Lên lớp
  promote(oldClassId: string, newClassId: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/promote?oldClassId=${oldClassId}&newClassId=${newClassId}`, {});
  }
}