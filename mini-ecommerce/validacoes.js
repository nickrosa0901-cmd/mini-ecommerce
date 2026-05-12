function isNumeroValido(valor) {
  const num = Number(valor);
  // Verifica se é um número, se não é NaN e se é >= 0
  return !isNaN(num) && valor !== "" && num >= 0;
}

function isTextoValido(texto) {
  // Verifica se existe e se não contém apenas espaços
  return texto !== undefined && texto.trim().length > 0;
}

module.exports = { isNumeroValido, isTextoValido };
