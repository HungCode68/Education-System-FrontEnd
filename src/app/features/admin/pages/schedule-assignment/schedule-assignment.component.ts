import { Component, OnInit, inject, signal, computed, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ScheduleAssignmentService } from '../../services/schedule-assignment.service';
import { ClassScheduleService } from '../../services/class-schedule.service';
import { StaffService } from '../../services/staff.service';
import { ScheduleAssignment, ScheduleAssignmentRole } from '../../models/schedule-assignment.model';
import { ClassSchedule } from '../../models/class-schedule.model';
import { Staff } from '../../models/staff.model';
import { ToastService } from '../../../../core/services/toast.service';

@Component({
  selector: 'app-schedule-assignment',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './schedule-assignment.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScheduleAssignmentComponent implements OnInit {
  private assignmentService = inject(ScheduleAssignmentService);
  private scheduleService = inject(ClassScheduleService);
  private staffService = inject(StaffService);
  private fb = inject(FormBuilder);
  private toastService = inject(ToastService);

  assignments = signal<ScheduleAssignment[]>([]);
  schedules = signal<ClassSchedule[]>([]);
  staffs = signal<Staff[]>([]);

  totalElements = signal(0);
  currentPage = signal(1);
  pageSize = signal(10);
  isLoading = signal(false);

  isModalOpen = signal(false);
  isEditing = signal(false);
  currentId = signal<number | string | null>(null);
  assignmentForm!: FormGroup;

  isDeleteModalOpen = signal(false);
  idToDelete = signal<number | string | null>(null);

  roleLabels: Record<ScheduleAssignmentRole, string> = {
    MAIN_TEACHER: 'Giáo viên Việt Nam',
    NATIVE_TEACHER: 'Giáo viên nước ngoài (Native)',
    ASSISTANT: 'Trợ giảng (TA)'
  };

  totalPages = computed(() => Math.ceil(this.totalElements() / this.pageSize()));
  startIndex = computed(() => this.totalElements() === 0 ? 0 : (this.currentPage() - 1) * this.pageSize() + 1);
  endIndex = computed(() => Math.min(this.currentPage() * this.pageSize(), this.totalElements()));

  ngOnInit() {
    this.initForm();
    this.loadDropdowns();
    this.loadData();
  }

  private initForm() {
    this.assignmentForm = this.fb.group({
      scheduleId: ['', Validators.required],
      staffId: ['', Validators.required],
      role: ['MAIN_TEACHER' as ScheduleAssignmentRole, Validators.required]
    });
  }

  private loadDropdowns() {
    this.scheduleService.getAll(0, 100).subscribe({
      next: (res) => this.schedules.set(res.content || [])
    });
    this.staffService.getAll(undefined, 0, 100).subscribe({
      next: (res) => this.staffs.set(res.content || [])
    });
  }

  loadData() {
    this.isLoading.set(true);
    this.assignmentService.getAll(this.currentPage() - 1, this.pageSize()).subscribe({
      next: (res) => {
        this.assignments.set(res.content || []);
        this.totalElements.set(res.totalElements || 0);
        this.isLoading.set(false);
      },
      error: () => this.isLoading.set(false)
    });
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage.set(page);
      this.loadData();
    }
  }

  openModal(item?: ScheduleAssignment) {
    if (item) {
      this.isEditing.set(true);
      this.currentId.set(item.id);
      this.assignmentForm.patchValue({
        scheduleId: item.scheduleId,
        staffId: item.staffId,
        role: item.role
      });
    } else {
      this.isEditing.set(false);
      this.currentId.set(null);
      this.assignmentForm.reset({
        scheduleId: '',
        staffId: '',
        role: 'MAIN_TEACHER'
      });
    }
    this.isModalOpen.set(true);
  }

  closeModal() {
    this.isModalOpen.set(false);
    this.currentId.set(null);
  }

  onSubmit() {
    if (this.assignmentForm.invalid) return;
    this.isLoading.set(true);
    const data = this.assignmentForm.value;
    if (data.scheduleId) data.scheduleId = Number(data.scheduleId);
    if (data.staffId) data.staffId = Number(data.staffId);

    if (this.isEditing() && this.currentId() != null) {
      this.assignmentService.update(this.currentId()!, data).subscribe({
        next: () => {
          this.loadData();
          this.closeModal();
          this.toastService.success('Thành công', 'Đã cập nhật phân công ca học!');
        },
        error: (err) => {
          this.isLoading.set(false);
          this.toastService.error('Thất bại', err.error?.message || 'Có lỗi xảy ra khi cập nhật!');
        }
      });
    } else {
      this.assignmentService.create(data).subscribe({
        next: () => {
          this.loadData();
          this.closeModal();
          this.toastService.success('Thành công', 'Đã phân công giáo viên vào ca học!');
        },
        error: (err) => {
          this.isLoading.set(false);
          this.toastService.error('Thất bại', err.error?.message || 'Có lỗi xảy ra khi thêm mới!');
        }
      });
    }
  }

  onDelete(id: number | string) {
    this.idToDelete.set(id);
    this.isDeleteModalOpen.set(true);
  }

  closeDeleteModal() {
    this.isDeleteModalOpen.set(false);
    this.idToDelete.set(null);
  }

  confirmDelete() {
    const id = this.idToDelete();
    if (id != null) {
      this.isLoading.set(true);
      this.assignmentService.delete(id).subscribe({
        next: () => {
          this.loadData();
          this.closeDeleteModal();
          this.toastService.success('Đã xóa', 'Xóa phân công ca học thành công!');
        },
        error: (err) => {
          this.isLoading.set(false);
          this.closeDeleteModal();
          this.toastService.error('Lỗi xóa', err.error?.message || 'Không thể xóa phân công ca học này!');
        }
      });
    }
  }
}
