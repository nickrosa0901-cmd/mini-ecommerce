const listaRepetidos = [1, 2, 3, 2, 4, 5, 1];
let repetidos = [];

for (let i = 0; i < listaRepetidos.length; i++) {
  for (let j = i + 1; j < listaRepetidos.length; j++) {
    if (listaRepetidos[i] === listaRepetidos[j]) {
      if (!repetidos.includes(listaRepetidos[i])) {
        repetidos.push(listaRepetidos[i]);
      }
    }
  }
}

console.log("Números que repetem: " + repetidos);
