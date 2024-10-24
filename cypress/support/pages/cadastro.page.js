//**********Mapeamento de elementos**********
const elements = {
    cadastrarButton: '#linkCadastroHeader',
    nomeField:'[data-testid="complete-name-input"]',
    cpfField: '[data-testid="cpf-input"]',
    generoComboBox: '#SelectGender_input',
    dataNascimentoField: '[data-testid="birth-date-input"]',
    telefoneField: '[data-testid="mobile-number-input"]',
    emailField: '[data-testid="email-input"]',
    senhaField: '[data-testid="password-input"]',
    confirmaSenhaField: '[data-testid="confirm-password-input"]',
    ondeConheceuComboBox: '#SelectBox > .sc-jdkBTo > .sc-fmzyuX',
    continueButton: '[data-testid="button-form-continue"]',

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

    selecionarGenero(genero){
        cy.get(elements.generoComboBox).select(genero);
    }

}

export default new CadastrarClientePage();