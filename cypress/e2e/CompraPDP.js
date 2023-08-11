describe("Compra PDP", () => {
    it("Adicionar ao carrinho PDP", () => {
      cy.visit("https://automationexercise.com/product_details/1");
  
      cy.get(':nth-child(5) > .btn').click();
  
      cy.get('.modal-content').should('be.visible');
    });
  
    it("Enviar avaliação do produto", () => {
      cy.visit("https://automationexercise.com/product_details/1");
      cy.get('[placeholder="Your Name"]').type('Aline')
      cy.get('[placeholder="Email Address"]').type('aline@acct.global')
      cy.get('[placeholder="Add Review Here!"]').type('Mensagem teste')
      cy.get('#button-review').click()
    });
  });
  