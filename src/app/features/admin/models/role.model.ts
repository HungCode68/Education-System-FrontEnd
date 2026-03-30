export type RoleStatus = 'active' | 'inactive';

// Định nghĩa sẵn Permission dựa trên DTO của Backend
export interface Permission {
  id: string | number; 
  code: string;
  name: string;
  scope: string;
  description?: string;
}

export interface Role {
  id: string;
  code: string;       // VD: ROLE_ADMIN
  name: string;       // VD: Quản trị hệ thống
  status: RoleStatus;
  createdAt?: string;
  updatedAt?: string;
  permissions?: Permission[];
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