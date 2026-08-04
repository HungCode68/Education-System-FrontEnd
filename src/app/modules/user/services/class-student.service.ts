import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClassStudentService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/api/v1/class-students`;

  autoDistribute(data: { schoolYearId: number; classIds: string[]; studentIds: (number | string)[] }): Observable<Record<string, string>> {
    return this.http.post<Record<string, string>>(`${this.apiUrl}/auto-distribute`, data);
  }
}
