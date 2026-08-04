import { Component, OnInit, inject, signal, computed, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ReportsService } from '../../../../modules/reporting/services/reports.service';
import { ReportCenterStatistics, ReportSummary } from '../../../../modules/reporting/models/reports.model';
import { ToastService } from '../../../../core/services/toast.service';

@Component({
  selector: 'app-admin-reporting',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './admin-reporting.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminReportingComponent implements OnInit {
  private reportsService = inject(ReportsService);
  private toastService = inject(ToastService);

  // Selected single date for center statistics snapshot (YYYY-MM-DD)
  selectedDate = signal<string>(this.getTodayString());
  selectedDateFormatted = computed(() => this.formatDateVn(this.selectedDate()));

  // Range dates for aggregate KPI statistics (YYYY-MM-DD)
  rangeStartDate = signal<string>(this.getDaysAgoString(30));
  rangeEndDate = signal<string>(this.getTodayString());
  rangeStartDateFormatted = computed(() => this.formatDateVn(this.rangeStartDate()));
  rangeEndDateFormatted = computed(() => this.formatDateVn(this.rangeEndDate()));

  // Data signals from report_center_statistics
  dailySnapshot = signal<ReportCenterStatistics | null>(null);
  rangeSummary = signal<ReportSummary | null>(null);

  // Loading & Syncing states
  isLoadingSnapshot = signal<boolean>(false);
  isLoadingRange = signal<boolean>(false);
  isSyncing = signal<boolean>(false);

  ngOnInit() {
    this.loadSnapshotData();
    this.loadRangeData();
  }

  loadSnapshotData() {
    this.isLoadingSnapshot.set(true);
    const date = this.selectedDate();

    this.reportsService.getReportByDate(date).subscribe({
      next: (data) => {
        this.dailySnapshot.set(data);
        this.isLoadingSnapshot.set(false);
      },
      error: () => {
        // Fallback to latest report if selected date has no record yet
        this.reportsService.getLatestReport().subscribe({
          next: (latest) => {
            this.dailySnapshot.set(latest);
            this.isLoadingSnapshot.set(false);
          },
          error: (err) => {
            this.toastService.error('Lỗi', 'Không thể tải số liệu thống kê trung tâm: ' + (err.error?.message || err.message));
            this.isLoadingSnapshot.set(false);
          }
        });
      }
    });
  }

  loadRangeData() {
    const start = this.rangeStartDate();
    const end = this.rangeEndDate();

    if (!start || !end) return;

    this.isLoadingRange.set(true);
    this.reportsService.getSummaryReportBetween(start, end).subscribe({
      next: (summary) => {
        this.rangeSummary.set(summary);
        this.isLoadingRange.set(false);
      },
      error: (err) => {
        this.toastService.error('Lỗi', 'Không thể tải dữ liệu biến động tổng hợp: ' + (err.error?.message || err.message));
        this.isLoadingRange.set(false);
      }
    });
  }

  openPicker(element: HTMLInputElement) {
    try {
      if ('showPicker' in element && typeof element.showPicker === 'function') {
        element.showPicker();
      } else {
        element.click();
      }
    } catch (e) {
      element.click();
    }
  }

  onDatePickerChange(event: Event, target: 'selected' | 'start' | 'end') {
    const val = (event.target as HTMLInputElement).value;
    if (val) {
      if (target === 'selected') {
        this.selectedDate.set(val);
        this.loadSnapshotData();
      } else if (target === 'start') {
        this.rangeStartDate.set(val);
        this.loadRangeData();
      } else if (target === 'end') {
        this.rangeEndDate.set(val);
        this.loadRangeData();
      }
    }
  }

  onDateTextInput(event: Event, target: 'selected' | 'start' | 'end') {
    const input = event.target as HTMLInputElement;
    let val = input.value.replace(/\D/g, '');
    if (val.length >= 2) val = val.substring(0, 2) + '/' + val.substring(2);
    if (val.length >= 5) val = val.substring(0, 5) + '/' + val.substring(5, 9);
    input.value = val;

    if (val.length === 10) {
      const parts = val.split('/');
      if (parts.length === 3) {
        const day = parts[0];
        const month = parts[1];
        const year = parts[2];
        const iso = `${year}-${month}-${day}`;
        if (!isNaN(Date.parse(iso))) {
          if (target === 'selected') {
            this.selectedDate.set(iso);
            this.loadSnapshotData();
          } else if (target === 'start') {
            this.rangeStartDate.set(iso);
            this.loadRangeData();
          } else if (target === 'end') {
            this.rangeEndDate.set(iso);
            this.loadRangeData();
          }
        }
      }
    }
  }

  syncDailyReport() {
    this.isSyncing.set(true);
    this.reportsService.syncDailyReport(this.selectedDate()).subscribe({
      next: (res) => {
        this.toastService.success('Thành công', res?.message || 'Đồng bộ số liệu thống kê trung tâm thành công!');
        this.isSyncing.set(false);
        this.loadSnapshotData();
        this.loadRangeData();
      },
      error: (err) => {
        this.toastService.error('Thất bại', 'Đồng bộ dữ liệu thất bại: ' + (err.error?.message || err.message));
        this.isSyncing.set(false);
      }
    });
  }

  formatDateVn(dateStr?: string): string {
    if (!dateStr) return '';
    const parts = dateStr.split('-');
    if (parts.length === 3) {
      return `${parts[2]}/${parts[1]}/${parts[0]}`;
    }
    return dateStr;
  }

  private getTodayString(): string {
    const d = new Date();
    return d.toISOString().split('T')[0];
  }

  private getDaysAgoString(days: number): string {
    const d = new Date();
    d.setDate(d.getDate() - days);
    return d.toISOString().split('T')[0];
  }
}
