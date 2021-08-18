import * as jwt from "jsonwebtoken"
import dotenv from "dotenv"
import { AuthenticationData } from "../types"

dotenv.config()

export function generateToken(
    input: AuthenticationData
): string {

    const token = jwt.sign(
        {
            id: input.id,
            role: input.role,
        },
        process.env.JWT_KEY as string,
        {
            expiresIn: "1y"
        }
    )
    return token
}

export function getTokenData(token: string): AuthenticationData | null {

    try {
        const { id, role } = jwt.verify(
            token,
            process.env.JWT_KEY!
        ) as AuthenticationData

        return { id, role }
    } catch (error) {
        return null
    }
}


