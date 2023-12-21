/** @type {import('jest').Config} */
const config = {
  /**testEnvironment: "allure-jest", */
   verbose: true, 
  "reporters": [
	"default",
	["./node_modules/jest-html-reporter", {
		"pageTitle": "Test Report"
	}]
]
   /**reporters: [['github-actions', {silent: false}], 'summary'],*/
};

module.exports = config;
