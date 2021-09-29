import { Request, Response } from "express"
import { selectUserByEmail } from "../data/selectUserByEmail"
import { generateToken } from "../services/authenticator"
import { compare } from "../services/hashManager"
import { user } from "../models/types"

export const login = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            throw new Error(`"email" and "password" need to be filled `)
        }

        const user: user = await selectUserByEmail(email)

        if (!user) {
            throw new Error("User not found")
        }

        const passwordIsCorrect: boolean = await compare(password, user.password)

        if (!passwordIsCorrect) {
            throw new Error("Incorrect password")
        }

        const token: string = generateToken({
            id: user.id,
            role: user.role
        })

        res.send({
            token
        })
        
    } catch (error) {
        res.status(400).send(error.message)
    }
}