Feature: Compra PDP

Scenario: Adicionar ao carrinho PDP
    Given acessar a página de PDP
    When adicionar ao carrinho
    Then exibir modal de confirmação

Scenario: Enviar avaliação do produto
    Given acessar a página de PDP novamente
    When preencher os campos e clicar para enviar 
    Then exibir uma mensagem de confirmação