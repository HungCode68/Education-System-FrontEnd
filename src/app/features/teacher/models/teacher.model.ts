export interface TeachingAssignment {
  id: string;
  teacherId: string;
  teacherName: string;
  subjectName: string;
  classId: string;
  className: string;
  semesterId: string;
}

export interface ClassDetail {
  id: string;
  name: string;
  grade: number;
  subject: string;
  room: string;
  teacherId: string;
  teacherName: string;
  semesterId: string;
  studentCount: number;
}

export interface StudentClass {
  id: string;
  name: string;
  studentCode: string;
  email: string;
  phone: string;
  avatar?: string;
}

export interface Material {
  id: string;
  title: string;
  fileName: string;
  uploadedAt: string;
  uploadedBy: string;
  downloadCount: number;
  fileSize: number;
  fileUrl: string;
}

export interface ClassAssignment {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  createdAt: string;
  totalStudents: number;
  submittedCount: number;
  points: number;
}

export interface StudentProgress {
  studentId: string;
  studentName: string;
  studentCode: string;
  attendanceRate: number;
  assignmentSubmissionRate: number;
  averageScore: number;
  lastActivityDate: string;
}

export interface StudentGrade {
  studentId: string;
  studentName: string;
  studentCode: string;
  midtermScore: number;
  finalScore: number;
  averageScore: number;
  grade: string;
  status: 'passed' | 'failed' | 'pending';
}

export interface Semester {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
}
