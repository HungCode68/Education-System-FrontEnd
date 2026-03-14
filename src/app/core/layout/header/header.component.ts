import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="header-content">
      <div class="header-left">
        <button class="menu-toggle" aria-label="Toggle menu">
          ☰
        </button>
        <h1 class="header-title">Hệ thống quản lý học tập</h1>
      </div>

      <div class="header-right">
        <div class="search-box">
          <input
            type="text"
            placeholder="Tìm kiếm..."
            class="search-input"
          />
          <span class="search-icon">🔍</span>
        </div>

        <div class="header-actions">
          <button class="action-btn" title="Notifications">
            🔔
            <span class="notification-badge">3</span>
          </button>
          <button class="action-btn" title="Settings">⚙️</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    @use '../../ui/design-tokens.scss' as *;
    @use '../../ui/mixins.scss' as *;

    .header-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 100%;
    }

    .header-left {
      display: flex;
      align-items: center;
      gap: $space-4;
      flex: 1;

      .menu-toggle {
        display: none;
        width: 40px;
        height: 40px;
        border: 1px solid $border-color;
        background-color: $bg-default;
        border-radius: $radius-md;
        cursor: pointer;
        font-size: $font-xl;
        @include flex-center;
        transition: all $transition-fast;
        @include focus-ring;

        &:hover {
          background-color: $bg-dark;
        }

        @media (max-width: 768px) {
          display: flex;
        }
      }

      .header-title {
        margin: 0;
        @include heading-3;
        color: $text-primary;

        @media (max-width: 768px) {
          @include heading-4;
        }
      }
    }

    .header-right {
      display: flex;
      align-items: center;
      gap: $space-4;

      @media (max-width: 640px) {
        gap: $space-2;
      }
    }

    .search-box {
      position: relative;
      display: flex;
      align-items: center;

      .search-input {
        @include form-control;
        padding-right: $space-4;
        width: 280px;
        @include body-sm;

        &::placeholder {
          color: $text-tertiary;
        }

        @media (max-width: 640px) {
          width: 200px;
        }

        @media (max-width: 480px) {
          display: none;
        }
      }

      .search-icon {
        position: absolute;
        right: $space-2;
        color: $text-tertiary;
        pointer-events: none;
      }
    }

    .header-actions {
      display: flex;
      align-items: center;
      gap: $space-2;
    }

    .action-btn {
      position: relative;
      width: 40px;
      height: 40px;
      border: 1px solid $border-color;
      background-color: $bg-default;
      border-radius: $radius-md;
      cursor: pointer;
      font-size: $font-lg;
      @include flex-center;
      transition: all $transition-fast;
      @include focus-ring;

      &:hover {
        background-color: $bg-dark;
        border-color: $border-color-dark;
      }

      &:active {
        transform: scale(0.95);
      }

      .notification-badge {
        position: absolute;
        top: -8px;
        right: -8px;
        min-width: 20px;
        height: 20px;
        background-color: $error;
        color: $white;
        border-radius: 50%;
        @include flex-center;
        font-size: $font-xs;
        font-weight: $font-bold;
        border: 2px solid $white;
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {}
