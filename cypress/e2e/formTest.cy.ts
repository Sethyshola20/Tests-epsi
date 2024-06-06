 describe('Form Component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000'); 
  });

  it('should display loading indicator when form is submitted', () => {
    cy.get('#type').select('people');
    cy.get('#submit').click();

    cy.get('.text-center').should('exist'); 
    cy.get('.text-center').should('contain', 'Loading...'); 
  });

  it('should display error message when an error occurs', () => {
    cy.get('#type').select('people');
    cy.get('#submit').click();

    cy.get('.text-center').should('exist');
  });

  it('should display selected type when form is submitted', () => {
    cy.get('#type').select('people');
    cy.get('#submit').click();

    cy.get('ul').should('exist'); 
  });
});
