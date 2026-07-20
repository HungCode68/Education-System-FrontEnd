describe('Chức năng Đăng nhập Hệ thống', () => {
  beforeEach(() => {
    // Truy cập vào trang đăng nhập trước mỗi test case
    cy.visit('/login'); 
  });

  it('hiển thị đúng tiêu đề hoặc thành phần của trang đăng nhập', () => {
    // Kiểm tra đã vào đúng URL và nút Login có hiển thị
    cy.url().should('include', '/login');
    cy.get('button[type="submit"]').should('exist');
    cy.get('.login-title').should('contain', 'Login');
  });

  it('vô hiệu hóa nút Đăng nhập khi bỏ trống thông tin', () => {
    // Vì form trống, nút button phải ở trạng thái disabled
    cy.get('button[type="submit"]').should('be.disabled');
  });

  it('hiển thị lỗi định dạng nếu nhập sai cấu trúc email', () => {
    // Nhập text không phải dạng email vào ô "email"
    cy.get('input[formControlName="email"]').type('student_wrong_format');
    cy.get('input[formControlName="password"]').click(); // Click ra chỗ khác để kích hoạt touched

    // Kiểm tra dòng báo lỗi định dạng email hiện lên theo đúng HTML của bạn
    cy.get('.error-text').should('be.visible').and('contain', 'Invalid email format');
    
    // Nút submit vẫn phải bị vô hiệu hóa
    cy.get('button[type="submit"]').should('be.disabled');
  });

  it('hiển thị thông báo lỗi từ server khi đăng nhập thất bại', () => {
    // Cố tình nhập sai tài khoản không có trong DB
    cy.get('input[formControlName="email"]').type('wrong_account@gmail.com');
    cy.get('input[formControlName="password"]').type('wrongpassword');
    
    // Nút submit đã bật, tiến hành click
    cy.get('button[type="submit"]').should('not.be.disabled').click();

    // Kiểm tra thẻ div .alert-error có xuất hiện để hiển thị thông báo lỗi từ errorMessage() không
    cy.get('.alert-error').should('be.visible');
    
    // Đảm bảo vẫn đang ở trang đăng nhập, không bị chuyển hướng
    cy.url().should('include', '/login');
  });

  it('đăng nhập thành công với tài khoản hợp lệ', () => {
    // Nhập đầy đủ thông tin (lưu ý form yêu cầu email nên phải nhập đúng dạng)
    cy.get('input[formControlName="email"]').type('school@gmail.com');
    cy.get('input[formControlName="password"]').type('123456789');
    
    // Sau khi nhập đủ thông tin, nút button sẽ tự động được enable
    cy.get('button[type="submit"]').should('not.be.disabled').click();

    // Xác nhận URL đã chuyển sang trang dashboard hoặc trang chủ
    // Bạn thay đổi '/dashboard' thành đường dẫn thực tế của hệ thống sau khi login nhé
    cy.url().should('not.include', '/login'); 
  });
});