const numerosVariados = [10, 2, 30, 5, 1];
let maior = numerosVariados[0];
let menor = numerosVariados[0];

for (let i = 1; i < numerosVariados.length; i++) {
  if (numerosVariados[i] > maior) {
    maior = numerosVariados[i];
  }
  if (numerosVariados[i] < menor) {
    menor = numerosVariados[i];
  }
}

let diferenca = maior - menor;
console.log("A diferença é: " + diferenca);
