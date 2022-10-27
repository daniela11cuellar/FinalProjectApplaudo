const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      on('before:browser:launch', (browser = {}, launchOptions) => {
              if (browser.family === 'chromium' && browser.name !== 'electron' && browser.name !== 'edge') {
                launchOptions.args.push("--incognito");
                return launchOptions
              }

              if (browser.name === 'electron') {
                launchOptions.preferences.incognito = true
                return launchOptions
              }

              if (browser.name === 'edge') {
                launchOptions.args.push("-inprivate");
                return launchOptions
              }
            })
    },
    baseUrl: "http://automationpractice.com/index.php"
  },
});
