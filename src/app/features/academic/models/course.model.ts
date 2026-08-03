export interface Course {
  id?: number;
  code: string;
  name: string;
  description?: string;
  durationHours?: number;
  basePrice?: number;
  status: 'ACTIVE' | 'INACTIVE' | 'DRAFT';
  metadata?: Record<string, any>;
  createdAt?: string;
  updatedAt?: string;
}

export interface PageResponse<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
  first: boolean;
  last: boolean;
  empty: boolean;
}

export interface CourseFilterParams {
  page?: number;
  size?: number;
  keyword?: string;
  sortBy?: string;
  sortDir?: 'asc' | 'desc';
}
