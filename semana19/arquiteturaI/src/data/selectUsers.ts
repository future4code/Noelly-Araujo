import {connection} from "../connection"
import {user} from "../models/types"


export const selectAllUsers = async (): Promise<user[]> => {
    try {
        const result = await connection('User_Arq')
        .select("*")

        return result
    } catch (error: any) {
        throw new Error(error.sqlMessage || error.message)
    }
} 