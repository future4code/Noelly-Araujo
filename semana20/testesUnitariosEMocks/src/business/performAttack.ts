import { Characters } from "../models/personagens"
import { validateCharacter } from "./validateCharacter"
//
//
//export const performAttack = (
//    attacker: Characters, defender: Characters
//) => {
//if(!validateCharacter(attacker) || !validateCharacter(defender)) {
//    throw new Error("Invalid character")
//}
//
//if(attacker.strength > defender.defense) {
//    defender.life -= attacker.strength - defender.defense
//}
//}

export const performAttack = (
    attacker: Characters,
    defender: Characters,
    validator: (input: Characters) => boolean
) => {
    if (!validateCharacter(attacker) || !validator(defender)) {
        throw new Error("Invalid character")
    }

    if (attacker.strength > defender.defense) {
        defender.life -= attacker.strength - defender.defense
    }
}