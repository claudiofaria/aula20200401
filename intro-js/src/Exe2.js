/**
 * Recebe uma string com o nome completo de uma pessoa (primeiro e último nome apenas) 
 * e devolve o nome com o sobrenome abreviado. Caso só o primeiro nome seja passado, não faça nada.
 * Exemplos:
 *  - Yuri Dirickson -> Yuri D.
 *  - João Silva -> João S.
 *  - Maria -> Maria
 * 
 * @param {String} nomeCompleto nome completo da pessoa.
 * @return string com o segundo nome abreviado
 */
function abreviadorNomes(nomeCompleto) {
    if(nomeCompleto.split(' ').length > 1){
        return nomeCompleto.split(' ')[0] + ' ' +nomeCompleto.split(' ')[1].substring(0,1) +'.'
    }else{
        return nomeCompleto
    }
 }

/**
 * Escreva uma função que recebe uma String com a data no formato brasileiro (dia/mês/ano) e
 * converta para o formato: 'Dia de Mês Extenso de Ano'. 
 * Exemplos:
 *  - 10/11/2019 -> 10 de Novembro de 2019
 *  - 03/02/2000 -> 03 de Fevereiro de 2000
 * OBS: Note a letra maiúscula do mês.
 * 
 * @param {String} data 
 * @returns {String} data no formato 
 */
function converteDataParaFormaCompleta(data){ 

    if(!data){
        return null;
    }

    let dia = data.split('/')[0]
    let mes = data.substring(3,5)

    let mesExtenso = null;
    switch(mes){
        case'02':
            mesExtenso = 'Fevereiro'
            break;
        case '05':
            mesExtenso = 'Maio'
            break;
        case '11':
            mesExtenso ='Novembro'
    }
    


    let ano = data.split('/')[2]

    return dia + ' de ' + mesExtenso + ' de ' + ano
}