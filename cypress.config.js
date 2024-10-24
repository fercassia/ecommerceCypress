const { defineConfig } = require("cypress");
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');

module.exports = defineConfig({
  viewportHeight: 720,
  viewportWidth: 1366,
  defaultCommandTimeout: 30000,
  reporter: 'cypress-multi-reporters',
  "reporterOptions": {
    "reporterEnabled": "cypress-mochawesome-reporter, mocha-junit-reporter",
    "cypressMochawesomeReporterReporterOptions": {
      "reportDir": "cypress/reports",
      "charts": true,
      "reportPageTitle": "Web Test Report",
      "embeddedScreenshots": true,
      "inlineAssets": true
    },
    "mochaJunitReporterReporterOptions": {
      "mochaFile": "cypress/reports/results-[hash].xml"
    }
  },

  "video": false,
  "screenshotsFolder": "cypress/reports/mochareports",



  e2e: {
    baseUrl: "https://www.kabum.com.br/",
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on)
      on('before:run', async (details) => {
        console.log('override before:run');
        await beforeRunHook(details);
      });

      on('after:run', async () => {
        console.log('override after:run');
        await afterRunHook();
      });
      
    },
  },
});
