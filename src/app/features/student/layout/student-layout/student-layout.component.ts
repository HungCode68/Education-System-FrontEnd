import { Component, OnInit, inject, signal, computed, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';
import { NotificationBellComponent } from '../../pages/notification/notification-bell.component';
import { StudentProfileService } from '../../services/student-profile.service';
import { StudentAnnouncementService } from '../../services/student-announcement.service';

@Component({
  selector: 'app-student-layout',
  imports: [CommonModule, RouterModule, NotificationBellComponent],
  templateUrl: './student-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StudentLayoutComponent implements OnInit {
  public authService = inject(AuthService);
  private router = inject(Router);
  private profileService = inject(StudentProfileService);
  public announcementService = inject(StudentAnnouncementService);

  // Lấy email/tên học sinh từ Token
  studentName = computed(() => this.authService.authState().email || 'Học sinh');

  // State đóng/mở sidebar trên mobile
  isSidebarOpen = signal(false);

  physicalClassId = signal<string | null>(null);

  ngOnInit() {
    this.profileService.getMyProfile().subscribe({
      next: (res) => {
        // Nếu học sinh đã có lớp chủ nhiệm, gán ID vào biến để thanh Menu hiện ra
        if (res && res.currentClassId) {
          const classIdStr = String(res.currentClassId);
          this.physicalClassId.set(classIdStr);
          this.announcementService.checkNewAnnouncements(classIdStr);

          setInterval(() => {
             this.announcementService.checkNewAnnouncements(classIdStr);
          }, 5 * 60 * 1000);
          
          localStorage.setItem('physicalClassId', classIdStr); 
        }
      },
      error: (err) => {
        console.error('Không thể lấy thông tin lớp học cho Sidebar:', err);
      }
    });
  }

  hasAnyRole(allowedRoles: string[]): boolean {
    const userRoles = this.authService.authState().roles || [];
    return allowedRoles.some(allowedRole => 
      userRoles.some((userRole: string) => 
        userRole === allowedRole || 
        userRole === `ROLE_${allowedRole}` ||
        userRole.endsWith(`_${allowedRole}`)
      )
    );
  }

  toggleSidebar() {
    this.isSidebarOpen.update(v => !v);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}