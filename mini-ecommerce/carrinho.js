const meuCarrinho = [];

function adicionarItem(produto, quantidade, descontoPercentual) {
  const valorDesconto = produto.preco * (descontoPercentual / 100);
  const precoComDesconto = produto.preco - valorDesconto;
  const subtotal = precoComDesconto * quantidade;

  meuCarrinho.push({
    nome: produto.nome,
    quantidade: Number(quantidade),
    subtotal: subtotal,
  });
}

function exibirResumo() {
  console.log("\n--- Resumo da Compra ---");
  let totalGeral = 0;
  meuCarrinho.forEach((item) => {
    console.log(
      `${item.quantidade}x ${item.nome} - Subtotal: R$${item.subtotal.toFixed(2)}`,
    );
    totalGeral += item.subtotal;
  });
  console.log(`TOTAL A PAGAR: R$${totalGeral.toFixed(2)}`);
}

module.exports = { adicionarItem, exibirResumo };
