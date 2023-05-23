$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("logintest.feature");
formatter.feature({
  "line": 1,
  "name": "As a user I want to verify different login functions.",
  "description": "",
  "id": "as-a-user-i-want-to-verify-different-login-functions.",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5815553000,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on HomePage \u0026 Login to the application",
  "keyword": "Given "
});
formatter.match({
  "location": "UserTestSteps.iAmOnHomePageLoginToTheApplication()"
});
formatter.result({
  "duration": 1430440000,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "I should login successfully",
  "description": "",
  "id": "as-a-user-i-want-to-verify-different-login-functions.;i-should-login-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@sanity"
    },
    {
      "line": 6,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I see Welcome message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestSteps.iSeeWelcomeMessage()"
});
formatter.result({
  "duration": 354394000,
  "status": "passed"
});
formatter.after({
  "duration": 701736900,
  "status": "passed"
});
formatter.before({
  "duration": 2086465500,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on HomePage \u0026 Login to the application",
  "keyword": "Given "
});
formatter.match({
  "location": "UserTestSteps.iAmOnHomePageLoginToTheApplication()"
});
formatter.result({
  "duration": 1533336300,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "I should see Logo",
  "description": "",
  "id": "as-a-user-i-want-to-verify-different-login-functions.;i-should-see-logo",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@smoke"
    },
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I see the Orange HRM Logo",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestSteps.iSeeTheOrangeHRMLogo()"
});
formatter.result({
  "duration": 317204000,
  "status": "passed"
});
formatter.after({
  "duration": 712631100,
  "status": "passed"
});
formatter.before({
  "duration": 2569436100,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on HomePage \u0026 Login to the application",
  "keyword": "Given "
});
formatter.match({
  "location": "UserTestSteps.iAmOnHomePageLoginToTheApplication()"
});
formatter.result({
  "duration": 1393078600,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "I should log out successfully",
  "description": "",
  "id": "as-a-user-i-want-to-verify-different-login-functions.;i-should-log-out-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I click on user profile logo",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I mouse hover and click on logout",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I am logged out and see text Login Panel",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestSteps.iClickOnUserProfileLogo()"
});
formatter.result({
  "duration": 886599000,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.iMouseHoverAndClickOnLogout()"
});
formatter.result({
  "duration": 1102332500,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.iAmLoggedOutAndSeeTextLoginPanel()"
});
formatter.result({
  "duration": 183677200,
  "status": "passed"
});
formatter.after({
  "duration": 714706200,
  "status": "passed"
});
formatter.uri("userstest.feature");
formatter.feature({
  "line": 1,
  "name": "As a user I want to verify admin can execute different actions on users.",
  "description": "",
  "id": "as-a-user-i-want-to-verify-admin-can-execute-different-actions-on-users.",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2556974600,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on HomePage \u0026 Login to the application",
  "keyword": "Given "
});
formatter.match({
  "location": "UserTestSteps.iAmOnHomePageLoginToTheApplication()"
});
formatter.result({
  "duration": 1415880000,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Admin should be able to add users",
  "description": "",
  "id": "as-a-user-i-want-to-verify-admin-can-execute-different-actions-on-users.;admin-should-be-able-to-add-users",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@sanity"
    },
    {
      "line": 6,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I click On Admin Tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I Verify System Users Text",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I click On Add button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I Verify Add User Text",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I Select User Role Admin",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter Employee Name Ananya Dash",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter User name",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I Select status Disable",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter password",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter Confirm Password",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click On Save Button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I verify message Successfully Saved",
  "keyword": "Then "
});
formatter.match({
  "location": "UserTestSteps.iClickOnAdminTab()"
});
formatter.result({
  "duration": 1581351500,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iVerifySystemUsersText()"
});
formatter.result({
  "duration": 239576200,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iClickOnAddButton()"
});
formatter.result({
  "duration": 394224500,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iVerifyAddUserText()"
});
formatter.result({
  "duration": 239170900,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iSelectUserRoleAdmin()"
});
formatter.result({
  "duration": 32796850800,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iEnterEmployeeNameAnanyaDash()"
});
formatter.result({
  "duration": 31749037500,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iEnterUserName()"
});
formatter.result({
  "duration": 633416300,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iSelectStatusDisable()"
});
formatter.result({
  "duration": 32926765900,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iEnterPassword()"
});
formatter.result({
  "duration": 113493500,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iEnterConfirmPassword()"
});
formatter.result({
  "duration": 105447300,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iClickOnSaveButton()"
});
formatter.result({
  "duration": 92628000,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iVerifyMessageSuccessfullySaved()"
});
formatter.result({
  "duration": 27900,
  "status": "passed"
});
formatter.after({
  "duration": 790180100,
  "status": "passed"
});
formatter.before({
  "duration": 2741526100,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on HomePage \u0026 Login to the application",
  "keyword": "Given "
});
formatter.match({
  "location": "UserTestSteps.iAmOnHomePageLoginToTheApplication()"
});
formatter.result({
  "duration": 531476700,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Admin should be able to search the user created and verify it.",
  "description": "",
  "id": "as-a-user-i-want-to-verify-admin-can-execute-different-actions-on-users.;admin-should-be-able-to-search-the-user-created-and-verify-it.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 21,
      "name": "@smoke"
    },
    {
      "line": 21,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "I click On Admin Tab",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I Verify System Users Text",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "I Enter username",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I Select user role",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I select status",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on search",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I should see the user in the list",
  "keyword": "Then "
});
formatter.match({
  "location": "UserTestSteps.iClickOnAdminTab()"
});
formatter.result({
  "duration": 2495837400,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iVerifySystemUsersText()"
});
formatter.result({
  "duration": 292172300,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iEnterUsername()"
});
formatter.result({
  "duration": 139074300,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iSelectUserRole()"
});
formatter.result({
  "duration": 1694100600,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iSelectStatus()"
});
formatter.result({
  "duration": 31660001700,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iClickOnSearch()"
});
formatter.result({
  "duration": 76846400,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iShouldSeeTheUserInTheList()"
});
formatter.result({
  "duration": 295741900,
  "status": "passed"
});
formatter.after({
  "duration": 900494400,
  "status": "passed"
});
formatter.before({
  "duration": 2563271900,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on HomePage \u0026 Login to the application",
  "keyword": "Given "
});
formatter.match({
  "location": "UserTestSteps.iAmOnHomePageLoginToTheApplication()"
});
formatter.result({
  "duration": 1397228200,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Admin should be able to delete the user record.",
  "description": "",
  "id": "as-a-user-i-want-to-verify-admin-can-execute-different-actions-on-users.;admin-should-be-able-to-delete-the-user-record.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 32,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "I click On Admin Tab",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "I Verify System Users Text",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "I click On Add button",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "I Verify Add User Text",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "I Select User Role Admin",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "I enter Employee Name Ananya Dash",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I enter User name",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I select status enable",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I enter password",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I enter Confirm Password",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I click On Save Button",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I search for user",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I select user role",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I select the status",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I click on Search",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I click on check box",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I click delete",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I click ok on pop up",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I should see message Successfully Deleted",
  "keyword": "Then "
});
formatter.match({
  "location": "UserTestSteps.iClickOnAdminTab()"
});
formatter.result({
  "duration": 1664279900,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iVerifySystemUsersText()"
});
formatter.result({
  "duration": 318628800,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iClickOnAddButton()"
});
formatter.result({
  "duration": 350035200,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iVerifyAddUserText()"
});
formatter.result({
  "duration": 205672200,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iSelectUserRoleAdmin()"
});
formatter.result({
  "duration": 32743244900,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iEnterEmployeeNameAnanyaDash()"
});
formatter.result({
  "duration": 32000050800,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iEnterUserName()"
});
formatter.result({
  "duration": 629192000,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iSelectStatusEnable()"
});
formatter.result({
  "duration": 32733563400,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iEnterPassword()"
});
formatter.result({
  "duration": 118890300,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iEnterConfirmPassword()"
});
formatter.result({
  "duration": 368790800,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iClickOnSaveButton()"
});
formatter.result({
  "duration": 106992700,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iSearchForUser()"
});
formatter.result({
  "duration": 6648669600,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iSelectUserRole2()"
});
formatter.result({
  "duration": 1986441800,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iSelectTheStatus()"
});
formatter.result({
  "duration": 1660417700,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iClickOnSearch2()"
});
formatter.result({
  "duration": 84599200,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iClickOnCheckBox()"
});
formatter.result({
  "duration": 367632800,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iClickDelete()"
});
formatter.result({
  "duration": 1782819200,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iClickOkOnPopUp()"
});
formatter.result({
  "duration": 1571770300,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iShouldSeeMessageSuccessfullyDeleted()"
});
formatter.result({
  "duration": 2833506000,
  "status": "passed"
});
formatter.after({
  "duration": 767917000,
  "status": "passed"
});
formatter.before({
  "duration": 2716001300,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on HomePage \u0026 Login to the application",
  "keyword": "Given "
});
formatter.match({
  "location": "UserTestSteps.iAmOnHomePageLoginToTheApplication()"
});
formatter.result({
  "duration": 1458746400,
  "status": "passed"
});
formatter.scenario({
  "line": 55,
  "name": "I want to search for deleted record to ensure it is not found.",
  "description": "",
  "id": "as-a-user-i-want-to-verify-admin-can-execute-different-actions-on-users.;i-want-to-search-for-deleted-record-to-ensure-it-is-not-found.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 54,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 56,
  "name": "I click On Admin Tab",
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "I Verify System Users Text",
  "keyword": "Then "
});
formatter.step({
  "line": 58,
  "name": "I search for user",
  "keyword": "When "
});
formatter.step({
  "line": 59,
  "name": "I select user role",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "I select its status",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "I click search",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "I see message No Record Found",
  "keyword": "Then "
});
formatter.match({
  "location": "UserTestSteps.iClickOnAdminTab()"
});
formatter.result({
  "duration": 1399802900,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iVerifySystemUsersText()"
});
formatter.result({
  "duration": 380247600,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iSearchForUser()"
});
formatter.result({
  "duration": 109676000,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iSelectUserRole2()"
});
formatter.result({
  "duration": 1623166200,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iSelectItsStatus()"
});
formatter.result({
  "duration": 31784625700,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iClickSearch()"
});
formatter.result({
  "duration": 116431200,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iSeeMessageNoRecordFound()"
});
formatter.result({
  "duration": 337929100,
  "status": "passed"
});
formatter.after({
  "duration": 686234300,
  "status": "passed"
});
});