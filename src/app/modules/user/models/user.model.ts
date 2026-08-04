export type UserStatus = 'ACTIVE' | 'INACTIVE' | 'LOCKED';

export interface User {
  id: number | string;
  email: string;
  fullName?: string;
  phone?: string;
  status: UserStatus;
  /** Tập tên role, VD: ["ROLE_ADMIN", "ROLE_TEACHER"] */
  roles?: string[];
  expiryDate?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface SpringPage<T> {
  content: T[];
  pageable: unknown;
  last: boolean;
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
}
