// Khớp đúng StaffDto thật của backend (module user, StaffController -> /api/v1/staffs)
export type StaffType = 'TEACHER' | 'TEACHING_ASSISTANT' | 'CONSULTANT' | 'MANAGER' | 'STAFF' | 'ADMIN';
export type StaffContractType = 'FULLTIME' | 'PARTTIME' | 'VISITING';

export interface Staff {
  id: number;
  userId?: number;
  userEmail?: string;
  departmentId?: number;
  departmentName?: string;
  staffCode?: string;
  staffType: StaffType;
  jobTitle?: string;
  fullName: string;
  phone?: string;
  hireDate?: string; // yyyy-MM-dd
  contractType?: StaffContractType;
  baseSalary?: number;
  status?: string;
  createdAt?: string;
  dateOfBirth?: string;
  gender?: string;
  address?: string;
  nationality?: string;
  identityNumber?: string;
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
