import { Component, OnInit, inject, signal, computed, DestroyRef, ChangeDetectionStrategy } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { TermService } from '../../../../modules/academic/services/term.service';
import { Term } from '../../../../modules/academic/models/term.model';
import { ToastService } from '../../../../core/services/toast.service';

import { HasPermissionDirective } from '../../../../core/directives/has-permission.directive';

@Component({
  selector: 'app-term',
  imports: [CommonModule, ReactiveFormsModule, HasPermissionDirective],
  templateUrl: './term.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TermComponent implements OnInit {
  private termService = inject(TermService);
  private fb = inject(FormBuilder);
  private destroyRef = inject(DestroyRef);
  private toastService = inject(ToastService);

  // --- STATE DANH SÁCH KỲ HỌC ---
  terms = signal<Term[]>([]);
  totalElements = signal(0);
  currentPage = signal(1);
  pageSize = signal(10);
  isLoading = signal(false);
  searchControl = new FormControl('');

  // --- STATE MODAL THÊM / SỬA ---
  isModalOpen = signal(false);
  isEditing = signal(false);
  currentId = signal<number | string | null>(null);
  termForm!: FormGroup;
  isFormSubmitted = signal(false);

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
  }

  private initForm() {
    const currentYear = new Date().getFullYear();
    this.termForm = this.fb.group({
      code: ['', [Validators.required, Validators.maxLength(50)]],
      name: ['', [Validators.required, Validators.maxLength(255)]],
      year: [currentYear, [Validators.required, Validators.min(2000)]],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
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

  loadData() {
    this.isLoading.set(true);
    this.termService.getTerms({
      page: this.currentPage(),
      size: this.pageSize(),
      keyword: this.searchControl.value || ''
    }).subscribe({
      next: (response) => {
        this.terms.set(response.content || []);
        this.totalElements.set(response.totalElements || 0);
        this.isLoading.set(false);
      },
      error: (err) => {
        this.toastService.error('Lỗi', 'Lỗi khi tải danh sách kỳ học: ' + (err.error?.message || err.message));
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

  // Signals lưu chuỗi hiển thị theo định dạng dd/mm/yyyy trong ô input
  startDateDisplay = signal<string>('');
  endDateDisplay = signal<string>('');

  openModal(term?: Term) {
    this.isFormSubmitted.set(false);
    if (term && term.id) {
      this.isEditing.set(true);
      this.currentId.set(term.id);
      const startIso = term.startDate ? term.startDate.split('T')[0] : '';
      const endIso = term.endDate ? term.endDate.split('T')[0] : '';
      
      this.startDateDisplay.set(this.formatDateVN(startIso));
      this.endDateDisplay.set(this.formatDateVN(endIso));

      this.termForm.patchValue({
        code: term.code,
        name: term.name,
        year: term.year || new Date().getFullYear(),
        startDate: startIso,
        endDate: endIso,
        status: term.status || 'ACTIVE'
      });
    } else {
      if (this.isEditing() || !this.termForm.get('code')?.value) {
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
    const currentYear = new Date().getFullYear();
    this.termForm.reset({
      code: '',
      name: '',
      year: currentYear,
      startDate: '',
      endDate: '',
      status: 'ACTIVE'
    });
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
      this.termForm.get(field)?.setValue(isoDate);
    } else {
      this.termForm.get(field)?.setValue('');
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

  onDatePickerChange(event: Event, field: 'startDate' | 'endDate') {
    const input = event.target as HTMLInputElement;
    const isoDate = input.value;
    if (isoDate) {
      this.termForm.get(field)?.setValue(isoDate);
      const formatted = this.formatDateVN(isoDate);
      if (field === 'startDate') {
        this.startDateDisplay.set(formatted);
      } else {
        this.endDateDisplay.set(formatted);
      }
    }
  }

  closeModal() {
    this.isModalOpen.set(false);
  }

  onSubmit() {
    this.isFormSubmitted.set(true);
    if (this.termForm.invalid) {
      this.toastService.error('Thông báo', 'Vui lòng kiểm tra lại các trường dữ liệu bắt buộc');
      return;
    }

    const formValues = this.termForm.value;

    // Validate ngày kết thúc > ngày bắt đầu
    if (formValues.startDate && formValues.endDate && formValues.startDate > formValues.endDate) {
      this.toastService.error('Lỗi ngày tháng', 'Ngày kết thúc phải sau hoặc bằng ngày bắt đầu');
      return;
    }

    const termData: Partial<Term> = {
      code: formValues.code,
      name: formValues.name,
      year: Number(formValues.year),
      startDate: formValues.startDate,
      endDate: formValues.endDate,
      status: formValues.status
    };

    if (this.isEditing() && this.currentId()) {
      this.termService.update(this.currentId()!, termData).subscribe({
        next: (res) => {
          this.toastService.success('Thành công', res.message || 'Cập nhật kỳ học thành công!');
          this.closeModal();
          this.loadData();
        },
        error: (err) => {
          this.toastService.error('Lỗi', 'Cập nhật thất bại: ' + (err.error?.message || err.message));
        }
      });
    } else {
      this.termService.create(termData).subscribe({
        next: (res) => {
          this.toastService.success('Thành công', res.message || 'Tạo mới kỳ học thành công!');
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

    this.termService.delete(id).subscribe({
      next: (res) => {
        this.toastService.success('Thành công', res.message || 'Xóa kỳ học thành công!');
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

  formatDateVN(dateStr: string): string {
    if (!dateStr) return '';
    const parts = dateStr.split('T')[0].split('-');
    if (parts.length === 3) {
      return `${parts[2]}/${parts[1]}/${parts[0]}`;
    }
    return dateStr;
  }
}
