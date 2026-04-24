//! Encontrar o Maior Valor
function maiorValor(lista) {
    let maior = lista[0];

    for (let i = 1; i < lista.length; i++) {
        if (lista[i] > maior) {
            maior = lista[i];
        }
    }

    return maior;
}