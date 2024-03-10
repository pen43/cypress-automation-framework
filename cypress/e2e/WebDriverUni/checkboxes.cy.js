/// <reference types = "Cypress" />

describe('Verify checkboxes via webdriveruni', () => 
{
    beforeEach(() => 
    {
        cy.visit("https://webdriveruniversity.com/");
    })

    it('Validate checkboxes', () => 
    {
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true});

        // cy.xpath("//input[@value='option-1']").check().should('be.checked');

        cy.xpath("//input[@value='option-1']").as('option1');
        cy.get('@option1').check();
        cy.get('@option1').should('be.checked');
    })

    it('Uncheck a checkbox', () => 
    {
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true});

        cy.xpath("//input[@value='option-3']").as('option3');
        cy.get('@option3').uncheck();
        cy.get('@option3').should('not.be.checked');
    })

    it.only('check multiple checkboxes', () => 
    {
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true});

        cy.get("input[type='checkbox']").check(['option-1', 'option-2', 'option-4']);
    })
})