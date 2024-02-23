const exceptionPage =require("../pageElements/TestExceptionsPage.json")

export class Exceptionspage{


    clickAddbtn(){

        cy.get(exceptionPage.ExceptionsPage.addBtn).click()
    }

    clickSavebtn(){
        cy.get(exceptionPage.ExceptionsPage.saveBtn).click({multiple:true,force: true})
    }
    
    typeIntoRow(textTobeEntered){

        cy.get(exceptionPage.ExceptionsPage.inputtextRow2).type(textTobeEntered)
    }

    clickRemovebtn(){
        cy.get(exceptionPage.ExceptionsPage.removeBtn).click()
    }

    clickEditbtn(){

        cy.get(exceptionPage.ExceptionsPage.editBtn).click()
    }
    clearRow(){
        cy.get(exceptionPage.ExceptionsPage.inputtextRow1).clear()
    }

    getRow(){
       return  cy.get(exceptionPage.ExceptionsPage.inputtextRow1)
    }

    getAdditionalRow(){
        return  cy.get(exceptionPage.ExceptionsPage.inputtextRow2, {timeout:5000})
    }

    getInstructionElement(){
        return cy.get(exceptionPage.ExceptionsPage.instructionMsg)
    }

    getConfirmationMsg(){
        return cy.get(exceptionPage.ExceptionsPage.saveConfirmation)
    }

}