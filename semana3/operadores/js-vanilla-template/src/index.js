// Exercícios de interpretação de código

// 1- 

 //declarações de variáveis bool1(true), bool2(false), boll3(não é boll2)
// a) imprimindo a variável resultado (bool1 && bool2 ) --> verificando se verdadeiras como uma é false ele vai retornar(false)

// b) imprimindo a variável resultado (bool1 && boll2 && bol3) --> verificando se são verdadeiras, como não são irão retornar (false)

// c) imprimindo a variável resultado (!resultado (bool1 || boll1)) --> Imprimindo se não for resultados e boll1 e boll1 são iguais, então o retorno será (true)


// e) imprimindo o tipo de resultado

// 2-

// a) Ele imprime o array
// b) O arrau não é identificado e em seguida é imprimido o valor colocado no array
// c) Ele imprimi o tamanho do array
// d) Variavel tem o index = 0 ele imprimi em seguida o index do array
// e) Adiciona mais um número ao array e em seguida imprime o array novamente
// f) Declara o valor do array que é igual a index + 6 e em seguida ele imprime a variável (valor)



// Exercícios de escrita de código

// 1-

const nome = Number (prompt('Qual é o seu nome?'))
const idade = prompt('Qual é a sua idade?')

const resposta = true

const diferenca = 2

console.log('Sua idade é maior do que a do seu melhor amigo?', resposta)
console.log('A diferença é:', diferenca)

// 2-

const insira =  Number(prompt('Digite um número par'))
console.log(insira%2==0)

// Se eu colocar para dividir com barra ele vai dividir números impares também, 
// trazendo resultados como ex: 26.5 de uma divisão de um número ímpar

//porém se eu imprimir com a (variavel%2 ==0), 
// ele vai efetuar somente a divisão de números pares e irá retornar true, pois o número inserido foi um número par.
// d) Se usuário inserir um número ímpar com o (/), o programa ira efetuar a divisão se o
// usuário inserir um número ímpar com (variavel % 2 == 0) ele não irá efetuar a divisão e irá retornar (false)

// 3- 

let listaDeTarefas = []

const tarefa1 = prompt('Liste uma tarefa que você precisa fazer no dia')

listaDeTarefas.push(tarefa1)

const tarefa2 =  prompt('Liste uma segunda tarefa que você precisa realizar no dia')

listaDeTarefas.push(tarefa2)

const tarefa3 = prompt('Liste uma terceira tarefa que você precisa realizar no dia')

listaDeTarefas.push(tarefa3)

console.log(listaDeTarefas)

const tarefaRealizada = prompt('Digite um indice de uma tarefa que você já realizou:  0, 1 ou 2')

listaDeTarefas.splice (tarefaRealizada,1)

console.log(listaDeTarefas)



const email = prompt('Digite seu e-mail')

console.log('O e-mail'+ ' ' + email + ' ' +'foi cadastrado com sucesso.' + ' '+ 'Seja bem-vinda(o),' + ' ' + email +'!')


// Desafios

// a) 

const valorF = 77
console.log(valorF-32)*5/9+273.15

// b)

const valorC = 80
console.log((valorC)*9/5+32)

// c)

const valorC2 = prompt('Digite um valor')
console.log((valorC2)*9/5+32, valorC2+273.15)


// 2-

const quilowatts = 280
const custoHora = 0.05
// a)
const consumoReal = quilowatts*custoHora
const calC = consumoReal * 0.15
// b)
const desconto = consumoReal-calC

console.log('O consumo da residência e de', consumoReal)
console.log('O valor é' +' '+ 'R$'+ consumoReal)

console.log('O valor a ser pago com desconto é de',desconto)

// 3-


// a)
const libraKg = 20
const calcLibra = libraKg * 453.592
const resulTbb = calcLibra.toFixed(2)
console.log('20 lb equivalem a',resulTbb, 'kg')

// b)
const ozKg = 10.5
const calcOz = ozKg / 3.527
const resulToz = calcOz.toFixed(2)
console.log('10.5 oz equivalem a ', resulToz, 'kg')


// c)
const miM = 100
const calcM = miM * 1609
const resulTm = calcM.toFixed(2)
console.log('100 m equivalem a ', resulTm,'m')


// d)
const pesM = 50
const calcP = pesM / 3.281
const resultPm = calcP.toFixed(2)
console.log('50 ft equivalem a', resultPm, 'm')


// e)
const galaoL = 103.5
const calcGl = galaoL * 3.785
const resultGl = calcGl.toFixed(2)
console.log('103.5 g equivalem a', resultGl,'l')


// f)
const xicaraL = 450
const calcX = (450*6) /25
console.log('450 x equivalem a', calcX, 'l')

// g)

const novX = prompt('Digite um valor')
console.log(novX, 'x', 'equivalem a', (novX * 6) /25, 'l')



