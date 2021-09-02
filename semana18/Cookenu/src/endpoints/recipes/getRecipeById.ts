import { Request,Response} from "express"
import { connection } from "../../connection"
import { recipeTableName } from "../../types"

export default async function  getRecipeById(
    req:Request,
    res: Response
): Promise<void> {
    try {
    

        const [recipe] = await connection(recipeTableName)
        .where({id: req.params.id})

        res.send({
            id: recipe.id,
            title: recipe.title,
            description: recipe.description,
            createdAt: recipe.created_at

        })
    } catch (error) {

        let statusCode = 400
        if (res.statusCode === 200) {
            res.status(500).send("Internal server error")
        } else {
            res.send({ statusCode })
        }
    }
}
