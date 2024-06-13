@signUp
Feature: SignUp

        Background:
            Given I open the sign up page

        @smoke @regression
        Scenario: Sign up
             When I sign up with a new user with username "randomUsername" and password "password"
             Then I should see the alert "Sign up successful."

        @regression
        Scenario: Sign up with an existing username
             When I sign up with a new user with username "admin" and password "password"
             Then I should see the alert "This user already exist."

        @regression
        Scenario: Validate required username field for sign up
             When I submit the sign up form without entering a username and password "password"
             Then I should see the alert "Please fill out Username and Password."

        @regression
        Scenario: Validate required password field for sign up
             When I submit the sign up form without entering a password and username "username"
             Then I should see the alert "Please fill out Username and Password."
