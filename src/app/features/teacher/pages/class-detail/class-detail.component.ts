import { Component, inject, signal, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { TeacherClassService } from '../../services/teacher-class.service';
import { ClassDetail } from '../../models/teacher.model';

@Component({
  selector: 'app-class-detail',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="min-h-screen bg-gray-50">
      @if (loading()) {
        <div class="flex justify-center items-center h-screen">
          <div class="text-gray-500">Loading class details...</div>
        </div>
      } @else if (error()) {
        <div class="max-w-7xl mx-auto px-4 py-8">
          <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            Failed to load class details. Please try again.
          </div>
        </div>
      } @else if (classDetail()) {
        <div class="bg-white border-b border-gray-200">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <h1 class="text-3xl font-bold text-gray-900">{{ classDetail()?.name }}</h1>
            <div class="mt-4 grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
              <div>
                <p class="text-gray-600">Subject</p>
                <p class="font-semibold text-gray-900">{{ classDetail()?.subject }}</p>
              </div>
              <div>
                <p class="text-gray-600">Room</p>
                <p class="font-semibold text-gray-900">{{ classDetail()?.room }}</p>
              </div>
              <div>
                <p class="text-gray-600">Teacher</p>
                <p class="font-semibold text-gray-900">{{ classDetail()?.teacherName }}</p>
              </div>
              <div>
                <p class="text-gray-600">Students</p>
                <p class="font-semibold text-gray-900">{{ classDetail()?.studentCount }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div class="border-b border-gray-200 mb-6">
            <nav class="flex space-x-8" aria-label="Tabs">
              <a
                [routerLink]="['students']"
                routerLinkActive="border-blue-500 text-blue-600"
                class="py-4 px-1 border-b-2 border-transparent font-medium text-sm text-gray-500 hover:text-gray-700 hover:border-gray-300"
              >
                Students
              </a>
              <a
                [routerLink]="['materials']"
                routerLinkActive="border-blue-500 text-blue-600"
                class="py-4 px-1 border-b-2 border-transparent font-medium text-sm text-gray-500 hover:text-gray-700 hover:border-gray-300"
              >
                Materials
              </a>
              <a
                [routerLink]="['assignments']"
                routerLinkActive="border-blue-500 text-blue-600"
                class="py-4 px-1 border-b-2 border-transparent font-medium text-sm text-gray-500 hover:text-gray-700 hover:border-gray-300"
              >
                Assignments
              </a>
              <a
                [routerLink]="['progress']"
                routerLinkActive="border-blue-500 text-blue-600"
                class="py-4 px-1 border-b-2 border-transparent font-medium text-sm text-gray-500 hover:text-gray-700 hover:border-gray-300"
              >
                Progress
              </a>
              <a
                [routerLink]="['grades']"
                routerLinkActive="border-blue-500 text-blue-600"
                class="py-4 px-1 border-b-2 border-transparent font-medium text-sm text-gray-500 hover:text-gray-700 hover:border-gray-300"
              >
                Grades
              </a>
            </nav>
          </div>

          <div class="bg-white rounded-lg shadow">
            <router-outlet />
          </div>
        </div>
      }
    </div>
  `
})
export class ClassDetailComponent implements OnInit {
  private teacherService = inject(TeacherClassService);
  private route = inject(ActivatedRoute);

  classDetail = signal<ClassDetail | null>(null);
  loading = signal(false);
  error = signal(false);
  classId: string = '';

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.classId = params['classId'];
      this.loadClassDetail();
    });
  }

  private loadClassDetail(): void {
    this.loading.set(true);
    this.teacherService.getClassDetail(this.classId).subscribe({
      next: (detail) => {
        this.classDetail.set(detail);
        this.loading.set(false);
      },
      error: () => {
        this.error.set(true);
        this.loading.set(false);
      }
    });
  }
}
