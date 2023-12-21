/** @type {import('jest').Config} */
/**const config = {
  testEnvironment: "allure-jest", 
   verbose: true, 
     /**testEnvironment: "allure-jest/jsdom",*/
 /** "reporters": [
	"default",
	["./node_modules/jest-html-reporter", {
		"pageTitle": "Test Report"
	}]
]  */
   /**reporters: [['github-actions', {silent: false}], 'summary'],*/
};

/**module.exports = config; */
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
