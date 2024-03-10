/// <reference types = "Cypress" />

describe('Handle js alerts', () => 
{
    beforeEach(() => 
    {
        cy.visit("https://webdriveruniversity.com/");
    })

    it('Confirm js alert contains the correct text', () => 
    {
        cy.xpath("//a[@id='popup-alerts']").invoke('removeAttr', 'target').click({force:true});
        cy.get('#button1').click();

        cy.on('window:alert', (str) => 
        {
            expect(str).to.equal('I am an alert box!');
        })
    })

    it('Confirm js alert wroks correctly when clicking ok', () => 
    {
        cy.xpath("//a[@id='popup-alerts']").invoke('removeAttr', 'target').click({force:true});

        const stub = cy.stub();

        cy.get('#button4').click();

        cy.on('window:confirm', (stub) => 
        {
            return true;
        })
        
        cy.get('#confirm-alert-text').should('include.text', 'You pressed OK!');
    })

    it.only('Validate js alert wroks correctly using stubs', () => 
    {
        const stub = cy.stub();
        cy.xpath("//a[@id='popup-alerts']").invoke('removeAttr', 'target').click({force:true});

        cy.on('window:confirm', stub);

        cy.get('#button4').click().then(() => 
        {
            // Calling functions with the correct parameters
            // Checking to ensure that when the stub was called the first time, it was passed "Press a button!" as an argument
            // If you change 0 to 1 you can check the second argument
            expect(stub.getCall(0)).to.be.calledWith("Press a button!");
        }).then(() => 
        {
            return true;
        }).then(() => 
        {
            cy.get('#confirm-alert-text').should('include.text', 'You pressed OK!');
        })
        
    })
})