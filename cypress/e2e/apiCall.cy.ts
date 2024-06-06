// cypress/e2e/apiCalls.cy.ts
import { ApiCalls } from "../../utils/calls"

describe('ApiCalls', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://swapi.dev/api/people/', {
      statusCode: 200,
      body: {
        results: [{ name: 'Luke Skywalker' }],
        next: 'https://swapi.dev/api/people/?page=2'
      }
    }).as('getPeoplePage1');

    cy.intercept('GET', 'https://swapi.dev/api/people/?page=2', {
      statusCode: 200,
      body: {
        results: [{ name: 'Darth Vader' }],
        next: null
      }
    }).as('getPeoplePage2');
  });

  it('should return a list of results for a valid type', async () => {
    const result = await ApiCalls.getList('people');
    expect(result).to.deep.equal([{ name: 'Luke Skywalker' }, { name: 'Darth Vader' }]);

    cy.wait('@getPeoplePage1').then((interception) => {
      expect(interception.request.method).to.eq('GET');
    });

    cy.wait('@getPeoplePage2').then((interception) => {
      expect(interception.request.method).to.eq('GET');
    });
  });

  it('should return an error object when the fetch fails', async () => {
    cy.intercept('GET', 'https://swapi.dev/api/unknown/', {
      statusCode: 404,
      statusMessage: 'Not Found'
    }).as('getUnknown');

    const result = await ApiCalls.getList('unknown');
    expect(result).to.deep.equal({ error: 'NOT FOUND' });

    cy.wait('@getUnknown').then((interception) => {
      expect(interception.request.method).to.eq('GET');
    });
  });

  
});
