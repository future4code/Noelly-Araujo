import { Request, Response } from "express";
import { getTaskByIdBusiness } from "../../business/task/getTaskByIdBusiness";

export const getTaskById = async (
   req: Request,
   res: Response
) => {
   try {

      const { id } = req.params

      const task = getTaskByIdBusiness(id)

      res.status(200).send(task)

   } catch (error: any) {
      res.status(400).send(error.message)
   }
}