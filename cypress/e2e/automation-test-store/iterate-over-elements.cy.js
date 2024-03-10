/// <reference types = "Cypress" />

describe('Iterate over elements', () => 
{
    beforeEach(() => 
    {
        // cy.visit("https://automationteststore.com/index.php?rt=product/category&path=52"); haircare
        cy.visit("https://automationteststore.com/");
    })

    it('Log info of all Hair Cair products', () => 
    {
        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => 
        {
            cy.log("Index: " + index + " : " + $el.text());
        })

    })

    it.skip('Add a specific product to the basket OLD', () => 
    {
        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => 
        {
            if($el.text().includes("Curls to straight Shampoo"))
            {
                cy.wrap($el).click();
            }
        })
    })

    it.only('Add a specific product to the basket with a command', () => 
    {
        cy.xpath("//ul[@class='nav-pills categorymenu']/child::li").eq(6).click();
        cy.selectProduct('Curls to straight Shampoo');
    })

    it('Calculate the total of normal and sale products', () => 
    {
        let totalPrice = 0;

        // find searches for an element with .oneprice class inside the given element
        
        cy.get('.thumbnail').find('.oneprice').as('normalPrice');
        cy.get('.thumbnail').find('.pricenew').as('salePrice');

        cy.get('@normalPrice').then(($linkText) => 
            {
                // Define The total price and and normal price
                let totalOnePrice = 0;
                let itemPrice = $linkText.text().split("$"); // makes a string each time there is a $ and combines into an array
                for(var i = 0; i < itemPrice.length; i++)
                {
                    cy.log(itemPrice[i]);
                    totalOnePrice += Number(itemPrice[i]);
                }
                totalPrice += totalOnePrice;
                cy.log('Total Non-sale items price: ' + totalOnePrice);
            })
            
        cy.get('@salePrice').then(($linkText) => 
            {
                let totalSalePrice = 0;
                let salePrice = $linkText.text().split("$"); // makes a string each time there is a $ and combines into an array
                for(var i = 0; i < salePrice.length; i++)
                {
                    cy.log(salePrice[i]);
                    totalSalePrice += Number(salePrice[i]);
                }
                totalPrice += totalSalePrice;
                cy.log('Total Sale items price: ' + totalSalePrice);
            })
            .then(() => 
            {
                cy.log('Total item price: ' + totalPrice);
                expect(totalPrice).to.equal(660.5);
            })
    })
})