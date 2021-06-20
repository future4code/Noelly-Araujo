import { Request, Response } from "express"
import { PostBusiness } from "../business/PostBusiness"
import { getPostByIdInputDTO } from "../entities/Post"
import { AuthenticationData } from "../model/user"
import { UserBusiness } from "../business/UserBusiness"
import {Post} from "../entities/Post"

export class PostController {

    createPost = async (req: Request, res: Response) => {
        try {
            let message = "Sucess"

            const token: string = req.headers.authorization as string

            const createPostInputDTO = {
                photo: req.body.photo,
                description: req.body.description,
                type: req.body.type,
                token
            }

            await new PostBusiness().createUser(input)

            res.status(200).send({ message })

            res.send({ message })
        }



    }


    getPostById = async (req: Request, res: Response) => {
        try {
            let message = "Success!"

            const input: getPostByIdInputDTO = {
                id: req.params.id
            }

            const post: Post = await new PostBusiness().getpostById(input)

            res.status(200).send({ message, post })

        } catch (error) {
            let message = error.sqlMessage || error.message
            res.statusCode = 400

            res.send({ message })
        }
    }
}