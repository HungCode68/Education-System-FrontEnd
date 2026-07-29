export type ScheduleAssignmentRole = 'MAIN_TEACHER' | 'NATIVE_TEACHER' | 'ASSISTANT';

export interface ScheduleAssignment {
  id: number | string;
  scheduleId: number | string;
  classCode?: string;
  className?: string;
  staffId: number | string;
  staffCode?: string;
  teacherName?: string;
  role: ScheduleAssignmentRole;
  createdAt?: string;
}

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
