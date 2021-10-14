import { Characters } from "../src/models/personagens";
import { performAttack } from "../src/business/performAttack";

test("Perform Attack", () => {
    const validateMock = jest.fn(() => {
        return true
    })

    const attacker: Characters = {
        name: "Scorpion",
        life: 1500,
        defense: 200,
        strength: 600,
    }

    const defender: Characters = {
        name: "Kitana",
        life: 1500,
        defense: 400,
        strength: 800,
    }

    performAttack(attacker, defender, validateMock as any)

    expect(defender.life).toEqual(1300)
    expect(validateMock).toHaveBeenCalled()
    expect(validateMock).toHaveBeenCalledTimes(2)
    expect(validateMock).toHaveReturnedTimes(2)

})

test("Quando o personagem vem com alguma informação inválida", () => {
    expect.assertions(4)
    const validatorMock = jest.fn(() => {
        return false;
    })

    const attacker: Characters = {
        name: "",
        life: 1500,
        defense: 200,
        strength: 600,
    }

    const defender : Characters = {
        name: "Kitana",
        life: 1500,
        defense: 400,
        strength: 800,
    }

    try {
        performAttack(attacker, defender, validatorMock as any)
    } catch (error) {
        expect(error.message).toBe("Invalid character");
        expect(validatorMock).toHaveBeenCalled();
        expect(validatorMock).toHaveBeenCalledTimes(1);
        expect(validatorMock).toHaveReturnedTimes(1);
    }
})
