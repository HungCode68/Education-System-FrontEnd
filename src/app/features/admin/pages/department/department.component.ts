import { Component, OnInit, inject, signal, computed, DestroyRef, ChangeDetectionStrategy } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { DepartmentService } from '../../../../modules/user/services/department.service';
import { ToastService } from '../../../../core/services/toast.service';
import { Department } from '../../../../modules/user/models/department.model';
import { StaffService } from '../../../../modules/user/services/staff.service';
import { Staff } from '../../../../modules/user/models/staff.model';

@Component({
  selector: 'app-department',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './department.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DepartmentComponent implements OnInit {
  private departmentService = inject(DepartmentService);
  private toastService = inject(ToastService);
  private fb = inject(FormBuilder);
  private destroyRef = inject(DestroyRef);
  private staffService = inject(StaffService);

  departments = signal<Department[]>([]);
  totalElements = signal(0);
  currentPage = signal(1);
  pageSize = signal(10);
  isLoading = signal(false);

  totalPages = computed(() => Math.ceil(this.totalElements() / this.pageSize()));
  startIndex = computed(() => this.totalElements() === 0 ? 0 : (this.currentPage() - 1) * this.pageSize() + 1);
  endIndex = computed(() => Math.min(this.currentPage() * this.pageSize(), this.totalElements()));

  searchControl = new FormControl('');

  isModalOpen = signal(false);
  isEditing = signal(false);
  currentId = signal<string | number | null>(null);
  departmentForm!: FormGroup;

  isDeleteModalOpen = signal(false);
  idToDelete = signal<string | number | null>(null);

  isTeacherListModalOpen = signal(false);
  departmentTeachers = signal<Staff[]>([]);
  selectedDepartmentName = signal('');
  isLoadingTeachers = signal(false);

  currentDepartmentId = signal<string | number | null>(null);
  availableTeachers = signal<Staff[]>([]);
  selectedTeacherToAssign = new FormControl('');
  isAssigning = signal(false);

  isUnassignModalOpen = signal(false);
  teacherToUnassign = signal<Staff | null>(null);

  ngOnInit() {
    this.initForm();
    this.setupFilters();
    this.loadData();
  }

  private initForm() {
    this.departmentForm = this.fb.group({
      code: ['', [Validators.required, Validators.maxLength(50)]],
      name: ['', [Validators.required, Validators.maxLength(100)]],
      description: ['']
    });
  }

  private setupFilters() {
    this.searchControl.valueChanges.pipe(debounceTime(400), distinctUntilChanged(), takeUntilDestroyed(this.destroyRef))
      .subscribe(() => { this.currentPage.set(1); this.loadData(); });
  }

  loadData() {
    this.isLoading.set(true);
    const keyword = this.searchControl.value || undefined;

    this.departmentService.getAll(keyword, this.currentPage() - 1, this.pageSize()).subscribe({
      next: (res) => {
        this.departments.set(res.content);
        this.totalElements.set(res.totalElements);
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

  openModal(dept?: Department) {
    if (dept) {
      this.isEditing.set(true);
      this.currentId.set(dept.id);
      this.departmentForm.patchValue({
        code: dept.code,
        name: dept.name,
        description: dept.description
      });
    } else {
      this.isEditing.set(false);
      this.currentId.set(null);
      this.departmentForm.reset();
    }
    this.isModalOpen.set(true);
  }

  closeModal() {
    this.isModalOpen.set(false);
    this.currentId.set(null);
  }

  onSubmit() {
    if (this.departmentForm.invalid) return;
    this.isLoading.set(true);
    const data = this.departmentForm.value;
    data.code = (data.code as string).toUpperCase().trim();

    if (this.isEditing() && this.currentId() != null) {
      this.departmentService.update(this.currentId()!, data).subscribe({
        next: () => {
          this.loadData(); this.closeModal(); this.toastService.success('Thành công', 'Đã cập nhật phòng ban!');
        },
        error: (err) => {
          this.isLoading.set(false); this.toastService.error('Lỗi', err.error?.message || 'Cập nhật thất bại');
        }
      });
    } else {
      this.departmentService.create(data).subscribe({
        next: () => {
          this.loadData(); this.closeModal(); this.toastService.success('Thành công', 'Đã thêm phòng ban mới!');
        },
        error: (err) => {
          this.isLoading.set(false); this.toastService.error('Lỗi', err.error?.message || 'Thêm thất bại');
        }
      });
    }
  }

  onDelete(id: string | number) {
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
      this.departmentService.delete(id).subscribe({
        next: () => {
          this.loadData();
          this.closeDeleteModal();
          this.toastService.success('Thành công', 'Đã xóa phòng ban!');
        },
        error: (err) => {
          this.isLoading.set(false);
          this.closeDeleteModal();
          this.toastService.error('Lỗi', err.error?.message || 'Không thể xóa phòng ban này!');
        }
      });
    }
  }

  openTeacherListModal(dept: Department) {
    this.selectedDepartmentName.set(dept.name);
    this.currentDepartmentId.set(dept.id);
    this.isTeacherListModalOpen.set(true);
    this.loadModalData();
  }

  loadModalData() {
    const deptId = this.currentDepartmentId();
    if (deptId == null) return;

    this.isLoadingTeachers.set(true);
    this.selectedTeacherToAssign.reset('');

    // Route đúng: GET /api/v1/staffs/department/{departmentId} — trả nhân sự đã thuộc phòng ban này
    this.staffService.getByDepartment(deptId, 0, 100).subscribe({
      next: (resAssigned) => {
        this.departmentTeachers.set(resAssigned.content || []);

        // Lấy toàn bộ nhân sự để tính ra danh sách "chưa thuộc phòng ban nào có thể thêm vào"
        this.staffService.getAll(undefined, 0, 1000).subscribe({
          next: (resAll) => {
            const assignedIds = resAssigned.content.map(t => t.id);
            const available = resAll.content.filter(t => !assignedIds.includes(t.id));
            this.availableTeachers.set(available);
            this.isLoadingTeachers.set(false);
          },
          error: () => this.isLoadingTeachers.set(false)
        });
      },
      error: () => {
        this.isLoadingTeachers.set(false);
        this.toastService.error('Lỗi', 'Không thể tải danh sách nhân sự!');
      }
    });
  }

  closeTeacherListModal() {
    this.isTeacherListModalOpen.set(false);
    this.currentDepartmentId.set(null);
  }

  assignTeacher() {
    const inputValue = this.selectedTeacherToAssign.value?.trim().toLowerCase();
    const deptId = this.currentDepartmentId();
    if (!inputValue || deptId == null) return;

    const teacher = this.availableTeachers().find(t =>
      (t.staffCode || '').toLowerCase() === inputValue || String(t.id) === inputValue
    );

    if (!teacher) {
      this.toastService.warning('Không tìm thấy', 'Mã nhân sự không chính xác hoặc nhân sự này đã thuộc phòng ban khác!');
      return;
    }

    this.isAssigning.set(true);
    const updatedData = { ...teacher, departmentId: Number(deptId) };

    this.staffService.update(teacher.id, updatedData).subscribe({
      next: () => {
        this.toastService.success('Thành công', `Đã thêm ${teacher.fullName} vào phòng ban!`);
        this.isAssigning.set(false);
        this.selectedTeacherToAssign.reset('');
        this.loadModalData();
      },
      error: (err) => {
        this.isAssigning.set(false);
        this.toastService.error('Lỗi', err.error?.message || 'Không thể thêm nhân sự!');
      }
    });
  }

  openUnassignModal(teacher: Staff) {
    this.teacherToUnassign.set(teacher);
    this.isUnassignModalOpen.set(true);
  }

  closeUnassignModal() {
    this.isUnassignModalOpen.set(false);
    this.teacherToUnassign.set(null);
  }

  confirmUnassignTeacher() {
    const teacher = this.teacherToUnassign();
    if (!teacher) return;

    this.isAssigning.set(true);
    const updatedData = { ...teacher, departmentId: undefined };

    this.staffService.update(teacher.id, updatedData).subscribe({
      next: () => {
        this.toastService.success('Đã gỡ', `Nhân sự ${teacher.fullName} đã rời phòng ban.`);
        this.isAssigning.set(false);
        this.closeUnassignModal();
        this.loadModalData();
      },
      error: (err) => {
        this.isAssigning.set(false);
        this.toastService.error('Lỗi', err.error?.message || 'Không thể gỡ nhân sự!');
      }
    });
  }
}
