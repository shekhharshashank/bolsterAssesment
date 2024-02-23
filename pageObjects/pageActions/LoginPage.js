const  loginPageElements = require("../pageElements/TestLoginPage.json")

export class LoginPage{

    enterUsername(userName){

        cy.get(loginPageElements.Login.userName).type(userName)
  
    }

    enterpassword(password){
        cy.get(loginPageElements.Login.password).type(password)
        
    }

    clickSubmit(){
        cy.get(loginPageElements.Login.submitBtn).click()

    }

    getInvalidError(){
        return cy.get(loginPageElements.Login.loginError)
        
    }
    getUsernamevalue(){
        return  cy.get(loginPageElements.Login.userNameValue)
    }
    getpasswordvalue(){
        return cy.get(loginPageElements.Login.passwordValue)
    }

}