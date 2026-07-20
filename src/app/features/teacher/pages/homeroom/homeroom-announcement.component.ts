import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AnnouncementService } from '../../services/announcement.service';
import { ToastService } from '../../../../core/services/toast.service';

@Component({
  selector: 'app-homeroom-announcement',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './homeroom-announcement.component.html'
})
export class HomeroomAnnouncementComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private announcementService = inject(AnnouncementService);
  private toastService = inject(ToastService);
  private fb = inject(FormBuilder);

  classId = signal<string | null>(null);
  
  // State Danh sách
  announcements = signal<any[]>([]);
  isLoading = signal(true);
  currentPage = signal(1);
  totalPages = signal(1);

  // State Form
  postForm!: FormGroup;
  isSubmitting = signal(false);
  selectedFile = signal<File | null>(null);

  // --- STATE MODAL SỬA ---
  isEditModalOpen = signal(false);
  editingPostId = signal<string | null>(null);
  isUpdating = signal(false);
  
  // Biến tạm để xử lý file đính kèm khi sửa
  currentAttachmentUrl = signal<string | null>(null); 
  currentAttachmentPath = signal<string | null>(null);
  newEditFile = signal<File | null>(null); // File mới user chọn để thay thế

  // --- STATE MODAL XÓA ---
  isDeleteModalOpen = signal(false);
  postToDelete = signal<string | null>(null);
  isDeleting = signal(false);

  ngOnInit() {
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });

    this.isLoading.set(true);

    // Tự động gọi API hỏi hệ thống xem: "Tôi đang chủ nhiệm lớp nào?"
    this.announcementService.getMyHomeroomClass().subscribe({
      next: (res) => {
        // Lấy được thông tin lớp, lưu ID lại
        this.classId.set(res.id); 
        // Có ID rồi thì tiến hành tải danh sách thông báo của lớp đó
        this.loadAnnouncements(); 
      },
      error: (err) => {
        // Nếu API báo lỗi (VD: Chưa được phân công chủ nhiệm)
        this.toastService.warning('Thông báo', err.error?.message || 'Bạn chưa được phân công chủ nhiệm lớp nào.');
        this.isLoading.set(false);
      }
    });
  }

  loadAnnouncements() {
    this.isLoading.set(true);
    this.announcementService.getPhysicalClassAnnouncements(this.classId()!, this.currentPage()).subscribe({
      next: (res) => {
        this.announcements.set(res.content || []);
        this.totalPages.set(res.totalPages || 1);
        this.isLoading.set(false);
      },
      error: () => {
        this.toastService.error('Lỗi', 'Không thể tải danh sách thông báo');
        this.isLoading.set(false);
      }
    });
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      // Giới hạn file 10MB
      if (file.size > 10 * 1024 * 1024) {
        this.toastService.warning('Cảnh báo', 'Vui lòng chọn file có dung lượng dưới 10MB');
        event.target.value = '';
        return;
      }
      this.selectedFile.set(file);
    }
  }

  removeFile() {
    this.selectedFile.set(null);
  }

  submitPost() {
    if (this.postForm.invalid) {
      this.postForm.markAllAsTouched();
      return;
    }

    this.isSubmitting.set(true);
    const dto = {
      title: this.postForm.value.title,
      content: this.postForm.value.content,
      scope: 'physical_class',
      physicalClassId: this.classId()
    };

    this.announcementService.createAnnouncement(dto, this.selectedFile() || undefined).subscribe({
      next: () => {
        this.toastService.success('Thành công', 'Đã đăng thông báo cho lớp!');
        this.postForm.reset();
        this.selectedFile.set(null);
        this.isSubmitting.set(false);
        this.currentPage.set(1); // Quay về trang 1
        this.loadAnnouncements(); // Load lại bảng tin
      },
      error: (err) => {
        this.toastService.error('Lỗi', err.error?.message || 'Không thể đăng thông báo');
        this.isSubmitting.set(false);
      }
    });
  }

  // Mở Modal và lưu lại ID cần xóa
  deletePost(id: string) {
    this.postToDelete.set(id);
    this.isDeleteModalOpen.set(true);
  }

  // Đóng Modal
  closeDeleteModal() {
    this.isDeleteModalOpen.set(false);
    this.postToDelete.set(null);
    this.isDeleting.set(false);
  }

  //  Thực thi gọi API xóa (Khi user bấm "Xác nhận xóa" trên Modal)
  confirmDelete() {
    const id = this.postToDelete();
    if (!id) return;

    this.isDeleting.set(true);
    this.announcementService.deleteAnnouncement(id).subscribe({
      next: () => {
        this.toastService.success('Thành công', 'Đã xóa thông báo');
        this.loadAnnouncements(); // Load lại danh sách
        this.closeDeleteModal(); // Xóa xong thì đóng Modal
      },
      error: (err) => {
        this.toastService.error('Lỗi', err.error?.message || 'Xóa thất bại');
        this.isDeleting.set(false);
      }
    });
  }

  // --- CÁC HÀM XỬ LÝ ---
  openEditModal(post: any) {
    this.editingPostId.set(post.id);
    this.isEditModalOpen.set(true);
    
    this.postForm.patchValue({
      title: post.title,
      content: post.content
    });

    this.currentAttachmentUrl.set(post.attachmentUrl);
    this.currentAttachmentPath.set(post.attachmentPath);
    this.newEditFile.set(null); 
  }

  closeEditModal() {
    this.isEditModalOpen.set(false);
    this.editingPostId.set(null);
    this.postForm.reset();
    this.currentAttachmentUrl.set(null);
    this.currentAttachmentPath.set(null);
    this.newEditFile.set(null);
  }

  onEditFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        this.toastService.warning('Cảnh báo', 'Vui lòng chọn file dưới 10MB');
        event.target.value = '';
        return;
      }
      this.newEditFile.set(file);
      this.currentAttachmentUrl.set(null); 
    }
  }

  removeNewEditFile() {
    this.newEditFile.set(null);
    if (this.editingPostId()) {
        const post = this.announcements().find(a => a.id === this.editingPostId());
        if (post && post.attachmentUrl) {
            this.currentAttachmentUrl.set(post.attachmentUrl);
        }
    }
  }

  submitUpdate() {
    if (this.postForm.invalid || !this.editingPostId()) {
      this.postForm.markAllAsTouched();
      return;
    }

    this.isUpdating.set(true);
    const dto = {
      title: this.postForm.value.title,
      content: this.postForm.value.content,
      scope: 'physical_class', 
      physicalClassId: this.classId()
    };

    this.announcementService.updateAnnouncement(this.editingPostId()!, dto, this.newEditFile() || undefined).subscribe({
      next: () => {
        this.toastService.success('Thành công', 'Đã cập nhật thông báo');
        this.loadAnnouncements(); 
        this.closeEditModal(); 
      },
      error: (err) => {
        this.toastService.error('Lỗi', err.error?.message || 'Không thể cập nhật thông báo');
        this.isUpdating.set(false);
      }
    });
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage.set(page);
      this.loadAnnouncements();
    }
  }
}