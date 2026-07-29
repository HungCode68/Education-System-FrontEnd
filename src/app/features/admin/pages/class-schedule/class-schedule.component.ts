import { Component, OnInit, inject, signal, computed, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ClassScheduleService } from '../../services/class-schedule.service';
import { ClassService } from '../../services/class.service';
import { RoomService } from '../../services/room.service';
import { ClassSchedule } from '../../models/class-schedule.model';
import { Class } from '../../models/class.model';
import { Room } from '../../models/room.model';
import { ToastService } from '../../../../core/services/toast.service';

@Component({
  selector: 'app-class-schedule',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './class-schedule.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClassScheduleComponent implements OnInit {
  private scheduleService = inject(ClassScheduleService);
  private classService = inject(ClassService);
  private roomService = inject(RoomService);
  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);
  private toastService = inject(ToastService);

  schedules = signal<ClassSchedule[]>([]);
  classes = signal<Class[]>([]);
  rooms = signal<Room[]>([]);

  totalElements = signal(0);
  currentPage = signal(1);
  pageSize = signal(10);
  isLoading = signal(false);

  classIdParam = signal<string | number | null>(null);
  selectedClassFilter = new FormControl('');

  isModalOpen = signal(false);
  isEditing = signal(false);
  currentId = signal<number | string | null>(null);
  scheduleForm!: FormGroup;

  isDeleteModalOpen = signal(false);
  idToDelete = signal<number | string | null>(null);

  dayNames: Record<number, string> = {
    2: 'Thứ 2',
    3: 'Thứ 3',
    4: 'Thứ 4',
    5: 'Thứ 5',
    6: 'Thứ 6',
    7: 'Thứ 7',
    8: 'Chủ Nhật'
  };

  totalPages = computed(() => Math.ceil(this.totalElements() / this.pageSize()));
  startIndex = computed(() => this.totalElements() === 0 ? 0 : (this.currentPage() - 1) * this.pageSize() + 1);
  endIndex = computed(() => Math.min(this.currentPage() * this.pageSize(), this.totalElements()));

  ngOnInit() {
    this.initForm();
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

    this.loadData();
  }

  private initForm() {
    this.scheduleForm = this.fb.group({
      classId: ['', Validators.required],
      roomId: [''],
      dayOfWeek: [2, [Validators.required, Validators.min(2), Validators.max(8)]],
      startTime: ['08:00', Validators.required],
      endTime: ['10:00', Validators.required]
    });
  }

  private loadDropdowns() {
    this.classService.getAll(0, 100).subscribe({
      next: (res) => this.classes.set(res.content || [])
    });
    this.roomService.getAll(0, 100).subscribe({
      next: (res) => this.rooms.set(res.content || [])
    });
  }

  loadData() {
    this.isLoading.set(true);
    const filterClassId = this.selectedClassFilter.value || this.classIdParam() || undefined;

    this.scheduleService.getAll(this.currentPage() - 1, this.pageSize(), filterClassId).subscribe({
      next: (res) => {
        this.schedules.set(res.content || []);
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

  openModal(sch?: ClassSchedule) {
    if (sch) {
      this.isEditing.set(true);
      this.currentId.set(sch.id);
      this.scheduleForm.patchValue({
        classId: sch.classId,
        roomId: sch.roomId || '',
        dayOfWeek: sch.dayOfWeek,
        startTime: sch.startTime,
        endTime: sch.endTime
      });
    } else {
      this.isEditing.set(false);
      this.currentId.set(null);
      this.scheduleForm.reset({
        classId: this.selectedClassFilter.value || this.classIdParam() || '',
        roomId: '',
        dayOfWeek: 2,
        startTime: '08:00',
        endTime: '10:00'
      });
    }
    this.isModalOpen.set(true);
  }

  closeModal() {
    this.isModalOpen.set(false);
    this.currentId.set(null);
  }

  onSubmit() {
    if (this.scheduleForm.invalid) return;
    this.isLoading.set(true);
    const data = this.scheduleForm.value;
    if (data.classId) data.classId = Number(data.classId);
    if (data.roomId) data.roomId = Number(data.roomId);
    if (data.dayOfWeek) data.dayOfWeek = Number(data.dayOfWeek);

    // Format time HH:mm:ss nếu backend yêu cầu
    if (data.startTime && data.startTime.length === 5) data.startTime += ':00';
    if (data.endTime && data.endTime.length === 5) data.endTime += ':00';

    if (this.isEditing() && this.currentId() != null) {
      this.scheduleService.update(this.currentId()!, data).subscribe({
        next: () => {
          this.loadData();
          this.closeModal();
          this.toastService.success('Thành công', 'Đã cập nhật lịch học!');
        },
        error: (err) => {
          this.isLoading.set(false);
          this.toastService.error('Thất bại', err.error?.message || 'Có lỗi xảy ra khi cập nhật!');
        }
      });
    } else {
      this.scheduleService.create(data).subscribe({
        next: () => {
          this.loadData();
          this.closeModal();
          this.toastService.success('Thành công', 'Đã thêm lịch học mới!');
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
      this.scheduleService.delete(id).subscribe({
        next: () => {
          this.loadData();
          this.closeDeleteModal();
          this.toastService.success('Đã xóa', 'Xóa lịch học thành công!');
        },
        error: (err) => {
          this.isLoading.set(false);
          this.closeDeleteModal();
          this.toastService.error('Lỗi xóa', err.error?.message || 'Không thể xóa lịch học này!');
        }
      });
    }
  }
}
