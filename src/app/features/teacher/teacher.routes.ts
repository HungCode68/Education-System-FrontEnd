import { Routes } from '@angular/router';
import { authGuard, roleGuard } from '../../core/guards/auth.guard';
import { TeacherDashboardComponent } from './pages/dashboard/teacher-dashboard.component';
import { ClassListComponent } from './pages/class-list/class-list.component';
import { ClassDetailComponent } from './pages/class-detail/class-detail.component';
import { StudentsTabComponent } from './components/students-tab/students-tab.component';
import { MaterialsTabComponent } from './components/materials-tab/materials-tab.component';
import { AssignmentsTabComponent } from './components/assignments-tab/assignments-tab.component';
import { ProgressTabComponent } from './components/progress-tab/progress-tab.component';
import { GradesTabComponent } from './components/grades-tab/grades-tab.component';

export const teacherRoutes: Routes = [
  {
    path: 'dashboard',
    component: TeacherDashboardComponent,
    canActivate: [authGuard, roleGuard(['TEACHER'])]
  },
  {
    path: 'classes',
    component: ClassListComponent,
    canActivate: [authGuard, roleGuard(['TEACHER'])]
  },
  {
    path: 'classes/:classId',
    component: ClassDetailComponent,
    canActivate: [authGuard, roleGuard(['TEACHER'])],
    children: [
      {
        path: 'students',
        component: StudentsTabComponent,
        canActivate: [authGuard, roleGuard(['TEACHER'])]
      },
      {
        path: 'materials',
        component: MaterialsTabComponent,
        canActivate: [authGuard, roleGuard(['TEACHER'])]
      },
      {
        path: 'assignments',
        component: AssignmentsTabComponent,
        canActivate: [authGuard, roleGuard(['TEACHER'])]
      },
      {
        path: 'progress',
        component: ProgressTabComponent,
        canActivate: [authGuard, roleGuard(['TEACHER'])]
      },
      {
        path: 'grades',
        component: GradesTabComponent,
        canActivate: [authGuard, roleGuard(['TEACHER'])]
      },
      {
        path: '',
        redirectTo: 'students',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];
