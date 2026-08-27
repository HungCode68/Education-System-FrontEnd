describe('Student Flow', () => {
  before(() => {
    cy.seedDb();
  });

  beforeEach(() => {
    // Assuming hv260001@student.edu.vn exists in seed for students
    cy.login('hv260001@student.edu.vn', '/student');
  });

  afterEach(() => {
    cy.logout();
  });

  it('should view dashboard', () => {
    cy.visit('/student/dashboard');
    cy.url().should('include', '/student/dashboard');
  });

  it('should view my classes', () => {
    cy.visit('/student/my-classes');
    cy.contains('Lớp học của tôi').should('exist');
  });

  it('should view schedule', () => {
    cy.visit('/student/schedule');
    cy.contains('Lịch học', { matchCase: false }).should('exist');
  });

  it('should view profile', () => {
    cy.visit('/student/profile');
    // Usually has "Thông tin học viên" or "Hồ sơ"
    cy.url().should('include', '/student/profile');
  });
});
