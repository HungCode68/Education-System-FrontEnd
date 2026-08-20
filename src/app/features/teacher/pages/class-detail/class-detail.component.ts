import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TeacherClassService } from '../../services/online-class.service';
import { LearningMaterialService } from '../../services/learning-material.service';
import { ToastService } from '../../../../core/services/toast.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { AssignmentService } from '../../services/assignment.service';
import { EnrollmentService } from '../../../../modules/academic/services/enrollment.service';
import { ClassAnnouncementService } from '../../../../modules/academic/services/class-announcement.service';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-class-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './class-detail.component.html'
})
export class ClassDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  public router = inject(Router);
  private classService = inject(TeacherClassService);
  private materialService = inject(LearningMaterialService);
  private fb = inject(FormBuilder);
  private toastService = inject(ToastService);
  private sanitizer = inject(DomSanitizer);
  private assignmentService = inject(AssignmentService);
  private enrollmentService = inject(EnrollmentService);
  private announcementService = inject(ClassAnnouncementService);
  public authService = inject(AuthService);

  canCreateAnnouncement = computed(() => this.authService.hasPermission('ANNOUNCEMENT_CREATE'));
  canUpdateAnnouncement = computed(() => this.authService.hasPermission('ANNOUNCEMENT_UPDATE'));
  canDeleteAnnouncement = computed(() => this.authService.hasPermission('ANNOUNCEMENT_DELETE'));

  canCreateLesson = computed(() => this.authService.hasPermission('LESSON_CREATE'));
  canUpdateLesson = computed(() => this.authService.hasPermission('LESSON_UPDATE'));
  canDeleteLesson = computed(() => this.authService.hasPermission('LESSON_DELETE'));

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
  isLessonManageMode = signal(false);
  isLessonModalOpen = signal(false);
  isEditLessonMode = signal(false);
  editingLessonId = signal<number | null>(null);
  isSavingLesson = signal(false);
  lessonForm!: FormGroup;

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
  isMaterialModalOpen = signal(false);
  isEditMaterialMode = signal(false);
  editingMaterialId = signal<string | number | null>(null);
  isUploading = signal(false);
  selectedFile = signal<File | null>(null);
  selectedTargetLessonId = signal<number | null>(null);
  
  materialForm!: FormGroup;

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

  // --- STATE CHẾ ĐỘ QUẢN LÝ BÀI TẬP ---
  isAssignmentManageMode = signal(false);
  lessonAssignmentManageMap = signal<{ [lessonId: number]: boolean }>({});

  // --- STATE CHẾ ĐỘ QUẢN LÝ TÀI LIỆU HỌC TẬP ---
  isMaterialManageMode = signal(false);
  lessonMaterialManageMap = signal<{ [lessonId: number]: boolean }>({});

  toggleMaterialManageMode() {
    this.isMaterialManageMode.update(val => !val);
  }

  toggleLessonMaterialManageMode(lessonId: number, event?: Event) {
    if (event) event.stopPropagation();
    this.lessonMaterialManageMap.update(map => ({
      ...map,
      [lessonId]: !map[lessonId]
    }));
  }

  toggleAssignmentManageMode() {
    this.isAssignmentManageMode.update(val => !val);
  }

  toggleLessonAssignmentManageMode(lessonId: number, event?: Event) {
    if (event) event.stopPropagation();
    this.lessonAssignmentManageMap.update(map => ({
      ...map,
      [lessonId]: !map[lessonId]
    }));
  }

  navigateToAssignmentDetail(assignmentId: number | string, event?: Event) {
    if (event) event.stopPropagation();
    this.router.navigate(['/teacher/assignments', assignmentId]);
  }

  // --- STATE BÀI TẬP ---
  assignmentForm!: FormGroup;
  isAssignmentModalOpen = signal(false);
  isEditAssignmentMode = signal(false);
  isSubmittingAssignment = signal(false);
  editingAssignmentId = signal<number | null>(null);

  // --- STATE THÔNG BÁO ---
  announcements = signal<any[]>([]);
  isLoadingAnnouncements = signal(false);
  expandedAnnouncementIds = signal<Set<number>>(new Set());
  isAnnouncementEditMode = signal(false);

  isAnnouncementModalOpen = signal(false);
  isSubmittingAnnouncement = signal(false);
  editingAnnouncementId = signal<number | null>(null);
  selectedAttachmentFile = signal<File | null>(null);
  currentAttachmentUrl = signal<string | null>(null);
  currentAttachmentName = signal<string | null>(null);
  isRemovingAttachment = signal(false);
  announcementForm!: FormGroup;
  isSavingAssignment = signal(false);

  // --- STATE MODAL XÓA CHUNG ---
  isDeleteModalOpen = signal(false);
  itemToDelete = signal<string | number | null>(null);
  deleteTarget = signal<'assignment' | 'announcement' | 'lesson'>('assignment');
  isDeleting = signal(false);

  ngOnInit() {
    this.initForms();
    this.route.paramMap.subscribe(params => {
      this.classId.set(params.get('id'));
      if (this.classId()) {
        this.restoreState();
        this.loadClassDetails();
      }
    });
  }

  // --- STATE PERSISTENCE ---
  private saveState() {
    if (!this.classId()) return;
    const state = {
      activeTab: this.activeTab(),
      expandedLessonIds: Array.from(this.expandedLessonIds())
    };
    sessionStorage.setItem(`teacher_class_state_${this.classId()}`, JSON.stringify(state));
  }

  private restoreState() {
    if (!this.classId()) return;
    const saved = sessionStorage.getItem(`teacher_class_state_${this.classId()}`);
    if (saved) {
      try {
        const state = JSON.parse(saved);
        if (state.activeTab) {
          this.activeTab.set(state.activeTab);
        }
        if (state.expandedLessonIds && Array.isArray(state.expandedLessonIds)) {
          this.expandedLessonIds.set(new Set(state.expandedLessonIds));
          // Preload nội dung các bài học đang được mở
          state.expandedLessonIds.forEach((id: number) => {
            this.loadLessonDetails(id);
          });
        }
      } catch (e) {
        console.error('Lỗi khi khôi phục trạng thái:', e);
      }
    }
  }

  private initForms() {
    this.materialForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      materialType: ['DOCUMENT']
    });

    this.lessonForm = this.fb.group({
      name: ['', Validators.required],
      orderNumber: [1, [Validators.required, Validators.min(1)]],
      description: ['']
    });

    this.announcementForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      isPinned: [false]
    });

    this.assignmentForm = this.fb.group({
      lessonId: [null, Validators.required],
      title: ['', Validators.required],
      assignmentType: ['HOMEWORK', Validators.required],
      dueDate: ['', Validators.required],
      timeLimitMinutes: [0, [Validators.min(0)]],
      maxAttempts: [1, [Validators.min(1)]],
      description: [''],
      status: ['PUBLISHED', Validators.required]
    });
  }

  switchTab(tab: 'lessons' | 'students' | 'materials' | 'announcements') {
    this.activeTab.set(tab);
    this.saveState();
    if (tab === 'lessons' && this.lessons().length === 0) {
      this.loadLessons();
    }
    if (tab === 'students') {
      this.loadStudents();
    }
    if (tab === 'materials') {
      this.loadMaterials();
    }
    if (tab === 'announcements') {
      this.loadAnnouncements();
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
        console.error('Lỗi khi tải tài liệu khóa học:', err);
        this.isLoadingMaterials.set(false);
      }
    });
  }

  // --- LOGIC THÔNG BÁO ---
  loadAnnouncements(targetClassId?: string) {
    const id = targetClassId || this.classId();
    if (!id) return;
    this.isLoadingAnnouncements.set(true);
    this.announcementService.getAnnouncementsByClassId(id).subscribe({
      next: (res: any[]) => {
        this.announcements.set(res || []);
        this.isLoadingAnnouncements.set(false);
      },
      error: (err: any) => {
        console.error('Lỗi khi tải thông báo:', err);
        this.isLoadingAnnouncements.set(false);
      }
    });
  }

  toggleAnnouncementExpand(announcementId: number) {
    const current = this.expandedAnnouncementIds();
    if (current.has(announcementId)) {
      current.delete(announcementId);
    } else {
      current.add(announcementId);
    }
    this.expandedAnnouncementIds.set(current);
  }

  toggleAnnouncementEditMode() {
    this.isAnnouncementEditMode.set(!this.isAnnouncementEditMode());
  }

  openCreateAnnouncementModal() {
    if (!this.canCreateAnnouncement()) return;
    this.announcementForm.reset({ isPinned: false });
    this.editingAnnouncementId.set(null);
    this.selectedAttachmentFile.set(null);
    this.isAnnouncementModalOpen.set(true);
  }

  openEditAnnouncementModal(ann: any) {
    if (!this.canUpdateAnnouncement()) return;
    this.editingAnnouncementId.set(ann.id);
    this.announcementForm.patchValue({
      title: ann.title,
      content: ann.content,
      isPinned: ann.isPinned
    });
    this.currentAttachmentUrl.set(ann.attachmentUrl || null);
    if (ann.attachmentUrl) {
      const parts = ann.attachmentUrl.split('/');
      this.currentAttachmentName.set(parts[parts.length - 1]);
    } else {
      this.currentAttachmentName.set(null);
    }
    this.isRemovingAttachment.set(false);
    this.selectedAttachmentFile.set(null);
    this.isAnnouncementModalOpen.set(true);
  }

  closeAnnouncementModal() {
    this.isAnnouncementModalOpen.set(false);
    this.announcementForm.reset();
    this.editingAnnouncementId.set(null);
    this.selectedAttachmentFile.set(null);
    this.currentAttachmentUrl.set(null);
    this.currentAttachmentName.set(null);
    this.isRemovingAttachment.set(false);
  }

  removeCurrentAttachment() {
    this.isRemovingAttachment.set(true);
    this.currentAttachmentUrl.set(null);
    this.currentAttachmentName.set(null);
  }

  onAttachmentFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedAttachmentFile.set(input.files[0]);
    }
  }

  saveAnnouncement() {
    if (this.announcementForm.invalid || !this.classId()) {
      Object.keys(this.announcementForm.controls).forEach(key => {
        this.announcementForm.controls[key].markAsTouched();
      });
      return;
    }

    this.isSubmittingAnnouncement.set(true);
    const formValue = this.announcementForm.value;
    const editingId = this.editingAnnouncementId();
    const file = this.selectedAttachmentFile();

    if (editingId) {
      this.announcementService.updateAnnouncementWithFile(
        editingId,
        formValue.title,
        formValue.content,
        formValue.isPinned,
        this.isRemovingAttachment(),
        file
      ).subscribe({
        next: () => {
          this.toastService.success('Thành công', 'Đã cập nhật thông báo');
          this.loadAnnouncements();
          this.closeAnnouncementModal();
          this.isSubmittingAnnouncement.set(false);
        },
        error: () => {
          this.toastService.error('Lỗi', 'Không thể cập nhật thông báo');
          this.isSubmittingAnnouncement.set(false);
        }
      });
    } else {
      // Thêm mới thông báo
      if (file) {
        this.announcementService.createAnnouncementWithFile(this.classId()!, formValue.title, formValue.content, formValue.isPinned, file).subscribe({
          next: () => {
            this.toastService.success('Thành công', 'Đã tạo thông báo');
            this.loadAnnouncements();
            this.closeAnnouncementModal();
            this.isSubmittingAnnouncement.set(false);
          },
          error: () => {
            this.toastService.error('Lỗi', 'Không thể tạo thông báo');
            this.isSubmittingAnnouncement.set(false);
          }
        });
      } else {
        const payload = {
          classId: this.classId()!,
          title: formValue.title,
          content: formValue.content,
          isPinned: formValue.isPinned
        };
        this.announcementService.createAnnouncement(payload).subscribe({
          next: () => {
            this.toastService.success('Thành công', 'Đã tạo thông báo');
            this.loadAnnouncements();
            this.closeAnnouncementModal();
            this.isSubmittingAnnouncement.set(false);
          },
          error: () => {
            this.toastService.error('Lỗi', 'Không thể tạo thông báo');
            this.isSubmittingAnnouncement.set(false);
          }
        });
      }
    }
  }

  deleteAnnouncement(id: number, event: Event) {
    event.stopPropagation();
    if (!this.canDeleteAnnouncement()) return;
    this.itemToDelete.set(id);
    this.deleteTarget.set('announcement');
    this.isDeleteModalOpen.set(true);
  }

  toggleAnnouncementPin(id: number, currentPinned: boolean, event: Event) {
    event.stopPropagation();
    if (!this.canUpdateAnnouncement()) return;
    this.announcementService.togglePin(id, !currentPinned).subscribe({
      next: () => {
        this.toastService.success('Thành công', !currentPinned ? 'Đã ghim thông báo' : 'Đã bỏ ghim thông báo');
        this.loadAnnouncements();
      },
      error: () => {
        this.toastService.error('Lỗi', 'Không thể thao tác ghim thông báo');
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
    this.saveState();
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

  deleteAssignment(id: string, event: Event) {
    event.stopPropagation();
    this.itemToDelete.set(id);
    this.deleteTarget.set('assignment');
    this.isDeleteModalOpen.set(true);
  }

  // Helper dịch loại bài tập sang Tiếng Việt
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
    this.classService.getClassById(this.classId()!).subscribe({
      next: (res) => { 
        this.classInfo.set(res); 
        this.isLoading.set(false);
        this.loadLessons(res.id);
        this.loadStudents(res.id); 
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

  // -------------------------
  // QUẢN LÝ BÀI HỌC (LESSON)
  // -------------------------
  toggleLessonManageMode() {
    this.isLessonManageMode.set(!this.isLessonManageMode());
  }

  openAddLessonModal() {
    this.isEditLessonMode.set(false);
    this.editingLessonId.set(null);
    this.lessonForm.reset({ orderNumber: this.lessons().length + 1 });
    this.isLessonModalOpen.set(true);
  }

  openEditLessonModal(lesson: any, event: Event) {
    event.stopPropagation();
    this.isEditLessonMode.set(true);
    this.editingLessonId.set(lesson.id);
    this.lessonForm.patchValue({
      name: lesson.name,
      orderNumber: lesson.orderNumber,
      description: lesson.description
    });
    this.isLessonModalOpen.set(true);
  }

  closeLessonModal() {
    this.isLessonModalOpen.set(false);
  }

  saveLesson() {
    if (this.lessonForm.invalid || !this.classId()) return;

    this.isSavingLesson.set(true);
    const payload = {
      ...this.lessonForm.value,
      classId: this.classId()
    };

    if (this.isEditLessonMode() && this.editingLessonId()) {
      this.materialService.updateLesson(this.editingLessonId()!, payload).subscribe({
        next: () => {
          this.toastService.success('Thành công', 'Cập nhật buổi học thành công');
          this.closeLessonModal();
          this.loadLessons(this.classId()!);
          this.isSavingLesson.set(false);
        },
        error: (err) => {
          this.toastService.error('Lỗi', err.error?.message || 'Không thể cập nhật buổi học');
          this.isSavingLesson.set(false);
        }
      });
    } else {
      this.materialService.createLesson(payload).subscribe({
        next: () => {
          this.toastService.success('Thành công', 'Thêm buổi học thành công');
          this.closeLessonModal();
          this.loadLessons(this.classId()!);
          this.isSavingLesson.set(false);
        },
        error: (err) => {
          this.toastService.error('Lỗi', err.error?.message || 'Không thể thêm buổi học');
          this.isSavingLesson.set(false);
        }
      });
    }
  }

  deleteLessonItem(id: number, event: Event) {
    event.stopPropagation();
    this.itemToDelete.set(id);
    this.deleteTarget.set('lesson' as any);
    this.isDeleteModalOpen.set(true);
  }

  // -------------------------
  // QUẢN LÝ TÀI LIỆU
  // -------------------------
  openAddMaterialModal(lessonId?: number, event?: Event) {
    if (event) event.stopPropagation();
    this.isEditMaterialMode.set(false);
    this.editingMaterialId.set(null);
    this.selectedTargetLessonId.set(lessonId || null);
    this.selectedFile.set(null);
    this.materialForm.reset({
      sourceType: 'MINIO',
      materialType: 'DOCUMENT',
      displayOrder: 0,
      status: 'published'
    });
    this.isMaterialModalOpen.set(true);
  }

  openEditMaterialModal(m: any, event: Event, lessonId?: number) {
    event.stopPropagation();
    this.isEditMaterialMode.set(true);
    this.editingMaterialId.set(m.id);
    this.selectedTargetLessonId.set(lessonId || null);
    this.selectedFile.set(null);
    this.materialForm.patchValue({
      title: m.title,
      sourceType: m.sourceType || (m.resourceUrl?.startsWith('http') ? 'EXTERNAL' : 'MINIO'),
      materialType: m.materialType || 'DOCUMENT',
      resourceUrl: m.resourceUrl || '',
      displayOrder: m.displayOrder || 0,
      status: m.status || 'published'
    });
    this.isMaterialModalOpen.set(true);
  }

  closeMaterialModal() {
    this.isMaterialModalOpen.set(false);
    this.isEditMaterialMode.set(false);
    this.editingMaterialId.set(null);
    this.selectedTargetLessonId.set(null);
    this.selectedFile.set(null);
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile.set(file);
      if (!this.materialForm.get('title')?.value) {
        this.materialForm.patchValue({ title: file.name });
      }
    }
  }

  submitMaterialForm() {
    if (this.materialForm.invalid) return;
    
    const formVal = this.materialForm.value;
    const targetLessonId = this.selectedTargetLessonId();

    if (formVal.sourceType === 'MINIO' && !this.isEditMaterialMode() && !this.selectedFile()) {
      this.toastService.error('Chú ý', 'Vui lòng chọn tệp tin cần tải lên!');
      return;
    }

    this.isUploading.set(true);

    if (this.isEditMaterialMode()) {
      const materialId = this.editingMaterialId()!;
      this.materialService.updateMaterial(materialId, formVal, this.selectedFile()).subscribe({
        next: () => {
          this.toastService.success('Thành công', 'Đã cập nhật thông tin tài liệu!');
          this.closeMaterialModal();
          this.isUploading.set(false);
          if (targetLessonId) {
            this.loadLessonDetails(targetLessonId);
          }
          this.loadMaterials();
        },
        error: (err: any) => {
          this.toastService.error('Lỗi', err.error?.message || 'Cập nhật tài liệu thất bại');
          this.isUploading.set(false);
        }
      });
    } else {
      if (formVal.sourceType === 'MINIO') {
        const payload: any = { 
          title: formVal.title,
          materialType: formVal.materialType,
          displayOrder: formVal.displayOrder,
          onlineClassId: this.classId()
        };
        if (targetLessonId) {
          payload.lessonId = targetLessonId;
          payload.materialScope = 'LESSON';
        } else {
          payload.courseId = this.classInfo()?.courseId;
          payload.materialScope = 'COURSE';
        }
        this.materialService.uploadFile(this.selectedFile()!, payload).subscribe({
          next: () => {
            this.toastService.success('Thành công', 'Đã tải lên tài liệu mới!');
            this.closeMaterialModal();
            this.isUploading.set(false);
            if (targetLessonId) {
              this.loadLessonDetails(targetLessonId);
            }
            this.loadMaterials();
          },
          error: (err: any) => {
            this.toastService.error('Lỗi', err.error?.message || 'Tải lên tài liệu thất bại');
            this.isUploading.set(false);
          }
        });
      } else {
        const payload: any = {
          title: formVal.title,
          materialType: formVal.materialType,
          sourceType: 'EXTERNAL',
          resourceUrl: formVal.resourceUrl,
          displayOrder: formVal.displayOrder,
          onlineClassId: this.classId()
        };
        if (targetLessonId) {
          payload.lessonId = targetLessonId;
          payload.materialScope = 'LESSON';
        } else {
          payload.courseId = this.classInfo()?.courseId;
          payload.materialScope = 'COURSE';
        }
        this.materialService.addLink(payload).subscribe({
          next: () => {
            this.toastService.success('Thành công', 'Đã thêm liên kết tài liệu!');
            this.closeMaterialModal();
            this.isUploading.set(false);
            if (targetLessonId) {
              this.loadLessonDetails(targetLessonId);
            }
            this.loadMaterials();
          },
          error: (err: any) => {
            this.toastService.error('Lỗi', err.error?.message || 'Thêm liên kết thất bại');
            this.isUploading.set(false);
          }
        });
      }
    }
  }

  toggleMaterialStatus(m: any, event: Event) {
    event.stopPropagation();
    const newStatus = m.status === 'published' ? 'unpublished' : 'published';
    this.materialService.changeStatus(m.id, newStatus).subscribe({
      next: () => { 
        this.toastService.success('Thành công', 'Đã cập nhật trạng thái tài liệu'); 
        this.loadMaterials(); 
      },
      error: () => {
        this.toastService.error('Lỗi', 'Không thể thay đổi trạng thái');
      }
    });
  }

  deleteMaterial(id: string, event: Event, lessonId?: number) {
    event.stopPropagation();
    if (confirm('Bạn có chắc chắn muốn xóa tài liệu này? Không thể khôi phục sau khi xóa!')) {
      this.materialService.deleteMaterial(id).subscribe({
        next: () => { 
          this.toastService.success('Thành công', 'Đã xóa tài liệu khỏi hệ thống'); 
          if (lessonId) {
            this.loadLessonDetails(lessonId);
          }
          this.loadMaterials(); 
        },
        error: () => {
          this.toastService.error('Lỗi', 'Xóa tài liệu thất bại');
        }
      });
    }
  }

  deleteLessonAssignment(id: string, event: Event, lessonId: number) {
    event.stopPropagation();
    if (confirm('Bạn có chắc chắn muốn xóa bài tập này? Không thể khôi phục sau khi xóa!')) {
      this.assignmentService.deleteAssignment(id).subscribe({
        next: () => {
          this.toastService.success('Thành công', 'Đã xóa bài tập!');
          this.loadLessonDetails(lessonId);
          this.loadAssignments();
        },
        error: (err: any) => {
          this.toastService.error('Lỗi', err.error?.message || 'Xóa bài tập thất bại');
        }
      });
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
      else if (urlWithoutQuery.match(/\.(pdf)$/)) matType = 'DOCUMENT'; // PDF can be previewed in iframe
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
        
        // Extract filename from URL or title
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

  // --- LOGIC BÀI TẬP MODAL ---
  openAddAssignmentModal(lessonId?: number, event?: Event) {
    if (event) event.stopPropagation();
    this.isEditAssignmentMode.set(false);
    this.editingAssignmentId.set(null);
    this.selectedTargetLessonId.set(lessonId || null);
    this.assignmentForm.reset({
      lessonId: lessonId || (this.lessons().length > 0 ? this.lessons()[0].id : null),
      title: '',
      assignmentType: 'HOMEWORK',
      dueDate: this.getDefaultDueDate(),
      timeLimitMinutes: 0,
      maxAttempts: 1,
      description: '',
      status: 'PUBLISHED'
    });
    this.isAssignmentModalOpen.set(true);
  }

  openEditAssignmentModal(ass: any, event?: Event, lessonId?: number) {
    if (event) event.stopPropagation();
    this.isEditAssignmentMode.set(true);
    this.editingAssignmentId.set(ass.id);
    this.selectedTargetLessonId.set(lessonId || ass.lessonId || null);
    this.assignmentForm.patchValue({
      lessonId: ass.lessonId || lessonId || (this.lessons().length > 0 ? this.lessons()[0].id : null),
      title: ass.title,
      assignmentType: ass.assignmentType || 'HOMEWORK',
      dueDate: this.formatToDateTimeLocal(ass.dueDate),
      timeLimitMinutes: ass.timeLimitMinutes || 0,
      maxAttempts: ass.maxAttempts || 1,
      description: ass.description || '',
      status: ass.status || 'PUBLISHED'
    });
    this.isAssignmentModalOpen.set(true);
  }

  closeAssignmentModal() {
    this.isAssignmentModalOpen.set(false);
    this.isEditAssignmentMode.set(false);
    this.editingAssignmentId.set(null);
  }

  private getDefaultDueDate(): string {
    const nextWeek = new Date();
    nextWeek.setDate(nextWeek.getDate() + 7);
    nextWeek.setHours(23, 59, 0, 0);
    return nextWeek.toISOString().slice(0, 16);
  }

  private formatToDateTimeLocal(dateStr: string | null): string {
    if (!dateStr) return this.getDefaultDueDate();
    return dateStr.replace(' ', 'T').substring(0, 16);
  }

  private formatDateTimeForBackend(datetimeLocal: string): string {
    if (!datetimeLocal) return '';
    return datetimeLocal.replace('T', ' ') + ':00';
  }

  submitAssignmentForm() {
    if (this.assignmentForm.invalid) {
      this.assignmentForm.markAllAsTouched();
      return;
    }

    const val = this.assignmentForm.value;
    const payload = {
      ...val,
      lessonId: Number(val.lessonId),
      dueDate: this.formatDateTimeForBackend(val.dueDate)
    };

    this.isSavingAssignment.set(true);

    if (this.isEditAssignmentMode() && this.editingAssignmentId()) {
      this.assignmentService.updateAssignment(this.editingAssignmentId()!, payload).subscribe({
        next: () => {
          this.toastService.success('Thành công', 'Đã cập nhật thông tin bài tập!');
          this.isSavingAssignment.set(false);
          this.closeAssignmentModal();
          this.refreshAssignmentsData(payload.lessonId);
        },
        error: (err: any) => {
          console.error('Lỗi cập nhật bài tập:', err);
          this.toastService.error('Lỗi', err.error?.message || 'Cập nhật bài tập thất bại');
          this.isSavingAssignment.set(false);
        }
      });
    } else {
      this.assignmentService.createAssignment(payload).subscribe({
        next: () => {
          this.toastService.success('Thành công', 'Tạo bài tập mới thành công!');
          this.isSavingAssignment.set(false);
          this.closeAssignmentModal();
          this.refreshAssignmentsData(payload.lessonId);
        },
        error: (err: any) => {
          console.error('Lỗi tạo bài tập:', err);
          this.toastService.error('Lỗi', err.error?.message || 'Tạo bài tập thất bại');
          this.isSavingAssignment.set(false);
        }
      });
    }
  }

  deleteAssignmentItem(id: number | string, event?: Event, lessonId?: number) {
    if (event) event.stopPropagation();
    this.itemToDelete.set(id);
    this.deleteTarget.set('assignment');
    this.isDeleteModalOpen.set(true);
  }

  closeDeleteModal() {
    this.isDeleteModalOpen.set(false);
    this.itemToDelete.set(null);
    this.isDeleting.set(false);
  }

  confirmDelete() {
    const id = this.itemToDelete();
    const target = this.deleteTarget();
    if (!id) return;
    
    this.isDeleting.set(true);
    if (target === 'assignment') {
      this.assignmentService.deleteAssignment(id.toString()).subscribe({
        next: () => {
          this.toastService.success('Thành công', 'Đã xóa bài tập!');
          this.refreshAssignmentsData();
          this.closeDeleteModal();
        },
        error: (err: any) => {
          console.error('Lỗi xóa bài tập:', err);
          this.toastService.error('Lỗi', err.error?.message || 'Không thể xóa bài tập này');
          this.isDeleting.set(false);
        }
      });
    } else if (target === 'announcement') {
      this.announcementService.deleteAnnouncement(id).subscribe({
        next: () => {
          this.toastService.success('Thành công', 'Đã xóa thông báo');
          this.loadAnnouncements();
          this.closeDeleteModal();
        },
        error: () => {
          this.toastService.error('Lỗi', 'Không thể xóa thông báo');
          this.isDeleting.set(false);
        }
      });
    } else if (target === 'lesson') {
      this.materialService.deleteLesson(id).subscribe({
        next: () => {
          this.toastService.success('Thành công', 'Đã xóa bài học');
          this.loadLessons(this.classId()!);
          this.closeDeleteModal();
        },
        error: (err: any) => {
          this.toastService.error('Lỗi', err.error?.message || 'Không thể xóa bài học');
          this.isDeleting.set(false);
        }
      });
    }
  }

  private refreshAssignmentsData(lessonId?: number) {
    if (this.classId()) {
      this.loadAssignments();
    }
    if (lessonId) {
      this.loadLessonDetails(lessonId);
    }
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