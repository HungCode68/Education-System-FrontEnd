import { Component, OnInit, inject, signal, DestroyRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ClassTransferService } from '../../services/class-transfer.service';
import { PhysicalClassService } from '../../services/physical-class.service';
import { ClassTransferHistory, PageResponse } from '../../models/class-transfer.model';

@Component({
  selector: 'app-class-transfer-history',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './class-transfer-history.component.html'
})
export class ClassTransferHistoryComponent implements OnInit {
  private transferService = inject(ClassTransferService);
  private physicalClassService = inject(PhysicalClassService);
  private destroyRef = inject(DestroyRef);

  historyLogs = signal<ClassTransferHistory[]>([]);
  classes = signal<any[]>([]);
  
  pageData = signal<PageResponse<any>>({ content: [], pageNo: 1, pageSize: 10, totalElements: 0, totalPages: 0, last: true });
  isLoading = signal(false);

  searchControl = new FormControl('');
  classFilterControl = new FormControl('');
  startDateControl = new FormControl('');
  endDateControl = new FormControl('');

  ngOnInit() {
    this.loadClasses();
    this.setupFilters();
    this.loadData();
  }

  private loadClasses() {
    this.physicalClassService.search(1, 100).subscribe(res => this.classes.set(res.content || []));
  }

  private setupFilters() {
    this.searchControl.valueChanges.pipe(debounceTime(400), distinctUntilChanged(), takeUntilDestroyed(this.destroyRef))
      .subscribe(() => { this.loadData(1); });
      
    this.classFilterControl.valueChanges.pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => { this.loadData(1); });
      
    this.startDateControl.valueChanges.pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => { this.loadData(1); });
      
    this.endDateControl.valueChanges.pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => { this.loadData(1); });
  }

  loadData(pageNo: number = 1) {
    this.isLoading.set(true);
    const keyword = this.searchControl.value || undefined;
    const classId = this.classFilterControl.value || undefined;
    const startDate = this.startDateControl.value || undefined;
    const endDate = this.endDateControl.value || undefined;

    this.transferService.searchHistory(keyword, classId, startDate, endDate, pageNo, 10).subscribe({
      next: (res) => {
        this.pageData.set(res);
        this.historyLogs.set(res.content);
        this.isLoading.set(false);
      },
      error: () => this.isLoading.set(false)
    });
  }

  changePage(page: number) {
    if (page >= 1 && (this.pageData().totalPages === 0 || page <= this.pageData().totalPages)) {
      this.loadData(page);
    }
  }
}