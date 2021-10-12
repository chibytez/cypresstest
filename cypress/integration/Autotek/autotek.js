/// <reference types="cypress" />

describe('End to end test', ()=>{
    it('should visit the site', ()=>{
        cy.visit('https://marketplace.staging.myautochek.com/ng')
        cy.url().then(value =>{
            cy.log('url is', value)
        })
        cy.contains('BUY A TRUCK?')
        cy.contains('Buy brand new cars from major retailers in Nigeria.')
        cy.contains('Search cars, find what is right for you and lock it down with a deposit')
        cy.contains('We bring the premium service you deserve right to your frontdoor')
        cy.contains('Get the Autochek app')
    })
})