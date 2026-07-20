import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class TeachingAssignmentService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/api/v1/teaching-assignments`;

  // Thực hiện phân công giảng dạy mới
  assignTeacher(payload: any): Observable<any> {
    return this.http.post(this.apiUrl, payload);
  }

  //  Lấy danh sách phân công của một lớp (dùng cho các màn hình xem chi tiết)
  getAssignmentsByClass(classId: string, semesterId: string): Observable<any> {
    const params = new HttpParams().set('semesterId', semesterId);
    return this.http.get(`${this.apiUrl}/by-class/${classId}`, { params });
  }

  //  Hủy phân công
  unassignTeacher(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }


  // CÁC HÀM LẤY DỮ LIỆU DROPDOWN CHO FORM PHÂN CÔNG

  getSchoolYears(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/api/v1/school-years`);
  }

  getSemesters(schoolYearId: string): Observable<any> {
    return this.http.get(`${environment.apiUrl}/api/v1/semesters/by-year/${schoolYearId}`);
  }

  getSubjects(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/api/v1/subjects`);
  }

  getPhysicalClasses(schoolYearId: string): Observable<any> {
    return this.http.get(`${environment.apiUrl}/api/v1/physical-classes?schoolYearId=${schoolYearId}&size=200`);
  }

  // Lấy danh sách phân công của Tổ bộ môn (Kèm theo bộ lọc)
  getDepartmentAssignments(deptId: string, filters: any, page: number = 1): Observable<any> {
    let params = new HttpParams()
      .set('departmentId', deptId)
      .set('page', page.toString())
      .set('size', '10');

    if (filters.schoolYearId) params = params.set('schoolYearId', filters.schoolYearId);
    if (filters.semesterId) params = params.set('semesterId', filters.semesterId);
    if (filters.physicalClassId) params = params.set('physicalClassId', filters.physicalClassId);
    if (filters.teacherId) params = params.set('teacherId', filters.teacherId);

    return this.http.get(`${this.apiUrl}/department`, { params });
  }

  
}