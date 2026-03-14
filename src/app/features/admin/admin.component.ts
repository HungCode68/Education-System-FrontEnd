import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-8">
      <h1 class="text-3xl font-bold">Admin Dashboard</h1>
      <p class="mt-4 text-gray-600">Welcome, {{ authService.authState().email }}</p>
      <button
        (click)="logout()"
        class="mt-6 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
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
