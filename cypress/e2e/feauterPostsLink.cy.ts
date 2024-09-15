import { Routes } from '@/constants/routes';

describe('Featured Posts Navigation', () => {
  const appHost = Cypress.env('APP_HOST') || 'http://localhost:3000/en';

  beforeEach(() => {
    cy.visit(appHost);
  });

  it('should navigate to the specific post page when clicking the button', () => {
    cy.contains('button', 'Read More').click();
    cy.url().should('include', Routes.Blog);
  });
});
