import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class QuestionService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/api/v1/questions`;

  // Lấy danh sách câu hỏi trong ngân hàng
  getQuestions(keyword?: string, questionType?: string, page: number = 0, size: number = 20): Observable<any> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
    if (keyword) params = params.set('keyword', keyword);
    if (questionType) params = params.set('questionType', questionType);
    return this.http.get<any>(this.apiUrl, { params });
  }

  // Lấy câu hỏi theo ID
  getQuestionById(id: number | string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  private buildFormData(dto: any, file?: File | null): FormData {
    const formData = new FormData();
    Object.keys(dto).forEach(key => {
      if (dto[key] !== null && dto[key] !== undefined) {
        if (key === 'options' && Array.isArray(dto.options)) {
          const optionsList = dto.options.map((opt: any) => ({
            optionContent: opt.optionContent || opt.optionText || '',
            isCorrect: !!opt.isCorrect
          }));
          formData.append('optionsJson', JSON.stringify(optionsList));
          optionsList.forEach((opt: any, idx: number) => {
            formData.append(`options[${idx}].optionContent`, opt.optionContent);
            formData.append(`options[${idx}].isCorrect`, opt.isCorrect.toString());
          });
        } else if (typeof dto[key] === 'object') {
          formData.append(key, JSON.stringify(dto[key]));
        } else {
          formData.append(key, dto[key].toString());
        }
      }
    });
    if (file) {
      formData.append('file', file);
    }
    return formData;
  }

  // Tạo mới câu hỏi
  createQuestion(dto: any, file?: File | null): Observable<any> {
    const formData = this.buildFormData(dto, file);
    return this.http.post(this.apiUrl, formData);
  }

  // Cập nhật câu hỏi
  updateQuestion(id: number | string, dto: any, file?: File | null): Observable<any> {
    const formData = this.buildFormData(dto, file);
    return this.http.put(`${this.apiUrl}/${id}`, formData);
  }

  // Xóa câu hỏi
  deleteQuestion(id: number | string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // Tải file template Excel
  downloadTemplate(): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/import/template`, { responseType: 'blob' });
  }

  // Import câu hỏi từ file Excel
  importExcel(file: File, assignmentId?: number | string): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    if (assignmentId) {
      formData.append('assignmentId', assignmentId.toString());
    }
    return this.http.post(`${this.apiUrl}/import`, formData);
  }
}
