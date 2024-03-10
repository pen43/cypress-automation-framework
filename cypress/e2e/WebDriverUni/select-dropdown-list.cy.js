/// <reference types = "Cypress" />

describe('Interact with dropdown lists via webdriveruni', () => 
{
    beforeEach(() => 
    {
        cy.visit("https://webdriveruniversity.com/");
    })

    it('Select specific values via select dropdown lists', () => 
    {
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force: true});

        cy.xpath("//select[@id='dropdowm-menu-1']").as('menu1');
        cy.xpath("//select[@id='dropdowm-menu-2']").as('menu2');
        
        cy.get('@menu1').select('c#');
        cy.get('@menu2').select('maven').should('have.value', 'maven');


    })
})