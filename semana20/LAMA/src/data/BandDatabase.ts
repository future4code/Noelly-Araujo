import { Band } from "../model/Band";
import { BaseDatabase } from "./BaseDatabase";
import { NotFoundError } from "../error/NotFoundError"

export class BandDatabase extends BaseDatabase {


    private static TABLE_NAME = "Bands_list"

    public async createBand(band: Band): Promise<void> {
        try {
            await this.getConnection()
                .insert({
                    id: band.getId(),
                    name: band.getName(),
                    music_genre: band.getMainGenre(),
                    responsible: band.getResponsible()
                })
                .into(BandDatabase.TABLE_NAME)
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }


    public async getBandByIdOrNameOrFail(input: string): Promise<Band> {
        const band = await this.getConnection()
            .select("*")
            .from(BandDatabase.TABLE_NAME)
            .where({ id: input })
            .orWhere({ name: input })

        if (!band[0]) {
            throw new NotFoundError(`Unable to found with input: ${input}`)
        }
     

        return Band.toBand(band[0])!
    }
}