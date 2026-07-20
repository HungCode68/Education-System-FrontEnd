import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { StudentClassService } from '../../services/student-class.service';
import { ToastService } from '../../../../core/services/toast.service';

@Component({
  selector: 'app-student-my-classes',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './student-my-classes.component.html'
})
export class StudentMyClassesComponent implements OnInit {
  private classService = inject(StudentClassService);
  private toastService = inject(ToastService); // Bổ sung ToastService để hiện thông báo lỗi

  classes = signal<any[]>([]);
  isLoading = signal(true);
  searchQuery = signal('');

  // BẢNG MÀU CURATED (TUYỂN CHỌN) - CHO CARD LỚP HỌC
  cardPalettes = [
    { cardBg: 'bg-indigo-50/50', border: 'border-indigo-100', textPrimary: 'text-indigo-900', textSecondary: 'text-indigo-600', badge: 'bg-indigo-100 text-indigo-700 border-indigo-200', button: 'bg-indigo-600 text-white hover:bg-indigo-700' },
    { cardBg: 'bg-emerald-50/50', border: 'border-emerald-100', textPrimary: 'text-emerald-900', textSecondary: 'text-emerald-600', badge: 'bg-emerald-100 text-emerald-700 border-emerald-200', button: 'bg-emerald-600 text-white hover:bg-emerald-700' },
    { cardBg: 'bg-sky-50/50', border: 'border-sky-100', textPrimary: 'text-sky-900', textSecondary: 'text-sky-600', badge: 'bg-sky-100 text-sky-700 border-sky-200', button: 'bg-sky-600 text-white hover:bg-sky-700' },
    { cardBg: 'bg-amber-50/50', border: 'border-amber-100', textPrimary: 'text-amber-900', textSecondary: 'text-amber-600', badge: 'bg-amber-100 text-amber-700 border-amber-200', button: 'bg-amber-600 text-white hover:bg-amber-700' },
    { cardBg: 'bg-rose-50/50', border: 'border-rose-100', textPrimary: 'text-rose-900', textSecondary: 'text-rose-600', badge: 'bg-rose-100 text-rose-700 border-rose-200', button: 'bg-rose-600 text-white hover:bg-rose-700' }
  ];

  // Lọc danh sách lớp học trực tiếp trên Client
  filteredClasses = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();
    if (!query) return this.classes();
    
    return this.classes().filter(c => 
      (c.onlineClassName && c.onlineClassName.toLowerCase().includes(query)) || 
      (c.subjectName && c.subjectName.toLowerCase().includes(query)) ||
      (c.teacherName && c.teacherName.toLowerCase().includes(query)) ||
      (c.physicalClassName && c.physicalClassName.toLowerCase().includes(query)) // Bổ sung tìm theo Lớp gốc (VD: 10A1)
    );
  });

  ngOnInit() {
    this.loadMyClasses();
  }

  private loadMyClasses() {
    this.isLoading.set(true);
    this.classService.getMyClasses().subscribe({
      next: (res) => {
        // Gán trực tiếp data từ API trả về (API trả về mảng List<OnlineClassStudentDto>)
        this.classes.set(res || []);
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error('Lỗi khi tải danh sách lớp học:', err);
        // Hiển thị thông báo lỗi chuyên nghiệp
        this.toastService.error('Lỗi', 'Không thể tải danh sách lớp học của bạn. Vui lòng thử lại sau.');
        this.classes.set([]);
        this.isLoading.set(false);
      }
    });
  }

  // Hàm lấy màu theo vị trí Index
  getPalette(index: number) {
    return this.cardPalettes[index % this.cardPalettes.length];
  }
}