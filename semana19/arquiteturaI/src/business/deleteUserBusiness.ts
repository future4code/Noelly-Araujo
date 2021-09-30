import { getTokenData } from "../services/authenticator";
import { deleteUser } from "../data/deleteUser";
import { selectUserById } from "../data/selectUserById";
import { user } from "../models/types";

export const deleteUserBusiness = async (id: string, token: string) => {
  const verifiedToken = getTokenData(token);
  
  console.log("id", id)
  const user: user = await selectUserById(id);
  console.log("user", user);

  if (verifiedToken.role !== "ADMIN") {
    throw new Error("Only admins can delete users.");
  }
  return await deleteUser(id);
};