import { Characters} from "../models/personagens";

export const validateCharacter = (
input: Characters
): boolean => {

    if(!input.name || input.life === undefined || input. strength === undefined|| input.defense === undefined){
        return false
    }

    if(input.life <= 0 || input.strength <= 0 || input.defense <= 0) {
        return false
    }

    return true
}