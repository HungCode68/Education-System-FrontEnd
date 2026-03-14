import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./student.component.css'],
  template: `
    <div class="student-container">
      <h1 class="student-title">Student Dashboard</h1>
      <p class="student-welcome">Welcome, {{ authService.authState().email }}</p>
      <button
        (click)="logout()"
        class="student-logout-btn"
      >
        Logout
      </button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StudentComponent {
  authService = inject(AuthService);

  logout(): void {
    this.authService.logout();
  }
}
