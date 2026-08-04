import { Component, OnInit, inject, signal, computed, DestroyRef, ChangeDetectionStrategy } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ClassesService } from '../../../../modules/academic/services/class.service';
import { CourseService } from '../../../../modules/academic/services/course.service';
import { TermService } from '../../../../modules/academic/services/term.service';
import { ClassEntity } from '../../../../modules/academic/models/class.model';
import { Course } from '../../../../modules/academic/models/course.model';
import { Term } from '../../../../modules/academic/models/term.model';
import { ToastService } from '../../../../core/services/toast.service';

@Component({
  selector: 'app-classes',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './classes.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClassesComponent implements OnInit {
  private classesService = inject(ClassesService);
  private courseService = inject(CourseService);
  private termService = inject(TermService);
  private fb = inject(FormBuilder);
  private destroyRef = inject(DestroyRef);
  private toastService = inject(ToastService);

  // --- STATE DANH SÁCH LỚP HỌC ---
  classes = signal<ClassEntity[]>([]);
  totalElements = signal(0);
  currentPage = signal(1);
  pageSize = signal(10);
  isLoading = signal(false);
  searchControl = new FormControl('');

  // --- STATE LIST DROPDOWN LỰA CHỌN KHÓA HỌC & KỲ HỌC ---
  availableCourses = signal<Course[]>([]);
  availableTerms = signal<Term[]>([]);

  // --- STATE MODAL THÊM / SỬA ---
  isModalOpen = signal(false);
  isEditing = signal(false);
  currentId = signal<number | string | null>(null);
  classForm!: FormGroup;
  isFormSubmitted = signal(false);

  // Signals lưu chuỗi hiển thị theo định dạng dd/mm/yyyy trong ô input
  startDateDisplay = signal<string>('');
  endDateDisplay = signal<string>('');

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
    this.loadDropdownOptions();
  }

  private initForm() {
    this.classForm = this.fb.group({
      courseId: ['', [Validators.required]],
      termId: [''],
      code: ['', [Validators.required, Validators.maxLength(50)]],
      name: ['', [Validators.required, Validators.maxLength(255)]],
      startDate: [''],
      endDate: [''],
      maxStudents: [20, [Validators.required, Validators.min(10)]],
      status: ['OPENING', [Validators.required]]
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

    this.termService.getTerms({ size: 100 }).subscribe({
      next: (res) => this.availableTerms.set(res.content || []),
      error: () => {}
    });
  }

  loadData() {
    this.isLoading.set(true);
    this.classesService.getClasses({
      page: this.currentPage(),
      size: this.pageSize(),
      keyword: this.searchControl.value || ''
    }).subscribe({
      next: (response) => {
        this.classes.set(response.content || []);
        this.totalElements.set(response.totalElements || 0);
        this.isLoading.set(false);
      },
      error: (err) => {
        this.toastService.error('Lỗi', 'Lỗi khi tải danh sách lớp học: ' + (err.error?.message || err.message));
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

  openModal(classItem?: ClassEntity) {
    this.isFormSubmitted.set(false);
    this.loadDropdownOptions();

    if (classItem && classItem.id) {
      this.isEditing.set(true);
      this.currentId.set(classItem.id);
      const startIso = classItem.startDate ? classItem.startDate.split('T')[0] : '';
      const endIso = classItem.endDate ? classItem.endDate.split('T')[0] : '';
      
      this.startDateDisplay.set(this.formatDateVN(startIso));
      this.endDateDisplay.set(this.formatDateVN(endIso));

      this.classForm.patchValue({
        courseId: classItem.courseId,
        termId: classItem.termId || '',
        code: classItem.code,
        name: classItem.name,
        startDate: startIso,
        endDate: endIso,
        maxStudents: classItem.maxStudents || 20,
        status: classItem.status || 'OPENING'
      });
    } else {
      // Nếu trước đó đang ở chế độ Sửa -> Reset lại form bản nháp ban đầu
      if (this.isEditing() || !this.classForm.get('courseId')?.value) {
        this.isEditing.set(false);
        this.currentId.set(null);
        this.resetAddForm();
      } else {
        // Giữ nguyên bản nháp người dùng đã điền trước đó
        this.isEditing.set(false);
        this.currentId.set(null);
      }
    }
    this.isModalOpen.set(true);
  }

  resetAddForm() {
    this.startDateDisplay.set('');
    this.endDateDisplay.set('');
    this.classForm.reset({
      courseId: this.availableCourses().length > 0 ? this.availableCourses()[0].id : '',
      termId: '',
      code: '',
      name: '',
      startDate: '',
      endDate: '',
      maxStudents: 20,
      status: 'OPENING'
    });
  }

  closeModal() {
    this.isModalOpen.set(false);
  }

  onCourseChange() {
    const selectedCourseId = this.classForm.get('courseId')?.value;
    const course = this.availableCourses().find(c => c.id === Number(selectedCourseId));
    if (course && !this.isEditing()) {
      const randomSuffix = Math.floor(100 + Math.random() * 900);
      this.classForm.patchValue({
        code: `${course.code}-K${randomSuffix}`,
        name: `Lớp ${course.name} - Đợt ${randomSuffix}`
      });
    }
  }

  openPicker(pickerInput: any) {
    try {
      if (pickerInput && typeof pickerInput.showPicker === 'function') {
        pickerInput.showPicker();
      } else if (pickerInput && typeof pickerInput.click === 'function') {
        pickerInput.click();
      }
    } catch (e) {
      if (pickerInput && typeof pickerInput.click === 'function') {
        pickerInput.click();
      }
    }
  }

  onDateTextInput(event: Event, field: 'startDate' | 'endDate') {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/\D/g, '');

    if (value.length > 8) value = value.substring(0, 8);

    let formatted = '';
    if (value.length > 0) {
      formatted = value.substring(0, 2);
      if (value.length >= 3) {
        formatted += '/' + value.substring(2, 4);
      }
      if (value.length >= 5) {
        formatted += '/' + value.substring(4, 8);
      }
    }

    input.value = formatted;
    if (field === 'startDate') {
      this.startDateDisplay.set(formatted);
    } else {
      this.endDateDisplay.set(formatted);
    }

    if (formatted.length === 10) {
      const parts = formatted.split('/');
      const day = parts[0];
      const month = parts[1];
      const year = parts[2];
      const isoDate = `${year}-${month}-${day}`;
      this.classForm.get(field)?.setValue(isoDate);
    } else {
      this.classForm.get(field)?.setValue('');
    }
  }

  onDatePickerChange(event: Event, field: 'startDate' | 'endDate') {
    const input = event.target as HTMLInputElement;
    const isoDate = input.value;
    if (isoDate) {
      this.classForm.get(field)?.setValue(isoDate);
      const formatted = this.formatDateVN(isoDate);
      if (field === 'startDate') {
        this.startDateDisplay.set(formatted);
      } else {
        this.endDateDisplay.set(formatted);
      }
    }
  }

  onSubmit() {
    this.isFormSubmitted.set(true);
    if (this.classForm.invalid) {
      this.toastService.error('Thông báo', 'Vui lòng kiểm tra lại các trường dữ liệu bắt buộc');
      return;
    }

    const formValues = this.classForm.value;

    // Validate ngày kết thúc > ngày bắt đầu nếu có
    if (formValues.startDate && formValues.endDate && formValues.startDate > formValues.endDate) {
      this.toastService.error('Lỗi ngày tháng', 'Ngày kết thúc phải sau hoặc bằng ngày bắt đầu');
      return;
    }

    const classData: Partial<ClassEntity> = {
      courseId: Number(formValues.courseId),
      termId: formValues.termId ? Number(formValues.termId) : undefined,
      code: formValues.code,
      name: formValues.name,
      startDate: formValues.startDate || undefined,
      endDate: formValues.endDate || undefined,
      maxStudents: Number(formValues.maxStudents),
      status: formValues.status
    };

    if (this.isEditing() && this.currentId()) {
      this.classesService.update(this.currentId()!, classData).subscribe({
        next: (res) => {
          this.toastService.success('Thành công', res.message || 'Cập nhật lớp học thành công!');
          this.closeModal();
          this.loadData();
        },
        error: (err) => {
          this.toastService.error('Lỗi', 'Cập nhật thất bại: ' + (err.error?.message || err.message));
        }
      });
    } else {
      this.classesService.create(classData).subscribe({
        next: (res) => {
          this.toastService.success('Thành công', res.message || 'Tạo mới lớp học thành công!');
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

    this.classesService.delete(id).subscribe({
      next: (res) => {
        this.toastService.success('Thành công', res.message || 'Xóa lớp học thành công!');
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

  formatDateVN(dateStr?: string): string {
    if (!dateStr) return '---';
    const parts = dateStr.split('T')[0].split('-');
    if (parts.length === 3) {
      return `${parts[2]}/${parts[1]}/${parts[0]}`;
    }
    return dateStr;
  }
}
