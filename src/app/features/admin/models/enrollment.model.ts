export type EnrollmentStatus = 'PENDING' | 'ACTIVE' | 'DROPPED' | 'COMPLETED';

export interface Enrollment {
  id: number | string;
  studentId: number | string;
  studentName?: string;
  studentCode?: string;
  classId: number | string;
  classCode?: string;
  className?: string;
  enrollmentDate: string; // yyyy-MM-dd
  status: EnrollmentStatus;
  note?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface BulkEnrollmentDto {
  classId: number | string;
  studentIds: (number | string)[];
  enrollmentDate?: string;
  note?: string;
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
