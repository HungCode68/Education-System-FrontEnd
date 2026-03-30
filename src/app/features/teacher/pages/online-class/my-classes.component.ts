import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TeacherClassService } from '../../services/online-class.service';

@Component({
  selector: 'app-my-classes',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './my-classes.component.html'
})
export class MyClassesComponent implements OnInit {
  private classService = inject(TeacherClassService);

  classes = signal<any[]>([]);
  isLoading = signal(true);
  searchQuery = signal('');

  // Lọc danh sách lớp học trên Client
  filteredClasses = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();
    if (!query) return this.classes();
    
    return this.classes().filter(c => 
      c.name.toLowerCase().includes(query) || 
      c.subjectName.toLowerCase().includes(query) ||
      c.physicalClassName.toLowerCase().includes(query)
    );
  });

  ngOnInit() {
    this.loadMyClasses();
  }

  private loadMyClasses() {
    this.isLoading.set(true);
    this.classService.getMyClasses().subscribe({
      next: (res) => {
        this.classes.set(res || []);
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error('Lỗi khi tải danh sách lớp học:', err);
        this.isLoading.set(false);
      }
    });
  }

  cardPalettes = [
    // 1. Indigo (Màu gốc)
    { cardBg: 'bg-indigo-50/50', border: 'border-indigo-100', textPrimary: 'text-indigo-900', textSecondary: 'text-indigo-600', badge: 'bg-indigo-100 text-indigo-700 border-indigo-200', button: 'bg-indigo-600 text-white hover:bg-indigo-700' },
    // 2. Emerald (Xanh lá - Trẻ trung)
    { cardBg: 'bg-emerald-50/50', border: 'border-emerald-100', textPrimary: 'text-emerald-900', textSecondary: 'text-emerald-600', badge: 'bg-emerald-100 text-emerald-700 border-emerald-200', button: 'bg-emerald-600 text-white hover:bg-emerald-700' },
    // 3. Sky (Xanh dương - Tin cậy)
    { cardBg: 'bg-sky-50/50', border: 'border-sky-100', textPrimary: 'text-sky-900', textSecondary: 'text-sky-600', badge: 'bg-sky-100 text-sky-700 border-sky-200', button: 'bg-sky-600 text-white hover:bg-sky-700' },
    // 4. Amber (Vàng cam - Ấm áp)
    { cardBg: 'bg-amber-50/50', border: 'border-amber-100', textPrimary: 'text-amber-900', textSecondary: 'text-amber-600', badge: 'bg-amber-100 text-amber-700 border-amber-200', button: 'bg-amber-600 text-white hover:bg-amber-700' },
    // 5. Rose (Hồng đỏ - Cá tính)
    { cardBg: 'bg-rose-50/50', border: 'border-rose-100', textPrimary: 'text-rose-900', textSecondary: 'text-rose-600', badge: 'bg-rose-100 text-rose-700 border-rose-200', button: 'bg-rose-600 text-white hover:bg-rose-700' }
  ];

  // Hàm tính toán lấy màu dựa trên index
  getPalette(index: number) {
    // Dùng phép chia lấy dư để xoay vòng 5 màu
    return this.cardPalettes[index % this.cardPalettes.length];
  }
}