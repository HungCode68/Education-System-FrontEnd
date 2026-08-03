export interface TeachingAssignment {
  id?: number;
  staffId: number;
  staffCode?: string;
  teacherName?: string;
  classId: number;
  classCode?: string;
  className?: string;
  role: 'MAIN_TEACHER' | 'ASSISTANT_TEACHER' | 'TUTOR' | string;
  assignedDate?: string; // yyyy-MM-dd
  endDate?: string;      // yyyy-MM-dd
  status: 'ACTIVE' | 'INACTIVE' | string;
  createdAt?: string;
}

export const TEACHING_ROLE_MAP: Record<string, { label: string; bgClass: string; textClass: string; borderClass: string }> = {
  MAIN_TEACHER: { label: 'Giảng viên chính', bgClass: 'bg-emerald-50', textClass: 'text-emerald-700', borderClass: 'border-emerald-200' },
  ASSISTANT_TEACHER: { label: 'Trợ giảng', bgClass: 'bg-purple-50', textClass: 'text-purple-700', borderClass: 'border-purple-200' },
  TUTOR: { label: 'Cố vấn học tập', bgClass: 'bg-amber-50', textClass: 'text-amber-700', borderClass: 'border-amber-200' }
};

export const TEACHING_ROLE_OPTIONS = [
  { value: 'MAIN_TEACHER', label: 'Giảng viên chính' },
  { value: 'ASSISTANT_TEACHER', label: 'Trợ giảng' },
  { value: 'TUTOR', label: 'Cố vấn học tập' }
];
