import { Routes } from '@angular/router';
import { authGuard, permissionGuard } from '../../core/guards/auth.guard';
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
import { LearningMaterialComponent } from '../academic/pages/learning-material/learning-material.component';

export const adminRoutes: Routes = [
  {
    path: 'dashboard',
    component: AdminDashboardComponent,
    canActivate: [authGuard]
  },
  {
    path: 'terms',
    component: TermComponent,
    canActivate: [authGuard, permissionGuard(['TERM_VIEW', 'TERM_READ', 'TERM_MANAGE', 'TERM_CREATE', 'TERM_UPDATE', 'TERM_DELETE'])]
  },
  {
    path: 'courses',
    component: CourseComponent,
    canActivate: [authGuard, permissionGuard(['COURSE_VIEW', 'COURSE_READ', 'COURSE_MANAGE', 'COURSE_CREATE', 'COURSE_UPDATE', 'COURSE_DELETE'])]
  },
  {
    path: 'classes',
    component: ClassComponent,
    canActivate: [authGuard, permissionGuard(['CLASS_VIEW', 'CLASS_READ', 'CLASS_MANAGE', 'CLASS_CREATE', 'CLASS_UPDATE', 'CLASS_DELETE'])]
  },
  {
    path: 'classes/:id/schedules',
    component: ClassScheduleComponent,
    canActivate: [authGuard, permissionGuard(['SCHEDULE_VIEW', 'SCHEDULE_READ', 'SCHEDULE_MANAGE', 'CLASS_VIEW', 'CLASS_READ'])]
  },
  {
    path: 'classes/:id/enrollments',
    component: EnrollmentComponent,
    canActivate: [authGuard, permissionGuard(['ENROLLMENT_VIEW', 'ENROLLMENT_READ', 'ENROLLMENT_MANAGE', 'CLASS_VIEW', 'CLASS_READ'])]
  },
  {
    path: 'classes/:id/lessons',
    component: LessonComponent,
    canActivate: [authGuard, permissionGuard(['LESSON_VIEW', 'LESSON_READ', 'LESSON_MANAGE', 'CLASS_VIEW', 'CLASS_READ'])]
  },
  {
    path: 'rooms',
    component: RoomComponent,
    canActivate: [authGuard, permissionGuard(['ROOM_VIEW', 'ROOM_READ', 'ROOM_MANAGE', 'ROOM_CREATE', 'ROOM_UPDATE', 'ROOM_DELETE'])]
  },
  {
    path: 'class-schedules',
    component: ClassScheduleComponent,
    canActivate: [authGuard, permissionGuard(['SCHEDULE_VIEW', 'SCHEDULE_READ', 'SCHEDULE_MANAGE', 'SCHEDULE_CREATE'])]
  },
  {
    path: 'teaching-assignments',
    component: TeachingAssignmentComponent,
    canActivate: [authGuard, permissionGuard(['ASSIGNMENT_VIEW', 'ASSIGNMENT_CREATE', 'ASSIGNMENT_UPDATE', 'ASSIGNMENT_DELETE'])]
  },
  {
    path: 'schedule-assignments',
    component: ScheduleAssignmentComponent,
    canActivate: [authGuard, permissionGuard(['ASSIGNMENT_VIEW', 'ASSIGNMENT_CREATE', 'ASSIGNMENT_UPDATE', 'ASSIGNMENT_DELETE'])]
  },
  {
    path: 'teaching-substitutions',
    component: TeachingSubstitutionComponent,
    canActivate: [authGuard, permissionGuard(['ASSIGNMENT_VIEW', 'ASSIGNMENT_CREATE', 'ASSIGNMENT_UPDATE', 'ASSIGNMENT_DELETE'])]
  },
  {
    path: 'enrollments',
    component: EnrollmentComponent,
    canActivate: [authGuard, permissionGuard(['ENROLLMENT_VIEW', 'ENROLLMENT_READ', 'ENROLLMENT_MANAGE', 'ENROLLMENT_CREATE'])]
  },
  {
    path: 'learning-materials',
    component: LearningMaterialComponent,
    canActivate: [authGuard, permissionGuard(['MATERIAL_VIEW', 'MATERIAL_READ', 'MATERIAL_MANAGE', 'MATERIAL_CREATE', 'LEARNING_MATERIAL_VIEW', 'LEARNING_MATERIAL_READ'])]
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
    path: 'teachers',
    redirectTo: 'staffs',
    pathMatch: 'full'
  },
  {
    path: 'departments',
    component: DepartmentComponent,
    canActivate: [authGuard, permissionGuard(['DEPARTMENT_VIEW', 'DEPARTMENT_READ', 'DEPARTMENT_MANAGE', 'DEPARTMENT_CREATE', 'DEPARTMENT_UPDATE', 'DEPARTMENT_DELETE'])]
  },
  {
    path: 'roles',
    component: RoleComponent,
    canActivate: [authGuard, permissionGuard(['ROLE_VIEW', 'ROLE_READ', 'ROLE_MANAGE', 'ROLE_CREATE', 'ROLE_UPDATE', 'ROLE_DELETE', 'ROLE_ASSIGN_PERMISSION'])]
  },
  {
    path: 'permissions',
    component: PermissionComponent,
    canActivate: [authGuard, permissionGuard(['PERMISSION_VIEW', 'PERMISSION_READ', 'PERMISSION_MANAGE', 'PERMISSION_CREATE', 'PERMISSION_UPDATE', 'PERMISSION_DELETE'])]
  },
  {
    path: 'users',
    component: UserComponent,
    canActivate: [authGuard, permissionGuard(['ACCOUNT_VIEW', 'ACCOUNT_READ', 'ACCOUNT_MANAGE', 'ACCOUNT_UPDATE', 'ACCOUNT_CREATE'])]
  },
  {
    path: 'reports',
    component: AdminReportingComponent,
    canActivate: [authGuard, permissionGuard(['REPORT_VIEW', 'REPORT_READ', 'REPORT_MANAGE', 'TRAINING_VIEW'])]
  },
  {
    path: 'reporting',
    redirectTo: 'reports',
    pathMatch: 'full'
  },
  {
    path: 'activity-logs',
    component: ActivityLogComponent,
    canActivate: [authGuard, permissionGuard(['LOG_VIEW', 'LOG_READ', 'ROLE_VIEW'])]
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];
