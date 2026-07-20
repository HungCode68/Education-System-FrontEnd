import { Routes } from '@angular/router';
import { authGuard, roleGuard } from '../../core/guards/auth.guard';
import { MainLayoutComponent } from '../../core/layout/main-layout.component';
import { AdminDashboardComponent } from './pages/dashboard/admin-dashboard.component';
import { SchoolYearComponent } from './pages/school-year/school-year.component';
import { SubjectComponent } from './pages/subject/subject.component';
import { GradeComponent } from './pages/grade/grade.component';
import { GradeSubjectComponent } from './pages/grade-subject/grade-subject.component';
import { PhysicalClassComponent } from './pages/physical-class/physical-class.component'
import { ClassStudentComponent } from './pages/class-student/class-student.component';
import { StudentComponent } from './pages/student/student.component';
import { TeacherComponent } from './pages/teacher/teacher.component';
import { DepartmentComponent } from './pages/department/department.component';
import { RoleComponent } from './pages/role/role.component';
import { PermissionComponent } from './pages/permission/permission.component';
import { UserComponent } from './pages/user/user.component';
import { ClassTransferHistoryComponent } from './pages/class-transfer-history/class-transfer-history.component';
import { OnlineClassComponent } from './pages/online-class/online-class.component';
import { OnlineClassStudentComponent } from './pages/online-class-student/online-class-student.component';
import { ActivityLogComponent } from './pages/activity-log/activity-log.component';

export const adminRoutes: Routes = [
  {
    path: 'dashboard',
    component: AdminDashboardComponent,
    canActivate: [authGuard, roleGuard(['SYSTEM_ADMIN'])]
  },
  {
    path: 'school-years',
    component: SchoolYearComponent,
    canActivate: [authGuard, roleGuard(['SYSTEM_ADMIN'])]
  },
  {
    path: 'subjects',
    component: SubjectComponent,
    canActivate: [authGuard, roleGuard(['SYSTEM_ADMIN'])]
  },
  {
    path: 'grades',
    component: GradeComponent,
    canActivate: [authGuard, roleGuard(['SYSTEM_ADMIN'])]
  },
  {
    path: 'grade-subjects',
    component: GradeSubjectComponent,
    canActivate: [authGuard, roleGuard(['SYSTEM_ADMIN'])]
  },
  {
    path: 'physical-classes',
    component: PhysicalClassComponent,
    canActivate: [authGuard, roleGuard(['SYSTEM_ADMIN'])]
  },
  {
    path: 'physical-classes/:id/students',
    component: ClassStudentComponent,
    canActivate: [authGuard, roleGuard(['SYSTEM_ADMIN'])]
  },
  {
    path: 'class-students',
    component: ClassStudentComponent,
    canActivate: [authGuard, roleGuard(['SYSTEM_ADMIN'])]
  },
  {
    path: 'class-transfer-history',
    component: ClassTransferHistoryComponent,
    canActivate: [authGuard, roleGuard(['SYSTEM_ADMIN'])]
  },
  {
    path: 'online-classes',
    component: OnlineClassComponent,
    canActivate: [authGuard, roleGuard(['SYSTEM_ADMIN'])]
  },
  {
    path: 'online-classes/:id/students',
    component: OnlineClassStudentComponent,
    canActivate: [authGuard, roleGuard(['SYSTEM_ADMIN'])]
  },
  {
    path: 'students',
    component: StudentComponent,
    canActivate: [authGuard, roleGuard(['SYSTEM_ADMIN'])]
  },
  {
    path: 'teachers',
    component: TeacherComponent,
    canActivate: [authGuard, roleGuard(['SYSTEM_ADMIN'])]
  },
  {
    path: 'departments',
    component: DepartmentComponent,
    canActivate: [authGuard, roleGuard(['SYSTEM_ADMIN'])]
  },
  {
    path: 'roles',
    component: RoleComponent,
    canActivate: [authGuard, roleGuard(['SYSTEM_ADMIN'])]
  },
  {
    path: 'permissions',
    component: PermissionComponent,
    canActivate: [authGuard, roleGuard(['SYSTEM_ADMIN'])]
  },
  {
    path: 'users',
    component: UserComponent,
    canActivate: [authGuard, roleGuard(['SYSTEM_ADMIN'])]
  },
  {
    path: 'activity-logs',
    component: ActivityLogComponent,
    canActivate: [authGuard, roleGuard(['SYSTEM_ADMIN'])]
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];