export type TeachingRole = 'MAIN_TEACHER' | 'ASSISTANT_TEACHER' | 'TUTOR';
export type TeachingAssignmentStatus = 'ACTIVE' | 'INACTIVE';

export interface TeachingAssignment {
  id: number | string;
  staffId: number | string;
  staffCode?: string;
  teacherName?: string;
  classId: number | string;
  classCode?: string;
  className?: string;
  role: TeachingRole;
  assignedDate: string; // yyyy-MM-dd
  endDate?: string;
  status: TeachingAssignmentStatus;
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
