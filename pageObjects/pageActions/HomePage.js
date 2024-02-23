const homePageElements = require('../pageElements/HomePage.json')

export class HomePage{

    clickLoginPage(){

        cy.get(homePageElements.HomePage.testLoginPageBtn).click()
    }
    clickExceptionsPage(){
        cy.get(homePageElements.HomePage.testExceptionPageBtn).click()
    }

    navigateHomePage(){
        cy.visit("https://practicetestautomation.com/practice/")
    }
}
