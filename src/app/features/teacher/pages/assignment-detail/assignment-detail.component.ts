import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { AssignmentService } from '../../services/assignment.service';
import { ToastService } from '../../../../core/services/toast.service';
import { AssignmentQuestionService } from '../../services/assignment-question.service';
import { QuestionService } from '../../services/question.service';
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
  private assignmentQuestionService = inject(AssignmentQuestionService);
  private questionService = inject(QuestionService);
  private fb = inject(FormBuilder);

  assignmentId = signal<string | null>(null);
  assignment = signal<any | null>(null);
  isLoading = signal(true);
  assignmentQuestions = signal<any[]>([]);
  isLoadingQuestions = signal(false);
  isImporting = signal(false);

  // --- STATE MODAL CÂU HỎI & MEDIA FILE ---
  isQuestionModalOpen = signal(false);
  isSavingQuestion = signal(false);
  selectedMediaFile = signal<File | null>(null);
  questionForm!: FormGroup;

  // --- STATE SỬA / XÓA CÂU HỎI ---
  editingQuestion = signal<any | null>(null);
  
  isDeleteQuestionModalOpen = signal(false);
  isDeletingQuestion = signal(false);
  questionToDeleteId = signal<number | string | null>(null);

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
      questionType: ['MULTIPLE_CHOICE', Validators.required],
      scoreWeight: [1, [Validators.required, Validators.min(0)]],
      content: ['', Validators.required],
      readingPassage: [''],
      options: this.fb.array([
        this.createOptionForm(true),
        this.createOptionForm(false),
        this.createOptionForm(false),
        this.createOptionForm(false)
      ])
    });

    this.questionForm.get('questionType')?.valueChanges.subscribe(type => {
      const optionsArray = this.questionForm.get('options') as FormArray;
      if (type === 'MULTIPLE_CHOICE' || type === 'multiple_choice' || type === 'LISTENING') {
        optionsArray.enable();
      } else {
        optionsArray.disable();
      }
    });
  }

  get optionsFormArray() {
    return this.questionForm.get('options') as FormArray;
  }

  addOption() {
    this.optionsFormArray.push(this.createOptionForm());
  }

  removeOption(index: number) {
    if (this.optionsFormArray.length > 2) {
      this.optionsFormArray.removeAt(index);
    } else {
      this.toastService.warning('Cảnh báo', 'Câu hỏi trắc nghiệm phải có ít nhất 2 đáp án!');
    }
  }

  private createOptionForm(isCorrect: boolean = false): FormGroup {
    return this.fb.group({
      optionContent: ['', Validators.required],
      isCorrect: [isCorrect]
    });
  }

  onMediaFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedMediaFile.set(file);
    }
  }

  removeSelectedMediaFile() {
    this.selectedMediaFile.set(null);
  }

  loadAssignmentDetails(id: string) {
    this.isLoading.set(true);
    this.assignmentService.getAssignmentById(id).subscribe({
      next: (res) => {
        this.assignment.set(res);
        this.isLoading.set(false);
        this.loadQuestions(id);
      },
      error: () => {
        this.toastService.error('Lỗi', 'Không thể tải thông tin bài tập');
        this.isLoading.set(false);
      }
    });
  }

  loadQuestions(assignmentId: string) {
    this.isLoadingQuestions.set(true);
    this.assignmentQuestionService.getQuestionsByAssignmentId(assignmentId).subscribe({
      next: (aqList: any[]) => {
        this.assignmentQuestions.set(aqList || []);
        this.isLoadingQuestions.set(false);
      },
      error: () => {
        this.toastService.error('Lỗi', 'Không thể tải danh sách câu hỏi của bài tập');
        this.isLoadingQuestions.set(false);
      }
    });
  }

  getAlphabetLetter(index: number): string {
    return String.fromCharCode(65 + index);
  }

  getAssignmentTypeName(type: string): string {
    const map: any = {
      'HOMEWORK': 'Bài tập về nhà',
      'QUIZ': 'Trắc nghiệm',
      'ESSAY': 'Tự luận',
      'PROJECT': 'Đồ án',
      'MULTIPLE_CHOICE': 'Trắc nghiệm',
      'LISTENING': '🎧 Bài nghe (Audio)',
      'FILL_BLANK': 'Điền từ',
      'TRUE_FALSE': 'Đúng / Sai',
      'multiple_choice': 'Trắc nghiệm',
      'essay': 'Tự luận'
    };
    return map[type] || type || 'Bài tập';
  }

  isAudioUrl(url: string | null): boolean {
    if (!url) return false;
    const cleanUrl = url.split('?')[0].toLowerCase();
    return cleanUrl.endsWith('.mp3') || cleanUrl.endsWith('.wav') || cleanUrl.endsWith('.aac') || cleanUrl.endsWith('.m4a') || cleanUrl.endsWith('.ogg');
  }

  isImageUrl(url: string | null): boolean {
    if (!url) return false;
    const cleanUrl = url.split('?')[0].toLowerCase();
    return cleanUrl.endsWith('.png') || cleanUrl.endsWith('.jpg') || cleanUrl.endsWith('.jpeg') || cleanUrl.endsWith('.webp') || cleanUrl.endsWith('.gif') || cleanUrl.endsWith('.svg');
  }

  onExcelFileSelected(event: any) {
    const file = event.target.files[0];
    if (!file) return;

    if (!file.name.endsWith('.xlsx') && !file.name.endsWith('.xls')) {
      this.toastService.warning('Cảnh báo', 'Vui lòng chọn file Excel (.xlsx hoặc .xls)');
      event.target.value = '';
      return;
    }

    this.isImporting.set(true);
    this.questionService.importExcel(file, this.assignmentId()!).subscribe({
      next: (res: any) => {
        const count = res.successCount || res.importedQuestions?.length || 0;
        this.toastService.success('Import thành công!', `Đã thêm ${count} câu hỏi vào bài tập.`);
        this.isImporting.set(false);
        event.target.value = '';
        if (this.assignmentId()) {
          this.loadQuestions(this.assignmentId()!);
        }
      },
      error: (err) => {
        this.toastService.error('Lỗi Import', err.error?.message || 'Có lỗi xảy ra khi import file!');
        this.isImporting.set(false);
        event.target.value = '';
      }
    });
  }

  downloadTemplate() {
    this.questionService.downloadTemplate().subscribe({
      next: (blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Question_Import_Template.xlsx';
        a.click();
        window.URL.revokeObjectURL(url);
      },
      error: () => this.toastService.error('Lỗi', 'Không thể tải file mẫu')
    });
  }

  openQuestionModal() {
    this.editingQuestion.set(null);
    this.selectedMediaFile.set(null);
    this.initQuestionForm();
    this.isQuestionModalOpen.set(true);
  }

  closeQuestionModal() {
    this.isQuestionModalOpen.set(false);
    this.editingQuestion.set(null);
    this.selectedMediaFile.set(null);
  }

  editQuestion(aq: any) {
    const q = aq.question || aq;
    this.editingQuestion.set(aq);
    this.selectedMediaFile.set(null);
    this.initQuestionForm();

    this.questionForm.patchValue({
      questionType: q.questionType || 'MULTIPLE_CHOICE',
      scoreWeight: aq.scoreWeight || 1,
      content: q.content || q.questionText || '',
      readingPassage: q.readingPassage || ''
    });

    if ((q.questionType === 'MULTIPLE_CHOICE' || q.questionType === 'multiple_choice' || q.questionType === 'LISTENING') && q.options) {
      const optionsArray = this.optionsFormArray;
      optionsArray.clear();
      q.options.forEach((opt: any) => {
        optionsArray.push(this.fb.group({
          optionContent: [opt.optionContent || opt.optionText, Validators.required],
          isCorrect: [!!opt.isCorrect]
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
    const isMultipleChoice = formValues.questionType === 'MULTIPLE_CHOICE' || formValues.questionType === 'multiple_choice' || formValues.questionType === 'LISTENING';

    if (isMultipleChoice) {
      const hasCorrect = formValues.options.some((opt: any) => opt.isCorrect);
      if (!hasCorrect) {
        this.toastService.warning('Lỗi', 'Vui lòng chọn ít nhất 1 đáp án ĐÚNG!');
        return;
      }
    }

    this.isSavingQuestion.set(true);

    const questionDto = {
      questionType: formValues.questionType,
      content: formValues.content,
      readingPassage: formValues.readingPassage,
      options: isMultipleChoice ? formValues.options : []
    };

    const mediaFile = this.selectedMediaFile();

    if (this.editingQuestion()) {
      const aq = this.editingQuestion();
      const questionId = aq.questionId || aq.question?.id;

      this.questionService.updateQuestion(questionId, questionDto, mediaFile).subscribe({
        next: () => {
          this.assignmentQuestionService.updateQuestionInAssignment(this.assignmentId()!, questionId, {
            orderNumber: aq.orderNumber,
            scoreWeight: formValues.scoreWeight
          }).subscribe({
            next: () => this.finalizeSubmit('Đã cập nhật câu hỏi thành công!'),
            error: () => this.finalizeSubmit('Đã cập nhật câu hỏi!')
          });
        },
        error: (err: any) => {
          this.toastService.error('Lỗi', err.error?.message || 'Không thể cập nhật câu hỏi');
          this.isSavingQuestion.set(false);
        }
      });
    } else {
      this.questionService.createQuestion(questionDto, mediaFile).subscribe({
        next: (res: any) => {
          const newQuestionId = res?.data?.id || res?.id;
          if (newQuestionId) {
            const nextOrder = this.assignmentQuestions().length + 1;
            this.assignmentQuestionService.addQuestionToAssignment(this.assignmentId()!, {
              questionId: newQuestionId,
              orderNumber: nextOrder,
              scoreWeight: formValues.scoreWeight
            }).subscribe({
              next: () => this.finalizeSubmit('Đã thêm câu hỏi vào bài tập thành công!'),
              error: () => this.finalizeSubmit('Đã tạo câu hỏi!')
            });
          } else {
            this.finalizeSubmit('Đã tạo câu hỏi!');
          }
        },
        error: (err: any) => {
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
    this.loadQuestions(this.assignmentId()!);
  }

  openDeleteQuestionModal(questionId: number | string) {
    this.questionToDeleteId.set(questionId);
    this.isDeleteQuestionModalOpen.set(true);
  }

  closeDeleteQuestionModal() {
    this.isDeleteQuestionModalOpen.set(false);
    this.questionToDeleteId.set(null);
  }

  confirmDeleteQuestion() {
    const qId = this.questionToDeleteId();
    if (!qId || !this.assignmentId()) return;
    this.isDeletingQuestion.set(true);

    this.assignmentQuestionService.removeQuestionFromAssignment(this.assignmentId()!, qId).subscribe({
      next: () => {
        this.toastService.success('Thành công', 'Đã xóa câu hỏi khỏi bài tập!');
        this.isDeletingQuestion.set(false);
        this.closeDeleteQuestionModal();
        this.loadQuestions(this.assignmentId()!);
      },
      error: (err: any) => {
        this.toastService.error('Lỗi', err.error?.message || 'Xóa câu hỏi thất bại');
        this.isDeletingQuestion.set(false);
        this.closeDeleteQuestionModal();
      }
    });
  }
}