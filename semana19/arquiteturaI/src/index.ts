import { app } from "./app"
import { getAllUsers } from "./business/getAllUsers"
import { login } from "./business/login"
import { deleteUser } from "./controller/deleteUser"
import { signup } from './business/signup'

app.post('/user/signup', signup)
app.post('/user/login', login)
app.get('/user/all', getAllUsers)
app.delete('/user/:id', deleteUser)