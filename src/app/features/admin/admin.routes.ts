import { Routes } from '@angular/router';
import { authGuard, roleGuard } from '../../core/guards/auth.guard';
import { AdminDashboardComponent } from './pages/dashboard/admin-dashboard.component';

export const adminRoutes: Routes = [
  {
    path: 'dashboard',
    component: AdminDashboardComponent,
    canActivate: [authGuard, roleGuard(['ADMIN', 'SYSTEM_ADMIN'])]
  },
  {
    path: 'classes',
    loadComponent: () => Promise.resolve({ default: class {} }).then(() => {
      // Placeholder for future class management module
      return { default: class {} };
    }),
    canActivate: [authGuard, roleGuard(['ADMIN', 'SYSTEM_ADMIN'])]
  },
  {
    path: 'subjects',
    loadComponent: () => Promise.resolve({ default: class {} }).then(() => {
      // Placeholder for future subject management module
      return { default: class {} };
    }),
    canActivate: [authGuard, roleGuard(['ADMIN', 'SYSTEM_ADMIN'])]
  },
  {
    path: 'teaching',
    loadComponent: () => Promise.resolve({ default: class {} }).then(() => {
      // Placeholder for future teaching assignment module
      return { default: class {} };
    }),
    canActivate: [authGuard, roleGuard(['ADMIN', 'SYSTEM_ADMIN'])]
  },
  {
    path: 'analytics',
    loadComponent: () => Promise.resolve({ default: class {} }).then(() => {
      // Placeholder for future analytics module
      return { default: class {} };
    }),
    canActivate: [authGuard, roleGuard(['ADMIN', 'SYSTEM_ADMIN'])]
  },
  {
    path: 'announcements',
    loadComponent: () => Promise.resolve({ default: class {} }).then(() => {
      // Placeholder for future announcements module
      return { default: class {} };
    }),
    canActivate: [authGuard, roleGuard(['ADMIN', 'SYSTEM_ADMIN'])]
  },
  {
    path: 'settings',
    loadComponent: () => Promise.resolve({ default: class {} }).then(() => {
      // Placeholder for future settings module
      return { default: class {} };
    }),
    canActivate: [authGuard, roleGuard(['ADMIN', 'SYSTEM_ADMIN'])]
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];
