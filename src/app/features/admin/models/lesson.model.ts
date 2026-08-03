export interface Lesson {
  id: number | string;
  classId: number | string;
  classCode?: string;
  className?: string;
  name: string;
  orderNumber: number;
  description?: string;
  createdAt?: string;
}

export interface SpringPage<T> {
  content: T[];
  pageable: unknown;
  last: boolean;
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
  first: boolean;
  numberOfElements: number;
  empty: boolean;
}
