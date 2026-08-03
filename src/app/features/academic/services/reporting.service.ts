import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import {
  TrainingDashboard,
  ReportClassMetrics,
  ReportSummary,
  ReportCenterStatistics
} from '../models/reporting.model';

@Injectable({
  providedIn: 'root'
})
export class ReportingService {
  private http = inject(HttpClient);
  private statsApiUrl = `${environment.apiUrl}/api/v1/reporting/statistics`;
  private classMetricsApiUrl = `${environment.apiUrl}/api/v1/reporting/class-metrics`;

  /**
   * Báo cáo tổng hợp dành riêng cho Bộ phận Đào tạo (Tổng quan + Chi tiết KPI từng lớp)
   */
  getTrainingDashboard(date?: string): Observable<TrainingDashboard> {
    let params = new HttpParams();
    if (date) {
      params = params.set('date', date);
    }
    return this.http.get<TrainingDashboard>(`${this.statsApiUrl}/training-dashboard`, { params });
  }

  /**
   * Lấy danh sách chỉ số KPI tất cả lớp học
   */
  getAllClassMetrics(): Observable<ReportClassMetrics[]> {
    return this.http.get<ReportClassMetrics[]>(this.classMetricsApiUrl);
  }

  /**
   * Tra cứu chỉ số KPI của 1 lớp
   */
  getClassMetrics(classId: number): Observable<ReportClassMetrics> {
    return this.http.get<ReportClassMetrics>(`${this.classMetricsApiUrl}/${classId}`);
  }

  /**
   * Tra cứu KPI lớp học trong khoảng thời gian
   */
  getClassMetricsInRange(classId: number, startDate: string, endDate: string): Observable<ReportClassMetrics> {
    let params = new HttpParams()
      .set('startDate', startDate)
      .set('endDate', endDate);
    return this.http.get<ReportClassMetrics>(`${this.classMetricsApiUrl}/${classId}/custom-range`, { params });
  }

  /**
   * Đồng bộ thủ công chỉ số KPI lớp học (Tất cả hoặc theo classId)
   */
  syncClassMetrics(classId?: number): Observable<{ message: string; data: ReportClassMetrics | ReportClassMetrics[] }> {
    let params = new HttpParams();
    if (classId) {
      params = params.set('classId', classId.toString());
    }
    return this.http.post<{ message: string; data: ReportClassMetrics | ReportClassMetrics[] }>(
      `${this.classMetricsApiUrl}/sync`,
      {},
      { params }
    );
  }

  /**
   * Đồng bộ ngay / Chốt số liệu thống kê báo cáo trung tâm theo ngày
   */
  syncDailyReport(date?: string): Observable<{ message: string; data: ReportCenterStatistics }> {
    let params = new HttpParams();
    if (date) {
      params = params.set('date', date);
    }
    return this.http.post<{ message: string; data: ReportCenterStatistics }>(
      `${this.statsApiUrl}/sync`,
      {},
      { params }
    );
  }

  /**
   * Xem thẻ thống kê tổng hợp (Summary KPI) trong một khoảng thời gian
   */
  getSummaryReportBetween(startDate: string, endDate: string): Observable<ReportSummary> {
    const params = new HttpParams()
      .set('startDate', startDate)
      .set('endDate', endDate);
    return this.http.get<ReportSummary>(`${this.statsApiUrl}/summary`, { params });
  }

  /**
   * Xem số liệu thống kê trong một khoảng thời gian
   */
  getReportsBetween(startDate: string, endDate: string): Observable<ReportCenterStatistics[]> {
    const params = new HttpParams()
      .set('startDate', startDate)
      .set('endDate', endDate);
    return this.http.get<ReportCenterStatistics[]>(`${this.statsApiUrl}/range`, { params });
  }

  /**
   * Lấy số liệu thống kê gần nhất
   */
  getLatestReport(): Observable<ReportCenterStatistics> {
    return this.http.get<ReportCenterStatistics>(`${this.statsApiUrl}/latest`);
  }
}
