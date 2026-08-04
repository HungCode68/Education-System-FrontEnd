export type ScheduleAssignmentRole = 'MAIN_TEACHER' | 'ASSISTANT_TEACHER' | 'TUTOR';

export interface ScheduleAssignment {
  id: number | string;
  scheduleId: number | string;
  staffId: number | string;
  staffCode?: string;
  staffName?: string;
  teacherName?: string;
  className?: string;
  classCode?: string;
  dayOfWeek?: number;
  startTime?: string;
  endTime?: string;
  roomName?: string;
  role: ScheduleAssignmentRole;
  effectiveFrom?: string;
  effectiveTo?: string;
  createdAt?: string;
}

export const SCHEDULE_ROLE_MAP: Record<string, string> = {
  MAIN_TEACHER: 'Giảng viên chính',
  ASSISTANT_TEACHER: 'Trợ giảng',
  TUTOR: 'Gia sư / Hướng dẫn'
};

export const SCHEDULE_ROLE_OPTIONS = [
  { value: 'MAIN_TEACHER', label: 'Giảng viên chính' },
  { value: 'ASSISTANT_TEACHER', label: 'Trợ giảng' },
  { value: 'TUTOR', label: 'Gia sư / Hướng dẫn' }
];

export interface SpringPage<T> {
  content: T[];
  pageable: unknown;
  last: boolean;
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
  first: boolean;
  numberOfElements: number;
  empty: boolean;
}
