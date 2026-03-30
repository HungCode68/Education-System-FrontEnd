import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DepartmentManagementService } from '../../services/department-management.service';
import { TeachingAssignmentService } from '../../services/teaching-assignment.service'; 
import { ToastService } from '../../../../core/services/toast.service';

@Component({
  selector: 'app-department-assignment',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './department-assignment.component.html'
})
export class DepartmentAssignmentComponent implements OnInit {
  private fb = inject(FormBuilder);
  private deptService = inject(DepartmentManagementService);
  private assignmentService = inject(TeachingAssignmentService); 
  private toastService = inject(ToastService);

  assignForm!: FormGroup;
  isSubmitting = signal(false);
  isLoadingData = signal(true);

  // State lưu trữ dữ liệu cho các Dropdown
  myDepartmentId = signal<string | null>(null);
  teachers = signal<any[]>([]);
  schoolYears = signal<any[]>([]);
  semesters = signal<any[]>([]);
  physicalClasses = signal<any[]>([]);
  subjects = signal<any[]>([]);

  ngOnInit() {
    this.assignForm = this.fb.group({
      schoolYearId: ['', Validators.required],
      // Khóa 2 ô này lại lúc ban đầu (chỉ mở khi đã chọn Năm học)
      semesterId: [{value: '', disabled: true}, Validators.required],
      physicalClassId: [{value: '', disabled: true}, Validators.required],
      
      subjectId: ['', Validators.required],
      teacherId: ['', Validators.required]
    });

    this.loadInitialData();
    this.onSchoolYearChange(); 
  }

  loadInitialData() {
    this.isLoadingData.set(true);
    
    // Lấy Giáo viên trong tổ
    this.deptService.getMyProfile().subscribe(profile => {
      if (profile.departmentId) {
        this.myDepartmentId.set(profile.departmentId);
        this.deptService.getDepartmentMembers(profile.departmentId).subscribe(res => {
          this.teachers.set(res.content || []);
        });
      }
    });

    // Lấy Năm học và Môn học (Không bị phụ thuộc)
    this.assignmentService.getSchoolYears().subscribe(res => this.schoolYears.set(res.content || []));
    this.assignmentService.getSubjects().subscribe(res => {
      // API /active-list trả về List thẳng nên không cần .content
      this.subjects.set(res.content || res); 
    });

    this.isLoadingData.set(false);
  }

  // XỬ LÝ DROPDOWN PHỤ THUỘC (Cascading Dropdown)
  onSchoolYearChange() {
    this.assignForm.get('schoolYearId')?.valueChanges.subscribe(yearId => {
      if (yearId) {
        // Nếu đã chọn Năm học -> Mở khóa 2 ô kia
        this.assignForm.get('semesterId')?.enable();
        this.assignForm.get('physicalClassId')?.enable();
        
        // Xóa giá trị cũ để tránh lỗi logic
        this.assignForm.get('semesterId')?.setValue('');
        this.assignForm.get('physicalClassId')?.setValue('');

        // Gọi API tải Học kỳ và Lớp học CỦA ĐÚNG NĂM HỌC ĐÓ
        this.assignmentService.getSemesters(yearId).subscribe(res => this.semesters.set(res.content || res));
        this.assignmentService.getPhysicalClasses(yearId).subscribe(res => this.physicalClasses.set(res.content || []));
      } else {
        // Nếu hủy chọn Năm học -> Khóa lại và xóa data
        this.assignForm.get('semesterId')?.disable();
        this.assignForm.get('physicalClassId')?.disable();
        this.semesters.set([]);
        this.physicalClasses.set([]);
      }
    });
  }

  submitAssignment() {
    if (this.assignForm.invalid) {
      this.assignForm.markAllAsTouched();
      return;
    }

    this.isSubmitting.set(true);
    
    // Lấy value (bao gồm cả các field bị disabled bằng hàm getRawValue)
    const payload = this.assignForm.getRawValue();

    this.assignmentService.assignTeacher(payload).subscribe({
      next: () => {
        this.toastService.success('Thành công', 'Đã phân công giảng dạy thành công!');
        this.assignForm.reset(); 
        this.isSubmitting.set(false);
      },
      error: (err) => {
        this.toastService.error('Lỗi', err.error?.message || 'Phân công thất bại. Vui lòng kiểm tra lại.');
        this.isSubmitting.set(false);
      }
    });
  }
}