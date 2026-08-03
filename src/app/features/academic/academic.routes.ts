import { Routes } from '@angular/router';
import { authGuard, roleGuard } from '../../core/guards/auth.guard';
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
import { StudentComponent } from '../admin/pages/student/student.component';
import { TeacherComponent } from '../admin/pages/teacher/teacher.component';

export const academicRoutes: Routes = [
  {
    path: '',
    redirectTo: 'courses',
    pathMatch: 'full'
  },
  {
    path: 'courses',
    component: CourseComponent,
    canActivate: [authGuard, roleGuard(['ACADEMIC', 'TRAINING', 'MANAGER', 'ADMIN', 'SYSTEM_ADMIN'])]
  },
  {
    path: 'terms',
    component: TermComponent,
    canActivate: [authGuard, roleGuard(['ACADEMIC', 'TRAINING', 'MANAGER', 'ADMIN', 'SYSTEM_ADMIN'])]
  },
  {
    path: 'classes',
    component: ClassesComponent,
    canActivate: [authGuard, roleGuard(['ACADEMIC', 'TRAINING', 'MANAGER', 'ADMIN', 'SYSTEM_ADMIN'])]
  },
  {
    path: 'schedules',
    component: ScheduleComponent,
    canActivate: [authGuard, roleGuard(['ACADEMIC', 'TRAINING', 'MANAGER', 'ADMIN', 'SYSTEM_ADMIN'])]
  },
  {
    path: 'rooms',
    component: RoomComponent,
    canActivate: [authGuard, roleGuard(['ACADEMIC', 'TRAINING', 'MANAGER', 'ADMIN', 'SYSTEM_ADMIN'])]
  },
  {
    path: 'teaching-assignments',
    component: TeachingAssignmentComponent,
    canActivate: [authGuard, roleGuard(['ACADEMIC', 'TRAINING', 'MANAGER', 'ADMIN', 'SYSTEM_ADMIN'])]
  },
  {
    path: 'schedule-assignments',
    component: ScheduleAssignmentComponent,
    canActivate: [authGuard, roleGuard(['ACADEMIC', 'TRAINING', 'MANAGER', 'ADMIN', 'SYSTEM_ADMIN'])]
  },
  {
    path: 'teaching-substitutions',
    component: TeachingSubstitutionComponent,
    canActivate: [authGuard, roleGuard(['ACADEMIC', 'TRAINING', 'MANAGER', 'ADMIN', 'SYSTEM_ADMIN'])]
  },
  {
    path: 'enrollments',
    component: EnrollmentComponent,
    canActivate: [authGuard, roleGuard(['ACADEMIC', 'TRAINING', 'MANAGER', 'ADMIN', 'SYSTEM_ADMIN'])]
  },
  {
    path: 'learning-materials',
    component: LearningMaterialComponent,
    canActivate: [authGuard, roleGuard(['ACADEMIC', 'TRAINING', 'MANAGER', 'ADMIN', 'SYSTEM_ADMIN'])]
  },
  {
    path: 'reports',
    component: ReportingComponent,
    canActivate: [authGuard, roleGuard(['ACADEMIC', 'TRAINING', 'MANAGER', 'ADMIN', 'SYSTEM_ADMIN'])]
  },
  {
    path: 'students',
    component: StudentComponent,
    canActivate: [authGuard, roleGuard(['ACADEMIC', 'TRAINING', 'MANAGER', 'ADMIN', 'SYSTEM_ADMIN'])]
  },
  {
    path: 'staffs',
    component: TeacherComponent,
    canActivate: [authGuard, roleGuard(['ACADEMIC', 'TRAINING', 'MANAGER', 'ADMIN', 'SYSTEM_ADMIN'])]
  },
  {
    path: 'teachers',
    redirectTo: 'staffs',
    pathMatch: 'full'
  }
];
