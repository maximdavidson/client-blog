import { Routes } from '@/constants/routes';

describe('Join Us Button Navigation', () => {
  const appHost = Cypress.env('APP_HOST') || 'http://localhost:3000/en';

  beforeEach(() => {
    cy.visit(appHost);
  });

  it('should navigate to the Contact Us page when clicking the Join Us button', () => {
    cy.contains('button', 'Join Now').click();

    cy.wait(1000);

    cy.url().should('include', Routes.ContactUs);
  });
});
