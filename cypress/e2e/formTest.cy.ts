describe('form testing', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
    cy.get("button").click()
  })
})