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

export const TEACHING_ROLE_MAP: Record<string, { label: string; bgClass: string; textClass: string; borderClass: string }> = {
  MAIN_TEACHER: { label: 'Giảng viên chính', bgClass: 'bg-blue-50', textClass: 'text-blue-700', borderClass: 'border-blue-200' },
  ASSISTANT_TEACHER: { label: 'Trợ giảng', bgClass: 'bg-purple-50', textClass: 'text-purple-700', borderClass: 'border-purple-200' },
  TUTOR: { label: 'Gia sư / Hướng dẫn', bgClass: 'bg-amber-50', textClass: 'text-amber-700', borderClass: 'border-amber-200' }
};

export const TEACHING_ROLE_OPTIONS = [
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
