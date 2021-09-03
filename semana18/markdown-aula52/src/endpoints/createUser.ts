import { Request, Response } from "express"
import { connection } from "../connection"
import { User, USER_ROLES } from "../types"
import { createHash } from "../services/createHash"
import { generateId } from "../services/idGenerator"
import { generateToken } from "../services/authenticator"

export async function createUser(
    req: Request,
    res: Response
): Promise<void> {
    try {

        const { email, password, role } = req.body

        if (!email || !password || !role) {
            throw new Error(" Os campos 'email', 'password' e 'role' precisam ser preenchidos")
        }

        if (!email.includes("@")) {
            throw new Error("Insira um email válido")
        }

        if (password.length < 6) {
            throw new Error("A senha precisa possuir ao menos 6 caracteres")
        }

        const correctRoles: string = role.toUppercase()
        if (!(correctRoles in USER_ROLES)) {
            throw new Error("O campo role deve ser preenchido com 'ADMIN' ou 'NORMAL'")
        }


        const [user] = await connection("to_do_list_users")
            .where({ email })

        if (user) {
            res.statusCode = 409
            throw new Error("Email já cadastrado")
        }

        const id: string = generateId()

        const newUser: User = {
            id,
            email,
            password: createHash(password),
            role
        }

        await connection("to_do_list_users")
            .insert(newUser)

        const token: string = generateToken({
            id,
            role
        });


        res.status(201).send({  token: "Usuário criado com sucesso!" })
    } catch (error) {
        res.status(400).send({ message: error.sqlMessage || error.message })
    }
}




