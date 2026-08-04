import { Component, OnInit, inject, signal, computed, DestroyRef, ChangeDetectionStrategy } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { TeachingSubstitutionService } from '../../../../modules/teaching/services/teaching-substitution.service';
import { ClassesService } from '../../../../modules/academic/services/class.service';
import { ScheduleService } from '../../../../modules/academic/services/schedule.service';
import { ScheduleAssignmentService } from '../../../../modules/teaching/services/schedule-assignment.service';
import { StaffService } from '../../../../modules/user/services/staff.service';
import { TeachingSubstitution, SUBSTITUTION_STATUS_MAP, SUBSTITUTION_STATUS_OPTIONS } from '../../../../modules/teaching/models/teaching-substitution.model';
import { ClassEntity } from '../../../../modules/academic/models/class.model';
import { ClassSchedule, DAY_OF_WEEK_MAP } from '../../../../modules/academic/models/schedule.model';
import { Staff } from '../../../../modules/user/models/staff.model';
import { ToastService } from '../../../../core/services/toast.service';

@Component({
  selector: 'app-teaching-substitution',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './teaching-substitution.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeachingSubstitutionComponent implements OnInit {
  private substitutionService = inject(TeachingSubstitutionService);
  private classesService = inject(ClassesService);
  private scheduleService = inject(ScheduleService);
  private scheduleAssignmentService = inject(ScheduleAssignmentService);
  private staffService = inject(StaffService);
  private fb = inject(FormBuilder);
  private destroyRef = inject(DestroyRef);
  private toastService = inject(ToastService);

  // Constants
  statusOptions = SUBSTITUTION_STATUS_OPTIONS;
  statusMap = SUBSTITUTION_STATUS_MAP;
  dayMap = DAY_OF_WEEK_MAP;

  // State
  substitutions = signal<TeachingSubstitution[]>([]);
  availableClasses = signal<ClassEntity[]>([]);
  modalSchedules = signal<ClassSchedule[]>([]);
  availableStaffs = signal<Staff[]>([]);
  availableSubstituteTeachers = signal<Staff[]>([]);
  isLoadingAvailableTeachers = signal<boolean>(false);
  assignedAbsentTeacher = signal<{ id: number; fullName: string; staffCode?: string } | null>(null);
  isLoadingAbsentTeacher = signal<boolean>(false);
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
  substitutionForm!: FormGroup;
  isFormSubmitted = signal(false);

  // Date Displays
  startDateDisplay = signal<string>('');
  endDateDisplay = signal<string>('');

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
    this.substitutionForm = this.fb.group({
      classId: ['', [Validators.required]],
      scheduleId: ['', [Validators.required]],
      absentStaffId: ['', [Validators.required]],
      substituteStaffId: ['', [Validators.required]],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
      reason: ['', [Validators.required, Validators.maxLength(500)]],
      status: ['PENDING', [Validators.required]]
    });

    // Listen to classId changes in form to load corresponding schedules
    this.substitutionForm.get('classId')?.valueChanges.pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe((classIdVal) => {
      if (classIdVal) {
        this.loadModalSchedules(Number(classIdVal));
      } else {
        this.modalSchedules.set([]);
        this.substitutionForm.get('scheduleId')?.setValue('');
      }
    });

    // Listen to scheduleId changes to load assigned main teacher automatically
    this.substitutionForm.get('scheduleId')?.valueChanges.pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe((schIdVal) => {
      if (schIdVal) {
        this.fetchAssignedTeacherForSchedule(Number(schIdVal));
      } else {
        this.assignedAbsentTeacher.set(null);
        this.substitutionForm.get('absentStaffId')?.setValue('');
      }
    });

    // Listen to scheduleId, startDate, endDate to fetch available substitute teachers
    this.substitutionForm.valueChanges.pipe(
      debounceTime(300),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe((val) => {
      if (val.scheduleId && val.startDate && val.endDate) {
        this.fetchAvailableSubstituteTeachers(Number(val.scheduleId), val.startDate, val.endDate);
      } else {
        this.availableSubstituteTeachers.set([]);
      }
    });
  }

  fetchAssignedTeacherForSchedule(scheduleId: number) {
    this.isLoadingAbsentTeacher.set(true);
    this.scheduleAssignmentService.getAssignmentsByScheduleId(scheduleId).subscribe({
      next: (assignments) => {
        this.isLoadingAbsentTeacher.set(false);
        if (assignments && assignments.length > 0) {
          const mainAssign = assignments.find(a => a.role === 'MAIN_TEACHER') || assignments[0];
          this.assignedAbsentTeacher.set({
            id: Number(mainAssign.staffId),
            fullName: mainAssign.teacherName || 'Giảng viên',
            staffCode: mainAssign.staffCode
          });
          this.substitutionForm.get('absentStaffId')?.setValue(mainAssign.staffId);
        } else {
          this.assignedAbsentTeacher.set(null);
          this.substitutionForm.get('absentStaffId')?.setValue('');
        }
      },
      error: (err) => {
        console.error('Lỗi lấy thông tin GV phân công ca học:', err);
        this.isLoadingAbsentTeacher.set(false);
        this.assignedAbsentTeacher.set(null);
      }
    });
  }

  fetchAvailableSubstituteTeachers(scheduleId: number, startDate: string, endDate: string) {
    this.isLoadingAvailableTeachers.set(true);
    const excludeId = this.isEditing() && this.currentId() ? this.currentId()! : undefined;

    this.substitutionService.getAvailableTeachers(scheduleId, startDate, endDate, excludeId).subscribe({
      next: (teachers) => {
        this.availableSubstituteTeachers.set(teachers || []);
        this.isLoadingAvailableTeachers.set(false);
      },
      error: (err) => {
        console.error('Lỗi lấy danh sách GV trống lịch:', err);
        this.availableSubstituteTeachers.set([]);
        this.isLoadingAvailableTeachers.set(false);
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
          this.substitutionForm.get('scheduleId')?.setValue(selectedScheduleId);
        } else if (schedules && schedules.length > 0) {
          if (!this.isEditing()) {
            this.substitutionForm.get('scheduleId')?.setValue(schedules[0].id);
          }
        } else {
          this.substitutionForm.get('scheduleId')?.setValue('');
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
      this.substitutionService.getSubstitutionsByClassId(filterClassId).subscribe({
        next: (list) => {
          this.substitutions.set(list || []);
          this.totalElements.set(list ? list.length : 0);
          this.isLoading.set(false);
        },
        error: (err) => {
          this.toastService.error('Lỗi', 'Lỗi khi tải danh sách dạy thay: ' + (err.error?.message || err.message));
          this.isLoading.set(false);
        }
      });
    } else {
      this.substitutionService.getAll({
        page: this.currentPage(),
        size: this.pageSize(),
        keyword: this.searchControl.value || ''
      }).subscribe({
        next: (response) => {
          this.substitutions.set(response.content || []);
          this.totalElements.set(response.totalElements || 0);
          this.isLoading.set(false);
        },
        error: (err) => {
          this.toastService.error('Lỗi', 'Lỗi khi tải danh sách dạy thay: ' + (err.error?.message || err.message));
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

  openModal(item?: TeachingSubstitution) {
    this.isFormSubmitted.set(false);
    this.loadDropdownOptions();

    if (item && item.id) {
      this.isEditing.set(true);
      this.currentId.set(item.id);

      const startIso = item.startDate ? item.startDate.split('T')[0] : '';
      const endIso = item.endDate ? item.endDate.split('T')[0] : '';

      this.startDateDisplay.set(this.formatDateVN(startIso));
      this.endDateDisplay.set(this.formatDateVN(endIso));

      const matchedClass = this.availableClasses().find(c => c.code === item.classCode);
      const classIdVal = matchedClass ? matchedClass.id : '';

      this.substitutionForm.patchValue({
        classId: classIdVal,
        absentStaffId: item.absentStaffId,
        substituteStaffId: item.substituteStaffId,
        startDate: startIso,
        endDate: endIso,
        reason: item.reason || '',
        status: item.status || 'PENDING'
      });

      if (classIdVal) {
        this.loadModalSchedules(Number(classIdVal), item.scheduleId);
      }
    } else {
      if (this.isEditing() || !this.substitutionForm.get('absentStaffId')?.value) {
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
    const firstClassId = this.availableClasses().length > 0 ? this.availableClasses()[0].id : '';
    const firstStaffId = this.availableStaffs().length > 0 ? this.availableStaffs()[0].id : '';
    const secondStaffId = this.availableStaffs().length > 1 ? this.availableStaffs()[1].id : firstStaffId;

    this.substitutionForm.reset({
      classId: firstClassId,
      scheduleId: '',
      absentStaffId: firstStaffId,
      substituteStaffId: secondStaffId,
      startDate: '',
      endDate: '',
      reason: '',
      status: 'PENDING'
    });

    if (firstClassId) {
      this.loadModalSchedules(Number(firstClassId));
    }
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
      this.substitutionForm.get(field)?.setValue(isoDate);
    } else {
      this.substitutionForm.get(field)?.setValue('');
    }
  }

  onDatePickerChange(event: Event, field: 'startDate' | 'endDate') {
    const input = event.target as HTMLInputElement;
    const isoDate = input.value;
    if (isoDate) {
      this.substitutionForm.get(field)?.setValue(isoDate);
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
    if (this.substitutionForm.invalid) {
      this.toastService.error('Thông báo', 'Vui lòng điền đầy đủ các trường bắt buộc');
      return;
    }

    const formValues = this.substitutionForm.value;

    if (Number(formValues.absentStaffId) === Number(formValues.substituteStaffId)) {
      this.toastService.error('Lỗi chọn giảng viên', 'Giảng viên vắng mặt và Giảng viên dạy thay không thể là cùng một người');
      return;
    }

    if (formValues.startDate && formValues.endDate && formValues.startDate > formValues.endDate) {
      this.toastService.error('Lỗi ngày tháng', 'Ngày kết thúc dạy thay phải sau hoặc bằng ngày bắt đầu');
      return;
    }

    const dto: Partial<TeachingSubstitution> = {
      scheduleId: Number(formValues.scheduleId),
      absentStaffId: Number(formValues.absentStaffId),
      substituteStaffId: Number(formValues.substituteStaffId),
      startDate: formValues.startDate,
      endDate: formValues.endDate,
      reason: formValues.reason,
      status: formValues.status
    };

    if (this.isEditing() && this.currentId()) {
      this.substitutionService.update(this.currentId()!, dto).subscribe({
        next: (res) => {
          this.toastService.success('Thành công', res.message || 'Cập nhật phân công dạy thay thành công!');
          this.closeModal();
          this.loadData();
        },
        error: (err) => {
          this.toastService.error('Lỗi', 'Cập nhật thất bại: ' + (err.error?.message || err.message));
        }
      });
    } else {
      this.substitutionService.create(dto).subscribe({
        next: (res) => {
          this.toastService.success('Thành công', res.message || 'Tạo mới phân công dạy thay thành công!');
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

  onDelete(id: number) {
    this.idToDelete.set(id);
    this.isDeleteModalOpen.set(true);
  }

  confirmDelete() {
    const id = this.idToDelete();
    if (!id) return;

    this.substitutionService.delete(id).subscribe({
      next: (res) => {
        this.toastService.success('Thành công', res.message || 'Xóa phân công dạy thay thành công!');
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

  getStatusBadge(statusKey?: string) {
    if (!statusKey) return { label: 'Chờ duyệt', bgClass: 'bg-amber-50', textClass: 'text-amber-700', borderClass: 'border-amber-200' };
    return this.statusMap[statusKey] || { label: statusKey, bgClass: 'bg-gray-50', textClass: 'text-gray-700', borderClass: 'border-gray-200' };
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

  formatDateVN(dateStr?: string): string {
    if (!dateStr) return '---';
    const parts = dateStr.split('T')[0].split('-');
    if (parts.length === 3) {
      return `${parts[2]}/${parts[1]}/${parts[0]}`;
    }
    return dateStr;
  }

  formatDayOfWeek(day?: number): string {
    if (!day) return '---';
    return this.dayMap[day] || `Thứ ${day}`;
  }
}
