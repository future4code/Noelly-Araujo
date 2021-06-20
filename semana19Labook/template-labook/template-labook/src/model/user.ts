export enum USER_ROLES {
    NORMAL = 'NORMAL',
    ADMIN = 'ADMIN'
 }

 export const toUserRoles = (value: string) => {
    switch (value) {
       case "NORMAL":
          return USER_ROLES.NORMAL
       case "ADMIN":
          return USER_ROLES.ADMIN
       default:
          // return USER_ROLES.NORMAL
          throw new Error("Valid user roles are 'NORMAL' and 'ADMIN'")
    }
 }

 export type authenticationData = {
    id: string,
    role: USER_ROLES
 }
 
 interface TaskManager {
    taskAmount: number;
    taskStatus: string;
 }
 
 export class User{
    //atributos da classe (acesso com this)
    public id: string;
    private name: string;
    private nickname: string;
    private email: string;
    private password: string;
    private role: USER_ROLES;
 
 
    constructor(
       //parametros do construtor
       id: string,
       name: string,
       nickname: string,
       email: string,
       password: string,
       role: USER_ROLES
    ) {
       //atribuí os valores
       this.id = id;
       this.name = name;
       this.nickname = nickname;
       this.email = email;
       this.password = password;
       this.role = role;
    }
 
 
 
 
    public getId() { return this.id };
    public getName() { return this.name };
    public getNickname() { return this.nickname };
    public getEmail() { return this.email };
    public getPasword() { return this.password };
    public getRole() { return this.role };
 
    public setId(id: string) { this.id = id}
    public setName(name: string) { this.name = name}
    public setNickname(nickname: string) { this.nickname = nickname}
    public setEmail(email: string) { this.email = email}
    public setPasword(password: string) { this.password = password}
    public setRole(role: USER_ROLES) {this.role = role }
 
 }
 
 class UserShort {
    constructor(
       public id: string,
       private name: string,
       private nickname: string,
       private email: string,
       private password: string,
       private role: USER_ROLES
    ){}
 }
 
 const userExemplo = new User("1", "yuzo", "yuzer",
    "yuzo@labenu.com", "1234", USER_ROLES.ADMIN)
 
 userExemplo.setNickname("yuzão da massa");
 
 throw new Error()
 
 export type userData = {
    name: string,
    nickname: string,
    email: string,
    password: string,
    role: USER_ROLES
 }
 
 export type user = userData & { id: string }
 
 export const toUserModel = (
    input: any
 ): user => {
    return {
       id: input.id,
       name: input.name,
       nickname: input.nickname,
       email: input.email,
       password: input.password,
       role: toUserRoles(input.role)
    }
 }
 
 export const toUserClassModel = (
    input: any
 ): User => {
    return new User(
       input.id,
       input.name,
       input.nickname,
       input.email,
       input.password,
       toUserRoles(input.role)
    )
 }