import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ScheduleService } from '../../../../modules/academic/services/schedule.service';
import { ToastService } from '../../../../core/services/toast.service';
import { AttendanceService, AttendanceDto } from '../../services/attendance.service';

export interface DayColumn {
  dateStr: string;      // 'YYYY-MM-DD'
  dayOfWeekName: string; // 'Thứ 2', 'Thứ 3'...
  dayNum: string;        // '03'
  monthNum: string;      // '08'
  isToday: boolean;
}

export interface DynamicTimeSlot {
  startTime: string;      // '19:00:00'
  endTime: string;        // '21:00:00'
  shortTimeLabel: string; // '19:00 - 21:00'
  periodLabel: string;    // 'Sáng', 'Chiều', 'Tối'
  bgBadge: string;
}

@Component({
  selector: 'app-teacher-schedule',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './teacher-schedule.component.html'
})
export class TeacherScheduleComponent implements OnInit {
  private scheduleService = inject(ScheduleService);
  private attendanceService = inject(AttendanceService);
  private toastr = inject(ToastService);
  private router = inject(Router);

  isLoading = signal(true);
  timetable = signal<any[]>([]);
  dynamicTimeSlots = signal<DynamicTimeSlot[]>([]);

  // Current selected reference date (default today)
  referenceDate = signal<Date>(new Date());
  weekDays = signal<DayColumn[]>([]);
  startDateStr = signal<string>('');
  endDateStr = signal<string>('');

  // Attendance Modal state
  isAttendanceModalOpen = signal(false);
  selectedSession = signal<any>(null);
  attendanceSheet = signal<AttendanceDto[]>([]);
  isLoadingAttendance = signal(false);
  isSavingAttendance = signal(false);
  studentFilterQuery = signal('');

  filteredAttendanceSheet = computed(() => {
    const q = this.studentFilterQuery().toLowerCase().trim();
    const sheet = this.attendanceSheet();
    if (!q) return sheet;
    return sheet.filter(s => 
      (s.studentName && s.studentName.toLowerCase().includes(q)) ||
      (s.studentCode && s.studentCode.toLowerCase().includes(q))
    );
  });

  presentCount = computed(() => this.attendanceSheet().filter(s => s.status === 'PRESENT').length);
  absentCount = computed(() => this.attendanceSheet().filter(s => s.status === 'ABSENT').length);
  lateCount = computed(() => this.attendanceSheet().filter(s => s.status === 'LATE').length);
  excusedCount = computed(() => this.attendanceSheet().filter(s => s.status === 'EXCUSED').length);

  ngOnInit() {
    this.calculateWeekRange(new Date());
  }

  calculateWeekRange(refDate: Date) {
    this.referenceDate.set(refDate);
    const curr = new Date(refDate);
    
    // Get Monday of current week
    const day = curr.getDay(); // 0 is Sun, 1 is Mon...
    const diffToMonday = curr.getDate() - day + (day === 0 ? -6 : 1);
    
    const monday = new Date(curr.setDate(diffToMonday));
    monday.setHours(0, 0, 0, 0);

    const todayStr = this.formatDateIso(new Date());
    const days: DayColumn[] = [];
    const dayNames = ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ Nhật'];

    for (let i = 0; i < 7; i++) {
      const d = new Date(monday);
      d.setDate(monday.getDate() + i);
      const dateStr = this.formatDateIso(d);

      days.push({
        dateStr: dateStr,
        dayOfWeekName: dayNames[i],
        dayNum: String(d.getDate()).padStart(2, '0'),
        monthNum: String(d.getMonth() + 1).padStart(2, '0'),
        isToday: dateStr === todayStr
      });
    }

    this.weekDays.set(days);
    this.startDateStr.set(days[0].dateStr);
    this.endDateStr.set(days[6].dateStr);

    this.fetchTimetable();
  }

  prevWeek() {
    const d = new Date(this.referenceDate());
    d.setDate(d.getDate() - 7);
    this.calculateWeekRange(d);
  }

  nextWeek() {
    const d = new Date(this.referenceDate());
    d.setDate(d.getDate() + 7);
    this.calculateWeekRange(d);
  }

  todayWeek() {
    this.calculateWeekRange(new Date());
  }

