import { Routes } from '@/constants/routes';
import { authors } from '@/data/authors';

describe('Author Navigation', () => {
  const appHost = Cypress.env('APP_HOST') || 'http://localhost:3000/en';

  beforeEach(() => {
    cy.visit(appHost);
  });

  authors.slice(0, 4).forEach(({ id, name }) => {
    it(`should navigate to the ${name} author page when clicking on the ${name} card`, () => {
      cy.contains('a', name).click();
      cy.wait(1000);
      cy.url().should('include', `${Routes.Author}/${id}`);
    });
  });
});
