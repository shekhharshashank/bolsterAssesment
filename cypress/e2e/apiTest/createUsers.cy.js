import '../../support/commands'
import { faker } from '@faker-js/faker';

const {createUser,createEmptyUser} = require("../../support/apiUtils")

const payload={
    name:faker.internet.name,
    job:faker.internet.job
   
}
describe('Create new user',()=>{

    it('Validate user is created with Details',()=>{

        createUser(payload).then((response)=>{
            expect(response.status).to.eq(201); 
            expect(response.body.name).to.eq(payload.name);
            expect(response.body.job).to.eq(payload.job);
            cy.logger('apitest','New user is created');
           
        })
    })

    it('Validate Empty user is created with empty Body',()=>{

        createEmptyUser().then((response)=>{
            expect(response.status).to.eq(201); 
            expect(response.body.name).to.not.exist
            expect(response.body.job).to.not.exist
            cy.logger('apitest','Empty user is created');
           
        })
    })

    it('Validate Empty user is created with empty Name',()=>{

        payload.name=""
        createUser(payload).then((response)=>{
            expect(response.status).to.eq(201); 
            cy.logger('apitest',payload.name);
            expect(response.body.name).to.eq(payload.name);
            expect(response.body.job).to.eq(payload.job);
            cy.logger('apitest',payload.name +'Empty user is created');
           
        })
    })

    it('Validate Empty user is created with empty Job',()=>{

        payload.job=""
        createUser(payload).then((response)=>{
            expect(response.status).to.eq(201); 
            expect(response.body.name).to.eq(payload.name);
            expect(response.body.job).to.eq(payload.job);
            cy.logger('apitest','New user is created with empty Job');
           
        })
    })
})