import { Component, OnInit, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ScheduleService } from '../../../../modules/academic/services/schedule.service';
import { ClassesService } from '../../../../modules/academic/services/class.service';
import { RoomService } from '../../../../modules/academic/services/room.service';
import { CourseService } from '../../../../modules/academic/services/course.service';
import { ClassSchedule, DAY_OF_WEEK_MAP, DAY_OPTIONS } from '../../../../modules/academic/models/schedule.model';
import { ClassEntity } from '../../../../modules/academic/models/class.model';
import { Room } from '../../../../modules/academic/models/room.model';
import { ToastService } from '../../../../core/services/toast.service';

import { HasPermissionDirective } from '../../../../core/directives/has-permission.directive';

@Component({
  selector: 'app-schedule',
  imports: [CommonModule, ReactiveFormsModule, HasPermissionDirective],
  templateUrl: './schedule.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScheduleComponent implements OnInit {
  private scheduleService = inject(ScheduleService);
  private classesService = inject(ClassesService);
  private roomService = inject(RoomService);
  private courseService = inject(CourseService);
  private fb = inject(FormBuilder);
  private toastService = inject(ToastService);
  private route = inject(ActivatedRoute);

  // Constants
  dayOptions = DAY_OPTIONS;
  dayOfWeekMap = DAY_OF_WEEK_MAP;

  // State
  schedules = signal<ClassSchedule[]>([]);
  availableClasses = signal<ClassEntity[]>([]);
  availableRooms = signal<Room[]>([]);
  selectedClassId = signal<number | string | null>(null);
  isLoading = signal(false);
  isFindingRooms = signal(false);

  // Modal State
  isModalOpen = signal(false);
  isEditing = signal(false);
  currentId = signal<number | string | null>(null);
  scheduleForm!: FormGroup;
  isFormSubmitted = signal(false);

  // Delete Modal State
  isDeleteModalOpen = signal(false);
  idToDelete = signal<number | string | null>(null);

  ngOnInit() {
    this.initForm();
    this.loadAvailableClasses();
    this.loadAvailableRooms();
  }

  private initForm() {
    this.scheduleForm = this.fb.group({
      classId: ['', [Validators.required]],
      dayOfWeek: [2, [Validators.required, Validators.min(2), Validators.max(8)]],
      startTime: ['08:00', [Validators.required]],
      endTime: ['10:00', [Validators.required]],
      roomId: [''],
      roomName: ['']
    });

    this.scheduleForm.valueChanges.pipe(
      debounceTime(500)
    ).subscribe(val => {
      this.checkAvailableRooms(val);
    });
  }

  private checkAvailableRooms(val: any) {
    if (val.classId && val.dayOfWeek && val.startTime && val.endTime && val.startTime < val.endTime) {
      this.isFindingRooms.set(true);
      
      const startTimeFormatted = val.startTime.length === 5 ? `${val.startTime}:00` : val.startTime;
      const endTimeFormatted = val.endTime.length === 5 ? `${val.endTime}:00` : val.endTime;
      const excludeId = this.isEditing() ? Number(this.currentId()) : undefined;

      this.roomService.getAvailableRooms(
        Number(val.classId),
        Number(val.dayOfWeek),
        startTimeFormatted,
        endTimeFormatted,
        excludeId
      ).subscribe({
        next: (rooms) => {
          this.availableRooms.set(rooms || []);
          this.isFindingRooms.set(false);
        },
        error: () => {
          this.availableRooms.set([]);
          this.isFindingRooms.set(false);
        }
      });
    } else {
      this.availableRooms.set([]);
    }
  }

  loadAvailableClasses() {
    this.classesService.getClasses({ size: 100 }).subscribe({
      next: (res) => {
        const list = res.content || [];
        this.availableClasses.set(list);

        const routeClassId = this.route.snapshot.paramMap.get('id') || this.route.snapshot.queryParamMap.get('classId');
        if (routeClassId) {
          this.selectedClassId.set(Number(routeClassId));
        } else if (list.length > 0 && !this.selectedClassId()) {
          this.selectedClassId.set(list[0].id ?? null);
        }
        this.loadSchedules();
      },
      error: (err) => {
        this.toastService.error('Lỗi', 'Lỗi khi tải danh sách lớp học: ' + (err.error?.message || err.message));
      }
    });
  }

  loadAvailableRooms() {
    this.roomService.getRooms({ size: 100 }).subscribe({
      next: (res) => {
        this.availableRooms.set(res.content || []);
      },
      error: () => {}
    });
  }

  onClassFilterChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    const classId = select.value ? Number(select.value) : null;
    this.selectedClassId.set(classId);
    this.loadSchedules();
  }

  loadSchedules() {
    const classId = this.selectedClassId();
    if (!classId) {
      this.schedules.set([]);
      return;
    }

    this.isLoading.set(true);
    this.scheduleService.getSchedulesByClassId(classId).subscribe({
      next: (data) => {
        this.schedules.set(data || []);
        this.isLoading.set(false);
      },
      error: (err) => {
        this.toastService.error('Lỗi', 'Lỗi khi tải lịch học: ' + (err.error?.message || err.message));
        this.isLoading.set(false);
      }
    });
  }

  openModal(item?: ClassSchedule) {
    this.isFormSubmitted.set(false);
    this.loadAvailableClasses();
    this.loadAvailableRooms();

    if (item && item.id) {
      this.isEditing.set(true);
      this.currentId.set(item.id);

      const start = item.startTime ? item.startTime.substring(0, 5) : '08:00';
      const end = item.endTime ? item.endTime.substring(0, 5) : '10:00';

      this.scheduleForm.patchValue({
        classId: item.classId,
        dayOfWeek: item.dayOfWeek,
        startTime: start,
        endTime: end,
        roomId: item.roomId || '',
        roomName: item.roomName || ''
      });
      // setTimeout to allow form to update and trigger checkAvailableRooms
      setTimeout(() => this.checkAvailableRooms(this.scheduleForm.value), 0);
    } else {
      if (this.isEditing() || !this.scheduleForm.get('classId')?.value) {
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
    this.scheduleForm.reset({
      classId: this.selectedClassId() || '',
      dayOfWeek: '',
      startTime: '08:00',
      endTime: '10:00',
      roomId: '',
      roomName: ''
    });
  }

  closeModal() {
    this.isModalOpen.set(false);
  }

  onSubmit() {
    this.isFormSubmitted.set(true);
    if (this.scheduleForm.invalid) {
      this.toastService.error('Thông báo', 'Vui lòng điền đầy đủ các trường bắt buộc');
      return;
    }

    const val = this.scheduleForm.value;

    if (val.startTime >= val.endTime) {
      this.toastService.error('Lỗi giờ học', 'Giờ kết thúc phải sau giờ bắt đầu');
      return;
    }

    // Format HH:mm -> HH:mm:ss
    const startTimeFormatted = val.startTime.length === 5 ? `${val.startTime}:00` : val.startTime;
    const endTimeFormatted = val.endTime.length === 5 ? `${val.endTime}:00` : val.endTime;

    const selectedRoom = this.availableRooms().find(r => r.id === Number(val.roomId));

    const dto: Partial<ClassSchedule> = {
      classId: Number(val.classId),
      dayOfWeek: Number(val.dayOfWeek),
      startTime: startTimeFormatted,
      endTime: endTimeFormatted,
      roomId: val.roomId ? Number(val.roomId) : undefined,
      roomName: selectedRoom ? selectedRoom.name : val.roomName
    };

    if (this.isEditing() && this.currentId()) {
      this.doSubmit(dto, true);
    } else {
      // Check maximum sessions per week before adding
      const currentSchedulesCount = this.schedules().length;
      const classInfo = this.availableClasses().find(c => c.id === Number(val.classId));
      
      if (classInfo && classInfo.courseId) {
        this.courseService.getById(classInfo.courseId as number).subscribe({
          next: (course) => {
            const maxSessions = course.sessionsPerWeek || 0;
            if (maxSessions > 0 && currentSchedulesCount >= maxSessions) {
              this.toastService.error('Cảnh báo', `Khóa học này chỉ cho phép tối đa ${maxSessions} buổi/tuần. Bạn không thể xếp thêm ca học.`);
              this.isFormSubmitted.set(false);
            } else {
              this.doSubmit(dto, false);
            }
          },
          error: () => {
            this.doSubmit(dto, false);
          }
        });
      } else {
        this.doSubmit(dto, false);
      }
    }
  }

  private doSubmit(dto: Partial<ClassSchedule>, isUpdate: boolean) {
    if (isUpdate && this.currentId()) {
      this.scheduleService.update(this.currentId()!, dto).subscribe({
        next: () => {
          this.toastService.success('Thành công', 'Cập nhật ca học thành công!');
          this.closeModal();
          this.loadSchedules();
        },
        error: (err) => {
          this.toastService.error('Lỗi', 'Cập nhật thất bại: ' + (err.error?.message || err.message));
        }
      });
    } else {
      this.scheduleService.create(dto).subscribe({
        next: () => {
          this.toastService.success('Thành công', 'Tạo mới ca học thành công!');
          this.resetAddForm();
          this.closeModal();
          this.loadSchedules();
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

    this.scheduleService.delete(id).subscribe({
      next: () => {
        this.toastService.success('Thành công', 'Xóa ca học thành công!');
        this.isDeleteModalOpen.set(false);
        this.idToDelete.set(null);
        this.loadSchedules();
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

  getDayName(day: number): string {
    return this.dayOfWeekMap[day] || `Thứ ${day}`;
  }

  formatTimeDisplay(timeStr?: string): string {
    if (!timeStr) return '--:--';
    return timeStr.substring(0, 5);
  }
}
