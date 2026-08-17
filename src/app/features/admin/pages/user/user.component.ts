import { Component, OnInit, inject, signal, computed, DestroyRef, ChangeDetectionStrategy } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { forkJoin, of } from 'rxjs';
import { UserService } from '../../../../modules/user/services/user.service';
import { RoleService } from '../../../../modules/user/services/role.service';
import { ToastService } from '../../../../core/services/toast.service';
import { User, UserStatus } from '../../../../modules/user/models/user.model';
import { Role } from '../../../../modules/user/models/role.model';

import { HasPermissionDirective } from '../../../../core/directives/has-permission.directive';

@Component({
  selector: 'app-user',
  imports: [CommonModule, ReactiveFormsModule, HasPermissionDirective],
  templateUrl: './user.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent implements OnInit {
  private userService = inject(UserService);
  private roleService = inject(RoleService);
  private toastService = inject(ToastService);
  private fb = inject(FormBuilder);
  private destroyRef = inject(DestroyRef);

  users = signal<User[]>([]);
  roles = signal<Role[]>([]);

  totalElements = signal(0);
  currentPage = signal(1);
  pageSize = signal(10);
  isLoading = signal(false);
  isProcessing = signal(false);

  searchControl = new FormControl('');
  statusFilterControl = new FormControl('');
  roleFilterControl = new FormControl('');

  selectedStatusFilter = signal<string>('');
  selectedRoleFilter = signal<string>('');

  // Client-side filtering by status & role
  filteredUsers = computed(() => {
    let list = this.users();
    const status = this.selectedStatusFilter();
    const role = this.selectedRoleFilter();

    if (status) {
      list = list.filter(u => u.status === status);
    }
    if (role) {
      list = list.filter(u => u.roles && u.roles.includes(role));
    }
    return list;
  });

  totalPages = computed(() => Math.ceil(this.totalElements() / this.pageSize()));
  startIndex = computed(() => this.totalElements() === 0 ? 0 : (this.currentPage() - 1) * this.pageSize() + 1);
  endIndex = computed(() => Math.min(this.currentPage() * this.pageSize(), this.totalElements()));

  // Edit Modal State (Combines Name & Status)
  isEditModalOpen = signal(false);
  selectedUserForEdit = signal<User | null>(null);
  editForm!: FormGroup;

  // Role Modal State
  isRoleModalOpen = signal(false);
  selectedUserForRole = signal<User | null>(null);
  selectedRoleNames = signal<string[]>([]);

  // Reset Password Modal State
  isResetModalOpen = signal(false);
  userToReset = signal<User | null>(null);

  // Delete Modal State
  isDeleteModalOpen = signal(false);
  userToDelete = signal<User | null>(null);

  ngOnInit() {
    this.editForm = this.fb.group({
      status: ['ACTIVE', [Validators.required]],
      roleNames: [[], [Validators.required]]
    });
    this.loadRoles();
    this.setupFilters();
    this.loadData();
  }

  private loadRoles() {
    this.roleService.getAll(undefined, 0, 100).subscribe({
      next: (res) => this.roles.set(res.content || [])
    });
  }

  private setupFilters() {
    this.searchControl.valueChanges.pipe(debounceTime(400), distinctUntilChanged(), takeUntilDestroyed(this.destroyRef))
      .subscribe(() => { this.currentPage.set(1); this.loadData(); });

    this.statusFilterControl.valueChanges.pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((val) => { this.selectedStatusFilter.set(val || ''); });

    this.roleFilterControl.valueChanges.pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((val) => { this.selectedRoleFilter.set(val || ''); });
  }

  loadData() {
    this.isLoading.set(true);
    const keyword = this.searchControl.value || undefined;

    this.userService.getAll(keyword, undefined, undefined, this.currentPage() - 1, this.pageSize()).subscribe({
      next: (res) => {
        this.users.set(res.content || []);
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

  formatRoles(roles?: string[]): string {
    if (!roles || roles.length === 0) return '---';
    return roles.join(', ');
  }

  openEditModal(user: User) {
    this.selectedUserForEdit.set(user);
    this.editForm.patchValue({
      status: user.status || 'ACTIVE',
      roleNames: [...(user.roles || [])]
    });
    this.isEditModalOpen.set(true);
  }

  closeEditModal() {
    this.isEditModalOpen.set(false);
    this.selectedUserForEdit.set(null);
  }

  toggleRole(roleName: string) {
    const current = this.editForm.get('roleNames')?.value as string[] || [];
    if (current.includes(roleName)) {
      this.editForm.get('roleNames')?.setValue(current.filter(r => r !== roleName));
    } else {
      this.editForm.get('roleNames')?.setValue([...current, roleName]);
    }
    this.editForm.get('roleNames')?.markAsTouched();
  }

  submitEdit() {
    const user = this.selectedUserForEdit();
    if (!user || this.editForm.invalid) return;

    const val = this.editForm.value;
    const statusChanged = val.status && val.status !== user.status;
    const oldRoles = [...(user.roles || [])].sort().join(',');
    const nextRoles = [...(val.roleNames || [])].sort().join(',');
    const rolesChanged = oldRoles !== nextRoles;

    if (!statusChanged && !rolesChanged) {
      this.closeEditModal();
      return;
    }

    this.isProcessing.set(true);

    const updateStatus$ = statusChanged ? this.userService.updateStatus(user.id, val.status) : of(null);
    const updateRoles$ = rolesChanged ? this.userService.updateRoles(user.id, val.roleNames) : of(null);

    forkJoin([updateStatus$, updateRoles$]).subscribe({
      next: () => {
        this.toastService.success('Thành công', 'Đã cập nhật thông tin tài khoản!');
        this.isProcessing.set(false);
        this.closeEditModal();
        this.loadData();
      },
      error: (err) => {
        this.isProcessing.set(false);
        this.toastService.error('Lỗi', err.error?.message || 'Không thể cập nhật!');
      }
    });
  }

  openResetModal(user: User) {
    this.userToReset.set(user);
    this.isResetModalOpen.set(true);
  }

  closeResetModal() {
    this.isResetModalOpen.set(false);
    this.userToReset.set(null);
  }

  confirmResetPassword() {
    const user = this.userToReset();
    if (!user) return;

    this.isProcessing.set(true);
    this.userService.resetPassword(user.id).subscribe({
      next: (res: unknown) => {
        const message = (res as { message?: string })?.message || 'Đã đặt lại mật khẩu về mã mặc định!';
        this.toastService.success('Thành công', message);
        this.isProcessing.set(false);
        this.closeResetModal();
      },
      error: (err: { error?: { message?: string } }) => {
        this.isProcessing.set(false);
        this.closeResetModal();
        this.toastService.error('Lỗi', err.error?.message || 'Không thể reset mật khẩu!');
      }
    });
  }

  openDeleteModal(user: User) {
    this.userToDelete.set(user);
    this.isDeleteModalOpen.set(true);
  }

  closeDeleteModal() {
    this.isDeleteModalOpen.set(false);
    this.userToDelete.set(null);
  }

  confirmDelete() {
    const user = this.userToDelete();
    if (!user) return;
    
    this.isProcessing.set(true);
    this.userService.delete(user.id).subscribe({
      next: () => {
        this.toastService.success('Thành công', 'Đã thu hồi tài khoản thành công!');
        this.isProcessing.set(false);
        this.closeDeleteModal();
        this.loadData();
      },
      error: (err) => {
        this.isProcessing.set(false);
        this.closeDeleteModal();
        this.toastService.error('Lỗi', err.error?.message || 'Không thể thu hồi tài khoản!');
      }
    });
  }

  statusLabel(status: UserStatus): string {
    switch (status) {
      case 'ACTIVE': return 'Hoạt động';
      case 'INACTIVE': return 'Ngừng hoạt động';
      case 'LOCKED': return 'Bị khóa';
      default: return status;
    }
  }
}
