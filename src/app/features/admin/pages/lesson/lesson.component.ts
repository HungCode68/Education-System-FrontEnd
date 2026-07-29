import { Component, OnInit, inject, signal, computed, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LessonService } from '../../services/lesson.service';
import { ClassService } from '../../services/class.service';
import { Lesson } from '../../models/lesson.model';
import { Class } from '../../models/class.model';
import { ToastService } from '../../../../core/services/toast.service';

@Component({
  selector: 'app-lesson',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './lesson.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LessonComponent implements OnInit {
  private lessonService = inject(LessonService);
  private classService = inject(ClassService);
  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private toastService = inject(ToastService);

  lessons = signal<Lesson[]>([]);
  classes = signal<Class[]>([]);

  totalElements = signal(0);
  currentPage = signal(1);
  pageSize = signal(10);
  isLoading = signal(false);

  classIdParam = signal<string | number | null>(null);
  selectedClassFilter = new FormControl('');

  isModalOpen = signal(false);
  isEditing = signal(false);
  currentId = signal<number | string | null>(null);
  lessonForm!: FormGroup;

  isDeleteModalOpen = signal(false);
  idToDelete = signal<number | string | null>(null);

  totalPages = computed(() => Math.ceil(this.totalElements() / this.pageSize()));
  startIndex = computed(() => this.totalElements() === 0 ? 0 : (this.currentPage() - 1) * this.pageSize() + 1);
  endIndex = computed(() => Math.min(this.currentPage() * this.pageSize(), this.totalElements()));

  ngOnInit() {
    this.initForm();
    this.loadClasses();

    const idFromRoute = this.route.snapshot.paramMap.get('id');
    if (idFromRoute) {
      this.classIdParam.set(idFromRoute);
      this.selectedClassFilter.setValue(idFromRoute);
    }

    this.selectedClassFilter.valueChanges.subscribe(() => {
      this.currentPage.set(1);
      this.loadData();
    });

    this.loadData();
  }

  private initForm() {
    this.lessonForm = this.fb.group({
      classId: ['', Validators.required],
      name: ['', [Validators.required, Validators.maxLength(255)]],
      orderNumber: [1, [Validators.required, Validators.min(1)]],
      description: ['']
    });
  }

  private loadClasses() {
    this.classService.getAll(0, 100).subscribe({
      next: (res) => this.classes.set(res.content || [])
    });
  }

  loadData() {
    this.isLoading.set(true);
    const filterClassId = this.selectedClassFilter.value || this.classIdParam() || undefined;

    this.lessonService.getAll(this.currentPage() - 1, this.pageSize(), filterClassId).subscribe({
      next: (res) => {
        this.lessons.set(res.content || []);
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

  openModal(item?: Lesson) {
    if (item) {
      this.isEditing.set(true);
      this.currentId.set(item.id);
      this.lessonForm.patchValue({
        classId: item.classId,
        name: item.name,
        orderNumber: item.orderNumber || 1,
        description: item.description || ''
      });
    } else {
      this.isEditing.set(false);
      this.currentId.set(null);
      this.lessonForm.reset({
        classId: this.selectedClassFilter.value || this.classIdParam() || '',
        name: '',
        orderNumber: this.lessons().length + 1,
        description: ''
      });
    }
    this.isModalOpen.set(true);
  }

  closeModal() {
    this.isModalOpen.set(false);
    this.currentId.set(null);
  }

  onSubmit() {
    if (this.lessonForm.invalid) return;
    this.isLoading.set(true);
    const data = this.lessonForm.value;
    if (data.classId) data.classId = Number(data.classId);

    if (this.isEditing() && this.currentId() != null) {
      this.lessonService.update(this.currentId()!, data).subscribe({
        next: () => {
          this.loadData();
          this.closeModal();
          this.toastService.success('Thành công', 'Đã cập nhật bài học!');
        },
        error: (err) => {
          this.isLoading.set(false);
          this.toastService.error('Thất bại', err.error?.message || 'Có lỗi xảy ra khi cập nhật!');
        }
      });
    } else {
      this.lessonService.create(data).subscribe({
        next: () => {
          this.loadData();
          this.closeModal();
          this.toastService.success('Thành công', 'Đã tạo bài học mới!');
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
      this.lessonService.delete(id).subscribe({
        next: () => {
          this.loadData();
          this.closeDeleteModal();
          this.toastService.success('Đã xóa', 'Xóa bài học thành công!');
        },
        error: (err) => {
          this.isLoading.set(false);
          this.closeDeleteModal();
          this.toastService.error('Lỗi xóa', err.error?.message || 'Không thể xóa bài học này!');
        }
      });
    }
  }

  viewMaterials(lessonId: number | string) {
    this.router.navigate(['/admin/lessons', lessonId, 'materials']);
  }
}
