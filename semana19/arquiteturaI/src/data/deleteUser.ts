import { connection } from "../connection";

export const deleteUser = async (id: string): Promise<void> => {
  try {
    await connection('User_Arq').delete().where({ id });
  } catch (error) {
    throw new Error(error.slqMessage || error.message);
  }
};