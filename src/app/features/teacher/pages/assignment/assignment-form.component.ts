import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { AssignmentService } from '../../services/assignment.service';
import { LearningMaterialService } from '../../services/learning-material.service';
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
  private materialService = inject(LearningMaterialService);
  private toastService = inject(ToastService);
  public router = inject(Router);
  private route = inject(ActivatedRoute);

  assignmentForm!: FormGroup;
  classId = signal<string | null>(null);
  assignmentId = signal<string | null>(null);
  lessons = signal<any[]>([]);

  isEditMode = signal(false);
  isSubmitting = signal(false);
  isLoadingData = signal(false);

  ngOnInit() {
    this.initForm();

    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.isEditMode.set(true);
        this.assignmentId.set(id);
        this.loadExistingAssignment(id);
      } else {
        this.route.queryParamMap.subscribe(qParams => {
          const cid = qParams.get('classId');
          const lid = qParams.get('lessonId');
          if (cid) {
            this.classId.set(cid);
            this.loadLessons(cid, lid ? Number(lid) : undefined);
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
      lessonId: [null, Validators.required],
      title: ['', Validators.required],
      assignmentType: ['HOMEWORK', Validators.required],
      dueDate: [this.getDefaultDueDate(), Validators.required],
      timeLimitMinutes: [0, [Validators.min(0)]],
      maxAttempts: [1, [Validators.min(1)]],
      showCorrectAnswers: [true],
      description: [''],
      status: ['PUBLISHED', Validators.required]
    });
  }

  private loadLessons(classId: string, preselectedLessonId?: number) {
    this.materialService.getLessonsByClassId(classId).subscribe({
      next: (res: any) => {
        this.lessons.set(res || []);
        if (preselectedLessonId) {
          this.assignmentForm.patchValue({ lessonId: preselectedLessonId });
        } else if (res && res.length > 0 && !this.assignmentForm.get('lessonId')?.value) {
          this.assignmentForm.patchValue({ lessonId: res[0].id });
        }
      },
      error: (err) => console.error('Lỗi khi tải bài học:', err)
    });
  }

  private loadExistingAssignment(id: string) {
    this.isLoadingData.set(true);
    this.assignmentService.getAssignmentById(id).subscribe({
      next: (res) => {
        if (res.classId) {
          this.classId.set(res.classId.toString());
          this.loadLessons(res.classId.toString(), res.lessonId);
        }

        this.assignmentForm.patchValue({
          lessonId: res.lessonId,
          title: res.title,
          assignmentType: res.assignmentType || 'HOMEWORK',
          dueDate: this.formatToDateTimeLocal(res.dueDate),
          timeLimitMinutes: res.timeLimitMinutes || 0,
          maxAttempts: res.maxAttempts || 1,
          showCorrectAnswers: res.showCorrectAnswers !== false,
          description: res.description || '',
          status: res.status || 'PUBLISHED'
        });

        this.isLoadingData.set(false);
      },
      error: () => {
        this.toastService.error('Lỗi', 'Không thể tải thông tin bài tập!');
        this.router.navigate(['/teacher/my-classes']);
      }
    });
  }

  private getDefaultDueDate(): string {
    const nextWeek = new Date();
    nextWeek.setDate(nextWeek.getDate() + 7);
    nextWeek.setHours(23, 59, 0, 0);
    return nextWeek.toISOString().slice(0, 16);
  }

  private formatToDateTimeLocal(dateStr: string | null): string {
    if (!dateStr) return this.getDefaultDueDate();
    return dateStr.replace(' ', 'T').substring(0, 16);
  }

  private formatDateTimeForBackend(datetimeLocal: string): string {
    if (!datetimeLocal) return '';
    return datetimeLocal.replace('T', ' ') + ':00';
  }

  onSubmit() {
    if (this.assignmentForm.invalid) {
      this.assignmentForm.markAllAsTouched();
      return;
    }

    this.isSubmitting.set(true);
    const val = this.assignmentForm.value;
    const payload = {
      ...val,
      lessonId: Number(val.lessonId),
      dueDate: this.formatDateTimeForBackend(val.dueDate)
    };

    if (this.isEditMode()) {
      this.assignmentService.updateAssignment(this.assignmentId()!, payload).subscribe({
        next: () => {
          this.toastService.success('Thành công', 'Đã cập nhật bài tập!');
          this.isSubmitting.set(false);
          this.router.navigate(['/teacher/assignments', this.assignmentId()]);
        },
        error: (err) => {
          this.toastService.error('Lỗi', err.error?.message || 'Cập nhật bài tập thất bại');
          this.isSubmitting.set(false);
        }
      });
    } else {
      this.assignmentService.createAssignment(payload).subscribe({
        next: (res: any) => {
          this.toastService.success('Thành công', 'Đã tạo bài tập mới!');
          this.isSubmitting.set(false);
          const createdId = res?.data?.id || res?.id;
          if (createdId) {
            this.router.navigate(['/teacher/assignments', createdId]);
          } else if (this.classId()) {
            this.router.navigate(['/teacher/classes', this.classId()]);
          }
        },
        error: (err) => {
          this.toastService.error('Lỗi', err.error?.message || 'Tạo bài tập thất bại');
          this.isSubmitting.set(false);
        }
      });
    }
  }
}