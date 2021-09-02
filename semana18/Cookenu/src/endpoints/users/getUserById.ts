import { Request, Response } from "express"
import { connection } from "../../connection"
import { getTokenData } from "../../services/authenticator"
import { userTableName } from "../../types"


export default async function getUserById(
    req: Request,
    res: Response
): Promise<void> {
    try {

        const token: string = req.headers.authorization!
        const userId = req.params.id
        getTokenData(token)

        const [user] = await connection(userTableName)
            .where({ id: userId})

        const { id, name, email } = user

        res.send({ id, email, name })
    } catch (error) {
        let statusCode = 400
        if (res.statusCode === 200) {
            res.status(500).send("Internal server error")
        } else {
            res.send({ statusCode })
        }
    }
}