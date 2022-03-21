Feature: Sample search google

Scenario: Hello World search on google
Given I visit Google page
When I search for "Hello World"
Then I should see the result