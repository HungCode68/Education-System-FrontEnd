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
import { RoleService } from '../../../../modules/user/services/role.service';
import { Role } from '../../../../modules/user/models/role.model';
import { AuthService } from '../../../../core/services/auth.service';

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
  private roleService = inject(RoleService);
  private authService = inject(AuthService);

  isReadOnly = signal(false);
  isAcademic = signal(false);

  canProvisionAccount = computed(() => !this.isAcademic());

  staffs = signal<Staff[]>([]);
  departments = signal<Department[]>([]);
  roles = signal<Role[]>([]);

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
  displaySalary = signal('');

  isDeleteModalOpen = signal(false);
  idToDelete = signal<number | string | null>(null);

  selectedStaffIds = signal<(number | string)[]>([]);
  
  isAccountModalOpen = signal(false);
  accountForm!: FormGroup;
  selectedStaffForAccount = signal<Staff | null>(null);

  isBatchAccountModalOpen = signal(false);
  batchAccountForm!: FormGroup;

  staffTypeLabels: Record<StaffType, string> = {
    TEACHER: 'Giáo viên',
    TEACHING_ASSISTANT: 'Trợ giảng',
    CONSULTANT: 'Tư vấn viên',
    MANAGER: 'Quản lý',
    STAFF: 'Nhân viên',
    ADMIN: 'Quản trị'
  };

  contractTypeLabels: Record<StaffContractType, string> = {
    FULLTIME: 'Toàn thời gian (Full-time)',
    PARTTIME: 'Bán thời gian (Part-time)',
    VISITING: 'Thỉnh giảng'
  };

  getGenderText(gender?: string): string {
    if (!gender) return 'Chưa cập nhật';
    const g = gender.toLowerCase();
    if (g === 'male') return 'Nam';
    if (g === 'female') return 'Nữ';
    return gender;
  }

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
    if (this.authService.hasPermission('ROLE_VIEW')) {
      this.loadRoles();
    }
  }

  private loadRoles() {
    this.roleService.getAll(undefined, 0, 100).subscribe({
      next: (res) => this.roles.set(res.content),
      error: (err) => console.error('Failed to load roles', err)
    });
  }

  private initForm() {
    this.staffForm = this.fb.group({
      staffCode: [''], // Mã sinh tự động từ Backend
      fullName: ['', [Validators.required, Validators.maxLength(100)]],
      staffType: ['TEACHER' as StaffType, Validators.required],
      jobTitle: [''],
      departmentId: [''],
      phone: ['', [Validators.pattern(/^(0[3|5|7|8|9])+([0-9]{8})$/)]],
      hireDate: [''],
      contractType: ['FULLTIME' as StaffContractType],
      baseSalary: [0, [Validators.min(0)]],
      status: ['ACTIVE', Validators.required],
      dateOfBirth: [''],
      gender: [''],
      address: [''],
      nationality: ['Vietnam'],
      identityNumber: ['']
    });

    this.accountForm = this.fb.group({
      email: [''],
      roleIds: [[], Validators.required]
    });

    this.batchAccountForm = this.fb.group({
      roleIds: [[], Validators.required]
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
        staffCode: staff.staffCode || '',
        fullName: staff.fullName,
        staffType: staff.staffType,
        jobTitle: staff.jobTitle || '',
        departmentId: staff.departmentId || '',
        phone: staff.phone || '',
        hireDate: staff.hireDate || '',
        contractType: staff.contractType || 'FULLTIME',
        baseSalary: staff.baseSalary || 0,
        status: staff.status || 'ACTIVE',
        dateOfBirth: staff.dateOfBirth || '',
        gender: staff.gender || '',
        address: staff.address || '',
        nationality: staff.nationality || 'Vietnam',
        identityNumber: staff.identityNumber || ''
      });
      this.displaySalary.set(staff.baseSalary ? staff.baseSalary.toLocaleString('vi-VN') : '');
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
        status: 'ACTIVE',
        dateOfBirth: '',
        gender: '',
        address: '',
        nationality: 'Vietnam',
        identityNumber: ''
      });
      this.displaySalary.set('');
      this.staffForm.get('staffCode')?.enable();
    }
    this.isModalOpen.set(true);
  }

  closeModal() {
    this.isModalOpen.set(false);
    this.currentId.set(null);
  }

  onSalaryInput(event: Event) {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/[^0-9]/g, '');
    if (value) {
      this.staffForm.patchValue({ baseSalary: Number(value) });
      input.value = Number(value).toLocaleString('vi-VN');
      this.displaySalary.set(input.value);
    } else {
      this.staffForm.patchValue({ baseSalary: null });
      input.value = '';
      this.displaySalary.set('');
    }
  }

  onSubmit() {
    if (this.staffForm.invalid) return;
    this.isLoading.set(true);
    const data = this.staffForm.getRawValue();
    if (data.staffCode) {
      data.staffCode = (data.staffCode as string).toUpperCase().trim();
    }
    if (data.departmentId) data.departmentId = Number(data.departmentId);

    // Xử lý giá trị chuỗi rỗng thành null
    Object.keys(data).forEach(key => {
      if (data[key] === '') {
        data[key] = null;
      }
    });

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
    if (id !== null && id !== undefined) {
      this.isLoading.set(true);
      this.staffService.delete(id).subscribe({
        next: () => {
          this.loadData();
          this.closeDeleteModal();
          this.toastService.success('Đã xóa', 'Xóa hồ sơ nhân sự thành công!');
        },
        error: (err) => {
          this.isLoading.set(false);
          this.closeDeleteModal();
          this.toastService.error('Lỗi xóa', err.error?.message || 'Không thể xóa nhân sự này!');
        }
      });
    }
  }

  // --- ACCOUNT PROVISION LOGIC ---

  toggleAll(event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;
    if (isChecked) {
      this.selectedStaffIds.set(this.staffs().map(s => s.id));
    } else {
      this.selectedStaffIds.set([]);
    }
  }

  toggleSelection(id: number | string) {
    const current = this.selectedStaffIds();
    const index = current.indexOf(id);
    if (index === -1) {
      this.selectedStaffIds.set([...current, id]);
    } else {
      this.selectedStaffIds.set(current.filter(item => item !== id));
    }
  }

  openAccountModal(staff: Staff) {
    this.selectedStaffForAccount.set(staff);
    let defaultRoleName = 'ACADEMIC';
    if (staff.staffType === 'TEACHER' || staff.staffType === 'TEACHING_ASSISTANT') defaultRoleName = 'TEACHER';
    if (staff.staffType === 'MANAGER') defaultRoleName = 'MANAGER';
    if (staff.staffType === 'CONSULTANT') defaultRoleName = 'CONSULTANT';
    
    const suggestedRole = this.roles().find(r => r.name === defaultRoleName);
    const defaultRoles = suggestedRole ? [suggestedRole.id] : [];
    
    this.accountForm.reset({ email: staff.userEmail || '', roleIds: defaultRoles });
    this.isAccountModalOpen.set(true);
  }

  closeAccountModal() {
    this.isAccountModalOpen.set(false);
    this.selectedStaffForAccount.set(null);
  }
  toggleRole(form: FormGroup, roleId: number | string) {
    const currentRoles = form.get('roleIds')?.value as (number | string)[] || [];
    const index = currentRoles.indexOf(roleId);
    if (index === -1) {
      form.get('roleIds')?.setValue([...currentRoles, roleId]);
    } else {
      form.get('roleIds')?.setValue(currentRoles.filter(id => id !== roleId));
    }
    form.get('roleIds')?.markAsTouched();
  }

  onSubmitAccount() {
    const staffId = this.selectedStaffForAccount()?.id;
    if (!staffId) return;

    this.isLoading.set(true);
    const email = this.accountForm.value.email;
    const roleIds = this.accountForm.value.roleIds || [];

    this.staffService.createAccount(staffId, roleIds, email).subscribe({
      next: () => {
        this.loadData();
        this.closeAccountModal();
        this.toastService.success('Đã cấp', 'Tài khoản đã được tạo thành công!');
      },
      error: (err) => {
        this.isLoading.set(false);
        this.toastService.error('Lỗi cấp TK', err.error?.message || 'Không thể tạo tài khoản!');
      }
    });
  }

  openBatchAccountModal() {
    if (this.selectedStaffIds().length === 0) return;
    this.batchAccountForm.reset({ roleIds: [] });
    this.isBatchAccountModalOpen.set(true);
  }

  closeBatchAccountModal() {
    this.isBatchAccountModalOpen.set(false);
  }

  executeBatchAccountCreation() {
    const ids = this.selectedStaffIds();
    if (ids.length === 0) return;

    const roleIds = this.batchAccountForm.value.roleIds || [];

    this.isLoading.set(true);
    this.staffService.createAccountsBatch(ids, roleIds).subscribe({
      next: (res) => {
        this.loadData();
        this.closeBatchAccountModal();
        this.selectedStaffIds.set([]);
        this.toastService.success('Hoàn tất', `Cấp tài khoản thành công: ${res.data?.successCount || ids.length}`);
      },
      error: (err) => {
        this.isLoading.set(false);
        this.closeBatchAccountModal();
        this.toastService.error('Lỗi hệ thống', err.error?.message || 'Có lỗi xảy ra khi tạo hàng loạt!');
      }
    });
  }
}
