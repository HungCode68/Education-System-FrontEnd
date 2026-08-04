import { Component, OnInit, inject, signal, computed, DestroyRef, ChangeDetectionStrategy } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { LearningMaterialService } from '../../../../modules/academic/services/learning-material.service';
import { CourseService } from '../../../../modules/academic/services/course.service';
import { LearningMaterial, MATERIAL_TYPE_MAP, INDEXING_STATUS_MAP } from '../../../../modules/academic/models/learning-material.model';
import { Course } from '../../../../modules/academic/models/course.model';
import { ToastService } from '../../../../core/services/toast.service';

@Component({
  selector: 'app-learning-material',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './learning-material.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LearningMaterialComponent implements OnInit {
  private materialService = inject(LearningMaterialService);
  private courseService = inject(CourseService);
  private fb = inject(FormBuilder);
  private destroyRef = inject(DestroyRef);
  private toastService = inject(ToastService);

  // Constants
  typeMap = MATERIAL_TYPE_MAP;
  statusMap = INDEXING_STATUS_MAP;

  // Data Signals
  materials = signal<LearningMaterial[]>([]);
  availableCourses = signal<Course[]>([]);

  // Filter Signals
  selectedCourseFilter = signal<number | null>(null);
  totalElements = signal(0);
  currentPage = signal(1);
  pageSize = signal(10);
  isLoading = signal(false);
  searchControl = new FormControl('');

  // Modal Signals
  isModalOpen = signal(false);
  isEditing = signal(false);
  currentId = signal<number | string | null>(null);
  materialForm!: FormGroup;
  selectedFile = signal<File | null>(null);
  isFormSubmitted = signal(false);

  // Delete Modal Signals
  isDeleteModalOpen = signal(false);
  idToDelete = signal<number | string | null>(null);

  // Computed signals for Pagination
  totalPages = computed(() => Math.max(1, Math.ceil(this.totalElements() / this.pageSize())));
  startIndex = computed(() => 
    this.totalElements() === 0 ? 0 : (this.currentPage() - 1) * this.pageSize() + 1
  );
  endIndex = computed(() => 
    Math.min(this.currentPage() * this.pageSize(), this.totalElements())
  );

  // Computed: only COURSE-scope materials, optionally filtered by course
  displayMaterials = computed(() => {
    let list = this.materials().filter(m => m.materialScope === 'COURSE');

    const courseId = this.selectedCourseFilter();
    if (courseId) {
      list = list.filter(m => Number(m.courseId) === Number(courseId));
    }

    return list;
  });

  ngOnInit() {
    this.initForm();
    this.setupSearch();
    this.loadDropdownOptions();
    this.loadData();
  }

  private initForm() {
    this.materialForm = this.fb.group({
      courseId: ['', [Validators.required]],
      title: ['', [Validators.required, Validators.maxLength(255)]],
      materialType: ['DOCUMENT', [Validators.required]],
      sourceType: ['MINIO', [Validators.required]],
      resourceUrl: [''],
      displayOrder: [0, [Validators.required, Validators.min(0)]],
      isOfficial: [true],
      isRagEnabled: [false]
    });

    // Listen to sourceType changes
    this.materialForm.get('sourceType')?.valueChanges.pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe((srcType) => {
      if (srcType === 'EXTERNAL') {
        this.materialForm.get('resourceUrl')?.setValidators([Validators.required]);
      } else {
        this.materialForm.get('resourceUrl')?.clearValidators();
      }
      this.materialForm.get('resourceUrl')?.updateValueAndValidity();
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

  private loadDropdownOptions() {
    this.courseService.getCourses({ size: 100 }).subscribe({
      next: (res) => this.availableCourses.set(res.content || []),
      error: () => {}
    });
  }

  loadData() {
    this.isLoading.set(true);
    this.materialService.getAll({
      page: this.currentPage(),
      size: this.pageSize(),
      keyword: this.searchControl.value || ''
    }).subscribe({
      next: (response) => {
        this.materials.set(response.content || []);
        this.totalElements.set(response.totalElements || 0);
        this.isLoading.set(false);
      },
      error: (err) => {
        this.toastService.error('Lỗi', 'Không thể tải danh sách tài liệu: ' + (err.error?.message || err.message));
        this.isLoading.set(false);
      }
    });
  }

  onCourseFilterChange(event: Event) {
    const val = (event.target as HTMLSelectElement).value;
    this.selectedCourseFilter.set(val ? Number(val) : null);
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage.set(page);
      this.loadData();
    }
  }

  // --- MODAL LOGIC ---

  openModal(item?: LearningMaterial) {
    this.isFormSubmitted.set(false);
    this.selectedFile.set(null);
    this.loadDropdownOptions();

    if (item && item.id) {
      this.isEditing.set(true);
      this.currentId.set(item.id);

      this.materialForm.patchValue({
        courseId: item.courseId || '',
        title: item.title || '',
        materialType: item.materialType || 'DOCUMENT',
        sourceType: item.sourceType || 'MINIO',
        resourceUrl: item.resourceUrl || '',
        displayOrder: item.displayOrder !== undefined ? item.displayOrder : 0,
        isOfficial: item.isOfficial !== undefined ? item.isOfficial : true,
        isRagEnabled: item.isRagEnabled !== undefined ? item.isRagEnabled : false
      });
    } else {
      this.isEditing.set(false);
      this.currentId.set(null);

      const firstCourseId = this.availableCourses().length > 0 ? this.availableCourses()[0].id : '';

      this.materialForm.reset({
        courseId: firstCourseId,
        title: '',
        materialType: 'DOCUMENT',
        sourceType: 'MINIO',
        resourceUrl: '',
        displayOrder: 0,
        isOfficial: true,
        isRagEnabled: false
      });
    }

    this.isModalOpen.set(true);
  }

  closeModal() {
    this.isModalOpen.set(false);
    this.selectedFile.set(null);
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.selectedFile.set(file);

      // Auto-fill title if empty
      const titleControl = this.materialForm.get('title');
      if (!titleControl?.value) {
        titleControl?.setValue(file.name);
      }
    }
  }

  onSubmit() {
    this.isFormSubmitted.set(true);

    if (this.materialForm.invalid) {
      this.toastService.error('Thông báo', 'Vui lòng điền đầy đủ các trường bắt buộc');
      return;
    }

    const formValues = this.materialForm.value;

    if (!this.isEditing() && formValues.sourceType === 'MINIO' && !this.selectedFile()) {
      this.toastService.error('Lỗi tệp tin', 'Vui lòng chọn tệp tin cần tải lên');
      return;
    }

    if (this.isEditing() && this.currentId()) {
      this.handleUpdate(formValues);
    } else {
      this.handleCreate(formValues);
    }
  }

  private handleCreate(formValues: any) {
    if (formValues.sourceType === 'MINIO' && this.selectedFile()) {
      const formData = new FormData();
      formData.append('courseId', formValues.courseId);
      formData.append('title', formValues.title);
      formData.append('materialType', formValues.materialType);
      formData.append('displayOrder', formValues.displayOrder);
      formData.append('file', this.selectedFile()!);

      this.materialService.uploadFile(formData).subscribe({
        next: (res) => {
          this.toastService.success('Thành công', res.message || 'Tải lên tài liệu thành công!');
          this.closeModal();
          this.loadData();
        },
        error: (err) => {
          this.toastService.error('Lỗi', 'Upload thất bại: ' + (err.error?.message || err.message));
        }
      });
    } else {
      const dto: Partial<LearningMaterial> = {
        title: formValues.title,
        materialType: formValues.materialType,
        sourceType: 'EXTERNAL',
        resourceUrl: formValues.resourceUrl,
        displayOrder: Number(formValues.displayOrder),
        courseId: Number(formValues.courseId)
      };

      this.materialService.createLink(dto).subscribe({
        next: (res) => {
          this.toastService.success('Thành công', res.message || 'Thêm liên kết tài liệu thành công!');
          this.closeModal();
          this.loadData();
        },
        error: (err) => {
          this.toastService.error('Lỗi', 'Thêm link thất bại: ' + (err.error?.message || err.message));
        }
      });
    }
  }

  private handleUpdate(formValues: any) {
    const id = this.currentId()!;

    if (this.selectedFile()) {
      const formData = new FormData();
      formData.append('courseId', formValues.courseId);
      formData.append('title', formValues.title);
      formData.append('materialType', formValues.materialType);
      formData.append('displayOrder', formValues.displayOrder);
      formData.append('isOfficial', formValues.isOfficial);
      formData.append('isRagEnabled', formValues.isRagEnabled);
      formData.append('file', this.selectedFile()!);

      this.materialService.updateWithFile(id, formData).subscribe({
        next: (res) => {
          this.toastService.success('Thành công', res.message || 'Cập nhật tài liệu thành công!');
          this.closeModal();
          this.loadData();
        },
        error: (err) => {
          this.toastService.error('Lỗi', 'Cập nhật thất bại: ' + (err.error?.message || err.message));
        }
      });
    } else {
      const dto: Partial<LearningMaterial> = {
        title: formValues.title,
        materialType: formValues.materialType,
        sourceType: formValues.sourceType,
        resourceUrl: formValues.resourceUrl,
        displayOrder: Number(formValues.displayOrder),
        isOfficial: formValues.isOfficial,
        isRagEnabled: formValues.isRagEnabled,
        courseId: Number(formValues.courseId)
      };

      this.materialService.update(id, dto).subscribe({
        next: (res) => {
          this.toastService.success('Thành công', res.message || 'Cập nhật tài liệu thành công!');
          this.closeModal();
          this.loadData();
        },
        error: (err) => {
          this.toastService.error('Lỗi', 'Cập nhật thất bại: ' + (err.error?.message || err.message));
        }
      });
    }
  }

  // --- TOGGLE ACTIONS FROM TABLE ---

  toggleOfficial(item: LearningMaterial) {
    if (!item.id) return;
    const newStatus = !item.isOfficial;
    this.materialService.update(item.id, { isOfficial: newStatus }).subscribe({
      next: (res) => {
        this.toastService.success('Thành công', newStatus ? 'Đã duyệt Tài liệu Chính thống' : 'Đã bỏ duyệt Chính thống');
        this.loadData();
      },
      error: (err) => {
        this.toastService.error('Lỗi', 'Cập nhật thất bại: ' + (err.error?.message || err.message));
      }
    });
  }

  toggleRag(item: LearningMaterial) {
    if (!item.id) return;
    const newStatus = !item.isRagEnabled;
    this.materialService.update(item.id, { isRagEnabled: newStatus }).subscribe({
      next: (res) => {
        this.toastService.success('Thành công', newStatus ? 'Đã kích hoạt AI RAG cho tài liệu này' : 'Đã tắt AI RAG');
        this.loadData();
      },
      error: (err) => {
        this.toastService.error('Lỗi', 'Cập nhật thất bại: ' + (err.error?.message || err.message));
      }
    });
  }

  // --- DELETE MODAL ---

  onDelete(id?: number | string) {
    if (id != null) {
      this.idToDelete.set(id);
      this.isDeleteModalOpen.set(true);
    }
  }

  confirmDelete() {
    const id = this.idToDelete();
    if (!id) return;

    this.materialService.delete(id).subscribe({
      next: (res) => {
        this.toastService.success('Thành công', res.message || 'Xóa tài liệu học tập thành công!');
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

  // --- HELPERS ---

  getTypeBadge(typeKey?: string) {
    if (!typeKey) return { label: 'Tài liệu', bgClass: 'bg-gray-50', textClass: 'text-gray-700', icon: 'document' };
    return this.typeMap[typeKey] || { label: typeKey, bgClass: 'bg-gray-50', textClass: 'text-gray-700', icon: 'document' };
  }

  getIndexingBadge(statusKey?: string) {
    if (!statusKey) return { label: 'Chưa học AI', bgClass: 'bg-gray-50', textClass: 'text-gray-600', borderClass: 'border-gray-200' };
    return this.statusMap[statusKey] || { label: statusKey, bgClass: 'bg-gray-50', textClass: 'text-gray-700', borderClass: 'border-gray-200' };
  }

  formatFileSize(bytes?: number): string {
    if (!bytes) return 'N/A';
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  }
}
