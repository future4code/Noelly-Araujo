
export enum POST_TYPES {
    NNORMAL = "Normal",
    EVENT = "event"
}

export type Post = {
    id: string,
    photo: string,
    description: string,
    type: POST_TYPES,
    createdAt: Date,
    authorId: string
}


export interface createPostInputDTO {
    photo: string,
    description: string,
    type: POST_TYPES,
    token: string
}

export interface getPostByIdInputDTO {
    id: string
}

export function toPostsModel(obj: any): Post{
    return obj &&  {
        id: obj.id,
        photo: obj.photo,
        description:obj.description,
        type:obj.type,
        createdAt:obj.created_at,
        authorId: obj.author_id 
    }
}