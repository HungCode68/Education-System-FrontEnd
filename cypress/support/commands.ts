declare global {
  namespace Cypress {
    interface Chainable {
      login(username: string, rolePath: string): Chainable<void>;
      logout(): Chainable<void>;
      seedDb(): Chainable<void>;
    }
  }
}

Cypress.Commands.add('seedDb', () => {
  cy.task('seedDb');
});

Cypress.Commands.add('login', (email, rolePath) => {
  cy.clearCookies();
  cy.clearLocalStorage();
  
  cy.visit('/login');
  cy.get('input[formControlName="email"]').type(email);
  cy.get('input[formControlName="password"]').type('123456');
  cy.get('button[type="submit"]').click();
  cy.url({ timeout: 10000 }).should('include', rolePath);
});

Cypress.Commands.add('logout', () => {
  cy.contains('Đăng xuất').click({ force: true });
  cy.url().should('include', '/login');
});

export {};
