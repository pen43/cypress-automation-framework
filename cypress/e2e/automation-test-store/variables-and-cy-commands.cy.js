///<reference types = "Cypress"/>

describe('Verifying variables, cypress commands and jquery commands', () => 
{
    beforeEach(() => 
    {
        cy.visit("https://automationteststore.com/");
    })

    it('Navigating to specific product pages', () => 
    {
        /// This will pass
        // const makeUpLink = cy.get("a[href*='https://automationteststore.com/index.php?rt=product/category&path=']").contains('Makeup');
        // makeUpLink.click();
        // const skincareLink = cy.get("a[href*='https://automationteststore.com/index.php?rt=product/category&path=']").contains('Skincare');
        // skincareLink.click();

        // Supposed to fail but works now don't know why
        // const makeUpLink = cy.get("a[href*='https://automationteststore.com/index.php?rt=product/category&path=']").contains('Makeup');
        // const skincareLink = cy.get("a[href*='https://automationteststore.com/index.php?rt=product/category&path=']").contains('Skincare');
        // makeUpLink.click();
        // skincareLink.click();
        

        /// Recommended

        cy.get("a[href*='https://automationteststore.com/index.php?rt=product/category&path=']").contains('Makeup').click;

        cy.get("a[href*='https://automationteststore.com/index.php?rt=product/category&path=']").contains('Skincare').click;

    })

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    it('Const with .then()', () => 
    {
        cy.get("a[href='https://automationteststore.com/index.php?rt=product/category&path=36']").click();

        // If you use const without .then it will fail because of async
        cy.get('h1 .maintext').should('exist').then(($headerText) => 
            {
                const headerText = $headerText.text();
                cy.log("Found The Header Text: " + headerText);
                expect(headerText).is.eq("Makeup");
            })
    })
    
    
    it.only('Cypress chaining, JQuery, Closures', () => 
    {
        cy.xpath("//a[text()='Contact Us']").click();

        // Uses Cypress commands and chaining
        cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should('contain', 'First name');
        // searches for an element with the ID ContactUsFrm containing the text 'Contact Us Form',
        // then within that element, it finds another element with the ID field_11.
        // It asserts that this inner element should contain the text 'First name'.

        // JQuery Approach
        cy.contains('#ContactUsFrm', 'Contact Us Form').then(($text) => 
        {
            // Converts all text to lowercase to ignore case differences.
            // Replaces all sequences of whitespace characters with a single space to standardize spacing and trims.
            const firstNameText = $text.find('#field_11').text().toLowerCase().replace(/\s+/g, ' ').trim();
            expect(firstNameText).to.contain("first name:");
        })

        // Embedded Commands(Closures)
        cy.get('#field_11').then(($fnText) => 
        {
            cy.log($fnText.text()); // Outputs the text of the element
            cy.log($fnText); // Outputs the element itself
        })
    })
    

})

