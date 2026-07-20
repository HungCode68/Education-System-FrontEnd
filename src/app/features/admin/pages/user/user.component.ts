import { Component, OnInit, inject, signal, computed, DestroyRef } from '@angular/core';
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
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {
  private userService = inject(UserService);
  private roleService = inject(RoleService);
  private toastService = inject(ToastService);
  private destroyRef = inject(DestroyRef);

  // --- STATE DANH SÁCH ---
  users = signal<User[]>([]);
  roles = signal<Role[]>([]); 
  
  totalElements = signal(0);
  currentPage = signal(1); 
  pageSize = signal(10);
  isLoading = signal(false);
  isProcessing = signal(false); // Trạng thái khi đang call API đổi Role/Status

  totalPages = computed(() => Math.ceil(this.totalElements() / this.pageSize()));
  startIndex = computed(() => this.totalElements() === 0 ? 0 : (this.currentPage() - 1) * this.pageSize() + 1);
  endIndex = computed(() => Math.min(this.currentPage() * this.pageSize(), this.totalElements()));

  // --- STATE BỘ LỌC ---
  searchControl = new FormControl('');
  statusFilterControl = new FormControl('');
  roleFilterControl = new FormControl('');

  // --- STATE MODAL ĐỔI VAI TRÒ ---
  isRoleModalOpen = signal(false);
  selectedUserForRole = signal<User | null>(null);
  selectedRoleCode = new FormControl('', Validators.required);

  // --- STATE MODAL ĐỔI TRẠNG THÁI ---
  isStatusModalOpen = signal(false);
  selectedUserForStatus = signal<User | null>(null);
  selectedStatus = new FormControl('', Validators.required);

  // --- STATE MODAL RESET PASSWORD ---
  isResetModalOpen = signal(false);
  userToReset = signal<User | null>(null);

  ngOnInit() {
    this.loadRoles();
    this.setupFilters();
    this.loadData();
  }

  private loadRoles() {
    // Lấy tất cả các Role đang active để đổ vào Dropdown
    this.roleService.getAll(undefined, 'active', 0, 100).subscribe({
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
    const roleCode = this.roleFilterControl.value || undefined;

    this.userService.getAll(keyword, status, roleCode, this.currentPage() - 1, this.pageSize()).subscribe({
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

  // --- LOGIC MODAL ĐỔI VAI TRÒ ---
  openRoleModal(user: User) {
    this.selectedUserForRole.set(user);
    this.selectedRoleCode.setValue(user.roleCode || '');
    this.isRoleModalOpen.set(true);
  }

  closeRoleModal() {
    this.isRoleModalOpen.set(false);
    this.selectedUserForRole.set(null);
  }

  submitRoleChange() {
    const user = this.selectedUserForRole();
    const newRoleCode = this.selectedRoleCode.value;
    if (!user || !newRoleCode || this.selectedRoleCode.invalid) return;

    if (user.roleCode === newRoleCode) {
      this.toastService.warning('Cảnh báo', 'Vai trò mới giống hệt vai trò hiện tại.');
      return;
    }

    this.isProcessing.set(true);
    this.userService.changeRole(user.id, newRoleCode).subscribe({
      next: () => {
        this.toastService.success('Thành công', `Đã cập nhật vai trò cho tài khoản ${user.email}`);
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

  // --- LOGIC MODAL ĐỔI TRẠNG THÁI ---
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
        this.toastService.success('Thành công', `Tài khoản ${user.email} đã chuyển sang trạng thái: ${newStatus}`);
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

  // --- LOGIC MODAL RESET PASSWORD ---
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
    // Gọi hàm resetPassword từ UserService
    this.userService.resetPassword(user.id).subscribe({
      next: (res: any) => {
        this.toastService.success('Thành công', res.message || 'Đã đặt lại mật khẩu về mã mặc định!');
        this.isProcessing.set(false);
        this.closeResetModal();
      },
      error: (err: any) => {
        this.isProcessing.set(false);
        this.closeResetModal();
        this.toastService.error('Lỗi', err.error?.message || 'Không thể reset mật khẩu!');
      }
    });
  }
}