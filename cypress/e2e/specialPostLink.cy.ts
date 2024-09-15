import { Routes } from '@/constants/routes';

describe('Special Post Navigation', () => {
  const appHost = Cypress.env('APP_HOST') || 'http://localhost:3000/en';

  beforeEach(() => {
    cy.visit(appHost);
  });

  it('should navigate to the About Us page when clicking the button', () => {
    cy.contains('button', 'Discover our story').click();
    cy.wait(1000);
    cy.url().should('include', Routes.AboutUs);
  });
});
