import { verifyAge } from "../src/business/verifyAge";
import { Result } from "../src/models/userCasino";
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

       const result: Result = verifyAge(casino, [brazilian])
       expect(result.brazilians.allowed).toEqual(["Josisklaiton"])
    })
})