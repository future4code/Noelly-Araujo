import {Request, Response} from "express"
import { createUser } from "../data/createUser"
import { generateToken } from "../services/authenticator"
import {hash} from "../services/hashManager"
import {generateId} from "../services/idGenerator"


export const signup = async (
    req: Request,
    res: Response
) => {
    try {
        const {name, email, password, role} = req.body


        if(!name || !email || !password || !role){
            throw new Error("All fields must be filled")
        }

        const id: string = generateId()

        const cypherPassword = await hash(password)


        await createUser({
            id,
            name,
            email,
            password: cypherPassword,
            role
        })

        const token: string = generateToken({
            id,
            role: role
        })

        res.status(201).send({
            token
        })
    } catch (error: any) {
        res.status(400).send(error.message)
    }
}
