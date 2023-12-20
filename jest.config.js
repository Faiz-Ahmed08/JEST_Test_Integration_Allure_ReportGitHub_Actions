/** @type {import('jest').Config} */
const config = {
 testEnvironmentOptions: {
    resultsDir: "./allure-results"
 } ,
  reporters: [['github-actions', {silent: false}], 'summary']
}

module.exports = config
