import { Component, OnInit, inject, signal, OnDestroy, computed, ViewChild, ElementRef } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { forkJoin, of } from 'rxjs';
import { StudentAssignmentService } from '../../services/student-assignment.service';
import { ToastService } from '../../../../core/services/toast.service';
import { AiChatService } from '../../../../core/services/ai-chat.service';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-student-assignment-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './student-assignment-detail.component.html'
})
export class StudentAssignmentDetailComponent implements OnInit, OnDestroy {
  @ViewChild('fullscreenContainer') fullscreenContainer!: ElementRef;

  private route = inject(ActivatedRoute);
  private location = inject(Location);
  private assignmentService = inject(StudentAssignmentService);
  private toastService = inject(ToastService);
  private aiChatService = inject(AiChatService);

  // States
  viewState = signal<'info' | 'doing' | 'done'>('info'); // Quản lý màn hình hiện tại
  assignment = signal<any>(null);
  questions = signal<any[]>([]);
  
  get answeredCount() {
    return this.questions().filter(q => this.isQuestionAnswered(q)).length;
  }

  get progressPercentage() {
    const total = this.questions().length;
    if (total === 0) return 0;
    return Math.round((this.answeredCount / total) * 100);
  }
  
  isLoading = signal(true);
  isStarting = signal(false);

  mySubmission = signal<any>(null);

  // STATE CHO ĐỒNG HỒ ĐẾM NGƯỢC
  remainingTime = signal<number>(0); // Lưu số giây còn lại
  timerDisplay = signal<string>('--:--'); // Chuỗi hiển thị (VD: 45:00)
  private timerInterval: any;

  submissionId = signal<string | null>(null);
  totalScore = computed(() => this.questions().reduce((acc, curr) => acc + (curr.score || 0), 0));
  isSubmitting = signal(false);
  submissionHistory = signal<any[]>([]);

  // Bổ sung State cho Modal Nộp bài
  showSubmitModal = signal(false);

  // --- ANTI-CHEAT STATES ---
  cheatCount = signal(0);
  showCheatWarningModal = signal(false);
  private visibilityListener = this.handleVisibilityChange.bind(this);
  private fullscreenListener = this.handleFullscreenChange.bind(this);
  private blurListener = this.handleBlur.bind(this);

  // --- AUTO SAVE ---
  private autoSaveInterval: any;
  private hasUnsavedChanges: boolean = false;

