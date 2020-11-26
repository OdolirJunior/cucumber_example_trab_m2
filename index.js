var reporter = require("cucumber-html-reporter");

var options = {
  monochrome: true,
  strict: true,
  plugin: ["pretty"],
  require: ["./step_definitions/*step.js", "./support/screenshot.js", "./support/cucumber-json-report.js", "./support/cucumber-html-report.js"],
  tags: "",
};

reporter.generate(options);
