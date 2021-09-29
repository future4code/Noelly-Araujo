import {Request, Response} from "express"
import {validateToken} from "./validateToken"
import { selectAllUsers } from "../data/selectUsers"

export const getAllUsers = async (
    req: Request,
    res: Response
) => {
    try {
        const token = req.headers.authorization!

        if(!token) {
            throw new Error("Token not send")
        }
        if(!validateToken(token)) {
            throw new Error("Token invalid")
        }

        const users = await selectAllUsers()

        res.send(users).status(200)
    } catch (error) {
        res.send({message: error.message}).status(error.status)
    }
}