import { Component, input, output, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chart-panel',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="panel">
      <div class="panel-header">
        <div class="panel-title-section">
          <h2 class="panel-title">{{ title() }}</h2>
          <p class="panel-description">{{ description() }}</p>
        </div>
        <div class="panel-actions">
          <button
            *ngIf="showExport()"
            class="export-btn"
            (click)="onExport.emit()"
            title="Export"
          >
            📥
          </button>
        </div>
      </div>

      <div class="panel-content">
        <ng-content></ng-content>
      </div>

      <div *ngIf="footer()" class="panel-footer">
        {{ footer() }}
      </div>
    </div>
  `,
  styles: [`
    @use '../../../../core/ui/design-tokens.scss' as *;
    @use '../../../../core/ui/mixins.scss' as *;

    :host {
      display: block;
    }

    .panel {
      @include card;
      display: flex;
      flex-direction: column;
      gap: $space-4;
    }

    .panel-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: $space-4;
    }

    .panel-title-section {
      flex: 1;
    }

    .panel-title {
      margin: 0;
      @include heading-3;
      color: $text-primary;
    }

    .panel-description {
      margin: $space-1 0 0;
      @include body-sm;
      color: $text-secondary;
    }

    .panel-actions {
      display: flex;
      gap: $space-2;
    }

    .export-btn {
      padding: $space-2 $space-3;
      background-color: $bg-dark;
      border: 1px solid $border-color;
      border-radius: $radius-md;
      cursor: pointer;
      font-size: $font-base;
      @include flex-center;
      transition: all $transition-fast;
      @include focus-ring;

      &:hover {
        background-color: $border-color;
      }

      &:active {
        transform: scale(0.95);
      }
    }

    .panel-content {
      min-height: 300px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .panel-footer {
      padding-top: $space-4;
      border-top: 1px solid $border-color;
      @include body-sm;
      color: $text-tertiary;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartPanelComponent {
  title = input.required<string>();
  description = input('');
  footer = input('');
  showExport = input(false);
  onExport = output<void>();
}
