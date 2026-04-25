const frase = "banana";
let contagem = {};

for (let i = 0; i < frase.length; i++) {
  let letra = frase[i];
  if (contagem[letra]) {
    contagem[letra]++;
  } else {
    contagem[letra] = 1;
  }
}

console.log(contagem);
