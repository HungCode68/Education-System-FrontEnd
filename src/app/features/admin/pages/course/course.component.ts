import { Component, OnInit, inject, signal, computed, DestroyRef, ChangeDetectionStrategy } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { CourseService } from '../../../../modules/academic/services/course.service';
import { Course, CourseStatus } from '../../../../modules/academic/models/course.model';
import { ToastService } from '../../../../core/services/toast.service';
import { HasPermissionDirective } from '../../../../core/directives/has-permission.directive';

@Component({
  selector: 'app-course',
  imports: [CommonModule, ReactiveFormsModule, HasPermissionDirective],
  templateUrl: './course.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseComponent implements OnInit {
  private courseService = inject(CourseService);
  private fb = inject(FormBuilder);
  private destroyRef = inject(DestroyRef);
  private toastService = inject(ToastService);

  courses = signal<Course[]>([]);
  totalElements = signal(0);
  currentPage = signal(1);
  pageSize = signal(10);
  isLoading = signal(false);

  searchControl = new FormControl('');
  statusFilter = new FormControl('');

  isModalOpen = signal(false);
  isEditing = signal(false);
  currentId = signal<number | string | null>(null);
  courseForm!: FormGroup;

  isDeleteModalOpen = signal(false);
  idToDelete = signal<number | string | null>(null);

  totalPages = computed(() => Math.ceil(this.totalElements() / this.pageSize()));
  startIndex = computed(() => this.totalElements() === 0 ? 0 : (this.currentPage() - 1) * this.pageSize() + 1);
  endIndex = computed(() => Math.min(this.currentPage() * this.pageSize(), this.totalElements()));

  ngOnInit() {
    this.initForm();
    this.setupFilters();
    this.loadData();
  }

  private initForm() {
    this.courseForm = this.fb.group({
      code: ['', [Validators.required, Validators.maxLength(50)]],
      name: ['', [Validators.required, Validators.maxLength(255)]],
      description: [''],
      durationHours: [30, [Validators.required, Validators.min(1)]],
      totalSessions: [0, [Validators.min(0)]],
      basePrice: [0, [Validators.required, Validators.min(0)]],
      status: ['ACTIVE' as CourseStatus, Validators.required]
    });
  }

  private setupFilters() {
    this.searchControl.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(() => {
      this.currentPage.set(1);
      this.loadData();
    });

    this.statusFilter.valueChanges.pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(() => {
      this.currentPage.set(1);
      this.loadData();
    });
  }

  loadData() {
    this.isLoading.set(true);
    const keyword = this.searchControl.value || undefined;
    const status = this.statusFilter.value || undefined;

    this.courseService.getAll(this.currentPage() - 1, this.pageSize(), keyword, status).subscribe({
      next: (res) => {
        this.courses.set(res.content || []);
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

  openModal(course?: Course) {
    if (course) {
      this.isEditing.set(true);
      this.currentId.set(course.id);
      this.courseForm.patchValue({
        code: course.code,
        name: course.name,
        description: course.description || '',
        durationHours: course.durationHours || 0,
        totalSessions: course.totalSessions || 0,
        basePrice: course.basePrice || 0,
        status: course.status
      });
    } else {
      this.isEditing.set(false);
      this.currentId.set(null);
      this.courseForm.reset({
        code: '',
        name: '',
        description: '',
        durationHours: 30,
        totalSessions: 0,
        basePrice: 0,
        status: 'ACTIVE'
      });
    }
    this.isModalOpen.set(true);
  }

  closeModal() {
    this.isModalOpen.set(false);
    this.currentId.set(null);
  }

  onSubmit() {
    if (this.courseForm.invalid) return;
    this.isLoading.set(true);
    const data = this.courseForm.value;
    data.code = (data.code as string).toUpperCase().trim();

    if (this.isEditing() && this.currentId() != null) {
      this.courseService.update(this.currentId()!, data).subscribe({
        next: () => {
          this.loadData();
          this.closeModal();
          this.toastService.success('Thành công', 'Đã cập nhật khóa học!');
        },
        error: (err) => {
          this.isLoading.set(false);
          this.toastService.error('Thất bại', err.error?.message || 'Có lỗi xảy ra khi cập nhật!');
        }
      });
    } else {
      this.courseService.create(data).subscribe({
        next: () => {
          this.loadData();
          this.closeModal();
          this.toastService.success('Thành công', 'Đã tạo khóa học mới!');
        },
        error: (err) => {
          this.isLoading.set(false);
          this.toastService.error('Thất bại', err.error?.message || 'Có lỗi xảy ra khi thêm mới!');
        }
      });
    }
  }

  onDelete(id: number | string) {
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
      this.courseService.delete(id).subscribe({
        next: () => {
          this.loadData();
          this.closeDeleteModal();
          this.toastService.success('Đã xóa', 'Xóa khóa học thành công!');
        },
        error: (err) => {
          this.isLoading.set(false);
          this.closeDeleteModal();
          this.toastService.error('Lỗi xóa', err.error?.message || 'Không thể xóa khóa học này!');
        }
      });
    }
  }
}
