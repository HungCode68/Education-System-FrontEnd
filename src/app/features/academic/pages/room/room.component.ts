import { Component, OnInit, inject, signal, computed, DestroyRef, ChangeDetectionStrategy } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { RoomService } from '../../../../modules/academic/services/room.service';
import { Room } from '../../../../modules/academic/models/room.model';
import { ToastService } from '../../../../core/services/toast.service';

import { HasPermissionDirective } from '../../../../core/directives/has-permission.directive';

@Component({
  selector: 'app-room',
  imports: [CommonModule, ReactiveFormsModule, HasPermissionDirective],
  templateUrl: './room.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomComponent implements OnInit {
  private roomService = inject(RoomService);
  private fb = inject(FormBuilder);
  private destroyRef = inject(DestroyRef);
  private toastService = inject(ToastService);

  // State
  rooms = signal<Room[]>([]);
  totalElements = signal(0);
  currentPage = signal(1);
  pageSize = signal(10);
  isLoading = signal(false);
  searchControl = new FormControl('');

  // Modal State
  isModalOpen = signal(false);
  isEditing = signal(false);
  currentId = signal<number | string | null>(null);
  roomForm!: FormGroup;
  isFormSubmitted = signal(false);

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
  }

  private initForm() {
    this.roomForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(100)]],
      roomType: ['PHYSICAL', [Validators.required]],
      capacity: [30, [Validators.required, Validators.min(1)]]
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
    this.roomService.getRooms({
      page: this.currentPage(),
      size: this.pageSize(),
      keyword: this.searchControl.value || ''
    }).subscribe({
      next: (response) => {
        this.rooms.set(response.content || []);
        this.totalElements.set(response.totalElements || 0);
        this.isLoading.set(false);
      },
      error: (err) => {
        this.toastService.error('Lỗi', 'Lỗi khi tải danh sách phòng học: ' + (err.error?.message || err.message));
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

  openModal(room?: Room) {
    this.isFormSubmitted.set(false);

    if (room && room.id) {
      this.isEditing.set(true);
      this.currentId.set(room.id);
      this.roomForm.patchValue({
        name: room.name,
        roomType: room.roomType || 'PHYSICAL',
        capacity: room.capacity || 30
      });
    } else {
      if (this.isEditing() || !this.roomForm.get('name')?.value) {
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
    this.roomForm.reset({
      name: '',
      roomType: 'PHYSICAL',
      capacity: 30
    });
  }

  closeModal() {
    this.isModalOpen.set(false);
  }

  onSubmit() {
    this.isFormSubmitted.set(true);
    if (this.roomForm.invalid) {
      this.toastService.error('Thông báo', 'Vui lòng kiểm tra lại các trường dữ liệu bắt buộc');
      return;
    }

    const formValues = this.roomForm.value;
    const roomData: Partial<Room> = {
      name: formValues.name,
      roomType: formValues.roomType,
      capacity: Number(formValues.capacity)
    };

    if (this.isEditing() && this.currentId()) {
      this.roomService.update(this.currentId()!, roomData).subscribe({
        next: (res) => {
          this.toastService.success('Thành công', res.message || 'Cập nhật phòng học thành công!');
          this.closeModal();
          this.loadData();
        },
        error: (err) => {
          this.toastService.error('Lỗi', 'Cập nhật thất bại: ' + (err.error?.message || err.message));
        }
      });
    } else {
      this.roomService.create(roomData).subscribe({
        next: (res) => {
          this.toastService.success('Thành công', res.message || 'Tạo mới phòng học thành công!');
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

    this.roomService.delete(id).subscribe({
      next: (res) => {
        this.toastService.success('Thành công', res.message || 'Xóa phòng học thành công!');
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
