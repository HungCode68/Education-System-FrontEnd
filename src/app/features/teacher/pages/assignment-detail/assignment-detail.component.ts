import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { AssignmentService } from '../../services/assignment.service';
import { ToastService } from '../../../../core/services/toast.service';
import { AssignmentQuestionService } from '../../services/assignment-question.service';
import { FormBuilder, FormGroup, FormArray, ReactiveFormsModule, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-assignment-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './assignment-detail.component.html'
})
export class AssignmentDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  public router = inject(Router);
  private assignmentService = inject(AssignmentService);
  private toastService = inject(ToastService);
  private questionService = inject(AssignmentQuestionService);
  private fb = inject(FormBuilder);

  assignmentId = signal<string | null>(null);
  assignment = signal<any | null>(null);
  isLoading = signal(true);
  questions = signal<any[]>([]);
  isLoadingQuestions = signal(false);
  isImporting = signal(false);

  // --- STATE MODAL CÂU HỎI ---
  isQuestionModalOpen = signal(false);
  isSavingQuestion = signal(false);
  questionForm!: FormGroup;

  // --- STATE SỬA / XÓA CÂU HỎI ---
  editingQuestion = signal<any | null>(null); // Lưu thông tin câu hỏi đang sửa
  
  isDeleteQuestionModalOpen = signal(false);
  isDeletingQuestion = signal(false);
  questionToDeleteId = signal<string | null>(null);

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.assignmentId.set(id);
        this.loadAssignmentDetails(id);
        this.initQuestionForm();
      }
    });
    
  }

  private initQuestionForm() {
    this.questionForm = this.fb.group({
      questionType: ['multiple_choice', Validators.required],
      score: [1, [Validators.required, Validators.min(0)]],
      questionText: ['', Validators.required],
      explanation: [''],
      // FormArray để quản lý danh sách đáp án động
      options: this.fb.array([
        this.createOptionForm(true),  // Mặc định đáp án 1 là Đúng
        this.createOptionForm(false),
        this.createOptionForm(false),
        this.createOptionForm(false)
      ])
    });
    this.questionForm.get('questionType')?.valueChanges.subscribe(type => {
      const optionsArray = this.questionForm.get('options') as FormArray;
      if (type === 'multiple_choice') {
        optionsArray.enable(); // Nếu là Trắc nghiệm -> Bật lại mảng đáp án để bắt lỗi bắt buộc nhập
      } else {
        optionsArray.disable(); // Nếu là Tự luận -> Vô hiệu hóa mảng đáp án để Form hết bị lỗi invalid
      }
    });
  }

  // Getter để lấy FormArray Options ra HTML dễ dàng
  get optionsFormArray() {
    return this.questionForm.get('options') as FormArray;
  }

  addOption() {
    this.optionsFormArray.push(this.createOptionForm());
  }

  // Tạo một FormGroup cho 1 đáp án
  private createOptionForm(isCorrect: boolean = false): FormGroup {
    return this.fb.group({
      optionText: ['', Validators.required],
      isCorrect: [isCorrect]
    });
  }

  loadAssignmentDetails(id: string) {
    this.isLoading.set(true);
    this.assignmentService.getAssignmentById(id).subscribe({
      next: (res) => {
        this.assignment.set(res);
        this.isLoading.set(false);
        this.loadQuestions(id); // <--- THÊM DÒNG NÀY ĐỂ GỌI CÂU HỎI
      },
      error: () => {
        this.toastService.error('Lỗi', 'Không thể tải thông tin bài tập');
        this.isLoading.set(false);
      }
    });
  }


  // --- LOGIC CÂU HỎI ---
  loadQuestions(assignmentId: string) {
    this.isLoadingQuestions.set(true);
    
    this.questionService.getQuestionsByAssignment(assignmentId).subscribe({
      next: (qs) => {
        // Gán câu hỏi vào signal trước để giao diện hiển thị
        this.questions.set(qs);
        this.isLoadingQuestions.set(false);

        // Chạy vòng lặp để lấy đáp án cho các câu Trắc nghiệm
        qs.forEach((q, index) => {
          if (q.questionType === 'multiple_choice') {
            this.questionService.getOptionsByQuestion(q.id).subscribe(opts => {
               // Cập nhật lại options vào đúng vị trí câu hỏi trong mảng
               this.questions.update(current => {
                  current[index].options = opts;
                  return [...current];
               });
            });
          }
        });
      },
      error: () => {
        this.toastService.error('Lỗi', 'Không thể tải danh sách câu hỏi');
        this.isLoadingQuestions.set(false);
      }
    });
  }

  getAlphabetLetter(index: number): string {
    return String.fromCharCode(65 + index);
  }

  getAssignmentTypeName(type: string): string {
    const map: any = {
      'multiple_choice': 'Trắc nghiệm',
      'essay': 'Tự luận',
      'file_upload': 'Nộp File',
      'mixed': 'Hỗn hợp'
    };
    return map[type] || 'Không xác định';
  }

  // Mở file đính kèm bằng URL MinIO trả về từ Backend
  downloadAttachment(url: string) {
    if (url) {
      window.open(url, '_blank');
    } else {
      this.toastService.warning('Cảnh báo', 'Không tìm thấy đường dẫn tải file');
    }
  }

  // Hàm xử lý khi chọn file Excel
  onExcelFileSelected(event: any) {
    const file = event.target.files[0];
    if (!file) return;

    // Kiểm tra đuôi file xem có chuẩn Excel không
    if (!file.name.endsWith('.xlsx') && !file.name.endsWith('.xls')) {
      this.toastService.warning('Cảnh báo', 'Vui lòng chọn file Excel (.xlsx hoặc .xls)');
      event.target.value = ''; // Reset lại input
      return;
    }

    if (!this.assignmentId()) return;

    this.isImporting.set(true);
    this.questionService.importFromExcel(this.assignmentId()!, file).subscribe({
      next: (res) => {
        // res.totalImported là biến bạn đã cấu hình trả về từ Backend
        this.toastService.success('Import thành công!', `Đã thêm ${res.totalImported || ''} câu hỏi vào hệ thống.`);
        this.loadQuestions(this.assignmentId()!); // Tự động load lại danh sách câu hỏi
        this.isImporting.set(false);
        event.target.value = ''; // Reset lại input để có thể chọn lại cùng 1 file nếu cần
      },
      error: (err) => {
        this.toastService.error('Lỗi Import', err.error?.message || 'Có lỗi xảy ra khi import file. Vui lòng kiểm tra lại định dạng!');
        this.isImporting.set(false);
        event.target.value = ''; 
      }
    });
  }

  removeOption(index: number) {
    if (this.optionsFormArray.length > 2) {
      this.optionsFormArray.removeAt(index);
    } else {
      this.toastService.warning('Cảnh báo', 'Câu hỏi trắc nghiệm phải có ít nhất 2 đáp án!');
    }
  }

  openQuestionModal() {
    this.initQuestionForm(); // Reset form mỗi lần mở
    this.isQuestionModalOpen.set(true);
  }

  closeQuestionModal() {
    this.isQuestionModalOpen.set(false);
    this.editingQuestion.set(null); // Reset trạng thái sửa
  }

  // Hàm mở Form với dữ liệu của câu hỏi cần sửa
  editQuestion(q: any) {
    this.editingQuestion.set(q);
    this.initQuestionForm(); // Reset form trước

    // Đổ dữ liệu cơ bản vào Form
    this.questionForm.patchValue({
      questionType: q.questionType,
      score: q.score,
      questionText: q.questionText,
      explanation: q.explanation
    });

    // Nếu là Trắc nghiệm, phải lấy mảng options đổ vào FormArray
    if (q.questionType === 'multiple_choice' && q.options) {
      const optionsArray = this.optionsFormArray;
      optionsArray.clear(); // Xóa 4 đáp án mặc định
      
      q.options.forEach((opt: any) => {
        optionsArray.push(this.fb.group({
          optionText: [opt.optionText, Validators.required],
          isCorrect: [opt.isCorrect]
        }));
      });
    }

    this.isQuestionModalOpen.set(true);
  }

  submitQuestion() {
    if (this.questionForm.invalid) {
      this.questionForm.markAllAsTouched();
      return;
    }

    const formValues = this.questionForm.value;

    if (formValues.questionType === 'multiple_choice') {
      const hasCorrect = formValues.options.some((opt: any) => opt.isCorrect);
      if (!hasCorrect) {
        this.toastService.warning('Lỗi', 'Vui lòng chọn ít nhất 1 đáp án ĐÚNG cho câu hỏi!');
        return;
      }
    }

    this.isSavingQuestion.set(true);

    // Dữ liệu chung
    const questionPayload: any = {
      assignmentId: this.assignmentId(),
      questionText: formValues.questionText,
      explanation: formValues.explanation,
      questionType: formValues.questionType,
      score: formValues.score
    };

    // Chuẩn bị mảng đáp án (Nếu là trắc nghiệm)
    const optionsPayload = formValues.questionType === 'multiple_choice' 
      ? formValues.options.map((o: any, index: number) => ({
          displayOrder: index + 1,
          optionText: o.optionText,
          isCorrect: o.isCorrect
        }))
      : [];

    // NẾU ĐANG Ở CHẾ ĐỘ SỬA
    if (this.editingQuestion()) {
      questionPayload.questionOrder = this.editingQuestion().questionOrder; // Giữ nguyên thứ tự cũ
      
      this.questionService.updateQuestion(this.editingQuestion().id, questionPayload).subscribe({
        next: () => {
          if (formValues.questionType === 'multiple_choice') {
            this.questionService.saveOptions(this.editingQuestion().id, optionsPayload).subscribe({
              next: () => this.finalizeSubmit('Đã cập nhật câu hỏi thành công!'),
              error: () => this.toastService.error('Lỗi', 'Cập nhật đáp án thất bại!')
            });
          } else {
            this.finalizeSubmit('Đã cập nhật câu hỏi thành công!');
          }
        },
        error: (err) => {
          this.toastService.error('Lỗi', err.error?.message || 'Không thể cập nhật câu hỏi');
          this.isSavingQuestion.set(false);
        }
      });
    } 
    // NẾU ĐANG Ở CHẾ ĐỘ TẠO MỚI
    else {
      questionPayload.questionOrder = this.questions().length + 1; // Tính thứ tự mới
      
      this.questionService.createQuestion(questionPayload).subscribe({
        next: (resQuestion) => {
          if (formValues.questionType === 'multiple_choice') {
            this.questionService.saveOptions(resQuestion.id, optionsPayload).subscribe({
              next: () => this.finalizeSubmit('Đã thêm câu hỏi thành công!'),
              error: () => this.toastService.error('Lỗi', 'Lưu đáp án thất bại!')
            });
          } else {
            this.finalizeSubmit('Đã thêm câu hỏi thành công!');
          }
        },
        error: (err) => {
          this.toastService.error('Lỗi', err.error?.message || 'Không thể tạo câu hỏi');
          this.isSavingQuestion.set(false);
        }
      });
    }
  }

  private finalizeSubmit(message: string) {
    this.toastService.success('Thành công', message);
    this.isSavingQuestion.set(false);
    this.closeQuestionModal();
    this.loadQuestions(this.assignmentId()!); // Load lại danh sách ngoài màn hình
  }

  // --- LOGIC XÓA CÂU HỎI ---
  openDeleteQuestionModal(id: string) {
    this.questionToDeleteId.set(id);
    this.isDeleteQuestionModalOpen.set(true);
  }

  closeDeleteQuestionModal() {
    this.isDeleteQuestionModalOpen.set(false);
    this.questionToDeleteId.set(null);
  }

  confirmDeleteQuestion() {
    if (!this.questionToDeleteId()) return;
    this.isDeletingQuestion.set(true);
    
    this.questionService.deleteQuestion(this.questionToDeleteId()!).subscribe({
      next: () => {
        this.toastService.success('Thành công', 'Đã xóa câu hỏi khỏi bài tập!');
        this.isDeletingQuestion.set(false);
        this.closeDeleteQuestionModal();
        this.loadQuestions(this.assignmentId()!); // Tải lại danh sách
      },
      error: (err) => {
        this.toastService.error('Lỗi', err.error?.message || 'Xóa câu hỏi thất bại');
        this.isDeletingQuestion.set(false);
        this.closeDeleteQuestionModal();
      }
    });
  }
}