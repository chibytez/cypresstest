/// <reference types="cypress" />

describe("Payzoe UI Test", ()=> {
  before('visit payzone',()=>{
      cy.visit(Cypress.env('PayzoneUrl'))
      cy.url().then(value =>{
          cy.log("url is:", value)
      })
      cy.contains('Receive Money (Payzone Link)')
      cy.contains("Marketplace")
      cy.get('[title=Account]').click()
      cy.get('[class=pz-btn-group__btn]').last().click()
      cy.contains('Login')
      cy.contains('Forgot password?')
      cy.contains('No payzone account? Sign Up')
      cy.get('[type=email]').type(Cypress.env('UserEmail'))
      cy.get('[type=password]').type(Cypress.env('UserPassword'))
      cy.get('[type=checkbox').click()
      cy.get('[class=start]').click()
      cy.contains('Success')
      cy.contains('Your Wallet')   
  })

  it('buy times from market place', ()=>{
    cy.get('span[class=category-item__text]').eq(7).click()
    cy.get('[class=view-store]').eq('2').click({force:true})
    cy.get('button[class=pz-btn]').eq('3').click({force:true})
    cy.get('button[class=pz-btn]').eq('4').click({force:true})
    cy.get('button[class=pz-btn]').eq('5').click({force:true})
    cy.get('p[class=mb-0]').click()
    cy.get('span[class=start').click()
    cy.get('[name=address]').type('36 onajimi street lagos')
    cy.get('span[class=start]').eq(0).click()
    cy.get('input[type=password]').type(Cypress.env('WalletPassword'))
    cy.get('span[class=start]').eq(1).click()
    cy.get('button[class=drawer__close]').click()
   


  })





  // it('Add Fund to Wallet',()=>{
  //     cy.get('[class=wallet__value]').click()
  //     cy.get('a[href*="/wallet/fund"]').click({force: true})
  //     cy.contains('Fund Wallet')
  //     cy.get('[id=amountInput]').type('5000')
  //     cy.get('[type=submit]').click()
  //     cy.wait(8000)
  //     cy.get('iframe').then(($iFrame)=>{
  //       const iFrameContent = $iFrame.contents().find('body')

  //       cy.wrap(iFrameContent)
  //         .contains('PAYMENT OPTIONS')
  //     })
      
  // })
})