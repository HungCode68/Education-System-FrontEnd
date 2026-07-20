import { Component, OnInit, inject, signal, computed, DestroyRef } from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ActivityLogService } from '../../services/activity-log.service';
import { ActivityLog } from '../../models/activity-log.model';
import { ToastService } from '../../../../core/services/toast.service';

@Component({
  selector: 'app-activity-log',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './activity-log.component.html'
})
export class ActivityLogComponent implements OnInit {
  private logService = inject(ActivityLogService);
  private destroyRef = inject(DestroyRef);
  private toastService = inject(ToastService);

  // --- STATE DANH SÁCH ---
  logs = signal<ActivityLog[]>([]);
  totalElements = signal(0);
  currentPage = signal(1); 
  pageSize = signal(20); // Mặc định hiển thị 20 dòng vì log thường rất dài
  isLoading = signal(false);

  totalPages = computed(() => Math.ceil(this.totalElements() / this.pageSize()));
  startIndex = computed(() => this.totalElements() === 0 ? 0 : (this.currentPage() - 1) * this.pageSize() + 1);
  endIndex = computed(() => Math.min(this.currentPage() * this.pageSize(), this.totalElements()));

  // --- STATE BỘ LỌC ---
  searchControl = new FormControl('');
  moduleControl = new FormControl('');
  statusControl = new FormControl('');
  startDateControl = new FormControl('');
  endDateControl = new FormControl('');

  // --- STATE MODAL CHI TIẾT ---
  isDetailModalOpen = signal(false);
  selectedLog = signal<ActivityLog | null>(null);
  formattedJsonDetails = signal<string>('');

  // Các Module phổ biến (Có thể gọi từ API nếu sau này backend có cung cấp)
  readonly modules = ['USER', 'ROLE', 'PERMISSION', 'DEPARTMENT', 'TEACHER', 'STUDENT', 'PHYSICAL_CLASS', 'ONLINE_CLASS'];

  ngOnInit() {
    this.setupFilters();
    this.loadData(1);
  }

  private setupFilters() {
    this.searchControl.valueChanges.pipe(debounceTime(400), distinctUntilChanged(), takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.loadData(1));
    this.moduleControl.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => this.loadData(1));
    this.statusControl.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => this.loadData(1));
    this.startDateControl.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => this.loadData(1));
    this.endDateControl.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => this.loadData(1));
  }

  loadData(pageNo: number) {
    this.isLoading.set(true);
    this.currentPage.set(pageNo);

    const keyword = this.searchControl.value || undefined;
    const module = this.moduleControl.value || undefined;
    const status = this.statusControl.value || undefined;
    const start = this.startDateControl.value || undefined;
    const end = this.endDateControl.value || undefined;

    this.logService.getAllLogs(keyword, module, undefined, status, start, end, pageNo - 1, this.pageSize()).subscribe({
      next: (res) => {
        this.logs.set(res.content);
        this.totalElements.set(res.totalElements);
        this.isLoading.set(false);
      },
      error: () => this.isLoading.set(false)
    });
  }

  changePage(page: number) {
    if (page >= 1 && (this.totalPages() === 0 || page <= this.totalPages())) {
      this.loadData(page);
    }
  }

  // --- XỬ LÝ MODAL CHI TIẾT ---
  openDetailModal(log: ActivityLog) {
    this.selectedLog.set(log);
    
    // Xử lý làm đẹp chuỗi JSON
    if (log.details) {
      try {
        const parsed = JSON.parse(log.details);
        this.formattedJsonDetails.set(JSON.stringify(parsed, null, 2));
      } catch (e) {
        this.formattedJsonDetails.set(log.details); // Nếu không phải JSON chuẩn thì in thô
      }
    } else {
      this.formattedJsonDetails.set('Không có dữ liệu chi tiết.');
    }
    
    this.isDetailModalOpen.set(true);
  }

  closeDetailModal() {
    this.isDetailModalOpen.set(false);
    this.selectedLog.set(null);
    this.formattedJsonDetails.set('');
  }

  copyToClipboard() {
    navigator.clipboard.writeText(this.formattedJsonDetails());
    this.toastService.success('Đã copy', 'Đã sao chép chuỗi JSON vào bộ nhớ đệm!');
  }
}