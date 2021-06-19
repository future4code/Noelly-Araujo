import express from "express"
import { userRouter } from "./userRouter"

export const postRouter = express.Router()

postRouter.post("/")
postRouter.get("/:id")