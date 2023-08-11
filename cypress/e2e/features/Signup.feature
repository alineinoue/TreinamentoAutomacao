Feature: Signup

Scenario: Cadastro de usuário
    Given acessar homepage
    When preencher os campos obrigatórios
    And cadastrar um usuário 
    Then usuário deve ser cadastrado