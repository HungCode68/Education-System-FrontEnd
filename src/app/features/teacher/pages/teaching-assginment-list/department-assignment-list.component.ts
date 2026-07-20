import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DepartmentManagementService } from '../../services/department-management.service';
import { TeachingAssignmentService } from '../../services/teaching-assignment.service';
import { ToastService } from '../../../../core/services/toast.service';

@Component({
  selector: 'app-department-assignment-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './department-assignment-list.component.html'
})
export class DepartmentAssignmentListComponent implements OnInit {
  private deptService = inject(DepartmentManagementService);
  private assignmentService = inject(TeachingAssignmentService);
  private toastService = inject(ToastService);

  myDepartmentId = signal<string | null>(null);
  
  // Dữ liệu cho Dropdown bộ lọc
  teachers = signal<any[]>([]);
  schoolYears = signal<any[]>([]);
  semesters = signal<any[]>([]);
  physicalClasses = signal<any[]>([]);

  // State Bảng dữ liệu
  assignments = signal<any[]>([]);
  isLoading = signal(true);
  currentPage = signal(1);
  totalPages = signal(1);

  // --- STATE MODAL HỦY PHÂN CÔNG ---
  isUnassignModalOpen = signal(false);
  assignmentToUnassign = signal<any | null>(null);
  isProcessing = signal(false);

  // Biến hứng giá trị Bộ lọc
  filters = {
    schoolYearId: '',
    semesterId: '',
    physicalClassId: '',
    teacherId: ''
  };

  ngOnInit() {
    this.loadInitialData();
  }

  loadInitialData() {
    this.isLoading.set(true);
    
    // 1. Lấy thông tin tổ và GV trong tổ
    this.deptService.getMyProfile().subscribe(profile => {
      if (profile.departmentId) {
        this.myDepartmentId.set(profile.departmentId);
        this.deptService.getDepartmentMembers(profile.departmentId).subscribe(res => {
          this.teachers.set(res.content || []);
        });
        
        // Có ID Tổ rồi thì load danh sách phân công luôn
        this.loadAssignments();
      }
    });

    // 2. Lấy Năm học cho bộ lọc
    this.assignmentService.getSchoolYears().subscribe(res => this.schoolYears.set(res.content || []));
  }

  // Khi người dùng đổi Năm học ở bộ lọc -> Tải lại danh sách Học kỳ tương ứng
  onFilterSchoolYearChange() {
    this.filters.semesterId = ''; // Reset học kỳ
    this.filters.physicalClassId = '';
    if (this.filters.schoolYearId) {
      this.assignmentService.getSemesters(this.filters.schoolYearId).subscribe(res => this.semesters.set(res.content || res));
      this.assignmentService.getPhysicalClasses(this.filters.schoolYearId).subscribe(res => this.physicalClasses.set(res.content || []));
    } else {
      this.semesters.set([]);
      this.physicalClasses.set([]);
    }
    this.applyFilter();
  }

  loadAssignments() {
    if (!this.myDepartmentId()) return;
    
    this.isLoading.set(true);
    this.assignmentService.getDepartmentAssignments(this.myDepartmentId()!, this.filters, this.currentPage()).subscribe({
      next: (res) => {
        const activeAssignments = (res.content || []).filter((item: any) => item.status === 'active');
        
        this.assignments.set(activeAssignments); // Đổ data đã lọc vào bảng
        this.totalPages.set(res.totalPages || 1);
        this.isLoading.set(false);
      },
      error: () => {
        this.toastService.error('Lỗi', 'Không thể tải danh sách phân công.');
        this.isLoading.set(false);
      }
    });
  }

  applyFilter() {
    this.currentPage.set(1);
    this.loadAssignments();
  }

  resetFilters() {
    this.filters = { schoolYearId: '', semesterId: '', physicalClassId: '',teacherId: '' };
    this.semesters.set([]);
    this.physicalClasses.set([]);
    this.applyFilter();
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage.set(page);
      this.loadAssignments();
    }
  }

  // Mở Modal xác nhận hủy và lưu lại thông tin bản ghi
  openUnassignModal(item: any) {
    this.assignmentToUnassign.set(item);
    this.isUnassignModalOpen.set(true);
  }

  // Đóng Modal
  closeUnassignModal() {
    this.isUnassignModalOpen.set(false);
    this.assignmentToUnassign.set(null);
    this.isProcessing.set(false);
  }

  // Thực thi gọi API hủy phân công
  confirmUnassign() {
    const item = this.assignmentToUnassign();
    if (!item) return;

    this.isProcessing.set(true);
    this.assignmentService.unassignTeacher(item.id).subscribe({
      next: () => {
        this.toastService.success('Thành công', 'Đã hủy phân công giảng dạy.');
        this.loadAssignments(); // Load lại bảng dữ liệu
        this.closeUnassignModal(); // Đóng Modal
      },
      error: (err) => {
        this.toastService.error('Lỗi', err.error?.message || 'Không thể hủy phân công.');
        this.isProcessing.set(false);
        this.closeUnassignModal();
      }
    });
  }
}