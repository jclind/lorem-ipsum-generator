const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000/',
    projectId: '4sdnhr',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
