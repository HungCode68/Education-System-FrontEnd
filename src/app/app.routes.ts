import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/pages/login/login.component';
import { StudentComponent } from './features/student/student.component';
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
    canActivate: [authGuard, roleGuard(['ADMIN', 'SYSTEM_ADMIN'])],
    children: [
      {
        path: '',
        loadChildren: () => import('./features/admin/admin.routes').then(m => m.adminRoutes)
      }
    ]
  },
  {
    path: 'teacher',
    component: MainLayoutComponent,
    canActivate: [authGuard, roleGuard(['TEACHER'])],
    children: [
      {
        path: '',
        loadChildren: () => import('./features/teacher/teacher.routes').then(m => m.teacherRoutes)
      }
    ]
  },
  {
    path: 'student',
    component: StudentComponent,
    canActivate: [authGuard, roleGuard(['STUDENT'])]
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
