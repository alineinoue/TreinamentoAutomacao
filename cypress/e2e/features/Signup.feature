Feature: Signup

Scenario: Cadastro de usuário
    Given acessar homepage
    When preencher campos obrigatórios
    Then usuário deve ser cadastrado