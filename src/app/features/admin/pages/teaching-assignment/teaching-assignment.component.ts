import { Component, OnInit, inject, signal, computed, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { TeachingAssignmentService } from '../../../../modules/teaching/services/teaching-assignment.service';
import { StaffService } from '../../../../modules/user/services/staff.service';
import { ClassService } from '../../../../modules/academic/services/class.service';
import { TeachingAssignment, TeachingRole } from '../../../../modules/teaching/models/teaching-assignment.model';
import { Staff } from '../../../../modules/user/models/staff.model';
import { Class } from '../../../../modules/academic/models/class.model';
import { ToastService } from '../../../../core/services/toast.service';
import { HasPermissionDirective } from '../../../../core/directives/has-permission.directive';

@Component({
  selector: 'app-teaching-assignment',
  imports: [CommonModule, ReactiveFormsModule, HasPermissionDirective],
  templateUrl: './teaching-assignment.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeachingAssignmentComponent implements OnInit {
  private assignmentService = inject(TeachingAssignmentService);
  private staffService = inject(StaffService);
  private classService = inject(ClassService);
  private fb = inject(FormBuilder);
  private toastService = inject(ToastService);

  assignments = signal<TeachingAssignment[]>([]);
  staffs = signal<Staff[]>([]);
  classes = signal<Class[]>([]);

  totalElements = signal(0);
  currentPage = signal(1);
  pageSize = signal(10);
  isLoading = signal(false);

  classFilterControl = new FormControl('');
  staffFilterControl = new FormControl('');

  isModalOpen = signal(false);
  isEditing = signal(false);
  currentId = signal<number | string | null>(null);
  assignmentForm!: FormGroup;

  isDeleteModalOpen = signal(false);
  idToDelete = signal<number | string | null>(null);

  roleLabels: Record<TeachingRole, string> = {
    MAIN_TEACHER: 'Giáo viên chính',
    ASSISTANT_TEACHER: 'Trợ giảng lớp',
    TUTOR: 'Tutor kèm cặp'
  };

  totalPages = computed(() => Math.ceil(this.totalElements() / this.pageSize()));
  startIndex = computed(() => this.totalElements() === 0 ? 0 : (this.currentPage() - 1) * this.pageSize() + 1);
  endIndex = computed(() => Math.min(this.currentPage() * this.pageSize(), this.totalElements()));

  ngOnInit() {
    this.initForm();
    this.loadDropdowns();
    this.setupFilters();
    this.loadData();
  }

  private initForm() {
    this.assignmentForm = this.fb.group({
      classId: ['', Validators.required],
      staffId: ['', Validators.required],
      role: ['MAIN_TEACHER' as TeachingRole, Validators.required],
      assignedDate: [new Date().toISOString().substring(0, 10), Validators.required],
      endDate: [''],
      status: ['ACTIVE', Validators.required]
    });
  }

  private setupFilters() {
    this.classFilterControl.valueChanges.subscribe(() => {
      this.currentPage.set(1); this.loadData();
    });
    this.staffFilterControl.valueChanges.subscribe(() => {
      this.currentPage.set(1); this.loadData();
    });
  }

  private loadDropdowns() {
    this.classService.getAll(0, 100).subscribe({
      next: (res) => this.classes.set(res.content || [])
    });
    this.staffService.getAll(undefined, 0, 100).subscribe({
      next: (res) => this.staffs.set(res.content || [])
    });
  }

  loadData() {
    this.isLoading.set(true);
    const classId = this.classFilterControl.value || undefined;
    const staffId = this.staffFilterControl.value || undefined;

    this.assignmentService.getAll(this.currentPage() - 1, this.pageSize(), classId, staffId).subscribe({
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

  openModal(item?: TeachingAssignment) {
    if (item) {
      this.isEditing.set(true);
      this.currentId.set(item.id);
      this.assignmentForm.patchValue({
        classId: item.classId,
        staffId: item.staffId,
        role: item.role,
        assignedDate: item.assignedDate,
        endDate: item.endDate || '',
        status: item.status
      });
    } else {
      this.isEditing.set(false);
      this.currentId.set(null);
      this.assignmentForm.reset({
        classId: '',
        staffId: '',
        role: 'MAIN_TEACHER',
        assignedDate: new Date().toISOString().substring(0, 10),
        endDate: '',
        status: 'ACTIVE'
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
    if (data.classId) data.classId = Number(data.classId);
    if (data.staffId) data.staffId = Number(data.staffId);

    if (this.isEditing() && this.currentId() != null) {
      this.assignmentService.update(this.currentId()!, data).subscribe({
        next: () => {
          this.loadData();
          this.closeModal();
          this.toastService.success('Thành công', 'Đã cập nhật phân công giảng dạy!');
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
          this.toastService.success('Thành công', 'Đã phân công giáo viên mới!');
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
          this.toastService.success('Đã xóa', 'Xóa phân công thành công!');
        },
        error: (err) => {
          this.isLoading.set(false);
          this.closeDeleteModal();
          this.toastService.error('Lỗi xóa', err.error?.message || 'Không thể xóa phân công này!');
        }
      });
    }
  }
}
