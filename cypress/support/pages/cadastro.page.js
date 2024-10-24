//**********Mapeamento de elementos**********
const elements = {
    cadastrarButton: '#linkCadastroHeader',
    nomeField:'[data-testid="complete-name-input"]',
    cpfField: '[data-testid="cpf-input"]',
    generoField: '#SelectGender',
    generoComboBox: '#SelectGender > div:nth-child(3) > span:nth-child(3)',
    dataNascimentoField: '[data-testid="birth-date-input"]',
    telefoneField: '[data-testid="mobile-number-input"]',
    emailField: '[data-testid="email-input"]',
    senhaField: '[data-testid="password-input"]',
    confirmaSenhaField: '[data-testid="confirm-password-input"]',
    ondeConheceuComboBox: '#SelectBox > .sc-jdkBTo > .sc-fmzyuX',
    continueButton: '[data-testid="button-form-continue"]',
    pesquisaField: '#SelectBox',
    pesquisaComboBox: '#SelectBox > div:nth-child(3) > span:nth-child(3)',
    adicionarEnderecoText: '.sc-lgjHQU.eijCFx',
    cepEnderecoField: '[data-testid="zipcode-input"]',
    identificacaoEnderecoField: '[data-testid="address-identification-input"]',
    numeroEnderecoField: '[data-testid="address-number-input"]',
    complementoEnderecoField: '[data-testid="address-complement-input"]',
    referenciaEnderecoField: '[data-testid="address-reference-input"]',
    concluirCadastroButton: '[data-testid="register-submit-button"]',

}


//**********Ações**********
class CadastrarClientePage { 

    clicarCadastrar(){
        cy.get(elements.cadastrarButton).click();
    }

    preencherNome(nomeCompleto){
        cy.get(elements.nomeField).type(nomeCompleto)
    }

    preencherCpf(cpf){
        cy.get(elements.cpfField).type(cpf)
    }

    clicarGenero(){
        cy.get(elements.generoField).click();
    }
    clicarGeneroCombo(){
        cy.get(elements.generoComboBox).click();
    }

    preencherDataNascimento(dataNascimento){
        cy.get(elements.dataNascimentoField).type(dataNascimento);
    }

    preencherTelefone(telefone){
        cy.get(elements.telefoneField).type(telefone);
    }

    preencherEmail(email){
        cy.get(elements.emailField).type(email);
    }

    preencherSenha(senha){
        cy.get(elements.senhaField).type(senha);
    }

    preencherConfirmaSenha(senha){
        cy.get(elements.confirmaSenhaField).type(senha);
    }

    clicarPesquisa(){
        cy.get(elements.pesquisaField).click();
    }

    clicarPesquisaCombo(){
        cy.get(elements.pesquisaComboBox).click();
    }

    clicarContinuar(){
        cy.get(elements.continueButton).click();
    }

    preencherCep(cep){
        cy.get(elements.cepEnderecoField).type(cep);
    }

    preencherIdentificacao(identificacaoEndereco){
        cy.get(elements.identificacaoEnderecoField).type(identificacaoEndereco);
    }

    preencherNumero(numeroEndereco){
        cy.get(elements.numeroEnderecoField).type(numeroEndereco)
    }

    preencherComplemento(complemento){
        cy.get(elements.complementoEnderecoField).type(complemento)
    }

    preencherPontoReferencia(referenciaEndereco){
        cy.get(elements.referenciaEnderecoField).type(referenciaEndereco)
    }

    clicarConcluirCadastro(){
        cy.get(elements.concluirCadastroButton).click();
    }


//**********Validações**********
    validarTextoEndereco(texto){
        cy.get(elements.adicionarEnderecoText).contains(texto)
    }


}

export default new CadastrarClientePage();