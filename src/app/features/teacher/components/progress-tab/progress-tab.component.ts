import { Component, inject, signal, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { TeacherClassService } from '../../services/teacher-class.service';
import { StudentProgress } from '../../models/teacher.model';

@Component({
  selector: 'app-progress-tab',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="p-6">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">Class Progress</h2>

      @if (loading()) {
        <div class="flex justify-center py-12">
          <div class="text-gray-500">Loading progress data...</div>
        </div>
      } @else if (error()) {
        <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          Failed to load progress data.
        </div>
      } @else if (progressData().length === 0) {
        <div class="text-center py-12 text-gray-500">
          No progress data available.
        </div>
      } @else {
        <div class="overflow-x-auto">
          <table class="min-w-full">
            <thead class="bg-gray-100 border-b border-gray-200">
              <tr>
                <th class="px-4 py-3 text-left text-sm font-semibold text-gray-900">Student</th>
                <th class="px-4 py-3 text-left text-sm font-semibold text-gray-900">Code</th>
                <th class="px-4 py-3 text-center text-sm font-semibold text-gray-900">Attendance</th>
                <th class="px-4 py-3 text-center text-sm font-semibold text-gray-900">Submission Rate</th>
                <th class="px-4 py-3 text-center text-sm font-semibold text-gray-900">Avg Score</th>
                <th class="px-4 py-3 text-left text-sm font-semibold text-gray-900">Last Activity</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              @for (item of progressData(); track item.studentId) {
                <tr class="hover:bg-gray-50">
                  <td class="px-4 py-3 text-sm text-gray-900">{{ item.studentName }}</td>
                  <td class="px-4 py-3 text-sm text-gray-600">{{ item.studentCode }}</td>
                  <td class="px-4 py-3 text-center">
                    <span class="inline-block px-3 py-1 rounded-full text-sm" [class]="getAttendanceClass(item.attendanceRate)">
                      {{ item.attendanceRate }}%
                    </span>
                  </td>
                  <td class="px-4 py-3 text-center">
                    <span class="inline-block px-3 py-1 rounded-full text-sm" [class]="getSubmissionClass(item.assignmentSubmissionRate)">
                      {{ item.assignmentSubmissionRate }}%
                    </span>
                  </td>
                  <td class="px-4 py-3 text-center text-sm font-medium text-gray-900">
                    {{ item.averageScore.toFixed(1) }}
                  </td>
                  <td class="px-4 py-3 text-sm text-gray-600">
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
