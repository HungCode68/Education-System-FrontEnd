import { Component, OnInit, inject, signal, computed, DestroyRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { TeacherService } from '../../services/teacher.service';
import { ToastService } from '../../../../core/services/toast.service';
import { Teacher } from '../../models/teacher.model';
import { DepartmentService } from '../../services/department.service';

@Component({
  selector: 'app-teacher',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './teacher.component.html'
})
export class TeacherComponent implements OnInit {
  private teacherService = inject(TeacherService);
  private toastService = inject(ToastService);
  private fb = inject(FormBuilder);
  private destroyRef = inject(DestroyRef);
  private departmentService = inject(DepartmentService);

  // --- STATE DANH SÁCH ---
  teachers = signal<Teacher[]>([]);
  departments = signal<any[]>([]);
  
  totalElements = signal(0);
  currentPage = signal(1); 
  pageSize = signal(10);
  isLoading = signal(false);

  totalPages = computed(() => Math.ceil(this.totalElements() / this.pageSize()));
  startIndex = computed(() => this.totalElements() === 0 ? 0 : (this.currentPage() - 1) * this.pageSize() + 1);
  endIndex = computed(() => Math.min(this.currentPage() * this.pageSize(), this.totalElements()));

  // --- STATE BỘ LỌC ---
  searchControl = new FormControl('');
  statusFilterControl = new FormControl('');
  departmentFilterControl = new FormControl('');

  // --- STATE CHỌN NHIỀU (BATCH) ---
  selectedTeacherIds = signal<string[]>([]);

  // --- STATE MODAL ---
  isModalOpen = signal(false);
  isEditing = signal(false);
  currentId = signal<string | null>(null);
  teacherForm!: FormGroup;

  isAccountModalOpen = signal(false);
  accountForm!: FormGroup;
  selectedTeacherForAccount = signal<Teacher | null>(null);
  isBatchAccountModalOpen = signal(false);

  isDeleteModalOpen = signal(false);
  idToDelete = signal<string | null>(null);

  ngOnInit() {
    this.initForms();
    this.loadDropdownData();
    this.setupFilters();
    this.loadData();
  }

  // TẢI DANH SÁCH PHÒNG BAN 
  private loadDropdownData() {
    this.departmentService.getAllActive().subscribe({
      next: (res) => {
        this.departments.set(res);
      },
      error: (err) => {
        console.error('Không thể tải danh sách phòng ban', err);
      }
    });
  }

  private initForms() {
    this.teacherForm = this.fb.group({
      teacherCode: [''], // Ẩn khi tạo mới để backend tự sinh
      fullName: ['', Validators.required],
      dateOfBirth: [''],
      gender: ['male', Validators.required],
      phone: [''],
      emailContact: [''],
      address: ['', Validators.required],
      departmentId: [''],
      position: ['Giáo viên bộ môn', Validators.required],
      degree: ['Cử nhân', Validators.required],
      major: [''],
      startDate: [''],
      status: ['working']
    });

    this.accountForm = this.fb.group({
      email: ['']
    });
  }

  private setupFilters() {
    this.searchControl.valueChanges.pipe(debounceTime(400), distinctUntilChanged(), takeUntilDestroyed(this.destroyRef))
      .subscribe(() => { this.currentPage.set(1); this.loadData(); });

    this.statusFilterControl.valueChanges.pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => { this.currentPage.set(1); this.loadData(); });

    this.departmentFilterControl.valueChanges.pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => { this.currentPage.set(1); this.loadData(); });
  }

  loadData() {
    this.isLoading.set(true);
    const keyword = (this.searchControl.value || '').trim().toLowerCase();
    const status = this.statusFilterControl.value || undefined;
    const deptId = this.departmentFilterControl.value || undefined;

    this.teacherService.getTeachersOnly().subscribe({
      next: (data) => {
        let list: Teacher[] = Array.isArray(data) ? data : (data?.content || []);

        if (keyword) {
          list = list.filter(t => 
            (t.fullName && t.fullName.toLowerCase().includes(keyword)) ||
            (t.staffCode && t.staffCode.toLowerCase().includes(keyword)) ||
            (t.teacherCode && t.teacherCode.toLowerCase().includes(keyword)) ||
            (t.phone && t.phone.includes(keyword)) ||
            (t.userEmail && t.userEmail.toLowerCase().includes(keyword))
          );
        }

        if (status) {
          list = list.filter(t => t.status === status || (t.status && t.status.toUpperCase() === status.toUpperCase()));
        }

        if (deptId) {
          list = list.filter(t => t.departmentId?.toString() === deptId.toString());
        }

        this.totalElements.set(list.length);

        // Paging client-side
        const page = this.currentPage() - 1;
        const size = this.pageSize();
        const pagedList = list.slice(page * size, (page + 1) * size);

        this.teachers.set(pagedList);
        this.selectedTeacherIds.set([]);
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error('Lỗi tải danh sách giảng viên:', err);
        this.teachers.set([]);
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

  // --- LOGIC TICK CHỌN ---
  toggleTeacher(id: string) {
    const current = this.selectedTeacherIds();
    if (current.includes(id)) {
      this.selectedTeacherIds.set(current.filter(x => x !== id));
    } else {
      this.selectedTeacherIds.set([...current, id]);
    }
  }

  toggleAllTeachers(event: any) {
    if (event.target.checked) {
      this.selectedTeacherIds.set(this.teachers().map(t => t.id));
    } else {
      this.selectedTeacherIds.set([]);
    }
  }

  // --- XỬ LÝ FORM CHÍNH ---
  openModal(teacher?: Teacher) {
    if (teacher) {
      this.isEditing.set(true);
      this.currentId.set(teacher.id);
      this.teacherForm.patchValue({
        teacherCode: teacher.teacherCode,
        fullName: teacher.fullName,
        dateOfBirth: teacher.dateOfBirth,
        gender: teacher.gender,
        phone: teacher.phone,
        emailContact: teacher.emailContact,
        address: teacher.address,
        departmentId: teacher.departmentId || '',
        position: teacher.position,
        degree: teacher.degree,
        major: teacher.major,
        startDate: teacher.startDate,
        status: teacher.status
      });
      this.teacherForm.get('teacherCode')?.disable(); 
    } else {
      this.isEditing.set(false);
      this.currentId.set(null);
      this.teacherForm.reset({ gender: 'male', status: 'working', position: 'Giáo viên bộ môn', degree: 'Cử nhân', departmentId: '' });
      this.teacherForm.get('teacherCode')?.enable();
    }
    this.isModalOpen.set(true);
  }

  closeModal() {
    this.isModalOpen.set(false);
    this.currentId.set(null);
  }

  onSubmit() {
    if (this.teacherForm.invalid) return;
    this.isLoading.set(true);
    const data = this.teacherForm.getRawValue();

    if (!data.departmentId) data.departmentId = null;

    if (this.isEditing() && this.currentId()) {
      this.teacherService.update(this.currentId()!, data).subscribe({
        next: () => { 
          this.loadData(); this.closeModal(); this.toastService.success('Thành công', 'Đã cập nhật hồ sơ!');
        },
        error: (err) => { 
          this.isLoading.set(false); this.toastService.error('Lỗi', err.error?.message || 'Cập nhật thất bại');
        }
      });
    } else {
      delete data.teacherCode; // Để BE tự sinh mã
      
      this.teacherService.create(data).subscribe({
        next: () => { 
          this.loadData(); this.closeModal(); this.toastService.success('Thành công', 'Đã thêm giáo viên mới!');
        },
        error: (err) => { 
          this.isLoading.set(false); this.toastService.error('Lỗi', err.error?.message || 'Thêm thất bại');
        }
      });
    }
  }

  // --- HELPERS TRẠNG THÁI ---
  isWorking(status?: string): boolean {
    if (!status) return true;
    const s = status.toUpperCase();
    return s === 'WORKING' || s === 'ACTIVE';
  }

  isOnLeave(status?: string): boolean {
    if (!status) return false;
    const s = status.toUpperCase();
    return s === 'ON_LEAVE' || s === 'ONLEAVE';
  }

  isRetired(status?: string): boolean {
    if (!status) return false;
    const s = status.toUpperCase();
    return s === 'RETIRED';
  }

  isQuit(status?: string): boolean {
    if (!status) return false;
    const s = status.toUpperCase();
    return s === 'QUIT' || s === 'RESIGNED';
  }

  getStatusText(status?: string): string {
    if (this.isOnLeave(status)) return 'Nghỉ phép';
    if (this.isRetired(status)) return 'Nghỉ hưu';
    if (this.isQuit(status)) return 'Nghỉ việc';
    return 'Đang công tác';
  }

  // --- XỬ LÝ CẤP TÀI KHOẢN ĐƠN LẺ ---
  openAccountModal(teacher: Teacher) {
    this.selectedTeacherForAccount.set(teacher);
    this.accountForm.reset({ email: '' });
    this.isAccountModalOpen.set(true);
  }

  closeAccountModal() {
    this.isAccountModalOpen.set(false);
    this.selectedTeacherForAccount.set(null);
  }

  onSubmitAccount() {
    const teacherId = this.selectedTeacherForAccount()?.id;
    if (!teacherId) return;

    this.isLoading.set(true);
    const email = this.accountForm.value.email;

    this.teacherService.createAccount(teacherId, email).subscribe({
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
    if (this.selectedTeacherIds().length === 0) return;
    this.isBatchAccountModalOpen.set(true);
  }

  closeBatchAccountModal() {
    this.isBatchAccountModalOpen.set(false);
  }

  executeBatchAccountCreation() {
    const ids = this.selectedTeacherIds();
    if (ids.length === 0) return;

    this.isLoading.set(true);
    this.teacherService.createAccountsBatch(ids).subscribe({
      next: (res) => {
        this.loadData();
        this.closeBatchAccountModal();
        this.toastService.success(
          'Hoàn tất xử lý', 
          `Thành công: ${res.successCount} | Thất bại: ${res.failCount}`
        );
      },
      error: (err) => {
        this.isLoading.set(false);
        this.closeBatchAccountModal();
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
      this.teacherService.delete(id).subscribe({
        next: () => { 
          this.loadData(); this.closeDeleteModal(); this.toastService.success('Đã xóa', 'Hồ sơ đã bị xóa.');
        },
        error: (err) => { 
          this.isLoading.set(false); this.closeDeleteModal(); this.toastService.error('Lỗi', err.error?.message || 'Không thể xóa!');
        }
      });
    }
  }
}