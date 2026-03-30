import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <aside [class.sidebar-hidden]="!isSidebarVisible" class="sidebar bg-white border-r border-gray-100 flex flex-col z-40 transition-all duration-300">
      
      <div class="header-logo h-16 flex items-center px-6 border-b border-gray-100">
          <img src="assets/Icon-Dai-hoc-CMC.png" alt="EduSystem Logo" class="w-8 h-8 object-contain mr-3">
          
          <span class="text-xl font-extrabold text-gray-800 tracking-tight">EduSystem</span>
      </div>

      <nav class="flex-1 overflow-y-auto py-6 px-3 space-y-1.5 scrollbar-thin">
        
        <a routerLink="/admin/dashboard" routerLinkActive="active-link" class="menu-item group">
          <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
          <span class="font-medium">Tổng quan</span>
        </a>

        <div class="px-3 pt-5 pb-2">
            <p class="text-xs font-semibold text-gray-400 uppercase tracking-wider">Quản lý Dữ liệu</p>
        </div>

        <a routerLink="/admin/school-years" routerLinkActive="active-link" class="menu-item group">
          <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
          <span class="font-medium">Quản lý Năm học</span>
        </a>

        <a routerLink="/admin/subjects" routerLinkActive="active-link" class="menu-item group">
          <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
          <span class="font-medium">Quản lý Môn học</span>
        </a>

        <a routerLink="/admin/grades" routerLinkActive="active-link" class="menu-item group">
          <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
          </svg>
          <span class="font-medium">Quản lý Khối lớp</span>
        </a>

        <a routerLink="/admin/grade-subjects" routerLinkActive="active-link" class="menu-item group">
          <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
          </svg>
          <span class="font-medium">Quản lý Môn - Khối</span>
        </a>

        <a routerLink="/admin/physical-classes" routerLinkActive="active-link" class="menu-item group">
          <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
          </svg>
          <span class="font-medium">Quản lý Lớp học</span>
        </a>    
        
        <a routerLink="/admin/class-transfer-history" routerLinkActive="active-link" class="menu-item group">
          <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
          </svg>
          <span class="font-medium">Lịch sử Chuyển Lớp</span>
        </a>  

        <a routerLink="/admin/online-classes" routerLinkActive="active-link" class="menu-item group">
          <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
          <span class="font-medium">Quản lý Lớp học phần (Online Classes)</span>
        </a> 

        <div class="px-3 pt-5 pb-2">
            <p class="text-xs font-semibold text-gray-400 uppercase tracking-wider">Quản lý người dùng</p>
        </div>

        <a routerLink="/admin/students" routerLinkActive="active-link" class="menu-item group">
          <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
          </svg>
          <span class="font-medium">Quản lý Học sinh</span>
        </a>

        <a routerLink="/admin/teachers" routerLinkActive="active-link" class="menu-item group">
          <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
          <span class="font-medium">Quản lý Giáo viên</span>
        </a>

          <a routerLink="/admin/departments" routerLinkActive="active-link" class="menu-item group">
    <!-- Icon: Phòng ban (Building / Organization) -->
    <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M3 21h18M5 21V7a2 2 0 012-2h3v16M13 21V3h4a2 2 0 012 2v16" />
    </svg>
    <span class="font-medium">Quản lý Phòng ban/Tổ bộ môn</span>
  </a>

<a routerLink="/admin/roles" routerLinkActive="active-link" class="menu-item group">
  <!-- Icon: Vai trò (Users / Group) -->
  <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
      d="M17 20h5v-1a4 4 0 00-5-3.87M9 20H4v-1a4 4 0 015-3.87m8-3.13a4 4 0 10-8 0 4 4 0 008 0zM5 10a4 4 0 118 0 4 4 0 01-8 0z" />
  </svg>
  <span class="font-medium">Quản lý Vai trò</span>
</a>

<a routerLink="/admin/permissions" routerLinkActive="active-link" class="menu-item group">
  <!-- Icon: Quyền (Shield / Security) -->
  <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
      d="M12 3l7 4v5c0 5-3.5 9-7 9s-7-4-7-9V7l7-4z" />
  </svg>
  <span class="font-medium">Quản lý Quyền</span>
</a>

        <a routerLink="/admin/users" routerLinkActive="active-link" class="menu-item group">
          <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
          <span class="font-medium">Quản lý Tài khoản</span>
        </a>

        <a routerLink="/admin/activity-logs" routerLinkActive="active-link" class="menu-item group">
          <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
          <span class="font-medium">Nhật ký Hệ thống</span>
        </a>

      </nav>
    </aside>
  `,
  styles: [`
    :host { display: block; height: 100%; }
    .sidebar { width: 256px; height: 100vh; position: fixed; left: 0; top: 0; }
    .sidebar-hidden { left: -256px; }
    
    .menu-item {
        display: flex; items-center: center;
        padding: 0.75rem 1rem; border-radius: 0.75rem;
        color: #4b5563; /* text-gray-600 */
        font-size: 0.875rem; /* text-sm */
        transition: all 0.2s ease-in-out;
    }
    .menu-item:hover { background-color: #f9fafb; /* bg-gray-50 */ color: #111827; /* text-gray-900 */ }
    
    .icon { width: 1.25rem; h: 1.25rem; margin-right: 1rem; color: #9ca3af; /* text-gray-400 */ transition: color 0.2s; }
    .menu-item:hover .icon { color: #2563eb; /* text-blue-600 */ }

    /* Active Link Styling */
    .active-link { background-color: #eff6ff !important; /* bg-blue-50 */ color: #1d4ed8 !important; /* text-blue-700 */ }
    .active-link .icon { color: #2563eb !important; /* text-blue-600 */ }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent {
  @Input() isSidebarVisible = true;
}