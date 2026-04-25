const valores = [5, 12, 8, 45, 3, 21];
let maiorValor = valores[0];

for (let i = 1; i < valores.length; i++) {
  if (valores[i] > maiorValor) {
    maiorValor = valores[i];
  }
}

console.log("O maior valor é: " + maiorValor);
