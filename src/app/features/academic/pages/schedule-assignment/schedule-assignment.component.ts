import { Component, OnInit, inject, signal, computed, DestroyRef, ChangeDetectionStrategy } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ScheduleAssignmentService } from '../../services/schedule-assignment.service';
import { ClassesService } from '../../services/classes.service';
import { ScheduleService } from '../../services/schedule.service';
import { StaffService } from '../../../admin/services/staff.service';
import { ScheduleAssignment, SCHEDULE_ROLE_MAP, SCHEDULE_ROLE_OPTIONS } from '../../models/schedule-assignment.model';
import { ClassEntity } from '../../models/class.model';
import { ClassSchedule, DAY_OF_WEEK_MAP } from '../../models/schedule.model';
import { Staff } from '../../../admin/models/staff.model';
import { ToastService } from '../../../../core/services/toast.service';

@Component({
  selector: 'app-schedule-assignment',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './schedule-assignment.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScheduleAssignmentComponent implements OnInit {
  private assignmentService = inject(ScheduleAssignmentService);
  private classesService = inject(ClassesService);
  private scheduleService = inject(ScheduleService);
  private staffService = inject(StaffService);
  private fb = inject(FormBuilder);
  private destroyRef = inject(DestroyRef);
  private toastService = inject(ToastService);

  // Constants
  roleOptions = SCHEDULE_ROLE_OPTIONS;
  roleMap = SCHEDULE_ROLE_MAP;
  dayMap = DAY_OF_WEEK_MAP;

  // State
  assignments = signal<ScheduleAssignment[]>([]);
  availableClasses = signal<ClassEntity[]>([]);
  modalSchedules = signal<ClassSchedule[]>([]);
  availableStaffs = signal<Staff[]>([]);
  totalElements = signal(0);
  currentPage = signal(1);
  pageSize = signal(10);
  isLoading = signal(false);

  // Filters
  selectedFilterClassId = signal<number | null>(null);
  searchControl = new FormControl('');

  // Modal State
  isModalOpen = signal(false);
  isEditing = signal(false);
  currentId = signal<number | null>(null);
  assignmentForm!: FormGroup;
  isFormSubmitted = signal(false);

  // Delete Modal State
  isDeleteModalOpen = signal(false);
  idToDelete = signal<number | null>(null);

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
    this.loadDropdownOptions();
    this.loadData();
  }

  private initForm() {
    this.assignmentForm = this.fb.group({
      classId: ['', [Validators.required]],
      scheduleId: ['', [Validators.required]],
      staffId: ['', [Validators.required]],
      role: ['MAIN_TEACHER', [Validators.required]]
    });

    // Listen to classId changes in form to load corresponding schedules
    this.assignmentForm.get('classId')?.valueChanges.pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe((classIdVal) => {
      if (classIdVal) {
        this.loadModalSchedules(Number(classIdVal));
      } else {
        this.modalSchedules.set([]);
        this.assignmentForm.get('scheduleId')?.setValue('');
      }
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
      error: () => {}
    });
  }

  private loadModalSchedules(classId: number, selectedScheduleId?: number) {
    this.scheduleService.getSchedulesByClassId(classId).subscribe({
      next: (schedules) => {
        this.modalSchedules.set(schedules || []);
        if (selectedScheduleId) {
          this.assignmentForm.get('scheduleId')?.setValue(selectedScheduleId);
        } else if (schedules && schedules.length > 0) {
          // If not editing, default to first schedule
          if (!this.isEditing()) {
            this.assignmentForm.get('scheduleId')?.setValue(schedules[0].id);
          }
        } else {
          this.assignmentForm.get('scheduleId')?.setValue('');
        }
      },
      error: () => {
        this.modalSchedules.set([]);
      }
    });
  }

  loadData() {
    this.isLoading.set(true);
    const filterClassId = this.selectedFilterClassId();

    if (filterClassId) {
      this.assignmentService.getAssignmentsByClassId(filterClassId).subscribe({
        next: (list) => {
          this.assignments.set(list || []);
          this.totalElements.set(list ? list.length : 0);
          this.isLoading.set(false);
        },
        error: (err) => {
          this.toastService.error('Lỗi', 'Lỗi khi tải phân công ca học: ' + (err.error?.message || err.message));
          this.isLoading.set(false);
        }
      });
    } else {
      this.assignmentService.getAll({
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
          this.toastService.error('Lỗi', 'Lỗi khi tải danh sách phân công ca học: ' + (err.error?.message || err.message));
          this.isLoading.set(false);
        }
      });
    }
  }

  onFilterClassChange(event: Event) {
    const val = (event.target as HTMLSelectElement).value;
    this.selectedFilterClassId.set(val ? Number(val) : null);
    this.currentPage.set(1);
    this.loadData();
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage.set(page);
      this.loadData();
    }
  }

  openModal(item?: ScheduleAssignment) {
    this.isFormSubmitted.set(false);
    this.loadDropdownOptions();

    if (item && item.id) {
      this.isEditing.set(true);
      this.currentId.set(item.id);

      // Find class ID from available classes matching item.classCode if possible
      const matchedClass = this.availableClasses().find(c => c.code === item.classCode);
      const classIdVal = matchedClass ? matchedClass.id : '';

      this.assignmentForm.patchValue({
        classId: classIdVal,
        staffId: item.staffId,
        role: item.role || 'MAIN_TEACHER'
      });

      if (classIdVal) {
        this.loadModalSchedules(Number(classIdVal), item.scheduleId);
      }
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
    const firstClassId = this.availableClasses().length > 0 ? this.availableClasses()[0].id : '';
    const firstStaffId = this.availableStaffs().length > 0 ? this.availableStaffs()[0].id : '';

    this.assignmentForm.reset({
      classId: firstClassId,
      scheduleId: '',
      staffId: firstStaffId,
      role: 'MAIN_TEACHER'
    });

    if (firstClassId) {
      this.loadModalSchedules(Number(firstClassId));
    }
  }

  closeModal() {
    this.isModalOpen.set(false);
  }

  onSubmit() {
    this.isFormSubmitted.set(true);
    if (this.assignmentForm.invalid) {
      this.toastService.error('Thông báo', 'Vui lòng điền đầy đủ các trường bắt buộc');
      return;
    }

    const formValues = this.assignmentForm.value;
    const dto: Partial<ScheduleAssignment> = {
      scheduleId: Number(formValues.scheduleId),
      staffId: Number(formValues.staffId),
      role: formValues.role
    };

    if (this.isEditing() && this.currentId()) {
      this.assignmentService.update(this.currentId()!, dto).subscribe({
        next: (res) => {
          this.toastService.success('Thành công', res.message || 'Cập nhật phân công ca học thành công!');
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
          this.toastService.success('Thành công', res.message || 'Tạo mới phân công ca học thành công!');
          this.resetAddForm();
          this.closeModal();
          this.loadData();
        },
        error: (err) => {
          this.toastService.error('Lỗi', 'Phân công ca học thất bại: ' + (err.error?.message || err.message));
        }
      });
    }
  }

  onDelete(id: number) {
    this.idToDelete.set(id);
    this.isDeleteModalOpen.set(true);
  }

  confirmDelete() {
    const id = this.idToDelete();
    if (!id) return;

    this.assignmentService.delete(id).subscribe({
      next: (res) => {
        this.toastService.success('Thành công', res.message || 'Hủy phân công ca học thành công!');
        this.isDeleteModalOpen.set(false);
        this.idToDelete.set(null);
        this.loadData();
      },
      error: (err) => {
        this.toastService.error('Lỗi', 'Hủy thất bại: ' + (err.error?.message || err.message));
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

  formatStaffTypeLabel(type?: string): string {
    if (!type) return 'Giảng viên';
    const typeUpper = type.toUpperCase();
    if (typeUpper === 'TEACHER') return 'Giảng viên';
    if (typeUpper === 'TEACHING_ASSISTANT') return 'Trợ giảng';
    if (typeUpper === 'FOREIGN_TEACHER' || typeUpper === 'NATIVE_TEACHER') return 'Giáo viên nước ngoài';
    if (typeUpper === 'GUEST_TEACHER') return 'Giảng viên thỉnh giảng';
    return type;
  }

  formatScheduleLabel(sch: ClassSchedule): string {
    const dayLabel = this.dayMap[sch.dayOfWeek] || sch.dayOfWeek;
    const roomText = sch.roomName ? ` - ${sch.roomName}` : '';
    return `${dayLabel} (${sch.startTime} - ${sch.endTime}${roomText})`;
  }

  formatDayOfWeek(day?: number): string {
    if (!day) return '---';
    return this.dayMap[day] || `Thứ ${day}`;
  }
}
