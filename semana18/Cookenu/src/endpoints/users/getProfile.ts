import { Request, Response } from "express"
import { connection } from "../../connection"
import { getTokenData } from "../../services/authenticator"
import { userTableName } from "../../types"


export default async function getProfile(
    req: Request,
    res: Response
): Promise<void> {
    try {

        const token: string = req.headers.authorization!

        const tokenData = getTokenData(token)

        if (!tokenData) {
            res.statusCode = 401
            throw new Error("Unauthorized")
        }

        const [user] = await connection(userTableName)
            .where({ id: tokenData?.id })

        if (!user) {
            res.statusCode = 404
            throw new Error("User not found")
        }


        const { id, name, email } = user

        res.send({ id, email, name })
    } catch (error) {

        if (res.statusCode === 200) {
            res.status(500).send("Internal server error")
        } else {
            res.send({ error: `${error}` })

        }
    }
}