import {HomePage} from "../../pageObjects/pageActions/HomePage"
import {LoginPage} from "../../pageObjects/pageActions/LoginPage"
import {LoginSuccess} from "../../pageObjects/pageActions/LoginSuccess"
const homePage = new HomePage
const loginPage = new LoginPage
const loginSuccess = new LoginSuccess
let credentials


before('Load The page',()=>{
    cy.fixture('loginCredentials').then((creds)=>{
        credentials = creds
    })
})

beforeEach('Load The page',()=>{
    cy.visit("https://practicetestautomation.com/practice/")
    homePage.clickLoginPage()
})

describe('Test Login Page Functionality',()=>{

it('Test Login Page For Positive LogIn test',()=>{
  loginPage.enterUsername(credentials.userName)
  loginPage.enterpassword(credentials.password)
  loginPage.clickSubmit()
  loginSuccess.getLoggedInMessage().should('be.visible')
  
})

it('Test Login Page For Negative username test',()=>{
    loginPage.enterUsername(credentials.incorrectUsername)
    loginPage.enterpassword(credentials.password)
    loginPage.clickSubmit()
    loginPage.getInvalidError().should('be.visible')
    loginPage.getInvalidError().should('have.text','Your username is invalid!')
})

it('Test Login Page For Negative password test',()=>{
    loginPage.enterUsername(credentials.userName)
    loginPage.enterpassword(credentials.incorrectpassword)
    loginPage.clickSubmit()
    loginPage.getInvalidError().should('be.visible')
    loginPage.getInvalidError().should('have.text','Your password is invalid!')
})

it('Test Login Page For Blank usename and password',()=>{
    loginPage.clickSubmit()
    loginPage.getInvalidError().should('be.visible')
    loginPage.getInvalidError().should('have.text','Your username is invalid!')
})


it.only('Test Login Page From values present on The Page at runtime',()=>{
    cy.title().should('equal','Test Login | Practice Test Automation')
    loginPage.getUsernamevalue().invoke('text').then(user => {
        loginPage.enterUsername(user)
      });
    loginPage.getpasswordvalue().invoke('text').then(text => {
         loginPage.enterpassword(text)
       });
    loginPage.clickSubmit()
    loginSuccess.getLoggedInMessage().should('be.visible')
   
})

})

