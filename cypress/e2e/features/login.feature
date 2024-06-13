@login
Feature: Login

        Background:
            Given I open the login page

        @smoke @regression
        Scenario: Validate admin user exists
             When I log in with username "admin" and password "admin"
             Then I should be logged in as admin

        @regression
        Scenario: Validate required username field for login
             When I submit the login form without entering a username and password "password"
             Then I should see the alert "Please fill out Username and Password."

        @regression
        Scenario: Validate required password field for login
             When I submit the login form without entering a password and username "username"
             Then I should see the alert "Please fill out Username and Password."

        Scenario: Validate login with incorrect credentials
             When I log in with incorrect username "incorrect_user" and password "incorrect_password"
             Then I should see the alert "User does not exist."

        Scenario: Validate logout functionality
            Given I am logged in with username "admin" and password "admin"
             When I log out
             Then The navigation bar should not have the username
