describe('HR Flow', () => {
  before(() => {
    cy.seedDb();
  });

  beforeEach(() => {
    cy.login('hr260001@school.edu.vn', '/hr');
  });

  afterEach(() => {
    cy.logout();
  });

  it('should view and manage departments', () => {
    cy.visit('/hr/departments');
    cy.contains('Quản lý Phòng ban').should('be.visible');
    
    // Create Department
    cy.contains('Thêm Phòng ban').click({ force: true });
    cy.get('input[formControlName="code"]').type('TEST_DEPT');
    cy.get('input[formControlName="name"]').type('Phòng Test Cypress');
    cy.get('textarea[formControlName="description"]').type('Phòng ban dùng để test E2E');
    cy.contains('button', 'Tạo phòng ban').click({ force: true });
    
    // Verify creation
    cy.contains('Thành công').should('exist');
    cy.contains('TEST_DEPT').should('exist');

    // Update Department
    cy.get('tr').filter(':contains("TEST_DEPT")').within(() => {
      cy.get('button').contains('Sửa').first().click({ force: true });
    });
    cy.get('input[formControlName="name"]').clear().type('Phòng Test Đã Sửa');
    cy.contains('button', 'Lưu cập nhật').click({ force: true });
    
    cy.contains('Thành công').should('exist');
    cy.contains('Phòng Test Đã Sửa').should('exist');

    // Delete Department
    cy.get('tr').filter(':contains("TEST_DEPT")').within(() => {
      cy.get('button').contains('Xóa').first().click({ force: true });
    });
    cy.get('.fixed').contains('button', 'Đồng ý xóa').click({ force: true });
    
    cy.contains('TEST_DEPT').should('not.exist');
  });

  it('should view and manage staff', () => {
    cy.visit('/hr/staffs');
    cy.contains('Nhân sự').should('exist');
    
    // Create Staff
    cy.contains('Thêm nhân sự mới').click({ force: true });
    cy.get('input[formControlName="fullName"]').type('Nhân viên Test');
    cy.get('select[formControlName="staffType"]').select('STAFF');
    cy.contains('button', 'Lưu').click({ force: true });
    
    cy.contains('Thành công').should('exist');
    cy.contains('Nhân viên Test').should('exist');

    // Update Staff
    cy.get('tr').filter(':contains("Nhân viên Test")').within(() => {
      cy.get('button').contains('Sửa').first().click({ force: true });
    });
    cy.get('input[formControlName="fullName"]').clear().type('Nhân viên Đã Sửa');
    cy.contains('button', 'Lưu').click({ force: true });
    
    cy.contains('Thành công').should('exist');
    cy.contains('Nhân viên Đã Sửa').should('exist');

    // Delete Staff
    cy.get('tr').filter(':contains("Nhân viên Đã Sửa")').within(() => {
      cy.get('button').contains('Xóa').first().click({ force: true });
    });
    cy.get('.fixed').contains('button', 'Xóa').click({ force: true });
    
    cy.contains('Nhân viên Đã Sửa').should('not.exist');
  });
});
