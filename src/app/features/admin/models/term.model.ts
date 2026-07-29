export type TermStatus = 'ACTIVE' | 'CLOSED';

export interface Term {
  id: number | string;
  code: string;
  name: string;
  startDate: string; // yyyy-MM-dd
  endDate: string;   // yyyy-MM-dd
  year: number;
  status: TermStatus;
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
