const numeros = [10, 20, 30, 40, 50];
let somaTotal = 0;

for (let i = 0; i < numeros.length; i++) {
  somaTotal = somaTotal + numeros[i];
}

let media = somaTotal / numeros.length;
console.log("A média é: " + media);
