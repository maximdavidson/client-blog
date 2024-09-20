import { Routes } from '@/constants/routes';

describe('Header Navigation and Video Modal', () => {
  const appHost = Cypress.env('APP_HOST') || 'http://localhost:3000/en';

  beforeEach(() => {
    cy.visit(appHost);
  });

  it('should navigate to Blog page', () => {
    cy.contains('button', 'Read More').click();
    cy.url().should('include', Routes.Blog);
  });
});
