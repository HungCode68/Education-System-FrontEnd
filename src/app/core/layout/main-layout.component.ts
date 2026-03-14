import { Component, ChangeDetectionStrategy, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule, RouterModule, SidebarComponent, HeaderComponent] as const,
  template: `
    <div class="layout-wrapper">
      <app-sidebar class="layout-sidebar"></app-sidebar>
      <div class="layout-content">
        <app-header class="layout-header"></app-header>
        <main class="layout-main">
          <router-outlet></router-outlet>
        </main>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      height: 100vh;
    }

    .layout-wrapper {
      display: flex;
      height: 100%;
      background-color: #f9fafb;
    }

    .layout-sidebar {
      width: 280px;
      border-right: 1px solid #e5e7eb;
      overflow-y: auto;
      background-color: #ffffff;
    }

    @media (max-width: 1024px) {
      .layout-sidebar {
        width: 80px;
      }
    }

    @media (max-width: 768px) {
      .layout-sidebar {
        position: fixed;
        left: 0;
        top: 0;
        height: 100%;
        width: 280px;
        z-index: 999;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        transform: translateX(-100%);
        transition: transform 250ms ease-in-out;
      }

      .layout-sidebar.open {
        transform: translateX(0);
      }
    }

    .layout-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }

    .layout-header {
      height: 64px;
      border-bottom: 1px solid #e5e7eb;
      background-color: #ffffff;
      display: flex;
      align-items: center;
      padding: 0 24px;
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    }

    .layout-main {
      flex: 1;
      overflow-y: auto;
      padding: 24px;
    }

    @media (max-width: 768px) {
      .layout-main {
        padding: 16px;
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainLayoutComponent {}
