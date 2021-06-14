describe('login', () => {
    it('should redirect to homepage given valid credentials', () => {
        cy.visit('/')
        cy.get('[data-testid="username"]').type("sebastian.pasieka")
        cy.get('[data-testid="password"]').type("")
        cy.get('[data-testid="submit"]').click()

        cy.url().should('include', '/')
        cy.get('[data-testid="searchbar"]').should('be.visible')
    })

    it('should display error message given invalid credentials', () => {

    })
})