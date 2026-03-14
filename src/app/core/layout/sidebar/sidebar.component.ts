import { Component, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth.service';

interface NavItem {
  label: string;
  route: string;
  icon: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <div class="sidebar">
      <!-- Logo -->
      <div class="sidebar-logo">
        <div class="logo-icon">📚</div>
        <span class="logo-text">LMS</span>
      </div>

      <!-- Navigation -->
      <nav class="sidebar-nav">
        <div class="nav-section">
          <div *ngFor="let item of navItems" class="nav-item">
            <a
              [routerLink]="item.route"
              routerLinkActive="active"
              [routerLinkActiveOptions]="{ exact: true }"
              class="nav-link"
            >
              <span class="nav-icon">{{ item.icon }}</span>
              <span class="nav-label">{{ item.label }}</span>
            </a>
          </div>
        </div>
      </nav>

      <!-- User Card -->
      <div class="sidebar-user">
        <div class="user-avatar">
          {{ userInitial() }}
        </div>
        <div class="user-info">
          <p class="user-email">{{ authService.authState().email }}</p>
          <p class="user-role">Quản trị viên</p>
        </div>
        <button (click)="logout()" class="logout-btn" title="Logout">
          🚪
        </button>
      </div>
    </div>
  `,
  styles: [`
    @use '../../ui/design-tokens.scss' as *;
    @use '../../ui/mixins.scss' as *;

    .sidebar {
      display: flex;
      flex-direction: column;
      height: 100%;
      background-color: $bg-default;
    }

    .sidebar-logo {
      display: flex;
      align-items: center;
      gap: $space-2;
      padding: $space-4;
      border-bottom: 1px solid $border-color;
      cursor: pointer;
      transition: background-color $transition-fast;

      &:hover {
        background-color: $bg-dark;
      }

      .logo-icon {
        font-size: $font-2xl;
        line-height: 1;
      }

      .logo-text {
        font-size: $font-xl;
        font-weight: $font-bold;
        color: $primary;
      }
    }

    .sidebar-nav {
      flex: 1;
      overflow-y: auto;
      padding: $space-4 $space-2;
    }

    .nav-section {
      @include stack-vertical;
    }

    .nav-item {
      .nav-link {
        display: flex;
        align-items: center;
        gap: $space-3;
        padding: $space-2 $space-3;
        border-radius: $radius-md;
        color: $text-secondary;
        text-decoration: none;
        transition: all $transition-fast;
        @include label;

        &:hover {
          background-color: $bg-dark;
          color: $text-primary;
        }

        &.active {
          background-color: rgba($primary, 0.1);
          color: $primary;
          font-weight: $font-semibold;

          .nav-icon {
            transform: scale(1.2);
          }
        }
      }

      .nav-icon {
        font-size: $font-lg;
        line-height: 1;
        transition: transform $transition-fast;
      }

      .nav-label {
        flex: 1;
        @include truncate;
      }
    }

    .sidebar-user {
      padding: $space-4;
      border-top: 1px solid $border-color;
      background-color: $bg-dark;
      border-radius: $radius-md;
      margin: $space-2;
      display: flex;
      align-items: center;
      gap: $space-3;

      .user-avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: linear-gradient(135deg, $primary, $info);
        color: $white;
        @include flex-center;
        font-weight: $font-bold;
        font-size: $font-base;
        flex-shrink: 0;
      }

      .user-info {
        flex: 1;
        min-width: 0;

        .user-email {
          margin: 0;
          @include body-sm;
          font-weight: $font-medium;
          color: $text-primary;
          @include truncate;
        }

        .user-role {
          margin: 0;
          @include caption;
          color: $text-tertiary;
        }
      }

      .logout-btn {
        width: 32px;
        height: 32px;
        border: none;
        background-color: rgba($error, 0.1);
        color: $error;
        border-radius: $radius-md;
        cursor: pointer;
        font-size: $font-lg;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all $transition-fast;
        @include focus-ring($error);

        &:hover {
          background-color: rgba($error, 0.2);
        }

        &:active {
          transform: scale(0.95);
        }
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent {
  authService = inject(AuthService);

  navItems: NavItem[] = [
    { label: 'Dashboard', route: '/admin/dashboard', icon: '📊' },
    { label: 'Quản lý lớp', route: '/admin/classes', icon: '🏫' },
    { label: 'Quản lý môn học', route: '/admin/subjects', icon: '📚' },
    { label: 'Phân công giảng dạy', route: '/admin/teaching', icon: '👨‍🏫' },
    { label: 'Thống kê học tập', route: '/admin/analytics', icon: '📈' },
    { label: 'Thông báo', route: '/admin/announcements', icon: '📢' },
    { label: 'Cài đặt', route: '/admin/settings', icon: '⚙️' }
  ];

  userInitial = () => {
    const email = this.authService.authState().email;
    return email ? email.charAt(0).toUpperCase() : 'A';
  };

  logout(): void {
    this.authService.logout();
  }
}
