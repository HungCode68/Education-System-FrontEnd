import { Component, OnInit, inject, signal, computed, DestroyRef, ChangeDetectionStrategy } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { RoleService } from '../../../../modules/user/services/role.service';
import { ToastService } from '../../../../core/services/toast.service';
import { Role, Permission } from '../../../../modules/user/models/role.model';
import { PermissionService } from '../../../../modules/user/services/permission.service';
import { HasPermissionDirective } from '../../../../core/directives/has-permission.directive';

@Component({
  selector: 'app-role',
  imports: [CommonModule, ReactiveFormsModule, HasPermissionDirective],
  templateUrl: './role.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoleComponent implements OnInit {
  private roleService = inject(RoleService);
  private toastService = inject(ToastService);
  private fb = inject(FormBuilder);
  private destroyRef = inject(DestroyRef);
  private permissionService = inject(PermissionService);

  roles = signal<Role[]>([]);
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
  roleForm!: FormGroup;

  isDeleteModalOpen = signal(false);
  idToDelete = signal<string | number | null>(null);

  isPermissionModalOpen = signal(false);
  selectedRoleForPermission = signal<Role | null>(null);
  allPermissions = signal<Permission[]>([]);
  selectedPermissionIds = signal<number[]>([]);
  isAssigning = signal(false);

  private readonly MODULE_LABELS: Record<string, string> = {
    COURSE: '📚 Quản lý Khóa học',
    CLASS: '🏫 Quản lý Lớp học',
    STUDENT: '🎓 Quản lý Học viên',
    STAFF: '👨‍🏫 Quản lý Giảng viên',
    ENROLLMENT: '📋 Quản lý Đăng ký học',
    SCHEDULE: '📅 Quản lý Lịch học',
    LESSON: '📖 Quản lý Buổi học',
    ROOM: '🏢 Quản lý Phòng học',
    TERM: '📆 Quản lý Học kỳ',
    TEACHING: '🖊️ Phân công Giảng dạy',
    ASSIGNMENT: '📝 Quản lý Bài tập',
    SUBSTITUTION: '🔄 Thay thế Giảng dạy',
    DEPARTMENT: '🏛️ Quản lý Bộ phận',
    ROLE: '🛡️ Quản lý Vai trò',
    PERMISSION: '🔑 Quản lý Quyền hạn',
    ACCOUNT: '👤 Quản lý Tài khoản',
    USER: '👤 Quản lý Người dùng',
    REPORT: '📊 Báo cáo & Thống kê',
    LOG: '📜 Nhật ký hoạt động',
    SYSTEM: '⚙️ Quản lý Hệ thống',
  };

  groupedPermissions = computed(() => {
    const groups = new Map<string, { label: string; permissions: Permission[] }>();
    for (const perm of this.allPermissions()) {
      const prefix = perm.name.split('_')[0];
      const label = this.MODULE_LABELS[prefix] ?? `🔧 ${prefix}`;
      if (!groups.has(prefix)) {
        groups.set(prefix, { label, permissions: [] });
      }
      groups.get(prefix)!.permissions.push(perm);
    }
    return Array.from(groups.values()).sort((a, b) => a.label.localeCompare(b.label));
  });

  isGroupAllSelected(permissions: Permission[]): boolean {
    const current = this.selectedPermissionIds();
    return permissions.length > 0 && permissions.every(p => current.includes(Number(p.id)));
  }

  isGroupPartialSelected(permissions: Permission[]): boolean {
    const current = this.selectedPermissionIds();
    const count = permissions.filter(p => current.includes(Number(p.id))).length;
    return count > 0 && count < permissions.length;
  }

  getGroupSelectedCount(permissions: Permission[]): number {
    const current = this.selectedPermissionIds();
    return permissions.filter(p => current.includes(Number(p.id))).length;
  }

  toggleGroupPermissions(permissions: Permission[], selectAll: boolean) {
    const ids = permissions.map(p => Number(p.id));
    const current = this.selectedPermissionIds();
    if (selectAll) {
      const merged = Array.from(new Set([...current, ...ids]));
      this.selectedPermissionIds.set(merged);
    } else {
      this.selectedPermissionIds.set(current.filter(id => !ids.includes(id)));
    }
  }

  ngOnInit() {
    this.initForm();
    this.setupFilters();
    this.loadData();
  }

  private initForm() {
    this.roleForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(50)]],
      description: ['', [Validators.maxLength(255)]]
    });
  }

  private setupFilters() {
    this.searchControl.valueChanges.pipe(debounceTime(400), distinctUntilChanged(), takeUntilDestroyed(this.destroyRef))
      .subscribe(() => { this.currentPage.set(1); this.loadData(); });
  }

  loadData() {
    this.isLoading.set(true);
    const keyword = this.searchControl.value || undefined;

    this.roleService.getAll(keyword, this.currentPage() - 1, this.pageSize()).subscribe({
      next: (res) => {
        this.roles.set(res.content);
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

  openModal(role?: Role) {
    if (role) {
      this.isEditing.set(true);
      this.currentId.set(role.id);
      this.roleForm.patchValue({
        name: role.name,
        description: role.description
      });
    } else {
      this.isEditing.set(false);
      this.currentId.set(null);
      this.roleForm.reset();
    }
    this.isModalOpen.set(true);
  }

  closeModal() {
    this.isModalOpen.set(false);
    this.currentId.set(null);
  }

  onSubmit() {
    if (this.roleForm.invalid) return;
    this.isLoading.set(true);
    const data = { ...this.roleForm.value };
    data.name = (data.name as string).toUpperCase().trim();

    if (this.isEditing() && this.currentId() != null) {
      this.roleService.update(this.currentId()!, data).subscribe({
        next: () => {
          this.loadData(); this.closeModal(); this.toastService.success('Thành công', 'Đã cập nhật Vai trò!');
        },
        error: (err) => {
          this.isLoading.set(false); this.toastService.error('Lỗi', err.error?.message || 'Cập nhật thất bại');
        }
      });
    } else {
      this.roleService.create(data).subscribe({
        next: () => {
          this.loadData(); this.closeModal(); this.toastService.success('Thành công', 'Đã tạo Vai trò mới!');
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
      this.roleService.delete(id).subscribe({
        next: () => {
          this.loadData();
          this.closeDeleteModal();
          this.toastService.success('Hoàn tất', 'Đã xóa vai trò.');
        },
        error: (err) => {
          this.isLoading.set(false);
          this.closeDeleteModal();
          this.toastService.error('Lỗi', err.error?.message || 'Không thể xử lý!');
        }
      });
    }
  }

  openPermissionModal(role: Role) {
    this.selectedRoleForPermission.set(role);
    this.isPermissionModalOpen.set(true);
    this.isLoading.set(true);

    const currentPerms = role.permissions || [];
    this.selectedPermissionIds.set(currentPerms.map(p => Number(p.id)));

    this.permissionService.getAll(undefined, 0, 1000).subscribe({
      next: (res) => {
        this.allPermissions.set(res.content);
        this.isLoading.set(false);
      },
      error: () => this.isLoading.set(false)
    });
  }

  closePermissionModal() {
    this.isPermissionModalOpen.set(false);
    this.selectedRoleForPermission.set(null);
  }

  togglePermission(permId: number) {
    const current = this.selectedPermissionIds();
    if (current.includes(permId)) {
      this.selectedPermissionIds.set(current.filter(id => id !== permId));
    } else {
      this.selectedPermissionIds.set([...current, permId]);
    }
  }

  toggleAllPermissions(event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;
    if (isChecked) {
      this.selectedPermissionIds.set(this.allPermissions().map(p => Number(p.id)));
    } else {
      this.selectedPermissionIds.set([]);
    }
  }

  isAllSelected(): boolean {
    const all = this.allPermissions();
    if (all.length === 0) return false;
    const current = this.selectedPermissionIds();
    return all.every(p => current.includes(Number(p.id)));
  }

  savePermissions() {
    const roleId = this.selectedRoleForPermission()?.id;
    if (roleId == null) return;

    this.isAssigning.set(true);
    this.roleService.assignPermissions(roleId, this.selectedPermissionIds()).subscribe({
      next: () => {
        this.isAssigning.set(false);
        this.closePermissionModal();
        this.toastService.success('Thành công', 'Đã cập nhật phân quyền!');
        this.loadData();
      },
      error: (err) => {
        this.isAssigning.set(false);
        this.toastService.error('Lỗi', err.error?.message || 'Lỗi phân quyền!');
      }
    });
  }
}
