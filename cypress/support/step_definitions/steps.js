import {Before, Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"
import LoginPage from "../../support/pages/Login/index"
import SubmitPage from "../../support/pages/Signup/index"

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

//Cadastro usuário

Given("acessar homepage", () => {
    SubmitPage.acessPage()
    SubmitPage.fillFields()
    SubmitPage.submitLogin()
});

When("preencher campos obrigatórios", () => {
    
});

