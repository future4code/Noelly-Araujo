import { performPurchase, User } from "../src"

test("Testing balance greater than value", () => {
    const user: User = {
        name: "Astrodev",
        balance: 100
    }

    const result = performPurchase(user, 40)

    expect(result).toEqual({
        name: "Astrodev",
        balance: 60
    })

})