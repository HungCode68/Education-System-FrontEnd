import { Component, OnInit, inject, signal, DestroyRef, computed } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { SchoolYearService } from '../../services/school-year.service';
import { SchoolYear } from '../../models/school-year.model';
import { ToastService } from './../../../../core/services/toast.service';

@Component({
  selector: 'app-school-year',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './school-year.component.html'
})
export class SchoolYearComponent implements OnInit {
  private schoolYearService = inject(SchoolYearService);
  private fb = inject(FormBuilder);
  private destroyRef = inject(DestroyRef);
  private toastService = inject(ToastService);

  // State quản lý danh sách
  schoolYears = signal<SchoolYear[]>([]);
  totalElements = signal(0);
  currentPage = signal(1);
  pageSize = signal(10);
  isLoading = signal(false);
  searchControl = new FormControl('');
  

  // State quản lý Form Modal
  isModalOpen = signal(false);
  isEditing = signal(false);
  currentId = signal<string | null>(null);
  
  schoolYearForm!: FormGroup;
  isDeleteModalOpen = signal(false); // Modal xác nhận xóa nhỏ
  idToDelete = signal<string | null>(null); // Lưu ID tạm thời để xóa
  isArchiveModalOpen = signal(false);
  idToArchive = signal<string | null>(null);


  totalPages = computed(() => Math.ceil(this.totalElements() / this.pageSize()));
  
  startIndex = computed(() => 
    this.totalElements() === 0 ? 0 : (this.currentPage() - 1) * this.pageSize() + 1
  );
  
  endIndex = computed(() => 
    Math.min(this.currentPage() * this.pageSize(), this.totalElements())
  );

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage.set(page);
      this.loadData(); // Gọi lại API với số trang mới
    }
  }

  ngOnInit() {
    this.initForm();
    this.setupSearch();
    this.loadData();
  }

  private initForm() {
    this.schoolYearForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(50)]],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    });
  }

  private setupSearch() {
    this.searchControl.valueChanges.pipe(
      debounceTime(400), 
      distinctUntilChanged(), 
      takeUntilDestroyed(this.destroyRef) 
    ).subscribe(keyword => {
      this.currentPage.set(1); 
      this.loadData(keyword || '');
    });
  }

  loadData(keyword: string = this.searchControl.value || '') {
    this.isLoading.set(true);
    this.schoolYearService.getAll(this.currentPage(), this.pageSize(), keyword).subscribe({
      next: (res) => {
        this.schoolYears.set(res.content || (res as any).data || []);
        this.totalElements.set(res.totalElements || 0);
        this.isLoading.set(false);
      },
      error: () => this.isLoading.set(false)
    });
  }

  openModal(year?: SchoolYear) {
    if (year) {
      this.isEditing.set(true);
      this.currentId.set(year.id);
      this.schoolYearForm.patchValue({
        name: year.name,
        startDate: year.startDate,
        endDate: year.endDate
      });
    } else {
      this.isEditing.set(false);
      this.currentId.set(null);
      this.schoolYearForm.reset();
    }
    this.isModalOpen.set(true);
  }

  closeModal() {
    this.isModalOpen.set(false);
    setTimeout(() => {
      if (!this.isModalOpen()) { // Kiểm tra lại chắc chắn là nó đang đóng
        this.schoolYearForm.reset();
        this.isEditing.set(false);
        this.currentId.set(null);
      }
    }, 300);
}

  onSubmit() {
    if (this.schoolYearForm.invalid) return;
    const data = this.schoolYearForm.value;
    
    if (this.isEditing() && this.currentId()) {
      this.schoolYearService.update(this.currentId()!, data).subscribe({
        next: () => {
          this.loadData();
          this.closeModal();
          // Gọi thông báo thành công
          this.toastService.success('Thành công', 'Đã cập nhật năm học!'); 
        },
        error: (err) => {
          // Gọi thông báo lỗi (Lấy message từ backend nếu có)
          this.toastService.error('Thất bại', err.error?.message || 'Có lỗi xảy ra khi cập nhật!');
        }
      });
    } else {
      this.schoolYearService.create(data).subscribe({
        next: () => {
          this.loadData();
          this.closeModal();
          this.toastService.success('Thành công', 'Đã tạo năm học mới!');
        },
        error: (err) => {
          this.toastService.error('Thất bại', err.error?.message || 'Có lỗi xảy ra khi thêm mới!');
        }
      });
    }
  }

  onDelete(id: string) {
    this.idToDelete.set(id);
    this.isDeleteModalOpen.set(true);
  }

  closeDeleteModal() {
    this.isDeleteModalOpen.set(false);
    setTimeout(() => {
      this.idToDelete.set(null); 
    }, 300); 
  }

  confirmDelete() {
    const id = this.idToDelete();
    if (id) {
      this.isLoading.set(true);
      this.schoolYearService.delete(id).subscribe({
        next: () => {
          this.loadData();
          this.closeDeleteModal();
          this.toastService.success('Đã xóa', 'Xóa năm học thành công!');
        },
        error: (err) => {
          this.isLoading.set(false);
          this.closeDeleteModal();
          this.toastService.error('Lỗi xóa', err.error?.message || 'Không thể xóa năm học này!');
        }
      });
    }
  }

  onArchive(id: string) {
    this.idToArchive.set(id);
    this.isArchiveModalOpen.set(true);
  }

  closeArchiveModal() {
    this.isArchiveModalOpen.set(false);
    setTimeout(() => {
      this.idToArchive.set(null);
    }, 300); 
  }

  confirmArchive() {
    const id = this.idToArchive();
    if (id) {
      this.isLoading.set(true);
      this.schoolYearService.archive(id).subscribe({
        next: () => {
          this.loadData();
          this.closeArchiveModal();
        },
        error: () => {
          this.isLoading.set(false);
          this.closeArchiveModal();
        }
      });
    }
  }

  onSearch(event: any) {
    this.loadData(event.target.value);
  }
}

