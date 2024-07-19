let amigos = [];

function adicionar() {

    //variavel para "pegar" o nome do amigo inserido
    let nomeAmigo = document.getElementById('nome-amigo');

    //caso o usuario não insira nada, impedi-lo que continue o sorteio
    if(nomeAmigo.value == '') {
        alert('Informe o nome do amigo! ');
        return;
    }

    //caso o nome já tenha sido adicionado
    if(amigos.includes(nomeAmigo.value)) {
        alert('Nome já adicionado!');
        nomeAmigo.value = '';
        return;
    }

    //adicionar os nomes a lista de amigos
    let lista = document.getElementById('lista-amigos');
    
    amigos.push(nomeAmigo.value);
    if (lista.textContent == '') {
        lista.textContent = nomeAmigo.value;
    } else {
        lista.textContent = lista.textContent + ', ' + nomeAmigo.value;
    }

    //ao adicionar o nome, a caixa reseta 
    nomeAmigo.value = '';

}

function sortear() {

    //para inserir no minimo 4 nomes no sorteio
    if(amigos.length < 4) {
        alert('Adicione pelo menos 4 amigos! ');
        return;
    }

    //sorteio
    embaralha(amigos);
    let sorteio = document.getElementById('lista-sorteio');
    for(i = 0; i < amigos.length; i++) {

        if(i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i+1] + '<br>';
        } //FECHA IF

    } // FECHA FOR
}

function embaralha(lista) {

    for(let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        //atribuição via destructuring 
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }

}

function reiniciar() {

    //reiniciar o amigo secreto
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';

}
