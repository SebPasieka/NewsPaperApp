describe('MainContent', ()=> {

    beforeEach(() => {
        cy.visit('/')
        cy.successfulLogin()
    });

    it('should display an article after searching with a specific string', () => {

        cy.searchArticle("welt")

        cy.get('[data-testid="article-entry"]', {timeout: 2000}).contains('welt')
    })

    it('should display a "nothing found" message after searching with an abstract string', () => {

        cy.searchArticle("UnterDieserSuchbegriffGibtEsMitSicherheitKeinArtikel")

        cy.get('[data-testid="nothing-found-message"]', {timeout: 2000}).should('be.visible')
    })

    it('should return only welt articles', () => {
        cy.get('[data-testid="article-link"]').invoke('attr', 'href').should('contain', 'https://www.welt.de/')
    })

    it('should redirect to login after click on the logout button', () => {

        cy.get('[data-testid="logoutButton"]').click()

        cy.url().should('include', '/login')
    })

})
