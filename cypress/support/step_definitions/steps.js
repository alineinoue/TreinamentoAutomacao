import {Before, Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"
import LoginPage from "../../support/pages/Login/index"
import SubmitPage from "../../support/pages/Signup/index"

//Feature: Login

Given("acessar homepage", () => {
    LoginPage.acessPage()
});

When("acessar página login", () => {
    LoginPage.acessLoginPage()
})

When("digitar usuário e senha ERRADOS e clicar em submit", () => {
   LoginPage.typeEmail()
   LoginPage.typePassword()
   LoginPage.clickBtnLogin()
})

Then("mensagem de erro deve ser exibida", () => {
    LoginPage.validateMsg()
});

//Feature: Signup

Given("acessar homepage", () => {
    SubmitPage.acessLoginPage()
});

When("preencher os campos obrigatórios", () => {
    SubmitPage.fillFields()
    SubmitPage.submitLogin()
});

And("cadastrar um usuário", () => {
    SubmitPage.registerUser()
})

Then("usuário deve ser cadastrado", () => {
    cy.url().should('be.equal', 'https://automationexercise.com/account_created')
})

