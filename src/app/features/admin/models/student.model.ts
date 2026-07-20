export type Gender = 'male' | 'female' | 'other';
export type StudentStatus = 'studying' | 'graduated' | 'transferred' | 'dropped_out' | 'reserved';

export interface Student {
  id: string;
  studentCode: string;
  fullName: string;
  dateOfBirth: string; // Định dạng yyyy-MM-dd
  gender: Gender;
  currentClassId?: string;
  address: string;
  parentPhone: string;
  parentName: string;
  admissionYear: number;
  status: StudentStatus;
  email?: string;
  userId?: string; // Dùng để kiểm tra xem đã có tài khoản hay chưa
}

// Spring Data Page chuẩn
export interface SpringPage<T> {
  content: T[];
  pageable: any;
  last: boolean;
  totalElements: number;
  totalPages: number;
  size: number;
  number: number; // Spring Data page bắt đầu từ 0
  first: boolean;
  numberOfElements: number;
  empty: boolean;
}