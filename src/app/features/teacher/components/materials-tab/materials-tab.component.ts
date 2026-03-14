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
  styleUrls: ['./materials-tab.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="tab-container">
      <div class="header-flex">
        <h2 class="tab-title">Course Materials</h2>
        <button
          class="btn-primary"
          (click)="showUploadForm = !showUploadForm"
        >
          {{ showUploadForm ? 'Cancel' : 'Upload Material' }}
        </button>
      </div>

      @if (showUploadForm) {
        <div class="upload-form">
          <div class="form-layout">
            <div>
              <label class="form-label">Title</label>
              <input
                type="text"
                [(ngModel)]="uploadTitle"
                placeholder="Enter material title"
                class="form-input"
              />
            </div>
            <div>
              <label class="form-label">File</label>
              <input
                type="file"
                #fileInput
                (change)="onFileSelected($event)"
                class="file-input"
              />
            </div>
            <button
              (click)="uploadMaterial()"
              [disabled]="uploading()"
              class="btn-success"
            >
              {{ uploading() ? 'Uploading...' : 'Upload' }}
            </button>
          </div>
        </div>
      }

      @if (loading()) {
        <div class="loading-wrapper">
          <div class="loading-text">Loading materials...</div>
        </div>
      } @else if (error()) {
        <div class="alert-error">
          Failed to load materials.
        </div>
      } @else if (materials().length === 0) {
        <div class="empty-state">
          No materials uploaded yet.
        </div>
      } @else {
        <div class="list-layout">
          @for (material of materials(); track material.id) {
            <div class="material-card">
              <div class="flex-center-between">
                <div class="flex-1-container">
                  <h3 class="material-title">{{ material.title }}</h3>
                  <div class="material-stats">
                    <div>
                      <p class="stat-label">Uploaded</p>
                      <p>{{ material.uploadedAt | date: 'short' }}</p>
                    </div>
                    <div>
                      <p class="stat-label">Size</p>
                      <p>{{ (material.fileSize / 1024).toFixed(2) }} KB</p>
                    </div>
                    <div>
                      <p class="stat-label">Downloads</p>
                      <p>{{ material.downloadCount }}</p>
                    </div>
                  </div>
                </div>
                <div class="action-buttons">
                  <a
                    [href]="material.fileUrl"
                    class="btn-download"
                  >
                    Download
                  </a>
                  <button
                    (click)="deleteMaterial(material.id)"
                    class="btn-delete"
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
