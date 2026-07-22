import { Component, OnInit, inject, signal, computed, DestroyRef, ChangeDetectionStrategy } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { PermissionService } from '../../services/permission.service';
import { ToastService } from '../../../../core/services/toast.service';
import { Permission } from '../../models/permission.model';

@Component({
  selector: 'app-permission',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './permission.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PermissionComponent implements OnInit {
  private permissionService = inject(PermissionService);
  private toastService = inject(ToastService);
  private fb = inject(FormBuilder);
  private destroyRef = inject(DestroyRef);

  permissions = signal<Permission[]>([]);
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
  currentId = signal<number | null>(null);
  permForm!: FormGroup;

  isDeleteModalOpen = signal(false);
  idToDelete = signal<number | null>(null);

  ngOnInit() {
    this.initForm();
    this.setupFilters();
    this.loadData();
  }

  private initForm() {
    this.permForm = this.fb.group({
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

    this.permissionService.getAll(keyword, this.currentPage() - 1, this.pageSize()).subscribe({
      next: (res) => {
        this.permissions.set(res.content);
        this.totalElements.set(res.totalElements);
        this.isLoading.set(false);
      },
      error: () => this.isLoading.set(false)
    });
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages()) { this.currentPage.set(page); this.loadData(); }
  }

  openModal(perm?: Permission) {
    if (perm) {
      this.isEditing.set(true);
      this.currentId.set(perm.id);
      this.permForm.patchValue({
        name: perm.name,
        description: perm.description
      });
    } else {
      this.isEditing.set(false);
      this.currentId.set(null);
      this.permForm.reset();
    }
    this.isModalOpen.set(true);
  }

  closeModal() { this.isModalOpen.set(false); }

  onSubmit() {
    if (this.permForm.invalid) return;
    this.isLoading.set(true);
    const data = { ...this.permForm.value };
    data.name = (data.name as string).toUpperCase().trim();

    if (this.isEditing() && this.currentId()) {
      this.permissionService.update(this.currentId()!, data).subscribe({
        next: () => { this.loadData(); this.closeModal(); this.toastService.success('Thành công', 'Đã cập nhật!'); },
        error: (err) => { this.isLoading.set(false); this.toastService.error('Lỗi', err.error?.message); }
      });
    } else {
      this.permissionService.create(data).subscribe({
        next: () => { this.loadData(); this.closeModal(); this.toastService.success('Thành công', 'Đã tạo quyền mới!'); },
        error: (err) => { this.isLoading.set(false); this.toastService.error('Lỗi', err.error?.message); }
      });
    }
  }

  onDelete(id: number) {
    this.idToDelete.set(id);
    this.isDeleteModalOpen.set(true);
  }

  closeDeleteModal() { this.isDeleteModalOpen.set(false); }

  confirmDelete() {
    const id = this.idToDelete();
    if (id) {
      this.isLoading.set(true);
      this.permissionService.delete(id).subscribe({
        next: () => { this.loadData(); this.closeDeleteModal(); this.toastService.success('Đã xóa', 'Xóa quyền thành công.'); },
        error: (err) => { this.isLoading.set(false); this.closeDeleteModal(); this.toastService.error('Lỗi', err.error?.message); }
      });
    }
  }
}
