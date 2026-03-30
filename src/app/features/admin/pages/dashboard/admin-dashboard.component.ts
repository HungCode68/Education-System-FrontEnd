import { Component, signal, ChangeDetectionStrategy, computed, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';
import { ActivityLogService } from '../../services/activity-log.service'; 
import { ActivityLog } from '../../models/activity-log.model'; 

// Định nghĩa model cho một thao tác nhanh
interface QuickAction {
  id: string;
  title: string;
  description: string;
  icon: string; 
  route: string;
  color: string; 
}

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule], 
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminDashboardComponent implements OnInit {
  private authService = inject(AuthService);
  private logService = inject(ActivityLogService); 

  // Lấy tên Admin từ AuthService
  adminName = computed(() => this.authService.authState().email || 'System Admin');

  // Khai báo ngày hiện tại dùng signal
  currentDate = signal(new Date());

  // Cập nhật các thao tác nhanh (Quick Actions)
  quickActions = signal<QuickAction[]>([
    {
      id: 'manage-students',
      title: 'Quản lý Học sinh',
      description: 'Xem và cập nhật hồ sơ',
      icon: 'academic-cap',
      route: '/admin/students', // Trỏ về trang HS
      color: 'blue'
    },
    {
      id: 'manage-teachers',
      title: 'Quản lý Giáo viên',
      description: 'Phân công và điều phối',
      icon: 'briefcase',
      route: '/admin/teachers', // Trỏ về trang GV
      color: 'green'
    },
    {
      id: 'reset-pass',
      title: 'Cấp lại mật khẩu',
      description: 'Yêu cầu từ người dùng',
      icon: 'key',
      route: '/admin/users/reset-password',
      color: 'amber'
    },
    {
      id: 'view-logs',
      title: 'Nhật ký hệ thống',
      description: 'Kiểm tra hoạt động (Logs)',
      icon: 'clipboard-list',
      route: '/admin/activity-logs', // Trỏ về trang Logs vừa làm
      color: 'slate'
    }
  ]);

  // State chứa log thực tế từ Backend
  recentLogs = signal<ActivityLog[]>([]);
  isLoadingLogs = signal(false);

  ngOnInit() {
    this.loadRecentLogs();
  }

  // Hàm gọi API lấy 5 log mới nhất
  private loadRecentLogs() {
    this.isLoadingLogs.set(true);
    // Gọi API getAllLogs với size = 5
    this.logService.getAllLogs(undefined, undefined, undefined, undefined, undefined, undefined, 0, 5).subscribe({
      next: (res) => {
        this.recentLogs.set(res.content || []);
        this.isLoadingLogs.set(false);
      },
      error: (err) => {
        console.error('Không thể tải nhật ký hoạt động', err);
        this.isLoadingLogs.set(false);
      }
    });
  }
}