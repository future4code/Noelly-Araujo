import app from "../src/app"
import login from "./endpoints/login"
import createuser from "./endpoints/signUp"

app.post("/user/signup", createuser)
app.post("/user/login", login)