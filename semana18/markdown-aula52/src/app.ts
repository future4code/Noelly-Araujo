import express from "express"
import knex from "knex"
import {AddressInfo} from "net"

  const app = express()

app.use(express.json())

 export const server = app.listen(process.env.PORT || 3003, () => {
if(server) {
    const address = server.address() as AddressInfo
    console.log(`Server is running in http://localhost:${address.port}`)
}else {
    console.log(`Failure upon starting server.`)
}
})


export default app
