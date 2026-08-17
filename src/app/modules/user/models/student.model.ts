export type Gender = 'male' | 'female' | 'other' | 'MALE' | 'FEMALE' | string;
export type StudentStatus = 'studying' | 'graduated' | 'transferred' | 'dropped_out' | 'reserved' | 'STUDYING' | 'GRADUATED' | 'TRANSFERRED' | 'DROPPED' | 'RESERVED' | string;

export interface Student {
  id: any;
  userId?: any;
  userEmail?: string;
  studentCode?: string;
  fullName: string;
  dateOfBirth?: string;
  gender?: Gender;
  currentClassId?: any;
  address?: string;
  parentPhone?: string;
  parentName?: string;
  admissionYear?: number;
  status?: StudentStatus;
  email?: string;
  targetScore?: string;
  createdAt?: string;
  phone?: string;
  identityNumber?: string;
  nationality?: string;
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