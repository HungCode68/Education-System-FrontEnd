import { Routes } from '@angular/router';
import { authGuard, permissionGuard } from '../../core/guards/auth.guard';
import { CourseComponent } from './pages/course/course.component';
import { TermComponent } from './pages/term/term.component';
import { ClassesComponent } from './pages/classes/classes.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { RoomComponent } from './pages/room/room.component';
import { TeachingAssignmentComponent } from './pages/teaching-assignment/teaching-assignment.component';
import { ScheduleAssignmentComponent } from './pages/schedule-assignment/schedule-assignment.component';
import { TeachingSubstitutionComponent } from './pages/teaching-substitution/teaching-substitution.component';
import { EnrollmentComponent } from './pages/enrollment/enrollment.component';
import { LearningMaterialComponent } from './pages/learning-material/learning-material.component';
import { ReportingComponent } from './pages/reporting/reporting.component';
import { CancellationListComponent } from './pages/cancellation-list/cancellation-list.component';
import { StudentComponent } from '../admin/pages/student/student.component';
import { StaffComponent } from '../admin/pages/staff/staff.component';
// Tái sử dụng các component quản trị hệ thống cho academic portal
import { UserComponent } from '../admin/pages/user/user.component';
import { RoleComponent } from '../admin/pages/role/role.component';
import { PermissionComponent } from '../admin/pages/permission/permission.component';
import { ActivityLogComponent } from '../admin/pages/activity-log/activity-log.component';
import { DepartmentComponent } from '../admin/pages/department/department.component';

export const academicRoutes: Routes = [
  {
    path: '',
    redirectTo: 'courses',
    pathMatch: 'full'
  },
  {
    path: 'courses',
    component: CourseComponent,
    canActivate: [authGuard, permissionGuard(['COURSES_VIEW', 'COURSES_READ', 'COURSES_MANAGE', 'COURSES_CREATE', 'COURSES_UPDATE', 'COURSES_DELETE', 'COURSE_VIEW', 'COURSE_READ', 'COURSE_MANAGE'])]
  },
  {
    path: 'terms',
    component: TermComponent,
    canActivate: [authGuard, permissionGuard(['TERM_VIEW', 'TERM_READ', 'TERM_MANAGE', 'TERM_CREATE', 'TERM_UPDATE', 'TERM_DELETE'])]
  },
  {
    path: 'classes',
    component: ClassesComponent,
    canActivate: [authGuard, permissionGuard(['CLASS_VIEW', 'CLASS_READ', 'CLASS_MANAGE', 'CLASS_CREATE', 'CLASS_UPDATE', 'CLASS_DELETE'])]
  },
  {
    path: 'schedules',
    component: ScheduleComponent,
    canActivate: [authGuard, permissionGuard(['SCHEDULE_VIEW', 'SCHEDULE_READ', 'SCHEDULE_MANAGE', 'SCHEDULE_CREATE'])]
  },
  {
    path: 'cancellations',
    component: CancellationListComponent,
    canActivate: [authGuard, permissionGuard(['SCHEDULE_VIEW', 'SCHEDULE_READ', 'SCHEDULE_MANAGE', 'SCHEDULE_CREATE'])]
  },
  {
    path: 'rooms',
    component: RoomComponent,
    canActivate: [authGuard, permissionGuard(['ROOM_VIEW', 'ROOM_READ', 'ROOM_MANAGE', 'ROOM_CREATE', 'ROOM_UPDATE', 'ROOM_DELETE'])]
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
    canActivate: [authGuard, permissionGuard(['MATERIAL_VIEW', 'MATERIAL_READ', 'MATERIAL_MANAGE', 'MATERIAL_CREATE', 'MATERIAL_UPDATE'])]
  },
  {
    path: 'reports',
    component: ReportingComponent,
    canActivate: [authGuard, permissionGuard(['REPORT_VIEW', 'REPORT_READ', 'REPORT_MANAGE', 'TRAINING_VIEW'])]
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
  // --- Các trang quản trị hệ thống được cấp quyền truy cập cho bộ phận khác ---
  {
    path: 'users',
    component: UserComponent,
    canActivate: [authGuard, permissionGuard(['ACCOUNT_VIEW', 'ACCOUNT_READ', 'ACCOUNT_MANAGE', 'ACCOUNT_UPDATE', 'ACCOUNT_CREATE'])]
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
    path: 'departments',
    component: DepartmentComponent,
    canActivate: [authGuard, permissionGuard(['DEPARTMENT_VIEW', 'DEPARTMENT_READ', 'DEPARTMENT_MANAGE', 'DEPARTMENT_CREATE', 'DEPARTMENT_UPDATE', 'DEPARTMENT_DELETE'])]
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
