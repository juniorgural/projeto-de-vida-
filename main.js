const botoes = document.querySelectorAll(".botao");
const botoes = document.querySelectorAll(".aba conteudo");

for (let i = 0; i<botoes.length; j++){
botoes[i].onclick = fuction () {

  for (let j = 0; j < botoes.length;){
    botoes[j].classList.remove("ativo"); 
    textos[j].classList.remove("ativo"); 
  }

   botoes[i].classList.add("ativo")
   textos[j].classList.remove("ativo"); 
}
}


  