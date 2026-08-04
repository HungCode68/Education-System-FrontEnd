import { Component, OnInit, inject, signal, computed, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EnrollmentService } from '../../../../modules/academic/services/enrollment.service';
import { ClassService } from '../../../../modules/academic/services/class.service';
import { StudentService } from '../../../../modules/user/services/student.service';
import { Enrollment, EnrollmentStatus } from '../../../../modules/academic/models/enrollment.model';
import { Class } from '../../../../modules/academic/models/class.model';
import { Student } from '../../../../modules/user/models/student.model';
import { ToastService } from '../../../../core/services/toast.service';

@Component({
  selector: 'app-enrollment',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './enrollment.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EnrollmentComponent implements OnInit {
  private enrollmentService = inject(EnrollmentService);
  private classService = inject(ClassService);
  private studentService = inject(StudentService);
  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);
  private toastService = inject(ToastService);

  enrollments = signal<Enrollment[]>([]);
  classes = signal<Class[]>([]);
  students = signal<Student[]>([]);

  totalElements = signal(0);
  currentPage = signal(1);
  pageSize = signal(10);
  isLoading = signal(false);

  classIdParam = signal<string | number | null>(null);
  selectedClassFilter = new FormControl('');
  statusFilter = new FormControl('');

  isModalOpen = signal(false);
  isEditing = signal(false);
  currentId = signal<number | string | null>(null);
  enrollmentForm!: FormGroup;

  isBulkModalOpen = signal(false);
  bulkForm!: FormGroup;
  selectedStudentIds = signal<(number | string)[]>([]);

  isDeleteModalOpen = signal(false);
  idToDelete = signal<number | string | null>(null);

  totalPages = computed(() => Math.ceil(this.totalElements() / this.pageSize()));
  startIndex = computed(() => this.totalElements() === 0 ? 0 : (this.currentPage() - 1) * this.pageSize() + 1);
  endIndex = computed(() => Math.min(this.currentPage() * this.pageSize(), this.totalElements()));

  ngOnInit() {
    this.initForms();
    this.loadDropdowns();

    const idFromRoute = this.route.snapshot.paramMap.get('id');
    if (idFromRoute) {
      this.classIdParam.set(idFromRoute);
      this.selectedClassFilter.setValue(idFromRoute);
    }

    this.selectedClassFilter.valueChanges.subscribe(() => {
      this.currentPage.set(1);
      this.loadData();
    });

    this.statusFilter.valueChanges.subscribe(() => {
      this.currentPage.set(1);
      this.loadData();
    });

    this.loadData();
  }

  private initForms() {
    this.enrollmentForm = this.fb.group({
      classId: ['', Validators.required],
      studentId: ['', Validators.required],
      enrollmentDate: [new Date().toISOString().substring(0, 10), Validators.required],
      status: ['ACTIVE' as EnrollmentStatus, Validators.required],
      note: ['']
    });

    this.bulkForm = this.fb.group({
      classId: ['', Validators.required],
      enrollmentDate: [new Date().toISOString().substring(0, 10), Validators.required],
      note: ['']
    });
  }

  private loadDropdowns() {
    this.classService.getAll(0, 100).subscribe({
      next: (res) => this.classes.set(res.content || [])
    });
    this.studentService.getAll(undefined, undefined, 0, 500).subscribe({
      next: (res) => this.students.set(res.content || [])
    });
  }

  loadData() {
    this.isLoading.set(true);
    const filterClassId = this.selectedClassFilter.value || this.classIdParam() || undefined;
    const filterStatus = this.statusFilter.value || undefined;

    this.enrollmentService.getAll(this.currentPage() - 1, this.pageSize(), filterClassId, undefined, filterStatus).subscribe({
      next: (res) => {
        this.enrollments.set(res.content || []);
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

  openModal(item?: Enrollment) {
    if (item) {
      this.isEditing.set(true);
      this.currentId.set(item.id ?? null);
      this.enrollmentForm.patchValue({
        classId: item.classId,
        studentId: item.studentId,
        enrollmentDate: item.enrollmentDate,
        status: item.status,
        note: item.note || ''
      });
    } else {
      this.isEditing.set(false);
      this.currentId.set(null);
      this.enrollmentForm.reset({
        classId: this.selectedClassFilter.value || this.classIdParam() || '',
        studentId: '',
        enrollmentDate: new Date().toISOString().substring(0, 10),
        status: 'ACTIVE',
        note: ''
      });
    }
    this.isModalOpen.set(true);
  }

  closeModal() {
    this.isModalOpen.set(false);
    this.currentId.set(null);
  }

  onSubmit() {
    if (this.enrollmentForm.invalid) return;
    this.isLoading.set(true);
    const data = this.enrollmentForm.value;
    if (data.classId) data.classId = Number(data.classId);
    if (data.studentId) data.studentId = Number(data.studentId);

    if (this.isEditing() && this.currentId() != null) {
      this.enrollmentService.update(this.currentId()!, data).subscribe({
        next: () => {
          this.loadData();
          this.closeModal();
          this.toastService.success('Thành công', 'Đã cập nhật thông tin ghi danh!');
        },
        error: (err) => {
          this.isLoading.set(false);
          this.toastService.error('Thất bại', err.error?.message || 'Có lỗi xảy ra khi cập nhật!');
        }
      });
    } else {
      this.enrollmentService.create(data).subscribe({
        next: () => {
          this.loadData();
          this.closeModal();
          this.toastService.success('Thành công', 'Đã ghi danh học viên vào lớp!');
        },
        error: (err) => {
          this.isLoading.set(false);
          this.toastService.error('Thất bại', err.error?.message || 'Có lỗi xảy ra khi thêm mới!');
        }
      });
    }
  }

  openBulkModal() {
    this.selectedStudentIds.set([]);
    this.bulkForm.reset({
      classId: this.selectedClassFilter.value || this.classIdParam() || '',
      enrollmentDate: new Date().toISOString().substring(0, 10),
      note: ''
    });
    this.isBulkModalOpen.set(true);
  }

  closeBulkModal() {
    this.isBulkModalOpen.set(false);
    this.selectedStudentIds.set([]);
  }

  toggleStudentSelect(id: number | string) {
    const current = this.selectedStudentIds();
    if (current.includes(id)) {
      this.selectedStudentIds.set(current.filter(x => x !== id));
    } else {
      this.selectedStudentIds.set([...current, id]);
    }
  }

  submitBulkEnrollment() {
    if (this.bulkForm.invalid || this.selectedStudentIds().length === 0) {
      this.toastService.warning('Chưa chọn học viên', 'Vui lòng chọn lớp và ít nhất 1 học viên!');
      return;
    }

    this.isLoading.set(true);
    const dto = {
      classId: Number(this.bulkForm.value.classId),
      studentIds: this.selectedStudentIds().map(id => Number(id)),
      enrollmentDate: this.bulkForm.value.enrollmentDate,
      note: this.bulkForm.value.note
    };

    this.enrollmentService.bulkEnroll(dto).subscribe({
      next: () => {
        this.loadData();
        this.closeBulkModal();
        this.toastService.success('Thành công', `Đã ghi danh ${dto.studentIds.length} học viên vào lớp!`);
      },
      error: (err) => {
        this.isLoading.set(false);
        this.toastService.error('Thất bại', err.error?.message || 'Không thể thực hiện ghi danh hàng loạt!');
      }
    });
  }

  onDelete(id?: number | string) {
    if (id != null) {
      this.idToDelete.set(id);
      this.isDeleteModalOpen.set(true);
    }
  }

  closeDeleteModal() {
    this.isDeleteModalOpen.set(false);
    this.idToDelete.set(null);
  }

  confirmDelete() {
    const id = this.idToDelete();
    if (id != null) {
      this.isLoading.set(true);
      this.enrollmentService.delete(id).subscribe({
        next: () => {
          this.loadData();
          this.closeDeleteModal();
          this.toastService.success('Đã xóa', 'Xóa ghi danh thành công!');
        },
        error: (err) => {
          this.isLoading.set(false);
          this.closeDeleteModal();
          this.toastService.error('Lỗi xóa', err.error?.message || 'Không thể xóa bản ghi này!');
        }
      });
    }
  }
}
