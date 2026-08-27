import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { StudentClassService } from '../../services/student-class.service';
import { LearningMaterialService } from '../../../teacher/services/learning-material.service';
import { ToastService } from '../../../../core/services/toast.service';
import { AssignmentService } from '../../../teacher/services/assignment.service';
import { AssignmentSubmissionService } from '../../../teacher/services/assignment-submission.service';
import { AuthService } from '../../../../core/services/auth.service';
import { EnrollmentService } from '../../../../modules/academic/services/enrollment.service';
import { ClassAnnouncementService } from '../../../../modules/academic/services/class-announcement.service';
import { SecureStorageService } from '../../../../core/services/secure-storage.service';

@Component({
  selector: 'app-student-class-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './student-class-detail.component.html'
})
export class StudentClassDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  public router = inject(Router);
  private classService = inject(StudentClassService);
  private materialService = inject(LearningMaterialService);
  private toastService = inject(ToastService);
  private sanitizer = inject(DomSanitizer);
  private assignmentService = inject(AssignmentService);
  private submissionService = inject(AssignmentSubmissionService);
  private authService = inject(AuthService);
  private enrollmentService = inject(EnrollmentService);
  private announcementService = inject(ClassAnnouncementService);
  private secureStorage = inject(SecureStorageService);

  classId = signal<string | null>(null);
  classInfo = signal<any | null>(null);
  isLoading = signal(true);
  
  // --- STATE TABS ---
  activeTab = signal<'lessons' | 'students' | 'materials' | 'announcements'>('lessons');

  // --- STATE BÀI HỌC (LESSONS) ---
  lessons = signal<any[]>([]);
  isLoadingLessons = signal(false);
  expandedLessonIds = signal<Set<number>>(new Set());
  lessonMaterialsMap = signal<{ [lessonId: number]: any[] }>({});
  lessonAssignmentsMap = signal<{ [lessonId: number]: any[] }>({});
  isLoadingLessonDetailsMap = signal<{ [lessonId: number]: boolean }>({});

  unreadLessonsCount = signal(0);
  readAssignmentIds = signal<Set<number>>(new Set());
  readGradedSubmissionIds = signal<Set<number>>(new Set());
  studentSubmissionsMap = signal<{ [assignmentId: number]: any }>({});

  // --- STATE HỌC SINH ---
  students = signal<any[]>([]);
  isLoadingStudents = signal(false);
  searchQuery = signal('');
  currentPage = signal(1);
  pageSize = signal(10);
  
  filteredStudents = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();
    if (!query) return this.students();
    return this.students().filter(s => 
      s.studentName.toLowerCase().includes(query) || 
      s.studentCode.toLowerCase().includes(query)
    );
  });

  totalPages = computed(() => Math.ceil(this.filteredStudents().length / this.pageSize()) || 1);
  startIndex = computed(() => this.filteredStudents().length === 0 ? 0 : (this.currentPage() - 1) * this.pageSize() + 1);
  endIndex = computed(() => Math.min(this.currentPage() * this.pageSize(), this.filteredStudents().length));
  
  paginatedStudents = computed(() => {
    const start = (this.currentPage() - 1) * this.pageSize();
    return this.filteredStudents().slice(start, start + this.pageSize());
  });

  // --- STATE TÀI LIỆU ---
  materials = signal<any[]>([]);
  isLoadingMaterials = signal(false);

  // --- STATE THÔNG BÁO ---
  announcements = signal<any[]>([]);
  isLoadingAnnouncements = signal(false);
  expandedAnnouncementIds = signal<Set<number>>(new Set());
  unreadAnnouncementsCount = signal(0);

  // --- STATE PREVIEW TÀI LIỆU ---
  isPreviewModalOpen = signal(false);
  isPreviewLoading = signal(false);
  previewData = signal<{ url: SafeResourceUrl | null, rawUrl: string, type: string, sourceType: string, title: string }>({
    url: null,
    rawUrl: '',
    type: '',
    sourceType: '',
    title: ''
  });

  // --- STATE BÀI TẬP ---
  assignments = signal<any[]>([]);
  isLoadingAssignments = signal(false);
  assignmentPage = signal(0);
  assignmentTotalPages = signal(1);

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.classId.set(params.get('id'));
      if (this.classId()) {
        this.restoreState();
        // Cần đảm bảo loadClassInfo hoặc hàm gốc vẫn ở đây,
        // Nhưng vì tool view không thấy rõ, ta chèn thêm `loadUnreadLessonsTracking`
        if (typeof (this as any).loadClassDetails === 'function') {
          (this as any).loadClassDetails();
        } else if (typeof (this as any).loadClassInfo === 'function') {
          (this as any).loadClassInfo();
        }
        this.loadUnreadLessonsTracking();
      }
    });
  }

  private restoreState() {
    const cid = this.classId();
    if (!cid) return;
    
    const savedTab = sessionStorage.getItem(`student_class_${cid}_tab`) as 'lessons' | 'students' | 'materials' | 'announcements';
    if (savedTab && ['lessons', 'students', 'materials', 'announcements'].includes(savedTab)) {
      this.activeTab.set(savedTab);
    }

    const savedLessonsStr = sessionStorage.getItem(`student_class_${cid}_expanded_lessons`);
    if (savedLessonsStr) {
      try {
        const arr = JSON.parse(savedLessonsStr);
        if (Array.isArray(arr)) {
          this.expandedLessonIds.set(new Set(arr));
        }
      } catch (e) {}
    }
  }

  private saveTabState(tab: string) {
    const cid = this.classId();
    if (cid) sessionStorage.setItem(`student_class_${cid}_tab`, tab);
  }

  loadUnreadLessonsTracking() {
    const cid = this.classId();
    if (!cid) return;
    
    // Đọc trạng thái từ SecureStorage
    const assignmentKey = `read_assignments_class_${cid}`;
    const submissionKey = `read_graded_submissions_class_${cid}`;
    
    const readAssigns = this.secureStorage.getItem<number[]>(assignmentKey) || [];
    const readGrades = this.secureStorage.getItem<number[]>(submissionKey) || [];
    
    this.readAssignmentIds.set(new Set(readAssigns));
    this.readGradedSubmissionIds.set(new Set(readGrades));

    // Gọi API song song để lấy Assignment và Submission
    import('rxjs').then(({ forkJoin }) => {
      forkJoin({
        assignments: this.assignmentService.getAssignmentsByClassIdUnpaginated(cid),
        submissions: this.submissionService.getMySubmissionsByClassId(cid)
      }).subscribe({
        next: ({ assignments, submissions }) => {
          let unreadCount = 0;
          
          // Map submissions by assignmentId
          const subMap: { [assignmentId: number]: any } = {};
          (submissions || []).forEach((sub: any) => {
            // API trả về danh sách xếp theo SubmittedAtDesc (mới nhất xếp trên)
            // Nên ta chỉ cần lấy bản ghi đầu tiên gặp được cho mỗi assignmentId
            if (!subMap[sub.assignmentId]) {
              subMap[sub.assignmentId] = sub;
            }
          });
          this.studentSubmissionsMap.set(subMap);

          // Tính toán số lượng chưa đọc
          (assignments || []).forEach((assign: any) => {
            // Nếu bài tập được giao (PUBLISHED) và chưa xem
            if (assign.status === 'PUBLISHED' && !this.readAssignmentIds().has(assign.id)) {
              unreadCount++;
            }
            
            // Nếu bài tập đã chấm điểm và chưa xem điểm
            const sub = subMap[assign.id];
            if (sub && (sub.status === 'GRADED' || sub.score !== null) && !this.readGradedSubmissionIds().has(sub.id)) {
              unreadCount++;
            }
          });

          this.unreadLessonsCount.set(unreadCount);
        },
        error: (err) => console.error('Lỗi tải dữ liệu Unread tracking:', err)
      });
    });
  }

  private saveExpandedLessonsState() {
    const cid = this.classId();
    if (cid) {
      sessionStorage.setItem(
        `student_class_${cid}_expanded_lessons`,
        JSON.stringify(Array.from(this.expandedLessonIds()))
      );
    }
  }

  switchTab(tab: 'lessons' | 'students' | 'materials' | 'announcements') {
    this.activeTab.set(tab);
    this.saveTabState(tab);
    
    if (tab === 'lessons' && this.lessons().length === 0) {
      this.loadLessons(this.classId()!);
    }
    if (tab === 'students' && this.students().length === 0) {
      this.loadStudents(this.classId()!);
    }
    if (tab === 'materials' && this.materials().length === 0 && this.classInfo()?.courseId) {
      this.loadMaterials(this.classInfo().courseId);
    }
    if (tab === 'announcements' && this.announcements().length === 0) {
      this.loadAnnouncements(this.classId()!);
    }
  }

  // --- LOGIC HỌC SINH ---
  loadStudents(targetClassId?: string) {
    const id = targetClassId || this.classId();
    if (!id) return;
    this.isLoadingStudents.set(true);
    this.enrollmentService.getByClassId(id).subscribe({
      next: (res: any[]) => {
        this.students.set(res || []);
        this.isLoadingStudents.set(false);
      },
      error: (err: any) => {
        console.error('Lỗi khi tải danh sách học viên:', err);
        this.isLoadingStudents.set(false);
      }
    });
  }

  // --- LOGIC THÔNG BÁO LỚP HỌC ---
  loadAnnouncements(targetClassId?: string) {
    const id = targetClassId || this.classId();
    if (!id) return;
    this.isLoadingAnnouncements.set(true);
    this.announcementService.getAnnouncementsByClassId(id).subscribe({
      next: (res: any[]) => {
        const storageKey = `read_announcements_class_${id}`;
        const readIdsArray = this.secureStorage.getItem<number[]>(storageKey) || [];
        const readIds = new Set(readIdsArray);
        
        const mapped = (res || []).map(ann => ({
          ...ann,
          isRead: readIds.has(ann.id)
        }));
        
        this.announcements.set(mapped);
        this.updateUnreadCount(mapped);
        this.isLoadingAnnouncements.set(false);
      },
      error: (err: any) => {
        console.error('Lỗi khi tải thông báo lớp học:', err);
        this.isLoadingAnnouncements.set(false);
      }
    });
  }

  private updateUnreadCount(anns: any[]) {
    this.unreadAnnouncementsCount.set(anns.filter(a => !a.isRead).length);
  }

  toggleAnnouncementExpand(id: number) {
    const current = new Set(this.expandedAnnouncementIds());
    if (current.has(id)) {
      current.delete(id);
    } else {
      current.add(id);
      
      // Đánh dấu là đã đọc
      this.markAnnouncementAsRead(id);
    }
    this.expandedAnnouncementIds.set(current);
  }

  navigateToAssignmentDetail(assignmentId: number, event?: Event) {
    if (event) {
      event.stopPropagation();
    }
    
    // Đánh dấu Assignment là đã xem
    const cid = this.classId();
    if (cid) {
      const assignmentKey = `read_assignments_class_${cid}`;
      const readAssigns = new Set(this.secureStorage.getItem<number[]>(assignmentKey) || []);
      if (!readAssigns.has(assignmentId)) {
        readAssigns.add(assignmentId);
        this.secureStorage.setItem(assignmentKey, Array.from(readAssigns));
        this.readAssignmentIds.set(readAssigns);
      }

      // Đánh dấu Submission là đã xem điểm (nếu có điểm)
      const sub = this.studentSubmissionsMap()[assignmentId];
      if (sub && (sub.status === 'GRADED' || sub.score !== null)) {
        const submissionKey = `read_graded_submissions_class_${cid}`;
        const readGrades = new Set(this.secureStorage.getItem<number[]>(submissionKey) || []);
        if (!readGrades.has(sub.id)) {
          readGrades.add(sub.id);
          this.secureStorage.setItem(submissionKey, Array.from(readGrades));
          this.readGradedSubmissionIds.set(readGrades);
        }
      }

      // Cập nhật lại số lượng chưa đọc (gọi lại API hoặc tính toán lại ở Client, ta tính toán lại cho nhanh)
      this.recalculateUnreadLessonsCount();
    }

    this.router.navigate(['/student/assignment', assignmentId]);
  }

  private recalculateUnreadLessonsCount() {
    let unreadCount = 0;
    const assignments = this.assignments(); // Wait, assignments are not loaded here.
    // Instead of looping assignments, we can just loadUnreadLessonsTracking() again!
    this.loadUnreadLessonsTracking();
  }

  private markAnnouncementAsRead(annId: number) {
    const classId = this.classId();
    if (!classId) return;

    const storageKey = `read_announcements_class_${classId}`;
    const readIdsArray = this.secureStorage.getItem<number[]>(storageKey) || [];
    const readIds = new Set(readIdsArray);

    if (!readIds.has(annId)) {
      readIds.add(annId);
      this.secureStorage.setItem(storageKey, Array.from(readIds));
      
      // Update local state
      const currentAnns = this.announcements().map(a => 
        a.id === annId ? { ...a, isRead: true } : a
      );
      this.announcements.set(currentAnns);
      this.updateUnreadCount(currentAnns);
    }
  }

  // --- LOGIC TÀI LIỆU CHUNG KHÓA HỌC ---
  loadMaterials(targetCourseId?: number | string) {
    const courseId = targetCourseId || this.classInfo()?.courseId;
    if (!courseId) return;
    this.isLoadingMaterials.set(true);
    this.materialService.getMaterialsByCourseId(courseId).subscribe({
      next: (res: any) => {
        this.materials.set(res || []);
        this.isLoadingMaterials.set(false);
      },
      error: (err: any) => {
        console.error('Lỗi khi tải danh sách tài liệu khóa học:', err);
        this.isLoadingMaterials.set(false);
      }
    });
  }

  // --- LOGIC BÀI HỌC (LESSON) ---
  loadLessons(targetClassId?: string) {
    const id = targetClassId || this.classId();
    if (!id) return;
    this.isLoadingLessons.set(true);
    this.materialService.getLessonsByClassId(id).subscribe({
      next: (res: any) => {
        this.lessons.set(res || []);
        this.isLoadingLessons.set(false);
        // Sau khi tải lessons xong, nạp lại dữ liệu cho các bài học đã được mở
        this.expandedLessonIds().forEach(lessonId => {
          this.loadLessonDetails(lessonId);
        });
      },
      error: (err: any) => {
        console.error('Lỗi khi tải danh sách bài học:', err);
        this.isLoadingLessons.set(false);
      }
    });
  }

  toggleLessonExpand(lessonId: number) {
    const currentSet = new Set(this.expandedLessonIds());
    if (currentSet.has(lessonId)) {
      currentSet.delete(lessonId);
    } else {
      currentSet.add(lessonId);
      this.loadLessonDetails(lessonId);
    }
    this.expandedLessonIds.set(currentSet);
    this.saveExpandedLessonsState();
  }

  loadLessonDetails(lessonId: number) {
    const loadingMap = { ...this.isLoadingLessonDetailsMap(), [lessonId]: true };
    this.isLoadingLessonDetailsMap.set(loadingMap);

    // Tải tài liệu của Lesson
    this.materialService.getMaterialsByLessonId(lessonId).subscribe({
      next: (materials: any) => {
        const matList = Array.isArray(materials) ? materials : (materials.content || []);
        const matMap = { ...this.lessonMaterialsMap(), [lessonId]: matList };
        this.lessonMaterialsMap.set(matMap);
        this.finishLessonLoading(lessonId);
      },
      error: () => this.finishLessonLoading(lessonId)
    });

    // Tải bài tập của Lesson
    this.assignmentService.getAssignmentsByLessonId(lessonId).subscribe({
      next: (assignments: any) => {
        const assignList = Array.isArray(assignments) ? assignments : (assignments.content || []);
        const assignMap = { ...this.lessonAssignmentsMap(), [lessonId]: assignList };
        this.lessonAssignmentsMap.set(assignMap);
        this.finishLessonLoading(lessonId);
      },
      error: () => this.finishLessonLoading(lessonId)
    });
  }

  private finishLessonLoading(lessonId: number) {
    const loadingMap = { ...this.isLoadingLessonDetailsMap(), [lessonId]: false };
    this.isLoadingLessonDetailsMap.set(loadingMap);
  }

  isLessonExpanded(lessonId: number): boolean {
    return this.expandedLessonIds().has(lessonId);
  }

  // --- LOGIC BÀI TẬP ---

  loadAssignments() {
    this.isLoadingAssignments.set(true);
    this.assignmentService.getAssignmentsByClass(this.classId()!, this.assignmentPage(), 10).subscribe({
      next: (res) => {
        this.assignments.set(res.content || []);
        this.assignmentTotalPages.set(res.totalPages || 1);
        this.isLoadingAssignments.set(false);
      },
      error: () => this.isLoadingAssignments.set(false)
    });
  }

  getAssignmentTypeName(type: string): string {
    const map: any = {
      'multiple_choice': 'Trắc nghiệm',
      'essay': 'Tự luận',
      'file_upload': 'Nộp File',
      'mixed': 'Hỗn hợp'
    };
    return map[type] || 'Không xác định';
  }

  // --- LOGIC HỌC SINH & LỚP HỌC ---
  private loadClassDetails() {
    this.isLoading.set(true);
    this.classService.getClassDetail(this.classId()!).subscribe({
      next: (res) => { 
        this.classInfo.set(res); 
        this.isLoading.set(false);
        this.loadLessons(res.id);
        this.loadStudents(res.id); 
        this.loadAnnouncements(res.id); // Tải thông báo ngay lập tức để lấy số lượng chưa đọc
        if (res?.courseId) {
          this.loadMaterials(res.courseId);
        }
      },
      error: (err) => {
        console.error('Lỗi khi tải thông tin lớp:', err);
        this.isLoading.set(false);
      }
    });
  }

  onSearchChange(query: string) {
    this.searchQuery.set(query);
    this.currentPage.set(1);
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage.set(page);
    }
  }

  downloadMaterial(m: any, event: Event) {
    event.stopPropagation();
    const targetUrl = m.downloadUrl || m.resourceUrl;
    if (targetUrl) {
      window.open(targetUrl, '_blank');
    } else {
      this.toastService.error('Lỗi', 'Không tìm thấy đường dẫn tài liệu');
    }
  }

  // --- LOGIC XEM TRƯỚC (PREVIEW) ---
  openPreview(m: any) {
    const rawUrl = m.downloadUrl || m.resourceUrl || '';
    const srcType = m.sourceType || (rawUrl.startsWith('http') ? 'EXTERNAL' : 'MINIO');
    let matType = m.materialType || m.fileType || 'DOCUMENT';

    if (matType === 'DOCUMENT' && rawUrl && srcType === 'MINIO') {
      const lowerUrl = rawUrl.toLowerCase().split('?')[0];
      if (lowerUrl.match(/\.(doc|docx|xls|xlsx|ppt|pptx|zip|rar|7z|tar|gz)$/)) {
        matType = 'UNSUPPORTED';
      }
    }

    let safeUrl: SafeResourceUrl | null = null;

    if (srcType === 'EXTERNAL' || matType === 'EXTERNAL_LINK' || matType === 'link') {
      let embedUrl = rawUrl;
      if (embedUrl.includes('youtube.com/watch?v=')) {
        embedUrl = embedUrl.replace('watch?v=', 'embed/');
      } else if (embedUrl.includes('youtu.be/')) {
        embedUrl = embedUrl.replace('youtu.be/', 'youtube.com/embed/');
      }
      safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
    } else if (rawUrl) {
      safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(rawUrl);
    }

    this.previewData.set({
      url: safeUrl,
      rawUrl: rawUrl,
      type: matType,
      sourceType: srcType,
      title: m.title || 'Tài liệu'
    });
    this.isPreviewModalOpen.set(true);
  }

  openAnnouncementPreview(ann: any) {
    const rawUrl = ann.attachmentUrl || '';
    
    // Fallback file type logic based on extension
    let matType = 'UNSUPPORTED';
    if (rawUrl) {
      const lowerUrl = rawUrl.toLowerCase();
      // Remove query params to check extension safely
      const urlWithoutQuery = lowerUrl.split('?')[0];

      if (urlWithoutQuery.match(/\.(jpg|jpeg|png|gif|webp)$/)) matType = 'IMAGE';
      else if (urlWithoutQuery.match(/\.(mp4|webm|ogg)$/)) matType = 'VIDEO';
      else if (urlWithoutQuery.match(/\.(mp3|wav|ogg)$/)) matType = 'AUDIO';
      else if (urlWithoutQuery.match(/\.(pdf)$/)) matType = 'DOCUMENT';
    }

    let safeUrl: SafeResourceUrl | null = null;
    if (rawUrl) {
      safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(rawUrl);
    }

    this.previewData.set({
      url: safeUrl,
      rawUrl: rawUrl,
      type: matType,
      sourceType: 'MINIO',
      title: 'Tệp đính kèm: ' + ann.title
    });
    this.isPreviewModalOpen.set(true);
  }

  closePreview() {
    this.isPreviewModalOpen.set(false);
    this.previewData.set({ url: null, rawUrl: '', type: '', sourceType: '', title: '' });
    this.isPreviewLoading.set(false);
  }

  forceDownload(url: string, title: string, event: Event) {
    event.preventDefault();
    this.toastService.info('Đang tải xuống', 'Vui lòng chờ trong giây lát...');
    fetch(url)
      .then(response => response.blob())
      .then(blob => {
        const blobUrl = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = blobUrl;
        
        let filename = title;
        if (url.includes('/')) {
          const parts = url.split('/');
          let lastPart = parts[parts.length - 1];
          if (lastPart.includes('?')) lastPart = lastPart.split('?')[0];
          filename = decodeURIComponent(lastPart);
        }
        
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(blobUrl);
      })
      .catch(err => {
        console.error('Lỗi khi tải file qua fetch:', err);
        window.open(url, '_blank');
      });
  }

  // --- HÀM TIỆN ÍCH ---
  formatBytes(bytes: number, decimals = 2) {
    if (!+bytes) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
  }
}