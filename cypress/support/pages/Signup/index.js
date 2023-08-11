/// <reference types="Cypress" />

const signupPage = require('./elements').elements

class SignupPage {
    acessPage(){
        cy.visit("https://automationexercise.com/signup")
    }

    fillFields(){
        cy.get(signupPage.signupName).type("Aline")
        cy.get(signupPage.signupEmail).type("aline.cerqueira@acct.global")
    }

    submitLogin(){
        cy.get(signupPage.signupButton).click()
    }
}

export default new SignupPage()