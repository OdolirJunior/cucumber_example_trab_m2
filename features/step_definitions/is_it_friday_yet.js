const assert = require("assert");
const { Given, When, Then } = require("cucumber");

const isItFriday = (today) => {
  if (today === "Friday") {
    return "YES";
  } else {
    return "Nope";
  }
};
Given("today is {string}", (givenDay) => {
  this.today = givenDay;
});
When("I ask whether it's Friday yet", () => {
  this.actualAnswer = isItFriday(this.today);
});
Then("I should be told {string}", (expectedAnswer) => {
  assert.strictEqual(this.actualAnswer, expectedAnswer);
});
