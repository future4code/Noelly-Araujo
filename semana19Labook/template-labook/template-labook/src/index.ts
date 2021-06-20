
import express, { Express, Request, Response } from "express"
import cors from "cors"
import knex from "knex"
import dotenv from "dotenv"
import * as jwt from "jsonwebtoken"
import * as bcrypt from "bcryptjs"
import { v4 } from "uuid"
import Knex from "knex"
import { userRouter } from "./routes/userRouter"
import { postRouter } from "./routes/posterRouter"


dotenv.config()

const app: Express = express()
app.use(express.json())
app.use(cors())
app.use("/user", userRouter)
app.use("/post", postRouter)


app.get('/posts/:id')


app.listen(3003, () => {
   console.log("Server running on port 3003")
})