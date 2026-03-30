import { Component, OnInit, inject, signal, DestroyRef, computed } from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { PhysicalClassService } from '../../services/physical-class.service';
import { SchoolYearService } from '../../services/school-year.service';
import { GradeService } from '../../services/grade.service';
import { ToastService } from '../../../../core/services/toast.service';
import { PhysicalClass } from '../../models/physical-class.model';
import { SchoolYear } from '../../models/school-year.model';
import { Grade } from '../../models/grade.model';
import { RouterModule } from '@angular/router';
import { ClassStudentService } from '../../services/class-student.service';
import { TeacherService } from '../../services/teacher.service';


@Component({
  selector: 'app-physical-class',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './physical-class.component.html'
})
export class PhysicalClassComponent implements OnInit {
  private classService = inject(PhysicalClassService);
  private schoolYearService = inject(SchoolYearService);
  private gradeService = inject(GradeService);
  private toastService = inject(ToastService);
  private fb = inject(FormBuilder);
  private destroyRef = inject(DestroyRef);
  private classStudentService = inject(ClassStudentService);
  private teacherService = inject(TeacherService);

  // --- DỮ LIỆU DROPDOWN ---
  schoolYears = signal<SchoolYear[]>([]);
  activeGrades = signal<Grade[]>([]);
  grades = signal<any[]>([]);
  teachers = signal<any[]>([]); 

  // --- STATE DANH SÁCH & PHÂN TRANG ---
  classes = signal<PhysicalClass[]>([]);
  totalElements = signal(0);
  currentPage = signal(1);
  pageSize = signal(10);
  isLoading = signal(false);

  totalPages = computed(() => Math.ceil(this.totalElements() / this.pageSize()));
  startIndex = computed(() => this.totalElements() === 0 ? 0 : (this.currentPage() - 1) * this.pageSize() + 1);
  endIndex = computed(() => Math.min(this.currentPage() * this.pageSize(), this.totalElements()));

  // --- STATE BỘ LỌC TÌM KIẾM ---
  searchControl = new FormControl('');
  filterYearControl = new FormControl('');
  filterGradeControl = new FormControl('');

  // --- STATE MODAL ---
  isModalOpen = signal(false);
  isEditing = signal(false);
  currentId = signal<string | null>(null);
  classForm!: FormGroup;

  isDeleteModalOpen = signal(false);
  idToDelete = signal<string | null>(null);

// --- STATE MODAL LÊN LỚP ---
  isPromoteModalOpen = signal(false);
  promoteForm!: FormGroup;

  // --- STATE Ô CHỌN GV CÓ TÌM KIẾM ---
  isTeacherDropdownOpen = signal(false); // Trạng thái đóng/mở dropdown custom
  teacherSearchControl = new FormControl(''); // FormControl cho ô input tìm kiếm
  selectedTeacherDisplay = signal('');
  teacherSearchTerm = toSignal(this.teacherSearchControl.valueChanges, { initialValue: '' });

  filteredTeachers = computed(() => {
    // SỬ DỤNG SIGNAL teacherSearchTerm()
    const search = this.teacherSearchTerm()?.trim().toLowerCase() || '';
    const allTeachers = this.teachers();

    if (!search) return allTeachers; // Nếu ko gõ gì, trả về tất cả

    // Lọc theo cả Mã GV và Họ tên cho tiện lợi
    return allTeachers.filter(t =>
      t.teacherCode?.toLowerCase().includes(search) ||
      t.fullName?.toLowerCase().includes(search)
    );
  });

  ngOnInit() {
    this.initForm();
    this.loadDropdownData();
    this.setupFilters();
    this.loadData();
  }

