export interface Enrollment {
  id?: number;
  studentId: number;
  studentName?: string;
  studentCode?: string;
  classId: number;
  classCode?: string;
  className?: string;
  enrollmentDate: string; // yyyy-MM-dd
  status: 'PENDING' | 'ACTIVE' | 'DROPPED' | 'COMPLETED' | string;
  note?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface BulkEnrollment {
  classId: number;
  studentIds: number[];
  enrollmentDate?: string;
  status?: string;
  note?: string;
}

export const ENROLLMENT_STATUS_MAP: Record<string, { label: string; bgClass: string; textClass: string; borderClass: string }> = {
  PENDING: { label: 'Chờ xác nhận', bgClass: 'bg-amber-50', textClass: 'text-amber-700', borderClass: 'border-amber-200' },
  ACTIVE: { label: 'Đang học', bgClass: 'bg-emerald-50', textClass: 'text-emerald-700', borderClass: 'border-emerald-200' },
  DROPPED: { label: 'Bỏ học', bgClass: 'bg-red-50', textClass: 'text-red-700', borderClass: 'border-red-200' },
  COMPLETED: { label: 'Hoàn thành', bgClass: 'bg-blue-50', textClass: 'text-blue-700', borderClass: 'border-blue-200' }
};

export const ENROLLMENT_STATUS_OPTIONS = [
  { value: 'PENDING', label: 'Chờ xác nhận' },
  { value: 'ACTIVE', label: 'Đang học' },
  { value: 'DROPPED', label: 'Bỏ học' },
  { value: 'COMPLETED', label: 'Hoàn thành' }
];
