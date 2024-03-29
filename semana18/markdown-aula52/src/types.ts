export type User = {
    id: string
    email: string
    password: string
    role: USER_ROLES
}

export enum USER_ROLES {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"

}

export type AuthenticationData = {
    id: string,
    role: USER_ROLES
}
