import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  loginForm!: FormGroup;
  isLoading = signal(false);
  errorMessage = signal<string | null>(null);

  // State quản lý việc ẩn/hiện mật khẩu
  showPassword = signal(false);

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  // Hàm chuyển đổi trạng thái mật khẩu
  togglePasswordVisibility(): void {
    this.showPassword.update(v => !v);
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }

    this.isLoading.set(true);
    this.errorMessage.set(null);

    const { email, password } = this.loginForm.value;

    this.authService.login({ email, password }).subscribe({
      next: () => {
        this.isLoading.set(false);
        // Lấy roles từ authState (đã được set bởi AuthService)
        const roles = this.authService.authState().roles;
        this.navigateByRole(roles);
      },
      error: (error) => {
        this.isLoading.set(false);
        if (error.status === 401) {
          this.errorMessage.set('Invalid email or password');
        } else {
          this.errorMessage.set('An error occurred. Please try again.');
        }
      }
    });
  }

  private navigateByRole(roles: string[]): void {
    console.log('Navigating by roles:', roles);
    const hasRole = (role: string) => roles.some(r => r === role || r === `ROLE_${role}` || r.endsWith(`_${role}`) || r.includes(role));
    const isTeacher = roles.some(r => r.includes('TEACHER'));

    if (hasRole('ADMIN') || hasRole('SYSTEM') || hasRole('ADMIN_SYSTEM')) {
      this.router.navigate(['/admin']);
    } else if (hasRole('HR') || hasRole('NHAN_SU')) {
      this.router.navigate(['/hr']);
    } else if (hasRole('ACADEMIC') || hasRole('TRAINING') || hasRole('MANAGER')) {
      console.log('Triggering navigate to /academic');
      this.router.navigate(['/academic']).then(success => {
        console.log('Navigation success:', success);
      }).catch(err => {
        console.error('Navigation error:', err);
      });
    } else if (isTeacher) {
      this.router.navigate(['/teacher']);
    } else if (hasRole('STUDENT')) {
      this.router.navigate(['/student']);
    } else {
      this.router.navigate(['/unauthorized']);
    }
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}