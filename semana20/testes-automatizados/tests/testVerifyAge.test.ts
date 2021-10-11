import { verifyAge } from "../src/business/verifyAge";
import { Casino, LOCATION, User } from "../src/models/userCasino";
import { NATIONALITY } from "../src/models/userCasino";

describe("Teting as function verifyAge", () => {


    test("Brazilian passed", () => {

        const brazilian: User = {
            name: "Josisklaiton",
            age: 18,
            nationality: NATIONALITY.BRAZILIAN
        }

        const casino: Casino = {
            name: "Storm",
            location: LOCATION.BRA
        }

        const result = verifyAge(casino, [brazilian])
        expect(result.brazilians.allowed).toEqual(["Josisklaiton"])
    })

    test("American people in casino of Brazil", () => {
        const brazilian: User = {
            name: "Thomas",
            age: 18,
            nationality: NATIONALITY.AMERICAN
        }

        const casino: Casino = {
            name: "reborn",
            location: LOCATION.BRA
        }

        const result = verifyAge(casino, [brazilian])
        expect(result.americans.allowed).toEqual(["Thomas"])

    })

    test("Four users from Brazil and US not passed in casino in the US", () => {
        const brazilian: User = {
            name: "userBR",
            age: 19,
            nationality: NATIONALITY.BRAZILIAN
        }

        const american: User = {
            name: "userUS",
            age: 19,
            nationality: NATIONALITY.AMERICAN
        }

        const casino: Casino = {
            name: "Olulu",
            location: LOCATION.EUA
        }

        const result = verifyAge(casino,
            [
                brazilian,
                brazilian,
                american,
                american,
            ]);

        expect(result.brazilians.unallowed).toEqual(["userBR", "userBR"])
        expect(result.americans.unallowed).toEqual(["userUS", "userUS"])
    })

    test("passing american users in Casino US", () => {
        const brazilian: User = {
            name: "userBR",
            age: 19,
            nationality: NATIONALITY.BRAZILIAN
        }

        const american: User = {
            name: "userUS",
            age: 21,
            nationality: NATIONALITY.AMERICAN
        }

        const casino: Casino = {
            name: "Olulu",
            location: LOCATION.EUA
        }

        const result = verifyAge(casino,
            [
                brazilian,
                brazilian,
                american,
                american,
            ]);

        expect(result.brazilians.unallowed).toEqual(["userBR", "userBR"])
        expect(result.americans.allowed).toEqual(["userUS", "userUS"])
    })
})

