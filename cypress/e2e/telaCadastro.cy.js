import {
  homePage,
  cadastroPage
} from '../support/pages/index';

import dayjs from 'dayjs';
import faker from 'faker-br';
import { generate } from 'gerador-validador-cpf';
import generator from 'generate-password';


beforeEach(() => {
  cy.visit("");
});

describe('Cadastro de cliente', () => {
  context('principal', () => {
    it('Fluxo de cadastro cliente com sucesso! ', () => {
      //Arrange
      var nome = faker.fake('{{name.firstName}} {{name.lastName}}');
      var cpf = generate();
      var telefone = 31912341234;
      var email = nome.replace(' ', '_') + '@teste.com';
      var dataNascimento = dayjs().subtract(18, 'year').format('DD-MM-YYYY');
      var senha = generator.generate({
        length: 10,
        numbers: true
      });
      var texto = 'SMS';
      var cep = 68552770;
      var identificacaoEndereco = 'CASA';
      var numeroEndereco = '123';
      var complemento = 'Teste';
      var referenciaEndereco = 'Teste';

      //Action
      homePage.clicarCadastrar();
      cadastroPage.preencherNome(nome);
      cadastroPage.preencherCpf(cpf);
      cadastroPage.clicarGenero();
      cadastroPage.clicarGeneroCombo();
      cadastroPage.preencherDataNascimento(dataNascimento);
      cadastroPage.preencherTelefone(telefone);
      cadastroPage.preencherEmail(email);
      cadastroPage.preencherSenha(senha);
      cadastroPage.preencherConfirmaSenha(senha);
      cadastroPage.clicarPesquisa();
      cadastroPage.clicarPesquisaCombo();
      cadastroPage.clicarContinuar();
      cadastroPage.preencherCep(cep);
      cadastroPage.preencherIdentificacao(identificacaoEndereco);
      cadastroPage.preencherNumero(numeroEndereco);
      cadastroPage.preencherComplemento(complemento);
      cadastroPage.preencherPontoReferencia(referenciaEndereco);
      cadastroPage.clicarConcluirCadastro();
      //Assert
      cadastroPage.validarTextoEndereco(texto);
    });
  });
});