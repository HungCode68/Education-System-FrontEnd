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
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="p-6">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-2xl font-bold text-gray-900">Assignments</h2>
        <button
          class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          (click)="showCreateForm = !showCreateForm"
        >
          {{ showCreateForm ? 'Cancel' : 'Create Assignment' }}
        </button>
      </div>

      @if (showCreateForm) {
        <div class="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Title</label>
              <input
                type="text"
                [(ngModel)]="newAssignment.title"
                placeholder="Assignment title"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea
                [(ngModel)]="newAssignment.description"
                placeholder="Assignment description"
                rows="4"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Due Date</label>
                <input
                  type="date"
                  [(ngModel)]="newAssignment.dueDate"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Points</label>
                <input
                  type="number"
                  [(ngModel)]="newAssignment.points"
                  placeholder="0"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <button
              (click)="createAssignment()"
              [disabled]="creating()"
              class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-400"
            >
              {{ creating() ? 'Creating...' : 'Create' }}
            </button>
          </div>
        </div>
      }

      @if (loading()) {
        <div class="flex justify-center py-12">
          <div class="text-gray-500">Loading assignments...</div>
        </div>
      } @else if (error()) {
        <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          Failed to load assignments.
        </div>
      } @else if (assignments().length === 0) {
        <div class="text-center py-12 text-gray-500">
          No assignments yet.
        </div>
      } @else {
        <div class="space-y-4">
          @for (assignment of assignments(); track assignment.id) {
            <div class="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
              <div class="flex items-start justify-between">
                <div class="flex-1">
                  <h3 class="font-semibold text-gray-900">{{ assignment.title }}</h3>
                  <p class="text-sm text-gray-600 mt-1">{{ assignment.description }}</p>
                  <div class="mt-3 grid grid-cols-4 gap-4 text-sm">
                    <div class="bg-gray-50 p-2 rounded">
                      <p class="text-gray-500">Due Date</p>
                      <p class="font-medium text-gray-900">{{ assignment.dueDate | date: 'short' }}</p>
                    </div>
                    <div class="bg-gray-50 p-2 rounded">
                      <p class="text-gray-500">Points</p>
                      <p class="font-medium text-gray-900">{{ assignment.points }}</p>
                    </div>
                    <div class="bg-gray-50 p-2 rounded">
                      <p class="text-gray-500">Submitted</p>
                      <p class="font-medium text-gray-900">{{ assignment.submittedCount }} / {{ assignment.totalStudents }}</p>
                    </div>
                    <div class="bg-gray-50 p-2 rounded">
                      <p class="text-gray-500">Submission Rate</p>
                      <p class="font-medium text-gray-900">{{ ((assignment.submittedCount / assignment.totalStudents) * 100).toFixed(0) }}%</p>
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
