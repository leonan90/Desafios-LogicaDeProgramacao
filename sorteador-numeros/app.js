function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let sorteados = [];
    let numero;

    if (de >= ate) {
        alert('Os números informados não válidos! Ajuste os números inseridos.');
        alert('"Do número" precisa ser menor que "Até o número".');        
        return;
    }

    if ((ate - de + 1) < quantidade) {
        alert('Os números informados não válidos! Ajuste os números inseridos.');
        alert('O intervalo de números sorteados precisa ser menor que a quantidade de números a ser sorteada.');
        return;   
    }

    for (let i = 0; i < quantidade; i++) {
        numero = sortearNumero(de, ate);

        while (sorteados.includes(numero)) {
            numero = sortearNumero(de, ate);
        }

        sorteados.push(numero);
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}.</label>`;

    resetStatusBotao();
}

function sortearNumero (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}

function resetStatusBotao() {
    let botaoReiniciar = document.getElementById('btn-reiniciar');

    if (botaoReiniciar.classList.contains('container__botao-desabilitado')) {
        botaoReiniciar.classList.remove('container__botao-desabilitado');
        botaoReiniciar.classList.add('container__botao');
    } else {
        botaoReiniciar.classList.remove('container__botao');
        botaoReiniciar.classList.add('container__botao-desabilitado');
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora.</label>';
    resetStatusBotao();
}
