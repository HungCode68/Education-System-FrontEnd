import { Component, OnInit, inject, signal, computed, DestroyRef, ChangeDetectionStrategy } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ScheduleCancellationService } from '../../../../modules/academic/services/schedule-cancellation.service';
import { ClassesService } from '../../../../modules/academic/services/class.service';
import { ScheduleCancellation } from '../../../../modules/academic/models/schedule-cancellation.model';
import { ClassEntity } from '../../../../modules/academic/models/class.model';
import { ToastService } from '../../../../core/services/toast.service';
import { HasPermissionDirective } from '../../../../core/directives/has-permission.directive';

@Component({
  selector: 'app-cancellation-list',
  imports: [CommonModule, ReactiveFormsModule, HasPermissionDirective],
  templateUrl: './cancellation-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CancellationListComponent implements OnInit {
  private cancellationService = inject(ScheduleCancellationService);
  private classesService = inject(ClassesService);
  private fb = inject(FormBuilder);
  private destroyRef = inject(DestroyRef);
  private toastService = inject(ToastService);

  cancellations = signal<ScheduleCancellation[]>([]);
  availableClasses = signal<ClassEntity[]>([]);
  totalElements = signal(0);
  currentPage = signal(1);
  pageSize = signal(10);
  isLoading = signal(false);

  // Modal State
  isModalOpen = signal(false);
  isEditing = signal(false);
  currentId = signal<number | string | null>(null);
  cancelForm!: FormGroup;
  isFormSubmitted = signal(false);
  
  // Custom display for dates
  startDateDisplay = signal<string>('');
  endDateDisplay = signal<string>('');

  // Delete Modal State
  isDeleteModalOpen = signal(false);
  idToDelete = signal<number | string | null>(null);

  totalPages = computed(() => Math.max(1, Math.ceil(this.totalElements() / this.pageSize())));
  startIndex = computed(() => this.totalElements() === 0 ? 0 : (this.currentPage() - 1) * this.pageSize() + 1);
  endIndex = computed(() => Math.min(this.currentPage() * this.pageSize(), this.totalElements()));

  ngOnInit() {
    this.initForm();
    this.loadData();
    this.loadAvailableClasses();
  }

  private initForm() {
    this.cancelForm = this.fb.group({
      applyScope: ['ALL'], // ALL or SPECIFIC_CLASS
      classId: [''],
      reason: ['', [Validators.required, Validators.maxLength(255)]],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]]
    });
  }

  loadAvailableClasses() {
    this.classesService.getClasses({ size: 100 }).subscribe({
      next: (res) => this.availableClasses.set(res.content || []),
      error: () => {}
    });
  }

  loadData() {
    this.isLoading.set(true);
    this.cancellationService.getAll({
      page: this.currentPage(),
      size: this.pageSize()
    }).subscribe({
      next: (response) => {
        this.cancellations.set(response.content || []);
        this.totalElements.set(response.totalElements || 0);
        this.isLoading.set(false);
      },
      error: (err) => {
        this.toastService.error('Lỗi', 'Lỗi khi tải danh sách ngày nghỉ: ' + (err.error?.message || err.message));
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

  openModal(item?: ScheduleCancellation) {
    this.isFormSubmitted.set(false);
    this.loadAvailableClasses();

    if (item && item.id) {
      this.isEditing.set(true);
      this.currentId.set(item.id);
      
      const startIso = item.startDate ? item.startDate.split('T')[0] : '';
      const endIso = item.endDate ? item.endDate.split('T')[0] : '';
      
      this.startDateDisplay.set(this.formatDateVN(startIso));
      this.endDateDisplay.set(this.formatDateVN(endIso));

      this.cancelForm.patchValue({
        applyScope: item.classId ? 'SPECIFIC_CLASS' : 'ALL',
        classId: item.classId || '',
        reason: item.reason,
        startDate: startIso,
        endDate: endIso
      });
    } else {
      this.isEditing.set(false);
      this.currentId.set(null);
      this.resetForm();
    }
    this.isModalOpen.set(true);
  }

  resetForm() {
    this.startDateDisplay.set('');
    this.endDateDisplay.set('');
    this.cancelForm.reset({
      applyScope: 'ALL',
      classId: '',
      reason: '',
      startDate: '',
      endDate: ''
    });
  }

  closeModal() {
    this.isModalOpen.set(false);
  }

  onScopeChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    if (select.value === 'ALL') {
      this.cancelForm.get('classId')?.setValue('');
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
      this.cancelForm.get(field)?.setValue(isoDate);
    } else {
      this.cancelForm.get(field)?.setValue('');
    }
  }

  onDatePickerChange(event: Event, field: 'startDate' | 'endDate') {
    const input = event.target as HTMLInputElement;
    const isoDate = input.value;
    if (isoDate) {
      this.cancelForm.get(field)?.setValue(isoDate);
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
    if (this.cancelForm.invalid) {
      this.toastService.error('Thông báo', 'Vui lòng kiểm tra lại các trường dữ liệu bắt buộc');
      return;
    }

    const formValues = this.cancelForm.value;

    if (formValues.applyScope === 'SPECIFIC_CLASS' && !formValues.classId) {
      this.toastService.error('Thông báo', 'Vui lòng chọn lớp học cụ thể');
      return;
    }

    if (formValues.startDate && formValues.endDate && formValues.startDate > formValues.endDate) {
      this.toastService.error('Lỗi ngày tháng', 'Ngày kết thúc phải sau hoặc bằng ngày bắt đầu');
      return;
    }

    const data: Partial<ScheduleCancellation> = {
      classId: formValues.applyScope === 'SPECIFIC_CLASS' ? Number(formValues.classId) : undefined,
      reason: formValues.reason,
      startDate: formValues.startDate,
      endDate: formValues.endDate
    };

    if (this.isEditing() && this.currentId()) {
      this.cancellationService.update(this.currentId()!, data).subscribe({
        next: () => {
          this.toastService.success('Thành công', 'Cập nhật lịch nghỉ thành công!');
          this.closeModal();
          this.loadData();
        },
        error: (err) => {
          this.toastService.error('Lỗi', 'Cập nhật thất bại: ' + (err.error?.message || err.message));
        }
      });
    } else {
      this.cancellationService.create(data).subscribe({
        next: () => {
          this.toastService.success('Thành công', 'Tạo lịch nghỉ thành công!');
          this.resetForm();
          this.closeModal();
          this.loadData();
        },
        error: (err) => {
          this.toastService.error('Lỗi', 'Tạo mới thất bại: ' + (err.error?.message || err.message));
        }
      });
    }
  }

  onDelete(id?: number) {
    if (id != null) {
      this.idToDelete.set(id);
      this.isDeleteModalOpen.set(true);
    }
  }

  confirmDelete() {
    const id = this.idToDelete();
    if (!id) return;

    this.cancellationService.delete(id).subscribe({
      next: () => {
        this.toastService.success('Thành công', 'Xóa lịch nghỉ thành công!');
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
