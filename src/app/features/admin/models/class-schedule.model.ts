export interface ClassSchedule {
  id: number | string;
  classId: number | string;
  classCode?: string;
  className?: string;
  roomId?: number | string;
  roomName?: string;
  dayOfWeek: number; // 2: Thứ 2 ... 8: Chủ nhật
  startTime: string; // HH:mm:ss hoặc HH:mm
  endTime: string;   // HH:mm:ss hoặc HH:mm
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
