describe('Admin Flow', () => {
  before(() => {
    cy.seedDb();
  });

  beforeEach(() => {
    cy.login('admin@gmail.com', '/admin');
  });

  afterEach(() => {
    cy.logout();
  });

  it('should view dashboard', () => {
    cy.contains('Hoạt động hệ thống gần đây').should('be.visible');
  });

  it('should manage roles and permissions', () => {
    cy.visit('/admin/roles');
    cy.contains('Quản lý Vai trò').should('be.visible');
    
    // Create Role
    cy.contains('Tạo Vai trò mới').click({force: true});
    cy.get('input[formControlName="name"]').type('ROLE_TEST_CYPRESS');
    cy.get('textarea[formControlName="description"]').type('Role created by Cypress');
    cy.contains('button', 'Tạo vai trò').click({force: true});
    
    // Verify creation
    cy.contains('ROLE_TEST_CYPRESS').should('exist');

    // Edit the first Role in the list to be safe
    cy.get('tbody tr').first().within(() => {
      cy.get('button').contains('Sửa').click({force: true});
    });
    cy.get('textarea[formControlName="description"]').clear().type('Updated description');
    cy.contains('button', 'Lưu cập nhật').click({force: true});
    cy.contains('Thành công').should('exist'); // Toast

    // Assign Permissions
    cy.get('tbody tr').first().within(() => {
      cy.get('button').contains('Phân quyền').click({force: true});
    });
    cy.contains('Chọn tất cả').click({force: true});
    cy.contains('button', 'Lưu Phân Quyền').click({force: true});
    cy.contains('Thành công').should('exist'); // Toast
  });

  it('should provision and manage user accounts', () => {
    // Navigate to students page to provision account
    cy.visit('/admin/students');
    cy.contains('Quản lý Học viên').should('be.visible');

    // Find a student row without an account (has "+ Cấp TK" button)
    cy.contains('button', '+ Cấp TK').first().click({ force: true });
    
    // In the modal, select a role (e.g. STUDENT)
    cy.get('form').within(() => {
      // Find the label containing 'STUDENT' and check its input
      cy.contains('label', 'STUDENT').find('input[type="checkbox"]').check({ force: true });
      cy.contains('button', 'Tạo tài khoản').click({ force: true });
    });
    
    // Verify toast success
    cy.contains('Đã cấp').should('exist');
    
    // Navigate to users page to verify and revoke the account
    cy.visit('/admin/users');
    cy.contains('Quản lý Tài khoản (Users)').should('be.visible');
    
    // Find a row with 'STUDENT' role and revoke it
    // Note: Since we seed data, we might have multiple STUDENTs, we just test the revocation flow on the first available one
    cy.get('table tbody tr').filter(':contains("STUDENT")').first().within(() => {
      cy.get('button').contains('Thu hồi').click({ force: true });
    });

    // In the delete confirmation modal
    cy.get('.fixed').contains('button', 'Đồng ý Thu hồi').click({ force: true });

    // Verify success toast
    cy.contains('Thành công').should('exist');
  });
  
  it('should view activity logs', () => {
    cy.visit('/admin/activity-logs');
    cy.contains('Nhật ký Hệ thống').should('be.visible');
    cy.get('table').should('exist');
  });
});
