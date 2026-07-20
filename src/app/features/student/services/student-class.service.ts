import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';


@Injectable({ providedIn: 'root' })
export class StudentClassService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/api/v1/online-classes`;
  

  // Gọi API lấy danh sách lớp học của Học sinh đang đăng nhập
  getMyClasses(): Observable<any> {
    return this.http.get(`${this.apiUrl}/student/my-classes`);
  }

  // Lấy chi tiết thông tin Lớp học (Tên lớp, Tên GV)
  getClassDetail(classId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${classId}`);
  }

  // Lấy danh sách thành viên trong lớp (Học sinh)
  getClassStudents(classId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${classId}/students?status=active`);
  }

  // Lấy danh sách tài liệu của lớp (Chỉ lấy những tài liệu đã Published)
  getClassMaterials(classId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/../learning-materials/student/class/${classId}`);
  }

  // Lấy link tải file thực tế (MinIO Presigned URL hoặc External Link)
  getMaterialDownloadUrl(materialId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/../learning-materials/${materialId}/download-url`);
  }

  // Lấy danh sách bài tập của lớp
  // API Backend của bạn đang dùng page=0 cho trang đầu tiên
  getClassAssignments(classId: string, page: number = 0, size: number = 10): Observable<any> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('sortBy', 'createdAt')
      .set('sortDir', 'desc');

    return this.http.get(`${environment.apiUrl}/api/v1/assignments/class/${classId}`, { params });
  }
}