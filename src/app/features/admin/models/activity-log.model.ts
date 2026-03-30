export type LogStatus = 'success' | 'failure' | 'error';

export interface ActivityLog {
  id: string;
  userId?: string;
  actorName: string;
  module: string;
  action: string;
  targetType?: string;
  targetId?: string;
  details?: string; // Dữ liệu dạng JSON string
  status: LogStatus;
  ipAddress?: string;
  userAgent?: string;
  createdAt: string;
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