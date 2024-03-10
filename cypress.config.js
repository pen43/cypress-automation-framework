const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    chromeWebSecurity: false,
    experimentalModifyObstructiveThirdPartyCode: true,
    defaultCommandTimeout: 4000,
    baseUrl: "https://webdriveruniversity.com/",
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    vide: false,
    retries:
    {
      runMode: 0,
      openMode: 1
    },
    reporter: 'cypress-multi-reporters',
    reporterOptions: 
    {
    configFile: 'reporter-config.json',
    },
    env: 
    {
      webdriveruni_homepage: "https://webdriveruniversity.com/",
      firstName : "Sarah"
    }


  },
});
