import { createPostInputDTO, getPostByIdInputDTO } from "../entities/Post";
import { TokenManager } from "../services/TokenManager"
import { AuthenticationData } from "../entities/User"
import { IdGenerator } from "../services/idGenerator";
import { Post } from "../entities/Post"
import { PostDatabase } from "../data/PostDatabase";

export class PostBusiness {

    async createUser(input: createPostInputDTO) {
        try {
            const tokenManager = new TokenManager()
            if (!input.token) {
                throw new Error("A jwt must to be  provided")
            }

            const tokenData: AuthenticationData = tokenManager.getTokenData(input.token)

            const idGenerator = new IdGenerator()
            const id: string = idGenerator.generateId()

            const post: Post = {
                id,
                AauthorId: tokenData.id,
                createdAt: new Date(),
                description: input.description,
                photo: input.photo,
                type: input.type
            }

            await new PostDatabase().createPost(post)
        } catch (error) {
            throw new Error(error.message)
        }
    }

    async getpostById(input: getPostByIdInputDTO) {
        try {


            const post: Post = await new PostDatabase().getPostById(input.id)

            if (!post) {
                throw new Error("Post not found")
            }

            


        } catch (error) {
            throw new Error(error.message)
        }
    }

}