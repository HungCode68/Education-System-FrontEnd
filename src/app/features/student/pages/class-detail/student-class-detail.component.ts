import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { StudentClassService } from '../../services/student-class.service';
import { ToastService } from '../../../../core/services/toast.service';

@Component({
  selector: 'app-student-class-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './student-class-detail.component.html'
})
export class StudentClassDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private classService = inject(StudentClassService);
  private toastService = inject(ToastService);

  classId = signal<string>('');
  classDetail = signal<any>(null);
  classmates = signal<any[]>([]);
  
  isLoading = signal(true);

  // KHAI BÁO THÊM STATE Ở TRÊN CÙNG
  materials = signal<any[]>([]);
  isOpeningFile = signal<string | null>(null);

  assignments = signal<any[]>([]);
  isAssignmentsLoading = signal(false);
  
  // Quản lý Tab đang mở (mặc định mở tab "Thành viên")
  activeTab = signal('members'); 

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.classId.set(id);
        this.loadClassData();
      }
    });
  }
  

  loadClassData() {
    this.isLoading.set(true);
    
    // Gọi API lấy thông tin Lớp học (Để làm Banner và lấy thông tin GV)
    this.classService.getClassDetail(this.classId()).subscribe({
      next: (detailRes) => {
        this.classDetail.set(detailRes);

        // 2. Gọi API lấy danh sách Sinh viên cùng lớp
        this.classService.getClassStudents(this.classId()).subscribe({
          next: (studentsRes) => {
            this.classmates.set(studentsRes || []);
            this.isLoading.set(false);
          },
          error: () => {
            this.toastService.error('Lỗi', 'Không thể tải danh sách lớp.');
            this.isLoading.set(false);
          }
        });

        // Gọi API lấy danh sách Tài liệu học tập
        this.classService.getClassMaterials(this.classId()).subscribe({
          next: (materialsRes) => {
            this.materials.set(materialsRes || []);
            this.isLoading.set(false);
          },
          error: () => this.isLoading.set(false)
        });
      },
      error: () => {
        this.toastService.error('Lỗi', 'Không thể tải thông tin lớp học.');
        this.isLoading.set(false);
      }
    });
  }

  // Hàm tạo Avatar chữ cái đầu (VD: Nguyễn Văn A -> A)
  getInitials(name: string): string {
    if (!name) return '?';
    const parts = name.trim().split(' ');
    return parts[parts.length - 1].charAt(0).toUpperCase();
  }

  // Hành động khi học sinh click vào tài liệu
  openMaterial(materialId: string) {
    this.isOpeningFile.set(materialId);
    
    this.classService.getMaterialDownloadUrl(materialId).subscribe({
      next: (res) => {
        this.isOpeningFile.set(null);
        if (res && res.url) {
          window.open(res.url, '_blank'); // Mở link tải/xem trong tab mới
        }
      },
      error: (err) => {
        this.isOpeningFile.set(null);
        this.toastService.error('Lỗi', err.error?.message || 'Không thể mở tài liệu này.');
      }
    });
  }

  getFileIcon(fileType: string) {
    switch (fileType) {
      case 'slide': return { icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z', color: 'text-amber-500', bg: 'bg-amber-100' };
      case 'video': return { icon: 'M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z M21 12a9 9 0 11-18 0 9 9 0 0118 0z', color: 'text-rose-500', bg: 'bg-rose-100' };
      case 'document': return { icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', color: 'text-blue-500', bg: 'bg-blue-100' };
      case 'link': return { icon: 'M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1', color: 'text-emerald-500', bg: 'bg-emerald-100' };
      default: return { icon: 'M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z', color: 'text-gray-500', bg: 'bg-gray-100' };
    }
  }

  formatBytes(bytes: number, decimals = 2) {
    if (!bytes || bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

  changeTab(tabName: string) {
    this.activeTab.set(tabName);
    
    // Nếu bấm sang tab Bài tập thì mới gọi API (Lazy load cho nhẹ)
    if (tabName === 'assignments' && this.assignments().length === 0) {
      this.loadAssignments();
    }
  }

  // THÊM HÀM LOAD BÀI TẬP
  loadAssignments() {
    this.isAssignmentsLoading.set(true);
    this.classService.getClassAssignments(this.classId()).subscribe({
      next: (res) => {
        // Chỉ lấy những bài tập có trạng thái là 'published' (Bỏ qua 'unpublished' và 'draft')
        const allAssignments = res.content || [];
        const publishedOnly = allAssignments.filter((item: any) => 
          item.status && item.status.toString().toLowerCase() === 'published'
        );

        // Gán mảng đã lọc vào State để hiển thị ra UI
        this.assignments.set(publishedOnly); 
        this.isAssignmentsLoading.set(false);
      },
      error: () => {
        this.toastService.error('Lỗi', 'Không thể tải danh sách bài tập.');
        this.isAssignmentsLoading.set(false);
      }
    });
  }

  // HÀM TIỆN ÍCH CHO UI BÀI TẬP
  getAssignmentTypeUI(type: string) {
    switch (type) {
      case 'multiple_choice': return { label: 'Trắc nghiệm', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4', bg: 'bg-blue-100', text: 'text-blue-700' };
      case 'essay': return { label: 'Tự luận', icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z', bg: 'bg-amber-100', text: 'text-amber-700' };
      case 'file_upload': return { label: 'Nộp File', icon: 'M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12', bg: 'bg-emerald-100', text: 'text-emerald-700' };
      case 'mixed': return { label: 'Hỗn hợp', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10', bg: 'bg-purple-100', text: 'text-purple-700' };
      default: return { label: 'Khác', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', bg: 'bg-gray-100', text: 'text-gray-700' };
    }
  }

  // Hàm kiểm tra trạng thái quá hạn
  isOverdue(dueTime: string): boolean {
    if (!dueTime) return false;
    return new Date(dueTime).getTime() < new Date().getTime();
  }
}