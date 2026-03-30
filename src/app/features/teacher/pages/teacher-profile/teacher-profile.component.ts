import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TeacherProfileService } from '../../services/teacher-profile.service';
import { ToastService } from '../../../../core/services/toast.service';

@Component({
  selector: 'app-teacher-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './teacher-profile.component.html'
})
export class TeacherProfileComponent implements OnInit {
  private profileService = inject(TeacherProfileService);
  private toastService = inject(ToastService);
  private fb = inject(FormBuilder);

  profile = signal<any>(null);
  isLoading = signal(true);
  

  ngOnInit() {
    this.loadProfile();
  }

  loadProfile() {
    this.isLoading.set(true);
    this.profileService.getMyProfile().subscribe({
      next: (res) => {
        this.profile.set(res);
        this.isLoading.set(false);
      },
      error: () => {
        this.toastService.error('Lỗi', 'Không thể tải thông tin hồ sơ');
        this.isLoading.set(false);
      }
    });
  }
}