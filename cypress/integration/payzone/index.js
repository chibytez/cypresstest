/// <reference types="cypress" />

describe("Payzoe UI Test", ()=> {
  it('visit payzone',()=>{
      cy.visit(Cypress.env('PayzoneUrl'))
      cy.url().then(value =>{
          cy.log("url is:", value)
      })
      cy.contains('Receive Money (Payzone Link)')
      cy.contains("Marketplace")
  })

  it('Login to payzone', ()=>{
      cy.get('[title=Account]').click()
      cy.get('[class=pz-btn-group__btn]').last().click()
      cy.contains('Login')
      cy.contains('Forgot password?')
      cy.contains('No payzone account? Sign Up')
      cy.get('[type=email]').type(Cypress.env('UserEmail'))
      cy.get('[type=password]').type(Cypress.env('UserPassword'))
      cy.get('[class=start]').click()
      cy.contains('Success')
      cy.contains('Your Wallet')   
  })

//   it('Add Fund to Wallet',()=>{
//       cy.get('[class=wallet__value]').click()
//       cy.get('a[href*="/wallet/fund"]').click({force: true})
//       cy.contains('Fund Wallet')
//       cy.get('[id=amountInput]').type('5000')
//       cy.get('[type=submit]').click()
//     //   cy.getWithinIframe('[class="app-container"]')
//     //     .should('be.visible')
//     //     .wait(500)
//       cy.getWithinIframe('[id=i5YwH]').type(Cypress.env('CardNumber'))
      
//   })
})