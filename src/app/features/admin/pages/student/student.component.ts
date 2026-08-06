import { Component, OnInit, inject, signal, computed, DestroyRef, ChangeDetectionStrategy } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { StudentService } from '../../../../modules/user/services/student.service';
import { ClassStudentService } from '../../../../modules/user/services/class-student.service';
import { ToastService } from '../../../../core/services/toast.service';
import { Student, StudentStatus } from '../../../../modules/user/models/student.model';

import { HasPermissionDirective } from '../../../../core/directives/has-permission.directive';

@Component({
  selector: 'app-student',
  imports: [CommonModule, ReactiveFormsModule, HasPermissionDirective],
  templateUrl: './student.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StudentComponent implements OnInit {
  private studentService = inject(StudentService);
  private classStudentService = inject(ClassStudentService);
  private toastService = inject(ToastService);
  private fb = inject(FormBuilder);
  private destroyRef = inject(DestroyRef);
  private router = inject(Router);

  isReadOnly = signal(false);
  isAcademic = signal(false);

  canProvisionAccount = computed(() => !this.isAcademic());
  canDelete = computed(() => !this.isAcademic());

  students = signal<Student[]>([]);
  totalElements = signal(0);
  currentPage = signal(1);
  pageSize = signal(10);
  isLoading = signal(false);

  totalPages = computed(() => Math.ceil(this.totalElements() / this.pageSize()));
  startIndex = computed(() => this.totalElements() === 0 ? 0 : (this.currentPage() - 1) * this.pageSize() + 1);
  endIndex = computed(() => Math.min(this.currentPage() * this.pageSize(), this.totalElements()));

  searchControl = new FormControl('');
  statusFilterControl = new FormControl('');

  selectedStudentIds = signal<(number | string)[]>([]);

  isModalOpen = signal(false);
  isEditing = signal(false);
  currentId = signal<number | string | null>(null);
  studentForm!: FormGroup;

  isAccountModalOpen = signal(false);
  accountForm!: FormGroup;
  selectedStudentForAccount = signal<Student | null>(null);

  isDeleteModalOpen = signal(false);
  idToDelete = signal<number | string | null>(null);

  isBatchAccountModalOpen = signal(false);
  isDistributeModalOpen = signal(false);
  selectedClassIds = signal<string[]>([]);
  distributeForm!: FormGroup;

  ngOnInit() {
    const isAcad = this.router.url.startsWith('/academic');
    this.isAcademic.set(isAcad);
    this.isReadOnly.set(isAcad);
    this.initForms();
    this.setupFilters();
    this.loadData();
  }

  private initForms() {
    this.studentForm = this.fb.group({
      studentCode: [''],
      fullName: ['', [Validators.required, Validators.maxLength(100)]],
      parentName: [''],
      parentPhone: [''],
      targetScore: [''],
      status: ['STUDYING' as StudentStatus, Validators.required]
    });

    this.accountForm = this.fb.group({
      email: ['']
    });

    this.distributeForm = this.fb.group({
      schoolYearId: ['', Validators.required]
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

    this.statusFilterControl.valueChanges.pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(() => {
      this.currentPage.set(1);
      this.loadData();
    });
  }

  loadData() {
    this.isLoading.set(true);
    const keyword = this.searchControl.value || undefined;
    const status = this.statusFilterControl.value || undefined;

    this.studentService.getAll(keyword, status, this.currentPage() - 1, this.pageSize()).subscribe({
      next: (res) => {
        let content: Student[] = res?.content || (Array.isArray(res) ? res : []);
        if (status) {
          content = content.filter(s => s.status === status);
        }
        this.students.set(content);
        this.totalElements.set(status ? content.length : (res?.totalElements !== undefined ? res.totalElements : content.length));
        this.selectedStudentIds.set([]); // Reset tick chọn khi chuyển trang/lọc
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error('Lỗi tải danh sách học viên:', err);
        this.students.set([]);
        this.totalElements.set(0);
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

  toggleStudent(id: number | string) {
    const current = this.selectedStudentIds();
    if (current.includes(id)) {
      this.selectedStudentIds.set(current.filter(x => x !== id));
    } else {
      this.selectedStudentIds.set([...current, id]);
    }
  }

  toggleAllStudents(event: any) {
    if (event.target.checked) {
      this.selectedStudentIds.set(this.students().map(s => s.id));
    } else {
      this.selectedStudentIds.set([]);
    }
  }

  // --- LOGIC MODAL PHÂN LỚP ---
  toggleClassTarget(classId: string, event: any) {
    const current = this.selectedClassIds();
    if (event.target.checked) {
      this.selectedClassIds.set([...current, classId]);
    } else {
      this.selectedClassIds.set(current.filter(x => x !== classId));
    }
  }

  openDistributeModal() {
    this.distributeForm.reset({ schoolYearId: '' });
    this.selectedClassIds.set([]);
    this.isDistributeModalOpen.set(true);
  }

  closeDistributeModal() {
    this.isDistributeModalOpen.set(false);
  }

  onSubmitDistribute() {
    if (this.distributeForm.invalid || this.selectedClassIds().length === 0) {
      this.toastService.warning('Chưa đủ thông tin', 'Vui lòng chọn Năm học và ít nhất 1 Lớp đích!');
      return;
    }

    this.isLoading.set(true);
    const request = {
      schoolYearId: this.distributeForm.value.schoolYearId,
      classIds: this.selectedClassIds(),
      studentIds: this.selectedStudentIds()
    };

    this.classStudentService.autoDistribute(request).subscribe({
      next: (res) => {
        this.isLoading.set(false);
        this.closeDistributeModal();
        this.selectedStudentIds.set([]); 
        
        let msg = '';
        for (const [key, value] of Object.entries(res)) {
          msg += `• ${key}: ${value}\n`;
        }
        this.toastService.success('Báo cáo phân lớp', msg);
        this.loadData();
      },
      error: (err) => {
        this.isLoading.set(false);
        this.toastService.error('Thất bại', err.error?.message || 'Có lỗi xảy ra khi phân lớp!');
      }
    });
  }

  // --- HELPERS TRẠNG THÁI & GIỚI TÍNH ---
  getGenderText(gender?: string): string {
    if (!gender) return 'Chưa cập nhật';
    const g = gender.toLowerCase();
    if (g === 'male') return 'Nam';
    if (g === 'female') return 'Nữ';
    return gender;
  }

  isStudying(status?: string): boolean {
    if (!status) return true;
    const s = status.toUpperCase();
    return s === 'STUDYING' || s === 'ACTIVE';
  }

  isGraduated(status?: string): boolean {
    if (!status) return false;
    const s = status.toUpperCase();
    return s === 'GRADUATED';
  }

  isReserved(status?: string): boolean {
    if (!status) return false;
    const s = status.toUpperCase();
    return s === 'RESERVED' || s === 'TRANSFERRED';
  }

  isDropped(status?: string): boolean {
    if (!status) return false;
    const s = status.toUpperCase();
    return s === 'DROPPED' || s === 'DROPPED_OUT';
  }

  getStatusText(status?: string): string {
    if (this.isGraduated(status)) return 'Tốt nghiệp';
    if (this.isReserved(status)) return 'Bảo lưu';
    if (this.isDropped(status)) return 'Bỏ học';
    return 'Đang học';
  }

  // --- XỬ LÝ FORM CHÍNH ---
  openModal(student?: Student) {
    if (student) {
      this.isEditing.set(true);
      this.currentId.set(student.id);
      this.studentForm.patchValue({
        studentCode: student.studentCode,
        fullName: student.fullName,
        parentName: student.parentName || '',
        parentPhone: student.parentPhone || '',
        targetScore: student.targetScore || '',
        status: student.status
      });
      this.studentForm.get('studentCode')?.disable();
    } else {
      this.isEditing.set(false);
      this.currentId.set(null);
      this.studentForm.reset({
        studentCode: '',
        fullName: '',
        parentName: '',
        parentPhone: '',
        targetScore: '',
        status: 'STUDYING'
      });
      this.studentForm.get('studentCode')?.enable();
    }
    this.isModalOpen.set(true);
  }

  closeModal() {
    this.isModalOpen.set(false);
    this.currentId.set(null);
  }

  onSubmit() {
    if (this.studentForm.invalid) return;
    this.isLoading.set(true);
    const data = this.studentForm.getRawValue();

    if (this.isEditing() && this.currentId() != null) {
      this.studentService.update(this.currentId()!, data).subscribe({
        next: () => {
          this.loadData();
          this.closeModal();
          this.toastService.success('Thành công', 'Đã cập nhật thông tin học viên!');
        },
        error: (err) => {
          this.isLoading.set(false);
          this.toastService.error('Thất bại', err.error?.message || 'Có lỗi xảy ra khi cập nhật!');
        }
      });
    } else {
      delete data.studentCode; // Bỏ mã để backend tự sinh
      this.studentService.create(data).subscribe({
        next: () => {
          this.loadData();
          this.closeModal();
          this.toastService.success('Thành công', 'Đã thêm học viên mới!');
        },
        error: (err) => {
          this.isLoading.set(false);
          this.toastService.error('Thất bại', err.error?.message || 'Có lỗi xảy ra khi thêm mới!');
        }
      });
    }
  }

  openAccountModal(student: Student) {
    this.selectedStudentForAccount.set(student);
    this.accountForm.reset({ email: student.userEmail || '' });
    this.isAccountModalOpen.set(true);
  }

  closeAccountModal() {
    this.isAccountModalOpen.set(false);
    this.selectedStudentForAccount.set(null);
  }

  onSubmitAccount() {
    const studentId = this.selectedStudentForAccount()?.id;
    if (!studentId) return;

    this.isLoading.set(true);
    const email = this.accountForm.value.email;

    this.studentService.createAccount(studentId, email).subscribe({
      next: () => {
        this.loadData();
        this.closeAccountModal();
        this.toastService.success('Đã cấp', 'Tài khoản đã được tạo thành công!');
      },
      error: (err) => {
        this.isLoading.set(false);
        this.toastService.error('Lỗi cấp TK', err.error?.message || 'Không thể tạo tài khoản!');
      }
    });
  }

  openBatchAccountModal() {
    if (this.selectedStudentIds().length === 0) return;
    this.isBatchAccountModalOpen.set(true);
  }

  closeBatchAccountModal() {
    this.isBatchAccountModalOpen.set(false);
  }

  executeBatchAccountCreation() {
    const ids = this.selectedStudentIds();
    if (ids.length === 0) return;

    this.isLoading.set(true);
    this.studentService.createAccountsBatch(ids).subscribe({
      next: (res) => {
        this.loadData();
        this.closeBatchAccountModal();
        this.toastService.success('Hoàn tất', `Cấp tài khoản thành công: ${res.successCount || ids.length}`);
      },
      error: (err) => {
        this.isLoading.set(false);
        this.closeBatchAccountModal();
        this.toastService.error('Lỗi hệ thống', err.error?.message || 'Có lỗi xảy ra khi tạo hàng loạt!');
      }
    });
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
    if (id !== null && id !== undefined) {
      this.isLoading.set(true);
      this.studentService.delete(id).subscribe({
        next: () => {
          this.loadData();
          this.closeDeleteModal();
          this.toastService.success('Đã xóa', 'Xóa hồ sơ học viên thành công!');
        },
        error: (err) => {
          this.isLoading.set(false);
          this.closeDeleteModal();
          this.toastService.error('Lỗi xóa', err.error?.message || 'Không thể xóa học viên này!');
        }
      });
    }
  }
}