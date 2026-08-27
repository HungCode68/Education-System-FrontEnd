import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class StudentProfileService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/api/v1/students`;

  // Thay vì truyền ID, ta gọi thẳng endpoint /me
  getMyProfile(): Observable<any> {
    return this.http.get(`${this.apiUrl}/my-profile`);
  }

  changePassword(data: any): Observable<any> {
    return this.http.patch<any>(`${environment.apiUrl}/api/v1/users/me/change-password`, data);
  }
}