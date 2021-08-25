import app from "./app"
import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser'
import login from './endpoints/login'
import { hash, compare } from "./services/hashManager";
import getAddress from "../src/endpoints/getAddress"


app.post('/user/signup', createUser)
app.post('/user/login', login)
app.put('/user/edit', editUser)



getAddress("08430380").then(console.log)