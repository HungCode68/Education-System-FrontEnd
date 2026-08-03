export interface ClassEntity {
  id?: number;
  courseId: number;
  courseCode?: string;
  courseName?: string;
  termId?: number;
  termCode?: string;
  termName?: string;
  code: string;
  name: string;
  startDate?: string;
  endDate?: string;
  maxStudents: number;
  currentStudents?: number;
  status: 'OPENING' | 'ONGOING' | 'CLOSED' | 'CANCELLED';
  createdAt?: string;
  updatedAt?: string;
}

export interface ClassFilterParams {
  page?: number;
  size?: number;
  keyword?: string;
  sortBy?: string;
  sortDir?: 'asc' | 'desc';
}
