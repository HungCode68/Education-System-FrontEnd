export interface ReportCenterStatistics {
  reportDate?: string;
  totalActiveStudents?: number;
  newStudentsToday?: number;
  droppedStudentsToday?: number;
  totalTeachers?: number;
  newTeachersToday?: number;
  resignedTeachersToday?: number;
  totalOtherStaffs?: number;
  newStaffsToday?: number;
  resignedStaffsToday?: number;
  totalCourses?: number;
  totalActiveClasses?: number;
  newClassesOpened?: number;
  classesClosedToday?: number;

  newStudentIds?: number[];
  droppedStudentIds?: number[];
  newTeacherIds?: number[];
  resignedTeacherIds?: number[];
  newClassIds?: number[];
  closedClassIds?: number[];

  createdAt?: string;
}

export interface AcademicReportSummary {
  startDate?: string;
  endDate?: string;
  totalActiveStudents?: number;
  totalTeachers?: number;
  totalOtherStaffs?: number;
  totalCourses?: number;
  totalActiveClasses?: number;
  // Range summary fields
  totalNewStudentsInRange?: number;
  totalDroppedStudentsInRange?: number;
  totalNewTeachersInRange?: number;
  totalResignedTeachersInRange?: number;
  totalNewStaffsInRange?: number;
  totalResignedStaffsInRange?: number;
  totalNewClassesOpenedInRange?: number;
  totalClassesClosedInRange?: number;
  totalDaysReported?: number;
}

export type ReportSummary = AcademicReportSummary;

export interface TrainingOverview {
  totalCourses?: number;
  activeClasses?: number;
  totalActiveClasses?: number;
  totalTeachers?: number;
  totalStudents?: number;
  totalActiveStudents?: number;
  todayClasses?: number;
  newStudentsToday?: number;
  droppedStudentsToday?: number;
  newTeachersToday?: number;
  resignedTeachersToday?: number;
  newClassesOpened?: number;
  classesClosedToday?: number;

  newStudentIds?: number[];
  droppedStudentIds?: number[];
  newTeacherIds?: number[];
  resignedTeacherIds?: number[];
  newClassIds?: number[];
  closedClassIds?: number[];

  centerOverview?: any;
  classMetricsList?: any[];
}

export interface ReportClassMetrics {
  classId?: number | string;
  classCode?: string;
  className?: string;
  totalStudents?: number;
  attendanceRate?: number;
  averageAttendanceRate?: number;
  averageGrade?: number;
  averageAssignmentScore?: number;
  droppedStudents?: number;
  lastCalculatedAt?: string;
}
