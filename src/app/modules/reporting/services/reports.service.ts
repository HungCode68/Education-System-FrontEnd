import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { ReportCenterStatistics, AcademicReportSummary, TrainingOverview, ReportClassMetrics, ReportSummary } from '../models/reports.model';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {
  private http = inject(HttpClient);
  private statsApiUrl = `${environment.apiUrl}/api/v1/reporting/statistics`;
  private classMetricsApiUrl = `${environment.apiUrl}/api/v1/reporting/class-metrics`;

  getLatestReport(): Observable<ReportCenterStatistics> {
    return this.http.get<ReportCenterStatistics>(`${this.statsApiUrl}/latest`);
  }

  getReportByDate(date: string): Observable<ReportCenterStatistics> {
    return this.http.get<ReportCenterStatistics>(`${this.statsApiUrl}/${date}`);
  }

  getReportsRange(start: string, end: string): Observable<ReportCenterStatistics[]> {
    let params = new HttpParams().set('startDate', start).set('endDate', end);
    return this.http.get<ReportCenterStatistics[]>(`${this.statsApiUrl}/range`, { params });
  }

  getStudentDetails(ids: number[]): Observable<any[]> {
    return this.http.post<any[]>(`${this.statsApiUrl}/details/students`, ids);
  }

  getStaffDetails(ids: number[]): Observable<any[]> {
    return this.http.post<any[]>(`${this.statsApiUrl}/details/staffs`, ids);
  }

  getClassDetails(ids: number[]): Observable<any[]> {
    return this.http.post<any[]>(`${this.statsApiUrl}/details/classes`, ids);
  }

  getSummaryReportBetween(start?: string, end?: string): Observable<ReportSummary> {
    let params = new HttpParams();
    if (start) params = params.set('startDate', start);
    if (end) params = params.set('endDate', end);
    return this.http.get<ReportSummary>(`${this.statsApiUrl}/summary`, { params });
  }

  syncDailyReport(date?: string): Observable<any> {
    let params = new HttpParams();
    if (date) params = params.set('date', date);
    return this.http.post<any>(`${this.statsApiUrl}/sync`, {}, { params });
  }

  getSummary(): Observable<AcademicReportSummary> {
    return this.http.get<AcademicReportSummary>(`${this.statsApiUrl}/latest`);
  }

  getOverview(date?: string): Observable<TrainingOverview> {
    let params = new HttpParams();
    if (date) params = params.set('date', date);
    return this.http.get<TrainingOverview>(`${this.statsApiUrl}/training-dashboard`, { params });
  }

  getTrainingDashboard(date?: string): Observable<TrainingOverview> {
    return this.getOverview(date);
  }

  getClassMetrics(classId?: number | string): Observable<ReportClassMetrics[]> {
    if (classId) {
      return this.http.get<ReportClassMetrics[]>(`${this.classMetricsApiUrl}/${classId}`);
    }
    return this.http.get<ReportClassMetrics[]>(this.classMetricsApiUrl);
  }

  syncClassMetrics(classId?: number | string): Observable<any> {
    let params = new HttpParams();
    if (classId) params = params.set('classId', classId.toString());
    return this.http.post<any>(`${this.classMetricsApiUrl}/sync`, {}, { params });
  }
}
