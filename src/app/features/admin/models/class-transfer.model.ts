export interface TransferStudentRequest {
  studentId: string;
  toClassId: string;
  reason?: string;
}

export interface ClassTransferHistory {
  id: string;
  studentId: string;
  studentName: string;
  studentCode: string;
  fromClassId: string;
  fromClassName: string;
  toClassId: string;
  toClassName: string;
  transferDate: string; // yyyy-MM-dd
  reason: string;
  createdById?: string;
  createdByName?: string;
  createdAt: string;
}

export interface PageResponse<T> {
  content: T[];
  pageNo: number;
  pageSize: number;
  totalElements: number;
  totalPages: number;
  last: boolean;
}