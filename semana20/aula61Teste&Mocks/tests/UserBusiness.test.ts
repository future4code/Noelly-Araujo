import { UserBusiness } from "../src/business/UserBusiness"
import { UserDatabase } from "../src/data/UserDatabase"
import { USER_ROLES } from "../src/model/User"
import hashGeneratorMock from "./mocks/hashGeneratorMock"
import idGeneratorMock from "./mocks/idGeneratorMock"
import tokenGeneratorMock from "./mocks/tokenGeneratorMock"
import UserDatabaseMock from "./mocks/UserDatabaseMock"

const userBusinessMock = new UserBusiness(
    idGeneratorMock,
    hashGeneratorMock,
    UserDatabaseMock as UserDatabase,
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
            } catch (error) {
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
            } catch (error) {
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

            } catch (error) {
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
            } catch (error) {
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
            } catch (error) {
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
            } catch (error) {
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
            } catch (error) {
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

            } catch (error) {
                console.log(error.message)
            }
        })

    })

    //a)

    describe("getUserById when the user not found", () => {
        test("User not registered", async () => {
            expect.assertions(2)
            try {
                await userBusinessMock.getUserById("1234jhd")

            } catch (error) {
                expect(error.statusCode).toBe(404)
                expect(error.message).toBe("User not found")
            }
        })

         //b)
    test("Sucess message when user id is resgistered", async () => {
        expect.assertions(2)
        try {
            const getUserById = jest.fn(
                (id: string) => userBusinessMock.getUserById(id)
            )
            const result = await getUserById("id_mock_admin")

            expect(getUserById).toHaveBeenCalledWith("id_mock_admin")
            expect(result).toEqual({
                id: "id_mock_admin",
                name: "astrodev",
                email: "astrodev@gmail.com",
                role: "ADMIN"
            })
        } catch (error) {
            console.log(error.message)
        }
    })
    })

   

//4 a)
    describe("getAllUsers", ()=> {
        test("Should catch error when role is not 'ADMIN'", async() => {
            expect.assertions(2)

            try {
                await userBusinessMock.getAllUsers(USER_ROLES.NORMAL)
            } catch (error) {
              expect(error.statusCode).toBe(401)
              expect(error.message).toBe("You must be an admin to access this endpoint")

            }
        })

        //b)
        test("Should return all users when authorized", async() => {
            expect.assertions(3)
            try {
                const getAllUsers = jest.fn(
                    (role: USER_ROLES) => userBusinessMock.getAllUsers(role)
                )

                const result = await getAllUsers(USER_ROLES.ADMIN)

                expect(getAllUsers).toHaveBeenCalledWith(USER_ROLES.ADMIN)
                expect(result).toContainEqual({
                    id: "id_mock_admin",
                    name: "astrodev",
                    email: "astrodev@gmail.com",
                    role: "ADMIN",
                })
                expect(result).toContainEqual({
                    id: "id_mock_normal",
                    name: "bananinha",
                    email: "bananinha@gmail.com",
                    role: "NORMAL",
                  })
            } catch (error) {
                console.log(error.message)

            }
        })
    })



})