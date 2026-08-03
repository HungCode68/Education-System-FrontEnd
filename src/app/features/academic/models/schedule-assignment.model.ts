export interface ScheduleAssignment {
  id?: number;
  scheduleId: number;
  dayOfWeek?: number;
  startTime?: string;
  endTime?: string;
  roomName?: string;
  classCode?: string;
  className?: string;
  staffId: number;
  staffCode?: string;
  teacherName?: string;
  role: 'MAIN_TEACHER' | 'NATIVE_TEACHER' | 'ASSISTANT' | string;
  createdAt?: string;
}

export const SCHEDULE_ROLE_MAP: Record<string, { label: string; bgClass: string; textClass: string; borderClass: string }> = {
  MAIN_TEACHER: { label: 'Giảng viên chính', bgClass: 'bg-emerald-50', textClass: 'text-emerald-700', borderClass: 'border-emerald-200' },
  NATIVE_TEACHER: { label: 'Giáo viên nước ngoài', bgClass: 'bg-purple-50', textClass: 'text-purple-700', borderClass: 'border-purple-200' },
  ASSISTANT: { label: 'Trợ giảng ca học', bgClass: 'bg-amber-50', textClass: 'text-amber-700', borderClass: 'border-amber-200' }
};

export const SCHEDULE_ROLE_OPTIONS = [
  { value: 'MAIN_TEACHER', label: 'Giảng viên chính' },
  { value: 'NATIVE_TEACHER', label: 'Giáo viên nước ngoài' },
  { value: 'ASSISTANT', label: 'Trợ giảng ca học' }
];
