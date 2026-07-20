import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DepartmentManagementService } from '../../services/department-management.service';
import { ToastService } from '../../../../core/services/toast.service';

@Component({
  selector: 'app-department-members',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './department-members.component.html'
})
export class DepartmentMembersComponent implements OnInit {
  private deptService = inject(DepartmentManagementService);
  private toastService = inject(ToastService);
  private searchTimeout: any;

  // State
  myDepartmentId = signal<string | null>(null);
  myDepartmentName = signal<string>('Tổ bộ môn');
  members = signal<any[]>([]);
  isLoading = signal(true);

  // State Modal Thêm GV
  isAddModalOpen = signal(false);
  searchKeyword = signal('');
  searchResults = signal<any[]>([]);
  isSearching = signal(false);
  isProcessing = signal(false); // Loading khi đang thêm/gỡ

  // --- STATE MODAL GỠ THÀNH VIÊN ---
  isRemoveModalOpen = signal(false);
  teacherToRemove = signal<any | null>(null);

  ngOnInit() {
    this.loadMyDepartment();
  }

  loadMyDepartment() {
    this.deptService.getMyProfile().subscribe({
      next: (profile) => {
        if (profile.departmentId) {
          this.myDepartmentId.set(profile.departmentId);
          
          this.deptService.getDepartmentDetail(profile.departmentId).subscribe({
            next: (dept) => this.myDepartmentName.set(dept.name),
            error: () => console.error('Không tải được tên tổ')
          });

          this.loadMembers();
        } else {
          this.isLoading.set(false);
          this.toastService.warning('Thông báo', 'Bạn chưa được phân công vào tổ bộ môn nào.');
        }
      },
      error: () => {
        this.isLoading.set(false);
        this.toastService.error('Lỗi', 'Không thể tải thông tin hồ sơ.');
      }
    });
  }

  loadMembers() {
    this.isLoading.set(true);
    this.deptService.getDepartmentMembers(this.myDepartmentId()!).subscribe({
      next: (res) => {
        this.members.set(res.content || []);
        this.isLoading.set(false);
      },
      error: () => {
        this.toastService.error('Lỗi', 'Không thể tải danh sách thành viên.');
        this.isLoading.set(false);
      }
    });
  }

  // Mở Modal xác nhận gỡ
  openRemoveModal(teacher: any) {
    this.teacherToRemove.set(teacher);
    this.isRemoveModalOpen.set(true);
  }

  // Đóng Modal xác nhận gỡ
  closeRemoveModal() {
    this.isRemoveModalOpen.set(false);
    this.teacherToRemove.set(null);
    this.isProcessing.set(false);
  }

  // Thực thi gọi API gỡ khỏi tổ
  confirmRemove() {
    const teacher = this.teacherToRemove();
    if (!teacher) return;

    this.isProcessing.set(true);
    // Truyền null vào newDepartmentId để gỡ khỏi tổ
    this.deptService.updateTeacherDepartment(teacher.id, teacher, null).subscribe({
      next: () => {
        this.toastService.success('Thành công', `Đã gỡ ${teacher.fullName} khỏi tổ.`);
        this.loadMembers(); // Load lại danh sách
        this.closeRemoveModal(); // Đóng Modal
      },
      error: (err) => {
        this.toastService.error('Lỗi', err.error?.message || 'Không thể gỡ giáo viên. Vui lòng kiểm tra lại quyền.');
        this.isProcessing.set(false);
        this.closeRemoveModal();
      }
    });
  }

  // --- XỬ LÝ THÊM GIÁO VIÊN ---
  openAddModal() {
    this.isAddModalOpen.set(true);
    this.searchKeyword.set(''); 
    this.searchTeacher();       
  }

  closeAddModal() {
    this.isAddModalOpen.set(false);
  }

  searchTeacher() {
    this.isSearching.set(true);
    
    // Gọi API với từ khóa (nếu rỗng thì Service tự hiểu là lấy tất cả)
    this.deptService.searchAllTeachers(this.searchKeyword()).subscribe({
      next: (res) => {
        // Lọc bỏ những giáo viên ĐÃ CÓ trong tổ hiện tại ra khỏi danh sách
        const filtered = (res.content || []).filter((t: any) => t.departmentId !== this.myDepartmentId());
        
        this.searchResults.set(filtered);
        this.isSearching.set(false);
      },
      error: () => {
        this.toastService.error('Lỗi', 'Không thể tải danh sách giáo viên');
        this.isSearching.set(false);
      }
    });
  }

  onSearchChange(value: string) {
    this.searchKeyword.set(value); // Lưu lại chữ vừa gõ

    // Nếu người dùng vẫn đang gõ liên tục -> Hủy cái lịch hẹn tìm kiếm cũ đi
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }

    // Lập một lịch hẹn mới: Đợi đúng 500ms (0.5 giây) sau khi ngừng gõ thì mới gọi API
    this.searchTimeout = setTimeout(() => {
      this.searchTeacher();
    }, 500); 
  }

  addTeacherToDept(teacher: any) {
    this.isProcessing.set(true);
    // Gán departmentId của mình cho giáo viên này
    this.deptService.updateTeacherDepartment(teacher.id, teacher, this.myDepartmentId()).subscribe({
      next: () => {
        this.toastService.success('Thành công', `Đã thêm ${teacher.fullName} vào tổ.`);
        this.closeAddModal();
        this.loadMembers();
        this.isProcessing.set(false);
      },
      error: (err) => {
        this.toastService.error('Lỗi', err.error?.message || 'Không thể thêm giáo viên.');
        this.isProcessing.set(false);
      }
    });
  }
}