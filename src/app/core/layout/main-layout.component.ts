import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { ToastComponent } from '../../shared/components/toast/toast.component'; 

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SidebarComponent, HeaderComponent, ToastComponent],
  template: `
    <div class="layout-container flex h-screen bg-gray-50 font-sans text-gray-900 overflow-hidden relative">
      
      <app-sidebar [isSidebarVisible]="isSidebarVisible"></app-sidebar>

      <div 
        class="main-content flex-1 flex flex-col transition-all duration-300 ease-in-out"
        [ngStyle]="{ 'margin-left': isSidebarVisible ? '256px' : '0px' }"
      >
        
        <app-header (toggleSidebar)="toggleSidebar()"></app-header>

        <main class="content-area flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6 md:p-8 scrollbar-thin">
            <router-outlet></router-outlet>
        </main>
      </div>

    </div>
    
    <app-toast></app-toast>
  `,
  styles: [`
    :host { display: block; height: 100%; width: 100%; }
    /* Responsive margins are handled via Tailwind classes and ngStyle */
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainLayoutComponent {
  isSidebarVisible = true;

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }
}