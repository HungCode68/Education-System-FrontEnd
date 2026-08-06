import { Component, OnInit, inject, signal, computed, DestroyRef, ChangeDetectionStrategy } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ClassService } from '../../../../modules/academic/services/class.service';
import { CourseService } from '../../../../modules/academic/services/course.service';
import { TermService } from '../../../../modules/academic/services/term.service';
import { Class, ClassStatus } from '../../../../modules/academic/models/class.model';
import { Course } from '../../../../modules/academic/models/course.model';
import { Term } from '../../../../modules/academic/models/term.model';
import { ToastService } from '../../../../core/services/toast.service';
import { HasPermissionDirective } from '../../../../core/directives/has-permission.directive';

@Component({
  selector: 'app-class',
  imports: [CommonModule, ReactiveFormsModule, HasPermissionDirective],
  templateUrl: './class.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClassComponent implements OnInit {
  private classService = inject(ClassService);
  private courseService = inject(CourseService);
  private termService = inject(TermService);
  private fb = inject(FormBuilder);
  private destroyRef = inject(DestroyRef);
  private toastService = inject(ToastService);
  private router = inject(Router);

  classes = signal<Class[]>([]);
  courses = signal<Course[]>([]);
  terms = signal<Term[]>([]);

  totalElements = signal(0);
  currentPage = signal(1);
  pageSize = signal(10);
  isLoading = signal(false);

  searchControl = new FormControl('');
  statusFilter = new FormControl('');
  courseFilter = new FormControl('');
  termFilter = new FormControl('');

  isModalOpen = signal(false);
  isEditing = signal(false);
  currentId = signal<number | string | null>(null);
  classForm!: FormGroup;

  isDeleteModalOpen = signal(false);
  idToDelete = signal<number | string | null>(null);

  totalPages = computed(() => Math.ceil(this.totalElements() / this.pageSize()));
  startIndex = computed(() => this.totalElements() === 0 ? 0 : (this.currentPage() - 1) * this.pageSize() + 1);
  endIndex = computed(() => Math.min(this.currentPage() * this.pageSize(), this.totalElements()));

  ngOnInit() {
    this.initForm();
    this.setupFilters();
    this.loadDropdownData();
    this.loadData();
  }

  private initForm() {
    this.classForm = this.fb.group({
      code: ['', [Validators.required, Validators.maxLength(50)]],
      name: ['', [Validators.required, Validators.maxLength(255)]],
      courseId: ['', Validators.required],
      termId: [''],
      startDate: [''],
      endDate: [''],
      maxStudents: [20, [Validators.required, Validators.min(10)]],
      status: ['OPENING' as ClassStatus, Validators.required]
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

    this.statusFilter.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.currentPage.set(1); this.loadData();
    });
    this.courseFilter.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.currentPage.set(1); this.loadData();
    });
    this.termFilter.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.currentPage.set(1); this.loadData();
    });
  }

  private loadDropdownData() {
    this.courseService.getAll(0, 100).subscribe({
      next: (res) => this.courses.set(res.content || [])
    });
    this.termService.getAll(0, 100).subscribe({
      next: (res) => this.terms.set(res.content || [])
    });
  }

  loadData() {
    this.isLoading.set(true);
    const keyword = this.searchControl.value || undefined;
    const status = this.statusFilter.value || undefined;
    const courseId = this.courseFilter.value || undefined;
    const termId = this.termFilter.value || undefined;

    this.classService.getAll(this.currentPage() - 1, this.pageSize(), keyword, status, courseId, termId).subscribe({
      next: (res) => {
        this.classes.set(res.content || []);
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

  openModal(cls?: Class) {
    if (cls) {
      this.isEditing.set(true);
      this.currentId.set(cls.id);
      this.classForm.patchValue({
        code: cls.code,
        name: cls.name,
        courseId: cls.courseId,
        termId: cls.termId || '',
        startDate: cls.startDate || '',
        endDate: cls.endDate || '',
        maxStudents: cls.maxStudents || 20,
        status: cls.status
      });
    } else {
      this.isEditing.set(false);
      this.currentId.set(null);
      this.classForm.reset({
        code: '',
        name: '',
        courseId: '',
        termId: '',
        startDate: '',
        endDate: '',
        maxStudents: 20,
        status: 'OPENING'
      });
    }
    this.isModalOpen.set(true);
  }

  closeModal() {
    this.isModalOpen.set(false);
    this.currentId.set(null);
  }

  onSubmit() {
    if (this.classForm.invalid) return;
    this.isLoading.set(true);
    const data = this.classForm.value;
    data.code = (data.code as string).toUpperCase().trim();
    if (data.courseId) data.courseId = Number(data.courseId);
    if (data.termId) data.termId = Number(data.termId);

    if (this.isEditing() && this.currentId() != null) {
      this.classService.update(this.currentId()!, data).subscribe({
        next: () => {
          this.loadData();
          this.closeModal();
          this.toastService.success('Thành công', 'Đã cập nhật thông tin lớp học!');
        },
        error: (err) => {
          this.isLoading.set(false);
          this.toastService.error('Thất bại', err.error?.message || 'Có lỗi xảy ra khi cập nhật!');
        }
      });
    } else {
      this.classService.create(data).subscribe({
        next: () => {
          this.loadData();
          this.closeModal();
          this.toastService.success('Thành công', 'Đã tạo lớp học mới!');
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
      this.classService.delete(id).subscribe({
        next: () => {
          this.loadData();
          this.closeDeleteModal();
          this.toastService.success('Đã xóa', 'Xóa lớp học thành công!');
        },
        error: (err) => {
          this.isLoading.set(false);
          this.closeDeleteModal();
          this.toastService.error('Lỗi xóa', err.error?.message || 'Không thể xóa lớp học này!');
        }
      });
    }
  }

  viewEnrollments(classId: number | string) {
    this.router.navigate(['/admin/enrollments'], { queryParams: { classId } });
  }

  viewSchedules(classId: number | string) {
    this.router.navigate(['/admin/classes', classId, 'schedules']);
  }
}
