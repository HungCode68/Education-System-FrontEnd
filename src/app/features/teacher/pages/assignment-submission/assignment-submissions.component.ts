import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AssignmentSubmissionService } from '../../services/assignment-submission.service';
import { ToastService } from '../../../../core/services/toast.service';
import { Location } from '@angular/common';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-assignment-submissions',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './assignment-submissions.component.html'
})
export class AssignmentSubmissionsComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private submissionService = inject(AssignmentSubmissionService);
  private toastService = inject(ToastService);
  private location = inject(Location);

  assignmentId = signal<string | null>(null);
  
  // State Danh sách
  submissions = signal<any[]>([]);
  isLoading = signal(true);
  currentPage = signal(1);
  totalPages = signal(1);
  totalElements = signal(0);
  currentFilter = signal('ALL');
  keyword = signal('');
  
  searchSubject = new Subject<string>();

  goBack() {
    this.location.back();
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.assignmentId.set(id);
        this.loadSubmissions();
      }
    });

    this.searchSubject.pipe(
      debounceTime(400),
      distinctUntilChanged()
    ).subscribe(term => {
      this.keyword.set(term);
      this.currentPage.set(1);
      this.loadSubmissions();
    });
  }

  loadSubmissions() {
    if (!this.assignmentId()) return;
    
    this.isLoading.set(true);
    this.submissionService.getSubmissions(this.assignmentId()!, this.currentPage(), this.currentFilter(), this.keyword()).subscribe({
      next: (res) => {
        this.submissions.set(res.content || []);
        this.totalPages.set(res.totalPages || 1);
        this.totalElements.set(res.totalElements || 0);
        this.isLoading.set(false);
      },
      error: () => {
        this.toastService.error('Lỗi', 'Không thể tải danh sách bài nộp');
        this.isLoading.set(false);
      }
    });
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage.set(page);
      this.loadSubmissions();
    }
  }

  onFilterChange(event: any) {
    this.currentFilter.set(event.target.value);
    this.currentPage.set(1);
    this.loadSubmissions();
  }

  onSearch(event: any) {
    this.searchSubject.next(event.target.value);
  }

  // Tiện ích
  getStatusLabel(status: string, isLate: boolean): {text: string, class: string} {
    if (status === 'GRADED') return { text: 'Đã chấm', class: 'bg-green-100 text-green-700' };
    if (status === 'SUBMITTED') return isLate 
        ? { text: 'Nộp muộn', class: 'bg-amber-100 text-amber-700' }
        : { text: 'Đã nộp', class: 'bg-blue-100 text-blue-700' };
    if (status === 'LATE') return { text: 'Nộp muộn', class: 'bg-amber-100 text-amber-700' };
    if (status === 'IN_PROGRESS') return { text: 'Đang làm', class: 'bg-gray-100 text-gray-600' };
    return { text: 'Chưa nộp', class: 'bg-red-50 text-red-600 border border-red-200' };
  }

  formatBytes(bytes: number) {
    if (!+bytes) return '0 Bytes';
    const k = 1024, dm = 2, sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
  }
}