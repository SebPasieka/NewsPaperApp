describe('MainContent', ()=> {
    it('should display an article after searching with a specific string', () => {
        cy.visit('/')
        cy.successfulLogin()

        cy.searchArticle("welt")

        cy.get('[data-testid="article-entry"]', {timeout: 1000}).contains('welt')
    })
})