import { Component, OnInit, inject, signal, computed, DestroyRef, ChangeDetectionStrategy } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { UserService } from '../../services/user.service';
import { RoleService } from '../../services/role.service';
import { ToastService } from '../../../../core/services/toast.service';
import { User, UserStatus } from '../../models/user.model';
import { Role } from '../../models/role.model';

@Component({
  selector: 'app-user',
  imports: [CommonModule, ReactiveFormsModule],
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

  totalPages = computed(() => Math.ceil(this.totalElements() / this.pageSize()));
  startIndex = computed(() => this.totalElements() === 0 ? 0 : (this.currentPage() - 1) * this.pageSize() + 1);
  endIndex = computed(() => Math.min(this.currentPage() * this.pageSize(), this.totalElements()));

  searchControl = new FormControl('');
  statusFilterControl = new FormControl('');
  roleFilterControl = new FormControl('');

  isEditModalOpen = signal(false);
  selectedUserForEdit = signal<User | null>(null);
  editForm!: FormGroup;

  isRoleModalOpen = signal(false);
  selectedUserForRole = signal<User | null>(null);
  selectedRoleNames = signal<string[]>([]);

  isStatusModalOpen = signal(false);
  selectedUserForStatus = signal<User | null>(null);
  selectedStatus = new FormControl<UserStatus | ''>('', Validators.required);

  isResetModalOpen = signal(false);
  userToReset = signal<User | null>(null);

  ngOnInit() {
    this.editForm = this.fb.group({
      fullName: ['', [Validators.maxLength(100)]],
      phone: ['', [Validators.maxLength(20)]]
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
      .subscribe(() => { this.currentPage.set(1); this.loadData(); });

    this.roleFilterControl.valueChanges.pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => { this.currentPage.set(1); this.loadData(); });
  }

  loadData() {
    this.isLoading.set(true);
    const keyword = this.searchControl.value || undefined;
    const status = this.statusFilterControl.value || undefined;
    const role = this.roleFilterControl.value || undefined;

    this.userService.getAll(keyword, status, role, this.currentPage() - 1, this.pageSize()).subscribe({
      next: (res) => {
        this.users.set(res.content);
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

  formatRoles(roles?: string[]): string {
    if (!roles || roles.length === 0) return '---';
    return roles.join(', ');
  }

  openEditModal(user: User) {
    this.selectedUserForEdit.set(user);
    this.editForm.patchValue({
      fullName: user.fullName || '',
      phone: user.phone || ''
    });
    this.isEditModalOpen.set(true);
  }

  closeEditModal() {
    this.isEditModalOpen.set(false);
    this.selectedUserForEdit.set(null);
  }

  submitEdit() {
    const user = this.selectedUserForEdit();
    if (!user || this.editForm.invalid) return;

    this.isProcessing.set(true);
    this.userService.update(user.id, this.editForm.value).subscribe({
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

  openRoleModal(user: User) {
    this.selectedUserForRole.set(user);
    this.selectedRoleNames.set([...(user.roles || [])]);
    this.isRoleModalOpen.set(true);
  }

  closeRoleModal() {
    this.isRoleModalOpen.set(false);
    this.selectedUserForRole.set(null);
  }

  toggleRole(roleName: string) {
    const current = this.selectedRoleNames();
    if (current.includes(roleName)) {
      this.selectedRoleNames.set(current.filter(r => r !== roleName));
    } else {
      this.selectedRoleNames.set([...current, roleName]);
    }
  }

  isRoleSelected(roleName: string): boolean {
    return this.selectedRoleNames().includes(roleName);
  }

  submitRoleChange() {
    const user = this.selectedUserForRole();
    if (!user) return;

    const newRoles = this.selectedRoleNames();
    const oldRoles = [...(user.roles || [])].sort().join(',');
    const nextRoles = [...newRoles].sort().join(',');

    if (oldRoles === nextRoles) {
      this.toastService.warning('Cảnh báo', 'Danh sách vai trò không thay đổi.');
      return;
    }

    this.isProcessing.set(true);
    this.userService.updateRoles(user.id, newRoles).subscribe({
      next: () => {
        this.toastService.success('Thành công', `Đã cập nhật vai trò cho ${user.email}`);
        this.isProcessing.set(false);
        this.closeRoleModal();
        this.loadData();
      },
      error: (err) => {
        this.isProcessing.set(false);
        this.toastService.error('Lỗi', err.error?.message || 'Không thể đổi vai trò!');
      }
    });
  }

  openStatusModal(user: User) {
    this.selectedUserForStatus.set(user);
    this.selectedStatus.setValue(user.status);
    this.isStatusModalOpen.set(true);
  }

  closeStatusModal() {
    this.isStatusModalOpen.set(false);
    this.selectedUserForStatus.set(null);
  }

  submitStatusChange() {
    const user = this.selectedUserForStatus();
    const newStatus = this.selectedStatus.value;
    if (!user || !newStatus || this.selectedStatus.invalid) return;

    if (user.status === newStatus) {
      this.closeStatusModal();
      return;
    }

    this.isProcessing.set(true);
    this.userService.updateStatus(user.id, newStatus).subscribe({
      next: () => {
        this.toastService.success('Thành công', `Tài khoản ${user.email} đã chuyển sang: ${newStatus}`);
        this.isProcessing.set(false);
        this.closeStatusModal();
        this.loadData();
      },
      error: (err) => {
        this.isProcessing.set(false);
        this.toastService.error('Lỗi', err.error?.message || 'Không thể cập nhật trạng thái!');
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

  statusLabel(status: UserStatus): string {
    switch (status) {
      case 'ACTIVE': return 'Hoạt động';
      case 'INACTIVE': return 'Ngừng hoạt động';
      case 'LOCKED': return 'Bị khóa';
      default: return status;
    }
  }
}
