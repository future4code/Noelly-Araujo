import express,{ Express, Request, Response} from 'express'
import { selectAllUsers } from '../Query/querys'
import {UserEnum} from "../Types/types"
import { selectUsersByWhere } from '../Query/querys'
import { selectUsersOrderby } from '../Query/querys'


export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
    try {
       const users = await selectAllUsers()
 
       if(!users.length){
          res.statusCode = 404
          throw new Error("No recipes found")
       }
 
       res.status(200).send(users)
       
    } catch (error) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }

//  a) 
export const getUsersByQuery = async(req: Request,res: Response): Promise<void> =>{
   try {
      const by = req.query.by as string || "";
      if(!by){
         throw new Error("Uninformed type")
      }
      if(!req.query[by]){
         throw new Error("Value does not inform")
      }
      if(!(by as UserEnum)){
         throw new Error("Invalid informed type")
      }
      let where = `${by} LIKE "%${req.query[by]}%"`;
      const users = await selectUsersByWhere(where)

      if(!users.length){
         res.statusCode = 404
         throw new Error("No recipes found")
      }

      res.status(200).send(users)
      
   } catch (error) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}



// b)
export const getUsersByParams = async(req: Request,res: Response): Promise<void> =>{
   try {
      const by = req.params.by as string || "";
      const params = req.params.para as string || "";
      if(!by){
         throw new Error("Uninformed type")
      }
      if(!params){
         throw new Error("Value does not inform")
      }
      if(!(by as UserEnum)){
         throw new Error("Invalid informed type")
      }
      let where = `${by} LIKE '%${params}%'`;
      const users = await selectUsersByWhere(where)

       if(!users.length){
          res.statusCode = 404
          throw new Error("No recipes found")
       }

      res.status(200).send(users)
      
   } catch (error) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}


// 4
export const getUsersOrderBy = async(req: Request,res: Response): Promise<void> =>{
   try {
      const orderBy = req.query.order as string || "email";
      const ord =  String(req.query.asc).toUpperCase() === "DESC"? "DESC" : "ASC";

      if(!(orderBy as UserEnum)){
         throw new Error("Invalid informed type")
      }
      let order = `ORDER BY ${orderBy} ${ord}`;
      const users = await selectUsersOrderby(order)

       if(!users.length){
          res.statusCode = 404
          throw new Error("No recipes found")
       }

      res.status(200).send(users)
      
   } catch (error) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}
