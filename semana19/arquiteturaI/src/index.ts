import { app } from "./app"
import { login } from "./business/login"
import { signup } from './business/signup'

app.post('/user/signup', signup)
app.post('/user/login', login)
