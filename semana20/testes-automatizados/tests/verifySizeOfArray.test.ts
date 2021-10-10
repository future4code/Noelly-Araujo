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

        const casino : Casino = {
            name: "El Paso",
            location: LOCATION.BRA
        }

        const result = verifyAge(casino, [brazilian])
        expect(result.brazilians.allowed.length).toBeGreaterThan(0)
        expect(result.brazilians.allowed.length).toBeLessThan(2)
    })
})