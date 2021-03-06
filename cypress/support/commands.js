// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-file-upload';

Cypress.Commands.add('getIframe', (iframe) => {
    return cy.get(iframe)
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap);
})

// Cypress.Commands.add(
//     'dropFile', {
//         prevSubject: false
//     }, (fileName) => {
//         Cypress.log({
//             name: 'dropFile',
//         })
//         return cy
//             .fixture(fileName, 'base64')
//             .then(Cypress.Blob.base64StringToBlob)
//             .then(blob => {
//                 // instantiate File from `application` window, not cypress window
//                 return cy.window().then(win => {
//                     const file = new win.File([blob], fileName)
//                     const dataTransfer = new win.DataTransfer()
//                     dataTransfer.items.add(file)

//                     return cy.document().trigger('drop', {
//                         dataTransfer,
//                     })
//                 })
//             })
//     }
// )

