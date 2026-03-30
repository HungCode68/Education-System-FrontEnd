import { Component, OnInit, inject, signal, DestroyRef, computed } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { GradeSubjectService } from '../../services/grade-subject.service';
import { GradeService } from '../../services/grade.service';
import { SubjectService } from '../../services/subject.service';
import { GradeSubject } from '../../models/grade-subject.model';
import { Grade } from '../../models/grade.model';
import { Subject } from '../../models/subject.model';
import { ToastService } from './../../../../core/services/toast.service';

@Component({
  selector: 'app-grade-subject',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './grade-subject.component.html'
})
export class GradeSubjectComponent implements OnInit {
  private gradeSubjectService = inject(GradeSubjectService);
  private gradeService = inject(GradeService);
  private subjectService = inject(SubjectService);
  private fb = inject(FormBuilder);
  private destroyRef = inject(DestroyRef);
  private toastService = inject(ToastService);

  // --- DỮ LIỆU DROPDOWN ---
  activeGrades = signal<Grade[]>([]);
  activeSubjects = signal<Subject[]>([]);

  // --- STATE DANH SÁCH & PHÂN TRANG ---
  gradeSubjects = signal<GradeSubject[]>([]);
  totalElements = signal(0);
  currentPage = signal(1);
  pageSize = signal(10);
  isLoading = signal(false);

  totalPages = computed(() => Math.ceil(this.totalElements() / this.pageSize()));
  startIndex = computed(() => this.totalElements() === 0 ? 0 : (this.currentPage() - 1) * this.pageSize() + 1);
  endIndex = computed(() => Math.min(this.currentPage() * this.pageSize(), this.totalElements()));

  // --- STATE TÌM KIẾM ---
  searchControl = new FormControl('');
  filterGradeControl = new FormControl(''); // Bộ lọc khối trên Header

  // --- STATE MODAL ---
  isModalOpen = signal(false);
  isEditing = signal(false);
  currentId = signal<string | null>(null);
  mappingForm!: FormGroup;

  isDeleteModalOpen = signal(false);
  idToDelete = signal<string | null>(null);

  ngOnInit() {
    this.initForm();
    this.loadDropdownData();
    this.setupFilters();
    this.loadData();
  }

  private initForm() {
    this.mappingForm = this.fb.group({
      gradeId: ['', Validators.required],
      subjectId: ['', Validators.required],
      subjectType: ['REQUIRED', Validators.required], // Mặc định là Bắt buộc
      isLmsEnabled: [true],
      displayOrder: [0, [Validators.min(0)]]
    });
  }

  private loadDropdownData() {
    // Lấy danh sách khối và môn đang hoạt động để đổ vào Form/Filter
    this.gradeService.getAllActive().subscribe(res => this.activeGrades.set(res));
    this.subjectService.getAllActive().subscribe(res => this.activeSubjects.set(res));
  }

  private setupFilters() {
    // (Live Search)
    this.searchControl.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(() => {
      this.currentPage.set(1);
      this.loadData();
    });

    // Lắng nghe bộ lọc Khối
    this.filterGradeControl.valueChanges.pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(() => {
      this.currentPage.set(1);
      this.loadData();
    });
  }

  loadData() {
    this.isLoading.set(true);
    const keyword = this.searchControl.value || '';
    const gradeId = this.filterGradeControl.value || '';

    this.gradeSubjectService.search(this.currentPage(), this.pageSize(), gradeId, keyword).subscribe({
      next: (res) => {
        this.gradeSubjects.set(res.content || (res as any).data || []);
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
  openModal(mapping?: GradeSubject) {
    if (mapping) {
      this.isEditing.set(true);
      this.currentId.set(mapping.id);
      this.mappingForm.patchValue({
        gradeId: mapping.gradeId,
        subjectId: mapping.subjectId,
        subjectType: mapping.subjectType || 'REQUIRED', // Chuẩn hóa enum
        isLmsEnabled: mapping.isLmsEnabled,
        displayOrder: mapping.displayOrder
      });
      // Khóa 2 trường này khi Edit theo logic Backend
      this.mappingForm.get('gradeId')?.disable();
      this.mappingForm.get('subjectId')?.disable();
    } else {
      this.isEditing.set(false);
      this.currentId.set(null);
      this.mappingForm.reset({ subjectType: 'REQUIRED', isLmsEnabled: true, displayOrder: 0 });
      // Mở lại 2 trường khi Add mới
      this.mappingForm.get('gradeId')?.enable();
      this.mappingForm.get('subjectId')?.enable();
    }
    this.isModalOpen.set(true);
  }

  closeModal() {
    this.isModalOpen.set(false);
    this.mappingForm.reset({ subjectType: 'REQUIRED', isLmsEnabled: true, displayOrder: 0 });
    this.mappingForm.get('gradeId')?.enable();
    this.mappingForm.get('subjectId')?.enable();
    this.isEditing.set(false);
    this.currentId.set(null);
  }

  onSubmit() {
    if (this.mappingForm.invalid) return;

    this.isLoading.set(true);
    const data = this.mappingForm.getRawValue();
    
    if (this.isEditing() && this.currentId()) {
      this.gradeSubjectService.update(this.currentId()!, data).subscribe({
        next: () => { 
          this.loadData(); 
          this.closeModal(); 
          this.toastService.success('Thành công', 'Cập nhật cấu hình thành công!');
        },
        error: (err) => { 
          this.isLoading.set(false);
          this.toastService.error('Thất bại', err.error?.message || 'Lỗi khi cập nhật cấu hình!');
        }
      });
    } else {
      this.gradeSubjectService.create(data).subscribe({
        next: () => { 
          this.loadData(); 
          this.closeModal(); 
          this.toastService.success('Thành công', 'Đã gán môn học vào khối!');
        },
        error: (err) => { 
          this.isLoading.set(false);
          this.toastService.error('Thất bại', err.error?.message || 'Lỗi khi gán môn học!');
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
      this.gradeSubjectService.delete(id).subscribe({
        next: () => { 
          this.loadData(); 
          this.closeDeleteModal(); 
          this.toastService.success('Đã gỡ bỏ', 'Gỡ môn học thành công!');
        },
        error: (err) => { 
          this.isLoading.set(false); 
          this.closeDeleteModal(); 
          this.toastService.error('Lỗi', err.error?.message || 'Không thể gỡ môn học này!');
        }
      });
    }
}
}