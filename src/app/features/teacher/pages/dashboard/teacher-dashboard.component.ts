import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-teacher-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="min-h-screen bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="mb-8">
          <h1 class="text-4xl font-bold text-gray-900">
            Welcome, {{ authService.authState().email }}
          </h1>
          <p class="mt-2 text-gray-600">Teacher Dashboard</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div class="bg-white rounded-lg shadow p-6">
            <h3 class="text-gray-500 text-sm font-medium">Classes</h3>
            <p class="mt-2 text-3xl font-bold text-gray-900">--</p>
            <p class="mt-2 text-sm text-gray-600">Assigned to teach</p>
          </div>

          <div class="bg-white rounded-lg shadow p-6">
            <h3 class="text-gray-500 text-sm font-medium">Total Students</h3>
            <p class="mt-2 text-3xl font-bold text-gray-900">--</p>
            <p class="mt-2 text-sm text-gray-600">Across all classes</p>
          </div>

          <div class="bg-white rounded-lg shadow p-6">
            <h3 class="text-gray-500 text-sm font-medium">Pending Assignments</h3>
            <p class="mt-2 text-3xl font-bold text-gray-900">--</p>
            <p class="mt-2 text-sm text-gray-600">Need grading</p>
          </div>

          <div class="bg-white rounded-lg shadow p-6">
            <h3 class="text-gray-500 text-sm font-medium">Materials</h3>
            <p class="mt-2 text-3xl font-bold text-gray-900">--</p>
            <p class="mt-2 text-sm text-gray-600">Uploaded</p>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow p-6">
          <h2 class="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a
              routerLink="/teacher/classes"
              class="p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition"
            >
              <h3 class="font-semibold text-gray-900">My Classes</h3>
              <p class="text-sm text-gray-600 mt-1">View and manage your classes</p>
            </a>
            <a
              href="#"
              class="p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition"
            >
              <h3 class="font-semibold text-gray-900">Announcements</h3>
              <p class="text-sm text-gray-600 mt-1">Create announcements for students</p>
            </a>
            <a
              href="#"
              class="p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition"
            >
              <h3 class="font-semibold text-gray-900">Settings</h3>
              <p class="text-sm text-gray-600 mt-1">Configure your preferences</p>
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
