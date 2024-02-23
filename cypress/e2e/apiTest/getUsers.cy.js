import '../../support/commands'
import { faker } from '@faker-js/faker';

const {createUser,getUsers} = require("../../support/apiUtils")
let testUser

before('Load test user',()=>{

cy.fixture('newUser').then((data)=>{
    testUser = data;
   })

})

describe('Get All user',()=>{

    it('Get All Users ',()=>{

        getUsers().then((response)=>{
            expect(response.status).to.eq(200);
            expect(response.body.page).to.greaterThan(0);
            const data = response.body.data

            expect(data).to.be.an('array').and.not.empty
             const usersList =  data.map(user =>{
                    return user
            })
            cy.wrap(usersList).should('deep.include',testUser)
           
        })

    })


})