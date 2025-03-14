//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos=[];
function adicionarAmigos(){
  let amigoCompara=document.getElementById("amigo").value;
  if (amigoCompara===""){
    console.log("Por favor, insira um nome.")}
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
  
