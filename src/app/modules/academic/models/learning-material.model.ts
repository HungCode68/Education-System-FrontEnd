export interface LearningMaterial {
  id?: number | string;
  materialScope: 'COURSE' | 'LESSON' | string;
  courseId?: number;
  courseCode?: string;
  courseName?: string;
  lessonId?: number;
  lessonName?: string;
  classId?: number;
  className?: string;
  title: string;
  materialType: 'DOCUMENT' | 'SLIDE' | 'VIDEO' | 'IMAGE' | 'EXTERNAL_LINK' | string;
  sourceType: 'MINIO' | 'EXTERNAL' | string;
  resourceUrl?: string;
  downloadUrl?: string;
  fileSize?: number;
  displayOrder?: number;
  isOfficial?: boolean;
  isRagEnabled?: boolean;
  indexingStatus?: 'NOT_INDEXED' | 'PENDING' | 'INDEXED' | 'FAILED' | string;
  uploadedById?: number;
  uploadedByName?: string;
  uploadedByEmail?: string;
  createdAt?: string;
}

export interface LessonDto {
  id: number | string;
  classId: number | string;
  className?: string;
  classCode?: string;
  name: string;
  title?: string;
  description?: string;
  lessonOrder?: number;
  orderNumber?: number;
  status?: string;
}

export type Lesson = LessonDto;

export const MATERIAL_TYPE_MAP: Record<string, { label: string; bgClass: string; textClass: string; icon: string }> = {
  DOCUMENT: { label: 'Tài liệu PDF/Word', bgClass: 'bg-blue-50', textClass: 'text-blue-700', icon: 'document' },
  SLIDE: { label: 'Bài giảng Slide', bgClass: 'bg-amber-50', textClass: 'text-amber-700', icon: 'presentation' },
  VIDEO: { label: 'Video bài giảng', bgClass: 'bg-purple-50', textClass: 'text-purple-700', icon: 'video' },
  IMAGE: { label: 'Hình ảnh / Sơ đồ', bgClass: 'bg-emerald-50', textClass: 'text-emerald-700', icon: 'image' },
  EXTERNAL_LINK: { label: 'Liên kết ngoài', bgClass: 'bg-indigo-50', textClass: 'text-indigo-700', icon: 'link' }
};

export const INDEXING_STATUS_MAP: Record<string, { label: string; bgClass: string; textClass: string; borderClass: string }> = {
  NOT_INDEXED: { label: 'Chưa học AI', bgClass: 'bg-gray-50', textClass: 'text-gray-600', borderClass: 'border-gray-200' },
  PENDING: { label: 'Đang xử lý AI', bgClass: 'bg-amber-50', textClass: 'text-amber-700', borderClass: 'border-amber-200' },
  INDEXED: { label: 'Đã sẵn sàng AI', bgClass: 'bg-emerald-50', textClass: 'text-emerald-700', borderClass: 'border-emerald-200' },
  FAILED: { label: 'Lỗi học AI', bgClass: 'bg-red-50', textClass: 'text-red-700', borderClass: 'border-red-200' }
};

export const SCOPE_MAP: Record<string, { label: string; bgClass: string; textClass: string; borderClass: string }> = {
  COURSE: { label: 'Cấp Khóa học', bgClass: 'bg-indigo-50', textClass: 'text-indigo-700', borderClass: 'border-indigo-200' },
  LESSON: { label: 'Cấp Bài học', bgClass: 'bg-teal-50', textClass: 'text-teal-700', borderClass: 'border-teal-200' }
};
