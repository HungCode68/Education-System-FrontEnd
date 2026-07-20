import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';
import { DepartmentManagementService } from '../../services/department-management.service';
import { TeachingAssignmentService } from '../../services/teaching-assignment.service';
import { TeachingSubstitutionService } from '../../services/teaching-substitution.service';
import { ToastService } from '../../../../core/services/toast.service';

@Component({
  selector: 'app-department-substitution',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './department-substitution.component.html'
})
export class DepartmentSubstitutionComponent implements OnInit {
  private fb = inject(FormBuilder);
  private deptService = inject(DepartmentManagementService);
  private assignmentService = inject(TeachingAssignmentService);
  private subService = inject(TeachingSubstitutionService);
  private toastService = inject(ToastService);

  myDepartmentId = signal<string | null>(null);
  
  // Dữ liệu Dropdown
  teachers = signal<any[]>([]);
  activeAssignments = signal<any[]>([]); // Danh sách lớp để chọn khi dạy thay
  
  // Dữ liệu Bảng
  substitutions = signal<any[]>([]);
  isLoading = signal(true);
  currentPage = signal(1);
  totalPages = signal(1);

  // Form & Modal
  isCreateModalOpen = signal(false);
  isSubmitting = signal(false);
  subForm!: FormGroup;

  // --- STATE MODAL HỦY DẠY THAY ---
  isCancelModalOpen = signal(false);
  subToCancel = signal<any | null>(null);
  isCanceling = signal(false);

  // --- STATE BỘ LỌC ---
  schoolYears = signal<any[]>([]);
  semesters = signal<any[]>([]);

  filters = {
    schoolYearId: '',
    semesterId: '',
    keyword: '' // Dùng để tìm kiếm tên GV dạy thay
  };

  ngOnInit() {
    this.subForm = this.fb.group({
      assignmentId: ['', Validators.required],
      subTeacherId: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      reason: ['']
    });
    this.loadInitialData();
  }

  loadInitialData() {
    this.isLoading.set(true);
    this.deptService.getMyProfile().subscribe(profile => {
      if (profile.departmentId) {
        this.myDepartmentId.set(profile.departmentId);
        
        // Lấy danh sách GV trong tổ
        this.deptService.getDepartmentMembers(profile.departmentId).subscribe(res => {
          this.teachers.set(res.content || []);
        });

        // Lấy các phân công hiện tại để bỏ vào Dropdown (Size lớn để lấy hết)
        this.assignmentService.getDepartmentAssignments(profile.departmentId, {}, 1).subscribe(res => {
           // Chỉ lấy những phân công đang active
           const actives = (res.content || []).filter((a: any) => a.status === 'active');
           this.activeAssignments.set(actives);
        });

        this.loadSubstitutions();
      }
    });
    this.assignmentService.getSchoolYears().subscribe(res => this.schoolYears.set(res.content || []));
  }

  loadSubstitutions() {
    if (!this.myDepartmentId()) return;
    this.isLoading.set(true);
    
    this.subService.getDepartmentSubstitutions(this.myDepartmentId()!, this.filters, this.currentPage()).subscribe({
      next: (res) => {
        const activeSubs = (res.content || []).filter((item: any) => item.status !== 'cancelled');
        
        this.substitutions.set(activeSubs); // Đổ dữ liệu đã lọc vào state
        this.totalPages.set(res.totalPages || 1);
        this.isLoading.set(false);
      },
      error: () => {
        this.toastService.error('Lỗi', 'Không thể tải danh sách phân công dạy thay.');
        this.isLoading.set(false);
      }
    });
  }

  // --- LOGIC BỘ LỌC ---
  onFilterSchoolYearChange() {
    this.filters.semesterId = ''; // Reset học kỳ khi đổi năm học
    if (this.filters.schoolYearId) {
      this.assignmentService.getSemesters(this.filters.schoolYearId).subscribe(res => this.semesters.set(res.content || res));
    } else {
      this.semesters.set([]);
    }
    this.applyFilter();
  }

  applyFilter() {
    this.currentPage.set(1);
    this.loadSubstitutions();
  }

  resetFilters() {
    this.filters = { schoolYearId: '', semesterId: '', keyword: '' };
    this.semesters.set([]);
    this.applyFilter();
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage.set(page);
      this.loadSubstitutions();
    }
  }

  // --- LOGIC FORM ---
  openCreateModal() {
    this.subForm.reset();
    this.isCreateModalOpen.set(true);
  }

  closeCreateModal() {
    this.isCreateModalOpen.set(false);
  }

  submitSubstitution() {
    if (this.subForm.invalid) {
      this.subForm.markAllAsTouched();
      return;
    }

    // Kiểm tra logic Front-end cơ bản: Người dạy thay không được là giáo viên gốc
    const selectedAssignment = this.activeAssignments().find(a => a.id === this.subForm.value.assignmentId);
    if (selectedAssignment && selectedAssignment.teacherId === this.subForm.value.subTeacherId) {
      this.toastService.warning('Cảnh báo', 'Giáo viên dạy thay không thể trùng với giáo viên dạy chính!');
      return;
    }

    if (new Date(this.subForm.value.startDate) > new Date(this.subForm.value.endDate)) {
      this.toastService.warning('Cảnh báo', 'Ngày bắt đầu phải trước ngày kết thúc!');
      return;
    }

    this.isSubmitting.set(true);
    this.subService.create(this.subForm.value).subscribe({
      next: () => {
        this.toastService.success('Thành công', 'Đã phân công dạy thay thành công!');
        this.closeCreateModal();
        this.loadSubstitutions(); // Load lại bảng
        this.isSubmitting.set(false);
      },
      error: (err) => {
        this.toastService.error('Lỗi', err.error?.message || 'Không thể tạo phân công dạy thay.');
        this.isSubmitting.set(false);
      }
    });
  }

  // Mở Modal xác nhận hủy
  openCancelModal(item: any) {
    this.subToCancel.set(item);
    this.isCancelModalOpen.set(true);
  }

  // Đóng Modal
  closeCancelModal() {
    this.isCancelModalOpen.set(false);
    this.subToCancel.set(null);
    this.isCanceling.set(false);
  }

  // Thực thi gọi API hủy phân công dạy thay
  confirmCancel() {
    const item = this.subToCancel();
    if (!item) return;

    this.isCanceling.set(true);
    this.subService.cancel(item.id).subscribe({
      next: () => {
        this.toastService.success('Thành công', 'Đã hủy lịch dạy thay.');
        this.loadSubstitutions(); // Tải lại bảng dữ liệu
        this.closeCancelModal();  // Đóng Modal
      },
      error: (err) => {
        this.toastService.error('Lỗi', err.error?.message || 'Hủy thất bại.');
        this.isCanceling.set(false);
        this.closeCancelModal();
      }
    });
  }
}