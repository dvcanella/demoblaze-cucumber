import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

let today;
let response;

Given('today is {string}', (today_is) => {
    today = today_is
})

When("I ask whether it's Friday yet", () => {
    if (today == 'Friday')
        response = 'Today is friday!'
    else
        response = 'Nope'
})

Then('I should be told {string}', (expected) => {
    expect(expected).to.equals(response)
})