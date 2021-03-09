// Exercício 1 -

// a) vai ser impresso a variável* 5, no primeiro console.log 5*2, vai imorimir 10 e no segundo console.log vai imprimir 50 já que 5*10 é 50

// b) não iria aparecer nada no console

// Exercício 2-
// a) As sídas vão ser os dois primeiros nomes da lista, pois o indice é menor que 2. Já que i++(significa index +1)

// b) Ele iria imprimir (Amanda, Caio)

// Exercício 3- 

// a)  ele faz a variável receber um array, o arrayFinal está vazio pois irá receber os valores através do
// .push. Em seguida ele percorre a array e vem com um (se o valor recebido for divisivel por 2 e sem resto). Depois ele multiplica a o resultado da divisao por ele mesmo e guarda no array

// Exercício 4- 

// a) 

const nome = 'Noelly'
const age = 21
const city = 'Arapiraca'
const studentYoN = 'sou'

function imprimeDados() {
    console.log(`Eu sou ${nome}, tenho ${age} anos, moro em ${city} e ${studentYoN} estudante.`)
}


imprimeDados()

// b) 

function imprimeInfo(nome, age, city, studentYoN) {
    if (studentYoN === true) {
        studentYoN = 'sou estudante'
    } else {
        studentYoN = 'não sou estudante'
    }
    return (`Eu sou ${nome}, tenho ${age} anos, moro em ${city} e ${studentYoN} estudante.`)
}

console.log(imprimeInfo('Noelly', 21, 'Arapiraca', true))


// Exercício 5-

function somaDoisNumeros(number1, number2) {
    const soma = number1 + number2
    return (soma)
}

console.log('O resultado da soma é:', somaDoisNumeros(21, 27))


// b)

function returnBoo(num1, num2) {
    return num1 > num2


}
console.log('O primeiro número é maior? ', returnBoo(1065, 7065))

// c)

function repeatMsg(mensagem) {
    for (let i = 0; i < 10; i++)
        console.log(mensagem)
}

repeatMsg('O Obama vende')

// Exercício 6 

//a) 

const list = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]



function recebeECal(listNumeros) {
    return listNumeros.length
}

console.log(recebeECal(list))

// b)

function verificaDivisivel(numero) {
    let numPar
    if (numero % 2 === 0) {
        numPar = true
    } else {
        numPar = false
    }
    return numPar
}
console.log('Número é par:', verificaDivisivel(20))

// c)

function verificaQtdNumerosPares(listNumeros) {
    let paresNum = []
    for (const numero of listNumeros) {
        if (numero % 2 === 0) {
            paresNum.push(numero)
        }
    }
    return paresNum.length
}

console.log('Quantidade de números pares:', verificaQtdNumerosPares(list))

// d)

function verificaQtdNumerosParesTwo(listNumeros) {
    let paresNum = []
    for (const numero of listNumeros) {
        if (verificaDivisivel(numero)) {
            paresNum.push(numero)
        }
    }
    return paresNum.length
}
console.log('Quantidade de números pares:', verificaQtdNumerosParesTwo(list))


// Desafios 

// 1- 

const recebeP = (para1) => {
    console.log('O parâmetro recebido da função é:', para1)
}

recebeP(45)

// 2-

const recebeP2 = (para11, para12) => {
    const somaVal = para11 + para12
    recebeP(somaVal)
}
recebeP2(8, 14)


//  Desafio 2- 

// a)


const list2 = [0, 8, 23, 16, 10, 15, 41, 12, 13]

function multiplicaPar(listNumeros) {
    const recebeNovoList = []
    for (const numero of listNumeros) {
        if (numero % 2 === 0) {
            recebeNovoList.push(numero * 2)
        }
    }
    return recebeNovoList
}

console.log('Pares multiplicados:', multiplicaPar(list2))

// b)
function returnNumBigger(list2) {
    let biggerNumber = [0]
    for (let i = 0; i < list2.length; i++) {
        if (list2[i] > biggerNumber) {
            biggerNumber = list2[i]
        }
    }
    return biggerNumber
}
console.log('O maior número é:', returnNumBigger(list2))

// c)

function returnIndexBiggerNumber(list2) {
    let walkingList
    let biggerNumber2 = list2[0]
    for (let i = 0; i < list2.length; i++) {
        if (list2[i] > biggerNumber2) {
            biggerNumber2 = list2[i]
            walkingList = i
        }
    }
    return {
        biggerNumber2,
        walkingList
    }
}

console.log(returnIndexBiggerNumber(list2))

// d)

function invertList(list2) {
    let listInverter = []
    for (let i = list2.length - 1; i >= 0; i--) {
        listInverter.push (list2[i])
    }
    return listInverter
}
console.log('Array invertido:', invertList(list2))
