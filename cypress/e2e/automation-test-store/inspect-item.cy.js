/// <reference types = "Cypress" />

describe('Inspect automation store items using chain of commands', () => 
{
    beforeEach(() => 
    {
        cy.visit("https://automationteststore.com/");
    })

    it.only('Click on the first item using item text', () => 
    {
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click().then(function(itemHeaderText)
        {
            console.log("Selected the following item: " + itemHeaderText.text());
        });
    })

    it('Click on the first item using item indexx', () => 
    {
        cy.get('.prdocutname').eq(0).click();
    })
})