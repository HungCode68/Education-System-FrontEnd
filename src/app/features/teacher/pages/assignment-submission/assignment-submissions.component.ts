import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AssignmentSubmissionService } from '../../services/assignment-submission.service';
import { ToastService } from '../../../../core/services/toast.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-assignment-submissions',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './assignment-submissions.component.html'
})
export class AssignmentSubmissionsComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private submissionService = inject(AssignmentSubmissionService);
  private toastService = inject(ToastService);
  private fb = inject(FormBuilder);
  private location = inject(Location);

  assignmentId = signal<string | null>(null);
  
  // State Danh sách
  submissions = signal<any[]>([]);
  isLoading = signal(true);
  currentPage = signal(1);
  totalPages = signal(1);
  totalElements = signal(0);
  currentFilter = signal('ALL');

  // State Modal Chấm bài
  isGradingModalOpen = signal(false);
  isGrading = signal(false);
  isAutoGrading = signal(false);
  isLoadingAttachments = signal(false);
  
  selectedSubmission = signal<any | null>(null);
  attachments = signal<any[]>([]);
  gradeForm!: FormGroup;

  // --- STATE CHI TIẾT BÀI LÀM ---
  answers = signal<any[]>([]);
  isLoadingAnswers = signal(false);

  goBack() {
    this.location.back();
  }

  ngOnInit() {
    this.gradeForm = this.fb.group({
      score: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
      feedback: ['']
    });

    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.assignmentId.set(id);
        this.loadSubmissions();
      }
    });
  }

  loadSubmissions() {
    this.isLoading.set(true);
    this.submissionService.getSubmissions(this.assignmentId()!, this.currentPage(), this.currentFilter()).subscribe({
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

  // Mở modal chấm điểm
  openGradeModal(sub: any) {
    this.selectedSubmission.set(sub);
    this.isGradingModalOpen.set(true);
    
    this.gradeForm.patchValue({
      score: sub.score !== null ? sub.score : '',
      feedback: sub.teacherFeedback || ''
    });

    // Tải danh sách file đính kèm
    this.isLoadingAttachments.set(true);
    this.submissionService.getAttachments(sub.id).subscribe({
      next: (res) => {
        this.attachments.set(res || []);
        this.isLoadingAttachments.set(false);
      },
      error: () => this.isLoadingAttachments.set(false)
    });

    // TẢI CHI TIẾT TỪNG CÂU TRẢ LỜI 
    this.isLoadingAnswers.set(true);
    this.submissionService.getSubmissionAnswers(sub.id).subscribe({
      next: (res) => {
        this.answers.set(res || []);
        this.isLoadingAnswers.set(false);
      },
      error: () => {
        this.toastService.error('Lỗi', 'Không tải được chi tiết bài làm');
        this.isLoadingAnswers.set(false);
      }
    });
  }

  closeGradeModal() {
    this.isGradingModalOpen.set(false);
    this.selectedSubmission.set(null);
    this.attachments.set([]);
    this.answers.set([]);
    this.gradeForm.reset();
  }

  submitGrade() {
    if (this.gradeForm.invalid || !this.selectedSubmission()) {
      this.gradeForm.markAllAsTouched();
      return;
    }

    this.isGrading.set(true);
    this.submissionService.gradeSubmission(this.selectedSubmission().id, this.gradeForm.value).subscribe({
      next: () => {
        this.toastService.success('Thành công', 'Đã chấm điểm & gửi thông báo cho học sinh!');
        this.isGrading.set(false);
        this.closeGradeModal();
        this.loadSubmissions(); // Load lại để cập nhật điểm trên bảng
      },
      error: (err) => {
        this.toastService.error('Lỗi', err.error?.message || 'Chấm điểm thất bại');
        this.isGrading.set(false);
      }
    });
  }

  // Kích hoạt chấm tự động phần trắc nghiệm
  autoGradeMultipleChoice() {
    if (!this.selectedSubmission()) return;
    
    this.isAutoGrading.set(true);
    this.submissionService.triggerAutoGrade(this.selectedSubmission().id).subscribe({
      next: (res) => {
        this.toastService.success('Thành công', `Đã chấm tự động! Điểm phần trắc nghiệm: ${res.totalScore}`);
        
        // Cập nhật điểm vừa chấm được vào Form để GV xem
        this.gradeForm.patchValue({ score: res.totalScore });
        
        // Gọi lại API load chi tiết bài làm để giao diện cập nhật ngay lập tức các viền Xanh/Đỏ
        this.isLoadingAnswers.set(true);
        this.submissionService.getSubmissionAnswers(this.selectedSubmission().id).subscribe({
          next: (answersRes) => {
            this.answers.set(answersRes || []);
            this.isLoadingAnswers.set(false);
          }
        });

        this.isAutoGrading.set(false);
      },
      error: (err) => {
        this.toastService.error('Lỗi', err.error?.message || 'Không thể chấm điểm tự động');
        this.isAutoGrading.set(false);
      }
    });
  }

  // Tiện ích
  getStatusLabel(status: string, isLate: boolean): {text: string, class: string} {
    if (status === 'graded') return { text: 'Đã chấm', class: 'bg-green-100 text-green-700' };
    if (status === 'submitted') return isLate 
        ? { text: 'Nộp muộn', class: 'bg-amber-100 text-amber-700' }
        : { text: 'Đã nộp', class: 'bg-blue-100 text-blue-700' };
    if (status === 'draft') return { text: 'Đang nháp', class: 'bg-gray-100 text-gray-600' };
    return { text: 'Chưa nộp', class: 'bg-red-50 text-red-600 border border-red-200' };
  }

  formatBytes(bytes: number) {
    if (!+bytes) return '0 Bytes';
    const k = 1024, dm = 2, sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
  }
}