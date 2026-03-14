import { Component, inject, signal, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TeacherClassService } from '../../services/teacher-class.service';
import { ClassAssignment } from '../../models/teacher.model';

@Component({
  selector: 'app-assignments-tab',
  standalone: true,
  imports: [CommonModule, FormsModule],
  styleUrls: ['./assignments-tab.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="tab-container">
      <div class="header-flex">
        <h2 class="tab-title">Assignments</h2>
        <button
          class="btn-primary"
          (click)="showCreateForm = !showCreateForm"
        >
          {{ showCreateForm ? 'Cancel' : 'Create Assignment' }}
        </button>
      </div>

      @if (showCreateForm) {
        <div class="form-container">
          <div class="form-layout">
            <div>
              <label class="form-label">Title</label>
              <input
                type="text"
                [(ngModel)]="newAssignment.title"
                placeholder="Assignment title"
                class="form-input"
              />
            </div>
            <div>
              <label class="form-label">Description</label>
              <textarea
                [(ngModel)]="newAssignment.description"
                placeholder="Assignment description"
                rows="4"
                class="form-input"
              ></textarea>
            </div>
            <div class="grid-2-cols">
              <div>
                <label class="form-label">Due Date</label>
                <input
                  type="date"
                  [(ngModel)]="newAssignment.dueDate"
                  class="form-input"
                />
              </div>
              <div>
                <label class="form-label">Points</label>
                <input
                  type="number"
                  [(ngModel)]="newAssignment.points"
                  placeholder="0"
                  class="form-input"
                />
              </div>
            </div>
            <button
              (click)="createAssignment()"
              [disabled]="creating()"
              class="btn-success"
            >
              {{ creating() ? 'Creating...' : 'Create' }}
            </button>
          </div>
        </div>
      }

      @if (loading()) {
        <div class="loading-wrapper">
          <div class="loading-text">Loading assignments...</div>
        </div>
      } @else if (error()) {
        <div class="alert-error">
          Failed to load assignments.
        </div>
      } @else if (assignments().length === 0) {
        <div class="empty-state">
          No assignments yet.
        </div>
      } @else {
        <div class="list-layout">
          @for (assignment of assignments(); track assignment.id) {
            <div class="assignment-card">
              <div class="flex-start-between">
                <div class="flex-1-container">
                  <h3 class="item-title">{{ assignment.title }}</h3>
                  <p class="item-desc">{{ assignment.description }}</p>
                  <div class="stats-grid">
                    <div class="stat-box">
                      <p class="stat-label">Due Date</p>
                      <p class="stat-value">{{ assignment.dueDate | date: 'short' }}</p>
                    </div>
                    <div class="stat-box">
                      <p class="stat-label">Points</p>
                      <p class="stat-value">{{ assignment.points }}</p>
                    </div>
                    <div class="stat-box">
                      <p class="stat-label">Submitted</p>
                      <p class="stat-value">{{ assignment.submittedCount }} / {{ assignment.totalStudents }}</p>
                    </div>
                    <div class="stat-box">
                      <p class="stat-label">Submission Rate</p>
                      <p class="stat-value">{{ ((assignment.submittedCount / assignment.totalStudents) * 100).toFixed(0) }}%</p>
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
export class AssignmentsTabComponent implements OnInit {
  private teacherService = inject(TeacherClassService);
  private route = inject(ActivatedRoute);

  assignments = signal<ClassAssignment[]>([]);
  loading = signal(false);
  error = signal(false);
  creating = signal(false);
  showCreateForm = false;
  classId: string = '';
  newAssignment = {
    title: '',
    description: '',
    dueDate: '',
    points: 0
  };

  ngOnInit(): void {
    this.route.parent?.params.subscribe(params => {
      this.classId = params['classId'];
      this.loadAssignments();
    });
  }

  private loadAssignments(): void {
    this.loading.set(true);
    this.teacherService.getAssignments(this.classId).subscribe({
      next: (assignments) => {
        this.assignments.set(assignments);
        this.loading.set(false);
      },
      error: () => {
        this.error.set(true);
        this.loading.set(false);
      }
    });
  }

  createAssignment(): void {
    if (!this.newAssignment.title || !this.newAssignment.dueDate) {
      alert('Please fill in all required fields');
      return;
    }

    this.creating.set(true);
    this.teacherService.createAssignment(this.classId, this.newAssignment).subscribe({
      next: (assignment) => {
        this.assignments.update(a => [assignment, ...a]);
        this.creating.set(false);
        this.newAssignment = { title: '', description: '', dueDate: '', points: 0 };
        this.showCreateForm = false;
      },
      error: () => {
        this.creating.set(false);
        alert('Failed to create assignment');
      }
    });
  }
}
