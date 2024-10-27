// cypress/support/builders/ClienteBuilder.js

import dayjs from 'dayjs';
import faker from 'faker-br';
import { generate } from 'gerador-validador-cpf';
import generator from 'generate-password';

class ClienteBuilder {
  constructor() {
    const nome = faker.fake('{{name.firstName}} {{name.lastName}}');
    const email = nome.replace(' ', '_').toLowerCase() + '@teste.com';

    this.clienteData = {
      nome: nome,
      cpf: generate(),
      telefone: 31912341234,
      email: email,
      dataNascimento: dayjs().subtract(18, 'year').format('DD-MM-YYYY'),
      senha: generator.generate({ length: 10, numbers: true }),
      texto: 'SMS',
      cep: 68552770,
      identificacaoEndereco: 'CASA',
      numeroEndereco: '123',
      complemento: 'Teste',
      referenciaEndereco: 'Teste',
    };
  }

  withNome(nome) {
    this.clienteData.nome = nome;
    return this;
  }

  withEmail(email) {
    this.clienteData.email = email;
    return this;
  }

  build() {
    return this.clienteData;
  }
}

export default ClienteBuilder;
