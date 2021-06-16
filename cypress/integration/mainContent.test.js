describe('MainContent', ()=> {
    it('should display an article after searching with a specific string', () => {
        cy.visit('/')
        cy.successfulLogin()

        cy.searchArticle("welt")

        cy.get('[data-testid="article-entry"]', {timeout: 2000}).contains('welt')
    })

    it('should display a "nothing found" message after searching with an abstract string', () => {
        cy.visit('/')
        cy.successfulLogin()

        cy.searchArticle("UnterDieserSuchbegriffGibtEsMitSicherheitKeinArtikel")

        cy.get('[data-testid="nothing-found-message"]', {timeout: 2000}).should('be.visible')
    })

    /*it('should redirect to the actual article after click on a title of an article', () => {
        cy.visit('/')
        cy.successfulLogin()

        cy.get('[data-testid="article-link"]').first().click()

        cy.url().should('contain', 'https://www.welt.de/')
    })*/

    it('should redirect to login after click on the logout button', () => {
        cy.visit('/')
        cy.successfulLogin()

        cy.get('[data-testid="logoutButton"]').click()

        cy.url().should('include', '/login')
    })

})