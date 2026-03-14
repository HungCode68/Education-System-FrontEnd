import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unauthorized',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="text-center">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">403</h1>
        <p class="text-xl text-gray-600 mb-6">Unauthorized Access</p>
        <p class="text-gray-500 mb-8">You don't have permission to access this resource.</p>
        <button
          (click)="goBack()"
          class="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Go Back
        </button>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UnauthorizedComponent {
  private router = inject(Router);

  goBack(): void {
    this.router.navigate(['/']);
  }
}
