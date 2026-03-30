export type SubjectType = 'required' | 'elective'; 
export interface GradeSubject {
  id: string;
  gradeId: string;
  subjectId: string;
  gradeName?: string;
  subjectName?: string;
  subjectType: SubjectType;
  isLmsEnabled: boolean;
  displayOrder: number;
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