export interface TrainingOverview {
  reportDate?: string;
  totalActiveStudents: number;
  newStudentsToday: number;
  droppedStudentsToday: number;
  totalTeachers: number;
  newTeachersToday: number;
  resignedTeachersToday: number;
  totalCourses: number;
  totalActiveClasses: number;
  newClassesOpened: number;
  classesClosedToday: number;
}

export interface ReportClassMetrics {
  classId: number;
  classCode: string;
  className: string;
  totalStudents: number;
  averageAttendanceRate: number; // e.g. 95.5 (% percentage)
  averageAssignmentScore: number; // e.g. 8.5 (scale of 10)
  droppedStudents: number;
  lastCalculatedAt?: string;
  startDate?: string;
  endDate?: string;
}

export interface TrainingDashboard {
  centerOverview: TrainingOverview;
  classMetricsList: ReportClassMetrics[];
}

export interface ReportSummary {
  startDate: string;
  endDate: string;
  totalActiveStudents: number;
  totalTeachers: number;
  totalOtherStaffs: number;
  totalCourses: number;
  totalActiveClasses: number;
  totalNewStudentsInRange: number;
  totalDroppedStudentsInRange: number;
  totalNewTeachersInRange: number;
  totalResignedTeachersInRange: number;
  totalNewStaffsInRange: number;
  totalResignedStaffsInRange: number;
  totalNewClassesOpenedInRange: number;
  totalClassesClosedInRange: number;
  totalDaysReported: number;
}

export interface ReportCenterStatistics {
  reportDate: string;
  totalActiveStudents: number;
  newStudentsToday: number;
  droppedStudentsToday: number;
  totalTeachers: number;
  newTeachersToday: number;
  resignedTeachersToday: number;
  totalOtherStaffs: number;
  newStaffsToday: number;
  resignedStaffsToday: number;
  totalCourses: number;
  totalActiveClasses: number;
  newClassesOpened: number;
  classesClosedToday: number;
  createdAt?: string;
}
