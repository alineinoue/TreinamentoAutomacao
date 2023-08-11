Feature: Login 

Scenario: Login com usuário e senha inválidos
    Given acessar homepage
    When acessar página login
    When digitar usuário e senha ERRADOS e clicar em submit
    Then mensagem de erro deve ser exibida