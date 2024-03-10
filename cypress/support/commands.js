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
Cypress.Commands.add('selectProduct', (productName) => 
{
    cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => 
        {
            if($el.text().includes(productName))
            {
                cy.wrap($el).click();
            }
        })
})

Cypress.Commands.add('addProductToBasket', (productName) => 
{
    cy.get('.prdocutname').each(($el, index, $list) => 
    {
        if($el.text() === productName)
        {
            cy.log($el.text());
            cy.get('.productcart').eq(index).click();
        }
    })
})

Cypress.Commands.add('wbu_contactus_submission', (firstName, lastName, email, comment, $selector, textToLocate) => 
{
    cy.xpath("//input[@name='first_name']").type(firstName);
    cy.xpath("//input[@name='last_name']").type(lastName);
    cy.xpath("//input[@name='email']").type(email);
    cy.xpath("//textarea[@name='message']").type(comment);
    cy.xpath($selector).click();
    cy.xpath($selector).should('contain.text', textToLocate);
})