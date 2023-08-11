import {Before, Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"

Given("acessar a página de PDP", () => {
    cy.visit("https://automationexercise.com/product_details/1")
})

When("adicionar ao carrinho", () => {
    cy.get(':nth-child(5) > .btn').click()
})

Then("exibir modal de confirmação", () => {
    cy.get('.modal-content').should('be.visible')
})

//Cenário para enviar avaliação do produto

Given("acessar a página de PDP novamente", () => {
    cy.visit("https://automationexercise.com/product_details/1")
})

When("preencher os campos e clicar para enviar", () => {
    cy.get('[placeholder="Your Name"]').type('Aline')
    cy.get('[placeholder="Email Address"]').type('aline@acct.global')
    cy.get('[placeholder="Add Review Here!"]').type('Mensagem teste')
    cy.get('#button-review').click()
})

Then("exibir uma mensagem de confirmação", () => {   
})
