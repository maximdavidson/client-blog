describe('Category Page Interactions', () => {
  const appHost =
    Cypress.env('APP_HOST') || 'http://localhost:3000/en/categoryPage/Business';
  beforeEach(() => {
    cy.visit(appHost);
  });

  it('should display categories and allow selecting a category', () => {
    cy.get('[data-testid="category-item"]').should(
      'have.length.greaterThan',
      0,
    );

    cy.get('[data-testid="category-item"]').first().click();

    cy.url().should('include', '/categoryPage/');

    cy.get('[data-testid="post-item"]').should('exist');
  });

  it('should display tags and allow selecting a tag', () => {
    cy.get('[data-testid="tag-item"]').should('have.length.greaterThan', 0);

    cy.get('[data-testid="tag-item"]').first().click();

    cy.get('[data-testid="post-item"]').should('exist');
  });

  it('should show a search error if no results found', () => {
    cy.get('input[placeholder="Search"]').type('NonExistingCategory');

    cy.get('button').contains('Search').click();

    cy.get('[data-testid="search-error"]').should(
      'contain',
      'No matching results found.',
    );
  });

  it('should allow searching for an existing category', () => {
    cy.get('input[placeholder="Search"]').type('Business');

    cy.get('button').contains('Search').click();

    cy.get('[data-testid="search-result"]').should('contain', 'Business');

    cy.get('[data-testid="search-result"]').click();

    cy.url().should('include', '/categoryPage/Business');

    cy.get('[data-testid="post-item"]').should('exist');
  });
});
