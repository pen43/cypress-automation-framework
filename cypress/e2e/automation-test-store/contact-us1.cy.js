/// <reference types = "Cypress" />

describe('Test contact us form via Automation Test Store', () => 
{
    beforeEach(() => 
    {
        cy.visit("https://automationteststore.com/");
    })

    before(() => 
    {
        cy.fixture('userDetails').as('user');
    })

    it('Should be able to submit a successful submission', () => 
    {
        cy.xpath("//a[text()='Contact Us']").click();
        cy.get('@user').then((user) => 
        {
            cy.xpath("//input[@id='ContactUsFrm_first_name']").type(Cypress.env("firstName"));
            cy.xpath("//input[@id='ContactUsFrm_email']").type(user.email);
        })
                
        cy.xpath("//input[@id='ContactUsFrm_email']").should('have.attr', 'name', 'email');

        cy.xpath("//textarea[@id='ContactUsFrm_enquiry']").type("whatever");
        
        cy.xpath("//button[@title='Submit']").click();
        
        cy.xpath("//section[@class='mb40']").should('contain.text', 'Your enquiry has been successfully sent to the store owner!')
    })


})