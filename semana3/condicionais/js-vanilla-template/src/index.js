// Exercícios aula 12

// 1- 

// O código pede para digitar um número que ele deseja testar e em seguida ele converte a resposta em Number
//e se o número que ele digitou for divisível por dois e o restante for igual a zero
// ele vai dizer que o número passou no teste, senão o número não irá passar no teste.

// 2-

// a) O código acima serve para mostrar os preços das frutas escolhidas pelo usuário

// b) 2.25

// c)  eComo não é um caso de comparação o programa vai continuar sendo executado.

// 3-
// a) declarando uma variável constante que converte o que o prompt recebe em number

// b) Se eu digitei 10, como 10 é maior que 0 a mensagem que vai aparecer é a de que o número passou no teste.
// se for -10 como não foi definido algo para este acontecimento, o código vai dar algum erro.

// c) Haverá um erro pois o else não foi definido. 
// a variável mensagem foi declarada dentro do escopo e se encontra fora dele também. 


// 4-
let idadeUsuario12 = Number(prompt('Digite sua idade aqui'))

if (idadeUsuario12 >= 18) {
    console.log('Você pode dirigir')
} else {
    console.log('Você não pode dirigir')
}

// 5-
let turno12 = prompt('Em qual turno você estuda?', '\n', 'Se você estuda pela manhã, digite "M", tarde, digite "V"', '\n', 'ou noite, digite "N"')


if (turno12 === 'M') {
    console.log('Bom dia!')
} else if (turno12 === 'V') {
    console.log('Boa tarde!')
} else if (turno12 === 'N') {
    console.log('Boa noite!')
} else {
    console.log('Verifique se você inseriu seu turno corretamente para que a mensagem possa ser exibida')
}

// 6- 
let turnoCurso = prompt('Em qual turno você estuda?', '\n', 'Se você estuda pela manhã, digite "M", tarde, digite "V"', '\n', 'ou noite, digite "N"')
switch (turnoCurso) {

    case 'M':
        console.log('Bom dia!')
        break
    case 'V':
        console.log('Boa tarde!')
        break
    case 'N':
        console.log('Boa noite')
        break
    default:
        console.log('Verifique se você inseriu seu turno corretamente para que a mensagem possa ser exibida')


}


let filmes = prompt('Qual o genêro de filme vamos assistir')

// Desafio 1
let precoFilme = Number(prompt('Qual é o valor do ingresso'))

let snack = prompt('Qual snack deseja comprar?')

if (filmes === 'fantasia' && precoFilme < 15) {
    console.log('Bom filme!', 'com', snack)
} else {
    console.log('Escolha outro filme.')
}

// Exercícios aula 13


// Exercício 01 

// ele vai contar executar o código até dar 5

// Exercicio 02

// a) Ele vai passar pelos números maiores que 18

//b) Sim, só o for of já seria o suficiente. 

//const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
//for (let numero of lista) {
//  
//        console.log(numero)
//    
//}

// Exercício 3

//a)
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]


for (let numero of array) {
    console.log(numero)
}

//b) 

for (let numero of array) {
    console.log(numero / 10)
}

//c) 

let novoArray = []

for (let numero of array) {
    if (numero % 2 === 0) {
        novoArray.push(numero);
    }
}

console.log(novoArray)


//d)

for (let i = 0; i < array.length; i++) {
    console.log("O elemento do  índex é:", i, "é", array[i])
}


//e) 
let valorMaximo = array[0]

let valorMinimo = array[0]


for (let i = 1; i < array.length; i++) {
    if (valorMaximo < array[i]) {
        valorMaximo = array[i]
    } else if (valorMinimo > array[i]) {
        valorMinimo = array[i]
    }
}

console.log("O maior número é:", valorMaximo, "e o menor número é:", valorMinimo)

//Desafios 

//Desafio 1

let numberPlayer1 = Number(prompt("Escolha um número"))

while (isNaN(numero)) {
    numero = Number(prompt("Escolha um número"))
}

let chute

for (let tentativas = 1; numero != chute; tentativas++) {
    chute = Number(prompt("Tente adivinhar:"))
    console.log("O número chutado foi", chute)

    if (numero === chute) {
        console.log("Acertou!")
        if (tentativas === 1) {
            console.log("Você acertou de primeira, parabéns!!")
        } else {
            console.log("O número de tentativas foi", tentativas)
        }
    } else if (numero > chute) {
        console.log("Xii muito longe, é muito maior")
    } else if (numero > chute) {
        console.log("Muito abaixo, é maior")
    } else {
        console.log("Errou, tente adicionar outro número")
    }
}

// Desafio 2

// foi regular e eu poderia ter diminuido a quantidade de ifs