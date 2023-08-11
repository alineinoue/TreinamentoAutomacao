/// <reference types="Cypress" />

const loginPage = require('./elements').elements

class LoginPage{
    acessPage(){
        cy.visit("https://automationexercise.com/signup")
    }

    acessLoginPage(){
        cy.get(loginPage.acessLogin).click()
    }

    typeEmail(){
        cy.get(loginPage.inputEmail).type("aline@acct.global")
    }

    typePassword(){
        cy.get(loginPage.inputPassword).type("123teste")
    }

    clickBtnLogin(){
        cy.get(loginPage.button).click()
    }

    validateMsg(){
        cy.get(loginPage.msgError).should('have.text', 'Your email or password is incorrect!')
    }

}

export default new LoginPage()














