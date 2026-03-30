import { Component, OnInit, inject, signal, computed, DestroyRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { StudentService } from '../../services/student.service';
import { PhysicalClassService } from '../../services/physical-class.service';
import { ClassStudentService } from '../../services/class-student.service'; // Chức năng Phân lớp
import { SchoolYearService } from '../../services/school-year.service'; // Lấy DS Năm học
import { ToastService } from '../../../../core/services/toast.service';
import { Student } from '../../models/student.model';
import { PhysicalClass } from '../../models/physical-class.model';
import { SchoolYear } from '../../models/school-year.model';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './student.component.html'
})
export class StudentComponent implements OnInit {
  private studentService = inject(StudentService);
  private classService = inject(PhysicalClassService);
  private classStudentService = inject(ClassStudentService);
  private schoolYearService = inject(SchoolYearService);
  private toastService = inject(ToastService);
  private fb = inject(FormBuilder);
  private destroyRef = inject(DestroyRef);

  // --- STATE DANH SÁCH ---
  students = signal<Student[]>([]);
  classes = signal<PhysicalClass[]>([]);
  schoolYears = signal<SchoolYear[]>([]);
  totalElements = signal(0);
  currentPage = signal(1);
  pageSize = signal(10);
  isLoading = signal(false);

  totalPages = computed(() => Math.ceil(this.totalElements() / this.pageSize()));
  startIndex = computed(() => this.totalElements() === 0 ? 0 : (this.currentPage() - 1) * this.pageSize() + 1);
  endIndex = computed(() => Math.min(this.currentPage() * this.pageSize(), this.totalElements()));

  // --- STATE TÌM KIẾM & BỘ LỌC ---
  searchControl = new FormControl('');
  statusFilterControl = new FormControl('');
  yearFilterControl = new FormControl('');

  // --- STATE CHỌN NHIỀU (BATCH) ---
  selectedStudentIds = signal<string[]>([]);
  selectedClassIds = signal<string[]>([]); // Dùng cho phân lớp

  // --- STATE MODAL ---
  isModalOpen = signal(false);
  isEditing = signal(false);
  currentId = signal<string | null>(null);
  studentForm!: FormGroup;

  isAccountModalOpen = signal(false);
  accountForm!: FormGroup;
  selectedStudentForAccount = signal<Student | null>(null);

  isDeleteModalOpen = signal(false);
  idToDelete = signal<string | null>(null);

  isDistributeModalOpen = signal(false);
  distributeForm!: FormGroup;

  isBatchAccountModalOpen = signal(false);

  ngOnInit() {
    this.initForms();
    this.loadDropdownData();
    this.setupFilters();
    this.loadData();
  }

  private initForms() {
    const currentYear = new Date().getFullYear();
    this.studentForm = this.fb.group({
      studentCode: [''], // Không cần required nữa vì lúc tạo mới bị ẩn
      fullName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      gender: ['male', Validators.required],
      address: ['', Validators.required],
      parentName: ['', Validators.required],
      parentPhone: ['', Validators.required],
      admissionYear: [currentYear, Validators.required],
      status: ['studying'],
      currentClassId: [''],
      email: ['']
    });

    this.accountForm = this.fb.group({
      email: ['']
    });

    this.distributeForm = this.fb.group({
      schoolYearId: ['', Validators.required]
    });
  }

  private setupFilters() {
    this.searchControl.valueChanges.pipe(debounceTime(400), distinctUntilChanged(), takeUntilDestroyed(this.destroyRef))
      .subscribe(() => { this.currentPage.set(1); this.loadData(); });

    this.statusFilterControl.valueChanges.pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => { this.currentPage.set(1); this.loadData(); });

