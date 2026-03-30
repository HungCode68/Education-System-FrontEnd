export type PermissionScope = 'SYSTEM' | 'ACADEMIC_YEAR' | 'GRADE' | 'CLASS' | 'USER' | 'SUBJECT' | 'ASSIGNMENT' | 'MATERIAL' | 'GRADEBOOK' | 'REPORT' | 'DEPARTMENT';

export interface Permission {
  id: number; 
  code: string;
  scope: PermissionScope;
  name: string;
  description?: string;
}

export interface SpringPage<T> {
  content: T[];
  pageable: any;
  last: boolean;
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
}