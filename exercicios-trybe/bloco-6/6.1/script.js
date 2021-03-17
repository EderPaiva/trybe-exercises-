window.onload = function() {


    //local do option
    const optionLocal = document.getElementById('dropDown');

    function createOption(value, text) {
        // criando option
        const option = document.createElement('option');

        option.value = value;
        option.innerText = text;

        //

        return option;
    }

      

    const sigla = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];
    const estados = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia','Ceará', 'DistritoFederal', 'EspíritoSanto', 'Goiás', 'Maranhão', 'MatoGrosso', 'MatoGrossoDoSul', 'MinasGerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'RioDeJaneiro', 'RioGrandeDoNorte', 'RioGrandeDoSul', 'Rondônia', 'Roraima', 'SantaCatarina', 'SaoPaulo', 'Sergipe', 'Tocantins'];

    for (let i = 0; i < sigla.length; i += 1) {
  optionLocal.appendChild( createOption(sigla[i], estados[i])) ;   


    }







}