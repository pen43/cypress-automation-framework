/// <reference types = "Cypress" />

describe ('Validate homepage links', () => 
{
    beforeEach(() => 
    {
        cy.visit("https://webdriveruniversity.com/");
    })

    it('Confirm links redirect to the correct pages', () => 
    {
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true});
        cy.url().should('include', 'Contact-Us');
        
        cy.go('back');

        cy.reload();
        // cy.reload(true); // reload without cache

        cy.go('forward');
        
        cy.url().should('include', 'Contact-Us');

        cy.go('back');

        cy.get('#login-portal').invoke('removeAttr', 'target').click({force:true});
        cy.url().should('include', 'Login-Portal');

    })
})