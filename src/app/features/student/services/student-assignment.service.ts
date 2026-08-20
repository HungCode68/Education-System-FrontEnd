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

  // Khởi tạo phiên làm bài
  startSubmission(assignmentId: string): Observable<any> {
    return this.http.post(`${environment.apiUrl}/api/v1/submissions/start/${assignmentId}`, {});
  }

  // Nộp bài chính thức
  submitAssignment(submissionId: string): Observable<any> {
    return this.http.post(`${environment.apiUrl}/api/v1/submissions/submit/${submissionId}`, {});
  }

  // Lưu đáp án cho từng câu hỏi
  saveAnswer(submissionId: string, payload: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/api/v1/submission-answers/submission/${submissionId}`, payload);
  }

  // Lưu hàng loạt đáp án cùng lúc
  batchSaveAnswers(submissionId: string, payloads: any[]): Observable<any> {
    return this.http.put(`${environment.apiUrl}/api/v1/submission-answers/submission/${submissionId}/batch`, payloads);
  }

  // Lấy lịch sử nộp bài của mình cho 1 bài tập cụ thể
  getMySubmission(assignmentId: string): Observable<any> {
    return this.http.get(`${environment.apiUrl}/api/v1/submissions/my-submission/${assignmentId}`);
  }

  getMySubmissionHistory(assignmentId: string): Observable<any> {
    return this.http.get(`${environment.apiUrl}/api/v1/submissions/my-history/${assignmentId}`);
  }

  // Lấy chi tiết các câu trả lời của 1 lần nộp
  getSubmissionAnswers(submissionId: string): Observable<any[]> {
    return this.http.get<any[]>(`${environment.apiUrl}/api/v1/submission-answers/submission/${submissionId}`);
  }
}