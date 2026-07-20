export interface OnlineClass {
  id: string;
  name: string;
  status: 'active' | 'archived';
  
  teachingAssignmentId: string;
  subjectId: string;
  subjectName: string;
  physicalClassId: string;
  physicalClassName: string;
  teacherId: string;
  teacherName: string;
  teacherCode: string;
  
  isSubstituted: boolean;
  subTeacherId?: string;
  subTeacherName?: string;
  subEndDate?: string;
  
  createdAt: string;
  updatedAt: string;
}

export interface PageResponse<T> {
  content: T[];
  pageNo: number;
  pageSize: number;
  totalElements: number;
  totalPages: number;
  last: boolean;
}