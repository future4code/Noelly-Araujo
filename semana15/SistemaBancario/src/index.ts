import express, { Express, Request, Response } from "express"
import cors from "cors"
import { accounts } from "./accounts"


const app = express()

app.use(express.json())
app.use(cors())

app.post("/users/create", (req: Request, res: Response) => {
    try {
        const { name, CPF, dateOfBirthAsString, } = req.body
        
const [day, month, year] = dateOfBirthAsString.split("/")

        const dateOfBirth: Date = new Date("")

        accounts.push({
            name,
            CPF,
            dateOfBirth,
            balance: 0,
            statement: []
        })
    } catch (error) {

    }
})


app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003")
})