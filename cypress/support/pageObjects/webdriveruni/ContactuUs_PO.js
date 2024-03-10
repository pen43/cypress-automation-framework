class ContactUs_PO {

    contactUs_Submission(firstName, lastName, email, comment, $selector, textToLocate) {
        cy.xpath("//input[@name='first_name']").type(firstName);
        cy.xpath("//input[@name='last_name']").type(lastName);
        cy.xpath("//input[@name='email']").type(email);
        cy.xpath("//textarea[@name='message']").type(comment);
        cy.xpath($selector).click();
        cy.xpath("//div[@id='contact_reply']").should('contain.text', textToLocate);
        // can write with .contains {timeout} for assertions
    }

}

export default ContactUs_PO;