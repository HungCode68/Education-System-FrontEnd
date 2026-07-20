export type ClassStatus = 'active' | 'archived' ;

export interface PhysicalClass {
  id: string;
  name: string;
  roomNumber?: string;
  maxStudents: number;
  schoolYearId: string;
  schoolYearName?: string;
  gradeId: string;
  gradeName?: string;
  homeroomTeacherId?: string;
  homeroomTeacherName?: string;
  homeroomTeacherCode?: string;
  status: ClassStatus;
  createdAt?: string;
  updatedAt?: string;
}

export interface PageResponse<T> {
  content: T[];
  pageNo: number;
  pageSize: number;
  totalElements: number;
  totalPages: number;
  last: boolean;
}