  ngOnDestroy() {
    this.clearTimer();
    if (this.autoSaveInterval) {
      clearInterval(this.autoSaveInterval);
    }
    this.disableAntiCheat();
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadAssignmentDetail(id);
    }
  }

  
  private mapQuestions(res: any): any[] {
    const rawList = Array.isArray(res) ? res : (res?.data || res?.content || []);
    return rawList.map((aq: any) => {
      const q = aq.question || aq;
      return {
        id: q.id || aq.questionId || aq.id,
        questionType: q.questionType || aq.questionType || 'ESSAY',
        questionText: q.content || aq.content || aq.questionText || '',
        downloadMediaUrl: q.downloadMediaUrl || aq.downloadMediaUrl || q.mediaUrl,
        score: aq.scoreWeight || aq.score || 0,
        allowMultipleAnswers: aq.allowMultipleAnswers || false,
        options: (q.options || aq.options || []).map((opt: any) => ({
          id: opt.id,
          optionText: opt.optionContent || opt.optionText,
          isCorrect: null // Luôn ẩn đáp án đúng lúc đầu, chỉ hiển thị sau khi chấm điểm (nếu được phép)
        })),
        studentAnswer: (aq.allowMultipleAnswers) ? [] : null
      };
    });
  }

  private loadGradedDetails(assignmentId: string, submissionId: string) {
    forkJoin({
      questions: this.assignmentService.getQuestions(assignmentId),
      answers: this.assignmentService.getSubmissionAnswers(submissionId)
    }).subscribe({
      next: (res: any) => {
        const mappedQs = this.mapQuestions(res.questions);
        const ansList = Array.isArray(res.answers) ? res.answers : (res.answers?.data || []);
        
        mappedQs.forEach(q => {
           const ans = ansList.find((a: any) => a.questionId === q.id);
           if (ans) {
              if (q.allowMultipleAnswers) {
                 q.studentAnswer = ans.selectedOptionIds ? ans.selectedOptionIds.split(',').map((id: string) => parseInt(id, 10)) : [];
              } else if (q.questionType === 'ESSAY') {
                 q.studentAnswer = ans.textAnswer;
              } else {
                 q.studentAnswer = ans.selectedOptionId;
              }
              q.isSelectedOptionCorrect = ans.isSelectedOptionCorrect;
              q.earnedScore = ans.earnedScore;
              
              q.options.forEach((opt: any) => {
                 if (ans.correctOptionIds !== undefined && ans.correctOptionIds !== null) {
                    opt.isCorrect = ans.correctOptionIds.includes(opt.id);
                 } else {
                    opt.isCorrect = null;
                 }
              });
           }
        });
        this.questions.set(mappedQs);
      }
    });
  }

  loadAssignmentDetail(id: string) {
    this.isLoading.set(true);
    
    // Gọi song song 2 API
    forkJoin({
      assignment: this.assignmentService.getAssignmentDetail(id),
      submission: this.assignmentService.getMySubmission(id).pipe(
        catchError(() => of(null)) // Bắt lỗi nếu học sinh chưa từng làm bài này
      )
    }).subscribe({
      next: (res) => {
        this.assignment.set(res.assignment);
        
        // NẾU ĐÃ NỘP BÀI RỒI (Hoặc bị trễ) -> Chuyển thẳng sang màn hình KẾT QUẢ
        if (res.submission && ['submitted', 'graded', 'late'].includes((res.submission.status || '').toLowerCase())) {
          this.mySubmission.set(res.submission);
          this.viewState.set('done');
          
          if (this.assignment()?.maxAttempts > 1) {
            this.assignmentService.getMySubmissionHistory(id).subscribe({
              next: (historyRes: any) => {
                this.submissionHistory.set(Array.isArray(historyRes) ? historyRes : (historyRes?.data || []));
              },
              error: () => console.warn('Không thể tải lịch sử làm bài.')
            });
          }

          if ((res.submission.status || '').toUpperCase() === 'GRADED') {
            this.loadGradedDetails(id, res.submission.id);
          }
        } 
        // NẾU CHƯA NỘP HOẶC ĐANG LƯU NHÁP -> Ở lại màn hình THÔNG TIN
        else {
          if (res.submission) {
            this.submissionId.set(res.submission.id);
            this.mySubmission.set(res.submission);
          }
          this.viewState.set('info');
        }
        
        this.isLoading.set(false);
      },
      error: () => {
        this.toastService.error('Lỗi', 'Không thể tải thông tin bài tập.');
        this.isLoading.set(false);
      }
    });
  }

  // Hàm xử lý khi học sinh ấn "Bắt đầu làm bài" / "Tiếp tục làm bài"
  startAssignment() {
    this.isStarting.set(true);
    this.cheatCount.set(0);
    const asmId = this.assignment().id;
    const duration = this.assignment().timeLimitMinutes;

    // Luôn gọi startSubmission để lấy/tạo phiên làm bài
    this.assignmentService.startSubmission(asmId).subscribe({
      next: (subRes) => {
        const sub = subRes?.data || subRes;
        this.submissionId.set(sub.id);
        this.mySubmission.set(sub);

        // Gọi song song lấy câu hỏi và đáp án đã lưu (nếu có)
        forkJoin({
          questions: this.assignmentService.getQuestions(asmId),
          answers: this.assignmentService.getSubmissionAnswers(sub.id).pipe(
            catchError(() => of(null))
          )
        }).subscribe({
          next: (res: any) => {
            const mappedQs = this.mapQuestions(res.questions);
            const ansList = res.answers ? (Array.isArray(res.answers) ? res.answers : (res.answers?.data || [])) : [];
            
            // Phục hồi lại đáp án đã làm dở
            mappedQs.forEach((q: any) => {
              const ans = ansList.find((a: any) => a.questionId === q.id);
              if (ans) {
                if (q.allowMultipleAnswers) {
                  q.studentAnswer = ans.selectedOptionIds ? ans.selectedOptionIds.split(',').map((id: string) => parseInt(id, 10)) : [];
                } else if (q.questionType === 'ESSAY') {
                  q.studentAnswer = ans.textAnswer;
                } else {
                  q.studentAnswer = ans.selectedOptionId;
                }
              }
            });

            this.questions.set(mappedQs);
            this.viewState.set('doing'); 
            this.isStarting.set(false);

            // Bật Anti-cheat
            this.enableAntiCheat();

            if (duration && duration > 0) {
              const start = new Date(sub.startTime).getTime();
              const now = new Date().getTime();
              const elapsedSeconds = Math.floor((now - start) / 1000);
              const remainingSeconds = Math.max(0, (duration * 60) - elapsedSeconds);
              this.startTimerInSeconds(remainingSeconds);
            }
            this.startAutoSave();
          },
          error: () => {
            this.toastService.error('Lỗi', 'Không tải được câu hỏi.');
            this.isStarting.set(false);
          }
        });
      },
      error: () => {
        this.toastService.error('Lỗi', 'Không thể bắt đầu làm bài.');
        this.isStarting.set(false);
      }
    });
  }

  goBack() {
    this.location.back();
  }

  isMultipleChoice(q: any): boolean {
    if (!q) return false;
    if (q.options && q.options.length > 0) return true;
    if (!q.questionType) return false;
    const t = q.questionType.toString().toLowerCase().trim();
    return t === 'multiple_choice' || t === 'listening';
  }

  isEssay(q: any): boolean {
    if (!q) return false;
    if (!q.options || q.options.length === 0) return true;
    if (!q.questionType) return false;
    return q.questionType.toString().toLowerCase().trim() === 'essay';
  }

  private startTimerInSeconds(seconds: number) {
    this.remainingTime.set(seconds);
    this.updateTimerDisplay();

    this.timerInterval = setInterval(() => {
      if (this.remainingTime() > 0) {
        this.remainingTime.update(t => t - 1);
        this.updateTimerDisplay();
      } else {
        this.clearTimer();
        this.toastService.warning('Hết giờ!', 'Đã hết thời gian làm bài. Hệ thống sẽ tự động nộp bài.');
        this.submitFinal(true);
      }
    }, 1000);
  }

  private updateTimerDisplay() {
    const totalSeconds = this.remainingTime();
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;
    
    // Nếu có giờ thì hiển thị HH:MM:SS, không thì MM:SS
    if (h > 0) {
       this.timerDisplay.set(`${this.pad(h)}:${this.pad(m)}:${this.pad(s)}`);
    } else {
       this.timerDisplay.set(`${this.pad(m)}:${this.pad(s)}`);
    }
  }

  private pad(val: number): string {
    return val < 10 ? '0' + val : val.toString();
  }

  private clearTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }

  openSubmitModal() {
    this.showSubmitModal.set(true);
  }

  // Hàm đóng Modal
  closeSubmitModal() {
    this.showSubmitModal.set(false);
  }

  scrollToQuestion(index: number) {
    const element = document.getElementById('question-' + index);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  isQuestionAnswered(q: any): boolean {
    if (q.allowMultipleAnswers) {
      return Array.isArray(q.studentAnswer) && q.studentAnswer.length > 0;
    }
    return q.studentAnswer !== null && q.studentAnswer !== undefined && q.studentAnswer !== '';
  }

  onAnswerChange(q: any) {
    this.hasUnsavedChanges = true;
    // Kích hoạt Angular change detection / signal update
    this.questions.update(qs => [...qs]);
  }

  toggleCheckbox(question: any, optionId: number) {
    if (!Array.isArray(question.studentAnswer)) {
      question.studentAnswer = [];
    }
    const idx = question.studentAnswer.indexOf(optionId);
    if (idx > -1) {
      question.studentAnswer.splice(idx, 1);
    } else {
      question.studentAnswer.push(optionId);
    }
    this.onAnswerChange(question);
  }

  isOptionChecked(question: any, optionId: number): boolean {
    if (!Array.isArray(question.studentAnswer)) return false;
    return question.studentAnswer.includes(optionId);
  }

  // LOGIC NỘP BÀI (SUBMIT)
  submitFinal(isAutoSubmit: boolean = false) {

    this.closeSubmitModal();
    
    this.isSubmitting.set(true);
    const subId = this.submissionId();
    if (!subId) return;
    
    if (this.assignment().assignmentType !== 'file_upload' && this.questions().length > 0) {
      // Thu thập tất cả các câu hỏi đã được học sinh trả lời
      const payloads: any[] = [];
      this.questions().forEach(q => {
        const payload = {
          questionId: q.id,
          selectedOptionId: q.questionType === 'ESSAY' || q.allowMultipleAnswers ? null : (q.studentAnswer || null),
          selectedOptionIds: q.allowMultipleAnswers && Array.isArray(q.studentAnswer) ? q.studentAnswer.join(',') : null,
          textAnswer: q.questionType === 'ESSAY' ? q.studentAnswer : null
        };
        payloads.push(payload);
      });

      // Gọi API lưu hàng loạt 1 lần duy nhất
      this.assignmentService.batchSaveAnswers(subId, payloads).subscribe({
        next: () => this.finalizeSubmission(),
        error: () => {
          this.toastService.error('Lỗi', 'Không thể lưu đáp án. Vui lòng kiểm tra mạng và thử lại.');
          this.isSubmitting.set(false);
        }
      });
    } else {
      // Dành cho dạng nộp file (Bỏ qua khâu lưu đáp án từng câu)
      this.finalizeSubmission();
    }
  }

  private finalizeSubmission() {
    const subId = this.submissionId();
    if (!subId) {
       this.toastService.error('Lỗi', 'Chưa khởi tạo được phiên làm bài. Vui lòng tải lại trang.');
       return;
    }
    this.assignmentService.submitAssignment(subId).subscribe({
      next: (res) => {
        const sub = res?.data || res;
        this.mySubmission.set(sub);
        this.viewState.set('done');
        
        if (this.assignment()?.maxAttempts > 1) {
          const asmId = this.assignment()?.id;
          if (asmId) {
            this.assignmentService.getMySubmissionHistory(asmId).subscribe({
              next: (historyRes: any) => {
                this.submissionHistory.set(Array.isArray(historyRes) ? historyRes : (historyRes?.data || []));
              },
              error: () => console.warn('Không thể tải lịch sử làm bài.')
            });
          }
        }

        if ((sub.status || '').toUpperCase() === 'GRADED') {
            const asmId = this.assignment()?.id;
            if (asmId && sub.id) {
                this.loadGradedDetails(asmId, sub.id);
            }
        }
        this.toastService.success('Thành công', 'Đã nộp bài thành công!');
        this.clearTimer();
        if (this.autoSaveInterval) {
          clearInterval(this.autoSaveInterval);
        }
        this.isSubmitting.set(false);
        this.disableAntiCheat();
      },
      error: () => {
        this.toastService.error('Lỗi', 'Không thể nộp bài. Vui lòng thử lại.');
        this.isSubmitting.set(false);
      }
    });
  }

  // --- LOGIC ANTI-CHEAT ---
  private enableAntiCheat() {
    this.aiChatService.setChatVisibility(false);
    if (this.fullscreenContainer && this.fullscreenContainer.nativeElement) {
      this.fullscreenContainer.nativeElement.requestFullscreen().catch((err: any) => {
        console.warn('Không thể bật fullscreen tự động:', err);
      });
    } else {
      document.documentElement.requestFullscreen().catch((err: any) => {});
    }
    document.addEventListener('visibilitychange', this.visibilityListener);
    document.addEventListener('fullscreenchange', this.fullscreenListener);
    window.addEventListener('blur', this.blurListener);
  }

  private disableAntiCheat() {
    this.aiChatService.setChatVisibility(true);
    document.removeEventListener('visibilitychange', this.visibilityListener);
    document.removeEventListener('fullscreenchange', this.fullscreenListener);
    window.removeEventListener('blur', this.blurListener);
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    }
  }

  private handleVisibilityChange() {
    if (document.visibilityState === 'hidden' && this.viewState() === 'doing') {
      this.triggerCheatWarning();
    }
  }

  private handleBlur() {
    if (this.viewState() === 'doing') {
      this.triggerCheatWarning();
    }
  }

  private handleFullscreenChange() {
    if (!document.fullscreenElement && this.viewState() === 'doing') {
      this.triggerCheatWarning();
    }
  }

  private triggerCheatWarning() {
    if (this.viewState() !== 'doing') return;
    if (this.showCheatWarningModal() || this.isSubmitting()) return;

    const count = this.cheatCount() + 1;
    this.cheatCount.set(count);
    
    if (count >= 3) {
      this.toastService.warning('Cảnh báo', 'Bạn đã chuyển trang quá 3 lần. Bài làm đã bị thu tự động!');
      this.submitFinal(true);
    } else {
      this.showCheatWarningModal.set(true);
    }
  }

  resumeExamAfterWarning() {
    this.showCheatWarningModal.set(false);
    if (this.fullscreenContainer && this.fullscreenContainer.nativeElement) {
      this.fullscreenContainer.nativeElement.requestFullscreen().catch(() => {});
    } else {
      document.documentElement.requestFullscreen().catch(() => {});
    }
  }

  isSubmissionBlocked(): boolean {
    const asm = this.assignment();
    // Nếu không có hạn nộp (dueDate = null) thì không bao giờ chặn
    if (!asm || !asm.dueDate) return false; 
    
    const now = new Date().getTime();
    const due = new Date(asm.dueDate).getTime();
    
    // Tạm thời coi như không chặn nếu quá hạn (hoặc tùy logic backend)
    return (now > due);
  }

  private startAutoSave() {
    // Lưu định kỳ mỗi 30 giây
    this.autoSaveInterval = setInterval(() => {
      if (this.hasUnsavedChanges && this.viewState() === 'doing') {
        this.autoSaveAnswers();
      }
    }, 30000);
  }

  private autoSaveAnswers() {
    const subId = this.submissionId();
    if (!subId || this.questions().length === 0) return;

    const payloads: any[] = [];
    this.questions().forEach(q => {
      if (this.isQuestionAnswered(q)) {
        const payload = {
          questionId: q.id,
          selectedOptionId: q.questionType === 'ESSAY' || q.allowMultipleAnswers ? null : (q.studentAnswer || null),
          selectedOptionIds: q.allowMultipleAnswers && Array.isArray(q.studentAnswer) ? q.studentAnswer.join(',') : null,
          textAnswer: q.questionType === 'ESSAY' ? q.studentAnswer : null
        };
        payloads.push(payload);
      }
    });

    if (payloads.length > 0) {
      this.assignmentService.batchSaveAnswers(subId, payloads).subscribe({
        next: () => {
          this.hasUnsavedChanges = false;
        },
        error: (err) => {
          console.warn('Auto-save failed', err);
        }
      });
    }
  }

  getAssignmentTypeName(type: string): string {
    if (!type) return 'Không xác định';
    const map: any = {
      'HOMEWORK': 'Bài tập về nhà',
      'ESSAY': 'Tự luận',
      'QUIZ': 'Trắc nghiệm',
      'PROJECT': 'Dự án'
    };
    return map[type.toUpperCase()] || type || 'Không xác định';
  }
}