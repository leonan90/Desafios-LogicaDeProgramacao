let valorTotal;
limpar();

function adicionar() {
    let produtoSelecionado = document.getElementById('produto').value;
    let qtdAdicionada = document.getElementById('quantidade').value;
        
    if (!produtoSelecionado || produtoSelecionado.trim() === "") {
        alert("Selecione um produto válido.");
        return;
    }

    if (isNaN(qtdAdicionada) || qtdAdicionada <= 0) {
        alert("Insira uma quantidade válida.");
        return;
    }

    let preçoUnidade = produtoSelecionado.split('R$')[1];
    let nomeProduto = produtoSelecionado.split('-')[0];
    let preçoQtdAdicionada = (qtdAdicionada * preçoUnidade);

    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${qtdAdicionada}x</span> ${nomeProduto} <span class="texto-azul">R$${preçoQtdAdicionada}</span>`;

    valorTotal = valorTotal + preçoQtdAdicionada;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$${valorTotal}`;

    document.getElementById('quantidade').value = 0;
}

function limpar() {
    valorTotal = 0
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
}

