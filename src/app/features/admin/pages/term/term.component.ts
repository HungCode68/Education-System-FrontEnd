import { Component, OnInit, inject, signal, computed, DestroyRef, ChangeDetectionStrategy } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { TermService } from '../../../../modules/academic/services/term.service';
import { Term, TermStatus } from '../../../../modules/academic/models/term.model';
import { ToastService } from '../../../../core/services/toast.service';

@Component({
  selector: 'app-term',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './term.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TermComponent implements OnInit {
  private termService = inject(TermService);
  private fb = inject(FormBuilder);
  private destroyRef = inject(DestroyRef);
  private toastService = inject(ToastService);

  terms = signal<Term[]>([]);
  totalElements = signal(0);
  currentPage = signal(1);
  pageSize = signal(10);
  isLoading = signal(false);
  searchControl = new FormControl('');

  isModalOpen = signal(false);
  isEditing = signal(false);
  currentId = signal<number | string | null>(null);
  termForm!: FormGroup;

  isDeleteModalOpen = signal(false);
  idToDelete = signal<number | string | null>(null);

  totalPages = computed(() => Math.ceil(this.totalElements() / this.pageSize()));
  startIndex = computed(() => this.totalElements() === 0 ? 0 : (this.currentPage() - 1) * this.pageSize() + 1);
  endIndex = computed(() => Math.min(this.currentPage() * this.pageSize(), this.totalElements()));

  ngOnInit() {
    this.initForm();
    this.setupSearch();
    this.loadData();
  }

  private initForm() {
    this.termForm = this.fb.group({
      code: ['', [Validators.required, Validators.maxLength(50)]],
      name: ['', [Validators.required, Validators.maxLength(255)]],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      year: [new Date().getFullYear(), [Validators.required, Validators.min(2000)]],
      status: ['ACTIVE' as TermStatus, Validators.required]
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
    const keyword = this.searchControl.value || undefined;

    this.termService.getAll(this.currentPage() - 1, this.pageSize(), keyword).subscribe({
      next: (res) => {
        this.terms.set(res.content || []);
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

  openModal(term?: Term) {
    if (term) {
      this.isEditing.set(true);
      this.currentId.set(term.id);
      this.termForm.patchValue({
        code: term.code,
        name: term.name,
        startDate: term.startDate,
        endDate: term.endDate,
        year: term.year,
        status: term.status
      });
    } else {
      this.isEditing.set(false);
      this.currentId.set(null);
      this.termForm.reset({
        code: '',
        name: '',
        startDate: '',
        endDate: '',
        year: new Date().getFullYear(),
        status: 'ACTIVE'
      });
    }
    this.isModalOpen.set(true);
  }

  closeModal() {
    this.isModalOpen.set(false);
    this.currentId.set(null);
  }

  onSubmit() {
    if (this.termForm.invalid) return;
    this.isLoading.set(true);
    const data = this.termForm.value;
    data.code = (data.code as string).toUpperCase().trim();

    if (this.isEditing() && this.currentId() != null) {
      this.termService.update(this.currentId()!, data).subscribe({
        next: () => {
          this.loadData();
          this.closeModal();
          this.toastService.success('Thành công', 'Đã cập nhật đợt học!');
        },
        error: (err) => {
          this.isLoading.set(false);
          this.toastService.error('Thất bại', err.error?.message || 'Có lỗi xảy ra khi cập nhật!');
        }
      });
    } else {
      this.termService.create(data).subscribe({
        next: () => {
          this.loadData();
          this.closeModal();
          this.toastService.success('Thành công', 'Đã tạo đợt học mới!');
        },
        error: (err) => {
          this.isLoading.set(false);
          this.toastService.error('Thất bại', err.error?.message || 'Có lỗi xảy ra khi thêm mới!');
        }
      });
    }
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
    if (id != null) {
      this.isLoading.set(true);
      this.termService.delete(id).subscribe({
        next: () => {
          this.loadData();
          this.closeDeleteModal();
          this.toastService.success('Đã xóa', 'Xóa đợt học thành công!');
        },
        error: (err) => {
          this.isLoading.set(false);
          this.closeDeleteModal();
          this.toastService.error('Lỗi xóa', err.error?.message || 'Không thể xóa đợt học này!');
        }
      });
    }
  }
}
