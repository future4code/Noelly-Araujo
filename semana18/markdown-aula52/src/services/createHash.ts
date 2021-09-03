import { genSaltSync, hashSync, compareSync } from "bcryptjs"
import dotenv from "dotenv"

dotenv.config()


export function createHash (
    plainText: string
):string {
    const salt = genSaltSync(Number(process.env.COST))

    return hashSync(plainText, salt)
}

export const compareHash = (
    plainText: string,
    hash: string
):boolean => {
    return compareSync(plainText, hash)
}