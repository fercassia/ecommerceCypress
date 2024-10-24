//**********Mapeamento de elementos**********
const elements = {

    cadastrarButton: '#linkCadastroHeader',

}


//**********Ações**********
class homePage { 

    clicarCadastrar(){
        cy.get(elements.cadastrarButton).click();
    }


}

export default new homePage();