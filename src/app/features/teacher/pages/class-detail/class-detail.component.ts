import { Component, inject, signal, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { TeacherClassService } from '../../services/teacher-class.service';
import { ClassDetail } from '../../models/teacher.model';

@Component({
  selector: 'app-class-detail',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  styleUrls: ['./class-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="page-container">
      @if (loading()) {
        <div class="loading-wrapper">
          <div class="loading-text">Loading class details...</div>
        </div>
      } @else if (error()) {
        <div class="error-wrapper">
          <div class="alert-error">
            Failed to load class details. Please try again.
          </div>
        </div>
      } @else if (classDetail()) {
        <div class="header-section">
          <div class="header-content">
            <h1 class="class-title">{{ classDetail()?.name }}</h1>
            <div class="class-info-grid">
              <div>
                <p class="info-label">Subject</p>
                <p class="info-value">{{ classDetail()?.subject }}</p>
              </div>
              <div>
                <p class="info-label">Room</p>
                <p class="info-value">{{ classDetail()?.room }}</p>
              </div>
              <div>
                <p class="info-label">Teacher</p>
                <p class="info-value">{{ classDetail()?.teacherName }}</p>
              </div>
              <div>
                <p class="info-label">Students</p>
                <p class="info-value">{{ classDetail()?.studentCount }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="main-content">
          <div class="tabs-container">
            <nav class="tabs-nav" aria-label="Tabs">
              <a
                [routerLink]="['students']"
                routerLinkActive="active"
                class="tab-link"
              >
                Students
              </a>
              <a
                [routerLink]="['materials']"
                routerLinkActive="active"
                class="tab-link"
              >
                Materials
              </a>
              <a
                [routerLink]="['assignments']"
                routerLinkActive="active"
                class="tab-link"
              >
                Assignments
              </a>
              <a
                [routerLink]="['progress']"
                routerLinkActive="active"
                class="tab-link"
              >
                Progress
              </a>
              <a
                [routerLink]="['grades']"
                routerLinkActive="active"
                class="tab-link"
              >
                Grades
              </a>
            </nav>
          </div>

          <div class="outlet-wrapper">
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
