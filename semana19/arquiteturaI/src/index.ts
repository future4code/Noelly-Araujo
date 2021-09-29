import { app } from "./app"
import { signup } from './business/signup'

app.post('/user/signup', signup)
