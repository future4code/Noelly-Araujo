import { Request, Response } from "express";
import { deleteUserBusiness } from "../business/deleteUserBusiness";


export const deleteUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const token = req.headers.authorization!;
    await deleteUserBusiness(id, token);

    res.status(201).send({
      message: "User deleted!",
    });
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};