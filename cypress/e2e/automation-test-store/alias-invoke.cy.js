///<reference types = "Cypress" /> 

describe('Alias and invoke', () => 
{
    beforeEach(() => 
    {
        cy.visit("https://automationteststore.com/");
    })

    it('Validate a specific hair care product', () => 
    {
        // Use Invoke to get a specific attribute or text
        // Use as to store the product with an alias // you don't have to use invoke with as

        cy.get('#categorymenu').contains("a", "Hair Care").click();
        cy.get('.fixed_wrapper .prdocutname').eq(0).invoke('text').as('productThumbnail');
        cy.get('@productThumbnail').its('length').should('be.gt', 5); // Length of the text
        cy.get('@productThumbnail').should('include', 'Seaweed Conditioner');
    })

    it.only('Validate the number of products', () => 
    {
        cy.get('.thumbnail').as('thumb');
        cy.get('@thumb').should('have.length', 16); // length of the array
        cy.get('@thumb').find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart'); // Gets the title attr

    })
})