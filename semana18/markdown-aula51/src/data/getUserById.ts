import knex from "knex";
import {connection} from "../connection"
import { userTableName } from "../data/addUser"


export  async function getUserById(id: string): Promise<any> {
    const result = await connection
      .select("*")
      .from(userTableName)
      .where({ id })

    return result[0];
  }
