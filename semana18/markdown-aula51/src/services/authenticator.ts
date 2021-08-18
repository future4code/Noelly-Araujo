import * as jwt from "jsonwebtoken"
import { AuthenticationData } from "../types";


const expiresIn = "1min"

export function  generateToken (input: AuthenticationData): string {
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



export function getTokenData(token: string): AuthenticationData {

  const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
  const result = {
    id: payload.id,
  };
  return result;

}