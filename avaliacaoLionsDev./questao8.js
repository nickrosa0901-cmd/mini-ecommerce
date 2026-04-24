//! Contagem de Letras

function contarLetras(palavra) {
    let contagem = {};

    for (let i = 0; i < palavra.length; i++) {
        let letra = palavra[i];

        if (contagem[letra]) {
            contagem[letra]++;
        } else {
            contagem[letra] = 1;
        }
    }

    return contagem;
}