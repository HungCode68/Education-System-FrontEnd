import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, switchMap, map, of } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { StudentProfileService } from './student-profile.service';

export type EnrollmentStatus = 'ACTIVE' | 'INACTIVE' | 'DROPPED' | 'ENROLLED' | 'COMPLETED' | 'PENDING' | string;

export interface Enrollment {
  id?: number | string;
  classId: number | string;
  classCode?: string;
  className?: string;
  studentId: number | string;
  studentCode?: string;
  studentName?: string;
  enrolledAt?: string;
  enrollmentDate?: string;
  status?: EnrollmentStatus;
  note?: string;
}

export interface Class {
  id: number | string;
  code?: string;
  name?: string;
  subjectName?: string;
  physicalClassName?: string;
  teacherName?: string;
  teacherCode?: string;
  [key: string]: any;
}

export interface ClassmateDto {
  studentId: number;
  studentName?: string | null;
  studentCode?: string | null;
  status?: string | null;
}

@Injectable({ providedIn: 'root' })
export class StudentClassService {
  private http = inject(HttpClient);
  private studentProfileService = inject(StudentProfileService);
  private classesApi = `${environment.apiUrl}/api/v1/classes`;
  private enrollmentsApi = `${environment.apiUrl}/api/v1/enrollments`;
  private assignmentsApi = `${environment.apiUrl}/api/v1/assignments`;
  private materialsApi = `${environment.apiUrl}/api/v1/learning-materials`;

  getMyClasses(): Observable<(Enrollment & { classDetail?: Class })[]> {
    return this.studentProfileService.getMyStudentId().pipe(
      switchMap(studentId => {
        if (!studentId) return of([]);
        return this.http.get<Enrollment[]>(`${this.enrollmentsApi}/student/${studentId}`).pipe(
          map(enrollments =>
            enrollments.filter(e =>
              !e.status || ['PENDING', 'ACTIVE', 'COMPLETED'].includes(String(e.status).toUpperCase())
            )
          )
        );
      })
    );
  }

  getClassDetail(classId: string): Observable<Class> {
    return this.http.get<Class>(`${this.classesApi}/${classId}`);
  }

  getClassStudents(classId: string): Observable<ClassmateDto[]> {
    return this.http.get<Enrollment[]>(`${this.enrollmentsApi}/class/${classId}`).pipe(
      map(list => list.map(e => ({
        studentId: Number(e.studentId),
        studentName: e.studentName,
        studentCode: e.studentCode,
        status: e.status
      })))
    );
  }

  getClassMaterials(classId: string) {
    return this.http.get<any[]>(`${this.materialsApi}/class/${classId}`);
  }

  getMaterialDownloadUrl(materialId: string): Observable<{ url: string }> {
    return this.http.get<any>(`${this.materialsApi}/${materialId}`).pipe(
      map(m => ({ url: m.downloadUrl || m.resourceUrl || '' }))
    );
  }

  getClassAssignments(classId: string, page: number = 0, size: number = 100) {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('sortBy', 'createdAt')
      .set('sortDir', 'desc');

    return this.http.get<any[]>(`${this.assignmentsApi}/class/${classId}`, { params }).pipe(
      map(list => ({
        content: list || [],
        totalElements: (list || []).length,
        totalPages: 1,
        number: 0
      }))
    );
  }
}
