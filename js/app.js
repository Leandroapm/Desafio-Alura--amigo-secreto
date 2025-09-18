let amigos = []; //Criar array

function adicionar() {
    let nome = document.getElementById("nome-amigo").value; //Pegar o nome digitado
    let lista = document.getElementById("lista-amigos"); //Pegar a lista no HTML
    let item = document.createElement("li"); //Criar o elemento lista para adicionar o nome
    if (nome === "") { //Verificar se há nome no input
        alert("Adicione um nome")
    } else {
        item.textContent = nome;
        lista.appendChild(item); //Colocar o item dentro da lista <li></li>
        amigos.push(nome);
        document.getElementById("nome-amigo").value = ""; //Limpar input
    }
}

function sortear() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois amigos para realizar o sorteio");
        return;
    }

    embaralhar(amigos); //Embaralhar o array amigos
    let listaS = document.getElementById("lista-sorteio"); //Pegar a lista sorteada no HTML
    listaS.innerHTML = ""; //Limpar o resultado anterior

    for (let i = 0; i < amigos.length; i++) { //Começar lógica de sortear
        let quemTira = amigos[i];
        let quemFoiTirado = (i === amigos.length - 1) ? amigos[0] : amigos[i + 1];
        let itemS = document.createElement("li"); //Criar o elemento lista para adicionar o nome sorteado
        itemS.textContent = `${quemTira} -> ${quemFoiTirado}`;
        listaS.appendChild(itemS); //Colocar o sorteio dentro da lista <li></li>
    }

}

function embaralhar() { //Código para embaralhar o array amigos
    for (let i = amigos.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [amigos[i], amigos[j]] = [amigos[j], amigos[i]];
    }
}

function reiniciar() {  //Reiniciar sorteio
    document.getElementById("lista-amigos").innerHTML = ""; 
    document.getElementById("lista-sorteio").innerHTML = ""; 
    amigos = [];
}