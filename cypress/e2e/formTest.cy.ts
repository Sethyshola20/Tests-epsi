// cypress/integration/form_spec.js

describe('Form Component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000') // Adjust the URL to where your component is rendered
  })

  it('should submit the form and update the list', () => {
    // Intercept the API call and mock the response
    cy.intercept('GET', '/api/list?type=people', { fixture: 'people.json' }).as('getPeopleList')

    // Select an option from the dropdown
    cy.get('select[name="type"]').select('people')

    // Submit the form
    cy.get('form').submit()

    // Check for loading message
    cy.get('div').contains('Loading...')

    // Wait for the API call to complete and assert the response handling
    cy.wait('@getPeopleList').then((interception) => {
      // Assert that the API call was made
      expect(interception.request.url).to.include('/api/list?type=people')

      // Optionally, assert the list update if there's a way to verify the setList function
      // cy.get('@setList').should('have.been.calledWith', interception.response.body)
    })

    // Check that the loading message is no longer displayed
    cy.get('div').contains('Loading...').should('not.exist')

    // Assert that no error message is displayed
    cy.get('div').contains('text-red-500').should('not.exist')
  })

  it('should handle API error correctly', () => {
    // Intercept the API call and mock an error response
    cy.intercept('GET', '/api/list?type=people', { statusCode: 500, body: { message: 'Internal Server Error' } }).as('getPeopleListError')

    // Select an option from the dropdown
    cy.get('select[name="type"]').select('people')

    // Submit the form
    cy.get('form').submit()

    // Check for loading message
    cy.get('div').contains('Loading...')

    // Wait for the API call to complete and assert the error handling
    cy.wait('@getPeopleListError').then((interception) => {
      // Assert that the API call was made
      expect(interception.request.url).to.include('/api/list?type=people')

      // Check for the error message
      cy.get('div').contains('Internal Server Error')
    })

    // Check that the loading message is no longer displayed
    cy.get('div').contains('Loading...').should('not.exist')
  })
})
