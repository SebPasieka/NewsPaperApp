describe('login', () => {
    it('should redirect to homepage given valid credentials', () => {
        const username = Cypress.env('username')
        const password = Cypress.env('password')

        cy.visit('/')
        cy.get('[data-testid="username"]').type(username)
        cy.get('[data-testid="password"]').type(password)
        cy.get('[data-testid="submit"]').click()

        cy.url().should('include', '/')
        cy.get('[data-testid="searchbar"]').should('be.visible')
    })

    it('should display error message given invalid credentials', () => {

    })
})