  fetchTimetable() {
    this.isLoading.set(true);
    this.scheduleService.getMyTimetable(this.startDateStr(), this.endDateStr()).subscribe({
      next: (res: any[]) => {
        const events = res || [];
        this.timetable.set(events);

        // Build dynamic time slots based on actual schedule events
        const slotMap = new Map<string, DynamicTimeSlot>();

        events.forEach(item => {
          if (item.startTime && item.endTime) {
            const key = `${item.startTime}-${item.endTime}`;
            if (!slotMap.has(key)) {
              const startFormatted = item.startTime.substring(0, 5);
              const endFormatted = item.endTime.substring(0, 5);

              // Determine morning/afternoon/evening label & style
              const startHour = parseInt(startFormatted.split(':')[0], 10);
              let periodLabel = 'Sáng';
              let bgBadge = 'bg-amber-100 text-amber-800 border-amber-200';

              if (startHour >= 12 && startHour < 18) {
                periodLabel = 'Chiều';
                bgBadge = 'bg-blue-100 text-blue-800 border-blue-200';
              } else if (startHour >= 18) {
                periodLabel = 'Tối';
                bgBadge = 'bg-purple-100 text-purple-800 border-purple-200';
              }

              slotMap.set(key, {
                startTime: item.startTime,
                endTime: item.endTime,
                shortTimeLabel: `${startFormatted} - ${endFormatted}`,
                periodLabel: periodLabel,
                bgBadge: bgBadge
              });
            }
          }
        });

        // Sort dynamic slots chronologically by startTime
        const sortedSlots = Array.from(slotMap.values()).sort((a, b) => 
          a.startTime.localeCompare(b.startTime)
        );

        this.dynamicTimeSlots.set(sortedSlots);
        this.isLoading.set(false);
      },
      error: (err: any) => {
        console.error('Lỗi khi tải thời khóa biểu:', err);
        this.toastr.error('Không thể tải lịch dạy học', 'Lỗi');
        this.isLoading.set(false);
      }
    });
  }

  getEventsForCell(dateStr: string, slot: DynamicTimeSlot): any[] {
    return this.timetable().filter(item => 
      item.date === dateStr && 
      (item.startTime === slot.startTime || item.startTime?.substring(0, 5) === slot.startTime.substring(0, 5))
    );
  }

  // --- MODAL ĐIỂM DANH & CHI TIẾT CA DẠY ---
  openSessionDetail(session: any, event: Event) {
    event.stopPropagation();
    this.selectedSession.set(session);
    this.isAttendanceModalOpen.set(true);
    this.studentFilterQuery.set('');

    if (session.scheduleId && session.date) {
      this.isLoadingAttendance.set(true);
      this.attendanceService.getAttendanceSheet(session.scheduleId, session.date).subscribe({
        next: (res: AttendanceDto[]) => {
          this.attendanceSheet.set(res || []);
          this.isLoadingAttendance.set(false);
        },
        error: (err: any) => {
          console.error('Lỗi khi tải danh sách điểm danh:', err);
          this.toastr.error('Lỗi khi tải danh sách điểm danh', 'Lỗi');
          this.isLoadingAttendance.set(false);
        }
      });
    }
  }

  closeAttendanceModal() {
    this.isAttendanceModalOpen.set(false);
    this.selectedSession.set(null);
    this.attendanceSheet.set([]);
  }

  setStudentStatus(studentId: number, status: 'PRESENT' | 'ABSENT' | 'EXCUSED' | 'LATE') {
    this.attendanceSheet.update(sheet =>
      sheet.map(item => item.studentId === studentId ? { ...item, status } : item)
    );
  }

  setAllStatus(status: 'PRESENT' | 'ABSENT' | 'EXCUSED' | 'LATE') {
    this.attendanceSheet.update(sheet =>
      sheet.map(item => ({ ...item, status }))
    );
  }

  saveAttendanceSheet() {
    const session = this.selectedSession();
    if (!session || !session.scheduleId || !session.date) return;

    this.isSavingAttendance.set(true);
    this.attendanceService.batchMarkAttendance(session.scheduleId, session.date, this.attendanceSheet()).subscribe({
      next: () => {
        this.toastr.success('Thành công', 'Đã lưu điểm danh ca học thành công!');
        this.isSavingAttendance.set(false);
        this.closeAttendanceModal();
      },
      error: (err: any) => {
        console.error('Lỗi khi lưu điểm danh:', err);
        this.toastr.error('Lỗi', err.error?.message || 'Lưu điểm danh thất bại');
        this.isSavingAttendance.set(false);
      }
    });
  }

  navigateToClass(classId: number | string, event?: Event) {
    if (event) event.stopPropagation();
    if (classId) {
      this.closeAttendanceModal();
      this.router.navigate(['/teacher/classes', classId]);
    }
  }

  private formatDateIso(date: Date): string {
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  }
}
