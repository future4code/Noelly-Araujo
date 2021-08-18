### 1

**a) Até agora considero bom usar as strings, porque ele aceita bem letras e números, acredito que fique bem mais fácil de utilizá-lo assim.

**b) import { v4 } from "uuid";

export function generateId(): string {
    return v4();
  }


## 2 

**a) é criada uma variável para armazenar o nome da tabela, em seguida uma constante para guardar o processo de conexão com o banco, depois é criada uma função asyncrona para inserir dados na tabela. 

**b) CREATE TABLE User (
    id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

**c) import knex from "knex";


### 3

**a) Está informando que que a JTW_KEY vai receber uma string/ é uma string

**b) import * as jwt from "jsonwebtoken"
import { AuthenticationData } from "../types";


const expiresIn = "1min"

const generateToken = (input: AuthenticationData): string => {
  const token = jwt.sign(
    {
      id: input.id,
    },
    process.env.JWT_KEY as string,
    {
      expiresIn
    }
  );
  return token;
}

export default generateToken

### 4 

** a) b) c)  

import { Request, Response } from "express"
import { connection } from "../connection"
import generateToken from "../services/authenticator"
import { generateId } from "../services/idGenerator"
import { User } from "../types"

export default async function createuser(
    req: Request,
    res: Response
): Promise<void> {
    let errorCode = 400

    try {
        const { email, password } = req.body

        if (!req.body.email || req.body.email.indexOf("@") === -1) {
            throw new Error("Invalid email");
          }
      
          if (!req.body.password || req.body.password.length < 6) {
            throw new Error("Invalid password");
          }

        if (!email || !password) {
            res.statusCode = 422
            throw new Error("Preencha os campos 'email' e 'senha'")
        }

        const [user] = await connection('User')
            .where({ email })

        if (user) {
            res.statusCode = 422
            throw new Error("Email já cadastrado")
        }


        const id: string = generateId()

        const newUser: User = { id, email, password }

        await connection('User')
            .insert(newUser)

        const token: string = generateToken(
            {
                id: newUser.id
            })

        res.status(201).send({ token: "Token gerado pelo jwt"})
    } catch (error) {
        res.status(errorCode).send({message: error.sqlMessage || error.message})
    }
}

### 5
** a) import { connection } from "../connection"
import { userTableName } from "../data/addUser"


export default async function getUserByEmail (email: string): Promise<any>  {
    const result = await connection
      .select("*")
      .from(userTableName)
      .where({ email });
 
    return result[0];
   }


   ## 6 

   ## a) b) import {Request, Response} from "express"
import { connection } from "../connection"
import { User } from "../types"
import generateToken from "../services/authenticator"


export default async function login(
    req: Request,
    res: Response
) {
    const {email, password} = req.body
    try {

        if (!req.body.email || req.body.email.indexOf("@") === -1) {
            throw new Error("Invalid email");
          }
      
        if(!email) {
            throw new Error("O campo email deve ser preenchido corretamente")
        }

        if(!password){
            throw new Error ("Para efetuar o login é necessário o uso de uma senha")
        }

        const queryResult = await connection.raw(`
        SELECT * FROM User
        WHERE email = "${email}"
        `);

        const user = queryResult[0][0]

        if(!user){
            throw new Error ("Usuário não encontrado")
        }

        if(user.password !== password) {
            throw new Error("Credenciais inválidas")
        }

        const token: string = generateToken(
            {
                id: user.id
            }
        )

        res.status(200).send({"token": "Token gerado pelo jwt"})
    } catch (error) {
        res.status(400).send({message: error.sqlMessage || error.message})
    }
}

## 7
**a) para que ele indique que ele pode receber qualquer coisa, seja string ou number 

**b) 
export function getTokenData(token: string): AuthenticationData {

  const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
  const result = {
    id: payload.id,
  };
  return result;

}

### 8

**a) 
export  async function getUserById(id: string): Promise<any> {
    const result = await connection
      .select("*")
      .from(userTableName)
      .where({ id })

    return result[0];
  }


**b) 
export async function getUserInformationById (req:Request, res:Response):Promise<void>{
    try{
        const token = req.headers.authorization
        if(!token){
            throw new Error('Não autorizado')
        }
        const tokenInfo = getTokenData(token)
        if(!tokenInfo){
            throw new Error('Não autorizado')
        }
        const user = await connection.select('email').from('User').where({id:tokenInfo.id})
        res.status(200).send({
            id: tokenInfo.id,
            email: user[0].email
        })
    }catch(error){
        res.status(400).send({
            message: error.message
        })
    }
}






