

function calcularMedia() {
  const nota1 = parseFloat(document.querySelector("#nota1").value);
  const nota2 = parseFloat(document.querySelector("#nota2").value);
  const nota3 = parseFloat(document.querySelector("#nota3").value);
  const nota4 = parseFloat(document.querySelector("#nota4").value);
  const media = (nota1 + nota2 + nota3 + nota4) / 4
  let mensagem=""
  if (media == 0) { mensagem=`Infelizmente você zerou a prova`; }
  else if (media <= 3) { mensagem=`Caramba, deu ruim, você obteve media; ${media} ! Estude mais e tente novamente!`; }
  else if (media <= 5.9) { mensagem=`Você obteve media; ${media} ! Falta pouco para a média`; }
  else if (media <= 7) { mensagem=`Você está na média com ${media}` }
  else if (media <= 9.9) { mensagem=`"Notão! Sua média é ${media}!"`; }
  else if (media ==10){mensagem= ` "Hoje é seu aniversário? Pq você ta de parabéns!
   10 de média  `}
  document.getElementById("btnsituacao").innerHTML= mensagem
}


/* 1. Se a nota for 0, mostre na tela: "Infelizmente você zerou a prova :( "
    2. Se a nota for entre 0.1 e 3, mostre na tela: 
      "Caramba, deu ruim, você obteve media {nota}! Estude mais e tente novamente!"
    3. Se a nota for entre 3.1 e 5.9, mostre na tela: 
      "Você obteve media {nota}! Falta pouco para a média."
    4. Se a nota for entre 6 e 7, mostre na tela: "Você está na média com {nota}"
    5. Se a nota for entre 7.1 e 9.9, mostre na tela: "Notão! Sua média é {nota}!"
    6. Se a nota for entre 10, mostre na tela: 
      "Hoje é seu aniversário? Pq você ta de parabéns! 10 de média"*/

