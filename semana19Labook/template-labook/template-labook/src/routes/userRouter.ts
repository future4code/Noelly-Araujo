import express from "express"
import { UserController } from "../controller/UserController"
import { User } from "../model/user"

export const userRouter = express.Router()
const userController = new UserController()

userRouter.post("/signup", userController.signup)
userRouter.post("/login", userController.login)

