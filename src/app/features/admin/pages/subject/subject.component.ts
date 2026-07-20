import { Component, OnInit, inject, signal, DestroyRef, computed } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { SubjectService } from '../../services/subject.service';
import { Subject } from '../../models/subject.model';
import { ToastService } from './../../../../core/services/toast.service';

@Component({
  selector: 'app-subject',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './subject.component.html'
})
export class SubjectComponent implements OnInit {
  private subjectService = inject(SubjectService);
  private fb = inject(FormBuilder);
  private destroyRef = inject(DestroyRef);
  private toastService = inject(ToastService);

  // --- STATE DANH SÁCH ---
  subjects = signal<Subject[]>([]);
  totalElements = signal(0);
  currentPage = signal(1);
  pageSize = signal(10);
  isLoading = signal(false);
  searchControl = new FormControl('');

  // --- STATE MODAL THÊM/SỬA ---
  isModalOpen = signal(false);
  isEditing = signal(false);
  currentId = signal<string | null>(null);
  subjectForm!: FormGroup;

  // --- STATE MODAL XÓA ---
  isDeleteModalOpen = signal(false);
  idToDelete = signal<string | null>(null);

  // Tự động tính tổng số trang 
  totalPages = computed(() => Math.ceil(this.totalElements() / this.pageSize()));
  
  // Tính số thứ tự bắt đầu 
  startIndex = computed(() => 
    this.totalElements() === 0 ? 0 : (this.currentPage() - 1) * this.pageSize() + 1
  );
  
  // Tính số thứ tự kết thúc 
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
    this.subjectForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(100)]],
      description: [''],
      isActive: [true] // Mặc định là true khi tạo mới
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
    this.subjectService.search(this.currentPage(), this.pageSize(), keyword).subscribe({
      next: (res) => {
        this.subjects.set(res.content || (res as any).data || []);
        this.totalElements.set(res.totalElements || 0);
        this.isLoading.set(false);
      },
      error: () => this.isLoading.set(false)
    });
  }

  onSearch(event: any) {
    this.loadData(event.target.value);
  }

  // --- XỬ LÝ MODAL THÊM/SỬA ---
  openModal(subject?: Subject) {
    if (subject) {
      this.isEditing.set(true);
      this.currentId.set(subject.id);
      this.subjectForm.patchValue({
        name: subject.name,
        description: subject.description,
        isActive: subject.isActive
      });
    } else {
      this.isEditing.set(false);
      this.currentId.set(null);
      this.subjectForm.reset({ isActive: true });
    }
    this.isModalOpen.set(true);
  }

  closeModal() {
    this.isModalOpen.set(false);
    setTimeout(() => {
      if (!this.isModalOpen()) {
        this.subjectForm.reset({ isActive: true });
        this.isEditing.set(false);
        this.currentId.set(null);
      }
    }, 300);
  }

  onSubmit() {
    if (this.subjectForm.invalid) return;

    this.isLoading.set(true);
    const data = this.subjectForm.value;
    
    if (this.isEditing() && this.currentId()) {
      this.subjectService.update(this.currentId()!, data).subscribe({
        next: () => { 
          this.loadData(); 
          this.closeModal(); 
          this.toastService.success('Thành công', 'Đã cập nhật môn học!');
        },
        error: (err) => { 
          this.isLoading.set(false);
          this.toastService.error('Thất bại', err.error?.message || 'Có lỗi khi cập nhật môn học!');
        }
      });
    } else {
      this.subjectService.create(data).subscribe({
        next: () => { 
          this.loadData(); 
          this.closeModal(); 
          this.toastService.success('Thành công', 'Đã thêm môn học mới!');
        },
        error: (err) => { 
          this.isLoading.set(false);
          this.toastService.error('Thất bại', err.error?.message || 'Có lỗi khi thêm môn học!');
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
    setTimeout(() => this.idToDelete.set(null), 300);
  }

  confirmDelete() {
    const id = this.idToDelete();
    if (id) {
      this.isLoading.set(true);
      this.subjectService.delete(id).subscribe({
        next: () => { 
          this.loadData(); 
          this.closeDeleteModal(); 
          this.toastService.success('Đã xóa', 'Xóa môn học thành công!');
        },
        error: (err) => { 
          this.isLoading.set(false); 
          this.closeDeleteModal(); 
          this.toastService.error('Lỗi xóa', err.error?.message || 'Không thể xóa môn học này!');
        }
      });
    }
  }
}