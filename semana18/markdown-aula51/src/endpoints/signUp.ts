import { Request, Response } from "express"
import { connection } from "../connection"
import {generateToken} from "../services/authenticator"
import { generateId } from "../services/idGenerator"
import { User } from "../types"

export default async function createuser(
    req: Request,
    res: Response
): Promise<void> {
    let errorCode = 400

    try {
        const { email, password } = req.body

        if (!req.body.email || req.body.email.indexOf("@") === -1) {
            throw new Error("Invalid email");
          }
      
          if (!req.body.password || req.body.password.length < 6) {
            throw new Error("Invalid password");
          }

        if (!email || !password) {
            res.statusCode = 422
            throw new Error("Preencha os campos 'email' e 'senha'")
        }

        const [user] = await connection('User')
            .where({ email })

        if (user) {
            res.statusCode = 422
            throw new Error("Email já cadastrado")
        }


        const id: string = generateId()

        const newUser: User = { id, email, password }

        await connection('User')
            .insert(newUser)

        const token: string = generateToken(
            {
                id: newUser.id
            })

        res.status(201).send({ token: "Token gerado pelo jwt"})
    } catch (error) {
        res.status(errorCode).send({message: error.sqlMessage || error.message})
    }
}