import { Component, signal, ChangeDetectionStrategy, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsCardComponent } from '../../components/stats-card/stats-card.component';
import { ChartPanelComponent } from '../../components/chart-panel/chart-panel.component';
import { DashboardStats, ClassByLevel, MonthlyAverageGrade } from '../../models/dashboard.model';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, StatsCardComponent, ChartPanelComponent],
  template: `
    <div class="dashboard">
      <!-- Page Header -->
      <div class="page-header">
        <div class="header-content">
          <h1 class="page-title">Tổng quan hệ thống</h1>
          <p class="page-subtitle">Quản lý và theo dõi hoạt động của nhà trường</p>
        </div>
        <div class="header-date">
          {{ currentDate() | date: 'dd/MM/yyyy' }}
        </div>
      </div>

      <!-- Statistics Cards Row -->
      <div class="stats-grid">
        <app-stats-card
          [title]="'Tổng số lớp'"
          [value]="stats().totalClasses"
          [subtitle]="'Tất cả các lớp'"
          [icon]="'🏫'"
          trend="↑ 5%"
          [trendUp]="true"
        ></app-stats-card>

        <app-stats-card
          [title]="'Học sinh'"
          [value]="stats().totalStudents"
          [subtitle]="'Đang học'"
          [icon]="'👨‍🎓'"
          trend="↑ 8%"
          [trendUp]="true"
        ></app-stats-card>

        <app-stats-card
          [title]="'Giáo viên'"
          [value]="stats().totalTeachers"
          [subtitle]="'Đang giảng dạy'"
          [icon]="'👨‍🏫'"
          trend="↑ 2%"
          [trendUp]="true"
        ></app-stats-card>

        <app-stats-card
          [title]="'Môn học'"
          [value]="stats().totalSubjects"
          [subtitle]="'Đang mở'"
          [icon]="'📚'"
          trend="↓ 3%"
          [trendUp]="false"
        ></app-stats-card>
      </div>

      <!-- Charts Section -->
      <div class="charts-grid">
        <!-- Bar Chart: Classes by Level -->
        <app-chart-panel
          title="Thống kê theo khối"
          description="Số lượng lớp và học sinh theo từng khối"
          [showExport]="true"
          (onExport)="exportChart('by-level')"
        >
          <div class="chart-container">
            <svg class="bar-chart" viewBox="0 0 600 300">
              <!-- Y-axis -->
              <line x1="50" y1="20" x2="50" y2="250" stroke="#d1d5db" stroke-width="2"/>
              <!-- X-axis -->
              <line x1="50" y1="250" x2="580" y2="250" stroke="#d1d5db" stroke-width="2"/>

              <!-- Y-axis labels -->
              <text x="45" y="255" text-anchor="end" fill="#6b7280" font-size="12">0</text>
              <text x="45" y="195" text-anchor="end" fill="#6b7280" font-size="12">10</text>
              <text x="45" y="135" text-anchor="end" fill="#6b7280" font-size="12">20</text>
              <text x="45" y="75" text-anchor="end" fill="#6b7280" font-size="12">30</text>
              <text x="45" y="25" text-anchor="end" fill="#6b7280" font-size="12">40</text>

              <!-- Grid lines -->
              <line x1="50" y1="190" x2="580" y2="190" stroke="#e5e7eb" stroke-width="1" stroke-dasharray="5,5"/>
              <line x1="50" y1="130" x2="580" y2="130" stroke="#e5e7eb" stroke-width="1" stroke-dasharray="5,5"/>
              <line x1="50" y1="70" x2="580" y2="70" stroke="#e5e7eb" stroke-width="1" stroke-dasharray="5,5"/>

              <!-- Khối 10 -->
              <g>
                <rect x="80" y="180" width="35" height="70" fill="#3b82f6" rx="4"/>
                <rect x="120" y="145" width="35" height="105" fill="#8b5cf6" rx="4"/>
                <text x="115" y="270" text-anchor="middle" font-size="12" fill="#4b5563">Khối 10</text>
                <text x="97" y="245" text-anchor="middle" font-size="10" fill="#6b7280">Lớp</text>
                <text x="137" y="245" text-anchor="middle" font-size="10" fill="#6b7280">HS</text>
              </g>

              <!-- Khối 11 -->
              <g>
                <rect x="200" y="165" width="35" height="85" fill="#3b82f6" rx="4"/>
                <rect x="240" y="125" width="35" height="125" fill="#8b5cf6" rx="4"/>
                <text x="235" y="270" text-anchor="middle" font-size="12" fill="#4b5563">Khối 11</text>
                <text x="217" y="245" text-anchor="middle" font-size="10" fill="#6b7280">Lớp</text>
                <text x="257" y="245" text-anchor="middle" font-size="10" fill="#6b7280">HS</text>
              </g>

              <!-- Khối 12 -->
              <g>
                <rect x="320" y="175" width="35" height="75" fill="#3b82f6" rx="4"/>
                <rect x="360" y="135" width="35" height="115" fill="#8b5cf6" rx="4"/>
                <text x="355" y="270" text-anchor="middle" font-size="12" fill="#4b5563">Khối 12</text>
                <text x="337" y="245" text-anchor="middle" font-size="10" fill="#6b7280">Lớp</text>
                <text x="377" y="245" text-anchor="middle" font-size="10" fill="#6b7280">HS</text>
              </g>

              <!-- Legend -->
              <rect x="450" y="30" width="130" height="70" fill="#f9fafb" stroke="#d1d5db" stroke-width="1" rx="6"/>
              <rect x="460" y="40" width="12" height="12" fill="#3b82f6" rx="2"/>
              <text x="480" y="48" font-size="12" fill="#4b5563">Số lớp</text>
              <rect x="460" y="65" width="12" height="12" fill="#8b5cf6" rx="2"/>
              <text x="480" y="73" font-size="12" fill="#4b5563">Số học sinh</text>
            </svg>
          </div>
          <ng-template #legend>
            <div class="chart-legend">
              <span class="legend-item">
                <span class="legend-color" style="background-color: #3b82f6;"></span>
                Số lớp
              </span>
              <span class="legend-item">
                <span class="legend-color" style="background-color: #8b5cf6;"></span>
                Số học sinh
              </span>
            </div>
          </ng-template>
        </app-chart-panel>

        <!-- Line Chart: Monthly Average Grade -->
        <app-chart-panel
          title="Điểm trung bình theo tháng"
          description="Xu hướng học tập của toàn trường"
          [showExport]="true"
          (onExport)="exportChart('monthly-grades')"
        >
          <div class="chart-container">
            <svg class="line-chart" viewBox="0 0 600 300">
              <!-- Y-axis -->
              <line x1="50" y1="20" x2="50" y2="250" stroke="#d1d5db" stroke-width="2"/>
              <!-- X-axis -->
              <line x1="50" y1="250" x2="580" y2="250" stroke="#d1d5db" stroke-width="2"/>

              <!-- Y-axis labels -->
              <text x="45" y="255" text-anchor="end" fill="#6b7280" font-size="12">0</text>
              <text x="45" y="195" text-anchor="end" fill="#6b7280" font-size="12">4</text>
              <text x="45" y="135" text-anchor="end" fill="#6b7280" font-size="12">6</text>
              <text x="45" y="75" text-anchor="end" fill="#6b7280" font-size="12">8</text>
              <text x="45" y="25" text-anchor="end" fill="#6b7280" font-size="12">10</text>

              <!-- Grid lines -->
              <line x1="50" y1="190" x2="580" y2="190" stroke="#e5e7eb" stroke-width="1" stroke-dasharray="5,5"/>
              <line x1="50" y1="130" x2="580" y2="130" stroke="#e5e7eb" stroke-width="1" stroke-dasharray="5,5"/>
              <line x1="50" y1="70" x2="580" y2="70" stroke="#e5e7eb" stroke-width="1" stroke-dasharray="5,5"/>

              <!-- Line -->
              <polyline
                points="90,160 150,140 210,130 270,110 330,100 390,130 450,150 510,140"
                fill="none"
                stroke="#3b82f6"
                stroke-width="3"
                stroke-linejoin="round"
                stroke-linecap="round"
              />

              <!-- Area under line -->
              <polygon
                points="90,160 150,140 210,130 270,110 330,100 390,130 450,150 510,140 510,250 90,250"
                fill="#3b82f6"
                opacity="0.1"
              />

              <!-- Data points -->
              <circle cx="90" cy="160" r="4" fill="#3b82f6"/>
              <circle cx="150" cy="140" r="4" fill="#3b82f6"/>
              <circle cx="210" cy="130" r="4" fill="#3b82f6"/>
              <circle cx="270" cy="110" r="4" fill="#3b82f6"/>
              <circle cx="330" cy="100" r="4" fill="#3b82f6"/>
              <circle cx="390" cy="130" r="4" fill="#3b82f6"/>
              <circle cx="450" cy="150" r="4" fill="#3b82f6"/>
              <circle cx="510" cy="140" r="4" fill="#3b82f6"/>

              <!-- X-axis labels -->
              <text x="90" y="270" text-anchor="middle" font-size="12" fill="#4b5563">T1</text>
              <text x="150" y="270" text-anchor="middle" font-size="12" fill="#4b5563">T2</text>
              <text x="210" y="270" text-anchor="middle" font-size="12" fill="#4b5563">T3</text>
              <text x="270" y="270" text-anchor="middle" font-size="12" fill="#4b5563">T4</text>
              <text x="330" y="270" text-anchor="middle" font-size="12" fill="#4b5563">T5</text>
              <text x="390" y="270" text-anchor="middle" font-size="12" fill="#4b5563">T6</text>
              <text x="450" y="270" text-anchor="middle" font-size="12" fill="#4b5563">T7</text>
              <text x="510" y="270" text-anchor="middle" font-size="12" fill="#4b5563">T8</text>
            </svg>
          </div>
        </app-chart-panel>
      </div>
    </div>
  `,
  styles: [`
    @use '../../../../core/ui/design-tokens.scss' as *;
    @use '../../../../core/ui/mixins.scss' as *;

    .dashboard {
      @include stack-vertical;
      gap: $space-8;
    }

    .page-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: $space-6;

      @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
      }

      .header-content {
        flex: 1;
      }

      .page-title {
        margin: 0;
        @include heading-2;
        color: $text-primary;
      }

      .page-subtitle {
        margin: $space-2 0 0;
        @include body-base;
        color: $text-secondary;
      }

      .header-date {
        @include body-lg;
        color: $text-secondary;
        font-weight: $font-medium;

        @media (max-width: 768px) {
          display: none;
        }
      }
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: $space-6;

      @media (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media (max-width: 640px) {
        grid-template-columns: 1fr;
      }
    }

    .charts-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
      gap: $space-6;

      @media (max-width: 1024px) {
        grid-template-columns: 1fr;
      }
    }

    .chart-container {
      width: 100%;
      height: 100%;
      min-height: 300px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: $bg-light;
      border-radius: $radius-md;
      padding: $space-4;
    }

    .bar-chart,
    .line-chart {
      width: 100%;
      height: 100%;
      max-width: 600px;
      max-height: 300px;
    }

    .chart-legend {
      display: flex;
      gap: $space-4;
      flex-wrap: wrap;

      .legend-item {
        display: flex;
        align-items: center;
        gap: $space-2;
        @include body-sm;
        color: $text-secondary;

        .legend-color {
          width: 12px;
          height: 12px;
          border-radius: $radius-sm;
        }
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminDashboardComponent {
  // Mock data with signals
  stats = signal<DashboardStats>({
    totalClasses: 45,
    totalStudents: 1234,
    totalTeachers: 78,
    totalSubjects: 15
  });

  classesByLevel = signal<ClassByLevel[]>([
    { level: 'Khối 10', classes: 15, students: 480 },
    { level: 'Khối 11', classes: 15, students: 500 },
    { level: 'Khối 12', classes: 15, students: 254 }
  ]);

  monthlyGrades = signal<MonthlyAverageGrade[]>([
    { month: 'T1', average: 6.8 },
    { month: 'T2', average: 7.2 },
    { month: 'T3', average: 7.5 },
    { month: 'T4', average: 8.0 },
    { month: 'T5', average: 8.2 },
    { month: 'T6', average: 7.8 },
    { month: 'T7', average: 7.5 },
    { month: 'T8', average: 7.2 }
  ]);

  currentDate = () => new Date();

  exportChart(chartType: string): void {
    console.log(`Exporting ${chartType} chart...`);
    // Export logic will be implemented with backend integration
  }
}
