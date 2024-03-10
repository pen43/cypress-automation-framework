/// <reference types = "Cypress" /> 

describe('Uploading a file', () => 
{
    beforeEach(() => 
    {
        cy.visit('https://webdriveruniversity.com/index.html');
        cy.get('#file-upload').invoke('removeAttr', 'target').click({force:true});
    })

    it('file upload', () => 
    {
        cy.xpath("//input[@id='myFile']").as('uploader');
        cy.get('@uploader').selectFile("cypress/fixtures/testFile.txt");
        cy.get('#submit-button').click();

    })

    it('Upload no file', () => 
    {
        cy.get('#submit-button').click();
        // There will be a cypress alert
    })
})