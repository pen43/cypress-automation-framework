/// <reference types = "Cypress" />

describe('Add items to basket', () => 
{
    before(() => 
    {
        cy.fixture('products').then((data) => 
        {
            globalThis.data = data;
        })
    })

    beforeEach(() => 
    {
        cy.visit("https://automationteststore.com/");
        cy.xpath("//ul[@class='nav-pills categorymenu']/child::li").eq(6).click();
    })

    it('Add specific items to the basket', () => 
    {
        // cy.clearCookies() // clear the cookies or you can specify one cookie
        // cy.clearAllLocalStorage // clears the data on a domain or a subdomain

        data.productName.forEach(($el) => 
        {
            cy.addProductToBasket($el);
        }) 

        cy.get('.block_7').click();

    })
})