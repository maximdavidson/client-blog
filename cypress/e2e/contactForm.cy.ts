describe('Contact Form', () => {
  const appHost =
    Cypress.env('APP_HOST') || 'http://localhost:3000/en/contactPage';

  beforeEach(() => {
    cy.visit(appHost);
  });

  it('should submit the form successfully and show success toast', () => {
    cy.intercept('POST', '/api/sendEmail', {
      statusCode: 200,
      body: { success: true },
    }).as('sendContactsForm');

    cy.get('input[name="fullName"]').type('John Doe');
    cy.get('input[name="email"]').type('john.doe@example.com');
    cy.get('select[name="queryRelated"]').select('support');
    cy.get('textarea[name="message"]').type('This is a test message.');

    cy.get('[data-testid="submit_btn"]').click();

    cy.wait('@sendContactsForm');

    cy.get('input[name="fullName"]').should('have.value', '');
    cy.get('input[name="email"]').should('have.value', '');
    cy.get('textarea[name="message"]').should('have.value', '');
  });
});
