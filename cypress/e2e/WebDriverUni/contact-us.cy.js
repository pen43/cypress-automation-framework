/// <reference types = "Cypress" />

import HomePage_PO from "../../support/pageObjects/webdriveruni/HomePage_PO"
import ContactUs_PO from "../../support/pageObjects/webdriveruni/ContactuUs_PO";

describe("Test Contact Us form via webdriveruni", () => 
{
    Cypress.config('defaultCommandTimeout', 20000); // applies this timeout to only this spec // Explicit timeout

    beforeEach(() => 
    {
        //cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");
        //cy.visit("https://webdriveruniversity.com/");

        // cy.visit('/'); // for using the base url

        const homePage = new HomePage_PO();
        homePage.visitHomePage();

        homePage.clickOnContactUs();
    })

    before(() => 
    {
        cy.fixture('example').then((data) =>
        {            
            //this.data = data;
            globalThis.data = data;
        })

        // cy.viewport(500, 700); sets the viewport size
    }) 
    
    //.only
    //.skip
    it.only('Should be able to submit a successful submission', {
        retries: {
      runMode: 2,
      openMode: 2
    }
    }, () => 
    {
        
        // cy.wait(3000); // do not use often because it's going to affect the testing time

        // cy.xpath("//a[@id='contact-us']").invoke('removeAttr', 'target').click({force:true}); // Invoke and remove target attr

        cy.document().should('have.property', 'charset').and('eq', 'UTF-8'); // searches for charset UTF-8 in the document
        cy.title().should('include', 'WebDriver | Contact Us');
        cy.url().should('include', 'Contact-Us');
        

        // The actual code

        //cy.xpath("//input[@name='first_name']").type(data.first_name);
        //cy.xpath("//input[@name='last_name']").type(data.last_name);
        //cy.xpath("//input[@name='email']").type(data.email);
        //cy.xpath("//textarea[@name='message']").type("Message");
        //cy.xpath("//input[@type='submit']").click();
        //cy.xpath("//div[@id='contact_reply']").should('contain.text', 'Thank You for your Message!');
        
        //

        // Cypress Command

        // cy.wbu_contactus_submission(data.first_name, data.last_name, data.email, 'some Comment', "//div[@id='contact_reply']", 'Thank You for your Message!');

        //

        // And POM

        const contactUs_POM = new ContactUs_PO();
        contactUs_POM.contactUs_Submission(data.first_name, data.last_name, data.email, 'some Comment', "//input[@type='submit']", 'Thank You for your Message!')

        // cy.pause(); // Pauses Cypress you can resume

        // Xpath
        //cy.xpath("//a[@id='contact-us']").click();
        
        // Get with force true it forces the action
        // cy.get('#contact-us').click({force:true});

    })

    it('Should not be able to submit a successful submission as all fields are required', () => 
    {
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true});
        cy.xpath("//input[@name='first_name']d").type(data.first_name);
        cy.xpath("//input[@name='last_name']").type(data.last_name);
        cy.xpath("//textarea[@name='message']").type("Message");
        cy.xpath("//input[@type='submit']").click();
        cy.xpath("//div[@id='contact_reply']").should('contain.text', 'Thank You for your Message!');

    })
})
