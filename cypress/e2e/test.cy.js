/// <reference types="cypress" />

it('Google Search', () => {
    cy.visit('https://google.com')

    cy.get('.SDkEP').type('Priyanka Arul Mohan')

    cy.contains('Google Search').click()


})