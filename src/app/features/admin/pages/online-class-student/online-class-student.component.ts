import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { OnlineClassStudentService } from '../../services/online-class-student.service';
import { OnlineClassService } from '../../services/online-class.service';
import { StudentService } from '../../services/student.service';
import { ToastService } from '../../../../core/services/toast.service';
import { OnlineClassStudent } from '../../models/online-class-student.model';
import { OnlineClass } from '../../models/online-class.model';
import { Student } from '../../models/student.model';

@Component({
  selector: 'app-online-class-student',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './online-class-student.component.html'
})
export class OnlineClassStudentComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private ocsService = inject(OnlineClassStudentService);
  private onlineClassService = inject(OnlineClassService);
  private studentService = inject(StudentService);
  private toastService = inject(ToastService);
  private fb = inject(FormBuilder);

  // --- STATE ---
  currentOnlineClassId = '';
  currentClassInfo = signal<OnlineClass | null>(null);

  students = signal<OnlineClassStudent[]>([]);
  availableStudents = signal<Student[]>([]); // DS học sinh để thêm thủ công
  isLoading = signal(false);
  isSyncing = signal(false); // Trạng thái đang chạy đồng bộ
  isSyncModalOpen = signal(false);

  // --- STATE MODAL THÊM THỦ CÔNG ---
  isAddModalOpen = signal(false);
  addForm!: FormGroup;

  // --- STATE MODAL XÓA/ĐỔI TRẠNG THÁI ---
  isConfirmModalOpen = signal(false);
  actionType = signal<'DELETE' | 'CHANGE_STATUS'>('DELETE');
  selectedRecordId = signal<string | null>(null);
  newStatusToChange = signal<string>('');

  ngOnInit() {
    this.currentOnlineClassId = this.route.snapshot.paramMap.get('id') || '';
    this.initForm();
    
    if (this.currentOnlineClassId) {
      this.loadClassInfo();
      this.loadData();
    }
  }

  private initForm() {
    this.addForm = this.fb.group({
      onlineClassId: [this.currentOnlineClassId],
      studentId: ['', Validators.required]
    });
  }

  loadClassInfo() {
    this.onlineClassService.getById(this.currentOnlineClassId).subscribe({
      next: (res) => this.currentClassInfo.set(res)
    });
  }

  loadData() {
    this.isLoading.set(true);
    this.ocsService.getStudentsByOnlineClass(this.currentOnlineClassId).subscribe({
      next: (res) => {
        this.students.set(res);
        this.isLoading.set(false);
      },
      error: () => this.isLoading.set(false)
    });
  }

  // --- XỬ LÝ ĐỒNG BỘ (SYNC) ---
  triggerSync() {
    if (!confirm('Hệ thống sẽ quét Lớp sinh hoạt gốc và tự động thêm các học sinh mới vào lớp Online này. Bạn có muốn tiếp tục?')) return;
    
    this.isSyncing.set(true);
    this.ocsService.syncStudents(this.currentOnlineClassId).subscribe({
      next: (res) => {
        this.toastService.success('Đồng bộ hoàn tất', res.message || 'Đã cập nhật danh sách học sinh.');
        this.isSyncing.set(false);
        this.loadData(); // Tải lại bảng
      },
      error: (err) => {
        this.isSyncing.set(false);
        this.toastService.error('Lỗi đồng bộ', err.error?.message || 'Có lỗi xảy ra khi đồng bộ!');
      }
    });
  }

  // --- XỬ LÝ THÊM THỦ CÔNG ---
  openAddModal() {
    this.studentService.getAll(undefined, 'studying', undefined, 0, 1000).subscribe(res => {
      this.availableStudents.set(res.content || []);
    });
    this.addForm.reset({ onlineClassId: this.currentOnlineClassId, studentId: '' });
    this.isAddModalOpen.set(true);
  }

  closeAddModal() {
    this.isAddModalOpen.set(false);
  }

  submitAddManual() {
    if (this.addForm.invalid) return;
    this.isLoading.set(true);
    
    // TRUYỀN THÊM currentOnlineClassId VÀO HÀM SERVICE
    this.ocsService.addStudentManual(this.currentOnlineClassId, this.addForm.value).subscribe({
      next: () => {
        this.toastService.success('Thành công', 'Đã thêm học sinh (Manual) vào lớp!');
        this.closeAddModal();
        this.loadData();
      },
      error: (err) => {
        this.isLoading.set(false);
        this.toastService.error('Lỗi', err.error?.message || 'Không thể thêm học sinh!');
      }
    });
  }

  // --- XỬ LÝ XÓA / ĐỔI TRẠNG THÁI ---
  openConfirmModal(studentId: string) {
    // Chỉ cần lưu studentId để gọi API xóa
    this.selectedRecordId.set(studentId); 
    this.isConfirmModalOpen.set(true);
  }

  closeConfirmModal() {
    this.isConfirmModalOpen.set(false);
    this.selectedRecordId.set(null);
  }

  executeConfirm() {
    const studentId = this.selectedRecordId();
    if (!studentId) return;

    this.isLoading.set(true);

    // TRUYỀN CẢ classId VÀ studentId
    this.ocsService.removeStudent(this.currentOnlineClassId, studentId).subscribe({
      next: () => {
        this.toastService.success('Đã gỡ', 'Đã gỡ học sinh khỏi lớp học phần!');
        this.closeConfirmModal();
        this.loadData();
      },
      error: (err) => {
        this.isLoading.set(false);
        this.toastService.error('Lỗi', err.error?.message || 'Không thể xóa học sinh!');
      }
    });
  }

  openSyncModal() {
    this.isSyncModalOpen.set(true);
  }

  closeSyncModal() {
    this.isSyncModalOpen.set(false);
  }

  executeSync() {
    this.isSyncing.set(true);
    this.ocsService.syncStudents(this.currentOnlineClassId).subscribe({
      next: (res) => {
        this.toastService.success('Đồng bộ hoàn tất', res.message || 'Đã cập nhật danh sách học sinh.');
        this.isSyncing.set(false);
        this.closeSyncModal(); // Đóng modal khi thành công
        this.loadData(); // Tải lại bảng
      },
      error: (err) => {
        this.isSyncing.set(false);
        this.closeSyncModal();
        this.toastService.error('Lỗi đồng bộ', err.error?.message || 'Có lỗi xảy ra khi đồng bộ!');
      }
    });
  }
}