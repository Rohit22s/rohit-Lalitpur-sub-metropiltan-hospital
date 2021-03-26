@search
Feature: Login in DCH
  As a registered  <user-type>
  In order to login to the application
  I want to be able to acess <user-type> dashboard
  
  Scenario: Login for registered and approved user
   Given I am on the DCH Login page
    When I enter "9860088217" and I enter "rohit@1996" and I click login
    Then I should see "Welcome" in the results