  private initForm() {
    this.classForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(100)]],
      roomNumber: ['', Validators.maxLength(50)],
      maxStudents: [40, [Validators.required, Validators.min(1)]], // Mặc định 40 hs/lớp
      schoolYearId: ['', Validators.required],
      gradeId: ['', Validators.required],
      homeroomTeacherId: [''], // Có thể null
      status: ['active']
    });
    this.promoteForm = this.fb.group({
      oldClassId: ['', Validators.required],
      newClassId: ['', Validators.required]
    });
  }

  private loadDropdownData() {
    this.schoolYearService.getAll(1, 100).subscribe(res => {
      this.schoolYears.set(res.content || (res as any).data || []);
      // Tự động set filter bộ lọc năm học thành năm học mới nhất (hoạt động) nếu muốn
    });
    this.teacherService.getAll(undefined, 'working', undefined, 0, 1000).subscribe({
      next: (res) => {
        // Backend tra về PageResponse nên lấy field content
        this.teachers.set(res.content || []);
      },
      error: (err) => console.error('Lỗi tải danh sách GV', err)
    });
    this.gradeService.getAllActive().subscribe(res => this.activeGrades.set(res));
  }

  private setupFilters() {
    this.searchControl.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(() => { this.currentPage.set(1); this.loadData(); });

    this.filterYearControl.valueChanges.pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => { this.currentPage.set(1); this.loadData(); });

    this.filterGradeControl.valueChanges.pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => { this.currentPage.set(1); this.loadData(); });
  }

  loadData() {
    this.isLoading.set(true);
    const keyword = this.searchControl.value || '';
    const yearId = this.filterYearControl.value || '';
    const gradeId = this.filterGradeControl.value || '';

    this.classService.search(this.currentPage(), this.pageSize(), yearId, gradeId, keyword).subscribe({
      next: (res) => {
        this.classes.set(res.content || (res as any).data || []);
        this.totalElements.set(res.totalElements || 0);
        this.isLoading.set(false);
      },
      error: () => this.isLoading.set(false)
    });
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage.set(page);
      this.loadData();
    }
  }
  
  // --- HÀM XỬ LÝ DROPDOWN GV CUSTOM ---
  toggleTeacherDropdown() {
    this.isTeacherDropdownOpen.update(v => !v);
    if (this.isTeacherDropdownOpen()) {
      this.teacherSearchControl.setValue(''); // Reset ô tìm kiếm khi mở
    }
  }

  // Khi chọn 1 giáo viên từ danh sách (truyền null nếu muốn gỡ phân công)
  selectTeacher(teacher: any | null) {
    if (!teacher) {
      this.classForm.get('homeroomTeacherId')?.setValue('');
      this.selectedTeacherDisplay.set('');
    } else {
      this.classForm.get('homeroomTeacherId')?.setValue(teacher.id);
      this.selectedTeacherDisplay.set(`${teacher.teacherCode} - ${teacher.fullName}`);
    }
    this.isTeacherDropdownOpen.set(false);
  }

  // --- XỬ LÝ MODAL THÊM/SỬA ---
  openModal(cls?: PhysicalClass) {
    if (cls) {
      this.isEditing.set(true);
      this.currentId.set(cls.id);
      this.classForm.patchValue({
        name: cls.name,
        roomNumber: cls.roomNumber,
        maxStudents: cls.maxStudents,
        schoolYearId: cls.schoolYearId,
        gradeId: cls.gradeId,
        homeroomTeacherId: cls.homeroomTeacherId || '',
        status: cls.status
      });
      // Khóa Năm học và Khối khi cập nhật theo logic Backend
      this.classForm.get('schoolYearId')?.disable();
      this.classForm.get('gradeId')?.disable();

      // Cập nhật text hiển thị GV khi Sửa lớp
      const teacher = this.teachers().find(t => t.id === cls.homeroomTeacherId);
      if(teacher) {
         this.selectedTeacherDisplay.set(`${teacher.teacherCode} - ${teacher.fullName}`);
      } else {
         this.selectedTeacherDisplay.set('');
      }

    } else {
      this.isEditing.set(false);
      this.currentId.set(null);
      this.classForm.reset({ maxStudents: 40, status: 'active', schoolYearId: this.filterYearControl.value, gradeId: this.filterGradeControl.value });
      this.classForm.get('schoolYearId')?.enable();
      this.classForm.get('gradeId')?.enable();
      
      // Reset text hiển thị GV khi Tạo mới lớp
      this.selectedTeacherDisplay.set(''); 
    }
    this.isModalOpen.set(true);
  }

  closeModal() {
    this.isModalOpen.set(false);
    this.classForm.reset({ maxStudents: 40, status: 'active' });
    this.classForm.get('schoolYearId')?.enable();
    this.classForm.get('gradeId')?.enable();
    this.isEditing.set(false);
    this.currentId.set(null);
  }

  onSubmit() {
    if (this.classForm.invalid) return;

    this.isLoading.set(true);
    const data = this.classForm.getRawValue(); // Lấy cả giá trị bị disable
    
    // Nếu homeroomTeacherId rỗng thì gửi null lên backend
    if (!data.homeroomTeacherId) {
      data.homeroomTeacherId = null;
    }

    if (this.isEditing() && this.currentId()) {
      this.classService.update(this.currentId()!, data).subscribe({
        next: () => { 
          this.loadData(); 
          this.closeModal(); 
          this.toastService.success('Thành công', 'Cập nhật thông tin lớp học thành công!');
        },
        error: (err) => { 
          this.isLoading.set(false);
          this.toastService.error('Thất bại', err.error?.message || 'Có lỗi khi cập nhật lớp học!');
        }
      });
    } else {
      this.classService.create(data).subscribe({
        next: () => { 
          this.loadData(); 
          this.closeModal(); 
          this.toastService.success('Thành công', 'Tạo lớp học mới thành công!');
        },
        error: (err) => { 
          this.isLoading.set(false);
          this.toastService.error('Thất bại', err.error?.message || 'Có lỗi khi tạo lớp học!');
        }
      });
    }
  }

  // --- XỬ LÝ MODAL XÓA ---
  onDelete(id: string) {
    this.idToDelete.set(id);
    this.isDeleteModalOpen.set(true);
  }

  closeDeleteModal() {
    this.isDeleteModalOpen.set(false);
    this.idToDelete.set(null);
  }

  confirmDelete() {
    const id = this.idToDelete();
    if (id) {
      this.isLoading.set(true);
      this.classService.delete(id).subscribe({
        next: () => { 
          this.loadData(); 
          this.closeDeleteModal(); 
          this.toastService.success('Đã xóa', 'Xóa lớp học thành công!');
        },
        error: (err) => { 
          this.isLoading.set(false); 
          this.closeDeleteModal(); 
          this.toastService.error('Không thể xóa', err.error?.message || 'Lớp học này không thể xóa!');
        }
      });
    }
  }

  // --- XỬ LÝ MODAL LÊN LỚP ---
  openPromoteModal() {
    this.promoteForm.reset({ oldClassId: '', newClassId: '' });
    this.isPromoteModalOpen.set(true);
  }

  closePromoteModal() {
    this.isPromoteModalOpen.set(false);
  }

  onSubmitPromote() {
    if (this.promoteForm.invalid) return;
    
    const { oldClassId, newClassId } = this.promoteForm.value;
    if (oldClassId === newClassId) {
      this.toastService.warning('Cảnh báo', 'Lớp cũ và lớp mới không được trùng nhau!');
      return;
    }

    this.isLoading.set(true);
    this.classStudentService.promote(oldClassId, newClassId).subscribe({
      next: (res) => {
        this.isLoading.set(false);
        this.closePromoteModal();
        this.toastService.success('Thành công', 'Đã chuyển học sinh lên lớp mới!');
        this.loadData();
      },
      error: (err) => {
        this.isLoading.set(false);
        this.toastService.error('Thất bại', err.error?.message || 'Có lỗi khi lên lớp!');
      }
    });
  }

}