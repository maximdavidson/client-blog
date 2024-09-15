import { categories } from '@/constants/categories';
import { Routes } from '@/constants/routes';

describe('Category Navigation', () => {
  const appHost = Cypress.env('APP_HOST') || 'http://localhost:3000/en';

  beforeEach(() => {
    cy.visit(appHost);
  });

  categories.forEach(({ title }) => {
    it(`should navigate to the ${title} category page when clicking on the ${title} card`, () => {
      cy.contains('a', title, { timeout: 5000 }).should('exist').click();
      cy.wait(1000);
      cy.url().should('include', `${Routes.Category}/${title}`);
    });
  });
});
