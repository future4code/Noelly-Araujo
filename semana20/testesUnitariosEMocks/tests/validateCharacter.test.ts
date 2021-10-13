import { validateCharacter } from "../src/validateCharacter"


// 2

// a)
test("Testing input empty", () => {

    const result = validateCharacter({
        name: "",
        life: 1500,
        strength: 300,
        defense: 500
    })

    expect(result).toBe(false);


})

// b)
test("Testing force of character", () => {

    const result = validateCharacter({
        name: "Leonard",
        life: 0,
        strength: 300,
        defense: 500
    })

    expect(result).toBe(false);


})

// c)
test("Testing input life as empty", () => {

    const result = validateCharacter({
        name: "Leonard",
        life: 2000,
        strength: 0,
        defense: 500
    })

    expect(result).toBe(false);


})

//d)
test("Testing defense equal 0", () => {

    const result = validateCharacter({
        name: "Leonard",
        life: 2000,
        strength: 300,
        defense: 0
    })

    expect(result).toBe(false);


})

// e

test("Testing life, strength or defense equal 0", () => {

    const result = validateCharacter({
        name: "Leonard",
        life: 0,
        strength: 0,
        defense: 0
    })

    expect(result).toBe(false);


})

//f
test("Testing user information is valid", () => {

    const result = validateCharacter({
        name: "Leonard",
        life: 1500,
        strength: 200,
        defense: 4000
    })

    expect(result).toBe(true);


})

