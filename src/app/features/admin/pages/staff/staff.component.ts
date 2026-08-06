import { Component, OnInit, inject, signal, computed, DestroyRef, ChangeDetectionStrategy } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { StaffService } from '../../../../modules/user/services/staff.service';
import { DepartmentService } from '../../../../modules/user/services/department.service';
import { Staff, StaffType, StaffContractType } from '../../../../modules/user/models/staff.model';
import { Department } from '../../../../modules/user/models/department.model';
import { ToastService } from '../../../../core/services/toast.service';

import { HasPermissionDirective } from '../../../../core/directives/has-permission.directive';

@Component({
  selector: 'app-staff',
  imports: [CommonModule, ReactiveFormsModule, HasPermissionDirective],
  templateUrl: './staff.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StaffComponent implements OnInit {
  private staffService = inject(StaffService);
  private departmentService = inject(DepartmentService);
  private fb = inject(FormBuilder);
  private destroyRef = inject(DestroyRef);
  private toastService = inject(ToastService);
  private router = inject(Router);

  isReadOnly = signal(false);
  isAcademic = signal(false);

  staffs = signal<Staff[]>([]);
  departments = signal<Department[]>([]);

  totalElements = signal(0);
  currentPage = signal(1);
  pageSize = signal(10);
  isLoading = signal(false);

  searchControl = new FormControl('');
  typeFilterControl = new FormControl('');
  deptFilterControl = new FormControl('');

  isModalOpen = signal(false);
  isEditing = signal(false);
  currentId = signal<number | string | null>(null);
  staffForm!: FormGroup;

  isDeleteModalOpen = signal(false);
  idToDelete = signal<number | string | null>(null);

  staffTypeLabels: Record<StaffType, string> = {
    TEACHER: 'Giáo viên',
    TEACHING_ASSISTANT: 'Trợ giảng',
    CONSULTANT: 'Tư vấn viên',
    MANAGER: 'Quản lý'
  };

  contractTypeLabels: Record<StaffContractType, string> = {
    FULLTIME: 'Toàn thời gian (Full-time)',
    PARTTIME: 'Bán thời gian (Part-time)',
    VISITING: 'Thỉnh giảng'
  };

  totalPages = computed(() => Math.ceil(this.totalElements() / this.pageSize()));
  startIndex = computed(() => this.totalElements() === 0 ? 0 : (this.currentPage() - 1) * this.pageSize() + 1);
  endIndex = computed(() => Math.min(this.currentPage() * this.pageSize(), this.totalElements()));

  ngOnInit() {
    const isAcad = this.router.url.startsWith('/academic');
    this.isAcademic.set(isAcad);
    this.isReadOnly.set(isAcad);

    this.initForm();
    this.loadDepartments();
    this.setupFilters();
    this.loadData();
  }

  private initForm() {
    this.staffForm = this.fb.group({
      staffCode: ['', [Validators.required, Validators.maxLength(50)]],
      fullName: ['', [Validators.required, Validators.maxLength(100)]],
      staffType: ['TEACHER' as StaffType, Validators.required],
      departmentId: [''],
      phone: ['', [Validators.pattern(/^(0[3|5|7|8|9])+([0-9]{8})$/)]],
      hireDate: [''],
      contractType: ['FULLTIME' as StaffContractType],
      baseSalary: [0, [Validators.min(0)]],
      status: ['ACTIVE', Validators.required]
    });
  }

  private setupFilters() {
    this.searchControl.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(() => {
      this.currentPage.set(1);
      this.loadData();
    });

    this.typeFilterControl.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.currentPage.set(1); this.loadData();
    });

    this.deptFilterControl.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.currentPage.set(1); this.loadData();
    });
  }

  private loadDepartments() {
    this.departmentService.getAll(undefined, 0, 100).subscribe({
      next: (res) => this.departments.set(res.content || [])
    });
  }

  loadData() {
    this.isLoading.set(true);
    const keyword = this.searchControl.value || undefined;
    const selectedType = this.typeFilterControl.value || undefined;
    const deptIdFilter = this.isAcademic() ? undefined : (this.deptFilterControl.value || undefined);

    const handleFiltering = (resContent: Staff[], totalCount: number) => {
      let list = resContent || [];
      if (this.isAcademic()) {
        if (selectedType) {
          list = list.filter(s => s.staffType === selectedType);
        } else {
          list = list.filter(s => s.staffType === 'TEACHER' || s.staffType === 'TEACHING_ASSISTANT');
        }
      } else {
        if (selectedType) {
          list = list.filter(s => s.staffType === selectedType);
        }
      }
      this.staffs.set(list);
      this.totalElements.set((selectedType || this.isAcademic()) ? list.length : totalCount);
      this.isLoading.set(false);
    };

    if (deptIdFilter) {
      this.staffService.getByDepartment(deptIdFilter, this.currentPage() - 1, this.pageSize()).subscribe({
        next: (res) => handleFiltering(res.content || [], res.totalElements || 0),
        error: () => this.isLoading.set(false)
      });
    } else {
      this.staffService.getAll(keyword, this.currentPage() - 1, this.pageSize()).subscribe({
        next: (res) => handleFiltering(res.content || [], res.totalElements || 0),
        error: () => this.isLoading.set(false)
      });
    }
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage.set(page);
      this.loadData();
    }
  }

  openModal(staff?: Staff) {
    if (staff) {
      this.isEditing.set(true);
      this.currentId.set(staff.id);
      this.staffForm.patchValue({
        staffCode: staff.staffCode,
        fullName: staff.fullName,
        staffType: staff.staffType,
        departmentId: staff.departmentId || '',
        phone: staff.phone || '',
        hireDate: staff.hireDate || '',
        contractType: staff.contractType || 'FULLTIME',
        baseSalary: staff.baseSalary || 0,
        status: staff.status || 'ACTIVE'
      });
      this.staffForm.get('staffCode')?.disable();
    } else {
      this.isEditing.set(false);
      this.currentId.set(null);
      this.staffForm.reset({
        staffCode: '',
        fullName: '',
        staffType: 'TEACHER',
        departmentId: '',
        phone: '',
        hireDate: '',
        contractType: 'FULLTIME',
        baseSalary: 0,
        status: 'ACTIVE'
      });
      this.staffForm.get('staffCode')?.enable();
    }
    this.isModalOpen.set(true);
  }

  closeModal() {
    this.isModalOpen.set(false);
    this.currentId.set(null);
  }

  onSubmit() {
    if (this.staffForm.invalid) return;
    this.isLoading.set(true);
    const data = this.staffForm.getRawValue();
    data.staffCode = (data.staffCode as string).toUpperCase().trim();
    if (data.departmentId) data.departmentId = Number(data.departmentId);

    if (this.isEditing() && this.currentId() != null) {
      this.staffService.update(this.currentId()!, data).subscribe({
        next: () => {
          this.loadData();
          this.closeModal();
          this.toastService.success('Thành công', 'Đã cập nhật thông tin nhân sự!');
        },
        error: (err) => {
          this.isLoading.set(false);
          this.toastService.error('Thất bại', err.error?.message || 'Có lỗi xảy ra khi cập nhật!');
        }
      });
    } else {
      this.staffService.create(data).subscribe({
        next: () => {
          this.loadData();
          this.closeModal();
          this.toastService.success('Thành công', 'Đã thêm nhân sự mới!');
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
      this.staffService.delete(id).subscribe({
        next: () => {
          this.loadData();
          this.closeDeleteModal();
          this.toastService.success('Đã xóa', 'Xóa nhân sự thành công!');
        },
        error: (err) => {
          this.isLoading.set(false);
          this.closeDeleteModal();
          this.toastService.error('Lỗi xóa', err.error?.message || 'Không thể xóa nhân sự này!');
        }
      });
    }
  }
}
