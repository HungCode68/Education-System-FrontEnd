export type UserStatus = 'active' | 'inactive' | 'suspended';

export interface User {
  id: string;
  email: string;
  status: UserStatus;
  roleId?: string;
  roleCode?: string;
  roleName?: string;
  createdAt?: string;
  lastLogin?: string;
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