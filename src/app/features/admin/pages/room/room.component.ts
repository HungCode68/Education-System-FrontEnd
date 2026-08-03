import { Component, OnInit, inject, signal, computed, DestroyRef, ChangeDetectionStrategy } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { RoomService } from '../../services/room.service';
import { Room, RoomType } from '../../models/room.model';
import { ToastService } from '../../../../core/services/toast.service';

@Component({
  selector: 'app-room',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './room.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomComponent implements OnInit {
  private roomService = inject(RoomService);
  private fb = inject(FormBuilder);
  private destroyRef = inject(DestroyRef);
  private toastService = inject(ToastService);

  rooms = signal<Room[]>([]);
  totalElements = signal(0);
  currentPage = signal(1);
  pageSize = signal(10);
  isLoading = signal(false);

  searchControl = new FormControl('');
  typeFilter = new FormControl('');

  isModalOpen = signal(false);
  isEditing = signal(false);
  currentId = signal<number | string | null>(null);
  roomForm!: FormGroup;

  isDeleteModalOpen = signal(false);
  idToDelete = signal<number | string | null>(null);

  totalPages = computed(() => Math.ceil(this.totalElements() / this.pageSize()));
  startIndex = computed(() => this.totalElements() === 0 ? 0 : (this.currentPage() - 1) * this.pageSize() + 1);
  endIndex = computed(() => Math.min(this.currentPage() * this.pageSize(), this.totalElements()));

  ngOnInit() {
    this.initForm();
    this.setupFilters();
    this.loadData();
  }

  private initForm() {
    this.roomForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(100)]],
      roomType: ['PHYSICAL' as RoomType, Validators.required],
      capacity: [30, [Validators.required, Validators.min(1)]]
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

    this.typeFilter.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.currentPage.set(1);
      this.loadData();
    });
  }

  loadData() {
    this.isLoading.set(true);
    const keyword = this.searchControl.value || undefined;
    const roomType = this.typeFilter.value || undefined;

    this.roomService.getAll(this.currentPage() - 1, this.pageSize(), keyword, roomType).subscribe({
      next: (res) => {
        this.rooms.set(res.content || []);
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

  openModal(room?: Room) {
    if (room) {
      this.isEditing.set(true);
      this.currentId.set(room.id);
      this.roomForm.patchValue({
        name: room.name,
        roomType: room.roomType,
        capacity: room.capacity || 30
      });
    } else {
      this.isEditing.set(false);
      this.currentId.set(null);
      this.roomForm.reset({
        name: '',
        roomType: 'PHYSICAL',
        capacity: 30
      });
    }
    this.isModalOpen.set(true);
  }

  closeModal() {
    this.isModalOpen.set(false);
    this.currentId.set(null);
  }

  onSubmit() {
    if (this.roomForm.invalid) return;
    this.isLoading.set(true);
    const data = this.roomForm.value;

    if (this.isEditing() && this.currentId() != null) {
      this.roomService.update(this.currentId()!, data).subscribe({
        next: () => {
          this.loadData();
          this.closeModal();
          this.toastService.success('Thành công', 'Đã cập nhật phòng học!');
        },
        error: (err) => {
          this.isLoading.set(false);
          this.toastService.error('Thất bại', err.error?.message || 'Có lỗi xảy ra khi cập nhật!');
        }
      });
    } else {
      this.roomService.create(data).subscribe({
        next: () => {
          this.loadData();
          this.closeModal();
          this.toastService.success('Thành công', 'Đã tạo phòng học mới!');
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
      this.roomService.delete(id).subscribe({
        next: () => {
          this.loadData();
          this.closeDeleteModal();
          this.toastService.success('Đã xóa', 'Xóa phòng học thành công!');
        },
        error: (err) => {
          this.isLoading.set(false);
          this.closeDeleteModal();
          this.toastService.error('Lỗi xóa', err.error?.message || 'Không thể xóa phòng học này!');
        }
      });
    }
  }
}
