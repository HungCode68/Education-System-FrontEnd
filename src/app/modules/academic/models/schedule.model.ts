export interface ClassSchedule {
  id?: number;
  classId: number;
  classCode?: string;
  className?: string;
  roomId?: number;
  roomName?: string;
  dayOfWeek: number; // 2: Thứ 2, 3: Thứ 3, ..., 8: Chủ nhật
  startTime: string; // HH:mm hoặc HH:mm:ss
  endTime: string;   // HH:mm hoặc HH:mm:ss
}

export const DAY_OF_WEEK_MAP: Record<number, string> = {
  2: 'Thứ Hai',
  3: 'Thứ Ba',
  4: 'Thứ Tư',
  5: 'Thứ Năm',
  6: 'Thứ Sáu',
  7: 'Thứ Bảy',
  8: 'Chủ Nhật'
};

export const DAY_OPTIONS = [
  { value: 2, label: 'Thứ Hai' },
  { value: 3, label: 'Thứ Ba' },
  { value: 4, label: 'Thứ Tư' },
  { value: 5, label: 'Thứ Năm' },
  { value: 6, label: 'Thứ Sáu' },
  { value: 7, label: 'Thứ Bảy' },
  { value: 8, label: 'Chủ Nhật' }
];
