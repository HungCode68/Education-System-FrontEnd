import { Routes } from '@angular/router';
import { StudentLayoutComponent } from './layout/student-layout/student-layout.component';
import { roleGuard } from '../../core/guards/auth.guard';
import { StudentComponent } from './student.component';
import { StudentMyClassesComponent } from './pages/my-classes/student-my-classes.component';

export const studentRoutes: Routes = [
    {
        path: '',
        component: StudentLayoutComponent,
        canActivate: [roleGuard(['STUDENT'])], // Bỏ comment dòng này nếu bạn dùng Guard phân quyền
        children: [
            {
                // Mặc định khi vào /student sẽ tự động chuyển hướng sang dashboard
                path: '',
                redirectTo: 'my-classes',
                pathMatch: 'full'
            },
            {
                path: 'dashboard',
                component: StudentComponent
            },
            {
                path: 'my-classes',
                component: StudentMyClassesComponent,
                canActivate: [roleGuard(['STUDENT'])],
            },
            {
                path: 'class/:id',
                loadComponent: () => import('./pages/class-detail/student-class-detail.component').then(m => m.StudentClassDetailComponent),
                canActivate: [roleGuard(['STUDENT'])],
            },
            {
                path: 'assignment/:id',
                loadComponent: () => import('./pages/assignment-detail/student-assignment-detail.component').then(m => m.StudentAssignmentDetailComponent),
                canActivate: [roleGuard(['STUDENT'])],
            },
            {
                path: 'notifications',
                loadComponent: () => import('./pages/notification/notification-bell.component').then(m => m.NotificationBellComponent),
                canActivate: [roleGuard(['STUDENT'])],
            },
            {
                path: 'homeroom-stream/:id',
                loadComponent: () => import('./pages/announcement/student-homeroom-stream.component').then(m => m.StudentHomeroomStreamComponent),
                canActivate: [roleGuard(['STUDENT'])],
            },
            {
                path: 'profile',
                loadComponent: () => import('./pages/student-profile/student-profile.component').then(m => m.StudentProfileComponent),
                canActivate: [roleGuard(['STUDENT'])],
            }


        ]
    }
];