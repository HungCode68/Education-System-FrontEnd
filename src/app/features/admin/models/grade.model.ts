export interface Grade {
  id: string;
  name: string;      // VD: Khối 10
  level: number;     // VD: 1, 2, 3... dùng để sort
  isActive: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface PageResponse<T> {
  content: T[];
  pageNo: number;
  pageSize: number;
  totalElements: number;
  totalPages: number;
  last: boolean;
}