import '../../support/commands'
import { faker } from '@faker-js/faker';

const {getUser} = require("../../support/apiUtils")

describe('Get User',()=>{

    it('Get User when Id Exists',()=>{

        getUser(1).then((response)=>{
            expect(response.status).to.eq(200);
            const data = response.body.data
            expect(data.id).equal(1)
    })
})
    
    it('Get User when Id doesnot Exists',()=>{

        getUser(faker.number).then((response)=>{
            expect(response.status).to.eq(404);
            expect(response.body).to.be.empty
    })
})

    it('Get User when Id is *',()=>{
        getUser('*').then((response)=>{
            expect(response.status).to.eq(404);
            expect(response.body).to.be.empty
    })
})

})