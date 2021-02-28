/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */



console.log('Bem vindo(a) ao jogo Blackjack!')
let rodarPartida = confirm('Deseja iniciar uma nova partida?')


if (rodarPartida) {

   let carta1Humano = comprarCarta()
   let carta2Humano = comprarCarta()
   let carta1Maquina = comprarCarta()
   let carta2Maquina = comprarCarta()






   let pontuacaoHumano = carta1Humano.valor + carta2Humano.valor
   let pontuacaoMaquina = carta1Maquina.valor + carta2Maquina.valor
  

   let retorno2 = confirm(`Suas cartas são: ${carta1Humano.texto} ${carta2Humano.texto}. A carta revelada da máquina é: ${carta1Maquina.texto}` + '\n' + 'Deseja comprar uma nova carta?')
   let novaCartaHumano1 = comprarCarta()
   let novaCartaHumano = comprarCarta()
   let pontuacaoHumano1 = pontuacaoHumano + novaCartaHumano.valor
   let pontuacaoHumano2 = pontuacaoHumano1 + novaCartaHumano1.valor
   



   if (retorno2 === true) {
      let confirm3 = confirm(`Suas cartas são: ${carta1Humano.texto} ${carta2Humano.texto} ${novaCartaHumano.texto}. A carta revelada da máquina é: ${carta1Maquina.texto}` + '\n' + 'Deseja comprar uma nova carta?')
      if (confirm3 === true && pontuacaoHumano1 > pontuacaoMaquina || pontuacaoMaquina > 21) {
         alert(`Suas cartas são: ${carta1Humano.texto} ${carta2Humano.texto} ${novaCartaHumano.texto} ${novaCartaHumano1.texto} e sua pontuação é ${pontuacaoHumano}. \n As cartas da máquina são: ${carta1Maquina.texto} ${carta2Maquina.texto}. A pontuação da máquina é ${pontuacaoMaquina}. \n O usuário venceu! `)
      } else if (pontuacaoMaquina > pontuacaoHumano2 || pontuacaoHumano2 > 21) {
         alert(`Suas cartas são: ${carta1Humano.texto} ${carta2Humano.texto} ${novaCartaHumano.texto} ${novaCartaHumano1.texto} e sua pontuação é ${pontuacaoHumano}. \n As cartas da máquina são: ${carta1Maquina.texto} ${carta2Maquina.texto}. A pontuação da máquina é ${pontuacaoMaquina}. \n A máquina venceu! `)

      }else if(pontuacaoHumano2 === pontuacaoMaquina){
         console.log('Houve empate!')
      }
   } else {
      console.log('O jogo acabou!')
   }
} else {
   console.log('O jogo acabou!')
}