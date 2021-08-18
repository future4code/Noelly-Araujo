import { Request, Response } from "express"
import { connection } from "../connection"
import { getTokenData } from "../services/authenticator"

export async function deleteUser(
    req: Request,
    res: Response
): Promise<void> {
    try {
        const token = req.headers.authorization
        const id = req.params.id

        if (!token) {
            res.statusCode = 403
            throw new Error("É necessário passar um token para executar esta ação")
        }
        const tokenInfo = getTokenData(token)

        if (!tokenInfo) {
            res.statusCode = 403
            throw new Error("Operação não autorizada")
        }
        if (tokenInfo.role !== 'ADMIN') {
            res.statusCode = 403
            throw new Error("Somente administradores podem executar esta tarefa!")
        }
        if(!id){
            res.statusCode = 401
            throw new Error("Para deletar o usuário é preciso passar o id.")
        }

        await connection("User")
        .delete("User")
        .where({id})

        res.status(200).send({
            message: "Usuário deletado com sucesso!"
        })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
}