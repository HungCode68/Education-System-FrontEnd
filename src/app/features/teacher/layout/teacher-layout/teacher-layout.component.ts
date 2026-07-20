import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service'; 

@Component({
  selector: 'app-teacher-layout',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './teacher-layout.component.html'
})
export class TeacherLayoutComponent {
  public authService = inject(AuthService);
  private router = inject(Router);

  // Lấy email/tên giáo viên từ Token
  teacherName = computed(() => this.authService.authState().email || 'Giáo viên');
  
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