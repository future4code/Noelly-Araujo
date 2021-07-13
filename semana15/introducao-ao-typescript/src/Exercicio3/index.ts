type Posts = {
    autor: string,
    texto: string
}


const posts = [
    {
        autor: "Alvo Dumbledore",
        texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
        autor: "Severo Snape",
        texto: "Menos 10 pontos para Grifinória!"
    },
    {
        autor: "Hermione Granger",
        texto: "É levi-ô-sa, não levio-sá!"
    },
    {
        autor: "Dobby",
        texto: "Dobby é um elfo livre!"
    },
    {
        autor: "Lord Voldemort",
        texto: "Avada Kedavra!"
    }
]

const astrodeb: Posts = {
    autor: "Astrodev",
    texto: "Sou o astrodev"
}

//b) 


function buscarPostsPorAutor(posts: Posts[], autorInformado: string): Posts[] | [] {
    return posts.filter(
        (post) => {
            return post.autor === autorInformado
        }
    )
}

  // as entradas da função são os posts e autorInformado

