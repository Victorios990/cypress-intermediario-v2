const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://advicehealth.com.br/',
  },
  fixturesFolder: false,
  video: false,
})
