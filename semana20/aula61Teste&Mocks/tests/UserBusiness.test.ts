import { UserBusiness } from "../src/business/UserBusiness"
import { UserDatabase } from "../src/data/UserDatabase"
import hashGeneratorMock from "./mocks/hashGeneratorMock"
import idGeneratorMock from "./mocks/idGeneratorMock"
import tokenGeneratorMock from "./mocks/tokenGeneratorMock"
import userDatabaseMock from "./mocks/UserDatabaseMock"

const userBusinessMock = new UserBusiness(
    idGeneratorMock,
    hashGeneratorMock,
    userDatabaseMock as UserDatabase,
    tokenGeneratorMock

)

describe("UserBusiness", () => {
    describe("signup", () => {
        test("Show error when error name is empty", async () => {

            expect.assertions(2)
            try {
                await userBusinessMock.signup(
                    "",
                    "testeNoelly@gmail.com",
                    "teste1234",
                    "NORMAL"
                )
            } catch (error: any) {
                expect(error.statusCode).toBe(422)
                expect(error.message).toBe("Missing input")
            }
        })


        test("Invalid email", async () => {

            expect.assertions(2)

            try {
                await userBusinessMock.signup(
                    "Teste Noelly",
                    "testeemailNoelly.com",
                    "teste1234",
                    "NORMAL"
                )
            } catch (error: any) {
                expect(error.statusCode).toBe(422)
                expect(error.message).toBe("Invalid email")
            }
        })


        test(" Password is invalid", async () => {

            expect.assertions(2)

            try {
                await userBusinessMock.signup(
                    "Teste Noelly",
                    "teste@email.com",
                    "test2",
                    "NORMAL"
                )

            } catch (error: any) {
                expect(error.statusCode).toBe(422)
                expect(error.message).toBe("Invalid password")
            }
        })

        test("Invalid user role", async () => {

            expect.assertions(2)

            try {
                await userBusinessMock.signup(
                    "Teste Noelly",
                    "testeNoelly@email.com",
                    "teste1234",
                    "LALALA"
                )
            } catch (error: any) {
                expect(error.statusCode).toBe(422)
                expect(error.message).toBe("Invalid user role")
            }
        })

        test("Return acess token on sucessful signup", async () => {

            expect.assertions(1)

            try {
                const { accessToken } = await userBusinessMock.signup(
                    "Teste Noelly",
                    "testeNoelly@email.com",
                    "teste1234",
                    "NORMAL"
                )

                expect(accessToken).toBe("token_mock")
            } catch (error: any) {
                console.log(error.message)
            }
        })
    })


    describe("login", () => {
        test("Should catch error when email is not registered", async () => {

            expect.assertions(2)

            try {
                await userBusinessMock.login(
                    "test@gmail.com",
                    "rafsrtk7"
                )
            } catch (error: any) {
                expect(error.statusCode).toBe(401)
                expect(error.message).toBe("Invalid credentials")
            }
        })


        test("Should catch error when password as incorrect", async () => {

            expect.assertions(2)

            try {
                await userBusinessMock.login(
                    "astrodev@gmail.com",
                    "rafsrtk7"
                )
            } catch (error: any) {
                expect(error.statusCode).toBe(401)
                expect(error.message).toBe("Invalid credentials")
            }
        })


        test("Should return acess token sucess login", async () => {

            expect.assertions(1)
            try {
                const { accessToken } = await userBusinessMock.login(
                    "astrodev@gmail.com",
                    "astrodev123"
                )

                expect(accessToken).toBe("token_mock")

            } catch (error: any) {
                console.log(error.message)
            }
        })

    })




})