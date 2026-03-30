import { Component, OnInit, inject, signal, computed, DestroyRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { RoleService } from '../../services/role.service';
import { ToastService } from '../../../../core/services/toast.service';
import { Role } from '../../models/role.model';
import { PermissionService } from '../../services/permission.service';
import { Permission } from '../../models/role.model';

@Component({
  selector: 'app-role',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './role.component.html'
})
export class RoleComponent implements OnInit {
  private roleService = inject(RoleService);
  private toastService = inject(ToastService);
  private fb = inject(FormBuilder);
  private destroyRef = inject(DestroyRef);
  private permissionService = inject(PermissionService);

  // --- STATE DANH SÁCH ---
  roles = signal<Role[]>([]);
  totalElements = signal(0);
  currentPage = signal(1); 
  pageSize = signal(10);
  isLoading = signal(false);

  totalPages = computed(() => Math.ceil(this.totalElements() / this.pageSize()));
  startIndex = computed(() => this.totalElements() === 0 ? 0 : (this.currentPage() - 1) * this.pageSize() + 1);
  endIndex = computed(() => Math.min(this.currentPage() * this.pageSize(), this.totalElements()));

  // --- STATE BỘ LỌC ---
  searchControl = new FormControl('');
  statusFilterControl = new FormControl('');

  // --- STATE MODAL THÊM/SỬA ---
  isModalOpen = signal(false);
  isEditing = signal(false);
  currentId = signal<string | null>(null);
  roleForm!: FormGroup;

  // --- STATE MODAL XÓA (VÔ HIỆU HÓA) ---
  isDeleteModalOpen = signal(false);
  idToDelete = signal<string | null>(null);

  // --- STATE MODAL PHÂN QUYỀN ---
  isPermissionModalOpen = signal(false);
  selectedRoleForPermission = signal<Role | null>(null);

  // --- STATE CHUYÊN SÂU CHO PHÂN QUYỀN ---
  // Lưu danh sách quyền được group theo Scope: { scope: 'SYSTEM', permissions: [...] }
  groupedPermissions = signal<{ scope: string, permissions: Permission[] }[]>([]);
  // Mảng chứa ID (số nguyên) của các quyền được tick
  selectedPermissionIds = signal<number[]>([]);
  isAssigning = signal(false);

  ngOnInit() {
    this.initForm();
    this.setupFilters();
    this.loadData();
  }

  private initForm() {
    this.roleForm = this.fb.group({
      code: ['', [Validators.required, Validators.maxLength(50)]],
      name: ['', [Validators.required, Validators.maxLength(100)]],
      status: ['active']
    });
  }

  private setupFilters() {
    this.searchControl.valueChanges.pipe(debounceTime(400), distinctUntilChanged(), takeUntilDestroyed(this.destroyRef))
      .subscribe(() => { this.currentPage.set(1); this.loadData(); });

    this.statusFilterControl.valueChanges.pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => { this.currentPage.set(1); this.loadData(); });
  }

  loadData() {
    this.isLoading.set(true);
    const keyword = this.searchControl.value || undefined;
    const status = this.statusFilterControl.value || undefined;

    this.roleService.getAll(keyword, status, this.currentPage() - 1, this.pageSize()).subscribe({
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

  // --- LOGIC MODAL THÊM/SỬA ---
  openModal(role?: Role) {
    if (role) {
      this.isEditing.set(true);
      this.currentId.set(role.id);
      this.roleForm.patchValue({
        code: role.code,
        name: role.name,
        status: role.status
      });
    } else {
      this.isEditing.set(false);
      this.currentId.set(null);
      this.roleForm.reset({ status: 'active' });
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
    const data = this.roleForm.value;
    data.code = data.code.toUpperCase(); 

    if (this.isEditing() && this.currentId()) {
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

  // --- LOGIC MODAL XÓA (VÔ HIỆU HÓA) ---
  onDelete(id: string) {
    this.idToDelete.set(id);
    this.isDeleteModalOpen.set(true);
  }

  closeDeleteModal() {
    this.isDeleteModalOpen.set(false);
    this.idToDelete.set(null);
  }

  confirmDelete() {
    const id = this.idToDelete();
    if (id) {
      this.isLoading.set(true);
      this.roleService.delete(id).subscribe({
        next: () => { 
          this.loadData(); 
          this.closeDeleteModal(); 
          this.toastService.success('Hoàn tất', 'Đã xử lý xóa hoặc vô hiệu hóa vai trò.');
        },
        error: (err) => { 
          this.isLoading.set(false); 
          this.closeDeleteModal(); 
          this.toastService.error('Lỗi', err.error?.message || 'Không thể xử lý!');
        }
      });
    }
  }

  // --- LOGIC GIAO DIỆN PHÂN QUYỀN ---
  openPermissionModal(role: Role) {
    this.selectedRoleForPermission.set(role);
    this.isPermissionModalOpen.set(true);
    this.isLoading.set(true);

    // Lấy trước các quyền mà Role này đang có (từ data bảng)
    const currentPerms = role.permissions || [];
    this.selectedPermissionIds.set(currentPerms.map(p => Number(p.id)));

    // Gọi API lấy toàn bộ Permission trong hệ thống (lấy page 0, size 1000 cho chắc)
    this.permissionService.getAll(undefined, undefined, 0, 1000).subscribe({
      next: (res) => {
        const allPerms = res.content;
        // Gom nhóm (Group by Scope)
        const groups: { [key: string]: Permission[] } = {};
        allPerms.forEach(p => {
          if (!groups[p.scope]) groups[p.scope] = [];
          groups[p.scope].push(p);
        });

        // Chuyển object thành mảng để Angular dễ duyệt bằng *ngFor
        const groupedArray = Object.keys(groups).map(scope => ({
          scope,
          permissions: groups[scope]
        }));
        
        this.groupedPermissions.set(groupedArray);
        this.isLoading.set(false);
      },
      error: () => this.isLoading.set(false)
    });
  }

  closePermissionModal() {
    this.isPermissionModalOpen.set(false);
    this.selectedRoleForPermission.set(null);
  }

  // Checkbox tick lẻ từng quyền
  togglePermission(permId: number) {
    const current = this.selectedPermissionIds();
    if (current.includes(permId)) {
      this.selectedPermissionIds.set(current.filter(id => id !== permId));
    } else {
      this.selectedPermissionIds.set([...current, permId]);
    }
  }

  // Checkbox "Chọn tất cả" theo từng nhóm
  toggleScopeGroup(scopePerms: Permission[], event: any) {
    const isChecked = event.target.checked;
    const idsInGroup = scopePerms.map(p => Number(p.id));
    let current = [...this.selectedPermissionIds()];

    if (isChecked) {
      // Thêm những ID chưa có vào danh sách chọn
      idsInGroup.forEach(id => {
        if (!current.includes(id)) current.push(id);
      });
    } else {
      // Xóa những ID của nhóm này khỏi danh sách chọn
      current = current.filter(id => !idsInGroup.includes(id));
    }
    this.selectedPermissionIds.set(current);
  }

  // Kiểm tra xem 1 nhóm đã được chọn full chưa (để check cái checkbox tổng)
  isScopeGroupFullySelected(scopePerms: Permission[]): boolean {
    if (scopePerms.length === 0) return false;
    const current = this.selectedPermissionIds();
    return scopePerms.every(p => current.includes(Number(p.id)));
  }

  // Bấm nút Lưu phân quyền
  savePermissions() {
    const roleId = this.selectedRoleForPermission()?.id;
    if (!roleId) return;

    this.isAssigning.set(true);
    this.roleService.assignPermissions(roleId, this.selectedPermissionIds()).subscribe({
      next: () => {
        this.isAssigning.set(false);
        this.closePermissionModal();
        this.toastService.success('Thành công', 'Đã cập nhật phân quyền!');
        this.loadData(); // Load lại bảng Role để cập nhật cột số lượng quyền
      },
      error: (err) => {
        this.isAssigning.set(false);
        this.toastService.error('Lỗi', err.error?.message || 'Lỗi phân quyền!');
      }
    });
  }
}