    this.yearFilterControl.valueChanges.pipe(debounceTime(400), distinctUntilChanged(), takeUntilDestroyed(this.destroyRef))
      .subscribe(() => { this.currentPage.set(1); this.loadData(); });
  }

  private loadDropdownData() {
    this.classService.search(1, 100).subscribe(res => {
      this.classes.set(res.content || []);
    });
    this.schoolYearService.getAll(1, 100).subscribe(res => {
      this.schoolYears.set(res.content || (res as any).data || []);
    });
  }

  loadData() {
    this.isLoading.set(true);
    const keyword = this.searchControl.value || undefined;
    const status = this.statusFilterControl.value || undefined;
    const year = this.yearFilterControl.value ? Number(this.yearFilterControl.value) : undefined;

    this.studentService.getAll(keyword, status, year, this.currentPage() - 1, this.pageSize()).subscribe({
      next: (res) => {
        this.students.set(res.content);
        this.totalElements.set(res.totalElements);
        this.selectedStudentIds.set([]); // Reset tick chọn khi chuyển trang/lọc
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

  // --- LOGIC TICK CHỌN ---
  toggleStudent(id: string) {
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

  // --- XỬ LÝ FORM CHÍNH ---
  openModal(student?: Student) {
    if (student) {
      this.isEditing.set(true);
      this.currentId.set(student.id);
      this.studentForm.patchValue({
        studentCode: student.studentCode,
        fullName: student.fullName,
        dateOfBirth: student.dateOfBirth,
        gender: student.gender,
        address: student.address,
        parentName: student.parentName,
        parentPhone: student.parentPhone,
        admissionYear: student.admissionYear,
        status: student.status,
        currentClassId: student.currentClassId || '',
        email: student.email || ''
      });
      this.studentForm.get('studentCode')?.disable(); // Khóa không cho sửa Mã
      this.studentForm.get('email')?.disable(); 
    } else {
      this.isEditing.set(false);
      this.currentId.set(null);
      this.studentForm.reset({ gender: 'male', status: 'studying', admissionYear: new Date().getFullYear(), currentClassId: '' });
      this.studentForm.get('email')?.enable();
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

    if (!data.currentClassId) data.currentClassId = null;

    if (this.isEditing() && this.currentId()) {
      this.studentService.update(this.currentId()!, data).subscribe({
        next: () => { 
          this.loadData(); this.closeModal(); this.toastService.success('Thành công', 'Đã cập nhật hồ sơ!');
        },
        error: (err) => { 
          this.isLoading.set(false); this.toastService.error('Lỗi', err.error?.message || 'Cập nhật thất bại');
        }
      });
    } else {
      delete data.studentCode; // Bỏ mã để BE tự sinh
      
      this.studentService.create(data).subscribe({
        next: () => { 
          this.loadData(); this.closeModal(); this.toastService.success('Thành công', 'Đã thêm học sinh mới!');
        },
        error: (err) => { 
          this.isLoading.set(false); this.toastService.error('Lỗi', err.error?.message || 'Thêm thất bại');
        }
      });
    }
  }

  // --- XỬ LÝ CẤP TÀI KHOẢN ĐƠN LẺ ---
  openAccountModal(student: Student) {
    this.selectedStudentForAccount.set(student);
    this.accountForm.reset({ email: '' });
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

  // --- XỬ LÝ CẤP TÀI KHOẢN HÀNG LOẠT ---
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
        this.closeBatchAccountModal(); // Đóng modal khi thành công
        this.toastService.success(
          'Hoàn tất xử lý', 
          `Thành công: ${res.successCount} | Thất bại: ${res.failCount}`
        );
        if (res.failCount > 0) {
          console.warn('Lỗi tạo tài khoản chi tiết:', res.failedDetails);
        }
      },
      error: (err) => {
        this.isLoading.set(false);
        this.closeBatchAccountModal(); // Đóng modal khi có lỗi
        this.toastService.error('Lỗi hệ thống', err.error?.message || 'Có lỗi xảy ra khi tạo hàng loạt!');
      }
    });
  }

  // --- XỬ LÝ XÓA ---
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
      this.studentService.delete(id).subscribe({
        next: () => { 
          this.loadData(); this.closeDeleteModal(); this.toastService.success('Đã xóa', 'Hồ sơ học sinh đã bị xóa.');
        },
        error: (err) => { 
          this.isLoading.set(false); this.closeDeleteModal(); this.toastService.error('Lỗi', err.error?.message || 'Không thể xóa!');
        }
      });
    }
  }
}