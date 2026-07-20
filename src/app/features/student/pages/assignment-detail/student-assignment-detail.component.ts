import { Component, OnInit, inject, signal, OnDestroy } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { forkJoin, of } from 'rxjs';
import { StudentAssignmentService } from '../../services/student-assignment.service';
import { ToastService } from '../../../../core/services/toast.service';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-student-assignment-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './student-assignment-detail.component.html'
})
export class StudentAssignmentDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private location = inject(Location);
  private assignmentService = inject(StudentAssignmentService);
  private toastService = inject(ToastService);

  // States
  viewState = signal<'info' | 'doing' | 'done'>('info'); // Quản lý màn hình hiện tại
  assignment = signal<any>(null);
  questions = signal<any[]>([]);
  
  isLoading = signal(true);
  isStarting = signal(false);

  mySubmission = signal<any>(null);

  // STATE CHO ĐỒNG HỒ ĐẾM NGƯỢC
  remainingTime = signal<number>(0); // Lưu số giây còn lại
  timerDisplay = signal<string>('--:--'); // Chuỗi hiển thị (VD: 45:00)
  private timerInterval: any;

  submissionId = signal<string | null>(null);
  isSubmitting = signal(false);

  attachments = signal<any[]>([]); // Lưu danh sách file đã upload
  isUploading = signal(false);     // Trạng thái đang tải file lên

  // Bổ sung State cho Modal Nộp bài
  showSubmitModal = signal(false);

  // Bổ sung State cho Modal Xóa File
  showDeleteModal = signal(false);
  fileToDelete = signal<string | null>(null);

  ngOnDestroy() {
    this.clearTimer();
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadAssignmentDetail(id);
    }
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
        if (res.submission && ['submitted', 'graded', 'late'].includes(res.submission.submissionStatus.toLowerCase())) {
          this.mySubmission.set(res.submission);
          this.viewState.set('done');
        } 
        // NẾU CHƯA NỘP HOẶC ĐANG LƯU NHÁP -> Ở lại màn hình THÔNG TIN
        else {
          if (res.submission) this.submissionId.set(res.submission.id);
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

  // Hàm xử lý khi học sinh ấn "Bắt đầu làm bài"
  startAssignment() {
    this.isStarting.set(true);
    const asmId = this.assignment().id;
    const duration = this.assignment().durationMinutes;

    // Lấy danh sách câu hỏi
    this.assignmentService.getQuestions(asmId).subscribe({
      next: (questionsRes) => {
        
        // DÙ CÓ CÂU HỎI HAY KHÔNG, VẪN PHẢI TẠO BẢN NHÁP TRƯỚC ĐỂ LẤY ID!
        this.assignmentService.submitAssignment(asmId, false).subscribe({
          next: (subRes) => {
            // Đã tạo nháp thành công, lưu lại ID để nộp file
            this.submissionId.set(subRes.id); 

            //  Bài Nộp File (Không có câu hỏi)
            if (!questionsRes || questionsRes.length === 0) {
               this.viewState.set('doing');
               this.isStarting.set(false);
               if (duration && duration > 0) this.startTimer(duration);
               return; // Dừng tại đây, không cần ghép đáp án
            }

            // Có câu hỏi (Trắc nghiệm/Tự luận) -> Lấy thêm đáp án
            const optionRequests = questionsRes.map(q => {
              if (this.isMultipleChoice(q.questionType)) {
                return this.assignmentService.getQuestionOptions(q.id);
              }
              return of([]); 
            });

            forkJoin(optionRequests).subscribe(optionsArray => {
              questionsRes.forEach((q, index) => {
                q.options = optionsArray[index];
                q.studentAnswer = null;
              });
              
              this.questions.set(questionsRes);
              this.viewState.set('doing'); 
              this.isStarting.set(false);

              if (duration && duration > 0) {
                this.startTimer(duration);
              }
            });
          },
          error: () => {
            this.toastService.error('Lỗi', 'Không thể khởi tạo phiên làm bài. Vui lòng thử lại.');
            this.isStarting.set(false);
          }
        });

      },
      error: () => {
        this.toastService.error('Lỗi', 'Không thể tải cấu trúc đề thi.');
        this.isStarting.set(false);
      }
    });
  }

  goBack() {
    this.location.back();
  }

  isMultipleChoice(type: string): boolean {
    if (!type) return false;
    return type.toString().toLowerCase().trim() === 'multiple_choice';
  }

  isEssay(type: string): boolean {
    if (!type) return false;
    return type.toString().toLowerCase().trim() === 'essay';
  }

  private startTimer(minutes: number) {
    this.remainingTime.set(minutes * 60); // Đổi ra giây
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

  // LOGIC NỘP BÀI (SUBMIT)
  submitFinal(isAutoSubmit: boolean = false) {

    this.closeSubmitModal();
    
    this.isSubmitting.set(true);
    const subId = this.submissionId();
    if (!subId) return;
    
    if (this.assignment().assignmentType !== 'file_upload' && this.questions().length > 0) {
      // Thu thập tất cả các câu hỏi đã được học sinh trả lời
      const saveRequests = this.questions().map(q => {
        const payload: any = {};
        if (this.isMultipleChoice(q.questionType)) {
          payload.selectedOptionId = q.studentAnswer;
        } else if (this.isEssay(q.questionType)) {
          payload.answerText = q.studentAnswer;
        }
        
        // Chỉ gọi API lưu nếu có đáp án
        if (payload.selectedOptionId || payload.answerText) {
          return this.assignmentService.saveAnswer(subId, q.id, payload);
        }
        return of(null); // Bỏ qua câu chưa làm
      });

      // Chờ lưu hết đáp án rồi mới chốt Nộp bài
      forkJoin(saveRequests).subscribe({
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
    this.assignmentService.submitAssignment(this.assignment().id, true).subscribe({
      next: (res) => {
        this.clearTimer();
        this.isSubmitting.set(false);
        // Lưu dữ liệu bài nộp (Đã bao gồm Điểm tự động từ Backend) vào state
        this.mySubmission.set(res); 
        this.viewState.set('done'); // Chuyển sang màn hình Thành công / Điểm số
      },
      error: () => {
        this.toastService.error('Lỗi', 'Có lỗi xảy ra khi nộp bài!');
        this.isSubmitting.set(false);
      }
    });
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (!file) return;

    // Giới hạn dung lượng 10MB (Tương đương cấu hình Backend)
    if (file.size > 10 * 1024 * 1024) {
      this.toastService.warning('File quá lớn', 'Vui lòng chọn file có dung lượng dưới 10MB.');
      event.target.value = ''; // Reset input
      return;
    }

    const subId = this.submissionId();
    if (!subId) {
       this.toastService.error('Lỗi', 'Chưa khởi tạo được phiên làm bài. Vui lòng tải lại trang.');
       return;
    }

    this.isUploading.set(true);
    this.assignmentService.uploadAttachment(subId, file).subscribe({
      next: (res) => {
         // Thêm file vừa upload thành công vào danh sách hiển thị
         this.attachments.update(files => [...files, res]);
         this.isUploading.set(false);
      },
      error: (err) => {
         this.toastService.error('Lỗi', err.error?.message || 'Không thể tải file lên. Vui lòng thử lại.');
         this.isUploading.set(false);
      }
    });
    
    // Reset ô input để có thể chọn lại cùng 1 file nếu lỡ tay xóa
    event.target.value = '';
  }

  // Hàm mở Modal khi người dùng ấn nút Xóa
  removeAttachment(attachmentId: string) {
    this.fileToDelete.set(attachmentId);
    this.showDeleteModal.set(true); // Hiển thị Modal
  }

  // Hàm đóng Modal khi người dùng ấn Hủy hoặc Click ra ngoài
  closeDeleteModal() {
    this.showDeleteModal.set(false);
    this.fileToDelete.set(null);
  }

  // Hàm thực thi lệnh Xóa 
  confirmDelete() {
    const attachmentId = this.fileToDelete();
    if (!attachmentId) return;

    this.assignmentService.deleteAttachment(attachmentId).subscribe({
      next: () => {
         // Lọc bỏ file đã xóa khỏi danh sách
         this.attachments.update(files => files.filter(f => f.id !== attachmentId));
         this.closeDeleteModal(); // Xóa xong thì đóng Modal
         this.toastService.success('Thành công', 'Đã xóa file đính kèm khỏi hệ thống.');
      },
      error: () => {
         this.toastService.error('Lỗi', 'Không thể xóa file. Vui lòng thử lại.');
         this.closeDeleteModal();
      }
    });
  }

  formatBytes(bytes: number, decimals = 2) {
    if (!bytes || bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

  isSubmissionBlocked(): boolean {
    const asm = this.assignment();
    // Nếu không có hạn nộp (dueTime = null) thì không bao giờ chặn
    if (!asm || !asm.dueTime) return false; 
    
    const now = new Date().getTime();
    const due = new Date(asm.dueTime).getTime();
    
    // Trả về TRUE (Bị chặn) NẾU hiện tại đã qua hạn VÀ giáo viên không cho nộp muộn
    return (now > due) && !asm.allowLateSubmission;
  }
}