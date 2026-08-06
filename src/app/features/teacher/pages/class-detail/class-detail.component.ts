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

  classId = signal<string | null>(null);
  classInfo = signal<any | null>(null);
  isLoading = signal(true);
  
  // --- STATE TABS ---
  activeTab = signal<'lessons' | 'students' | 'materials'>('lessons');

  // --- STATE BÀI HỌC (LESSONS) ---
  lessons = signal<any[]>([]);
  isLoadingLessons = signal(false);
  expandedLessonIds = signal<Set<number>>(new Set());
  lessonMaterialsMap = signal<{ [lessonId: number]: any[] }>({});
  lessonAssignmentsMap = signal<{ [lessonId: number]: any[] }>({});
  isLoadingLessonDetailsMap = signal<{ [lessonId: number]: boolean }>({});

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

  // --- STATE BÀI TẬP MODAL ---
  isAssignmentModalOpen = signal(false);
  isEditAssignmentMode = signal(false);
  editingAssignmentId = signal<number | null>(null);
  isSavingAssignment = signal(false);
  assignmentForm!: FormGroup;

  // --- STATE XÓA BÀI TẬP ---
  isDeleteModalOpen = signal(false);
  assignmentToDelete = signal<string | null>(null);
  isDeleting = signal(false);

  ngOnInit() {
    this.initForms();
    this.route.paramMap.subscribe(params => {
      this.classId.set(params.get('id'));
      if (this.classId()) {
        this.loadClassDetails();
      }
    });
  }

  private initForms() {
    this.materialForm = this.fb.group({
      title: ['', Validators.required],
      sourceType: ['MINIO', Validators.required],
      materialType: ['DOCUMENT', Validators.required],
      resourceUrl: [''],
      displayOrder: [0],
      status: ['published']
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

  switchTab(tab: 'lessons' | 'students' | 'materials') {
    this.activeTab.set(tab);
    if (tab === 'lessons' && this.lessons().length === 0) {
      this.loadLessons();
    }
    if (tab === 'students') {
      this.loadStudents();
    }
    if (tab === 'materials') {
      this.loadMaterials();
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
    this.assignmentToDelete.set(id);
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
    const matType = m.materialType || m.fileType || 'DOCUMENT';

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

  closePreview() {
    this.isPreviewModalOpen.set(false);
    this.previewData.set({ url: null, rawUrl: '', type: '', sourceType: '', title: '' });
    this.isPreviewLoading.set(false);
  }

  // Đóng Modal Xóa
  closeDeleteModal() {
    this.isDeleteModalOpen.set(false);
    this.assignmentToDelete.set(null);
  }

  // Hàm gọi API xóa thực sự khi người dùng ấn nút Xác nhận trên Modal
  confirmDeleteAssignment() {
    const id = this.assignmentToDelete();
    if (!id) return;

    this.isDeleting.set(true);
    this.assignmentService.deleteAssignment(id).subscribe({
      next: () => {
        this.toastService.success('Thành công', 'Đã xóa bài tập khỏi hệ thống!');
        this.isDeleting.set(false);
        this.closeDeleteModal();
        this.loadAssignments(); // Tải lại danh sách
      },
      error: (err) => {
        this.toastService.error('Lỗi', err.error?.message || 'Xóa bài tập thất bại');
        this.isDeleting.set(false);
        this.closeDeleteModal();
      }
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
    if (!confirm('Bạn có chắc chắn muốn xóa bài tập này không?')) return;

    this.assignmentService.deleteAssignment(id.toString()).subscribe({
      next: () => {
        this.toastService.success('Thành công', 'Đã xóa bài tập!');
        this.refreshAssignmentsData(lessonId);
      },
      error: (err: any) => {
        console.error('Lỗi xóa bài tập:', err);
        this.toastService.error('Lỗi', err.error?.message || 'Không thể xóa bài tập này');
      }
    });
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