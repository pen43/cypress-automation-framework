/// <reference types = "Cypress" />

describe('Verify autocomplete', () => 
{
    beforeEach(() => 
    {
        cy.visit("https://webdriveruniversity.com/");
    })

    it('Select a specific product via autocomplete', () => 
    {
        cy.xpath("//a[@id='autocomplete-textfield']").invoke('removeAttr', 'target').click({force: true});
        cy.get('#myInput').type('a');
        cy.get('.autocomplete-items > *').each(($el, index, $list) => // Select Avacado from the list
        {
            const product = $el.text();
            const toSelect = "Avacado";

            if(product === toSelect)
            {
                cy.wrap($el).click();
                cy.xpath("//input[@id='submit-button']").click();
            }
        }).then(() => // Select Grapes
        {
            cy.get('#myInput').type('G');
            cy.get('.autocomplete-items > *').each(($el, index, $list) => 
            {
                const product = $el.text();
                const toSelect = "Grapes";

            if(product === toSelect)
            {
                cy.wrap($el).click();
                cy.xpath("//input[@id='submit-button']").click();
                cy.url().should('include', 'Grapes');
            }

            })
        })

    })
})