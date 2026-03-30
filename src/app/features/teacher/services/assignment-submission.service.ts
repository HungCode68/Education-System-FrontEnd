import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AssignmentSubmissionService {
  private http = inject(HttpClient);
  private submissionUrl = `${environment.apiUrl}/api/v1/assignment-submissions`;
  private attachmentUrl = `${environment.apiUrl}/api/v1/submission-attachments`;

  // Lấy danh sách bài nộp theo Assignment (Hỗ trợ phân trang và lọc)
  getSubmissions(assignmentId: string, page: number = 1, status: string = ''): Observable<any> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', '10')
      .set('sortBy', 'submittedAt')
      .set('sortDir', 'desc');
      
    if (status && status !== 'ALL') {
      params = params.set('status', status);
    }

    return this.http.get<any>(`${this.submissionUrl}/assignment/${assignmentId}`, { params });
  }

  // Lấy file đính kèm của 1 bài nộp
  getAttachments(submissionId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.attachmentUrl}/submission/${submissionId}`);
  }

  // Chấm điểm bài nộp
  gradeSubmission(submissionId: string, payload: { score: number, feedback: string }): Observable<any> {
    return this.http.patch(`${this.submissionUrl}/${submissionId}/grade`, payload);
  }

  // Lấy chi tiết các câu trả lời của 1 bài nộp
  getSubmissionAnswers(submissionId: string): Observable<any[]> {
    // Lưu ý: Đổi port/đường dẫn nếu API của bạn cấu hình khác
    return this.http.get<any[]>(`${environment.apiUrl}/api/v1/submission-answers/submission/${submissionId}`);
  }

  // Kích hoạt chấm điểm tự động cho bài nộp (thường dùng cho bài Hỗn hợp)
  triggerAutoGrade(submissionId: string): Observable<any> {
    return this.http.post(`${environment.apiUrl}/api/v1/submission-answers/submission/${submissionId}/auto-grade`, {});
  }
}