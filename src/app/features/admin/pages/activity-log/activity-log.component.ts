import { Component, OnInit, inject, signal, computed, DestroyRef, ChangeDetectionStrategy } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule, DOCUMENT } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, interval, tap } from 'rxjs';
import { ActivityLogService } from '../../../../modules/system/services/activity-log.service';
import { ActivityLog, LogStatus } from '../../../../modules/system/models/activity-log.model';
import { ToastService } from '../../../../core/services/toast.service';

const AUTO_REFRESH_MS = 5000;

@Component({
  selector: 'app-activity-log',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './activity-log.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActivityLogComponent implements OnInit {
  private logService = inject(ActivityLogService);
  private destroyRef = inject(DestroyRef);
  private toastService = inject(ToastService);
  private document = inject(DOCUMENT);

  logs = signal<ActivityLog[]>([]);
  totalElements = signal(0);
  currentPage = signal(1);
  pageSize = signal(20);
  isLoading = signal(false);
  isRefreshing = signal(false);
  autoRefreshEnabled = signal(true);
  lastRefreshedAt = signal<Date | null>(null);
  newLogIds = signal<Set<number>>(new Set());

  totalPages = computed(() => Math.ceil(this.totalElements() / this.pageSize()) || 1);
  startIndex = computed(() =>
    this.totalElements() === 0 ? 0 : (this.currentPage() - 1) * this.pageSize() + 1
  );
  endIndex = computed(() => Math.min(this.currentPage() * this.pageSize(), this.totalElements()));

  searchControl = new FormControl('');
  emailControl = new FormControl('');
  moduleControl = new FormControl('');
  actionControl = new FormControl('');
  statusControl = new FormControl<LogStatus | ''>('');
  startDateControl = new FormControl('');
  endDateControl = new FormControl('');

  isDetailModalOpen = signal(false);
  isDetailLoading = signal(false);
  selectedLog = signal<ActivityLog | null>(null);
  formattedJsonDetails = signal('');
  formattedOldValue = signal('');
  formattedNewValue = signal('');

  /** Module thực tế từ `@LogActivity` trên backend mới */
  readonly modules = [
    'AUTH',
    'DEPARTMENT',
    'ROLE',
    'PERMISSION',
    'USER',
    'STAFF',
    'STUDENT',
    'TERM',
    'COURSE',
    'CLASS',
    'ROOM',
    'SCHEDULE',
    'ENROLLMENT',
    'TEACHING',
    'LMS',
    'ATTENDANCE',
    'ANNOUNCEMENT',
    'REPORTING'
  ];

  readonly actions = [
    'LOGIN',
    'LOGOUT',
    'REFRESH',
    'CREATE',
    'UPDATE',
    'DELETE',
    'ASSIGN',
    'PROVISION',
    'BULK_CREATE',
    'UPLOAD_FILE',
    'ADD_LINK',
    'START',
    'SUBMIT',
    'GRADE',
    'SYNC',
    'SUBSTITUTE',
    'SUBSTITUTE_UPDATE',
    'SCHEDULE_ASSIGN',
    'SCHEDULE_ASSIGN_UPDATE',
    'SCHEDULE_ASSIGN_DELETE'
  ];

  private highlightTimeout: ReturnType<typeof setTimeout> | null = null;

  ngOnInit() {
    this.setupFilters();
    this.setupAutoRefresh();
    this.loadData(1);

    this.destroyRef.onDestroy(() => {
      if (this.highlightTimeout) clearTimeout(this.highlightTimeout);
    });
  }

  private setupFilters() {
    this.searchControl.valueChanges
      .pipe(debounceTime(400), distinctUntilChanged(), takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.loadData(1));

    this.emailControl.valueChanges
      .pipe(debounceTime(400), distinctUntilChanged(), takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.loadData(1));

    [this.moduleControl, this.actionControl, this.statusControl, this.startDateControl, this.endDateControl]
      .forEach(control =>
        control.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => this.loadData(1))
      );
  }

  private setupAutoRefresh() {
    interval(AUTO_REFRESH_MS)
      .pipe(
        filter(() => this.autoRefreshEnabled() && !this.isDetailModalOpen()),
        filter(() => this.document.visibilityState === 'visible'),
        tap(() => this.refreshSilently()),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe();
  }

  /** Backend lưu email Gmail vào actor_name — ưu tiên lọc email khi có nhập */
  private buildKeyword(): string | undefined {
    const email = this.emailControl.value?.trim();
    if (email) return email;
    return this.searchControl.value?.trim() || undefined;
  }

  loadData(pageNo: number, options: { silent?: boolean } = {}) {
    const { silent = false } = options;
    const previousIds = silent ? new Set(this.logs().map(log => log.id)) : null;

    if (silent) {
      this.isRefreshing.set(true);
    } else {
      this.isLoading.set(true);
      this.newLogIds.set(new Set());
    }

    this.currentPage.set(pageNo);

    const keyword = this.buildKeyword();
    const module = this.moduleControl.value || undefined;
    const action = this.actionControl.value || undefined;
    const status = (this.statusControl.value || undefined) as LogStatus | undefined;
    const start = this.startDateControl.value || undefined;
    const end = this.endDateControl.value || undefined;

    this.logService.getAllLogs(keyword, module, action, status, start, end, pageNo - 1, this.pageSize()).subscribe({
      next: res => {
        this.logs.set(res.content);
        this.totalElements.set(res.totalElements);
        this.lastRefreshedAt.set(new Date());

        if (silent && previousIds && pageNo === 1) {
          const incoming = res.content
            .filter(log => !previousIds.has(log.id))
            .map(log => log.id);
          if (incoming.length > 0) {
            this.newLogIds.set(new Set(incoming));
            if (this.highlightTimeout) clearTimeout(this.highlightTimeout);
            this.highlightTimeout = setTimeout(() => this.newLogIds.set(new Set()), 4000);
          }
        }

        this.isLoading.set(false);
        this.isRefreshing.set(false);
      },
      error: () => {
        this.isLoading.set(false);
        this.isRefreshing.set(false);
        if (!silent) {
          this.toastService.error('Lỗi', 'Không thể tải nhật ký hoạt động. Kiểm tra quyền LOG_VIEW.');
        }
      }
    });
  }

  refreshSilently() {
    if (!this.isLoading()) {
      this.loadData(this.currentPage(), { silent: true });
    }
  }

  toggleAutoRefresh() {
    this.autoRefreshEnabled.update(enabled => !enabled);
  }

  manualRefresh() {
    this.loadData(this.currentPage());
  }

  isNewLog(id: number): boolean {
    return this.newLogIds().has(id);
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages()) {
      this.loadData(page);
    }
  }

  openDetailModal(log: ActivityLog) {
    this.isDetailModalOpen.set(true);
    this.isDetailLoading.set(true);
    this.selectedLog.set(log);
    this.formattedJsonDetails.set('');
    this.formattedOldValue.set('');
    this.formattedNewValue.set('');

    this.logService.getById(log.id).subscribe({
      next: detail => {
        this.selectedLog.set(detail);
        this.formattedJsonDetails.set(this.formatDetails(detail.details));
        this.formattedOldValue.set(this.formatDetails(detail.oldValue));
        this.formattedNewValue.set(this.formatDetails(detail.newValue));
        this.isDetailLoading.set(false);
      },
      error: () => {
        this.formattedJsonDetails.set(this.formatDetails(log.details));
        this.formattedOldValue.set(this.formatDetails(log.oldValue));
        this.formattedNewValue.set(this.formatDetails(log.newValue));
        this.isDetailLoading.set(false);
        this.toastService.error('Lỗi', 'Không thể tải chi tiết nhật ký.');
      }
    });
  }

  closeDetailModal() {
    this.isDetailModalOpen.set(false);
    this.isDetailLoading.set(false);
    this.selectedLog.set(null);
    this.formattedJsonDetails.set('');
    this.formattedOldValue.set('');
    this.formattedNewValue.set('');
  }

  copyToClipboard() {
    navigator.clipboard.writeText(this.formattedJsonDetails());
    this.toastService.success('Đã copy', 'Đã sao chép nội dung chi tiết vào bộ nhớ đệm.');
  }

  formatDetails(details?: string | null): string {
    if (!details) return 'Không có dữ liệu chi tiết (details = NULL).';
    try {
      return JSON.stringify(JSON.parse(details), null, 2);
    } catch {
      return details;
    }
  }

  statusLabel(status: LogStatus): string {
    const labels: Record<LogStatus, string> = {
      success: 'Thành công',
      failure: 'Thất bại',
      error: 'Lỗi hệ thống'
    };
    return labels[status] ?? status;
  }

  statusClass(status: LogStatus): string {
    const classes: Record<LogStatus, string> = {
      success: 'bg-green-50 text-green-700 border-green-200',
      failure: 'bg-amber-50 text-amber-700 border-amber-200',
      error: 'bg-red-50 text-red-700 border-red-200'
    };
    return classes[status] ?? 'bg-slate-50 text-slate-700 border-slate-200';
  }

  displayValue(value?: string | number | null): string {
    if (value === null || value === undefined || value === '') return '—';
    return String(value);
  }
}
