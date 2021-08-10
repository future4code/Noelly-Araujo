import express, { Express, Request, Response } from "express"
import { getAllUsers, getUsersByParams, getUsersOrderBy } from "../Endpoints/user"

const route = express.Router()

route.get("/all", async (req: Request, res: Response) => {
    try {
        const user = await getAllUsers(req, res)
        res.status(200)
            .send({ users: user })
    } catch (error) {
        res.status(400)
            .send({ message: "Internal server error" })
    }
})

route.get("/byquery", async (req: Request, res: Response) => {
    try {
        const user = await getUserByQuery(req, res)

        res.status(200)
            .send({ users: user })
    } catch (error) {
        res.status(400).send({ message: error.sqlMessage || error.message })
    }
})

route.get("byParams/:by/:params", async (req: Request, res: Response) => {
    try {

        const user = await getUsersByParams(req, res)


        res.status(200).send({ users: user })
    } catch (error) {
        res.status(400).send({ message: error.sqlMessage || error.message })
    }
})

route.get("/orderBy", async (req: Request, res: Response) => {
    try {


        const user = await getUsersOrderBy(req, res)

        res.status(200).send({ users: user })
    } catch (error) {
        res.status(400).send({ message: error.sqlMessage || error.message })
    }
})



export {route as userRoute}

function getUserByQuery(req: express.Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>, res: express.Response<any, Record<string, any>>) {
    throw new Error("Function not implemented.")
}

