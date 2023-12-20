/** @type {import('jest').Config} */
const config = {
 testEnvironmentOptions: {
    resultsDir: "./allure-results"
 } ,
 reporters: [
    'default',
    ['jest-junit', {outputDirectory: 'reports', outputName: 'report.xml'}]
  ]
}

module.exports = config
