import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AssignmentSubmissionService } from '../../services/assignment-submission.service';
import { ToastService } from '../../../../core/services/toast.service';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-submission-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './submission-detail.component.html'
})
export class SubmissionDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private submissionService = inject(AssignmentSubmissionService);
  private toastService = inject(ToastService);
  private location = inject(Location);
  private fb = inject(FormBuilder);
  
  apiUrl = environment.apiUrl;

  submissionId = signal<string | null>(null);
  submission = signal<any | null>(null);
  answers = signal<any[]>([]);
  
  isLoading = signal(true);
  isLoadingAnswers = signal(true);
  isGrading = signal(false);

  gradeForm!: FormGroup;
  essayScoresForm!: FormGroup;

  ngOnInit() {
    this.gradeForm = this.fb.group({
      score: [{value: '', disabled: true}, [Validators.required, Validators.min(0), Validators.max(10)]],
      feedback: ['']
    });

    this.essayScoresForm = this.fb.group({});

    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.submissionId.set(id);
        this.loadSubmissionDetails(id);
      }
    });
  }

  loadSubmissionDetails(id: string) {
    this.isLoading.set(true);
    this.submissionService.getSubmissionById(id).subscribe({
      next: (sub) => {
        this.submission.set(sub);
        this.gradeForm.patchValue({
          score: sub.score !== null ? sub.score : '',
          feedback: sub.feedback || ''
        });
        this.isLoading.set(false);
        this.loadAnswers(id);
      },
      error: () => {
        this.toastService.error('Lỗi', 'Không tải được chi tiết bài nộp');
        this.isLoading.set(false);
      }
    });
  }

  loadAnswers(id: string) {
    this.isLoadingAnswers.set(true);
    this.submissionService.getSubmissionAnswers(id).subscribe({
      next: (res) => {
        this.answers.set(res || []);
        
        this.essayScoresForm = this.fb.group({});
        res.forEach(ans => {
           if (ans.questionType === 'ESSAY' || ans.questionType === 'SHORT_ANSWER') {
               this.essayScoresForm.addControl('ans_' + ans.id, this.fb.control(ans.earnedScore || '', [Validators.min(0), Validators.max(ans.maxScore || 10)]));
           }
        });
        
        this.essayScoresForm.valueChanges.subscribe(() => {
           this.calculateTotalScore(res);
        });
        
        if (Object.keys(this.essayScoresForm.controls).length > 0) {
            this.calculateTotalScore(res);
        }
        
        this.isLoadingAnswers.set(false);
      },
      error: () => {
        this.toastService.error('Lỗi', 'Không tải được chi tiết bài làm');
        this.isLoadingAnswers.set(false);
      }
    });
  }

  calculateTotalScore(answers: any[]) {
     let autoScore = 0;
     let essayScore = 0;
     
     answers.forEach(ans => {
         if (ans.questionType !== 'ESSAY' && ans.questionType !== 'SHORT_ANSWER') {
             autoScore += ans.earnedScore || 0;
         }
     });
     
     Object.values(this.essayScoresForm.value).forEach((val: any) => {
         if (val !== null && val !== undefined && val !== '') {
             essayScore += parseFloat(val) || 0;
         }
     });
     
     let total = autoScore + essayScore;
     total = Math.round(total * 100) / 100;
     this.gradeForm.patchValue({ score: total });
  }

  submitGrade() {
    if (this.gradeForm.invalid || this.essayScoresForm.invalid || !this.submissionId()) {
      this.gradeForm.markAllAsTouched();
      this.essayScoresForm.markAllAsTouched();
      return;
    }

    this.isGrading.set(true);
    
    const grades: { answerId: number, score: number }[] = [];
    Object.keys(this.essayScoresForm.controls).forEach(key => {
        const answerId = parseInt(key.replace('ans_', ''));
        let score = this.essayScoresForm.get(key)?.value;
        if (score === null || score === undefined || score === '') {
             score = 0;
        } else {
             score = parseFloat(score);
        }
        grades.push({ answerId, score });
    });
    
    if (grades.length > 0) {
        this.submissionService.batchGradeAnswers(this.submissionId()!, grades).subscribe({
            next: () => {
                this.saveSubmissionFeedback();
            },
            error: (err) => {
                this.toastService.error('Lỗi', err.error?.message || 'Chấm điểm tự luận thất bại');
                this.isGrading.set(false);
            }
        });
    } else {
        this.saveSubmissionFeedback();
    }
  }

  saveSubmissionFeedback() {
    const payload = { ...this.gradeForm.getRawValue() }; // getRawValue to include disabled fields
    this.submissionService.gradeSubmission(this.submissionId()!, payload).subscribe({
      next: () => {
        this.toastService.success('Thành công', 'Đã chấm điểm & gửi thông báo cho học sinh!');
        this.isGrading.set(false);
        this.goBack();
      },
      error: (err) => {
        this.toastService.error('Lỗi', err.error?.message || 'Chấm điểm thất bại');
        this.isGrading.set(false);
      }
    });
  }

  goBack() {
    this.location.back();
  }

  isAudioUrl(url: string | null | undefined): boolean {
    if (!url) return false;
    const lowerUrl = url.toLowerCase();
    return lowerUrl.includes('.mp3') || lowerUrl.includes('.wav') || lowerUrl.includes('.ogg') || lowerUrl.includes('.m4a');
  }

  isImageUrl(url: string | null | undefined): boolean {
    if (!url) return false;
    const lowerUrl = url.toLowerCase();
    return lowerUrl.includes('.jpg') || lowerUrl.includes('.jpeg') || lowerUrl.includes('.png') || lowerUrl.includes('.gif') || lowerUrl.includes('.webp');
  }
}
