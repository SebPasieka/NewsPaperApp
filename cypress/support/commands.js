// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('successfulLogin', () => {
    const username = Cypress.env('username')
    const password = Cypress.env('password')

    cy.get('[data-testid="username"]').type(username)
    cy.get('[data-testid="password"]').type(password)
    cy.get('[data-testid="submit"]').click()
    cy.wait(100)
})

Cypress.Commands.add('searchArticle', (keyword) => {
    cy.get('[data-testid="searchbar"]', { timeout: 10000 }).should('be.visible')
    cy.get('[data-testid="search-input"]').type(keyword+'{enter}')
    cy.wait(100)
})
