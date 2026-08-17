import { Component, OnInit, inject, signal, computed, DestroyRef, ChangeDetectionStrategy } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { CourseService } from '../../../../modules/academic/services/course.service';
import { Course } from '../../../../modules/academic/models/course.model';
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

  // --- STATE DANH SÁCH KHÓA HỌC ---
  courses = signal<Course[]>([]);
  totalElements = signal(0);
  currentPage = signal(1);
  pageSize = signal(10);
  isLoading = signal(false);
  searchControl = new FormControl('');

  // --- STATE MODAL THÊM / SỬA ---
  isModalOpen = signal(false);
  isEditing = signal(false);
  currentId = signal<number | string | null>(null);
  courseForm!: FormGroup;

  // --- STATE MODAL XÓA ---
  isDeleteModalOpen = signal(false);
  idToDelete = signal<number | string | null>(null);

  // Computed signals
  totalPages = computed(() => Math.max(1, Math.ceil(this.totalElements() / this.pageSize())));
  
  startIndex = computed(() => 
    this.totalElements() === 0 ? 0 : (this.currentPage() - 1) * this.pageSize() + 1
  );
  
  endIndex = computed(() => 
    Math.min(this.currentPage() * this.pageSize(), this.totalElements())
  );

  ngOnInit() {
    this.initForm();
    this.setupSearch();
    this.loadData();
  }

  private initForm() {
    this.courseForm = this.fb.group({
      code: ['', [Validators.required, Validators.maxLength(50)]],
      name: ['', [Validators.required, Validators.maxLength(255)]],
      description: [''],
      durationHours: [0, [Validators.required, Validators.min(0)]],
      totalSessions: [0, [Validators.min(0)]],
      sessionsPerWeek: [0, [Validators.min(0)]],
      basePrice: [0, [Validators.required, Validators.min(0)]],
      status: ['ACTIVE', [Validators.required]]
    });
  }

  private setupSearch() {
    this.searchControl.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(() => {
      this.currentPage.set(1);
      this.loadData();
    });
  }

  loadData() {
    this.isLoading.set(true);
    this.courseService.getCourses({
      page: this.currentPage(),
      size: this.pageSize(),
      keyword: this.searchControl.value || ''
    }).subscribe({
      next: (response) => {
        this.courses.set(response.content || []);
        this.totalElements.set(response.totalElements || 0);
        this.isLoading.set(false);
      },
      error: (err) => {
        this.toastService.error('Lỗi', 'Lỗi khi tải danh sách khóa học: ' + (err.error?.message || err.message));
        this.isLoading.set(false);
      }
    });
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage.set(page);
      this.loadData();
    }
  }

  // Signal quản lý chuỗi hiển thị giá học phí có phân cách hàng nghìn (VD: 5,000,000)
  formattedPrice = signal<string>('0');

  openModal(course?: Course) {
    this.isFormSubmitted.set(false);
    if (course && course.id) {
      this.isEditing.set(true);
      this.currentId.set(course.id);
      const price = course.basePrice || 0;
      this.formattedPrice.set(price.toLocaleString('en-US'));
      this.courseForm.patchValue({
        code: course.code,
        name: course.name,
        description: course.description || '',
        durationHours: course.durationHours || 0,
        totalSessions: course.totalSessions || 0,
        sessionsPerWeek: course.sessionsPerWeek || 0,
        basePrice: price,
        status: course.status || 'ACTIVE'
      });
    } else {
      if (this.isEditing() || !this.courseForm.get('code')?.value) {
        this.isEditing.set(false);
        this.currentId.set(null);
        this.resetAddForm();
      } else {
        this.isEditing.set(false);
        this.currentId.set(null);
      }
    }
    this.isModalOpen.set(true);
  }

  resetAddForm() {
    this.formattedPrice.set('0');
    this.courseForm.reset({
      code: '',
      name: '',
      description: '',
      durationHours: 0,
      totalSessions: 0,
      sessionsPerWeek: 0,
      basePrice: 0,
      status: 'ACTIVE'
    });
  }

  closeModal() {
    this.isModalOpen.set(false);
  }

  onPriceInput(event: Event) {
    const input = event.target as HTMLInputElement;
    const rawValue = input.value.replace(/\D/g, '');
    if (!rawValue) {
      this.courseForm.patchValue({ basePrice: 0 });
      this.formattedPrice.set('');
      input.value = '';
      return;
    }
    const numericValue = parseInt(rawValue, 10);
    this.courseForm.patchValue({ basePrice: numericValue });
    const formatted = numericValue.toLocaleString('en-US');
    this.formattedPrice.set(formatted);
    input.value = formatted;
  }

  isFormSubmitted = signal(false);

  onSubmit() {
    this.isFormSubmitted.set(true);
    if (this.courseForm.invalid) {
      this.toastService.error('Thông báo', 'Vui lòng kiểm tra lại các trường dữ liệu bắt buộc');
      return;
    }

    const formValues = this.courseForm.value;
    const courseData: Partial<Course> = {
      code: formValues.code,
      name: formValues.name,
      description: formValues.description,
      durationHours: Number(formValues.durationHours),
      totalSessions: Number(formValues.totalSessions),
      sessionsPerWeek: Number(formValues.sessionsPerWeek),
      basePrice: Number(formValues.basePrice),
      status: formValues.status
    };

    if (this.isEditing() && this.currentId()) {
      this.courseService.update(this.currentId()!, courseData).subscribe({
        next: (res) => {
          this.toastService.success('Thành công', res.message || 'Cập nhật khóa học thành công!');
          this.closeModal();
          this.loadData();
        },
        error: (err) => {
          this.toastService.error('Lỗi', 'Cập nhật thất bại: ' + (err.error?.message || err.message));
        }
      });
    } else {
      this.courseService.create(courseData).subscribe({
        next: (res) => {
          this.toastService.success('Thành công', res.message || 'Tạo mới khóa học thành công!');
          this.resetAddForm();
          this.closeModal();
          this.loadData();
        },
        error: (err) => {
          this.toastService.error('Lỗi', 'Tạo mới thất bại: ' + (err.error?.message || err.message));
        }
      });
    }
  }

  onDelete(id?: number | string) {
    if (id != null) {
      this.idToDelete.set(id);
      this.isDeleteModalOpen.set(true);
    }
  }

  confirmDelete() {
    const id = this.idToDelete();
    if (!id) return;

    this.courseService.delete(id).subscribe({
      next: (res) => {
        this.toastService.success('Thành công', res.message || 'Xóa khóa học thành công!');
        this.isDeleteModalOpen.set(false);
        this.idToDelete.set(null);
        this.loadData();
      },
      error: (err) => {
        this.toastService.error('Lỗi', 'Xóa thất bại: ' + (err.error?.message || err.message));
      }
    });
  }

  closeDeleteModal() {
    this.isDeleteModalOpen.set(false);
    this.idToDelete.set(null);
  }
}
