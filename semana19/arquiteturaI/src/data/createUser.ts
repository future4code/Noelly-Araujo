import { connection } from "../connection";
import { user } from "../models/types"

export const createUser = async (user: user) => {
await connection.insert({
    id: user.id,
    name: user.name,
    email: user.email,
    password: user.password,
    role: user.role
}).into('User_Arq')
}