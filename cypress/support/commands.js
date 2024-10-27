// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


// cypress/support/commands.js

// cypress/support/commands.js

Cypress.Commands.add('preencherFormularioCadastro', (cliente) => {
    cy.get('#linkCadastroHeader').click();
    cy.get('[data-testid="complete-name-input"]').type(cliente.nome);
    cy.get('[data-testid="cpf-input"]').type(cliente.cpf);
    cy.get('#SelectGender').click();
    cy.get('#SelectGender > div:nth-child(3) > span:nth-child(3)').click();
    cy.get('[data-testid="birth-date-input"]').type(cliente.dataNascimento);
    cy.get('[data-testid="mobile-number-input"]').type(cliente.telefone);
    cy.get('[data-testid="email-input"]').type(cliente.email);
    cy.get('[data-testid="password-input"]').type(cliente.senha);
    cy.get('[data-testid="confirm-password-input"]').type(cliente.senha);
    cy.get('#SelectBox').click();
    cy.get('#SelectBox > div:nth-child(3) > span:nth-child(3)').click();
    cy.get('[data-testid="button-form-continue"]').click();
    cy.get('[data-testid="zipcode-input"]').type(cliente.cep);
    cy.get('[data-testid="address-identification-input"]').type(cliente.identificacaoEndereco);
    cy.get('[data-testid="address-number-input"]').type(cliente.numeroEndereco);
    cy.get('[data-testid="address-complement-input"]').type(cliente.complemento);
    cy.get('[data-testid="address-reference-input"]').type(cliente.referenciaEndereco);
    cy.get('[data-testid="register-submit-button"]').click();
  });
  
  Cypress.Commands.add('validarCadastro', (texto) => {
    cy.get("button[data-testid='sms-method-button'] > span:nth-child(2)").contains(texto);
  });
  
