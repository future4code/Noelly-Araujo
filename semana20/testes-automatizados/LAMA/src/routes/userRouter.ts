import express from "express";
import { UserController } from "../controller/UserController"

export const userRouter = express.Router();

const userController = new UserController();

//Foi aqui onde eu parei da última vez(onde um argumento era esperado e não foi obtido)

userRouter.post("/signup", userController.signup);
userRouter.post("/login", userController.login);