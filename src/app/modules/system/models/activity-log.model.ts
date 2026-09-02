/** Khớp bảng `activity_logs` và `ActivityLogDto` backend */
export type LogStatus = 'success' | 'failure' | 'error';

export interface ActivityLog {
  id: number;
  userId?: number | null;
  actorName: string;
  module: string;
  action: string;
  targetType?: string | null;
  targetId?: string | null;
  method?: string | null;
  endpoint?: string | null;
  oldValue?: string | null;
  newValue?: string | null;
  details?: string | null;
  status: LogStatus;
  ipAddress?: string | null;
  userAgent?: string | null;
  createdAt: string;
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
