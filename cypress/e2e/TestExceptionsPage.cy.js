import {HomePage} from "../../pageObjects/pageActions/HomePage"
import {Exceptionspage} from "../../pageObjects/pageActions/ExceptionsPage"
const homePage = new HomePage
const exception = new Exceptionspage

let foodItems;

before('Get Data',()=>{

    cy.fixture('foodItems').then((data)=>{

        foodItems = data
    })
})

beforeEach('Load The page',()=>{

   homePage.navigateHomePage()
   homePage.clickExceptionsPage()

})

describe('Test Exception Page Functionality',()=>{

    it('Test Exception Page for Add button',()=>{
      
        exception.clickAddbtn()
        exception.getAdditionalRow().should('be.visible')
        exception.getConfirmationMsg().should('be.visible')
    })  

    it('Test Exception Page for Second Input Box Functionality',()=>{
        exception.clickAddbtn()
        exception.getAdditionalRow().should('be.visible')
        exception.typeIntoRow(foodItems.fruit)
        exception.clickSavebtn()
        exception.getConfirmationMsg().should('be.visible')
        exception.getAdditionalRow().invoke('val').then((txt)=>{
            assert.equal(txt,foodItems.fruit)
        })
    })  

    it('Test Exception Page for Edit button Function',()=>{
     exception.clickEditbtn()
     exception.clearRow()
     exception.getRow().type(foodItems.vegetable)
     exception.clickSavebtn()
     exception.getConfirmationMsg().should('be.visible')
     exception.getRow().invoke('val').then((txt)=>{
        assert.equal(txt,foodItems.vegetable)
    })
})

    it('Test Exception Page for Edit button for Empty Item',()=>{
        exception.clickEditbtn()
        exception.clearRow()
        exception.clickSavebtn()
        exception.getConfirmationMsg().should('be.visible')
        exception.getRow().invoke('val').then((txt)=>{
           assert.equal(txt,"")
       })

    })  
    it('Test Exception Page for Dom Elements Visibility',()=>{
     exception.getInstructionElement().should('be.visible')
     exception.clickAddbtn()
     exception.getInstructionElement().should('not.exist')
    }) 

    it('Test Exception Page for Remove Button',()=>{
        exception.getInstructionElement().should('be.visible')
        exception.clickAddbtn()
        exception.getAdditionalRow().should('be.visible')
        exception.clickRemovebtn()
        exception.getAdditionalRow().should('not.be.visible')
       }) 
   
    })