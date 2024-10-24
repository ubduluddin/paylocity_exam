Feature: Delete Employee

  Scenario: Employer is able to delete employee

    Given I go to login page
    When I login with my username TestUser476 and password CR?#xHA;2rup
    Then I am in dashboard page
    When I delete the first employee on the table
    Then Employee should not be in the dashboard
    And Employee should not be available when checking API
