import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TeacherProfileService } from '../../services/teacher-profile.service';
import { ToastService } from '../../../../core/services/toast.service';

@Component({
  selector: 'app-teacher-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './teacher-profile.component.html'
})
export class TeacherProfileComponent implements OnInit {
  private profileService = inject(TeacherProfileService);
  private toastService = inject(ToastService);
  private fb = inject(FormBuilder);

  profile = signal<any>(null);
  isLoading = signal(true);
  
  constructor() {
    this.passwordForm = this.fb.group({
      oldPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    }, { validators: this.passwordsMatchValidator });
  }

  passwordsMatchValidator(g: FormGroup) {
    return g.get('newPassword')?.value === g.get('confirmPassword')?.value
      ? null : { mismatch: true };
  }

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
      error: (err) => {
        if (err.status === 404) {
          this.toastService.warning('Chưa liên kết', 'Tài khoản của bạn chưa được liên kết với hồ sơ nhân sự nào.');
        } else {
          this.toastService.error('Lỗi', 'Không thể tải thông tin hồ sơ.');
        }
        this.isLoading.set(false);
      }
    });
  }

  // --- Mật khẩu ---
  passwordForm: FormGroup;
  isPasswordModalOpen = signal(false);
  isChangingPassword = signal(false);
  showOldPassword = signal(false);
  showNewPassword = signal(false);

  openPasswordModal() {
    this.passwordForm.reset();
    this.showOldPassword.set(false);
    this.showNewPassword.set(false);
    this.isPasswordModalOpen.set(true);
  }

  closePasswordModal() {
    this.isPasswordModalOpen.set(false);
  }

  submitChangePassword() {
    if (this.passwordForm.invalid) {
      this.passwordForm.markAllAsTouched();
      return;
    }

    this.isChangingPassword.set(true);
    const data = {
      oldPassword: this.passwordForm.value.oldPassword,
      newPassword: this.passwordForm.value.newPassword
    };

    this.profileService.changePassword(data).subscribe({
      next: (res) => {
        this.toastService.success('Thành công', res.message || 'Đổi mật khẩu thành công. Vui lòng đăng nhập lại.');
        this.closePasswordModal();
        this.isChangingPassword.set(false);
      },
      error: (err) => {
        let msg = 'Không thể đổi mật khẩu. Vui lòng thử lại sau.';
        if (err.status === 400 || err.status === 401 || err.status === 403) {
          msg = err.error?.message || err.error?.error || 'Mật khẩu cũ không chính xác.';
        }
        this.toastService.error('Thất bại', msg);
        this.isChangingPassword.set(false);
      }
    });
  }
}