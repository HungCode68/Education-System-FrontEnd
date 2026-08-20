import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AssignmentSubmissionService {
  private http = inject(HttpClient);
  private submissionUrl = `${environment.apiUrl}/api/v1/submissions`;
  private submissionAnswersUrl = `${environment.apiUrl}/api/v1/submission-answers`;

  // Lấy danh sách bài nộp theo Assignment (Hỗ trợ phân trang và lọc)
  getSubmissions(assignmentId: string, page: number = 1, status: string = '', keyword: string = ''): Observable<any> {
    let params = new HttpParams()
      .set('page', (page - 1).toString()) // Backend Pageable starts at 0
      .set('size', '10')
      .set('sortBy', 'submittedAt')
      .set('sortDir', 'desc');
      
    if (status && status !== 'ALL') {
      params = params.set('status', status);
    }
    
    if (keyword && keyword.trim() !== '') {
      params = params.set('keyword', keyword.trim());
    }

    return this.http.get<any>(`${this.submissionUrl}/assignment/${assignmentId}/page`, { params });
  }

  // Chấm điểm bài nộp
  gradeSubmission(submissionId: string, payload: { score?: number | null, feedback: string }): Observable<any> {
    let params = new HttpParams();
    if (payload.score !== null && payload.score !== undefined) {
      params = params.set('score', payload.score.toString());
    }
      
    if (payload.feedback) {
      params = params.set('feedback', payload.feedback);
    }
    
    return this.http.put(`${this.submissionUrl}/grade/${submissionId}`, null, { params });
  }

  batchGradeAnswers(submissionId: string, grades: { answerId: number, score: number }[]): Observable<any> {
    return this.http.put(`${this.submissionAnswersUrl}/submission/${submissionId}/grade-batch`, grades);
  }

  // Lấy chi tiết các câu trả lời của 1 bài nộp
  getSubmissionAnswers(submissionId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.submissionAnswersUrl}/submission/${submissionId}`);
  }

  // Lấy thông tin chi tiết bài nộp
  getSubmissionById(submissionId: string): Observable<any> {
    return this.http.get<any>(`${this.submissionUrl}/${submissionId}`);
  }
}