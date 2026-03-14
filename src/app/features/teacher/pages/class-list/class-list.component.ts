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
  styleUrls: ['./class-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="page-container">
      <div class="content-wrapper">
        <div class="page-header">
          <h1 class="page-title">My Classes</h1>
          <p class="page-subtitle">Classes assigned to you</p>
        </div>

        <div class="filter-card">
          <div class="filter-grid">
            <div>
              <label class="form-label">Search Classes</label>
              <input
                type="text"
                [(ngModel)]="searchQuery"
                (input)="onSearchChange($event)"
                placeholder="Search by class name..."
                class="form-input"
              />
            </div>
            <div>
              <label class="form-label">Filter by Semester</label>
              <select
                [(ngModel)]="selectedSemester"
                (change)="onSemesterChange()"
                class="form-input"
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
          <div class="loading-wrapper">
            <div class="loading-text">Loading classes...</div>
          </div>
        } @else if (error()) {
          <div class="alert-error">
            Failed to load classes. Please try again.
          </div>
        } @else if (filteredClasses().length === 0) {
          <div class="alert-info">
            No classes found.
          </div>
        } @else {
          <div class="class-grid">
            @for (assignment of filteredClasses(); track assignment.id) {
              <a
                [routerLink]="['/teacher/classes', assignment.classId]"
                class="class-card"
              >
                <div class="card-content">
                  <h3 class="card-title">{{ assignment.className }}</h3>
                  <div class="card-details">
                    <p><span class="font-medium">Grade:</span> {{ assignment.classId.replace(/[A-Za-z]/g, '') }}</p>
                    <p><span class="font-medium">Subject:</span> {{ assignment.subjectName }}</p>
                    <p><span class="font-medium">Room:</span> 201</p>
                    <p><span class="font-medium">Students:</span> 32</p>
                  </div>
                  <div class="card-footer">
                    <button class="btn-link">
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
