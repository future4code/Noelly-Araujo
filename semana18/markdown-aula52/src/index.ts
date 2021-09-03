import app from "./app"
import {createUser} from './endpoints/createUser'
import { deleteUser } from "./endpoints/deleteUser"
import editUser from "./endpoints/editUser"
import getUser from "./endpoints/getUser"
import login from "./endpoints/login"

app.post("/user/signup", createUser)
app.post("/user/login", login)
app.put("/user/edit/:id", editUser)
app.get("/user/profile", getUser)
app.delete('/user/delete/:id', deleteUser)
