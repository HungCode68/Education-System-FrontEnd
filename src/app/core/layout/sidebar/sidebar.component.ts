import { Component, Input, inject, signal, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HasPermissionDirective } from '../../directives/has-permission.directive';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule, HasPermissionDirective],
  template: `
    <aside [class.sidebar-hidden]="!isSidebarVisible" class="sidebar bg-white border-r border-gray-100 flex flex-col z-40 transition-all duration-300">
      
      <!-- LOGO HEADER -->
      <div class="header-logo h-16 flex items-center px-6 border-b border-gray-100 justify-between">
        <div class="flex items-center">
          <img src="assets/Icon-Dai-hoc-CMC.png" alt="EduSystem Logo" class="w-8 h-8 object-contain mr-3">
          <div>
            <span class="text-xl font-extrabold text-gray-800 tracking-tight block leading-none">EduSystem</span>
            @if (isAcademicMode()) {
              <span class="text-[10px] font-bold text-blue-600 tracking-wider uppercase block mt-1">Bộ phận Đào tạo</span>
            } @else {
              <span class="text-[10px] font-bold text-gray-400 tracking-wider uppercase block mt-1">Quản trị Hệ thống</span>
            }
          </div>
        </div>
      </div>

      <!-- NAVIGATION MENU -->
      <nav class="flex-1 overflow-y-auto py-6 px-3 space-y-1.5 scrollbar-thin">
        
        <!-- MODE BỘ PHẬN ĐÀO TẠO (ACADEMIC PORTAL) -->
        @if (isAcademicMode()) {

          <!-- SECTION: QUẢN LÝ CHƯƠNG TRÌNH & LỚP HỌC -->
          <div class="px-3 pt-5 pb-2">
            <p class="text-xs font-semibold text-gray-400 uppercase tracking-wider">Quản lý Đào tạo</p>
          </div>

          <a *hasAnyPermission="['COURSES_VIEW', 'COURSES_READ', 'COURSES_MANAGE', 'COURSE_VIEW', 'COURSE_READ', 'COURSE_MANAGE']" routerLink="/academic/courses" routerLinkActive="active-link" class="menu-item group">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
            </svg>
            <span class="font-medium">Quản lý Khóa học</span>
          </a>

          <a *hasAnyPermission="['TERM_VIEW', 'TERM_READ', 'TERM_MANAGE', 'TERM_CREATE', 'TERM_UPDATE']" routerLink="/academic/terms" routerLinkActive="active-link" class="menu-item group">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            <span class="font-medium">Quản lý Kỳ học</span>
          </a>

          <a *hasAnyPermission="['CLASS_VIEW', 'CLASS_READ', 'CLASS_MANAGE', 'CLASS_CREATE', 'CLASS_UPDATE']" routerLink="/academic/classes" routerLinkActive="active-link" class="menu-item group">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
            <span class="font-medium">Quản lý Lớp học</span>
          </a>

          <a *hasAnyPermission="['SCHEDULE_VIEW', 'SCHEDULE_READ', 'SCHEDULE_MANAGE', 'SCHEDULE_CREATE']" routerLink="/academic/schedules" routerLinkActive="active-link" class="menu-item group">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span class="font-medium">Quản lý Lịch học</span>
          </a>

          <a *hasAnyPermission="['ROOM_VIEW', 'ROOM_READ', 'ROOM_MANAGE', 'ROOM_CREATE']" routerLink="/academic/rooms" routerLinkActive="active-link" class="menu-item group">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0v-5a2 2 0 012-2h2a2 2 0 012 2v5m-6 0h6"></path>
            </svg>
            <span class="font-medium">Quản lý Phòng học</span>
          </a>

          <a *hasPermission="'ASSIGNMENT_VIEW'" routerLink="/academic/teaching-assignments" routerLinkActive="active-link" class="menu-item group">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
            <span class="font-medium">Phân công Giảng dạy</span>
          </a>

          <a *hasPermission="'ASSIGNMENT_VIEW'" routerLink="/academic/schedule-assignments" routerLinkActive="active-link" class="menu-item group">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            <span class="font-medium">Phân công Buổi học</span>
          </a>

          <a *hasPermission="'ASSIGNMENT_VIEW'" routerLink="/academic/teaching-substitutions" routerLinkActive="active-link" class="menu-item group">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
            </svg>
            <span class="font-medium">Quản lý Dạy thay</span>
          </a>

          <a *hasAnyPermission="['ENROLLMENT_VIEW', 'ENROLLMENT_READ', 'ENROLLMENT_MANAGE', 'ENROLLMENT_CREATE']" routerLink="/academic/enrollments" routerLinkActive="active-link" class="menu-item group">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
            <span class="font-medium">Quản lý Xếp lớp</span>
          </a>

          <a *hasAnyPermission="['MATERIAL_VIEW', 'MATERIAL_READ', 'MATERIAL_MANAGE', 'MATERIAL_CREATE', 'LEARNING_MATERIAL_VIEW', 'LEARNING_MATERIAL_READ']" routerLink="/academic/learning-materials" routerLinkActive="active-link" class="menu-item group">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
            </svg>
            <span class="font-medium">Quản lý Tài liệu Học tập</span>
          </a>

          <a *hasAnyPermission="['REPORT_VIEW', 'REPORT_READ', 'TRAINING_VIEW', 'REPORT_MANAGE']" routerLink="/academic/reports" routerLinkActive="active-link" class="menu-item group">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
            </svg>
            <span class="font-medium">Báo cáo & Thống kê</span>
          </a>

          <!-- SECTION: NHÂN SỰ & HỌC VIÊN -->
          <div class="px-3 pt-5 pb-2">
            <p class="text-xs font-semibold text-gray-400 uppercase tracking-wider">Học viên & Giảng dạy</p>
          </div>

          <a *hasAnyPermission="['STUDENT_VIEW', 'STUDENT_READ', 'STUDENT_MANAGE', 'STUDENT_CREATE']" routerLink="/academic/students" routerLinkActive="active-link" class="menu-item group">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
            </svg>
            <span class="font-medium">Quản lý Học viên</span>
          </a>

          <a *hasAnyPermission="['STAFF_VIEW', 'STAFF_READ', 'STAFF_MANAGE', 'STAFF_CREATE']" routerLink="/academic/staffs" routerLinkActive="active-link" class="menu-item group">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            <span class="font-medium">Quản lý Giảng viên</span>
          </a>

          <!-- SECTION: QUẢN TRỊ HỆ THỐNG (visible in Academic mode if user has account perms) -->
          <ng-container *hasAnyPermission="['ACCOUNT_VIEW', 'ACCOUNT_READ', 'ACCOUNT_MANAGE', 'ACCOUNT_UPDATE', 'ROLE_VIEW', 'ROLE_READ', 'ROLE_MANAGE', 'PERMISSION_VIEW', 'PERMISSION_READ', 'LOG_VIEW', 'LOG_READ']">
            <div class="px-3 pt-5 pb-2">
              <p class="text-xs font-semibold text-gray-400 uppercase tracking-wider">Quản trị Hệ thống</p>
            </div>
          </ng-container>

          <a *hasAnyPermission="['ACCOUNT_VIEW', 'ACCOUNT_READ', 'ACCOUNT_MANAGE', 'ACCOUNT_UPDATE']" routerLink="/academic/users" routerLinkActive="active-link" class="menu-item group">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
            <span class="font-medium">Quản lý Tài khoản</span>
          </a>

          <a *hasAnyPermission="['ROLE_VIEW', 'ROLE_READ', 'ROLE_MANAGE', 'ROLE_CREATE']" routerLink="/academic/roles" routerLinkActive="active-link" class="menu-item group">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-1a4 4 0 00-5-3.87M9 20H4v-1a4 4 0 015-3.87m8-3.13a4 4 0 10-8 0 4 4 0 008 0zM5 10a4 4 0 118 0 4 4 0 008 0z" />
            </svg>
            <span class="font-medium">Quản lý Vai trò</span>
          </a>

          <a *hasAnyPermission="['PERMISSION_VIEW', 'PERMISSION_READ', 'PERMISSION_MANAGE', 'PERMISSION_CREATE']" routerLink="/academic/permissions" routerLinkActive="active-link" class="menu-item group">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3l7 4v5c0 5-3.5 9-7 9s-7-4-7-9V7l7-4z" />
            </svg>
            <span class="font-medium">Quản lý Quyền</span>
          </a>

          <a *hasAnyPermission="['LOG_VIEW', 'LOG_READ', 'ROLE_VIEW']" routerLink="/academic/activity-logs" routerLinkActive="active-link" class="menu-item group">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
            <span class="font-medium">Nhật ký hoạt động</span>
          </a>

        } @else {
          <!-- MODE QUẢN TRỊ HỆ THỐNG (FULL ADMIN PORTAL) -->

          <a routerLink="/admin/dashboard" routerLinkActive="active-link" class="menu-item group">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
            <span class="font-medium">Tổng quan</span>
          </a>

          <div class="px-3 pt-5 pb-2">
            <p class="text-xs font-semibold text-gray-400 uppercase tracking-wider">Quản lý Dữ liệu</p>
          </div>

          <a *hasAnyPermission="['COURSE_VIEW', 'COURSE_READ', 'COURSE_MANAGE', 'COURSE_CREATE', 'COURSE_UPDATE']" routerLink="/admin/courses" routerLinkActive="active-link" class="menu-item group">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
            </svg>
            <span class="font-medium">Quản lý Khóa học</span>
          </a>

          <a *hasAnyPermission="['TERM_VIEW', 'TERM_READ', 'TERM_MANAGE', 'TERM_CREATE', 'TERM_UPDATE']" routerLink="/admin/terms" routerLinkActive="active-link" class="menu-item group">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            <span class="font-medium">Quản lý Kỳ học</span>
          </a>

          <a *hasAnyPermission="['CLASS_VIEW', 'CLASS_READ', 'CLASS_MANAGE', 'CLASS_CREATE', 'CLASS_UPDATE']" routerLink="/admin/classes" routerLinkActive="active-link" class="menu-item group">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
            <span class="font-medium">Quản lý Lớp học</span>
          </a>

          <a *hasAnyPermission="['SCHEDULE_VIEW', 'SCHEDULE_READ', 'SCHEDULE_MANAGE', 'SCHEDULE_CREATE']" routerLink="/admin/class-schedules" routerLinkActive="active-link" class="menu-item group">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span class="font-medium">Quản lý Lịch học</span>
          </a>

          <a *hasAnyPermission="['ROOM_VIEW', 'ROOM_READ', 'ROOM_MANAGE', 'ROOM_CREATE']" routerLink="/admin/rooms" routerLinkActive="active-link" class="menu-item group">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0v-5a2 2 0 012-2h2a2 2 0 012 2v5m-6 0h6"></path>
            </svg>
            <span class="font-medium">Quản lý Phòng học</span>
          </a>

          <a *hasPermission="'ASSIGNMENT_VIEW'" routerLink="/admin/teaching-assignments" routerLinkActive="active-link" class="menu-item group">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
            <span class="font-medium">Phân công Giảng dạy</span>
          </a>

          <a *hasPermission="'ASSIGNMENT_VIEW'" routerLink="/admin/schedule-assignments" routerLinkActive="active-link" class="menu-item group">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            <span class="font-medium">Phân công Buổi học</span>
          </a>

          <a *hasPermission="'ASSIGNMENT_VIEW'" routerLink="/admin/teaching-substitutions" routerLinkActive="active-link" class="menu-item group">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
            </svg>
            <span class="font-medium">Quản lý Dạy thay</span>
          </a>

          <a *hasAnyPermission="['ENROLLMENT_VIEW', 'ENROLLMENT_READ', 'ENROLLMENT_MANAGE', 'ENROLLMENT_CREATE']" routerLink="/admin/enrollments" routerLinkActive="active-link" class="menu-item group">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
            <span class="font-medium">Quản lý Xếp lớp</span>
          </a>

          <a *hasAnyPermission="['MATERIAL_VIEW', 'MATERIAL_READ', 'MATERIAL_MANAGE', 'MATERIAL_CREATE', 'LEARNING_MATERIAL_VIEW', 'LEARNING_MATERIAL_READ']" routerLink="/admin/learning-materials" routerLinkActive="active-link" class="menu-item group">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
            </svg>
            <span class="font-medium">Quản lý Tài liệu Học tập</span>
          </a>

          <a *hasAnyPermission="['REPORT_VIEW', 'REPORT_READ', 'TRAINING_VIEW', 'REPORT_MANAGE']" routerLink="/admin/reports" routerLinkActive="active-link" class="menu-item group">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
            </svg>
            <span class="font-medium">Báo cáo Thống kê</span>
          </a>

          <div class="px-3 pt-5 pb-2">
            <p class="text-xs font-semibold text-gray-400 uppercase tracking-wider">Quản lý người dùng</p>
          </div>

          <a *hasAnyPermission="['STUDENT_VIEW', 'STUDENT_READ', 'STUDENT_MANAGE', 'STUDENT_CREATE']" routerLink="/admin/students" routerLinkActive="active-link" class="menu-item group">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
            </svg>
            <span class="font-medium">Quản lý Học viên</span>
          </a>

          <a *hasAnyPermission="['STAFF_VIEW', 'STAFF_READ', 'STAFF_MANAGE', 'STAFF_CREATE']" routerLink="/admin/staffs" routerLinkActive="active-link" class="menu-item group">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            <span class="font-medium">Quản lý Nhân sự & Giáo viên</span>
          </a>

          <a *hasAnyPermission="['DEPARTMENT_VIEW', 'DEPARTMENT_READ', 'DEPARTMENT_MANAGE', 'DEPARTMENT_CREATE']" routerLink="/admin/departments" routerLinkActive="active-link" class="menu-item group">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21h18M5 21V7a2 2 0 012-2h3v16M13 21V3h4a2 2 0 012 2v16" />
            </svg>
            <span class="font-medium">Quản lý Phòng ban/Tổ bộ môn</span>
          </a>

          <a *hasAnyPermission="['ROLE_VIEW', 'ROLE_READ', 'ROLE_MANAGE', 'ROLE_CREATE']" routerLink="/admin/roles" routerLinkActive="active-link" class="menu-item group">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-1a4 4 0 00-5-3.87M9 20H4v-1a4 4 0 015-3.87m8-3.13a4 4 0 10-8 0 4 4 0 008 0zM5 10a4 4 0 118 0 4 4 0 008 0z" />
            </svg>
            <span class="font-medium">Quản lý Vai trò</span>
          </a>

          <a *hasAnyPermission="['PERMISSION_VIEW', 'PERMISSION_READ', 'PERMISSION_MANAGE', 'PERMISSION_CREATE']" routerLink="/admin/permissions" routerLinkActive="active-link" class="menu-item group">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3l7 4v5c0 5-3.5 9-7 9s-7-4-7-9V7l7-4z" />
            </svg>
            <span class="font-medium">Quản lý Quyền</span>
          </a>

          <a *hasAnyPermission="['ACCOUNT_VIEW', 'ACCOUNT_READ', 'ACCOUNT_MANAGE', 'ACCOUNT_UPDATE']" routerLink="/admin/users" routerLinkActive="active-link" class="menu-item group">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
            <span class="font-medium">Quản lý Tài khoản</span>
          </a>
          
          <a *hasAnyPermission="['LOG_VIEW', 'LOG_READ', 'ROLE_VIEW']" routerLink="/admin/activity-logs" routerLinkActive="active-link" class="menu-item group">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
            <span class="font-medium">Nhật ký hoạt động</span>
          </a>
        }

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

  isAcademicMode = signal(false);

  ngOnInit() {
    this.checkMode();
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.checkMode();
      });
  }

  private checkMode() {
    const isAcademicUrl = this.router.url.startsWith('/academic');
    const isAdminUrl = this.router.url.startsWith('/admin');

    if (isAdminUrl) {
      this.isAcademicMode.set(false);
      return;
    }

    const roles = this.authService.authState().roles || [];
    const isAcademicRoleOnly = roles.some(r => r === 'ACADEMIC' || r === 'ROLE_ACADEMIC' || r === 'TRAINING' || r === 'ROLE_TRAINING') &&
      !roles.some(r => r === 'ADMIN' || r === 'ROLE_ADMIN' || r === 'SYSTEM_ADMIN' || r === 'ROLE_SYSTEM_ADMIN');

    this.isAcademicMode.set(isAcademicUrl || isAcademicRoleOnly);
  }
}