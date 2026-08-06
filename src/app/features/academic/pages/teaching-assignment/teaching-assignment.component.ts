import { Component, OnInit, inject, signal, computed, DestroyRef, ChangeDetectionStrategy } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { TeachingAssignmentService } from '../../../../modules/teaching/services/teaching-assignment.service';
import { ClassesService } from '../../../../modules/academic/services/class.service';
import { StaffService } from '../../../../modules/user/services/staff.service';
import { TeachingAssignment, TEACHING_ROLE_MAP, TEACHING_ROLE_OPTIONS } from '../../../../modules/teaching/models/teaching-assignment.model';
import { ClassEntity } from '../../../../modules/academic/models/class.model';
import { Staff } from '../../../../modules/user/models/staff.model';
import { ToastService } from '../../../../core/services/toast.service';
import { HasPermissionDirective } from '../../../../core/directives/has-permission.directive';

@Component({
  selector: 'app-teaching-assignment',
  imports: [CommonModule, ReactiveFormsModule, HasPermissionDirective],
  templateUrl: './teaching-assignment.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeachingAssignmentComponent implements OnInit {
  private assignmentService = inject(TeachingAssignmentService);
  private classesService = inject(ClassesService);
  private staffService = inject(StaffService);
  private fb = inject(FormBuilder);
  private destroyRef = inject(DestroyRef);
  private toastService = inject(ToastService);

  // Constants
  roleOptions = TEACHING_ROLE_OPTIONS;
  roleMap = TEACHING_ROLE_MAP;

  // State
  assignments = signal<TeachingAssignment[]>([]);
  availableClasses = signal<ClassEntity[]>([]);
  availableStaffs = signal<Staff[]>([]);
  totalElements = signal(0);
  currentPage = signal(1);
  pageSize = signal(10);
  isLoading = signal(false);
  searchControl = new FormControl('');

  // Modal State
  isModalOpen = signal(false);
  isEditing = signal(false);
  currentId = signal<number | string | null>(null);
  assignmentForm!: FormGroup;
  isFormSubmitted = signal(false);

  // Date Displays
  startDateDisplay = signal<string>('');
  endDateDisplay = signal<string>('');

  // Delete Modal State
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
    this.assignmentForm = this.fb.group({
      staffId: ['', [Validators.required]],
      classId: ['', [Validators.required]],
      role: ['MAIN_TEACHER', [Validators.required]],
      assignedDate: [''],
      endDate: [''],
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

  private loadDropdownOptions() {
    this.classesService.getClasses({ size: 100 }).subscribe({
      next: (res) => this.availableClasses.set(res.content || []),
      error: () => {}
    });

    this.staffService.getTeachers().subscribe({
      next: (res) => this.availableStaffs.set(res || []),
      error: (err) => {
        this.toastService.error('Lỗi', 'Không thể tải danh sách giảng viên: ' + (err.error?.message || err.message));
      }
    });
  }

  loadData() {
    this.isLoading.set(true);
    this.assignmentService.getAllAssignments({
      page: this.currentPage(),
      size: this.pageSize(),
      keyword: this.searchControl.value || ''
    }).subscribe({
      next: (response) => {
        this.assignments.set(response.content || []);
        this.totalElements.set(response.totalElements || 0);
        this.isLoading.set(false);
      },
      error: (err) => {
        this.toastService.error('Lỗi', 'Lỗi khi tải danh sách phân công: ' + (err.error?.message || err.message));
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

  openModal(item?: TeachingAssignment) {
    this.isFormSubmitted.set(false);
    this.loadDropdownOptions();

    if (item && item.id) {
      this.isEditing.set(true);
      this.currentId.set(item.id);

      const startIso = item.assignedDate ? item.assignedDate.split('T')[0] : '';
      const endIso = item.endDate ? item.endDate.split('T')[0] : '';

      this.startDateDisplay.set(this.formatDateVN(startIso));
      this.endDateDisplay.set(this.formatDateVN(endIso));

      this.assignmentForm.patchValue({
        staffId: item.staffId,
        classId: item.classId,
        role: item.role || 'MAIN_TEACHER',
        assignedDate: startIso,
        endDate: endIso,
        status: item.status || 'ACTIVE'
      });
    } else {
      if (this.isEditing() || !this.assignmentForm.get('staffId')?.value) {
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
    this.startDateDisplay.set('');
    this.endDateDisplay.set('');
    this.assignmentForm.reset({
      staffId: '',
      classId: '',
      role: 'MAIN_TEACHER',
      assignedDate: '',
      endDate: '',
      status: 'ACTIVE'
    });
  }

  closeModal() {
    this.isModalOpen.set(false);
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

  onDateTextInput(event: Event, field: 'assignedDate' | 'endDate') {
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
    if (field === 'assignedDate') {
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
      this.assignmentForm.get(field)?.setValue(isoDate);
    } else {
      this.assignmentForm.get(field)?.setValue('');
    }
  }

  onDatePickerChange(event: Event, field: 'assignedDate' | 'endDate') {
    const input = event.target as HTMLInputElement;
    const isoDate = input.value;
    if (isoDate) {
      this.assignmentForm.get(field)?.setValue(isoDate);
      const formatted = this.formatDateVN(isoDate);
      if (field === 'assignedDate') {
        this.startDateDisplay.set(formatted);
      } else {
        this.endDateDisplay.set(formatted);
      }
    }
  }

  onSubmit() {
    this.isFormSubmitted.set(true);
    if (this.assignmentForm.invalid) {
      this.toastService.error('Thông báo', 'Vui lòng điền đầy đủ các trường bắt buộc');
      return;
    }

    const formValues = this.assignmentForm.value;

    if (formValues.assignedDate && formValues.endDate && formValues.assignedDate > formValues.endDate) {
      this.toastService.error('Lỗi ngày tháng', 'Ngày kết thúc phải sau hoặc bằng ngày phân công');
      return;
    }

    const dto: Partial<TeachingAssignment> = {
      staffId: Number(formValues.staffId),
      classId: Number(formValues.classId),
      role: formValues.role,
      assignedDate: formValues.assignedDate || undefined,
      endDate: formValues.endDate || undefined,
      status: formValues.status
    };

    if (this.isEditing() && this.currentId()) {
      this.assignmentService.update(this.currentId()!, dto).subscribe({
        next: (res) => {
          this.toastService.success('Thành công', res.message || 'Cập nhật phân công thành công!');
          this.closeModal();
          this.loadData();
        },
        error: (err) => {
          this.toastService.error('Lỗi', 'Cập nhật thất bại: ' + (err.error?.message || err.message));
        }
      });
    } else {
      this.assignmentService.create(dto).subscribe({
        next: (res) => {
          this.toastService.success('Thành công', res.message || 'Tạo mới phân công thành công!');
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

    this.assignmentService.delete(id).subscribe({
      next: (res) => {
        this.toastService.success('Thành công', res.message || 'Xóa phân công thành công!');
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

  getRoleBadge(roleKey?: string) {
    if (!roleKey) return { label: 'Giảng viên', bgClass: 'bg-gray-50', textClass: 'text-gray-700', borderClass: 'border-gray-200' };
    return this.roleMap[roleKey] || { label: roleKey, bgClass: 'bg-gray-50', textClass: 'text-gray-700', borderClass: 'border-gray-200' };
  }

  formatDateVN(dateStr?: string): string {
    if (!dateStr) return '---';
    const parts = dateStr.split('T')[0].split('-');
    if (parts.length === 3) {
      return `${parts[2]}/${parts[1]}/${parts[0]}`;
    }
    return dateStr;
  }

  formatStaffTypeLabel(type?: string): string {
    if (!type) return 'Giảng viên';
    const typeUpper = type.toUpperCase();
    if (typeUpper === 'TEACHER') return 'Giảng viên';
    if (typeUpper === 'TEACHING_ASSISTANT') return 'Trợ giảng';
    if (typeUpper === 'FOREIGN_TEACHER' || typeUpper === 'NATIVE_TEACHER') return 'Giáo viên nước ngoài';
    if (typeUpper === 'GUEST_TEACHER') return 'Giảng viên thỉnh giảng';
    return type;
  }
}
