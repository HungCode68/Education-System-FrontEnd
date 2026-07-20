import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class StudentAssignmentService {
  private http = inject(HttpClient);

  // Lấy thông tin chung của bài tập
  getAssignmentDetail(id: string): Observable<any> {
    return this.http.get(`${environment.apiUrl}/api/v1/assignments/${id}`);
  }

  // Lấy toàn bộ câu hỏi của bài tập đó
  getQuestions(assignmentId: string): Observable<any[]> {
    return this.http.get<any[]>(`${environment.apiUrl}/api/v1/assignment-questions/assignment/${assignmentId}`);
  }

  //  Lấy các đáp án (A,B,C,D) của một câu hỏi trắc nghiệm
  getQuestionOptions(questionId: string): Observable<any[]> {
    return this.http.get<any[]>(`${environment.apiUrl}/api/v1/questions/${questionId}/options`);
  }

  // Lưu nháp (isSubmit = false) hoặc Nộp bài chính thức (isSubmit = true)
  submitAssignment(assignmentId: string, isSubmit: boolean, studentNote: string = ''): Observable<any> {
    return this.http.post(`${environment.apiUrl}/api/v1/assignment-submissions/submit`, {
      assignmentId,
      studentNote,
      isSubmit
    });
  }

  // Lưu đáp án cho từng câu hỏi
  saveAnswer(submissionId: string, questionId: string, payload: any): Observable<any> {
    return this.http.put(`${environment.apiUrl}/api/v1/submission-answers/submission/${submissionId}/question/${questionId}`, payload);
  }

  // Upload file đính kèm cho bài nộp (Dùng FormData)
  uploadAttachment(submissionId: string, file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(`${environment.apiUrl}/api/v1/submission-attachments/submission/${submissionId}`, formData);
  }

  // Xóa file đính kèm
  deleteAttachment(attachmentId: string): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/api/v1/submission-attachments/${attachmentId}`);
  }

  // Lấy lịch sử nộp bài của mình cho 1 bài tập cụ thể
  getMySubmission(assignmentId: string): Observable<any> {
    return this.http.get(`${environment.apiUrl}/api/v1/assignment-submissions/assignment/${assignmentId}/my-submission`);
  }
}