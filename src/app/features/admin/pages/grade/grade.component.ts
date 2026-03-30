import { Component, OnInit, inject, signal, DestroyRef, computed } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { GradeService } from '../../services/grade.service';
import { Grade } from '../../models/grade.model';
import { ToastService } from './../../../../core/services/toast.service';

@Component({
  selector: 'app-grade',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './grade.component.html'
})
export class GradeComponent implements OnInit {
  private gradeService = inject(GradeService);
  private fb = inject(FormBuilder);
  private destroyRef = inject(DestroyRef);
  private toastService = inject(ToastService);

  // --- STATE DANH SÁCH & PHÂN TRANG ---
  grades = signal<Grade[]>([]);
  totalElements = signal(0);
  currentPage = signal(1);
  pageSize = signal(10);
  isLoading = signal(false);

  totalPages = computed(() => Math.ceil(this.totalElements() / this.pageSize()));
  startIndex = computed(() => this.totalElements() === 0 ? 0 : (this.currentPage() - 1) * this.pageSize() + 1);
  endIndex = computed(() => Math.min(this.currentPage() * this.pageSize(), this.totalElements()));

  // --- STATE TÌM KIẾM ---
  searchControl = new FormControl('');

  // --- STATE MODAL ---
  isModalOpen = signal(false);
  isEditing = signal(false);
  currentId = signal<string | null>(null);
  gradeForm!: FormGroup;

  isDeleteModalOpen = signal(false);
  idToDelete = signal<string | null>(null);

  ngOnInit() {
    this.initForm();
    this.setupSearch();
    this.loadData();
  }

  private initForm() {
    this.gradeForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(20)]], 
      level: [null, [Validators.required, Validators.min(1)]], // Cấp độ sắp xếp
      isActive: [true]
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
    this.gradeService.search(this.currentPage(), this.pageSize(), keyword).subscribe({
      next: (res) => {
        this.grades.set(res.content || (res as any).data || []);
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

  // --- XỬ LÝ MODAL THÊM/SỬA ---
  openModal(grade?: Grade) {
    if (grade) {
      this.isEditing.set(true);
      this.currentId.set(grade.id);
      this.gradeForm.patchValue({
        name: grade.name,
        level: grade.level,
        isActive: grade.isActive
      });
    } else {
      this.isEditing.set(false);
      this.currentId.set(null);
      this.gradeForm.reset({ isActive: true });
    }
    this.isModalOpen.set(true);
  }

  closeModal() {
    this.isModalOpen.set(false);
    this.gradeForm.reset({ isActive: true });
    this.isEditing.set(false);
    this.currentId.set(null);
  }

  onSubmit() {
    if (this.gradeForm.invalid) return;

    this.isLoading.set(true);
    const data = this.gradeForm.value;
    
    if (this.isEditing() && this.currentId()) {
      this.gradeService.update(this.currentId()!, data).subscribe({
        next: () => { 
          this.loadData(); 
          this.closeModal(); 
          this.toastService.success('Thành công', 'Đã cập nhật thông tin khối lớp!');
        },
        error: (err) => { 
          this.isLoading.set(false);
          this.toastService.error('Thất bại', err.error?.message || 'Không thể cập nhật khối lớp!');
        }
      });
    } else {
      this.gradeService.create(data).subscribe({
        next: () => { 
          this.loadData(); 
          this.closeModal(); 
          this.toastService.success('Thành công', 'Đã thêm khối lớp mới!');
        },
        error: (err) => { 
          this.isLoading.set(false);
          this.toastService.error('Thất bại', err.error?.message || 'Không thể thêm khối lớp!');
        }
      });
    }
  }

  // --- XỬ LÝ MODAL XÓA ---
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
      this.gradeService.delete(id).subscribe({
        next: () => { 
          this.loadData(); 
          this.closeDeleteModal(); 
          this.toastService.success('Đã xóa', 'Xóa khối lớp thành công!');
        },
        error: (err) => { 
          this.isLoading.set(false); 
          this.closeDeleteModal(); 
          this.toastService.error('Lỗi xóa', err.error?.message || 'Không thể xóa khối lớp này!');
        }
      });
    }
  }
}