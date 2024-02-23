import '../../support/commands'
import { faker } from '@faker-js/faker';

const {createUser,getUsers} = require("../../support/apiUtils")

describe('Create new user',()=>{


    it('Get All Users ',()=>{

        getUsers().then((response)=>{
            expect(response.status).to.eq(200);
            expect(response.body.page).to.greaterThan(0);

        })

    })


})