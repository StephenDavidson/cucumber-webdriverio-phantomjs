Feature: Search
    As a user
    I would like to search
    So that I can find what I am searching for

    Scenario Outline: As a user, I would like to search for <fruit>
        Given I am on the search page
        When I search for "<fruit>"
        Then I should see "<fruit>" in the search results

        Examples:
            |fruit |
            |Apple |
            |Orange|
