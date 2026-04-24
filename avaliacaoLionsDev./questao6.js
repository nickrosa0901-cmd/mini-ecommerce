//! Soma dos Números Pares

function somaPares(lista) {
    let soma = 0;

    for (let i = 0; i < lista.length; i++) {
        if (lista[i] % 2 === 0) {
            soma += lista[i];
        }
    }

    return soma;
}