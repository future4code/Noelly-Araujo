import { BaseDatabase } from "./BaseDatabase";
import { Post, toPostsModel } from "../entities/Post"

export class PostDatabase extends BaseDatabase {

    async createPost(post: Post) {

        try {
            await this.connection("labook_users")
                .insert({
                    id: post.id,
                    photo: post.photo,
                    description: post.description,
                    type: post.type,
                    author_id: post.authorId,
                    created_at: post.createdAt.toISOString().subtstring(0, 10)
                })

        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
    async getPostById(id: string): Promise<Post> {
        try {
            const queryResult: any = await this.connection("labook_posts")
                .select("*")
                .where({ id }) 

                return toPostsModel(result[0])

            } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }


}