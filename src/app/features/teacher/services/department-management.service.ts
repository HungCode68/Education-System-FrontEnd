import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class DepartmentManagementService {
  private http = inject(HttpClient);
  private teacherApiUrl = `${environment.apiUrl}/api/teachers`;

  //  Lấy thông tin cá nhân của Tổ trưởng (để biết họ đang quản lý Tổ nào)
  // (Tái sử dụng API my-profile chúng ta đã làm)
  getMyProfile(): Observable<any> {
    return this.http.get<any>(`${this.teacherApiUrl}/my-profile`);
  }

  // Lấy danh sách thành viên trong tổ
  getDepartmentMembers(departmentId: string, page: number = 0): Observable<any> {
    const params = new HttpParams()
      .set('departmentId', departmentId)
      .set('page', page.toString())
      .set('size', '50'); // Lấy nhiều một chút cho dễ nhìn
    return this.http.get<any>(this.teacherApiUrl, { params });
  }

  //  Lấy danh sách mặc định hoặc Tìm kiếm giáo viên
  searchAllTeachers(keyword: string = ''): Observable<any> {
    let params = new HttpParams().set('size', '50'); // Lấy 50 người cho danh sách ban đầu
    
    // Nếu có nhập từ khóa thì mới gắn vào params
    if (keyword && keyword.trim() !== '') {
      params = params.set('keyword', keyword.trim());
    }
    
    return this.http.get<any>(this.teacherApiUrl, { params });
  }

  // Thêm / Gỡ giáo viên khỏi tổ (Sử dụng API Update Teacher)
  updateTeacherDepartment(teacherId: string, fullTeacherData: any, newDepartmentId: string | null): Observable<any> {
    // Clone lại toàn bộ dữ liệu giáo viên, chỉ ghi đè mỗi departmentId
    const payload = {
      ...fullTeacherData,
      departmentId: newDepartmentId
    };
    return this.http.put(`${this.teacherApiUrl}/${teacherId}`, payload);
  }

  getDepartmentDetail(departmentId: string): Observable<any> {
    // Gọi API lấy chi tiết phòng ban/tổ bộ môn
    return this.http.get<any>(`${environment.apiUrl}/api/departments/${departmentId}`);
  }

}