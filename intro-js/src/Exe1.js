/**
 * Função que recebe uma operação em formato de texto e devolve o resultado desta operação com os dois números passados,
 * na ordem em que eles foram passados. (Use as funções do Math se necessário)
 * 
 * As operações são identificadas da seguinte maneira:
 *  - A: Adição - Soma numero1 com numero2
 *  - S: Subtração - Subtrai numero2 do numero1
 *  - M: Multiplicação - Multiplica numero1 com numero2
 *  - D: Divisão - Divide numero1 pelo numero2
 *  - P: Potência - Eleva o numero1 pelo numero2
 * 
 * Verifique onde é possível fazer a operação (cuidado com divisão por zero e raíz pares de números negativos). 
 * Nos casos em que não for definido, retornar NaN (not-a-number).
 * 
 * Se a operação passada não for uma das letras acima, retornar undefined.
 * 
 * @param {String} operacao
 * @param {Number} numero1
 * @param {Number} numero2
 * @returns {Number} resultado da operação
 */
function operacoesBasicas(operacao, numero1, numero2) { 

    if(isNaN(numero1) || isNaN(numero2)){
        return NaN();
    }

    switch(operacao){
        case 'A':
            return numero1 + numero2
        case 'S':
            return numero1 - numero2
        case 'M':
            return numero1 * numero2
        case 'D':
            if(numero2 === 0 || numero1 === 1){
                return NaN;
            }
            return numero1 / numero2
        case 'P':
           return Math.pow(numero1, numero2)
        default:
            return undefined
    }
}

/**
 * Escreva uma função que recebe dois elementos e retorna uma mensagem dizendo se eles são estritamente iguais,
 * equivalentes ou diferentes, com o seu tipo entre parênteses logo após o valor.
 * 
 * Seguem os exemplos:
 *   - 2 e 1: Elemento 2 (number) é diferente do elemento 1 (number)
 *   - "ABC" e "ABC": Elemento ABC (string) é estritamente igual ao elemento ABC (string)
 *   - "2" e 2: Elemento 2 (string) é equivalente ao elemento 2 (number)
 * @param {*} elemento1
 * @param {*} elemento2
 * @returns {string} mensagem com o resultado da comparação 
 */
function comparadorBasico(elemento1, elemento2) { 

    if(elemento1 === elemento2 ){
        return ('Elemento ' + elemento1 + ' (' + typeof(elemento1) + ') '+ 'é estritamente igual ao elemento ' + elemento2 + ' (' + typeof(elemento2) + ')');
    }else if(elemento1 == elemento2){
        return ('Elemento ' + elemento1 + ' (' + typeof(elemento1) + ') '+ 'é equivalente ao elemento ' + elemento2 + ' (' + typeof(elemento2) + ')');
    }else{
        return ('Elemento ' + elemento1 + ' (' + typeof(elemento1) + ') '+ 'é diferente do elemento ' + elemento2 + ' (' + typeof(elemento2) + ')');
    }
}
