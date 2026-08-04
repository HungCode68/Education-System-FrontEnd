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
  // Backend: GET /api/v1/questions/assignment/{assignmentId}
  getQuestions(assignmentId: string): Observable<any[]> {
    return this.http.get<any[]>(`${environment.apiUrl}/api/v1/questions/assignment/${assignmentId}`);
  }

  // Lấy các đáp án (A,B,C,D) của một câu hỏi trắc nghiệm
  getQuestionOptions(questionId: string): Observable<any[]> {
    return this.http.get<any[]>(`${environment.apiUrl}/api/v1/question-options/question/${questionId}`);
  }

  // Bắt đầu làm bài (tạo Submission)
  // POST /api/v1/submissions/start/{assignmentId}
  startAssignment(assignmentId: string): Observable<any> {
    return this.http.post(`${environment.apiUrl}/api/v1/submissions/start/${assignmentId}`, {});
  }

  // Nộp bài chính thức
  // POST /api/v1/submissions/submit/{id}
  submitAssignment(submissionId: string, isFinalSubmit: boolean = false): Observable<any> {
    if (isFinalSubmit) {
      return this.http.post(`${environment.apiUrl}/api/v1/submissions/submit/${submissionId}`, {});
    }
    return this.http.post(`${environment.apiUrl}/api/v1/submissions/start/${submissionId}`, {});
  }

  // Alias để giữ nguyên interface cũ (tương thích code cũ)
  submitAssignmentLegacy(assignmentId: string, isSubmit: boolean, studentNote: string = ''): Observable<any> {
    if (isSubmit) {
      return this.http.post(`${environment.apiUrl}/api/v1/submissions/submit/${assignmentId}`, {});
    }
    return this.http.post(`${environment.apiUrl}/api/v1/submissions/start/${assignmentId}`, {});
  }

  // Lưu / cập nhật đáp án cho từng câu hỏi (1 câu)
  // POST /api/v1/submission-answers/submission/{submissionId}
  saveAnswer(submissionId: string, questionId: string, payload: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/api/v1/submission-answers/submission/${submissionId}`, {
      questionId: Number(questionId),
      ...payload
    });
  }

  // Lưu hàng loạt câu trả lời (batch)
  batchSaveAnswers(submissionId: string, answers: any[]): Observable<any> {
    return this.http.put(`${environment.apiUrl}/api/v1/submission-answers/submission/${submissionId}/batch`, answers);
  }

  // Upload file đính kèm cho bài nộp — BACKEND CHƯA CÓ attachment controller, fallback tạm thời
  uploadAttachment(submissionId: string, file: File): Observable<any> {
    return new Observable(obs => {
      obs.next({ message: 'Stub: attachment upload not yet available', submissionId, fileName: file.name });
      obs.complete();
    });
  }

  // Xóa file đính kèm (stub)
  deleteAttachment(attachmentId: string): Observable<any> {
    return new Observable(obs => {
      obs.next({ message: 'Stub: attachment delete not yet available', attachmentId });
      obs.complete();
    });
  }

  // Lấy lịch sử nộp bài của mình cho 1 bài tập cụ thể
  // GET /api/v1/submissions/my-submission/{assignmentId}
  getMySubmission(assignmentId: string): Observable<any> {
    return this.http.get(`${environment.apiUrl}/api/v1/submissions/my-submission/${assignmentId}`);
  }

  // Lấy các câu trả lời của bài nộp (nếu đã có)
  getMyAnswers(submissionId: string): Observable<any[]> {
    return this.http.get<any[]>(`${environment.apiUrl}/api/v1/submission-answers/submission/${submissionId}`);
  }
}
