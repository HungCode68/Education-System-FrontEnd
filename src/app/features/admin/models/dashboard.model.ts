export interface DashboardStats {
  totalClasses: number;
  totalStudents: number;
  totalTeachers: number;
  totalSubjects: number;
}

export interface ClassByLevel {
  level: string;
  classes: number;
  students: number;
}

export interface MonthlyAverageGrade {
  month: string;
  average: number;
}

export interface ChartData {
  byLevel: ClassByLevel[];
  monthlyGrades: MonthlyAverageGrade[];
}

export interface DashboardData {
  stats: DashboardStats;
  charts: ChartData;
  lastUpdated: Date;
}
