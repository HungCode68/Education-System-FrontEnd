import { Component, OnInit, inject, signal, DestroyRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { OnlineClassService } from '../../services/online-class.service';
import { ToastService } from '../../../../core/services/toast.service';
import { OnlineClass, PageResponse } from '../../models/online-class.model';
import { PhysicalClassService } from '../../services/physical-class.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-online-class',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './online-class.component.html'
})
export class OnlineClassComponent implements OnInit {
  private onlineClassService = inject(OnlineClassService);
  private toastService = inject(ToastService);
  private fb = inject(FormBuilder);
  private destroyRef = inject(DestroyRef);
  private physicalClassService = inject(PhysicalClassService);

  // --- STATE DANH SÁCH ---
  onlineClasses = signal<OnlineClass[]>([]);
  pageData = signal<PageResponse<any>>({ content: [], pageNo: 1, pageSize: 10, totalElements: 0, totalPages: 0, last: true });
  isLoading = signal(false);

  // --- STATE BỘ LỌC ---
  searchControl = new FormControl('');
  statusFilterControl = new FormControl('active'); // Mặc định hiển thị lớp đang active

  // --- STATE MODAL SỬA ---
  isEditModalOpen = signal(false);
  editForm!: FormGroup;
  selectedClass = signal<OnlineClass | null>(null);

  physicalClasses = signal<any[]>([]); // Chứa danh sách lớp vật lý
  classFilterControl = new FormControl('');

  ngOnInit() {
    this.initForm();
    this.setupFilters();
    this.loadPhysicalClasses();
    this.loadData();
  }

  private loadPhysicalClasses() {
    this.physicalClassService.search(1, 100).subscribe(res => {
      this.physicalClasses.set(res.content || []);
    });
  }

  private initForm() {
    this.editForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(150)]],
      status: ['active', Validators.required]
    });
  }

  private setupFilters() {
    this.searchControl.valueChanges.pipe(debounceTime(400), distinctUntilChanged(), takeUntilDestroyed(this.destroyRef))
      .subscribe(() => { this.changePage(1); });

    this.statusFilterControl.valueChanges.pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => { this.changePage(1); });

    this.classFilterControl.valueChanges.pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => { this.changePage(1); });
  }

  loadData(page: number = 1) {
    this.isLoading.set(true);
    const keyword = this.searchControl.value || undefined;
    const status = this.statusFilterControl.value || undefined;
    const classId = this.classFilterControl.value || undefined; // Lấy giá trị lọc lớp

    // Truyền thêm classId vào hàm search
    this.onlineClassService.search(keyword, status, classId, page, 10).subscribe({
      next: (res) => {
        this.pageData.set(res);
        this.onlineClasses.set(res.content);
        this.isLoading.set(false);
      },
      error: () => this.isLoading.set(false)
    });
  }

  changePage(page: number) {
    if (page >= 1 && (this.pageData().totalPages === 0 || page <= this.pageData().totalPages)) {
      this.loadData(page);
    }
  }

  // --- LOGIC MODAL SỬA ---
  openEditModal(cls: OnlineClass) {
    this.selectedClass.set(cls);
    this.editForm.patchValue({
      name: cls.name,
      status: cls.status
    });
    this.isEditModalOpen.set(true);
  }

  closeEditModal() {
    this.isEditModalOpen.set(false);
    this.selectedClass.set(null);
  }

  onSubmitEdit() {
    if (this.editForm.invalid) return;
    
    const cls = this.selectedClass();
    if (!cls) return;

    this.isLoading.set(true);
    const updateData = this.editForm.value;

    this.onlineClassService.update(cls.id, updateData).subscribe({
      next: () => {
        this.toastService.success('Thành công', 'Đã cập nhật thông tin lớp học bộ môn!');
        this.closeEditModal();
        this.loadData(this.pageData().pageNo); // Tải lại trang hiện tại
      },
      error: (err) => {
        this.isLoading.set(false);
        this.toastService.error('Lỗi', err.error?.message || 'Cập nhật thất bại');
      }
    });
  }
}