import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/api/v1/notifications`;

  // Biến lưu trữ số lượng chưa đọc (Có thể subscribe từ bất kỳ component nào)
  public unreadCount$ = new BehaviorSubject<number>(0);

  // Lấy danh sách (Trang 1, 10 thông báo mới nhất)
  getNotifications(page: number = 1, size: number = 10): Observable<any> {
    return this.http.get(`${this.apiUrl}?page=${page}&size=${size}`);
  }

  // Gọi API để đếm số chưa đọc và cập nhật vào unreadCount$
  fetchUnreadCount(): void {
    this.http.get<{unreadCount: number}>(`${this.apiUrl}/unread-count`).subscribe({
      next: (res) => this.unreadCount$.next(res.unreadCount)
    });
  }

  // Đánh dấu 1 thông báo là đã đọc
  markAsRead(id: string): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${id}/read`, {}).pipe(
      tap(() => this.fetchUnreadCount()) // Thành công thì tự động đếm lại số chưa đọc
    );
  }

  // Đánh dấu đọc tất cả
  markAllAsRead(): Observable<any> {
    return this.http.patch(`${this.apiUrl}/read-all`, {}).pipe(
      tap(() => this.unreadCount$.next(0)) // Đưa số chưa đọc về 0 ngay lập tức
    );
  }
}