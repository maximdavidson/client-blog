const appHost = Cypress.env('APP_HOST') || 'http://localhost:3001/en';

describe('Language Switcher in Footer', () => {
  beforeEach(() => {
    cy.visit(appHost);
  });

  it('should switch language from English to Russian and update URL', () => {
    cy.url().should('include', '/en');

    cy.get('button').contains('RU').click();

    cy.url().should('include', '/ru');
  });
});
