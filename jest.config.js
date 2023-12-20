/** @type {import('jest').Config} */
const config = {
 testEnvironment: "allure-jest/node",
 testEnvironmentOptions: {
    resultsDir: "./allure-results"
 }
}

module.exports = config
