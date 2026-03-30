import { Component, OnInit, ElementRef, HostListener, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-notification-bell',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notification-bell.component.html'
})
export class NotificationBellComponent implements OnInit {
  private notifService = inject(NotificationService);
  private router = inject(Router);
  private eRef = inject(ElementRef);

  isOpen = signal(false);
  isLoading = signal(false);
  notifications = signal<any[]>([]);
  unreadCount = signal<number>(0);

  ngOnInit() {
    // Lắng nghe sự thay đổi của số lượng chưa đọc
    this.notifService.unreadCount$.subscribe(count => {
      this.unreadCount.set(count);
    });

    // Lấy số lượng chưa đọc ngay khi load trang
    this.notifService.fetchUnreadCount();

    // (Tùy chọn) Cứ mỗi 3 phút gọi lại API đếm số 1 lần để update realtime
    setInterval(() => this.notifService.fetchUnreadCount(), 3 * 60 * 1000);
  }

  // Đóng/mở Popup
  toggleDropdown() {
    this.isOpen.update(v => !v);
    // Nếu mở ra mà chưa có data thì gọi API lấy 10 thông báo mới nhất
    if (this.isOpen() && this.notifications().length === 0) {
      this.loadNotifications();
    }
  }

  loadNotifications() {
    this.isLoading.set(true);
    this.notifService.getNotifications(1, 10).subscribe({
      next: (res) => {
        this.notifications.set(res.content || []);
        this.isLoading.set(false);
      },
      error: () => this.isLoading.set(false)
    });
  }

  // Click ra ngoài để đóng popup
  @HostListener('document:click', ['$event'])
  clickout(event: Event) {
    if (this.isOpen() && !this.eRef.nativeElement.contains(event.target)) {
      this.isOpen.set(false);
    }
  }

  // Khi học sinh click vào 1 thông báo
  handleNotificationClick(notif: any) {
    // Đánh dấu đã đọc nếu chưa đọc
    if (!notif.isRead) {
      this.notifService.markAsRead(notif.id).subscribe(() => {
        notif.isRead = true;
        // Biến unreadCount sẽ tự động giảm nhờ hàm tap() trong Service
      });
    }

    this.isOpen.set(false);

    // Xử lý điều hướng tùy theo loại thông báo
    // (Dựa vào trường relatedType và relatedId từ backend)
    if (notif.relatedType === 'assignments' || notif.relatedType === 'submissions') {
       this.router.navigate(['/student/assignment', notif.relatedId]);
    }
  }

  markAllRead() {
    this.notifService.markAllAsRead().subscribe(() => {
      // Cập nhật lại UI nội bộ
      this.notifications.update(notifs => notifs.map(n => ({...n, isRead: true})));
    });
  }

  // Hàm chọn Icon theo Type
  getIconByType(type: string) {
    switch (type) {
      case 'assignment': return { bg: 'bg-blue-100', text: 'text-blue-600', path: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' };
      case 'grade': return { bg: 'bg-emerald-100', text: 'text-emerald-600', path: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' };
      default: return { bg: 'bg-gray-100', text: 'text-gray-600', path: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' };
    }
  }
}