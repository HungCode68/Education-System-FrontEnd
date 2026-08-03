export type TeacherGender = 'male' | 'female' | 'other' | string;
export type TeacherStatus = 'working' | 'on_leave' | 'retired' | 'quit' | 'WORKING' | 'ON_LEAVE' | 'RESIGNED' | 'RETIRED' | 'ACTIVE' | string;

export interface Teacher {
  id: any;
  userId?: any;
  userEmail?: string;
  teacherCode?: string;
  staffCode?: string;
  fullName: string;
  dateOfBirth?: string;
  gender?: TeacherGender;
  phone?: string;
  emailContact?: string;
  address?: string;
  departmentId?: any;
  departmentName?: string;
  position?: string;
  staffType?: string;
  contractType?: string;
  degree?: string;
  major?: string;
  startDate?: string;
  status?: TeacherStatus;
}

export interface SpringPage<T> {
  content: T[];
  pageable: any;
  last: boolean;
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
  first: boolean;
  numberOfElements: number;
  empty: boolean;
}