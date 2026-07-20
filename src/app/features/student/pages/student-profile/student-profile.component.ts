import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentProfileService } from '../../services/student-profile.service';
import { ToastService } from '../../../../core/services/toast.service';

@Component({
  selector: 'app-student-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-profile.component.html'
})
export class StudentProfileComponent implements OnInit {
  private profileService = inject(StudentProfileService);
  private toastService = inject(ToastService);

  profile = signal<any>(null);
  isLoading = signal(true);

  ngOnInit() {
    this.loadProfile();
  }

  loadProfile() {
    this.isLoading.set(true);
    
    // Gọi thẳng API lấy profile của chính mình
    this.profileService.getMyProfile().subscribe({
      next: (res) => {
        this.profile.set(res);
        
        // CẬP NHẬT LẠI LỚP CHỦ NHIỆM VÀO LOCAL STORAGE CHO THANH MENU NHẬN DIỆN
        const userInfoStr = localStorage.getItem('user_info');
        if (userInfoStr) {
           const userInfo = JSON.parse(userInfoStr);
           
           if (res.currentClassId) {
               userInfo.physicalClassId = res.currentClassId;
           }
           // Lưu ké luôn cái studentId vào để sau này cần thì dùng
           userInfo.studentId = res.id; 
           
           localStorage.setItem('user_info', JSON.stringify(userInfo));
        }

        this.isLoading.set(false);
      },
      error: (err) => {
        // Nếu backend trả về 404 (Không tìm thấy hồ sơ)
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