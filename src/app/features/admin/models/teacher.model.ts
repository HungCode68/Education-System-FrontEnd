export type TeacherGender = 'male' | 'female' | 'other';
export type TeacherStatus = 'working' | 'on_leave' | 'retired' | 'quit';

export interface Teacher {
  id: string;
  userId?: string;
  teacherCode: string;
  fullName: string;
  dateOfBirth?: string;
  gender: TeacherGender;
  phone?: string;
  emailContact?: string;
  address: string;
  departmentId?: string;
  position: string; // Tổ trưởng, Giáo viên...
  degree: string;   // Cử nhân, Thạc sĩ...
  major?: string;   // Chuyên môn
  startDate?: string;
  status: TeacherStatus;
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