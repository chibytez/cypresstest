/// <reference types="cypress" />

describe("Payzoe UI Test", ()=> {
  before('visit url',()=>{
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


  it(' order and make payment from market place', ()=>{
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
    cy.contains("Payment was successful")
    cy.contains("Payzone Receipt")
    cy.get('button[class=drawer__close]').click()
  })

  it('change background colour', ()=>{
    cy.get('[title="Change Theme"]').click()
    cy.wait(1000)
    cy.get('[title="Change Theme"]').click()
  })

  it('should be able to add a store', ()=>{
    cy.get('span[class=category-item__text]').eq(6).click()
    cy.get('span[class=start]').click()
    cy.contains('Add Product')
    cy.get('input[name=product-name]').type('testing')
    cy.get('input[id=amountInput]').type('3000')
    cy.get('input[name=product-sku]').type('306')
    cy.get('input[name=weight]').type('6')
    cy.get('input[name=quantity]').type('20')
    cy.get('textarea[name=description]').type('we are testing')
    cy.get('span[class=start]').eq(1).click()
    cy.contains('Success')
    cy.contains('Your store')
    cy.get('button[class=drawer__close]').click()

  })

  it('should delete store', ()=>{
    cy.get('span[class=category-item__text]').eq(6).click()
    cy.get('div[class=product-item__main]').eq(1).click()
    cy.wait(1000)
    cy.get('div[class=ui-dropdown]').click()
    cy.get('.menu-item-cta.text-danger').click()
    cy.get('input[type=text]').type('testing')
    cy.get('.dg-btn.dg-btn--ok.dg-pull-right').click()

  })

  it('should view transaction history',()=>{
    cy.get('.profile-button.pz-btn.pz-btn--primary.pz-btn--round').click()
    cy.get('.icon.mr-3.icon--md').eq(0).click()
    cy.contains('Payments made')
    cy.get('.pz-btn.pz-btn--secondary.pz-btn--wide').click()
    cy.get('button[class=drawer__close]').click()
  })

  it('should pay for a product', ()=>{
    cy.get('span[class=category-item__text]').eq(8).click()
    cy.get('.category-item__box').eq(26).click()
    cy.contains('OTHERS')
    cy.get('.product__name').eq(3).click()
    cy.contains('ENTER TRANSACTION DETAILS')
    cy.get('[name=DepositorName]').type("Regina Anyaso")
    cy.get('[name=DepositorMobileNumber]').type('07060848195')
    cy.get('[name=Amount]').type('5000')
    cy.get('.pz-btn.pz-btn--lg.position-relative.pz-btn--primary.pz-btn--wide.has--end').click()
    cy.get('span[class=start]').eq(0).click()
    cy.get('input[type=password]').type(Cypress.env('WalletPassword'))
    cy.get('.pz-btn.pz-btn--lg.position-relative.wallet-cta.pz-btn--primary.pz-btn--wide').click()
    cy.wait(5000)
    cy.contains('Thank you for using payzone')
    cy.get('button[class=drawer__close]').click()
    
  })


 after('should log out', ()=>{
  cy.get('.profile-button.pz-btn.pz-btn--primary.pz-btn--round').click()
  cy.get('.icon.mr-3.icon--md').eq(3).click()
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