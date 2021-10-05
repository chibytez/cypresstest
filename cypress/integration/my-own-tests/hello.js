/// <reference types="cypress" />

describe('getting started', ()=> {
    it('visit a site', () => {
        cy.visit("https://codedamn.com")
        cy.contains('New way to learn programming')
        cy.url().then(value =>{
            cy.log('the current url is', value)
        })
 
    })

    it('should take input and login', ()=> {
        cy.get('[id=username]').type('admin')
        cy.get('[id=email]').type('aniakuchibuike@gmail.com')
        cy.get('[id=password]').type('password')
        cy.get('[data-testid=login]').click();
    })
})