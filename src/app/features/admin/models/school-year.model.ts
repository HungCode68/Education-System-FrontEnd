export type SchoolYearStatus = 'ACTIVE' | 'ARCHIVED' | 'UPCOMING'; // Giả định các trạng thái

export interface SchoolYear {
  id: string;
  name: string;
  startDate: string; // LocalDate từ backend thường trả về string YYYY-MM-DD
  endDate: string;
  status: SchoolYearStatus;
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