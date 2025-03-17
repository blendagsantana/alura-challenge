let amigos = [];

function adicionarAmigo() {
    let amigoCompara = document.getElementById("amigo").value.trim();

    if (amigoCompara === "") {
        alert("Por favor, insira um nome.");
    } else {
        amigos.push(amigoCompara);
        document.getElementById("amigo").value = "";
        exibirAmigos();
    }
}

function exibirAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";  // Limpa a lista antes de atualizar

    for (let i = 0; i < amigos.length; i++) {
        let amigoItem = document.createElement("li");
        amigoItem.textContent = amigos[i];
        lista.appendChild(amigoItem);
    }
} 

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Lista de amigos está vazia! Adicione nomes antes de sortear.");
    } else {
        let indice = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[indice];

        let resultado = document.getElementById("resultado");
        resultado.innerHTML = `<li>${amigoSorteado}</li>`;
    }
}
