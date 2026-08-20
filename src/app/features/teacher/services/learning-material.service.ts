import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class LearningMaterialService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/api/v1/learning-materials`;

  // Lấy tài liệu (Góc nhìn GV)
  getMaterialsForTeacher(classId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/teacher/class/${classId}`);
  }

  // Upload File vật lý
  uploadFile(file: File, data: any): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    if (data.lessonId) formData.append('lessonId', data.lessonId.toString());
    if (data.courseId) formData.append('courseId', data.courseId.toString());
    if (data.classId) formData.append('classId', data.classId.toString());
    if (data.onlineClassId) formData.append('onlineClassId', data.onlineClassId.toString());
    if (data.title) formData.append('title', data.title);
    if (data.fileType || data.materialType) formData.append('materialType', (data.materialType || data.fileType).toUpperCase());
    formData.append('data', new Blob([JSON.stringify(data)], { type: 'application/json' }));
    return this.http.post(`${this.apiUrl}/upload`, formData);
  }

  // Thêm Link
  addLink(data: any): Observable<any> {
    const payload = {
      ...data,
      classId: data.classId || data.onlineClassId
    };
    return this.http.post(`${this.apiUrl}/link`, payload);
  }

  // Cập nhật tài liệu
  updateMaterial(id: string | number, data: any, file?: File | null): Observable<any> {
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
      if (data.title) formData.append('title', data.title);
      if (data.materialType) formData.append('materialType', data.materialType);
      if (data.displayOrder !== undefined) formData.append('displayOrder', data.displayOrder.toString());
      return this.http.put(`${this.apiUrl}/${id}`, formData);
    } else {
      return this.http.put(`${this.apiUrl}/${id}`, data);
    }
  }

  // Cập nhật trạng thái
  changeStatus(id: string, status: string): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${id}/status?status=${status}`, {});
  }

  // Xóa
  deleteMaterial(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // Lấy Presigned URL tải file
  getDownloadUrl(id: string): Observable<{url: string}> {
    return this.http.get<{url: string}>(`${this.apiUrl}/${id}/download-url`);
  }

  // Lấy danh sách bài học theo ID lớp
  getLessonsByClassId(classId: string): Observable<any[]> {
    return this.http.get<any[]>(`${environment.apiUrl}/api/v1/lessons/class/${classId}`);
  }

  // Thêm mới bài học
  createLesson(data: any): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/api/v1/lessons`, data);
  }

  // Cập nhật bài học
  updateLesson(id: string | number, data: any): Observable<any> {
    return this.http.put<any>(`${environment.apiUrl}/api/v1/lessons/${id}`, data);
  }

  // Xóa bài học
  deleteLesson(id: string | number): Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/api/v1/lessons/${id}`);
  }

  // Lấy tài liệu thuộc về bài học cụ thể (lessonId)
  getMaterialsByLessonId(lessonId: string | number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/lesson/${lessonId}`);
  }

  // Lấy tài liệu chung thuộc về khóa học (courseId)
  getMaterialsByCourseId(courseId: string | number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/course/${courseId}`);
  }
}