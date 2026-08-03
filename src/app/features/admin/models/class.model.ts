export type ClassStatus = 'OPENING' | 'ONGOING' | 'CLOSED' | 'CANCELLED';

export interface Class {
  id: number | string;
  courseId: number | string;
  courseCode?: string;
  courseName?: string;
  termId?: number | string;
  termCode?: string;
  termName?: string;
  code: string;
  name: string;
  startDate?: string;
  endDate?: string;
  maxStudents?: number;
  currentStudents?: number;
  status: ClassStatus;
  createdAt?: string;
  updatedAt?: string;
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
