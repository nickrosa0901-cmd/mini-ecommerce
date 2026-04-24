//! Identificar Números Repetidos

function numerosRepetidos(lista) {
    let repetidos = [];

    for (let i = 0; i < lista.length; i++) {
        for (let j = i + 1; j < lista.length; j++) {
            if (lista[i] === lista[j] && !repetidos.includes(lista[i])) {
                repetidos.push(lista[i]);
            }
        }
    }

    return repetidos;
}