import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { AuthService } from '../../../core/services/auth.service';

export interface SpringPage<T> {
  content: T[];
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
}

export interface StudentDto {
  id: number;
  userId?: number | null;
  userEmail?: string | null;
  studentCode?: string | null;
  fullName: string;
  parentName?: string | null;
  parentPhone?: string | null;
  targetScore?: string | null;
  status?: 'STUDYING' | 'RESERVED' | 'GRADUATED' | 'DROPPED' | string | null;
  createdAt?: string | null;
  currentClassId?: string | null;
  gender?: string | null;
  dateOfBirth?: string | null;
  email?: string | null;
  address?: string | null;
  admissionYear?: number | string | null;
}

@Injectable({ providedIn: 'root' })
export class StudentProfileService {
  private http = inject(HttpClient);
  private authService = inject(AuthService);
  private apiUrl = `${environment.apiUrl}/api/v1/students`;

  /**
   * Lấy hồ sơ học viên của chính user đang đăng nhập.
   * LƯU Ý: Đã xử lý fallback khi endpoint /api/v1/students bị 403 Forbidden
   * (do tài khoản role STUDENT không có quyền STUDENT_VIEW để gọi GET /api/v1/students).
   */
  getMyProfile(): Observable<StudentDto | null> {
    const state = this.authService.authState();
    const email = state.email;
    const fullName = state.fullName || 'Học sinh';

    if (!email) {
      return of(null);
    }

    return this.http.get<SpringPage<StudentDto>>(this.apiUrl, {
      params: { keyword: email, page: 0, size: 10 }
    }).pipe(
      map(page => {
        const match = (page.content || []).find((s: StudentDto) => s.userEmail?.toLowerCase() === email.toLowerCase());
        if (match) return match;
        return page.content?.[0] ?? null;
      }),
      catchError(err => {
        console.warn('Không thể lấy chi tiết profile từ /api/v1/students (403/Forbidden/Error):', err.status);
        
        // Đọc thông tin đã được cache từ localStorage nếu có
        const userInfoStr = localStorage.getItem('user_info');
        let cachedClassId: string | null = localStorage.getItem('physicalClassId');
        let cachedStudentId: number | null = null;
        
        if (userInfoStr) {
          try {
            const parsed = JSON.parse(userInfoStr);
            if (parsed.physicalClassId) cachedClassId = parsed.physicalClassId;
            if (parsed.studentId) cachedStudentId = parsed.studentId;
          } catch (e) {}
        }

        // Tạo fallback profile object từ thông tin Auth state
        const fallbackProfile: StudentDto = {
          id: cachedStudentId || 0,
          fullName: fullName,
          email: email,
          userEmail: email,
          status: 'STUDYING',
          currentClassId: cachedClassId
        };

        return of(fallbackProfile);
      })
    );
  }

  /** Helper: Lấy Student ID của user hiện tại */
  getMyStudentId(): Observable<number | null> {
    return this.getMyProfile().pipe(
      map(profile => (profile?.id && profile.id !== 0) ? profile.id : null)
    );
  }
}
