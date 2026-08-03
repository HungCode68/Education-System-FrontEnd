export type RoomType = 'PHYSICAL' | 'LMS';

export interface Room {
  id: number | string;
  name: string;
  roomType: RoomType;
  capacity?: number;
  createdAt?: string;
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
