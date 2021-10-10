import { verify } from "crypto";
import { verifyAge } from "../src/business/verifyAge";
import { Casino, LOCATION, User } from "../src/models/userCasino";
import { NATIONALITY } from "../src/models/userCasino";


describe("Verify size of array Users", () => {


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
})