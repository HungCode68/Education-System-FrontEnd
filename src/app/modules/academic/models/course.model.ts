export type CourseStatus = 'ACTIVE' | 'INACTIVE' | 'DRAFT';

export interface Course {
  id: number | string;
  code: string;
  name: string;
  description?: string;
  durationHours?: number;
  basePrice?: number;
  status: CourseStatus;
  metadata?: Record<string, unknown>;
  createdAt?: string;
  updatedAt?: string;
  totalSessions?: number;
  sessionsPerWeek?: number;
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

export type PageResponse<T> = SpringPage<T>;
