//a)

type Estatisticas = {
    maior: number,
    menor: number,
    media: number
}

//  as entradas dasfunções são a e b  e as saídas são maior, menor e media
function obterEstatisticas(numeros: number[]):Estatisticas {
    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )
  
    let soma = 0
  
    for (let num of numeros) {
        soma += num
    }
  
    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }
  
    return estatisticas
  }
// b) A de estatisticas, a de soma e a de variaveis de dados

//c)
type AmostraDeDados = {
    array: number[],
    obterEstatisticas: (number: number[]) => Estatisticas

}

