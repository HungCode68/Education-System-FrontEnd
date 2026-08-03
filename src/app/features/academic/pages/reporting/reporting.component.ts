import { Component, OnInit, inject, signal, computed, DestroyRef, ChangeDetectionStrategy } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ReportingService } from '../../services/reporting.service';
import {
  TrainingOverview,
  ReportClassMetrics,
  ReportSummary
} from '../../models/reporting.model';
import { ToastService } from '../../../../core/services/toast.service';

@Component({
  selector: 'app-reporting',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reporting.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReportingComponent implements OnInit {
  private reportingService = inject(ReportingService);
  private destroyRef = inject(DestroyRef);
  private toastService = inject(ToastService);

  // Collapsible section for Range Summary
  isRangeSectionOpen = signal<boolean>(false);

  // Dates (YYYY-MM-DD for backend API and input[type="date"])
  selectedDate = signal<string>(this.getTodayString());
  rangeStartDate = signal<string>(this.getDaysAgoString(30));
  rangeEndDate = signal<string>(this.getTodayString());

  // Formatted date displays (dd/MM/yyyy)
  selectedDateFormatted = computed(() => this.formatDateVn(this.selectedDate()));
  rangeStartDateFormatted = computed(() => this.formatDateVn(this.rangeStartDate()));
  rangeEndDateFormatted = computed(() => this.formatDateVn(this.rangeEndDate()));

  // Search
  searchControl = new FormControl('');

  // Data Signals
  overview = signal<TrainingOverview | null>(null);
  classMetrics = signal<ReportClassMetrics[]>([]);
  summary = signal<ReportSummary | null>(null);

  // Loading States
  isLoadingDashboard = signal<boolean>(false);
  isLoadingSummary = signal<boolean>(false);
  isSyncingCenter = signal<boolean>(false);
  isSyncingAllClasses = signal<boolean>(false);
  syncingClassId = signal<number | null>(null);

  // Computed Filtered Classes
  filteredClassMetrics = computed(() => {
    const list = this.classMetrics();
    const query = (this.searchControl.value || '').trim().toLowerCase();

    if (!query) return list;

    return list.filter(m => 
      (m.className && m.className.toLowerCase().includes(query)) ||
      (m.classCode && m.classCode.toLowerCase().includes(query))
    );
  });

  // Computed Averages across classes
  overallAvgAttendance = computed(() => {
    const list = this.classMetrics();
    if (list.length === 0) return 0;
    const sum = list.reduce((acc, curr) => acc + (Number(curr.averageAttendanceRate) || 0), 0);
    return Math.round((sum / list.length) * 10) / 10;
  });

  overallAvgScore = computed(() => {
    const list = this.classMetrics();
    if (list.length === 0) return 0;
    const sum = list.reduce((acc, curr) => acc + (Number(curr.averageAssignmentScore) || 0), 0);
    return Math.round((sum / list.length) * 10) / 10;
  });

  totalDroppedInClasses = computed(() => {
    return this.classMetrics().reduce((acc, curr) => acc + (curr.droppedStudents || 0), 0);
  });

  ngOnInit() {
    this.setupSearch();
    this.loadDashboardData();
  }

  toggleRangeSection() {
    const nextState = !this.isRangeSectionOpen();
    this.isRangeSectionOpen.set(nextState);
    if (nextState && !this.summary()) {
      this.loadSummaryRangeData();
    }
  }

  private setupSearch() {
    this.searchControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe();
  }

  loadDashboardData() {
    this.isLoadingDashboard.set(true);
    const date = this.selectedDate();

    this.reportingService.getTrainingDashboard(date).subscribe({
      next: (data) => {
        this.overview.set(data.centerOverview || null);
        this.classMetrics.set(data.classMetricsList || []);
        this.isLoadingDashboard.set(false);
      },
      error: (err) => {
        this.toastService.error('Lỗi', 'Không thể tải báo cáo đào tạo: ' + (err.error?.message || err.message));
        this.isLoadingDashboard.set(false);
      }
    });
  }

  loadSummaryRangeData() {
    const start = this.rangeStartDate();
    const end = this.rangeEndDate();

    if (!start || !end) return;

    this.isLoadingSummary.set(true);
    this.reportingService.getSummaryReportBetween(start, end).subscribe({
      next: (data) => {
        this.summary.set(data);
        this.isLoadingSummary.set(false);
      },
      error: (err) => {
        this.toastService.error('Lỗi', 'Không thể tải dữ liệu biến động tổng hợp: ' + (err.error?.message || err.message));
        this.isLoadingSummary.set(false);
      }
    });
  }

  onDateChange(event: Event) {
    const val = (event.target as HTMLInputElement).value;
    if (val) {
      this.selectedDate.set(val);
      this.loadDashboardData();
    }
  }

  onRangeStartChange(event: Event) {
    const val = (event.target as HTMLInputElement).value;
    if (val) {
      this.rangeStartDate.set(val);
      this.loadSummaryRangeData();
    }
  }

  onRangeEndChange(event: Event) {
    const val = (event.target as HTMLInputElement).value;
    if (val) {
      this.rangeEndDate.set(val);
      this.loadSummaryRangeData();
    }
  }

  syncCenterStatistics() {
    this.isSyncingCenter.set(true);
    this.reportingService.syncDailyReport(this.selectedDate()).subscribe({
      next: (res) => {
        this.toastService.success('Thành công', res.message || 'Đồng bộ dữ liệu trung tâm thành công!');
        this.isSyncingCenter.set(false);
        this.loadDashboardData();
      },
      error: (err) => {
        this.toastService.error('Lỗi', 'Đồng bộ dữ liệu trung tâm thất bại: ' + (err.error?.message || err.message));
        this.isSyncingCenter.set(false);
      }
    });
  }

  syncAllClasses() {
    this.isSyncingAllClasses.set(true);
    this.reportingService.syncClassMetrics().subscribe({
      next: (res) => {
        this.toastService.success('Thành công', res.message || 'Đồng bộ hiệu suất tất cả lớp học thành công!');
        this.isSyncingAllClasses.set(false);
        this.loadDashboardData();
      },
      error: (err) => {
        this.toastService.error('Lỗi', 'Đồng bộ hiệu suất lớp học thất bại: ' + (err.error?.message || err.message));
        this.isSyncingAllClasses.set(false);
      }
    });
  }

  syncSingleClass(classId: number) {
    this.syncingClassId.set(classId);
    this.reportingService.syncClassMetrics(classId).subscribe({
      next: (res) => {
        this.toastService.success('Thành công', res.message || `Đồng bộ hiệu suất cho lớp ID #${classId} thành công!`);
        this.syncingClassId.set(null);
        this.loadDashboardData();
      },
      error: (err) => {
        this.toastService.error('Lỗi', 'Đồng bộ hiệu suất lớp thất bại: ' + (err.error?.message || err.message));
        this.syncingClassId.set(null);
      }
    });
  }

  // --- UI Helpers ---

  formatDateVn(dateStr?: string): string {
    if (!dateStr) return '';
    const parts = dateStr.split('-');
    if (parts.length === 3) {
      return `${parts[2]}/${parts[1]}/${parts[0]}`; // dd/mm/yyyy
    }
    return dateStr;
  }

  getAttendanceBg(rate: number): string {
    const val = Number(rate) || 0;
    if (val >= 90) return 'bg-emerald-500';
    if (val >= 75) return 'bg-amber-500';
    return 'bg-rose-500';
  }

  getAttendanceBadgeClass(rate: number): string {
    const val = Number(rate) || 0;
    if (val >= 90) return 'bg-emerald-50 text-emerald-700 border-emerald-200';
    if (val >= 75) return 'bg-amber-50 text-amber-700 border-amber-200';
    return 'bg-rose-50 text-rose-700 border-rose-200';
  }

  getScoreBadgeClass(score: number): string {
    const val = Number(score) || 0;
    if (val >= 8.0) return 'bg-indigo-50 text-indigo-700 border-indigo-200';
    if (val >= 6.5) return 'bg-blue-50 text-blue-700 border-blue-200';
    if (val >= 5.0) return 'bg-amber-50 text-amber-700 border-amber-200';
    return 'bg-rose-50 text-rose-700 border-rose-200';
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
