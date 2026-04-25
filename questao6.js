const numerosLista = [10, 5, 8, 3, 2];
let somaPares = 0;

for (let i = 0; i < numerosLista.length; i++) {
  if (numerosLista[i] % 2 === 0) {
    somaPares = somaPares + numerosLista[i];
  }
}

console.log("Soma dos pares: " + somaPares);
