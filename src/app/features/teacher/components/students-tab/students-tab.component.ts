import { Component, inject, signal, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { TeacherClassService } from '../../services/teacher-class.service';
import { StudentClass } from '../../models/teacher.model';

@Component({
  selector: 'app-students-tab',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./students-tab.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="tab-container">
      <h2 class="tab-title">Class Students</h2>

      @if (loading()) {
        <div class="loading-wrapper">
          <div class="loading-text">Loading students...</div>
        </div>
      } @else if (error()) {
        <div class="alert-error">
          Failed to load students.
        </div>
      } @else if (students().length === 0) {
        <div class="empty-state">
          No students found.
        </div>
      } @else {
        <div class="list-layout">
          @for (student of students(); track student.id) {
            <div class="student-card">
              <div class="flex-start-gap">
                <div class="avatar">
                  {{ student.name.charAt(0).toUpperCase() }}
                </div>
                <div class="flex-1-container">
                  <h3 class="student-name">{{ student.name }}</h3>
                  <p class="student-code">{{ student.studentCode }}</p>
                  <div class="contact-grid">
                    <div>
                      <p class="contact-label">Email</p>
                      <p>{{ student.email }}</p>
                    </div>
                    <div>
                      <p class="contact-label">Phone</p>
                      <p>{{ student.phone }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
      }
    </div>
  `
})
export class StudentsTabComponent implements OnInit {
  private teacherService = inject(TeacherClassService);
  private route = inject(ActivatedRoute);

  students = signal<StudentClass[]>([]);
  loading = signal(false);
  error = signal(false);
  classId: string = '';

  ngOnInit(): void {
    this.route.parent?.params.subscribe(params => {
      this.classId = params['classId'];
      this.loadStudents();
    });
  }

  private loadStudents(): void {
    this.loading.set(true);
    this.teacherService.getStudents(this.classId).subscribe({
      next: (students) => {
        this.students.set(students);
        this.loading.set(false);
      },
      error: () => {
        this.error.set(true);
        this.loading.set(false);
      }
    });
  }
}
