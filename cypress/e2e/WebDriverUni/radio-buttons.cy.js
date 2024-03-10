/// <reference types = "Cypress" />

describe('Verify radio buttons via webdriveruni', () => 
{
    beforeEach(() => 
    {
        cy.visit("https://webdriveruniversity.com/");
    })

    it('Check specific radio buttons', () => 
    {
        // Get a radio button and use check very simple

        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force: true});
        cy.get('#radio-buttons').find("input[type='radio']").eq(2).check();

        cy.get("input[value='lettuce']").check();
        cy.get("input[value='cabbage']").should('not.be.checked');

    })
})