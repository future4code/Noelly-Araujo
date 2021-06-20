import * as jwt from "jsonwebtoken"
import * as bcrypt from "bcryptjs";

import { UserDatabase } from "../data/UserDatabase"
import { AuthenticationData } from "../model/user"


function generateToken(
   payload: AuthenticationData
): string {
   return jwt.sign(
      payload,
      process.env.JWT_KEY as string,
      {
         expiresIn: process.env.JWT_EXPIRES_IN
      }
   )
}

function getTokenData(
   token: string
): AuthenticationData {
   const result: any = jwt.verify(
      token,
      process.env.JWT_KEY as string
   )

   return result
}

const hash = async (
   plainText: string
): Promise<string> => {
   const rounds = Number(process.env.BCRYPT_COST);
   const salt = await bcrypt.genSalt(rounds);
   return bcrypt.hash(plainText, salt)
}

const compare = async (
   plainText: string, cypherText: string
): Promise<boolean> => {
   return bcrypt.compare(plainText, cypherText)
}