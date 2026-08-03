export interface Room {
  id?: number;
  name: string;
  roomType?: 'PHYSICAL' | 'LMS' | string;
  capacity?: number;
  createdAt?: string;
}
