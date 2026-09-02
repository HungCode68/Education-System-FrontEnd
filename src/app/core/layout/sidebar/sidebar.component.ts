import { Component, Input, inject, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HasPermissionDirective } from '../../directives/has-permission.directive';
import { HasRoleDirective } from '../../directives/has-role.directive';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule, HasPermissionDirective, HasRoleDirective],
  template: `
    <aside [class.sidebar-hidden]="!isSidebarVisible" class="sidebar bg-white border-r border-gray-100 flex flex-col z-40 transition-all duration-300">
      
      <!-- LOGO HEADER -->
      <div class="header-logo h-16 flex items-center px-6 border-b border-gray-100 justify-between">
        <div class="flex items-center">
          <img src="assets/Icon-Dai-hoc-CMC.png" alt="EduSystem Logo" class="w-8 h-8 object-contain mr-3">
          <div>
            <span class="text-xl font-extrabold text-gray-800 tracking-tight block leading-none">EduSystem</span>
            <span class="text-[10px] font-bold text-gray-500 tracking-wider uppercase block mt-1">{{ getPortalName() }}</span>
          </div>
        </div>
      </div>

      <!-- NAVIGATION MENU -->
      <nav class="flex-1 overflow-y-auto py-6 px-3 space-y-1.5 scrollbar-thin">
        
        <!-- SECTION: HỌC TẬP (For Students) -->
        <ng-container *hasRole="'STUDENT'">
          <div class="px-3 pt-5 pb-2">
            <p class="text-xs font-semibold text-gray-400 uppercase tracking-wider">Học tập</p>
          </div>
          <a routerLink="/student/my-classes" routerLinkActive="active-link" class="menu-item group">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
            </svg>
            <span class="font-medium">Lớp học của tôi</span>
          </a>
          <a routerLink="/student/schedule" routerLinkActive="active-link" class="menu-item group">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            <span class="font-medium">Thời khóa biểu</span>
          </a>
        </ng-container>

        <!-- SECTION: GIẢNG DẠY (For Teachers) -->
        <ng-container *hasRole="'TEACHER'">
          <div class="px-3 pt-5 pb-2">
            <p class="text-xs font-semibold text-gray-400 uppercase tracking-wider">Giảng dạy</p>
          </div>
          <a routerLink="/teacher/my-classes" routerLinkActive="active-link" class="menu-item group">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
            </svg>
            <span class="font-medium">Lớp học của tôi</span>
          </a>
          <a routerLink="/teacher/schedule" routerLinkActive="active-link" class="menu-item group">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            <span class="font-medium">Lịch giảng dạy</span>
          </a>
        </ng-container>

        <!-- TỔNG QUAN QUẢN TRỊ -->
        <ng-container *hasAnyRole="['ADMIN', 'SYSTEM_ADMIN']">
          <a [routerLink]="['/admin', 'dashboard']" routerLinkActive="active-link" class="menu-item group mt-5">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
            <span class="font-medium">Tổng quan</span>
          </a>
        </ng-container>

        <!-- SECTION: ĐÀO TẠO & LỚP HỌC -->
        <ng-container *hasAnyPermission="['COURSE_VIEW', 'TERM_VIEW', 'ROOM_VIEW', 'CLASS_VIEW', 'SCHEDULE_VIEW', 'ASSIGNMENT_VIEW', 'ENROLLMENT_VIEW', 'MATERIAL_VIEW', 'REPORT_VIEW']">
          <div class="px-3 pt-5 pb-2">
            <p class="text-xs font-semibold text-gray-400 uppercase tracking-wider">Đào tạo & Lớp học</p>
          </div>
          
          <a *hasAnyPermission="['COURSE_VIEW', 'COURSE_READ', 'COURSE_MANAGE']" [routerLink]="[getPortalPrefix(), 'courses']" routerLinkActive="active-link" class="menu-item group">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
            </svg>
            <span class="font-medium">Quản lý Khóa học</span>
          </a>

          <a *hasAnyPermission="['TERM_VIEW', 'TERM_READ', 'TERM_MANAGE']" [routerLink]="[getPortalPrefix(), 'terms']" routerLinkActive="active-link" class="menu-item group">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            <span class="font-medium">Quản lý Kỳ học</span>
          </a>

          <a *hasAnyPermission="['ROOM_VIEW', 'ROOM_READ', 'ROOM_MANAGE']" [routerLink]="[getPortalPrefix(), 'rooms']" routerLinkActive="active-link" class="menu-item group">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0v-5a2 2 0 012-2h2a2 2 0 012 2v5m-6 0h6"></path>
            </svg>
            <span class="font-medium">Quản lý Phòng học</span>
          </a>

          <a *hasAnyPermission="['CLASS_VIEW', 'CLASS_READ', 'CLASS_MANAGE']" [routerLink]="[getPortalPrefix(), 'classes']" routerLinkActive="active-link" class="menu-item group">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
            <span class="font-medium">Quản lý Lớp học</span>
          </a>

          <a *hasAnyPermission="['SCHEDULE_VIEW', 'SCHEDULE_READ', 'SCHEDULE_MANAGE']" [routerLink]="[getPortalPrefix(), 'class-schedules']" routerLinkActive="active-link" class="menu-item group">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span class="font-medium">Quản lý Lịch học</span>
          </a>

          <a *hasPermission="'ASSIGNMENT_VIEW'" [routerLink]="[getPortalPrefix(), 'teaching-assignments']" routerLinkActive="active-link" class="menu-item group">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
            <span class="font-medium">Phân công Giảng dạy</span>
          </a>

          <a *hasPermission="'ASSIGNMENT_VIEW'" [routerLink]="[getPortalPrefix(), 'schedule-assignments']" routerLinkActive="active-link" class="menu-item group">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            <span class="font-medium">Phân công Buổi học</span>
          </a>

          <a *hasPermission="'ASSIGNMENT_VIEW'" [routerLink]="[getPortalPrefix(), 'teaching-substitutions']" routerLinkActive="active-link" class="menu-item group">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
            </svg>
            <span class="font-medium">Quản lý Dạy thay</span>
          </a>

          <a *hasAnyPermission="['SCHEDULE_VIEW', 'SCHEDULE_READ', 'SCHEDULE_MANAGE']" [routerLink]="[getPortalPrefix(), 'cancellations']" routerLinkActive="active-link" class="menu-item group">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"></path>
            </svg>
            <span class="font-medium">Ngày nghỉ & Ngoại lệ</span>
          </a>

          <a *hasAnyPermission="['ENROLLMENT_VIEW', 'ENROLLMENT_READ', 'ENROLLMENT_MANAGE']" [routerLink]="[getPortalPrefix(), 'enrollments']" routerLinkActive="active-link" class="menu-item group">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
            <span class="font-medium">Quản lý Xếp lớp</span>
          </a>

          <a *hasAnyPermission="['MATERIAL_VIEW', 'MATERIAL_READ', 'MATERIAL_MANAGE', 'LEARNING_MATERIAL_VIEW']" [routerLink]="[getPortalPrefix(), 'learning-materials']" routerLinkActive="active-link" class="menu-item group">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
            </svg>
            <span class="font-medium">Quản lý Tài liệu Học tập</span>
          </a>

          <a *hasAnyPermission="['REPORT_VIEW', 'REPORT_READ', 'REPORT_MANAGE']" [routerLink]="[getPortalPrefix(), 'reports']" routerLinkActive="active-link" class="menu-item group">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
            </svg>
            <span class="font-medium">Báo cáo Thống kê</span>
          </a>
        </ng-container>

        <!-- SECTION: HỒ SƠ & NHÂN SỰ -->
        <ng-container *hasAnyPermission="['STAFF_VIEW', 'STUDENT_VIEW', 'DEPARTMENT_VIEW']">
          <div class="px-3 pt-5 pb-2">
            <p class="text-xs font-semibold text-gray-400 uppercase tracking-wider">Hồ sơ & Nhân sự</p>
          </div>

          <a *hasAnyPermission="['STUDENT_VIEW', 'STUDENT_READ', 'STUDENT_MANAGE']" [routerLink]="[getPortalPrefix(), 'students']" routerLinkActive="active-link" class="menu-item group">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
            </svg>
            <span class="font-medium">Quản lý Học viên</span>
          </a>

          <a *hasAnyPermission="['STAFF_VIEW', 'STAFF_READ', 'STAFF_MANAGE']" [routerLink]="[getPortalPrefix(), 'staffs']" routerLinkActive="active-link" class="menu-item group">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            <span class="font-medium">Quản lý Nhân sự & GV</span>
          </a>

          <a *hasAnyPermission="['DEPARTMENT_VIEW', 'DEPARTMENT_READ', 'DEPARTMENT_MANAGE']" [routerLink]="[getPortalPrefix(), 'departments']" routerLinkActive="active-link" class="menu-item group">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21h18M5 21V7a2 2 0 012-2h3v16M13 21V3h4a2 2 0 012 2v16" />
            </svg>
            <span class="font-medium">Quản lý Phòng ban</span>
          </a>
        </ng-container>

        <!-- SECTION: HỆ THỐNG -->
        <ng-container *hasAnyPermission="['ACCOUNT_VIEW', 'ROLE_VIEW', 'PERMISSION_VIEW', 'LOG_VIEW']">
          <div class="px-3 pt-5 pb-2">
            <p class="text-xs font-semibold text-gray-400 uppercase tracking-wider">Hệ thống & Tài khoản</p>
          </div>
          
          <a *hasAnyPermission="['ROLE_VIEW', 'ROLE_READ', 'ROLE_MANAGE']" [routerLink]="[getPortalPrefix(), 'roles']" routerLinkActive="active-link" class="menu-item group">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-1a4 4 0 00-5-3.87M9 20H4v-1a4 4 0 015-3.87m8-3.13a4 4 0 10-8 0 4 4 0 008 0zM5 10a4 4 0 118 0 4 4 0 008 0z" />
            </svg>
            <span class="font-medium">Quản lý Vai trò</span>
          </a>

          <a *hasAnyPermission="['PERMISSION_VIEW', 'PERMISSION_READ', 'PERMISSION_MANAGE']" [routerLink]="[getPortalPrefix(), 'permissions']" routerLinkActive="active-link" class="menu-item group">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3l7 4v5c0 5-3.5 9-7 9s-7-4-7-9V7l7-4z" />
            </svg>
            <span class="font-medium">Quản lý Quyền</span>
          </a>

          <a *hasAnyPermission="['ACCOUNT_VIEW', 'ACCOUNT_READ', 'ACCOUNT_MANAGE']" [routerLink]="[getPortalPrefix(), 'users']" routerLinkActive="active-link" class="menu-item group">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
            <span class="font-medium">Quản lý Tài khoản</span>
          </a>
          
          <a *hasAnyPermission="['LOG_VIEW', 'LOG_READ']" [routerLink]="[getPortalPrefix(), 'activity-logs']" routerLinkActive="active-link" class="menu-item group">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
            <span class="font-medium">Nhật ký hoạt động</span>
          </a>
        </ng-container>

        <!-- SECTION: CÁ NHÂN -->
        <div class="px-3 pt-5 pb-2">
          <p class="text-xs font-semibold text-gray-400 uppercase tracking-wider">Cá nhân</p>
        </div>
        
        <a [routerLink]="getProfileLink()" routerLinkActive="active-link" class="menu-item group mb-5">
          <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
          </svg>
          <span class="font-medium">Hồ sơ cá nhân</span>
        </a>

      </nav>
    </aside>
  `,
  styles: [`
    :host { display: block; height: 100%; }
    .sidebar { width: 256px; height: 100vh; position: fixed; left: 0; top: 0; }
    .sidebar-hidden { left: -256px; }
    
    .menu-item {
        display: flex; align-items: center;
        padding: 0.75rem 1rem; border-radius: 0.75rem;
        color: #4b5563;
        font-size: 0.875rem;
        transition: all 0.2s ease-in-out;
    }
    .menu-item:hover { background-color: #f9fafb; color: #111827; }
    
    .icon { width: 1.25rem; height: 1.25rem; margin-right: 1rem; color: #9ca3af; transition: color 0.2s; }
    .menu-item:hover .icon { color: #2563eb; }

    .active-link { background-color: #eff6ff !important; color: #1d4ed8 !important; }
    .active-link .icon { color: #2563eb !important; }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent implements OnInit {
  @Input() isSidebarVisible = true;

  private router = inject(Router);
  private authService = inject(AuthService);

  ngOnInit() {
    // Không cần logic checkMode vì đã dùng Directive *hasRole và *hasPermission
  }

  getPortalName(): string {
    const roles = this.authService.authState().roles || [];
    const hasRole = (role: string) => roles.some(r => r === role || r === `ROLE_${role}` || r.endsWith(`_${role}`));

    if (hasRole('ADMIN') || hasRole('SYSTEM_ADMIN')) return 'Quản trị Hệ thống';
    if (hasRole('ACADEMIC') || hasRole('TRAINING')) return 'Bộ phận Đào tạo';
    if (hasRole('HR') || hasRole('NHAN_SU')) return 'Bộ phận Nhân sự';
    if (roles.some(r => r.includes('TEACHER'))) return 'Cổng Giảng viên';
    if (hasRole('STUDENT')) return 'Cổng Học viên';
    
    return 'Cổng Nội bộ';
  }

  getPortalPrefix(): string {
    const url = this.router.url;
    // Nếu đang ở màn hình nào thì ưu tiên trả về prefix của màn đó (để link trỏ đúng module hiện tại)
    if (url.startsWith('/admin')) return '/admin';
    if (url.startsWith('/academic')) return '/academic';
    if (url.startsWith('/hr')) return '/hr';
    
    // Nếu ở /teacher hoặc /student mà có bấm vào link quản lý, ưu tiên trỏ về theo chức năng cao nhất
    if (this.authService.hasAnyRole(['ADMIN', 'SYSTEM_ADMIN'])) return '/admin';
    if (this.authService.hasAnyRole(['ACADEMIC', 'TRAINING'])) return '/academic';
    if (this.authService.hasAnyRole(['HR', 'NHAN_SU'])) return '/hr';
    
    // Fallback nếu không có role quản lý nhưng lại có permission quản lý
    return '/academic';
  }

  getProfileLink(): string {
    const url = this.router.url;
    if (url.startsWith('/admin')) return '/admin/profile';
    if (url.startsWith('/academic')) return '/academic/profile';
    if (url.startsWith('/hr')) return '/hr/profile';
    if (url.startsWith('/teacher')) return '/teacher/profile';
    if (url.startsWith('/student')) return '/student/profile';
    
    if (this.authService.hasRole('STUDENT')) return '/student/profile';
    if (this.authService.hasRole('TEACHER')) return '/teacher/profile';
    return '/academic/profile';
  }
}