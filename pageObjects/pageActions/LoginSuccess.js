const loginSuccess = require("../pageElements/LoginSuccessPage.json")

export class LoginSuccess{


    getLoggedInMessage(){

        return cy.get(loginSuccess.LoginSuccess.loginSuccessHeader)
    }

}