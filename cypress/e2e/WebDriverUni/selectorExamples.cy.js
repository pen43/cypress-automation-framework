/// <reference types = "Cypress" />

describe('Selector Examples', () => 
{
    it('Examples via Contact us WebdriverUni', () => 
    {
        // By tagname
        cy.get('input');

        // By attribute name and value
        cy.get('input[name=first_name]');

        // By id
        cy.get('#contact_me');

        // By class
        cy.get('.feedback-input');

        // By multiple classes
        cy.get("[class='navbar navbar-inverse navbar-fixed-top']");

        // By two different attributes
        cy.get("[name='viewport'][content='width=device-width, initial-scale=1']");

        // By xpath
        cy.xpath("//input[@name='first_name']");
    })
})