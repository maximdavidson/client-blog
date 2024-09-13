import { Routes } from '@/constants/routes';

describe('Header Navigation and Video Modal', () => {
  const appHost = Cypress.env('APP_HOST') || 'http://localhost:3001/en';

  beforeEach(() => {
    cy.visit(appHost);
  });

  it('should navigate to Home page', () => {
    cy.contains('a', 'Home').click();
    cy.url().should('include', Routes.Home);
  });

  it('should navigate to Blog page', () => {
    cy.contains('a', 'Blog').click();
    cy.url().should('include', Routes.Blog);
  });

  it('should navigate to About Us page', () => {
    cy.contains('a', 'About Us').click();
    cy.url().should('include', Routes.AboutUs);
  });

  it('should navigate to Contact Us page', () => {
    cy.contains('a', 'Contact Us').click();
    cy.url().should('include', Routes.ContactUs);
  });
});
