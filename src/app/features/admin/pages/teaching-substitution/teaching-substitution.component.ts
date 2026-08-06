import { Component, OnInit, inject, signal, computed, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TeachingSubstitutionService } from '../../../../modules/teaching/services/teaching-substitution.service';
import { ScheduleService } from '../../../../modules/academic/services/schedule.service';
import { StaffService } from '../../../../modules/user/services/staff.service';
import { TeachingSubstitution } from '../../../../modules/teaching/models/teaching-substitution.model';
import { ClassSchedule } from '../../../../modules/academic/models/schedule.model';
import { Staff } from '../../../../modules/user/models/staff.model';
import { ToastService } from '../../../../core/services/toast.service';
import { HasPermissionDirective } from '../../../../core/directives/has-permission.directive';

@Component({
  selector: 'app-teaching-substitution',
  imports: [CommonModule, ReactiveFormsModule, HasPermissionDirective],
  templateUrl: './teaching-substitution.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeachingSubstitutionComponent implements OnInit {
  private subService = inject(TeachingSubstitutionService);
  private scheduleService = inject(ScheduleService);
  private staffService = inject(StaffService);
  private fb = inject(FormBuilder);
  private toastService = inject(ToastService);

  substitutions = signal<TeachingSubstitution[]>([]);
  schedules = signal<ClassSchedule[]>([]);
  staffs = signal<Staff[]>([]);

  totalElements = signal(0);
  currentPage = signal(1);
  pageSize = signal(10);
  isLoading = signal(false);

  isModalOpen = signal(false);
  isEditing = signal(false);
  currentId = signal<number | string | null>(null);
  subForm!: FormGroup;

  isDeleteModalOpen = signal(false);
  idToDelete = signal<number | string | null>(null);

  totalPages = computed(() => Math.ceil(this.totalElements() / this.pageSize()));
  startIndex = computed(() => this.totalElements() === 0 ? 0 : (this.currentPage() - 1) * this.pageSize() + 1);
  endIndex = computed(() => Math.min(this.currentPage() * this.pageSize(), this.totalElements()));

  ngOnInit() {
    this.initForm();
    this.loadDropdowns();
    this.loadData();
  }

  private initForm() {
    this.subForm = this.fb.group({
      scheduleId: ['', Validators.required],
      absentStaffId: ['', Validators.required],
      substituteStaffId: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: [''],
      reason: ['', Validators.required],
      status: ['SCHEDULED', Validators.required]
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
    this.subService.getAll(this.currentPage() - 1, this.pageSize()).subscribe({
      next: (res) => {
        this.substitutions.set(res.content || []);
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

  openModal(item?: TeachingSubstitution) {
    if (item) {
      this.isEditing.set(true);
      this.currentId.set(item.id ?? null);
      this.subForm.patchValue({
        scheduleId: item.scheduleId,
        absentStaffId: item.absentStaffId,
        substituteStaffId: item.substituteStaffId,
        startDate: item.startDate || '',
        endDate: item.endDate || '',
        reason: item.reason,
        status: item.status
      });
    } else {
      this.isEditing.set(false);
      this.currentId.set(null);
      this.subForm.reset({
        scheduleId: '',
        absentStaffId: '',
        substituteStaffId: '',
        startDate: new Date().toISOString().substring(0, 10),
        endDate: '',
        reason: '',
        status: 'SCHEDULED'
      });
    }
    this.isModalOpen.set(true);
  }

  closeModal() {
    this.isModalOpen.set(false);
    this.currentId.set(null);
  }

  onSubmit() {
    if (this.subForm.invalid) return;
    this.isLoading.set(true);
    const data = this.subForm.value;
    if (data.scheduleId) data.scheduleId = Number(data.scheduleId);
    if (data.absentStaffId) data.absentStaffId = Number(data.absentStaffId);
    if (data.substituteStaffId) data.substituteStaffId = Number(data.substituteStaffId);

    if (this.isEditing() && this.currentId() != null) {
      this.subService.update(this.currentId()!, data).subscribe({
        next: () => {
          this.loadData();
          this.closeModal();
          this.toastService.success('Thành công', 'Đã cập nhật dạy thay!');
        },
        error: (err) => {
          this.isLoading.set(false);
          this.toastService.error('Thất bại', err.error?.message || 'Có lỗi xảy ra khi cập nhật!');
        }
      });
    } else {
      this.subService.create(data).subscribe({
        next: () => {
          this.loadData();
          this.closeModal();
          this.toastService.success('Thành công', 'Đã ghi nhận phân công dạy thay!');
        },
        error: (err) => {
          this.isLoading.set(false);
          this.toastService.error('Thất bại', err.error?.message || 'Có lỗi xảy ra khi thêm mới!');
        }
      });
    }
  }

  onDelete(id?: number | string) {
    if (id != null) {
      this.idToDelete.set(id);
      this.isDeleteModalOpen.set(true);
    }
  }

  closeDeleteModal() {
    this.isDeleteModalOpen.set(false);
    this.idToDelete.set(null);
  }

  confirmDelete() {
    const id = this.idToDelete();
    if (id != null) {
      this.isLoading.set(true);
      this.subService.delete(id).subscribe({
        next: () => {
          this.loadData();
          this.closeDeleteModal();
          this.toastService.success('Đã xóa', 'Xóa dạy thay thành công!');
        },
        error: (err) => {
          this.isLoading.set(false);
          this.closeDeleteModal();
          this.toastService.error('Lỗi xóa', err.error?.message || 'Không thể xóa bản ghi dạy thay này!');
        }
      });
    }
  }
}
