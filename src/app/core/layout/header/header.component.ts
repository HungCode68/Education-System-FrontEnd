import { Component, Output, EventEmitter, inject, computed, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="header bg-white border-b border-gray-100 flex items-center justify-between px-6 shadow-sm z-30">
      
      <div class="flex items-center space-x-2 text-sm text-gray-500">
          <span class="breadcrumb-item font-medium text-gray-800">Trang chủ</span>
          <span class="separator">/</span>
          <span class="breadcrumb-item">Dashboard</span>
      </div>

      <button (click)="onToggleSidebar()" class="md:hidden text-gray-500 hover:text-gray-800 p-2 rounded-lg bg-gray-50">
        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
      </button>

      <div class="user-menu flex items-center space-x-5">
        
        <div class="flex items-center space-x-3 group cursor-pointer p-1.5 rounded-full hover:bg-gray-50">
            <div class="avatar w-9 h-9 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-blue-700 font-bold uppercase shadow-inner">
                {{ userEmail().charAt(0) }}
            </div>
            <div class="hidden md:block">
                <p class="text-sm font-semibold text-gray-800">{{ userEmail() }}</p>
                <p class="text-xs text-gray-500">System Administrator</p>
            </div>
        </div>

        <div class="h-6 w-px bg-gray-200"></div> 
        
        <button (click)="onLogout()" class="text-sm font-medium text-red-600 hover:text-red-800 transition flex items-center p-2 rounded-lg hover:bg-red-50">
          <svg class="w-4.5 h-4.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
          <span class="hidden sm:inline">Đăng xuất</span>
        </button>
      </div>
    </header>
  `,
  styles: [`
    :host { display: block; width: 100%; }
    .header { h: 64px; }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  private authService = inject(AuthService);
  
  @Output() toggleSidebar = new EventEmitter<void>();

  // Lấy email từ authState
  userEmail = computed(() => this.authService.authState().email || 'Admin');

  onToggleSidebar() {
    this.toggleSidebar.emit();
  }

  onLogout(): void {
    this.authService.logout();
  }
}