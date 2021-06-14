describe('login', () => {
    it('should redirect to homepage given valid credentials', () => {
        cy.visit('/')
        cy.successfulLogin()

        cy.url().should('include', '/')
        cy.get('[data-testid="searchbar"]', { timeout: 10000 }).should('be.visible')
    })

    it('should display error message given invalid credentials', () => {
        cy.visit('/')
        cy.get('[data-testid="username"]').type('invalid_username')
        cy.get('[data-testid="password"]').type('invalid_password')
        cy.get('[data-testid="submit"]').click()

        cy.url().should('include', '/login')
        cy.get('[data-testid="failedLoginMessage"]', { timeout: 10000 }).should('be.visible')
    })
})