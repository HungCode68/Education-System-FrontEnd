describe('Academic Flow', () => {
  before(() => {
    cy.seedDb();
  });

  beforeEach(() => {
    cy.login('dt260001@school.edu.vn', '/academic');
  });

  afterEach(() => {
    cy.logout();
  });

  it('should view and manage courses', () => {
    cy.visit('/academic/courses');
    cy.contains('Khóa học').should('exist');
    
    // Create Course
    cy.contains('button', 'Thêm khóa học').click({force: true});
    cy.get('input[formControlName="code"]').type('TEST_COURSE');
    cy.get('input[formControlName="name"]').type('Khóa học Test Cypress');
    cy.get('input[formControlName="durationHours"]').type('100');
    cy.get('input[placeholder="VD: 5,000,000"]').type('5000000');
    cy.contains('button', 'Thêm mới').click({force: true});
    
    cy.contains('Thành công').should('exist');
    cy.contains('TEST_COURSE').should('exist');

    // Edit Course
    cy.get('tr').filter(':contains("TEST_COURSE")').within(() => {
      cy.get('button').contains('Chỉnh sửa').click({force: true});
    });
    cy.get('input[formControlName="name"]').clear().type('Khóa học Đã Sửa');
    cy.contains('button', 'Cập nhật').click({force: true});
    
    cy.contains('Thành công').should('exist');
    cy.contains('Khóa học Đã Sửa').should('exist');

    // Delete Course
    cy.get('tr').filter(':contains("TEST_COURSE")').within(() => {
      cy.get('button').contains('Xóa').click({force: true});
    });
    cy.get('.fixed').contains('button', 'Đồng ý Xóa').click({force: true});
    
    cy.contains('Thành công').should('exist');
    cy.contains('TEST_COURSE').should('not.exist');
  });

  it('should view and manage terms', () => {
    cy.visit('/academic/terms');
    cy.contains('Kỳ học').should('exist');
    
    // Create Term
    cy.contains('button', 'Thêm kỳ học').click({force: true});
    cy.get('input[formControlName="code"]').type('TEST_TERM');
    cy.get('input[formControlName="name"]').type('Kỳ Test Cypress');
    cy.get('input[formControlName="year"]').type('2026');
    cy.get('input[placeholder="Chọn ngày (dd/MM/yyyy)"]').first().type('01/01/2026');
    cy.get('input[placeholder="Chọn ngày (dd/MM/yyyy)"]').last().type('30/06/2026');
    cy.contains('button', 'Thêm mới').click({force: true});
    
    cy.contains('Thành công').should('exist');
    cy.contains('TEST_TERM').should('exist');

    // Edit Term
    cy.get('tr').filter(':contains("TEST_TERM")').within(() => {
      cy.get('button').contains('Chỉnh sửa').click({force: true});
    });
    cy.get('input[formControlName="name"]').clear().type('Kỳ Test Đã Sửa');
    cy.contains('button', 'Cập nhật').click({force: true});
    
    cy.contains('Thành công').should('exist');
    cy.contains('Kỳ Test Đã Sửa').should('exist');

    // Delete Term
    cy.get('tr').filter(':contains("TEST_TERM")').within(() => {
      cy.get('button').contains('Xóa').click({force: true});
    });
    cy.get('.fixed').contains('button', 'Đồng ý Xóa').click({force: true});
    
    cy.contains('Thành công').should('exist');
    cy.contains('TEST_TERM').should('not.exist');
  });

  it('should view and manage rooms', () => {
    cy.visit('/academic/rooms');
    cy.contains('Phòng học').should('exist');
    
    // Create Room
    cy.contains('button', 'Thêm phòng học').click({force: true});
    cy.get('input[formControlName="name"]').type('Phòng Test Cypress');
    cy.get('input[formControlName="capacity"]').clear().type('50');
    cy.contains('button', 'Thêm mới').click({force: true});
    
    cy.contains('Thành công').should('exist');
    cy.contains('Phòng Test Cypress', { matchCase: false }).should('exist');

    // Edit Room
    cy.contains('Phòng Test Cypress', { matchCase: false })
      .parents('tr')
      .contains('button', 'Chỉnh sửa')
      .click({force: true});
    cy.get('input[formControlName="name"]').clear().type('Phòng Test Cypress Cập nhật');
    cy.get('input[formControlName="capacity"]').clear().type('100');
    cy.contains('button', 'Cập nhật').click({force: true});
    
    cy.contains('Thành công').should('exist');
    cy.contains('100 chỗ ngồi').should('exist');

    // Delete Room
    cy.contains('Phòng Test Cypress Cập nhật', { matchCase: false })
      .parents('tr')
      .contains('button', 'Xóa')
      .click({force: true});
    cy.get('.fixed').contains('button', 'Đồng ý Xóa').click({force: true});
    
    cy.contains('Thành công').should('exist');
    cy.contains('Phòng Test Cypress Cập nhật', { matchCase: false }).should('not.exist');
  });
  it('should manage students and enrollment', () => {
    cy.visit('/academic/students');
    cy.contains('Học viên').should('exist');
    
    // Add Student Modal
    cy.contains('button', 'Thêm học viên mới').click({force: true});
    cy.contains('Thêm học viên mới').should('exist');
    cy.get('button').contains('Hủy').click({force: true});
  });

  it('should view and manage classes', () => {
    cy.visit('/academic/classes');
    cy.contains('Lớp học').should('exist');
    
    // Create Class
    cy.contains('button', 'Thêm lớp học').click({force: true});
    cy.get('input[formControlName="code"]').type('TEST_CLASS');
    cy.get('input[formControlName="name"]').type('Lớp Test Cypress');
    cy.get('input[formControlName="maxStudents"]').clear().type('20');
    // We should select course and term but they are dynamic. We skip for now or select index 1 if exist.
    // We will just try to save. If it requires courseId, we need to select the first option (index 1 because index 0 is "-- Chọn khóa học --")
    cy.get('select[formControlName="courseId"]').then($select => {
      if ($select.find('option').length > 1) {
         cy.get('select[formControlName="courseId"]').select(1);
      }
    });
    cy.contains('button', 'Thêm mới').click({force: true});
    
    cy.contains('Thành công').should('exist');
    
    // Search for the class to ensure it's found even if paginated
    cy.get('input[placeholder="Tìm mã hoặc tên lớp..."]').clear().type('TEST_CLASS{enter}');
    
    cy.contains('TEST_CLASS', { matchCase: false }).should('exist');

    // Delete Class
    cy.contains('TEST_CLASS', { matchCase: false })
      .parents('tr')
      .contains('button', 'Xóa')
      .click({force: true});
    cy.get('.fixed').contains('button', 'Đồng ý Xóa').click({force: true});
    
    cy.contains('TEST_CLASS', { matchCase: false }).should('not.exist');
  });

  it('should view schedules and manage teaching assignments', () => {
    cy.visit('/academic/schedules');
    cy.contains('Lịch học').should('exist');
    
    cy.visit('/academic/teaching-assignments');
    cy.contains('Phân công Giảng dạy').should('exist');
  });

  it('should view teaching substitutions', () => {
    cy.visit('/academic/teaching-substitutions');
    // Just verify we can visit the page
    cy.url().should('include', '/teaching-substitutions');
  });

  it('should view learning materials', () => {
    cy.visit('/academic/learning-materials');
    cy.contains('Tài liệu Khóa học').should('exist');
  });
});
