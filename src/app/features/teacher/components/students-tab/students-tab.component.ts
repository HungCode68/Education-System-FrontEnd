import { Component, inject, signal, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { TeacherClassService } from '../../services/teacher-class.service';
import { StudentClass } from '../../models/teacher.model';

@Component({
  selector: 'app-students-tab',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="p-6">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">Class Students</h2>

      @if (loading()) {
        <div class="flex justify-center py-12">
          <div class="text-gray-500">Loading students...</div>
        </div>
      } @else if (error()) {
        <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          Failed to load students.
        </div>
      } @else if (students().length === 0) {
        <div class="text-center py-12 text-gray-500">
          No students found.
        </div>
      } @else {
        <div class="space-y-4">
          @for (student of students(); track student.id) {
            <div class="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  {{ student.name.charAt(0).toUpperCase() }}
                </div>
                <div class="flex-1">
                  <h3 class="font-semibold text-gray-900">{{ student.name }}</h3>
                  <p class="text-sm text-gray-600">{{ student.studentCode }}</p>
                  <div class="mt-2 grid grid-cols-2 gap-4 text-sm text-gray-600">
                    <div>
                      <p class="text-gray-500">Email</p>
                      <p>{{ student.email }}</p>
                    </div>
                    <div>
                      <p class="text-gray-500">Phone</p>
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
