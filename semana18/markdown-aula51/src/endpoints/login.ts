import {Request, Response} from "express"
import { connection } from "../connection"
import { User } from "../types"
import generateToken from "../services/authenticator"


export default async function login(
    req: Request,
    res: Response
) {
    const {email, password} = req.body
    try {

        if (!req.body.email || req.body.email.indexOf("@") === -1) {
            throw new Error("Invalid email");
          }
      
        if(!email) {
            throw new Error("O campo email deve ser preenchido corretamente")
        }

        if(!password){
            throw new Error ("Para efetuar o login é necessário o uso de uma senha")
        }

        const queryResult = await connection.raw(`
        SELECT * FROM User
        WHERE email = "${email}"
        `);

        const user = queryResult[0][0]

        if(!user){
            throw new Error ("Usuário não encontrado")
        }

        if(user.password !== password) {
            throw new Error("Credenciais inválidas")
        }

        const token: string = generateToken(
            {
                id: user.id
            }
        )

        res.status(200).send({"token": "Token gerado pelo jwt"})
    } catch (error) {
        res.status(400).send({message: error.sqlMessage || error.message})
    }
}