import { Component, inject, signal, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { TeacherClassService } from '../../services/teacher-class.service';
import { TeachingAssignment, Semester } from '../../models/teacher.model';

@Component({
  selector: 'app-class-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="min-h-screen bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="mb-8">
          <h1 class="text-4xl font-bold text-gray-900">My Classes</h1>
          <p class="mt-2 text-gray-600">Classes assigned to you</p>
        </div>

        <div class="bg-white rounded-lg shadow p-6 mb-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Search Classes</label>
              <input
                type="text"
                [(ngModel)]="searchQuery"
                (input)="onSearchChange($event)"
                placeholder="Search by class name..."
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Filter by Semester</label>
              <select
                [(ngModel)]="selectedSemester"
                (change)="onSemesterChange()"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">All Semesters</option>
                @for (semester of semesters(); track semester.id) {
                  <option [value]="semester.id">{{ semester.name }}</option>
                }
              </select>
            </div>
          </div>
        </div>

        @if (loading()) {
          <div class="flex justify-center items-center h-64">
            <div class="text-gray-500">Loading classes...</div>
          </div>
        } @else if (error()) {
          <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            Failed to load classes. Please try again.
          </div>
        } @else if (filteredClasses().length === 0) {
          <div class="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded">
            No classes found.
          </div>
        } @else {
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            @for (assignment of filteredClasses(); track assignment.id) {
              <a
                [routerLink]="['/teacher/classes', assignment.classId]"
                class="bg-white rounded-lg shadow-md hover:shadow-lg transition block"
              >
                <div class="p-6">
                  <h3 class="text-lg font-bold text-gray-900">{{ assignment.className }}</h3>
                  <div class="mt-4 space-y-2 text-sm text-gray-600">
                    <p><span class="font-medium">Grade:</span> {{ assignment.classId.replace(/[A-Za-z]/g, '') }}</p>
                    <p><span class="font-medium">Subject:</span> {{ assignment.subjectName }}</p>
                    <p><span class="font-medium">Room:</span> 201</p>
                    <p><span class="font-medium">Students:</span> 32</p>
                  </div>
                  <div class="mt-4 pt-4 border-t border-gray-200">
                    <button class="text-blue-600 font-medium hover:text-blue-700">
                      View Details →
                    </button>
                  </div>
                </div>
              </a>
            }
          </div>
        }
      </div>
    </div>
  `
})
export class ClassListComponent implements OnInit {
  private teacherService = inject(TeacherClassService);
  private route = inject(ActivatedRoute);

  classes = signal<TeachingAssignment[]>([]);
  filteredClasses = signal<TeachingAssignment[]>([]);
  semesters = signal<Semester[]>([]);
  searchQuery = '';
  selectedSemester = '';
  loading = signal(false);
  error = signal(false);

  ngOnInit(): void {
    this.loadSemesters();
    this.loadClasses();
  }

  private loadSemesters(): void {
    this.teacherService.getSemesters().subscribe({
      next: (semesters) => this.semesters.set(semesters),
      error: () => this.error.set(true)
    });
  }

  private loadClasses(): void {
    this.loading.set(true);
    this.teacherService.getTeacherClasses(this.selectedSemester || undefined).subscribe({
      next: (classes) => {
        this.classes.set(classes);
        this.filteredClasses.set(classes);
        this.loading.set(false);
      },
      error: () => {
        this.error.set(true);
        this.loading.set(false);
      }
    });
  }

  onSearchChange(event: any): void {
    this.applyFilters();
  }

  onSemesterChange(): void {
    this.loadClasses();
  }

  private applyFilters(): void {
    let result = this.classes();

    if (this.searchQuery) {
      result = result.filter(c =>
        c.className.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }

    this.filteredClasses.set(result);
  }
}
