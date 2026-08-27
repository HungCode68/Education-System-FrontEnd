import { Routes } from '@angular/router';
import { authGuard, permissionGuard } from '../../core/guards/auth.guard';
import { StudentComponent } from '../admin/pages/student/student.component';
import { StaffComponent } from '../admin/pages/staff/staff.component';
import { DepartmentComponent } from '../admin/pages/department/department.component';
import { UserComponent } from '../admin/pages/user/user.component';
import { ActivityLogComponent } from '../admin/pages/activity-log/activity-log.component';

export const hrRoutes: Routes = [
  {
    path: '',
    redirectTo: 'staffs',
    pathMatch: 'full'
  },
  {
    path: 'students',
    component: StudentComponent,
    canActivate: [authGuard, permissionGuard(['STUDENT_VIEW', 'STUDENT_READ', 'STUDENT_MANAGE', 'STUDENT_CREATE', 'STUDENT_UPDATE', 'STUDENT_DELETE'])]
  },
  {
    path: 'staffs',
    component: StaffComponent,
    canActivate: [authGuard, permissionGuard(['STAFF_VIEW', 'STAFF_READ', 'STAFF_MANAGE', 'STAFF_CREATE', 'STAFF_UPDATE', 'STAFF_DELETE'])]
  },
  {
    path: 'departments',
    component: DepartmentComponent,
    canActivate: [authGuard, permissionGuard(['DEPARTMENT_VIEW', 'DEPARTMENT_READ', 'DEPARTMENT_MANAGE', 'DEPARTMENT_CREATE', 'DEPARTMENT_UPDATE', 'DEPARTMENT_DELETE'])]
  },
  {
    path: 'users',
    component: UserComponent,
    canActivate: [authGuard, permissionGuard(['ACCOUNT_VIEW', 'ACCOUNT_READ', 'ACCOUNT_MANAGE', 'ACCOUNT_UPDATE', 'ACCOUNT_CREATE'])]
  },
  {
    path: 'activity-logs',
    component: ActivityLogComponent,
    canActivate: [authGuard, permissionGuard(['LOG_VIEW', 'LOG_READ', 'ROLE_VIEW'])]
  },
  {
    path: 'profile',
    loadComponent: () => import('../teacher/pages/teacher-profile/teacher-profile.component').then(m => m.TeacherProfileComponent),
    canActivate: [authGuard]
  }
];
