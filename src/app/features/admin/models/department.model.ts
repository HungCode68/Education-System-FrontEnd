export type DepartmentType = 'academic' | 'office';

export interface Department {
  id: string;
  name: string;
  description?: string;
  type: DepartmentType;
  isActive: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface SpringPage<T> {
  content: T[];
  pageable: any;
  last: boolean;
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
  first: boolean;
  numberOfElements: number;
  empty: boolean;
}