const texto = "programação";
let textoInvertido = "";

for (let i = texto.length - 1; i >= 0; i--) {
  textoInvertido = textoInvertido + texto[i];
}

console.log("Palavra invertida: " + textoInvertido);
