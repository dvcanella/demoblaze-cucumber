@is_it_friday @regression
Feature: Is it Friday yet?
    Everybody wants to know when it's Friday

    @smoke
    Scenario: Today is Friday
        Given today is "Friday"
        When I ask whether it's Friday yet
        Then I should be told "Today is friday!"

    Scenario Outline: <today> isn't Friday
        Given today is "<today>"
        When I ask whether it's Friday yet
        Then I should be told "Nope"

        Examples:
            | today     |
            | Monday    |
            | Tuesday   |
            | Wednesday |
            | Thursday  |
            | Saturday  |
            | Sunday    |
