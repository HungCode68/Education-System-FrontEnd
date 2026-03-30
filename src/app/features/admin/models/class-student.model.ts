export type StudentStatus = 'studying' | 'transferred' | 'dropped' | 'completed';

export interface ClassStudent {
  id: string;
  physicalClassId: string;
  physicalClassName?: string;
  studentId: string;
  studentName?: string;
  studentCode?: string;
  studentNumber?: number; // STT trong sổ điểm
  enrollmentDate?: string;
  endDate?: string;
  status: StudentStatus;
  createdAt?: string;
  updatedAt?: string;
}

// Model cho chức năng Chia lớp tự động
export interface AutoDistributeRequest {
  schoolYearId: string;
  classIds: string[];
  studentIds: string[];
}