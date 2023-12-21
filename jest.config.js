/** @type {import('jest').Config} */
const config = {
  testEnvironment: "allure-jest/node",
  testEnvironmentOptions: {
    resultsDir: "./build/allure-results",
    links: [
      { name: "issue", urlTemplate: "https://issues.example.com/%s" },
      { name: "tms", urlTemplate: "https://tms.example.com/%s" },
    ],
  },
};

module.exports = config;
