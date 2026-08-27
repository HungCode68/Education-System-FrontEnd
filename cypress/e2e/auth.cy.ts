describe('Authentication Flow', () => {
  beforeEach(() => {
    cy.seedDb();
  });

  it('should login successfully as Admin', () => {
    cy.login('admin@gmail.com', '/admin');
    cy.logout();
  });

  it('should login successfully as Academic', () => {
    cy.login('dt260001@school.edu.vn', '/academic');
    cy.logout();
  });

  it('should login successfully as Teacher', () => {
    cy.login('cm260001@school.edu.vn', '/teacher');
    cy.logout();
  });

  it('should login successfully as Student', () => {
    cy.login('hv260001@student.edu.vn', '/student');
    cy.logout();
  });
  
  it('should login successfully as HR', () => {
    cy.login('hr260001@school.edu.vn', '/hr');
    cy.logout();
  });

  it('should show error with invalid credentials', () => {
    cy.visit('/login');
    cy.get('input[formControlName="email"]').type('admin@gmail.com');
    cy.get('input[formControlName="password"]').type('wrongpassword');
    cy.get('button[type="submit"]').click();
    
    // Using simple wait or toast assert based on frontend implementation
    cy.contains('Invalid email or password').should('be.visible');
  });

  it('should redirect to Unauthorized when accessing forbidden route', () => {
    cy.login('hv260001@student.edu.vn', '/student');
    cy.visit('/admin/users');
    cy.url().should('include', '/unauthorized');
  });
});
