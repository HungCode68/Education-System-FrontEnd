import { Component, OnInit, inject, signal, computed, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { StudentClassService, Enrollment } from '../../services/student-class.service';
import { ToastService } from '../../../../core/services/toast.service';

interface StudentClassView extends Enrollment {
  subjectName?: string;
  onlineClassName?: string;
  physicalClassName?: string;
  teacherName?: string;
  onlineClassId?: string | number;
}

@Component({
  selector: 'app-student-my-classes',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './student-my-classes.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StudentMyClassesComponent implements OnInit {
  private classService = inject(StudentClassService);
  private toastService = inject(ToastService);

  classes = signal<StudentClassView[]>([]);
  isLoading = signal(true);
  searchQuery = signal('');

  cardPalettes = [
    { cardBg: 'bg-indigo-50/50', border: 'border-indigo-100', textPrimary: 'text-indigo-900', textSecondary: 'text-indigo-600', badge: 'bg-indigo-100 text-indigo-700 border-indigo-200', button: 'bg-indigo-600 text-white hover:bg-indigo-700' },
    { cardBg: 'bg-emerald-50/50', border: 'border-emerald-100', textPrimary: 'text-emerald-900', textSecondary: 'text-emerald-600', badge: 'bg-emerald-100 text-emerald-700 border-emerald-200', button: 'bg-emerald-600 text-white hover:bg-emerald-700' },
    { cardBg: 'bg-sky-50/50', border: 'border-sky-100', textPrimary: 'text-sky-900', textSecondary: 'text-sky-600', badge: 'bg-sky-100 text-sky-700 border-sky-200', button: 'bg-sky-600 text-white hover:bg-sky-700' },
    { cardBg: 'bg-amber-50/50', border: 'border-amber-100', textPrimary: 'text-amber-900', textSecondary: 'text-amber-600', badge: 'bg-amber-100 text-amber-700 border-amber-200', button: 'bg-amber-600 text-white hover:bg-amber-700' },
    { cardBg: 'bg-rose-50/50', border: 'border-rose-100', textPrimary: 'text-rose-900', textSecondary: 'text-rose-600', badge: 'bg-rose-100 text-rose-700 border-rose-200', button: 'bg-rose-600 text-white hover:bg-rose-700' }
  ];

  filteredClasses = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();
    if (!query) return this.classes();
    
    return this.classes().filter(c => 
      (c.onlineClassName && c.onlineClassName.toLowerCase().includes(query)) || 
      (c.subjectName && c.subjectName.toLowerCase().includes(query)) ||
      (c.teacherName && c.teacherName.toLowerCase().includes(query)) ||
      (c.physicalClassName && c.physicalClassName.toLowerCase().includes(query)) ||
      (c.className && c.className.toLowerCase().includes(query))
    );
  });

  ngOnInit() {
    this.loadMyClasses();
  }

  private loadMyClasses() {
    this.isLoading.set(true);
    this.classService.getMyClasses().subscribe({
      next: (res) => {
        this.classes.set((res || []).map(e => ({
          ...e,
          subjectName: e.className,
          onlineClassName: e.className,
          physicalClassName: e.className,
          teacherName: 'Chưa cập nhật',
          onlineClassId: e.classId
        })) as StudentClassView[]);
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error('Lỗi khi tải danh sách lớp học:', err);
        this.toastService.error('Lỗi', 'Không thể tải danh sách lớp học của bạn. Vui lòng thử lại sau.');
        this.classes.set([]);
        this.isLoading.set(false);
      }
    });
  }

  getPalette(index: number) {
    return this.cardPalettes[index % this.cardPalettes.length];
  }
}
