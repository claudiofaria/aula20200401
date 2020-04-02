/**
 * Recebe um vetor de números e retorna o menor elemento do vetor. 
 * Se o vetor estiver vazio, retorna undefined.
 * @param {Array} vetor 
 * @return {Number} o menor valor.
 */
function acharMenor(vetor) {
    let vetorLen;
    vetorLen = vetor.length;
    let menor = NaN
    for (i = 0; i < vetorLen; i++) {
        if (i < menor) {
            menor = i
        }
    }
}

/**
 * Recebe um vetor de números e devolve um outro vetor apenas com os números pares deste vetor.
 * Se o vetor estiver vazio, devolve um vetor vazio.
 * @param {Array} vetor com números inteiros.
 * @returns {Array} vetor contendo apenas números pares do original (ou vazio se não houver nenhum)
 */
function acharPares(vetor) { 
    let pares = []
    vetor.forEach(v => {
        if(v % 2 === 0){
            pares.push(v);
        }
    });
    return pares
}
