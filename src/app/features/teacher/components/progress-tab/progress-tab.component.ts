import { Component, inject, signal, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { TeacherClassService } from '../../services/teacher-class.service';
import { StudentProgress } from '../../models/teacher.model';

@Component({
  selector: 'app-progress-tab',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./progress-tab.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="tab-container">
      <h2 class="tab-title">Class Progress</h2>

      @if (loading()) {
        <div class="loading-wrapper">
          <div class="loading-text">Loading progress data...</div>
        </div>
      } @else if (error()) {
        <div class="alert-error">
          Failed to load progress data.
        </div>
      } @else if (progressData().length === 0) {
        <div class="empty-state">
          No progress data available.
        </div>
      } @else {
        <div class="table-wrapper">
          <table class="progress-table">
            <thead class="table-head">
              <tr>
                <th class="th-left">Student</th>
                <th class="th-left">Code</th>
                <th class="th-center">Attendance</th>
                <th class="th-center">Submission Rate</th>
                <th class="th-center">Avg Score</th>
                <th class="th-left">Last Activity</th>
              </tr>
            </thead>
            <tbody class="table-body">
              @for (item of progressData(); track item.studentId) {
                <tr class="table-row">
                  <td class="td-text">{{ item.studentName }}</td>
                  <td class="td-code">{{ item.studentCode }}</td>
                  <td class="td-center">
                    <span class="status-badge" [class]="getAttendanceClass(item.attendanceRate)">
                      {{ item.attendanceRate }}%
                    </span>
                  </td>
                  <td class="td-center">
                    <span class="status-badge" [class]="getSubmissionClass(item.assignmentSubmissionRate)">
                      {{ item.assignmentSubmissionRate }}%
                    </span>
                  </td>
                  <td class="td-medium">
                    {{ item.averageScore.toFixed(1) }}
                  </td>
                  <td class="td-code">
                    {{ item.lastActivityDate | date: 'short' }}
                  </td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      }
    </div>
  `
})
export class ProgressTabComponent implements OnInit {
  private teacherService = inject(TeacherClassService);
  private route = inject(ActivatedRoute);

  progressData = signal<StudentProgress[]>([]);
  loading = signal(false);
  error = signal(false);
  classId: string = '';

  ngOnInit(): void {
    this.route.parent?.params.subscribe(params => {
      this.classId = params['classId'];
      this.loadProgress();
    });
  }

  private loadProgress(): void {
    this.loading.set(true);
    this.teacherService.getProgress(this.classId).subscribe({
      next: (data) => {
        this.progressData.set(data);
        this.loading.set(false);
      },
      error: () => {
        this.error.set(true);
        this.loading.set(false);
      }
    });
  }

  getAttendanceClass(rate: number): string {
    if (rate >= 90) return 'bg-green-100 text-green-800';
    if (rate >= 75) return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  }

  getSubmissionClass(rate: number): string {
    if (rate >= 90) return 'bg-green-100 text-green-800';
    if (rate >= 75) return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  }
}
