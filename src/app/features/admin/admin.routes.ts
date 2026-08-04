import { Routes } from '@angular/router';
import { authGuard, roleGuard } from '../../core/guards/auth.guard';
import { AdminDashboardComponent } from './pages/dashboard/admin-dashboard.component';
import { TermComponent } from './pages/term/term.component';
import { CourseComponent } from './pages/course/course.component';
import { ClassComponent } from './pages/class/class.component';
import { RoomComponent } from './pages/room/room.component';
import { ScheduleComponent as ClassScheduleComponent } from '../academic/pages/schedule/schedule.component';
import { StudentComponent } from './pages/student/student.component';
import { StaffComponent } from './pages/staff/staff.component';
import { DepartmentComponent } from './pages/department/department.component';
import { RoleComponent } from './pages/role/role.component';
import { PermissionComponent } from './pages/permission/permission.component';
import { UserComponent } from './pages/user/user.component';
import { TeachingAssignmentComponent } from './pages/teaching-assignment/teaching-assignment.component';
import { TeachingSubstitutionComponent } from './pages/teaching-substitution/teaching-substitution.component';
import { ScheduleAssignmentComponent } from './pages/schedule-assignment/schedule-assignment.component';
import { EnrollmentComponent } from '../academic/pages/enrollment/enrollment.component';
import { AdminReportingComponent } from './pages/reporting/admin-reporting.component';
import { LessonComponent } from './pages/lesson/lesson.component';
import { ActivityLogComponent } from './pages/activity-log/activity-log.component';

export const adminRoutes: Routes = [
  {
    path: 'dashboard',
    component: AdminDashboardComponent,
    canActivate: [authGuard, roleGuard(['SYSTEM_ADMIN', 'ADMIN'])]
  },
  {
    path: 'terms',
    component: TermComponent,
    canActivate: [authGuard, roleGuard(['SYSTEM_ADMIN', 'ADMIN'])]
  },
  {
    path: 'courses',
    component: CourseComponent,
    canActivate: [authGuard, roleGuard(['SYSTEM_ADMIN', 'ADMIN'])]
  },
  {
    path: 'classes',
    component: ClassComponent,
    canActivate: [authGuard, roleGuard(['SYSTEM_ADMIN', 'ADMIN'])]
  },
  {
    path: 'classes/:id/schedules',
    component: ClassScheduleComponent,
    canActivate: [authGuard, roleGuard(['SYSTEM_ADMIN', 'ADMIN'])]
  },
  {
    path: 'classes/:id/enrollments',
    component: EnrollmentComponent,
    canActivate: [authGuard, roleGuard(['SYSTEM_ADMIN', 'ADMIN'])]
  },
  {
    path: 'classes/:id/lessons',
    component: LessonComponent,
    canActivate: [authGuard, roleGuard(['SYSTEM_ADMIN', 'ADMIN'])]
  },
  {
    path: 'rooms',
    component: RoomComponent,
    canActivate: [authGuard, roleGuard(['SYSTEM_ADMIN', 'ADMIN'])]
  },
  {
    path: 'class-schedules',
    component: ClassScheduleComponent,
    canActivate: [authGuard, roleGuard(['SYSTEM_ADMIN', 'ADMIN'])]
  },
  {
    path: 'teaching-assignments',
    component: TeachingAssignmentComponent,
    canActivate: [authGuard, roleGuard(['SYSTEM_ADMIN', 'ADMIN'])]
  },
  {
    path: 'schedule-assignments',
    component: ScheduleAssignmentComponent,
    canActivate: [authGuard, roleGuard(['SYSTEM_ADMIN', 'ADMIN'])]
  },
  {
    path: 'teaching-substitutions',
    component: TeachingSubstitutionComponent,
    canActivate: [authGuard, roleGuard(['SYSTEM_ADMIN', 'ADMIN'])]
  },
  {
    path: 'enrollments',
    component: EnrollmentComponent,
    canActivate: [authGuard, roleGuard(['SYSTEM_ADMIN', 'ADMIN'])]
  },
  {
    path: 'students',
    component: StudentComponent,
    canActivate: [authGuard, roleGuard(['ACADEMIC', 'TRAINING', 'MANAGER', 'ADMIN', 'SYSTEM_ADMIN'])]
  },
  {
    path: 'staffs',
    component: StaffComponent,
    canActivate: [authGuard, roleGuard(['ACADEMIC', 'TRAINING', 'MANAGER', 'ADMIN', 'SYSTEM_ADMIN'])]
  },
  {
    path: 'teachers',
    redirectTo: 'staffs',
    pathMatch: 'full'
  },
  {
    path: 'departments',
    component: DepartmentComponent,
    canActivate: [authGuard, roleGuard(['SYSTEM_ADMIN', 'ADMIN'])]
  },
  {
    path: 'roles',
    component: RoleComponent,
    canActivate: [authGuard, roleGuard(['SYSTEM_ADMIN', 'ADMIN'])]
  },
  {
    path: 'permissions',
    component: PermissionComponent,
    canActivate: [authGuard, roleGuard(['SYSTEM_ADMIN', 'ADMIN'])]
  },
  {
    path: 'users',
    component: UserComponent,
    canActivate: [authGuard, roleGuard(['SYSTEM_ADMIN', 'ADMIN'])]
  },
  {
    path: 'reports',
    component: AdminReportingComponent,
    canActivate: [authGuard, roleGuard(['SYSTEM_ADMIN', 'ADMIN'])]
  },
  {
    path: 'reporting',
    redirectTo: 'reports',
    pathMatch: 'full'
  },
  {
    path: 'activity-logs',
    component: ActivityLogComponent,
    canActivate: [authGuard, roleGuard(['SYSTEM_ADMIN', 'ADMIN'])]
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];
