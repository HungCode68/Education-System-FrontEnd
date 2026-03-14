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
  styleUrls: ['./grades-tab.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="tab-container">
      <h2 class="tab-title">Class Grades</h2>

      @if (loading()) {
        <div class="loading-wrapper">
          <div class="loading-text">Loading grades...</div>
        </div>
      } @else if (error()) {
        <div class="alert-error">
          Failed to load grades.
        </div>
      } @else if (grades().length === 0) {
        <div class="empty-state">
          No grades available.
        </div>
      } @else {
        <div class="table-wrapper">
          <table class="grades-table">
            <thead class="table-head">
              <tr>
                <th class="th-left">Student</th>
                <th class="th-left">Code</th>
                <th class="th-center">Midterm</th>
                <th class="th-center">Final</th>
                <th class="th-center">Average</th>
                <th class="th-center">Grade</th>
                <th class="th-center">Status</th>
              </tr>
            </thead>
            <tbody class="table-body">
              @for (grade of grades(); track grade.studentId) {
                <tr class="table-row">
                  <td class="td-text">
                    <button
                      (click)="toggleEdit(grade.studentId)"
                      class="btn-student"
                    >
                      {{ grade.studentName }}
                    </button>
                  </td>
                  <td class="td-code">{{ grade.studentCode }}</td>
                  <td class="td-center">
                    @if (editingId() === grade.studentId) {
                      <input
                        type="number"
                        [(ngModel)]="grade.midtermScore"
                        class="input-score"
                      />
                    } @else {
                      <span>{{ grade.midtermScore }}</span>
                    }
                  </td>
                  <td class="td-center">
                    @if (editingId() === grade.studentId) {
                      <input
                        type="number"
                        [(ngModel)]="grade.finalScore"
                        class="input-score"
                      />
                    } @else {
                      <span>{{ grade.finalScore }}</span>
                    }
                  </td>
                  <td class="td-medium">
                    {{ grade.averageScore.toFixed(1) }}
                  </td>
                  <td class="td-medium-center">{{ grade.grade }}</td>
                  <td class="td-center">
                    <span class="status-badge" [class]="getStatusClass(grade.status)">
                      {{ grade.status }}
                    </span>
                  </td>
                  @if (editingId() === grade.studentId) {
                    <td class="td-center">
                      <button
                        (click)="saveGrade(grade)"
                        [disabled]="saving()"
                        class="btn-save"
                      >
                        Save
                      </button>
                      <button
                        (click)="cancelEdit()"
                        class="btn-cancel"
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
