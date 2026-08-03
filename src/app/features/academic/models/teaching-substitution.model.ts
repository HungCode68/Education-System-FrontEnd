export interface TeachingSubstitution {
  id?: number;
  scheduleId: number;
  dayOfWeek?: number;
  startTime?: string;
  endTime?: string;
  roomName?: string;
  classCode?: string;
  className?: string;
  absentStaffId: number;
  absentStaffName?: string;
  absentStaffCode?: string;
  substituteStaffId: number;
  substituteStaffName?: string;
  substituteStaffCode?: string;
  startDate: string; // yyyy-MM-dd
  endDate: string;   // yyyy-MM-dd
  reason: string;
  status: 'PENDING' | 'APPROVED' | 'REJECTED' | 'COMPLETED' | string;
  createdAt?: string;
}

export const SUBSTITUTION_STATUS_MAP: Record<string, { label: string; bgClass: string; textClass: string; borderClass: string }> = {
  PENDING: { label: 'Chờ duyệt', bgClass: 'bg-amber-50', textClass: 'text-amber-700', borderClass: 'border-amber-200' },
  APPROVED: { label: 'Đã duyệt', bgClass: 'bg-emerald-50', textClass: 'text-emerald-700', borderClass: 'border-emerald-200' },
  REJECTED: { label: 'Từ chối', bgClass: 'bg-red-50', textClass: 'text-red-700', borderClass: 'border-red-200' },
  COMPLETED: { label: 'Hoàn thành', bgClass: 'bg-blue-50', textClass: 'text-blue-700', borderClass: 'border-blue-200' }
};

export const SUBSTITUTION_STATUS_OPTIONS = [
  { value: 'PENDING', label: 'Chờ duyệt' },
  { value: 'APPROVED', label: 'Đã duyệt' },
  { value: 'REJECTED', label: 'Từ chối' },
  { value: 'COMPLETED', label: 'Hoàn thành' }
];
