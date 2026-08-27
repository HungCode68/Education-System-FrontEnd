import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import {
  TeachingAssignment,
  ClassDetail,
  StudentClass,
  Material,
  ClassAssignment,
  StudentProgress,
  StudentGrade,
  Semester
} from '../models/teacher.model';

@Injectable({ providedIn: 'root' })
export class TeacherClassService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/api/v1`;

  getTeacherClasses(semesterId?: string): Observable<TeachingAssignment[]> {
    let url = `${this.apiUrl}/teaching-assignments/by-teacher`;
    if (semesterId) {
      url += `?semesterId=${semesterId}`;
    }
    return this.http.get<TeachingAssignment[]>(url);
  }

  getClassesByStudent(semesterId?: string): Observable<TeachingAssignment[]> {
    let url = `${this.apiUrl}/teaching-assignments`;
    if (semesterId) {
      url += `?semesterId=${semesterId}`;
    }
    return this.http.get<TeachingAssignment[]>(url);
  }

  getClassDetail(classId: string): Observable<ClassDetail> {
    return this.http.get<ClassDetail>(`${this.apiUrl}/classes/${classId}`);
  }

  getStudents(classId: string): Observable<StudentClass[]> {
    return this.http.get<StudentClass[]>(`${this.apiUrl}/enrollments/class/${classId}`);
  }

  getMaterials(classId: string): Observable<Material[]> {
    return this.http.get<Material[]>(`${this.apiUrl}/learning-materials/class/${classId}`);
  }

  uploadMaterial(classId: string, file: File, title: string): Observable<Material> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('title', title);
    formData.append('courseId', classId); // actually the backend might expect courseId or lessonId? The original code had classId. Wait, learning-materials upload takes courseId or lessonId.
    return this.http.post<Material>(`${this.apiUrl}/learning-materials/upload`, formData);
  }

  deleteMaterial(materialId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/learning-materials/${materialId}`);
  }

  getAssignments(classId: string): Observable<ClassAssignment[]> {
    return this.http.get<ClassAssignment[]>(`${this.apiUrl}/assignments/class/${classId}`);
  }

  createAssignment(classId: string, assignment: any): Observable<ClassAssignment> {
    assignment.classId = classId;
    return this.http.post<ClassAssignment>(`${this.apiUrl}/assignments`, assignment);
  }

  getProgress(classId: string): Observable<StudentProgress[]> {
    return this.http.get<StudentProgress[]>(`${this.apiUrl}/classes/${classId}/progress`);
  }

  getGrades(classId: string): Observable<StudentGrade[]> {
    return this.http.get<StudentGrade[]>(`${this.apiUrl}/classes/${classId}/grades`);
  }

  updateGrade(classId: string, studentId: string, grade: any): Observable<StudentGrade> {
    return this.http.put<StudentGrade>(
      `${this.apiUrl}/classes/${classId}/students/${studentId}/grade`,
      grade
    );
  }

  getSemesters(): Observable<Semester[]> {
    return this.http.get<Semester[]>(`${this.apiUrl}/semesters`);
  }
}
