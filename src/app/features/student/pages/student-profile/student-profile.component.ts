import { Component, OnInit, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentProfileService, StudentDto } from '../../services/student-profile.service';
import { ToastService } from '../../../../core/services/toast.service';

@Component({
  selector: 'app-student-profile',
  imports: [CommonModule],
  templateUrl: './student-profile.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StudentProfileComponent implements OnInit {
  private profileService = inject(StudentProfileService);
  private toastService = inject(ToastService);

  profile = signal<StudentDto | null>(null);
  isLoading = signal(true);

  ngOnInit() {
    this.loadProfile();
  }

  loadProfile() {
    this.isLoading.set(true);
    
    this.profileService.getMyProfile().subscribe({
      next: (res) => {
        this.profile.set(res);
        
        const userInfoStr = localStorage.getItem('user_info');
        if (userInfoStr && res) {
           const userInfo = JSON.parse(userInfoStr);
           
           if (res.currentClassId) {
               userInfo.physicalClassId = res.currentClassId;
           }
           userInfo.studentId = res.id; 
           
           localStorage.setItem('user_info', JSON.stringify(userInfo));
        }

        this.isLoading.set(false);
      },
      error: (err) => {
        if (err.status === 404) {
             this.toastService.warning('Chưa liên kết', 'Tài khoản của bạn chưa được liên kết với hồ sơ học sinh nào.');
        } else {
             this.toastService.error('Lỗi', 'Không thể tải thông tin hồ sơ.');
        }
        this.isLoading.set(false);
      }
    });
  }
}