import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';
import { NotificationBellComponent } from '../../pages/notification/notification-bell.component';

@Component({
  selector: 'app-student-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, NotificationBellComponent],
  templateUrl: './student-layout.component.html'
})
export class StudentLayoutComponent  {
  public authService = inject(AuthService);
  private router = inject(Router);

  // Lấy email/tên học sinh từ Token
  studentName = computed(() => this.authService.authState().email || 'Học sinh');

  // State đóng/mở sidebar trên mobile
  isSidebarOpen = signal(false);

  //  Kiểm tra Role 
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