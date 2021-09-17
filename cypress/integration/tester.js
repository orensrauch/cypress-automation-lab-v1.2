

describe('test with docker', () => {
    it('Should load github Expense Track repo page', () => {
        cy.visit('https://github.com/orensrauch/solveqa-expense-tracker')
    })
    it('Should load h1 element', () => {
        cy.get('h1').should('be.visible')
        cy.wait(1500)
      
    })
    it('Should Scroll down', () => {
        cy.get('#user-content--test-with-k6').scrollIntoView()
        cy.wait(500)
    })
    it('Should Scroll up', () => {
        cy.get('#projects-tab').scrollIntoView()
        cy.wait(500)
    })
    it('Should Scroll down', () => {
        cy.get('#user-content--test-with-k6').scrollIntoView()
        cy.wait(500)
    })
    it('Should Scroll up', () => {
        cy.get('#projects-tab').scrollIntoView()
        cy.wait(500)
    })
    it('Should Scroll down', () => {
        cy.get('#user-content--test-with-k6').scrollIntoView()
        cy.wait(500)
    })
    it('Should Scroll up', () => {
        cy.get('#projects-tab').scrollIntoView()
        cy.wait(500)
    })
    it('Should Scroll down', () => {
        cy.get('#user-content--test-with-k6').scrollIntoView()
        cy.wait(500)
    })
    it('Should Scroll up', () => {
        cy.get('#projects-tab').scrollIntoView()
        cy.wait(500)
    })
    it('Should open side menu burger icon', () => {
        cy.get('div.d-flex.flex-justify-between > .d-flex > .js-details-target').click();
        cy.wait(500)
        cy.get('.d-lg-none > .js-details-target > .octicon').click()
        cy.wait(500)

    })
    it('Should Scroll down', () => {
        cy.get('#user-content--test-with-k6').scrollIntoView()
        cy.wait(500)
    })
})