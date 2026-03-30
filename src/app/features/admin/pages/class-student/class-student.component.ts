import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router'; 
import { ClassStudentService } from '../../services/class-student.service';
import { PhysicalClassService } from '../../services/physical-class.service';
import { StudentService } from '../../services/student.service'; 
import { ToastService } from '../../../../core/services/toast.service';
import { ClassStudent } from '../../models/class-student.model';
import { PhysicalClass } from '../../models/physical-class.model';
import { Student } from '../../models/student.model';
import { ClassTransferService } from '../../services/class-transfer.service';

@Component({
  selector: 'app-class-student',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './class-student.component.html'
})
export class ClassStudentComponent implements OnInit {
  private route = inject(ActivatedRoute); // Lấy params từ URL
  private classStudentService = inject(ClassStudentService);
  private physicalClassService = inject(PhysicalClassService);
  private studentService = inject(StudentService); // Gọi API lấy DS học sinh
  private toastService = inject(ToastService);
  private fb = inject(FormBuilder);
  private classTransferService = inject(ClassTransferService);

  // --- STATE ---
  currentClassId = ''; // lấy từ URL
  currentClassInfo = signal<PhysicalClass | null>(null);

  students = signal<ClassStudent[]>([]); // Danh sách HS trong lớp
  availableStudents = signal<Student[]>([]); // Danh sách HS để chọn vào lớp

  isLoading = signal(false);
  filterStatus = signal<string>(''); 

  // --- STATE MODAL THÊM 1 HS ---
  isModalOpen = signal(false);
  addForm!: FormGroup;

  // --- STATE MODAL XÓA/ĐỔI TRẠNG THÁI ---
  isConfirmModalOpen = signal(false);
  actionType = signal<'DELETE' | 'CHANGE_STATUS'>('DELETE');
  selectedRecordId = signal<string | null>(null);
  newStatusToChange = signal<string>('');

  availableClasses = signal<PhysicalClass[]>([]); // Danh sách lớp để chọn chuyển đến
  isTransferModalOpen = signal(false);
  transferForm!: FormGroup;
  selectedStudentForTransfer = signal<ClassStudent | null>(null);

  ngOnInit() {
    // Tự động đọc ID lớp từ URL (VD: /admin/classes/123/students)
    this.currentClassId = this.route.snapshot.paramMap.get('id') || '';
    
    this.initForm();
    
    if (this.currentClassId) {
      this.loadClassInfo();
      this.loadData();
      this.loadAvailableStudents();
    }
  }

  private initForm() {
    this.addForm = this.fb.group({
      studentId: ['', Validators.required], 
      physicalClassId: [this.currentClassId] 
    });
    this.transferForm = this.fb.group({
    toClassId: ['', Validators.required],
    reason: ['']
  });
  }

  loadClassInfo() {
    this.physicalClassService.getById(this.currentClassId).subscribe(res => {
      this.currentClassInfo.set(res);
    });
  }

  loadData() {
    this.isLoading.set(true);
    this.classStudentService.getStudentsByClass(this.currentClassId, this.filterStatus()).subscribe({
      next: (res) => {
        this.students.set(res);
        this.isLoading.set(false);
      },
      error: () => this.isLoading.set(false)
    });
  }

  loadAvailableStudents() {
    // Lấy DS học sinh (Lấy tạm 1000 HS để làm dropdown)
    this.studentService.getAll(undefined, undefined, undefined, 0, 1000).subscribe(res => {
      this.availableStudents.set(res.content || []);
    });
  }

  onFilterChange(event: any) {
    this.filterStatus.set(event.target.value);
    this.loadData();
  }

  // --- XỬ LÝ MODAL THÊM ---
  openAddModal() {
    this.addForm.reset({ physicalClassId: this.currentClassId, studentId: '' });
    this.isModalOpen.set(true);
  }

  closeModal() {
    this.isModalOpen.set(false);
  }

  onSubmitAdd() {
    if (this.addForm.invalid) return;
    this.isLoading.set(true);
    this.classStudentService.addStudent(this.addForm.value).subscribe({
      next: () => {
        this.loadData();
        this.closeModal();
        this.toastService.success('Thành công', 'Đã thêm học sinh vào lớp!');
      },
      error: (err) => {
        this.isLoading.set(false);
        this.toastService.error('Thất bại', err.error?.message || 'Không thể thêm học sinh này!');
      }
    });
  }

  // --- XỬ LÝ MODAL CONFIRM ---
  openConfirmModal(action: 'DELETE' | 'CHANGE_STATUS', recordId: string, newStatus?: string) {
    this.actionType.set(action);
    this.selectedRecordId.set(recordId);
    if (newStatus) this.newStatusToChange.set(newStatus);
    this.isConfirmModalOpen.set(true);
  }

  closeConfirmModal() {
    this.isConfirmModalOpen.set(false);
    this.selectedRecordId.set(null);
  }

  executeConfirm() {
    const id = this.selectedRecordId();
    if (!id) return;

    this.isLoading.set(true);

    if (this.actionType() === 'DELETE') {
      this.classStudentService.removeStudent(id).subscribe({
        next: () => {
          this.loadData();
          this.closeConfirmModal();
          this.toastService.success('Đã xóa', 'Đã gỡ học sinh khỏi lớp!');
        },
        error: (err) => {
          this.isLoading.set(false);
          this.toastService.error('Lỗi', err.error?.message || 'Không thể xóa học sinh!');
        }
      });
    } else {
      this.classStudentService.updateStatus(id, this.newStatusToChange()).subscribe({
        next: () => {
          this.loadData();
          this.closeConfirmModal();
          this.toastService.success('Cập nhật', 'Đã chuyển trạng thái học sinh!');
        },
        error: (err) => {
          this.isLoading.set(false);
          this.toastService.error('Lỗi', err.error?.message || 'Lỗi khi đổi trạng thái!');
        }
      });
    }
  }

  // hàm xử lý chuyển lớp 
  openTransferModal(student: ClassStudent) {
    this.selectedStudentForTransfer.set(student);
    this.transferForm.reset({ toClassId: '', reason: '' });
    
    // Tải danh sách lớp (loại trừ lớp hiện tại)
    this.physicalClassService.search(1, 100).subscribe(res => {
      const classes = (res.content || []).filter((c: any) => c.id !== this.currentClassId);
      this.availableClasses.set(classes);
    });
    
    this.isTransferModalOpen.set(true);
  }

  closeTransferModal() {
    this.isTransferModalOpen.set(false);
    this.selectedStudentForTransfer.set(null);
  }

  submitTransfer() {
    if (this.transferForm.invalid) return;
    const student = this.selectedStudentForTransfer();
    if (!student) return;

    this.isLoading.set(true);
    const request = {
      studentId: student.studentId,
      toClassId: this.transferForm.value.toClassId,
      reason: this.transferForm.value.reason
    };

    this.classTransferService.transferStudent(request).subscribe({
      next: () => {
        this.toastService.success('Thành công', `Đã chuyển học sinh ${student.studentName} sang lớp mới!`);
        this.closeTransferModal();
        this.loadData(); // Tải lại danh sách lớp cũ (học sinh này sẽ biến mất hoặc đổi trạng thái)
      },
      error: (err) => {
        this.isLoading.set(false);
        this.toastService.error('Lỗi', err.error?.message || 'Không thể chuyển lớp!');
      }
    });
  }
}
