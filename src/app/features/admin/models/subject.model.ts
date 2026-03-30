export interface Subject {
  id: string;
  name: string;
  description?: string;
  isActive: boolean; // Backend trả về kiểu Boolean
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