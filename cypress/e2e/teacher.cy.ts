describe('Teacher Flow', () => {
  before(() => {
    cy.seedDb();
  });

  beforeEach(() => {
    // Make sure we login with a teacher account!
    // Using cm260001@school.edu.vn which should be seeded and have ROLE_TEACHER
    cy.login('cm260001@school.edu.vn', '/teacher');
  });

  afterEach(() => {
    cy.logout();
  });

  it('should view my classes', () => {
    cy.visit('/teacher/my-classes');
    cy.contains('Lớp học của tôi').should('exist');
  });

  it('should view teacher schedule', () => {
    cy.visit('/teacher/schedule');
    cy.contains('Lịch Dạy Học', { matchCase: false }).should('exist');
  });

  it('should view teacher profile', () => {
    cy.visit('/teacher/profile');
    cy.contains('Hồ sơ cá nhân', { matchCase: false }).should('exist');
  });

  it('should view department members', () => {
    cy.visit('/teacher/department-member');
    cy.contains('Quản lý', { matchCase: false }).should('exist');
  });
});
