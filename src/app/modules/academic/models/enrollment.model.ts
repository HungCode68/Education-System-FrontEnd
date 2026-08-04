export type EnrollmentStatus = 'ACTIVE' | 'INACTIVE' | 'DROPPED' | 'ENROLLED' | 'COMPLETED' | 'PENDING' | string;

export interface Enrollment {
  id?: number | string;
  classId: number | string;
  classCode?: string;
  className?: string;
  studentId: number | string;
  studentCode?: string;
  studentName?: string;
  enrolledAt?: string;
  enrollmentDate?: string;
  status?: EnrollmentStatus;
  note?: string;
}

export interface BulkEnrollment {
  classId: number | string;
  studentIds: (number | string)[];
  enrollmentDate?: string;
  status?: EnrollmentStatus;
  note?: string;
}

export const ENROLLMENT_STATUS_MAP: Record<string, string> = {
  ACTIVE: 'Đang học',
  INACTIVE: 'Không hoạt động',
  DROPPED: 'Đã nghỉ',
  ENROLLED: 'Đã đăng ký',
  COMPLETED: 'Hoàn thành',
  PENDING: 'Chờ xét duyệt'
};

export const ENROLLMENT_STATUS_OPTIONS = [
  { value: 'ACTIVE', label: 'Đang học' },
  { value: 'INACTIVE', label: 'Không hoạt động' },
  { value: 'DROPPED', label: 'Đã nghỉ' },
  { value: 'ENROLLED', label: 'Đã đăng ký' },
  { value: 'COMPLETED', label: 'Hoàn thành' },
  { value: 'PENDING', label: 'Chờ xét duyệt' }
];
