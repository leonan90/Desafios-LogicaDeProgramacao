let adicionados = [];

function adicionar() {
    let amigo = document.getElementById('nome-amigo');
    let listaHTML = document.getElementById('lista-amigos');

    if (amigo.value == '') {
    alert('Adicione um nome.');
    return;
    }

    if (adicionados.includes(amigo.value)) {
    alert('Essa pessoa já está participando.');
    amigo.value = '';
    return;
    }

    adicionados.push(amigo.value);
    listaHTML.textContent = adicionados.join(', ');
    amigo.value = '';
}

function sortear() {

    if (adicionados.length < 4) {
    alert('Adicione pelo menos 4 participantes para um sorteio válido.');
    return;
    }

    embaralhar(adicionados);
    let sorteados = document.getElementById('lista-sorteio');

    for (i = 0; i < adicionados.length; i++) {
        if (i == adicionados.length - 1) {
        sorteados.innerHTML = sorteados.innerHTML + adicionados[i] + '→' + adicionados[0] + '<br>';
        } else {
            sorteados.innerHTML = sorteados.innerHTML + adicionados[i] + '→' + adicionados[i + 1] + '<br>';
        }
    }

    document.querySelector('button[onclick="sortear()"]').disabled = true;
}

function embaralhar(array) {
    // algoritmo de Fisher-Yates
    for (let i = array.length - 1; i > 0; i--) {
    // Sorteia um índice aleatório entre 0 e i
    const j = Math.floor(Math.random() * (i + 1));
    
    // Troca os elementos das posições i e j
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function reiniciar() {
    adicionados = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
    document.querySelector('button[onclick="sortear()"]').disabled = false;
}