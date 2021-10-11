import { verify } from "crypto";
import { verifyAge } from "../src/business/verifyAge";
import { Casino, LOCATION, User } from "../src/models/userCasino";
import { NATIONALITY } from "../src/models/userCasino";


describe("Verify size of array Users", () => {

    // a)
    test("a brazilian allowed", () => {
        const brazilian: User = {
            name: "Astrodev",
            age: 19,
            nationality: NATIONALITY.BRAZILIAN
        }

        const casino: Casino = {
            name: "El Paso",
            location: LOCATION.BRA
        }

        const result = verifyAge(casino, [brazilian])
        expect(result.brazilians.allowed.length).toBeGreaterThan(0)
        expect(result.brazilians.allowed.length).toBeLessThan(2)
    })

    // b)

    test("b american allowed", () => {
        const brazilian: User = {
            name: "Astrodev",
            age: 18,
            nationality: NATIONALITY.AMERICAN
        }

        const casino: Casino = {
            name: "Before and after",
            location: LOCATION.BRA
        }

        const result = verifyAge(casino, [brazilian])
        expect(result.americans.unallowed.length).toBe(0)
    })

    // c)

    test("Nobody get in", () => {
        const brazilian: User = {
            name: "AstrodevBR",
            age: 19,
            nationality: NATIONALITY.BRAZILIAN
        }

        const american: User = {
            name: "AstrodevUS",
            age: 19,
            nationality: NATIONALITY.AMERICAN
        }

        const casino: Casino = {
            name: "El Paso",
            location: LOCATION.EUA
        }

        const result = verifyAge(casino,
            [
                brazilian,
                brazilian,
                american,
                american
            ])

        expect(result.brazilians.unallowed).toContain("AstrodevBR")
        expect(result.americans.unallowed).toContain("AstrodevUS")
    })


    // d) 

    test("2  american alllowed and 2 brazilian unallowed", () => {
        const brazilian: User = {
            name: "AstrodevBR",
            age: 19,
            nationality: NATIONALITY.BRAZILIAN
        }

        const american: User = {
            name: "AstrodevUS",
            age: 21,
            nationality: NATIONALITY.AMERICAN
        }

        const casino: Casino = {
            name: "Clouds",
            location: LOCATION.EUA
        }

        const result = verifyAge(casino, [
            brazilian,
            brazilian,
            american,
            american
        ])

        expect(result.brazilians.unallowed.length).toBeGreaterThan(1)
        expect(result.americans.unallowed.length).toBeLessThan(1)
        expect(result.americans.allowed.length).toBe(2)
    })

  

})