import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="fixed top-5 right-5 z-[9999] flex flex-col gap-3 pointer-events-none w-full max-w-sm">
      @for (toast of toastService.toasts(); track toast.id) {
        <div class="toast-animation pointer-events-auto flex items-start p-4 bg-white rounded-2xl shadow-xl border-l-4 border border-gray-100"
             [ngClass]="{
               'border-l-green-500': toast.type === 'success',
               'border-l-red-500': toast.type === 'error',
               'border-l-amber-500': toast.type === 'warning',
               'border-l-blue-500': toast.type === 'info'
             }">
          
          <div class="flex-shrink-0 mr-3">
            @if (toast.type === 'success') {
              <div class="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
              </div>
            } @else if (toast.type === 'error') {
              <div class="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                <svg class="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </div>
            } @else if (toast.type === 'warning') {
              <div class="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                <svg class="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
              </div>
            }
          </div>

          <div class="flex-1 w-0 pt-0.5">
            <p class="text-sm font-bold text-gray-900">{{ toast.title }}</p>
            <p class="text-sm text-gray-500 mt-1">{{ toast.message }}</p>
          </div>

          <button (click)="toastService.remove(toast.id)" class="ml-4 flex-shrink-0 text-gray-400 hover:text-gray-900 hover:bg-gray-100 p-1.5 rounded-lg transition">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>
      }
    </div>
  `,
  styles: [`
    /* Hiệu ứng trượt từ bên phải vào cực kỳ mượt */
    .toast-animation {
      animation: slideInRight 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
    @keyframes slideInRight {
      from { transform: translateX(100%); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
  `]
})
export class ToastComponent {
  toastService = inject(ToastService);
}