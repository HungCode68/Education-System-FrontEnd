import { Component, inject, signal, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TeacherClassService } from '../../services/teacher-class.service';
import { StudentGrade } from '../../models/teacher.model';

@Component({
  selector: 'app-grades-tab',
  standalone: true,
  imports: [CommonModule, FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="p-6">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">Class Grades</h2>

      @if (loading()) {
        <div class="flex justify-center py-12">
          <div class="text-gray-500">Loading grades...</div>
        </div>
      } @else if (error()) {
        <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          Failed to load grades.
        </div>
      } @else if (grades().length === 0) {
        <div class="text-center py-12 text-gray-500">
          No grades available.
        </div>
      } @else {
        <div class="overflow-x-auto">
          <table class="min-w-full">
            <thead class="bg-gray-100 border-b border-gray-200">
              <tr>
                <th class="px-4 py-3 text-left text-sm font-semibold text-gray-900">Student</th>
                <th class="px-4 py-3 text-left text-sm font-semibold text-gray-900">Code</th>
                <th class="px-4 py-3 text-center text-sm font-semibold text-gray-900">Midterm</th>
                <th class="px-4 py-3 text-center text-sm font-semibold text-gray-900">Final</th>
                <th class="px-4 py-3 text-center text-sm font-semibold text-gray-900">Average</th>
                <th class="px-4 py-3 text-center text-sm font-semibold text-gray-900">Grade</th>
                <th class="px-4 py-3 text-center text-sm font-semibold text-gray-900">Status</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              @for (grade of grades(); track grade.studentId) {
                <tr class="hover:bg-gray-50">
                  <td class="px-4 py-3 text-sm text-gray-900">
                    <button
                      (click)="toggleEdit(grade.studentId)"
                      class="hover:text-blue-600 cursor-pointer"
                    >
                      {{ grade.studentName }}
                    </button>
                  </td>
                  <td class="px-4 py-3 text-sm text-gray-600">{{ grade.studentCode }}</td>
                  <td class="px-4 py-3 text-center">
                    @if (editingId() === grade.studentId) {
                      <input
                        type="number"
                        [(ngModel)]="grade.midtermScore"
                        class="w-16 px-2 py-1 border border-gray-300 rounded"
                      />
                    } @else {
                      <span>{{ grade.midtermScore }}</span>
                    }
                  </td>
                  <td class="px-4 py-3 text-center">
                    @if (editingId() === grade.studentId) {
                      <input
                        type="number"
                        [(ngModel)]="grade.finalScore"
                        class="w-16 px-2 py-1 border border-gray-300 rounded"
                      />
                    } @else {
                      <span>{{ grade.finalScore }}</span>
                    }
                  </td>
                  <td class="px-4 py-3 text-center font-medium text-gray-900">
                    {{ grade.averageScore.toFixed(1) }}
                  </td>
                  <td class="px-4 py-3 text-center font-medium">{{ grade.grade }}</td>
                  <td class="px-4 py-3 text-center">
                    <span class="inline-block px-3 py-1 rounded-full text-sm" [class]="getStatusClass(grade.status)">
                      {{ grade.status }}
                    </span>
                  </td>
                  @if (editingId() === grade.studentId) {
                    <td class="px-4 py-3 text-center">
                      <button
                        (click)="saveGrade(grade)"
                        [disabled]="saving()"
                        class="text-green-600 hover:text-green-700 font-medium disabled:text-gray-400"
                      >
                        Save
                      </button>
                      <button
                        (click)="cancelEdit()"
                        class="ml-2 text-gray-600 hover:text-gray-700 font-medium"
                      >
                        Cancel
                      </button>
                    </td>
                  }
                </tr>
              }
            </tbody>
          </table>
        </div>
      }
    </div>
  `
})
export class GradesTabComponent implements OnInit {
  private teacherService = inject(TeacherClassService);
  private route = inject(ActivatedRoute);

  grades = signal<StudentGrade[]>([]);
  loading = signal(false);
  error = signal(false);
  saving = signal(false);
  editingId = signal<string>('');
  classId: string = '';

  ngOnInit(): void {
    this.route.parent?.params.subscribe(params => {
      this.classId = params['classId'];
      this.loadGrades();
    });
  }

  private loadGrades(): void {
    this.loading.set(true);
    this.teacherService.getGrades(this.classId).subscribe({
      next: (grades) => {
        this.grades.set(grades);
        this.loading.set(false);
      },
      error: () => {
        this.error.set(true);
        this.loading.set(false);
      }
    });
  }

  toggleEdit(studentId: string): void {
    this.editingId.set(this.editingId() === studentId ? '' : studentId);
  }

  cancelEdit(): void {
    this.editingId.set('');
    this.loadGrades();
  }

  saveGrade(grade: StudentGrade): void {
    this.saving.set(true);
    this.teacherService.updateGrade(this.classId, grade.studentId, grade).subscribe({
      next: () => {
        this.saving.set(false);
        this.editingId.set('');
      },
      error: () => {
        this.saving.set(false);
        alert('Failed to save grade');
      }
    });
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'passed':
        return 'bg-green-100 text-green-800';
      case 'failed':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-yellow-100 text-yellow-800';
    }
  }
}
