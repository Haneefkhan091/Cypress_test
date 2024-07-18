const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',

  watchForFileChanges: false,
  pageLoadTimeout: 600000,
  experimentalStudio: true,
  defaultCommandTimeout: 50000,
  viewportWidth: 1440,
  viewportHeight: 900,
  chromeWebSecurity: false,
  screenshotOnRunFailure: true,
  projectId: "phbmrt",
  retries: {
   openMode : 2,
   runMode : 2
  },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },

  e2e: {

    
    baseUrl : 'https://rahulshettyacademy.com/AutomationPractice',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);

     

      // implement node event listeners here
    },
    includeShadowDom: true,
    experimentalRunAllSpecs: true,
    testIsolation: false,
  },
});
