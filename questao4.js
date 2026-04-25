const palavra = "desenvolvimento";
const vogais = "aeiouAEIOU";
let totalVogais = 0;

for (let i = 0; i < palavra.length; i++) {
  if (vogais.includes(palavra[i])) {
    totalVogais++;
  }
}

console.log("Total de vogais: " + totalVogais);
