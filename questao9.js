const termo = "arara";
let reverso = "";

for (let i = termo.length - 1; i >= 0; i--) {
  reverso = reverso + termo[i];
}

if (termo === reverso) {
  console.log("É um palíndromo");
} else {
  console.log("Não é um palíndromo");
}
