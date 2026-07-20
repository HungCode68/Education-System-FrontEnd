import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TeachingAssignmentHistoryService } from '../../services/teaching-assignment-history.service';
import { ToastService } from '../../../../core/services/toast.service';

@Component({
  selector: 'app-assignment-history',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './assignment-history.component.html'
})
export class AssignmentHistoryComponent implements OnInit {
  private historyService = inject(TeachingAssignmentHistoryService);
  private toastService = inject(ToastService);

  historyLogs = signal<any[]>([]);
  isLoading = signal(true);
  currentPage = signal(1);
  totalPages = signal(1);
  totalElements = signal(0); // Thêm tổng số bản ghi để hiển thị cho đẹp
  pageSize = signal(15);

  filters = {
    keyword: '',
    actionType: ''
  };

  actionTypes = [
    { id: 'ASSIGNED', name: 'Phân công mới' },
    { id: 'REPLACED', name: 'Đổi giáo viên' },
    { id: 'UNASSIGNED', name: 'Hủy phân công' },
    { id: 'SUBSTITUTED', name: 'Dạy thay' }
  ];

  // Debounce tìm kiếm
  private searchTimeout: any;

  ngOnInit() {
    this.loadHistory();
  }

  loadHistory() {
    this.isLoading.set(true);
    // Nhớ truyền thêm this.pageSize() vào cuối hàm này nhé
    this.historyService.searchHistory(this.filters.keyword, this.filters.actionType, this.currentPage(), this.pageSize()).subscribe({
      next: (res) => {
        this.historyLogs.set(res.content || []);
        this.totalPages.set(res.totalPages || 1);
        this.totalElements.set(res.totalElements || 0); // Lấy tổng số bản ghi
        this.isLoading.set(false);
      },
      error: () => {
        this.toastService.error('Lỗi', 'Không thể tải lịch sử phân công.');
        this.isLoading.set(false);
      }
    });
  }

  onSearchChange(value: string) {
    this.filters.keyword = value;
    if (this.searchTimeout) clearTimeout(this.searchTimeout);
    
    this.searchTimeout = setTimeout(() => {
      this.currentPage.set(1);
      this.loadHistory();
    }, 500);
  }

  onFilterChange() {
    this.currentPage.set(1);
    this.loadHistory();
  }

  onPageSizeChange() {
    this.currentPage.set(1); 
    this.loadHistory();
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage.set(page);
      this.loadHistory();
    }
  }

  // Hàm chuyển đổi Action Type sang UI hiển thị
  getActionUI(actionType: string) {
    switch (actionType) {
      case 'ASSIGNED':
        return { label: 'Phân công mới', colorClass: 'bg-emerald-100 text-emerald-800' };
      case 'REPLACED':
        return { label: 'Đổi giáo viên', colorClass: 'bg-blue-100 text-blue-800' };
      case 'UNASSIGNED':
        return { label: 'Hủy phân công', colorClass: 'bg-red-100 text-red-800' };
      case 'SUBSTITUTED':
        return { label: 'Dạy thay', colorClass: 'bg-amber-100 text-amber-800' };
      default:
        return { label: 'Khác', colorClass: 'bg-gray-100 text-gray-800' };
    }
  }
}