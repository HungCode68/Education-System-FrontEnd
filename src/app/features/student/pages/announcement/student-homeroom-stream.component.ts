import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { StudentAnnouncementService } from '../../services/student-announcement.service';
import { ToastService } from '../../../../core/services/toast.service';

@Component({
  selector: 'app-student-homeroom-stream',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './student-homeroom-stream.component.html'
})
export class StudentHomeroomStreamComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private announcementService = inject(StudentAnnouncementService);
  private toastService = inject(ToastService);

  classId = signal<string>('');
  className = signal<string>('Lớp Chủ Nhiệm'); // Tên lớp (lấy từ thông báo đầu tiên)
  
  announcements = signal<any[]>([]);
  isLoading = signal(true);
  currentPage = signal(1);
  totalPages = signal(1);

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      
      // KIỂM TRA CHẶT CHẼ: Đảm bảo có ID và ID không phải là chuỗi 'null'
      if (id && id !== 'null' && id !== 'undefined') {
        this.classId.set(id);
        this.loadAnnouncements(1); // Gọi API lấy trang đầu tiên
      } else {
        this.isLoading.set(false);
        this.toastService.warning('Chưa có lớp', 'Bạn chưa được xếp vào lớp chủ nhiệm nào.');
      }
    });
  }

  loadAnnouncements(page: number = 1) {
    this.isLoading.set(true);
    // Mặc định lấy 10 thông báo mỗi trang, Backend đã hỗ trợ phân trang
    this.announcementService.getHomeroomAnnouncements(this.classId(), page).subscribe({
      next: (res) => {
        this.announcements.set(res.content || []);
        this.currentPage.set(res.number + 1);
        this.totalPages.set(res.totalPages);
        
        // Trích xuất tên lớp từ thông báo đầu tiên để làm Banner
        if (res.content && res.content.length > 0) {
           this.className.set(res.content[0].physicalClassName);
        }
        
        this.isLoading.set(false);
        this.announcementService.markAsSeen(this.classId());
      },
      error: () => {
        this.toastService.error('Lỗi', 'Không thể tải bảng tin lớp học.');
        this.isLoading.set(false);
      }
    });
  }

  // Chuyển trang (Cuộn mượt mà lên đầu trang khi bấm Next/Prev)
  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages()) {
      this.loadAnnouncements(page);
      window.scrollTo({ top: 0, behavior: 'smooth' }); 
    }
  }

  // Tạo Avatar chữ cái đầu từ tên Giáo viên
  getInitials(name: string): string {
    if (!name) return 'GV';
    const parts = name.trim().split(' ');
    return parts[parts.length - 1].charAt(0).toUpperCase();
  }
}