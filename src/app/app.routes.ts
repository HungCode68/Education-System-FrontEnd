import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/pages/login/login.component';
import { UnauthorizedComponent } from './features/unauthorized/unauthorized.component';
import { MainLayoutComponent } from './core/layout/main-layout.component';
import { authGuard, publicGuard, roleGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [publicGuard]
  },
  {
    path: 'admin',
    component: MainLayoutComponent,
    canActivate: [authGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./features/admin/admin.routes').then(m => m.adminRoutes)
      }
    ]
  },
  {
    path: 'academic',
    component: MainLayoutComponent,
    canActivate: [authGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./features/academic/academic.routes').then(m => m.academicRoutes)
      }
    ]
  },
  {
    path: 'hr',
    component: MainLayoutComponent,
    canActivate: [authGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./features/hr/hr.routes').then(m => m.hrRoutes)
      }
    ]
  },
  {
    path: 'teacher',
    component: MainLayoutComponent,
    canActivate: [authGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./features/teacher/teacher.routes').then(m => m.teacherRoutes)
      }
    ]
  },
  {
    path: 'student',
    component: MainLayoutComponent,
    canActivate: [authGuard, roleGuard(['STUDENT'])],
    children: [
      {
        path: '',
        loadChildren: () => import('./features/student/student.routes').then(m => m.studentRoutes)
      }
    ]
  },
  {
    path: 'unauthorized',
    component: UnauthorizedComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/login'
  }
];
