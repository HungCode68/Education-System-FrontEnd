import { Component, inject, signal, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TeacherClassService } from '../../services/teacher-class.service';
import { Material } from '../../models/teacher.model';

@Component({
  selector: 'app-materials-tab',
  standalone: true,
  imports: [CommonModule, FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="p-6">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-2xl font-bold text-gray-900">Course Materials</h2>
        <button
          class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          (click)="showUploadForm = !showUploadForm"
        >
          {{ showUploadForm ? 'Cancel' : 'Upload Material' }}
        </button>
      </div>

      @if (showUploadForm) {
        <div class="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Title</label>
              <input
                type="text"
                [(ngModel)]="uploadTitle"
                placeholder="Enter material title"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">File</label>
              <input
                type="file"
                #fileInput
                (change)="onFileSelected($event)"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <button
              (click)="uploadMaterial()"
              [disabled]="uploading()"
              class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-400"
            >
              {{ uploading() ? 'Uploading...' : 'Upload' }}
            </button>
          </div>
        </div>
      }

      @if (loading()) {
        <div class="flex justify-center py-12">
          <div class="text-gray-500">Loading materials...</div>
        </div>
      } @else if (error()) {
        <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          Failed to load materials.
        </div>
      } @else if (materials().length === 0) {
        <div class="text-center py-12 text-gray-500">
          No materials uploaded yet.
        </div>
      } @else {
        <div class="space-y-4">
          @for (material of materials(); track material.id) {
            <div class="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
              <div class="flex items-center justify-between">
                <div class="flex-1">
                  <h3 class="font-semibold text-gray-900">{{ material.title }}</h3>
                  <div class="mt-2 grid grid-cols-3 gap-4 text-sm text-gray-600">
                    <div>
                      <p class="text-gray-500">Uploaded</p>
                      <p>{{ material.uploadedAt | date: 'short' }}</p>
                    </div>
                    <div>
                      <p class="text-gray-500">Size</p>
                      <p>{{ (material.fileSize / 1024).toFixed(2) }} KB</p>
                    </div>
                    <div>
                      <p class="text-gray-500">Downloads</p>
                      <p>{{ material.downloadCount }}</p>
                    </div>
                  </div>
                </div>
                <div class="flex gap-2">
                  <a
                    [href]="material.fileUrl"
                    class="px-3 py-1 text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Download
                  </a>
                  <button
                    (click)="deleteMaterial(material.id)"
                    class="px-3 py-1 text-red-600 hover:text-red-700 font-medium"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          }
        </div>
      }
    </div>
  `
})
export class MaterialsTabComponent implements OnInit {
  private teacherService = inject(TeacherClassService);
  private route = inject(ActivatedRoute);

  materials = signal<Material[]>([]);
  loading = signal(false);
  error = signal(false);
  uploading = signal(false);
  showUploadForm = false;
  uploadTitle = '';
  selectedFile: File | null = null;
  classId: string = '';

  ngOnInit(): void {
    this.route.parent?.params.subscribe(params => {
      this.classId = params['classId'];
      this.loadMaterials();
    });
  }

  private loadMaterials(): void {
    this.loading.set(true);
    this.teacherService.getMaterials(this.classId).subscribe({
      next: (materials) => {
        this.materials.set(materials);
        this.loading.set(false);
      },
      error: () => {
        this.error.set(true);
        this.loading.set(false);
      }
    });
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  uploadMaterial(): void {
    if (!this.selectedFile || !this.uploadTitle) {
      alert('Please select a file and enter a title');
      return;
    }

    this.uploading.set(true);
    this.teacherService.uploadMaterial(this.classId, this.selectedFile, this.uploadTitle).subscribe({
      next: (material) => {
        this.materials.update(m => [material, ...m]);
        this.uploading.set(false);
        this.uploadTitle = '';
        this.selectedFile = null;
        this.showUploadForm = false;
      },
      error: () => {
        this.uploading.set(false);
        alert('Failed to upload material');
      }
    });
  }

  deleteMaterial(materialId: string): void {
    if (!confirm('Are you sure you want to delete this material?')) {
      return;
    }

    this.teacherService.deleteMaterial(materialId).subscribe({
      next: () => {
        this.materials.update(m => m.filter(mat => mat.id !== materialId));
      },
      error: () => {
        alert('Failed to delete material');
      }
    });
  }
}
