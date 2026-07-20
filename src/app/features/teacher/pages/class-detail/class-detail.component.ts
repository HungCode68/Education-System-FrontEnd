import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TeacherClassService } from '../../services/online-class.service';
import { LearningMaterialService } from '../../services/learning-material.service';
import { ToastService } from '../../../../core/services/toast.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { AssignmentService } from '../../services/assignment.service';

@Component({
  selector: 'app-class-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './class-detail.component.html'
})
export class ClassDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private classService = inject(TeacherClassService);
  private materialService = inject(LearningMaterialService);
  private fb = inject(FormBuilder);
  private toastService = inject(ToastService);
  private sanitizer = inject(DomSanitizer);
  private assignmentService = inject(AssignmentService);

  classId = signal<string | null>(null);
  classInfo = signal<any | null>(null);
  isLoading = signal(true);
  
  // --- STATE TABS ---
  activeTab = signal<'students' | 'materials' | 'assignments'>('students');

  // --- STATE HỌC SINH ---
  students = signal<any[]>([]);
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
  isUploadModalOpen = signal(false);
  isLinkModalOpen = signal(false);
  isUploading = signal(false);
  selectedFile = signal<File | null>(null);
  
  uploadForm!: FormGroup;
  linkForm!: FormGroup;

  // --- STATE PREVIEW TÀI LIỆU ---
  isPreviewModalOpen = signal(false);
  isPreviewLoading = signal(false);
  previewData = signal<{ url: SafeResourceUrl | null, type: string, title: string }>({ url: null, type: '', title: '' });

  // --- STATE BÀI TẬP ---
  assignments = signal<any[]>([]);
  isLoadingAssignments = signal(false);
  assignmentPage = signal(0);
  assignmentTotalPages = signal(1);

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
    this.uploadForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      fileType: ['document', Validators.required],
      status: ['published', Validators.required]
    });

    this.linkForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      filePath: ['', [Validators.required, Validators.pattern('https?:\\/\\/.+')]], // Bắt buộc là link URL hợp lệ
      status: ['published', Validators.required]
    });
  }

  switchTab(tab: 'students' | 'materials' | 'assignments') {
    this.activeTab.set(tab);
    if (tab === 'materials' && this.materials().length === 0) {
      this.loadMaterials();
    }
    if (tab === 'assignments' && this.assignments().length === 0) {
      this.loadAssignments();
    }
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
        this.loadStudents(res.id); 
      },
      error: (err) => {
        console.error('Lỗi khi tải thông tin lớp:', err);
        this.isLoading.set(false);
      }
    });
  }

  private loadStudents(id: string) {
    this.classService.getStudentsByClass(id, 'active').subscribe({
      next: (res) => {
        this.students.set(res || []);
        // RẤT QUAN TRỌNG: Tắt loading khi đã tải xong học sinh
        this.isLoading.set(false); 
      },
      error: (err) => {
        console.error('Lỗi khi tải danh sách học sinh:', err);
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

  // --- LOGIC TÀI LIỆU ---
  loadMaterials() {
    this.isLoadingMaterials.set(true);
    this.materialService.getMaterialsForTeacher(this.classId()!).subscribe({
      next: (res) => { 
        this.materials.set(res || []); 
        this.isLoadingMaterials.set(false); 
      },
      error: (err) => {
        console.error('Lỗi khi tải tài liệu:', err);
        this.isLoadingMaterials.set(false);
      }
    });
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile.set(file);
    }
  }

  submitUpload() {
    if (this.uploadForm.invalid || !this.selectedFile()) return;
    this.isUploading.set(true);
    
    const payload = { ...this.uploadForm.value, onlineClassId: this.classId() };
    this.materialService.uploadFile(this.selectedFile()!, payload).subscribe({
      next: () => {
        this.toastService.success('Thành công', 'Đã tải lên tài liệu mới!');
        this.isUploadModalOpen.set(false);
        this.selectedFile.set(null);
        this.uploadForm.reset({ fileType: 'document', status: 'published' });
        this.isUploading.set(false);
        this.loadMaterials(); // Load lại list tài liệu
      },
      error: (err) => { 
        this.toastService.error('Lỗi', err.error?.message || 'Tải lên tài liệu thất bại'); 
        this.isUploading.set(false); 
      }
    });
  }

  submitLink() {
    if (this.linkForm.invalid) return;
    this.isUploading.set(true);
    
    const payload = { ...this.linkForm.value, onlineClassId: this.classId() };
    
    this.materialService.addLink(payload).subscribe({
      next: () => {
        this.toastService.success('Thành công', 'Đã thêm đường dẫn liên kết!');
        this.isLinkModalOpen.set(false);
        this.linkForm.reset({ status: 'published' });
        this.isUploading.set(false);
        this.loadMaterials(); // Load lại list tài liệu
      },
      error: (err) => { 
        this.toastService.error('Lỗi', err.error?.message || 'Thêm liên kết thất bại'); 
        this.isUploading.set(false); 
      }
    });
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

  deleteMaterial(id: string, event: Event) {
    event.stopPropagation();
    if (confirm('Bạn có chắc chắn muốn xóa tài liệu này? Không thể khôi phục sau khi xóa!')) {
      this.materialService.deleteMaterial(id).subscribe({
        next: () => { 
          this.toastService.success('Thành công', 'Đã xóa tài liệu khỏi hệ thống'); 
          this.loadMaterials(); 
        },
        error: () => {
          this.toastService.error('Lỗi', 'Xóa tài liệu thất bại');
        }
      });
    }
  }

  downloadMaterial(m: any, event: Event) {
    event.stopPropagation();
    if (m.fileType === 'link') {
      window.open(m.filePath, '_blank');
    } else {
      this.materialService.getDownloadUrl(m.id).subscribe({
        next: (res) => {
           if (res.url) window.open(res.url, '_blank');
        },
        error: () => this.toastService.error('Lỗi bảo mật', 'Không thể lấy đường dẫn tải file (MinIO)')
      });
    }
  }

  // --- LOGIC XEM TRƯỚC (PREVIEW) ---
  openPreview(m: any) {
    this.previewData.set({ url: null, type: m.fileType, title: m.title });
    this.isPreviewModalOpen.set(true);

    if (m.fileType === 'link') {
      // Nếu là link youtube, convert sang link nhúng (embed) để xem trực tiếp
      let url = m.filePath;
      if (url.includes('youtube.com/watch?v=')) {
        url = url.replace('watch?v=', 'embed/');
      } else if (url.includes('youtu.be/')) {
        url = url.replace('youtu.be/', 'youtube.com/embed/');
      }
      this.previewData.set({ url: this.sanitizer.bypassSecurityTrustResourceUrl(url), type: 'link', title: m.title });
    } else {
      this.isPreviewLoading.set(true);
      // Gọi API lấy link MinIO có hạn 2h
      this.materialService.getDownloadUrl(m.id).subscribe({
        next: (res) => {
          this.previewData.set({ url: this.sanitizer.bypassSecurityTrustResourceUrl(res.url), type: m.fileType, title: m.title });
          this.isPreviewLoading.set(false);
        },
        error: () => {
          this.toastService.error('Lỗi', 'Không thể tải dữ liệu xem trước');
          this.closePreview();
        }
      });
    }
  }

  closePreview() {
    this.isPreviewModalOpen.set(false);
    this.previewData.set({ url: null, type: '', title: '' });
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