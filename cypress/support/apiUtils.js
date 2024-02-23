
import "../support/commands"
const apiConfig = require("../../apiConfig")

function createUser(payload) {
    return cy.request({
      method: 'POST',
      url: `${apiConfig.baseUrl}${apiConfig.endpoints.users}`,
      body: payload,
      failOnStatusCode: false, 
    }).then((response) => {
      return response; 
    });
  }

  function createEmptyUser() {
    return cy.request({
      method: 'POST',
      url: `${apiConfig.baseUrl}${apiConfig.endpoints.users}`,
      body: "",
      failOnStatusCode: false, 
    }).then((response) => {
      return response; 
    });
  }

  function getUsers()
{
    return  cy.request({
        method: 'GET',
        url: `${apiConfig.baseUrl}${apiConfig.endpoints.users}`,
        failOnStatusCode: false, 
      }).then((response) => {
        return response;
      })
}
  module.exports = {createUser,createEmptyUser,getUsers}