import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AssignmentQuestionService {
  private http = inject(HttpClient);
  private questionUrl = `${environment.apiUrl}/api/v1/assignment-questions`;
  private optionUrl = `${environment.apiUrl}/api/v1/questions`;

  // Lấy toàn bộ câu hỏi của 1 bài tập
  getQuestionsByAssignment(assignmentId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.questionUrl}/assignment/${assignmentId}`);
  }

  // Lấy đáp án của 1 câu hỏi trắc nghiệm
  getOptionsByQuestion(questionId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.optionUrl}/${questionId}/options`);
  }

  importFromExcel(assignmentId: string, file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(`${this.questionUrl}/assignment/${assignmentId}/import`, formData);
  }

  // Tạo câu hỏi mới
  createQuestion(data: any): Observable<any> {
    return this.http.post(`${this.questionUrl}`, data);
  }

  //  Lưu danh sách đáp án cho câu hỏi trắc nghiệm
  saveOptions(questionId: string, options: any[]): Observable<any> {
    return this.http.put(`${this.optionUrl}/${questionId}/options`, options);
  }

  // Cập nhật câu hỏi
  updateQuestion(id: string, data: any): Observable<any> {
    return this.http.put(`${this.questionUrl}/${id}`, data);
  }

  //  Xóa câu hỏi
  deleteQuestion(id: string): Observable<any> {
    return this.http.delete(`${this.questionUrl}/${id}`);
  }
}