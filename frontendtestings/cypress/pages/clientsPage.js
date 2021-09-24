/// <reference types="cypress" />

const { name, email, telephone } = require("../targets/targets")



/// Elements
const titleofDashboardPage = 'Testers Hotel'
const ClientsButton = '.blocks > :nth-child(2) > .btn'
const createAclient = 'h2 > .btn'
const typeName = ':nth-child(1) > input'
const typeEmail = ':nth-child(2) > input'
const typeTelepohone = ':nth-child(3) > input'
const save = '.blue'
const logout = '.user > .btn'

///functions
function checkTitleofClientsPage(cy){
    cy.title().should('eq', titleofDashboardPage)
}
function createClient(cy, contentToConfirm){
    cy.get(ClientsButton).click()
    cy.contains(contentToConfirm)
    cy.get(createAclient).click()
    cy.get(typeName).type(name)
    cy.get(typeEmail).type(email)
    cy.get(typeTelepohone).type(telephone)
    cy.get(save).click()
    cy.get(logout).click()



}
// exports 
module.exports = {
    checkTitleofClientsPage,
    createClient
}

