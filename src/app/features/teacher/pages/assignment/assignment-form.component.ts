import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { AssignmentService } from '../../services/assignment.service';
import { ToastService } from '../../../../core/services/toast.service';

@Component({
  selector: 'app-assignment-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './assignment-form.component.html'
})
export class AssignmentFormComponent implements OnInit {
  private fb = inject(FormBuilder);
  private assignmentService = inject(AssignmentService);
  private toastService = inject(ToastService);
  public router = inject(Router);
  private route = inject(ActivatedRoute);

  assignmentForm!: FormGroup;
  classId = signal<string | null>(null);
  assignmentId = signal<string | null>(null); // Lưu ID nếu đang ở chế độ Sửa
  
  isEditMode = signal(false); // Trạng thái Create / Edit
  isSubmitting = signal(false);
  isLoadingData = signal(false);
  
  selectedFile = signal<File | null>(null);
  existingFileName = signal<string | null>(null); // Lưu tên file cũ nếu có

  ngOnInit() {
    this.initForm();

    // Kiểm tra xem trên URL có ID bài tập không (Chế độ Edit)
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.isEditMode.set(true);
        this.assignmentId.set(id);
        this.loadExistingAssignment(id);
      } else {
        // Chế độ Create: Lấy classId từ QueryParam
        this.route.queryParamMap.subscribe(qParams => {
          const cid = qParams.get('classId');
          if (cid) {
            this.classId.set(cid);
          } else {
            this.toastService.error('Lỗi', 'Không xác định được Lớp học!');
            this.router.navigate(['/teacher/my-classes']);
          }
        });
      }
    });
  }

  private initForm() {
    this.assignmentForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      assignmentType: ['multiple_choice', Validators.required],
      maxScore: [10, [Validators.required, Validators.min(0), Validators.max(100)]],
      startTime: [null],
      dueTime: [null],
      durationMinutes: [null, Validators.min(1)],
      allowLateSubmission: [false],
      maxAttempts: [1, Validators.min(1)],
      shuffleQuestions: [false],
      viewAnswers: [false],
      status: ['unpublished', Validators.required]
    });
  }

  // --- LOGIC DÀNH CHO CHẾ ĐỘ EDIT ---
  private loadExistingAssignment(id: string) {
    this.isLoadingData.set(true);
    this.assignmentService.getAssignmentById(id).subscribe({
      next: (res) => {
        this.classId.set(res.onlineClassId);
        
        // Đổ dữ liệu cũ vào Form
        this.assignmentForm.patchValue({
          title: res.title,
          description: res.description,
          assignmentType: res.assignmentType,
          maxScore: res.maxScore,
          startTime: this.formatToDateTimeLocal(res.startTime), // Format ngược lại cho Input
          dueTime: this.formatToDateTimeLocal(res.dueTime),
          durationMinutes: res.durationMinutes,
          allowLateSubmission: res.allowLateSubmission,
          maxAttempts: res.maxAttempts,
          shuffleQuestions: res.shuffleQuestions,
          viewAnswers: res.viewAnswers,
          status: res.status
        });

        // Nếu bài tập cũ có file đính kèm, lưu tạm tên file để hiển thị
        if (res.attachmentPath) {
           // Cắt chuỗi để lấy tên file gốc (Bỏ đoạn UUID MinIO đi cho đẹp)
           const parts = res.attachmentPath.split('_');
           this.existingFileName.set(parts.length > 1 ? parts[parts.length - 1] : 'Tệp đính kèm hiện tại');
        }
        
        this.isLoadingData.set(false);
      },
      error: () => {
        this.toastService.error('Lỗi', 'Không thể tải thông tin bài tập!');
        this.router.navigate(['/teacher/my-classes']);
      }
    });
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile.set(file);
      this.existingFileName.set(null); // Ghi đè file cũ
    }
  }

  removeFile() {
    this.selectedFile.set(null);
    this.existingFileName.set(null); // Xóa luôn file cũ (nếu muốn)
  }

  // Chuyển từ (YYYY-MM-DDThh:mm) sang (YYYY-MM-DD HH:mm:ss) gửi Backend
  private formatDateTime(datetimeLocal: string | null): string | null {
    if (!datetimeLocal) return null;
    return datetimeLocal.replace('T', ' ') + ':00';
  }

  // Chuyển từ Backend (YYYY-MM-DD HH:mm:ss) sang (YYYY-MM-DDThh:mm) cho Input HTML
  private formatToDateTimeLocal(dateStr: string | null): string | null {
    if (!dateStr) return null;
    return dateStr.replace(' ', 'T').substring(0, 16);
  }

  onSubmit() {
    if (this.assignmentForm.invalid || !this.classId()) {
      this.assignmentForm.markAllAsTouched();
      return;
    }

    const formValues = this.assignmentForm.value;
    
    if (formValues.startTime && formValues.dueTime) {
      if (new Date(formValues.dueTime) <= new Date(formValues.startTime)) {
        this.toastService.warning('Lưu ý', 'Hạn nộp phải diễn ra sau Thời gian mở đề!');
        return;
      }
    }

    this.isSubmitting.set(true);

    const payload = {
      ...formValues,
      onlineClassId: this.classId(),
      startTime: this.formatDateTime(formValues.startTime),
      dueTime: this.formatDateTime(formValues.dueTime)
    };

    // KIỂM TRA CHẾ ĐỘ ĐỂ GỌI ĐÚNG API
    if (this.isEditMode()) {
      // GỌI API UPDATE
      this.assignmentService.updateAssignment(this.assignmentId()!, payload, this.selectedFile()).subscribe({
        next: () => {
          this.toastService.success('Thành công', 'Đã cập nhật bài tập!');
          this.isSubmitting.set(false);
          this.router.navigate(['/teacher/assignments', this.assignmentId()]); // Quay lại trang chi tiết bài tập
        },
        error: (err) => {
          this.toastService.error('Lỗi', err.error?.message || 'Cập nhật thất bại');
          this.isSubmitting.set(false);
        }
      });
    } else {
      // GỌI API CREATE
      this.assignmentService.createAssignment(payload, this.selectedFile()).subscribe({
        next: () => {
          this.toastService.success('Thành công', 'Đã tạo bài tập mới!');
          this.isSubmitting.set(false);
          this.router.navigate(['/teacher/classes', this.classId()]); // Quay lại danh sách lớp
        },
        error: (err) => {
          this.toastService.error('Lỗi', err.error?.message || 'Tạo bài tập thất bại');
          this.isSubmitting.set(false);
        }
      });
    }
  }
}