import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { environment } from '../../../../environments/environment';

/**
 * Notification service — tạm thời stub.
 * Hệ thống backend hiện tại (English Center v1) chưa có bảng notifications riêng.
 * Class-announcement dùng làm tin tức theo lớp.
 */
@Injectable({ providedIn: 'root' })
export class NotificationService {
  private http = inject(HttpClient);

  // Biến lưu trữ số lượng chưa đọc (Có thể subscribe từ bất kỳ component nào)
  public unreadCount$ = new BehaviorSubject<number>(0);

  // Lấy danh sách (trả về mảng rỗng để UI không lỗi)
  getNotifications(page: number = 1, size: number = 10): Observable<{ content: any[]; totalElements: number; totalPages: number }> {
    return of({ content: [], totalElements: 0, totalPages: 1 });
  }

  // Gọi API để đếm số chưa đọc và cập nhật vào unreadCount$
  fetchUnreadCount(): void {
    this.unreadCount$.next(0);
  }

  // Đánh dấu 1 thông báo là đã đọc
  markAsRead(id: string): Observable<any> {
    return of({ success: true });
  }

  // Đánh dấu đọc tất cả
  markAllAsRead(): Observable<any> {
    this.unreadCount$.next(0);
    return of({ success: true });
  }
}
