export interface Permission {
  id: number | string;
  name: string;
  description?: string;
  createdAt?: string;
}

export interface Role {
  id: number | string;
  name: string;
  description?: string;
  createdAt?: string;
  permissions?: Permission[];
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
