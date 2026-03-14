import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-teacher-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  styleUrls: ['./teacher-dashboard.component.css'],
  template: `
    <div class="dashboard-container">
      <div class="dashboard-content">
        <div class="dashboard-header">
          <h1 class="dashboard-title">
            Welcome, {{ authService.authState().email }}
          </h1>
          <p class="dashboard-subtitle">Teacher Dashboard</p>
        </div>

        <div class="stats-grid">
          <div class="stat-card">
            <h3 class="stat-title">Classes</h3>
            <p class="stat-value">--</p>
            <p class="stat-desc">Assigned to teach</p>
          </div>

          <div class="stat-card">
            <h3 class="stat-title">Total Students</h3>
            <p class="stat-value">--</p>
            <p class="stat-desc">Across all classes</p>
          </div>

          <div class="stat-card">
            <h3 class="stat-title">Pending Assignments</h3>
            <p class="stat-value">--</p>
            <p class="stat-desc">Need grading</p>
          </div>

          <div class="stat-card">
            <h3 class="stat-title">Materials</h3>
            <p class="stat-value">--</p>
            <p class="stat-desc">Uploaded</p>
          </div>
        </div>

        <div class="actions-section">
          <h2 class="actions-title">Quick Actions</h2>
          <div class="actions-grid">
            <a
              routerLink="/teacher/classes"
              class="action-card"
            >
              <h3 class="action-card-title">My Classes</h3>
              <p class="action-card-desc">View and manage your classes</p>
            </a>
            <a
              href="#"
              class="action-card"
            >
              <h3 class="action-card-title">Announcements</h3>
              <p class="action-card-desc">Create announcements for students</p>
            </a>
            <a
              href="#"
              class="action-card"
            >
              <h3 class="action-card-title">Settings</h3>
              <p class="action-card-desc">Configure your preferences</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  `
})
export class TeacherDashboardComponent {
  authService = inject(AuthService);
}
