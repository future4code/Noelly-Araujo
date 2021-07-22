// a)  Para acessar os parâmetros passados na linha de comando do node se usa o "process.argv + a posição do argumento entre[]"

// b)

const nome = process.argv[2]
const idade = Number(process.argv[3])
const novaIdade = idade + 7

if(!nome && !idade){
    console.log("Esses espaços precisam ser preenchidos!")
}else{
    console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${novaIdade}`)
}






