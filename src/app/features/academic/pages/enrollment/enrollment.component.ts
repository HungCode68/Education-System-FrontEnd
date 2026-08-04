import { Component, OnInit, inject, signal, computed, DestroyRef, ChangeDetectionStrategy } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ClassesService } from '../../../../modules/academic/services/class.service';
import { EnrollmentService } from '../../../../modules/academic/services/enrollment.service';
import { StudentService } from '../../../../modules/user/services/student.service';
import { ClassEntity } from '../../../../modules/academic/models/class.model';
import { Enrollment, BulkEnrollment, ENROLLMENT_STATUS_MAP, ENROLLMENT_STATUS_OPTIONS } from '../../../../modules/academic/models/enrollment.model';
import { Student } from '../../../../modules/user/models/student.model';
import { ToastService } from '../../../../core/services/toast.service';

@Component({
  selector: 'app-enrollment',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './enrollment.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EnrollmentComponent implements OnInit {
  private classesService = inject(ClassesService);
  private enrollmentService = inject(EnrollmentService);
  private studentService = inject(StudentService);
  private fb = inject(FormBuilder);
  private destroyRef = inject(DestroyRef);
  private toastService = inject(ToastService);
  private route = inject(ActivatedRoute);

  // Constants
  statusOptions = ENROLLMENT_STATUS_OPTIONS;
  statusMap = ENROLLMENT_STATUS_MAP;
  Math = Math;

  calculateCapacityPercent(curr?: number, max?: number): number {
    const currentVal = curr || 0;
    const maxVal = max || 30;
    return Math.min(100, Math.round((currentVal / maxVal) * 100));
  }

  isStudentSelected(studentId: string | number): boolean {
    return this.selectedStudentIds().includes(Number(studentId));
  }

  // View Mode: 'master' (Class List) or 'detail' (Students in selected class)
  viewMode = signal<'master' | 'detail'>('master');

  // Master State (Classes)
  classes = signal<ClassEntity[]>([]);
  classTotalElements = signal(0);
  classCurrentPage = signal(1);
  classPageSize = signal(10);
  isMasterLoading = signal(false);
  classSearchControl = new FormControl('');

  // Detail State (Enrollments in selected class)
  selectedClass = signal<ClassEntity | null>(null);
  enrollments = signal<Enrollment[]>([]);
  isDetailLoading = signal(false);

  // All Students for Selection Dropdown / Checkbox List
  allStudents = signal<Student[]>([]);

  // Single Add / Edit Modal
  isModalOpen = signal(false);
  isEditing = signal(false);
  currentId = signal<number | string | null>(null);
  enrollmentForm!: FormGroup;
  isFormSubmitted = signal(false);
  enrollmentDateDisplay = signal<string>('');

  // Bulk Enrollment Modal
  isBulkModalOpen = signal(false);
  bulkStudentSearch = new FormControl('');
  bulkSearchTerm = signal<string>('');
  selectedStudentIds = signal<number[]>([]);
  bulkEnrollmentDateDisplay = signal<string>('');
  bulkForm!: FormGroup;
  isBulkFormSubmitted = signal(false);

  // Delete Modal
  isDeleteModalOpen = signal(false);
  idToDelete = signal<number | string | null>(null);

  // Computed signals for Master View Pagination
  classTotalPages = computed(() => Math.max(1, Math.ceil(this.classTotalElements() / this.classPageSize())));
  classStartIndex = computed(() => 
    this.classTotalElements() === 0 ? 0 : (this.classCurrentPage() - 1) * this.classPageSize() + 1
  );
  classEndIndex = computed(() => 
    Math.min(this.classCurrentPage() * this.classPageSize(), this.classTotalElements())
  );

  // Computed signal for Bulk Modal: Filtered Students based on search
  filteredStudentsForBulk = computed(() => {
    const search = this.bulkSearchTerm().toLowerCase().trim();
    const students = this.allStudents();
    const existingStudentIds = new Set(this.enrollments().map(e => e.studentId));

    return students.filter(s => {
      // Filter out students already enrolled in this class
      if (existingStudentIds.has(Number(s.id))) return false;

      if (!search) return true;
      const codeMatch = s.studentCode ? s.studentCode.toLowerCase().includes(search) : false;
      const nameMatch = s.fullName ? s.fullName.toLowerCase().includes(search) : false;
      return codeMatch || nameMatch;
    });
  });

  ngOnInit() {
    this.initForms();
    this.setupClassSearch();
    this.loadClasses();
    this.loadStudents();

    const routeClassId = this.route.snapshot.paramMap.get('id') || this.route.snapshot.queryParamMap.get('classId');
    if (routeClassId) {
      this.classesService.getById(routeClassId).subscribe({
        next: (cls) => {
          if (cls) {
            this.viewClassDetail(cls);
          }
        }
      });
    }
  }

  private initForms() {
    this.enrollmentForm = this.fb.group({
      studentId: ['', [Validators.required]],
      enrollmentDate: [this.getTodayIsoDate(), [Validators.required]],
      status: ['ACTIVE', [Validators.required]],
      note: ['', [Validators.maxLength(500)]]
    });

    this.bulkForm = this.fb.group({
      enrollmentDate: [this.getTodayIsoDate(), [Validators.required]],
      status: ['ACTIVE', [Validators.required]],
      note: ['', [Validators.maxLength(500)]]
    });
  }

  private setupClassSearch() {
    this.classSearchControl.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(() => {
      this.classCurrentPage.set(1);
      this.loadClasses();
    });

    this.bulkStudentSearch.valueChanges.pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe((val) => {
      this.bulkSearchTerm.set(val || '');
    });
  }

  loadClasses() {
    this.isMasterLoading.set(true);
    this.classesService.getClasses({
      page: this.classCurrentPage(),
      size: this.classPageSize(),
      keyword: this.classSearchControl.value || ''
    }).subscribe({
      next: (response) => {
        this.classes.set(response.content || []);
        this.classTotalElements.set(response.totalElements || 0);
        this.isMasterLoading.set(false);
      },
      error: (err) => {
        this.toastService.error('Lỗi', 'Không thể tải danh sách lớp học: ' + (err.error?.message || err.message));
        this.isMasterLoading.set(false);
      }
    });
  }

  loadStudents() {
    this.studentService.getAll({ page: 1, size: 500 }).subscribe({
      next: (res) => {
        const list = res?.content || (Array.isArray(res) ? res : []);
        this.allStudents.set(list);
      },
      error: (err) => {
        console.error('Lỗi tải danh sách học viên cho xếp lớp:', err);
      }
    });
  }

  changeClassPage(page: number) {
    if (page >= 1 && page <= this.classTotalPages()) {
      this.classCurrentPage.set(page);
      this.loadClasses();
    }
  }

  // --- DETAIL VIEW LOGIC ---

  viewClassDetail(cls: ClassEntity) {
    this.selectedClass.set(cls);
    this.viewMode.set('detail');
    if (cls.id != null) this.loadClassEnrollments(cls.id);
  }

  backToMaster() {
    this.viewMode.set('master');
    this.selectedClass.set(null);
    this.enrollments.set([]);
    this.loadClasses(); // Refresh class capacity numbers
  }

  loadClassEnrollments(classId: number | string) {
    this.isDetailLoading.set(true);
    this.enrollmentService.getByClassId(classId).subscribe({
      next: (list) => {
        this.enrollments.set(list || []);
        this.isDetailLoading.set(false);
      },
      error: (err) => {
        this.toastService.error('Lỗi', 'Không thể tải danh sách học viên trong lớp: ' + (err.error?.message || err.message));
        this.isDetailLoading.set(false);
      }
    });
  }

  // --- SINGLE ADD / EDIT MODAL ---

  openAddModal() {
    this.loadStudents();
    this.isEditing.set(false);
    this.currentId.set(null);
    this.isFormSubmitted.set(false);

    const todayIso = this.getTodayIsoDate();
    this.enrollmentDateDisplay.set(this.formatDateVN(todayIso));

    const enrolledIds = new Set(this.enrollments().map(e => e.studentId));
    const available = this.allStudents().filter(s => !enrolledIds.has(Number(s.id)));
    const firstStudentId = available.length > 0 ? available[0].id : '';

    this.enrollmentForm.reset({
      studentId: firstStudentId,
      enrollmentDate: todayIso,
      status: 'ACTIVE',
      note: ''
    });

    this.isModalOpen.set(true);
  }

  openEditModal(item: Enrollment) {
    this.isEditing.set(true);
    this.currentId.set(item.id ?? null);
    this.isFormSubmitted.set(false);

    const isoDate = item.enrollmentDate ? item.enrollmentDate.split('T')[0] : this.getTodayIsoDate();
    this.enrollmentDateDisplay.set(this.formatDateVN(isoDate));

    this.enrollmentForm.patchValue({
      studentId: item.studentId,
      enrollmentDate: isoDate,
      status: item.status || 'ACTIVE',
      note: item.note || ''
    });

    this.isModalOpen.set(true);
  }

  closeModal() {
    this.isModalOpen.set(false);
  }

  onSubmitSingle() {
    this.isFormSubmitted.set(true);
    if (this.enrollmentForm.invalid) {
      this.toastService.error('Thông báo', 'Vui lòng điền đầy đủ thông tin bắt buộc');
      return;
    }

    const currentClass = this.selectedClass();
    if (!currentClass || !currentClass.id) return;

    const values = this.enrollmentForm.value;

    const dto: Partial<Enrollment> = {
      classId: currentClass.id,
      studentId: Number(values.studentId),
      enrollmentDate: values.enrollmentDate,
      status: values.status,
      note: values.note
    };

    if (this.isEditing() && this.currentId()) {
      this.enrollmentService.update(this.currentId()!, dto).subscribe({
        next: () => {
          this.toastService.success('Thành công', 'Cập nhật đăng ký thành công!');
          this.closeModal();
          this.loadClassEnrollments(Number(currentClass.id));
        },
        error: (err) => {
          this.toastService.error('Lỗi', 'Cập nhật thất bại: ' + (err.error?.message || err.message));
        }
      });
    } else {
      this.enrollmentService.create(dto).subscribe({
        next: () => {
          this.toastService.success('Thành công', 'Thêm học viên vào lớp thành công!');
          this.closeModal();
          this.loadClassEnrollments(Number(currentClass.id));
        },
        error: (err) => {
          this.toastService.error('Lỗi', 'Xếp lớp thất bại: ' + (err.error?.message || err.message));
        }
      });
    }
  }

  // --- BULK ENROLLMENT MODAL ---

  openBulkModal() {
    this.loadStudents();
    this.isBulkModalOpen.set(true);
    this.isBulkFormSubmitted.set(false);
    this.selectedStudentIds.set([]);
    this.bulkStudentSearch.setValue('', { emitEvent: false });
    this.bulkSearchTerm.set('');

    const todayIso = this.getTodayIsoDate();
    this.bulkEnrollmentDateDisplay.set(this.formatDateVN(todayIso));

    this.bulkForm.reset({
      enrollmentDate: todayIso,
      status: 'ACTIVE',
      note: ''
    });
  }

  closeBulkModal() {
    this.isBulkModalOpen.set(false);
  }

  toggleStudentSelection(studentIdStr: string) {
    const sId = Number(studentIdStr);
    const current = this.selectedStudentIds();
    if (current.includes(sId)) {
      this.selectedStudentIds.set(current.filter(id => id !== sId));
    } else {
      this.selectedStudentIds.set([...current, sId]);
    }
  }

  selectAllFilteredStudents() {
    const filtered = this.filteredStudentsForBulk();
    const ids = filtered.map(s => Number(s.id));
    this.selectedStudentIds.set(ids);
  }

  deselectAllStudents() {
    this.selectedStudentIds.set([]);
  }

  onSubmitBulk() {
    this.isBulkFormSubmitted.set(true);
    if (this.selectedStudentIds().length === 0) {
      this.toastService.error('Thông báo', 'Vui lòng chọn ít nhất 1 học viên để xếp lớp');
      return;
    }

    if (this.bulkForm.invalid) {
      this.toastService.error('Thông báo', 'Vui lòng điền đầy đủ các trường bắt buộc');
      return;
    }

    const currentClass = this.selectedClass();
    if (!currentClass || !currentClass.id) return;

    const values = this.bulkForm.value;

    const bulkDto: BulkEnrollment = {
      classId: currentClass.id,
      studentIds: this.selectedStudentIds(),
      enrollmentDate: values.enrollmentDate,
      status: values.status,
      note: values.note
    };

    this.enrollmentService.enrollBulk(bulkDto).subscribe({
      next: (res) => {
        this.toastService.success('Thành công', res.message || 'Đăng ký học viên hàng loạt hoàn tất!');
        this.closeBulkModal();
        this.loadClassEnrollments(currentClass.id!);
      },
      error: (err) => {
        this.toastService.error('Lỗi', 'Xếp lớp hàng loạt thất bại: ' + (err.error?.message || err.message));
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

    const currentClass = this.selectedClass();

    this.enrollmentService.delete(id).subscribe({
      next: () => {
        this.toastService.success('Thành công', 'Xóa học viên khỏi lớp thành công!');
        this.isDeleteModalOpen.set(false);
        this.idToDelete.set(null);
        if (currentClass && currentClass.id) {
          this.loadClassEnrollments(Number(currentClass.id));
        }
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

  onDateTextInput(event: Event, isBulk = false) {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/\D/g, '');

    if (value.length > 8) value = value.substring(0, 8);

    let formatted = '';
    if (value.length > 0) {
      formatted = value.substring(0, 2);
      if (value.length >= 3) formatted += '/' + value.substring(2, 4);
      if (value.length >= 5) formatted += '/' + value.substring(4, 8);
    }

    input.value = formatted;
    if (isBulk) {
      this.bulkEnrollmentDateDisplay.set(formatted);
    } else {
      this.enrollmentDateDisplay.set(formatted);
    }

    if (formatted.length === 10) {
      const parts = formatted.split('/');
      const isoDate = `${parts[2]}-${parts[1]}-${parts[0]}`;
      const targetForm = isBulk ? this.bulkForm : this.enrollmentForm;
      targetForm.get('enrollmentDate')?.setValue(isoDate);
    } else {
      const targetForm = isBulk ? this.bulkForm : this.enrollmentForm;
      targetForm.get('enrollmentDate')?.setValue('');
    }
  }

  onDatePickerChange(event: Event, isBulk = false) {
    const input = event.target as HTMLInputElement;
    const isoDate = input.value;
    if (isoDate) {
      const targetForm = isBulk ? this.bulkForm : this.enrollmentForm;
      targetForm.get('enrollmentDate')?.setValue(isoDate);
      const formatted = this.formatDateVN(isoDate);
      if (isBulk) {
        this.bulkEnrollmentDateDisplay.set(formatted);
      } else {
        this.enrollmentDateDisplay.set(formatted);
      }
    }
  }

  getStatusBadge(statusKey?: string): { label: string; bgClass: string; textClass: string; borderClass: string } {
    const label = statusKey ? (this.statusMap[statusKey] || statusKey) : 'Chờ xác nhận';
    if (statusKey === 'ACTIVE' || statusKey === 'ENROLLED') {
      return { label, bgClass: 'bg-emerald-50', textClass: 'text-emerald-700', borderClass: 'border-emerald-200' };
    }
    if (statusKey === 'COMPLETED') {
      return { label, bgClass: 'bg-blue-50', textClass: 'text-blue-700', borderClass: 'border-blue-200' };
    }
    if (statusKey === 'DROPPED' || statusKey === 'INACTIVE') {
      return { label, bgClass: 'bg-rose-50', textClass: 'text-rose-700', borderClass: 'border-rose-200' };
    }
    return { label, bgClass: 'bg-amber-50', textClass: 'text-amber-700', borderClass: 'border-amber-200' };
  }

  getClassStatusBadge(status?: string) {
    switch (status) {
      case 'OPENING': return { label: 'Mở đăng ký', bgClass: 'bg-emerald-50', textClass: 'text-emerald-700', borderClass: 'border-emerald-200' };
      case 'ONGOING': return { label: 'Đang học', bgClass: 'bg-blue-50', textClass: 'text-blue-700', borderClass: 'border-blue-200' };
      case 'CLOSED': return { label: 'Đã đóng', bgClass: 'bg-gray-50', textClass: 'text-gray-700', borderClass: 'border-gray-200' };
      case 'CANCELLED': return { label: 'Đã hủy', bgClass: 'bg-red-50', textClass: 'text-red-700', borderClass: 'border-red-200' };
      default: return { label: status || 'Chưa xác định', bgClass: 'bg-gray-50', textClass: 'text-gray-700', borderClass: 'border-gray-200' };
    }
  }

  formatDateVN(dateStr?: string): string {
    if (!dateStr) return '---';
    const parts = dateStr.split('T')[0].split('-');
    if (parts.length === 3) {
      return `${parts[2]}/${parts[1]}/${parts[0]}`;
    }
    return dateStr;
  }

  getTodayIsoDate(): string {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  }
}
