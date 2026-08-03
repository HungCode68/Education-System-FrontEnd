export type StudentStatus = 'STUDYING' | 'RESERVED' | 'GRADUATED' | 'DROPPED';

export interface Student {
  id: number | string;
  userId?: number | string;
  userEmail?: string;
  studentCode: string;
  fullName: string;
  parentName?: string;
  parentPhone?: string;
  targetScore?: string; // VD: IELTS 7.0, TOEIC 800
  status: StudentStatus;
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