import cadastroPage from '../support/pages/cadastro.page';
import {
  homePage,
  cadastrarClientePage
} from '../support/pages/index';

import dayjs from 'dayjs';
import faker from 'faker-br';
import { generate } from 'gerador-validador-cpf'

beforeEach(() => {
  cy.visit("");
});

describe('Cadastro de cliente', () => {
  context('principal', () => {
    it('Realizar cadastro de cliente com sucesso! ', () => {
        //Arrange
        var nome = faker.fake('{{name.firstName}} {{name.lastName}}');
        var cpf = generate();
        var genero = 'Mulher';

        //Action
        homePage.clicarCadastrar();
        cadastroPage.preencherNome(nome);
        cadastroPage.preencherCpf(cpf);
        //cadastroPage.selecionarGenero(genero);

        //Assert

    });
  });
});