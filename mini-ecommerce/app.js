const prompt = require("prompt-sync")();
const { isNumeroValido, isTextoValido } = require("./validacoes");
const {
  cadastrarProduto,
  listarProdutos,
  buscarProdutoPorId,
} = require("./produtos");
const { adicionarItem, exibirResumo } = require("./carrinho");

let continuar = true;

while (continuar) {
  console.log(`
    [1] Cadastrar Produto
    [2] Ver Catálogo
    [3] Adicionar ao Carrinho
    [4] Ver Resumo da Compra
    [0] Sair
    `);

  const opcao = prompt("Escolha uma opção: ");

  switch (opcao) {
    case "1":
      let id = prompt("Digite o ID do produto: ");
      let nome = prompt("Digite o nome do produto: ");
      while (!isTextoValido(nome)) {
        nome = prompt("Nome inválido! Digite novamente: ");
      }
      let preco = prompt("Digite o preço: ");
      while (!isNumeroValido(preco)) {
        preco = prompt("Preço inválido! Digite um número positivo: ");
      }
      cadastrarProduto(id, nome, preco);
      console.log("Produto cadastrado com sucesso!");
      break;

    case "2":
      listarProdutos();
      break;

    case "3":
      const idBusca = prompt("Digite o ID do produto que deseja comprar: ");
      const produtoEncontrado = buscarProdutoPorId(idBusca);

      if (produtoEncontrado) {
        let qtd = prompt("Quantidade: ");
        while (!isNumeroValido(qtd) || qtd <= 0) {
          qtd = prompt(
            "Quantidade inválida! Digite um número maior que zero: ",
          );
        }
        let desc = prompt("Desconto (%): ");
        while (!isNumeroValido(desc)) {
          desc = prompt("Desconto inválido! Digite um número: ");
        }
        adicionarItem(produtoEncontrado, qtd, desc);
        console.log("Item adicionado!");
      } else {
        console.log("Produto não encontrado.");
      }
      break;

    case "4":
      exibirResumo();
      break;

    case "0":
      console.log("Saindo... Até logo!");
      continuar = false;
      break;

    default:
      console.log("Opção inválida.");
  }
}
