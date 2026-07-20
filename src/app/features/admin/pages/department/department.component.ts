import { Component, OnInit, inject, signal, computed, DestroyRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { DepartmentService } from '../../services/department.service';
import { ToastService } from '../../../../core/services/toast.service';
import { Department } from '../../models/department.model';
import { TeacherService } from '../../services/teacher.service';
import { Teacher } from '../../models/teacher.model';

@Component({
  selector: 'app-department',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './department.component.html'
})
export class DepartmentComponent implements OnInit {
  private departmentService = inject(DepartmentService);
  private toastService = inject(ToastService);
  private fb = inject(FormBuilder);
  private destroyRef = inject(DestroyRef);
  private teacherService = inject(TeacherService);

  // --- STATE DANH SÁCH ---
  departments = signal<Department[]>([]);
  totalElements = signal(0);
  currentPage = signal(1); 
  pageSize = signal(10);
  isLoading = signal(false);

  totalPages = computed(() => Math.ceil(this.totalElements() / this.pageSize()));
  startIndex = computed(() => this.totalElements() === 0 ? 0 : (this.currentPage() - 1) * this.pageSize() + 1);
  endIndex = computed(() => Math.min(this.currentPage() * this.pageSize(), this.totalElements()));

  // --- STATE BỘ LỌC ---
  searchControl = new FormControl('');
  typeFilterControl = new FormControl('');
  statusFilterControl = new FormControl(''); // Chuỗi 'true', 'false', hoặc ''

  // --- STATE MODAL ---
  isModalOpen = signal(false);
  isEditing = signal(false);
  currentId = signal<string | null>(null);
  departmentForm!: FormGroup;

  isDeleteModalOpen = signal(false);
  idToDelete = signal<string | null>(null);

  // --- STATE MODAL DANH SÁCH GIÁO VIÊN ---
  isTeacherListModalOpen = signal(false);
  departmentTeachers = signal<Teacher[]>([]);
  selectedDepartmentName = signal('');
  isLoadingTeachers = signal(false);

  // --- STATE CHUYÊN SÂU CHO MODAL DANH SÁCH GIÁO VIÊN ---
  currentDepartmentId = signal<string | null>(null);
  availableTeachers = signal<Teacher[]>([]);
  selectedTeacherToAssign = new FormControl('');
  isAssigning = signal(false); 

  // MODAL GỠ GIÁO VIÊN
  isUnassignModalOpen = signal(false);
  teacherToUnassign = signal<Teacher | null>(null);

  ngOnInit() {
    this.initForm();
    this.setupFilters();
    this.loadData();
  }

  private initForm() {
    this.departmentForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(100)]],
      description: [''],
      type: ['academic', Validators.required],
      isActive: [true]
    });
  }

  private setupFilters() {
    this.searchControl.valueChanges.pipe(debounceTime(400), distinctUntilChanged(), takeUntilDestroyed(this.destroyRef))
      .subscribe(() => { this.currentPage.set(1); this.loadData(); });

    this.typeFilterControl.valueChanges.pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => { this.currentPage.set(1); this.loadData(); });

    this.statusFilterControl.valueChanges.pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => { this.currentPage.set(1); this.loadData(); });
  }

  loadData() {
    this.isLoading.set(true);
    const keyword = this.searchControl.value || undefined;
    const type = this.typeFilterControl.value || undefined;
    
    // Parse status filter an toàn
    const statusVal = this.statusFilterControl.value;
    let isActive: boolean | undefined = undefined;
    if (statusVal === 'true') isActive = true;
    if (statusVal === 'false') isActive = false;

    this.departmentService.getAll(keyword, type, isActive, this.currentPage() - 1, this.pageSize()).subscribe({
      next: (res) => {
        this.departments.set(res.content);
        this.totalElements.set(res.totalElements);
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

  // --- XỬ LÝ FORM CHÍNH ---
  openModal(dept?: Department) {
    if (dept) {
      this.isEditing.set(true);
      this.currentId.set(dept.id);
      this.departmentForm.patchValue({
        name: dept.name,
        description: dept.description,
        type: dept.type,
        isActive: dept.isActive
      });
    } else {
      this.isEditing.set(false);
      this.currentId.set(null);
      this.departmentForm.reset({ type: 'academic', isActive: true });
    }
    this.isModalOpen.set(true);
  }

  closeModal() {
    this.isModalOpen.set(false);
    this.currentId.set(null);
  }

  onSubmit() {
    if (this.departmentForm.invalid) return;
    this.isLoading.set(true);
    const data = this.departmentForm.value;

    if (this.isEditing() && this.currentId()) {
      this.departmentService.update(this.currentId()!, data).subscribe({
        next: () => { 
          this.loadData(); this.closeModal(); this.toastService.success('Thành công', 'Đã cập nhật phòng ban!');
        },
        error: (err) => { 
          this.isLoading.set(false); this.toastService.error('Lỗi', err.error?.message || 'Cập nhật thất bại');
        }
      });
    } else {
      this.departmentService.create(data).subscribe({
        next: () => { 
          this.loadData(); this.closeModal(); this.toastService.success('Thành công', 'Đã thêm phòng ban mới!');
        },
        error: (err) => { 
          this.isLoading.set(false); this.toastService.error('Lỗi', err.error?.message || 'Thêm thất bại');
        }
      });
    }
  }

  // --- XỬ LÝ XÓA ---
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
      this.departmentService.delete(id).subscribe({
        next: () => { 
          this.loadData(); 
          this.closeDeleteModal(); 
          this.toastService.success('Thành công', 'Đã xử lý xóa bộ phận!');
        },
        error: (err) => { 
          this.isLoading.set(false); 
          this.closeDeleteModal(); 
          this.toastService.error('Lỗi', err.error?.message || 'Không thể xóa phòng ban này!');
        }
      });
    }
  }

  // --- XỬ LÝ XEM, GÁN & GỠ GIÁO VIÊN ---
  openTeacherListModal(dept: Department) {
    this.selectedDepartmentName.set(dept.name);
    this.currentDepartmentId.set(dept.id);
    this.isTeacherListModalOpen.set(true);
    this.loadModalData();
  }

  // Tách hàm load riêng để dễ gọi lại sau khi gán/gỡ thành công
  loadModalData() {
    const deptId = this.currentDepartmentId();
    if (!deptId) return;

    this.isLoadingTeachers.set(true);
    this.selectedTeacherToAssign.reset('');

    // Bước 1: Lấy danh sách GV đang có trong tổ
    this.teacherService.getAll(undefined, undefined, deptId, 0, 100).subscribe({
      next: (resAssigned) => {
        this.departmentTeachers.set(resAssigned.content || []);
        
        // Bước 2: Lấy tất cả GV đang công tác để làm Dropdown thêm mới
        this.teacherService.getAll(undefined, 'working', undefined, 0, 1000).subscribe({
          next: (resAll) => {
            const assignedIds = resAssigned.content.map(t => t.id);
            // Lọc ra những giáo viên CHƯA có trong tổ này
            const available = resAll.content.filter(t => !assignedIds.includes(t.id));
            this.availableTeachers.set(available);
            this.isLoadingTeachers.set(false);
          },
          error: () => this.isLoadingTeachers.set(false)
        });
      },
      error: () => {
        this.isLoadingTeachers.set(false);
        this.toastService.error('Lỗi', 'Không thể tải danh sách giáo viên!');
      }
    });
  }

  closeTeacherListModal() {
    this.isTeacherListModalOpen.set(false);
    this.currentDepartmentId.set(null);
  }

  assignTeacher() {
    // Lấy giá trị gõ vào (Có thể là Mã GV hoặc ID)
    const inputValue = this.selectedTeacherToAssign.value?.trim().toLowerCase();
    const deptId = this.currentDepartmentId();
    if (!inputValue || !deptId) return;

    // Tìm giáo viên theo Mã GV (teacherCode) hoặc ID
    const teacher = this.availableTeachers().find(t => 
      t.teacherCode.toLowerCase() === inputValue || t.id === inputValue
    );

    if (!teacher) {
      this.toastService.warning('Không tìm thấy', 'Mã giáo viên không chính xác hoặc giáo viên này đã thuộc tổ khác!');
      return;
    }

    this.isAssigning.set(true);
    const updatedData = { ...teacher, departmentId: deptId };

    this.teacherService.update(teacher.id, updatedData).subscribe({
      next: () => {
        this.toastService.success('Thành công', `Đã thêm ${teacher.fullName} vào tổ!`);
        this.isAssigning.set(false);
        this.selectedTeacherToAssign.reset(''); // Reset ô nhập liệu
        this.loadModalData(); // Cập nhật lại danh sách
      },
      error: (err) => {
        this.isAssigning.set(false);
        this.toastService.error('Lỗi', err.error?.message || 'Không thể thêm giáo viên!');
      }
    });
  }

  // --- LOGIC MODAL GỠ GIÁO VIÊN ---
  openUnassignModal(teacher: Teacher) {
    this.teacherToUnassign.set(teacher);
    this.isUnassignModalOpen.set(true);
  }

  closeUnassignModal() {
    this.isUnassignModalOpen.set(false);
    this.teacherToUnassign.set(null);
  }

  confirmUnassignTeacher() {
    const teacher = this.teacherToUnassign();
    if (!teacher) return;

    this.isAssigning.set(true);
    // Gửi undefined/null để backend xóa liên kết phòng ban
    const updatedData = { ...teacher, departmentId: undefined };

    this.teacherService.update(teacher.id, updatedData).subscribe({
      next: () => {
        this.toastService.success('Đã gỡ', `Giáo viên ${teacher.fullName} đã rời tổ.`);
        this.isAssigning.set(false);
        this.closeUnassignModal();
        this.loadModalData(); // Cập nhật lại danh sách
      },
      error: (err) => {
        this.isAssigning.set(false);
        this.toastService.error('Lỗi', err.error?.message || 'Không thể gỡ giáo viên!');
      }
    });
  }
}