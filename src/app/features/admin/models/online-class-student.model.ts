export type EnrollmentSource = 'system' | 'manual';
export type StudentStatus = 'active' | 'removed';

export interface OnlineClassStudent {
  id: string;
  onlineClassId: string;
  onlineClassName?: string;
  
  studentId: string;
  studentCode: string;
  studentName: string;
  studentEmail?: string;
  
  enrollmentSource: EnrollmentSource;
  enrolledDate: string; // yyyy-MM-dd
  status: StudentStatus;
  
  createdAt?: string;
  updatedAt?: string;
}