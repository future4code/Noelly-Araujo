let nome: string

nome = 'Joana'

// a) Não da para atribuir um numero a uma variável tipada como string, pois ela só aceita strings

//b) 

let meuNumero: number
meuNumero = 99
//Para que a variável aceite strings também, colocamos um | string

//c) 

const Joana = {
    nome: "Joana D",
    idade: 25,
    corFavorita: "vermelho"
}



type pessoa = {
    nome: string,
    idade: number,
    corFavorita: string
}

const vi: pessoa = {
    nome: "Virginia",
    idade: 21,
    corFavorita: "laranja",
}

const tulio: pessoa = {
    nome: "Túlio Vieira",
    idade: 30,
    corFavorita: "Violeta"
}

const aninha: pessoa = {
    nome: "Ana Maria",
    idade: 25,
    corFavorita: "azul-marinho"
}

//d)

enum CORES_DO_ARCO_IRIS {
    VIOLETA = "VIOLETA",
    ANIL = "ANIL",
    AZUL = "AZUL",
    VERDE = "VERDE",
    AMARELO = "AMARELO",
    LARANJA = "LARANJA",
    VERMELHO = "VERMELHO"
}

type pessoaArcoIris = {
    nome: string,
    idade: number,
    corDoArcoIris: CORES_DO_ARCO_IRIS
}

const lidia: pessoaArcoIris = {
    nome: "Lídia Dos Santos",
    idade: 35,
    corDoArcoIris: CORES_DO_ARCO_IRIS.AMARELO
}

const bete: pessoaArcoIris = {
    nome: "Betania Lisboa",
    idade: 26,
    corDoArcoIris: CORES_DO_ARCO_IRIS.ANIL
}

const lidiane: pessoaArcoIris = {
    nome: "Lidia",
    idade: 24,
    corDoArcoIris: CORES_DO_ARCO_IRIS.AZUL
}

const thatha: pessoaArcoIris ={
    nome: "Samantha",
    idade: 32,
    corDoArcoIris: CORES_DO_ARCO_IRIS.LARANJA
}

const carlinhos: pessoaArcoIris = {
    nome: "Carlos Buvier",
    idade: 27,
    corDoArcoIris: CORES_DO_ARCO_IRIS.VERDE
}

const sebastian: pessoaArcoIris = {
    nome: "Sebapstian Donatello",
    idade: 28,
    corDoArcoIris: CORES_DO_ARCO_IRIS.VERMELHO
}

const quercana: pessoaArcoIris = {
    nome: "Quero Cana Brava",
    idade: 57,
    corDoArcoIris: CORES_DO_ARCO_IRIS.VIOLETA
}


