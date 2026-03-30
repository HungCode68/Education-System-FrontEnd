import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service'; 

@Component({
  selector: 'app-unauthorized',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div class="max-w-md w-full space-y-8 text-center bg-white p-10 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden">
        
        <div class="absolute -top-10 -right-10 w-32 h-32 bg-red-50 rounded-full opacity-50"></div>
        <div class="absolute -bottom-10 -left-10 w-32 h-32 bg-orange-50 rounded-full opacity-50"></div>

        <div class="relative z-10">
            <div class="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-red-50 mb-8 border-8 border-white shadow-sm">
            <svg class="h-10 w-10 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            </div>
            
            <h2 class="text-3xl font-extrabold text-gray-900 tracking-tight">Truy cập bị từ chối</h2>
            <p class="text-base text-gray-600 mt-4 leading-relaxed">
            Bạn không có quyền truy cập vào khu vực này, hoặc phiên đăng nhập của bạn đã gặp sự cố.
            </p>
            
            <div class="mt-10 flex flex-col space-y-3">
            <button 
                (click)="goBack()" 
                class="w-full flex justify-center items-center py-3.5 px-4 border border-transparent rounded-xl shadow-sm text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition duration-200"
            >
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                Quay lại trang trước
            </button>
            
            <button 
                (click)="forceLogout()" 
                class="w-full flex justify-center items-center py-3.5 px-4 border border-gray-300 rounded-xl shadow-sm text-sm font-semibold text-gray-700 bg-white hover:bg-gray-50 transition duration-200"
            >
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                Đăng xuất & Đăng nhập lại
            </button>
            </div>
        </div>
      </div>
    </div>
  `
})
export class UnauthorizedComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  // Thử quay lại trang trước đó bằng History API của trình duyệt
  goBack() {
    window.history.back();
  }

  // Trực tiếp gọi hàm logout để xóa sạch mọi Token cũ bị lỗi
  forceLogout() {
    this.authService.logout();
  }
}