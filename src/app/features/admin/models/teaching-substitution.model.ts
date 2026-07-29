export interface TeachingSubstitution {
  id: number | string;
  scheduleId: number | string;
  classCode?: string;
  className?: string;
  absentStaffId: number | string;
  absentStaffName?: string;
  absentStaffCode?: string;
  substituteStaffId: number | string;
  substituteStaffName?: string;
  substituteStaffCode?: string;
  startDate?: string;
  endDate?: string;
  reason: string;
  status: string; // SCHEDULED, COMPLETED, CANCELLED
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
