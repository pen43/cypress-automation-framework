class HomePage_PO
{
    visitHomePage() 
    {
        cy.visit(Cypress.env("webdriveruni_homepage"), {timeout: 60000});
    }

    clickOnContactUs()
    {
        cy.xpath("//a[@id='contact-us']").invoke('removeAttr', 'target').click({force:true}); // Invoke and remove target attr
    }

    clickOnIframe()
    {
        cy.get('#iframe').invoke('removeAttr', 'target').click({force:true});
    }

    
}

export default HomePage_PO;