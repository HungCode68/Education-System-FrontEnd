import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AssignmentQuestionService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/api/v1/assignment-questions`;

  // Lấy danh sách câu hỏi đính kèm bài tập
  getQuestionsByAssignmentId(assignmentId: number | string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/assignment/${assignmentId}`);
  }

  // Thêm 1 câu hỏi vào bài tập
  addQuestionToAssignment(assignmentId: number | string, dto: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/assignment/${assignmentId}`, dto);
  }

  // Cập nhật điểm số / thứ tự câu hỏi trong bài tập
  updateQuestionInAssignment(assignmentId: number | string, questionId: number | string, dto: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/assignment/${assignmentId}/question/${questionId}`, dto);
  }

  // Xóa câu hỏi khỏi bài tập
  removeQuestionFromAssignment(assignmentId: number | string, questionId: number | string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/assignment/${assignmentId}/question/${questionId}`);
  }

  // Thay thế / gán hàng loạt câu hỏi vào bài tập
  batchReplaceAssignmentQuestions(assignmentId: number | string, dtos: any[]): Observable<any> {
    return this.http.put(`${this.apiUrl}/assignment/${assignmentId}/batch`, dtos);
  }
}