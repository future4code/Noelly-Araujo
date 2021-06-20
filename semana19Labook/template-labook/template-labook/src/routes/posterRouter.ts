import express from "express"
import { PostController } from "../controller/PostController"
import { userRouter } from "./userRouter"

const postontroller = new PostController()
export const postRouter = express.Router()

postRouter.post("/", postontroller.createPost)
postRouter.get("/:id", postontroller.getPostById)
