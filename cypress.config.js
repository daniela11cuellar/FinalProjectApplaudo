const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
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
    baseUrl: "http://automationpractice.com/index.php",
  },
});

