function isNumeroValido(valor) {
  const num = Number(valor);

  return !isNaN(num) && valor !== "" && num >= 0;
}
function isTextoValido(texto) {
  return texto !== undefined && texto.trim().length > 0;
}

module.exports = { isNumeroValido, isTextoValido };
