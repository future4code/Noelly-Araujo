import{validateCharacter} from "../src/validateCharacter"



    test("Testing input empty", ()=>{

        const result =  validateCharacter({
            name: "",
            life: 1500,
            strength:300,
            defense: 500
        })

        expect(result).toBe(false);

    })