describe('Category Page Interactions', () => {
  const appHost =
    Cypress.env('APP_HOST') || 'http://localhost:3001/en/categoryPage/Business';
  beforeEach(() => {
    // Переходим на страницу категории
    cy.visit(appHost);
  });

  it('should display categories and allow selecting a category', () => {
    // Проверяем, что на странице отображаются категории
    cy.get('[data-testid="category-item"]').should(
      'have.length.greaterThan',
      0,
    );

    // Кликаем на первую категорию
    cy.get('[data-testid="category-item"]').first().click();

    // Проверяем, что URL обновился в соответствии с выбранной категорией
    cy.url().should('include', '/categoryPage/');

    // Проверяем, что посты обновились после выбора категории
    cy.get('[data-testid="post-item"]').should('exist');
  });

  it('should display tags and allow selecting a tag', () => {
    // Проверяем, что на странице отображаются теги
    cy.get('[data-testid="tag-item"]').should('have.length.greaterThan', 0);

    // Кликаем на первый тег
    cy.get('[data-testid="tag-item"]').first().click();

    // Проверяем, что посты обновились после выбора тега
    cy.get('[data-testid="post-item"]').should('exist');
  });

  it('should show a search error if no results found', () => {
    // Вводим некорректный поисковый запрос
    cy.get('input[placeholder="Search"]').type('NonExistingCategory');

    // Нажимаем на кнопку поиска
    cy.get('button').contains('Search').click();

    // Проверяем, что появилось сообщение об ошибке
    cy.get('[data-testid="search-error"]').should(
      'contain',
      'No matching results found.',
    );
  });

  it('should allow searching for an existing category', () => {
    // Вводим название существующей категории
    cy.get('input[placeholder="Search"]').type('Business');

    // Нажимаем на кнопку поиска
    cy.get('button').contains('Search').click();

    // Проверяем, что результат поиска отображен
    cy.get('[data-testid="search-result"]').should('contain', 'Business');

    // Кликаем по результату поиска
    cy.get('[data-testid="search-result"]').click();

    // Проверяем, что URL обновился с выбранной категорией
    cy.url().should('include', '/categoryPage/Business');

    // Проверяем, что посты обновились для выбранной категории
    cy.get('[data-testid="post-item"]').should('exist');
  });
});
