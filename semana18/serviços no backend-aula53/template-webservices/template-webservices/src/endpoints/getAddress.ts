import axios from "axios"
import { address } from "../types"



export default async function getAddress(
    CEP: string
): Promise <address | null>{
    try {
        const detailCep = await axios.get(`https://viacep.com.br/ws/${CEP}/json/`)
        if(detailCep.data.erro){
            return null
        }else {
            const address_detail: address = {
                street: detailCep.data.logradouro,
                neighborhood: detailCep.data.bairro,
                city: detailCep.data.localidade,
                state: detailCep.data.uf
            }
            return address_detail
        }
    } catch (error) {
        return null
    }
}