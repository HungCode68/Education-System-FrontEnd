export interface Term {
  id?: number;
  code: string;
  name: string;
  startDate: string; // yyyy-MM-dd
  endDate: string;   // yyyy-MM-dd
  year: number;
  status: 'ACTIVE' | 'CLOSED';
  createdAt?: string;
}

export interface TermFilterParams {
  page?: number;
  size?: number;
  keyword?: string;
  sortBy?: string;
  sortDir?: 'asc' | 'desc';
}
