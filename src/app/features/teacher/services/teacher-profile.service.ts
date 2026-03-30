import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class TeacherProfileService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/api/teachers`;

  // Gọi API lấy hồ sơ cá nhân vừa tạo
  getMyProfile(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/my-profile`);
  }

  // Tái sử dụng API cập nhật của Admin để tự cập nhật hồ sơ
  updateProfile(id: string, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, data);
  }
}