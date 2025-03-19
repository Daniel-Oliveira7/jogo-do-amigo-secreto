let amigos = [];

function adicionarAmigo() {
    let inputAmigo = document.getElementById('amigo'); 
    let nomeAmigo = inputAmigo.value.trim(); 

    if (!nomeAmigo) {
        alert('Digite o nome do amigo.');
        return;
    }

    if (amigos.includes(nomeAmigo)) {
        alert('Este nome já foi adicionado!');
        return;
    }

    amigos.push(nomeAmigo);
    inputAmigo.value = '';
    inputAmigo.focus();
    atualizarLista();
}

function atualizarLista() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement('li');
        item.textContent = amigos[i];

        // Botão para remover amigo
        let botaoRemover = document.createElement('button');
        botaoRemover.textContent = "❌";
        botaoRemover.style.marginLeft = "10px";
        botaoRemover.onclick = () => {
            amigos.splice(i, 1);
            atualizarLista();
        };

        item.appendChild(botaoRemover);
        listaAmigos.appendChild(item);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Adicione pelo menos um amigo antes de sortear.');
        return;
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>🎉 Sorteando... 🎉</li>`;

    setTimeout(() => {
        let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
        resultado.innerHTML = `<li>🎉 O amigo sorteado é: <strong>${sorteado}</strong> 🎉</li>`;
    }, 2000);
}

function limparLista() {
    amigos = [];
    atualizarLista();
}
