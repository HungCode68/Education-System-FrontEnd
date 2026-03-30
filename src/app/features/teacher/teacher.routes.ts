import { Routes } from '@angular/router';
import { authGuard, roleGuard } from '../../core/guards/auth.guard';
import { TeacherDashboardComponent } from './pages/dashboard/teacher-dashboard.component';
import { ClassDetailComponent } from './pages/class-detail/class-detail.component';
import { StudentsTabComponent } from './components/students-tab/students-tab.component';
import { MaterialsTabComponent } from './components/materials-tab/materials-tab.component';
import { AssignmentsTabComponent } from './components/assignments-tab/assignments-tab.component';
import { ProgressTabComponent } from './components/progress-tab/progress-tab.component';
import { GradesTabComponent } from './components/grades-tab/grades-tab.component';
import { MyClassesComponent } from './pages/online-class/my-classes.component';
import { TeacherLayoutComponent } from './layout/teacher-layout/teacher-layout.component';
import { AssignmentFormComponent } from './pages/assignment/assignment-form.component';
import { AssignmentDetailComponent } from './pages/assignment-detail/assignment-detail.component';
import { AssignmentSubmissionsComponent } from './pages/assignment-submission/assignment-submissions.component';
import { TeacherProfileComponent } from './pages/teacher-profile/teacher-profile.component';
import { HomeroomAnnouncementComponent } from './pages/homeroom/homeroom-announcement.component';
import { DepartmentMembersComponent } from './pages/department-member/department-members.component';
import { DepartmentAssignmentComponent } from './pages/teaching-assignment/department-assignment.component';
import { DepartmentAssignmentListComponent } from './pages/teaching-assginment-list/department-assignment-list.component';
import { DepartmentSubstitutionComponent } from './pages/teaching-substitution/department-substitution.component';
import { AssignmentHistoryComponent } from './pages/assignment-history/assignment-history.component';

export const teacherRoutes: Routes = [
  {
    path: '',
    component: TeacherLayoutComponent, // Khung Layout bọc ngoài cùng
    children: [
      { path: '', redirectTo: 'my-classes', pathMatch: 'full' },
      // Tạm thời chưa làm Dashboard, mình trỏ thẳng vào my-classes
      { path: 'my-classes', component: MyClassesComponent },
      { path: 'classes/:id', component: ClassDetailComponent },
      { path: 'assignments/create', component: AssignmentFormComponent },
      { path: 'assignments/:id', component: AssignmentDetailComponent },
      { path: 'assignments/edit/:id', component: AssignmentFormComponent },
      { path: 'assignments/:id/submissions', component: AssignmentSubmissionsComponent },
      { path: 'profile', component: TeacherProfileComponent },  
      { 
        path: 'homeroom', 
        component: HomeroomAnnouncementComponent,
        canActivate: [roleGuard(['HOMEROOM_TEACHER'])], 
        
      },
      { 
        path: 'department-member', 
        component: DepartmentMembersComponent,
        canActivate: [roleGuard(['TEACHER_HEAD_DEPARTMENT'])], 
        
      },
      { 
        path: 'teacher-assignment', 
        component: DepartmentAssignmentComponent,
        canActivate: [roleGuard(['TEACHER_HEAD_DEPARTMENT'])], 
        
      },
      { 
        path: 'teacher-assignment-list', 
        component: DepartmentAssignmentListComponent,
        canActivate: [roleGuard(['TEACHER_HEAD_DEPARTMENT'])], 
        
      },
      { 
        path: 'teacher-substitution', 
        component: DepartmentSubstitutionComponent,
        canActivate: [roleGuard(['TEACHER_HEAD_DEPARTMENT'])], 
        
      },
      { 
        path: 'teacher-history', 
        component: AssignmentHistoryComponent,
        canActivate: [roleGuard(['TEACHER_HEAD_DEPARTMENT'])], 
        
      },
    ]
  }
];
