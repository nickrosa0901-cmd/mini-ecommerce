//! Verificar Palíndromo

function ehPalindromo(palavra) {
    let invertida = palavra.split("").reverse().join("");
    return palavra === invertida;
}