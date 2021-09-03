import {Request, Response} from "express"
import {connection} from "../connection"
import { getTokenData } from "../services/authenticator"

export default async function getUser (
    req:Request, 
    res: Response
):Promise<void> {
    try {
     const token = req.headers.authorization
     if(!token){
         throw new Error("Operação não autorizada")
     }   

     const tokenInfo = getTokenData(token)
     if(!tokenInfo){
         throw new Error("É necessário preencher com um token de acesso")
     }

     if(tokenInfo.role !== 'NORMAL'){
         res.statusCode == 403
         throw new Error("Usuário não autorizado")
     }

     const user = await connection
     .select('email', 'role')
     .from('User')
     .where({id: tokenInfo.id});

     res.status(200).send({
         id: tokenInfo.id,
         email: user[0].email,
         role: user[0].role
        })
    } catch (error) {
        res.status(400).send({message: error.message})
    }
}