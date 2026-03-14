import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stats-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">{{ title() }}</h3>
        <span class="card-icon">{{ icon() }}</span>
      </div>

      <div class="card-body">
        <div class="card-value">{{ value() }}</div>
        <p class="card-subtitle">{{ subtitle() }}</p>
      </div>

      <div class="card-trend" [class.up]="trendUp()">
        <span class="trend-icon">{{ trendUp() ? '📈' : '📉' }}</span>
        <span class="trend-text">{{ trend() }}</span>
      </div>
    </div>
  `,
  styles: [`
    @use '../../../../core/ui/design-tokens.scss' as *;
    @use '../../../../core/ui/mixins.scss' as *;

    :host {
      display: block;
    }

    .card {
      @include card;
      display: flex;
      flex-direction: column;
      gap: $space-4;
      background: linear-gradient(135deg, rgba($primary, 0.02) 0%, rgba($info, 0.02) 100%);

      &:hover {
        transform: translateY(-2px);
        box-shadow: $shadow-lg;
      }
    }

    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }

    .card-title {
      margin: 0;
      @include body-sm;
      color: $text-secondary;
      font-weight: $font-medium;
    }

    .card-icon {
      font-size: $font-2xl;
      line-height: 1;
    }

    .card-body {
      @include stack-vertical;
      gap: $space-2;
    }

    .card-value {
      @include heading-2;
      color: $primary;
    }

    .card-subtitle {
      margin: 0;
      @include body-sm;
      color: $text-tertiary;
    }

    .card-trend {
      display: flex;
      align-items: center;
      gap: $space-1;
      @include body-sm;
      color: $success;

      .trend-icon {
        font-size: $font-base;
      }

      &:not(.up) {
        color: $error;
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatsCardComponent {
  title = input.required<string>();
  value = input.required<string | number>();
  subtitle = input.required<string>();
  icon = input.required<string>();
  trend = input('↑ 12.5%');
  trendUp = input(true);
}
