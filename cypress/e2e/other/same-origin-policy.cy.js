/// <reference types = "Cypress" /> 

/*

// Write / chromeWebSecurity : false / to access a different url
// It Should look like this

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    chromeWebSecurity: false
    experimentalModifyObstructiveThirdPartyCode: true // for using cy.origin

  },
});

*/

describe('Cypress web security', () => 
{

    it.skip('Validate visiting two different domains', () => 
    {
        cy.visit("https://webdriveruniversity.com/");
        cy.visit("https://automationteststore.com/");

        // This will result in an error because of the same origin policy
        // Actually cypress freezes if you run this
    })

    it.skip('Validate visiting two different domains via user actions', () => 
    {
        cy.visit("https://webdriveruniversity.com/");
        cy.get("#automation-test-store").invoke('removeAttr', 'target').click();

        // Passes after disabling chromeWebSecurity
    })

    it('Origin Command', () => 
    {
        cy.origin('https://webdriveruniversity.com/', () => 
        {
            cy.visit('/');
        })
        
        cy.origin('https://automationteststore.com/', () => 
        {
            cy.visit('/');
        })

        // cy.visit("https://webdriveruniversity.com/");
        // cy.visit("https://selectors.webdriveruniversity.com/");
        // This approach will work because these two websites have the same origin
    })


})