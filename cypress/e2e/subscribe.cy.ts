describe('Email Subscription', () => {
  const appHost = Cypress.env('APP_HOST') || 'http://localhost:3000/en';

  beforeEach(() => {
    cy.visit(appHost);
  });

  it('should subscribe to the newsletter', () => {
    cy.intercept('POST', '/api/sendEmail', {
      statusCode: 200,
      body: { success: true },
    }).as('sendEmail');

    cy.get('input[type="email"]').type('test@example.com');

    cy.get('form').submit();

    cy.contains('button', 'Done').should('be.visible');
  });
});
