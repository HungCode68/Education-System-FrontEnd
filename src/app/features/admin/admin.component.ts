import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./admin.component.css'],
  template: `
    <div class="admin-container">
      <h1 class="admin-title">Admin Dashboard</h1>
      <p class="admin-welcome">Welcome, {{ authService.authState().email }}</p>
      <button
        (click)="logout()"
        class="admin-logout-btn"
      >
        Logout
      </button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminComponent {
  authService = inject(AuthService);

  logout(): void {
    this.authService.logout();
  }
}
