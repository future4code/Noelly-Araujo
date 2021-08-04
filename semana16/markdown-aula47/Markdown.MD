## Exercício 1

** a) 
A resposta do raw vem com mais dados do que pedimos em vários arrays

**b) 
const searchActorByName = async (name:string): Promise<any> => {
    const result = await connection.raw(`
    SELECT * FROM Actor WHERE  name = "${name}"
    `);
    return result
}


**c)
const countActorsGender = async (gender: string): Promise<any> =. {
    const result = await connection.raw(`
    SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
    `);

    const count = result [0][0].count
    retrn count
}


## 2)

**a)
const updateActor = async (id: string, salary: number):Promise<any> => {
    await connection("Actor")
    .update({
        salary: salary,
    })
    .where("id", id)
}

**b)

const deleteActor = async  (id: string):Promise<void> => {
await connection("Actor")
.delete()
where("id", id)
}

**c) 
const avgSalary = async (gender: string):Promise<any> => {
    const result = await connection("Actor")
    .where({gender})

    return result [0]  average
}

### 3 

**a)
app.get("/actor/:id", async (req:request, res:Response)=> {
    try{
        const id = req.params.id
    const actor = await getActorById(id)

    res.status(200).send(actor)
    }catch(error){
        res.status(400).send({
            message: error.message
        })
    }
})

**b)

app.get("/actor", async (req:Request, res:Response)=>{
    try{
        const count await countActors(req.query.gender as string)

        res.status(200).send({
            quantiy: count
        })
    }catch(error){
        res.status(400).send({
            message: error.message
        })
    }
})

### 4 

**a) 
app.post("/actor", async (req:Request, res:Response)=>{
    try{
        await updateSalary(req.body.salary)

        res.status(200).send({
            message: "Sucess"
        })
    }catch(error){
        res.status(400).send({
            message: error.message
        })
    }
})

**b)

app.delete("/actor/:id", async (req:request, res:Response) => {
    try{
        await deleteActor(req.params.id)

        
        }catch(error){
            res.status(400).send({
                message: error.message
            })
        }
    }
})

### segunda parte 

#### 5 

**a)

const createMovie = async(
    id: string,
    title: string,
    synopsis: string,
    releaseDate: Date,
    playingLimitDate: Date 
)=> {
    await connection 
    .insert({
        id: id,
        title: title,
        synopsis: synopsis,
        release_date: releaseDate,
        playing_limit_date: playingLimitDate
    })
    .into("Movie")
}

app.post("/movie", async (req:Request, res:Response)=>{
    try{
        await createMovie(
            req.body.id,
            req.boody.title,
            req.body.synopsis,
            req.body.releaseDate,
            req.body.playingLimitDate
        )

        res.status(200).send({
            message: "Sucess"
        })
    }catch(error){
        res.status(400).send({
            message: error.message
        })
    }
})

### 6 

***a)
const getAllMovies = async ():Promise<any> => {
    const result = await connection.raw(`
    SELECT * FROM Movie LIMIT 15
    `)
    return result
}


app.post("/movie/:id", async (req:Request, res:Response) => {
    try{
        const movies = getAllMovies()


        res.status(200).send({
            movies: movies
        })
    }catch(error){
        res.status(400).send({
            message: error.message
        })
    }
})


### 7 
 
 ** a)
 app.get("/movie/search", async (req:Request, res:Response)=>{
     try{
         const movies = searchMovie(req.query.query as string)

         res.status(200).send({
             movies: movies
         })
     }catch(error){
         res.status(400).send{
             message: error.message
         }
     }
 })