//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos=[];
function adicionarAmigo(){
  let amigoCompara=document.getElementById("amigo").value;
  if (amigoCompara===""){
    alert("Por favor, insira um nome.")}
    else{ amigos.push(amigoCompara)
    document.getElementById("amigo").value = ""}
  exibirAmigos();
}
function exibirAmigos(){
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML="";
  for (let i = 0; i < amigos.length; i++) {
        let amigoItem = document.createElement("li");
        amigoItem.textContent = amigos[i];
        lista.appendChild(amigoItem);
  }
}
  
function sortearAmigo(){
  if (amigos.length===0){
    alert("Lista Inválida")}
  else {
    let indice= Math.floor(Math.random() * (amigos.length));
    let amigoSorteado=amigos[indice];
    let resultado=document.getElementById("resultado");
    resultado.innerHTML = `<li>${amigoSorteado}</li>`;
  }
}
