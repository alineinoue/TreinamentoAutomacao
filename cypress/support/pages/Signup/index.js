/// <reference types="Cypress" />

const signupPage = require('./elements').elements

class SignupPage {
    acessLoginPage(){
        cy.visit("https://automationexercise.com/login")
    }

    fillFields(){
        if(Cypress.env('country') === 'BR'){
            cy.get(signupPage.signupName).type("Aline")
            cy.get(signupPage.signupEmail).type("aline.cerqueira@acct.global")
        } else if (Cypress.env('country') === 'JP'){
            cy.get(signupPage.signupName).type("Tatsumi")
            cy.get(signupPage.signupEmail).type("tatsumijp@gmail.com")
        } else if (Cypress.env('country') === 'FRA'){
            cy.get(signupPage.signupName).type("Dominique")
            cy.get(signupPage.signupEmail).type("dominique@gmail.com")
        }
    }

    submitLogin(){
        cy.get(signupPage.signupButton).click()
    }

    registerUser(){
        if(Cypress.env('country') === 'BR'){
           cy.get(signupPage.genderRadioF).check()
           cy.get(signupPage.passwordInput).type("brasil123")
           cy.get(signupPage.daySelect).select(2)
           cy.get(signupPage.monthSelect).select('May')
           cy.get(signupPage.yearSelect).select('2001')
           cy.get(signupPage.newsletterSelect).check()
           cy.get(signupPage.optinSelect).check()
           cy.get(signupPage.firstName).type('Aline')
           cy.get(signupPage.lastName).type('Teste')
           cy.get(signupPage.companyName).type('Quality')
           cy.get(signupPage.address1Name).type('Rua endereço 1')
           cy.get(signupPage.address2Name).type('Rua endereço 2')
           cy.get(signupPage.countrySelect).select('Australia')
           cy.get(signupPage.stateInput).type("São Paulo")
           cy.get(signupPage.cityInput).type("São Paulo")
           cy.get(signupPage.zipcodeInput).type("02040-070")
           cy.get(signupPage.mobileNumberInput).type("11900329310")
        } else if(Cypress.env('country') === 'JP'){
            cy.get(signupPage.genderRadioF).check()
            cy.get(signupPage.passwordInput).type("japao123")
            cy.get(signupPage.daySelect).select(10)
            cy.get(signupPage.monthSelect).select('June')
            cy.get(signupPage.yearSelect).select('1997')
            cy.get(signupPage.newsletterSelect).check()
            cy.get(signupPage.optinSelect).check()
            cy.get(signupPage.firstName).type('Tatsumi')
            cy.get(signupPage.lastName).type('Japan')
            cy.get(signupPage.companyName).type('Quality')
            cy.get(signupPage.address1Name).type('Jūsho 1')
            cy.get(signupPage.address2Name).type('Jūsho 2')
            cy.get(signupPage.countrySelect).select('Singapore')
            cy.get(signupPage.stateInput).type("Tokyo")
            cy.get(signupPage.cityInput).type("Tokyo")
            cy.get(signupPage.zipcodeInput).type("104-0044")
            cy.get(signupPage.mobileNumberInput).type("34900329310")
         } else if(Cypress.env('country') === 'FRA'){
            cy.get(signupPage.genderRadioF).check()
            cy.get(signupPage.passwordInput).type("fra123")
            cy.get(signupPage.daySelect).select(23)
            cy.get(signupPage.monthSelect).select('November')
            cy.get(signupPage.yearSelect).select('1977')
            cy.get(signupPage.newsletterSelect).check()
            cy.get(signupPage.optinSelect).check()
            cy.get(signupPage.firstName).type('Dominique')
            cy.get(signupPage.lastName).type('Laurent')
            cy.get(signupPage.companyName).type('Quality')
            cy.get(signupPage.address1Name).type('Adresse 1')
            cy.get(signupPage.address2Name).type('Adresse 2')
            cy.get(signupPage.countrySelect).select('Canada')
            cy.get(signupPage.stateInput).type("O grand est")
            cy.get(signupPage.cityInput).type("Fracn")
            cy.get(signupPage.zipcodeInput).type("324-044")
            cy.get(signupPage.mobileNumberInput).type("21300329310")
         } 
        cy.get(signupPage.registerButton).click()
    }
}

export default new SignupPage()