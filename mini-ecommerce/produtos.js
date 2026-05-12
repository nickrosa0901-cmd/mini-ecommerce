const catalogo = [];

function cadastrarProduto(id, nome, preco) {
  const novoProduto = { id, nome, preco: Number(preco) };
  catalogo.push(novoProduto);
}

function listarProdutos() {
  console.log("\n--- Vitrine de Produtos ---");
  if (catalogo.length === 0) {
    console.log("Nenhum produto cadastrado.");
  } else {
    catalogo.forEach((p) => {
      console.log(
        `ID: ${p.id} | Nome: ${p.nome} | Preço: R$${p.preco.toFixed(2)}`,
      );
    });
  }
}

function buscarProdutoPorId(id) {
  return catalogo.find((p) => p.id === id);
}

module.exports = { cadastrarProduto, listarProdutos, buscarProdutoPorId };
